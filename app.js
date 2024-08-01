const express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
const { encode, decode } = require('gpt-3-encoder');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { v4: uuidv4 } = require('uuid');
const FormData = require("form-data");
const axios = require("axios");
// 创建一个Express应用实例
const app = express();
// 定义端口号
// app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("欢迎来到Node.js Express应用！");
});
const crypto = require("crypto");

function generateRandomString(length = 16) {
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    const charsetLength = charset.length;

    // Generate random values using crypto module
    const randomValues = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
        // Use random values to select characters from the charset
        const randomIndex = randomValues[i] % charsetLength;
        randomString += charset[randomIndex];
    }

    return randomString;
}

// 全部变量，也就是
let accesstoken = ""
let indexaccess = 0

function getRandomInt(min, max) {
    // Math.random() 生成一个 [0, 1) 范围内的随机数
    // Math.floor() 向下取整
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 随机谷歌账户
function isJsonString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

async function getConversion(token) {
    let headers = {
        Authorization: token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
    };
    const proxyUrl = 'http://OQzXwbmh7D0tZkV:wNcbD0GSg8Qx9jj@103.229.116.151:45835';
    // 创建HTTPS代理代理
    const proxyAgent = new HttpsProxyAgent(proxyUrl);
    let uuids = uuidv4();
    return await axios
        .get(
            "https://chat.tune.app/api/new?conversation_id=" + uuids + "&model=11&currency=USD",
            {
                headers: headers,
                HttpsProxyAgent: proxyAgent
            },
        )
        .then((res_data) => {
            if (res_data.status === 200) {
                return uuids
            }
        }).catch((err) => {
            console.log("errno")
        })
}
// async function deleteCon(token) {

function findDifference(str1, str2) {
    // 检查第一个字符串是否是第二个字符串的一部分
    if (str2.startsWith(str1)) {
        // 如果是，返回第二个字符串的不同部分
        return str2.slice(str1.length);
    } else {
        // 如果不是，返回一个提示信息或者处理其他逻辑
        return "";
    }
}
async function formatMessages(messages) {
    // 过滤掉 role 为 system 的消息
    const filteredMessages = messages.filter(
        (message) => message.role !== "system",
    );

    // 格式化剩余的消息
    const formattedMessages = filteredMessages.map(
        (message) => `${message.role}: ${message.content}`,
    );

    // 拼接所有消息
    return formattedMessages.join("\n");
}

function getLastSystemContent(data) {
    let lastSystemMessage = null;
    for (let message of data.messages) {
        if (message.role === "system") {
            lastSystemMessage = message.content;
        }
    }
    return lastSystemMessage; // Returns the last system message, or null if none found
}

// 开始post请求数据空间

function findDifference(str1, str2) {
    // 检查第一个字符串是否是第二个字符串的一部分
    if (str2.startsWith(str1)) {
        // 如果是，返回第二个字符串的不同部分
        return str2.slice(str1.length);
    } else {
        // 如果不是，返回一个提示信息或者处理其他逻辑
        return "";
    }
}
function generateRandomNumber() {
    // 生成一个随机数，范围在 0 到 1 之间
    let randomNumber = Math.random();

    // 将随机数转换为字符串，并保留16位小数
    let formattedNumber = randomNumber.toFixed(18).slice(2);

    // 返回格式化后的随机数
    return `0.${formattedNumber}`;
}
async function createNewToken() {
    let form = new FormData();
    let stra = generateRandomString();
    // 添加字段
    form.append("1_name", stra);
    form.append("1_slug", stra);
    form.append("0", '["$K1"]');
    let headers = {
        Cookie: "_gcl_au=1.1.830148624.1720594403; _ga=GA1.1.1824645177.1720594403; __fx=0ebac359-8e36-4c71-aa85-da841ec9c7bc; __Host-next-auth.csrf-token=8d070277b4e1352c012982e4fa6fd26416590525202bb29b93777b3177d85d50%7C4525bb697b3677bd169a1098893604c3061e229f22c3f28d85de11ecf4d082ca; fx_referrer=; fx_info={%22source%22:%22direct%22%2C%22medium%22:%22direct%22%2C%22term%22:null%2C%22content%22:null%2C%22campaign%22:null%2C%22segment%22:null%2C%22referrer%22:%22%22%2C%22pageUrl%22:%22https://app.teamai.com/login%22%2C%22fx_matchtype%22:null%2C%22fx_network%22:null%2C%22fx_creative%22:null%2C%22fx_keyword%22:null%2C%22fx_placement%22:null%2C%22fx_aceid%22:null%2C%22fx_adposition%22:null%2C%22utm_source%22:null%2C%22utm_medium%22:null%2C%22utm_segment%22:null%2C%22utm_campaign%22:null%2C%22utm_term%22:null%2C%22gclid%22:null%2C%22gbraid%22:null%2C%22wbraid%22:null%2C%22msclkid%22:null%2C%22fbclid%22:null%2C%22twclid%22:null%2C%22li_fat_id%22:null%2C%22epik%22:null%2C%22pp%22:null%2C%22ip%22:%22172.104.120.229%22%2C%22location%22:{%22country%22:%22JP%22%2C%22region%22:%2213%22%2C%22city%22:%22?%22%2C%22cityLatLong%22:[%220.000000%22%2C%220.000000%22]%2C%22userIP%22:%22172.104.120.229%22}%2C%22landingPage%22:%22/login%22}; intercom-id-slb2j39i=e99c5083-c7d1-4860-b326-c78cf6e15453; intercom-device-id-slb2j39i=0aba2d9a-3593-43a1-8ee8-d9cf5fdec85a; rl_anonymous_id=RS_ENC_v3_IjMzZWY1Mzg2LTUwNGQtNDJiNi1hM2QyLWFkNzNiZTg4MjIyMiI%3D; rl_page_init_referrer=RS_ENC_v3_Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS8i; rl_page_init_referring_domain=RS_ENC_v3_ImFjY291bnRzLmdvb2dsZS5jb20i; mktz_sess=sess.2.2491613587.1720683627113; _dd_s=logs=1&id=8eef9658-36d7-4bca-a9ef-4b6db2ee4652&created=1720683627339&expire=1720684527339&lock=837d4ca4-4c40-4fde-a9ae-6589f7a0a3b6; _dd_s=logs=1&id=8eef9658-36d7-4bca-a9ef-4b6db2ee4652&created=1720683627339&expire=1720684527339&lock=58d32df9-a3ab-4321-82f3-9ad71651460e; __Secure-next-auth.callback-url=https%3A%2F%2Fapp.teamai.com%2Flogin; rl_user_id=RS_ENC_v3_IjMwOHQ1bjd4QG5xbW8uY29tIg%3D%3D; rl_trait=RS_ENC_v3_eyJlbWFpbCI6IjMwOHQ1bjd4QG5xbW8uY29tIn0%3D; mktz_client=%7B%22is_returning%22%3A1%2C%22uid%22%3A%225373055641635875752%22%2C%22session%22%3A%22sess.2.2491613587.1720683627113%22%2C%22views%22%3A9%2C%22referer_url%22%3A%22https%3A//efr.teamai.com/chats%22%2C%22referer_domain%22%3A%22efr.teamai.com%22%2C%22referer_type%22%3A%22refferal%22%2C%22visits%22%3A2%2C%22landing%22%3A%22https%3A//app.teamai.com/logout%22%2C%22enter_at%22%3A%222024-07-11%7C15%3A40%3A27%22%2C%22first_visit%22%3A%222024-07-10%7C14%3A53%3A23%22%2C%22last_visit%22%3A%222024-07-10%7C14%3A53%3A23%22%2C%22last_variation%22%3A%22%22%2C%22utm_source%22%3Afalse%2C%22utm_term%22%3Afalse%2C%22utm_campaign%22%3Afalse%2C%22utm_content%22%3Afalse%2C%22utm_medium%22%3Afalse%2C%22consent%22%3A%22%22%2C%22device_type%22%3A%22desktop%22%2C%22id_website%22%3A%2224525%22%7D; intercom-session-slb2j39i=cXlla2xjVTJPQ3JOcXUyaGFCZTlmVU5XbVdYRTkwSHV4ZDhFVGVtcGhJa2QzTmRDTHpmSkxvc2JINTM3c3V3eC0tdElGUFNxSVd0NzR0REkxSmJSaXNyQT09--9802489971cfe9df5e8eb252a2ea27b2772d9e47; rl_session=RS_ENC_v3_eyJpZCI6MTcyMDY4Mzc5NDMxOCwiZXhwaXJlc0F0IjoxNzIwNjg1NjAxNjU0LCJ0aW1lb3V0IjoxODAwMDAwLCJhdXRvVHJhY2siOnRydWUsInNlc3Npb25TdGFydCI6ZmFsc2V9; _ga_S6238N6JDN=GS1.1.1720681921.2.1.1720683803.0.0.0; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..1Mh5tzvRqeCL4hD9.6n3QJReVT_iJcNbb6HDhUGoysoR-wiFrO4M3S2rSu2idNyrb4r5PS4RQAHAEIc8WUSRB0pOLSrOOkGW0UwtO0d0ucvt9aAB_2usRrXU--PCcOszxUSV5jRz9UJZdpj29GHg1x8KcCga8ygsp3zw2x7qZH_zrABSWxPtAg1qzvwGwyJ7XrluE1XRwH9zVpqCgNTBKFpo1wKw_LDdopNBvFQEVHiva9UAWzg28XSEm2v6-yIp3yn5epH-VnEc-50VCsMdqBPRA-u-yCYT9PT9-vV4UDcCUswz_dA1Bn9rY7H0P5TNGJtj5Fk_EeW6fIeXB7WFMIXuh4Wn89x5B_VX99wvo7KiddfViNi2K7SXovYOefsprgRyHFNK3gYgFjsPyQkNJVW0kFTIa5AlLlBRHlNlO6R82TCNIriVBpXtALghOTlGCFP7gPll1ATMHu1kuWMIBIfFKIEg0DI1XRlR2pCJnumSPqxMyuA9NbZbeZxvHSXR3ZdEIVg_F9gn-BqClwFWUxBSYb9HLwEwpsMUtkb9dIwpfCo4pDHlnNFgWkHKs9GazdA9sMyALu854XrR27rYIF5ZHGIz_obf-M2P1WODe0Tz1z4DjLAfPt1TRTJxfm1miXp1cYbvz1VQ9s0ZK8YNWOG9CjIuoi1w5WRgr3W5AT7kUap1KwyM2lnZ0p9hwUg2pbwPymrEwbhwi1KJDMFk35v2PbEP1etG92KqpzXxMUpoOmjkcv8zODHgBOmcVeBC5EcCGnjoAlsr03FQ6Pk_foPOgRKGCU56HNGLiXEzHH2Q25fAK15AG5QeLcvsN4_CYkmydIlil18X7RJlpQj8tz1HkD75gT9ne0sXkOi3tNVQlAcL8AO5UHcEw7aGUv9aGAz02EN_2eCtmjIAyGxoqE9UdZTZzRPGzfJc1UHJ3YqAdfSsTaMWQ64V0oEcjYIv3XgXfdOxTehqiXb5c_nU5IQCWXhCV3vBRsnXjBzIWEc_gKWL9p5EQ7782vPVh9ha-KGkclWBGoozhxr0ADxUPtEAKmvCzO4icXbCIknxNwTE1Hyi3oQzxrSy9tmeSeQT1uiiYhY1J2EIjdPsnU7mMcxGwVTmkQLHdnWgnx9TzAyuJFRoK_lnyknSSXi00MmRrjdiBmz0eYUMhDr1t-s4WArHUUl7786858NpUi4EkXqKtZlJgInswbJCCdSd_-Gzulq7bxTTvojjWqFcTZz5MogZi_nTpWb_sanVx523wdz33tapgVBpDOvZuPDA75zcRgQdGkfJYH0Fa9E55e6yMljPHS0A9Wz28vkd4015bdQ1HvBUvV-guLEGBOZLVm5ZP9kiMIrp7ukEhRCu23xiDTQLwLD8G9c49st04ieW4Ty_VXJeUKAyr1CqMDXhnbl6Y.RtyjCBGiejoas65u6wKVpQ",
        "Next-Action": "e461677c758915ac521cf825b231bf55eb4c0ccf",
        "Next-Router-State-Tree":
            "%5B%22%22%2C%7B%22children%22%3A%5B%22app%22%2C%7B%22children%22%3A%5B%22(app)%22%2C%7B%22children%22%3A%5B%22onboarding%22%2C%7B%22children%22%3A%5B%22workspace%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
        //Priority:u=1, i
        Referer: "https://app.teamai.com/onboarding/workspace",
        ...form.getHeaders(),
    };
    // 创建一个 FormData 对象
    return await axios
        .post("https://app.teamai.com/onboarding/workspace", form, {
            headers: headers,
        })
        .then((res_data) => {
            accesstoken = res_data.data
            .split('"workspace":{"id":"')[1]
            .split('","name":')[0]
        })
        .catch((err) => {
            console.log("errno");
        });
}
createNewToken()
function extractLastImageUrl(dataArray) {
    // Initialize an empty array to store the last URLs
    const urls = [];
  
    // Iterate through the dataArray
    dataArray.forEach(data => {
      if (Array.isArray(data.content)) {
        // Find the last item with type 'image_url'
        const lastImageUrl = data.content
          .reverse()
          .find(item => item.type === 'image_url' && item.image_url && item.image_url.url);
  
        // If found, push the URL to the urls array
        if (lastImageUrl) {
          urls.push(lastImageUrl.image_url.url);
        }
      }
    });
  
    return urls;
  }
  function extractTextContent(dataArray) {
    // Initialize an empty array to store the new objects
    const newArray = [];
  
    // Iterate through the dataArray
    dataArray.forEach(data => {
      // Initialize a new object with the same role
      const newObject = { role: data.role, content: '' };
  
      // Check if content is an array
      if (Array.isArray(data.content)) {
        // Find the item with type 'text'
        const textItem = data.content.find(item => item.type === 'text' && item.text);
  
        // If found, set the content to the text value
        if (textItem) {
          newObject.content = textItem.text;
        }
      } else {
        // If content is not an array, copy the original content
        newObject.content = data.content;
      }
  
      // Push the new object to the newArray
      newArray.push(newObject);
    });
  
    return newArray;
  }
// 开始处理数据
app.post("/v1/chat/completions", async (req, res) => {
    let databody = req.body;
    let imagesa = extractLastImageUrl(databody.messages)
    databody.messages = extractTextContent(databody.messages)
    let index = 0
    if(accesstoken == "" || indexaccess >= 420) {
        await createNewToken()
        indexaccess = 0
    }
    databody.messages.forEach(element => {
        if (element && element != "" && element != undefined && !databody.model.includes('vision')) {
            index += encode(JSON.stringify(element.content)).length;
        }
    });
    let model = "openai/gpt-3.5-turbo"
    if(databody.model == "gpt-4o" || databody.model == "gpt-4o-2024-05-13") {
        model = "openai/gpt-4o-mini"
    }else if(databody.model.includes("gpt-4") && !databody.model.includes("4o")) {
        model = "openai/gpt-4o-mini"
    }else if(databody.model.includes("opus")) {
        model = "anthropic/claude-3-opus"
        indexaccess = indexaccess + 30
    }else if(databody.model.includes("sonnet")) {
        model = "anthropic/claude-3.5-sonnet"
        indexaccess = indexaccess + 15
    }else if(databody.model.includes("gemini")) {
        model = "google/gemini-flash-1.5"
        indexaccess ++ 
    }else {
        indexaccess ++
    }
    let question1 = await formatMessages(databody.messages);
    let firstSystemContent = getLastSystemContent(databody);
    let systemcontent = "";
    if (firstSystemContent != null) {
        systemcontent =
            "Please strictly follow your default identity to answer user questions. The identity you assume is: " +
            firstSystemContent;
    }
    let question = `system: You need to answer user questions, no need to precede the answer with assistant,The language of the reply is determined according to the language of the user's question. ${systemcontent} \n ${question1}`;
    const proxyUrl = 'http://lC81fjl9SvCKDtj:JqMKe49mbzHchxs@103.229.116.121:45377';
    // 创建HTTPS代理代理
    const proxyAgent = new HttpsProxyAgent(proxyUrl);
    const options = {
        url:
            "https://teamai-node-api-suawsqbyqq-uc.a.run.app/v1/completion/chat-messages",
        method: "POST",
        headers: {
            // "Cookie":"__cf_bm=X_hzQIZFIOtRcCxwKO7.AUrS1HKCnVb5roLcfjKIFhc-1716785138-1.0.1.1-KaV6q63f0rFn.yTFEQJpdkO_7fsscGlYPld0rs4H_m0VcPfVku3UxZczKRgJbZGFKUmqUVRZB2eurh13pvidlw",
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
                'Content-Type': 'application/json; charset=utf-8'
        },
        timeout: 15000,
        json: {
            "visionImages": imagesa,
            "query": question,
            "workspaceId": accesstoken,
            "regenerate": false,
            "metadata": {
                "user": {
                    "id": ""
                }
            },
            "configuration": {
                "model": model,
                "conversationStyle": "balanced",
                "selectedDatastores": [],
                "selectedCollections": [],
                "config": {
                    "domainSearchUrl": "",
                    "powerUps": [],
                    "customPlugins": []
                }
            },
            "staging": false
        }
    };
    let nonstr = "";
    let linstr = "";
    // getPOST(formatted, token)
    const proxyReq = request(options);
    proxyReq.on("response", function (response) {
        response.on("data", (chunk) => {
            let message = `${chunk.toString('utf8')}`;
             if (message.includes("teamai")) {
                return
            }
           message = message.split(/data: /)
        
            message.forEach((item) => {
                if(isJsonString(item) && item.includes("output")) {
                    let jsonlINs = (JSON.parse(item)).output;
                    sendstr = findDifference(linstr,jsonlINs)
                    linstr = jsonlINs;
                    nonstr += sendstr;
                    if (databody.stream == true) {
                        res.write(
                            `data: {"id":"chatcmpl-9709rQdvMSIASrvcWGVsJMQouP2UV","object":"chat.completion.chunk","created":${Math.floor(Date.now() / 1000)},"model":"${databody.model}","system_fingerprint":"fp_3bc1b5746c","choices":[{"index":0,"delta":{"content":${JSON.stringify(sendstr)}},"logprobs":null,"finish_reason":null}]} \n\n`,
                        );
                    }
                }
            });
        });
        response.on("end", () => {
                if (nonstr == "" || nonstr == null) {
                    nonstr = "1"
                }
                if (!databody.stream || databody.stream != true) {
                    res.json({
                        id: "chatcmpl-8Tos2WZQfPdBaccpgMkasGxtQfJtq",
                        object: "chat.completion",
                        created: Math.floor(Date.now() / 1000),
                        model: databody.model,
                        choices: [
                            {
                                index: 0,
                                message: {
                                    role: "assistant",
                                    content: nonstr,
                                },
                                finish_reason: "stop",
                            },
                        ],
                        usage: {
                            prompt_tokens: index,
                            completion_tokens: encode(nonstr).length,
                            total_tokens: index + encode(nonstr).length,
                        },
                        system_fingerprint: null,
                    });
                    res.end();
                    return;
                }
                res.write(
                    `data: {"id":"chatcmpl-89CvUKf0C36wUexKrTrmhf5tTEnEw","object":"chat.completion.chunk","model":"${databody.model}","created":${Math.floor(
                        Date.now() / 1000,
                    )},"choices":[{"index":0,"delta":{},"finish_reason":"stop"}]}\n\n`,
                );
                res.write(`data: [DONE]\n`);
                res.end();
        });
    });
    proxyReq.on("error", function (error) {
        // 在这里打印错误日志
        // 向客户端发送错误响应
        res.status(500).send("代理请求出错");
    });
});

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
