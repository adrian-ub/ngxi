import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAddIcon],svg[gg-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path><svg:path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"></svg:path></svg:g>`,
})
export class GgAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAbstractIcon],svg[gg-abstract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5h14v14h-3V8H5z"></svg:path><svg:path fill-rule="evenodd" d="M10 19a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgAbstractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlbumIcon],svg[gg-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm18 0a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v8.011h2.395L14 9.864l1.605 2.147H18V4h1a1 1 0 0 1 1 1zM16 4h-4v5.336l2-2.676l2 2.676z" clip-rule="evenodd"></svg:path>`,
})
export class GgAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlarmIcon],svg[gg-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.459 2L1 6.015L2.338 7.5l4.46-4.015zM11 8h2v4h3v2h-5z"></svg:path><svg:path fill-rule="evenodd" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m2 0a7 7 0 1 1 14 0a7 7 0 0 1-14 0" clip-rule="evenodd"></svg:path><svg:path d="M18.541 2L23 6.015L21.662 7.5l-4.46-4.015z"></svg:path></svg:g>`,
})
export class GgAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlignBottomIcon],svg[gg-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M13 10h4v6h-4z"></svg:path><svg:path d="M11 4H7v12h4zm7 14H6v2h12z"></svg:path></svg:g>`,
})
export class GgAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlignCenterIcon],svg[gg-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M9 13h6v4H9z"></svg:path><svg:path d="M6 7h12v4H6z"></svg:path></svg:g>`,
})
export class GgAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlignLeftIcon],svg[gg-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M8 13h6v4H8z"></svg:path><svg:path d="M6 6H4v12h2zm14 1H8v4h12z"></svg:path></svg:g>`,
})
export class GgAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlignMiddleIcon],svg[gg-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M13 9h4v6h-4z"></svg:path><svg:path d="M7 6h4v12H7z"></svg:path></svg:g>`,
})
export class GgAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlignRightIcon],svg[gg-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".5" d="m16 13.004l-6-.013l-.01 4l6 .013z"></svg:path><svg:path d="m19.978 18.002l.026-12l-2-.004l-.026 12zM3.996 10.985l12 .026l.009-4l-12-.026z"></svg:path></svg:g>`,
})
export class GgAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAlignTopIcon],svg[gg-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".5" d="m13.035 7.988l.002 6l4-.002l-.002-6z"></svg:path><svg:path d="M18 4.012L6 4.018v2l12-.006zm-6.963 15.974l-.005-12l-4 .002l.005 12z"></svg:path></svg:g>`,
})
export class GgAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAnchorIcon],svg[gg-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 6a3 3 0 0 1-2 2.83v8.044c1.725-.444 3-2.01 3-3.874h2a6 6 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-1.083A6 6 0 0 1 6 13h2a4 4 0 0 0 3 3.874V8.829A3.001 3.001 0 1 1 15 6m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAppleWatchIcon],svg[gg-apple-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.498 5.03q0 .072-.005.143A3 3 0 0 1 18.5 8.005v1h1v4h-1v3a3 3 0 0 1-2.005 2.83q.005.085.005.17a3 3 0 0 1-3 3h-4a3 3 0 0 1-2.995-3.17a3 3 0 0 1-2.005-2.83v-8a3 3 0 0 1 2.003-2.83a3 3 0 0 1 3.01-3.18l4 .02a3 3 0 0 1 2.984 3.015m-8-.025h6a1 1 0 0 0-.995-.99l-4-.02a1 1 0 0 0-1.005.995zm7.207 2.021l-4.22-.021H7.5a1 1 0 0 0-1 1v8a1 1 0 0 0 .999 1H15.5a1 1 0 0 0 .999-1v-8a1 1 0 0 0-.795-.979M8.5 19.005a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgAppleWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrangeBackIcon],svg[gg-arrange-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3h8v4h6v6h4v8h-8v-4H7v-6H3zm12 10h-2v2H9v-4h2V9h4z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrangeBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrangeFrontIcon],svg[gg-arrange-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3h8v4h6v6h4v8h-8v-4H7v-6H3zm12 6H9v6h6z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrangeFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowAlignHIcon],svg[gg-arrow-align-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v10h2zm-7 .757l1.414 1.415L5.586 11H10v2H5.586l1.828 1.828L6 16.243L1.757 12zm12 8.486l-1.414-1.414L18.414 13H14v-2h4.414l-1.828-1.828L18 7.757L22.243 12z"></svg:path>`,
})
export class GgArrowAlignHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowAlignVIcon],svg[gg-arrow-align-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11v2h10v-2zm.757 7l1.415-1.414L11 18.414V14h2v4.414l1.828-1.828L16.243 18L12 22.243zm8.486-12l-1.414 1.414L13 5.586V10h-2V5.586L9.172 7.414L7.757 6L12 1.757z"></svg:path>`,
})
export class GgArrowAlignVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomLeftIcon],svg[gg-arrow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.243 7.172l-1.415-1.415l-9.07 9.071v-4.585h-2v8h8v-2H9.17z"></svg:path>`,
})
export class GgArrowBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomLeftOIcon],svg[gg-arrow-bottom-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 10.037H8v6h6v-2h-2.586l5.33-5.33l-1.414-1.414l-5.33 5.33z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowBottomLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomLeftRIcon],svg[gg-arrow-bottom-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 10.037H8v6h6v-2h-2.586l5.33-5.33l-1.414-1.414l-5.33 5.33z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowBottomLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomRightIcon],svg[gg-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.757 7.172l1.415-1.415l9.07 9.071v-4.585h2v8h-8v-2h4.586z"></svg:path>`,
})
export class GgArrowBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomRightOIcon],svg[gg-arrow-bottom-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.037 10.037h2v6h-6v-2h2.585l-5.329-5.33l1.414-1.414l5.33 5.33z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowBottomRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomRightRIcon],svg[gg-arrow-bottom-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.037 10.037h2v6h-6v-2h2.585l-5.329-5.33l1.414-1.414l5.33 5.33z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowBottomRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowDownIcon],svg[gg-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.672h2V16.5l3.243-3.243l1.414 1.415L12 20.328l-5.657-5.656l1.414-1.415L11 16.5z"></svg:path>`,
})
export class GgArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowDownOIcon],svg[gg-arrow-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.829 12.026l1.414 1.414L12 17.683L7.757 13.44l1.415-1.414L11 13.854V6.317h2v7.537z"></svg:path><svg:path fill-rule="evenodd" d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556m-1.414-1.414A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowDownOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowDownRIcon],svg[gg-arrow-down-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 12.026l1.415 1.414L12 17.683L7.757 13.44l1.415-1.414L11 13.854V6.317h2v7.537z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowDownRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLeftIcon],svg[gg-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.328 11v2H7.5l3.243 3.243l-1.415 1.414L3.672 12l5.656-5.657l1.415 1.414L7.5 11z"></svg:path>`,
})
export class GgArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLeftOIcon],svg[gg-arrow-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m11.948 14.829l-1.414 1.414L6.29 12l4.243-4.243l1.414 1.415L10.12 11h7.537v2H10.12z"></svg:path><svg:path fill-rule="evenodd" d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0m1.414-1.414A9 9 0 1 1 18.364 5.636A9 9 0 0 1 5.636 18.364" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLeftRIcon],svg[gg-arrow-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m11.948 14.829l-1.414 1.414L6.29 12l4.243-4.243l1.414 1.415L10.12 11h7.537v2H10.12z"></svg:path><svg:path fill-rule="evenodd" d="M23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm-4 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownIcon],svg[gg-arrow-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.013 19.162l1.812-1.822l1.418 1.41l-4.231 4.255l-4.255-4.231l1.41-1.418l1.846 1.834L10.998.997l2-.002z"></svg:path>`,
})
export class GgArrowLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownCIcon],svg[gg-arrow-long-down-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 6.85a3.001 3.001 0 1 1 2 0l.012 12.288l1.812-1.823l1.419 1.41l-4.231 4.255l-4.255-4.23l1.41-1.42l1.845 1.835zm.998-1.83a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongDownCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownEIcon],svg[gg-arrow-long-down-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.998 1.02h-6v6h2.001l.013 12.145l-1.844-1.834l-1.41 1.418l4.254 4.23l4.23-4.254l-1.417-1.41l-1.813 1.823l-.013-12.118h1.999zm-4 2h2v2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongDownEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownLIcon],svg[gg-arrow-long-down-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.998.972v2h3l-1 .001l.014 16.24l-1.844-1.834l-1.41 1.418l4.254 4.23l4.23-4.254l-1.417-1.41l-1.813 1.823l-.014-16.214h2v-2z"></svg:path>`,
})
export class GgArrowLongDownLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownRIcon],svg[gg-arrow-long-down-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.242 4.641L11.999.4L7.756 4.64L11 7.886l.013 11.9l-1.845-1.834l-1.41 1.418l4.255 4.231l4.23-4.254l-1.417-1.41l-1.813 1.822L13 7.883zm-5.657 0l1.414-1.414l1.414 1.414L12 6.056z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongDownRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftIcon],svg[gg-arrow-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.027 11.993l4.235 4.25L6.68 14.83l-1.821-1.828L22.974 13v-2l-18.12.002L6.69 9.174L5.277 7.757z"></svg:path>`,
})
export class GgArrowLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftCIcon],svg[gg-arrow-long-left-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.27 7.757l-4.25 4.236l4.236 4.25l1.416-1.412l-1.814-1.82l12.288.042a3.001 3.001 0 0 0 5.834-.975a3 3 0 0 0-5.825-1.025L4.839 11.01l1.843-1.836zm13.71 4.303a1 1 0 1 1 2 .009a1 1 0 0 1-2-.01" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongLeftCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftEIcon],svg[gg-arrow-long-left-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.263 7.757l-4.25 4.236l4.236 4.25l1.417-1.412l-1.815-1.82l12.117.04l-.008 2l6 .027l.026-6l-6-.027l-.009 2l-12.144-.04l1.842-1.837zm15.715 3.312l-.01 2l-2-.01l.01-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongLeftEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftLIcon],svg[gg-arrow-long-left-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.208 7.757L.97 12.003l4.246 4.24l1.413-1.416l-1.819-1.815l16.214.018l-.004 2l2 .004l.012-6l-2-.004l-.006 2.989l.001-.99l-16.24-.018l1.838-1.84z"></svg:path>`,
})
export class GgArrowLongLeftLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftRIcon],svg[gg-arrow-long-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.649 7.725l-4.25 4.236l4.235 4.25l1.417-1.412l-1.814-1.82l11.866.04l3.255 3.256l4.243-4.243L19.36 7.79l-3.23 3.23l-11.911-.04l1.843-1.837zm13.295 4.307l1.415-1.414l1.414 1.414l-1.415 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightIcon],svg[gg-arrow-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.068 11.993l-4.25-4.236l-1.412 1.417l1.835 1.83L.932 11v2l18.305.002l-1.821 1.828l1.416 1.412z"></svg:path>`,
})
export class GgArrowLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightCIcon],svg[gg-arrow-long-right-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.73 7.757l4.25 4.236l-4.236 4.25l-1.416-1.412l1.814-1.82l-12.288.042a3.001 3.001 0 1 1-.009-2l12.316-.043l-1.843-1.836zM5.02 12.06a1 1 0 1 0-2 .009a1 1 0 0 0 2-.01" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongRightCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightEIcon],svg[gg-arrow-long-right-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m22.987 11.993l-4.236 4.25l-1.417-1.412l1.815-1.82l-12.118.04l.01 2l-6 .027l-.028-6l6-.027l.01 2l12.144-.04l-1.842-1.837l1.412-1.417zm-19.965-.924l.01 2l2-.01l-.01-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongRightEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightLIcon],svg[gg-arrow-long-right-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.916 7.757l4.25 4.236l-4.236 4.25l-1.416-1.412l1.819-1.825l-16.5.022v2.002h-2v-6h2v1.999l16.51-.023l-1.838-1.832z"></svg:path>`,
})
export class GgArrowLongRightLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightRIcon],svg[gg-arrow-long-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.351 7.725l4.25 4.236l-4.235 4.25l-1.417-1.412l1.814-1.82l-11.866.04l-3.255 3.256l-4.243-4.243L4.642 7.79l3.229 3.23l11.911-.04l-1.843-1.837zm-14.71 5.721l1.415-1.414l-1.414-1.414l-1.415 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpIcon],svg[gg-arrow-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.032 1.017l-4.274 4.21L9.16 6.653l1.859-1.83l-.056 18.155l2 .006l.056-18.113l1.798 1.825l1.425-1.403z"></svg:path>`,
})
export class GgArrowLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpCIcon],svg[gg-arrow-long-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.758 5.23l4.274-4.21l4.21 4.275l-1.424 1.403l-1.804-1.83l-.071 12.288a3.001 3.001 0 0 1-1.029 5.824a3 3 0 0 1-.971-5.835l.071-12.315l-1.853 1.826zm4.175 13.75a1 1 0 1 0-.01 2a1 1 0 0 0 .01-2" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongUpCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpEIcon],svg[gg-arrow-long-up-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.032 1.013l4.21 4.275l-1.424 1.403l-1.804-1.83l-.07 12.116l1.999.01l-.029 6l-6-.029l.029-6l2 .01l.071-12.145L9.161 6.65L7.758 5.224zm-1.108 19.955l2 .01l.01-2l-2-.01z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongUpEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpLIcon],svg[gg-arrow-long-up-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.032 1.019l4.21 4.274l-1.424 1.404l-1.799-1.826l-.051 16.11h1.996v2h-6v-2h2.004l.051-16.157l-1.858 1.83l-1.403-1.425z"></svg:path>`,
})
export class GgArrowLongUpLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpRIcon],svg[gg-arrow-long-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.793 4.61L12.068.398l4.21 4.275l-1.424 1.403l-1.804-1.831l-.07 11.886l3.227 3.226l-4.243 4.243l-4.242-4.243l3.259-3.26l.07-11.89l-1.854 1.826zm4.171 16.163l1.414-1.415l-1.414-1.414l-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowRightIcon],svg[gg-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.038 6.343l-1.411 1.418l3.27 3.255l-13.605.013l.002 2l13.568-.013l-3.215 3.23l1.417 1.41l5.644-5.67z"></svg:path>`,
})
export class GgArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowRightOIcon],svg[gg-arrow-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243l-1.414 1.415L13.88 11H6.343v2h7.537z"></svg:path><svg:path fill-rule="evenodd" d="M19.778 19.778c4.296-4.296 4.296-11.26 0-15.556s-11.26-4.296-15.556 0s-4.296 11.26 0 15.556s11.26 4.296 15.556 0m-1.414-1.414A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowRightRIcon],svg[gg-arrow-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243l-1.414 1.415L13.88 11H6.343v2h7.537z"></svg:path><svg:path fill-rule="evenodd" d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopLeftIcon],svg[gg-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.475 5.495l.004 2l-4.557.01l9.603 9.585l-1.412 1.415l-9.63-9.61l.01 4.614l-2 .004l-.018-8z"></svg:path>`,
})
export class GgArrowTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopLeftOIcon],svg[gg-arrow-top-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 13.963H8v-6h6v2h-2.586l5.33 5.33l-1.414 1.414l-5.33-5.33z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-2 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowTopLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopLeftRIcon],svg[gg-arrow-top-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 13.963H8v-6h6v2h-2.586l5.33 5.33l-1.414 1.414l-5.33-5.33z"></svg:path><svg:path fill-rule="evenodd" d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowTopLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopRightIcon],svg[gg-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.525 5.495l-.004 2l4.557.01l-9.603 9.585l1.413 1.415l9.63-9.61l-.012 4.614l2 .004l.02-8z"></svg:path>`,
})
export class GgArrowTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopRightOIcon],svg[gg-arrow-top-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 13.963h2v-6h-6v2h2.586l-5.33 5.33l1.414 1.414l5.33-5.33z"></svg:path><svg:path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m2 0a9 9 0 1 1 18 0a9 9 0 0 1-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowTopRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopRightRIcon],svg[gg-arrow-top-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 13.963h2v-6h-6v2h2.586l-5.33 5.33l1.414 1.414l5.33-5.33z"></svg:path><svg:path fill-rule="evenodd" d="M23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm-4 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowTopRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowUpIcon],svg[gg-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 8.962l-1.418 1.411l-3.255-3.27l-.013 13.605l-2-.002l.013-13.568l-3.23 3.215l-1.41-1.417l5.67-5.644z"></svg:path>`,
})
export class GgArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowUpOIcon],svg[gg-arrow-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.829 11.948l1.414-1.414L12 6.29l-4.243 4.243l1.415 1.414L11 10.12v7.537h2V10.12z"></svg:path><svg:path fill-rule="evenodd" d="M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0s-4.296 11.26 0 15.556s11.26 4.296 15.556 0s4.296-11.26 0-15.556m-1.414 1.414A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowUpOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowUpRIcon],svg[gg-arrow-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.854 11.974l1.415-1.414l-4.243-4.243l-4.243 4.243l1.414 1.414l1.829-1.828v7.537h2v-7.537z"></svg:path><svg:path fill-rule="evenodd" d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsBreakeHIcon],svg[gg-arrows-breake-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.243 7h2v4h.005v2h-.005v4h-2v-4H4.828l1.829 1.828l-1.414 1.415L1 12l4.243-4.243l1.414 1.415L4.828 11h4.415zm6.01 0h-2v4h-.005v2h.005v4h2v-4h4.414l-1.829 1.829l1.415 1.414L23.495 12l-4.242-4.243l-1.415 1.415L19.668 11h-4.414z"></svg:path>`,
})
export class GgArrowsBreakeHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsBreakeVIcon],svg[gg-arrows-breake-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.243 5.243l-1.414 1.414L13 4.828v4.415h4v2H7v-2h4V4.828L9.172 6.657L7.757 5.243L12 1zM7 15.253v-2h10v2h-4v4.414l1.828-1.829l1.415 1.415L12 23.495l-4.243-4.242l1.415-1.415L11 19.668v-4.414z"></svg:path>`,
})
export class GgArrowsBreakeVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExchangeIcon],svg[gg-arrows-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.993 12.984a1 1 0 0 0-.531 1.848L7.15 17.52a1 1 0 1 0 1.414-1.415l-1.121-1.12h7.55a1 1 0 0 0 0-2zm14.014-1.969a1 1 0 0 0 .531-1.848L16.85 6.48a1 1 0 0 0-1.414 1.415l1.121 1.12h-7.55a1 1 0 0 0 0 2z"></svg:path>`,
})
export class GgArrowsExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExchangeAltIcon],svg[gg-arrows-exchange-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.993 11.016a1 1 0 0 1-.531-1.848L7.15 6.48a1 1 0 0 1 1.414 1.415l-1.121 1.12h7.55a1 1 0 0 1 0 2zm14.014 1.969a1 1 0 0 1 .531 1.848L16.85 17.52a1 1 0 1 1-1.414-1.415l1.121-1.12h-7.55a1 1 0 1 1 0-2z"></svg:path>`,
})
export class GgArrowsExchangeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExchangeAltVIcon],svg[gg-arrows-exchange-alt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.984 4.993a1 1 0 0 1 1.848-.531L17.52 7.15a1 1 0 1 1-1.415 1.414l-1.12-1.121v7.55a1 1 0 0 1-2 0zm-1.969 14.014a1 1 0 0 1-1.848.531L6.48 16.85a1 1 0 0 1 1.415-1.414l1.12 1.121v-7.55a1 1 0 0 1 2 0z"></svg:path>`,
})
export class GgArrowsExchangeAltVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExchangeVIcon],svg[gg-arrows-exchange-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"></svg:path>`,
})
export class GgArrowsExchangeVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandDownLeftIcon],svg[gg-arrows-expand-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2 0h4v4h-4z" clip-rule="evenodd"></svg:path><svg:path d="M5 13H3v8h8v-2H6.414l5.364-5.364a1 1 0 0 0-1.414-1.414L5 17.586z"></svg:path></svg:g>`,
})
export class GgArrowsExpandDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandDownRightIcon],svg[gg-arrows-expand-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM9 5H5v4h4z" clip-rule="evenodd"></svg:path><svg:path d="M19 13h2v8h-8v-2h4.586l-5.364-5.364a1 1 0 0 1 1.414-1.414L19 17.586z"></svg:path></svg:g>`,
})
export class GgArrowsExpandDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandLeftIcon],svg[gg-arrows-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 4.1v-2h-8v8h2V5.516l5.779 5.778l1.414-1.414L5.515 4.1zm9.8 9.8h2v8h-8v-2h4.585l-5.778-5.779l1.414-1.414l5.778 5.778z"></svg:path>`,
})
export class GgArrowsExpandLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandLeftAltIcon],svg[gg-arrows-expand-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 2.1v2H5.516l5.778 5.779l-1.414 1.414L4.1 5.515V10.1h-2v-8zm11.8 11.8h-2v4.585l-5.779-5.778l-1.414 1.414l5.778 5.778H13.9v2h8zm-5.657-4.728l-1.415-1.415l-7.07 7.072l1.414 1.414z"></svg:path>`,
})
export class GgArrowsExpandLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandRightIcon],svg[gg-arrows-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.9 4.1v-2h8v8h-2V5.516l-5.779 5.778l-1.414-1.414l5.778-5.78zm-9.8 9.8h-2v8h8v-2H5.516l5.778-5.779l-1.414-1.414l-5.78 5.778z"></svg:path>`,
})
export class GgArrowsExpandRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandRightAltIcon],svg[gg-arrows-expand-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.9 2.1v2h4.585l-5.778 5.78l1.414 1.414L19.9 5.515V10.1h2v-8zM5.515 19.9H10.1v2h-8v-8h2v4.585l5.778-5.778l1.414 1.414zM9.172 7.757L7.757 9.172l7.071 7.07l1.415-1.414z"></svg:path>`,
})
export class GgArrowsExpandRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandUpLeftIcon],svg[gg-arrows-expand-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 11H3V3h8v2H6.414l5.364 5.364a1 1 0 0 1-1.414 1.414L5 6.414z"></svg:path><svg:path fill-rule="evenodd" d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h-4v-4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowsExpandUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandUpRightIcon],svg[gg-arrows-expand-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5V3h8v8h-2V6.414l-5.364 5.364a1 1 0 0 1-1.414-1.414L17.586 5z"></svg:path><svg:path fill-rule="evenodd" d="M5 13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 2v4h4v-4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowsExpandUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsHIcon],svg[gg-arrows-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.657 9.172L4.243 7.757L0 12l4.243 4.243l1.414-1.415L3.829 13H10v-2H3.83zM14 11v2h6.172l-1.829 1.828l1.414 1.415L24 12l-4.243-4.243l-1.414 1.415L20.172 11z"></svg:path>`,
})
export class GgArrowsHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsHAltIcon],svg[gg-arrows-h-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.243 7.757l1.414 1.415L3.828 11h16.344l-1.829-1.828l1.414-1.415L24 12l-4.243 4.243l-1.414-1.415L20.171 13H3.828l1.829 1.828l-1.414 1.415L0 12z"></svg:path>`,
})
export class GgArrowsHAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsMergeAltHIcon],svg[gg-arrows-merge-alt-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.503 6h2v5h4.172L5.846 9.172l1.415-1.415L11.503 12l-4.242 4.243l-1.415-1.415L7.675 13H3.503v5h-2zm18.994 0h2v12h-2v-5h-4.172l1.829 1.829l-1.415 1.414L12.497 12l4.242-4.243l1.415 1.415L16.325 11h4.172z"></svg:path>`,
})
export class GgArrowsMergeAltHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsMergeAltVIcon],svg[gg-arrows-merge-alt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 1.503v2h-5v4.172l1.829-1.829l1.414 1.415L12 11.503L7.757 7.261l1.415-1.415L11 7.675V3.503H6v-2zm0 18.994v2H6v-2h5v-4.172l-1.828 1.829l-1.415-1.415L12 12.497l4.243 4.242l-1.415 1.415L13 16.325v4.172z"></svg:path>`,
})
export class GgArrowsMergeAltVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsScrollHIcon],svg[gg-arrows-scroll-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.305 12l2.825-2.825l-1.414-1.414l-2.825 2.825l-.004-.004l-1.414 1.414l.004.004l-.004.004l1.414 1.414l.004-.004l2.825 2.825l1.414-1.414zm-5.195-1.414l.003-.004l1.414 1.414l-.004.004l.004.004l-1.414 1.414l-.004-.004l-2.825 2.825l-1.414-1.414L8.695 12L5.87 9.175l1.414-1.414z"></svg:path>`,
})
export class GgArrowsScrollHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsScrollVIcon],svg[gg-arrows-scroll-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.414 10.11l.004.003l-1.414 1.414l-.004-.004l-.004.004l-1.414-1.414l.004-.004L7.76 7.284L9.175 5.87L12 8.695l2.825-2.825l1.414 1.414zM12 15.305l2.825 2.825l1.414-1.414l-2.825-2.825l.004-.004l-1.414-1.414l-.004.004l-.004-.004l-1.414 1.414l.004.004l-2.825 2.825l1.414 1.414z"></svg:path>`,
})
export class GgArrowsScrollVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsShrinkHIcon],svg[gg-arrows-shrink-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h2v10H1zm7.448.757l1.414 1.415L8.033 11h7.933l-1.828-1.828l1.414-1.415L19.795 12l-4.243 4.243l-1.414-1.415L15.966 13H8.034l1.828 1.828l-1.414 1.415L4.205 12zM23 7h-2v10h2z"></svg:path>`,
})
export class GgArrowsShrinkHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsShrinkVIcon],svg[gg-arrows-shrink-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1v2H7V1zm-.757 7.448l-1.414 1.414L13 8.033v7.934l1.829-1.829l1.414 1.414L12 19.795l-4.243-4.243l1.415-1.414L11 15.966V8.034L9.172 9.862L7.757 8.448L12 4.205zM17 23v-2H7v2z"></svg:path>`,
})
export class GgArrowsShrinkVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsVIcon],svg[gg-arrows-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.757 5.04l1.415 1.415L11 4.627V10h2V4.627l1.828 1.828l1.415-1.414L12 .798zm8.486 13.92l-1.415-1.415L13 19.373V14h-2v5.374l-1.828-1.829l-1.415 1.414L12 23.202z"></svg:path>`,
})
export class GgArrowsVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggArrowsVAltIcon],svg[gg-arrows-v-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 6.455L7.757 5.041L12 .798l4.243 4.243l-1.415 1.414L13 4.627v14.746l1.828-1.828l1.415 1.414L12 23.202l-4.243-4.243l1.415-1.414L11 19.373V4.627z"></svg:path>`,
})
export class GgArrowsVAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAssignIcon],svg[gg-assign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h4V4H4v6h2zm4 12H6v-4H4v6h6zm4-12h4v4h2V4h-6zm0 12h4v-4h2v6h-6zm-2-9.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class GgAssignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAsteriskIcon],svg[gg-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6h2v4.079l3.341-2.34l1.147 1.639L13.743 12l3.745 2.622l-1.147 1.639L13 13.92V18h-2v-4.079l-3.341 2.34l-1.148-1.639L10.257 12L6.51 9.378l1.15-1.639L11 10.08z"></svg:path>`,
})
export class GgAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAtlasianIcon],svg[gg-atlasian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.507 11.556c-.317-.452-.725-.397-.911.122L5 18.908h5.178c.52-2.058.07-4.865-1.097-6.533z" opacity=".8"></svg:path><svg:path d="M12.875 7.126c-1.268 1.81-1.676 4.958-.912 7.03l1.75 4.751h5.251l-4.597-12.48c-.19-.519-.602-.572-.919-.12z"></svg:path></svg:g>`,
})
export class GgAtlasianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAttachmentIcon],svg[gg-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5"></svg:path>`,
})
export class GgAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAttributionIcon],svg[gg-attribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a2 2 0 0 0 1.732-1H14a2 2 0 1 1 0 4h-4a4 4 0 0 0 0 8h6.268A2 2 0 0 0 20 18a2 2 0 0 0-3.732-1H10a2 2 0 1 1 0-4h4a4 4 0 0 0 0-8H7.732A2 2 0 1 0 6 8"></svg:path>`,
})
export class GgAttributionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAwardsIcon],svg[gg-awards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 9a6.99 6.99 0 0 1-3 5.745V22h-2.586L12 20.586L10.586 22H8v-7.255A7 7 0 1 1 19 9m-2 0A5 5 0 1 1 7 9a5 5 0 0 1 10 0m-7 10.757l2-2l2 2V15.71a7 7 0 0 1-2 .29a7 7 0 0 1-2-.29z" clip-rule="evenodd"></svg:path>`,
})
export class GgAwardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBackspaceIcon],svg[gg-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m17.743 8.464l1.414 1.415L17.036 12l2.121 2.121l-1.414 1.415l-2.122-2.122l-2.121 2.122l-1.414-1.415L14.207 12l-2.121-2.121L13.5 8.465l2.121 2.12z"></svg:path><svg:path fill-rule="evenodd" d="m8.586 19l-6.293-6.293a1 1 0 0 1 0-1.414L8.586 5h14v14zm.828-12l-5 5l5 5h11.172V7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBandAidIcon],svg[gg-band-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.939 9.765a1 1 0 1 1-1.813-.845a1 1 0 0 1 1.813.845M8.92 13.874a1 1 0 1 0 .845-1.813a1 1 0 0 0-.846 1.813m4.955 1.206a1 1 0 1 1-1.813-.845a1 1 0 0 1 1.813.846m.361-3.142a1 1 0 1 0 .845-1.813a1 1 0 0 0-.845 1.813"></svg:path><svg:path fill-rule="evenodd" d="M17.071 1.124a6 6 0 0 0-7.973 2.902L4.026 14.902a6 6 0 0 0 10.876 5.072l5.072-10.876a6 6 0 0 0-2.903-7.974m-3.136 16.192l3.38-7.25l-7.25-3.382l-3.38 7.25zm-.846 1.812l-7.25-3.38a4 4 0 1 0 7.25 3.38m3.137-16.191a4 4 0 0 1 1.935 5.316l-7.25-3.381a4 4 0 0 1 5.315-1.935" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBandAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBatteryIcon],svg[gg-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6v6z"></svg:path><svg:path fill-rule="evenodd" d="M18 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a3 3 0 0 0-3-3m0 2H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBatteryEmptyIcon],svg[gg-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a3 3 0 0 0-3-3m0 2H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBatteryFullIcon],svg[gg-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></svg:path><svg:path fill-rule="evenodd" d="M18 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a3 3 0 0 0-3-3m0 2H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBeeIcon],svg[gg-bee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.951 15.571a6 6 0 0 1-2.27 4.064a4 4 0 0 1-1.756 1.96a2 2 0 0 1-3.874 0a4 4 0 0 1-1.756-1.96a6 6 0 0 1-2.269-4.047a3.001 3.001 0 0 1-4.11-4.32L6.01 6.39a6 6 0 0 1 11.953-.033l4.12 4.91a3 3 0 0 1-4.132 4.304m-2.326-2.665l-1.678-2h-3.894l-1.678 2zm2.363-.296l1.032 1.229a1 1 0 1 0 1.532-1.286l-2.564-3.055zm-2-3.704v-2a4 4 0 0 0-8 0v2zM4.98 13.839l1.007-1.2V9.527l-2.54 3.027a1 1 0 1 0 1.533 1.285m7.007 5.067a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4" clip-rule="evenodd"></svg:path>`,
})
export class GgBeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBellIcon],svg[gg-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3v.29c2.892.86 5 3.539 5 6.71v7h1v2H4v-2h1v-7a7 7 0 0 1 5-6.71V3a2 2 0 1 1 4 0M7 17h10v-7a5 5 0 0 0-10 0zm7 4v-1h-4v1a2 2 0 1 0 4 0" clip-rule="evenodd"></svg:path>`,
})
export class GgBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBitbucketIcon],svg[gg-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.583 4.635c-.552 0-.915.44-.811.982l2.456 12.766c.104.542.637.982 1.189.982h9.166c.552 0 1.085-.44 1.189-.982l2.456-12.766c.104-.542-.259-.982-.811-.982zm8.962 9.73l.91-4.73h-4.91l.91 4.73z" clip-rule="evenodd"></svg:path>`,
})
export class GgBitbucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBlockIcon],svg[gg-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.465 14.121a1 1 0 1 0 1.414 1.415l5.657-5.657a1 1 0 1 0-1.415-1.415z"></svg:path><svg:path fill-rule="evenodd" d="M6.343 17.657A8 8 0 1 0 17.657 6.343A8 8 0 0 0 6.343 17.657m9.9-1.414a6 6 0 1 1-8.486-8.485a6 6 0 0 1 8.486 8.485" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBmwIcon],svg[gg-bmw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M5 12a7 7 0 0 0 7 7v-7h7a7 7 0 0 0-7-7v7z" clip-rule="evenodd"></svg:path>`,
})
export class GgBmwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBoardIcon],svg[gg-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm8 2h-4v12h4zm2 0v12h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6 18h2V6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path>`,
})
export class GgBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBoltIcon],svg[gg-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 21.5l8.5-8.5l-4.5-3l2-7.5L6.5 11l4.5 3z"></svg:path>`,
})
export class GgBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBookmarkIcon],svg[gg-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 20h-1.828l-4.465-4.465a1 1 0 0 0-1.414 0L6.828 20H5V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zM17 7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10l2.879-2.879a3 3 0 0 1 4.242 0L17 17z" clip-rule="evenodd"></svg:path>`,
})
export class GgBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderAllIcon],svg[gg-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="3" d="M6.5 6.5h11v11h-11z"></svg:path>`,
})
export class GgBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderBottomIcon],svg[gg-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M8 8h8v7h3V5H5v10h3z"></svg:path><svg:path d="M5 17h14v3H5z"></svg:path></svg:g>`,
})
export class GgBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderLeftIcon],svg[gg-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M16 8v8H9v3h10V5H9v3z"></svg:path><svg:path d="M7 5v14H4V5z"></svg:path></svg:g>`,
})
export class GgBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderRightIcon],svg[gg-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M8 16V8h7V5H5v14h10v-3z"></svg:path><svg:path d="M17 19V5h3v14z"></svg:path></svg:g>`,
})
export class GgBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderStyleDashedIcon],svg[gg-border-style-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h4v2H4zm6 0h4v2h-4zm10 0h-4v2h4z"></svg:path>`,
})
export class GgBorderStyleDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderStyleDottedIcon],svg[gg-border-style-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11H1v2h2zm4 0H5v2h2zm2 0h2v2H9zm6 0h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class GgBorderStyleDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderStyleSolidIcon],svg[gg-border-style-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h20v2H2z"></svg:path>`,
})
export class GgBorderStyleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBorderTopIcon],svg[gg-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M8 16h8V9h3v10H5V9h3z"></svg:path><svg:path d="M5 7h14V4H5z"></svg:path></svg:g>`,
})
export class GgBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBotIcon],svg[gg-bot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.125 13h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M8.125 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m10-.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.749 14.666A6 6 0 0 0 8.125 18h8c2.44 0 4.54-1.456 5.478-3.547A3 3 0 0 0 22.875 12c0-1.013-.503-1.91-1.272-2.452A6 6 0 0 0 16.125 6h-8A6 6 0 0 0 2.75 9.334a3 3 0 0 0 0 5.332M8.125 8h8c1.384 0 2.603.702 3.322 1.77c.276.69.428 1.442.428 2.23s-.152 1.54-.428 2.23A4 4 0 0 1 16.125 16h-8a4 4 0 0 1 0-8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBowlIcon],svg[gg-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.547 3.672a1 1 0 0 0-1.414 0l-5.364 5.364H2v2h.008c.218 5.33 4.608 9.585 9.992 9.585s9.774-4.255 9.992-9.585H22v-2h-5.403l3.95-3.95a1 1 0 0 0 0-1.414m-6.37 7.364h5.813a8 8 0 0 1-15.98 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgBowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBoxIcon],svg[gg-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v3h18V5a1 1 0 0 0-1-1M3 19v-9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBoyIcon],svg[gg-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 0 0 7.634-10.4c-.835.226-1.713.346-2.619.346a10 10 0 0 1-8.692-5.053A8 8 0 0 0 12 20" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBracketsIcon],svg[gg-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 7v2H9v6h2v2H7V7zm4 8h-2v2h4V7h-4v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBriefcaseIcon],svg[gg-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 11h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M7 5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm2-1h6v1H9zM4 7a1 1 0 0 0-1 1v6h18V8a1 1 0 0 0-1-1zM3 18v-2h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBrowseIcon],svg[gg-browse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.364 13.121c.924.924 1.12 2.3.586 3.415l1.535 1.535a1 1 0 0 1-1.414 1.414l-1.535-1.535a3.001 3.001 0 0 1-3.415-4.829a3 3 0 0 1 4.243 0M12.95 15.95a1 1 0 1 0-1.414-1.414a1 1 0 0 0 1.414 1.414" clip-rule="evenodd"></svg:path><svg:path d="M8 5h8v2H8zm8 4H8v2h8z"></svg:path><svg:path fill-rule="evenodd" d="M4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBrowseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBrowserIcon],svg[gg-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm18 2H3a1 1 0 0 0-1 1v3h20V6a1 1 0 0 0-1-1M2 18v-7h20v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBrushIcon],svg[gg-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 11h3a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6a1 1 0 0 1 1-1h3V6a3 3 0 1 1 6 0zm-2-5a1 1 0 1 0-2 0v7H7v5a1 1 0 0 0 1 1h1v-3h2v3h2v-3h2v3h1a1 1 0 0 0 1-1v-5h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggBulbIcon],svg[gg-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 9a8 8 0 0 0 4 6.93V16a4 4 0 1 0 8 0v-.07A8 8 0 1 0 4 9m12 4.472a6 6 0 1 0-8 0h2V16a2 2 0 1 0 4 0v-2.53z" clip-rule="evenodd"></svg:path><svg:path d="M10 21.006V21c.588.34 1.271.535 2 .535s1.412-.195 2-.535v.006a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class GgBulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCPlusPlusIcon],svg[gg-c-plus-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.207 16.278a6 6 0 1 1 .071-8.485l1.414-1.414a8 8 0 1 0-.071 11.314z"></svg:path><svg:path d="M15 9h-2v2h-2v2h2v2h2v-2h2v-2h-2zm5 0h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path></svg:g>`,
})
export class GgCPlusPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalculatorIcon],svg[gg-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 5H7v2h10zM7 9h2v2H7zm2 4H7v2h2zm-2 4h2v2H7zm6-8h-2v2h2zm-2 4h2v2h-2zm2 4h-2v2h2zm2-8h2v2h-2zm2 4h-2v6h2z"></svg:path><svg:path fill-rule="evenodd" d="M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v18H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalendarIcon],svg[gg-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM5 18V7h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalendarDatesIcon],svg[gg-calendar-dates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm12 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarDatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalendarDueIcon],svg[gg-calendar-due-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm12 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarDueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalendarNextIcon],svg[gg-calendar-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m11.725 16.546l4.5-2.598l-4.5-2.598v1.598h-3.95v2h3.95zM8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm12 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalendarTodayIcon],svg[gg-calendar-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM5 18V7h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalendarTwoIcon],svg[gg-calendar-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCalibrateIcon],svg[gg-calibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 5a8.97 8.97 0 0 1 6.314 2.586l-4.243 4.243A3 3 0 0 0 12.05 11c-.855 0-1.625.357-2.172.93L5.636 7.687A8.97 8.97 0 0 1 12.05 5m0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgCalibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCameraIcon],svg[gg-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.5v2h8v1H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 2.99-2.751L24 17.5v-8l-6.01.751A3 3 0 0 0 15 7.5h-1v-2a1 1 0 0 0-1-1zm14 7.766v2.468l4 .5v-3.468zM16 10.5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCapIcon],svg[gg-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 18v2h8v-2z"></svg:path><svg:path fill-rule="evenodd" d="M13.988 3.22Q14 3.112 14 3a2 2 0 1 0-3.988.22a9.003 9.003 0 0 0-6.94 9.926A3 3 0 0 0 1 16v4a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4c0-1.333-.87-2.463-2.072-2.854q.071-.563.072-1.146a9 9 0 0 0-7.012-8.78M12 5a7 7 0 0 0-6.93 8h13.86q.07-.49.07-1a7 7 0 0 0-7-7M3 16a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCaptionsIcon],svg[gg-captions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 8v2H8v4h3v2H6V8zm7 0v2h-3v4h3v2h-5V8z"></svg:path><svg:path fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 13V6h16v12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCaptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCardClubsIcon],svg[gg-card-clubs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M3 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCardClubsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCardDiamondsIcon],svg[gg-card-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7.757L7.757 12L12 16.243L16.243 12z"></svg:path><svg:path fill-rule="evenodd" d="M3 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCardDiamondsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCardHeartsIcon],svg[gg-card-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.146 12.293a2 2 0 0 1 2.829-2.829L12 9.49l.025-.026a2 2 0 1 1 2.829 2.829l-2.829 2.828l-.025-.025l-.025.025z"></svg:path><svg:path fill-rule="evenodd" d="M3 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCardHeartsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCardSpadesIcon],svg[gg-card-spades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.146 11.707a2 2 0 0 0 2.829 2.829L12 14.51l.025.026a2 2 0 1 0 2.829-2.829L12.025 8.88L12 8.904l-.025-.025z"></svg:path><svg:path fill-rule="evenodd" d="M3 20a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm3 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCardSpadesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCarouselIcon],svg[gg-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path><svg:path d="M7 20a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-2-5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCastIcon],svg[gg-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 6H4v2H2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v-2h5zM2 13a7 7 0 0 1 7 7H7a5 5 0 0 0-5-5zm0 4a3 3 0 0 1 3 3H2z"></svg:path><svg:path d="M2 9c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9z"></svg:path></svg:g>`,
})
export class GgCastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChanelIcon],svg[gg-chanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.072 3.173a9 9 0 0 0-4.608 2.463l2.13 2.13a5.99 5.99 0 0 1 5.701-1.571a9 9 0 0 0 0 11.61a5.99 5.99 0 0 1-5.702-1.57l-2.13 2.129A9 9 0 0 0 12 19.974a9 9 0 0 0 10.536-1.61l-2.13-2.13a5.99 5.99 0 0 1-5.701 1.571A9 9 0 0 0 16.828 12a9 9 0 0 0-2.123-5.805a5.99 5.99 0 0 1 5.702 1.57l2.13-2.129A9 9 0 0 0 12 4.026a9 9 0 0 0-5.928-.853M12 7.705a5.99 5.99 0 0 0-.806 7.622q.354.529.806.968a5.987 5.987 0 0 0 0-8.59" clip-rule="evenodd"></svg:path>`,
})
export class GgChanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChartIcon],svg[gg-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.775 8A9 9 0 0 1 23 10h-9V1a9 9 0 0 1 8.775 7m-2.067 0A7 7 0 0 0 16 3.292V8z"></svg:path><svg:path d="M1 14a9 9 0 0 1 11-8.775V12h6.775A9 9 0 1 1 1 14m15.804 0H10V7.196A6.804 6.804 0 1 0 16.804 14"></svg:path></svg:g>`,
})
export class GgChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCheckIcon],svg[gg-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415z"></svg:path>`,
})
export class GgCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCheckOIcon],svg[gg-check-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z"></svg:path><svg:path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCheckOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCheckRIcon],svg[gg-check-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCheckRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleDownIcon],svg[gg-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.757 5.636L6.343 7.05L12 12.707l5.657-5.657l-1.414-1.414L12 9.88z"></svg:path><svg:path d="m6.343 12.707l1.414-1.414L12 15.536l4.243-4.243l1.414 1.414L12 18.364z"></svg:path></svg:g>`,
})
export class GgChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleDownOIcon],svg[gg-chevron-double-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.757 8.464L9.172 7.05L12 9.88l2.828-2.829l1.415 1.415L12 12.707z"></svg:path><svg:path d="m9.172 11.293l-1.415 1.414L12 16.95l4.243-4.243l-1.415-1.414L12 14.12z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleDownOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleDownRIcon],svg[gg-chevron-double-down-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.757 8.464L9.172 7.05L12 9.88l2.828-2.829l1.415 1.415L12 12.707z"></svg:path><svg:path d="m9.172 11.293l-1.415 1.414L12 16.95l4.243-4.243l-1.415-1.414L12 14.12z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleDownRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleLeftIcon],svg[gg-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.364 7.757L16.95 6.343L11.293 12l5.657 5.657l1.414-1.414L14.12 12z"></svg:path><svg:path d="m11.293 6.343l1.414 1.414L8.464 12l4.243 4.243l-1.414 1.414L5.636 12z"></svg:path></svg:g>`,
})
export class GgChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleLeftOIcon],svg[gg-chevron-double-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.707 9.172l-1.414-1.415L7.05 12l4.243 4.243l1.414-1.415L9.88 12z"></svg:path><svg:path d="m15.536 7.757l1.414 1.415L14.12 12l2.829 2.828l-1.414 1.415L11.293 12z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleLeftRIcon],svg[gg-chevron-double-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.707 9.172l-1.414-1.415L7.05 12l4.243 4.243l1.414-1.415L9.88 12z"></svg:path><svg:path d="m15.536 7.757l1.414 1.415L14.12 12l2.829 2.828l-1.414 1.415L11.293 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleRightIcon],svg[gg-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.636 7.757L7.05 6.343L12.707 12L7.05 17.657l-1.414-1.414L9.88 12z"></svg:path><svg:path d="m12.707 6.343l-1.414 1.414L15.536 12l-4.243 4.243l1.414 1.414L18.364 12z"></svg:path></svg:g>`,
})
export class GgChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleRightOIcon],svg[gg-chevron-double-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.464 7.757L7.05 9.172L9.88 12l-2.83 2.828l1.415 1.415L12.707 12z"></svg:path><svg:path d="m11.293 9.172l1.414-1.415L16.95 12l-4.243 4.243l-1.414-1.415L14.12 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m2 0a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleRightRIcon],svg[gg-chevron-double-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.464 7.757L7.05 9.172L9.88 12l-2.83 2.828l1.415 1.415L12.707 12z"></svg:path><svg:path d="m11.293 9.172l1.414-1.415L16.95 12l-4.243 4.243l-1.414-1.415L14.12 12z"></svg:path><svg:path fill-rule="evenodd" d="M23 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4zm-4-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleUpIcon],svg[gg-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m17.657 11.293l-1.414 1.414L12 8.464l-4.243 4.243l-1.414-1.414L12 5.636z"></svg:path><svg:path d="m17.657 16.95l-1.414 1.414L12 14.12l-4.243 4.243l-1.414-1.414L12 11.293z"></svg:path></svg:g>`,
})
export class GgChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleUpOIcon],svg[gg-chevron-double-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 12.707l1.415-1.414L12 7.05l-4.243 4.243l1.415 1.414L12 9.88z"></svg:path><svg:path d="m14.828 16.95l1.415-1.414L12 11.293l-4.243 4.243l1.415 1.414L12 14.12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m2 0a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleUpOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleUpRIcon],svg[gg-chevron-double-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 12.481l1.415-1.414L12 6.824l-4.243 4.243l1.415 1.414L12 9.653z"></svg:path><svg:path d="m14.828 16.724l1.415-1.414L12 11.067L7.757 15.31l1.415 1.414L12 13.896z"></svg:path><svg:path fill-rule="evenodd" d="M23 4.774a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4zm-4-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDownIcon],svg[gg-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.343 7.757L4.93 9.172l7.07 7.07l7.071-7.07l-1.414-1.415L12 13.414z"></svg:path>`,
})
export class GgChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDownOIcon],svg[gg-chevron-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m7.757 10.586l1.415-1.414L12 12l2.829-2.828l1.414 1.414L12 14.828z"></svg:path><svg:path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDownOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronDownRIcon],svg[gg-chevron-down-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m7.757 10.586l1.415-1.414L12 12l2.828-2.828l1.415 1.414L12 14.828z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDownRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronLeftIcon],svg[gg-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.243 6.343L14.828 4.93L7.758 12l7.07 7.071l1.415-1.414L10.586 12z"></svg:path>`,
})
export class GgChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronLeftOIcon],svg[gg-chevron-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 7.757l1.414 1.415L10.586 12l2.828 2.829L12 16.243L7.757 12z"></svg:path><svg:path fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronLeftRIcon],svg[gg-chevron-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13 7.757l1.414 1.415L11.586 12l2.828 2.828L13 16.243L8.757 12z"></svg:path><svg:path fill-rule="evenodd" d="M19 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm2 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronRightIcon],svg[gg-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.586 6.343L12 4.93L19.071 12L12 19.071l-1.414-1.414L16.243 12z"></svg:path>`,
})
export class GgChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronRightOIcon],svg[gg-chevron-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.086 7.757L15.328 12l-4.242 4.243l-1.414-1.414L12.5 12L9.672 9.172z"></svg:path><svg:path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m9 11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronRightRIcon],svg[gg-chevron-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.485 12.045l-4.242-4.243l-1.415 1.415l2.829 2.828l-2.829 2.829l1.415 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronUpIcon],svg[gg-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 16.243l1.414-1.414l-7.07-7.072l-7.072 7.072l1.414 1.414L12 10.586z"></svg:path>`,
})
export class GgChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronUpOIcon],svg[gg-chevron-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.829 14.828l1.414-1.414L12 9.172l-4.243 4.242l1.415 1.415L12 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m11-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronUpOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggChevronUpRIcon],svg[gg-chevron-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.829 14.828l1.414-1.414L12 9.172l-4.243 4.242l1.415 1.415L12 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm4 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCircleciIcon],svg[gg-circleci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M4.144 13.517a8 8 0 1 0-.006-3l2.59-.01a5.478 5.478 0 1 1 .004 3zM9.522 12a2.478 2.478 0 1 0 4.956 0a2.478 2.478 0 0 0-4.956 0" clip-rule="evenodd"></svg:path>`,
})
export class GgCircleciIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggClapperBoardIcon],svg[gg-clapper-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.17 3l-.004.005A3 3 0 0 1 23 6v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-9.694 2h6L13.09 9h-6zM5.09 9l3.387-4H4a1 1 0 0 0-1 1v3zM3 11v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7zm18-2V6a1 1 0 0 0-1-1h-1.524L15.09 9z" clip-rule="evenodd"></svg:path>`,
})
export class GgClapperBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggClipboardIcon],svg[gg-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 11a1 1 0 1 0 0 2h7.96a1 1 0 1 0 0-2zm.04 4.067a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2 2H5v14h14V5h-2v1a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm2 0v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCloseIcon],svg[gg-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"></svg:path>`,
})
export class GgCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCloseOIcon],svg[gg-close-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"></svg:path><svg:path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCloseOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCloseRIcon],svg[gg-close-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.396 7.757a1 1 0 0 1 0 1.415l-2.982 2.981l2.676 2.675a1 1 0 1 1-1.415 1.415L12 13.567l-2.675 2.676a1 1 0 0 1-1.415-1.415l2.676-2.675l-2.982-2.981A1 1 0 1 1 9.02 7.757L12 10.74l2.981-2.982a1 1 0 0 1 1.415 0"></svg:path><svg:path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCloseRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCloudIcon],svg[gg-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.738 19.996q.12.004.243.004A8 8 0 1 0 8.735 7H7.52a6.5 6.5 0 0 0 0 13h7q.11 0 .219-.004m1.953-2.275c2.35-.769 4.29-3.04 4.29-5.721a6 6 0 0 0-12 0h-2c0-1.06.206-2.074.581-3H7.52a4.5 4.5 0 1 0 0 9h7c.55 0 1.385-.099 2.172-.279" clip-rule="evenodd"></svg:path>`,
})
export class GgCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCodeIcon],svg[gg-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.953 16.912l-1.36 1.449l-6.562-6.16L8.19 5.64l1.458 1.369l-4.79 5.104l5.094 4.781zm4.094 0l1.36 1.449l6.562-6.16L15.81 5.64l-1.458 1.369l4.79 5.104l-5.094 4.781z"></svg:path>`,
})
export class GgCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCodeClimateIcon],svg[gg-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.495 8.11l-6.364 6.365l1.414 1.414l4.95-4.95l4.95 4.95l1.414-1.414zm5.01 0l-1.973 1.974l1.418 1.41l.555-.555l4.95 4.95l1.414-1.414z"></svg:path>`,
})
export class GgCodeClimateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCodeSlashIcon],svg[gg-code-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 3.05L8.667 20.432l1.932.518l4.658-17.382zM7.612 18.36l1.36-1.448l-.001-.019l-5.094-4.78l4.79-5.105l-1.458-1.369l-6.16 6.563zm8.776 0l-1.36-1.448l.001-.019l5.094-4.78l-4.79-5.105l1.458-1.369l6.16 6.563z"></svg:path>`,
})
export class GgCodeSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCoffeeIcon],svg[gg-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"></svg:path><svg:path fill-rule="evenodd" d="M13 21.5a6 6 0 0 0 5.917-5H19a4 4 0 0 0 0-8v-1H1v8a6 6 0 0 0 6 6zM3 9.5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6zm18 3a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path><svg:path d="M9 3.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class GgCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCollageIcon],svg[gg-collage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm9-1h4a1 1 0 0 1 1 1v8h-5zm0 11v5h4a1 1 0 0 0 1-1v-4zM11 4H7a1 1 0 0 0-1 1v3h5zM6 19v-9h5v10H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgCollageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggColorBucketIcon],svg[gg-color-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484l-7.778 7.778a3 3 0 0 1-4.243 0L2.9 16.562a3 3 0 0 1 0-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957m.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591c.277 0 .5.264.5.591m0 5.914V9.342l-4.39 4.391a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.364-6.364l-5.63-5.63v3.48l-.003.128h-2.01a1 1 0 0 0 .012-.129" clip-rule="evenodd"></svg:path><svg:path d="M16.859 16.875a3 3 0 1 0 4.242 0l-2.121-2.121z"></svg:path></svg:g>`,
})
export class GgColorBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggColorPickerIcon],svg[gg-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"></svg:path><svg:path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgColorPickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggComedyCentralIcon],svg[gg-comedy-central-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.545 19a7 7 0 1 0-4.95-11.95L3.473 4.93l-.018.018A9.97 9.97 0 0 1 10.545 2c5.522 0 10 4.477 10 10s-4.478 10-10 10a9.97 9.97 0 0 1-7.072-2.929l2.122-2.121a6.98 6.98 0 0 0 4.95 2.05"></svg:path><svg:path d="M10.545 14c.593 0 1.125-.258 1.492-.668l2.122 2.122a5 5 0 1 1 0-6.909l-2.122 2.123A2 2 0 1 0 10.545 14"></svg:path></svg:g>`,
})
export class GgComedyCentralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCommentIcon],svg[gg-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 9H7V7h10zM7 13h10v-2H7z"></svg:path><svg:path fill-rule="evenodd" d="M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCommunityIcon],svg[gg-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 17.456a6 6 0 1 1 0-10.912a6 6 0 1 1 0 10.912m-2-1.487a4 4 0 1 1 0-7.938A5.98 5.98 0 0 0 8.5 12a5.98 5.98 0 0 0 1.5 3.969m4-7.938q.245-.03.5-.031a4 4 0 1 1-.5 7.969A5.98 5.98 0 0 0 15.5 12A5.98 5.98 0 0 0 14 8.031m-2 .846c.915.733 1.5 1.86 1.5 3.123s-.585 2.39-1.5 3.123A4 4 0 0 1 10.5 12c0-1.263.585-2.39 1.5-3.123" clip-rule="evenodd"></svg:path>`,
})
export class GgCommunityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggComponentsIcon],svg[gg-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.757 6.343L12 2.1l4.243 4.243L12 10.586zm2.829 0L12 4.93l1.414 1.414L12 7.757zM2.1 12l4.243-4.243L10.586 12l-4.243 4.243zm2.829 0l1.414-1.414L7.757 12l-1.414 1.414zm8.485 0l4.243 4.243L21.9 12l-4.243-4.243zm4.243-1.414L16.243 12l1.414 1.414L19.07 12zm-9.9 7.071L12 13.414l4.243 4.243L12 21.9zm2.829 0L12 16.243l1.414 1.414L12 19.07z" clip-rule="evenodd"></svg:path>`,
})
export class GgComponentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCompressIcon],svg[gg-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.095 8.43l-1.424-1.404l-4.914 4.985l4.985 4.914l1.404-1.424l-2.502-2.467l6.497.05l.016-2l-6.628-.05zM5.467 15.562l1.416 1.412l4.944-4.956l-4.956-4.943L5.459 8.49l2.591 2.585l-7.206.024l.006 2l7.097-.024z"></svg:path>`,
})
export class GgCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCompressLeftIcon],svg[gg-compress-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.979 9.457l-3.57-.003l-.002 2l7 .006l.006-7l-2-.002L9.41 8.06L3.096 1.77L1.685 3.185zm11.583 5.095l-.009-2l-7 .028l.028 7l2-.008l-.014-3.601l6.343 6.26l1.405-1.424l-6.324-6.24z"></svg:path>`,
})
export class GgCompressLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCompressRightIcon],svg[gg-compress-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.567 8.03l6.343-6.26l1.405 1.423l-6.323 6.24l3.57.015l-.009 2l-7-.028l.028-7l2 .008zm-6.588 6.513l-3.57.003l-.002-2l7-.006l.006 7l-2 .002l-.003-3.602l-6.314 6.29l-1.411-1.416z"></svg:path>`,
})
export class GgCompressRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCompressVIcon],svg[gg-compress-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.034 7.356L15.5 4.854l1.424 1.404l-4.913 4.985L7.025 6.33L8.43 4.905l2.604 2.566l.05-6.627l2 .015zm2.529 11.176l1.412-1.416l-4.957-4.943l-4.943 4.957l1.417 1.412l2.584-2.592l.026 7.207l2-.008l-.026-7.096z"></svg:path>`,
})
export class GgCompressVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggControllerIcon],svg[gg-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 6.343l1.415-1.414L12 .686L7.757 4.93l1.415 1.414L12 3.515zm-9.899 9.9l1.414-1.415L3.515 12l2.828-2.828L4.93 7.757L.686 12zm2.828 2.828L12 23.314l4.243-4.243l-1.415-1.414L12 20.485l-2.828-2.828zm9.9-9.899L20.485 12l-2.828 2.828l1.414 1.415L23.314 12L19.07 7.757z"></svg:path><svg:path fill-rule="evenodd" d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCopyIcon],svg[gg-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 7H7V5h6zm0 4H7V9h6zm-6 4h6v-2H7z"></svg:path><svg:path fill-rule="evenodd" d="M3 19V1h14v4h4v18H7v-4zm12-2V3H5v14zm2-10v12H9v2h10V7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCopyrightIcon],svg[gg-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13.392 10.436l1.419-1.418a4 4 0 1 0 .176 5.798l-1.313-1.313h-.21a2 2 0 1 1-.073-3.067"></svg:path><svg:path fill-rule="evenodd" d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18m0 2a7 7 0 1 1 0 14a7 7 0 0 1 0-14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleDownLeftIcon],svg[gg-corner-double-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.295 7.694l4.84-5.056l5.057 4.84l-1.383 1.445l-2.462-2.357l.162 6.034a4.8 4.8 0 0 1-4.67 4.927l-5.925.16l2.294 2.246l-1.4 1.43l-5-4.9l4.898-5l1.429 1.4l-2.377 2.427l6.017-.162a2.4 2.4 0 0 0 2.335-2.463l-.158-5.898l-2.212 2.31z"></svg:path>`,
})
export class GgCornerDoubleDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleDownRightIcon],svg[gg-corner-double-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 7.68L7.638 2.741L2.701 7.704l1.418 1.41L6.522 6.7l-.014 6.036a4.8 4.8 0 0 0 4.788 4.812l5.928.014l-2.238 2.303l1.433 1.394l4.88-5.019l-5.019-4.88l-1.394 1.434l2.436 2.369l-6.02-.015a2.4 2.4 0 0 1-2.394-2.406l.014-5.9l2.268 2.256z"></svg:path>`,
})
export class GgCornerDoubleDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleLeftDownIcon],svg[gg-corner-double-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.299 7.76l-5.019 4.88l-1.394-1.434l2.436-2.368l-6.02.015a2.4 2.4 0 0 0-2.394 2.406l.014 5.9l2.268-2.256l1.41 1.418l-4.962 4.937l-4.937-4.962l1.418-1.41L6.522 17.3l-.014-6.036a4.8 4.8 0 0 1 4.788-4.812l5.928-.014l-2.238-2.303l1.433-1.394z"></svg:path>`,
})
export class GgCornerDoubleLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleLeftUpIcon],svg[gg-corner-double-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.784 9.25L6.37 7.836l4.242-4.242l4.243 4.242L13.44 9.25l-2.829-2.828z"></svg:path><svg:path d="m13.44 13.493l1.415-1.414l-4.243-4.243L6.37 12.08l1.414 1.414l1.847-1.847v4.76a4 4 0 0 0 4 4h4v-2h-4a2 2 0 0 1-2-2v-4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleRightDownIcon],svg[gg-corner-double-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.694 12.705l-5.056-4.84l4.84-5.057L8.923 4.19L6.566 6.653L12.6 6.49a4.8 4.8 0 0 1 4.927 4.669l.16 5.926l2.246-2.294l1.43 1.4l-4.9 5l-5-4.898l1.4-1.429l2.427 2.378l-.162-6.018a2.4 2.4 0 0 0-2.463-2.335l-5.898.158l2.31 2.212z"></svg:path>`,
})
export class GgCornerDoubleRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleRightUpIcon],svg[gg-corner-double-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.216 9.25l1.415-1.414l-4.243-4.242l-4.243 4.242L10.56 9.25l2.828-2.828z"></svg:path><svg:path d="M10.56 13.493L9.145 12.08l4.243-4.243l4.243 4.243l-1.415 1.414l-1.847-1.847v4.76a4 4 0 0 1-4 4h-4v-2h4a2 2 0 0 0 2-2v-4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleUpLeftIcon],svg[gg-corner-double-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.25 7.784L7.836 6.369l-4.242 4.243l4.242 4.243L9.25 13.44l-2.828-2.828z"></svg:path><svg:path d="m13.493 13.44l-1.414 1.415l-4.243-4.243L12.08 6.37l1.414 1.415l-1.847 1.846h4.76a4 4 0 0 1 4 4v4h-2v-4a2 2 0 0 0-2-2h-4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleUpRightIcon],svg[gg-corner-double-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.75 7.784l1.414-1.415l4.242 4.243l-4.242 4.243l-1.415-1.415l2.829-2.828z"></svg:path><svg:path d="m10.507 13.44l1.414 1.415l4.243-4.243L11.92 6.37l-1.414 1.415l1.847 1.846h-4.76a4 4 0 0 0-4 4v4h2v-4a2 2 0 0 1 2-2h4.723z"></svg:path></svg:g>`,
})
export class GgCornerDoubleUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDownLeftIcon],svg[gg-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.15 13.4a2 2 0 0 0 2-2v-8h2v8a4 4 0 0 1-4 4H6.844l3.785 3.785L9.214 20.6L2.85 14.235l6.364-6.364l1.415 1.415L6.514 13.4z"></svg:path>`,
})
export class GgCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerDownRightIcon],svg[gg-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 13.4a2 2 0 0 1-2-2v-8h-2v8a4 4 0 0 0 4 4h10.306l-3.785 3.785l1.415 1.414l6.364-6.364l-6.364-6.364l-1.415 1.415l4.115 4.115z"></svg:path>`,
})
export class GgCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerLeftDownIcon],svg[gg-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.601 6.85a2 2 0 0 1 2.002-1.998l8 .007l.002-2l-8-.007a4 4 0 0 0-4.004 3.996l-.01 10.306l-3.78-3.788l-1.416 1.412l6.358 6.37l6.37-6.358l-1.413-1.415l-4.119 4.11z"></svg:path>`,
})
export class GgCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerLeftUpIcon],svg[gg-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.71 10.625l1.413-1.415l-6.37-6.358l-6.358 6.37l1.416 1.413l3.78-3.789l.01 10.306a4 4 0 0 0 4.004 3.996l8-.007l-.002-2l-8 .007a2 2 0 0 1-2.002-1.998l-.01-10.636z"></svg:path>`,
})
export class GgCornerLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerRightDownIcon],svg[gg-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.399 6.85a2 2 0 0 0-2.002-1.998l-8 .007l-.002-2l8-.007a4 4 0 0 1 4.004 3.996l.01 10.306l3.78-3.788l1.416 1.412l-6.358 6.37l-6.37-6.358l1.413-1.415l4.119 4.11z"></svg:path>`,
})
export class GgCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerRightUpIcon],svg[gg-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 10.625L7.877 9.21l6.37-6.358l6.358 6.37l-1.416 1.413l-3.78-3.789l-.01 10.306a4 4 0 0 1-4.004 3.996l-8-.007l.002-2l8 .007a2 2 0 0 0 2.002-1.998l.01-10.636z"></svg:path>`,
})
export class GgCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerUpLeftIcon],svg[gg-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.628 14.722l-1.412 1.417L2.84 9.79l6.35-6.378l1.417 1.411L6.83 8.615l10.305-.022a4 4 0 0 1 4.009 3.991l.017 8l-2 .005l-.017-8a2 2 0 0 0-2.004-1.996l-10.636.023z"></svg:path>`,
})
export class GgCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCornerUpRightIcon],svg[gg-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.372 14.722l1.412 1.417l6.377-6.35l-6.35-6.378l-1.417 1.411l3.776 3.793l-10.305-.022a4 4 0 0 0-4.009 3.991l-.017 8l2 .005l.017-8a2 2 0 0 1 2.004-1.996l10.636.023z"></svg:path>`,
})
export class GgCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCreditCardIcon],svg[gg-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 9a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M4 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm16 2H4a2 2 0 0 0-2 2v7h20V7a2 2 0 0 0-2-2m2 11H2v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCropIcon],svg[gg-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.932 9.009V16H15v4.009h2V16h3.932v-2H17V7.009H9.932V3h-2v4.009H4v2zm2 0V14H15V9.009z" clip-rule="evenodd"></svg:path>`,
})
export class GgCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCrossIcon],svg[gg-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v3H7a1 1 0 0 0 0 2h4v7a1 1 0 1 0 2 0v-7h4a1 1 0 1 0 0-2h-4z"></svg:path>`,
})
export class GgCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCrowdfireIcon],svg[gg-crowdfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2v2h8v8h2c0 5.523-4.477 10-10 10S2 17.523 2 12m16 0h-2V8h-4V6a6 6 0 1 0 6 6" clip-rule="evenodd"></svg:path>`,
})
export class GgCrowdfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggCrownIcon],svg[gg-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.5 6.091l4.72 4.72L12 6.031l4.781 4.78L21.5 6.092v8.877a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3zm17 4.818v4.06a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-4.061l2.72 2.72L12 8.848l4.781 4.78z" clip-rule="evenodd"></svg:path>`,
})
export class GgCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDangerIcon],svg[gg-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m0 10a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDarkModeIcon],svg[gg-dark-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 16a4 4 0 0 0 0-8z"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDarkModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDataIcon],svg[gg-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 8.89a3 3 0 0 1 1 5.829v5.17h-2v-5.17a3.001 3.001 0 0 1 1-5.83m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path d="M7.05 6.94A6.98 6.98 0 0 0 5 11.89c0 2.177.994 4.122 2.554 5.406l1.423-1.424A5 5 0 0 1 7 11.89c0-1.38.56-2.63 1.464-3.535zm8.486 1.413A5 5 0 0 1 17 11.89c0 1.626-.776 3.07-1.977 3.983l1.423 1.424A6.99 6.99 0 0 0 19 11.889a6.98 6.98 0 0 0-2.05-4.95z"></svg:path><svg:path d="M1 11.89a10.97 10.97 0 0 1 3.222-7.78l1.414 1.415A8.97 8.97 0 0 0 3 11.89a8.97 8.97 0 0 0 2.636 6.364l-1.414 1.414A10.97 10.97 0 0 1 1 11.89m18.778 7.777A10.97 10.97 0 0 0 23 11.89c0-3.038-1.231-5.788-3.222-7.778l-1.414 1.414A8.97 8.97 0 0 1 21 11.89a8.97 8.97 0 0 1-2.636 6.364z"></svg:path></svg:g>`,
})
export class GgDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDatabaseIcon],svg[gg-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 9V7h2v2zm4 0h10V7H9zm-4 6v2h2v-2zm14 2H9v-2h10z"></svg:path><svg:path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v5H3V6a1 1 0 0 1 1-1m-1 8v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDebugIcon],svg[gg-debug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 11a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M9.094 4.75A4 4 0 0 1 8 2h2a2 2 0 1 0 4 0h2a4 4 0 0 1-1.094 2.75A6.02 6.02 0 0 1 17.659 8H19a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1.341A6.003 6.003 0 0 1 6.34 18H5a1 1 0 1 1 0-2h1v-2H5a1 1 0 1 1 0-2h1v-2H5a1 1 0 1 1 0-2h1.341a6.02 6.02 0 0 1 2.753-3.25M8 16v-6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDebugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDesignmodoIcon],svg[gg-designmodo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7 4.054a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-2 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0" clip-rule="evenodd"></svg:path><svg:path d="M22 10.554h-5v-3h5zm-10.45 6.392a4 4 0 0 0 2.829-1.172l2.121 2.121a6.98 6.98 0 0 1-4.95 2.05a6.98 6.98 0 0 1-4.95-2.05l2.122-2.12a4 4 0 0 0 2.828 1.17"></svg:path></svg:g>`,
})
export class GgDesignmodoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDesktopIcon],svg[gg-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v1h18V6a1 1 0 0 0-1-1M3 18V9h18v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDetailsLessIcon],svg[gg-details-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgDetailsLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDetailsMoreIcon],svg[gg-details-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgDetailsMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDialpadIcon],svg[gg-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3h3v3h-3zm0 5h3v3h-3zm0 5v3h3v-3zm5-10h3v3h-3zm0 5v3h3V8zm0 5h3v3h-3zm0 5v3h3v-3zm5-15h3v3h-3zm0 5v3h3V8zm0 5h3v3h-3z"></svg:path>`,
})
export class GgDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDice1Icon],svg[gg-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDice1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDice2Icon],svg[gg-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.2 14.943a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5.055 7.055a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDice3Icon],svg[gg-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m6.945 2.892a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5.055 7.055a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDice3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDice4Icon],svg[gg-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.945 5.055a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2 11.837a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-7.89-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2-7.837a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDice4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDice5Icon],svg[gg-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.945 7.055a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2 7.837a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-11.89 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-11.837a2 2 0 1 0 0 4a2 2 0 0 0 0-4M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDice5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDice6Icon],svg[gg-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.945 5.055a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2 11.837a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-7.89-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2-7.837a2 2 0 1 1 4 0a2 2 0 0 1-4 0m11.89 2.919a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-11.89 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDice6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDigitaloceanIcon],svg[gg-digitalocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a6 6 0 0 0-6 6H1C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11v-5a6 6 0 0 0 0-12"></svg:path><svg:path d="M7 18v-5h5v5zm-4 0v4h4v-4zm0 0H1v-2h2z"></svg:path></svg:g>`,
})
export class GgDigitaloceanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDiscIcon],svg[gg-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0" clip-rule="evenodd"></svg:path><svg:path d="M5 12a7 7 0 0 1 7-7v2a5 5 0 0 0-5 5zm7 5a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7z"></svg:path><svg:path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDisplayFlexIcon],svg[gg-display-flex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 17V7h2v10zM16 7v10h2V7z"></svg:path><svg:path fill-rule="evenodd" d="M2 3h20v18H2zm2 2v14h16V5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDisplayFlexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDisplayFullwidthIcon],svg[gg-display-fullwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5h20V3H2zm0 16h20v-2H2z"></svg:path><svg:path fill-rule="evenodd" d="M2 7v10h20V7zm2 2h16v6H4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDisplayFullwidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDisplayGridIcon],svg[gg-display-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 7v4h4V7zm6 0h4v4h-4zm0 6v4h4v-4zm-6 0h4v4H7z"></svg:path><svg:path fill-rule="evenodd" d="M3 3h18v18H3zm2 2v14h14V5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDisplayGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDisplaySpacingIcon],svg[gg-display-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 21V3h2v18z"></svg:path><svg:path fill-rule="evenodd" d="M7 3h10v18H7zm2 2v14h6V5z" clip-rule="evenodd"></svg:path><svg:path d="M19 3v18h2V3z"></svg:path></svg:g>`,
})
export class GgDisplaySpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDistributeHorizontalIcon],svg[gg-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-opacity=".5" stroke-width="2" d="M11 9h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M5 5v14h2V5zm12 0v14h2V5z"></svg:path></svg:g>`,
})
export class GgDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDistributeVerticalIcon],svg[gg-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-opacity=".5" stroke-width="2" d="M9 11h6v2H9z"></svg:path><svg:path fill="currentColor" d="M19 7H5V5h14zm0 12H5v-2h14z"></svg:path></svg:g>`,
})
export class GgDistributeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDockBottomIcon],svg[gg-dock-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 20V4h20v16zM4 6h16v8H4z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDockLeftIcon],svg[gg-dock-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4h20v16H2zm6 2h12v12H8z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDockRightIcon],svg[gg-dock-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4h20v16H2zm14 14V6H4v12z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDockWindowIcon],svg[gg-dock-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 20V4h20v16zM20 6H6v10h14z" clip-rule="evenodd"></svg:path>`,
})
export class GgDockWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDolbyIcon],svg[gg-dolby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4v16h24V4zm10 8a4 4 0 0 0-4-4H4v8h2a4 4 0 0 0 4-4m8 4h2V8h-2a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path>`,
})
export class GgDolbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDollarIcon],svg[gg-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19v3h2v-3h1a4 4 0 0 0 0-8h-1V7h2v2h2V5h-4V2h-2v3h-1a4 4 0 1 0 0 8h1v4H9v-2H7v4zm2-2h1a2 2 0 1 0 0-4h-1zm-2-6V7h-1a2 2 0 1 0 0 4z" clip-rule="evenodd"></svg:path>`,
})
export class GgDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDribbbleIcon],svg[gg-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 11.955v.09c.01 2.685.984 5.144 2.592 7.048a11.1 11.1 0 0 0 3.378 2.692A10.9 10.9 0 0 0 12 23c3.69 0 6.955-1.816 8.95-4.604q.628-.878 1.08-1.871c.623-1.38.97-2.912.97-4.525c0-3.26-1.418-6.19-3.672-8.203a10.95 10.95 0 0 0-7.663-2.792A10.94 10.94 0 0 0 4.43 4.019a11.05 11.05 0 0 0-2.76 4.188A11 11 0 0 0 1 11.955m19.481 3.064c.336-.944.519-1.96.519-3.019a8.97 8.97 0 0 0-2.581-6.309a10.9 10.9 0 0 1-3.152 3.356a11 11 0 0 1 .738 3.83a11.1 11.1 0 0 1 4.476 2.142m-4.64-.124a9.05 9.05 0 0 1 3.731 1.971a9 9 0 0 1-6.993 4.116a11 11 0 0 0 2.393-3.33c.419-.899.706-1.825.87-2.757m-1.845-2.273a9 9 0 0 0-.495-2.581A10.98 10.98 0 0 1 3.366 9.45A9 9 0 0 0 3 12a8.96 8.96 0 0 0 1.668 5.22a11.02 11.02 0 0 1 9.328-4.598M6.047 18.75a9.01 9.01 0 0 1 7.812-4.13a9 9 0 0 1-.7 2.186a8.96 8.96 0 0 1-3.485 3.89a9 9 0 0 1-3.627-1.946M12 3c1.785 0 3.448.52 4.847 1.415a8.9 8.9 0 0 1-2.479 2.816a10.94 10.94 0 0 0-4.341-4.014A9 9 0 0 1 12 3M8.806 4.846a8.96 8.96 0 0 1 3.832 3.39a8.98 8.98 0 0 1-7.439-.077a9 9 0 0 1-1.044-.573a9.04 9.04 0 0 1 3.172-3.28q.75.202 1.48.54" clip-rule="evenodd"></svg:path>`,
})
export class GgDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDriveIcon],svg[gg-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill-rule="evenodd" d="M2 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm20 2H2v4h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDropIcon],svg[gg-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6.343 19.52a8 8 0 0 1 0-11.313L12 2.55l5.657 5.657A8 8 0 0 1 6.343 19.521Z"></svg:path>`,
})
export class GgDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDropInvertIcon],svg[gg-drop-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.136L5.636 7.5a9 9 0 0 0 7.227 15.323A9 9 0 0 0 18.364 7.5zM7.05 8.914L12 3.964v16.9a7 7 0 0 1-4.95-11.95" clip-rule="evenodd"></svg:path>`,
})
export class GgDropInvertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDropOpacityIcon],svg[gg-drop-opacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.945 21.956A9 9 0 0 1 5.635 7.5L12 1.136L18.364 7.5a9 9 0 0 1 1.991 3.012a9 9 0 0 1-1.991 9.716a9 9 0 0 1-2.419 1.728M7.05 8.914L12 3.964l4.95 4.95a6.98 6.98 0 0 1 2.048 4.783H5.002A6.98 6.98 0 0 1 7.05 8.914" clip-rule="evenodd"></svg:path>`,
})
export class GgDropOpacityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggDuplicateIcon],svg[gg-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 5H7V3h14v14h-2zM9 13v-2h2v2h2v2h-2v2H9v-2H7v-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 7h14v14H3zm2 2h10v10H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditBlackPointIcon],svg[gg-edit-black-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m9 7a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path></svg:g>`,
})
export class GgEditBlackPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditContrastIcon],svg[gg-edit-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 18a5.98 5.98 0 0 1-4-1.528A6 6 0 0 1 6 12c0-1.777.773-3.374 2-4.472A5.98 5.98 0 0 1 12 6z"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditExposureIcon],svg[gg-edit-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9-5v2H9v2h2v2h2v-2h2V9h-2V7zm-2 8v2h6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgEditExposureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditFadeIcon],svg[gg-edit-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-opacity=".3" stroke-width="4" d="M8 12c0-1.48.804-2.773 2-3.465v6.93A4 4 0 0 1 8 12Z"></svg:path><svg:path stroke-opacity=".6" stroke-width="4" d="M14 15.465v-6.93c1.196.692 2 1.984 2 3.465s-.804 2.773-2 3.465Z"></svg:path><svg:path stroke-width="2" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0Z"></svg:path></svg:g>`,
})
export class GgEditFadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditFlipHIcon],svg[gg-edit-flip-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M18 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v2h3a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3v2z"></svg:path><svg:path d="M13 3h-2v18h2zM5 8a1 1 0 0 1 1-1h3V5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v-2H6a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class GgEditFlipHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditFlipVIcon],svg[gg-edit-flip-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M17 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3H5v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3h-2z"></svg:path><svg:path d="M16 5a1 1 0 0 1 1 1v3h2V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v3h2V6a1 1 0 0 1 1-1zm5 8v-2H3v2z"></svg:path></svg:g>`,
})
export class GgEditFlipVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditHighlightIcon],svg[gg-edit-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a5.97 5.97 0 0 0-3.306.992H12v1H7.535a6 6 0 0 0-1.203 2.034H12v1H6.079a6 6 0 0 0 .003 1.966H12v1H6.339c.263.748.67 1.429 1.189 2.008H12v1H8.682A6 6 0 1 0 12 6"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditMarkupIcon],svg[gg-edit-markup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12s5.373 12 12 12m6.58-4.469A9.98 9.98 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 0 0 3.333 7.453L7 10.973h2.17l2.83-4.9l2.83 4.9H17zm-2.488 1.596l-.886-8.153H8.794l-.886 8.153A10 10 0 0 0 12 22a10 10 0 0 0 4.092-.873" clip-rule="evenodd"></svg:path>`,
})
export class GgEditMarkupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditMaskIcon],svg[gg-edit-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.97-2.57Q9 19.22 9 19a3 3 0 1 1 5.97.43a8.03 8.03 0 0 0 4.46-4.46q-.21.03-.43.03a3 3 0 1 1 .43-5.97a8.03 8.03 0 0 0-4.46-4.46q.03.21.03.43a3 3 0 1 1-5.97-.43a8.03 8.03 0 0 0-4.46 4.46A3 3 0 0 1 5 9a3 3 0 1 1-.43 5.97a8.03 8.03 0 0 0 4.46 4.46" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditNoiseIcon],svg[gg-edit-noise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.404 17.766q.022.022.042.045a6 6 0 0 1-.733-.248a.75.75 0 0 1 .691.203m-1.968-1.061a1 1 0 0 1-.086.074a6 6 0 0 1-1.056-1.038a.75.75 0 1 1 1.142.964m-2.065-3.057a.75.75 0 0 1 .155.835a6 6 0 0 1-.342-.972a.8.8 0 0 1 .187.137m0-2.973a.75.75 0 0 1-.262.17q.116-.59.344-1.134a.75.75 0 0 1-.082.964m1.004-1.968a.75.75 0 0 1-.181-.293q.399-.531.903-.963a.75.75 0 1 1-.722 1.255m1.969-1.939a1 1 0 0 1-.082-.097a6 6 0 0 1 1.36-.5a.749.749 0 0 1-1.278.597m3.943 11.106q.465-.103.9-.273a.75.75 0 0 0-.9.273m2.244-1.013c.404-.294.77-.638 1.088-1.023a.75.75 0 1 0-1.088 1.024m1.834-2.169q.3-.597.461-1.26a.75.75 0 0 0-.461 1.26m.526-3.799a6 6 0 0 0-.419-1.334a.75.75 0 0 0 .419 1.335M16.756 8.36a6 6 0 0 0-.875-.92a.75.75 0 1 0 .875.919m-2.319-1.592a.8.8 0 0 0 .131-.176a6 6 0 0 0-1.403-.464a.75.75 0 0 0 1.272.64m-1.911.879a.75.75 0 1 1-1.06 1.06a.75.75 0 0 1 1.06-1.06m-2.122 1.969a.75.75 0 1 1-1.06 1.06a.75.75 0 0 1 1.06-1.06m-1.968 3.182a.75.75 0 1 0-1.061-1.061a.75.75 0 0 0 1.06 1.06m1.969.852a.75.75 0 1 1-1.06 1.06a.75.75 0 0 1 1.06-1.06m2.122-.851a.75.75 0 1 0-1.061-1.061a.75.75 0 0 0 1.06 1.06m1.912-3.181a.75.75 0 1 1-1.06 1.06a.75.75 0 0 1 1.06-1.06m2.122 3.153a.75.75 0 1 0-1.061-1.06a.75.75 0 0 0 1.06 1.06m-2.135.922a.75.75 0 1 1-1.06 1.06a.75.75 0 0 1 1.06-1.06m-2.107 3.015a.75.75 0 1 0-1.06-1.06a.75.75 0 0 0 1.06 1.06"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditNoiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditShadowsIcon],svg[gg-edit-shadows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.306 6.992A6 6 0 1 0 15.318 17H12v-1h4.472a6 6 0 0 0 1.19-2.008H12v-1h5.918a6 6 0 0 0 .003-1.966H12v-1h5.668a6 6 0 0 0-1.203-2.034H12v-1z"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditShadowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditStraightIcon],svg[gg-edit-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7m-7 9H1v-2h4zm14 0a7 7 0 1 1-14 0zm0 0v-2h4v2z"></svg:path>`,
})
export class GgEditStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEditUnmaskIcon],svg[gg-edit-unmask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-1 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0M5 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgEditUnmaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEjectIcon],svg[gg-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.95 14.395l1.414-1.415L12 6.617L5.636 12.98l1.414 1.415L12 9.445zM6 17.384h12v-2H6z"></svg:path>`,
})
export class GgEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEnterIcon],svg[gg-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 5H8v4H6V3h16v18H6v-6h2v4h12z"></svg:path><svg:path d="m13.074 16.95l-1.414-1.414L14.196 13H2v-2h12.196L11.66 8.465l1.414-1.415l4.95 4.95z"></svg:path></svg:g>`,
})
export class GgEnterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEraseIcon],svg[gg-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 12.9a2 2 0 0 0 0 2.828l3.858 3.858H4.086a1 1 0 1 0 0 2h16a1 1 0 0 0 0-2h-9.13l9.515-9.515a2 2 0 0 0 0-2.828L16.228 3a2 2 0 0 0-2.829 0zm4.326-1.498l-2.912 2.912l4.243 4.242l2.911-2.911zM9.24 9.988l4.243 4.243l5.573-5.574l-4.242-4.243z" clip-rule="evenodd"></svg:path>`,
})
export class GgEraseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEreaderIcon],svg[gg-ereader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 7a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm18 2h-8v14h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M3 5h8v14H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEreaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEricssonIcon],svg[gg-ericsson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.717 5.723a2 2 0 1 0 1.69 3.625l10.876-5.071a2 2 0 0 0-1.69-3.625zM4.75 15.381a2 2 0 0 1 .967-2.658l10.876-5.071a2 2 0 1 1 1.69 3.625L7.407 16.348a2 2 0 0 1-2.657-.967m-2 7a2 2 0 0 1 .967-2.658l10.876-5.071a2 2 0 1 1 1.69 3.625L5.407 23.348a2 2 0 0 1-2.657-.967"></svg:path>`,
})
export class GgEricssonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEthernetIcon],svg[gg-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 .5v20h7v3h2v-3h7V.5zm14 2H6v6h4v6h4v-6h4zm-12 16v-8h2v6h8v-6h2v8z" clip-rule="evenodd"></svg:path>`,
})
export class GgEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEuroIcon],svg[gg-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.554 15.536a5 5 0 0 1-7.902-1.098h2.38l.696-1.876H10.05a5 5 0 0 1 0-1.125h4.287l.696-1.874h-4.38a4.998 4.998 0 0 1 7.902-1.099l1.414-1.414A7.003 7.003 0 0 0 8.454 9.562H6.032l-.696 1.875H8.04a7 7 0 0 0 0 1.126H4.728l-.696 1.874h4.422a7.003 7.003 0 0 0 11.514 2.513z"></svg:path>`,
})
export class GgEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEventbriteIcon],svg[gg-eventbrite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.673 17.438a6 6 0 0 1-6.819-1.234l14.01-6.533a10 10 0 0 0-.663-1.897C18.867 2.768 12.917.603 7.91 2.937s-7.17 8.284-4.836 13.29s8.284 7.17 13.289 4.836a9.97 9.97 0 0 0 5.317-6.077h-4.339a5.97 5.97 0 0 1-2.669 2.452M9.602 6.562a6 6 0 0 0-3.438 6.017l10.257-4.783a6 6 0 0 0-6.819-1.234" clip-rule="evenodd"></svg:path>`,
})
export class GgEventbriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExpandIcon],svg[gg-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.306 16.593l-.035 2l-6.999-.122l.123-7l2 .036l-.063 3.585l7.894-7.624l-3.532-.061l.035-2l6.999.122l-.123 7l-2-.036l.064-3.638l-7.948 7.676z"></svg:path>`,
})
export class GgExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExportIcon],svg[gg-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.95 5.968l-1.414 1.414L13 4.846v12.196h-2V4.847L8.465 7.382L7.05 5.968L12 1.018z"></svg:path><svg:path d="M5 20.982v-10h4v-2H3v14h18v-14h-6v2h4v10z"></svg:path></svg:g>`,
})
export class GgExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExtensionIcon],svg[gg-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 3h8v8h-8zm2 2h4v4h-4z"></svg:path><svg:path d="M17 21v-8h-6V7H3v14zM9 9H5v4h4zM5 19v-4h4v4zm6 0v-4h4v4z"></svg:path></svg:g>`,
})
export class GgExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExtensionAddIcon],svg[gg-extension-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 4h2v2h2v2h-2v2h-2V8h-2V6h2z"></svg:path><svg:path fill-rule="evenodd" d="M12 12V6H4v14h14v-8zM6 8h4v4H6zm4 6v4H6v-4zm6 0v4h-4v-4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgExtensionAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExtensionAltIcon],svg[gg-extension-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5v14h8v-6h6V5zm6 2H7v4h4zm0 6H7v4h4zm2-2h4V7h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgExtensionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExtensionRemoveIcon],svg[gg-extension-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 11V5H4v14h14v-8zM6 7h4v4H6zm4 6v4H6v-4zm6 0v4h-4v-4z" clip-rule="evenodd"></svg:path><svg:path d="M20 7h-6v2h6z"></svg:path></svg:g>`,
})
export class GgExtensionRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggExternalIcon],svg[gg-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z"></svg:path><svg:path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z"></svg:path></svg:g>`,
})
export class GgExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEyeIcon],svg[gg-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M12 3c5.592 0 10.29 3.824 11.622 9c-1.332 5.176-6.03 9-11.622 9S1.71 17.176.378 12C1.71 6.824 6.408 3 12 3m0 16c-4.476 0-8.269-2.942-9.543-7C3.731 7.942 7.524 5 12 5s8.269 2.942 9.543 7c-1.274 4.058-5.067 7-9.543 7"></svg:path></svg:g>`,
})
export class GgEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggEyeAltIcon],svg[gg-eye-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M12 3C6.408 3 1.71 6.824.378 12C1.71 17.176 6.408 21 12 21s10.29-3.824 11.622-9C22.29 6.824 17.592 3 12 3m4 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEyeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFacebookIcon],svg[gg-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z"></svg:path>`,
})
export class GgFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFeedIcon],svg[gg-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M12.552 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path><svg:path fill-opacity=".8" d="M12.552 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path d="M3.448 4.002a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm0 8.996a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class GgFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFigmaIcon],svg[gg-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6zm7 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-10 3a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3m3 4a3 3 0 1 0 3 3v-3z"></svg:path>`,
})
export class GgFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFileIcon],svg[gg-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5a3 3 0 0 1 3-3h8a7 7 0 0 1 7 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm10-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-6zm5.584 3A5.01 5.01 0 0 0 15 4.1V7z" clip-rule="evenodd"></svg:path>`,
})
export class GgFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFileAddIcon],svg[gg-file-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18v-2H8v-2h2v-2h2v2h2v2h-2v2z"></svg:path><svg:path fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zm0 2h7v5h6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 .1A5.01 5.01 0 0 1 18.584 7H15z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFileAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFileDocumentIcon],svg[gg-file-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 18h10v-2H7zm10-4H7v-2h10zM7 10h4V8H7z"></svg:path><svg:path fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zm0 2h7v5h6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 .1A5.01 5.01 0 0 1 18.584 7H15z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFileDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFileRemoveIcon],svg[gg-file-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 15h6v-2H9z"></svg:path><svg:path fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7zm0 2h7v5h6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 .1A5.01 5.01 0 0 1 18.584 7H15z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFileRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFilmIcon],svg[gg-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m11 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0M6 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m11 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0M6 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m11 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFiltersIcon],svg[gg-filters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.708 15.44a6.97 6.97 0 0 0 3.997 1.266a7 7 0 1 0 6.59-9.413A7 7 0 1 0 4.708 15.44m1.148-1.64a5 5 0 0 0 2.431.886a6.97 6.97 0 0 1 1.256-4.408a6.97 6.97 0 0 1 3.713-2.687a5 5 0 1 0-7.4 6.21m12.289-3.603a5 5 0 0 0-2.432-.885a6.97 6.97 0 0 1-1.256 4.408a6.97 6.97 0 0 1-3.713 2.687a5 5 0 1 0 7.4-6.21" clip-rule="evenodd"></svg:path>`,
})
export class GgFiltersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFlagIcon],svg[gg-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 21h2V11h6v2h8V5h-7V3H4zm8-16H6v4h7v2h5V7h-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFlagAltIcon],svg[gg-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.439 7l2.4-3H7v6h7.839zM19 12H7v10H5V2h14l-4 5z" clip-rule="evenodd"></svg:path>`,
})
export class GgFlagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFolderIcon],svg[gg-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.5a2 2 0 0 0-2 2v1q0 .086.007.168A3 3 0 0 0 0 7.5v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3h-9.126A4 4 0 0 0 8 1.5zm5.732 3A2 2 0 0 0 8 3.5H4v1zM3 6.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFolderAddIcon],svg[gg-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 14.5v2h2v-2h2v-2h-2v-2h-2v2H9v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 1.5a2 2 0 0 0-2 2v1q0 .086.007.168A3 3 0 0 0 0 7.5v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3h-9.126A4 4 0 0 0 8 1.5zm5.732 3A2 2 0 0 0 8 3.5H4v1zM3 6.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFolderAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFolderRemoveIcon],svg[gg-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 14.5v-2h6v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 1.5a2 2 0 0 0-2 2v1q0 .086.007.168A3 3 0 0 0 0 7.5v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3h-9.126A4 4 0 0 0 8 1.5zm5.732 3A2 2 0 0 0 8 3.5H4v1zM3 6.5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFolderRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFontHeightIcon],svg[gg-font-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 5V3H3v2zm0 14v2H3v-2z"></svg:path><svg:path fill-rule="evenodd" d="M12 7.376a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 1 0 1.812.846L9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.251A1 1 0 0 0 12 7.376M13.115 13h-2.23L12 10.61z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFontHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFontSpacingIcon],svg[gg-font-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 21h2V3h-2zM5 21H3V3h2z"></svg:path><svg:path fill-rule="evenodd" d="M9.464 16.048L9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.25A1 1 0 0 0 12 7.375a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 0 0 1.812.846M12 10.61L10.885 13h2.23z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFontSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatBoldIcon],svg[gg-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4.504H7v14.992h6a4 4 0 0 0 .604-7.955A4 4 0 0 0 11 4.505Zm-2 2h2a2 2 0 1 1 0 4H9zm0 10.991v-4h4a2 2 0 1 1 0 4z" clip-rule="evenodd"></svg:path>`,
})
export class GgFormatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatCenterIcon],svg[gg-format-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 8a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm2-3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgFormatCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatColorIcon],svg[gg-format-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.948 3.21A1 1 0 0 0 12 2.632a1 1 0 0 0-.948.576l-5.917 12.69a1 1 0 1 0 1.813.845l1.45-3.111h7.203l1.451 3.111a1 1 0 0 0 1.813-.845zm1.72 8.422L12 5.909l-2.669 5.723z" clip-rule="evenodd"></svg:path><svg:path d="M6 19.368a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgFormatColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatHeadingIcon],svg[gg-format-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19V5h2v6h8V5h2v14h-2v-6H8v6z"></svg:path>`,
})
export class GgFormatHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatIndentDecreaseIcon],svg[gg-format-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7H4V5h16zm0 4h-8V9h8zm-8 4h8v-2h-8zM9 9l-5 3l5 3zm-5 8v2h16v-2z"></svg:path>`,
})
export class GgFormatIndentDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatIndentIncreaseIcon],svg[gg-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7H4V5h16zm0 4h-8V9h8zm-8 4h8v-2h-8zm-8 0l5-3l-5-3zm0 2v2h16v-2z"></svg:path>`,
})
export class GgFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatItalicIcon],svg[gg-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.49 5.458h6l-.711 1.87h-2l-3.558 9.345h2l-.711 1.87h-6l.711-1.87h2l3.558-9.346h-2z"></svg:path>`,
})
export class GgFormatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatJustifyIcon],svg[gg-format-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgFormatJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatLeftIcon],svg[gg-format-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgFormatLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatLineHeightIcon],svg[gg-format-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.097 6.997h2.077l-3-3l-3 3h1.923v10.006H1.159l3 3l3-3H5.097zM22.841 7h-14V5h14zm0 4h-14V9h14zm-14 4h14v-2h-14zm14 4h-14v-2h14z"></svg:path>`,
})
export class GgFormatLineHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatRightIcon],svg[gg-format-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zm1 5a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h16a1 1 0 0 0 1-1m-1 3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z"></svg:path>`,
})
export class GgFormatRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatSeparatorIcon],svg[gg-format-separator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 5a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zm0 2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm1 5a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1m-1 9a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2z" opacity=".5"></svg:path><svg:path fill-rule="evenodd" d="M21 16a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgFormatSeparatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatSlashIcon],svg[gg-format-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.526 6.106c.5.233.74.777.537 1.215L9.885 18.424c-.204.438-.775.604-1.276.37c-.5-.233-.74-.778-.536-1.216L13.25 6.476c.204-.438.775-.604 1.276-.37" clip-rule="evenodd"></svg:path>`,
})
export class GgFormatSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatStrikeIcon],svg[gg-format-strike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h4V5H7v2h4v3h2zm-2 12v-5h2v5zm-6-6h14v-2H5z"></svg:path>`,
})
export class GgFormatStrikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatTextIcon],svg[gg-format-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3H3v3.5h1V4h2.5zm2 1V3H11v1zM13 4h2.5V3H13zm4.5-1v1H20v2.5h1V3zM21 8.5h-1V11h1zm0 4.5h-1v2.5h1zm0 4.5h-1V20h-2.5v1H21zM15.5 21v-1H13v1zM11 21v-1H8.5v1zm-4.5 0v-1H4v-2.5H3V21zM3 15.5h1V13H3zM3 11h1V8.5H3zm8-1.5H7v-2h10v2h-4v7h-2z"></svg:path>`,
})
export class GgFormatTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatUnderlineIcon],svg[gg-format-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10V4h2v6a4 4 0 0 0 8 0V4h2v6a6 6 0 0 1-12 0m1 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgFormatUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFormatUppercaseIcon],svg[gg-format-uppercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 9h-3v8H8V9H5V7h8zm5 4h-2v4h-2v-4h-2v-2h6z" clip-rule="evenodd"></svg:path>`,
})
export class GgFormatUppercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggFramerIcon],svg[gg-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M12 21V9H6v6z"></svg:path><svg:path d="M18 9V3H6l6 6H6v6h12l-6-6z"></svg:path></svg:g>`,
})
export class GgFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGamesIcon],svg[gg-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.47 11.293a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414m.707-2.121a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414m3.535 2.121a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414m-3.535 2.121a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415M6 13H4v-2h2V9h2v2h2v2H8v2H6z"></svg:path><svg:path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 2H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgGamesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGenderFemaleIcon],svg[gg-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a5 5 0 0 0-1 9.9V15H8v2h3v4h2v-4h3v-2h-3v-2.1A5.002 5.002 0 0 0 12 3M9 8a3 3 0 1 0 6 0a3 3 0 0 0-6 0" clip-rule="evenodd"></svg:path>`,
})
export class GgGenderFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGenderMaleIcon],svg[gg-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.189 7l.002-2l7 .007l-.008 7l-2-.002l.004-3.588l-3.044 3.044a5.002 5.002 0 0 1-7.679 6.336a5 5 0 0 1 6.25-7.735l3.058-3.058zm-4.31 5.14a3 3 0 1 1 4.242 4.244A3 3 0 0 1 7.88 12.14" clip-rule="evenodd"></svg:path>`,
})
export class GgGenderMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGhostIcon],svg[gg-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h12v4H3zm18 4h-4V4h4zM3 10h18v4H3zm8 6H3v4h8zm2 0v4h8v-4z"></svg:path>`,
})
export class GgGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGhostCharacterIcon],svg[gg-ghost-character-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.976 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.995 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M19 21V10a7 7 0 1 0-14 0v11h2.828l1.415-1.414L10.657 21h2.686l1.414-1.414L16.172 21zm-2-11a5 5 0 0 0-10 0v9l2.243-2.243L12 19.515l2.757-2.758L17 19z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgGhostCharacterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGiftIcon],svg[gg-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.535 2.879a3 3 0 0 0-4.242 0l-1.414 1.414q-.09.09-.172.186a3 3 0 0 0-.171-.186L10.12 2.879A3 3 0 1 0 5.88 7.12l.877.88H1v6h2v8h18v-8h2V8h-6.343l.878-.879a3 3 0 0 0 0-4.242M14.707 7.12l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414m-4.586-1.414L8.707 4.293a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 1 0 1.414-1.414M21 10v2H3v-2zm-8.083 4H19v6h-6.083zm-1.834 0v6H5v-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGirlIcon],svg[gg-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M12.024 2H12C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-5.258-4.058-9.568-9.212-9.97v-.002A10 10 0 0 0 12.025 2M12 20a8 8 0 0 0 7.742-10.022a10.02 10.02 0 0 1-8.981-4.376a7.98 7.98 0 0 1-5.692 2.4A8 8 0 0 0 12 20m-.021-16h.045z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGitBranchIcon],svg[gg-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a2 2 0 0 0-1 3.732v10.536A2 2 0 1 0 10.732 20h1.227a4 4 0 0 0 4-4v-1.268a2 2 0 0 0-1-3.732a2 2 0 0 0-1 3.732V16a2 2 0 0 1-2 2h-1.227a2 2 0 0 0-.732-.732V6.732A2 2 0 0 0 9 3"></svg:path>`,
})
export class GgGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGitCommitIcon],svg[gg-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4a1 1 0 1 1 2 0v5.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0v-5.17a3.001 3.001 0 0 1 0-5.66zm1 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGitForkIcon],svg[gg-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a2 2 0 1 1 3 1.732v7.308h1.791a2 2 0 0 0 2-2v-1.256a2 2 0 1 1 2-.024v1.28a4 4 0 0 1-4 4H10v1.228A2 2 0 0 1 9 21a2 2 0 0 1-1-3.732V6.732A2 2 0 0 1 7 5"></svg:path>`,
})
export class GgGitForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGitPullIcon],svg[gg-git-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a2 2 0 1 1 3.763.945h.58a4 4 0 0 1 4 4v1.28a2 2 0 0 1-1.02 3.72a2 2 0 0 1-.98-3.745V9.945a2 2 0 0 0-2-2H10v9.323A2 2 0 0 1 9 21a2 2 0 0 1-1-3.732V6.732A2 2 0 0 1 7 5"></svg:path>`,
})
export class GgGitPullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGitterIcon],svg[gg-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5h2v13H5zm4 3h2v18H9zm6 0h-2v18h2zm2 0h2v10h-2z"></svg:path>`,
})
export class GgGitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGlassIcon],svg[gg-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 10a5 5 0 0 1-4 4.9V17h2v2H9v-2h2v-2.1A5 5 0 0 1 7 10V5h10zm-2-3H9v3a3 3 0 1 0 6 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGlassAltIcon],svg[gg-glass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2h14l-1.64 16.398A4 4 0 0 1 13.38 22h-2.76a4 4 0 0 1-3.98-3.602zm2.51 5l-.3-3h9.58l-.3 3zm.2 2l.92 9.199A2 2 0 0 0 10.62 20h2.76a2 2 0 0 0 1.99-1.801L16.29 9z" clip-rule="evenodd"></svg:path>`,
})
export class GgGlassAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGlobeIcon],svg[gg-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.853 8a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" clip-rule="evenodd"></svg:path><svg:path d="M5 12.13a8 8 0 0 0 5.941 3.819V18H8.853v2h6v-2h-1.912v-2.073A8.002 8.002 0 0 0 18.63 3.745l-1.704 1.048a6 6 0 1 1-10.221 6.288z"></svg:path></svg:g>`,
})
export class GgGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGlobeAltIcon],svg[gg-globe-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m2.806-2.585a7 7 0 0 0 4.175-5.89c-.823.449-1.861.817-3.044 1.073c-.149 1.87-.554 3.54-1.131 4.817M9.195 5.585a7.02 7.02 0 0 0-3.973 4.659c.232.22.626.49 1.226.757c.45.2.973.379 1.557.529c.054-2.324.498-4.415 1.19-5.945m.906 8.326c.156 1.457.484 2.71.898 3.64c.294.662.593 1.074.823 1.293c.082.078.14.12.178.14a1 1 0 0 0 .178-.14c.23-.22.529-.63.823-1.292c.414-.932.742-2.184.898-3.641a20 20 0 0 1-3.798 0m-2.038-.313c.149 1.87.554 3.54 1.131 4.817a7 7 0 0 1-4.175-5.89c.823.449 1.861.817 3.044 1.073M14 11.89a18 18 0 0 1-4 0c.014-2.226.423-4.145 1-5.442c.293-.661.592-1.073.822-1.292a1 1 0 0 1 .178-.14a1 1 0 0 1 .178.14c.23.22.529.63.823 1.292c.576 1.297.986 3.216.999 5.442m1.995-.36c-.053-2.324-.498-4.415-1.19-5.945a7.02 7.02 0 0 1 3.973 4.659c-.232.22-.626.49-1.226.757c-.45.2-.973.379-1.557.529" clip-rule="evenodd"></svg:path>`,
})
export class GgGlobeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGoogleIcon],svg[gg-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12"></svg:path>`,
})
export class GgGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGoogleTasksIcon],svg[gg-google-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.768 5.714a2 2 0 0 1 3.064 2.572L10.833 19.01a2 2 0 1 1-3.064-2.57zM3 12.74a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class GgGoogleTasksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggGymIcon],svg[gg-gym-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.274 9.869l-3.442-4.915l1.639-1.147l3.441 4.915zm-1.884 2.54L16.67 9.95l-8.192 5.736l1.72 2.457l-1.638 1.148l-4.588-6.554L5.61 11.59l1.72 2.458l8.192-5.736l-1.72-2.458l1.638-1.147l4.588 6.554zm2.375-5.326l1.638-1.147l-1.147-1.638l-1.638 1.147zM7.168 19.046l-3.442-4.915l-1.638 1.147l3.441 4.915zm-2.786-.491l-1.638 1.147l-1.147-1.638l1.638-1.147z"></svg:path>`,
})
export class GgGymIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHashtagIcon],svg[gg-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z" clip-rule="evenodd"></svg:path>`,
})
export class GgHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHeadsetIcon],svg[gg-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 21a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2v-1a7 7 0 1 0-14 0v1h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3v-9a9 9 0 0 1 18 0v9zm2-6h-2v4h2zM7 15H5v4h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHeartIcon],svg[gg-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.012 5.572l-1.087-1.087a5.5 5.5 0 1 0-7.778 7.778l8.839 8.839l.002-.002l.026.026l8.839-8.839a5.5 5.5 0 1 0-7.778-7.778zm-.024 12.7l4.936-4.937l1.45-1.4h.002l1.063-1.062a3.5 3.5 0 1 0-4.95-4.95L12.013 8.4l-.007-.007h-.001L9.511 5.9a3.5 3.5 0 1 0-4.95 4.95l2.54 2.54l.001-.003z" clip-rule="evenodd"></svg:path>`,
})
export class GgHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHelloIcon],svg[gg-hello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.5 12a5.5 5.5 0 0 1-1.725 4A5.48 5.48 0 0 1 12 17.5c-1.461 0-2.79-.57-3.775-1.5A5.5 5.5 0 0 1 6.5 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H1zm2.75 5a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgHelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHomeIcon],svg[gg-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21 8.772l-6.98-6.979a3 3 0 0 0-4.242 0L3 8.571v14.515h7v-6a2 2 0 1 1 4 0v6h7zm-9.808-5.565L5 9.4v11.686h3v-4a4 4 0 0 1 8 0v4h3V9.6l-6.393-6.394a1 1 0 0 0-1.415 0" clip-rule="evenodd"></svg:path>`,
})
export class GgHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHomeAltIcon],svg[gg-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 22.879a3 3 0 0 1-3-3v-10q0-.052.005-.1H3c0-.577.229-1.13.636-1.536L9.88 2a3 3 0 0 1 4.242 0l6.243 6.243c.407.407.636.96.636 1.535h-.005q.005.05.005.1v10a3 3 0 0 1-3 3zm6.707-19.465L19 9.707V19.88a1 1 0 0 1-1 1h-3v-5a3 3 0 1 0-6 0v5H6a1 1 0 0 1-1-1V9.707l6.293-6.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class GgHomeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggHomeScreenIcon],svg[gg-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm8 2H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggIcecreamIcon],svg[gg-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 17h4V8A7 7 0 1 0 5 8v9h4v3a3 3 0 1 0 6 0zm2-2V8A5 5 0 0 0 7 8v7h4v5a1 1 0 1 0 2 0v-5z" clip-rule="evenodd"></svg:path>`,
})
export class GgIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggIfDesignIcon],svg[gg-if-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h4v14h-4zM5 19v-9h4v9zM7 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0h4v4h-4zm4 5h-4v4h4z"></svg:path>`,
})
export class GgIfDesignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggImageIcon],svg[gg-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm18 2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.314l6.878-6.879a3 3 0 0 1 4.243 0L22 15.686V6a1 1 0 0 0-1-1m0 14H10.142l5.465-5.464a1 1 0 0 1 1.414 0l4.886 4.886A1 1 0 0 1 21 19"></svg:path></svg:g>`,
})
export class GgImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggImportIcon],svg[gg-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 9.982v10h14v-10h-4v-2h6v14H3v-14h6v2z"></svg:path><svg:path d="M13 2h-2v12.053l-2.535-2.536l-1.415 1.415l4.95 4.95l4.95-4.95l-1.414-1.415L13 14.054z"></svg:path></svg:g>`,
})
export class GgImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInboxIcon],svg[gg-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v15a2 2 0 0 1-2 2H8.148a2 2 0 0 1-.148.005H4a2 2 0 0 1-2-2zm3-1h14a1 1 0 0 1 1 1v9h-4a2 2 0 0 0-2 2v1h-4v-.995a2 2 0 0 0-2-2H4V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggIndieHackersIcon],svg[gg-indie-hackers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h3v12H4zm6 0h3v4.5h4V6h3v12h-3v-4.5h-4V18h-3z"></svg:path>`,
})
export class GgIndieHackersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInfinityIcon],svg[gg-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.121 9.879l2.083 2.083l.007-.006l1.452 1.452l.006.006l2.122 2.122a5 5 0 1 0 0-7.072l-.714.714l1.415 1.414l.713-.713a3 3 0 1 1 0 4.242l-2.072-2.072l-.007.006l-3.59-3.59a5 5 0 1 0 0 7.07l.713-.713l-1.414-1.414l-.714.713a3 3 0 1 1 0-4.242"></svg:path>`,
})
export class GgInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInfoIcon],svg[gg-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 10.98a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm1-4.929a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInpictureIcon],svg[gg-inpicture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 12h-6v5h6z"></svg:path><svg:path fill-rule="evenodd" d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2 0h18v12H3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInpictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsertAfterIcon],svg[gg-insert-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 0 1 0-2h3V5a1 1 0 0 1 1-1M3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class GgInsertAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsertAfterOIcon],svg[gg-insert-after-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 8a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V6a1 1 0 1 0-2 0v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 9a8 8 0 1 1 16 0A8 8 0 0 1 4 9m8 6a6 6 0 1 1 0-12a6 6 0 0 1 0 12" clip-rule="evenodd"></svg:path><svg:path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgInsertAfterOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsertAfterRIcon],svg[gg-insert-after-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 8a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V6a1 1 0 1 0-2 0v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgInsertAfterRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsertBeforeIcon],svg[gg-insert-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1m9 15a1 1 0 0 0 1-1v-3h3a1 1 0 1 0 0-2h-3v-3a1 1 0 1 0-2 0v3H8a1 1 0 1 0 0 2h3v3a1 1 0 0 0 1 1"></svg:path>`,
})
export class GgInsertBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsertBeforeOIcon],svg[gg-insert-before-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2zm4 12a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 14a8 8 0 1 0 16 0a8 8 0 0 0-16 0m8-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInsertBeforeOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsertBeforeRIcon],svg[gg-insert-before-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2zm4 12a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3zm13 1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInsertBeforeRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInsightsIcon],svg[gg-insights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8h4v12H5V10h4V4h6zm-2-2h-2v12h2zm2 4v8h2v-8zm-6 2v6H7v-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgInsightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInstagramIcon],svg[gg-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0" clip-rule="evenodd"></svg:path><svg:path d="M18 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggInternalIcon],svg[gg-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m20.708 4.412l-10.25 10.287h3.59v2h-7v-7h2v3.58L19.293 3z"></svg:path><svg:path d="M11 4.706v2H5v12h12v-6h2v8H3v-16z"></svg:path></svg:g>`,
})
export class GgInternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggKeyIcon],svg[gg-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0h6v2h2v-2h1v2h2v-4H9a3 3 0 0 0-3-3m1 5v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GgKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggKeyboardIcon],svg[gg-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggKeyholeIcon],svg[gg-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 12.83a3.001 3.001 0 1 0-2 0V16a1 1 0 1 0 2 0zM11 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></svg:path></svg:g>`,
})
export class GgKeyholeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLaptopIcon],svg[gg-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v8H5z" clip-rule="evenodd"></svg:path><svg:path d="M2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLastpassIcon],svg[gg-lastpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1M4 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class GgLastpassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLayoutGridIcon],svg[gg-layout-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H7v4h4zm0 6H7v4h4zm2 0h4v4h-4zm4-6h-4v4h4z"></svg:path>`,
})
export class GgLayoutGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLayoutGridSmallIcon],svg[gg-layout-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h2v2H7zm4 0h2v2h-2zm6 0h-2v2h2zM7 11h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class GgLayoutGridSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLayoutListIcon],svg[gg-layout-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v2h2zm-2 6v-2h2v2zm0 2v2h2v-2zm4 0v2h6v-2zm6-2v-2h-6v2zm0-6v2h-6V7z"></svg:path>`,
})
export class GgLayoutListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLayoutPinIcon],svg[gg-layout-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.93 4.016h-2.165a3.001 3.001 0 0 0-5.67 0H6.932a3 3 0 0 0-3 3v2.196a3.001 3.001 0 0 0 0 5.608v2.196a3 3 0 0 0 3 3h2.154a3.001 3.001 0 0 0 5.692 0h2.154a3 3 0 0 0 3-3v-2.171a3.001 3.001 0 0 0 0-5.658V7.016a3 3 0 0 0-3-3m-11 10.853v2.147a1 1 0 0 0 1 1H9.12a3.001 3.001 0 0 1 5.623 0h2.189a1 1 0 0 0 1-1v-2.17a3.001 3.001 0 0 1 0-5.66v-2.17a1 1 0 0 0-1-1h-2.177a3.001 3.001 0 0 1-5.647 0H6.931a1 1 0 0 0-1 1v2.147a3.001 3.001 0 0 1 0 5.706" clip-rule="evenodd"></svg:path>`,
})
export class GgLayoutPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLinearIcon],svg[gg-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.035 12.943a8.96 8.96 0 0 0 2.587 5.421a8.96 8.96 0 0 0 5.42 2.587zM3 11.494l9.492 9.492a9 9 0 0 0 2.378-.459L3.46 9.115A9 9 0 0 0 3 11.494m.867-3.384l12.009 12.009a9 9 0 0 0 1.773-1.123L4.99 6.336A9 9 0 0 0 3.867 8.11m1.796-2.515a9 9 0 0 1 12.728 12.728z"></svg:path>`,
})
export class GgLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLinkIcon],svg[gg-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 12l1.415 1.414l2.828-2.828a4 4 0 0 0-5.657-5.657l-2.828 2.828L12 9.172l2.828-2.829a2 2 0 1 1 2.829 2.829zM12 14.829l1.414 1.414l-2.828 2.828a4 4 0 0 1-5.657-5.657l2.828-2.828L9.172 12l-2.829 2.829a2 2 0 1 0 2.829 2.828z"></svg:path><svg:path d="M14.829 10.586a1 1 0 0 0-1.415-1.415l-4.242 4.243a1 1 0 1 0 1.414 1.414z"></svg:path></svg:g>`,
})
export class GgLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggListIcon],svg[gg-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm2 5h2v2H6zm5 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-3 4H6v2h2zm2 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-2 3H6v2h2zm2 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggListTreeIcon],svg[gg-list-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1H1v8h8V6h2v14h4v3h8v-8h-8v3h-2V6h2v3h8V1h-8v3H9zm12 2h-4v4h4zm-4 14h4v4h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgListTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLivePhotoIcon],svg[gg-live-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.98 21.953a10 10 0 0 1-1.96 0l.193-1.991a8 8 0 0 0 1.574 0zm-3.884-.381l.58-1.914a8 8 0 0 1-1.446-.6l-.945 1.763c.573.307 1.179.56 1.811.75m-3.44-1.841l1.27-1.545a8 8 0 0 1-1.111-1.11L4.27 18.343c.415.506.88.97 1.386 1.386m-2.477-3.014l1.763-.944a8 8 0 0 1-.6-1.447l-1.914.58q.29.95.751 1.81M2.047 12.98l1.991-.193a8 8 0 0 1 0-1.574l-1.99-.193a10 10 0 0 0 0 1.96m.38-3.884l1.914.58q.231-.759.6-1.446l-1.763-.945a10 10 0 0 0-.75 1.811m1.841-3.44l1.545 1.27a8 8 0 0 1 1.11-1.111L5.657 4.27c-.506.415-.97.88-1.386 1.386m3.014-2.477l.945 1.763a8 8 0 0 1 1.446-.6l-.58-1.914a10 10 0 0 0-1.81.751m3.734-1.132a10 10 0 0 1 1.96 0l-.193 1.991a8 8 0 0 0-1.574 0zm3.884.381l-.58 1.914q.759.231 1.447.6l.944-1.763a10 10 0 0 0-1.811-.75m3.44 1.841l-1.27 1.545q.61.501 1.111 1.11l1.545-1.269a10 10 0 0 0-1.386-1.386m2.477 3.015l-1.763.945q.369.687.6 1.446l1.914-.58a10 10 0 0 0-.751-1.81m1.132 3.734l-1.991.193a8 8 0 0 1 0 1.574l1.99.194a10 10 0 0 0 0-1.961m-.38 3.884l-1.914-.58a8 8 0 0 1-.6 1.447l1.763.944c.307-.573.56-1.179.75-1.811m-1.841 3.44l-1.545-1.27a8 8 0 0 1-1.11 1.111l1.269 1.545c.506-.415.97-.88 1.386-1.386m-3.015 2.477l-.944-1.763a8 8 0 0 1-1.447.6l.58 1.914a10 10 0 0 0 1.81-.751"></svg:path><svg:path fill-rule="evenodd" d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-4 6a4 4 0 1 0 8 0a4 4 0 0 0-8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgLivePhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarIcon],svg[gg-loadbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="4" x="3" y="10" fill="currentColor" rx="2"></svg:rect>`,
})
export class GgLoadbarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarAltIcon],svg[gg-loadbar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="18" height="4" x="3" y="10" opacity=".3" rx="2"></svg:rect><svg:rect width="10" height="4" x="7" y="10" rx="2"></svg:rect></svg:g>`,
})
export class GgLoadbarAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarDocIcon],svg[gg-loadbar-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 5H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M7 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"></svg:path></svg:g>`,
})
export class GgLoadbarDocIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarSoundIcon],svg[gg-loadbar-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6h2v12h-2zm-4 7h2v5H7zm8-4h2v9h-2z"></svg:path>`,
})
export class GgLoadbarSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLockIcon],svg[gg-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 10.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3v-3a6 6 0 1 1 12 0zm-6-7a4 4 0 0 1 4 4v3H8v-3a4 4 0 0 1 4-4m6 9H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLockUnlockIcon],svg[gg-lock-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 7h-2a4 4 0 0 0-8 0v3h9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V7a6 6 0 1 1 12 0m-1 5H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgLockUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLogInIcon],svg[gg-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.486 20h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v2h4v12h-4z"></svg:path><svg:path d="m10.158 17.385l-1.42-1.408l3.92-3.953H3.513a1 1 0 1 1 0-2h9.163l-3.98-3.947l1.408-1.42l6.391 6.337z"></svg:path></svg:g>`,
})
export class GgLogInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLogOffIcon],svg[gg-log-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 4.009a1 1 0 1 0-2 0l-.003 8.003a1 1 0 0 0 2 0z"></svg:path><svg:path d="M4 12.992c0-2.21.895-4.21 2.343-5.657l1.414 1.414a6 6 0 1 0 8.485 0l1.415-1.414A8 8 0 1 1 4 12.992"></svg:path></svg:g>`,
})
export class GgLogOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLogOutIcon],svg[gg-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.514 20h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2h-4v12h4z"></svg:path><svg:path d="m13.842 17.385l1.42-1.408l-3.92-3.953h9.144a1 1 0 1 0 0-2h-9.162l3.98-3.947l-1.408-1.42l-6.391 6.337z"></svg:path></svg:g>`,
})
export class GgLogOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggLoupeIcon],svg[gg-loupe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 11V8h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 12a9 9 0 0 0 9 9h6a3 3 0 0 0 3-3v-6a9 9 0 1 0-18 0m9-7a7 7 0 1 1 0 14a7 7 0 0 1 0-14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgLoupeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMagnetIcon],svg[gg-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M8 2.5H4v3h4zm12 0h-4v3h4z"></svg:path><svg:path d="M8 7.5H4v6a8 8 0 1 0 16 0v-6h-4v6a4 4 0 0 1-8 0z"></svg:path></svg:g>`,
})
export class GgMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMailIcon],svg[gg-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.01 5.838a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v11.324a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11q0-.072.01-.14zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 0 1-4.242 0zm1.572-1.256h10.856l-4.72 4.72a1 1 0 0 1-1.415 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMailForwardIcon],svg[gg-mail-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.638 15.529l1.414 1.414l4.95-4.95l-4.95-4.95l-1.414 1.415l2.498 2.498H7.998a4 4 0 0 0-4 4v2h2v-2a2 2 0 0 1 2-2h8.212z"></svg:path>`,
})
export class GgMailForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMailOpenIcon],svg[gg-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.05 10.015a2 2 0 0 1 .465-2.1L9.879 1.55a3 3 0 0 1 4.242 0l6.364 6.364a2 2 0 0 1 .465 2.101q.049.149.05.313v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a1 1 0 0 1 .05-.313m1.879-.687l6.364-6.363a1 1 0 0 1 1.414 0l6.364 6.363h-.03v.03l-6.334 6.334a1 1 0 0 1-1.414 0zm14.07 2.9l-4.878 4.879a3 3 0 0 1-4.242 0l-4.88-4.88v9.101h14z" clip-rule="evenodd"></svg:path>`,
})
export class GgMailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMailReplyIcon],svg[gg-mail-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.362 15.529l-1.414 1.414l-4.95-4.95l4.95-4.95l1.414 1.415l-2.498 2.498h8.138a4 4 0 0 1 4 4v2h-2v-2a2 2 0 0 0-2-2H7.79z"></svg:path>`,
})
export class GgMailReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMathDivideIcon],svg[gg-math-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m9 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class GgMathDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMathEqualIcon],svg[gg-math-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMathEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMathMinusIcon],svg[gg-math-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"></svg:path>`,
})
export class GgMathMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMathPercentIcon],svg[gg-math-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.243 6.343a1 1 0 1 1 1.414 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.414zM9.879 9.879A2 2 0 1 1 7.05 7.05a2 2 0 0 1 2.83 2.83m4.241 7.07a2 2 0 1 0 2.829-2.829a2 2 0 0 0-2.829 2.829"></svg:path>`,
})
export class GgMathPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMathPlusIcon],svg[gg-math-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class GgMathPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMaximizeIcon],svg[gg-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h6v2H5v4H3zm0 18h6v-2H5v-4H3zm12 0h6v-6h-2v4h-4zm6-18h-6v2h4v4h2z"></svg:path>`,
})
export class GgMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMaximizeAltIcon],svg[gg-maximize-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h6v2H6.462l4.843 4.843l-1.415 1.414L5 6.367V9H3zm0 18h6v-2H6.376l4.929-4.928l-1.415-1.414L5 17.548V15H3zm12 0h6v-6h-2v2.524l-4.867-4.866l-1.414 1.414L17.647 19H15zm6-18h-6v2h2.562l-4.843 4.843l1.414 1.414L19 6.39V9h2z"></svg:path>`,
})
export class GgMaximizeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMazeIcon],svg[gg-maze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.37 9.593L8.779 7L1 14.778l2.593 2.593zM15.222 7L23 14.778l-2.576 2.576l-5.202-5.202l-5.202 5.202l-2.576-2.576z"></svg:path>`,
})
export class GgMazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMediaLiveIcon],svg[gg-media-live-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g>`,
})
export class GgMediaLiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMediaPodcastIcon],svg[gg-media-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.636 20.364a9 9 0 1 1 12.728 0l1.414 1.414A10.97 10.97 0 0 0 23 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 3.038 1.231 5.788 3.222 7.778z"></svg:path><svg:path d="M16.95 18.95a7 7 0 1 0-9.9 0l1.415-1.414a5 5 0 1 1 7.071 0z"></svg:path><svg:path d="M14.121 16.121a3 3 0 1 0-4.243 0l1.415-1.414a1 1 0 1 1 1.414 0z"></svg:path></svg:g>`,
})
export class GgMediaPodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuIcon],svg[gg-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"></svg:path>`,
})
export class GgMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuBoxedIcon],svg[gg-menu-boxed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.016 6.982a1.003 1.003 0 0 0 0 2.006h7.95a1.003 1.003 0 0 0 0-2.006zm-1 5.018c0-.552.447-1.003 1-1.003h7.95a1.003 1.003 0 0 1 0 2.006h-7.95c-.553 0-1-.45-1-1.003m1.009 3.012a1.003 1.003 0 0 0 0 2.007h7.95a1.003 1.003 0 0 0 0-2.007z"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMenuBoxedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuCakeIcon],svg[gg-menu-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-7 2a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMenuCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuCheeseIcon],svg[gg-menu-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0-6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-9.737l-2.648 2.648L4.967 13H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class GgMenuCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuGridOIcon],svg[gg-menu-grid-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class GgMenuGridOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuGridRIcon],svg[gg-menu-grid-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v4H4zm0 6h4v4H4zm4 6H4v4h4zm2-12h4v4h-4zm4 6h-4v4h4zm-4 6h4v4h-4zM20 4h-4v4h4zm-4 6h4v4h-4zm4 6h-4v4h4z"></svg:path>`,
})
export class GgMenuGridRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuHotdogIcon],svg[gg-menu-hotdog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 12a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zm-4-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMenuHotdogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuLeftIcon],svg[gg-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.995c0-.55.446-.995.995-.995h8.01a.995.995 0 0 1 0 1.99h-8.01A.995.995 0 0 1 2 5.995M2 12c0-.55.446-.995.995-.995h18.01a.995.995 0 1 1 0 1.99H2.995A.995.995 0 0 1 2 12m.995 5.01a.995.995 0 0 0 0 1.99h12.01a.995.995 0 0 0 0-1.99z"></svg:path>`,
})
export class GgMenuLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuLeftAltIcon],svg[gg-menu-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMenuLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuMotionIcon],svg[gg-menu-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-5 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class GgMenuMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuOreosIcon],svg[gg-menu-oreos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 8a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zm0 2a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 8a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3z"></svg:path>`,
})
export class GgMenuOreosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuRightIcon],svg[gg-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"></svg:path>`,
})
export class GgMenuRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuRightAltIcon],svg[gg-menu-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgMenuRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMenuRoundIcon],svg[gg-menu-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 6.983a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3.017a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMenuRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMergeHorizontalIcon],svg[gg-merge-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.976l4.243-4.243l-1.415-1.414L12 6.147L9.172 3.32L7.757 4.733zM5 12a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m7 3.024l-4.243 4.243l1.415 1.414L12 17.853l2.828 2.828l1.415-1.414z"></svg:path>`,
})
export class GgMergeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMergeVerticalIcon],svg[gg-merge-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.976 12L4.733 7.757L3.32 9.172L6.147 12L3.32 14.828l1.414 1.415zM12 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1m3.024-7l4.243 4.243l1.414-1.415L17.853 12l2.828-2.828l-1.414-1.415z"></svg:path>`,
})
export class GgMergeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMicIcon],svg[gg-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 4a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zm4 0v8a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path><svg:path d="M18 12a6 6 0 0 1-5 5.917V21h4v2H7v-2h4v-3.083A6 6 0 0 1 6 12V9h2v3a4 4 0 0 0 8 0V9h2z"></svg:path></svg:g>`,
})
export class GgMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMicrobitIcon],svg[gg-microbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 3H7a4 4 0 1 0 0 8h10a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMicrobitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMicrosoftIcon],svg[gg-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z"></svg:path>`,
})
export class GgMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMiniPlayerIcon],svg[gg-mini-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v6.268A2 2 0 0 0 18 12h-4a2 2 0 0 0-2 2v4c0 .364.097.706.268 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgMiniPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMinimizeIcon],svg[gg-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9H3V7h4V3h2zm0 6H3v2h4v4h2zm12 0h-6v6h2v-4h4zm-6-6h6V7h-4V3h-2z"></svg:path>`,
})
export class GgMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMinimizeAltIcon],svg[gg-minimize-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.074 2l1.414 1.414l-5.85 5.85h2.544v2h-6v-6h2v2.627zm-8.892 10.264v6h-2v-2.422L3.414 21.61L2 20.196l5.932-5.932h-2.75v-2z"></svg:path>`,
})
export class GgMinimizeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggModemIcon],svg[gg-modem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 16.634a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M5.866 3.134a1 1 0 1 0-1 1.732l13.455 7.768H2v4a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4zM20 14.634H4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgModemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMondayIcon],svg[gg-monday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.779 6.14a3 3 0 0 1 4.915 3.44l-5.736 8.192a3 3 0 0 1-4.915-3.441zm8.489.088a3 3 0 0 1 4.915 3.442l-5.736 8.191a3 3 0 0 1-4.915-3.441zM20.5 18.86a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgMondayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoonIcon],svg[gg-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.226 2.003a9.97 9.97 0 0 0-7.297 2.926c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0a9.97 9.97 0 0 0 2.926-7.297a10 10 0 0 0-.337-2.368a15 15 0 0 1-1.744 1.436c-1.351.949-2.733 1.563-3.986 1.842c-1.906.423-3.214.032-3.93-.684s-1.107-2.024-.684-3.93c.279-1.253.893-2.635 1.842-3.986c.414-.592.893-1.177 1.436-1.744a10 10 0 0 0-2.368-.337m5.43 15.654a7.96 7.96 0 0 0 2.251-4.438c-3.546 2.045-7.269 2.247-9.321.195s-1.85-5.775.195-9.321a8 8 0 1 0 6.876 13.564" clip-rule="evenodd"></svg:path>`,
})
export class GgMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreIcon],svg[gg-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10-1a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GgMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreAltIcon],svg[gg-more-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class GgMoreAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreOIcon],svg[gg-more-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12m-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMoreOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreRIcon],svg[gg-more-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M0 5a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm3-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMoreRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreVerticalIcon],svg[gg-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-17a3 3 0 1 1-6 0a3 3 0 0 1 6 0m0 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class GgMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreVerticalAltIcon],svg[gg-more-vertical-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class GgMoreVerticalAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreVerticalOIcon],svg[gg-more-vertical-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12m-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMoreVerticalOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoreVerticalRIcon],svg[gg-more-vertical-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M2 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMoreVerticalRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMouseIcon],svg[gg-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1"></svg:path><svg:path fill-rule="evenodd" d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoveDownIcon],svg[gg-move-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 5h2v8H7zm8 0h2v8h-2z"></svg:path><svg:path d="M11 5h2v10h3.035l-4 4.071l-4-4.071H11z"></svg:path></svg:g>`,
})
export class GgMoveDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoveLeftIcon],svg[gg-move-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.071 17v-2h-8v2zm0-8V7h-8v2z"></svg:path><svg:path d="M19.071 13v-2h-10V7.965l-4.071 4l4.071 4V13z"></svg:path></svg:g>`,
})
export class GgMoveLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoveRightIcon],svg[gg-move-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 17v-2h8v2zm0-8V7h8v2z"></svg:path><svg:path d="M5 13v-2h10V7.965l4.071 4l-4.071 4V13z"></svg:path></svg:g>`,
})
export class GgMoveRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoveTaskIcon],svg[gg-move-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.964 7h-8v2h8zM6 8.829v6.342L9.964 12zM18.964 11h-8v2h8zm-8 4h8v2h-8z"></svg:path>`,
})
export class GgMoveTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMoveUpIcon],svg[gg-move-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 19.071h-2v-8h2zm-8 0H7v-8h2z"></svg:path><svg:path d="M13 19.071h-2v-10H7.965l4-4.071l4 4.071H13z"></svg:path></svg:g>`,
})
export class GgMoveUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMusicIcon],svg[gg-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 6a4 4 0 0 0-4.608-3.953l-7 1.077A4 4 0 0 0 7 7.078v8.763a3.5 3.5 0 1 0 2 3.163V7.078A2 2 0 0 1 10.696 5.1l7-1.077A2 2 0 0 1 20 6.001v6.84a3.5 3.5 0 1 0 2 3.163zm-2 10.004a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-13 3a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GgMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMusicNoteIcon],svg[gg-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 8.954l5.635-1.127a2.942 2.942 0 0 0-1.154-5.769l-4.07.814A3 3 0 0 0 10 5.814v8.076a4 4 0 1 0 2 3.465zm4.874-4.935l-4.07.814a1 1 0 0 0-.804.98v1.102l5.243-1.049a.942.942 0 0 0-.37-1.847M10 17.354a2 2 0 1 0-4 0a2 2 0 0 0 4 0" clip-rule="evenodd"></svg:path>`,
})
export class GgMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggMusicSpeakerIcon],svg[gg-music-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 18.939a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M12 9.044a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M7 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm10 2H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMusicSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggNametagIcon],svg[gg-nametag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 14v6h6v-2H6v-4z"></svg:path><svg:path fill-rule="evenodd" d="M9 9v6h6V9zm4 2h-2v2h2z" clip-rule="evenodd"></svg:path><svg:path d="M4 10V4h6v2H6v4zm16 0V4h-6v2h4v4zm0 4v6h-6v-2h4v-4z"></svg:path></svg:g>`,
})
export class GgNametagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggNotesIcon],svg[gg-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M2 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggNotificationsIcon],svg[gg-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M12 6H4v14h14v-8h-2v6H6V8h6z"></svg:path></svg:g>`,
})
export class GgNotificationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggNpmIcon],svg[gg-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm1-3V6h12v12h-3V9h-3v9z" clip-rule="evenodd"></svg:path>`,
})
export class GgNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggOculusIcon],svg[gg-oculus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 10H8a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4M8 6a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12z" clip-rule="evenodd"></svg:path>`,
})
export class GgOculusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggOpenCollectiveIcon],svg[gg-open-collective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="m16.682 15.753l2.13 2.13A8.97 8.97 0 0 0 21 12a8.96 8.96 0 0 0-2.123-5.806l-2.133 2.133A5.97 5.97 0 0 1 18 12c0 1.42-.493 2.725-1.318 3.753"></svg:path><svg:path d="M15.673 16.745a6 6 0 1 1 .08-9.426l2.13-2.13a9 9 0 1 0-.077 13.689z"></svg:path></svg:g>`,
})
export class GgOpenCollectiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggOptionsIcon],svg[gg-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3a4 4 0 0 1 3.874 3H19v2h-8.126A4.002 4.002 0 0 1 3 7a4 4 0 0 1 4-4m0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 11a4 4 0 0 1-3.874-3H5v-2h8.126A4.002 4.002 0 0 1 21 16a4 4 0 0 1-4 4m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class GgOptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggOrganisationIcon],svg[gg-organisation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 15h2v2h-2zm2-4h-2v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M13 7h10v14H1V3h12zM8 5h3v2H8zm3 14v-2H8v2zm0-4v-2H8v2zm0-4V9H8v2zm10 8V9h-8v2h2v2h-2v2h2v2h-2v2zM3 19v-2h3v2zm0-4h3v-2H3zm3-4V9H3v2zM3 7h3V5H3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgOrganisationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggOverflowIcon],svg[gg-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 11a10 10 0 0 1-20 0z" opacity=".2"></svg:path><svg:path d="M20 11a8 8 0 0 1-16 0z" opacity=".3"></svg:path><svg:path d="M20 11a8 8 0 0 0-16 0z"></svg:path></svg:g>`,
})
export class GgOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPacmanIcon],svg[gg-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.064 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M13 3c2.152 0 4.128.756 5.677 2.016l1.447 1.447l-1.295 1.295h-.001L14.585 12l3.639 3.638l-.002.002l1.905 1.904l-1.413 1.413l-.002-.002A9 9 0 1 1 13 3m-1.243 9l5.532 5.532a7 7 0 1 1 0-11.065z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPacmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPasswordIcon],svg[gg-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-1h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M2 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm20 2H2v8h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathBackIcon],svg[gg-path-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 14H4V4h10v5h5v10H9zM6 6h6v6H6z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathCropIcon],svg[gg-path-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M6 6h8v8H6z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 9h10v10H9zm6 2h2v6h-6v-2h4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPathCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathDivideIcon],svg[gg-path-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5h10v4H9v6H5z"></svg:path><svg:path d="M9 15v4h10V9h-4v6z"></svg:path><svg:path d="M10 10h4v4h-4z"></svg:path></svg:g>`,
})
export class GgPathDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathExcludeIcon],svg[gg-path-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4H9v6H5zm4 10v4h10V9h-4v6z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathExcludeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathFrontIcon],svg[gg-path-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4h4v10H9v-4H5zm6 6v6h6v-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathIntersectIcon],svg[gg-path-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 5H5v10h4v4h10V9h-4zm-2 2H7v6h2V9h4zm4 10h-6v-2h4v-4h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathIntersectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathOutlineIcon],svg[gg-path-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4h4v10H9v-4H5zm2 2h6v2H9v4H7zm4 10h6v-6h-2v4h-4zm2-6h-2v2h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathTrimIcon],svg[gg-path-trim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5h10v3H8v7H5z"></svg:path><svg:path d="M19 9H9v10h10z"></svg:path></svg:g>`,
})
export class GgPathTrimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPathUniteIcon],svg[gg-path-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H5v10h4v4h10V9h-4z"></svg:path>`,
})
export class GgPathUniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPatreonIcon],svg[gg-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0" opacity=".5"></svg:path><svg:path d="M3 4h4v16H3z"></svg:path></svg:g>`,
})
export class GgPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPaypalIcon],svg[gg-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 3.544h8c1.639 0 2.945.775 3.626 1.971c1.22.872 1.847 2.4 1.512 4.138c-.521 2.712-3.183 4.91-5.944 4.91h-2l-1.134 5.892H6.398l.23-1.199h-3.18zm1.622 1.964h6c1.657 0 2.746 1.32 2.433 2.946S14.615 11.4 12.96 11.4h-4l-1.134 5.892h-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPenIcon],svg[gg-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21.264 2.293a1 1 0 0 0-1.415 0l-.872.872a3 3 0 0 0-3.415.587L4.955 14.358l5.657 5.657L21.22 9.41a3 3 0 0 0 .586-3.415l.873-.873a1 1 0 0 0 0-1.414zm-4.268 8.51l-6.384 6.384l-2.828-2.829l6.383-6.383zm1.818-1.818l.99-.99a1 1 0 0 0 0-1.415l-1.413-1.414a1 1 0 0 0-1.415 0l-.99.99z" clip-rule="evenodd"></svg:path><svg:path d="m2 22.95l2.122-7.778l5.656 5.657z"></svg:path></svg:g>`,
})
export class GgPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonBottomLeftIcon],svg[gg-pentagon-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.33 9.232L10 5l-5 8.66l3.33 4.232l5.33.768l5-8.66zm2.121 2.326l-3.198-.46l-1.998-2.54l-2.846 4.93l1.998 2.539l3.198.46z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonBottomRightIcon],svg[gg-pentagon-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.33 8.232L13.66 4l5 8.66l-3.33 4.232l-5.33.768L5 9zm-2.12 2.326l3.197-.46l1.998-2.54l2.846 4.93l-1.998 2.539l-3.198.46z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonDownIcon],svg[gg-pentagon-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 8L7 6v10l5 2.5l5-2.5V6zm3 .954l-3 1.2l-3-1.2v5.81l3 1.5l3-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonLeftIcon],svg[gg-pentagon-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16 12l2-5H8l-2 5l2 5h10zm-.954 3l-1.2-3l1.2-3H9.354l-1.2 3l1.2 3z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonRightIcon],svg[gg-pentagon-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12L6 7h10l2 5l-2 5H6zm.954 3l1.2-3l-1.2-3h5.692l1.2 3l-1.2 3z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonTopLeftIcon],svg[gg-pentagon-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.33 15.16L11 19.392l-5-8.66L9.33 6.5l5.33-.768l5 8.66zm2.121-2.326l-3.198.46l-1.998 2.54l-2.846-4.93l1.998-2.539l3.198-.46z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonTopRightIcon],svg[gg-pentagon-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.33 15.16L5 14.392l5-8.66l5.33.768l3.33 4.232l-5 8.66zm3.075.674l-1.998-2.54l-3.198-.46l2.846-4.93l3.198.461l1.998 2.54z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPentagonUpIcon],svg[gg-pentagon-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 16l5 2V8l-5-2l-5 2v10zm-3-.954l3-1.2l3 1.2V9.354l-3-1.2l-3 1.2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPerformanceIcon],svg[gg-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 9v4.17a3.001 3.001 0 1 0 2 0V9zm0 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path><svg:path d="M12 5a7 7 0 0 1 7 7v1h-2v-1a5 5 0 0 0-10 0v1H5v-1a7 7 0 0 1 7-7"></svg:path><svg:path fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPerformanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPexelsIcon],svg[gg-pexels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5a5.001 5.001 0 0 1 0 10v4H6V5zM8 7v10h2v-4h2l.003-.001a2.993 2.993 0 0 0 3.041-3.044l-.007-.39a2.61 2.61 0 0 0-2.711-2.562l-.306.005L12 7z" clip-rule="evenodd"></svg:path>`,
})
export class GgPexelsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPhoneIcon],svg[gg-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10"></svg:path><svg:path d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704"></svg:path></svg:g>`,
})
export class GgPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPhotoscanIcon],svg[gg-photoscan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-4.535 2H17v11H7v-5.535A4 4 0 0 0 12.465 5M9 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPhotoscanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPianoIcon],svg[gg-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM11 5H8.985v8h-1v6H12v-6h-1zm7.015 14H22V5h-2.985v8h-1zm-1-6h-1V5H14v8h-1v6h4.015zm-10.03 6v-6h-1V5H3v14z" clip-rule="evenodd"></svg:path>`,
})
export class GgPianoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPillIcon],svg[gg-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.657 2.757a6 6 0 1 1 8.485 8.486l-9.9 9.9a6 6 0 1 1-8.485-8.486zm7.07 7.071l-4.242 4.243l-5.657-5.657l4.243-4.242a4 4 0 1 1 5.657 5.656" clip-rule="evenodd"></svg:path>`,
})
export class GgPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPinIcon],svg[gg-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.272 10.272a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518zm11.276-1.691l-4.827 5.07l-5.07-4.827a7 7 0 1 1 9.897-.243"></svg:path></svg:g>`,
})
export class GgPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPinAltIcon],svg[gg-pin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M18 9a6 6 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-5.083A6.002 6.002 0 0 1 12 3a6 6 0 0 1 6 6m-6 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPinAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPinBottomIcon],svg[gg-pin-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M18 9a6 6 0 0 1-5 5.917V20h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-5.083A6.002 6.002 0 0 1 12 3a6 6 0 0 1 6 6m-6 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPinBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPinTopIcon],svg[gg-pin-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 14a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path fill-rule="evenodd" d="M8 5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2h-3v5.083A6.002 6.002 0 0 1 12 22a6 6 0 0 1-1-11.917V5zm4 7a4 4 0 1 1 0 8a4 4 0 0 1 0-8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPinTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayBackwardsIcon],svg[gg-play-backwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h3v10H2zm4 5l7.002-5v10zm15.002-5L14 12l7.002 5z"></svg:path>`,
})
export class GgPlayBackwardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayButtonIcon],svg[gg-play-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 12.33l-6 4.33V8z"></svg:path>`,
})
export class GgPlayButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayButtonOIcon],svg[gg-play-button-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0 2c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" clip-rule="evenodd"></svg:path><svg:path d="m16 12l-6 4.33V7.67z"></svg:path></svg:g>`,
})
export class GgPlayButtonOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayButtonRIcon],svg[gg-play-button-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" clip-rule="evenodd"></svg:path><svg:path d="m16 12l-6 4.33V7.67z"></svg:path></svg:g>`,
})
export class GgPlayButtonRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayForwardsIcon],svg[gg-play-forwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.002 17h-3V7h3zm-4-5L10 17V7zM2 17l7.002-5L2 7z"></svg:path>`,
})
export class GgPlayForwardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayListIcon],svg[gg-play-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H4v2h12zm0 4H4v2h12zM4 13h8v2H4zm16 3l-6-3v6z"></svg:path>`,
})
export class GgPlayListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayListAddIcon],svg[gg-play-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5h12v2H2zm0 4h12v2H2zm8 4H2v2h8z"></svg:path><svg:path d="M16 9h2v4h4v2h-4v4h-2v-4h-4v-2h4z"></svg:path></svg:g>`,
})
export class GgPlayListAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayListCheckIcon],svg[gg-play-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6H3v2h12zm0 4H3v2h12zM3 14h8v2H3zm8.99 1.025l1.415-1.414l2.121 2.121l4.243-4.242l1.414 1.414l-5.657 5.657z"></svg:path>`,
})
export class GgPlayListCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayListRemoveIcon],svg[gg-play-list-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.964 4.634h-12v2h12zm0 4h-12v2h12zm-12 4h8v2h-8zm9.001 1.076l1.414-1.415l2.121 2.121l2.121-2.12l1.415 1.413l-2.122 2.122l2.122 2.12l-1.415 1.415l-2.121-2.121l-2.121 2.121l-1.415-1.414l2.122-2.122z"></svg:path>`,
})
export class GgPlayListRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayListSearchIcon],svg[gg-play-list-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.879 4.879h-12v2h12zm0 4h-12v2h12zm-12 4h8v2h-8z"></svg:path><svg:path fill-rule="evenodd" d="M13.757 12.757a3 3 0 0 0 3.415 4.83l1.535 1.534l1.414-1.414l-1.535-1.535a3.001 3.001 0 0 0-4.829-3.415m1.415 2.829a1 1 0 1 0 1.414-1.415a1 1 0 0 0-1.414 1.415" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayListSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayPauseIcon],svg[gg-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H8v10h3zm2 10h3V7h-3z"></svg:path>`,
})
export class GgPlayPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayPauseOIcon],svg[gg-play-pause-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 9h2v6H9zm6 6h-2V9h2z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayPauseOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayPauseRIcon],svg[gg-play-pause-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 9h2v6H9zm6 6h-2V9h2z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayPauseRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayStopIcon],svg[gg-play-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v10H7z"></svg:path>`,
})
export class GgPlayStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayStopOIcon],svg[gg-play-stop-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 9H9v6h6z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayStopOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayStopRIcon],svg[gg-play-stop-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 9H9v6h6z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayStopRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackNextIcon],svg[gg-play-track-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 17l8-5l-8-5zM18 7h-3v10h3z"></svg:path>`,
})
export class GgPlayTrackNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackNextOIcon],svg[gg-play-track-next-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m13-3a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm-1 3l-6 3.464V8.536z" clip-rule="evenodd"></svg:path>`,
})
export class GgPlayTrackNextOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackNextRIcon],svg[gg-play-track-next-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 9a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm-1 3l-6 3.464V8.536z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayTrackNextRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackPrevIcon],svg[gg-play-track-prev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 17l-8-5l8-5zM6 7h3v10H6z"></svg:path>`,
})
export class GgPlayTrackPrevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
