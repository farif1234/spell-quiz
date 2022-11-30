export default async function getPronunciationLink(word, key) {
    let response = await getJson(word, key);
    if (response == "error") return "False";
    let response_json = await response.json();

    const word_id = getWordID(response_json);

    let base_filename;
    // if word does not have entry, check related words
    if (word !== word_id) {
        base_filename = checkRunOnWords(word, response_json);

        if (base_filename == "error") {
            base_filename = checkInflectionWords(word, response_json);
        }
    } else {
        base_filename = getFilename(response_json);
    }
    if (base_filename == "error") return "False";

    const subdirectory = getSubdir(word, base_filename);
    if (subdirectory == "False") return "False";

    const link =
        "https://media.merriam-webster.com/audio/prons/en/us/mp3/" +
        subdirectory +
        "/" +
        base_filename +
        ".mp3";
    console.log(link);
    return link;
}

async function getJson(word, key) {
    try {
        const api_url =
            "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
            word +
            "?key=" +
            key;
        let response = await fetch(api_url);
        return response;
    } catch (error) {
        return "error";
    }
}

function getWordID(json) {
    try {
        return json[0]["meta"]["id"].split(":")[0];
    } catch (error) {
        return "error";
    }
}

function checkRunOnWords(word, json) {
    // alert(word);
    try {
        let filename = "error";
        json[0]["uros"].forEach((di) => {
            if (di["ure"].replaceAll("*", "") == word) {
                filename = di["prs"][0]["sound"]["audio"];
            }
        });
        return filename;
    } catch (error) {
        return "error";
    }
}

function checkInflectionWords(word, json) {
    try {
        let filename = "error";
        json[0]["ins"].forEach((di) => {
            if (di["if"].replaceAll("*", "") == word) {
                filename = di["prs"][0]["sound"]["audio"];
            }
        });
        return filename;
    } catch (error) {
        return "error";
    }
}

function getFilename(json) {
    try {
        return json[0]["hwi"]["prs"][0]["sound"]["audio"];
    } catch (error) {
        return "error";
    }
}

function getSubdir(word, filename) {
    try {
        let subdir;
        if (filename.slice(0, 2) == "gg") subdir = "gg";
        else if (filename.slice(0, 3) == "bix") subdir = "bix";
        else subdir = word[0].toLowerCase();
        return subdir;
    } catch (error) {
        return "False";
    }
}
