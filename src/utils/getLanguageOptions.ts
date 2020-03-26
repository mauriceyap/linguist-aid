import ISO6391 from "iso-639-1";

import excludedLanguages from "../const/excludedLanguages";

type TLanguageOptions = Record<
  string,
  {
    displayName: string;
    lowerCaseSearchTerms: string[];
  }
>;

const getLanguageOptions = (): TLanguageOptions =>
  ISO6391.getAllCodes()
    .filter(code => !excludedLanguages.includes(code))
    .reduce(
      (acc, code) => {
        const englishName = ISO6391.getName(code);
        const nativeName = ISO6391.getNativeName(code);
        return {
          ...acc,
          [code]: {
            displayName: `${englishName} - ${nativeName}`,
            lowerCaseSearchTerms: [
              englishName.toLowerCase(),
              nativeName.toLowerCase()
            ]
          }
        };
      },
      {
        "custom-bsl": {
          displayName: "British Sign Language (BSL)",
          lowerCaseSearchTerms: ["british sign language", "bsl"]
        }
      } as TLanguageOptions
    );

export default getLanguageOptions;
