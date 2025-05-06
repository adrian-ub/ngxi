import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiErrorFillIcon],svg[ri-signal-wifi-error-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L22.5 8H18v5.571L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m10 16v2h-2v-2zm0-9v7h-2v-7z"></svg:path>`,
})
export class RiSignalWifiErrorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiErrorLineIcon],svg[ri-signal-wifi-error-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.93 15.93 0 0 0 12 5c-3.09 0-5.974.875-8.42 2.392L12 17.817l6-7.429v3.183L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m10 16v2h-2v-2zm0-9v7h-2v-7z"></svg:path>`,
})
export class RiSignalWifiErrorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiFillIcon],svg[ri-signal-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3"></svg:path>`,
})
export class RiSignalWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiLineIcon],svg[ri-signal-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3m0 2a15.9 15.9 0 0 0-8.42 2.392L12 17.817L20.42 7.39A15.9 15.9 0 0 0 12 5"></svg:path>`,
})
export class RiSignalWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiOffFillIcon],svg[ri-signal-wifi-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.808 1.393l17.678 17.678l-1.414 1.414l-3.683-3.683L12 21L.69 6.997a18 18 0 0 1 2.951-1.942L1.394 2.808zM12.001 3c4.284 0 8.219 1.497 11.31 3.996l-5.407 6.693L7.725 3.511A18 18 0 0 1 12.001 3"></svg:path>`,
})
export class RiSignalWifiOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiOffLineIcon],svg[ri-signal-wifi-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.808 1.393l17.678 17.678l-1.414 1.414l-3.683-3.682L12 21L.69 6.997a18 18 0 0 1 2.951-1.942L1.394 2.808zm.772 5.999L12 17.817l1.967-2.437l-8.835-8.836q-.799.38-1.552.848M12 3c4.285 0 8.22 1.497 11.31 3.996l-5.406 6.693l-1.422-1.422l3.938-4.876A15.9 15.9 0 0 0 12 5q-1.31 0-2.579.207L7.725 3.51c1.37-.333 2.802-.51 4.276-.51"></svg:path>`,
})
export class RiSignalWifiOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignpostFillIcon],svg[ri-signpost-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5V2h-2v3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.414l4.293-4.293a1 1 0 0 0 0-1.414L17.414 5zm0 12h-2v5h2z"></svg:path>`,
})
export class RiSignpostFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSignpostLineIcon],svg[ri-signpost-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h5.414l4.293 4.293a1 1 0 0 1 0 1.414L17.414 15H12v7h-2v-7H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6V2h2zm4.586 8l3-3l-3-3H5v6z"></svg:path>`,
})
export class RiSignpostLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSimCard2FillIcon],svg[ri-sim-card-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 16v-8H8v2h3v6zm-5-5v2h2v-2zm6 0v2h2v-2zm0-3v2h2v-2zm-6 6v2h2v-2zm6 0v2h2v-2z"></svg:path>`,
})
export class RiSimCard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSimCard2LineIcon],svg[ri-sim-card-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V7.828L14.172 4zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 8v8h-2v-6H8v-2zm-5 3h2v2H8zm6 0h2v2h-2zm0-3h2v2h-2zm-6 6h2v2H8zm6 0h2v2h-2z"></svg:path>`,
})
export class RiSimCard2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSimCardFillIcon],svg[ri-sim-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v6h8v-6z"></svg:path>`,
})
export class RiSimCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSimCardLineIcon],svg[ri-sim-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V7.828L14.172 4zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10h8v6H8z"></svg:path>`,
})
export class RiSimCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSingleQuotesLIcon],svg[ri-single-quotes-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"></svg:path>`,
})
export class RiSingleQuotesLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSingleQuotesRIcon],svg[ri-single-quotes-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311C9.591 12.323 8.17 10.842 8.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179"></svg:path>`,
})
export class RiSingleQuotesRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSipFillIcon],svg[ri-sip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.96 6.501l2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829l1.768 1.767l-1.415 1.415l-7.07-7.071l1.413-1.415zm-3.182 2.475l4.243 4.243l-7.778 7.778H3v-4.243z"></svg:path>`,
})
export class RiSipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSipLineIcon],svg[ri-sip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.457 18.954l8.564-8.564l-1.414-1.414l-8.564 8.564zm5.735-11.392l-1.414-1.414l1.414-1.415l1.768 1.768l2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829l1.768 1.767l-1.415 1.415l-1.414-1.415l-9.192 9.193H3v-4.243z"></svg:path>`,
})
export class RiSipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSketchingIcon],svg[ri-sketching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.036 7.698c-1.651 1.861-3.523 4.546-5.141 7.784a1 1 0 1 1-1.79-.895c1.692-3.383 3.66-6.215 5.434-8.216c.886-.999 1.74-1.81 2.506-2.38c.382-.285.76-.523 1.123-.693c.351-.166.753-.298 1.166-.298a1.24 1.24 0 0 1 1.116.69c.157.312.174.645.17.87c-.008.477-.135 1.073-.298 1.68c-.335 1.243-.923 2.891-1.507 4.518l-.082.228c-.566 1.574-1.123 3.123-1.485 4.36q-.146.501-.239.895c.694-.557 1.55-1.396 2.457-2.288l.03-.029c.881-.866 1.814-1.782 2.6-2.411c.391-.312.812-.609 1.218-.78c.34-.145 1.12-.38 1.727.227c.384.384.49.884.518 1.256c.03.39-.016.81-.087 1.21c-.14.8-.424 1.733-.683 2.575l-.041.135c-.232.751-.438 1.422-.555 1.96c.26-.26.58-.674.954-1.285a1 1 0 1 1 1.706 1.045c-.543.886-1.105 1.606-1.701 2.053c-.624.468-1.44.732-2.266.319c-.608-.305-.746-.91-.777-1.246c-.033-.363.02-.759.089-1.115c.13-.673.385-1.497.625-2.276l.055-.178c.267-.868.51-1.679.625-2.334l.024-.145l-.181.14c-.698.559-1.561 1.405-2.478 2.306l-.03.03c-.881.865-1.814 1.782-2.6 2.41c-.391.313-.812.61-1.218.781c-.34.145-1.12.38-1.727-.227c-.309-.309-.388-.699-.413-.936a3.5 3.5 0 0 1 .023-.803c.068-.528.226-1.17.426-1.85c.38-1.298.955-2.9 1.512-4.449l.092-.255c.593-1.652 1.149-3.214 1.457-4.36l.074-.286a7 7 0 0 0-.224.16c-.623.464-1.377 1.17-2.204 2.103"></svg:path>`,
})
export class RiSketchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipBackFillIcon],svg[ri-skip-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 11.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0z"></svg:path>`,
})
export class RiSkipBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipBackLineIcon],svg[ri-skip-back-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a1 1 0 0 1 1 1v6.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m10 3.737L10.606 12L17 16.263z"></svg:path>`,
})
export class RiSkipBackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipBackMiniFillIcon],svg[ri-skip-back-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m2.079 6.409a.5.5 0 0 1 0-.818l7.133-5.035a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiSkipBackMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipBackMiniLineIcon],svg[ri-skip-back-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 8.14V9.86L11.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiSkipBackMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipDownFillIcon],svg[ri-skip-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17H6v-2h12zm-6-4l6-6H6z"></svg:path>`,
})
export class RiSkipDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipDownLineIcon],svg[ri-skip-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.086L7.207 5.293L5.793 6.707L12 12.914l6.207-6.207l-1.414-1.414zM18 17H6v-2h12z"></svg:path>`,
})
export class RiSkipDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardFillIcon],svg[ri-skip-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.667L5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiSkipForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardLineIcon],svg[ri-skip-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.667L5.777 19.482A.5.5 0 0 1 5 19.066V4.934a.5.5 0 0 1 .777-.416L16 11.333V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0zm-9-4.93v8.526L13.394 12z"></svg:path>`,
})
export class RiSkipForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardMiniFillIcon],svg[ri-skip-forward-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.788 17.444A.5.5 0 0 1 7 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816zM16 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiSkipForwardMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipForwardMiniLineIcon],svg[ri-skip-forward-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.032 12L9 9.86v4.28zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091M16 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiSkipForwardMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipLeftFillIcon],svg[ri-skip-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18V6h2v12zm4-6l6-6v12z"></svg:path>`,
})
export class RiSkipLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipLeftLineIcon],svg[ri-skip-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.914 12l4.793-4.793l-1.414-1.414L11.086 12l6.207 6.207l1.414-1.414zM7 18V6h2v12z"></svg:path>`,
})
export class RiSkipLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipRightFillIcon],svg[ri-skip-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6v12h-2V6zm-4 6l-6 6V6z"></svg:path>`,
})
export class RiSkipRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipRightLineIcon],svg[ri-skip-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.086 12l-4.793 4.793l1.414 1.414L12.914 12L6.707 5.793L5.293 7.207zM17 6v12h-2V6z"></svg:path>`,
})
export class RiSkipRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipUpFillIcon],svg[ri-skip-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h12v2H6zm6 4l-6 6h12z"></svg:path>`,
})
export class RiSkipUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkipUpLineIcon],svg[ri-skip-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.914l4.793 4.793l1.414-1.414L12 11.086l-6.207 6.207l1.414 1.414zM6 7h12v2H6z"></svg:path>`,
})
export class RiSkipUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkull2FillIcon],svg[ri-skull-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23q.033-.161.044-.33L15 22.5V22a2 2 0 0 0-1.85-1.994L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5q0 .258.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2m-4 9a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiSkull2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkull2LineIcon],svg[ri-skull-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23q.033-.161.044-.33L15 22.5V22a2 2 0 0 0-1.85-1.994L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5q0 .258.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-7.996 7.75L4 12v3.764l4 2v1.591l.075-.084a4 4 0 0 1 2.723-1.266L11 18l2.073.001l.223.01a4 4 0 0 1 2.55 1.177l.154.167v-1.591l4-2V12a8 8 0 0 0-8-8m-4 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiSkull2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkullFillIcon],svg[ri-skull-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 0 1-1 1zM7.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiSkullFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkullLineIcon],svg[ri-skull-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 0-16 0v4h3a1 1 0 0 1 1 1v3h8v-3a1 1 0 0 1 1-1h3zm-2 6v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 0 1-1 1zM7.5 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSkullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkypeFillIcon],svg[ri-skype-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.31 20.4q-.64.1-1.309.1a8.5 8.5 0 0 1-8.4-9.81a5.25 5.25 0 0 1 7.09-7.09q.642-.1 1.31-.1a8.5 8.5 0 0 1 8.4 9.81a5.25 5.25 0 0 1-7.09 7.09m-1.257-3.244h-.04c2.872 0 4.303-1.386 4.303-3.243c0-1.198-.551-2.471-2.726-2.958l-1.983-.44c-.755-.172-1.622-.4-1.622-1.115s.62-1.213 1.724-1.213c2.23 0 2.027 1.528 3.131 1.528c.576 0 1.093-.342 1.093-.93c0-1.37-2.197-2.4-4.056-2.4c-2.021 0-4.173.859-4.173 3.144c0 1.098.394 2.27 2.56 2.813l2.689.671c.816.202 1.018.659 1.018 1.072c0 .687-.684 1.358-1.918 1.358c-2.417 0-2.078-1.857-3.374-1.857c-.58 0-1.003.398-1.003.971c0 1.114 1.352 2.598 4.377 2.598"></svg:path>`,
})
export class RiSkypeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSkypeLineIcon],svg[ri-skype-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.005 18.423a2 2 0 0 1 1.237.207a3.25 3.25 0 0 0 4.389-4.389a2 2 0 0 1-.207-1.237q.077-.495.077-1.004a6.5 6.5 0 0 0-7.504-6.423A2 2 0 0 1 9.76 5.37a3.25 3.25 0 0 0-4.389 4.39a2 2 0 0 1 .207 1.237Q5.5 11.49 5.5 12a6.5 6.5 0 0 0 7.504 6.423M12.001 20.5a8.5 8.5 0 0 1-8.4-9.81a5.25 5.25 0 0 1 7.09-7.09q.642-.1 1.31-.1a8.5 8.5 0 0 1 8.4 9.81a5.25 5.25 0 0 1-7.09 7.09q-.642.1-1.31.1m.053-3.5C9.252 17 8 15.62 8 14.586c0-.532.39-.902.928-.902c1.2 0 .887 1.725 3.125 1.725c1.143 0 1.776-.624 1.776-1.261c0-.384-.188-.808-.943-.995l-2.49-.624c-2.006-.504-2.37-1.592-2.37-2.612C8.027 7.797 10.019 7 11.89 7c1.72 0 3.755.956 3.755 2.228c0 .545-.479.863-1.011.863c-1.023 0-.835-1.418-2.9-1.418c-1.023 0-1.596.462-1.596 1.126s.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989C16 15.713 14.675 17 12.015 17z"></svg:path>`,
})
export class RiSkypeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlackFillIcon],svg[ri-slack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.527 14.514A1.973 1.973 0 0 1 4.56 16.48a1.973 1.973 0 0 1-1.968-1.967c0-1.083.885-1.968 1.968-1.968h1.967zm.992 0c0-1.083.885-1.968 1.968-1.968s1.967.885 1.967 1.968v4.927a1.973 1.973 0 0 1-1.967 1.968a1.973 1.973 0 0 1-1.968-1.968zm1.968-7.987A1.973 1.973 0 0 1 7.519 4.56c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967v1.968zm0 .992c1.083 0 1.967.884 1.967 1.967a1.973 1.973 0 0 1-1.967 1.968H4.56a1.973 1.973 0 0 1-1.968-1.968c0-1.083.885-1.967 1.968-1.967zm7.986 1.967c0-1.083.885-1.967 1.968-1.967s1.968.884 1.968 1.967a1.973 1.973 0 0 1-1.968 1.968h-1.968zm-.991 0a1.973 1.973 0 0 1-1.968 1.968a1.973 1.973 0 0 1-1.968-1.968V4.56c0-1.083.885-1.967 1.968-1.967s1.968.884 1.968 1.967zm-1.968 7.987c1.083 0 1.968.885 1.968 1.968a1.973 1.973 0 0 1-1.968 1.968a1.973 1.973 0 0 1-1.968-1.968v-1.968zm0-.992a1.973 1.973 0 0 1-1.968-1.967c0-1.083.885-1.968 1.968-1.968h4.927c1.083 0 1.968.885 1.968 1.968a1.973 1.973 0 0 1-1.968 1.967z"></svg:path>`,
})
export class RiSlackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlackLineIcon],svg[ri-slack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.501 3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5m-10 10h1.5v1.5a1.5 1.5 0 1 1-1.5-1.5m8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3m5-5a1.5 1.5 0 0 1 0 3h-1.5V9.5a1.5 1.5 0 0 1 1.5-1.5m-15 0h5a1.5 1.5 0 1 1 0 3h-5a1.5 1.5 0 0 1 0-3m5-5a1.5 1.5 0 0 1 1.5 1.5V6h-1.5a1.5 1.5 0 1 1 0-3m0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class RiSlackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlashCommandsIcon],svg[ri-slash-commands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v4H3zm6.788 18H7.66l6.551-18h2.129zM21 3h-2v4h2z"></svg:path>`,
})
export class RiSlashCommandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlashCommands2Icon],svg[ri-slash-commands-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm5.723 13L16.58 6h-2.303L7.42 18z"></svg:path>`,
})
export class RiSlashCommands2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSliceFillIcon],svg[ri-slice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.768 12.229l2.121 2.121c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.097l2.121 2.121z"></svg:path>`,
})
export class RiSliceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSliceLineIcon],svg[ri-slice-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.69 12.915l1.769 1.767c-6.01 6.01-10.96 6.01-15.203 4.597L17.812 3.722l3.536 3.536zm-2.827 0l5.656-5.657l-.707-.707L6.314 18.048c2.732.108 5.358-.906 8.267-3.415z"></svg:path>`,
})
export class RiSliceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow2FillIcon],svg[ri-slideshow-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1zM10 6v7l5-3.5z"></svg:path>`,
})
export class RiSlideshow2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow2LineIcon],svg[ri-slideshow-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1zm-8-2h14V4H5zm5-9l5 3.5l-5 3.5z"></svg:path>`,
})
export class RiSlideshow2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow3FillIcon],svg[ri-slideshow-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM10 7.5v6l5-3z"></svg:path>`,
})
export class RiSlideshow3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow3LineIcon],svg[ri-slideshow-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM4 5v11h16V5zm6 2.5l5 3l-5 3z"></svg:path>`,
})
export class RiSlideshow3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow4FillIcon],svg[ri-slideshow-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 3A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM10 9v6l5-3zm1-6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"></svg:path>`,
})
export class RiSlideshow4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshow4LineIcon],svg[ri-slideshow-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 3A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 5v14h16V5h-4.17A3 3 0 0 1 13 7h-2a3 3 0 0 1-2.83-2zm7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 6l5 3l-5 3z"></svg:path>`,
})
export class RiSlideshow4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshowFillIcon],svg[ri-slideshow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zM8 10a3 3 0 1 0 3 3H8zm5 0v2h6v-2zm0 4v2h6v-2zM2 3h20v2H2z"></svg:path>`,
})
export class RiSlideshowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshowLineIcon],svg[ri-slideshow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zm-9-2h16V8H4zm9-9h5v2h-5zm0 4h5v2h-5zm-4-4v3h3a3 3 0 1 1-3-3M2 3h20v2H2z"></svg:path>`,
})
export class RiSlideshowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlideshowViewIcon],svg[ri-slideshow-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 10h16V5H4zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3z"></svg:path>`,
})
export class RiSlideshowViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlowDownFillIcon],svg[ri-slow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13c0 2.21.895 4.21 2.343 5.657L4.93 20.07A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A8 8 0 1 0 4 13m4.707-4.707L13.5 12.5l-2 2l-4.207-4.793z"></svg:path>`,
})
export class RiSlowDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSlowDownLineIcon],svg[ri-slow-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13c0 2.21.895 4.21 2.343 5.657L4.93 20.07A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A8 8 0 1 0 4 13m4.707-4.707l4.5 4.5l-1.414 1.414l-4.5-4.5z"></svg:path>`,
})
export class RiSlowDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSmartphoneFillIcon],svg[ri-smartphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiSmartphoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSmartphoneLineIcon],svg[ri-smartphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v16h10V4zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiSmartphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnapchatFillIcon],svg[ri-snapchat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.872 21.765c-1.19 0-1.984-.562-2.693-1.057c-.504-.357-.976-.696-1.533-.79a4.6 4.6 0 0 0-.803-.066c-.472 0-.847.071-1.114.125c-.17.03-.312.058-.424.058c-.116 0-.263-.032-.32-.228c-.05-.16-.081-.312-.112-.459c-.08-.37-.147-.597-.286-.62c-1.489-.227-2.38-.57-2.554-.976c-.014-.044-.031-.09-.031-.125c-.01-.124.08-.227.205-.25c1.181-.195 2.242-.824 3.138-1.858c.696-.803 1.035-1.579 1.066-1.663c0-.01.009-.01.009-.01q.256-.527.102-.895c-.192-.46-.825-.656-1.257-.79c-.111-.03-.205-.066-.285-.093c-.37-.147-.986-.46-.905-.892c.058-.312.472-.535.811-.535q.141-.002.24.05c.38.173.723.262 1.017.262c.366 0 .54-.138.584-.182a25 25 0 0 0-.035-.593c-.09-1.365-.192-3.059.24-4.03c1.298-2.907 4.053-3.14 4.869-3.14L12.157 3h.05c.815 0 3.57.227 4.868 3.139c.437.971.33 2.67.24 4.03l-.009.067c-.008.182-.022.356-.03.535c.044.035.204.169.534.173c.286-.008.598-.102.954-.263a.8.8 0 0 1 .312-.066c.125 0 .25.03.357.066h.009c.299.112.495.321.495.54c.009.205-.152.517-.914.825c-.08.03-.174.067-.285.093c-.424.13-1.057.335-1.258.79c-.111.24-.067.548.103.896c0 .008.009.008.009.008c.049.125 1.337 3.05 4.204 3.527a.246.246 0 0 1 .205.25q.001.067-.031.129c-.174.41-1.057.744-2.555.976c-.138.022-.205.25-.285.62a7 7 0 0 1-.111.459c-.045.147-.139.227-.3.227h-.021a2.2 2.2 0 0 1-.424-.049a5.3 5.3 0 0 0-1.115-.116a5 5 0 0 0-.802.067c-.553.09-1.03.433-1.534.79c-.718.49-1.516 1.052-2.697 1.052z"></svg:path>`,
})
export class RiSnapchatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnapchatLineIcon],svg[ri-snapchat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.383 10.58l.02-.249c.01-.147.021-.304.031-.48q.05-.838.051-1.845c0-.872-.294-1.487-.914-2.064c-.66-.614-1.459-.942-2.59-.942c-1.137 0-1.958.335-2.51.888c-.696.695-.957 1.218-.957 2.1c0 .521.06 1.994.095 2.619a2 2 0 0 1-.468 1.4q.081.15.152.318c.3.771.198 1.543-.152 2.271c-.392.818-.73 1.393-1.41 2.154a8 8 0 0 1-.642.643a2 2 0 0 1 .412.564a6 6 0 0 1 1.585.075c.81.146 1.324.434 2.194 1.061l.016.011l.213.152c.62.44.877.546 1.473.546c.609 0 .91-.121 1.523-.552l.207-.146c.877-.632 1.407-.927 2.231-1.076a6.7 6.7 0 0 1 1.56-.074q.021-.043.048-.09q.151-.27.368-.477a8 8 0 0 1-.616-.617a9.2 9.2 0 0 1-1.447-2.159c-.363-.749-.47-1.54-.137-2.321q.06-.147.132-.276a2 2 0 0 1-.468-1.435m-10.316-.102c.42 0 .601.305 1.22.305a.74.74 0 0 0 .325-.066c-.008-.156-.098-1.986-.098-2.729c0-1.688.719-2.69 1.542-3.514S10.162 3 11.982 3s3.066.653 3.952 1.478s1.551 1.93 1.551 3.528c0 1.555-.099 2.594-.107 2.716a.6.6 0 0 0 .278.065c.63 0 .63-.31 1.33-.31c.686 0 .983.57.983.823c0 .621-.832.967-1.33 1.126c-.369.117-.931.291-1.075.635q-.11.261.092.678c.004.008 1.26 2.883 3.93 3.326c.235.035.392.241.392.483c0 .333-.37.617-.727.782c-.443.2-1.09.37-1.952.505c-.043.078-.134.485-.235.887c-.135.542-.8.366-.99.326A5 5 0 0 0 16.277 20c-.483.087-.913.378-1.396.726c-.713.504-1.465 1.076-2.9 1.076s-2.144-.572-2.857-1.076c-.482-.348-.904-.637-1.395-.726c-.899-.163-1.57.036-1.796.056s-.841.245-.996-.326c-.044-.166-.19-.808-.234-.895c-.857-.135-1.509-.313-1.953-.513c-.365-.165-.726-.443-.726-.778c0-.236.158-.44.392-.483c2.643-.483 3.765-3.004 3.921-3.33q.197-.412.092-.679c-.144-.343-.705-.513-1.074-.635c-.105-.034-1.335-.373-1.335-1.117c0-.24.204-.573.581-.73c.162-.066.359-.092.465-.092"></svg:path>`,
})
export class RiSnapchatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnowflakeFillIcon],svg[ri-snowflake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.298l2.445-1.63l1.11 1.664L13 5.035v5.233l4.53-2.618l.198-3.064l1.996.13l-.19 2.932l2.635 1.303l-.886 1.792l-2.753-1.36L14.001 12l4.53 2.616l2.753-1.36l.886 1.792l-2.634 1.303l.19 2.932l-1.997.129l-.197-3.064L13 13.732v5.233l2.555 1.703l-1.11 1.664L12 20.702l-2.446 1.63l-1.109-1.664L11 18.965v-5.233l-4.532 2.616l-.198 3.064l-1.996-.128l.19-2.933l-2.635-1.303l.887-1.793l2.752 1.361L10 12L5.468 9.383l-2.752 1.361l-.887-1.793L4.464 7.65l-.19-2.933l1.997-.129l.197 3.064L11 10.267V5.035L8.445 3.332l1.11-1.664z"></svg:path>`,
})
export class RiSnowflakeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnowflakeLineIcon],svg[ri-snowflake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.298l2.445-1.63l1.11 1.664L13 5.035v5.233l4.53-2.618l.198-3.064l1.996.13l-.19 2.932l2.635 1.303l-.886 1.792l-2.753-1.36L14.001 12l4.53 2.616l2.753-1.36l.886 1.792l-2.634 1.303l.19 2.932l-1.997.129l-.197-3.064L13 13.732v5.233l2.555 1.703l-1.11 1.664L12 20.702l-2.446 1.63l-1.109-1.664L11 18.965v-5.233l-4.532 2.616l-.198 3.064l-1.996-.128l.19-2.933l-2.635-1.303l.887-1.793l2.752 1.361L10 12L5.468 9.383l-2.752 1.361l-.887-1.793L4.464 7.65l-.19-2.933l1.997-.129l.197 3.064L11 10.267V5.035L8.445 3.332l1.11-1.664z"></svg:path>`,
})
export class RiSnowflakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnowyFillIcon],svg[ri-snowy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.027 17.43A8.003 8.003 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 1 1 18 17.978a6 6 0 0 0-11.973-.549M13 16.267l1.964-1.134l1 1.732L14 18l1.964 1.134l-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134l-1-1.732L10 18l-1.964-1.134l1-1.732L11 16.268V14h2z"></svg:path>`,
})
export class RiSnowyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSnowyLineIcon],svg[ri-snowy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16.268l1.964-1.134l1 1.732L14 18l1.964 1.134l-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134l-1-1.732L10 18l-1.964-1.134l1-1.732L11 16.268V14h2zM17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18z"></svg:path>`,
})
export class RiSnowyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSofaFillIcon],svg[ri-sofa-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9a6 6 0 0 0-5.92 5.02Q3.287 8 3.5 8A4.5 4.5 0 0 1 8 12.5V14h8v-1.5a4.5 4.5 0 0 1 4.92-4.48A6 6 0 0 0 15 3m6 7.05a2.5 2.5 0 0 0-3 2.45V17h-2v-1H8v1H6v-4.5a2.5 2.5 0 0 0-5 0c0 .589.182 1.039.39 1.555c.28.696.61 1.51.61 2.945v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3c0-1.434.33-2.25.61-2.945c.208-.516.39-.966.39-1.555a2.5 2.5 0 0 0-2-2.45"></svg:path>`,
})
export class RiSofaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSofaLineIcon],svg[ri-sofa-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a6 6 0 0 0-6 6v.351c-1.52.746-2.367 2.565-1.733 4.307l.312.86a7 7 0 0 1 .422 2.391V19.5A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-2.59a7 7 0 0 1 .421-2.393l.313-.86c.633-1.741-.213-3.56-1.734-4.306V9a6 6 0 0 0-6-6zm10 6.032c-1.694.23-3 1.682-3 3.44V14H8v-1.528a3.47 3.47 0 0 0-3-3.44V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zM16 16v1h2v-4.528a1.472 1.472 0 1 1 2.855.502l-.312.86A9 9 0 0 0 20 16.909V19H4v-2.09a9 9 0 0 0-.542-3.076l-.313-.86A1.471 1.471 0 1 1 6 12.472V17h2v-1z"></svg:path>`,
})
export class RiSofaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSortAlphabetAscIcon],svg[ri-sort-alphabet-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm12.9 8V3h-2v13h-3l4 5l4-5zm-8-3H3v2h4.855L3 19v2h8v-2H6.146L11 15z"></svg:path>`,
})
export class RiSortAlphabetAscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSortAlphabetDescIcon],svg[ri-sort-alphabet-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm15.9 0l-4-5l-4 5h3v13h2V8zm-11 5H3v2h4.855L3 19v2h8v-2H6.146L11 15z"></svg:path>`,
})
export class RiSortAlphabetDescIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSortAscIcon],svg[ri-sort-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 3l4 5h-3v12h-2V8h-3zm-5 15v2H3v-2zm0-7v2H3v-2zm-2-7v2H3V4z"></svg:path>`,
})
export class RiSortAscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSortDescIcon],svg[ri-sort-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v12h3l-4 5l-4-5h3V4zm-8 14v2H3v-2zm2-7v2H3v-2zm0-7v2H3V4z"></svg:path>`,
})
export class RiSortDescIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSortNumberAscIcon],svg[ri-sort-number-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v8H7V5.41l-2 .539v-2.33L7.313 3zm10 0v13h3l-4 5l-4-5h3V3zm-8 12.5a3 3 0 0 1-.427 1.544L8.289 21h-2.31l1.473-2.55A3.001 3.001 0 1 1 11 15.5m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSortNumberAscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSortNumberDescIcon],svg[ri-sort-number-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V3H7.314L5 3.62v2.329l2-.539V11zm13-3l-4-5l-4 5h3v13h2V8zM8 16.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2.573.544a3 3 0 1 0-3.121 1.406L5.979 21h2.31z"></svg:path>`,
})
export class RiSortNumberDescIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSoundModuleFillIcon],svg[ri-sound-module-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v3h-2v-3h-2v-3h6v3zM5 18v3H3v-3H1v-3h6v3zm6-12V3h2v3h2v3H9V6zm0 5h2v10h-2zm-8 2V3h2v10zm16 0V3h2v10z"></svg:path>`,
})
export class RiSoundModuleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSoundModuleLineIcon],svg[ri-sound-module-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v3h-2v-3h-2v-2h6v2zM5 18v3H3v-3H1v-2h6v2zm6-12V3h2v3h2v2H9V6zm0 4h2v11h-2zm-8 4V3h2v11zm16 0V3h2v11z"></svg:path>`,
})
export class RiSoundModuleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSoundcloudFillIcon],svg[ri-soundcloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.464 8.596c.265 0 .48 2.106.48 4.704l-.001.351c-.019 2.434-.226 4.353-.479 4.353c-.256 0-.465-1.965-.48-4.44v-.352c.005-2.557.218-4.616.48-4.616m-1.664.96c.259 0 .47 1.8.48 4.054v.34c-.01 2.254-.221 4.054-.48 4.054c-.255 0-.464-1.755-.48-3.97v-.34l.002-.34c.025-2.133.23-3.798.478-3.798m-1.664 0c.255 0 .464 1.755.48 3.97v.34l-.002.34c-.025 2.133-.23 3.798-.478 3.798c-.259 0-.47-1.8-.48-4.054v-.34c.01-2.254.221-4.054.48-4.054m-1.664.576c.265 0 .48 1.762.48 3.936l-.002.335c-.02 2.017-.227 3.601-.478 3.601c-.262 0-.474-1.717-.48-3.852v-.168c.006-2.135.218-3.852.48-3.852M3.808 11.86c.265 0 .48 1.375.48 3.072v.158c-.013 1.623-.223 2.914-.48 2.914c-.265 0-.48-1.375-.48-3.072v-.158c.013-1.623.223-2.914.48-2.914m10.784-4.8c2.58 0 4.72 1.886 5.118 4.355q.444-.129.93-.13a3.36 3.36 0 0 1 .063 6.718l-.063.001h-8.16a.77.77 0 0 1-.768-.768V7.933a5.16 5.16 0 0 1 2.88-.873M2.144 11.668c.265 0 .48 1.333.48 2.976v.156c-.014 1.57-.223 2.82-.48 2.82c-.26 0-.473-1.29-.48-2.898v-.078c0-1.643.215-2.976.48-2.976m-1.664.96c.265 0 .48.946.48 2.112v.131c-.016 1.105-.225 1.981-.48 1.981c-.265 0-.48-.946-.48-2.112v-.131c.016-1.105.225-1.98.48-1.98"></svg:path>`,
})
export class RiSoundcloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSoundcloudLineIcon],svg[ri-soundcloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m3 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m3-4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m5-1a6 6 0 0 1 5.996 5.775l.003.26a3.5 3.5 0 0 1-.307 6.96L20.5 19h-3.501a1 1 0 0 1-.117-1.993L17 17h3.447l.138-.002a1.5 1.5 0 0 0 .267-2.957l-.135-.026l-1.77-.252l.053-1.787l-.004-.176A4 4 0 0 0 15.2 8.005L15 8q-.402 0-.788.077L14 8.126v9.875a1 1 0 0 1-.883.992L13 19a1 1 0 0 1-1-1V6.804A6 6 0 0 1 15 6M1 12a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiSoundcloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpaceIcon],svg[ri-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z"></svg:path>`,
})
export class RiSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpaceShipFillIcon],svg[ri-space-ship-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.88 18.049a35.9 35.9 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864a44 44 0 0 1-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875M12 14.995a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiSpaceShipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpaceShipLineIcon],svg[ri-space-ship-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.88 18.05a35.9 35.9 0 0 1 8.53-16.322a.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864a44 44 0 0 1-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875m6.697-1.123l1.158.066L12 19.523l1.265-2.53l1.157-.066a42 42 0 0 0 4.227-.455a33.9 33.9 0 0 0-6.65-12.387a33.9 33.9 0 0 0-6.648 12.387a42 42 0 0 0 4.226.455M12 14.995a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSpaceShipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpam2FillIcon],svg[ri-spam-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zM11 15.001v2h2v-2zm0-8v6h2V7z"></svg:path>`,
})
export class RiSpam2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpam2LineIcon],svg[ri-spam-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894zM11 15.001h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class RiSpam2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpam3FillIcon],svg[ri-spam-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zM8 11.001v2h8v-2z"></svg:path>`,
})
export class RiSpam3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpam3LineIcon],svg[ri-spam-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894zM8 11.001h8v2H8z"></svg:path>`,
})
export class RiSpam3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpamFillIcon],svg[ri-spam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5zM11 15v2h2v-2zm0-8v6h2V7z"></svg:path>`,
})
export class RiSpamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpamLineIcon],svg[ri-spam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5zM11 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class RiSpamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSparkling2FillIcon],svg[ri-sparkling-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zM8 4.333l2.667 5l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z"></svg:path>`,
})
export class RiSparkling2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSparkling2LineIcon],svg[ri-sparkling-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zm-6.333 8.125l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667l2.667-5zm.75 2.667L9.19 10.812L8.001 8.583l-1.189 2.229L4.584 12l2.228 1.188l1.189 2.229l1.188-2.229zm8.25 4.333l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z"></svg:path>`,
})
export class RiSparkling2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSparklingFillIcon],svg[ri-sparkling-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.438A2.437 2.437 0 0 0 16.438 2h1.125A2.437 2.437 0 0 0 20 4.438v1.125A2.437 2.437 0 0 0 17.563 8h-1.125A2.437 2.437 0 0 0 14 5.563zM1 11a6 6 0 0 0 6-6h2a6 6 0 0 0 6 6v2a6 6 0 0 0-6 6H7a6 6 0 0 0-6-6zm16.25 3A3.25 3.25 0 0 1 14 17.25v1.5A3.25 3.25 0 0 1 17.25 22h1.5A3.25 3.25 0 0 1 22 18.75v-1.5A3.25 3.25 0 0 1 18.75 14z"></svg:path>`,
})
export class RiSparklingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSparklingLineIcon],svg[ri-sparkling-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.438A2.437 2.437 0 0 0 16.438 2h1.125A2.437 2.437 0 0 0 20 4.438v1.125A2.437 2.437 0 0 0 17.563 8h-1.125A2.437 2.437 0 0 0 14 5.563zM1 11a6 6 0 0 0 6-6h2a6 6 0 0 0 6 6v2a6 6 0 0 0-6 6H7a6 6 0 0 0-6-6zm3.876 1A8.04 8.04 0 0 1 8 15.124A8.04 8.04 0 0 1 11.124 12A8.04 8.04 0 0 1 8 8.876A8.04 8.04 0 0 1 4.876 12m12.374 2A3.25 3.25 0 0 1 14 17.25v1.5A3.25 3.25 0 0 1 17.25 22h1.5A3.25 3.25 0 0 1 22 18.75v-1.5A3.25 3.25 0 0 1 18.75 14z"></svg:path>`,
})
export class RiSparklingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakAiFillIcon],svg[ri-speak-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m12.154 16.102l-1.665-1.11A8.96 8.96 0 0 0 21 12q-.001-.767-.124-1.5l1.943-.5q.18.975.181 2c0 2.258-.68 4.356-1.846 6.102"></svg:path>`,
})
export class RiSpeakAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakAiLineIcon],svg[ri-speak-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m0 2a6 6 0 0 0-4.684 9.75C5.41 15.114 6 16.667 6 18.306V20h5l.002-3H15v-4.248l1.55-.664l-1.543-2.425l-.057-.442A6 6 0 0 0 9 4m10.49 12.993l1.664 1.11A10.95 10.95 0 0 0 23 12q-.001-1.025-.181-2l-1.943.5q.123.733.124 1.5a8.96 8.96 0 0 1-1.51 4.993"></svg:path>`,
})
export class RiSpeakAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakFillIcon],svg[ri-speak-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m12.154 16.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102"></svg:path>`,
})
export class RiSpeakFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakLineIcon],svg[ri-speak-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.934 8.965A8.002 8.002 0 0 0 1 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 0 0 2-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727zM3 10a6 6 0 0 1 11.95-.779l.057.442l1.543 2.425l-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.97 5.97 0 0 1 3 10m18.154 8.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102"></svg:path>`,
})
export class RiSpeakLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeaker2FillIcon],svg[ri-speaker-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 14a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0 2a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiSpeaker2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeaker2LineIcon],svg[ri-speaker-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-4.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSpeaker2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeaker3FillIcon],svg[ri-speaker-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2M6 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6-5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiSpeaker3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeaker3LineIcon],svg[ri-speaker-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2M7 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiSpeaker3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakerFillIcon],svg[ri-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 18a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiSpeakerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeakerLineIcon],svg[ri-speaker-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v16h14V4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSpeakerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpectrumFillIcon],svg[ri-spectrum-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 2.006C21.24 2.093 22 3.25 22 12l-.005 1.2C21.908 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.712-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.381-8.8zM8.25 7h-.583a.67.67 0 0 0-.66.568l-.006.099v3.666c0 .335.246.612.568.66l.098.007h.584a3.75 3.75 0 0 1 3.744 3.55l.006.2v.583c0 .335.246.612.568.66l.098.007h3.667a.67.67 0 0 0 .66-.568l.007-.099v-.583a8.75 8.75 0 0 0-8.492-8.746z"></svg:path>`,
})
export class RiSpectrumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpectrumLineIcon],svg[ri-spectrum-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.389 2.001l1.81.005l.844.014c7.162.165 7.939 1.512 7.957 9.667l-.005 1.512l-.014.844c-.165 7.161-1.512 7.938-9.667 7.957l-1.512-.006l-.888-.015c-6.854-.163-7.828-1.427-7.907-8.78L2 11.691l.006-.89l.014-.865c.165-7.053 1.486-7.897 9.368-7.935M14.12 4.01L10.883 4l-1.322.01c-5.489.082-5.544.82-5.56 7.403l.002 2.175l.01 1.04c.088 4.983.793 5.343 6.399 5.37l3.455-.002l.776-.01c5.108-.091 5.346-.836 5.357-6.877l-.002-2.742l-.012-1.056c-.094-4.796-.785-5.25-5.866-5.303M8.25 7A8.75 8.75 0 0 1 17 15.75v.583a.667.667 0 0 1-.666.667h-3.667a.667.667 0 0 1-.666-.667v-.583A3.75 3.75 0 0 0 8.25 12h-.584A.667.667 0 0 1 7 11.333V7.667C7 7.299 7.299 7 7.667 7z"></svg:path>`,
})
export class RiSpectrumLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedFillIcon],svg[ri-speed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.333l-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416z"></svg:path>`,
})
export class RiSpeedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedLineIcon],svg[ri-speed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.333l-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416zM10.394 12L4 7.737v8.526zM14 7.737v8.526L20.394 12z"></svg:path>`,
})
export class RiSpeedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedMiniFillIcon],svg[ri-speed-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.788 17.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z"></svg:path>`,
})
export class RiSpeedMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedMiniLineIcon],svg[ri-speed-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.032 12L6 9.86v4.28zm-4.244 5.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM15 14.14L18.032 12L15 9.86zm-2-7.175a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z"></svg:path>`,
})
export class RiSpeedMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedUpFillIcon],svg[ri-speed-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.929 7.071l1.414-1.414A8 8 0 1 1 20 13m-4.707-4.707L10.5 12.5l2 2l4.207-4.793z"></svg:path>`,
})
export class RiSpeedUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpeedUpLineIcon],svg[ri-speed-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.929 7.071l1.414-1.414A8 8 0 1 1 20 13m-4.707-4.707l-4.5 4.5l1.414 1.414l4.5-4.5z"></svg:path>`,
})
export class RiSpeedUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSplitCellsHorizontalIcon],svg[ri-split-cells-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2zm4 4l3 3l-3 3v-2H9v2l-3-3l3-3v2h6z"></svg:path>`,
})
export class RiSplitCellsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSplitCellsVerticalIcon],svg[ri-split-cells-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001zm-7 1l3 3h-2v6h2l-3 3l-3-3h2V9H9z"></svg:path>`,
})
export class RiSplitCellsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpotifyFillIcon],svg[ri-spotify-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c-5.5 0-10 4.5-10 10s4.5 10 10 10s10-4.5 10-10s-4.45-10-10-10m3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2m1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25M6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75"></svg:path>`,
})
export class RiSpotifyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpotifyLineIcon],svg[ri-spotify-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.55 0 10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10m0 2c-4.395 0-8 3.605-8 8s3.605 8 8 8s8-3.605 8-8c0-4.414-3.573-8-8-8m3.75 12.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2m1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25M6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75"></svg:path>`,
})
export class RiSpotifyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpyFillIcon],svg[ri-spy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13a4 4 0 0 1 0 8c-2.142 0-4-1.79-4-4h-2a4 4 0 1 1-.535-2h3.07A4 4 0 0 1 17 13M2 12v-2h2V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3h2v2z"></svg:path>`,
})
export class RiSpyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSpyLineIcon],svg[ri-spy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A4 4 0 0 1 17 13M7 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2"></svg:path>`,
})
export class RiSpyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSquareFillIcon],svg[ri-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSquareLineIcon],svg[ri-square-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5z"></svg:path>`,
})
export class RiSquareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSquareRootIcon],svg[ri-square-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.382 4H22v2h-5.382L9 21.236L5.382 14H2v-2h4.618L9 16.764z"></svg:path>`,
})
export class RiSquareRootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackFillIcon],svg[ri-stack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0"></svg:path>`,
})
export class RiStackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackLineIcon],svg[ri-stack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"></svg:path>`,
})
export class RiStackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackOverflowFillIcon],svg[ri-stack-overflow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.001 20.003v-5.334h2v7.334h-16v-7.334h2v5.334zM7.6 14.736l.313-1.98l8.837 1.7l-.113 1.586zm1.2-4.532l.732-1.6l7.998 3.733l-.733 1.6zm2.265-3.932l1.133-1.333l6.798 5.665l-1.133 1.333zm4.332-4.132l5.265 7.064l-1.4 1.067l-5.264-7.065zM7.333 18.668v-2h9.33v2z"></svg:path>`,
})
export class RiStackOverflowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackOverflowLineIcon],svg[ri-stack-overflow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.001 20.003V15h2v7.003h-16V15h2v5.003zM7.501 18v-2h9v2zm.077-4.38l.347-1.97l8.864 1.563l-.348 1.97zm1.634-5.504l1-1.732l7.794 4.5l-1 1.732zm3.417-4.613l1.532-1.285l5.785 6.894l-1.532 1.286z"></svg:path>`,
})
export class RiStackOverflowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackedViewIcon],svg[ri-stacked-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 11V4h14v9zm-1 4a1 1 0 0 0-1 1v4h2v-3h14v3h2v-4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiStackedViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackshareFillIcon],svg[ri-stackshare-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-4.208 2.621a2.22 2.22 0 0 0-2.133 1.6h-1.998l-2.46 4.185H8.764a2.222 2.222 0 1 0 0 1.242h1.471l2.417 4.134h2.018a2.222 2.222 0 1 0 0-1.243h-1.317l-2.056-3.537l2.053-3.538h1.31a2.222 2.222 0 1 0 2.133-2.843m.011 9.427a1.168 1.168 0 1 1-1.145 1.394s-.03-.226 0-.453a1.17 1.17 0 0 1 1.145-.94m-10.152-4.21a1.169 1.169 0 0 1 0 2.335a1.168 1.168 0 0 1 0-2.335m10.15-4.209a1.168 1.168 0 0 1 0 2.335a1.17 1.17 0 0 1-1.144-.941c-.026-.206 0-.446 0-.446a1.17 1.17 0 0 1 1.144-.948"></svg:path>`,
})
export class RiStackshareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStackshareLineIcon],svg[ri-stackshare-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1a3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1a3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1H13zm9.464 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiStackshareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStairsFillIcon],svg[ri-stairs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v18H3v-6h4v-4h4V7h4z"></svg:path>`,
})
export class RiStairsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStairsLineIcon],svg[ri-stairs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v18H3v-6h4v-4h4V7h4zm2 2v4h-4v4H9v4H5v2h14V5z"></svg:path>`,
})
export class RiStairsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarFillIcon],svg[ri-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"></svg:path>`,
})
export class RiStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarHalfFillIcon],svg[ri-star-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.968l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419zm0 2.292l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"></svg:path>`,
})
export class RiStarHalfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarHalfLineIcon],svg[ri-star-half-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.968l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419zm0 2.292l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"></svg:path>`,
})
export class RiStarHalfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarHalfSFillIcon],svg[ri-star-half-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.656l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708zM12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7z"></svg:path>`,
})
export class RiStarHalfSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarHalfSLineIcon],svg[ri-star-half-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.656l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708zM12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7z"></svg:path>`,
})
export class RiStarHalfSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarLineIcon],svg[ri-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928zm0-2.292l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419l-2.039 4.42l-4.833.572l3.573 3.305l-.948 4.773z"></svg:path>`,
})
export class RiStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarOffFillIcon],svg[ri-star-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.413 8.792l-5.392 4.986L9.71 5.467L12 .5l3.386 7.34zm-4.79 11.244l2.57 2.57l1.414-1.414L2.808 1.393L1.394 2.808l5.264 5.264l-6.07.72l5.934 5.488l-1.575 7.928l7.054-3.948l7.053 3.948z"></svg:path>`,
})
export class RiStarOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarOffLineIcon],svg[ri-star-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.413 8.792l-5.392 4.986l-1.415-1.415l2.266-2.096l-4.833-.573l-2.038-4.419l-.784 1.699L9.71 5.467L12 .5l3.386 7.34zM8.46 9.872l-3.33.395l3.573 3.305l-.948 4.773L12 15.968l4.246 2.377l-.17-.854zm10.163 10.164l.432 2.172l-7.053-3.948l-7.054 3.948l1.575-7.928L.588 8.792l6.07-.72l-5.264-5.264l1.414-1.415l19.8 19.8l-1.415 1.414z"></svg:path>`,
})
export class RiStarOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarSFillIcon],svg[ri-star-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7z"></svg:path>`,
})
export class RiStarSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarSLineIcon],svg[ri-star-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7zm0-2.344l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708l-1.268 3.047l-3.29.264l2.507 2.147l-.766 3.21z"></svg:path>`,
})
export class RiStarSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarSmileFillIcon],svg[ri-star-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .5l4.226 6.183l7.186 2.109l-4.575 5.93l.216 7.486L12 19.69l-7.054 2.518l.216-7.486l-4.575-5.93l7.187-2.109zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15z"></svg:path>`,
})
export class RiStarSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStarSmileLineIcon],svg[ri-star-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .5l4.226 6.183l7.186 2.109l-4.575 5.93l.216 7.486L12 19.69l-7.054 2.518l.216-7.486l-4.575-5.93l7.187-2.109zm0 3.544L9.022 8.402L3.957 9.887l3.225 4.179l-.153 5.274l4.97-1.774l4.97 1.774l-.151-5.274l3.224-4.179l-5.065-1.485zM10 12a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0z"></svg:path>`,
})
export class RiStarSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteamFillIcon],svg[ri-steam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 2c-5.25 0-9.556 4.05-9.964 9.198l5.36 2.214a2.8 2.8 0 0 1 1.593-.491q.08.001.157.005l2.384-3.452v-.049c0-2.08 1.69-3.77 3.77-3.77a3.776 3.776 0 0 1 3.77 3.773c0 2.08-1.691 3.77-3.77 3.77h-.087l-3.397 2.426l.003.133A2.826 2.826 0 0 1 9 18.587a2.844 2.844 0 0 1-2.775-2.273l-3.838-1.589C3.574 18.923 7.428 22 12.006 22c5.522 0 9.998-4.477 9.998-10S17.527 2 12.005 2M7.08 16.667c.218.452.595.832 1.095 1.041a2.126 2.126 0 0 0 2.78-2.77a2.123 2.123 0 0 0-2.712-1.178l1.269.526a1.565 1.565 0 0 1-1.204 2.889zm10.74-7.245a2.516 2.516 0 0 0-2.513-2.512a2.513 2.513 0 1 0 2.513 2.512M15.312 7.53A1.89 1.89 0 0 1 17.2 9.418a1.89 1.89 0 0 1-1.888 1.888a1.887 1.887 0 1 1 0-3.776"></svg:path>`,
})
export class RiSteamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteamLineIcon],svg[ri-steam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.001 4a5 5 0 1 1-.892 9.92l-2.651 1.989q.042.29.043.591a4 4 0 1 1-7.966-.524L1.709 14.43l.75-1.854l3.826 1.545a4 4 0 0 1 3.697-1.592l2.04-3.061A5 5 0 0 1 17.002 4m-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 0 1-.75 1.854L7.52 16.78a2 2 0 1 0 1.981-2.28m3.364-2.69l-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5 5 0 0 1-1.135-1.191M17 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 1a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiSteamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteering2FillIcon],svg[ri-steering-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8 13l-3.938.001A8.004 8.004 0 0 0 11 19.938V16a3 3 0 0 1-3-3m11.938.001L16 13a3 3 0 0 1-3 3l.001 3.938a8.004 8.004 0 0 0 6.937-6.937M12 4a8 8 0 0 0-7.938 7H8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h3.938A8 8 0 0 0 12 4"></svg:path>`,
})
export class RiSteering2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteering2LineIcon],svg[ri-steering-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8 13l-3.938.001A8.004 8.004 0 0 0 11 19.938V16a3 3 0 0 1-3-3m11.938.001L16 13a3 3 0 0 1-3 3l.001 3.938a8.004 8.004 0 0 0 6.937-6.937M14 12h-4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-2-8a8 8 0 0 0-7.938 7H8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h3.938A8 8 0 0 0 12 4"></svg:path>`,
})
export class RiSteering2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteeringFillIcon],svg[ri-steering-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 14.001a10.01 10.01 0 0 1-8.401 7.902v-2.025A8.01 8.01 0 0 0 19.747 14zm-17.548 0a8.01 8.01 0 0 0 6.247 5.859v2.028a10.01 10.01 0 0 1-8.3-7.887zM17.999 11v2h-1a4 4 0 0 0-3.995 3.8L13 17v1h-2v-1a4 4 0 0 0-3.8-3.995L7 13H6v-2zm-6-9c5.186 0 9.45 3.947 9.951 9h-2.012A8.001 8.001 0 0 0 4.06 11H2.05C2.552 5.947 6.815 2 12 2"></svg:path>`,
})
export class RiSteeringFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSteeringLineIcon],svg[ri-steering-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 14.001a10.01 10.01 0 0 1-8.401 7.902v-2.025A8.01 8.01 0 0 0 19.747 14zm-17.548 0a8.01 8.01 0 0 0 6.247 5.859v2.028a10.01 10.01 0 0 1-8.3-7.887zM17.999 11v2h-3a2 2 0 0 0-1.994 1.85l-.006.15v3h-2v-3a2 2 0 0 0-1.85-1.995L8.999 13H6v-2zm-6-9c5.186 0 9.45 3.947 9.951 9h-2.012A8.001 8.001 0 0 0 4.06 11H2.05C2.552 5.947 6.815 2 12 2"></svg:path>`,
})
export class RiSteeringLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStethoscopeFillIcon],svg[ri-stethoscope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v2H6v4a4 4 0 0 0 8 0V5h-2V3h3a1 1 0 0 1 1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.238a3 3 0 1 1 2.05.148A5.502 5.502 0 0 1 8.999 16.5v-1.583A6 6 0 0 1 4 9V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiStethoscopeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStethoscopeLineIcon],svg[ri-stethoscope-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v2H6v4a4 4 0 0 0 8 0V5h-2V3h3a1 1 0 0 1 1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.238a3 3 0 1 1 2.05.148A5.502 5.502 0 0 1 8.999 16.5v-1.583A6 6 0 0 1 4 9V4a1 1 0 0 1 1-1zm11 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiStethoscopeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNote2FillIcon],svg[ri-sticky-note-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 16l-5.003 5H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999z"></svg:path>`,
})
export class RiStickyNote2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNote2LineIcon],svg[ri-sticky-note-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5zM5 19h10.169L19 15.171V5H5z"></svg:path>`,
})
export class RiStickyNote2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteAddFillIcon],svg[ri-sticky-note-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v3H1v2h3v3h2V6h3V4H6V1zm7 4a6 6 0 0 1-8 5.659v9.348c0 .548.447.993.998.993H14v-6c0-.55.45-1 1-1h6V3.999A.996.996 0 0 0 20.007 3h-9.348A6 6 0 0 1 11 5m10 11l-5 4.997V16z"></svg:path>`,
})
export class RiStickyNoteAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteAddLineIcon],svg[ri-sticky-note-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v3H1v2h3v3h2V6h3V4H6V1zM3 20.007V11h2v8h8v-5c0-.55.45-1 1-1l5-.001V5h-8V3h9.007c.548 0 .993.456.993 1.002V15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007m15.171-5.008L15 15v3.169z"></svg:path>`,
})
export class RiStickyNoteAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteFillIcon],svg[ri-sticky-note-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 14l-.117.007a1 1 0 0 0-.876.876L14 15v6H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V14zm6 2l-5 4.997V16z"></svg:path>`,
})
export class RiStickyNoteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStickyNoteLineIcon],svg[ri-sticky-note-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001zm-.829 9.999L15 15v3.169z"></svg:path>`,
})
export class RiStickyNoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStockFillIcon],svg[ri-stock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm10 5h3v9h-3v3h-2v-3h-3v-9h3v-3h2z"></svg:path>`,
})
export class RiStockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStockLineIcon],svg[ri-stock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5zm13 3h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm-3 2v5h4v-5z"></svg:path>`,
})
export class RiStockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopCircleFillIcon],svg[ri-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M9 9v6h6V9z"></svg:path>`,
})
export class RiStopCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopCircleLineIcon],svg[ri-stop-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9 9h6v6H9z"></svg:path>`,
})
export class RiStopCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopFillIcon],svg[ri-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopLargeFillIcon],svg[ri-stop-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiStopLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopLargeLineIcon],svg[ri-stop-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h14v14H5zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiStopLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopLineIcon],svg[ri-stop-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v10h10V7zM6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiStopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopMiniFillIcon],svg[ri-stop-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1"></svg:path>`,
})
export class RiStopMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStopMiniLineIcon],svg[ri-stop-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 1v8h8V8z"></svg:path>`,
})
export class RiStopMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStore2FillIcon],svg[ri-store-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20v2H2v-2h1v-6.758A4.5 4.5 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.703 4.682c.418.694.642 1.49.642 2.318c0 1.56-.794 2.935-2 3.742V20zM5.789 4L3.356 8.213a2.5 2.5 0 1 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4z"></svg:path>`,
})
export class RiStore2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStore2LineIcon],svg[ri-store-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.242V20h1v2H2v-2h1v-6.758A4.5 4.5 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.703 4.682c.418.694.642 1.49.642 2.318c0 1.56-.794 2.935-2 3.742m-2 .73a4.5 4.5 0 0 1-3.75-1.36A4.5 4.5 0 0 1 12 14.001a4.5 4.5 0 0 1-3.25-1.387A4.5 4.5 0 0 1 5 13.973V20h14zM5.789 4L3.356 8.213a2.5 2.5 0 1 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4z"></svg:path>`,
})
export class RiStore2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStore3FillIcon],svg[ri-store-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm1 1h8v3H6zM3 3h18v2H3z"></svg:path>`,
})
export class RiStore3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStore3LineIcon],svg[ri-store-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm-.96-2h15.92l-.6-3H4.64zM6 14h8v3H6zM3 3h18v2H3z"></svg:path>`,
})
export class RiStore3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStoreFillIcon],svg[ri-store-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A4 4 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a4 4 0 0 1-1 2.646M14 9a1 1 0 1 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 0 1 2 0a2 2 0 1 0 4 0"></svg:path>`,
})
export class RiStoreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStoreLineIcon],svg[ri-store-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A4 4 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a4 4 0 0 1-1 2.646m-2 1.228a4.01 4.01 0 0 1-4-1.228A4 4 0 0 1 12 13a4 4 0 0 1-3-1.354a3.99 3.99 0 0 1-4 1.228V20h14zM14 9a1 1 0 1 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 0 1 2 0a2 2 0 1 0 4 0"></svg:path>`,
})
export class RiStoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStrikethroughIcon],svg[ri-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.154 14q.346.774.346 1.72q0 2.014-1.571 3.147Q14.357 20 11.586 20q-2.46 0-4.87-1.145v-2.254q2.28 1.316 4.666 1.316q3.826 0 3.839-2.197a2.2 2.2 0 0 0-.648-1.603l-.12-.117H3v-2h18v2zm-4.078-3H7.629a4 4 0 0 1-.481-.522Q6.5 9.643 6.5 8.452q0-1.854 1.397-3.153T12.222 4q2.207 0 4.222.984v2.152q-1.8-1.03-3.946-1.03q-3.72 0-3.719 2.346q0 .63.654 1.099q.654.47 1.613.75q.93.27 2.03.699"></svg:path>`,
})
export class RiStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riStrikethrough2Icon],svg[ri-strikethrough-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2V6H5V4h14v2h-6zm0 6v5h-2v-5zM3 11h18v2H3z"></svg:path>`,
})
export class RiStrikethrough2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubscriptIcon],svg[ri-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.596 4L10.5 9.928L15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4zM21.8 16a.8.8 0 1 0-1.57.22l-1.154.33A2.001 2.001 0 1 1 23 16c0 .573-.24 1.09-.626 1.454L20.744 19H23v1h-4v-1l2.55-2.42a.8.8 0 0 0 .25-.58"></svg:path>`,
})
export class RiSubscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubscript2Icon],svg[ri-subscript-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v13H9V6H3V4h14v2zm8.55 10.58a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 16c0 .573-.24 1.09-.626 1.454L18.744 19H21v1h-4v-1z"></svg:path>`,
})
export class RiSubscript2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubtractFillIcon],svg[ri-subtract-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11H5v2h14z"></svg:path>`,
})
export class RiSubtractFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubtractLineIcon],svg[ri-subtract-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11v2h14v-2z"></svg:path>`,
})
export class RiSubtractLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubwayFillIcon],svg[ri-subway-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM11 12V5H7a2 2 0 0 0-2 2v5zm2 0h6V7a2 2 0 0 0-2-2h-4zm-5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiSubwayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubwayLineIcon],svg[ri-subway-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM13 5v6h6V7a2 2 0 0 0-2-2zm-2 0H7a2 2 0 0 0-2 2v4h6zm8 8H5v5h14zM7.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiSubwayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubwayWifiFillIcon],svg[ri-subway-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v9h8v6a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4zM7.5 15a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M11 5H7a2 2 0 0 0-1.995 1.85L5 7v5h6zm7.5-4a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiSubwayWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSubwayWifiLineIcon],svg[ri-subway-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h6v8h8zm-2-5H5v5h14zM7.5 14a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M11 5H7a2 2 0 0 0-1.995 1.85L5 7v4h6zm7.5-4a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiSubwayWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcase2FillIcon],svg[ri-suitcase-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1zM10 9H8v9h2zm6 0h-2v9h2zm-2-5h-4v1h4z"></svg:path>`,
})
export class RiSuitcase2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcase2LineIcon],svg[ri-suitcase-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1zm1-16H5v13h14zm-9 2v9H8V9zm6 0v9h-2V9zm-2-5h-4v1h4z"></svg:path>`,
})
export class RiSuitcase2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcase3FillIcon],svg[ri-suitcase-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm-6 9H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-3-7h-4v4h4z"></svg:path>`,
})
export class RiSuitcase3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcase3LineIcon],svg[ri-suitcase-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm4 8H5v10h14zM9 10v8H7v-8zm4 0v8h-2v-8zm4 0v8h-2v-8zm-3-7h-4v4h4z"></svg:path>`,
})
export class RiSuitcase3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcaseFillIcon],svg[ri-suitcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zM8 8H6v11h2zm10 0h-2v11h2zm-4-3h-4v1h4z"></svg:path>`,
})
export class RiSuitcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuitcaseLineIcon],svg[ri-suitcase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zm1 5H8v11h8zM4 8v11h2V8zm10-3h-4v1h4zm4 3v11h2V8z"></svg:path>`,
})
export class RiSuitcaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunCloudyFillIcon],svg[ri-sun-cloudy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.984 5.06a6.5 6.5 0 0 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21H9a8 8 0 1 1 .984-15.941m2.071.544a8.03 8.03 0 0 1 4.403 4.495a5.53 5.53 0 0 1 3.12.307a4.5 4.5 0 0 0-7.522-4.802"></svg:path>`,
})
export class RiSunCloudyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunCloudyLineIcon],svg[ri-sun-cloudy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.984 5.06a6.5 6.5 0 0 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21H9a8 8 0 1 1 .984-15.941m2.071.544a8.03 8.03 0 0 1 4.403 4.495a5.53 5.53 0 0 1 3.12.307a4.5 4.5 0 0 0-7.522-4.802M17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6z"></svg:path>`,
})
export class RiSunCloudyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunFillIcon],svg[ri-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"></svg:path>`,
})
export class RiSunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunFoggyFillIcon],svg[ri-sun-foggy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.341 14A6 6 0 1 1 12 18v-4zM6 20h9v2H6zm-5-9h3v2H1zm1 5h8v2H2zm9-15h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2z"></svg:path>`,
})
export class RiSunFoggyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunFoggyLineIcon],svg[ri-sun-foggy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4m-2 8h9v2H6zm-4-4h8v2H2zm9-15h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2z"></svg:path>`,
})
export class RiSunFoggyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSunLineIcon],svg[ri-sun-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"></svg:path>`,
})
export class RiSunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSupabaseFillIcon],svg[ri-supabase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42v7.33h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z"></svg:path>`,
})
export class RiSupabaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSupabaseLineIcon],svg[ri-supabase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.598V13.97H3.9c-.67 0-1.07-.784-.643-1.336zm2 5.433V2.333c0-1.811-2.297-2.624-3.418-1.171L1.673 11.41c-1.427 1.85-.125 4.559 2.227 4.559H11v5.698c0 1.811 2.296 2.624 3.418 1.171l7.908-10.249c1.427-1.849.126-4.558-2.227-4.558zm0 2h7.1c.669 0 1.069.784.643 1.336L13 21.402z"></svg:path>`,
})
export class RiSupabaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuperscriptIcon],svg[ri-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.596 5l4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5zM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 1 1 23 6c0 .573-.24 1.09-.626 1.454L20.744 9H23v1h-4V9z"></svg:path>`,
})
export class RiSuperscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSuperscript2Icon],svg[ri-superscript-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v13H9V7H3V5h12v2zm8.55-.42a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 6c0 .573-.24 1.09-.626 1.454L18.744 9H21v1h-4V9z"></svg:path>`,
})
export class RiSuperscript2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurgicalMaskFillIcon],svg[ri-surgical-mask-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.485 3.121l7.758 1.94a1 1 0 0 1 .757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a6 6 0 0 1-2.896 3.158l-4.789 2.395a2 2 0 0 1-1.788 0l-4.79-2.395A6 6 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97a1 1 0 0 1 .757-.97l7.758-1.939a2 2 0 0 1 .97 0M3 9H2v3a1 1 0 0 0 1 1zm19 0h-1v4a1 1 0 0 0 1-1z"></svg:path>`,
})
export class RiSurgicalMaskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurgicalMaskLineIcon],svg[ri-surgical-mask-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.485 3.121l7.758 1.94a1 1 0 0 1 .757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a6 6 0 0 1-2.896 3.158l-4.789 2.395a2 2 0 0 1-1.788 0l-4.79-2.395A6 6 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97a1 1 0 0 1 .757-.97l7.758-1.939a2 2 0 0 1 .97 0M12 5.061l-7 1.75v5.98a4 4 0 0 0 2.211 3.578L12 18.765l4.789-2.395A4 4 0 0 0 19 12.792v-5.98zM3 9H2v3a1 1 0 0 0 1 1zm19 0h-1v4a1 1 0 0 0 1-1z"></svg:path>`,
})
export class RiSurgicalMaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurroundSoundFillIcon],svg[ri-surround-sound-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121A6.98 6.98 0 0 0 5 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.98 4.98 0 0 1 7 12.07c0-1.38.56-2.63 1.464-3.535zm9.9 0l-1.414 1.415A4.98 4.98 0 0 1 17 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 19 12.07a6.98 6.98 0 0 0-2.05-4.95M12 15.071a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiSurroundSoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurroundSoundLineIcon],svg[ri-surround-sound-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121l1.414 1.415A4.98 4.98 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.98 6.98 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95m9.9 0A6.98 6.98 0 0 1 19 12.07a6.98 6.98 0 0 1-2.05 4.95l-1.414-1.414A4.98 4.98 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535zM12 13.071a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiSurroundSoundLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurveyFillIcon],svg[ri-survey-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4zm3 13H7v2h2zm0-3H7v2h2zm0-3H7v2h2zm7-9v4H8V2z"></svg:path>`,
})
export class RiSurveyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSurveyLineIcon],svg[ri-survey-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2zM7 6H5v14h14V6h-2v2H7zm2 10v2H7v-2zm0-3v2H7v-2zm0-3v2H7v-2zm6-6H9v2h6z"></svg:path>`,
})
export class RiSurveyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSvelteFillIcon],svg[ri-svelte-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498"></svg:path>`,
})
export class RiSvelteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSvelteLineIcon],svg[ri-svelte-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 3.77a6.25 6.25 0 0 0-8.63-1.913L6.11 5.081a6.25 6.25 0 0 0-1.973 8.532a6.25 6.25 0 0 0 8.693 8.53l5.06-3.224a6.25 6.25 0 0 0 1.974-8.532A6.25 6.25 0 0 0 19.8 3.77m-1.352 5.004A6.26 6.26 0 0 0 15.65 7.5a1 1 0 0 0-1.525-1.003L9.066 9.72a1 1 0 1 0 1.075 1.686l2.109-1.343a4.25 4.25 0 1 1 4.567 7.17l-5.06 3.223a4.25 4.25 0 0 1-6.203-5.23A6.25 6.25 0 0 0 8.35 16.5a1 1 0 0 0 1.525 1.003l5.06-3.224a1 1 0 0 0-1.074-1.687l-2.109 1.344a4.25 4.25 0 0 1-4.567-7.17l5.06-3.223a4.25 4.25 0 0 1 6.203 5.23"></svg:path>`,
})
export class RiSvelteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwap2FillIcon],svg[ri-swap-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.207 2.293l-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293l1.414 1.414L21.914 7zM7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M5.914 18l2.293 2.293l-1.414 1.414L2.086 17l4.707-4.707l1.414 1.414L5.914 16H11v2zM14 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiSwap2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwap2LineIcon],svg[ri-swap-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.207 2.293l-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293l1.414 1.414L21.914 7zM9.5 7a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0m2 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M5.914 18l2.293 2.293l-1.414 1.414L2.086 17l4.707-4.707l1.414 1.414L5.914 16H11v2zM15 19h4v-4h-4zm-2-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiSwap2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwap3FillIcon],svg[ri-swap-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.914L3.707 8.207L2.293 6.793L7 2.086l4.707 4.707l-1.414 1.414L8 5.914V11H6zM12.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m9.207 10.207l-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293l-1.414 1.414L17 21.914zM11 14a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"></svg:path>`,
})
export class RiSwap3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwap3LineIcon],svg[ri-swap-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.914L3.707 8.207L2.293 6.793L7 2.086l4.707 4.707l-1.414 1.414L8 5.914V11H6zM17 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m4.707 5.707l-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293l-1.414 1.414L17 21.914zM5 19h4v-4H5zm5-6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiSwap3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwapBoxFillIcon],svg[ri-swap-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4v2h-4v2h4v2l3.5-3zm-6 10v-2h4v-2h-4v-2l-3.5 3z"></svg:path>`,
})
export class RiSwapBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwapBoxLineIcon],svg[ri-swap-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4l3.5 3l-3.5 3v-2h-4v-2h4zm-6 10l-3.5-3l3.5-3v2h4v2h-4z"></svg:path>`,
})
export class RiSwapBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwapFillIcon],svg[ri-swap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-5-13h2v4h2v-4h2l-3-3.5zm10 6h-2v-4h-2v4h-2l3 3.5z"></svg:path>`,
})
export class RiSwapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwapLineIcon],svg[ri-swap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-11l3-3.5l3 3.5h-2v4h-2v-4zm10 6l-3 3.5l-3-3.5h2v-4h2v4z"></svg:path>`,
})
export class RiSwapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwitchFillIcon],svg[ri-switch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.62 21c-.085 0-.141-.057-.127-.127V3.127c0-.056.042-.113.113-.113h2.785a4.61 4.61 0 0 1 4.61 4.61v8.766a4.61 4.61 0 0 1-4.61 4.61zm3.422-9.926c-1.004 0-1.824.82-1.824 1.824s.82 1.824 1.824 1.824s1.824-.82 1.824-1.824s-.82-1.824-1.824-1.824M5.8 8.4a1.7 1.7 0 0 1 1.696-1.696A1.7 1.7 0 0 1 9.193 8.4c0 .934-.763 1.697-1.697 1.697A1.7 1.7 0 0 1 5.8 8.4M11.54 3c.085 0 .142.057.128.127V20.86c0 .07-.057.127-.128.127H7.61A4.61 4.61 0 0 1 3 16.376V7.61A4.61 4.61 0 0 1 7.611 3zm-1.315 16.544V4.442H7.611c-.849 0-1.64.34-2.235.933a3.1 3.1 0 0 0-.933 2.235v8.766c0 .849.34 1.64.933 2.234a3.1 3.1 0 0 0 2.235.934z"></svg:path>`,
})
export class RiSwitchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwitchLineIcon],svg[ri-switch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 3v18h-4.4a4.6 4.6 0 0 1-4.6-4.6V7.6a4.6 4.6 0 0 1 4.6-4.6zm-2 2h-2.4a2.6 2.6 0 0 0-2.6 2.6v8.8a2.6 2.6 0 0 0 2.6 2.6h2.4zm-2.5 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m6.5-7h2.4a4.6 4.6 0 0 1 4.6 4.6v8.8a4.6 4.6 0 0 1-4.6 4.6h-2.4zm3 11.7a1.8 1.8 0 1 0 0-3.6a1.8 1.8 0 0 0 0 3.6"></svg:path>`,
})
export class RiSwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwordFillIcon],svg[ri-sword-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.048 13.406l3.535 3.536l-1.413 1.414l1.415 1.415l-1.414 1.414l-2.475-2.475l-2.829 2.829l-1.414-1.414l2.829-2.83l-2.475-2.474l1.414-1.414l1.414 1.413zM3 3l3.546.003l11.817 11.818l1.415-1.414l1.415 1.414l-2.475 2.475l2.828 2.829l-1.414 1.414l-2.829-2.829l-2.474 2.475l-1.415-1.414l1.414-1.415L3.002 6.531zm14.457 0L21 3.003l.002 3.523l-4.053 4.052l-3.536-3.535z"></svg:path>`,
})
export class RiSwordFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSwordLineIcon],svg[ri-sword-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.456 3L21 3.003l.002 3.523l-5.467 5.466l2.828 2.829l1.415-1.414l1.415 1.414l-2.475 2.475l2.828 2.829l-1.414 1.414l-2.829-2.829l-2.474 2.475l-1.415-1.414l1.414-1.415l-2.829-2.828l-2.828 2.828l1.415 1.415l-1.414 1.414l-2.475-2.475l-2.829 2.829l-1.414-1.414l2.829-2.83l-2.475-2.474l1.414-1.414l1.414 1.413l2.827-2.828l-5.46-5.46L2.999 3l3.546.003l5.453 5.454zm-7.58 10.406l-2.828 2.828l.708.707l2.827-2.828zM19 5.001h-.717l-4.87 4.869l.706.707L19 5.698zm-14 0v.7l11.241 11.241l.707-.707L5.715 5.002z"></svg:path>`,
})
export class RiSwordLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSyringeFillIcon],svg[ri-syringe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.678 7.98l-1.414 1.413l-2.122-2.12l-2.121 2.12l3.536 3.536l-1.415 1.414l-.707-.707L11.071 20H5.414l-2.12 2.121l-1.415-1.414L4 18.586v-5.657l6.364-6.364l-.707-.707l1.414-1.414l3.536 3.535l2.121-2.121l-2.121-2.121l1.414-1.415zm-12.02 6.363l-2.83-2.828l-1.414 1.414l2.829 2.828zm2.828-2.828L9.657 8.686l-1.414 1.415l2.828 2.828z"></svg:path>`,
})
export class RiSyringeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riSyringeLineIcon],svg[ri-syringe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.678 7.98l-1.414 1.413l-2.122-2.12l-2.121 2.12l3.536 3.536l-1.415 1.414l-.707-.707L11.071 20H5.414l-2.12 2.121l-1.415-1.414L4 18.586v-5.657l6.364-6.364l-.707-.707l1.414-1.414l3.536 3.535l2.121-2.121l-2.121-2.121l1.414-1.415zm-5.657 4.242l-4.243-4.243l-1.414 1.414l2.121 2.122l-1.414 1.414l-2.121-2.121l-1.414 1.414l2.121 2.121l-1.414 1.414l-2.121-2.121l-.122.121V18h4.243z"></svg:path>`,
})
export class RiSyringeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTBoxFillIcon],svg[ri-t-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8H7v2h4v7h2v-7h4zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTBoxLineIcon],svg[ri-t-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 7v7h-2v-7H7V8h10v2z"></svg:path>`,
})
export class RiTBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirt2FillIcon],svg[ri-t-shirt-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001l.001 8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3 3 0 1 0 6 0z"></svg:path>`,
})
export class RiTShirt2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirt2LineIcon],svg[ri-t-shirt-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001l.001 8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11 1.999h-3.417l-.017.041a5 5 0 0 1-4.35 2.955L11.999 8a5 5 0 0 1-4.566-2.96L7.414 5H3.998v5l2.999-.001V19h10.001l-.001-9l3.001-.001z"></svg:path>`,
})
export class RiTShirt2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirtAirFillIcon],svg[ri-t-shirt-air-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.705 17.793c.827.827 1.588 1.207 2.293 1.207c.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572c1.214 0 2.379.545 3.486 1.58l.221.213l-1.414 1.414C20.464 20.38 19.703 20 18.998 20c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572c-1.214 0-2.379-.545-3.486-1.58l-.221-.213zM8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9a2 2 0 0 0-1.994 1.85l-.006.15v7h-4a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.707 10.793c.827.827 1.588 1.207 2.293 1.207c.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572c1.214 0 2.379.545 3.486 1.58l.221.213l-1.414 1.414C20.464 16.38 19.703 16 18.998 16c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572c-1.214 0-2.379-.545-3.486-1.58l-.221-.213z"></svg:path>`,
})
export class RiTShirtAirFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirtAirLineIcon],svg[ri-t-shirt-air-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.705 17.793c.827.827 1.588 1.207 2.293 1.207c.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572c1.214 0 2.379.545 3.486 1.58l.221.213l-1.414 1.414C20.464 20.38 19.703 20 18.998 20c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572c-1.214 0-2.379-.545-3.486-1.58l-.221-.213zM8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4.002v-2l3.002-.001v-5h-3.417l-.017.041a5 5 0 0 1-4.35 2.955L11.999 8a5 5 0 0 1-4.566-2.96L7.414 5H3.998v5l2.999-.001V19h3.001v2h-4a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.707 10.793c.827.827 1.588 1.207 2.293 1.207c.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572c1.214 0 2.379.545 3.486 1.58l.221.213l-1.414 1.414C20.464 16.38 19.703 16 18.998 16c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572c-1.214 0-2.379-.545-3.486-1.58l-.221-.213z"></svg:path>`,
})
export class RiTShirtAirLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirtFillIcon],svg[ri-t-shirt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.514 5l2.606-2.607a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.778 3.778V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-9.17L1.22 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 0L9.484 5z"></svg:path>`,
})
export class RiTShirtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTShirtLineIcon],svg[ri-t-shirt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.514 5l2.606-2.607a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.778 3.778V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-9.17L1.22 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 0L9.484 5zm.828 2H8.656L6.17 4.515L3.342 7.343L6.999 11v9h10v-9l3.657-3.657l-2.829-2.828z"></svg:path>`,
})
export class RiTShirtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTable2Icon],svg[ri-table-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10v4h6v-4zm-2 0H5v4h6zm2 9h6v-3h-6zm-2 0v-3H5v3zm2-14v3h6V5zm-2 0H5v3h6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTable2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTable3Icon],svg[ri-table-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 2v3H4V5zm-7 9v-4h7v4zm0 2h7v3H4zm9 0h7v3h-7zm7-2h-7v-4h7zm0-9v3h-7V5z"></svg:path>`,
})
export class RiTable3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableAltFillIcon],svg[ri-table-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14V3H3a1 1 0 0 0-1 1v10zm8 0V3H9v11zm7 0V4a1 1 0 0 0-1-1h-4v11zm-1 7a1 1 0 0 0 1-1v-4H2v4a1 1 0 0 0 1 1z"></svg:path>`,
})
export class RiTableAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableAltLineIcon],svg[ri-table-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 13H4v3h16zM8 5H4v9h4zm6 0h-4v9h4zm6 0h-4v9h4z"></svg:path>`,
})
export class RiTableAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableFillIcon],svg[ri-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H9V10h6zm2 0V10h5v10a1 1 0 0 1-1 1zM7 21H3a1 1 0 0 1-1-1V10h5zM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiTableFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableLineIcon],svg[ri-table-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h16V5H4zm10 11v-9h-4v9zm2 0h4v-9h-4zm-8 0v-9H4v9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTableLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTableViewIcon],svg[ri-table-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm5 2v3H4V5zm-4 9v-4h4v4zm0 2h4v3H4zm6 0h10v3H10zm10-2H10v-4h10zm0-9v3H10V5z"></svg:path>`,
})
export class RiTableViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTabletFillIcon],svg[ri-tablet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiTabletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTabletLineIcon],svg[ri-tablet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v16h12V4zM5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m7 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiTabletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTailwindCssFillIcon],svg[ri-tailwind-css-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.86q-4.76 0-5.95 4.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12q4.76 0 5.95-4.76q-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86M6.05 12Q1.29 12 .1 16.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14q4.76 0 5.95-4.76q-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12"></svg:path>`,
})
export class RiTailwindCssFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTailwindCssLineIcon],svg[ri-tailwind-css-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.127 6.22C9.177 5.377 10.499 5 12 5c1.409 0 2.485.33 3.358.834c.74.425 1.354 1.007 1.948 1.61c.646.657.996.976 1.437 1.086c.473.118.873.082 1.239-.074c.38-.163.791-.487 1.218-1.056l1.77.843c-.37 1.484-1.047 2.7-2.095 3.538C19.824 12.621 18.503 13 17 13c-1.408 0-2.484-.331-3.357-.834c-.834-.48-1.443-1.098-1.92-1.583c-.663-.672-1.018-1.001-1.465-1.113c-.473-.118-.873-.082-1.239.074c-.38.163-.792.487-1.219 1.056l-1.77-.843c.371-1.484 1.048-2.7 2.096-3.538M12 7c-.828 0-1.495.146-2.033.408c1.32.082 2.181.895 3.057 1.721c.504.476 1.013.956 1.617 1.304c.56.322 1.29.567 2.36.567c.828 0 1.495-.146 2.033-.408c-1.32-.083-2.181-.895-3.056-1.721c-.505-.476-1.013-.956-1.618-1.304C13.801 7.245 13.07 7 12 7m-8.874 5.22C4.177 11.377 5.499 11 7 11c1.409 0 2.485.33 3.358.834c.74.425 1.354 1.007 1.948 1.61c.646.657.996.976 1.437 1.086c.473.118.873.083 1.239-.074c.38-.163.791-.487 1.218-1.056l1.77.842c-.37 1.485-1.047 2.7-2.095 3.539C14.824 18.621 13.503 19 12 19c-1.408 0-2.484-.331-3.357-.834c-.834-.48-1.443-1.098-1.92-1.583c-.663-.672-1.018-1.001-1.465-1.113c-.473-.118-.873-.083-1.239.074c-.38.163-.792.487-1.219 1.056l-1.77-.843c.371-1.484 1.048-2.7 2.096-3.538M7 13c-.828 0-1.495.146-2.033.408c1.32.083 2.181.895 3.057 1.721c.504.476 1.013.956 1.617 1.304c.56.322 1.29.567 2.36.567c.828 0 1.495-.146 2.033-.408c-1.32-.082-2.181-.895-3.056-1.721c-.505-.476-1.014-.956-1.618-1.304C8.801 13.245 8.07 13 7 13"></svg:path>`,
})
export class RiTailwindCssLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTakeawayFillIcon],svg[ri-takeaway-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001l2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17v-5h9a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M10 3a1 1 0 0 1 1 1v7H2V4a1 1 0 0 1 1-1zm10 2h-3v2h3zM9 5H4v1h5z"></svg:path>`,
})
export class RiTakeawayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTakeawayLineIcon],svg[ri-takeaway-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001l2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12-.001a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1.148-7H17V12a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4 4 0 0 1 4.57-2.94zM9 8H4v3h5zm11-3h-3v2h3zM9 5H4v1h5z"></svg:path>`,
})
export class RiTakeawayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaobaoFillIcon],svg[ri-taobao-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.576 8.277l-1.193 1.842l2.201 1.37s1.464.755.762 2.17c-.649 1.338-3.846 4.27-3.846 4.27l2.862 1.797c1.984-4.325 1.85-3.749 2.347-5.305c.512-1.58.625-2.794-.242-3.677c-1.113-1.125-1.238-1.23-2.89-2.467m1.565-.694c1.04 0 1.882-.758 1.882-1.693c0-.943-.842-1.701-1.882-1.701c-1.049 0-1.887.762-1.887 1.701c.004.931.838 1.693 1.887 1.693m17.005.21s-.625-4.87-11.208-1.855c.455-.794.67-1.306.67-1.306l-2.642-.75s-1.068 3.508-2.97 5.14c0 0 1.846 1.073 1.826 1.04A17 17 0 0 0 9.23 8.466q.633-.284 1.225-.524c-.492.887-1.278 2.217-2.068 3.056l1.113.984s.762-.738 1.588-1.62h.944v1.636H8.346v1.306h3.685v3.133l-.142-.004c-.407-.02-1.036-.09-1.286-.484c-.298-.484-.076-1.359-.064-1.903H7.995l-.093.052s-.935 4.205 2.69 4.113c3.386.092 5.329-.956 6.264-1.678l.371 1.395l2.089-.883l-1.415-3.483l-1.694.536l.315 1.19c-.428.33-.932.572-1.468.754v-2.738h3.592v-1.31h-3.592v-1.637h3.604V9.051h-6.41c.464-.569.823-1.089.92-1.415l-1.121-.307c4.797-1.733 7.47-1.435 7.45 1.403v7.475s.282 2.564-2.637 2.383l-1.58-.343l-.367 1.512s6.817 1.967 7.374-3.314c.552-5.282-.141-8.652-.141-8.652"></svg:path>`,
})
export class RiTaobaoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaobaoLineIcon],svg[ri-taobao-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.173 14H14.5v1.375q.824-.332 1.812-.81l-.082-.238zm.828-.287l.12-.042c.641 1.851 1.034 3.012 1.185 3.5l-1.912.59q-.11-.36-.427-1.293c-6.081 2.884-8.671 2.054-9.008-1.908l1.993-.169c.1 1.165.344 1.621.897 1.752c.393.093.94.063 1.652-.104v-2.04h-3.5v-2h.513l-1.167-1.39q1.563-1.312 2.449-2.863q-.78.202-1.552.435A14 14 0 0 1 7.49 10.29l-1.4-1.428Q8 6.992 9.266 3.868l1.854.75q-.23.567-.48 1.1c3.702-.935 7.275-1.316 9.138-.68c1.223.419 1.919 1.392 2.188 2.585c.17.756.313 2.689.313 5.123c0 2.807-.056 3.77-.34 4.622c-.298.89-.697 1.418-1.408 1.984c-.657.523-1.553.763-2.645.823a12.5 12.5 0 0 1-2.094-.08c-.12-.013-.235-.027-.355-.042l-.242-.033l.264-1.982l.237.032l.319.038c.625.07 1.216.1 1.762.07c.714-.04 1.245-.181 1.508-.39c.426-.34.591-.558.756-1.054c.186-.555.238-1.448.238-3.989c0-2.298-.134-4.101-.265-4.682c-.13-.577-.41-.97-.883-1.132c-1.207-.412-3.801-.194-6.652.416l.615.263q-.195.453-.43.89h5.337v2h-3.5V12h3.5zm-5.5-3.213h-1.208A14 14 0 0 1 9.799 12h2.702zm-10.038-.438L3.54 8.376c1.062.68 2.935 2.428 3.338 3.162c1.239 2.26.198 4.176-3.122 7.997l-1.51-1.311c2.687-3.094 3.5-4.59 2.878-5.725c-.214-.39-1.857-1.923-2.661-2.437M5.14 7.583c-1.048 0-1.882-.762-1.886-1.693c0-.94.838-1.701 1.886-1.701c1.04 0 1.883.758 1.883 1.701c0 .935-.843 1.693-1.883 1.693"></svg:path>`,
})
export class RiTaobaoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTapeFillIcon],svg[ri-tape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 13A3 3 0 1 0 8 15h8a3 3 0 1 0-2.83-2zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-8 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiTapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTapeLineIcon],svg[ri-tape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 13h2.34A3 3 0 1 1 16 15H8a3 3 0 1 1 2.83-2M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiTapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaskFillIcon],svg[ri-task-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v18.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H20a1 1 0 0 1 1 1m-9.707 10.121l-2.475-2.475l-1.414 1.415l3.889 3.889l5.657-5.657l-1.414-1.414z"></svg:path>`,
})
export class RiTaskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaskLineIcon],svg[ri-task-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5v16h14zM3 2.992C3 2.444 3.447 2 3.999 2h16a1 1 0 0 1 1 1L21 20.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm8.293 10.13l4.243-4.243l1.414 1.414l-5.657 5.657l-3.89-3.89l1.415-1.414z"></svg:path>`,
})
export class RiTaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaxiFillIcon],svg[ri-taxi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.48-5.788A2 2 0 0 1 6.32 5H9V3h6v2h2.681a2 2 0 0 1 1.838 1.212zM4.176 12h15.648l-2.143-5H6.32zM6.5 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiTaxiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaxiLineIcon],svg[ri-taxi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3h6v2h2.764a2 2 0 0 1 1.789 1.106zm-2 2H4v5h16zM4.236 11h15.528l-2-4H6.236zM6.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiTaxiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaxiWifiFillIcon],svg[ri-taxi-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v4H6.319l-2.144 5H22v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.48-5.788A2 2 0 0 1 6.32 5H9V3zM6.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m1-13a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiTaxiWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTaxiWifiLineIcon],svg[ri-taxi-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v4H6.236l-2.001 4H22v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3zm8 10H4v5h16zM6.5 14a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1-13a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiTaxiWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTeamFillIcon],svg[ri-team-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z"></svg:path>`,
})
export class RiTeamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTeamLineIcon],svg[ri-team-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiTeamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTelegram2FillIcon],svg[ri-telegram-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.148 11.81q7.87-3.429 10.497-4.522c4.999-2.079 6.037-2.44 6.714-2.452c.15-.003.482.034.698.21c.182.147.232.347.256.487s.054.459.03.708c-.27 2.847-1.443 9.754-2.04 12.942c-.252 1.348-.748 1.8-1.23 1.845c-1.045.096-1.838-.69-2.85-1.354c-1.585-1.039-2.48-1.686-4.018-2.699c-1.777-1.171-.625-1.815.388-2.867c.265-.275 4.87-4.464 4.96-4.844c.01-.048.021-.225-.084-.318c-.105-.094-.26-.062-.373-.036q-.239.054-7.592 5.018q-1.079.74-1.952.721c-.643-.014-1.88-.363-2.798-.662c-1.128-.367-2.024-.56-1.946-1.183q.061-.486 1.34-.994"></svg:path>`,
})
export class RiTelegram2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTelegram2LineIcon],svg[ri-telegram-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.094 7.146c.593-.215.888-.292 1.05-.32q.002.08-.002.122c-.232 2.444-1.251 8.457-1.775 11.255c-.122.655-.216.967-.85.595c-.416-.245-.792-.553-1.196-.817c-1.325-.869-3.221-2.162-3.065-2.084c-1.304-.86-.758-1.386-.03-2.088c.117-.113.24-.231.36-.356c.054-.056.317-.3.687-.645c1.188-1.104 3.484-3.239 3.542-3.486c.01-.04.018-.192-.071-.271c-.09-.08-.223-.053-.318-.031q-.203.046-6.474 4.279q-.918.63-1.664.614l.005.003c-.655-.231-1.308-.43-1.964-.63a66 66 0 0 1-1.3-.405l-.308-.098c4.527-1.972 7.542-3.27 9.053-3.899c2.194-.913 3.496-1.438 4.32-1.738m2.423-1.928a1.8 1.8 0 0 0-.726-.346c-.2-.048-.39-.063-.533-.06c-.477.008-.988.143-1.846.454c-.875.318-2.219.862-4.406 1.771Q9.691 8 2.804 11.001c-.404.161-.773.344-1.065.56c-.27.201-.647.56-.716 1.11c-.052.416.069.8.315 1.103c.214.263.488.423.697.524c.31.15.728.281 1.095.396c.573.18 1.144.363 1.719.539c1.778.544 3.242.992 4.852 2.054c1.181.778 2.34 1.59 3.523 2.366c.432.283.835.608 1.28.87c.488.285 1.106.546 1.86.477c1.138-.105 1.73-1.152 1.97-2.43c.521-2.79 1.557-8.886 1.8-11.432a3.8 3.8 0 0 0-.037-.885a1.66 1.66 0 0 0-.58-1.035"></svg:path>`,
})
export class RiTelegram2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTelegramFillIcon],svg[ri-telegram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9.642-2.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362"></svg:path>`,
})
export class RiTelegramFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTelegramLineIcon],svg[ri-telegram-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 10c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.358-12.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362"></svg:path>`,
})
export class RiTelegramLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTempColdFillIcon],svg[ri-temp-cold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0M8 16a4 4 0 0 0 8 0z"></svg:path>`,
})
export class RiTempColdFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTempColdLineIcon],svg[ri-temp-cold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zM8 16h8a4 4 0 0 1-8 0"></svg:path>`,
})
export class RiTempColdLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTempHotFillIcon],svg[ri-temp-hot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0m3 1.871A4.002 4.002 0 0 0 12 20a4 4 0 0 0 1-7.874V5h-2z"></svg:path>`,
})
export class RiTempHotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTempHotLineIcon],svg[ri-temp-hot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTempHotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTentFillIcon],svg[ri-tent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.237 16H23v2H1v-2h.896l9.238-16a1 1 0 0 1 1.732 0M12 12.925L8.659 19h6.682z"></svg:path>`,
})
export class RiTentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTentLineIcon],svg[ri-tent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.103 19L12.866 3a1 1 0 0 0-1.732 0L1.896 19H1v2h22v-2zM7.6 19H4.206L12 5.5L19.794 19H16.4L12 11zm4.4-3.85L14.117 19H9.884z"></svg:path>`,
})
export class RiTentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalBoxFillIcon],svg[ri-terminal-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 12v2h6v-2zm-3.586-3l-2.828 2.828L7 16.243L11.243 12L7 7.757L5.586 9.172z"></svg:path>`,
})
export class RiTerminalBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalBoxLineIcon],svg[ri-terminal-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm8 10h6v2h-6zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243l-1.415-1.415z"></svg:path>`,
})
export class RiTerminalBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalFillIcon],svg[ri-terminal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 12l-7.071 7.071l-1.414-1.414L8.172 12L2.515 6.343L3.929 4.93zm0 7h10v2H11z"></svg:path>`,
})
export class RiTerminalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalLineIcon],svg[ri-terminal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 12l-7.071 7.071l-1.414-1.414L8.172 12L2.515 6.343L3.929 4.93zm0 7h10v2H11z"></svg:path>`,
})
export class RiTerminalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalWindowFillIcon],svg[ri-terminal-window-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10H4v9h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 3v2h2V6zm4 0v2h2V6zm-4 5h3v5H5z"></svg:path>`,
})
export class RiTerminalWindowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTerminalWindowLineIcon],svg[ri-terminal-window-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V5H4v4zm0 2H4v8h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 9h3v5H5zm0-6h2v2H5zm4 0h2v2H9z"></svg:path>`,
})
export class RiTerminalWindowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTestTubeFillIcon],svg[ri-test-tube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-4 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3-8h-4v4h4z"></svg:path>`,
})
export class RiTestTubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTestTubeLineIcon],svg[ri-test-tube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-3 8h-4v8a2 2 0 1 0 4 0zm-1 5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3-8h-4v4h4z"></svg:path>`,
})
export class RiTestTubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextIcon],svg[ri-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v15h-2V6H5V4h14v2z"></svg:path>`,
})
export class RiTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextBlockIcon],svg[ri-text-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v3h2V4h2v5H3.5v2h5V9H7V4h2v1h2V2zm20 1h-7v2h6v14H4v-5H2v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiTextBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextDirectionLIcon],svg[ri-text-direction-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zm8 12v-2.5l4 3.5l-4 3.5V19H5v-2z"></svg:path>`,
})
export class RiTextDirectionLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextDirectionRIcon],svg[ri-text-direction-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zM7 17h12v2H7v2.5L3 18l4-3.5z"></svg:path>`,
})
export class RiTextDirectionRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextSnippetIcon],svg[ri-text-snippet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm3 3h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7z"></svg:path>`,
})
export class RiTextSnippetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextSpacingIcon],svg[ri-text-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h10v-2.5l3.5 3.5l-3.5 3.5V19H7v2.5L3.5 18L7 14.5zm6-11v9h-2V6H5V4h14v2z"></svg:path>`,
})
export class RiTextSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTextWrapIcon],svg[ri-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h1.5a2.5 2.5 0 0 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3l4-3zM3 4h18v2H3zm6 14v2H3v-2z"></svg:path>`,
})
export class RiTextWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThermometerFillIcon],svg[ri-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.557 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.38.374l-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299l.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0m-9.193 9.192L9.95 14.05l2.121 2.122l1.414-1.415zm2.829-2.828l-1.415 1.414l2.122 2.121l1.414-1.414zm2.828-2.829l-1.414 1.414l2.121 2.122L19.142 9.1z"></svg:path>`,
})
export class RiThermometerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThermometerLineIcon],svg[ri-thermometer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.557 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.387 1.147l-3.38.374l-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299l.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0m-4.243 1.414l-8.2 8.2a2 2 0 0 0-.574 1.194l-.276 2.484l2.485-.276a2 2 0 0 0 1.193-.574l.422-.422L9.95 14.05l1.414-1.414l1.414 1.414l1.414-1.414l-1.414-1.414l1.415-1.414l1.414 1.414l1.414-1.415l-1.414-1.414L17.02 6.98l1.414 1.414l.707-.707a2 2 0 0 0-2.828-2.828"></svg:path>`,
})
export class RiThermometerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThreadsFillIcon],svg[ri-threads-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.705 11.108c-.162-2.987-1.794-4.697-4.534-4.714c-1.652-.01-3.033.69-3.879 1.973L9.8 9.4c.634-.961 1.635-1.16 2.36-1.153c.903.006 1.583.268 2.024.78c.32.372.535.887.642 1.536q-1.202-.204-2.59-.125c-2.606.15-4.28 1.67-4.168 3.781c.057 1.071.59 1.993 1.502 2.595c.77.509 1.764.757 2.795.701c1.363-.075 2.432-.594 3.178-1.545c.566-.722.924-1.658 1.082-2.836c.65.392 1.13.907 1.397 1.527c.452 1.054.478 2.786-.935 4.198c-1.238 1.236-2.726 1.772-4.975 1.788c-2.495-.018-4.382-.819-5.608-2.378c-1.15-1.46-1.743-3.57-1.765-6.269c.022-2.7.616-4.809 1.765-6.27c1.226-1.559 3.113-2.359 5.608-2.377c2.513.019 4.432.822 5.706 2.39c.625.768 1.095 1.734 1.406 2.86l1.766-.47c-.377-1.387-.969-2.582-1.774-3.573c-1.633-2.01-4.033-3.039-7.11-3.06c-3.071.021-5.432 1.055-7.019 3.071c-1.411 1.795-2.14 4.306-2.164 7.436c.024 3.13.753 5.627 2.164 7.422c1.587 2.016 3.96 3.05 7.03 3.071c2.731-.019 4.655-.734 6.24-2.317c2.075-2.073 2.012-4.67 1.329-6.264c-.525-1.225-1.57-2.206-2.98-2.81m-4.438 4.557c-1.142.064-2.328-.448-2.387-1.546c-.043-.814.58-1.722 2.457-1.83a9.4 9.4 0 0 1 2.533.174c-.216 2.702-1.485 3.14-2.603 3.202"></svg:path>`,
})
export class RiThreadsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThreadsLineIcon],svg[ri-threads-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.184 1.41h-.002C9.09 1.432 6.7 2.473 5.094 4.516c-1.428 1.815-2.16 4.348-2.184 7.49v.002c.025 3.143.756 5.662 2.184 7.477c1.606 2.042 4.009 3.084 7.1 3.105h.002c2.748-.019 4.697-.74 6.303-2.344c2.104-2.103 2.042-4.741 1.347-6.363c-.53-1.234-1.575-2.221-2.976-2.835c-.18-2.985-1.86-4.726-4.62-4.744c-1.63-.01-3.102.72-4.003 2.087l1.655 1.136c.533-.809 1.377-1.199 2.335-1.19c1.387.009 2.3.774 2.555 2.117a11.7 11.7 0 0 0-2.484-.105c-2.64.152-4.368 1.712-4.253 3.875c.12 2.262 2.312 3.495 4.393 3.381c2.492-.137 3.973-1.976 4.324-4.321c.577.373 1.003.85 1.244 1.413c.44 1.025.468 2.716-.915 4.098c-1.217 1.216-2.68 1.746-4.912 1.762c-2.475-.018-4.332-.811-5.537-2.343C5.52 16.774 4.928 14.688 4.906 12c.022-2.688.614-4.775 1.746-6.213c1.205-1.533 3.062-2.325 5.537-2.344c2.493.019 4.384.815 5.636 2.356c.691.85 1.124 1.866 1.413 2.915l1.94-.517c-.363-1.338-.937-2.613-1.815-3.694c-1.653-2.034-4.081-3.071-7.18-3.093m.236 10.968a9.4 9.4 0 0 1 2.432.156c-.14 1.578-.793 2.947-2.512 3.041c-1.112.063-2.237-.434-2.292-1.461c-.04-.764.525-1.63 2.372-1.736"></svg:path>`,
})
export class RiThreadsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThumbDownFillIcon],svg[ri-thumb-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707"></svg:path>`,
})
export class RiThumbDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThumbDownLineIcon],svg[ri-thumb-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H22a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3.482a1 1 0 0 0-.817.423l-5.453 7.726a.5.5 0 0 1-.632.159L9.802 22.4a2.5 2.5 0 0 1-1.305-2.853zm7.6-2.588V5H5.84L3 11.896V14h6.4a2 2 0 0 1 1.938 2.493l-.903 3.548a.5.5 0 0 0 .261.571l.661.33l4.71-6.672c.25-.354.57-.644.933-.857M19 13h2V5h-2z"></svg:path>`,
})
export class RiThumbDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThumbUpFillIcon],svg[ri-thumb-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1m5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707"></svg:path>`,
})
export class RiThumbUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThumbUpLineIcon],svg[ri-thumb-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 8H21a2 2 0 0 1 2 2v2.105c0 .26-.051.52-.15.761l-3.095 7.515a1 1 0 0 1-.925.62H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.424L11.752.851a.5.5 0 0 1 .632-.159l1.814.908a2.5 2.5 0 0 1 1.305 2.852zM7 10.588V19h11.16L21 12.105V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.57l-.661-.331l-4.71 6.672c-.25.354-.57.645-.933.858M5 11H3v8h2z"></svg:path>`,
})
export class RiThumbUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThunderstormsFillIcon],svg[ri-thunderstorms-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.989 18l1.215-1.58a1.5 1.5 0 0 0-1.189-2.415H15v-3.976a1.5 1.5 0 0 0-2.69-.914l-6.365 8.281A8.002 8.002 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 1 1 17.5 18zM13 16.005h3l-5 6.5v-4.5H8l5-6.505z"></svg:path>`,
})
export class RiThunderstormsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riThunderstormsLineIcon],svg[ri-thunderstorms-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505z"></svg:path>`,
})
export class RiThunderstormsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTicket2FillIcon],svg[ri-ticket-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-5 6h-8v6h8z"></svg:path>`,
})
export class RiTicket2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTicket2LineIcon],svg[ri-ticket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-1 2h-16v2.968l.156.08a4.5 4.5 0 0 1 2.339 3.74l.005.212a4.5 4.5 0 0 1-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 0 1-2.34-3.738L17.506 12a4.5 4.5 0 0 1 2.344-3.951l.156-.081zm-4 4v6h-8V9z"></svg:path>`,
})
export class RiTicket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTicketFillIcon],svg[ri-ticket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiTicketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTicketLineIcon],svg[ri-ticket-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-1 2h-16v2.968l.156.08a4.5 4.5 0 0 1 2.339 3.74l.005.212a4.5 4.5 0 0 1-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 0 1-2.34-3.738L17.506 12a4.5 4.5 0 0 1 2.344-3.951l.156-.081z"></svg:path>`,
})
export class RiTicketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTiktokFillIcon],svg[ri-tiktok-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755"></svg:path>`,
})
export class RiTiktokFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTiktokLineIcon],svg[ri-tiktok-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v6.414a6.85 6.85 0 1 0 5.6 6.736v-3.736a8.6 8.6 0 0 0 3.4.686h1V6.5h-1c-1.903 0-3.4-1.537-3.4-3.5V2zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L14.6 7.863v7.287a4.85 4.85 0 1 1-4.6-4.844v1.604a3.25 3.25 0 1 0 3 3.24zM8.5 15.15a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path>`,
})
export class RiTiktokLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimeFillIcon],svg[ri-time-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m1-10V7h-2v7h6v-2z"></svg:path>`,
})
export class RiTimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimeLineIcon],svg[ri-time-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z"></svg:path>`,
})
export class RiTimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimeZoneFillIcon],svg[ri-time-zone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.078 0 9.272 3.785 9.915 8.687a8 8 0 0 0-11.228 11.228C5.785 21.272 2 17.078 2 12C2 6.477 6.477 2 12 2m0 1.833c-2.317 0-4.41.966-5.896 2.516c.177.123.331.296.437.534c.204.457.204.928.204 1.345c0 .328 0 .64.105.865c.144.308.766.44 1.315.554l.02.005c.19.04.385.08.563.13c.506.14.898.595 1.211.96c.13.151.323.374.42.43c.05-.036.211-.211.29-.498c.062-.22.044-.414-.045-.52c-.56-.66-.529-1.93-.356-2.399c.272-.739 1.122-.684 1.744-.644h.006c.23.015.446.03.608.009c.471-.06.695-.616.835-.964c.045-.111.081-.201.114-.246c.292-.4 1.186-1.003 1.74-1.375A8.1 8.1 0 0 0 12 3.833M23 17a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-7 1h4v-2h-2v-2h-2z"></svg:path>`,
})
export class RiTimeZoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimeZoneLineIcon],svg[ri-time-zone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12c0-2.154.851-4.109 2.235-5.547c.122.111.227.252.306.43c.204.457.204.928.204 1.345c0 .328 0 .64.105.865c.144.308.766.44 1.315.554l.02.005c.19.04.385.08.563.13c.506.14.898.595 1.211.96c.13.151.323.374.42.43c.05-.036.211-.211.29-.498c.062-.22.044-.414-.045-.52c-.56-.66-.529-1.93-.356-2.399c.272-.739 1.122-.684 1.744-.644h.006c.23.015.446.03.608.009c.471-.06.695-.616.835-.964c.045-.111.081-.201.114-.246c.265-.363 1.024-.892 1.577-1.265a8.02 8.02 0 0 1 4.424 4.779a8 8 0 0 1 2.339 1.263C21.272 5.785 17.078 2 12 2C6.477 2 2 6.477 2 12c0 5.078 3.785 9.272 8.687 9.915a8 8 0 0 1-1.263-2.339A8 8 0 0 1 4 12m13 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m5-3v4h4v-2h-2v-2z"></svg:path>`,
})
export class RiTimeZoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimelineViewIcon],svg[ri-timeline-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM14 7H6v2h8zm4 8v2h-8v-2zm-2-4H8v2h8z"></svg:path>`,
})
export class RiTimelineViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimer2FillIcon],svg[ri-timer-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m3.536 5.05L10.586 12L12 13.414l4.95-4.95z"></svg:path>`,
})
export class RiTimer2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimer2LineIcon],svg[ri-timer-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m3.536-12.95l1.414 1.414l-4.95 4.95L10.586 12z"></svg:path>`,
})
export class RiTimer2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimerFillIcon],svg[ri-timer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.618 5.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 12 4c2.125 0 4.078.736 5.618 1.968M11 8v6h2V8zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimerFlashFillIcon],svg[ri-timer-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.382 5.968A8.96 8.96 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414zM13 12V7.495L8 14h3v4.5l5-6.5zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimerFlashLineIcon],svg[ri-timer-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.382 5.968A8.96 8.96 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414zM12 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14m1-8h3l-5 6.5V14H8l5-6.505zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTimerLineIcon],svg[ri-timer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.618 5.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 12 4c2.125 0 4.078.736 5.618 1.968M12 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M11 8h2v6h-2zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTodoFillIcon],svg[ri-todo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zM7 8v2h10V8zm0 4v2h10v-2z"></svg:path>`,
})
export class RiTodoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTodoLineIcon],svg[ri-todo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class RiTodoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToggleFillIcon],svg[ri-toggle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m8 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiToggleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToggleLineIcon],svg[ri-toggle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiToggleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTokenSwapFillIcon],svg[ri-token-swap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 9a6.5 6.5 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9M7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5zm-10 6a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-9l2.5 2.5L9 17.5L6.5 15z"></svg:path>`,
})
export class RiTokenSwapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTokenSwapLineIcon],svg[ri-token-swap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12.5L6.5 15L9 17.5l2.5-2.5zm6-10a6.5 6.5 0 0 0-6.482 6.018a6.5 6.5 0 1 0 6.964 6.964A6.5 6.5 0 0 0 15 2.5m.323 10.989a6.51 6.51 0 0 0-4.812-4.812a4.5 4.5 0 1 1 4.812 4.812M13.5 15a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M3 7a4 4 0 0 1 4-4h1.5v2H7a2 2 0 0 0-2 2v1.5H3zm16 10v-1.5h2V17a4 4 0 0 1-4 4h-1.5v-2H17a2 2 0 0 0 2-2"></svg:path>`,
})
export class RiTokenSwapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToolsFillIcon],svg[ri-tools-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.33 3.272a3.5 3.5 0 0 1 4.472 4.473L20.647 18.59l-2.122 2.122L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768l1.414 1.415l-1.768 3.182l-1.768.353l-2.12 2.121l-1.415-1.414l2.121-2.121zm-7.071 7.778l2.121 2.122l-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107z"></svg:path>`,
})
export class RiToolsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToolsLineIcon],svg[ri-tools-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.33 3.272a3.5 3.5 0 0 1 4.254 4.962l10.709 10.71l-1.414 1.414l-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768l1.414 1.415l-1.768 3.182l-1.768.353l-2.12 2.121l-1.415-1.414l2.121-2.121zm-6.718 8.132l1.415 1.414l-5.304 5.303a1 1 0 0 1-1.492-1.327l.078-.087z"></svg:path>`,
})
export class RiToolsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToothFillIcon],svg[ri-tooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.232a6.5 6.5 0 0 1 3.266 4.034a1 1 0 0 0 1.928-.532A8.5 8.5 0 0 0 14.5 2.519q.248-.02.5-.019c2.007 0 3.68.728 4.83 2.11C20.963 5.967 21.5 7.846 21.5 10c0 3.097-.514 5.865-1.395 7.898c-.84 1.938-2.208 3.602-4.105 3.602c-1.1 0-1.787-.652-2.195-1.36c-.362-.63-.578-1.423-.752-2.062c-.207-.76-.366-1.328-.592-1.72C12.276 16.035 12.15 16 12 16s-.275.035-.461.358c-.226.392-.385.96-.592 1.72c-.174.639-.39 1.433-.752 2.062C9.787 20.848 9.1 21.5 8 21.5c-1.897 0-3.265-1.664-4.105-3.602C3.015 15.865 2.5 13.098 2.5 10c0-2.154.538-4.033 1.67-5.39C5.32 3.228 6.992 2.5 9 2.5h.028A6.5 6.5 0 0 1 12 3.232"></svg:path>`,
})
export class RiToothFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riToothLineIcon],svg[ri-tooth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.706 5.89C6.429 5.022 7.507 4.5 9 4.5c.907 0 1.749.267 2.454.727a4.5 4.5 0 0 1 1.74 2.137a1 1 0 1 0 1.862-.728a6.5 6.5 0 0 0-1.224-1.983q.56-.151 1.168-.153c1.493 0 2.57.522 3.294 1.39c.744.893 1.206 2.264 1.206 4.11c0 2.903-.486 5.385-1.23 7.102c-.785 1.812-1.667 2.398-2.27 2.398c-.15 0-.275-.035-.461-.358c-.226-.392-.385-.96-.592-1.72c-.174-.639-.39-1.433-.752-2.062C13.787 14.652 13.1 14 12 14s-1.787.652-2.195 1.36c-.362.63-.578 1.423-.752 2.062c-.207.76-.366 1.328-.592 1.72c-.186.323-.311.358-.461.358c-.603 0-1.485-.586-2.27-2.398c-.744-1.717-1.23-4.2-1.23-7.102c0-1.846.462-3.217 1.206-4.11M12 3.232A6.5 6.5 0 0 0 9 2.5c-2.007 0-3.68.728-4.83 2.11C3.037 5.967 2.5 7.846 2.5 10c0 3.097.514 5.865 1.395 7.898C4.735 19.836 6.103 21.5 8 21.5c1.1 0 1.787-.652 2.195-1.36c.374-.65.593-1.477.77-2.127c.198-.726.354-1.274.574-1.655c.186-.323.311-.358.461-.358s.275.035.461.358c.22.381.376.93.574 1.655c.177.65.396 1.476.77 2.127c.408.708 1.095 1.36 2.195 1.36c1.897 0 3.265-1.664 4.105-3.602c.88-2.033 1.395-4.8 1.395-7.898c0-2.154-.538-4.033-1.67-5.39C18.68 3.228 17.008 2.5 15 2.5c-1.08 0-2.102.264-3 .732"></svg:path>`,
})
export class RiToothLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTornadoFillIcon],svg[ri-tornado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v2H2zm2 4h16v2H4zm4 4h14v2H8zm2 4h8v2h-8zm-2 4h6v2H8z"></svg:path>`,
})
export class RiTornadoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTornadoLineIcon],svg[ri-tornado-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v2H2zm2 4h16v2H4zm4 4h14v2H8zm2 4h8v2h-8zm-2 4h6v2H8z"></svg:path>`,
})
export class RiTornadoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrademarkFillIcon],svg[ri-trademark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z"></svg:path>`,
})
export class RiTrademarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrademarkLineIcon],svg[ri-trademark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z"></svg:path>`,
})
export class RiTrademarkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrafficLightFillIcon],svg[ri-traffic-light-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5zm5 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTrafficLightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrafficLightLineIcon],svg[ri-traffic-light-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5zm5 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTrafficLightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrainFillIcon],svg[ri-train-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM5 7v4h14V7zm7 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTrainFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrainLineIcon],svg[ri-train-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2zm5 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6 7h12v4H6z"></svg:path>`,
})
export class RiTrainLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrainWifiFillIcon],svg[ri-train-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.498 3a6.52 6.52 0 0 0-.324 4H5v4h10.035a6.47 6.47 0 0 0 3.465 1a6.5 6.5 0 0 0 2.5-.498V18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4zM12 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m6.5-13a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiTrainWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrainWifiLineIcon],svg[ri-train-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.498 3a6.5 6.5 0 0 0-.479 2H7a2 2 0 0 0-1.995 1.85L5 7v11h14v-6.019a6.5 6.5 0 0 0 2-.48V18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4zM12 13a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.174-6a6.5 6.5 0 0 0 2.862 4.001L6 11V7zM18.5 1a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiTrainWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTranslateIcon],svg[ri-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15v2a2 2 0 0 0 1.85 1.994L7 19h3v2H7a4 4 0 0 1-4-4v-2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10zm-1 2.885L15.753 16h2.492zM8 2v2h4v7H8v3H6v-3H2V4h4V2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3zM6 6H4v3h2zm4 0H8v3h2z"></svg:path>`,
})
export class RiTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTranslate2Icon],svg[ri-translate-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10zM10 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.62 6.301a15 15 0 0 0 2.335 1.707l-.75 1.878A17 17 0 0 1 9 13.725a16.7 16.7 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18 18 0 0 1 4.767 8h2.24A16 16 0 0 0 9 10.877a16.2 16.2 0 0 0 2.91-4.876L2 6V4h6V2zm7.5 10.885L16.253 16h2.492z"></svg:path>`,
})
export class RiTranslate2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTranslateAiIcon],svg[ri-translate-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M5 17v-2H3v2a4 4 0 0 0 4 4h3v-2H7l-.15-.006A2 2 0 0 1 5 17m17.4 4L18 10h-2l-4.399 11h2.154l1.199-3h4.09l1.201 3zm-6.647-5L17 12.885L18.245 16zM8 4V2H6v2H2v7h4v3h2v-3h4V4zM4 6h2v3H4zm4 0h2v3H8z"></svg:path>`,
})
export class RiTranslateAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTranslateAi2Icon],svg[ri-translate-ai-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M22.9 21l-4.4-11h-2l-4.399 11h2.154l1.199-3h4.09l1.201 3zm-6.647-5l1.247-3.115L18.745 16zm-8.706-3.696A18.3 18.3 0 0 1 4.723 8h2.24a16.3 16.3 0 0 0 2.021 2.91A15.5 15.5 0 0 0 11.996 6H2V4h6V2h2v2h4.65q-.131.645-.309 1.272a17.5 17.5 0 0 1-3.952 7.066a16.3 16.3 0 0 0 2.325 1.743l-.753 1.882a18.3 18.3 0 0 1-3.01-2.23a17.5 17.5 0 0 1-6.148 3.449l-.606-1.906a15.5 15.5 0 0 0 5.35-2.972"></svg:path>`,
})
export class RiTranslateAi2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTravestiFillIcon],svg[ri-travesti-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.537 9.95L4.662 7.076L2.187 9.55L.772 8.136l6.364-6.364l1.415 1.414l-2.475 2.475L8.95 8.537A7.5 7.5 0 1 1 7.537 9.95"></svg:path>`,
})
export class RiTravestiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTravestiLineIcon],svg[ri-travesti-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.951 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075L2.187 9.55L.772 8.136l6.364-6.364l1.415 1.414l-2.475 2.475zM13.501 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiTravestiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTreasureMapFillIcon],svg[ri-treasure-map-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm4 6v2h2v-2zm4 0v2h2v-2zm6-.06l-1.237-1.238l-1.061 1.06L14.939 12l-1.237 1.237l1.06 1.061L16 13.061l1.237 1.237l1.061-1.06L17.061 12l1.237-1.237l-1.06-1.061z"></svg:path>`,
})
export class RiTreasureMapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTreasureMapLineIcon],svg[ri-treasure-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17l6 3L20 17.68V5.033zM2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm4 6h2v2H6zm4 0h2v2h-2zm5.998-.063L17.235 9.7l1.061 1.06l-1.237 1.238l1.237 1.238l-1.06 1.06l-1.238-1.237l-1.237 1.237l-1.061-1.06l1.237-1.238l-1.237-1.237L14.76 9.7z"></svg:path>`,
})
export class RiTreasureMapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTreeFillIcon],svg[ri-tree-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7q0 .393-.05.774A6 6 0 0 1 13 18.658V22h-2v-3.6a5.5 5.5 0 0 1-6.517-8.657A8 8 0 0 0 6.286 12.6l1.428-1.4A6 6 0 0 1 6 7a6 6 0 1 1 12 0"></svg:path>`,
})
export class RiTreeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTreeLineIcon],svg[ri-tree-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a6 6 0 1 1 11.95.775A6 6 0 0 1 15 19h-2v3h-2v-3H8.5A5.5 5.5 0 0 1 6.191 8.507A6 6 0 0 1 6 7m1.01 3.332A3.502 3.502 0 0 0 8.5 17H15a4 4 0 0 0 1.454-7.728l-.841-.328C15.79 8.304 16 7.672 16 7a4 4 0 1 0-6.4 3.2l-1.2 1.6a6 6 0 0 1-1.39-1.468"></svg:path>`,
})
export class RiTreeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrelloFillIcon],svg[ri-trello-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.251 3h13.5a2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 0 1-2.25 2.25h-13.5a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 5.251 3m7.92 3.42v5.76c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33a1.08 1.08 0 0 0-1.08 1.08m-7.83 0v10.26c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33a1.08 1.08 0 0 0-1.08 1.08"></svg:path>`,
})
export class RiTrelloFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrelloLineIcon],svg[ri-trello-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.001 5v14h14V5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3 4h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m6 0h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiTrelloLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTriangleFillIcon],svg[ri-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0"></svg:path>`,
})
export class RiTriangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTriangleLineIcon],svg[ri-triangle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0m-8.66 16h15.588L12 5.5z"></svg:path>`,
})
export class RiTriangleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTriangularFlagFillIcon],svg[ri-triangular-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.66 2.181C5.016 1.613 4 2.071 4 2.932V22h2v-4h14.99c.922 0 1.352-1.142.66-1.75z"></svg:path>`,
})
export class RiTriangularFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTriangularFlagLineIcon],svg[ri-triangular-flag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.144V16h12.34zM4 2.932c0-.86 1.015-1.32 1.66-.75l15.99 14.067c.692.61.262 1.751-.66 1.751H6v4H4z"></svg:path>`,
})
export class RiTriangularFlagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrophyFillIcon],svg[ri-trophy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-12-11.937h2v4h-2zm20 0h2v4h-2z"></svg:path>`,
})
export class RiTrophyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTrophyLineIcon],svg[ri-trophy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-7-11.937v4a6 6 0 1 0 12 0v-4zm-5 0h2v4h-2zm20 0h2v4h-2z"></svg:path>`,
})
export class RiTrophyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTruckFillIcon],svg[ri-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2v3h4v-.285L18.992 10z"></svg:path>`,
})
export class RiTruckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTruckLineIcon],svg[ri-truck-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.965 18a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3l3 4.056V18h-2.035a3.501 3.501 0 0 1-6.93 0zM15 7H3v8.05a3.5 3.5 0 0 1 5.663.95h5.674c.168-.353.393-.674.663-.95zm2 6h4v-.285L18.992 10H17zm.5 6a1.5 1.5 0 1 0 0-3.001a1.5 1.5 0 0 0 0 3.001M7 17.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class RiTruckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTumblrFillIcon],svg[ri-tumblr-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.27 7.63A5.76 5.76 0 0 0 10.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667q.711.46 3.03.455V22h-4.243a4.546 4.546 0 0 1-4.545-4.546v-6.666H6.27z"></svg:path>`,
})
export class RiTumblrFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTumblrLineIcon],svg[ri-tumblr-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.001 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6h5.003v2h-5.003v2.91c.003 2.48.003 3.686.003 4.09c-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.546V10H7.001V8z"></svg:path>`,
})
export class RiTumblrLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTv2FillIcon],svg[ri-tv-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18zm3 16h14v2H5z"></svg:path>`,
})
export class RiTv2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTv2LineIcon],svg[ri-tv-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18zm2 1v12h16V5zm1 15h14v2H5z"></svg:path>`,
})
export class RiTv2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTvFillIcon],svg[ri-tv-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464L7.464 1.05L11.414 5h1.172l3.95-3.95l1.414 1.414z"></svg:path>`,
})
export class RiTvFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTvLineIcon],svg[ri-tv-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464L7.464 1.05L11.414 5h1.172l3.95-3.95l1.414 1.414zM4 7v12h16V7z"></svg:path>`,
})
export class RiTvLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitchFillIcon],svg[ri-twitch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.001 3v11.74l-4.696 4.695h-3.913l-2.437 2.348H6.914v-2.348H3.001V6.13L4.228 3zm-1.565 1.565H6.13v11.74h3.13v2.347l2.349-2.348h4.695l3.13-3.13zm-3.13 3.13v4.696H14.74V7.696zm-3.914 0v4.696h-1.565V7.696z"></svg:path>`,
})
export class RiTwitchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitchLineIcon],svg[ri-twitch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.301 3h16.7v11.7l-4.7 4.7h-3.9l-2.5 2.4h-2.9v-2.4h-4V6.2zm.7 14.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5zm10-9.4h2v4.7h-2zm0 0h2v4.7h-2zm-5 0h2v4.7h-2z"></svg:path>`,
})
export class RiTwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitterFillIcon],svg[ri-twitter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"></svg:path>`,
})
export class RiTwitterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitterLineIcon],svg[ri-twitter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.35 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.562-.212c-2.053-.28-4.021-1.226-5.91-2.799c-.597 3.31.57 5.603 3.383 7.372L9.4 16.014a.6.6 0 0 1 .035.993L7.843 18.17c.947.059 1.846.017 2.592-.131c4.718-.942 7.855-4.492 7.855-10.348c0-.478-1.013-2.141-2.94-2.141m-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.668-.645c-.334 1.64-.5 2.352-1.213 3.331c0 7.642-4.697 11.358-9.464 12.309c-3.267.652-8.02-.419-9.38-1.841c.693-.054 3.513-.357 5.143-1.55c-1.38-.91-6.868-4.14-3.261-12.823q2.54 2.966 5.15 4.037c1.157.475 1.442.466 1.973.538"></svg:path>`,
})
export class RiTwitterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitterXFillIcon],svg[ri-twitter-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"></svg:path>`,
})
export class RiTwitterXFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTwitterXLineIcon],svg[ri-twitter-x-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></svg:path>`,
})
export class RiTwitterXLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTyphoonFillIcon],svg[ri-typhoon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.654 1.7l-2.782 2.533a9.1 9.1 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588q-3.888 3.54-12.016 4.506l2.782-2.533a9.1 9.1 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588Q9.527 2.666 17.655 1.7M12 8c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4s4.5-1.79 4.5-4s-2.015-4-4.5-4"></svg:path>`,
})
export class RiTyphoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riTyphoonLineIcon],svg[ri-typhoon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.654 1.7l-2.782 2.533a9.1 9.1 0 0 1 3.49 1.973c3.512 3.2 3.512 8.388 0 11.588q-3.888 3.54-12.016 4.506l2.782-2.533a9.1 9.1 0 0 1-3.49-1.973c-3.512-3.2-3.533-8.369 0-11.588Q9.527 2.666 17.655 1.7M12 6c-3.866 0-7 2.686-7 6s3.134 6 7 6s7-2.686 7-6s-3.134-6-7-6m0 2.3c2.21 0 4 1.657 4 3.7s-1.79 3.7-4 3.7s-4-1.656-4-3.7c0-2.043 1.79-3.7 4-3.7m0 2c-1.138 0-2 .797-2 1.7s.862 1.7 2 1.7s2-.797 2-1.7s-.862-1.7-2-1.7"></svg:path>`,
})
export class RiTyphoonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUDiskFillIcon],svg[ri-u-disk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1M5 2h14v8H5zm4 3v2h2V5zm4 0v2h2V5z"></svg:path>`,
})
export class RiUDiskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUDiskLineIcon],svg[ri-u-disk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12H5v8h14zM5 10V2h14v8h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zm2 0h10V4H7zm2-4h2v2H9zm4 0h2v2h-2z"></svg:path>`,
})
export class RiUDiskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUbuntuFillIcon],svg[ri-ubuntu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.001 12c0 5.522-4.477 10-10 10s-10-4.478-10-10s4.477-10 10-10s10 4.477 10 10m-16.8-1.336a1.335 1.335 0 1 0 0 2.67a1.335 1.335 0 0 0 0-2.67m9.533 6.069a1.334 1.334 0 1 0 1.334 2.31a1.334 1.334 0 0 0-1.334-2.31M8.1 12c0-1.32.656-2.485 1.659-3.19l-.977-1.636a5.8 5.8 0 0 0-2.398 3.371a1.875 1.875 0 0 1 0 2.91a5.8 5.8 0 0 0 2.398 3.371l.977-1.636A3.89 3.89 0 0 1 8.1 12M12 8.1a3.9 3.9 0 0 1 3.884 3.554l1.903-.028a5.78 5.78 0 0 0-1.724-3.762A1.872 1.872 0 0 1 13.55 6.41a5.83 5.83 0 0 0-4.12.39l.927 1.663A3.9 3.9 0 0 1 12 8.1m0 7.8a3.9 3.9 0 0 1-1.642-.363l-.928 1.662a5.77 5.77 0 0 0 4.12.39a1.872 1.872 0 0 1 2.514-1.454a5.78 5.78 0 0 0 1.723-3.762l-1.903-.027A3.9 3.9 0 0 1 12 15.9m2.732-8.633a1.335 1.335 0 1 0 1.335-2.312a1.335 1.335 0 0 0-1.335 2.312"></svg:path>`,
})
export class RiUbuntuFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUbuntuLineIcon],svg[ri-ubuntu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.668 19.273l1.006-1.742a6 6 0 0 0 8.282-4.781h2.012A8 8 0 0 1 18.929 16a8 8 0 0 1-1.452 1.835a2.5 2.5 0 0 0-1.976.227a2.5 2.5 0 0 0-1.184 1.595a7.98 7.98 0 0 1-5.65-.384m-1.3-.75a7.98 7.98 0 0 1-3.157-4.7C4.696 13.367 5 12.719 5 12c0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.073 8a8 8 0 0 1 2.295-2.524l1.006 1.742a6 6 0 0 0 0 9.563zm1.3-13.796a8 8 0 0 1 5.648-.387a2.497 2.497 0 0 0 3.161 1.825a8 8 0 0 1 2.49 5.085h-2.013A5.99 5.99 0 0 0 15 6.804a5.99 5.99 0 0 0-5.327-.335zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072M4.001 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m12 6.928a1.5 1.5 0 1 1 1.5 2.598a1.5 1.5 0 0 1-1.5-2.598"></svg:path>`,
})
export class RiUbuntuLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUmbrellaFillIcon],svg[ri-umbrella-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 0 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6h-9v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0z"></svg:path>`,
})
export class RiUmbrellaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUmbrellaLineIcon],svg[ri-umbrella-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 0 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6h-9v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0zM19.936 11A8.001 8.001 0 0 0 4.06 11z"></svg:path>`,
})
export class RiUmbrellaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnderlineIcon],svg[ri-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3zM4 20h16v2H4z"></svg:path>`,
})
export class RiUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUninstallFillIcon],svg[ri-uninstall-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 14H5v4h14zm-2 1v2h-2v-2zM12 2L8 6h3v5h2V6h3z"></svg:path>`,
})
export class RiUninstallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUninstallLineIcon],svg[ri-uninstall-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm10.999 14h-14L5 20h14zM17 17v2h-2v-2zM12 2l4 4h-3v5h-2V6H8z"></svg:path>`,
})
export class RiUninstallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnpinFillIcon],svg[ri-unpin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.971 17.172l-1.414 1.414l-3.535-3.535l-.073.074l-.707 3.535l-1.415 1.415l-4.242-4.243l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.243-4.243l1.414-1.414l3.536-.707l.073-.074l-3.536-3.536l1.414-1.415zm-2.12-4.95l1.34-1.34l.707.707l1.415-1.414l-8.486-8.485l-1.414 1.414l.707.707l-1.34 1.34z"></svg:path>`,
})
export class RiUnpinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnpinLineIcon],svg[ri-unpin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.97 17.172l-1.414 1.414l-3.535-3.535l-.073.074l-.707 3.536l-1.415 1.414l-4.242-4.243l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.243-4.243L5.34 8.761l3.536-.707l.073-.074l-3.536-3.536L6.828 3.03zM10.365 9.394l-.502.502l-2.822.565l6.5 6.5l.564-2.822l.502-.502zm8.411.074l-1.34 1.34l1.414 1.415l1.34-1.34l.707.707l1.415-1.415l-8.486-8.485l-1.414 1.414l.707.707l-1.34 1.34l1.414 1.415l1.34-1.34z"></svg:path>`,
})
export class RiUnpinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnsplashFillIcon],svg[ri-unsplash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z"></svg:path>`,
})
export class RiUnsplashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUnsplashLineIcon],svg[ri-unsplash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.001 10v4h4v-4h7v11h-18V10zm-2 2h-3v7h14v-7h-3L16 16H8zm8-9v6h-8V3zm-2 2h-4v2h4z"></svg:path>`,
})
export class RiUnsplashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUpload2FillIcon],svg[ri-upload-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zM14 9v6h-4V9H5l7-7l7 7z"></svg:path>`,
})
export class RiUpload2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUpload2LineIcon],svg[ri-upload-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zm9-10v7h-2V9H6l6-6l6 6z"></svg:path>`,
})
export class RiUpload2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadCloud2FillIcon],svg[ri-upload-cloud-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415zM12 2a7 7 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978V17a6 6 0 0 0-11.996-.225L6 17v1.978a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"></svg:path>`,
})
export class RiUploadCloud2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadCloud2LineIcon],svg[ri-upload-cloud-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415zM12 2a7 7 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"></svg:path>`,
})
export class RiUploadCloud2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadCloudFillIcon],svg[ri-upload-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.981a6.5 6.5 0 0 1-2.936-12a8.001 8.001 0 0 1 15.872 0a6.5 6.5 0 0 1-2.936 12V21H7zM13 13h3l-4-5l-4 5h3v4h2z"></svg:path>`,
})
export class RiUploadCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadCloudLineIcon],svg[ri-upload-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14.5a6.5 6.5 0 0 1 3.064-5.519a8.001 8.001 0 0 1 15.872 0a6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5m15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503l-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942l-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35zM13 13v4h-2v-4H8l4-5l4 5z"></svg:path>`,
})
export class RiUploadCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadFillIcon],svg[ri-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zm10-9v8h-2v-8H4l8-8l8 8z"></svg:path>`,
})
export class RiUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUploadLineIcon],svg[ri-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485l-1.414 1.415z"></svg:path>`,
})
export class RiUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUsbFillIcon],svg[ri-usb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l3 5h-2v7.381l3-1.499l-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553A3.001 3.001 0 0 1 12 23a3 3 0 0 1-1.31-5.7L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9z"></svg:path>`,
})
export class RiUsbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUsbLineIcon],svg[ri-usb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l3 5h-2v7.381l3-1.499l-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553A3.001 3.001 0 0 1 12 23a3 3 0 0 1-1.31-5.7L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9zm0 18a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiUsbLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser2FillIcon],svg[ri-user-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8 8 0 0 1 7-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6"></svg:path>`,
})
export class RiUser2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser2LineIcon],svg[ri-user-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22a8 8 0 1 1 16 0zm9-5.917V20h4.659A6.01 6.01 0 0 0 13 16.083M11 20v-3.917A6.01 6.01 0 0 0 6.341 20zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></svg:path>`,
})
export class RiUser2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser3FillIcon],svg[ri-user-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path>`,
})
export class RiUser3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser3LineIcon],svg[ri-user-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiUser3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser4FillIcon],svg[ri-user-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class RiUser4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser4LineIcon],svg[ri-user-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16a8 8 0 0 1 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class RiUser4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser5FillIcon],svg[ri-user-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z"></svg:path>`,
})
export class RiUser5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser5LineIcon],svg[ri-user-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm6.735-.693l1.332-.941a6 6 0 1 0-6.913 0l1.331.941L8.058 20h7.884zM8.119 10.97l1.94-.485a2 2 0 0 0 3.882 0l1.94.485a4.002 4.002 0 0 1-7.762 0"></svg:path>`,
})
export class RiUser5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser6FillIcon],svg[ri-user-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.848 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17m0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5"></svg:path>`,
})
export class RiUser6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUser6LineIcon],svg[ri-user-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.848 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17m0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-4.783 4.995L12 15a5 5 0 0 1-5-5V7a5 5 0 0 1 4.783-4.995zm0 2a3 3 0 0 0-2.995 2.824L9 7v3a3 3 0 0 0 5.995.176L15 10V7a3 3 0 0 0-3-3"></svg:path>`,
})
export class RiUser6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserAddFillIcon],svg[ri-user-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m6 4v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiUserAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserAddLineIcon],svg[ri-user-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiUserAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserCommunityFillIcon],svg[ri-user-community-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 1a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m-6-1a3 3 0 1 1-6 0a3 3 0 0 1 6 0m15 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiUserCommunityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserCommunityLineIcon],svg[ri-user-community-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2m-9-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class RiUserCommunityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserFillIcon],svg[ri-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6"></svg:path>`,
})
export class RiUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserFollowFillIcon],svg[ri-user-follow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.062V22H4a8 8 0 0 1 9-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m5.793 6.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414z"></svg:path>`,
})
export class RiUserFollowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserFollowLineIcon],svg[ri-user-follow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m5.793 8.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414z"></svg:path>`,
})
export class RiUserFollowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserForbidFillIcon],svg[ri-user-forbid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a6 6 0 1 0 0-12a6 6 0 0 0 0 12m3 5a3 3 0 0 1 4.293-2.708l-4 4.001A3 3 0 0 1 15 18m1.707 2.708l4-4.001a3 3 0 0 1-4.001 4.001M18 13a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6 1q.126 0 .252.004A6.97 6.97 0 0 0 11 18c0 1.487.464 2.866 1.255 4H4a8 8 0 0 1 8-8"></svg:path>`,
})
export class RiUserForbidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserForbidLineIcon],svg[ri-user-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m3 17a3 3 0 0 1 4.293-2.708l-4 4.001A3 3 0 0 1 15 18m1.707 2.708l4-4.001a3 3 0 0 1-4.001 4.001M18 13a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6 1q.126 0 .252.004a7 7 0 0 0-.975 2.04A6 6 0 0 0 6 22H4a8 8 0 0 1 8-8"></svg:path>`,
})
export class RiUserForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserHeartFillIcon],svg[ri-user-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.841 15.659l.176.177l.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359l-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v8H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6s-2.685 6-6 6s-6-2.685-6-6s2.685-6 6-6"></svg:path>`,
})
export class RiUserHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserHeartLineIcon],svg[ri-user-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.841 15.659l.176.177l.178-.177a2.25 2.25 0 1 1 3.182 3.182l-3.36 3.359l-3.358-3.359a2.25 2.25 0 1 1 3.182-3.182M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996zm0-13c3.315 0 6 2.685 6 6a6 6 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a6 6 0 0 1 5.775-5.996zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class RiUserHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserLineIcon],svg[ri-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"></svg:path>`,
})
export class RiUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserLocationFillIcon],svg[ri-user-location-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m8.828 7.828L18 23.657l-2.828-2.829a4 4 0 1 1 5.656 0M18 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiUserLocationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserLocationLineIcon],svg[ri-user-location-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8.828 10.071L18 24l-2.828-2.929c-1.562-1.618-1.562-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858m-1.438-1.39c.813-.842.813-2.236 0-3.079a1.904 1.904 0 0 0-2.78 0c-.813.843-.813 2.237 0 3.08L18 21.12z"></svg:path>`,
})
export class RiUserLocationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserMinusFillIcon],svg[ri-user-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m11 5v2h-8v-2z"></svg:path>`,
})
export class RiUserMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserMinusLineIcon],svg[ri-user-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m11 7v2h-8v-2z"></svg:path>`,
})
export class RiUserMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserReceived2FillIcon],svg[ri-user-received-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m8 4h3v2h-3v3.5L15 18l5-4.5z"></svg:path>`,
})
export class RiUserReceived2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserReceived2LineIcon],svg[ri-user-received-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8 6h3v2h-3v3.5L15 18l5-4.5z"></svg:path>`,
})
export class RiUserReceived2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserReceivedFillIcon],svg[ri-user-received-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m7.418 4h3.586v2h-3.586l1.829 1.828l-1.414 1.415L15.59 18l4.243-4.243l1.414 1.415z"></svg:path>`,
})
export class RiUserReceivedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserReceivedLineIcon],svg[ri-user-received-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7.418 6h3.586v2h-3.586l1.829 1.828l-1.414 1.415L15.59 18l4.243-4.243l1.414 1.415z"></svg:path>`,
})
export class RiUserReceivedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSearchFillIcon],svg[ri-user-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m9.446 7.032l1.504 1.503l-1.415 1.415l-1.503-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiUserSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSearchLineIcon],svg[ri-user-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m9.446 9.032l1.504 1.503l-1.415 1.415l-1.503-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiUserSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSettingsFillIcon],svg[ri-user-settings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m2.595 5.811a3.5 3.5 0 0 1 0-1.622l-.992-.573l1-1.732l.992.573A3.5 3.5 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.991.573a3.5 3.5 0 0 1 0 1.622l.991.573l-1 1.732l-.992-.573a3.5 3.5 0 0 1-1.405.812V22.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573l-1-1.732zM18 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiUserSettingsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSettingsLineIcon],svg[ri-user-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m2.595 7.811a3.5 3.5 0 0 1 0-1.622l-.992-.573l1-1.732l.992.573A3.5 3.5 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.991.573a3.5 3.5 0 0 1 0 1.622l.991.573l-1 1.732l-.992-.573a3.5 3.5 0 0 1-1.405.812V22.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573l-1-1.732zM18 19.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiUserSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserShared2FillIcon],svg[ri-user-shared-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m6 4v-3.5l5 4.5l-5 4.5V19h-3v-2z"></svg:path>`,
})
export class RiUserShared2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserShared2LineIcon],svg[ri-user-shared-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 6v-3.5l5 4.5l-5 4.5V19h-3v-2z"></svg:path>`,
})
export class RiUserShared2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSharedFillIcon],svg[ri-user-shared-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m6.586 4l-1.829-1.828l1.415-1.415L22.414 18l-4.242 4.243l-1.415-1.415L18.586 19H15v-2z"></svg:path>`,
})
export class RiUserSharedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSharedLineIcon],svg[ri-user-shared-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6.586 6l-1.829-1.828l1.415-1.415L22.414 18l-4.242 4.243l-1.415-1.415L18.586 19H15v-2z"></svg:path>`,
})
export class RiUserSharedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSmileFillIcon],svg[ri-user-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z"></svg:path>`,
})
export class RiUserSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserSmileLineIcon],svg[ri-user-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-8h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0"></svg:path>`,
})
export class RiUserSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserStarFillIcon],svg[ri-user-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m6 7.5l-2.939 1.545l.561-3.273l-2.377-2.317l3.286-.477L18 14l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6"></svg:path>`,
})
export class RiUserStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserStarLineIcon],svg[ri-user-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m6 10.5l-2.939 1.545l.561-3.273l-2.377-2.317l3.286-.477L18 14l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272z"></svg:path>`,
})
export class RiUserStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserUnfollowFillIcon],svg[ri-user-unfollow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m7 3.586l2.121-2.121l1.415 1.414L20.414 18l2.121 2.121l-1.414 1.415L19 19.414l-2.121 2.121l-1.415-1.414L17.587 18l-2.121-2.121l1.414-1.415z"></svg:path>`,
})
export class RiUserUnfollowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserUnfollowLineIcon],svg[ri-user-unfollow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m7 6.586l2.121-2.121l1.415 1.414L20.414 19l2.121 2.121l-1.414 1.415L19 20.414l-2.121 2.121l-1.415-1.414L17.587 19l-2.121-2.121l1.414-1.415z"></svg:path>`,
})
export class RiUserUnfollowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserVoiceFillIcon],svg[ri-user-voice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m9.246-9.815A10 10 0 0 1 19 7a10 10 0 0 1-.754 3.816l-1.677-1.22A8 8 0 0 0 17 7a8 8 0 0 0-.43-2.596zM21.548.784A13.94 13.94 0 0 1 23 7c0 2.233-.523 4.344-1.452 6.217l-1.645-1.197A12 12 0 0 0 21 7a12 12 0 0 0-1.097-5.02z"></svg:path>`,
})
export class RiUserVoiceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riUserVoiceLineIcon],svg[ri-user-voice-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4M21.548.784A13.94 13.94 0 0 1 23 7c0 2.233-.523 4.344-1.452 6.217l-1.645-1.197A12 12 0 0 0 21 7a12 12 0 0 0-1.097-5.02zm-3.302 2.4A10 10 0 0 1 19 7a10 10 0 0 1-.754 3.816l-1.677-1.22A8 8 0 0 0 17 7a8 8 0 0 0-.43-2.596z"></svg:path>`,
})
export class RiUserVoiceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVercelFillIcon],svg[ri-vercel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21.648H1L12 2.352z"></svg:path>`,
})
export class RiVercelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVercelLineIcon],svg[ri-vercel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21.648L12 2.352L1 21.648zm-3.442-2H4.442L12 6.39z"></svg:path>`,
})
export class RiVercelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVerifiedBadgeFillIcon],svg[ri-verified-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07z"></svg:path>`,
})
export class RiVerifiedBadgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVerifiedBadgeLineIcon],svg[ri-verified-badge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.007 2.104a3 3 0 0 0-3.595 1.489L5.606 5.17a1 1 0 0 1-.436.436l-1.577.805a3 3 0 0 0-1.49 3.596l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.596-1.49l.805-1.576a1 1 0 0 1 .436-.436l1.577-.806a3 3 0 0 0 1.49-3.595l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.596l-1.577-.805a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0zM8.193 4.503a1 1 0 0 1 1.198-.497l1.685.546a3 3 0 0 0 1.848 0l1.685-.546a1 1 0 0 1 1.199.497l.805 1.577a3 3 0 0 0 1.307 1.307l1.577.805a1 1 0 0 1 .497 1.199l-.546 1.685a3 3 0 0 0 0 1.848l.546 1.685a1 1 0 0 1-.497 1.198l-1.577.806a3 3 0 0 0-1.307 1.307l-.805 1.577a1 1 0 0 1-1.199.496l-1.685-.545a3 3 0 0 0-1.848 0l-1.685.545a1 1 0 0 1-1.198-.496l-.806-1.577a3 3 0 0 0-1.307-1.307l-1.577-.806a1 1 0 0 1-.496-1.198l.545-1.685a3 3 0 0 0 0-1.848l-.545-1.685a1 1 0 0 1 .496-1.199l1.577-.805A3 3 0 0 0 7.387 6.08zM6.76 11.757L11.002 16l7.071-7.071l-1.414-1.414l-5.657 5.657l-2.828-2.829z"></svg:path>`,
})
export class RiVerifiedBadgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoAddFillIcon],svg[ri-video-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 8v3H5v2h2.999L8 16h2l-.001-3H13v-2h-3V8z"></svg:path>`,
})
export class RiVideoAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoAddLineIcon],svg[ri-video-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM8 8h2v3h3v2H9.999L10 16H8l-.001-3H5v-2h3zm13 .841l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiVideoAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoAiFillIcon],svg[ri-video-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M19 11a6 6 0 0 0 2-.341v9.348a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h9.348A6 6 0 0 0 19 11m-8.378-2.585a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666z"></svg:path>`,
})
export class RiVideoAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoAiLineIcon],svg[ri-video-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M3.993 3H13v2H5v14h14v-8h2v9.007a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3m6.629 5.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiVideoAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoChatFillIcon],svg[ri-video-chat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM14 10.25V8H7v6h7v-2.25L17 14V8z"></svg:path>`,
})
export class RiVideoChatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoChatLineIcon],svg[ri-video-chat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10.25L17 8v6l-3-2.25V14H7V8h7zM5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiVideoChatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoDownloadFillIcon],svg[ri-video-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-6 4H8v4H5l4 4l4-4h-3z"></svg:path>`,
})
export class RiVideoDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoDownloadLineIcon],svg[ri-video-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zm-5 2v4h3l-4 4l-4-4h3V8zm11 .841l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiVideoDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoFillIcon],svg[ri-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zm7.622 4.422a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666z"></svg:path>`,
})
export class RiVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoLineIcon],svg[ri-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM5 5v14h14V5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOffFillIcon],svg[ri-video-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18.414l4.192 4.193l1.415-1.415l-19.8-19.799l-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zM16 4H8.214l14.494 14.494A.5.5 0 0 0 23 18.04V5.96a.5.5 0 0 0-.787-.41L17 9.2V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiVideoOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOffLineIcon],svg[ri-video-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18.414l4.192 4.193l1.415-1.415l-19.8-19.799l-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2-2V18H3V6h1.586zm8 1.626a.5.5 0 0 1-.292.454L21 16.786V8.841l-4 2.8v1.145l-2-2V6h-4.786l-2-2H16a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41z"></svg:path>`,
})
export class RiVideoOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOnAiFillIcon],svg[ri-video-on-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 9.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M10 6a6 6 0 0 1-9 5.197V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.2l5.213 3.65a.5.5 0 0 0 .787-.41V5.96a.5.5 0 0 0-.787-.41L17 9.2V5a1 1 0 0 0-1-1H9.659A6 6 0 0 1 10 6"></svg:path>`,
})
export class RiVideoOnAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOnAiLineIcon],svg[ri-video-on-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 9.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M1 19v-7h2v6h12V6h-5V4h6a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m16-6.641l4 2.8V8.84l-4 2.8z"></svg:path>`,
})
export class RiVideoOnAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOnFillIcon],svg[ri-video-on-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiVideoOnFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoOnLineIcon],svg[ri-video-on-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 3.159l4 2.8V8.84l-4 2.8zM3 6v12h12V6z"></svg:path>`,
})
export class RiVideoOnLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoUploadFillIcon],svg[ri-video-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM9 8l-4 4h3v4h2v-4h3z"></svg:path>`,
})
export class RiVideoUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVideoUploadLineIcon],svg[ri-video-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM9 8l4 4h-3v4H8v-4H5zm12 .841l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiVideoUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVidicon2FillIcon],svg[ri-vidicon-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-8 4v2h2v-2z"></svg:path>`,
})
export class RiVidicon2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVidicon2LineIcon],svg[ri-vidicon-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm2 2H3v10h12zm2 4.359l4 2.8V8.84l-4 2.8zM5 10h2v2H5z"></svg:path>`,
})
export class RiVidicon2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVidiconFillIcon],svg[ri-vidicon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zM5 8v2h2V8z"></svg:path>`,
})
export class RiVidiconFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVidiconLineIcon],svg[ri-vidicon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 3.159l4 2.8V8.84l-4 2.8zM3 6v12h12V6zm2 2h2v2H5z"></svg:path>`,
})
export class RiVidiconLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVimeoFillIcon],svg[ri-vimeo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.174 8.301c-.281-.413-.252-.413.328-.922c1.232-1.082 2.394-2.266 3.736-3.212c1.215-.852 2.826-1.402 3.927-.047c1.014 1.249 1.038 3.142 1.295 4.65c.257 1.564.503 3.164 1.051 4.66c.152.421.443 1.217.968 1.284c.678.093 1.368-1.096 1.683-1.54c.817-1.18 1.925-2.769 1.785-4.286c-.138-1.612-1.878-1.309-2.966-.924c.175-1.809 1.858-3.843 3.48-4.53c1.72-.714 4.276-.702 5.14 1.237c.922 2.102.093 4.543-.912 6.448c-1.096 2.068-2.509 3.982-4.018 5.77c-1.331 1.588-2.906 3.33-4.89 4.089c-2.267.864-3.61-.82-4.382-2.77c-.843-2.123-1.262-4.506-1.87-6.716c-.256-.935-.56-1.998-1.167-2.77c-.792-.994-1.692-.059-2.474.478c-.27-.267-.491-.607-.714-.899"></svg:path>`,
})
export class RiVimeoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVimeoLineIcon],svg[ri-vimeo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.994 3.004C20.427 3.004 22 4.516 22 7.5c0 1.72-.998 3.94-1.832 5.235c-2.789 4.333-6.233 8.74-9.643 8.74c-3.706 0-4.67-6.831-5.092-8.432s-.533-2.21-1.17-3.233q-.475.33-1.33.93a.5.5 0 0 1-.693-.117L.926 8.807a.5.5 0 0 1 .027-.62Q5.193 3.278 8 3.278c2.392 0 3.125 2.816 3.324 4.223c.3 2.117.69 4.738 1.245 5.872c.556-.792 2.18-2.888 1.966-3.99c-.094-.487-1.317.183-1.887.078c-.425-.08-.805-.402-.805-1.026c0-1.31 1.851-5.43 6.15-5.43m.007 2c-2.194 0-3.251 1.533-3.653 2.208c1.25.046 1.97.818 2.134 1.803c.388 2.33-1.917 4.92-2.34 5.565c-.396.603-3.061 3.328-4.25-3.36a160 160 0 0 1-.665-4.186c-.17-1.151-.872-1.763-1.229-1.763c-.843 0-1.92.65-3.856 2.515c1.905-.115 2.545 2.276 2.917 3.633c.815 2.984 1.57 8.055 3.62 8.055c1.726 0 4.438-2.645 7.37-7.038c.208-.312 1.965-3.025 1.965-5.037c0-2.395-1.469-2.395-2.013-2.395"></svg:path>`,
})
export class RiVimeoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipCrown2FillIcon],svg[ri-vip-crown-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.806 5.2L7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86l4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15a1 1 0 0 1 1.548-.95m9.2 9.8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiVipCrown2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipCrown2LineIcon],svg[ri-vip-crown-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.497 8.065L4.784 19h14.443l1.286-10.935l-4.01 2.673l-4.498-6.297l-4.498 6.297zM2.806 5.2L7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86l4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15a1 1 0 0 1 1.548-.95m9.2 9.8a2 2 0 1 1-.001-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiVipCrown2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipCrownFillIcon],svg[ri-vip-crown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm0-14l5 3l5-6l5 6l5-3v12h-20z"></svg:path>`,
})
export class RiVipCrownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipCrownLineIcon],svg[ri-vip-crown-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm0-14l5 3.5l5-6.5l5 6.5l5-3.5v12h-20zm2 3.841V15h16V8.841l-3.42 2.394l-4.58-5.955l-4.58 5.955z"></svg:path>`,
})
export class RiVipCrownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipDiamondFillIcon],svg[ri-vip-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.878 3.003h14.254a1 1 0 0 1 .809.412l3.822 5.256a.5.5 0 0 1-.037.633l-11.354 12.3a.5.5 0 0 1-.735 0L.283 9.305a.5.5 0 0 1-.037-.633l3.823-5.256a1 1 0 0 1 .809-.412"></svg:path>`,
})
export class RiVipDiamondFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipDiamondLineIcon],svg[ri-vip-diamond-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.878 3.003h14.254a1 1 0 0 1 .809.412l3.822 5.256a.5.5 0 0 1-.037.633l-11.354 12.3a.5.5 0 0 1-.706.029L.283 9.304a.5.5 0 0 1-.037-.633l3.823-5.256a1 1 0 0 1 .809-.412m.509 2l-2.8 3.849l9.418 10.202l9.417-10.202l-2.8-3.85z"></svg:path>`,
})
export class RiVipDiamondLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipFillIcon],svg[ri-vip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 5.5v7h2v-7zm-.285 0H8.606l-1.497 4.113L5.612 8.5H3.498l2.611 6.964h2zm5.285 5h1.5a2.5 2.5 0 0 0 0-5h-3.5v7h2zm0-2v-1h1.5a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class RiVipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVipLineIcon],svg[ri-vip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm9-11h2v8h-2zM7.97 8l-1.86 5.113L4.247 8H2.123l2.986 7.964h2L10.095 8zm9.035 6v2h-2V8h4a3 3 0 0 1 0 6zm0-4v2h2a1 1 0 1 0 0-2zm-15-7h20v2h-20z"></svg:path>`,
})
export class RiVipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVirusFillIcon],svg[ri-virus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.716 1.947l3.735 1.434l-.717 1.867l-.934-.359l-.746 1.945a6 6 0 0 1 1.945 1.846l1.902-.847l-.406-.914l1.827-.813l1.627 3.654l-1.827.813l-.407-.913l-1.902.847a6 6 0 0 1 .07 2.68l1.944.746l.358-.933l1.867.716l-1.433 3.735l-1.867-.717l.357-.933l-1.944-.747A6 6 0 0 1 15.32 17l.848 1.903l.914-.407l.813 1.827l-3.654 1.627l-.813-1.827l.913-.407l-.847-1.902a6 6 0 0 1-2.68.07l-.747 1.944l.934.358l-.717 1.867L6.55 20.62l.717-1.867l.932.358l.748-1.944A6 6 0 0 1 7 15.319l-1.903.848l.407.914l-1.827.813L2.05 14.24l1.827-.813l.406.914l1.903-.848a6 6 0 0 1-.07-2.68l-1.945-.746l-.358.933l-1.867-.716L3.38 6.549l1.867.717l-.36.933l1.946.747A6 6 0 0 1 8.68 7l-.848-1.903l-.913.407l-.814-1.827L9.76 2.051l.813 1.827l-.914.407l.848 1.902a6 6 0 0 1 2.68-.07l.745-1.945L13 3.815zm-3.582 11.285a1 1 0 1 0 1.732 1a1 1 0 0 0-1.732-1M14 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3.5-1.598a1 1 0 1 0 1 1.732a1 1 0 0 0-1-1.732"></svg:path>`,
})
export class RiVirusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVirusLineIcon],svg[ri-virus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.716 1.947l3.735 1.434l-.717 1.867l-.934-.359l-.746 1.945a6 6 0 0 1 1.945 1.846l1.902-.847l-.406-.914l1.827-.813l1.627 3.654l-1.827.813l-.407-.913l-1.902.847a6 6 0 0 1 .07 2.68l1.944.746l.358-.933l1.867.716l-1.433 3.735l-1.867-.717l.357-.933l-1.944-.747A6 6 0 0 1 15.32 17l.848 1.903l.914-.407l.813 1.827l-3.654 1.627l-.813-1.827l.913-.407l-.847-1.902a6 6 0 0 1-2.68.07l-.747 1.944l.934.358l-.717 1.867L6.55 20.62l.717-1.867l.932.358l.748-1.944A6 6 0 0 1 7 15.319l-1.903.848l.407.914l-1.827.813L2.05 14.24l1.827-.813l.406.914l1.903-.848a6 6 0 0 1-.07-2.68l-1.945-.746l-.358.933l-1.867-.716L3.38 6.549l1.867.717l-.36.933l1.946.747A6 6 0 0 1 8.68 7l-.848-1.903l-.913.407l-.814-1.827L9.76 2.051l.813 1.827l-.914.407l.848 1.902a6 6 0 0 1 2.68-.07l.745-1.945L13 3.815zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.5 4.866a1 1 0 1 1-1 1.732a1 1 0 0 1 1-1.732M14 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-2.134-1.232a1 1 0 1 1-1.732 1a1 1 0 0 1 1.732-1"></svg:path>`,
})
export class RiVirusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVisaFillIcon],svg[ri-visa-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h22v2H1zm0 14h22v2H1zm18.622-3.086l-.174-.87h-1.949l-.31.863l-1.562.004q1.507-3.61 2.236-5.35q.189-.455.685-.454q.381.003 1.245 0L21 14.912zm-1.684-2.062h1.256l-.47-2.18zM7.872 9.106l1.57.002l-2.427 5.806l-1.59-.001q-.806-3.106-1.184-4.605c-.077-.307-.23-.521-.526-.622Q3.321 9.55 2.4 9.267v-.16h2.509c.434 0 .687.21.769.64l.62 3.289zm3.727.002l-1.24 5.805l-1.495-.002l1.24-5.805zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27c-.59.009-.954.256-.954.493c0 .384.632.578 1.284.999c.743.48.84.91.832 1.378c-.011.971-.832 1.929-2.565 1.929c-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361c.515 0 .956-.207.96-.568c.002-.257-.155-.384-.732-.702s-1.386-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9"></svg:path>`,
})
export class RiVisaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVisaLineIcon],svg[ri-visa-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.222 15.768l-.225-1.125h-2.514l-.4 1.117l-2.015.004q1.943-4.669 2.884-6.917c.164-.392.455-.592.884-.589q.492.004 1.606.001L24 15.765zm-2.174-2.666h1.621l-.605-2.82zM7.062 8.257l2.026.002l-3.132 7.51l-2.051-.002a951 951 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804Q1.187 8.832 0 8.466v-.207h3.237c.56 0 .887.271.992.827q.159.836.8 4.254zm4.81.002l-1.601 7.509l-1.929-.003L9.94 8.257zm3.91-.139c.577 0 1.304.18 1.722.346l-.338 1.556c-.378-.152-1-.357-1.523-.35c-.76.013-1.23.332-1.23.638c0 .498.816.749 1.656 1.293c.958.62 1.085 1.177 1.073 1.783c-.013 1.255-1.073 2.494-3.309 2.494c-1.02-.015-1.388-.1-2.22-.396l.352-1.624c.847.354 1.206.467 1.93.467c.663 0 1.232-.268 1.237-.735c.004-.332-.2-.497-.944-.907s-1.788-.979-1.774-2.122c.017-1.462 1.402-2.443 3.368-2.443"></svg:path>`,
})
export class RiVisaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVkFillIcon],svg[ri-vk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.26 4.26C3 5.532 3 7.566 3 11.64v.72c0 4.068 0 6.102 1.26 7.38C5.532 21 7.566 21 11.64 21h.72c4.068 0 6.102 0 7.38-1.26C21 18.468 21 16.434 21 12.36v-.72c0-4.068 0-6.102-1.26-7.38C18.468 3 16.434 3 12.36 3h-.72C7.572 3 5.538 3 4.26 4.26m1.776 4.218H8.1c.066 3.432 1.578 4.884 2.778 5.184V8.478h1.938v2.958c1.182-.126 2.43-1.476 2.85-2.964h1.932a5.72 5.72 0 0 1-2.628 3.738a5.92 5.92 0 0 1 3.078 3.756h-2.13c-.456-1.422-1.596-2.526-3.102-2.676v2.676h-.24c-4.104 0-6.444-2.808-6.54-7.488"></svg:path>`,
})
export class RiVkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVkLineIcon],svg[ri-vk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.827 5.828c-.344.349-.57.839-.696 1.77c-.129.965-.13 2.243-.13 4.082v.64c0 1.836.001 3.113.13 4.077c.125.932.352 1.425.697 1.777c.35.343.84.57 1.77.695c.965.129 2.243.131 4.082.131h.64c1.836 0 3.113-.002 4.078-.131c.931-.125 1.424-.352 1.776-.697c.343-.349.57-.839.695-1.77c.13-.965.131-2.243.131-4.082v-.64c0-1.836-.002-3.113-.13-4.077c-.126-.932-.353-1.425-.698-1.777c-.349-.343-.839-.57-1.77-.695C15.437 5.002 14.159 5 12.32 5h-.64c-1.836 0-3.113.002-4.077.131c-.932.125-1.424.352-1.776.697M11.68 3h.64c1.445 0 2.912-.043 4.347.149c1.156.155 2.135.486 2.917 1.26l.008.009c.773.784 1.105 1.763 1.26 2.92c.191 1.433.148 2.899.148 4.342v.64c0 1.444.044 2.911-.149 4.347c-.154 1.156-.486 2.135-1.26 2.917l-.009.008c-.783.773-1.762 1.104-2.92 1.26c-1.433.191-2.899.148-4.342.148h-.64c-1.444 0-2.911.043-4.346-.149c-1.157-.155-2.136-.486-2.917-1.26l-.009-.009c-.772-.784-1.104-1.763-1.259-2.92C2.957 15.23 3 13.764 3 12.32v-.64c0-1.444-.043-2.911.15-4.347c.154-1.156.486-2.135 1.26-2.917l.008-.008c.784-.773 1.763-1.104 2.92-1.26C8.772 2.958 10.238 3 11.68 3M6.036 8.478c.096 4.68 2.436 7.488 6.54 7.488h.24V13.29c1.506.15 2.646 1.254 3.102 2.676h2.13a5.92 5.92 0 0 0-3.078-3.756a5.72 5.72 0 0 0 2.628-3.738h-1.932c-.42 1.488-1.668 2.838-2.85 2.964V8.478h-1.938v5.184c-1.2-.3-2.712-1.752-2.778-5.184z"></svg:path>`,
})
export class RiVkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceAiFillIcon],svg[ri-voice-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M8.5 6h-2v12h2zM4 10H2v4h2zm9-8h-2v20h2zm4.5 6h-2v10h2zm4.5 2h-2v4h2z"></svg:path>`,
})
export class RiVoiceAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceAiLineIcon],svg[ri-voice-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M8.5 6h-2v12h2zM4 10H2v4h2zm9-8h-2v20h2zm4.5 6h-2v10h2zm4.5 2h-2v4h2z"></svg:path>`,
})
export class RiVoiceAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceRecognitionFillIcon],svg[ri-voice-recognition-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v18h-18V3zm-8 3h-2v12h2zm-4 3h-2v6h2zm8 0h-2v6h2z"></svg:path>`,
})
export class RiVoiceRecognitionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceRecognitionLineIcon],svg[ri-voice-recognition-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zm-4 3v6h-2V9zm8 0v6h-2V9zm-8-6v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z"></svg:path>`,
})
export class RiVoiceRecognitionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceprintFillIcon],svg[ri-voiceprint-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v10H5zm-4 3h2v4H1zm8-8h2v18H9zm4 2h2v18h-2zm4 3h2v10h-2zm4 3h2v4h-2z"></svg:path>`,
})
export class RiVoiceprintFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVoiceprintLineIcon],svg[ri-voiceprint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v10H5zm-4 3h2v4H1zm8-8h2v18H9zm4 2h2v18h-2zm4 3h2v10h-2zm4 3h2v4h-2z"></svg:path>`,
})
export class RiVoiceprintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeDownFillIcon],svg[ri-volume-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.889 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm9.974.591l-1.422-1.422A4 4 0 0 0 19 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0 1 21 12c0 1.842-.83 3.49-2.137 4.591"></svg:path>`,
})
export class RiVolumeDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeDownLineIcon],svg[ri-volume-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.22L9.603 10H6v4h3.603L13 16.78zM8.889 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm9.974.591l-1.422-1.422A4 4 0 0 0 19 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.99 5.99 0 0 1 21 12c0 1.842-.83 3.49-2.137 4.591"></svg:path>`,
})
export class RiVolumeDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeMuteFillIcon],svg[ri-volume-mute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm14.525-4l3.536 3.536l-1.415 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.465l1.414-1.415L19 10.586l3.535-3.536l1.415 1.415z"></svg:path>`,
})
export class RiVolumeMuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeMuteLineIcon],svg[ri-volume-mute-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.22L6.603 10H3v4h3.603L10 16.78zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm14.525-4l3.536 3.536l-1.415 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.465l1.414-1.415L19 10.586l3.535-3.536l1.415 1.415z"></svg:path>`,
})
export class RiVolumeMuteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeOffVibrateFillIcon],svg[ri-volume-off-vibrate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zM13 19.945a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1l2.584-.002l-3.776-3.776l1.414-1.414L13 12.586zm-.113-16.206a.5.5 0 0 1 .113.316v5.702L9.282 6.04l2.901-2.372a.5.5 0 0 1 .704.07"></svg:path>`,
})
export class RiVolumeOffVibrateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeOffVibrateLineIcon],svg[ri-volume-off-vibrate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zM13 19.945a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1l2.584-.002l-3.776-3.776l1.414-1.414L13 12.586zM7.584 9.998L4 10v4l3.603-.001L11 16.779v-3.365zm5.303-6.26a.5.5 0 0 1 .113.317v5.702l-2-2V7.22l-.296.241l-1.421-1.42l2.9-2.373a.5.5 0 0 1 .704.07"></svg:path>`,
})
export class RiVolumeOffVibrateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeUpFillIcon],svg[ri-volume-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h3.889l5.294 4.332a.5.5 0 0 0 .817-.387V4.055a.5.5 0 0 0-.817-.387L5.89 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m21-4c0 3.292-1.446 6.246-3.738 8.262l-1.418-1.418A8.98 8.98 0 0 0 21 12a8.98 8.98 0 0 0-3.155-6.844l1.417-1.418A10.97 10.97 0 0 1 23 12m-5 0a5.99 5.99 0 0 0-2.287-4.713l-1.429 1.429A4 4 0 0 1 16 12c0 1.36-.679 2.561-1.716 3.284l1.43 1.43A5.99 5.99 0 0 0 18 12"></svg:path>`,
})
export class RiVolumeUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeUpLineIcon],svg[ri-volume-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.603 10L10 7.22v9.56L6.603 14H3v-4zM2 16h3.889l5.294 4.332a.5.5 0 0 0 .817-.387V4.055a.5.5 0 0 0-.817-.387L5.89 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m21-4c0 3.292-1.446 6.246-3.738 8.262l-1.418-1.418A8.98 8.98 0 0 0 21 12a8.98 8.98 0 0 0-3.155-6.844l1.417-1.418A10.97 10.97 0 0 1 23 12m-5 0a5.99 5.99 0 0 0-2.287-4.713l-1.429 1.429A4 4 0 0 1 16 12c0 1.36-.679 2.561-1.716 3.284l1.43 1.43A5.99 5.99 0 0 0 18 12"></svg:path>`,
})
export class RiVolumeUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeVibrateFillIcon],svg[ri-volume-vibrate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zm-6.503.577a.5.5 0 0 1 .113.317v15.89a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07"></svg:path>`,
})
export class RiVolumeVibrateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVolumeVibrateLineIcon],svg[ri-volume-vibrate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zm-6.503.577a.5.5 0 0 1 .113.317v15.89a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07M11 7.22L7.603 9.999H4V14l3.603-.001L11 16.779z"></svg:path>`,
})
export class RiVolumeVibrateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVuejsFillIcon],svg[ri-vuejs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.001 3h4l7 12l7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035L12 14L5.633 3z"></svg:path>`,
})
export class RiVuejsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riVuejsLineIcon],svg[ri-vuejs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.317 3L12 18l8.684-15H23L12 22L1 3zm4.342 0L12 10.5L16.343 3h2.316L12 14.5L5.343 3z"></svg:path>`,
})
export class RiVuejsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWalkFillIcon],svg[ri-walk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.617 8.712l3.205-2.328A2 2 0 0 1 12.065 6a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.401-2.547l-.698 3.956l2.061 1.729l2.223 6.108l-1.88.684l-2.039-5.604l-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885l-.677.492l-2.127 2.928l-1.618-1.176L7.6 8.7zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-2.97 13.181l-3.214 3.83l-1.532-1.285l2.975-3.546l.746-2.18l1.791 1.5z"></svg:path>`,
})
export class RiWalkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWalkLineIcon],svg[ri-walk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.617 8.712l3.205-2.328A2 2 0 0 1 12.065 6a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.401-2.547l-.698 3.956l2.061 1.729l2.223 6.108l-1.88.684l-2.039-5.604l-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885l-.677.492l-2.127 2.928l-1.618-1.176L7.6 8.7zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-2.97 13.181l-3.214 3.83l-1.532-1.285l2.975-3.546l.746-2.18l1.791 1.5z"></svg:path>`,
})
export class RiWalkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWallet2FillIcon],svg[ri-wallet-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 8h-9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v4a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 3h3v2h-3z"></svg:path>`,
})
export class RiWallet2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWallet2LineIcon],svg[ri-wallet-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 7V5h-16v14h16v-2h-8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-17-4h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 6v6h7V9zm2 2h3v2h-3z"></svg:path>`,
})
export class RiWallet2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWallet3FillIcon],svg[ri-wallet-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 6h-7a6 6 0 0 0 0 12h7v2a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 2h8v8h-8a4 4 0 1 1 0-8m0 3v2h3v-2z"></svg:path>`,
})
export class RiWallet3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWallet3LineIcon],svg[ri-wallet-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 7h1v10h-1v3a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-2 10h-6a5 5 0 0 1 0-10h6V5h-16v14h16zm1-2V9h-7a3 3 0 1 0 0 6zm-7-4h3v2h-3z"></svg:path>`,
})
export class RiWallet3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWalletFillIcon],svg[ri-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 9h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zm1-6h15v4h-16V4a1 1 0 0 1 1-1m12 11v2h3v-2z"></svg:path>`,
})
export class RiWalletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWalletLineIcon],svg[ri-wallet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15zm-14 2v10h16V9zm0-4v2h12V5zm11 8h3v2h-3z"></svg:path>`,
})
export class RiWalletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWaterFlashFillIcon],svg[ri-water-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.64 6.639L12.006.275l6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728m7.365 4.364v-4.5l-4.5 6.5h2.5v4.5l4.5-6.5z"></svg:path>`,
})
export class RiWaterFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWaterFlashLineIcon],svg[ri-water-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.005 3.103l-4.95 4.95a7 7 0 1 0 9.9 0zm0-2.828l6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5z"></svg:path>`,
})
export class RiWaterFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWaterPercentFillIcon],svg[ri-water-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .269L5.636 6.633a9 9 0 1 0 12.728 0zm4.243 9.902l-7.071 7.072l-1.415-1.415l7.072-7.07zM8.11 9.111a1.5 1.5 0 1 1 2.121 2.121A1.5 1.5 0 0 1 8.11 9.111m7.778 7.778a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.12"></svg:path>`,
})
export class RiWaterPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWaterPercentLineIcon],svg[ri-water-percent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 8.047L12 3.097l4.95 4.95a7 7 0 1 1-9.9 0m11.314-1.414L12 .269L5.636 6.633a9 9 0 1 0 12.728 0m-2.121 3.538l-1.414-1.414l-7.072 7.071l1.415 1.415zM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121a1.5 1.5 0 0 0-2.121 2.121m7.778 5.657a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.12"></svg:path>`,
})
export class RiWaterPercentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWebcamFillIcon],svg[ri-webcam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-1.07A7 7 0 0 1 5 13V8a7 7 0 0 1 14 0v5a7 7 0 0 1-6 6.93V21h4v2H7v-2zm1-12a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiWebcamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWebcamLineIcon],svg[ri-webcam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-1.07A7 7 0 0 1 5 13V8a7 7 0 0 1 14 0v5a7 7 0 0 1-6 6.93V21h4v2H7v-2zm1-18a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5m0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiWebcamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWebhookFillIcon],svg[ri-webhook-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.501 4.399a3 3 0 0 1 1.382 3.436l1.92.56A5.002 5.002 0 0 0 7.67 4.498a5 5 0 0 0 1.014 6.243L6.803 14H6.8a2 2 0 1 0 1.946 1.537c-.082-.347-.102-.725.076-1.034l2.545-4.408l-.866-.5a3 3 0 0 1 3-5.196m1.53 13.681a3.001 3.001 0 0 0 4.765-3.576a3 3 0 0 0-4.098-1.098l-.866.5l-2.546-4.41c-.178-.308-.515-.48-.857-.582a2.003 2.003 0 0 1-1.16-2.917a2 2 0 0 1 3.464 2L13.731 8l1.883 3.26a5.002 5.002 0 0 1 4.084 9.074a5 5 0 0 1-6.112-.872zM3.8 16c0-1.409.973-2.594 2.285-2.914l-.475-1.943A5.002 5.002 0 0 0 6.8 21a5 5 0 0 0 4.9-4h3.764l.002.004a2 2 0 1 0 .358-2.454c-.26.245-.577.45-.934.45H9.8v1a3 3 0 1 1-6 0"></svg:path>`,
})
export class RiWebhookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWebhookLineIcon],svg[ri-webhook-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.869 14.14c-.213.351-.319.638-.149 1.085c.47 1.236-.193 2.439-1.439 2.766c-1.175.308-2.32-.465-2.554-1.723c-.207-1.114.658-2.206 1.886-2.38c.067-.01.134-.014.22-.02q.07-.003.16-.01l1.869-3.132c-1.175-1.169-1.874-2.534-1.72-4.227c.11-1.196.58-2.23 1.44-3.077a4.89 4.89 0 0 1 6.098-.64c1.862 1.196 2.715 3.527 1.988 5.521l-1.707-.463c.229-1.109.06-2.105-.688-2.958c-.494-.563-1.128-.858-1.85-.967c-1.445-.218-2.864.71-3.285 2.129c-.478 1.61.246 2.925 2.222 3.916c-.829 1.394-1.651 2.792-2.491 4.18m4.915-5.867l1.806 3.186c3.041-.94 5.334.743 6.156 2.545c.994 2.177.315 4.755-1.637 6.098c-2.002 1.379-4.535 1.143-6.31-.628l1.393-1.165c1.752 1.136 3.285 1.082 4.423-.262a3.05 3.05 0 0 0-.05-3.979c-1.151-1.295-2.695-1.335-4.56-.091c-.775-1.373-1.562-2.736-2.311-4.119c-.253-.466-.532-.736-1.102-.835c-.95-.165-1.565-.981-1.602-1.897a2.08 2.08 0 0 1 1.33-2.041a2.075 2.075 0 0 1 2.35.64c.454.574.598 1.22.36 1.927a7 7 0 0 1-.159.407zm-2.232 8.622h3.66q.077.102.146.2c.097.138.19.268.297.384a2.07 2.07 0 0 0 2.913.1a2.074 2.074 0 0 0 .086-2.969c-.794-.814-2.151-.892-2.889-.03c-.447.524-.906.586-1.5.577c-1.524-.024-3.047-.008-4.57-.008c.1 2.142-.71 3.476-2.317 3.793c-1.572.31-3.02-.492-3.53-1.956c-.58-1.663.137-2.994 2.206-4.05l-.469-1.7c-2.255.492-3.948 2.68-3.773 5.142c.155 2.173 1.908 4.104 4.052 4.45a4.88 4.88 0 0 0 3.273-.584c1.306-.74 2.064-1.906 2.415-3.349"></svg:path>`,
})
export class RiWebhookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechat2FillIcon],svg[ri-wechat-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.458 18.185C3.359 16.677 2 14.4 2 11.908C2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.308-10 8.308a11.4 11.4 0 0 1-3.272-.462c-.092-.03-.216-.03-.308-.03c-.185 0-.37.06-.525.153l-2.191 1.262c-.062.03-.124.061-.186.061a.34.34 0 0 1-.339-.338c0-.093.03-.154.062-.246c.03-.031.308-1.047.463-1.662c0-.062.03-.154.03-.215q0-.37-.277-.554m3.21-7.673c.717 0 1.285-.569 1.285-1.286S9.385 7.94 8.668 7.94s-1.285.568-1.285 1.286c0 .717.567 1.285 1.285 1.285m6.666 0c.718 0 1.285-.569 1.285-1.286s-.567-1.286-1.285-1.286c-.717 0-1.285.568-1.285 1.286c0 .717.568 1.285 1.285 1.285"></svg:path>`,
})
export class RiWechat2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
