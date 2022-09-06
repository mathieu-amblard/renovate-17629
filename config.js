module.exports = {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "requireConfig": "ignored",
    "platform": "github",
    "repositories": ["mathieu-amblard/renovate-17629-test"],
    "autodiscover": false,
    "enabledManagers": ["maven"],
    "packageRules": [
        {
            "groupName": "maven",
            "matchDatasources": ["maven"],
            "separateMajorMinor": true,
            "separateMinorPatch": true,
            "fetchReleaseNotes": false
        },
        {
            "groupName": "maven",
            "matchPackagePrefixes": ["org.springframework:", "org.springframework.boot:"],
            "matchUpdateTypes": ["major", "minor"],
            "enabled": false
        }
    ]
};