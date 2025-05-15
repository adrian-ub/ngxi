import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiAddFriendsFilledIcon],svg[weui-add-friends-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.75 10.75V8h1.5v2.75H23v1.5h-2.75V15h-1.5v-2.75H16v-1.5zm-10.918 1.6C7.096 11.478 6.5 9.85 6.5 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783v.687a1 1 0 0 1-1.001.998H2a1 1 0 0 1-1-.998v-.687c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99z"></svg:path>`,
})
export class WeuiAddFriendsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAdd2FilledIcon],svg[weui-add2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 11.25H7v1.5h4.25V17h1.5v-4.25H17v-1.5h-4.25V7h-1.5zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class WeuiAdd2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAddFilledIcon],svg[weui-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2z"></svg:path>`,
})
export class WeuiAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAlbumFilledIcon],svg[weui-album-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.5 14.136V5.5h-17v8.35l4.7-3.8c.462-.375 1.205-.357 1.65.035l4.477 3.933l2.282-1.94c.462-.394 1.198-.386 1.646.017zM2.992 4h18.016c.537 0 .992.481.992 1.075v13.85c0 .596-.444 1.075-.992 1.075H2.992C2.455 20 2 19.519 2 18.925V5.075C2 4.479 2.444 4 2.992 4"></svg:path>`,
})
export class WeuiAlbumFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAtFilledIcon],svg[weui-at-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.465 9.145c-1.242 0-1.98 1.02-1.98 2.73c0 1.7.738 2.73 1.968 2.73c1.266 0 2.05-1.043 2.05-2.73s-.784-2.73-2.038-2.73m.387-7.125c5.554 0 9.457 3.492 9.457 8.707c0 3.691-1.747 6.07-4.606 6.07c-1.453 0-2.566-.703-2.824-1.84h-.164c-.48 1.172-1.465 1.805-2.824 1.805c-2.438 0-4.067-1.98-4.067-4.957c0-2.848 1.606-4.793 3.95-4.793c1.265 0 2.32.633 2.777 1.664h.164V7.27h2.379v6.27c0 .808.375 1.323 1.113 1.323c1.148 0 1.945-1.465 1.945-3.96c0-4.266-2.941-7.02-7.382-7.02c-4.512 0-7.676 3.258-7.676 7.969c0 4.933 3.293 7.816 8.12 7.816c1.255 0 2.532-.164 3.2-.41v1.875c-.914.27-2.11.433-3.375.433c-5.93 0-10.101-3.714-10.101-9.773c0-5.813 4.066-9.773 9.914-9.773"></svg:path>`,
})
export class WeuiAtFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBackFilledIcon],svg[weui-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"></svg:path>`,
})
export class WeuiBackFilledIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiArrowFilledIcon],svg[weui-arrow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></svg:path>`,
})
export class WeuiArrowFilledIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBack2FilledIcon],svg[weui-back2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m1.999-6.563L10.68 12L14 8.562L12.953 7.5L9.29 11.277a1.045 1.045 0 0 0 0 1.446l3.663 3.777z"></svg:path>`,
})
export class WeuiBack2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBellringOffFilledIcon],svg[weui-bellring-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.453 16.332l3.639 3.639l-1.06 1.06L4.06 4.061L5.12 3l2.697 2.697a6 6 0 0 1 2.21-1.365a2 2 0 1 1 3.945 0A6 6 0 0 1 18 10v4q0 1.166.453 2.332M17.88 20H5.187a1 1 0 0 1-.806-1.592Q6 16.203 6 14v-4c0-.572.08-1.125.23-1.65L17.878 20zM11 20h2v.2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class WeuiBellringOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBellringOnFilledIcon],svg[weui-bellring-on-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 20H5.187a1 1 0 0 1-.806-1.592Q6 16.203 6 14v-4a6 6 0 0 1 4.027-5.668a2 2 0 1 1 3.945 0A6 6 0 0 1 18 10v4q0 2.205 1.62 4.408A1 1 0 0 1 18.812 20H13v.2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class WeuiBellringOnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCameraFilledIcon],svg[weui-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.732 4a.5.5 0 0 1 .416.223L17 7h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4l1.852-2.777A.5.5 0 0 1 9.268 4zM12 16.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class WeuiCameraFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCellphoneFilledIcon],svg[weui-cellphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm7 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class WeuiCellphoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiClipFilledIcon],svg[weui-clip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 18H7a1 1 0 0 1-1-1V8H3V6h3V3h2v3h9a1 1 0 0 1 1 1v9h3v2h-3v3h-2zm0-2V8H8v8z"></svg:path>`,
})
export class WeuiClipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCloseFilledIcon],svg[weui-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 10.586l5.657-5.657l1.414 1.414L13.414 12l5.657 5.657l-1.414 1.414L12 13.414l-5.657 5.657l-1.414-1.414L10.586 12L4.929 6.343L6.343 4.93z"></svg:path>`,
})
export class WeuiCloseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiClose2FilledIcon],svg[weui-close2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.06 12l3.006-3.005l-1.06-1.06L12 10.938L8.995 7.934l-1.06 1.06L10.938 12l-3.005 3.005l1.06 1.06L12 13.062l3.005 3.005l1.06-1.06L13.062 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class WeuiClose2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCommentFilledIcon],svg[weui-comment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11 19l-2.293 2.293A1 1 0 0 1 7 20.586V19H3.5A1.5 1.5 0 0 1 2 17.5v-12A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v12a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class WeuiCommentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiContactsFilledIcon],svg[weui-contacts-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C7.096 11.478 6.5 9.85 6.5 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m19-5.5h3V16h-3zm-2-3h5V13h-5zm-2-3h7V10h-7z"></svg:path>`,
})
export class WeuiContactsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCopyFilledIcon],svg[weui-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.6 3.299V8c0 .22.18.4.4.4h4.703zM5.996 2h8.002L20 8v13.001a.996.996 0 0 1-.996.999H5.996A1 1 0 0 1 5 21.001V3c0-.554.446-1 .996-1"></svg:path>`,
})
export class WeuiCopyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDeleteFilledIcon],svg[weui-delete-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.412 6.5l-.801 13.617A2 2 0 0 1 15.614 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5H3.5v-1A.5.5 0 0 1 4 5h16a.5.5 0 0 1 .5.5v1zM10 2.5h4a.5.5 0 0 1 .5.5v1h-5V3a.5.5 0 0 1 .5-.5M9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9z"></svg:path>`,
})
export class WeuiDeleteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDeleteOnFilledIcon],svg[weui-delete-on-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.774 5L3.758 3.94l.174-.986a.5.5 0 0 1 .58-.405L18.411 5h.088h-.087l1.855.327a.5.5 0 0 1 .406.58l-.174.984l-2.09-.368l-.8 13.594A2 2 0 0 1 15.615 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5h12.69zH5.5zM9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9zm-2.646-7.871l3.94.694a.5.5 0 0 1 .405.58l-.174.984l-4.924-.868l.174-.985a.5.5 0 0 1 .58-.405z"></svg:path>`,
})
export class WeuiDeleteOnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDiscoverFilledIcon],svg[weui-discover-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.396-11.396l-2.957 5.749l5.75-2.957l2.956-5.749l-5.75 2.957z"></svg:path>`,
})
export class WeuiDiscoverFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDisplayFilledIcon],svg[weui-display-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 16.05c0-.414.344-.75.753-.75h6.494a.75.75 0 0 1 .753.75v.75H8z"></svg:path>`,
})
export class WeuiDisplayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDoneFilledIcon],svg[weui-done-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.657 18.435L3 12.778l1.414-1.414l4.95 4.95L20.678 5l1.414 1.414l-12.02 12.021a1 1 0 0 1-1.415 0"></svg:path>`,
})
export class WeuiDoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDone2FilledIcon],svg[weui-done2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z"></svg:path>`,
})
export class WeuiDone2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDownloadFilledIcon],svg[weui-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.25 12.04l-1.72-1.72l-1.06 1.06l2.828 2.83a1 1 0 0 0 1.414-.001l2.828-2.828l-1.06-1.061l-1.73 1.73V7h-1.5zm0-5.04V2h1.5v5h6.251c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7z"></svg:path>`,
})
export class WeuiDownloadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiEmailFilledIcon],svg[weui-email-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m16.031 1.914l-6.875 5.5a.25.25 0 0 1-.312 0l-6.875-5.5l-.938 1.172l6.876 5.5a1.75 1.75 0 0 0 2.186 0l6.876-5.5z"></svg:path>`,
})
export class WeuiEmailFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiErrorFilledIcon],svg[weui-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.763-15.864l.11 7.596h1.305l.11-7.596zm.759 10.967c.512 0 .902-.383.902-.882c0-.5-.39-.882-.902-.882a.88.88 0 0 0-.896.882c0 .499.396.882.896.882"></svg:path>`,
})
export class WeuiErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiEyesOffFilledIcon],svg[weui-eyes-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.922 16.8l3.17 3.17l-1.06 1.061L4.06 4.061L5.12 3l2.74 2.738A11.9 11.9 0 0 1 12 5c4.808 0 8.972 2.848 11 7a12.66 12.66 0 0 1-4.078 4.8m-8.098-8.097l4.473 4.473a3.5 3.5 0 0 0-4.474-4.474zm5.317 9.56A11.9 11.9 0 0 1 12 19c-4.808 0-8.972-2.848-11-7a12.66 12.66 0 0 1 4.078-4.8l3.625 3.624a3.5 3.5 0 0 0 4.474 4.474l2.964 2.964z"></svg:path>`,
})
export class WeuiEyesOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiEyesOnFilledIcon],svg[weui-eyes-on-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12c2.028-4.152 6.192-7 11-7s8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7m11 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class WeuiEyesOnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiFolderFilledIcon],svg[weui-folder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h5.75l1.875 1.5H21a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m.5 5v1.5h17V9z"></svg:path>`,
})
export class WeuiFolderFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiGroupDetailFilledIcon],svg[weui-group-detail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.111 4.002c1.809.058 3.257 1.529 3.257 3.332v1.424c0 .95-.504 2.311-1.121 3.035l-.305.357c-.496.582-.341 1.324.353 1.659l4.767 2.3c.518.25.938.912.938 1.487v.572a.84.84 0 0 1-.843.832h-.674c-.122-1.16-.902-2.31-1.94-2.817l-5.416-2.642l.188-.222C15.276 12.179 16 10.202 16 8.71V7a5.47 5.47 0 0 0-.889-2.998m-7.28 8.348C7.097 11.478 6.5 9.85 6.5 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783v.687a1 1 0 0 1-1.001.998H2a1 1 0 0 1-1-.998v-.687c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429z"></svg:path>`,
})
export class WeuiGroupDetailFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiHelpFilledIcon],svg[weui-help-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M9 9.782h1.606c.055-.847.623-1.387 1.504-1.387c.862 0 1.436.526 1.436 1.25c0 .677-.287 1.046-1.135 1.56c-.943.553-1.34 1.168-1.278 2.18l.007.485h1.586v-.396c0-.684.253-1.04 1.148-1.559c.93-.554 1.45-1.285 1.45-2.331C15.323 8.08 14.071 7 12.198 7C10.17 7 9.055 8.176 9 9.782m2.953 7.301c.554 0 .991-.43.991-.97s-.437-.965-.99-.965c-.555 0-.999.424-.999.964s.444.971.998.971"></svg:path>`,
})
export class WeuiHelpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiHomeFilledIcon],svg[weui-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 21v-4h-3v4H7a1 1 0 0 1-1-1v-6H3.414a1 1 0 0 1-.707-1.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586A1 1 0 0 1 20.586 14H18v6a1 1 0 0 1-1 1z"></svg:path>`,
})
export class WeuiHomeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiImacFilledIcon],svg[weui-imac-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.155 19l.622 1.84a.5.5 0 0 1-.474.66H8.697a.5.5 0 0 1-.474-.66L8.845 19H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zm5.345-3h-17v1.5h17z"></svg:path>`,
})
export class WeuiImacFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiInfoFilledIcon],svg[weui-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.75-12v7h1.5v-7zM12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class WeuiInfoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiKeyboardFilledIcon],svg[weui-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M6.5 8v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm-9 3v2h2v-2zm3 0v2h2v-2zM9 15v2h6v-2zm3.5-4v2h2v-2zm3 0v2h2v-2z"></svg:path>`,
})
export class WeuiKeyboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLikeFilledIcon],svg[weui-like-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z"></svg:path>`,
})
export class WeuiLikeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLinkFilledIcon],svg[weui-link-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17.657 12l-1.414-1.414l2.121-2.122a2 2 0 1 0-2.828-2.828l-4.243 4.243a2 2 0 0 0 0 2.828l-1.414 1.414a4 4 0 0 1 0-5.657l4.242-4.242a4 4 0 0 1 5.657 5.657zM6.343 12l1.414 1.414l-2.121 2.122a2 2 0 1 0 2.828 2.828l4.243-4.243a2 2 0 0 0 0-2.828l1.414-1.414a4 4 0 0 1 0 5.657L9.88 19.778a4 4 0 1 1-5.657-5.657z"></svg:path>`,
})
export class WeuiLinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLocationFilledIcon],svg[weui-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.262 22.134S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class WeuiLocationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLockFilledIcon],svg[weui-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9H19a1 1 0 0 1 1 .999V21a.997.997 0 0 1-1 1H5a1 1 0 0 1-1-.999V10a.997.997 0 0 1 1-1zM9 9h6V6.5a3 3 0 0 0-6 0zm2.4 6.875V18h1.2v-2.125a1.5 1.5 0 1 0-1.2 0"></svg:path>`,
})
export class WeuiLockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMaxWindowFilledIcon],svg[weui-max-window-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 15v5a1 1 0 0 1-1 1h-5v-2h4v-4zM9 3v2H5v4H3V4a1 1 0 0 1 1-1zm8.584 2H15V3h5a1 1 0 0 1 1 1v5h-2V6.414l-4.366 4.364l-1.414-1.414zM6.416 18.998H9v2H4a1 1 0 0 1-1-1v-5h2v2.587l4.366-4.365l1.414 1.414z"></svg:path>`,
})
export class WeuiMaxWindowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMeFilledIcon],svg[weui-me-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C8.596 11.478 8 9.85 8 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1"></svg:path>`,
})
export class WeuiMeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMikeFilledIcon],svg[weui-mike-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 18.96V22h-1.5v-3.04A7 7 0 0 1 5 12v-2h1.5v2a5.5 5.5 0 0 0 11 0v-2H19v2a7 7 0 0 1-6.25 6.96M8 6a4 4 0 1 1 8 0v6a4 4 0 1 1-8 0z"></svg:path>`,
})
export class WeuiMikeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMike2FilledIcon],svg[weui-mike2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.6 16.46a4.5 4.5 0 0 0 3.9-4.462V10.5h-1.2v1.498a3.3 3.3 0 1 1-6.6 0V10.5H7.5v1.498a4.5 4.5 0 0 0 3.9 4.462V18h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-15.5a2 2 0 0 0-2 2V12a2 2 0 1 0 4 0V8.5a2 2 0 0 0-2-2"></svg:path>`,
})
export class WeuiMike2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMobileContactsFilledIcon],svg[weui-mobile-contacts-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10.91 10.806c-.093-.03-.132-.015-.217.03c-.277.155-.956.524-1.357.732a.7.7 0 0 1-.331.085a.65.65 0 0 1-.347-.1a7.5 7.5 0 0 1-1.55-1.178a7.7 7.7 0 0 1-1.172-1.548a.67.67 0 0 1-.016-.677c.208-.408.578-1.086.733-1.355c.046-.085.061-.131.03-.216l-.655-1.74A.56.56 0 0 0 9.52 7.5c-.092 0-.2.038-.223.046A1.96 1.96 0 0 0 8 9.386c0 .24.062.462.07.516a8.65 8.65 0 0 0 2.328 4.189a8.67 8.67 0 0 0 4.195 2.325a1.965 1.965 0 0 0 2.36-1.224c.008-.023.054-.13.046-.223a.58.58 0 0 0-.347-.508l-1.743-.655z"></svg:path>`,
})
export class WeuiMobileContactsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMoreFilledIcon],svg[weui-more-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class WeuiMoreFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMore2FilledIcon],svg[weui-more2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class WeuiMore2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMosaicFilledIcon],svg[weui-mosaic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6.8 12.6V18h2.4v-2.4zm-4.8 0V18h2.4v-2.4zm9.6 0V18H18v-2.4zm0-9.6v2.4H18V6zM6 10.8v2.4h2.4v-2.4zM6 6v2.4h2.4V6zm2.4 7.2v2.4h2.4v-2.4zm0-4.8v2.4h2.4V8.4zm4.8 4.8v2.4h2.4v-2.4zm0-4.8v2.4h2.4V8.4zM10.8 6v2.4h2.4V6zm0 4.8v2.4h2.4v-2.4zm4.8 0v2.4H18v-2.4z"></svg:path>`,
})
export class WeuiMosaicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMusicFilledIcon],svg[weui-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 4.309L8 6.5v12.7c0 .937-.627 1.85-1.47 2.243c-.157.073-1.148.295-1.277.32c-1.243.25-2.198-.814-2.25-1.89s.653-1.974 1.472-2.139l1.265-.317c.447-.112.76-.514.76-.975V5.96a1 1 0 0 1 .786-.976l11.607-2.542a.5.5 0 0 1 .607.488v13.61c0 .937-.633 1.85-1.483 2.243c-.158.073-1.158.295-1.288.32c-1.253.25-2.217-.814-2.27-1.89s.66-1.974 1.485-2.139l1.292-.32c.449-.11.764-.513.764-.975z"></svg:path>`,
})
export class WeuiMusicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMusicOffFilledIcon],svg[weui-music-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.33 6.21l8.326 8.325c.213-.186.344-.46.344-.757v-9.47zM19.5 16.378l2.592 2.592l-1.06 1.06L4.06 3.061L5.12 2l2.837 2.836l10.935-2.394a.5.5 0 0 1 .607.488v13.45zM8 9.12V19.2c0 .937-.627 1.85-1.47 2.243c-.157.073-1.148.295-1.277.32c-1.243.25-2.198-.814-2.25-1.89s.653-1.974 1.472-2.139l1.265-.317c.447-.112.76-.514.76-.975V7.621l1.5 1.5zm9.744 9.744c-.356.094-.92.219-1.015.238c-1.253.25-2.217-.815-2.27-1.891a2.23 2.23 0 0 1 .335-1.296z"></svg:path>`,
})
export class WeuiMusicOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiNoteFilledIcon],svg[weui-note-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 18.946q-.24.062-.5.063H5.5V20.5H18a.5.5 0 0 0 .5-.5zM4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4zm3 1.5v14h1.5v-14z"></svg:path>`,
})
export class WeuiNoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPadFilledIcon],svg[weui-pad-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class WeuiPadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPauseFilledIcon],svg[weui-pause-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933H7c-.552 0-1-.418-1-.933V5.933C6 5.418 6.448 5 7 5m8 0h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933h-2c-.552 0-1-.418-1-.933V5.933c0-.515.448-.933 1-.933"></svg:path>`,
})
export class WeuiPauseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPencilFilledIcon],svg[weui-pencil-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3v2H5v14h14v-9h2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.94.354l.707.707a.5.5 0 0 1 0 .707L11.314 14.1l-1.992.98a.3.3 0 0 1-.402-.402l.98-1.992l9.333-9.333a.5.5 0 0 1 .707 0z"></svg:path>`,
})
export class WeuiPencilFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPhotoWallFilledIcon],svg[weui-photo-wall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 6.5V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1.5V8A1.5 1.5 0 0 0 18 6.5zM3 8h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></svg:path>`,
})
export class WeuiPhotoWallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPlayFilledIcon],svg[weui-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852"></svg:path>`,
})
export class WeuiPlayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPlay2FilledIcon],svg[weui-play2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M10.765 8.38a.5.5 0 0 0-.765.424v6.392a.5.5 0 0 0 .765.424l5.113-3.196a.5.5 0 0 0 0-.848z"></svg:path>`,
})
export class WeuiPlay2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPreviousFilledIcon],svg[weui-previous-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.586 9l1.828 1.828L11 12.243L7.464 8.707a1 1 0 0 1 0-1.414L11 3.757l1.414 1.415L10.586 7H15a6 6 0 1 1 0 12H4v-2h11a4 4 0 1 0 0-8z"></svg:path>`,
})
export class WeuiPreviousFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPrevious2FilledIcon],svg[weui-previous2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M9.269 11.2H14a1.8 1.8 0 0 1 0 3.6h-2V16h2a3 3 0 0 0 0-6H9.325l1.352-1.351l-.849-.849l-2.474 2.475a.5.5 0 0 0 0 .707l2.474 2.475l.849-.849z"></svg:path>`,
})
export class WeuiPrevious2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiQrCodeFilledIcon],svg[weui-qr-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 5v2h2V5zm-6 14h2v2h-2zm8-8h2v2h-2zm-8 4h2v2h-2zm4-4h2v2h-2zM4 3h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v6h6V5zm2 2h2v2H7zm9-4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 12h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1 2v2h2v-2zM4 15h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1 2v2h2v-2z"></svg:path>`,
})
export class WeuiQrCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiRefreshFilledIcon],svg[weui-refresh-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.546 5.132L8.828 3.414L10.243 2l3.889 3.89a.5.5 0 0 1 0 .706l-3.89 3.89L8.829 9.07l1.946-1.946a6 6 0 1 0 5.468 1.632l1.415-1.414a8 8 0 1 1-7.11-2.211z"></svg:path>`,
})
export class WeuiRefreshFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiReportProblemFilledIcon],svg[weui-report-problem-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.268 21.053l-18.536.001a1 1 0 0 1-.866-1.5L11.132 3.5a1 1 0 0 1 1.732 0l9.27 16.053a1 1 0 0 1-.866 1.5M11.248 9.545l.116 5.666h1.272l.117-5.666zm.75 8.572c.48 0 .855-.369.855-.832s-.375-.826-.856-.826a.83.83 0 0 0-.85.826c0 .463.375.832.85.832z"></svg:path>`,
})
export class WeuiReportProblemFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiSearchFilledIcon],svg[weui-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.622 15.172l4.244 4.244l-1.414 1.415l-4.24-4.24a7 7 0 1 1 1.41-1.42zM16 11a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></svg:path>`,
})
export class WeuiSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiSendingFilledIcon],svg[weui-sending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.828 11H13v2H8.828l1.829 1.828l-1.414 1.415l-2.829-2.829l-1.06-1.06a.5.5 0 0 1 0-.708l3.889-3.889l1.414 1.415zM14 11h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class WeuiSendingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiSettingFilledIcon],svg[weui-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class WeuiSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiShareFilledIcon],svg[weui-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 4.366V7h6.251c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7h6.251V4.376l-1.72 1.72l-1.06-1.06l2.828-2.829a1 1 0 0 1 1.414 0l2.828 2.829l-1.06 1.06zM11.25 7v6.5h1.5V7z"></svg:path>`,
})
export class WeuiShareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiShopFilledIcon],svg[weui-shop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 7v-.5a4.5 4.5 0 0 1 9 0V7H19c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zM9 7h6v-.5a3 3 0 0 0-6 0zM7.5 7v4H9V7zM15 7v4h1.5V7z"></svg:path>`,
})
export class WeuiShopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiStarFilledIcon],svg[weui-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 18.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202l-3.78-3.685a1 1 0 0 1 .555-1.706l5.223-.759l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733l5.223.76a1 1 0 0 1 .555 1.705L17.23 14.7l.892 5.202a1 1 0 0 1-1.45 1.054z"></svg:path>`,
})
export class WeuiStarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiStickerFilledIcon],svg[weui-sticker-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-4a5.5 5.5 0 0 0 5.478-5H6.522A5.5 5.5 0 0 0 12 18m-3.5-7.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class WeuiStickerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTagFilledIcon],svg[weui-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.207 14.207a1 1 0 0 1 0-1.414l9.5-9.5A1 1 0 0 1 13.414 3H20a1 1 0 0 1 1 1v6.586a1 1 0 0 1-.293.707l-9.5 9.5a1 1 0 0 1-1.414 0zM16 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class WeuiTagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTextFilledIcon],svg[weui-text-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 6h3.5V7h-9v2H11v8h2z"></svg:path>`,
})
export class WeuiTextFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTimeFilledIcon],svg[weui-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 11.38V6h-1.5v6l4.243 4.243l1.06-1.06zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class WeuiTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTransferFilledIcon],svg[weui-transfer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.475 9.27h1.646l.43 1.367h1.254L16.844 5h-1.387l-1.215 3.5H10V3.002C10 2.456 10.449 2 11.002 2h9.996C21.544 2 22 2.449 22 3.002v9.996c0 .546-.449 1.002-1.002 1.002H15.5V9.493a1 1 0 0 0-.025-.223m.642-3.192h.028l.722 2.309h-1.472zM3.002 10h9.996c.546 0 1.002.449 1.002 1.002v9.996c0 .546-.449 1.002-1.002 1.002H3.002A1.007 1.007 0 0 1 2 20.998v-9.996C2 10.456 2.449 10 3.002 10m8.223 4.697v-1.028h-3.04l.586-.181c-.072-.304-.275-.76-.456-1.1l-1.13.333c.138.29.269.658.341.948H4.544v1.028h1.143c.377.977.84 1.81 1.441 2.505c-.731.535-1.636.912-2.744 1.158c.203.246.522.738.638.991c1.143-.318 2.099-.774 2.888-1.397c.745.601 1.65 1.05 2.765 1.34c.16-.29.47-.753.71-.985c-1.05-.232-1.926-.615-2.65-1.136c.594-.674 1.057-1.492 1.397-2.476zm-2.28 0a5.4 5.4 0 0 1-1.013 1.773a6 6 0 0 1-1.151-1.773z"></svg:path>`,
})
export class WeuiTransferFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTransferTextFilledIcon],svg[weui-transfer-text-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3.198 5.848v1.144H8.87c.462 1.595 1.287 2.992 2.475 4.202c-1.144.968-2.596 1.672-4.345 2.123l.616 1.012c1.793-.506 3.311-1.309 4.543-2.398q1.749 1.452 4.389 2.442l.638-.979c-1.672-.616-3.08-1.364-4.213-2.266c1.012-1.111 1.782-2.486 2.31-4.136h1.661V8.848h-4.158A9.8 9.8 0 0 0 11.697 7l-1.155.418a8 8 0 0 1 1.012 1.43zM9.97 9.992h4.125c-.429 1.331-1.078 2.475-1.936 3.421A8.7 8.7 0 0 1 9.97 9.992"></svg:path>`,
})
export class WeuiTransferTextFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTransfer2FilledIcon],svg[weui-transfer2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.015 14.554l-1.114 2.376a.4.4 0 0 0 .596.494l4.8-3.469a.5.5 0 0 0-.292-.905H13.72l-.002.004H7v1.5zM11.21 9.446l1.114-2.376a.4.4 0 0 0-.597-.494l-4.8 3.469a.5.5 0 0 0 .293.905h3.285l.001-.004h6.714v-1.5zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class WeuiTransfer2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTvFilledIcon],svg[weui-tv-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.218 7.954H6.3V9.17h2.036V15h1.475V9.17h1.816l1.96 5.83h1.776l2.369-7.046h-1.607l-1.611 5.527h-.034l-1.612-5.527zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 16.05c0-.414.344-.75.753-.75h6.494a.75.75 0 0 1 .753.75v.75H8z"></svg:path>`,
})
export class WeuiTvFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVideoCallFilledIcon],svg[weui-video-call-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5.5h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1M18 10l3.375-2.7A1 1 0 0 1 23 8.08v7.84a1 1 0 0 1-1.625.78L18 14z"></svg:path>`,
})
export class WeuiVideoCallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVoiceFilledIcon],svg[weui-voice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m.308-5.192l.849.849A7.98 7.98 0 0 0 15.5 12c0-2.21-.895-4.21-2.343-5.657l-.849.849A6.77 6.77 0 0 1 14.3 12c0 1.83-.724 3.54-1.992 4.808m-1.98-1.98l.849.849A5.18 5.18 0 0 0 12.7 12a5.18 5.18 0 0 0-1.523-3.677l-.849.849A3.98 3.98 0 0 1 11.5 12a3.98 3.98 0 0 1-1.172 2.828m-1.13-1.13A2.4 2.4 0 0 0 9.9 12c0-.663-.269-1.263-.703-1.697L7.5 12l1.697 1.697z"></svg:path>`,
})
export class WeuiVoiceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeDownFilledIcon],svg[weui-volume-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.3 4.7c.4-.4 1-.4 1.4 0c.2.2.3.4.3.7v13.2c0 .6-.4 1-1 1c-.3 0-.5-.1-.7-.3l-3.8-3.8H3c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h4.5zm4.9 11.2l-1.1-1.1l.1-.1c.7-.7 1.1-1.7 1.1-2.7s-.4-2-1.1-2.7l-.1-.1l1.1-1.1l.1.1c1 1 1.6 2.4 1.6 3.8s-.6 2.8-1.6 3.8z"></svg:path>`,
})
export class WeuiVolumeDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeOffFilledIcon],svg[weui-volume-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.06 6.94L11.3 4.7c.4-.4 1-.4 1.4 0c.2.2.3.4.3.7v5.479l2.879 2.878A3.9 3.9 0 0 0 16.3 12c0-1-.4-2-1.1-2.7l-.1-.1l1.1-1.1l.1.1c1 1 1.6 2.4 1.6 3.8a5.4 5.4 0 0 1-.876 2.902l.918.919C18.73 14.703 19.1 13.413 19.1 12c0-1.8-.7-3.4-1.9-4.7l-.1-.1l1.1-1.1l.1.1c1.5 1.5 2.4 3.6 2.4 5.8c0 1.82-.548 3.503-1.643 4.936l3.035 3.035l-1.06 1.06L4.06 4.061L5.12 3zM13 15.12v3.48c0 .6-.4 1-1 1c-.3 0-.5-.1-.7-.3l-3.8-3.8H3c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h3.379L13 15.121z"></svg:path>`,
})
export class WeuiVolumeOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeUpFilledIcon],svg[weui-volume-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.3 4.7c.4-.4 1-.4 1.4 0c.2.2.3.4.3.7v13.2c0 .6-.4 1-1 1c-.3 0-.5-.1-.7-.3l-3.8-3.8H3c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h4.5zm6.9 13.2l-1.1-1.1l.1-.1c1.3-1.3 1.9-2.9 1.9-4.7s-.7-3.4-1.9-4.7l-.1-.1l1.1-1.1l.1.1c1.5 1.5 2.4 3.6 2.4 5.8s-.8 4.2-2.4 5.8zm-2-2l-1.1-1.1l.1-.1c.7-.7 1.1-1.7 1.1-2.7s-.4-2-1.1-2.7l-.1-.1l1.1-1.1l.1.1c1 1 1.6 2.4 1.6 3.8s-.6 2.8-1.6 3.8z"></svg:path>`,
})
export class WeuiVolumeUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
