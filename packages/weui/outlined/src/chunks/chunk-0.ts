import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiAddFriendsOutlinedIcon],svg[weui-add-friends-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.832 12.35C7.096 11.478 6.5 9.85 6.5 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783v.687a1 1 0 0 1-1.001.998H2a1 1 0 0 1-1-.998v-.687c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99zM2.2 19.8h16.6v-.485c0-.229-.235-.605-.44-.705l-5.66-2.76c-1.527-.745-1.904-2.546-.81-3.843l.36-.428c.552-.654 1.05-2.014 1.05-2.868V7c0-1.545-1.254-2.8-2.8-2.8A2.803 2.803 0 0 0 7.7 7v1.71c0 .856.496 2.21 1.05 2.866l.36.429c1.097 1.299.715 3.099-.81 3.843L2.64 18.61c-.203.099-.44.479-.44.705zm16.7-8.9V8h1.2v2.9H23v1.2h-2.9V15h-1.2v-2.9H16v-1.2z"></svg:path>`,
})
export class WeuiAddFriendsOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAddOutlinedIcon],svg[weui-add-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 11.25V3.5h1.5v7.75h7.75v1.5h-7.75v7.75h-1.5v-7.75H3.5v-1.5z"></svg:path>`,
})
export class WeuiAddOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAlbumOutlinedIcon],svg[weui-album-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.8 14.409V5.2H3.2v8.892l5-4.043c.462-.374 1.205-.356 1.65.036l4.477 3.933l2.282-1.94c.462-.394 1.198-.386 1.646.017zm0 1.585l-3.374-3.036l-2.188 1.86L16.582 16h-1.77l-5.806-5.06L3.2 15.636V18.8h17.6zM2.992 4h18.016c.537 0 .992.481.992 1.075v13.85c0 .596-.444 1.075-.992 1.075H2.992C2.455 20 2 19.519 2 18.925V5.075C2 4.479 2.444 4 2.992 4"></svg:path>`,
})
export class WeuiAlbumOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAdd2OutlinedIcon],svg[weui-add2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.4 11.4V7h1.2v4.4H17v1.2h-4.4V17h-1.2v-4.4H7v-1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"></svg:path>`,
})
export class WeuiAdd2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiArrowOutlinedIcon],svg[weui-arrow-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="weuiArrowOutlined0" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)"></svg:use>`,
})
export class WeuiArrowOutlinedIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiAtOutlinedIcon],svg[weui-at-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.27 8.188c-1.7 0-2.801 1.44-2.801 3.656c0 2.203 1.09 3.633 2.789 3.633c1.734 0 2.847-1.454 2.847-3.692c0-2.203-1.09-3.598-2.835-3.598zM11.645 2c5.135 0 9.375 3.527 9.375 8.719c0 3.726-1.547 6.117-4.125 6.117c-1.395 0-2.497-.844-2.672-2.156h-.082c-.528 1.336-1.618 2.074-3.07 2.074c-2.415 0-4.055-1.992-4.055-4.945c0-2.883 1.664-4.875 4.054-4.875c1.36 0 2.543.738 2.977 1.886h.082V7.168h1.36v6.703c0 1.066.562 1.77 1.628 1.77c1.559 0 2.625-1.793 2.625-4.946c0-4.476-3.504-7.52-8.097-7.52c-4.594 0-8.356 3.35-8.356 8.598c0 4.875 4.014 8.59 8.484 8.59c1.582 0 3.094-.199 3.891-.515v1.16c-.95.328-2.332.515-3.902.515C6.198 21.523 2 17.326 2 11.727A9.66 9.66 0 0 1 11.645 2"></svg:path>`,
})
export class WeuiAtOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBackOutlinedIcon],svg[weui-back-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5L10 4.563L2.682 12z"></svg:path>`,
})
export class WeuiBackOutlinedIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBack2OutlinedIcon],svg[weui-back2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m1.999-5.363L12.953 16.5L9.29 12.723a1.045 1.045 0 0 1 0-1.446L12.953 7.5L14 8.563L10.68 12L14 15.438z"></svg:path>`,
})
export class WeuiBack2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBellringOffOutlinedIcon],svg[weui-bellring-off-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.805 17.108l3.62 3.62l-.849.848L4.85 4.85L5.697 4L7.61 5.912a6 6 0 0 1 2.418-1.58a2 2 0 1 1 3.945 0A6 6 0 0 1 18 10v4q0 1.554.805 3.108M8.457 6.76l8.444 8.443A7 7 0 0 1 16.8 14v-4c0-2.06-1.309-3.87-3.222-4.535l-.956-.332l.167-.999a.8.8 0 1 0-1.578 0l.167.999l-.956.332A4.8 4.8 0 0 0 8.457 6.76M18.303 20H5.187a1 1 0 0 1-.806-1.592Q6 16.203 6 14v-4c0-.69.117-1.354.331-1.972l.973.974A4.8 4.8 0 0 0 7.2 10v4c0 1.63-.552 3.236-1.626 4.8h11.529zM11 20h2v.2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class WeuiBellringOffOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiBellringOnOutlinedIcon],svg[weui-bellring-on-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4a2 2 0 1 1 3.973.332A6 6 0 0 1 18 10v4q0 2.205 1.62 4.408A1 1 0 0 1 18.812 20H5.187a1 1 0 0 1-.806-1.592Q6 16.203 6 14v-4a6 6 0 0 1 4.027-5.668A2 2 0 0 1 10 4m2 14.8h6.426C17.352 17.236 16.8 15.63 16.8 14v-4c0-2.06-1.309-3.87-3.222-4.535l-.956-.332l.167-.999a.8.8 0 1 0-1.578 0l.167.999l-.956.332A4.8 4.8 0 0 0 7.2 10v4c0 1.63-.552 3.236-1.626 4.8zM11 20h2v.2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class WeuiBellringOnOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCameraOutlinedIcon],svg[weui-camera-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.358 5.2H9.642l-2 3H3.2v10.6h17.6V8.2h-4.442zm.374-1.2a.5.5 0 0 1 .416.223L17 7h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4l1.852-2.777A.5.5 0 0 1 9.268 4zM12 15.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class WeuiCameraOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCellphoneOutlinedIcon],svg[weui-cellphone-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm1.2.2v17.6h11.6V3.2zM12 20a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class WeuiCellphoneOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiClipOutlinedIcon],svg[weui-clip-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.2 7.2v9.6h9.6V7.2zM6 7.2H3V6h3V3h1.2v3H17a1 1 0 0 1 1 1v9.8h3V18h-3v3h-1.2v-3H7a1 1 0 0 1-1-1z"></svg:path>`,
})
export class WeuiClipOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCloseOutlinedIcon],svg[weui-close-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="weuiCloseOutlined0" fill="currentColor" d="M8 6.943L1.807.75L.75 1.807L6.943 8L.75 14.193l1.057 1.057L8 9.057l6.193 6.193l1.057-1.057L9.057 8l6.193-6.193L14.193.75z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#weuiCloseOutlined0" transform="translate(4 4)"></svg:use>`,
})
export class WeuiCloseOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiClose2OutlinedIcon],svg[weui-close2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m.849-8.8l3.11 3.111l-.848.849L12 12.849l-3.111 3.11l-.849-.848L11.151 12l-3.11-3.111l.848-.849L12 11.151l3.111-3.11l.849.848z"></svg:path>`,
})
export class WeuiClose2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCommentOutlinedIcon],svg[weui-comment-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.503 17.8H20.5a.3.3 0 0 0 .3-.3v-12a.3.3 0 0 0-.3-.3h-17a.3.3 0 0 0-.3.3v12a.3.3 0 0 0 .3.3h4.7v2.303zM11 19l-2.293 2.293A1 1 0 0 1 7 20.586V19H3.5A1.5 1.5 0 0 1 2 17.5v-12A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v12a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class WeuiCommentOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiContactsOutlinedIcon],svg[weui-contacts-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.8 19.8v-.485c0-.229-.235-.605-.44-.705l-5.66-2.76c-1.527-.745-1.904-2.546-.81-3.843l.36-.428c.552-.654 1.05-2.014 1.05-2.868V7c0-1.545-1.254-2.8-2.8-2.8A2.803 2.803 0 0 0 7.7 7v1.71c0 .856.496 2.21 1.05 2.866l.36.429c1.097 1.299.715 3.099-.81 3.843L2.64 18.61c-.203.099-.44.479-.44.705v.485zM1 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C7.096 11.478 6.5 9.85 6.5 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m19-5.5h3v1.2h-3zm-2-3h5v1.2h-5zm-2-3h7v1.2h-7z"></svg:path>`,
})
export class WeuiContactsOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiCopyOutlinedIcon],svg[weui-copy-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.4 3.2H6.2v17.6h12.6V9.6H14A1.6 1.6 0 0 1 12.4 8zm1.2.099V8c0 .22.18.4.4.4h4.703zM5.996 2h8.002L20 8v13.001a.996.996 0 0 1-.996.999H5.996A1 1 0 0 1 5 21.001V3c0-.554.446-1 .996-1"></svg:path>`,
})
export class WeuiCopyOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDeleteOnOutlinedIcon],svg[weui-delete-on-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4h1.203l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2zM4.459 2.353l15.757 2.778a.5.5 0 0 1 .406.58L20.5 6.4L3.758 3.448l.122-.69a.5.5 0 0 1 .579-.405m6.29-1.125l3.94.695a.5.5 0 0 1 .406.58l-.122.689l-4.924-.869l.122-.689a.5.5 0 0 1 .579-.406z"></svg:path>`,
})
export class WeuiDeleteOnOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDeleteOutlinedIcon],svg[weui-delete-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z"></svg:path>`,
})
export class WeuiDeleteOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDiscoverOutlinedIcon],svg[weui-discover-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.8a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m0 1.2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.877-10.877l-1.856 3.61l3.61-1.856l1.856-3.61zm-.89-.89l5.891-3.03a.5.5 0 0 1 .674.673l-3.03 5.892l-5.892 3.03a.5.5 0 0 1-.674-.674l3.03-5.892z"></svg:path>`,
})
export class WeuiDiscoverOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDisplayOutlinedIcon],svg[weui-display-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.2 5.2v12.6h17.6V5.2zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 15.9c0-.331.266-.6.601-.6H15.4c.332 0 .601.278.601.6v.6H8z"></svg:path>`,
})
export class WeuiDisplayOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDoneOutlinedIcon],svg[weui-done-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.864 16.617l-5.303-5.303l-1.061 1.06l5.657 5.657a1 1 0 0 0 1.414 0L21.238 6.364l-1.06-1.06L8.864 16.616z"></svg:path>`,
})
export class WeuiDoneOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDone2OutlinedIcon],svg[weui-done2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m-1.172-6.242l5.809-5.808l.848.849l-5.95 5.95a1 1 0 0 1-1.414 0L7 12.426l.849-.849l2.98 2.98z"></svg:path>`,
})
export class WeuiDone2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiDownloadOutlinedIcon],svg[weui-download-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.8 8.2H16V7h3.001c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7H8v1.2H5.2v12.6h13.6zm-6.2 4.417l2.087-2.087l.849.849l-2.829 2.828a1 1 0 0 1-1.414 0L8.464 11.38l.849-.849l2.087 2.087V2h1.2z"></svg:path>`,
})
export class WeuiDownloadOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiEmailOutlinedIcon],svg[weui-email-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.2 5.2l7.56 5.67a.4.4 0 0 0 .48 0L19.8 5.2zm16.6.75l-7.84 5.88a1.6 1.6 0 0 1-1.92 0L3.2 5.95V18.8h17.6zM3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class WeuiEmailOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiErrorOutlinedIcon],svg[weui-error-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m-.66-14.369h1.32l-.089 7.06H11.43l-.088-7.06zM12 17.073a.825.825 0 0 1-.835-.835a.82.82 0 0 1 .835-.835c.476 0 .835.36.835.835a.82.82 0 0 1-.835.835"></svg:path>`,
})
export class WeuiErrorOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiEyesOffOutlinedIcon],svg[weui-eyes-off-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.67 16.973l2.755 2.755l-.849.848L3.85 3.85L4.697 3l2.855 2.855C8.932 5.303 10.432 5 12 5c4.808 0 8.972 2.848 11 7a12.65 12.65 0 0 1-4.33 4.973M8.486 6.79l1.664 1.664a4 4 0 0 1 5.398 5.398l2.255 2.255c1.574-1 2.904-2.403 3.845-4.106C19.686 8.45 16.034 6.2 12 6.2a10.8 10.8 0 0 0-3.514.59m6.152 6.152a2.8 2.8 0 0 0-3.579-3.579zm1.81 5.204c-1.38.552-2.88.855-4.448.855c-4.808 0-8.972-2.848-11-7a12.65 12.65 0 0 1 4.33-4.973l.867.867A11.36 11.36 0 0 0 2.352 12c1.962 3.55 5.614 5.8 9.648 5.8a10.8 10.8 0 0 0 3.514-.59l.934.935zM8.453 10.15l.909.91a2.8 2.8 0 0 0 3.579 3.579l.91.908a4 4 0 0 1-5.398-5.398z"></svg:path>`,
})
export class WeuiEyesOffOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiEyesOnOutlinedIcon],svg[weui-eyes-on-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 17.8c4.034 0 7.686-2.25 9.648-5.8C19.686 8.45 16.034 6.2 12 6.2S4.314 8.45 2.352 12c1.962 3.55 5.614 5.8 9.648 5.8M12 5c4.808 0 8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7c2.028-4.152 6.192-7 11-7m0 9.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class WeuiEyesOnOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiFolderOutlinedIcon],svg[weui-folder-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.8 9V6.7H10.204L8.33 5.2H3.2V9zm0 1.2H3.2v8.6h17.6zM3 4h5.75l1.875 1.5H21a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class WeuiFolderOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiGroupDetailOutlinedIcon],svg[weui-group-detail-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.2 19.8h16.6v-.485c0-.229-.235-.605-.44-.705l-5.66-2.76c-1.527-.745-1.904-2.546-.81-3.843l.36-.428c.552-.654 1.05-2.014 1.05-2.868V7c0-1.545-1.254-2.8-2.8-2.8A2.803 2.803 0 0 0 7.7 7v1.71c0 .856.496 2.21 1.05 2.866l.36.429c1.097 1.299.715 3.099-.81 3.843L2.64 18.61c-.203.099-.44.479-.44.705zM13.496 4.35A3.4 3.4 0 0 1 15 4c1.86 0 3.368 1.494 3.368 3.334v1.424c0 .95-.504 2.311-1.121 3.035l-.305.357c-.496.582-.341 1.324.353 1.659l4.767 2.3c.518.25.938.912.938 1.487v.572a.84.84 0 0 1-.843.832h-2.19q.033.16.033.315v.687a1 1 0 0 1-1.001.998H2a1 1 0 0 1-1-.998v-.687c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C7.096 11.478 6.5 9.85 6.5 8.71V7c0-2.21 1.795-4 4-4a4 4 0 0 1 2.996 1.35m.657 1.02A4 4 0 0 1 14.5 7v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.137.067.27.158.39.268H21.8v-.204c0-.111-.154-.354-.26-.406l-4.766-2.3c-1.401-.677-1.752-2.336-.745-3.518l.305-.358c.433-.508.834-1.593.834-2.256V7.334C17.168 6.159 16.2 5.2 15 5.2c-.3 0-.587.06-.847.17"></svg:path>`,
})
export class WeuiGroupDetailOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiHelpOutlinedIcon],svg[weui-help-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M9 9.707C9.077 8.2 10.081 7 12.042 7C13.8 7 15 8.088 15 9.526c0 1.095-.565 1.87-1.458 2.407c-.886.523-1.137.914-1.137 1.646v.454h-1.221v-.642c-.007-.921.44-1.55 1.395-2.121c.81-.496 1.123-.935 1.123-1.682c0-.865-.67-1.5-1.709-1.5c-1.053 0-1.723.621-1.8 1.619zm2.798 7.507a.786.786 0 0 1-.796-.795c0-.454.35-.796.796-.796c.453 0 .795.342.795.796a.78.78 0 0 1-.795.795"></svg:path>`,
})
export class WeuiHelpOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiHomeOutlinedIcon],svg[weui-home-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 19.8h3.8v-7h3.303L12 4.697L3.897 12.8H7.2v7H11V17h2zm5 .2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6H3.414a1 1 0 0 1-.707-1.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586A1 1 0 0 1 20.586 14H18z"></svg:path>`,
})
export class WeuiHomeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiImacOutlinedIcon],svg[weui-imac-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="weuiImacOutlined0" fill="currentColor" d="M18.8 11V1.2H1.2V11zm0 1.2H1.2v1.6h17.6zM13.155 15l.622 1.84a.5.5 0 0 1-.474.66H6.697a.5.5 0 0 1-.474-.66L6.845 15H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zm-5.044 0l-.439 1.3h4.656l-.44-1.3z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#weuiImacOutlined0" transform="translate(2 4)"></svg:use>`,
})
export class WeuiImacOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiInfoOutlinedIcon],svg[weui-info-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M11.4 10h1.2v7h-1.2zm.6-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class WeuiInfoOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiKeyboardOutlinedIcon],svg[weui-keyboard-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M6.5 8h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-9 3h2v2h-2zm3 0h2v2h-2zM9 15h6v2H9zm3.5-4h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class WeuiKeyboardOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLikeOutlinedIcon],svg[weui-like-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"></svg:path>`,
})
export class WeuiLikeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLinkOutlinedIcon],svg[weui-link-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17.657 12l-.849-.849l2.122-2.12a2.8 2.8 0 0 0-3.96-3.96l-3.89 3.888a2.8 2.8 0 0 0 0 3.96l-.848.849a4 4 0 0 1 0-5.657l3.89-3.89a4 4 0 0 1 5.656 5.658zM6.343 12l.849.849l-2.122 2.12a2.8 2.8 0 0 0 3.96 3.96l3.89-3.888a2.8 2.8 0 0 0 0-3.96l.848-.849a4 4 0 0 1 0 5.657l-3.89 3.89a4 4 0 1 1-5.656-5.658z"></svg:path>`,
})
export class WeuiLinkOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLocationOutlinedIcon],svg[weui-location-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class WeuiLocationOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiLockOutlinedIcon],svg[weui-lock-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 9V6a4 4 0 1 1 8 0v3h3a1 1 0 0 1 1 .999V21a.997.997 0 0 1-1 1H5a1 1 0 0 1-1-.999V10a.997.997 0 0 1 1-1zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zm-4 1.2v10.6h13.6V10.2zm6.2 5.675a1.5 1.5 0 1 1 1.2 0V18h-1.2z"></svg:path>`,
})
export class WeuiLockOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMaxWindowOutlinedIcon],svg[weui-max-window-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 16v4a1 1 0 0 1-1 1h-4v-1.2h3.8V16zM8 3v1.2H4.2V8H3V4a1 1 0 0 1 1-1zm11.797 2.046l-5.472 5.472l-.849-.849l5.472-5.472h-2.951v-1.2h4a1 1 0 0 1 1 1v4h-1.2zM4.203 18.954l5.472-5.472l.849.849l-5.472 5.472h2.951v1.2h-4a1 1 0 0 1-1-1v-4h1.2z"></svg:path>`,
})
export class WeuiMaxWindowOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMeOutlinedIcon],svg[weui-me-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.3 19.8v-.485c0-.229-.235-.605-.44-.705l-5.66-2.76c-1.527-.745-1.904-2.546-.81-3.843l.36-.428c.552-.654 1.05-2.014 1.05-2.868V7c0-1.545-1.254-2.8-2.8-2.8A2.803 2.803 0 0 0 9.2 7v1.71c0 .856.496 2.21 1.05 2.866l.36.429c1.097 1.299.715 3.099-.81 3.843L4.14 18.61c-.203.099-.44.479-.44.705v.485zM2.5 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C8.596 11.478 8 9.85 8 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1"></svg:path>`,
})
export class WeuiMeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMikeOutlinedIcon],svg[weui-mike-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.7 6.5v6a3.3 3.3 0 1 0 6.6 0v-6a3.3 3.3 0 0 0-6.6 0m3.9 13.476V23h-1.2v-3.024A7.5 7.5 0 0 1 4.5 12.5V11h1.2v1.5a6.3 6.3 0 0 0 12.6 0V11h1.2v1.5a7.5 7.5 0 0 1-6.9 7.476M7.5 6.5a4.5 4.5 0 0 1 9 0v6a4.5 4.5 0 1 1-9 0z"></svg:path>`,
})
export class WeuiMikeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMike2OutlinedIcon],svg[weui-mike2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.8a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m0 1.2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-14.3A1.3 1.3 0 0 0 10.7 9v3.5a1.3 1.3 0 1 0 2.6 0V9A1.3 1.3 0 0 0 12 7.7m.6 9.26v1.54h-1.2v-1.54a4.5 4.5 0 0 1-3.9-4.462V11h1.2v1.498a3.3 3.3 0 1 0 6.6 0V11h1.2v1.498a4.5 4.5 0 0 1-3.9 4.462M12 6.5A2.5 2.5 0 0 1 14.5 9v3.5a2.5 2.5 0 1 1-5 0V9A2.5 2.5 0 0 1 12 6.5"></svg:path>`,
})
export class WeuiMike2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMobileContactsOutlinedIcon],svg[weui-mobile-contacts-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1.2.2v17.6h13.6V3.2zm9.71 10.106l1.742.655a.58.58 0 0 1 .347.508c.008.092-.038.2-.046.223a1.965 1.965 0 0 1-2.36 1.224a8.67 8.67 0 0 1-4.195-2.325A8.65 8.65 0 0 1 8.07 9.402C8.062 9.348 8 9.125 8 8.886c0-.847.54-1.563 1.296-1.84c.023-.008.13-.046.223-.046a.56.56 0 0 1 .51.339l.655 1.74c.03.085.015.13-.031.216c-.155.269-.525.947-.733 1.355a.67.67 0 0 0 .015.678a7.7 7.7 0 0 0 1.173 1.547c.455.462.987.847 1.55 1.178a.67.67 0 0 0 .678.015a70 70 0 0 0 1.357-.731c.085-.046.124-.062.216-.03z"></svg:path>`,
})
export class WeuiMobileContactsOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMoreOutlinedIcon],svg[weui-more-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M12 10.25a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m7 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5"></svg:path>`,
})
export class WeuiMoreOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMore2OutlinedIcon],svg[weui-more2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m0-7.8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-8 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class WeuiMore2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMosaicOutlinedIcon],svg[weui-mosaic-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 15h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2zm0-8h2v2h-2zm-8 4h2v2H7zm0-4h2v2H7zm2 6h2v2H9zm0-4h2v2H9zm4 4h2v2h-2zm0-4h2v2h-2zm-2-2h2v2h-2zm0 4h2v2h-2zm4 0h2v2h-2zM4.2 4.2v15.6h15.6V4.2zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class WeuiMosaicOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMusicOffOutlinedIcon],svg[weui-music-off-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.532 4.835l11.345-2.492a.61.61 0 0 1 .72.46a.6.6 0 0 1 .01.13v13.65a3 3 0 0 1-.027.3l2.845 2.845l-.849.848L4.85 3.85L5.697 3zm9.857 9.857l.278-.059a.91.91 0 0 0 .73-.89v-9.91L8.667 5.97zM6.407 7.104l1.2 1.2v10.9a2.68 2.68 0 0 1-1.52 2.36c-.18.08-1.23.32-1.3.32a1.7 1.7 0 0 1-.38 0a2.09 2.09 0 0 1-2-2a2.13 2.13 0 0 1 1.6-2.24l1.67-.35a.9.9 0 0 0 .73-.89zm8.513 8.513l.844.844a1 1 0 0 0-.197.682a.91.91 0 0 0 .8.88h.15c.096-.018.395-.082.663-.146l.987.987l-.1.05q-.646.197-1.31.33a1.7 1.7 0 0 1-.39 0a2.1 2.1 0 0 1-2-2a2.13 2.13 0 0 1 .553-1.627m-8.513 2.686q-.234.12-.49.18l-1.72.34a1 1 0 0 0-.59 1a.87.87 0 0 0 .94.87c.15-.04.88-.2 1.07-.26c.46-.244.76-.71.79-1.23z"></svg:path>`,
})
export class WeuiMusicOffOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiMusicOutlinedIcon],svg[weui-music-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.597 2.803a.61.61 0 0 0-.72-.46l-11.61 2.55a1.1 1.1 0 0 0-.86 1.11v10.4a.9.9 0 0 1-.73.89l-1.67.35a2.13 2.13 0 0 0-1.6 2.24a2.09 2.09 0 0 0 2 2q.19.021.38 0c.07 0 1.12-.24 1.3-.32a2.68 2.68 0 0 0 1.52-2.36v-13l10.79-2.37v9.91a.91.91 0 0 1-.73.89l-1.74.37a2.13 2.13 0 0 0-1.56 2.24a2.1 2.1 0 0 0 2 2q.195.023.39 0q.664-.131 1.31-.33a2.67 2.67 0 0 0 1.54-2.33V2.933a.6.6 0 0 0-.01-.13m-1.19 12.84v.9a1.48 1.48 0 0 1-.8 1.22c-.2.07-.93.23-1.09.26h-.15a.91.91 0 0 1-.8-.88a1 1 0 0 1 .6-1l1.74-.35q.259-.045.5-.15m-12 2.66v.9c-.03.52-.33.986-.79 1.23c-.19.06-.92.22-1.07.26a.87.87 0 0 1-.94-.87a1 1 0 0 1 .59-1l1.72-.34q.256-.06.49-.18"></svg:path>`,
})
export class WeuiMusicOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiNoteOutlinedIcon],svg[weui-note-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.2 3.2v14.61H18a.8.8 0 0 0 .8-.8V4a.8.8 0 0 0-.8-.8zM7 3.2H5.2v14.61H7zm11.8 15.643a2 2 0 0 1-.8.166H5.2V20.8H18a.8.8 0 0 0 .8-.8zM4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4z"></svg:path>`,
})
export class WeuiNoteOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPadOutlinedIcon],svg[weui-pad-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.2 3.2v17.6h13.6V3.2zM4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm8 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class WeuiPadOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPauseOutlinedIcon],svg[weui-pause-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933H7c-.552 0-1-.418-1-.933V5.933C6 5.418 6.448 5 7 5m.2 12.8h1.6V6.2H7.2zM15 5h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933h-2c-.552 0-1-.418-1-.933V5.933c0-.515.448-.933 1-.933m.2 12.8h1.6V6.2h-1.6z"></svg:path>`,
})
export class WeuiPauseOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPencilOutlinedIcon],svg[weui-pencil-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3v1.2H4.2v15.6h15.6V10H21v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.86-.254a.5.5 0 0 1 .706 0l.706.705a.5.5 0 0 1 0 .706l-9.51 9.51l-2.317 1.295a.3.3 0 0 1-.406-.41l1.312-2.296z"></svg:path>`,
})
export class WeuiPencilOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPhotoWallOutlinedIcon],svg[weui-photo-wall-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v-1.2h2.8V5.2H7.2V8zM3 8h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m.2 1.2v9.6h13.6V9.2z"></svg:path>`,
})
export class WeuiPhotoWallOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPlayOutlinedIcon],svg[weui-play-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852M9.2 6.148v11.705L18.71 12z"></svg:path>`,
})
export class WeuiPlayOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPlay2OutlinedIcon],svg[weui-play2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.8a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m0 1.2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.3-7.165L15.236 12L10.7 9.165zm-.435-7.357l6.557 4.098a.5.5 0 0 1 0 .848l-6.557 4.098a.5.5 0 0 1-.765-.424V7.902a.5.5 0 0 1 .765-.424"></svg:path>`,
})
export class WeuiPlay2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPreviousOutlinedIcon],svg[weui-previous-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.44 8.5l2.431 2.43l-1.06 1.061L8.629 8.81l-.707-.707a.5.5 0 0 1 0-.707l3.889-3.89l1.06 1.061L10.438 7H15a6 6 0 1 1 0 12H4v-1.5h11a4.5 4.5 0 1 0 0-9z"></svg:path>`,
})
export class WeuiPreviousOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiPrevious2OutlinedIcon],svg[weui-previous2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.269 11.2l1.408 1.408l-.849.849l-1.98-1.98l-.494-.495a.5.5 0 0 1 0-.707L9.828 7.8l.849.849L9.325 10H14a3 3 0 0 1 0 6h-2v-1.2h2a1.8 1.8 0 0 0 0-3.6zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"></svg:path>`,
})
export class WeuiPrevious2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiQrCodeOutlinedIcon],svg[weui-qr-code-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19h2v2h-2zm8-8h2v2h-2zm-8 4h2v2h-2zm4-4h2v2h-2zM4 3h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m.2 1.2v7.6h7.6V4.2zM7 7h2v2H7zm9-4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m.2 4.8h3.6V4.2h-3.6zM16 15h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m.2 4.8h3.6v-3.6h-3.6zM4 15h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m.2 4.8h3.6v-3.6H4.2z"></svg:path>`,
})
export class WeuiQrCodeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiRefreshOutlinedIcon],svg[weui-refresh-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.577 5.211a7.8 7.8 0 1 0 5.938 2.274l.849-.849a9 9 0 1 1-7.195-2.598l-1.19-1.19l.85-.848l2.474 2.475a.5.5 0 0 1 0 .707l-.495.495l-1.98 1.98l-.848-.849z"></svg:path>`,
})
export class WeuiRefreshOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiReportProblemOutlinedIcon],svg[weui-report-problem-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.998 4.4l-8.92 15.454l17.843-.001zM2.732 21.054a1 1 0 0 1-.866-1.5L11.132 3.5a1 1 0 0 1 1.732 0l9.27 16.053a1 1 0 0 1-.866 1.5zm8.64-11.1h1.255l-.097 4.722h-1.06l-.097-4.722zm.626 7.144a.696.696 0 0 1-.708-.694c0-.385.312-.688.708-.688c.4 0 .712.303.712.688a.697.697 0 0 1-.712.694"></svg:path>`,
})
export class WeuiReportProblemOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiSearchOutlinedIcon],svg[weui-search-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"></svg:path>`,
})
export class WeuiSearchOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiSendingOutlinedIcon],svg[weui-sending-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.871 11.25H13v1.5H7.871l2.432 2.432l-1.06 1.06l-3.182-3.181l-.707-.707a.5.5 0 0 1 0-.708l3.889-3.889l1.06 1.061zm6.629 0H16v1.5h-1.5zm3 0H19v1.5h-1.5z"></svg:path>`,
})
export class WeuiSendingOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiSettingOutlinedIcon],svg[weui-setting-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.563 3.2h-1.126l-.645 2.578l-.647.2a6.3 6.3 0 0 0-1.091.452l-.599.317l-2.28-1.368l-.796.797l1.368 2.28l-.317.598a6.3 6.3 0 0 0-.453 1.091l-.199.647l-2.578.645v1.126l2.578.645l.2.647q.173.568.452 1.091l.317.599l-1.368 2.28l.797.796l2.28-1.368l.598.317q.523.278 1.091.453l.647.199l.645 2.578h1.126l.645-2.578l.647-.2a6.3 6.3 0 0 0 1.091-.452l.599-.317l2.28 1.368l.796-.797l-1.368-2.28l.317-.598q.278-.523.453-1.091l.199-.647l2.578-.645v-1.126l-2.578-.645l-.2-.647a6.3 6.3 0 0 0-.452-1.091l-.317-.599l1.368-2.28l-.797-.796l-2.28 1.368l-.598-.317a6.3 6.3 0 0 0-1.091-.453l-.647-.199zm2.945 2.17l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757l.519 2.073q.68.21 1.3.54zM12 14.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class WeuiSettingOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiShareOutlinedIcon],svg[weui-share-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.8 8.2H16V7h3.001c.55 0 .999.446.999.996v13.008a1 1 0 0 1-.996.996H4.996A1 1 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7H8v1.2H5.2v12.6h13.6zm-6.2-3.938V13.5h-1.2V4.262L9.313 6.349L8.464 5.5l2.829-2.828a1 1 0 0 1 1.414 0L15.536 5.5l-.849.849z"></svg:path>`,
})
export class WeuiShareOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiShopOutlinedIcon],svg[weui-shop-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 7V6a4 4 0 1 1 8 0v1h3c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zM8 8.2H5.2v11.808c0 .436.356.792.794.792h12.012a.794.794 0 0 0 .794-.792V8.2H16V11h-1.2V8.2H9.2V11H8z"></svg:path>`,
})
export class WeuiShopOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiStarOutlinedIcon],svg[weui-star-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.941 14.28l3.942-3.841l-5.447-.792L12 4.711L9.564 9.647l-5.447.792L8.06 14.28l-.93 5.425L12 17.144l4.872 2.562zM12 18.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202l-3.78-3.685a1 1 0 0 1 .555-1.706l5.223-.759l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733l5.223.76a1 1 0 0 1 .555 1.705L17.23 14.7l.892 5.202a1 1 0 0 1-1.45 1.054z"></svg:path>`,
})
export class WeuiStarOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiStickerOutlinedIcon],svg[weui-sticker-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m-6-8.3h12a6 6 0 1 1-12 0m6 4.8a4.8 4.8 0 0 0 4.649-3.6H7.35A4.8 4.8 0 0 0 12 17.3m-3.5-6.8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class WeuiStickerOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTagOutlinedIcon],svg[weui-tag-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.207 14.207a1 1 0 0 1 0-1.414l9.5-9.5A1 1 0 0 1 13.414 3H20a1 1 0 0 1 1 1v6.586a1 1 0 0 1-.293.707l-9.5 9.5a1 1 0 0 1-1.414 0zM19.8 10.503V4.2h-6.303l-9.3 9.3l6.303 6.303zM16 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class WeuiTagOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTextOutlinedIcon],svg[weui-text-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m.2 1.2v15.6h15.6V4.2zm8.4 4.5v8.8h-1.2V8.7H7.5V7.5h9v1.2z"></svg:path>`,
})
export class WeuiTextOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTimeOutlinedIcon],svg[weui-time-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.6 11.503l3.891 3.891l-.848.849L11.4 12V6h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"></svg:path>`,
})
export class WeuiTimeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTransferOutlinedIcon],svg[weui-transfer-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.2 11.2v9.6h9.6v-9.6zM10 10V3.002C10 2.456 10.449 2 11.002 2h9.996C21.544 2 22 2.449 22 3.002v9.996c0 .546-.449 1.002-1.002 1.002H14v6.998c0 .546-.449 1.002-1.002 1.002H3.002A1.007 1.007 0 0 1 2 20.998v-9.996C2 10.456 2.449 10 3.002 10zm1.2 0h1.798c.546 0 1.002.449 1.002 1.002V12.8h6.8V3.2h-9.6zm-2.255 4.697H6.781c.282.666.666 1.26 1.15 1.773a5.4 5.4 0 0 0 1.014-1.773m2.28 0h-1.093c-.34.984-.803 1.802-1.397 2.476c.724.52 1.6.904 2.65 1.136c-.24.232-.55.695-.71.985c-1.115-.29-2.02-.739-2.765-1.34c-.79.623-1.745 1.079-2.888 1.397a6 6 0 0 0-.638-.991c1.108-.246 2.013-.623 2.744-1.158c-.6-.695-1.064-1.528-1.44-2.505H4.543v-1.028h2.982a5.5 5.5 0 0 0-.34-.948l1.13-.333c.18.34.383.796.455 1.1l-.586.181h3.04zm6.326-4.06l-.43-1.367h-1.98l-.43 1.367H13.5L15.457 5h1.387l1.96 5.637zm-1.434-4.559l-.722 2.309h1.472l-.722-2.309z"></svg:path>`,
})
export class WeuiTransferOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTransferTextOutlinedIcon],svg[weui-transfer-text-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m.2 1.2v15.6h15.6V4.2zm3.37 4.66h3.96c-.25-.46-.56-.89-.92-1.3l1.05-.38q.54.705.99 1.68h3.78V9.9h-1.51c-.48 1.5-1.18 2.75-2.1 3.76c1.03.82 2.31 1.5 3.83 2.06l-.58.89q-2.4-.9-3.99-2.22c-1.12.99-2.5 1.72-4.13 2.18l-.56-.92c1.59-.41 2.91-1.05 3.95-1.93A8.9 8.9 0 0 1 9.09 9.9H7.57zm2.52 1.04a7.94 7.94 0 0 0 1.99 3.11c.78-.86 1.37-1.9 1.76-3.11z"></svg:path>`,
})
export class WeuiTransferTextOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTransfer2OutlinedIcon],svg[weui-transfer2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M9.79 9.924H17v1.2H7.546a.5.5 0 0 1-.321-.884l3.161-2.647a.4.4 0 0 1 .591.527zm4.466 4.156h-7.21v-1.2H16.5a.5.5 0 0 1 .321.883L13.66 16.41a.4.4 0 0 1-.591-.526z"></svg:path>`,
})
export class WeuiTransfer2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiTvOutlinedIcon],svg[weui-tv-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.2 5.2v12.6h17.6V5.2zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 15.9c0-.331.266-.6.601-.6H15.4c.332 0 .601.278.601.6v.6H8zm3.665-12.004H9.81V15H8.716V8.896H6.558v-.942h5.958l1.919 5.816h.029l1.924-5.816h1.167L15.04 15h-1.196z"></svg:path>`,
})
export class WeuiTvOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVideoCallOutlinedIcon],svg[weui-video-call-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.2 6.7v10.6h12.6V6.7zM3 5.5h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1m16.2 7.923l2.6 2.08V8.497l-2.6 2.08zM18 10l3.375-2.7A1 1 0 0 1 23 8.08v7.84a1 1 0 0 1-1.625.78L18 14z"></svg:path>`,
})
export class WeuiVideoCallOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVoiceOutlinedIcon],svg[weui-voice-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m.308-3.992A6.77 6.77 0 0 0 14.3 12c0-1.83-.724-3.54-1.992-4.808l.849-.849A7.98 7.98 0 0 1 15.5 12c0 2.21-.895 4.21-2.343 5.657zm-1.98-1.98A3.98 3.98 0 0 0 11.5 12a3.98 3.98 0 0 0-1.172-2.828l.849-.849A5.18 5.18 0 0 1 12.7 12a5.18 5.18 0 0 1-1.523 3.677zm-1.13-1.13L7.5 12l1.697-1.697c.434.434.703 1.034.703 1.697s-.269 1.263-.703 1.697z"></svg:path>`,
})
export class WeuiVoiceOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeDownOutlinedIcon],svg[weui-volume-down-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.414L7.914 9.5H3v5h4.914L12 18.586zM7.5 8.5l3.793-3.793A1 1 0 0 1 13 5.414v13.172a1 1 0 0 1-1.707.707L7.5 15.5H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm7.828 6.328A3.98 3.98 0 0 0 16.5 12a3.98 3.98 0 0 0-1.172-2.828l.849-.849A5.18 5.18 0 0 1 17.7 12a5.18 5.18 0 0 1-1.523 3.677z"></svg:path>`,
})
export class WeuiVolumeDownOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeOffOutlinedIcon],svg[weui-volume-off-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.849 7.151l2.444-2.444A1 1 0 0 1 13 5.414v5.889l2.864 2.863A4 4 0 0 0 16.5 12a3.98 3.98 0 0 0-1.172-2.828l.849-.849A5.18 5.18 0 0 1 17.7 12c0 1.13-.36 2.177-.973 3.03l1.143 1.143A6.77 6.77 0 0 0 19.3 12c0-1.83-.724-3.54-1.992-4.808l.849-.849A7.98 7.98 0 0 1 20.5 12a7.97 7.97 0 0 1-1.776 5.027l2.701 2.7l-.849.85L3.85 3.848L4.697 3zM12 10.303V5.414L9.556 7.86zM7.803 9.5H3v5h4.914L12 18.586v-4.889l1 1v3.889a1 1 0 0 1-1.707.707L7.5 15.5H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3.803z"></svg:path>`,
})
export class WeuiVolumeOffOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeUpOutlinedIcon],svg[weui-volume-up-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.414L7.914 9.5H3v5h4.914L12 18.586zM7.5 8.5l3.793-3.793A1 1 0 0 1 13 5.414v13.172a1 1 0 0 1-1.707.707L7.5 15.5H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm9.808 8.308A6.77 6.77 0 0 0 19.3 12c0-1.83-.724-3.54-1.992-4.808l.849-.849A7.98 7.98 0 0 1 20.5 12c0 2.21-.895 4.21-2.343 5.657zm-1.98-1.98A3.98 3.98 0 0 0 16.5 12a3.98 3.98 0 0 0-1.172-2.828l.849-.849A5.18 5.18 0 0 1 17.7 12a5.18 5.18 0 0 1-1.523 3.677z"></svg:path>`,
})
export class WeuiVolumeUpOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
