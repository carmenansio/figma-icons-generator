export type IconsId =
  | "icon_account"
  | "icon_attachment"
  | "icon_bold"
  | "icon_code"
  | "icon_command-key"
  | "icon_delete"
  | "icon_document"
  | "icon_download"
  | "icon_duplicate"
  | "icon_heading"
  | "icon_help"
  | "icon_history"
  | "icon_home"
  | "icon_italic"
  | "icon_keyboard"
  | "icon_log-out"
  | "icon_new-document"
  | "icon_new-package"
  | "icon_option-key"
  | "icon_return-key"
  | "icon_run-code"
  | "icon_search"
  | "icon_settings"
  | "icon_text";

export type IconsKey =
  | "IconAccount"
  | "IconAttachment"
  | "IconBold"
  | "IconCode"
  | "IconCommandKey"
  | "IconDelete"
  | "IconDocument"
  | "IconDownload"
  | "IconDuplicate"
  | "IconHeading"
  | "IconHelp"
  | "IconHistory"
  | "IconHome"
  | "IconItalic"
  | "IconKeyboard"
  | "IconLogOut"
  | "IconNewDocument"
  | "IconNewPackage"
  | "IconOptionKey"
  | "IconReturnKey"
  | "IconRunCode"
  | "IconSearch"
  | "IconSettings"
  | "IconText";

export enum Icons {
  IconAccount = "icon_account",
  IconAttachment = "icon_attachment",
  IconBold = "icon_bold",
  IconCode = "icon_code",
  IconCommandKey = "icon_command-key",
  IconDelete = "icon_delete",
  IconDocument = "icon_document",
  IconDownload = "icon_download",
  IconDuplicate = "icon_duplicate",
  IconHeading = "icon_heading",
  IconHelp = "icon_help",
  IconHistory = "icon_history",
  IconHome = "icon_home",
  IconItalic = "icon_italic",
  IconKeyboard = "icon_keyboard",
  IconLogOut = "icon_log-out",
  IconNewDocument = "icon_new-document",
  IconNewPackage = "icon_new-package",
  IconOptionKey = "icon_option-key",
  IconReturnKey = "icon_return-key",
  IconRunCode = "icon_run-code",
  IconSearch = "icon_search",
  IconSettings = "icon_settings",
  IconText = "icon_text",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.IconAccount]: "61697",
  [Icons.IconAttachment]: "61698",
  [Icons.IconBold]: "61699",
  [Icons.IconCode]: "61700",
  [Icons.IconCommandKey]: "61701",
  [Icons.IconDelete]: "61702",
  [Icons.IconDocument]: "61703",
  [Icons.IconDownload]: "61704",
  [Icons.IconDuplicate]: "61705",
  [Icons.IconHeading]: "61706",
  [Icons.IconHelp]: "61707",
  [Icons.IconHistory]: "61708",
  [Icons.IconHome]: "61709",
  [Icons.IconItalic]: "61710",
  [Icons.IconKeyboard]: "61711",
  [Icons.IconLogOut]: "61712",
  [Icons.IconNewDocument]: "61713",
  [Icons.IconNewPackage]: "61714",
  [Icons.IconOptionKey]: "61715",
  [Icons.IconReturnKey]: "61716",
  [Icons.IconRunCode]: "61717",
  [Icons.IconSearch]: "61718",
  [Icons.IconSettings]: "61719",
  [Icons.IconText]: "61720",
};
