import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMagnifier2Icon],svg[si-glyph-magnifier-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.025 7.5c0-4.143-3.356-7.5-7.499-7.5a7.5 7.5 0 0 0-7.499 7.5a7.5 7.5 0 0 0 7.5 7.5c2.219 0 7.5-.052 7.5-.052zm-7.553 5.529a5.506 5.506 0 1 1 .002-11.012a5.506 5.506 0 0 1-.002 11.012m6.487.929h-1v-1h1z"></svg:path><svg:path d="M7.844 3.044c-2.119 0-3.839 1.616-3.839 3.608c0 .25.026.496.077.73c.186.84.529.691.529-.158c0-1.998 1.719-3.609 3.84-3.609c.905 0 .608-.571-.607-.571"></svg:path></svg:g>`,
})
export class SiGlyphMagnifier2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailIcon],svg[si-glyph-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.304 3.059H1.701a.65.65 0 0 0-.648.648v8.617a.65.65 0 0 0 .648.648h14.603a.65.65 0 0 0 .649-.648V3.707a.65.65 0 0 0-.649-.648m-1.398 8.987l-2.884-3.403l-3.009 2.545L5.955 8.57l-2.862 3.477H1.847l3.189-4.353l-3.07-2.6l-.029-1.281l7.076 5.531l7.049-5.62v1.37l-3.017 2.6l3.124 4.338z"></svg:path>`,
})
export class SiGlyphMailIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailBoxIcon],svg[si-glyph-mail-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.51.053a1.47 1.47 0 0 0-1.498 1.442q-.001.174.035.336L12.99 2.893C12.941.986 11.521.025 9.969.025c-1.283 0-2.926 1.128-2.926 3.133c0 .812.041 3.78.041 3.78h.988v3.567L4.578 6.938h1.379l-.039-3.864C5.918 1.153 6.834.025 8 .025H4c-1.906 0-3 1.034-3 3.038v3.875h2.41l4.662 4.732V16h1.846V6.938H13V4.184l1.535-1.541c.248.211.562.348.914.354a1.47 1.47 0 0 0 1.498-1.441A1.47 1.47 0 0 0 15.51.053m-4.467 3.114H8.918V2.001h2.125z"></svg:path>`,
})
export class SiGlyphMailBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailEmptyIcon],svg[si-glyph-mail-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.263 5.806L8.996.063L1.689 5.806c-.358 0-.648.3-.648.667v8.857c0 .367.29.667.648.667h14.573c.358 0 .648-.3.648-.667V6.473a.656.656 0 0 0-.647-.667m-1.279 9.225l-2.826-3.945l-3.162 2.622l-3.134-2.607l-2.878 3.931h-.995L5 10.207L2.045 7.156l.014-.669l6.938-5.228L15.95 6.52v.636L13.014 10.2l3.002 4.817z"></svg:path>`,
})
export class SiGlyphMailEmptyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailHasMailIcon],svg[si-glyph-mail-has-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3.004 0v7l5.027 4l4.924-4V3.031L8 3.026V0zm7.965 8.016h-6V6.969h6zM8.953 5v1h-4V5z"></svg:path><svg:path d="M9 0v1.951h3.848zm6.34 4.963l-2.566-1.896v1.105l2.32 1.986v.654l-3.031 2.789L15.079 14l-1.094.015l-2.59-3.739l-3.394 2.786l-3.262-2.772l-2.707 3.726H.923l3.135-4.414l-3.15-2.82l.015-.69L5.19 2.251L5.174.892L.725 4.964c-.359 0-.707.291-.707.65v8.649c0 .36.348.706.707.706h14.617c.359 0 .65-.346.65-.706V5.614a.654.654 0 0 0-.652-.651"></svg:path></svg:g>`,
})
export class SiGlyphMailHasMailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailInboxIcon],svg[si-glyph-mail-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="M6.031 4.017L9 6.97l2.969-2.953H9.984V1.032H8.047v2.985z"></svg:path><svg:path d="M16.062 7.094v-1.37l-7.048 5.62l-7.076-5.532l.029 1.282l3.07 2.599l-3.189 4.353h1.246l2.862-3.477l3.058 2.619l3.008-2.545l2.884 3.403l1.264-.015l-3.124-4.338z"></svg:path><svg:path fill="currentColor" d="M16.304 5.059h-3.242l-4 4.004l-4.103-4.004H1.701a.65.65 0 0 0-.648.648v8.617a.65.65 0 0 0 .648.648h14.603a.65.65 0 0 0 .649-.648V5.707a.65.65 0 0 0-.649-.648m-1.398 8.987l-2.884-3.403l-3.009 2.545l-3.058-2.618l-2.862 3.477H1.847l3.189-4.353l-3.07-2.6l-.029-1.281l7.076 5.531l7.049-5.62v1.37l-3.017 2.6l3.124 4.338z"></svg:path></svg:g>`,
})
export class SiGlyphMailInboxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMailSendIcon],svg[si-glyph-mail-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="M11.969 3.985L9 1.032L6.031 3.985h1.985V6.97h1.937V3.985z"></svg:path><svg:path d="M16.062 7.094v-1.37l-7.048 5.62l-7.076-5.532l.029 1.282l3.07 2.599l-3.189 4.353h1.246l2.862-3.477l3.058 2.619l3.008-2.545l2.884 3.403l1.264-.015l-3.124-4.338z"></svg:path><svg:path fill="currentColor" d="M16.304 5.059h-5.242v3.004H6.959V5.059H1.701a.65.65 0 0 0-.648.648v8.617a.65.65 0 0 0 .648.648h14.603a.65.65 0 0 0 .649-.648V5.707a.65.65 0 0 0-.649-.648m-1.398 8.987l-2.884-3.403l-3.009 2.545l-3.058-2.618l-2.862 3.477H1.847l3.189-4.353l-3.07-2.6l-.029-1.281l7.076 5.531l7.049-5.62v1.37l-3.017 2.6l3.124 4.338z"></svg:path></svg:g>`,
})
export class SiGlyphMailSendIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMaleIcon],svg[si-glyph-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.875 5.884V.125h-5.762l2.223 2.221l-3.703 3.711a5.4 5.4 0 0 0-3.131-1.002c-3.004 0-5.447 2.452-5.447 5.467c0 3.016 2.443 5.468 5.447 5.468c3.002 0 5.444-2.452 5.444-5.468a5.45 5.45 0 0 0-1.011-3.161l3.702-3.712zM6.464 14.165a3.534 3.534 0 0 1-3.532-3.53a3.535 3.535 0 0 1 3.532-3.529a3.535 3.535 0 0 1 3.532 3.529a3.534 3.534 0 0 1-3.532 3.53"></svg:path>`,
})
export class SiGlyphMaleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphManDoctorIcon],svg[si-glyph-man-doctor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.957 4.121c0-2.457-1.701-4.059-3.492-4.059c-1.794 0-3.457 1.586-3.457 4.059h-.001C5.014 5.779 6.569 8.92 8.483 8.92s3.464-3.141 3.474-4.799m1.542 6.92a2.463 2.463 0 0 0-2.464 2.46a2.463 2.463 0 0 0 4.926 0a2.46 2.46 0 0 0-2.462-2.46m.536 2.981V15h-1.053v-.978h-1.028v-1.033h1.028v-1.026h1.053v1.026h.989v1.033zm-4.637-1.02c0-1.241.545-2.354 1.406-3.109c.461-.406.434-.37.032-.175c-1.158.562-2.726.726-2.726.726s-2.908-.287-3.765-1.439C.24 9.005.116 14.969.116 14.969h9.775a4.16 4.16 0 0 1-.493-1.967"></svg:path>`,
})
export class SiGlyphManDoctorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMap3Icon],svg[si-glyph-map-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.035 13.581l4.962 1.294V3.415l-4.962-1.353zm-5.014 1.384l3.922-1.384V2.062L6.021 3.879zM.042 13.118l4.95 1.847V3.879L.042 2.031z"></svg:path>`,
})
export class SiGlyphMap3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMapSquareIcon],svg[si-glyph-map-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.938 6.234v-3.05l-1.52 1.525zm-5.614-2.859L6.84 6.872l2.057 2.059l3.486-3.497zm2.809 2.832L9.682 9.671l2.076 2.062l3.451-3.465zM.042 10.792l3.883-3.917L1.82 4.771L.083 6.5zM.026 4.91l1.362-1.364l-1.362-1.36zM1.227.007a1.1 1.1 0 0 0-.814.36l2.062 2.068L4.903.007zm4.16 5.401L8.695 2.09L6.609 0h-.015L3.289 3.305zM14.883.062L8.485.054L9.581 1.15l.701-.701l3.537 3.537l2.148-2.155l.023-.659a1.11 1.11 0 0 0-1.107-1.11m-.042 15.879c.616 0 1.113-.5 1.113-1.117l.001-4.515l-5.631 5.632zM.177 14.855c0 .617.497 1.117 1.114 1.116l6.24.001l.806-.842l-3.522-3.535l.768-.731l3.522 3.534l1.169-1.179l-4.896-4.913l-5.202 5.201z"></svg:path>`,
})
export class SiGlyphMapSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMarkSnorkerIcon],svg[si-glyph-mark-snorker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.555 2.037h-9.07c-1.89 0-3.424 1.402-3.424 3.132v1.605c0 1.73.871 3.133 2.761 3.133h1.862c1.439 0 2.67-.501 3.177-1.649c.071-.166.267-.176.335-.018c.5 1.16 1.729 1.667 3.167 1.667h1.854c1.883 0 2.746-1.402 2.746-3.133V5.169c0-1.73-1.527-3.132-3.408-3.132m2.49 4.919c0 1.157-.293 2.097-1.512 2.097h-1.971c-1.049 0-1.959-.395-2.167-1.368c0 0-.201-.647-1.391-.647c-1.188 0-1.354.644-1.354.644c-.209.978-1.131 1.372-2.186 1.372H3.488c-1.23 0-1.529-.939-1.529-2.097v-1.86c0-1.155 1-2.096 2.231-2.096h9.641c1.221 0 2.213.94 2.213 2.096v1.859z"></svg:path><svg:path d="M12.743 7.98h1.36l.705-3.488a2.27 2.27 0 0 0-1.275-.415zm-.579 3.213l-.543 2.481c-.105.525-.857.92-1.375.815c-.504-.102-.949-.418-.869-.927c.929-.28 1.603-1.07 1.591-2.001c-.004-.308-.282-.554-.624-.55c-.34.004-.614.257-.609.565c.006.537-.473.98-1.066.986c-.595.008-1.084-.423-1.091-.961c-.004-.307-.283-.553-.623-.549c-.342.004-.613.258-.61.564c.012.949.73 1.735 1.695 1.977c-.06 1.131.83 1.945 1.957 2.172c1.238.25 2.68-.574 2.932-1.83l.596-2.738a210 210 0 0 1-1.361-.004M15.643.889a.713.713 0 0 0-.553-.843a.715.715 0 0 0-.836.563l-.213 1.178c.492.043.953.174 1.367.38z"></svg:path></svg:g>`,
})
export class SiGlyphMarkSnorkerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMask1Icon],svg[si-glyph-mask-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.435 4.102c-1.33-.415-3.647 1.139-5.439 1.139c-1.801 0-4.127-1.552-5.461-1.133c-1.924.605-2.502-.597-2.502.48c0 0-.193 6.048 3.346 6.886c2 .286 3.445 1.495 4.617 1.495c1.192 0 2.189-1.079 4.667-1.505c3.214-.439 3.298-6.876 3.298-6.876c0-1.082-.59.118-2.526-.486M12.83 8.525c-.854.295-1.686.339-2.256.165c-.354-.108-.615.073-.806.148c-.189.075-.189-1.3.599-1.952c.39-.325.553-.427 1.193-.648c1.385-.477 3.386.254 3.386.254s-.734 1.557-2.116 2.033M3.017 6.492s2.001-.73 3.386-.254c.642.222.805.323 1.193.648c.789.652.789 2.027.6 1.952s-.452-.257-.805-.148c-.572.174-1.403.13-2.258-.165c-1.382-.476-2.116-2.033-2.116-2.033"></svg:path>`,
})
export class SiGlyphMask1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMask2Icon],svg[si-glyph-mask-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.836 2.867c.115-.773.125-1.334.125-1.334c0-1.036-.588.112-2.527-.466c-1.33-.397-3.65 1.09-5.443 1.09c-1.802 0-4.129-1.483-5.465-1.084c-1.924.58-2.503-.572-2.503.46c0 0-.19 5.63 3.353 6.433c2.002.273 3.443-1.057 4.615-1.057c1.194 0 2.195 1.454 4.676 1.047c.69-.091 1.226-.925 1.658-1.38l1.257 9.382zM7.081 5.208c-.153-.06-.364-.202-.647-.117c-.458.136-1.128.102-1.815-.129c-1.112-.372-1.702-2.043-1.702-2.043s1.61-.116 2.723.255c.516.175.648.255.96.507c.632.509.634 1.586.481 1.527m4.357-1.535c.313-.252.444-.332.96-.507c1.112-.371 2.723-.255 2.723-.255s-.59 1.671-1.703 2.043c-.686.23-1.355.265-1.813.129c-.283-.085-.494.058-.647.117s-.152-1.017.48-1.527"></svg:path>`,
})
export class SiGlyphMask2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMedalStarIcon],svg[si-glyph-medal-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m8.007 5.996l1.071 3.02h3.54L9.74 11.318l1.094 3.489l-2.865-2.157l-2.864 2.157l1.094-3.489l-2.85-2.302h3.54z"></svg:path><svg:path d="m8.007 1.947l2.276 6.039H11.5l.469-6.619S12.151.041 10.768.041H5.252c-1.361 0-1.235 1.305-1.235 1.305l.488 6.641h1.229z"></svg:path></svg:g>`,
})
export class SiGlyphMedalStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMicrophone1Icon],svg[si-glyph-microphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m16.608 13.715l-5.567-6.416c-.488 1.203-1.523 2.176-2.705 2.723l6.416 5.525a1.323 1.323 0 0 0 1.856 0a1.28 1.28 0 0 0 0-1.832M8.736 1.49c-.42 1.39-1.244 2.744-2.389 3.89c-1.14 1.14-2.51 1.96-3.891 2.38a4.46 4.46 0 0 0 3.012 1.178c2.469 0 4.469-1.986 4.469-4.438a4.4 4.4 0 0 0-1.201-3.01"></svg:path><svg:path d="M7.877.771A4.46 4.46 0 0 0 5.469.062C3 .062 1 2.048 1 4.5c0 .897.273 1.729.733 2.428c1.364-.314 2.759-1.106 3.907-2.255C6.79 3.523 7.56 2.15 7.877.771"></svg:path></svg:g>`,
})
export class SiGlyphMicrophone1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMicrophone2Icon],svg[si-glyph-microphone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m13.984 7.031l-.04-2.007h-.936l.04 4.629c0 1.928-1.988 3.409-4.529 3.409s-4.535-1.481-4.535-3.409V5.031H3.01v1.985h-.995v.922h.995v2.111c0 1.698 1.741 3.25 3.989 3.75V16h2.979v-2.188c2.275-.485 4.005-2.048 4.005-3.762V7.953h1v-.922z"></svg:path><svg:path d="M8.495 10.953c1.914 0 3.468-.869 3.468-1.94V7.016H5.025v1.997c0 1.071 1.554 1.94 3.47 1.94m3.484-7.525C11.979 2.086 10.421 1 8.5 1S5.021 2.086 5.021 3.428V5.99h6.957z"></svg:path></svg:g>`,
})
export class SiGlyphMicrophone2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMicroscopeIcon],svg[si-glyph-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m11.425 3.096l.408-1.001l-.431-.176l.614-1.509l-.883-.358l-.615 1.507l-.396-.162L8.09 6.386l1.709.696l1.123-2.754c1.349.623 2.289 1.692 2.618 3.013c.549 2.208-.786 4.518-3.085 5.684H3.862c-.502 0-.908.348-.908.777l-.906 1.379c0 .43.405.777.906.777h9.072c.502 0 .908-.348.908-.777v-1.379c0-.246-.142-.456-.35-.598c1.854-1.58 2.792-3.914 2.228-6.181c-.427-1.711-1.669-3.136-3.387-3.927"></svg:path><svg:path d="m8.223 6.759l1.748.711l-.238.584l-1.747-.712z"></svg:path></svg:g>`,
})
export class SiGlyphMicroscopeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMobileIcon],svg[si-glyph-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.939 2.042V.047l-.893.011l-.005 15.88h6.916V2.022zm1.088 9.979H6.984v-1.053h1.043zm0-2H6.968V8.984h1.059zm1.973 2H8.998v-1.068H10zm.016-2H8.998V8.968h1.018zm2 2h-1.042v-1.068h1.042zm-3.989 2H6.968v-1.053h1.059zm1.989 0H8.998v-1.068h1.018zm2.015 0h-1.089v-1.068h1.089zm0-4h-1.073V8.953h1.073zm.031-2H6.954V3.953h5.108z"></svg:path>`,
})
export class SiGlyphMobileIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoculeIcon],svg[si-glyph-mocule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 9.935V6.086c-.043.027-.076.068-.117.099L14.69 3.956c.165-.287.267-.615.267-.97a1.954 1.954 0 1 0-3.908 0c0 .363.104.699.278.991l-2.336 2.3a1.96 1.96 0 0 0-.963-.26c-.375 0-.723.11-1.021.292L4.722 3.987c.16-.284.261-.608.261-.958c0-1.087-.89-1.968-1.985-1.968a1.976 1.976 0 0 0-1.986 1.968a1.977 1.977 0 0 0 3.014 1.677l2.289 2.325a1.93 1.93 0 0 0-.259.958c0 .36.104.694.273.985l-2.354 2.318a2 2 0 0 0-.963-.257c-1.088 0-1.971.868-1.971 1.94s.883 1.94 1.971 1.94s1.97-.868 1.97-1.94c0-.364-.108-.701-.285-.992l2.337-2.301c.293.172.63.277.994.277c.359 0 .691-.104.981-.271l2.308 2.344a1.9 1.9 0 0 0-.271.968c0 1.071.874 1.938 1.954 1.938A1.946 1.946 0 0 0 14.954 13a1.9 1.9 0 0 0-.284-.992l2.205-2.182c.043.035.079.079.125.109m-4.973 1.395L9.72 8.987c.173-.294.279-.632.279-.998c0-.374-.109-.72-.291-1.018l2.33-2.293c.285.163.611.264.963.264c.36 0 .693-.104.984-.275l2.262 2.297a2.4 2.4 0 0 0-.244 1.046c0 .379.093.727.24 1.036l-2.297 2.271a1.95 1.95 0 0 0-.947-.253c-.355 0-.685.102-.972.266"></svg:path>`,
})
export class SiGlyphMoculeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoneyIcon],svg[si-glyph-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.979 10.596c0-1.695-1.358-3.104-3.011-3.381V3.828c.504.156 1.025.195 1.235.67c.19.428.671.611 1.072.41c.403-.202.573-.714.384-1.143c-.473-1.066-1.542-1.494-2.676-1.688V0H8v2.066c-1.664.251-2.995 1.67-2.995 3.383c0 1.71 1.324 3.127 2.995 3.383v3.41c-.536-.148-1.033-.198-1.252-.695c-.188-.43-.668-.613-1.068-.412c-.404.201-.576.711-.388 1.141c.481 1.09 1.554 1.531 2.724 1.711V16h.938v-2.021c1.646-.272 3.025-1.685 3.025-3.383M6.617 5.449c0-.774.598-1.424 1.413-1.633v3.269c-.815-.211-1.413-.86-1.413-1.636m2.344 6.774V8.969c.815.225 1.41.865 1.41 1.627s-.595 1.402-1.41 1.627"></svg:path>`,
})
export class SiGlyphMoneyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoney3Icon],svg[si-glyph-money-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.345 14.947H1.655c-.9 0-1.634-.703-1.634-1.57V5.616c0-.864.733-1.571 1.634-1.571h10.69c.901 0 1.635.707 1.635 1.571v7.761c-.001.867-.734 1.57-1.635 1.57M.995 6.414v6.211l1.369 1.432h9.33l1.327-1.385V6.46l-1.327-1.524h-9.33z"></svg:path><svg:path d="M14.248 2.033H3.047l-.004.936h10.213l1.775 1.814v6.154l.896-.016V3.663c0-.87-.766-1.614-1.679-1.63M2 9h.953v.984H2zm9 0h.984v.953H11zM5 8h.969v.969H5zm4 2h.984v.969H9z"></svg:path><svg:path d="M8 6.016h-.969v1.015H6v.938h1.031v1.062H6v.938h1.031v1.062H6v.938h1.031v1H8v-1h.984v-.938H8V9.969h.984v-.938H8V7.969h.984v-.938H8z"></svg:path></svg:g>`,
})
export class SiGlyphMoney3Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoneyBagIcon],svg[si-glyph-money-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9 11h.922v1.959H9zM7 8h.938v1.974H7z"></svg:path><svg:path d="M9.296 4.779c.858-1 1.47-3.257 1.47-4.074c0-1.726-1.029.44-2.298.44c-1.271 0-2.298-2.188-2.298-.44c0 .831.629 3.148 1.512 4.123c-2.608.74-4.664 4.494-4.664 7.794c0 2.918 2.455 3.364 5.482 3.364s5.481-.486 5.481-3.364c0-3.006-2.004-7.201-4.685-7.843m1.735 8.268h-1v.984h-1v1.031H7.969v-1.031h-1v-.984l.013-.016H5.969v-1.062h1.047v1.02l.016-.02h.938v-1.938H7v-.984H5.953V7.985H7V6.969h.969V5.938h1.062v1.031h1v1h.984v1.062H9.968V8.01l-.016.006H9.03v1.953h1.016v1.016h.984v2.062z"></svg:path></svg:g>`,
})
export class SiGlyphMoneyBagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoneyCoinIcon],svg[si-glyph-money-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="12.473" cy="5.973" rx="3.473" ry="1.973"></svg:ellipse><svg:path d="M12.525 9.081c-2.484 0-3.473-1.041-3.473-1.644v2.583c0 1.09 1.555 1.972 3.473 1.972c1.92 0 3.475-.882 3.475-1.972V7.499c0 .604-.99 1.582-3.475 1.582"></svg:path><svg:path d="M12.525 13.072c-2.222 0-3.473-1.001-3.473-1.604v2.559c0 1.09 1.555 1.973 3.473 1.973c1.92 0 3.475-.883 3.475-1.973v-2.59c0 .603-1.252 1.635-3.475 1.635"></svg:path><svg:ellipse cx="3.937" cy="1.973" rx="3.937" ry="1.973"></svg:ellipse><svg:path d="M4.062 5.081C1.247 5.081.125 4.04.125 3.437V6.02c0 1.09 1.763 1.972 3.937 1.972C6.238 7.992 8 7.11 8 6.02V3.499c0 .604-1.123 1.582-3.938 1.582"></svg:path><svg:path d="M4.062 9.072C1.543 9.072.125 8.071.125 7.468v2.559C.125 11.117 1.888 12 4.062 12C6.238 12 8 11.117 8 10.027v-2.59c0 .603-1.42 1.635-3.938 1.635"></svg:path><svg:path d="M4.062 13.072c-2.519 0-3.937-1.001-3.937-1.604v2.559C.125 15.117 1.888 16 4.062 16C6.238 16 8 15.117 8 14.027v-2.59c0 .603-1.42 1.635-3.938 1.635"></svg:path></svg:g>`,
})
export class SiGlyphMoneyCoinIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoonStarIcon],svg[si-glyph-moon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.705 13.274A6.888 6.888 0 0 1 6.334 1.065C2.748 1.892.072 5.099.072 8.936a8.084 8.084 0 0 0 8.084 8.085c3.838 0 7.043-2.676 7.871-6.263a6.87 6.87 0 0 1-5.322 2.516"></svg:path><svg:path d="m12.719 1.021l1.025 2.203l2.293.352l-1.658 1.715l.391 2.42l-2.051-1.143l-2.051 1.143l.391-2.42l-1.661-1.715l2.294-.352z"></svg:path></svg:g>`,
})
export class SiGlyphMoonStarIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMotobikeIcon],svg[si-glyph-motobike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.031 8.958h2.927c0-1.122-.657-1.166-1.464-1.166c-.808 0-1.463.044-1.463 1.166"></svg:path><svg:path d="M10.617 1.042C10.179.448 9.397 0 8.496 0c-.902 0-1.684.448-2.119 1.042H4.022v.916h.021v.003h2.04C5.154 2.525 4 2.886 4 4.433s.744 1.498 1.016 1.9v5.28c0 1.515 1.047 2.053 2.047 2.246v.635c0 .428.483 1.506 1.445 1.506c.955 0 1.469-1.078 1.469-1.506v-.642c.988-.199 2.008-.744 2.008-2.239V6.209c.25-.407.995-.271.995-1.896s-1.215-1.816-2.099-2.354h2.099v-.916zM8.496.958c.864 0 1.563.695 1.563 1.553c0 .856-.699 1.552-1.563 1.552a1.556 1.556 0 0 1-1.562-1.552c0-.858.698-1.553 1.562-1.553m2.534 10.699c0 .576-.229.977-1.03 1.175v-2.816H7.039v2.816c-.833-.208-1.07-.633-1.07-1.219V7.304c.693.434 1.584.689 2.555.675c.959-.015 1.831-.29 2.507-.733z"></svg:path></svg:g>`,
})
export class SiGlyphMotobikeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMountainIcon],svg[si-glyph-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.012 1.062L4.035 8.87L2.709 7.569S-.305 14 .063 14h15.902v-.002l-3.338-7.1l-.983.612zM5.611 7.521L8.062 2.77l2.285 4.081l-.986.67l-1.34-1.288z"></svg:path>`,
})
export class SiGlyphMountainIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMoviePlayIcon],svg[si-glyph-movie-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 15h15l-.083-14H1zM11 2h1v1h-1zm3 2v8H3V4zM8 2h1v1H8zM5 2h1v1H5zM2 2h1v1H2zm.979 12h-1v-1h1zM6 14H5v-1h1zm3 0H8v-1h1zm3 0h-1v-1h1zm3 0h-1v-1h1zm0-11h-1V2h1z"></svg:path><svg:path d="M7.003 9.865L7 6l3.949 2.015z"></svg:path></svg:g>`,
})
export class SiGlyphMoviePlayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMovieProjectorIcon],svg[si-glyph-movie-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.443 9.06l-1.441.944v2.989l1.441.944c.287 0 .521-.359.521-.799V9.86c0-.441-.234-.8-.521-.8M9.986 5.975a2.976 2.976 0 0 0 2.967-2.983A2.976 2.976 0 0 0 9.986.008a2.976 2.976 0 0 0-2.969 2.984a2.977 2.977 0 0 0 2.969 2.983m0-5.003c1.108 0 2.006.905 2.006 2.02c0 1.116-.897 2.02-2.006 2.02a2.013 2.013 0 0 1-2.009-2.02A2.015 2.015 0 0 1 9.986.972M3.508 5.987a2.477 2.477 0 1 0 0-4.949a2.477 2.477 0 0 0 0 4.949m0-3.976a1.502 1.502 0 1 1 0 3.004a1.502 1.502 0 0 1 0-3.004m9.041 5.048H2.414C1.633 7.059 1 7.715 1 8.524v6.013c0 .809.633 1.464 1.414 1.464h10.135c.781 0 1.415-.655 1.415-1.464V8.525c0-.81-.634-1.466-1.415-1.466"></svg:path>`,
})
export class SiGlyphMovieProjectorIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMultifunctionKnifeIcon],svg[si-glyph-multifunction-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="M11.812 9.886c.551.095.998 2.334 1.808 1.267c.979-1.293 1.683-2.64 2.206-4.46c.958-3.324-3.986-.657-2.273-.827c1.338-.133-.314 3.588-1.68 3.071"></svg:path><svg:path fill="currentColor" d="M9.381 1.198c-.07-.136-.348-.256-.521.08c-.405.786-1.002 1.469-.735 4.753L11.969 10s.074-3.674-2.588-8.802m2.739 10.178L6.81 5.791a2 2 0 0 1-.224.012c-1.28 0-2.319-1.087-2.319-2.426q0-.117.012-.234l-.916-.958c-.566-.592-1.436-.53-1.828-.093L.137 3.533c-.371.371-.263 1.486.136 1.884l8.757 9.191c.566.593 1.567.508 2.235-.191l.671-.704c.668-.697.751-1.745.184-2.337m-1.749 2.322a.77.77 0 0 1-.76-.779a.77.77 0 0 1 .76-.781c.424 0 .764.35.764.781a.77.77 0 0 1-.764.779"></svg:path><svg:path stroke="currentColor" d="M9.126 13.521H7.457c-1.206 0-1-1-1.999-1s-1.17 2-2.001 2s-1.044-2-2-2s-.998 1-.998 1"></svg:path></svg:g>`,
})
export class SiGlyphMultifunctionKnifeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMushroomsIcon],svg[si-glyph-mushrooms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.002 1C4.149 1 1.025 4.446 1.025 7.115c0 2.666 3.124 2.869 6.977 2.869s6.978-.203 6.978-2.869C14.979 4.446 11.855 1 8.002 1m-.08 10.169c-1.047 0-2.032-.019-2.892-.115l-.005.259c0 3.142-3.579 5.688 2.945 5.688c6.525 0 2.947-2.546 2.947-5.688q0-.137-.004-.273c-.884.107-1.903.129-2.991.129"></svg:path>`,
})
export class SiGlyphMushroomsIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMusicIcon],svg[si-glyph-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.942.751L6.035.042v11.097a4.2 4.2 0 0 0-1.924.299c-1.594.651-2.422 2.217-1.965 3.312c.458 1.098 2.029 1.604 3.621.953c1.224-.5 2.073-1.451 2.184-2.362l-.008-9.817c2.627.798 4.52 1.673 4.52 4.284c0 .927 1.52 1.823 1.52-1.812c-.001-3.092-2.653-4.962-6.041-5.245"></svg:path>`,
})
export class SiGlyphMusicIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMusicNoteIcon],svg[si-glyph-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.021 2.188v9.174a4.1 4.1 0 0 0-1.792.301c-1.605.649-2.533 2.066-2.074 3.162c.465 1.099 2.139 1.459 3.743.809c1.233-.5 1.958-1.45 2.067-2.362l-.007-8.885l7.062-1.359v6.378a4.1 4.1 0 0 0-1.944.297c-1.605.65-2.532 2.067-2.072 3.163c.463 1.098 2.137 1.459 3.742.809c1.233-.501 2.09-1.451 2.201-2.362L16.958.002z"></svg:path>`,
})
export class SiGlyphMusicNoteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphMustacheIcon],svg[si-glyph-mustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.907 7.514c-1.561 1.638-2.747 1.19-4.694-.629c-1.611-1.503-2.934-.58-3.254.715c-.324-1.297-1.648-2.218-3.258-.712c-1.943 1.821-3.129 2.271-4.691.636c-.155 1.646 1.514 3.188 3.725 3.441c2.049.234 3.846-.719 4.225-2.168c.383 1.451 2.179 2.401 4.229 2.163c2.209-.257 3.875-1.799 3.718-3.446"></svg:path>`,
})
export class SiGlyphMustacheIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNetworkIcon],svg[si-glyph-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.783 10.094c-1.699.998-3.766 1.684-5.678 1.95a1.66 1.66 0 0 1-.684.934c.512 1.093 1.249 2.087 2.139 2.987a7.98 7.98 0 0 0 6.702-3.074l.083-.119c-.244-.914-.648-1.784-1.145-2.644q-.134.038-.261.062c-.143.04-.291.068-.446.068a1.7 1.7 0 0 1-.71-.164M9.051 5.492a18 18 0 0 0-2.004-1.256a1.67 1.67 0 0 1-1.907.985c-.407 1.535-.624 3.162-.511 4.694a1.67 1.67 0 0 1 1.52 1.354c1.695-.279 3.47-.879 4.967-1.738a1.67 1.67 0 0 1-.297-.949c0-.413.156-.786.403-1.078c-.654-.736-1.389-1.443-2.171-2.012M4 9.989c-.137-1.634.104-3.392.541-5.032a1.67 1.67 0 0 1-.713-1.369c0-.197.039-.386.104-.562a18 18 0 0 0-1.974-.247c-.089.104-.185.204-.269.314a7.98 7.98 0 0 0-1.23 7.547a9.5 9.5 0 0 0 2.397.666A1.67 1.67 0 0 1 4 9.989m9.928-.3c-.029.037-.064.067-.096.1c.433.736.799 1.482 1.053 2.268a7.98 7.98 0 0 0 .832-6.122c-.09.133-.176.267-.271.396c-.436.601-.875 1.217-1.354 1.772c.045.152.076.311.076.479v.004c.084.374.013.779-.24 1.103M7.164 3.447c.799.414 1.584.898 2.33 1.44c.84.611 1.627 1.373 2.324 2.164c.207-.092.434-.145.676-.145c.5 0 .945.225 1.252.572c.404-.492.783-1.022 1.161-1.54c.194-.268.372-.543.544-.82A7.96 7.96 0 0 0 7.701.012q-.173.217-.339.439c-.401.552-.739 1.08-1.04 1.637c.039.029.064.066.1.1c.417.276.697.734.742 1.259m-4.285 8.518a10 10 0 0 1-2.07-.487a7.95 7.95 0 0 0 5.806 4.397a11 11 0 0 1-1.753-2.66a1.675 1.675 0 0 1-1.983-1.25m1.635-9.723a1.32 1.32 0 0 1 1.199-.416C6.025 1.24 6.377.683 6.794.104a7.97 7.97 0 0 0-4.247 2.062c.59.066 1.176.14 1.761.252q.096-.095.206-.176"></svg:path>`,
})
export class SiGlyphNetworkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNetwork2Icon],svg[si-glyph-network-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.494 15.958C4.361 15.958 1 12.622 1 8.52s3.361-7.438 7.494-7.438s7.495 3.336 7.495 7.438s-3.362 7.438-7.495 7.438m.016-14.02A6.58 6.58 0 0 0 1.938 8.51a6.58 6.58 0 0 0 6.572 6.573a6.58 6.58 0 0 0 6.573-6.573A6.58 6.58 0 0 0 8.51 1.938"></svg:path><svg:path d="M8 2h.922v14.084H8z"></svg:path><svg:path d="M1 8h13.96v.922H1zm1-3h12.406v.906H2zm0 6h12.406v.922H2z"></svg:path><svg:path d="M8.317 15.854c-2.597-1.273-4.274-4.192-4.274-7.437c0-3.17 1.623-6.062 4.138-7.367l.461.887c-2.187 1.137-3.599 3.68-3.599 6.48c0 2.865 1.459 5.432 3.714 6.538z"></svg:path><svg:path d="m8.74 15.789l-.469-.883c2.139-1.134 3.521-3.681 3.521-6.489c0-2.775-1.359-5.31-3.46-6.457l.479-.877c2.418 1.318 3.981 4.197 3.981 7.334c.001 3.175-1.591 6.068-4.052 7.372"></svg:path></svg:g>`,
})
export class SiGlyphNetwork2Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNewspaperIcon],svg[si-glyph-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.031 2.046v9.788c0 .386-1.062.389-1.062.016V6.063H1.022v6.918c-.004.104.031.991.979.991l14-.012s.973-.049.973-.96V2zm4.011 8.016h-2.07V6.937h2.07zM15 8H9V6.958h6zm0 2.083H8.981V8.939l6.019.02zm0 1.955H5.987v-1.08H15zm0-5.997H6V3.937h9z"></svg:path>`,
})
export class SiGlyphNewspaperIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNoDogIcon],svg[si-glyph-no-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m13.125 5.149l-.342-1.128l-2.163 2.138l1.081 1.127l2.294.493l.97-.712zm-3.061 1.926H5.451c-.018 0-2.242-.952-2.576-1.096v.444l1.502 1.372c-.195.241-.332.503-.332.704v3.417l1.378.104v-1.207l1.878-.95h2.342l.469 2.054h.88V8.015z"></svg:path><svg:path d="M9.01 15.958c-4.405 0-7.989-3.565-7.989-7.948S4.605.063 9.01.063s7.989 3.564 7.989 7.947s-3.584 7.948-7.989 7.948M8.979 1.073c-3.902 0-7.077 3.135-7.077 6.989s3.175 6.989 7.077 6.989s7.077-3.136 7.077-6.989c0-3.854-3.175-6.989-7.077-6.989"></svg:path><svg:path d="m11.157 1.314l1.207.58l-6.348 13.213l-1.207-.58z"></svg:path></svg:g>`,
})
export class SiGlyphNoDogIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNoSmokeIcon],svg[si-glyph-no-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4 8h1.973v.965H4zm3 0h5.938v.923H7zm5.816-2.037c-.359-.27-.693-.332-1.094-.448c-.885-.256-1.281-1.3-1.322-2.114c-.117.546-.06 1.098.015 1.459c.11.542.414 1.051.903 1.324c.412.227.958.246 1.398.472c.426.217.78.509.907.692c.001 0-.229-.95-.807-1.385"></svg:path><svg:path d="M8.995.067c-4.392 0-7.964 3.563-7.964 7.946c0 4.381 3.572 7.944 7.964 7.944c4.39 0 7.963-3.563 7.963-7.944S13.385.067 8.995.067m7.111 8.023a7.1 7.1 0 0 1-1.601 4.496L4.467 2.534A7.12 7.12 0 0 1 8.955.943c3.943 0 7.151 3.205 7.151 7.147M1.967 7.986c0-1.72.615-3.3 1.635-4.528l9.961 9.993a7.04 7.04 0 0 1-4.512 1.628c-3.907 0-7.084-3.183-7.084-7.093"></svg:path></svg:g>`,
})
export class SiGlyphNoSmokeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNoteIcon],svg[si-glyph-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.938 0H3a2 2 0 0 0-2 2v2h16l-.062-2a2 2 0 0 0-2-2M1 8h4v2H1zm0 3h4v2H1zm4 5v-2H1c.066 1.045.927 2 1.987 2zM1 5h4v2H1zm5 0v2h11l-.062-2zm0 6v2h11l-.062-2zm8.938 5C16 16 16.935 15.045 17 14H6v2zM6 8v2h11l-.062-2z"></svg:path>`,
})
export class SiGlyphNoteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphNote2Icon],svg[si-glyph-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.016 0v1.031h-1.062V0h-.895v1.031h-1.09V0h-.953v1.031H9.954V0h-.922v1.031H7.941V0h-.925v1.031H5.985V0h-.942v1.031H3.959V0H3v16h12.954V0zM5 6.958h9v1H5zm9 5H5v-1h9zM14 10H5V9h9z"></svg:path>`,
})
export class SiGlyphNote2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphOldPhoneIcon],svg[si-glyph-old-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.936 8.888C13.936 6.714 10.752 6 10.752 6c-.324 0-.748-.002-1.752 0V4.958l.993.013V3.083H9v1H6v-1H5v1.888l1.042-.013V6H4.176S.999 6.637.999 8.879s-.944 5.779-.944 5.779s.736.048.736 1.31h13.333c0-1.208.858-1.315.858-1.315s-1.046-3.591-1.046-5.765m-6.415 6.195a3.605 3.605 0 1 1 .001-7.21a3.605 3.605 0 0 1-.001 7.21"></svg:path><svg:path d="M1.273 4.879h1.305s1.266.17 1.305-.818H.049c0 .925 1.224.818 1.224.818M4 2.291C4 1.951 4.82 2 5.165 2h4.714c.342 0 1.136.049 1.136.389v.503h3.947c0-.01.002.008.002 0c0-2.938-5.77-2.841-7.793-2.841C5.15.051.027-.023.027 2.917H4c.002-.021 0-.812 0-.626m8.441 2.588h1.283s1.222.192 1.237-.818h-3.825c.048.88 1.305.818 1.305.818M8 11h2v.964H8z"></svg:path><svg:ellipse cx="7.477" cy="11.492" rx="1.477" ry="1.492"></svg:ellipse></svg:g>`,
})
export class SiGlyphOldPhoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphOpenIcon],svg[si-glyph-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M6.969 7h-1v2.031h1v-.062H7V7z"></svg:path><svg:path fill="currentColor" d="M5.969 7h1v-.979L5.031 6v5.958h.938v-2.02h1v-.907h-1zM7 7h1v1.969H7z"></svg:path><svg:path d="M2.984 7.016v-.021H1v.021H.984v3.937H1v.078h1.984v-.078H3V7.016z"></svg:path><svg:path fill="currentColor" d="M3 7h.947v3.938H3zM1 6h1.984v.943H1zm0 5h1.984v.953H1zM0 7h.949v3.938H0zm15.031-.969V7.5l-1.062-.875v-.594h-.953v5.938h.953V8.031l1.062.875v3.063h.922V6.031zm-4.947-.005H9.016v5.963h1.068v-.02h1.885v-.938H9.953V8.969h2.016v-.938H9.953V6.953h2.016v-.906h-1.885z"></svg:path></svg:g>`,
})
export class SiGlyphOpenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPalletteIcon],svg[si-glyph-pallette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.229 8.398c-1.439-1.932 5.643-7.369.205-7.369c-4.611 0-8.351 3.488-8.351 7.792c0 8.073 8.494 9.594 10.733 6.874c3.217-3.905-1.236-5.485-2.587-7.297M9.521 5.031a1.562 1.562 0 0 1 0-3.124a1.561 1.561 0 0 1 0 3.124M6.52 8.034a1.54 1.54 0 1 1 0-3.078a1.54 1.54 0 0 1 1.544 1.54A1.54 1.54 0 0 1 6.52 8.034m-.977 4.056a1.57 1.57 0 0 1-1.575-1.57c0-.867.704-1.57 1.575-1.57c.869 0 1.574.703 1.574 1.57c0 .866-.705 1.57-1.574 1.57m2.985 3.087a1.613 1.613 0 0 1-1.606-1.618a1.61 1.61 0 0 1 1.606-1.617a1.61 1.61 0 0 1 1.606 1.617a1.61 1.61 0 0 1-1.606 1.618m3.477-1.96a1.16 1.16 0 0 1-1.161-1.163a1.163 1.163 0 1 1 1.161 1.163"></svg:path>`,
})
export class SiGlyphPalletteIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaperClipIcon],svg[si-glyph-paper-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.346 16C5.009 16 4 14.907 4 13.725V3.998C4 1.634 5.254 0 7.698 0h.67C11.045 0 12 1.56 12 3.998v7.007h-.954V3.998C11.046 2.414 10.409 1 8.367 1h-.685C5.872 1 5 2.318 5 3.998v9.727c0 .738.448 1.274 1.345 1.274h1.338c.852 0 1.379-.488 1.379-1.274V5.756c0-.531-.081-.716-1.119-.765c-1.059.052-.943.271-.943.765v4.254H5.999V5.756c0-1.121.636-1.696 1.944-1.758C9.249 4.058 10 4.616 10 5.756v7.969C10 14.947 8.966 16 7.682 16z"></svg:path>`,
})
export class SiGlyphPaperClipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaperPlaneIcon],svg[si-glyph-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17 1.042l-5.564 13.912l-3.478-3.477l.695 2.086l-1.623 1.395v-3.395l7.954-8.188l-8.937 6.594L1 8.694z"></svg:path>`,
})
export class SiGlyphPaperPlaneIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaperRollIcon],svg[si-glyph-paper-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.967 2C1.783 2 .861 2.524.365 3.476a3.3 3.3 0 0 0-.363 1.421v8.436s1.187-1.345 3.272 0c2.677 1.599 3.579-.771 4.737 0c1.845 1.43 2.915 0 2.915 0s-.013-6.852 0-7.031c.07-1.144.226-2.164.661-2.926c.485-.849 1.148-1.375 1.881-1.375H2.967z"></svg:path><svg:path d="M15.029 3.713c-.297-.409-.643-.65-1.017-.65c-.53 0-1.011.482-1.364 1.26c-.314.696-.526 1.63-.58 2.676v1.004c.112 2.215.938 3.936 1.944 3.936c1.081 0 1.958-1.986 1.958-4.438c.001-1.606-.376-3.009-.941-3.788m-1.016 6.334c-.53 0-.966-.991-1.024-2.264v-.58c.029-.601.14-1.139.305-1.536c.187-.453.439-.729.72-.729c.195 0 .377.137.533.377c.298.446.496 1.256.496 2.179c-.001 1.41-.464 2.553-1.03 2.553"></svg:path></svg:g>`,
})
export class SiGlyphPaperRollIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaperShredderIcon],svg[si-glyph-paper-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.969 3.003H7.985V0H3v6.982h9.969z"></svg:path><svg:path d="M9.111 0v1.938h3.858zM3 13v2.986h.978V13zm2.013 0v3h.974v-3zM7 13v2.998h.998V13zm2 0v2.993h.986V13zm2 0v2.964h.963V13zM0 8.031V12h15.958V8.031zm2.969 2h-1V9h1zm1 0V9h1.062v1.031z"></svg:path></svg:g>`,
})
export class SiGlyphPaperShredderIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPauseIcon],svg[si-glyph-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.002 1c0-.553.444-1 .993-1h3.972c.549 0 .993.447.993 1v14c0 .553-.444 1-.993 1H1.995a.996.996 0 0 1-.993-1zm8 0c0-.553.444-1 .993-1h3.972c.549 0 .993.447.993 1v14c0 .553-.444 1-.993 1H9.995a.996.996 0 0 1-.993-1z"></svg:path>`,
})
export class SiGlyphPauseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPawnIcon],svg[si-glyph-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 16h12l-3-4V5l2-2V0h-1.938v1H9.937V0H8.062v1H5.937V0H4v3l2 2v7zm7-11h1v7h-1z"></svg:path>`,
})
export class SiGlyphPawnIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPaypalIcon],svg[si-glyph-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.875.074H3.639L.965 12.917h3.31l.942-3.019h4.658c2.272 0 4.116-2.035 4.116-4.543v-.907c0-2.509-1.844-4.374-4.116-4.374m.25 5.138c0 1.033-.87 1.87-1.373 1.87l-2.928.012l.832-4.129h2.096c.503 0 1.373.838 1.373 1.871z"></svg:path><svg:path d="M15.113 3.868c0 .77-.052 1.471-.052 2.11c0 3.211-1.308 5.104-4.222 5.104H6.557l-1.571 4.907h2.639l.943-3.021h4.281c2.273 0 4.115-1.721 4.115-4.213v-.902c.001-1.727-.549-3.226-1.851-3.985"></svg:path></svg:g>`,
})
export class SiGlyphPaypalIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPenIcon],svg[si-glyph-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.224-.387l1.869 1.868l-3.035 3.035l-1.87-1.869zM11.252 3.48l1.876 1.876l-7.115 7.115l-1.876-1.876zM1.021 15.957l2.143-4.109l1.877 1.877zm10.534-5.996l-.468-.477l2.965-2.919l-.393-.434l.496-.448l.822.91z"></svg:path>`,
})
export class SiGlyphPenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPenNibIcon],svg[si-glyph-pen-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.723.04l-.785 1.843l4.25 4.25l1.83-.773zM3.357 6.132s.94 4.213-3.294 8.447l.302.302l6.764-6.764a1.5 1.5 0 0 1-.145-.633a1.5 1.5 0 1 1 1.5 1.5c-.235 0-.455-.059-.654-.156l-6.758 6.76l.389.389c4.249-4.248 8.463-3.292 8.463-3.292l2.758-6.054l-3.295-3.295z"></svg:path>`,
})
export class SiGlyphPenNibIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPencilIcon],svg[si-glyph-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.479 2.536L14.474.546c-.539-.537-1.383-.565-1.884-.064L3.47 9.616s-2.312 5.32-2.469 5.75c-.125.34.306.771.604.625c.48-.237 5.74-2.52 5.74-2.52l9.142-9.172c.502-.502.531-1.226-.008-1.763M2.312 13.906l1.721-3.627l-.018.706l.998-.014l9.524-9.442l1.259 1.236l-9.184 8.965l-.227.752l.486.486l-3.811 1.656z"></svg:path>`,
})
export class SiGlyphPencilIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPercentIcon],svg[si-glyph-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.541.068c-1.91 0-3.458 1.77-3.458 3.954s1.548 3.955 3.458 3.955S8 6.206 8 4.022S6.451.068 4.541.068m-.042 5.994c-.892 0-1.615-.938-1.615-2.095c0-1.155.724-2.093 1.615-2.093c.894 0 1.616.938 1.616 2.093c0 1.158-.722 2.095-1.616 2.095m9.025 1.989c-1.901 0-3.441 1.77-3.441 3.954s1.54 3.955 3.441 3.955c1.899 0 3.44-1.771 3.44-3.955s-1.54-3.954-3.44-3.954m-.047 6.043c-.885 0-1.602-.934-1.602-2.089c0-1.153.717-2.088 1.602-2.088s1.602.935 1.602 2.088c-.001 1.155-.718 2.089-1.602 2.089m-8.743 1.898a.7.7 0 0 1-.341-.092a.666.666 0 0 1-.244-.919L12.646.365a.68.68 0 0 1 .594-.339a.7.7 0 0 1 .344.091c.325.188.434.6.243.919L5.331 15.652a.69.69 0 0 1-.597.34"></svg:path>`,
})
export class SiGlyphPercentIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonIcon],svg[si-glyph-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.518 10c-.402.548-.899 1.62-1.479 2.593c-.637 1.074-1.367-1.599-2.166-1.599c-.821 0-1.588 2.624-2.252 1.524c-.572-.947-1.066-1.967-1.456-2.491C1.122 10.027 1 15.914 1 15.914h15.745c0 .001.318-5.914-4.227-5.914m-.623-5.628c0 1.861-1.318 5.422-2.948 5.422C7.319 9.794 6 6.233 6 4.372C6 2.509 7.319 1 8.947 1c1.63-.001 2.948 1.508 2.948 3.372"></svg:path>`,
})
export class SiGlyphPersonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPerson2Icon],svg[si-glyph-person-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.564 10.004c-.847 1.155-3.659 1.45-3.659 1.45s-2.876-.284-3.723-1.426C1.122 10.028 1 15.933 1 15.933h15.808c0 .001.319-5.929-4.244-5.929m-.746-5.984c0 1.669-1.303 4.857-2.908 4.857C7.303 8.877 6 5.689 6 4.02C6 2.353 7.303 1 8.91 1c1.605.001 2.908 1.353 2.908 3.02"></svg:path>`,
})
export class SiGlyphPerson2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonCheckedIcon],svg[si-glyph-person-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.926 4.121c0 1.68-1.309 4.891-2.922 4.891S5.081 5.801 5.081 4.121s1.31-3.04 2.923-3.04s2.922 1.36 2.922 3.04m-1.893 8.675l2.393-2.421l1.279 1.335l1.643-1.662c-.631-.65-1.405-.998-2.669-.998c-.854 1.156-3.689 1.453-3.689 1.453s-2.899-.285-3.753-1.427c-4.093 0-4.217 5.91-4.217 5.91h11.1z"></svg:path><svg:path d="m15.094 10.801l-2.381 2.381l-1.416-1.417l-.925.924l2.342 2.341l3.306-3.304z"></svg:path></svg:g>`,
})
export class SiGlyphPersonCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonDoorManIcon],svg[si-glyph-person-door-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.013 8.966c1.648 0 2.983-2.459 2.983-4.268q0-.359-.07-.695H6.098a3.5 3.5 0 0 0-.07.695c-.001 1.809 1.336 4.268 2.985 4.268M6 1h5.943v1.927H6zm6.042 9.634v5.328h4.93s.316-5.915-4.206-5.915c-.169.233-.434.42-.724.587M5.24 10C1.124 10 1 16 1 16h10v-4.985a11 11 0 0 1-1.986.434S6.1 11.16 5.24 10m4.776 5.031H8.969v-1.094h1.047zm.015-2H8.953v-1.062h1.078z"></svg:path>`,
})
export class SiGlyphPersonDoorManIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonErrorIcon],svg[si-glyph-person-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.972 4.071c0 1.664-1.332 4.846-2.976 4.846c-1.645 0-2.979-3.182-2.979-4.846s1.334-3.013 2.979-3.013c1.644.001 2.976 1.348 2.976 3.013m5.042 6.874l-.996-.996l-1.494 1.493l-1.493-1.493l-.996.996l1.493 1.493l-1.493 1.495l.996.996l1.493-1.495l1.494 1.495l.996-.996l-1.494-1.495zm-7.31-.615l-.708.15s-2.904-.283-3.76-1.416c-4.098 0-4.223 5.865-4.223 5.865h9.345l-.63-.65l1.951-1.963z"></svg:path>`,
})
export class SiGlyphPersonErrorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonManIcon],svg[si-glyph-person-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.918 13.338l-.943 1.62l-.942-1.62l.488-3.296h.908zM6.534 15C4.833 12.746 5.378 9.224 5.21 9C1.123 8.999 1 15 1 15zm5.048 0H17c-.001 0 0-6.031-3.68-6.031c-.164.22-.035 3.759-1.738 6.031M9.008 8.941C7.39 8.941 6 5.732 6 4.064c0-1.67 1.389-3.006 3.008-3.006a3.016 3.016 0 0 1 2.994 3.006c0 1.668-1.374 4.877-2.994 4.877"></svg:path>`,
})
export class SiGlyphPersonManIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonPeopleIcon],svg[si-glyph-person-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.247 11.46c-.646 1.026-1.389-1.53-2.2-1.53c-.834 0-1.612 2.51-2.287 1.459c-.58-.906-1.082-1.881-1.479-2.384c-4.106 0-4.19 5.966-4.19 5.966h15.993s.282-5.992-4.335-5.992c-.408.524-.914 1.551-1.502 2.482z"></svg:path><svg:path d="M7.989 9C6.493 9 5.016 4.831 5.016 3.117C5.016 1.4 6.493.01 7.99.01c1.496 0 2.972 1.39 2.972 3.107c0 1.714-1.476 5.881-2.972 5.881z"></svg:path></svg:g>`,
})
export class SiGlyphPersonPeopleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonPlusIcon],svg[si-glyph-person-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.985 3.044c0 1.671-1.336 4.863-2.983 4.863S5.016 4.715 5.016 3.044c0-1.669 1.338-3.023 2.986-3.023c1.647 0 2.983 1.354 2.983 3.023m4.973 9.977h-1.982v-1.983h-.972v1.983h-1.983v.971h1.983v1.983h.972v-1.983h1.982z"></svg:path><svg:path d="M14.861 9.938c-.663-1.037-1.666-1.908-3.158-1.908c-.854 1.159-3.692 1.456-3.692 1.456S5.108 9.2 4.252 8.056c-4.096 0-4.221 5.923-4.221 5.923h9.906v-1.996h2.031V9.938z"></svg:path></svg:g>`,
})
export class SiGlyphPersonPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonPrisonIcon],svg[si-glyph-person-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.697 16.022H4.38a3.35 3.35 0 0 1-3.341-3.35V3.371A3.35 3.35 0 0 1 4.378.022h9.32a3.35 3.35 0 0 1 3.34 3.349v9.301a3.35 3.35 0 0 1-3.34 3.35zM4.107 1A2.113 2.113 0 0 0 2 3.114v9.77C2 14.05 2.945 15 4.107 15h9.785A2.114 2.114 0 0 0 16 12.884v-9.77A2.113 2.113 0 0 0 13.892 1z"></svg:path><svg:path d="M4 1v13.691h1.04V1zm3 0v13.691h1.019V1zm3 0v13.691h1.038V1zm3 0v13.691h.918V1z"></svg:path><svg:path d="M12.576 11.048c-.399.587-.895 1.459-1.471 2.498c-.632 1.146-1.359-.257-2.154-.257c-.816 0-1.58 1.351-2.24.176c-.568-1.011-1.061-1.826-1.449-2.389c-2.01 0-3.046 1.3-3.578 2.871c-.534 1.573 15.178 1.566 14.691-.013c-.485-1.58-1.537-2.886-3.799-2.886m-.599-4.894c0 1.661-1.323 4.838-2.955 4.838c-1.634 0-2.956-3.177-2.956-4.838c0-1.663 1.322-3.01 2.956-3.01c1.631.001 2.955 1.347 2.955 3.01"></svg:path></svg:g>`,
})
export class SiGlyphPersonPrisonIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonPublicIcon],svg[si-glyph-person-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.855 10.053c-.423.571-1.834.719-1.834.719s-1.441-.142-1.865-.706c-2.035 0-3.098 2.923-3.098 2.923h9.926c0-.001-.838-2.936-3.129-2.936m.088-4.135C9.943 6.977 9.062 9 7.978 9C6.89 9 6.011 6.977 6.011 5.918S6.89 4 7.978 4c1.084 0 1.965.859 1.965 1.918m4.161 2.103c-.371.575-1.527.881-1.527.881s-1.355-.301-1.729-.867c0 0-.012.664-.577 1.436c1.8-.232 2.578 1.503 2.578 1.503l3.131.006c-.001-.001.139-2.959-1.876-2.959m-.114-3.488c0 .848-.662 2.465-1.479 2.465c-.82 0-1.481-1.617-1.481-2.465c0-.846.663-1.533 1.481-1.533c.817 0 1.479.688 1.479 1.533M1.918 8.021c.378.571 1.549.875 1.549.875s1.373-.299 1.748-.861c0 0 .014.66.586 1.426c-1.824-.23-2.61 1.492-2.61 1.492l-3.17.005s-.143-2.937 1.897-2.937m.084-3.455c0 .828.664 2.411 1.479 2.411c.819 0 1.48-1.583 1.48-2.411a1.49 1.49 0 0 0-1.48-1.501a1.49 1.49 0 0 0-1.479 1.501"></svg:path>`,
})
export class SiGlyphPersonPublicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonRemoveIcon],svg[si-glyph-person-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.985 4.044c0 1.671-1.336 4.863-2.983 4.863S5.016 5.715 5.016 4.044c0-1.669 1.338-3.023 2.986-3.023c1.647 0 2.983 1.354 2.983 3.023m-1.047 8.938h5.823c-.447-1.584-1.593-3.953-4.058-3.953c-.854 1.159-3.692 1.456-3.692 1.456s-2.903-.286-3.759-1.43c-4.096 0-4.221 5.923-4.221 5.923h9.906z"></svg:path><svg:path d="M11 14h4.937v.972H11z"></svg:path></svg:g>`,
})
export class SiGlyphPersonRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonTalkIcon],svg[si-glyph-person-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.524 12.285c-.86 0-2.015-.449-2.601-1.186C.114 11.099.029 15 .029 15h10.937c.001 0 .22-3.917-2.937-3.917c-.584.745-1.643 1.202-2.505 1.202m2.414-6.021c0 1.251-1.105 3.643-2.469 3.643S3 7.515 3 6.264C3 5.015 4.104 4 5.469 4s2.469 1.015 2.469 2.264M12.527.041c-1.91 0-3.461 1.158-3.461 2.59c0 1.306 1.294 2.382 2.971 2.561l-.986 1.812l2.756-1.969c1.277-.381 2.182-1.313 2.182-2.404c-.001-1.432-1.55-2.59-3.462-2.59"></svg:path>`,
})
export class SiGlyphPersonTalkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonWomanIcon],svg[si-glyph-person-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.677 11c-2.843 2.147-.724 3.424-3.653 3.424c-2.932 0-.604-1.191-3.76-3.398c-4.908 1.381-4.226 4.884-4.226 4.884h15.875c-.001 0 .651-3.921-4.236-4.91m-.103-4.002l-.575 1.88L13.883 9s-1.153-.85-1.309-2.002m-7.18.025l.538 1.893L4.045 9s1.169-.826 1.349-1.977m6.535-1.977c0 1.68-1.323 4.895-2.954 4.895S6.021 6.726 6.021 5.046C6.021 3.363 7.343 2 8.975 2c1.63.001 2.954 1.364 2.954 3.046"></svg:path>`,
})
export class SiGlyphPersonWomanIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPetCarrierIcon],svg[si-glyph-pet-carrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.504 3.037h-.535V2.022c0-.564-.446-1.022-.995-1.022H7.032c-.549 0-.994.458-.994 1.022v1.015h-.543c-3.682 0-4.494 11.789-4.494 11.789c0 .58.514 1.054 1.147 1.054h13.704c.634 0 1.148-.474 1.148-1.054c0 0-.883-11.789-4.496-11.789m-5.546 7.98V8.934H11v2.083zM11.04 12v2H6.988v-2zm-.009-6.083v2.104H6.958V5.917zm3.661 2.104h-2.755V5.917h2.125c.251.639.459 1.366.63 2.104m-8.661 0H3.285c.165-.729.367-1.473.615-2.104h2.131zm-.01.913v2.083H2.75c.086-.616.196-1.36.346-2.083zm5.958-.031H14.9c.153.731.271 1.489.359 2.113h-3.28zM6.977 2.185c0-.17.148-.309.33-.309H10.7c.182 0 .33.139.33.309v.853H6.977zm-4.46 11.041s.036-.45.133-1.226h3.371v2H3.365c-.469 0-.848-.349-.848-.774M14.629 14H11.98v-2h3.362c.1.768.141 1.233.141 1.233c-.001.422-.385.767-.854.767"></svg:path>`,
})
export class SiGlyphPetCarrierIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPhoneFaxIcon],svg[si-glyph-phone-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3.964 13.945c0 .565-.476 1.023-1.063 1.023h-.807c-.586 0-1.062-.458-1.062-1.023V1.054c0-.564.477-1.023 1.062-1.023h.807c.588 0 1.063.459 1.063 1.023zM15.881 0H6.034A1.03 1.03 0 0 0 5 1.023v12.891c0 .565.463 1.023 1.034 1.023h.924v-2.021H15v2.021h.881c.573 0 1.035-.458 1.035-1.023V1.023C16.916.459 16.454 0 15.881 0M8 12.021H6.969v-1.053H8zm0-2H6.969V8.968H8zm0-2H6.969V6.984H8zm2 4H8.969v-1.053H10zm0-2H8.969V8.953H10zm0-2H8.969V6.968H10zm2 4h-1.031v-1.037H12zm0-2h-1.031V8.984H12zm0-2h-1.031V6.953H12zm3.016.954v1.047h-2.047V8.975zm-2.047-.954V6.959h2.047v1.062zm2.047-3.99H6.969V1.969h8.047z"></svg:path><svg:path d="m13.969 15.969l-.002-1.947H8.018l.002 1.947z"></svg:path></svg:g>`,
})
export class SiGlyphPhoneFaxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPhoneNumberIcon],svg[si-glyph-phone-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.924 3.779C15.924-.037 9.787.09 7.637.09C5.485.09.038.136.038 3.953h3.909l.004-.957c0-.438.479-1.027 1.553-1.027h5.013c1.046 0 1.537.589 1.537 1.027c0 .154.008.927.008.957h3.86zM4.987 9.338a.63.63 0 0 1-.638.617h-.697a.63.63 0 0 1-.639-.617v-.676c0-.341.286-.617.639-.617h.697c.352 0 .638.276.638.617zm7.988.007a.637.637 0 0 1-.639.638h-.696a.637.637 0 0 1-.638-.638v-.697c0-.353.285-.638.638-.638h.696c.354 0 .639.285.639.638zm-3.989.004a.637.637 0 0 1-.638.638H7.65a.637.637 0 0 1-.637-.638v-.697c0-.353.285-.638.637-.638h.698c.353 0 .638.285.638.638zm-4.024 2.987a.633.633 0 0 1-.628.638h-.686a.633.633 0 0 1-.629-.638v-.697c0-.354.281-.639.629-.639h.686c.347 0 .628.285.628.639zm7.981.01a.62.62 0 0 1-.617.628h-.676a.62.62 0 0 1-.617-.628v-.686c0-.349.275-.629.617-.629h.676c.342 0 .617.28.617.629zm-3.961 0a.63.63 0 0 1-.637.628h-.697a.63.63 0 0 1-.638-.628v-.686c0-.349.285-.629.638-.629h.697c.353 0 .637.28.637.629zm-3.989 3.001a.63.63 0 0 1-.638.618h-.697a.63.63 0 0 1-.639-.618v-.676c0-.341.286-.617.639-.617h.697c.352 0 .638.276.638.617zm7.982.01a.64.64 0 0 1-.639.639h-.696a.637.637 0 0 1-.638-.639v-.697c0-.353.285-.638.638-.638h.696c.354 0 .639.285.639.638zm-3.993 0a.63.63 0 0 1-.627.639h-.686a.63.63 0 0 1-.627-.639v-.697c0-.353.279-.638.627-.638h.686c.348 0 .627.285.627.638zM.992 5.973h2.047s.707.228.887-.973H.067c.167 1.113.925.973.925.973M12.115 5c.209 1.053.963.973.963.973h1.891s.758.011.943-.973z"></svg:path>`,
})
export class SiGlyphPhoneNumberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPianoIcon],svg[si-glyph-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3v9h15.986V3zm2 1h2v1H2zm13.083 7.059H.992V7h1.091v2.938h.909V7h1.091v2.938h.909V7h1.091v2.938h.909V7h2.091v2.938h.909V7h1.091v2.938h.909V7h1.091v2.938h.909V7h1.091zM15 5H8V4h7z"></svg:path>`,
})
export class SiGlyphPianoIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPickIcon],svg[si-glyph-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.168 5.921c.009.006 1.877 1.889 1.885 1.896l1.314-1.32c3.855 4.404 2.466 7.059 2.615 6.908c1.901-1.899.89-5.99-2.256-9.136S5.488.112 3.591 2.011c-.148.146 2.5-1.271 6.908 2.593zm4.972-4.317l.88.877l-.946.947l-.879-.877z"></svg:path><svg:path d="M8.873 7.166L.289 15.752a.667.667 0 0 0-.009.943a.67.67 0 0 0 .944-.01l8.584-8.584z"></svg:path></svg:g>`,
})
export class SiGlyphPickIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPictureIcon],svg[si-glyph-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 1)"><svg:path d="m13.842 4l-3.93-2.85a1.495 1.495 0 0 0-2.928.093L2.918 4H.021v9.96h15.938V4zM8.458 3c.556 0 1.034-.305 1.294-.753L11.895 4H5.047l2.166-1.664c.27.4.727.664 1.245.664m3.503 7.085L8.72 11.758l-3.727-4.72L1 13V5h14v8z"></svg:path><svg:circle cx="12.963" cy="6.963" r=".963"></svg:circle></svg:g>`,
})
export class SiGlyphPictureIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPicture2Icon],svg[si-glyph-picture-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0v16h16V0zm14 11H3V2h12z"></svg:path>`,
})
export class SiGlyphPicture2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPictureCopyIcon],svg[si-glyph-picture-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.969.031H5v2.938h1V1h8.027v7.001H11v2.951h3.969z"></svg:path><svg:path d="M0 4v11h10V4zm8.967 8h-8V5h8z"></svg:path></svg:g>`,
})
export class SiGlyphPictureCopyIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPiggyBankIcon],svg[si-glyph-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.041 6.33c0-.528-1.832-.95-1.93-.939c-1.005-1.909-3.206-3.228-5.762-3.358c-2.038-.104-3.416.358-4.387 1a3.6 3.6 0 0 0-1.084.001c-.47.081-.809.258-1.18.581c-.213.185-.59.58-.231.787c.259.15.633-.108.909-.124c.079-.006.152.009.225.022c-.697.907-.963 1.739-1.264 1.739C.054 6.039.04 6.762.04 7.345v1.333c0 .381.481 1.286.67 1.5c1.041 1.181 1.635 2.057 3.36 2.633c.03.663.463 1.189.997 1.189c.418 0 1.179-1.039 2.225-1.039c2.5 0 3.369 1.039 3.797 1.039c1.119 0 .996-1.354.992-1.402c1.957-.939 2.614-2.757 2.614-4.879c0-.15-.013-.297-.025-.444c.777-.076 1.371-.466 1.371-.945M4 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m7.274-2.274c-.432-.386-1.113-.576-1.782-.763c-.67-.186-1.226-.341-1.801-.234c-.744.139-.986-.216-.392-.447c.685-.266 1.605-.4 2.509-.148c.86.238 1.538.791 1.978 1.33c.421.521.04.76-.512.262"></svg:path>`,
})
export class SiGlyphPiggyBankIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPillIcon],svg[si-glyph-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.897 1.731l-.656-.657C13.887-.281 11.745-.341 10.46.944L1.957 9.446c-1.284 1.285-1.224 3.425.133 4.782l.654.654c1.357 1.357 3.498 1.418 4.783.134l8.503-8.505c1.284-1.282 1.224-3.423-.133-4.78m-4.811 8.433L6.841 5.917l4.208-4.208c.945-.944 2.532-.898 3.535.107l.604.601c.49.493.771 1.135.787 1.809a2.33 2.33 0 0 1-.68 1.729z"></svg:path>`,
})
export class SiGlyphPillIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationIcon],svg[si-glyph-pin-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.469.021c-3.016 0-5.46 2.296-5.46 5.13c0 .732.166 1.428.458 2.057l5.002 8.668l5-8.668a4.8 4.8 0 0 0 .459-2.057c0-2.835-2.444-5.13-5.459-5.13m.023 9.021c-1.957 0-3.542-1.596-3.542-3.567c0-1.969 1.585-3.565 3.542-3.565c1.954 0 3.539 1.597 3.539 3.565c0 1.971-1.585 3.567-3.539 3.567"></svg:path><svg:path d="M10.979 5.504A2.485 2.485 0 0 1 8.5 7.996a2.485 2.485 0 0 1-2.477-2.492A2.485 2.485 0 0 1 8.5 3.014a2.485 2.485 0 0 1 2.479 2.49"></svg:path></svg:g>`,
})
export class SiGlyphPinLocationIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocation1Icon],svg[si-glyph-pin-location-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 6h.956v7.944H8z"></svg:path><svg:path d="M8.511.016C6.047.016 4.047 2.024 4.047 4.5c0 2.478 2 4.484 4.464 4.484s4.464-2.007 4.464-4.484S10.977.016 8.511.016m.159 1.626a3.01 3.01 0 0 0-3.018 2.997c0 .662-.648.346-.648-.645A3.01 3.01 0 0 1 8.022.997c.996 0 1.314.645.648.645m1.439 9.514v.926c2.477.248 3.729 1.062 3.729 1.47c0 .509-1.887 1.501-5.344 1.501c-3.459 0-5.346-.992-5.346-1.501c0-.438 1.342-1.181 3.758-1.421v-.927c-2.379.211-4.872.938-4.872 2.36c0 1.598 3.249 2.433 6.46 2.433c3.209 0 6.459-.835 6.459-2.433c0-1.462-2.56-2.203-4.844-2.408"></svg:path></svg:g>`,
})
export class SiGlyphPinLocation1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocation2Icon],svg[si-glyph-pin-location-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 .031c-2.717 0-4.92 2.119-4.92 4.733c0 .675.15 1.317.414 1.898l4.59 7.321l4.422-7.321a4.6 4.6 0 0 0 .412-1.898C12.918 2.15 10.717.031 8 .031m0 8.09a3.09 3.09 0 0 1-3.085-3.098A3.09 3.09 0 0 1 8 1.926a3.093 3.093 0 0 1 3.086 3.097A3.093 3.093 0 0 1 8 8.121m1.977-3.138a1.98 1.98 0 0 1-1.978 1.985a1.98 1.98 0 0 1-1.977-1.985A1.98 1.98 0 0 1 7.999 3c1.092 0 1.978.889 1.978 1.983"></svg:path><svg:path d="M5.299 11.823c-1.717.364-2.43.842-2.43 1.379c0 .769 1.831 1.829 5.116 1.829s5.116-1.06 5.116-1.829c0-.535-.708-.999-2.401-1.379v-.82c1.865.366 3.254 1.101 3.254 2.199c0 1.584-3.076 2.77-5.969 2.77s-5.969-1.186-5.969-2.77c0-1.1 1.398-1.849 3.273-2.202z"></svg:path></svg:g>`,
})
export class SiGlyphPinLocation2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationAddIcon],svg[si-glyph-pin-location-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.475.031c-3.007 0-5.443 2.512-5.443 5.609c0 1.584 5.443 10.275 5.443 10.275s5.441-8.609 5.441-10.275c0-3.097-2.437-5.609-5.441-5.609m2.556 5.985h-2v2H8.969v-2h-2V4.954h2v-2h1.062v2h2z"></svg:path>`,
})
export class SiGlyphPinLocationAddIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationDeleteIcon],svg[si-glyph-pin-location-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.475.031c-3.007 0-5.443 2.512-5.443 5.609c0 1.584 5.443 10.275 5.443 10.275s5.441-8.609 5.441-10.275c0-3.097-2.437-5.609-5.441-5.609m3.474 7.867L9.914 8.932L7.5 6.518L5.086 8.932L4.051 7.898l2.414-2.414L4.051 3.07l1.035-1.035L7.5 4.449l2.414-2.414l1.035 1.035l-2.415 2.414z"></svg:path>`,
})
export class SiGlyphPinLocationDeleteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationLoveIcon],svg[si-glyph-pin-location-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.48 0C5.499 0 3.084 2.516 3.084 5.621c0 1.586 5.396 10.295 5.396 10.295s5.395-8.625 5.395-10.295C13.875 2.516 11.46 0 8.48 0m.029 8.25S5.861 7.015 5.861 4.612c0-.831.602-1.505 1.341-1.505c.637 0 1.166.498 1.305 1.164c.133-.665.661-1.164 1.295-1.164c.732 0 1.326.667 1.326 1.49c-.001 2.448-2.619 3.653-2.619 3.653"></svg:path>`,
})
export class SiGlyphPinLocationLoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationMapIcon],svg[si-glyph-pin-location-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m0 11.438l3.938 1.468V1.062L0-.015zm11.506-3.433c-1.361 0-2.463 1.204-2.463 2.69c0 .384.076.747.207 1.079l2.264 4.152l2.245-4.152c.134-.332.208-.695.208-1.079c0-1.486-1.103-2.69-2.461-2.69m.016 4.041a1.5 1.5 0 1 1-.002-3a1.5 1.5 0 0 1 .002 3"></svg:path><svg:path d="M16 .969L11.031.041v6.854c.156-.02.312-.046.475-.046c1.977 0 3.578 1.541 3.578 3.443c0 .492-.108.956-.301 1.382l-.385.629L16 13zm-8.074 9.323c0-1.37.838-2.544 2.043-3.098V.166l-4.938.896v11.844l3.681-.449l-.485-.783a3.3 3.3 0 0 1-.301-1.382"></svg:path></svg:g>`,
})
export class SiGlyphPinLocationMapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationRemoveIcon],svg[si-glyph-pin-location-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.475.031c-3.007 0-5.443 2.512-5.443 5.609c0 1.584 5.443 10.275 5.443 10.275s5.441-8.609 5.441-10.275c0-3.097-2.437-5.609-5.441-5.609m2.556 5.985H5.969V4.954h5.062z"></svg:path>`,
})
export class SiGlyphPinLocationRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinMapIcon],svg[si-glyph-pin-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.953 8.979H6.025V7.668L7 6.991V4.926l-.975-.804V2.021h5.928v2.228l-.974.677v2.065l.975.634z"></svg:path><svg:path d="M9.986 7.993H8.038v2.614l.989 5.372l.959-5.372zM6 0h5.959v.942H6z"></svg:path></svg:g>`,
})
export class SiGlyphPinMapIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPingPongRacketIcon],svg[si-glyph-ping-pong-racket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.297 10.802c-.451-.452-.447-.899-.372-1.144c.2-.67.474-1.415.632-2.234L8.53 12.451c.793-.162 1.517-.428 2.168-.621c.25-.074.723-.053 1.197.421c.473.475 2.906 3.642 2.906 3.642l2.164-2.163c0-.001-3.216-2.476-3.668-2.928m.021-4.636c-.01-1.285-.493-2.733-2.094-4.336a5.938 5.938 0 0 0-8.396 8.396c1.484 1.483 2.832 1.993 4.047 2.062zm-6.847 2.9a1.537 1.537 0 0 1-1.526-1.549c0-.854.684-1.547 1.526-1.547c.844 0 1.528.693 1.528 1.547c0 .857-.685 1.549-1.528 1.549"></svg:path>`,
})
export class SiGlyphPingPongRacketIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPipeIcon],svg[si-glyph-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.274 4.644C9.75 6.47 8.318 7.874 6.03 8.494l-.729-2.08c-.43-1.237-5.646.584-5.213 1.821l1.133 3.242c.432 1.236 2.059 1.814 3.543 1.376c1.175-.347 4.087-1.353 7.528-6.349c1.125-1.635 2.566-2.66 3.698-3.006l-.515-1.473s-2.278.316-4.2 2.62z"></svg:path>`,
})
export class SiGlyphPipeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPizzaIcon],svg[si-glyph-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.863 2.581a7.44 7.44 0 0 0-1.82 4.363h.971a6.45 6.45 0 0 1 1.551-3.662zm1.403 1.401a5.47 5.47 0 0 0-1.26 2.962l4.221-.001zM6.969.042a7.44 7.44 0 0 0-4.363 1.8l.703.703a6.5 6.5 0 0 1 3.66-1.502zm0 1.989a5.5 5.5 0 0 0-2.958 1.216l2.958 2.958zM2.002 8.032a5.4 5.4 0 0 0 1.227 2.971l2.998-2.97zm-1.961 0a7.32 7.32 0 0 0 1.8 4.346l.687-.68a6.35 6.35 0 0 1-1.519-3.666zm3.926 3.7a5.5 5.5 0 0 0 3.002 1.252V8.731zM2.58 13.119a7.43 7.43 0 0 0 4.389 1.823v-.97a6.5 6.5 0 0 1-3.701-1.54zm10.563-.74a7.33 7.33 0 0 0 1.801-4.346h-.952a6.36 6.36 0 0 1-1.526 3.674zM8.756 8.033l3.009 2.98a5.4 5.4 0 0 0 1.234-2.98zm4.238-1.09a5.47 5.47 0 0 0-1.266-2.97l-2.971 2.97zm1.947 0a7.43 7.43 0 0 0-1.82-4.362l-.693.693a6.43 6.43 0 0 1 1.559 3.669zm-6.925 7.999a7.44 7.44 0 0 0 4.387-1.821l-.68-.68a6.5 6.5 0 0 1-3.707 1.532zm0-1.956a5.5 5.5 0 0 0 3.008-1.244l-3.008-3.01z"></svg:path>`,
})
export class SiGlyphPizzaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPluginIcon],svg[si-glyph-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.016 7.038h-5v2.931h5v.829l5.922 2.175v-8.93L5.016 6.219zm10.937-.054v-.968h-2.971V4.043h-.962v8.93h.962v-1.989h2.971v-.968h-2.971V6.984z"></svg:path>`,
})
export class SiGlyphPluginIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPlusIcon],svg[si-glyph-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6h-4V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class SiGlyphPlusIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPodiumIcon],svg[si-glyph-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.432 14.035h-.479V5.72a.69.69 0 0 0-.688-.692L11 5.254V3.671l.068.027a.65.65 0 0 0 .854-.351a.646.646 0 0 0-.354-.847L8.984 1.354A1.47 1.47 0 0 0 7.515.033c-.819 0-1.484.658-1.484 1.469s.665 1.469 1.484 1.469c.392 0 .745-.153 1.011-.398l1.48.691v2.175l-5.272.976a.69.69 0 0 0-.689.693v6.93h-.539c-.279 0-.506.429-.506.96c0 .532.227.963.506.963h9.926c.279 0 .506-.431.506-.963c0-.534-.227-.963-.506-.963"></svg:path>`,
})
export class SiGlyphPodiumIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPoker1Icon],svg[si-glyph-poker-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.494 1H5.412C4.082 1 3 1.098 3 2.445v13.1c0 1.348 1.082 1.445 2.412 1.445h6.082c1.33 0 2.412-.098 2.412-1.445v-13.1C13.906 1.098 12.824 1 11.494 1m-2.489 9.564v2.457H7.958v-2.424c-.489.268-1.19.336-1.631.336c-.728 0-1.317-.785-1.317-1.754c0-.967.59-1.75 1.317-1.75c.244 0 .573.092.902.246c-.133-.393-.216-.787-.216-1.078c0-.859.667-1.557 1.486-1.557c.817 0 1.482.697 1.482 1.557c0 .297-.084.701-.222 1.102c.34-.168.686-.27.938-.27c.713 0 1.291.783 1.291 1.75c0 .969-.578 1.754-1.291 1.754c-.447.001-1.197-.074-1.692-.369"></svg:path>`,
})
export class SiGlyphPoker1Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPoker2Icon],svg[si-glyph-poker-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.494 1.01H4.412C3.082 1.01 2 1.107 2 2.454v13.101C2 16.903 3.082 17 4.412 17h6.082c1.33 0 2.412-.098 2.412-1.445V2.454c0-1.348-1.082-1.444-2.412-1.444M7.489 13.135L4.748 9.041l2.824-4.115l2.742 4.093z"></svg:path>`,
})
export class SiGlyphPoker2Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPoker3Icon],svg[si-glyph-poker-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.494 1H5.412C4.082 1 3 1.097 3 2.444v13.101c0 1.348 1.082 1.445 2.412 1.445h6.082c1.33 0 2.412-.098 2.412-1.445V2.444C13.906 1.097 12.824 1 11.494 1m-2.092 9.998h-.34v2.064H7.906v-2.064h-.258c-1.041.125-1.794.299-1.794-1.015c0-1.647 2.636-4.952 2.636-4.952s2.635 3.305 2.635 4.952c0 1.314-.682 1.14-1.723 1.015"></svg:path>`,
})
export class SiGlyphPoker3Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPoker4Icon],svg[si-glyph-poker-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.372.058H5.627a1.62 1.62 0 0 0-1.613 1.624v12.689a1.62 1.62 0 0 0 1.613 1.624h6.745a1.62 1.62 0 0 0 1.614-1.624V1.682A1.62 1.62 0 0 0 12.372.058M9.023 11S6.034 9.544 6.034 6.71c0-.979.678-1.776 1.513-1.776c.719 0 1.318.587 1.475 1.374c.15-.787.744-1.374 1.46-1.374c.828 0 1.499.787 1.499 1.76C11.98 9.58 9.023 11 9.023 11"></svg:path>`,
})
export class SiGlyphPoker4Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPrintIcon],svg[si-glyph-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6 12v3.98h5.993V12zM5 1h7.948v2.96H5z"></svg:path><svg:path d="M1.041 5.016v9h3.91V11.01H13v3.006h4.041v-9zm2.975 2.013H2.969V5.953h1.047zm2-.06H4.969v-1h1.047z"></svg:path></svg:g>`,
})
export class SiGlyphPrintIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphPuzzleIcon],svg[si-glyph-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.992 6.567l-.01-2.817c0-.911-.799-1.724-1.709-1.724h-3.185C10.092.698 9.006.075 7.668.075S5.249.698 5.249 1.992c0 .012-2.536.034-2.536.034c-.908 0-1.681.813-1.681 1.724l.035 2.711c1.322.016 2.39 1.056 2.39 2.341c0 1.284-1.067 2.323-2.39 2.34v3.208c0 .911.736 1.65 1.645 1.65h10.561c.909 0 1.745-.739 1.745-1.65l-.011-3.116c1.162-.139 1.969-1.125 1.969-2.333c0-1.215-.813-2.202-1.984-2.334"></svg:path>`,
})
export class SiGlyphPuzzleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphQuoteCloseIcon],svg[si-glyph-quote-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.969c-.553 0-1-.435-1-.969s.447-.969 1-.969c2.757 0 4-1.201 4-3.907V7.978H2.559a1.51 1.51 0 0 1-1.506-1.511V2.511A1.51 1.51 0 0 1 2.559.999h3.935C7.324.999 8 1.677 8 2.511v6.612c0 3.775-2.141 5.846-6 5.846m9 0c-.553 0-1-.435-1-.969s.447-.969 1-.969c2.757 0 4-1.201 4-3.907V7.947h-3.467a1.51 1.51 0 0 1-1.512-1.506V2.505c0-.83.678-1.506 1.512-1.506h3.955A1.51 1.51 0 0 1 17 2.505v6.618c0 3.775-2.141 5.846-6 5.846"></svg:path>`,
})
export class SiGlyphQuoteCloseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphQuoteOpenIcon],svg[si-glyph-quote-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 14.969c.552 0 1-.435 1-.969s-.448-.969-1-.969c-2.757 0-4-1.201-4-3.907V7.906h3.441c.83 0 1.506-.605 1.506-1.438V2.512A1.51 1.51 0 0 0 15.441 1h-3.935A1.51 1.51 0 0 0 10 2.512v6.612c0 3.775 2.141 5.845 6 5.845m-9 0c.552 0 1-.435 1-.969s-.448-.969-1-.969c-2.757 0-4-1.201-4-3.907V7.947h3.467a1.51 1.51 0 0 0 1.512-1.506V2.505A1.51 1.51 0 0 0 6.467.999H2.512A1.51 1.51 0 0 0 1 2.505v6.618c0 3.776 2.141 5.846 6 5.846"></svg:path>`,
})
export class SiGlyphQuoteOpenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRadioIcon],svg[si-glyph-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 0h.938v4.93H3zm9.018 6.01v10h2.962v-10zm2.003 4.011h-1.042V9h1.042zm0-2h-1.042V7h1.042zm-13.01 7.995h10v-10h-10zm4.497-.954a3.55 3.55 0 0 1-2.562-1.094h5.125a3.55 3.55 0 0 1-2.563 1.094m3.521-3.093a3.5 3.5 0 0 1-.307 1.047h-6.43a3.6 3.6 0 0 1-.307-1.047zm-7.045-.953c.049-.37.147-.722.299-1.047H8.73c.153.325.252.677.301 1.047zm3.524-3.11c1.016 0 1.926.429 2.576 1.109H2.932a3.55 3.55 0 0 1 2.576-1.109"></svg:path>`,
})
export class SiGlyphRadioIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRadioactiveIcon],svg[si-glyph-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.295 6.346l2.734-5.187A7.54 7.54 0 0 0 9.035.004a7.55 7.55 0 0 0-3.994 1.155l2.727 5.17a2.6 2.6 0 0 1 1.246-.326c.468 0 .9.13 1.281.343m-.619 1.206a1.3 1.3 0 0 0-.662-.184c-.229 0-.439.063-.627.165c-.406.225-.686.65-.686 1.148c0 .028.008.055.01.083c.03.48.316.887.726 1.09c.175.086.37.14.577.14c.223 0 .428-.061.61-.156c.394-.209.665-.605.694-1.073c.003-.028.01-.055.01-.083c0-.485-.264-.903-.652-1.13m1.928 1.479a2.61 2.61 0 0 1-1.342 1.931l2.758 5.011c2.309-1.429 3.873-3.918 3.973-6.941zm-6.576 6.942l2.77-4.995a2.61 2.61 0 0 1-1.376-1.946H1.027c.1 3.023 1.676 5.512 4.001 6.941"></svg:path>`,
})
export class SiGlyphRadioactiveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRecordIcon],svg[si-glyph-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.98 5.004c-2.193 0-3.976 1.793-3.976 3.996c0 .732.211 1.409.555 2H8.354a3.94 3.94 0 0 0 .572-2.026c0-2.19-1.776-3.973-3.958-3.973S1.011 6.783 1.011 8.974s1.775 3.973 3.957 3.973c.011 0 .031.053.031.053h8a4 4 0 0 0 3.958-4c0-2.203-1.784-3.996-3.977-3.996M5 11c-1.104 0-2-.897-2-2s.896-2 2-2c1.103 0 2 .897 2 2s-.897 2-2 2m8 0c-1.103 0-2-.897-2-1.999S11.898 7 13 7a2 2 0 0 1 0 4"></svg:path>`,
})
export class SiGlyphRecordIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphReduceIcon],svg[si-glyph-reduce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.329 9.083a.69.69 0 0 0-.688.69l1.588 1.594L.25 14.269a.98.98 0 0 0 0 1.39a.984.984 0 0 0 1.391 0l2.976-2.9l1.579 1.585c.38 0 .687-.31.687-.69V9.773c0-.38-.307-.69-.687-.69zm2.244-5.826L1.786.209a.983.983 0 0 0-1.392 0a.944.944 0 0 0 0 1.357L3.18 4.645L1.62 6.199c0 .38.309.687.69.687h3.881c.381 0 .69-.307.69-.687V2.333a.686.686 0 0 0-.689-.688zm9.769 6.523a.69.69 0 0 0-.691-.687h-3.88a.69.69 0 0 0-.69.687v3.866c0 .381.31.688.69.688l1.595-1.587l2.968 2.976a.98.98 0 0 0 1.39 0a.983.983 0 0 0 0-1.389l-2.966-2.975zm-2.981-6.545L9.767 1.634a.69.69 0 0 0-.688.69v3.881c0 .381.309.69.688.69h3.867a.69.69 0 0 0 .687-.69L12.75 4.627l2.961-3.073a.98.98 0 0 0 0-1.39c-.383-.384-1.005-.116-1.39.268z"></svg:path>`,
})
export class SiGlyphReduceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphReelAudioIcon],svg[si-glyph-reel-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1.064 7.211A2.95 2.95 0 0 0 3 7.933a2.956 2.956 0 0 0 2.961-2.95c0-.506-.127-.981-.353-1.396A2.97 2.97 0 0 0 3 2.032A2.955 2.955 0 0 0 .039 4.983c0 .89.399 1.687 1.025 2.228m3.416-.367l-1.3-1.286a.58.58 0 0 0 .38-.46l1.332 1.318a2.3 2.3 0 0 1-.412.428M3.242 2.678c.197.021.389.072.574.141l-.39 1.791a.57.57 0 0 0-.434-.202c-.048 0-.091.017-.135.027zM.734 5.477l1.723-.596c-.006.035-.02.066-.02.102c0 .187.092.346.226.453L.93 6.035a2 2 0 0 1-.139-.309c-.028-.082-.039-.167-.057-.249m12.243 2.507c.721 0 1.382-.258 1.898-.684a2.95 2.95 0 0 0 1.07-2.276a2.965 2.965 0 0 0-2.969-2.961a2.97 2.97 0 0 0-2.97 2.961a2.967 2.967 0 0 0 2.971 2.96m1.529-1.093l-1.303-1.303a.59.59 0 0 0 .381-.466l1.334 1.335a2.4 2.4 0 0 1-.412.434m-1.244-4.219c.199.019.391.072.578.142l-.391 1.813a.58.58 0 0 0-.434-.205c-.051 0-.092.017-.136.028zm-2.465 3.109c-.025-.083-.037-.168-.055-.254l1.705-.606c-.006.036-.021.067-.021.104a.6.6 0 0 0 .224.462l-1.715.611c-.05-.102-.102-.205-.138-.317"></svg:path><svg:path d="M10.028 8.53a4.5 4.5 0 0 1-1.56-3.403c0-.592.116-1.61.324-2.127H7.109c.208.518.324 1.535.324 2.127a4.51 4.51 0 0 1-4.511 4.504c-.86 0-2.24-.242-2.922-.661v3.637C0 13.442 1.177 14 1.917 14h12.067c.74 0 2.016-.558 2.016-1.393V8.97c-.685.417-2.162.662-3.024.662a4.5 4.5 0 0 1-2.948-1.102M3 11.957H2v-1h1zm1.96.001h-1v-1h1zM9 10H7V9h2zm3 1.969h-1v-1h1zm.953-1h1v1h-1z"></svg:path></svg:g>`,
})
export class SiGlyphReelAudioIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphReelFilmIcon],svg[si-glyph-reel-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.368 13.095c1.193-.188 2.796.098 3.817 1.004s2.453.801 3.815 1.029V16c-1.144-.193-3.37-.416-4.15-1.108c-.778-.69-2.062-1.09-3.267-.899c-1.096.173-1.319-.724-.215-.898"></svg:path><svg:path d="M7.5.166C3.403.166.08 3.469.08 7.542s3.323 7.375 7.42 7.375c4.098 0 7.42-3.302 7.42-7.375S11.598.166 7.5.166M5 3a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 3m0 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 5 12m1.709-4.486c0-.455.38-.823.846-.823c.468 0 .848.368.848.823s-.38.823-.848.823a.836.836 0 0 1-.846-.823M10 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 12m0-5a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 7"></svg:path></svg:g>`,
})
export class SiGlyphReelFilmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRemoveIcon],svg[si-glyph-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></svg:path>`,
})
export class SiGlyphRemoveIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRepeatIcon],svg[si-glyph-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.986 4.016H6.939L4.935 2.193a.645.645 0 0 0-.911 0v1.823H1.998a2 2 0 0 0-1.998 2v3.969a2 2 0 0 0 1.998 2h7.238l1.826 1.828a.646.646 0 0 0 .912 0v-1.828h2.012a2 2 0 0 0 1.998-2V6.016a2 2 0 0 0-1.998-2m-2.924 4.187L9.15 10.031H1.984V5.969h2.04v1.746a.63.63 0 0 0 .911 0l1.879-1.746h7.201l.002 4.062h-2.043V8.203a.63.63 0 0 0-.912 0"></svg:path>`,
})
export class SiGlyphRepeatIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphResizeInFrameIcon],svg[si-glyph-resize-in-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.994 12.967c0 1.134-.92 2.054-2.055 2.054H4.03a2.055 2.055 0 0 1-2.054-2.054v-3.91c0-1.133.92-2.053 2.054-2.053h3.909c1.135 0 2.055.92 2.055 2.053zm1.784-8.863l-1.171-2.056a.55.55 0 0 0-.551.548L10.038 6.4a.55.55 0 0 0 .552.549l3.765.017a.55.55 0 0 0 .553-.548l-2.014-1.206l3.816-3.794a.77.77 0 0 0 .231-.551a.77.77 0 0 0-.231-.553a.794.794 0 0 0-1.117 0z"></svg:path><svg:path d="M16.04 7.021v6.584c0 .795-.642 1.441-1.435 1.441H3.376a1.44 1.44 0 0 1-1.435-1.441V2.396c0-.794.644-1.44 1.435-1.44H9.98v-.93H3.057a2.054 2.054 0 0 0-2.049 2.053v11.832c0 1.131.92 2.053 2.049 2.053h11.881a2.055 2.055 0 0 0 2.051-2.053v-6.89z"></svg:path></svg:g>`,
})
export class SiGlyphResizeInFrameIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphResizeOutFrameIcon],svg[si-glyph-resize-out-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.994 12.967c0 1.134-.92 2.054-2.055 2.054H3.03a2.055 2.055 0 0 1-2.054-2.054v-3.91c0-1.133.92-2.053 2.054-2.053h3.909c1.135 0 2.055.92 2.055 2.053zm5.207-10.023L15.372 5a.55.55 0 0 0 .551-.548l.019-3.804a.55.55 0 0 0-.552-.549L11.625.082a.55.55 0 0 0-.553.548l2.014 1.206L9.27 5.63a.77.77 0 0 0-.231.551c0 .202.076.4.231.553a.794.794 0 0 0 1.117 0z"></svg:path><svg:path d="M15.04 7.021v6.584a1.44 1.44 0 0 1-1.436 1.441H2.375a1.44 1.44 0 0 1-1.436-1.441V2.396c0-.794.645-1.44 1.436-1.44h6.604v-.93H2.056A2.054 2.054 0 0 0 .007 2.079v11.832c0 1.131.92 2.053 2.049 2.053h11.881a2.055 2.055 0 0 0 2.051-2.053v-6.89z"></svg:path></svg:g>`,
})
export class SiGlyphResizeOutFrameIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRetroeexcavadoraIcon],svg[si-glyph-retroeexcavadora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 1)"><svg:circle cx="12.473" cy="11.473" r="1.473"></svg:circle><svg:path d="M3.502 6.035C1.566 6.035 0 7.588 0 9.503s1.566 3.467 3.502 3.467c1.932 0 3.5-1.552 3.5-3.467s-1.568-3.468-3.5-3.468m0 5.127a1.67 1.67 0 0 1-1.677-1.659c0-.917.751-1.66 1.677-1.66c.924 0 1.675.743 1.675 1.66s-.751 1.659-1.675 1.659"></svg:path><svg:path d="M15.332 6.68a.893.893 0 0 0-.891-.896l-.504-.07v-.732h.024V2.121h-.96V4h-.971v1.451l-2.436-.336C8.992 3.447 7.565.094 7.006.094l-5.45.669C.563.763.03 6 .03 6c.672-.389 2.542-1.062 3.375-1.062c2.526 0 4.641 2.16 4.641 4.688c0 .479-.079.902-.216 1.338h2.101c.146-1.245 1.107-2.129 2.393-2.129c1.283 0 2.33.89 2.477 2.135h.309c.492 0 .891-.321.891-.816zM2.938 4.031V1.937l3.125-.5l1 2.594z"></svg:path></svg:g>`,
})
export class SiGlyphRetroeexcavadoraIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRibbonIcon],svg[si-glyph-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.025 0l1.39 1.025h1.717l.53 1.657l1.39 1.025l-.531 1.659l.531 1.658l-1.39 1.024l-.53 1.658h-1.717l-1.39 1.025l-1.39-1.025H5.92l-.529-1.658l-1.389-1.024l.529-1.658l-.529-1.659l1.389-1.025l.529-1.657h1.715zM5.042 15.529l-1.04-2.682l-1.984 1.599L4.006 9l.675 1.577l2.317.014zm7.914-.021l1.075-2.661l1.948 1.578L14.027 9l-.675 1.577l-2.317.014z"></svg:path>`,
})
export class SiGlyphRibbonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRightJustifyIcon],svg[si-glyph-right-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 1.938c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 1h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 4h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 7h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H.98A.938.938 0 0 1 .98 10h14.082c.518 0 .938.42.938.938m0 3c0 .518-.42.938-.938.938H5.98a.938.938 0 0 1 0-1.876h9.082c.518 0 .938.42.938.938"></svg:path>`,
})
export class SiGlyphRightJustifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRightwardsArrowToBarIcon],svg[si-glyph-rightwards-arrow-to-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.002 1c0-.553.442-1 .989-1h1.979c.547 0 .989.447.989 1v14c0 .553-.442 1-.989 1h-1.979a.994.994 0 0 1-.989-1zM3.113 15.495c-.582.581-2.103.9-2.103-1.001V1.506c0-1.839 1.521-1.582 2.103-1l6.444 6.442a1.49 1.49 0 0 1 0 2.104z"></svg:path>`,
})
export class SiGlyphRightwardsArrowToBarIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRingIcon],svg[si-glyph-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.163 4.847c.492-.239.833-.738.833-1.322c0-.814-.66-1.474-1.474-1.474c-.771 0-1.4.598-1.462 1.356a6.5 6.5 0 0 0-1.681-.455L12.941.009h-6.9l2.61 2.943a6.4 6.4 0 0 0-1.692.46a1.46 1.46 0 0 0-1.46-1.33c-.813 0-1.474.651-1.474 1.458c0 .579.344 1.075.838 1.31A6.56 6.56 0 0 0 2.98 9.456c0 3.622 2.932 6.568 6.535 6.568s6.533-2.946 6.533-6.568a6.56 6.56 0 0 0-1.885-4.609m-4.647 9.178c-2.501 0-4.535-2.05-4.535-4.568s2.034-4.568 4.535-4.568c2.5 0 4.533 2.05 4.533 4.568s-2.033 4.568-4.533 4.568"></svg:path>`,
})
export class SiGlyphRingIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRoadIcon],svg[si-glyph-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.073 0h-5.04v1.042H7.957V0H3.083l-2 16h14.922zM9 15H8v-3h1zm0-4.958H8V7h1zM7.958 4.959v-2h1v2z"></svg:path>`,
})
export class SiGlyphRoadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRocketIcon],svg[si-glyph-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 13c-.064.011-.103.027-.161.039c.701-2.108 1.133-5.049 1.133-7.175c0-4.315-2.932-5.837-3.965-5.837S5.04 1.548 5.04 5.864c0 2.125.432 5.063 1.132 7.171c-.057-.011-.11-.024-.173-.034c-.552 1.521-1.988 2.039-3.004 2.988l3.527.008c.276-.337.441-.72.476-1.127c.016.023.03.052.046.074h3.923c.028-.04.054-.089.082-.132c.031.412.192.802.467 1.143l3.471-.007C13.991 14.99 12.538 14.529 12 13m-3-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-4a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 6"></svg:path>`,
})
export class SiGlyphRocketIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRollerIcon],svg[si-glyph-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.5 15.938a.5.5 0 0 1-.5-.5v-3.906c0-.275.225-.5.5-.5H8V8.389c0-.248.179-.456.425-.494L16 5.93V3.032h-.5a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v3.857a.496.496 0 0 1-.423.494L9 8.849v2.183h.5c.275 0 .5.225.5.5v3.906c0 .275-.225.5-.5.5z"></svg:path><svg:path d="M14 3V2a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SiGlyphRollerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRssIcon],svg[si-glyph-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 3c7.355 0 13 5.593 13 12.968h3C17 7.198 9.747 0 1 0z"></svg:path><svg:path d="M1.052 8.99c4.008 0 6.957 2.9 6.957 6.919h2.95c0-5.346-4.578-9.847-9.907-9.847zm.01 6.91h3.91c0-2.491-1.43-3.797-3.91-3.82c-.014 0 0 3.82 0 3.82"></svg:path></svg:g>`,
})
export class SiGlyphRssIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRugbyBallIcon],svg[si-glyph-rugby-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.516 8.938c.213 0 .414.043.599.119q.43-.547.913-1.115a1.5 1.5 0 0 1-.074-.449a1.558 1.558 0 0 1 1.882-1.522q.543-.553 1.143-1.114A1.575 1.575 0 0 1 10.5 2.922c.198 0 .387.041.561.109a45 45 0 0 1 3.967-2.9c-1.836-.252-6.53-.463-10.371 3.442C.647 7.655.659 13.079 1.419 14.917a32 32 0 0 1 1.932-3.399a1.54 1.54 0 0 1-.396-1.025a1.555 1.555 0 0 1 1.561-1.555"></svg:path><svg:path d="M16.572.5c-1.559.761-3.159 1.917-4.706 3.254a1.575 1.575 0 0 1-1.366 2.34c-.316 0-.611-.098-.857-.262a49 49 0 0 0-.81.83c.153.241.245.524.245.83c0 .858-.699 1.555-1.562 1.555a1.54 1.54 0 0 1-.689-.166q-.447.521-.863 1.029c.072.18.115.376.115.582c0 .858-.699 1.555-1.562 1.555c-.072 0-.141-.012-.211-.021c-1.188 1.597-2.01 2.888-2.261 3.475c1.771.788 7.329.867 11.362-3.215C17.49 8.153 17.264 2.07 16.572.5"></svg:path></svg:g>`,
})
export class SiGlyphRugbyBallIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphRulerIcon],svg[si-glyph-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 0v16h8V0zm1 2h2v1H6zm0 6h2v1H6zm2 7H6v-1h2zm1-3H6v-1h3zm0-6H6V5h3z"></svg:path>`,
})
export class SiGlyphRulerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSafeBoxIcon],svg[si-glyph-safe-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M13.001.979H3.018c-.607 0-1.038.354-1.038 1.038v11.021c0 .684.5 1.004 1.06 1.004h9.94c.562 0 1.06-.375 1.06-1.047V2.015c0-.568-.54-1.036-1.039-1.036M13 13H3V2h10z"></svg:path><svg:path fill="currentColor" d="M12.901.016H3.16C2.002.016 1 .907 1 2.005V13c0 1.099.871 1.989 2.028 1.989h.012V16H5v-1.011h6V16h2v-1.012c1.152-.005 1.998-.894 1.998-1.988V2.005c0-1.099-.938-1.989-2.097-1.989m1.138 12.979c0 .672-.497 1.047-1.06 1.047h-9.94c-.56 0-1.06-.32-1.06-1.004V2.017c0-.685.431-1.038 1.038-1.038H13c.499 0 1.038.467 1.038 1.035z"></svg:path><svg:path fill="currentColor" d="M3 13h10V2H3zm5-7a2 2 0 0 1 2 2h1v1H9.723c-.347.595-.984 1-1.723 1a2 2 0 0 1 0-4"></svg:path></svg:g>`,
})
export class SiGlyphSafeBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSafePinIcon],svg[si-glyph-safe-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.756 12.992c-.066-.122-1.613-5.493-4.037-9.289c-.722-1.129-1.5-2.091-2.308-2.692l-.364.442c3.161 3.087 4.869 8.3 5.594 10.609c-.603-.048-1.614.069-2.063.518c-.442.44-.613 1.133-.57 1.712c-.026-.02-.056-.04-.077-.058c-1.338-1.046-5.919-5.068-8.672-7.611c.133-.352.266-.649.404-.911c.064-.121-.04-.382-.148-.425a1.365 1.365 0 0 1-.856-1.273c0-.758.601-1.373 1.345-1.373c.604 0 1.113.407 1.281.968c.035.116.33.199.479.112c.398-.234.861-.49 1.408-.811L6.076.817c-1.083-1.081-2.92-1-4.102.179S.712 4.009 1.796 5.091c0 0 1.988 1.914 2.244 2.151c2.936 2.727 7.797 6.938 9.768 8.402l.068.051c.435.275.959.363 1.457.263a2.08 2.08 0 0 0 1.629-1.627c.092-.456.018-.93-.206-1.339m-1.76 2.305a1.283 1.283 0 0 1-1.283-1.281a1.283 1.283 0 0 1 2.567 0c0 .707-.575 1.281-1.284 1.281"></svg:path>`,
})
export class SiGlyphSafePinIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSatelliteIcon],svg[si-glyph-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.495 5.893c.337.338 1.689-1.016 1.352-1.352l-2.983-2.984c-.338-.338-1.69 1.016-1.354 1.352zm-9.207 5.004c-.216-.217-.691-.095-1.058.271c-.367.368-.488.841-.271 1.06l1.274 1.273c.217.218.689.096 1.056-.271c.369-.366.49-.842.273-1.058zM-.235 3.191l3.51-3.508l1.381 1.381l-3.51 3.51zm12.323 5.183l-1.431 1.428l-.739-.739l1.625-1.624a.7.7 0 0 0-.012-.992l-2.5-2.499a.7.7 0 0 0-.988-.009L6.419 5.564l-.735-.735l1.429-1.428l-1.395-1.394l-3.497 3.496l1.393 1.394l1.414-1.413l.735.735l-1.629 1.63a.7.7 0 0 0 .007.989l2.5 2.498a.7.7 0 0 0 .991.01l1.63-1.629l.739.739l-1.416 1.413l1.382 1.381l3.497-3.497zm-1.136 5.362l3.51-3.516l1.401 1.399l-3.51 3.516z"></svg:path>`,
})
export class SiGlyphSatelliteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSawIcon],svg[si-glyph-saw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.729 4.266l-1.79-2.974a.837.837 0 0 0-1.179-.016l.027 1.187L1.43 5.801L.237 5.775a.824.824 0 0 0 .015 1.171l2.992 1.778a.84.84 0 0 0 1.179.016l3.322-3.303a.824.824 0 0 0-.016-1.171M6.459 5.48L4.43 7.498c-.222.22-.631.171-.912-.107l-.82.008c-.281-.279-.33-.686-.109-.904l2.859-2.842c.224-.222.629-.174.91.106l-.008.817c.282.278.331.685.109.904m1.758 1.576L5.999 9.359l.569.594l.605-.626l1.296 1.345l-.604.626l.533.554l.604-.627l1.294 1.343l-.604.626l.535.556l.604-.626l1.293 1.343l-.604.627l.533.553l.605-.626l.297.344l-.605.626l.008.009l3.624-.923z"></svg:path>`,
})
export class SiGlyphSawIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphScissorIcon],svg[si-glyph-scissor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.958 4.146s-1.331-.81-1.534-.71L8.123 7.295L5.969 5.437c.071-.94-.715-2.052-2.033-2.732c-.647-.336-1.35-.521-1.978-.521c-.836 0-1.479.322-1.762.883c-.515 1.016.321 2.45 1.899 3.268c.647.335 1.35.52 1.979.52c.469 0 .866-.111 1.185-.298l1.579 1.527l-1.523 1.479c-.324-.21-.738-.335-1.234-.335c-.629 0-1.328.184-1.975.521c-1.559.812-2.373 2.232-1.852 3.234c.285.546.922.861 1.746.861c.628 0 1.329-.186 1.975-.523c1.255-.654 2.014-1.699 1.994-2.605l2.154-1.844l6.301 3.86c.203.099 1.534-.711 1.534-.711L9.43 8.084zM4.871 5.481c-.075.15-.227.256-.418.325c-.484.177-1.255.1-1.951-.26C1.493 5.024.878 4.111 1.159 3.553c.141-.277.497-.437.979-.437c.436 0 .929.133 1.392.372c.723.373 1.236.947 1.369 1.45c.052.198.051.385-.028.543M3.575 12.57c-.982.511-2.132.474-2.409-.057c-.293-.562.32-1.486 1.34-2.017c.469-.244.973-.379 1.418-.379c.231 0 .434.038.598.107c.18.074.316.185.391.328c.097.187.087.414.003.651c-.17.484-.662 1.012-1.341 1.367"></svg:path>`,
})
export class SiGlyphScissorIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphScissorLineCutIcon],svg[si-glyph-scissor-line-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M6.798 3.142c-.371-.222-.719-.264-.954-.115c-.474.298-.421 1.283.113 2.149c.37.597.927 1.011 1.38 1.098c.179.036.344.024.47-.057c.135-.085.222-.229.272-.404c.13-.446.001-1.124-.384-1.744c-.246-.398-.564-.726-.897-.927M5.167 8.268c-.342-.222-.791-.361-1.264-.393c-1.027-.066-1.923.396-1.957 1.012c-.032.579.833 1.186 1.823 1.248c.687.044 1.307-.148 1.659-.467c.173-.155.285-.34.297-.543a.76.76 0 0 0-.148-.469a1.5 1.5 0 0 0-.41-.388"></svg:path><svg:path fill="currentColor" d="M16.922 9.938s-.449-.919-.651-.938l-6.515.062l-1.085-2.373c.487-.69.396-1.905-.304-3.036c-.343-.557-.799-1.021-1.278-1.312c-.643-.385-1.284-.434-1.762-.134c-.862.545-.881 2.031-.044 3.386c.342.556.796 1.022 1.279 1.311c.36.216.716.313 1.048.317l.796 1.854l-1.714.016c-.152-.311-.613-1.062-.994-1.289c-.482-.291-1.105-.639-1.757-.678c-1.572-.094-2.852.788-2.913 1.799c-.031.551.311 1.085.945 1.465c.483.289 1.107.47 1.757.509c1.267.075 2.331-.229 2.733-.935l2.367-.005l1.31 3h1.396l-1.34-3.003zM8.078 5.812c-.05.176-.137.319-.272.404c-.126.081-.291.093-.47.057c-.453-.087-1.01-.501-1.38-1.098c-.534-.866-.587-1.852-.113-2.149c.235-.148.583-.106.954.115c.333.201.651.529.896.927c.386.62.515 1.298.385 1.744M5.429 9.668c-.353.318-.973.511-1.659.467c-.99-.062-1.855-.669-1.823-1.248c.034-.615.93-1.078 1.957-1.012c.473.031.922.171 1.264.393c.179.117.315.25.41.389a.75.75 0 0 1 .148.469c-.012.202-.124.387-.297.542M10 13h1.984v1H10zm-4 0h1.984v.969H6zm8 0h1.984v.969H14zM2 13h1.984v.969H2z"></svg:path></svg:g>`,
})
export class SiGlyphScissorLineCutIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphScreenFulIcon],svg[si-glyph-screen-ful-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.021 5.001v5.938h7.957V5.001zm7.021 5.061H4.958V5.937h6.084z"></svg:path><svg:path d="M6 7h3.917v1.938H6zm6-6l1.387 1.375l-1.385 1.381l1.224 1.216l1.387-1.381L16 4.965V1zM2.763 11.04l-1.376 1.359L0 11.035v3.934h4l-1.387-1.365l1.375-1.358zm-.002-6.069l1.226-1.215l-1.38-1.375L4 1H0v3.965l1.381-1.368zM13.27 11.08l-1.227 1.207l1.338 1.322L12 14.969h4v-3.934l-1.393 1.37z"></svg:path></svg:g>`,
})
export class SiGlyphScreenFulIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphScreenScaleIcon],svg[si-glyph-screen-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.021 5.001v5.938h7.957V5.001zm7.021 5.061H5.958V5.937h6.084z"></svg:path><svg:path d="M7 7h3.917v1.938H7zm-6 4l1.387 1.375l-1.385 1.381l1.224 1.216l1.387-1.381L5 14.965V11zm14.763-9.96l-1.376 1.359L13 1.035v3.934h4l-1.387-1.365l1.375-1.358zm-.002 13.931l1.226-1.215l-1.38-1.375L17 11h-4v3.965l1.381-1.368zM2.27 1.08L1.043 2.287l1.338 1.322L1 4.969h4V1.035l-1.393 1.37z"></svg:path></svg:g>`,
})
export class SiGlyphScreenScaleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphScrewIcon],svg[si-glyph-screw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.984 6.943l-2.926-.671V5.014h2.926zm0 2.997l-2.926-.67V8.011l2.926.671zm0 3.029l-2.926-.671v-1.259l2.926.672zm-1.18 3.029h-.566l-1.18-1.93l2.926.671zM9 .099v1.933H7.938V.095c-1.656.21-2.926 1.337-2.926 2.706c0 1.521 6.957 1.521 6.957 0C11.969 1.438 10.647.315 9 .099"></svg:path>`,
})
export class SiGlyphScrewIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphScrewDriverIcon],svg[si-glyph-screw-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.146 12.334l-1.83-.599l-4.339-4.338l-.579.58l4.338 4.337l.637 1.872l3.067 1.832l.578-.579zM8.255 4.999L7.209 6.054c.157-.39.106-.819-.171-1.101L2.423.281C2.035-.11 1.356-.061.904.396L.393.912c-.45.457-.5 1.145-.111 1.537L4.896 7.12c.276.28.701.33 1.085.173l-.947.955l.715.72l3.22-3.249z"></svg:path>`,
})
export class SiGlyphScrewDriverIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSdCardIcon],svg[si-glyph-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5 9h5.906v4.938H5z"></svg:path><svg:path d="M12.969 5.938h.969V1.063H5L2.022 6.215v1.754h1.009v1.053H2.022v7.916h11.915V9.022h-.969zM10 1.969h1V4h-1zm-2 0h1V4H8zM6 2h1.031v2.031H6zm6 13.025H3.993V7.937H12zM13 4h-1V1.969h1z"></svg:path></svg:g>`,
})
export class SiGlyphSdCardIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSeriffIcon],svg[si-glyph-seriff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.717 5.374c-.692 0-1.255.553-1.278 1.241l-3.421-.503l-1.469-3.004A1.28 1.28 0 0 0 9 .672c-.708 0-1.283.575-1.283 1.282c0 .488.276.907.679 1.125L6.914 6.112l-3.354.493a1.28 1.28 0 0 0-2.559.051c0 .708.575 1.282 1.282 1.282c.333 0 .636-.131.863-.34l2.498 2.458l-.575 3.388c-.033-.002-.066-.01-.099-.01a1.284 1.284 0 0 0 0 2.565c.707 0 1.282-.575 1.282-1.282c0-.25-.074-.479-.197-.677l2.91-1.546l2.966 1.574c-.113.191-.183.41-.183.648a1.283 1.283 0 1 0 1.282-1.283c-.057 0-.11.01-.166.018l-.576-3.396l2.529-2.488a1.283 1.283 0 0 0 2.182-.912c0-.708-.574-1.281-1.282-1.281"></svg:path>`,
})
export class SiGlyphSeriffIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSewingMachineIcon],svg[si-glyph-sewing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.875 2.125h-1.328C14.93 1.461 13.747 1 12.958 1V.042H12V1H4.042c-1.104 0-2 0-2 1v1.875c0 1.104.891 2 1.989 2V7H3v1h2v2h.958V5.875h.053c.5 0 .726-.415.837-.957l.139-.868c.019-.374-.019.255 0-.05H11v7.042H3.042a2 2 0 0 0-2 2v.916c0 1.104.896 1 2 1h10.916c1.104 0 2 .104 2-1V5.875h.917z"></svg:path>`,
})
export class SiGlyphSewingMachineIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSewingRollIcon],svg[si-glyph-sewing-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.982.986c0 .518-.41.938-.917.938h-10a.927.927 0 0 1-.917-.938c0-.519.41-.938.917-.938h10c.507 0 .917.42.917.938m0 14c0 .518-.41.938-.917.938h-10a.927.927 0 0 1-.917-.938c0-.519.41-.938.917-.938h10c.507 0 .917.42.917.938M3 3h7.917v.959H3zm0 2h7.917v.959H3zm0 2h7.917v.959H3zm0 2h7.917v.959H3zm0 2h7.917v.959H3zm0 2h7.917v.959H3z"></svg:path><svg:path d="M16.836 15c-1.305-.208-1.679-2.154-1.78-2.98c-.088-.716-.181-4.562-2.383-5.545c-.612-.273-1.293-.402-1.878-.459c-.513-.052-.685-.039-.629-.098l-.748-.682c.294-.307.838-.28 1.418-.219c.734.07 1.518.212 2.21.529c2.621 1.203 2.949 5.732 3.024 6.354c.14 1.144.539 2.053.93 2.114z"></svg:path></svg:g>`,
})
export class SiGlyphSewingRollIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShare1Icon],svg[si-glyph-share-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.969 10.062c-.83 0-1.578.342-2.117.891L5.893 8.474c.022-.146.045-.291.045-.442q0-.31-.06-.602l4.877-2.439a2.95 2.95 0 0 0 2.215 1.01a2.969 2.969 0 1 0-2.969-2.969c0 .029.008.058.009.087L4.81 5.72a2.94 2.94 0 0 0-1.84-.656a2.969 2.969 0 1 0 0 5.938c.758 0 1.442-.293 1.967-.761l5.09 2.545c-.008.083-.025.163-.025.247a2.969 2.969 0 1 0 5.938 0a2.973 2.973 0 0 0-2.971-2.971m.062-8.406a1.344 1.344 0 1 1 0 2.687a1.344 1.344 0 0 1 0-2.687m-10 7.75a1.405 1.405 0 1 1-.001-2.81a1.405 1.405 0 0 1 .001 2.81m10 5a1.405 1.405 0 1 1-.001-2.81a1.405 1.405 0 0 1 .001 2.81"></svg:path>`,
})
export class SiGlyphShare1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShare2Icon],svg[si-glyph-share-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.025 5c-1.08.008-1.951.912-1.941 2.016c.004.529.213 1.007.545 1.362l-1.035 2.716a1.9 1.9 0 0 0-.562-.094q-.214.002-.416.047L7.337 6.453c.404-.361.664-.885.664-1.475a1.97 1.97 0 0 0-1.959-1.979a1.97 1.97 0 0 0-1.957 1.979c0 .448.152.857.4 1.189L2.821 9.169a1.95 1.95 0 0 0-.789-.17c-1.088 0-1.969.896-1.969 2s.881 2 1.969 2c1.086 0 1.969-.896 1.969-2a2 2 0 0 0-.404-1.2l1.668-3.006a1.94 1.94 0 0 0 1.183.12l3.283 4.596a2 2 0 0 0-.668 1.49c0 1.104.881 2 1.969 2c1.086 0 1.969-.896 1.969-2c0-.538-.213-1.025-.553-1.385l1.031-2.709c.186.057.377.096.578.094c1.082-.008 1.951-.912 1.943-2.016c-.01-1.102-.893-1.992-1.975-1.983"></svg:path>`,
})
export class SiGlyphShare2Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShare3Icon],svg[si-glyph-share-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.477 1.042c-1.375 0-2.47 1.062-2.47 2.442c0 .355.108.961.243 1.266L9.458 7.583L6.687 4.895a3.7 3.7 0 0 0 .304-1.328c0-1.38-1.098-2.536-2.474-2.536c-1.373 0-2.505 1.156-2.505 2.536S3.115 5.994 4.49 5.994c.495 0 .955-.15 1.342-.4l3.175 3.143v3.295C7.986 12.344 7 13.326 7 14.454c0 1.381 1.114 2.547 2.49 2.547c1.374 0 2.488-1.166 2.488-2.547c0-1.127-.981-2.108-2.002-2.422V8.675l3.164-3.081l-.023-.026c.396.264.869.419 1.379.419a2.495 2.495 0 0 0 2.488-2.501c0-1.382-1.132-2.444-2.507-2.444M4.486 5.023a1.52 1.52 0 0 1-1.514-1.526a1.52 1.52 0 0 1 1.514-1.526a1.52 1.52 0 0 1 1.513 1.526a1.52 1.52 0 0 1-1.513 1.526m6.554 9.493c0 .854-.692 1.547-1.548 1.547a1.547 1.547 0 1 1 0-3.094c.856 0 1.548.692 1.548 1.547m3.456-9.476c-.847 0-1.533-.706-1.533-1.579c0-.869.687-1.577 1.533-1.577s1.534.708 1.534 1.577c0 .873-.688 1.579-1.534 1.579"></svg:path>`,
})
export class SiGlyphShare3Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShare5Icon],svg[si-glyph-share-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.021 4a1.97 1.97 0 0 0-1.706 1H9.708a1.985 1.985 0 0 0-3.697 1q0 .014.003.026l-2.052 1.23a2 2 0 0 0-.961-.257a2 2 0 1 0 2 2l-.003-.032l2.06-1.235c.281.152.6.247.942.247c.731 0 1.362-.396 1.708-.979h3.607c.344.596.976 1 1.706 1A1.99 1.99 0 0 0 17 6c0-1.105-.887-2-1.979-2"></svg:path>`,
})
export class SiGlyphShare5Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSheepIcon],svg[si-glyph-sheep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.696 5.459c-.069-.02-.165-.262-.368-.542l.007-.02c.881-.114 1.553-.67 1.553-1.343s-.672-1.229-1.553-1.343c-.158-.64-.924-1.127-1.852-1.127c-.626 0-1.178.224-1.52.566c-.343-.343-.895-.566-1.52-.566c-.929 0-1.693.487-1.851 1.127c-.882.114-1.552.669-1.552 1.343s.67 1.229 1.552 1.343c.006.025.019.047.027.072c-.194.258-.298.472-.361.49c-1.013.296-2.292.732-2.136 1.271c.158.539 1.692.977 2.706.683c.157-.047-.821 3.324-.821 5.098c0 3.312 1.775 4.49 3.968 4.49s3.97-1.178 3.97-4.49c0-1.773-.979-5.145-.82-5.098c1.013.294 2.59-.144 2.748-.683s-1.164-.975-2.177-1.271M7 9h1v1H7zm3 6H8v-1h2zm1-5h-1V9h1z"></svg:path>`,
})
export class SiGlyphSheepIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShieldIcon],svg[si-glyph-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.068 1.976l.005 6.042c0 4.988 5.948 7.961 5.948 7.961s5.95-2.807 5.95-7.977l.001-6.026S12.308.036 9.021.036c-3.289 0-5.953 1.94-5.953 1.94m10.979 6.255c0 3.944-4.723 6.682-5.045 6.837v.015l-.015-.007l-.015.007v-.015c-.322-.155-5.045-2.893-5.045-6.837l-.004-5.664S6.181.992 8.972.979V.978l.015.001l.015-.001v.001c2.791.013 5.049 1.588 5.049 1.588zm-1.108.16c0 3.435-3.671 5.462-3.922 5.597V14s-.01-.004-.011-.006L8.994 14v-.013c-.251-.135-3.921-2.162-3.921-5.597l-.004-4.929s1.756-1.37 3.925-1.382h.023c2.17.012 3.924 1.382 3.924 1.382z"></svg:path>`,
})
export class SiGlyphShieldIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShield2Icon],svg[si-glyph-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.99.062c-3.307 0-5.988 1.944-5.988 1.944l.006 6.054c0 4.999 5.982 7.888 5.982 7.888s5.983-2.722 5.983-7.903s.002-6.038.002-6.038S12.295.062 8.99.062m.063 13.994s-5.1-2.26-5.1-6.17l-.004-5.419S6.234.946 9.053.946z"></svg:path>`,
})
export class SiGlyphShield2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShieldPlusIcon],svg[si-glyph-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.961v6.074c0 5.016 6.546 7.913 6.546 7.913s6.423-2.73 6.423-7.929c0-5.196.002-6.059.002-6.059S12.094.011 8.546.011S2 1.961 2 1.961m9.031 6.101H9V10H7.938V8.062H6V7h1.938V4.938H9V7h2.031z"></svg:path>`,
})
export class SiGlyphShieldPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShieldStarIcon],svg[si-glyph-shield-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0C4.688 0 2 1.958 2 1.958l.005 6.098C2.005 13.091 8.002 16 8.002 16S14 13.259 14 8.041V1.958S11.314 0 8 0m1.607 7.875l.955 2.939l-2.5-1.816l-2.502 1.816l.955-2.939l-2.5-1.816h3.091l.956-2.94l.955 2.94h3.091z"></svg:path>`,
})
export class SiGlyphShieldStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShovelIcon],svg[si-glyph-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.732 2.509L13.495.274c-.431-.433-1.149-.415-1.603.038a.36.36 0 0 0-.092.159c-.559 2.235-.547 3.016-.454 3.323l-6.265 6.265l-1.919-1.917l-2.29 2.29c-.749.748-1.375 3.478-.077 4.775c1.297 1.297 4.024.668 4.771-.079l2.294-2.292l-1.879-1.878l6.284-6.283c.342.077 1.158.057 3.27-.47a.36.36 0 0 0 .159-.091c.453-.453.469-1.173.038-1.605m-.582.95c-1.103.311-2.385.587-2.669.533l-.435-.435c-.062-.266.216-1.561.53-2.671c.181-.134.413-.138.553.002l2.018 2.018c.138.139.134.371.003.553"></svg:path>`,
})
export class SiGlyphShovelIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphShowerIcon],svg[si-glyph-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.004 3.051C4.857 3.194 3 4.767 3 6.953h6.953c0-2.157-1.778-3.743-2.955-3.896c-.009-1.562.007-2.14 3.47-2.14c3.22 0 3.547 1.425 3.547 4.431v10.061c0 .275.208.499.484.499a.5.5 0 0 0 .5-.499V5.348C15 2.148 14.936 0 10.469 0C6.59 0 6.044.831 6.004 3.051M3 8h.959v.916H3z"></svg:path><svg:path d="M6 8h.959v.916H6zm3 0h.959v.916H9zm-5 2h.959v.916H4zm4 0h.959v.916H8z"></svg:path></svg:g>`,
})
export class SiGlyphShowerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignBoardIcon],svg[si-glyph-sign-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.958 14.828C4.958 15.475 4.53 16 4 16c-.529 0-.958-.524-.958-1.172V1.256C3.042.61 3.471.085 4 .085c.53 0 .958.524.958 1.171z"></svg:path><svg:path d="M15.691 2.042c.688 0 1.246.438 1.246.979S16.379 4 15.691 4H2.246C1.558 4 1 3.562 1 3.021s.558-.979 1.246-.979zm-1.698 4.002H7.965c-1.126 0-1.924-.091-1.924 1.036v4.865c0 1.127.913 1.035 2.039 1.035h5.818c1.126 0 2.039.092 2.039-1.035V7.08c.001-1.127-.818-1.036-1.944-1.036"></svg:path><svg:path d="M7 3h.937v2.874H7zm7 0h.937v2.874H14z"></svg:path></svg:g>`,
})
export class SiGlyphSignBoardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignFootIcon],svg[si-glyph-sign-foot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13.798 14.262c0 3.231-2.339.253-5.294.253c-2.951 0-5.403 2.979-5.403-.253c0-1.509 1.232-3.097 2.09-4.453c.978-1.547 1.685-2.766 3.259-2.766c1.58 0 2.364 1.294 3.345 2.852c.849 1.351 2.003 2.865 2.003 4.367"></svg:path><svg:ellipse cx="5.91" cy="2.881" rx="1.91" ry="2.881"></svg:ellipse><svg:ellipse cx="10.936" cy="2.926" rx="1.936" ry="2.926"></svg:ellipse><svg:ellipse cx="1.871" cy="7.371" rx="1.885" ry="2.436" transform="rotate(-10.51 1.986 7.435)"></svg:ellipse><svg:path d="M12.115 7.305c-.345 1.326.201 2.504 1.214 2.627c1.014.126 2.116-.849 2.463-2.175c.345-1.328-.2-2.506-1.214-2.63c-1.016-.126-2.118.85-2.463 2.178"></svg:path></svg:g>`,
})
export class SiGlyphSignFootIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignInIcon],svg[si-glyph-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.959 4.917V1H1.096L9 3.666v12.251L1.219 14l-.215.829L9.959 17v-3.085h2v-2.873l-2.865-3z"></svg:path><svg:path d="m11.1 8.102l2.87 2.931V8.968h2.046V6.98H13.97V5.068zM7 9h.958v.916H7z"></svg:path></svg:g>`,
})
export class SiGlyphSignInIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignOutIcon],svg[si-glyph-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.995 4.917h1.992V0H1l8.026 2.666v12.251L1.321 13l-.215.829l8.89 2.153v-3.085l1.99.018V9.042h-1.99V4.917z"></svg:path><svg:path d="m15.904 7l-2.87-2.932v1.987H11v1.916h2.034v2.062zM7 8h.958v.916H7z"></svg:path></svg:g>`,
})
export class SiGlyphSignOutIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignPIcon],svg[si-glyph-sign-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.854 8H6.116C4.95 8 5.001 7 5.001 6.903V1c0-1 .083-1 1.115-1h5.738c1.166 0 1.115 0 1.115 1v5.903C12.969 8.06 13 8 11.854 8M6 1v6.031h6V1z"></svg:path><svg:path d="M8 8h1.917v6.281H8zm1.969-5v-.969H8V6h1V4.984h.969v-.968H9V3zM10 3h.938v.969H10z"></svg:path><svg:path d="M14 15.959H4c0-1.071 2.238-1.938 5-1.938s5 .867 5 1.938"></svg:path></svg:g>`,
})
export class SiGlyphSignPIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignRoad1Icon],svg[si-glyph-sign-road-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.447 3.902l3.365-1.34l-3.365-1.491H9.959V.167h-.902v.904H5.101v2.831h3.956v2.157H4.566L1.083 7.531l3.483 1.412h4.491v6.031h.902V8.943h3.017V6.059H9.959V3.902z"></svg:path>`,
})
export class SiGlyphSignRoad1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignRoad2Icon],svg[si-glyph-sign-road-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.633 3.938L16 2.562l-2.367-1.457l-4.654.418V.021H7v1.573l-3.979.427v2.833L7 4.428v3.063l-4.622-.437L0 8.375l2.378 1.479l4.622.41v5.674h1.979v-5.597l3.979.513V8.055l-3.979-.377V4.357z"></svg:path>`,
})
export class SiGlyphSignRoad2Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignal1Icon],svg[si-glyph-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 13.984a.5.5 0 0 1-.479-.358L6.647 8.984H4.993a.5.5 0 0 1-.486-.383l-.976-4.052l-1.048 4.06a.5.5 0 0 1-.484.375H0v-.953h1.61l1.452-5.625a.5.5 0 0 1 .484-.375h.004a.5.5 0 0 1 .482.383l1.352 5.617h1.635c.222 0 .417.146.479.358l1.005 3.346l1.02-3.348a.5.5 0 0 1 .479-.356h.687l1.347-2.736a.5.5 0 0 1 .445-.279h.004c.188 0 .359.104.444.271l1.41 2.744h1.63v.953h-1.936a.5.5 0 0 1-.444-.271l-1.095-2.131l-1.047 2.123a.5.5 0 0 1-.447.279h-.626l-1.396 4.644a.5.5 0 0 1-.478.356"></svg:path>`,
})
export class SiGlyphSignal1Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignal2Icon],svg[si-glyph-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.696 15.99a.67.67 0 0 1-.595-.354a.64.64 0 0 1 .29-.872c2.619-1.296 4.246-3.885 4.246-6.756c0-2.875-1.629-5.465-4.253-6.76a.64.64 0 0 1-.293-.872a.677.677 0 0 1 .899-.284c3.072 1.517 4.982 4.55 4.982 7.916c0 3.36-1.907 6.393-4.975 7.912a.7.7 0 0 1-.301.07"></svg:path><svg:path d="M5.13 13.93a.63.63 0 0 1-.567-.348a.6.6 0 0 1-.042-.442a.63.63 0 0 1 .318-.388c1.773-.904 2.942-2.716 2.942-4.729S6.609 4.195 4.833 3.29a.615.615 0 0 1-.276-.829a.63.63 0 0 1 .567-.346q.154 0 .291.069a6.52 6.52 0 0 1 3.566 5.839a6.52 6.52 0 0 1-3.559 5.834a.6.6 0 0 1-.292.073"></svg:path><svg:path d="M4.173 11.019c-.206 0-.4-.14-.491-.356c-.141-.32-.032-.713.241-.879c.558-.334.903-.998.903-1.732c0-.735-.347-1.4-.904-1.734c-.272-.164-.382-.558-.244-.877c.096-.221.284-.357.493-.357q.133 0 .252.07c.932.559 1.511 1.67 1.511 2.898s-.579 2.338-1.51 2.896a.5.5 0 0 1-.251.071"></svg:path></svg:g>`,
})
export class SiGlyphSignal2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignal3Icon],svg[si-glyph-signal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 12.965h-2a1 1 0 0 1-.948-.684L12.998 9.19l-1.054 3.091a1 1 0 0 1-.948.684H8.998c-.449 0-.844-.3-.964-.732L6.499 6.769l-1.535 5.464a1 1 0 0 1-.964.732H1v-1.934h2.24l2.295-8.268a1 1 0 0 1 1.928 0l2.295 8.268h.518l1.773-5.316a1.001 1.001 0 0 1 1.897 0l1.774 5.316H17z"></svg:path>`,
})
export class SiGlyphSignal3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSiteMapIcon],svg[si-glyph-site-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.666 3.979h2.667A.66.66 0 0 0 11 3.324V.698a.66.66 0 0 0-.667-.656H7.666A.66.66 0 0 0 7 .698v2.626a.66.66 0 0 0 .666.655m-3.333 7.103H1.666a.657.657 0 0 0-.666.646v2.584c0 .355.298.646.666.646h2.667c.368 0 .667-.29.667-.646v-2.584a.657.657 0 0 0-.667-.646m6 0H7.666a.657.657 0 0 0-.666.646v2.584c0 .355.298.646.666.646h2.667c.368 0 .667-.29.667-.646v-2.584a.657.657 0 0 0-.667-.646m6 0h-2.667a.657.657 0 0 0-.666.646v2.584c0 .355.298.646.666.646h2.667c.368 0 .667-.29.667-.646v-2.584a.657.657 0 0 0-.667-.646M3.953 8.958h4.078v.98h1.938v-.98h4.073v.98h1.937V7.031h-6.01V5.016H8.031v2.015H2.042v2.907h1.911z"></svg:path>`,
})
export class SiGlyphSiteMapIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSiteMapRevertIcon],svg[si-glyph-site-map-revert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.334 12.02H7.667a.66.66 0 0 0-.667.655v2.626c0 .362.299.656.667.656h2.667a.66.66 0 0 0 .666-.656v-2.626a.66.66 0 0 0-.666-.655m3.333-7.104h2.667c.367 0 .666-.29.666-.646V1.686a.66.66 0 0 0-.666-.646h-2.667a.657.657 0 0 0-.667.646V4.27c0 .356.299.646.667.646m-6 0h2.667c.367 0 .666-.29.666-.646V1.686a.66.66 0 0 0-.666-.646H7.667A.657.657 0 0 0 7 1.686V4.27c0 .356.299.646.667.646m-6 0h2.667c.367 0 .666-.29.666-.646V1.686a.66.66 0 0 0-.666-.646H1.667A.657.657 0 0 0 1 1.686V4.27c0 .356.299.646.667.646m12.38 2.124H9.969v-.979H8.031v.979H3.958v-.979H2.021v2.906h6.01v2.015h1.938V8.967h5.989V6.061h-1.911z"></svg:path>`,
})
export class SiGlyphSiteMapRevertIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSkateboardIcon],svg[si-glyph-skateboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 5)"><svg:path d="M15.252.268c-.548.953-1.697.857-2.978.857H3.699c-1.316 0-2.431.068-2.992-.938C.481-.219-.206.001.042.546c.649 1.42 2.046 2.402 3.663 2.402h8.573c1.573.001 2.938-.928 3.61-2.287c.284-.572-.392-.815-.636-.393"></svg:path><svg:ellipse cx="11.984" cy="4.947" rx=".984" ry=".947"></svg:ellipse><svg:ellipse cx="3.97" cy="4.959" rx=".97" ry=".959"></svg:ellipse></svg:g>`,
})
export class SiGlyphSkateboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSkullIcon],svg[si-glyph-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.828 12.836C15.715 11.589 17 9.804 17 7.85C17 3.993 15.063 0 9.031 0c-6.031 0-8 3.992-8 7.85c0 1.947 1.391 3.728 2.186 4.973c.309.479.451 1.872.451 1.983q.002.122.029.24c.09.625.631.927 1.297.95c0 0 .496.009.571 0c.757-.087 1.344-.411 1.423-1.049c.064.631.668 1.049 2.027 1.049s1.943-.396 2.023-1.008c.107.634.723.947 1.496 1.008c.053.004.575 0 .575 0c.704-.054 1.261-.438 1.261-1.133l-.011-.004c.001-.022.007-.043.007-.064c.001-.122.148-1.516.462-1.959M5.999 9a2 2 0 1 1 0-3.998A2 2 0 0 1 6 9zm3.011 3.848c-.824 0-1.493.439-1.493-.178c0-.616.669-1.891 1.493-1.891c.827 0 1.494 1.274 1.494 1.891c0 .618-.667.178-1.494.178M11.999 9A2 2 0 1 1 12 5a2 2 0 0 1 0 4z"></svg:path>`,
})
export class SiGlyphSkullIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSleepIcon],svg[si-glyph-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.953 14H1.027a.945.945 0 0 1-.867-.589a1.02 1.02 0 0 1 .168-1.063l5.531-6.375H.988C.465 5.973 0 5.572 0 5.028c0-.545.425-.985.947-.985h7.026c.374 0 .716.23.866.589s.085.774-.168 1.063l-5.492 6.387h4.773c.523 0 .947.389.947.933c.001.544-.422.985-.946.985m7.802-5.065H9.701a.64.64 0 0 1-.586-.391a.68.68 0 0 1 .107-.711l5.116-5.869h-5c-.354 0-.318-.93.035-.93h6.098c.253 0 .446.117.55.354a.68.68 0 0 1-.107.712L10.88 7.963h4.875c.354.001.354.972 0 .972"></svg:path>`,
})
export class SiGlyphSleepIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSlideShowIcon],svg[si-glyph-slide-show-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 0h1.906v2.219H7z"></svg:path><svg:path d="M15.993 2.621c0-.334-.319-.605-.712-.605H.781c-.394 0-.712.271-.712.605v1.316h.962v8.049h4.434L3.17 14.724c-.161.162-.101.485.136.722l.43.429l3.327-3.77v3.863h1.851v-3.966l3.419 3.872l.429-.429c.237-.236.298-.56.136-.722l-2.365-2.738h4.406V3.936h1.056V2.621zm-1.962 8.485H1.959V3.937h12.072z"></svg:path></svg:g>`,
})
export class SiGlyphSlideShowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSmartphoneIcon],svg[si-glyph-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.001 0H5C3.897 0 3.003 0 3.003 1v14c0 1.119.895.947 1.997.947h5.001c1.103 0 1.999.172 1.999-.947V1c0-1-.896-1-1.999-1M8.125 15.188h-1.23v-1.375h1.23zM11.037 13H4V1h7.037z"></svg:path>`,
})
export class SiGlyphSmartphoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSmsIcon],svg[si-glyph-sms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.002 11.984A1.99 1.99 0 0 1 .18 10.785c-.106-.248-.009-.546.221-.663c.229-.116.502-.01.611.239c.163.381.551.629.99.629c.59 0 1.068-.449 1.068-.999s-.479-.997-1.068-.997a1.99 1.99 0 0 1-1.984-1.99c0-1.096.887-1.988 1.977-1.988c.787 0 1.497.468 1.812 1.19c.108.25.011.547-.219.664c-.229.118-.501.011-.609-.237a1.06 1.06 0 0 0-.983-.623c-.586 0-1.061.447-1.061.994s.475.992 1.061.992a1.994 1.994 0 0 1 .006 3.988m11.995-.056a1.96 1.96 0 0 1-1.798-1.18c-.104-.244-.008-.536.218-.651c.226-.112.495-.009.603.235c.162.375.545.617.978.617c.581 0 1.054-.441 1.054-.98c0-.541-.473-.981-1.054-.981a1.955 1.955 0 0 1-.009-3.909c.777 0 1.479.46 1.787 1.17a.507.507 0 0 1-.216.652c-.224.116-.494.011-.601-.233a1.05 1.05 0 0 0-.971-.611c-.576 0-1.045.439-1.045.977s.469.976 1.045.976c1.089 0 1.967.879 1.967 1.961a1.96 1.96 0 0 1-1.958 1.957m-8.497.051c-.342 0-.482-.311-.482-.693V5.739c0-.302.154-.661.426-.661c.541 0 2.557 2.565 2.557 2.565s2-2.595 2.52-2.595c.273 0 .473.401.473.702v5.484c0 .382-.135.722-.477.722c-.343 0-.5-.311-.5-.692V6.891S8.2 8.985 8.001 8.985C7.809 8.961 5.985 6.86 5.985 6.86v4.394c-.001.382-.142.725-.485.725"></svg:path>`,
})
export class SiGlyphSmsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSnowIcon],svg[si-glyph-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.822 9.445l-.797-.461l-.507.879l-.934-.539l.508-.879l-.799-.461l-.508.879l-.804-.465V6.617l.804-.465l.508.88l.799-.462l-.508-.879l.934-.539l.507.879l.797-.459l-.507-.88l.88-.508l-.468-.813l-.881.51l-.508-.88l-.797.46l.508.879l-.934.539L10.607 4l-.798.461l.507.88l-.788.455l-1.559-.906v-.937h1.015v-.922H7.969V1.953h1.015v-.922H7.969V.047h-.938v.984H6.016v.922h1.015v1.078H6.016v.922h1.015v.937l-1.559.906l-.818-.472l.508-.879l-.797-.461l-.508.879l-.933-.539l.508-.879l-.799-.461l-.508.879l-.854-.492l-.468.813l.853.492l-.508.879l.799.461l.508-.879l.934.539l-.508.879l.797.461l.507-.879l.834.481v1.781l-.834.482l-.507-.88l-.797.46l.508.879l-.934.539L1.947 9l-.799.461l.508.88l-.853.492l.468.813l.854-.494l.508.88l.799-.462l-.508-.879l.933-.539l.508.879l.797-.459l-.508-.88l.832-.479l1.545.897v.921H6.016v.922h1.015v1.078H6.016v.922h1.015v1.016h.938v-1.016h1.015v-.922H7.969v-1.078h1.015v-.922H7.969v-.921l1.545-.897l.802.463l-.507.879l.798.461l.508-.879l.934.539l-.508.879l.797.461l.508-.879l.881.508l.468-.813l-.88-.508z"></svg:path>`,
})
export class SiGlyphSnowIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSoccerYardIcon],svg[si-glyph-soccer-yard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.969 3.085h-.885c-.588 0-1.063.45-1.063 1.007v3.865h1.964c.262-1.165 1.292-2.04 2.526-2.04s2.265.875 2.526 2.04h1.9V4.092c0-.557-.477-1.007-1.063-1.007h-.827v.962H5.969z"></svg:path><svg:path d="M8.482 7.038c-.64 0-1.184.4-1.399.962h2.8a1.5 1.5 0 0 0-1.401-.962m.028 2.924c.656 0 1.206-.394 1.406-.937H7.104c.2.543.75.937 1.406.937"></svg:path><svg:path d="M8.511 11.146a2.6 2.6 0 0 1-2.542-2.099H4.021v3.904c0 .555.476 1.007 1.065 1.007h.852v-1.021H11v1.021h.889c.588 0 1.064-.452 1.064-1.007V9.047h-1.9a2.604 2.604 0 0 1-2.542 2.099"></svg:path><svg:path d="M14.439 1.042H2.498A.497.497 0 0 0 2 1.537v13.968c0 .273.223.495.498.495h11.941a.497.497 0 0 0 .498-.495V1.537a.495.495 0 0 0-.498-.495m-.418 14.02H9.979V14H7.02v1.062H2.937V1.937H7.02v1h2.933v-1h4.068z"></svg:path></svg:g>`,
})
export class SiGlyphSoccerYardIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSockIcon],svg[si-glyph-sock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.146 1.955h.22c.319 0 .578-.177.578-.396V.399c0-.218-.259-.395-.578-.395H7.58c-.319 0-.576.177-.576.395v1.16c0 .219.257.396.576.396zM11.99 13.156c0 .36.072.703.2 1.016c1.638-.412 1.847-2.04 1.735-3.539c-1.107.269-1.935 1.296-1.935 2.523m-8.908.954c0 1.368 1.226 1.742 2.392 1.827a2.63 2.63 0 0 0 .862-1.941a2.64 2.64 0 0 0-1.453-2.349c-1.71 1-1.801 1.71-1.801 2.463"></svg:path><svg:path d="M13.856 9.961c-.102-.791-.248-1.755-.249-2.108c-.017-3.052.302-4.837.302-4.837l-5.81.041s.302 1.558.302 3.286s.709 3.241-2.155 4.612q-.281.135-.529.264a3.4 3.4 0 0 1 .788 4.71c.948-.177 2.962-1.095 4.995-1.56a3.4 3.4 0 0 1-.222-1.178c0-1.59 1.109-2.921 2.578-3.23"></svg:path></svg:g>`,
})
export class SiGlyphSockIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSocketIcon],svg[si-glyph-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.969 12.979a4.97 4.97 0 0 1-4.967-4.968A4.975 4.975 0 0 1 8.969 3.04a4.977 4.977 0 0 1 4.969 4.971c0 2.74-2.23 4.968-4.969 4.968m.039-9.076c-2.247 0-4.075 1.846-4.075 4.114s1.828 4.113 4.075 4.113c2.244 0 4.074-1.846 4.074-4.113s-1.83-4.114-4.074-4.114"></svg:path><svg:path d="M16.916 15.918H1V0h15.916zm-14.947-.887h14.062V.937H1.969z"></svg:path><svg:path d="M7 7h.969v1.812H7zm3 0h.969v1.812H10z"></svg:path></svg:g>`,
})
export class SiGlyphSocketIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSolarBlindIcon],svg[si-glyph-solar-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(3)"><svg:path d="M11.502 12.02c-.25 0-.453-.161-.453-.36V1.041c0-.199.203-.36.453-.36s.454.161.454.36V11.66c0 .198-.204.36-.454.36"></svg:path><svg:ellipse cx="11.45" cy="13.017" rx="1.45" ry="2.017"></svg:ellipse><svg:path d="M.906 9.664c-.25.055-.867.025-.867-.092V.443c0-.158 1.015-.158 1.015 0L.913 9.572c0 .041.081.072-.007.092M7 9.52V.284c0-.157 1.024.008 1.024.165v9.236C8.024 9.842 7 9.677 7 9.52"></svg:path></svg:g><svg:path d="M0 0h16v1.969H0zm1 3h12v1.021H1zm0 2h12v1.02H1zm0 2v.954h12V7zm0 2h12v1.993H1z"></svg:path></svg:g>`,
})
export class SiGlyphSolarBlindIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSosIcon],svg[si-glyph-sos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.992 8c-.585 0-1.06-.444-1.06-.99s.475-.991 1.06-.991c.433 0 .816.243.981.619c.108.249.381.355.608.237a.513.513 0 0 0 .219-.66a1.97 1.97 0 0 0-1.809-1.188a1.982 1.982 0 0 0 .006 3.964c.591 0 1.067.448 1.067.997c0 .547-.477.994-1.067.994c-.438 0-.825-.246-.99-.624c-.106-.25-.381-.356-.608-.24c-.23.116-.327.413-.22.66a1.98 1.98 0 0 0 1.818 1.196A1.988 1.988 0 0 0 1.992 8m10.987-.012c-.578 0-1.049-.443-1.049-.987c0-.543.471-.986 1.049-.986c.431 0 .813.242.976.617c.106.247.378.354.604.236c.228-.116.323-.411.216-.659a1.96 1.96 0 0 0-1.795-1.183c-1.08 0-1.957.887-1.957 1.975c0 1.09.877 1.974 1.966 1.974c.585 0 1.059.446 1.059.991c0 .547-.474.991-1.059.991c-.434 0-.819-.244-.981-.622c-.108-.247-.377-.353-.605-.237s-.323.41-.217.656a1.96 1.96 0 0 0 1.804 1.191a1.976 1.976 0 0 0 1.968-1.979a1.98 1.98 0 0 0-1.979-1.978m-5.45-2.962h-.074c-1.004 0-2.444.806-2.444 1.795v3.353c0 .991 1.44 1.796 2.444 1.796h.074c1.005 0 2.444-.805 2.444-1.796V6.821c.001-.989-1.439-1.795-2.444-1.795m1.506 4.927c0 .616-.895 1.117-1.52 1.117h-.047c-.624 0-1.521-.501-1.521-1.117V7.055c0-.615.897-1.117 1.521-1.117h.047c.625 0 1.52.502 1.52 1.117z"></svg:path>`,
})
export class SiGlyphSosIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSoundIcon],svg[si-glyph-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.987 14.868c0 .626-.679 1.132-1.516 1.132l-6.514-4.527c-.839 0-1.913-.508-1.913-1.133V5.682c0-.624 1.074-1.132 1.913-1.132L12.471.022c.837 0 1.516.508 1.516 1.133z"></svg:path>`,
})
export class SiGlyphSoundIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSoundMuteIcon],svg[si-glyph-sound-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.47 13.513l14-11.142l.873 1.097l-14 11.142zm2.483-3.601V5.01H3.128c-1.283 0-2.115 1.084-2.115 2.46v1.024c0 1.459.769 2.459 2.115 2.459h.386zm2.924 2.747l5.059 3.313c.586 0 1.06-.4 1.06-.895V7.919zM13.987.971c0-.507-.499-.92-1.115-.92L7.114 3.73C6.499 3.73 6 4.142 6 4.65v4.189l7.987-6.243z"></svg:path>`,
})
export class SiGlyphSoundMuteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSpaceShipIcon],svg[si-glyph-space-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.023 8.441s1.299 1.967 2.578 2.594c.992.482-.109 3.392-.639 4.646c-.151.354-.357.344-.572.042c-.408-.573-1.22-1.755-2.502-1.755H5.134c-1.283 0-2.095 1.182-2.502 1.755c-.215.302-.423.312-.572-.042c-.53-1.255-1.631-4.164-.64-4.646c1.28-.627 2.579-2.594 2.579-2.594z"></svg:path><svg:path d="M11.192 9.062C10.83 5.966 9.6 1.06 8.076.077a5 5 0 0 0-.539-.034q-.274.001-.541.034c-1.524.983-2.755 5.89-3.116 8.985c-.07.604-.108 1.143-.108 1.565c0 1.525.489 2.645 1.26 3.357h5.01c.771-.713 1.26-1.832 1.26-3.357a14 14 0 0 0-.11-1.565M7.5 4a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 7.5 4"></svg:path></svg:g>`,
})
export class SiGlyphSpaceShipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSpannerIcon],svg[si-glyph-spanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.838 11.784l5.906-5.905c1.172.605 2.567.493 3.463-.402c.69-.691.924-1.682.716-2.638l-1.522 1.519l-1.356.266l-1.641-1.625l.282-1.396l1.509-1.49c-.955-.208-1.947.023-2.638.714c-.896.896-1.008 2.29-.402 3.464l-5.906 5.906c-1.173-.605-2.568-.492-3.465.402c-.688.691-.922 1.682-.715 2.637l1.523-1.519l1.355-.265l1.643 1.625l-.284 1.396l-1.509 1.49c.955.207 1.947-.023 2.637-.714c.896-.895 1.009-2.291.404-3.465"></svg:path>`,
})
export class SiGlyphSpannerIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSpoonForkIcon],svg[si-glyph-spoon-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.978 4.072c0-1.846-1.173-4.01-2.481-4.01s-2.482 2.164-2.482 4.01c0 1.598 1.053 2.314 2.166 2.644c0 0 .279 4.538-.664 8.044c-.199.748.588 1.256 1.026 1.256c.431 0 1.212-.496 1.015-1.231c-.941-3.55-.714-8.04-.714-8.04c1.066-.373 2.134-1.118 2.134-2.673m3.836 2.533c1.074-.413 2.123-.64 2.123-2.506c0-1.01-.523-3.345-.906-4.033v3.988h-1.047v-4l-.969.001v3.999H8.953V.066c-.387.698-.93 3.007-.93 4.02c0 1.846 1.08 2.09 2.148 2.505c.041 1.28.097 5.234-.67 8.131c-.198.747.578 1.255 1.009 1.255c.425 0 1.192-.496.999-1.23c-.754-2.881-.746-6.779-.717-8.141z"></svg:path>`,
})
export class SiGlyphSpoonForkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSprayIcon],svg[si-glyph-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.254.021l-.223.948l1.953.015zm7.709 7.003v-.95S11.3 3.04 10.936 3.04h-.967L9.985.015H8.016v1.966h1v1.06h-.951c-.363 0-2.059 3.033-2.059 3.033v9.269c0 .37.324.672.725.672h5.509c.399 0 .724-.302.724-.672V7.045h.018l-.019-.02zm-.947 8.007h-1.022V7h1.022zm-6.989-13l.232.914l1.679-.883z"></svg:path>`,
})
export class SiGlyphSprayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareIcon],svg[si-glyph-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.002 1c0-.553.444-1 .993-1h13.972c.549 0 .993.447.993 1v14c0 .553-.444 1-.993 1H.995a.996.996 0 0 1-.993-1z"></svg:path>`,
})
export class SiGlyphSquareIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareCheckedIcon],svg[si-glyph-square-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m3.017 7.904l1.871-1.873l2.285 2.291l6.092-6.101l1.78 1.783l-7.961 7.973z"></svg:path><svg:path d="M12.021 10.116v2.926H1.979V2.958h7.968l1.074-.933H1.002v11.936h11.977L13 9.083z"></svg:path></svg:g>`,
})
export class SiGlyphSquareCheckedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareDashed1Icon],svg[si-glyph-square-dashed-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.048 1.976h1.993v1.988h.907v-2.92h-2.9zM.923 3.995V1.976h2.028v-.99H.027v3.009zm2.028 12.022H.964v-1.95H.027v2.928h2.924zM15 6v2.01h.989V6zm0 4v1.96h.982V10zM9 1v.965h1.984V1zM5 1v.973h1.995V1zm4 15v.973h1.958V16zm-4 0v.993h1.987V16zM0 6v1.99h.98V6zm0 4v1.961h.954V10zm15.006 4v2.073H13v.945h3.003V14z"></svg:path>`,
})
export class SiGlyphSquareDashed1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareDashed2Icon],svg[si-glyph-square-dashed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 .834h5.083v5.041h.834V0H10zM.834 5.875V.834h5.083V0H0v5.875zm14.249 4.25v5.041H10V16h5.917v-5.875zm-9.166 5.041H.834v-5.041H0V16h5.917z"></svg:path>`,
})
export class SiGlyphSquareDashed2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareDeliciousIcon],svg[si-glyph-square-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0v16h16V0zm7.938 15.016V8.01H1.959V.958H9.01v7.011h7.006v7.047z"></svg:path>`,
})
export class SiGlyphSquareDeliciousIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareEightAnglePointIcon],svg[si-glyph-square-eight-angle-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 4V1.041h-2.959v1.021H10V1.041H6.041v1.021H3V1.041H.041V4h1.011v3.041H.041V11h1.011v3.041H.041V17H3v-1.021h3.041V17H10v-1.021h3.041V17H16v-2.959h-1.031V11H16V7.041h-1.031V4zM9.062 1.938v1.125H6.978V1.938zm6 0v1.125h-1.084V1.938zm-14.083 0h1.084v1.125H.979zm-.01 6h1.125v2.125H.969zm1.093 8.146H.978v-1.125h1.084zm4.917-.022v-1.125h2.084v1.125zm6.989 0v-1.114h1.126v1.114zm1.126-5.958h-1.125V7.938h1.125zm-2.053-3.063V11h1.011v3.041h-1.011v1.021H10v-1.021H6.041v1.021H3v-1.021H1.969V11H3V7.041H1.969V4H3V2.979h3.041V4H10V2.979h3.041V4h1.011v3.041z"></svg:path>`,
})
export class SiGlyphSquareEightAnglePointIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareFourIcon],svg[si-glyph-square-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4.769c0 1.187-.976 2.148-2.182 2.148H3.181c-1.204 0-2.18-.962-2.18-2.148V2.233c0-1.187.976-2.148 2.18-2.148h2.637C7.024.085 8 1.047 8 2.233zm0 9.049A2.18 2.18 0 0 1 5.818 16H3.181a2.18 2.18 0 0 1-2.18-2.182v-2.637c0-1.205.976-2.182 2.18-2.182h2.637C7.024 8.999 8 9.976 8 11.181zm9-9.049c0 1.187-.976 2.148-2.182 2.148h-2.637c-1.204 0-2.18-.962-2.18-2.148V2.233c0-1.187.976-2.148 2.18-2.148h2.637C16.024.085 17 1.047 17 2.233zm0 9.049A2.18 2.18 0 0 1 14.818 16h-2.637a2.18 2.18 0 0 1-2.18-2.182v-2.637c0-1.205.976-2.182 2.18-2.182h2.637c1.206 0 2.182.977 2.182 2.182z"></svg:path>`,
})
export class SiGlyphSquareFourIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareFourAnglePointIcon],svg[si-glyph-square-four-angle-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.959 3V.041H13v1.021H2.959V.041H0V3h1.011v10.041H0V16h2.959v-1.021H13V16h2.959v-2.959h-1.031V3zM13.938.938h1.084v1.125h-1.084zm-13 0h1.084v1.125H.938zm1.083 14.124H.937v-1.125h.073v.011h.917v-.011h.094zm13-1.124v1.125h-1.084v-1.125h.073v.011h.917v-.011zm-1.01-.897H13v1.021H2.959v-1.021H1.928V3h1.031V1.979H13V3h1.011z"></svg:path>`,
})
export class SiGlyphSquareFourAnglePointIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquarePlusIcon],svg[si-glyph-square-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.664 0H1.336C.598 0 .002.598.002 1.335v13.329C.002 15.401.598 16 1.336 16h13.328c.738 0 1.336-.599 1.336-1.336V1.335C16 .598 15.402 0 14.664 0M9.023 9.016v2.55c0 .631-2.025.631-2.025 0v-2.55H4.421c-.633 0-.632-2.01 0-2.01h2.577V4.461c0-.633 2.025-.633 2.025 0v2.545h2.556c.633 0 .633 2.01 0 2.01z"></svg:path>`,
})
export class SiGlyphSquarePlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareStarIcon],svg[si-glyph-square-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.628.021H2.352a1.33 1.33 0 0 0-1.33 1.331v13.275c0 .734.596 1.331 1.33 1.331h13.276c.734 0 1.33-.597 1.33-1.331V1.352a1.33 1.33 0 0 0-1.33-1.331m-3.23 13.484l-3.385-1.883l-3.385 1.883l.646-3.987l-2.737-2.824l3.783-.58l1.693-3.628l1.692 3.628l3.784.58l-2.738 2.824z"></svg:path>`,
})
export class SiGlyphSquareStarIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStampsIcon],svg[si-glyph-stamps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4 5h9.979v6H4z"></svg:path><svg:path d="M16.969 11.984V11h-1.016V9.984h1.016V9h-1.016V7.984h1.016V7h-1.016V5.984h1.016V5h-1.016V3.984h1.016V3h-.984v-.984H15v1.016h-1.016V2.016H13v1.016h-1.016V2.016H11v1.016H9.984V2.016H9v1.016H7.984V2.016H7v1.016H5.984V2.016H5v1.016H3.984V2.016H3v1.016H2V4h-.984v.984H2V6h-.984v.984H2V8h-.984v.984H2V10h-.984v.984H2V12h-.984v.984H2v1h.984v-1H4v1h.984v-1H6v1h.984v-1H8v1h.984v-1H10v1h.984v-1H12v1h.984v-1H14v1h.984v-1h.969v-1zM15 12.016H2.969V3.985H15zM16 13h.984v.969H16zM1 2h.953v.984H1z"></svg:path></svg:g>`,
})
export class SiGlyphStampsIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStarCrossIcon],svg[si-glyph-star-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.601 6.4L8 0L6.398 6.4L0 8l6.398 1.601L8 16l1.601-6.399L16 8zM8 9.334a1.333 1.333 0 1 1 .003-2.667A1.333 1.333 0 0 1 8 9.334"></svg:path>`,
})
export class SiGlyphStarCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStarStickIcon],svg[si-glyph-star-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.775 1.206L13.73 4.289l1.946 2.607l-3.254-.041l-1.879 2.656l-.966-3.107l-3.106-.965l2.656-1.88L9.086.305l2.606 1.946z"></svg:path><svg:path d="M1.852 15.533c-.39.391-.922.492-1.188.226l-.406-.405c-.266-.266-.164-.797.227-1.188L10.788 3.863c.391-.391.922-.492 1.188-.227l.406.406c.266.266.165.797-.227 1.188zm11.659-1.584s.162-1.059-.61-1.823c-.773-.762-1.87-.626-1.87-.626s1.266.02 1.895-.603c.631-.623.586-1.847.586-1.847s.133 1.35.634 1.847c.505.496 1.847.603 1.847.603s-1.261.102-1.819.652c-.56.553-.663 1.797-.663 1.797m-5 2s.162-1.059-.61-1.823c-.773-.762-1.87-.626-1.87-.626s1.266.02 1.895-.603c.631-.623.586-1.847.586-1.847s.133 1.35.634 1.847c.505.496 1.847.603 1.847.603s-1.261.102-1.819.652c-.56.553-.663 1.797-.663 1.797m-5-11s.162-1.059-.61-1.823c-.773-.762-1.87-.626-1.87-.626s1.266.02 1.895-.603c.631-.623.586-1.847.586-1.847s.133 1.35.634 1.847c.505.496 1.847.603 1.847.603s-1.261.102-1.819.652c-.56.553-.663 1.797-.663 1.797"></svg:path></svg:g>`,
})
export class SiGlyphStarStickIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSteleIcon],svg[si-glyph-stele-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 14v1.99h15.003V14zm10-8h.905v.898H11zM5 6h.951v.905H5z"></svg:path><svg:path d="M2 5.412v7.589h13V5.412C14.999.068 10.014.024 8.06.024S2 .068 2 5.412m4.967 4.574H5.894V7.954h-.887v2.003h-1.04V4.986h2.986v2.028H6.02v.86h.947zm1.986-.032h-1v-5h1zm2.085-1.958v1.958H10v-5h2.995L13 7.984z"></svg:path></svg:g>`,
})
export class SiGlyphSteleIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStelescopeIcon],svg[si-glyph-stelescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m2.606 3.764l-2.2-2.2L1.8.17L4 2.372z"></svg:path><svg:path d="M1.082 3.647L4.33 6.896l2.477-2.477L3.559 1.17zm3.623 4.532l4.78 5.729l4.247-4.248l-5.729-4.78zm11.607 2.901l-5.15 5.15l-.81-.808l5.15-5.151z"></svg:path></svg:g>`,
})
export class SiGlyphStelescopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStereoJackIcon],svg[si-glyph-stereo-jack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.929 5.762L3.86 6.827c-.316.313-.354.785-.088 1.05l1.334 1.33c.268.265.74.224 1.055-.088l1.07-1.067zm4.841-.238a.663.663 0 0 0-.02-.942l-1.336-1.33a.67.67 0 0 0-.945-.019L5.633 5.062l2.3 2.292zm-8.717 5.008l-.867.862c-.265.266-.252.71.033.994l.34.338c.283.283.73.297.996.031l.866-.861z"></svg:path><svg:path d="M3.242 11.077L1.855 9.694l2.299-2.291l1.389 1.383zm12.432 3.897c-.523 0-1.794.083-2.864-.788c-1.214-.991-1.691-2.195-1.691-4.43c0-1.22.567-2.731 1.146-3.521c.502-.686.875-1.407.875-2.182c0-1.136-.172-1.812-.684-2.102c-.492-.279-1.127-.08-1.308-.014L8.534 4.906l-.518-.463l2.762-3.081c.047-.021 1.141-.497 2.062.026c.744.424 1.026 1.269 1.026 2.664c0 .975-.46 1.812-.999 2.549c-.568.779-1.023 2.135-1.023 3.154c0 2.03.391 3.067 1.439 3.928c1.132.929 2.559.623 2.572.623l.078.656a2 2 0 0 1-.259.012"></svg:path></svg:g>`,
})
export class SiGlyphStereoJackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStethoscopeIcon],svg[si-glyph-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.938 10A1.968 1.968 0 1 0 13 10c0 .736.408 1.37 1.007 1.708c-.558 1.911-1.947 2.979-3.573 2.979c-1.953 0-3.567-1.295-3.807-3.929c1.823-.133 4.331-1.249 4.331-3.555V3.624c0-.857-.356-1.657-.989-2.188a1.456 1.456 0 0 0-2.912.058A1.459 1.459 0 0 0 9.322 2.71c.185.248.694.59.694.914v3.579c0 1.671-2.783 2.827-3.752 2.827h-.797c-.654 0-3.498-.973-3.498-2.827V3.624c0-.32.598-.671.779-.918A1.459 1.459 0 1 0 3.541.024c-.791 0-1.432.631-1.455 1.417c-.622.529-1.07 1.333-1.07 2.183v3.579c0 2.356 2.365 3.469 4.207 3.56c.267 3.369 2.552 5.213 5.26 5.213c2.295 0 4.199-1.51 4.896-4.052A1.97 1.97 0 0 0 16.938 10"></svg:path>`,
})
export class SiGlyphStethoscopeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStoreIcon],svg[si-glyph-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.021 7.028v5.014H4V7h-.965v8H15V7.028zM4 0h9.902v.929H4zm10.295 3.001l-.311-.955H4.021l-.336.955l-2.674 3.301l1.334.668h1.634V5.938h1.042V6.97h1.958V5.938h1.042V6.97h1.958V5.938h1.042V6.97h1.958V5.938h1.042V6.97h1.657l1.291-.668z"></svg:path>`,
})
export class SiGlyphStoreIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStoveIcon],svg[si-glyph-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0v3h14.958V0zm2 2H2V1h1zm2 0H4V1h1zM1 16h14.958V4.042H1zM5 6h7v1H5zM4 7.958h9v6H4z"></svg:path>`,
})
export class SiGlyphStoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrawberryIcon],svg[si-glyph-strawberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.367 2.084c.055-.154.58-.761.58-1.167S8.726 0 8.049 0c-.682 0-.982.511-.982.948c0 .396.525.97.582 1.114c-7.258 0-5.432 5.919-5.432 5.919s2.031-3.882 3.84-4.237q-.005.144-.006.287c0 2.734 1.996 4.951 1.996 4.951s1.809-2.217 1.809-4.951q-.002-.153-.006-.305c2.023.331 3.902 4.305 3.902 4.305s1.957-5.947-5.385-5.947"></svg:path><svg:path d="M10.873 5.608c0 2.392-2.838 4.798-2.838 4.798S5.14 7.979 5.14 5.558c-1.193.947-2.016 2.833-2.589 3.588c0 0 2.302 6.854 5.476 6.854s5.446-6.729 5.446-6.729c-.455-.601-1.317-2.617-2.6-3.663"></svg:path></svg:g>`,
})
export class SiGlyphStrawberryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStreet2Icon],svg[si-glyph-street-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.02 14.046v-13h-16v13zM14 6.953h2v1h-2zM9 1.992h4V4.02H9zM9 5h4.021v2H9zm0 3h4.021v2H9zm0 2.958h4v2H9zM5 6.953h2V8H5zm-3 0h2V8H2z"></svg:path>`,
})
export class SiGlyphStreet2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyIcon],svg[si-glyph-strolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="4.438" cy="14.459" rx="1.438" ry="1.459"></svg:ellipse><svg:ellipse cx="12.457" cy="14.419" rx="1.457" ry="1.419"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyArrowDownIcon],svg[si-glyph-strolley-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(1)"><svg:ellipse cx="4.438" cy="14.459" rx="1.438" ry="1.459"></svg:ellipse><svg:ellipse cx="12.457" cy="14.419" rx="1.457" ry="1.419"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g><svg:path d="m8.198 5.243l2.189 2.581a.795.795 0 0 0 1.143 0l2.188-2.581c.315-.324.364-.899.05-1.223h-1.804V2.045c0-.573-.434-1.037-.968-1.037c-.535 0-.969.464-.969 1.037V4.02H8.246c-.314.325-.363.899-.048 1.223"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyArrowUpIcon],svg[si-glyph-strolley-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(1)"><svg:ellipse cx="4.438" cy="14.459" rx="1.438" ry="1.459"></svg:ellipse><svg:ellipse cx="12.457" cy="14.419" rx="1.457" ry="1.419"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g><svg:path d="m13.768 3.757l-2.189-2.513a.81.81 0 0 0-1.143 0L8.247 3.757c-.314.315-.363.876-.049 1.19H10v1.922c0 .559.434 1.01.969 1.01s.969-.451.969-1.01V4.947h1.781c.315-.315.364-.875.049-1.19"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyArrowUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyPlusIcon],svg[si-glyph-strolley-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(1)"><svg:ellipse cx="4.438" cy="14.459" rx="1.438" ry="1.459"></svg:ellipse><svg:ellipse cx="12.457" cy="14.419" rx="1.457" ry="1.419"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g><svg:path d="M12.959 4.025H9.063c-.558 0-1.01.434-1.01.969s.452.969 1.01.969h3.896c.559 0 1.01-.434 1.01-.969s-.451-.969-1.01-.969"></svg:path><svg:path d="M11.979 6.942V3.046c0-.558-.434-1.01-.969-1.01s-.969.452-.969 1.01v3.896c0 .559.434 1.01.969 1.01s.969-.451.969-1.01"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyRemoveIcon],svg[si-glyph-strolley-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(1)"><svg:circle cx="4.469" cy="14.469" r="1.469"></svg:circle><svg:ellipse cx="12.467" cy="14.45" rx="1.467" ry="1.45"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g><svg:path d="M12.959 5.025H9.063c-.558 0-1.01.434-1.01.969s.452.969 1.01.969h3.896c.559 0 1.01-.434 1.01-.969s-.451-.969-1.01-.969"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSubwayIcon],svg[si-glyph-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5 15.979h-.979l1-4H6zm8 0h-.979l-1-4H12z"></svg:path><svg:path d="M5 14h6.9v.926H5zM11.988.038H5.095c-2.242 0-3.054.688-3.054 2.775v7.784c0 1.848.813 2.441 2.984 2.441h7.725c1.574 0 2.291-.602 2.291-2.44V2.812c0-2.087-.81-2.775-3.053-2.775zM6.213 1h4.574c.117 0 .213.226.213.5c0 .273-.096.5-.213.5H6.213C6.096 2 6 1.773 6 1.5c0-.274.096-.5.213-.5m-.197 10.016H3.969V8.985h2.047zm7 0h-2.047V8.985h2.047zm.037-5.235c0 1.064-.166 1.257-1.128 1.257H5.091c-.964 0-1.127-.146-1.127-1.21V4.156c0-1.062.163-1.198 1.127-1.198h6.834c.962 0 1.128.198 1.128 1.261z"></svg:path></svg:g>`,
})
export class SiGlyphSubwayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSuitcaseIcon],svg[si-glyph-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3v12.969h7.99V3zm9.037.031V16h.711C15.992 16 17 15.021 17 13.812V5.216c0-1.205-1.008-2.185-2.252-2.185zM1 5.217v8.596c0 1.208 1.018 2.188 2.276 2.188h.685V3.032h-.685C2.018 3.031 1 4.011 1 5.217M9.968.047H8.019c-1.25 0-2.009.871-2.009 1.944h.961c0-.588.327-1.037 1.048-1.037h1.949c.719 0 1.057.45 1.057 1.037h.957c0-1.073-.763-1.944-2.014-1.944"></svg:path>`,
})
export class SiGlyphSuitcaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSuitcasePersonIcon],svg[si-glyph-suitcase-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.437 3C1.643 3 .999 3.655.999 4.465v8.07c0 .81.644 1.465 1.438 1.465h13.125c.795 0 1.438-.655 1.438-1.465v-8.07C17 3.655 16.357 3 15.562 3zm6.56 1.932c.783 0 1.42.698 1.42 1.559s-.637 2.51-1.42 2.51s-1.419-1.648-1.419-2.51s.636-1.559 1.419-1.559m3.934 7.185H5.072s-.134-3.171 1.883-3.171c.421.611 1.001 1.2 2.065 1.2c1.066 0 1.574-.594 1.992-1.214c2.268.001 1.919 3.185 1.919 3.185"></svg:path><svg:path d="M7.143 2.617c0-.35.318-.635.711-.635h2.328c.392 0 .71.285.71.635v.48h1.025V2.12c0-.607-.554-1.103-1.233-1.103H7.278c-.682 0-1.234.495-1.234 1.103v.977h1.1v-.48z"></svg:path></svg:g>`,
})
export class SiGlyphSuitcasePersonIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphSyringeIcon],svg[si-glyph-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="m.032 4.258l.647.648L4.892.693L4.245.046z"></svg:path><svg:path fill="currentColor" d="M1.844 3.207L3.45 4.813l1.4-1.4l-1.606-1.605z"></svg:path><svg:path d="M5.931 5.487h1.104v6.062H5.931zm1.917-2.366h1.105v6.062H7.848z"></svg:path><svg:path fill="currentColor" d="m13.548 15.369l1.749-.928l-2.629-2.731l-1.391 1.39zM6.79 1.974L1.633 7.13c-.131.131-.154.452-.02.585c.131.133.494.283.626.152l.513-.514l5.672 5.671l-.014.014l.671.673l.68-.68l.741.742l2.799-2.8l-.741-.741l.722-.721l-.672-.672l-.016.015l-5.671-5.672l.47-.47c.131-.132-.029-.504-.162-.637c-.131-.132-.309-.229-.441-.101M5.493 4.581l.781-.78l4.287 4.286l-.781.781zM3.372 6.703l.781-.781l4.286 4.287l-.78.78zm5.687 5.687l-.75-.751l2.888-2.888l.751.751z"></svg:path></svg:g>`,
})
export class SiGlyphSyringeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTShirtIcon],svg[si-glyph-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.021 1.062c-.917 0-1.705-.27-2.04-1.062c-.206.012-.735.033-.935.067c.383 1.088 1.752 1.873 2.975 1.873s2.58-.785 2.963-1.873c-.199-.034-.719-.056-.922-.067c-.334.793-1.123 1.062-2.041 1.062"></svg:path><svg:path d="M13.396.289c-.82 1.62-2.479 2.742-4.412 2.742c-1.924 0-3.572-1.11-4.398-2.717C2.33 1.33 1.043 3.83 1.043 6.466v.486h2.988v7.983h9.948V6.952H17v-.486c0-2.663-1.306-5.183-3.604-6.177"></svg:path></svg:g>`,
})
export class SiGlyphTShirtIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTabletIcon],svg[si-glyph-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.995.043h-8.99A2.005 2.005 0 0 0 2 2.047v11.95C2 15.102 2.899 16 4.005 16h8.99A2.005 2.005 0 0 0 15 13.997V2.047A2.005 2.005 0 0 0 12.995.043m-2.912 14.999H6.93v-1.114h3.153zM13 13H4V1.97h9z"></svg:path>`,
})
export class SiGlyphTabletIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTagIcon],svg[si-glyph-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.379.681l-.09.09l-.034-.035c-.854-.854-2.275-.818-3.173.08l-.255.254c-.896.897-.933 2.318-.078 3.173l.034.034l-.164.165c-.773.772-.801 1.999-.06 2.738l8.325 8.328c.742.74 1.967.712 2.742-.061l3.758-3.758c.772-.773.801-1.999.061-2.739L8.117.622c-.74-.74-1.967-.713-2.738.059m-.856 4.427a1.596 1.596 0 0 1-1.592-1.6c0-.881.714-1.597 1.592-1.597a1.599 1.599 0 0 1 0 3.197"></svg:path>`,
})
export class SiGlyphTagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTag1Icon],svg[si-glyph-tag-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.546 15.951c-.509.509-.515-4.982-.515-4.982s-5.493-.007-4.983-.516L10.061.439c.508-.508 1.357-.484 1.896.053l3.55 3.551c.539.539.561 1.388.054 1.896z"></svg:path>`,
})
export class SiGlyphTag1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTagOnePlusIcon],svg[si-glyph-tag-one-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.613 1.047l-4.502.003l-7.779 7.77a1.14 1.14 0 0 0 0 1.607l5.244 5.242a1.135 1.135 0 0 0 1.605 0l7.787-7.707l.002-4.534zM4.984 9.014l1.023-1.023l-.941-.935l.973-.968l.939.938l1.025-1.021l.988.985l-1.024 1.021l.94.937l-.973.967l-.938-.937l-1.024 1.02zm2.137 4.543l-.789-.788l4.243-4.243l-.727-.725l.786-.788l1.514 1.514zM15.942.36h.984v1.796h-.984z"></svg:path>`,
})
export class SiGlyphTagOnePlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTagPriceIcon],svg[si-glyph-tag-price-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.46 8.894L7.127.545c-.74-.74-1.967-.714-2.74.061l-.089.089l-.034-.034C3.409-.195 1.987-.16 1.088.74L.833.996C-.066 1.895-.1 3.319.755 4.175l.035.035l-.165.166c-.773.773-.801 2.002-.06 2.744l8.333 8.349c.74.741 1.969.714 2.74-.06l3.763-3.77c.774-.775.8-2.003.059-2.745M3.433 5.168c-.866 0-1.567-.734-1.569-1.641c0-.906.703-1.64 1.569-1.64S4.997 2.622 5 3.527c-.003.907-.703 1.641-1.567 1.641m9.001 7.909l-1.084-1.085c-.652.463-1.469.609-2.184.362a.63.63 0 0 1-.373-.333a.66.66 0 0 1-.02-.516a.683.683 0 0 1 .855-.41c.238.082.51.047.761-.068L9.136 9.769c-.953.682-2.219.662-2.992-.109c-.778-.777-.795-2.047-.104-2.998L4.978 5.599l.629-.629l1.069 1.065c.658-.461 1.476-.607 2.192-.359a.65.65 0 0 1 .392.85a.69.69 0 0 1-.857.409c-.238-.083-.508-.049-.758.063l1.262 1.257c.947-.665 2.198-.638 2.965.128c.767.767.797 2.013.133 2.955l1.08 1.076z"></svg:path><svg:path d="M7.124 8.722c.268.267.698.295 1.081.107L7.017 7.636c-.189.385-.162.817.107 1.086m3.8.629c-.258-.259-.668-.292-1.041-.124l1.166 1.162c.167-.371.133-.781-.125-1.038"></svg:path></svg:g>`,
})
export class SiGlyphTagPriceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTankIcon],svg[si-glyph-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4 1V0h-.969v1L3 4.031h1.969V1zm5.031-1v1.031H8v4h2V0z"></svg:path><svg:path d="M2 2h10.037v1H2zm0 6h4v4.004H2zm2.568-4H3.453C2.109 4 2 3.96 2 5.142v1.829h4V5.142C6 3.96 5.911 4 4.568 4M3.453 15.969h1.115c1.343 0 1.432.041 1.432-1.143v-1.822H2v1.822c0 1.184.109 1.143 1.453 1.143M9.557 4.051H8.465C7.15 4.051 7 4.01 7 5.193v1.812h4V5.193c0-1.183-.129-1.142-1.443-1.142M8.465 16.007h1.092c1.314 0 1.443.041 1.443-1.143v-1.851H7v1.851c0 1.184.149 1.143 1.465 1.143M7 8h4v4H7zM1 6v3.006h.969V6zm10 0v3.01h.969V6zm0 5v2.971h.969V11zM1 11v3.028h.969V11z"></svg:path><svg:path d="M15.75 14.031c-.506 0-.955-.195-1.336-.58c-1.725-1.744-1.349-4.514-1.349-6.392c0-.729-.065-1.469-.065-2.024c0-1.348-.219-2.104-.962-2.104l-.007-.837S14 1.5 14 5.028c0 .562-.003 1.23-.012 1.966c-.041 3.481-.294 4.308 1.137 5.755c.191.193.389.283.625.283z"></svg:path><svg:ellipse cx="15.484" cy="13.469" rx="1.484" ry="1.469"></svg:ellipse></svg:g>`,
})
export class SiGlyphTankIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTargerIcon],svg[si-glyph-targer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:ellipse cx="5.469" cy="9.441" rx="1.469" ry="1.441"></svg:ellipse><svg:path d="m14.994 3.671l-1.38 1.394l-2.149-.812l-5.746 5.691c-.117.109-.387.031-.554-.139c-.163-.168-.216-.416-.101-.528l5.699-5.721l-.826-2.103L11.396.025l.597 3.008c.004.004.012.006.016.012c.026.03 2.985.626 2.985.626"></svg:path><svg:path d="M5.514 14.994C2.499 14.994.047 12.529.047 9.5s2.452-5.494 5.467-5.494S10.98 6.47 10.98 9.5c-.001 3.029-2.453 5.494-5.466 5.494m0-10.094C2.993 4.9.943 6.963.943 9.5s2.051 4.6 4.571 4.6s4.57-2.063 4.57-4.6s-2.05-4.6-4.57-4.6"></svg:path><svg:path d="M5.507 12.99a3.476 3.476 0 0 1-3.472-3.471a3.476 3.476 0 0 1 3.472-3.471a3.475 3.475 0 0 1 3.47 3.471a3.475 3.475 0 0 1-3.47 3.471m0-6.066A2.6 2.6 0 0 0 2.911 9.52a2.6 2.6 0 0 0 2.596 2.596A2.6 2.6 0 0 0 8.102 9.52a2.6 2.6 0 0 0-2.595-2.596m-3.593 8.86a.51.51 0 0 1-.722.013a.51.51 0 0 1 .014-.72l1.467-1.467c.204-.203.911.504.708.707zm7.904-.708a.51.51 0 0 1 .012.722a.51.51 0 0 1-.719-.014l-1.467-1.467c-.203-.204.504-.911.707-.708z"></svg:path></svg:g>`,
})
export class SiGlyphTargerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTeaCupIcon],svg[si-glyph-tea-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2h11.968v1.976H0zm9.469 11.935H2.54C.06 13.935.02 11.5.02 11.5V5.042h11.968v6.347s-.039 2.546-2.519 2.546m3.418-9.9h-.877v1.902c.678 0 2.095-.375 2.095 1.161v.778c0 1.149-.729 1.206-2.095 1.206v1.859h.877c1.709 0 3.092-1.091 3.092-2.436V6.468c0-1.343-1.383-2.433-3.092-2.433"></svg:path>`,
})
export class SiGlyphTeaCupIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTeethIcon],svg[si-glyph-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.715 9.02c0 3.025-.564 6.867-2.281 6.867c-2.814 0-1.518-5.886-3.943-5.886s-1.605 5.917-3.922 5.917c-1.629 0-2.277-3.916-2.277-6.898c0-1.807-2.393-4.771-.62-7.392C3.846-1.586 5.94.952 8.437.952c2.535 0 4.512-2.485 6.828.676c1.836 2.509-.55 5.616-.55 7.392"></svg:path>`,
})
export class SiGlyphTeethIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTelephoneBoxIcon],svg[si-glyph-telephone-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 15.021V4h-1V2.917h.852C12.852 1.306 11.021.083 8 .083S3 1.306 3 2.917h1.023V4H3v11.021H2V16h12v-.979zM5 3h6v1H5zm1 12.021H5v-2.04h1zM6 12H5v-2h1zm0-3H5V7h1zm0-3H5V5h1zm3 9.021H7v-2.04h2zm-2-3.063v-2h2v2zM7 9V7h2v2zm2-3.042H7v-1h2zm.958-.979H11v1.04H9.958zM11 7v2h-1V7zm.021 8.021H10v-2.04h1.021zm0-3.002H10V9.98h1.021z"></svg:path>`,
})
export class SiGlyphTelephoneBoxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTelescopeIcon],svg[si-glyph-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m13.058 1.4l.659 1.949l-.943.303l-.429-1.273l-8.593 2.906l.686 2.027l-.933.289l-.687-2.027l-.526.215c-.11.22-.132.503-.327.853l-2.004.682l.847 2.507l1.794-.645c.377.162.783.268 1.014.368l10.947-3.696l.216.637l1.183-.4l-1.719-5.093z"></svg:path><svg:path d="M8.916 13.09V8.83c.391-.229.385-.699.387-1.187a1.32 1.32 0 0 0-1.312-1.326a1.32 1.32 0 0 0-1.324 1.316c-.002.494-.003.921.396 1.149v4.255c-1.896.102-3.07 1.287-3.07 1.931h7.999c-.001-.643-1.18-1.778-3.076-1.878"></svg:path></svg:g>`,
})
export class SiGlyphTelescopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTelevisionIcon],svg[si-glyph-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.381 5.06H9.468l2.739-3.79l-1.012-.223L8.303 5.06h-.008L5.403 1.047l-1.014.223l2.739 3.79H.656a.58.58 0 0 0-.593.571v10.785c0 .317.265.572.593.572h14.723a.58.58 0 0 0 .594-.572V5.631a.58.58 0 0 0-.592-.571M13 14.67c0 .206-.152.372-.342.372H2.263c-.188 0-.341-.166-.341-.372V7.304c0-.204.152-.372.341-.372h10.395c.189 0 .342.168.342.372zm2 .372h-1V14h1z"></svg:path>`,
})
export class SiGlyphTelevisionIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTennisRacketBallIcon],svg[si-glyph-tennis-racket-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:circle cx="13.953" cy="13.953" r="1.953"></svg:circle><svg:path d="M14.754 1.265C12.76-.733 9.038-.26 6.462 2.32c-1.567 1.564-2.351 3.555-2.28 5.321a.34.34 0 0 0-.106.327c.462 2.098-1.378 4.256-1.398 4.279a.3.3 0 0 0-.054.096l-2.38 2.38c-.288.288-.299.744-.024 1.02l.022.02c.272.275.73.265 1.017-.025l2.455-2.452c.167-.127 2.535-1.871 4.24-1.386a.34.34 0 0 0 .306-.062c1.797.111 3.841-.677 5.442-2.28c2.576-2.577 3.048-6.298 1.052-8.293M6.225 9.84a3.1 3.1 0 0 1-.604-.869l1.355-1.356l1.429 1.43l-1.37 1.371a3.1 3.1 0 0 1-.81-.576m1.459-2.931l1.414-1.416l1.43 1.43l-1.416 1.414zm1.427-2.814L7.652 2.636a7.1 7.1 0 0 1 1.709-1.121l1.166 1.165zm2.108-.723l1.43 1.43l-1.415 1.414l-1.429-1.428zm-4.274-.031l1.46 1.461L6.99 6.216L5.825 5.05c.275-.59.648-1.17 1.12-1.709m4.274 4.274l1.504 1.503a7.2 7.2 0 0 1-1.709 1.121L9.805 9.03zm.707-.706l1.415-1.416l1.208 1.209a7 7 0 0 1-1.12 1.709zm3-1.242l-.879-.879l1.008-1.009c.088.593.041 1.238-.129 1.888m-.776-3.753c.238.239.426.514.574.811l-1.37 1.37l-1.429-1.429l1.355-1.354c.32.15.615.347.87.602m-1.945-.913l-.972.973l-.836-.836a4.8 4.8 0 0 1 1.808-.137M5.449 6.087l.834.836l-.973.973a4.8 4.8 0 0 1 .139-1.809m-1.551 6.225c-.023-.033-.036-.071-.064-.1l-.021-.021c-.029-.029-.066-.041-.099-.064c.363-.543.835-1.393 1.051-2.375a4 4 0 0 0 1.491 1.52c-.934.226-1.799.69-2.358 1.04m4.192-1.567l1.008-1.009l.879.879c-.651.171-1.295.218-1.887.13"></svg:path></svg:g>`,
})
export class SiGlyphTennisRacketBallIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTent1Icon],svg[si-glyph-tent-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 9v2.131c-2.678-1.054-5.068-5.984-6.249-8.422L10.916.5a.36.36 0 0 0-.1-.455c-.137-.094-.316-.043-.4.115l-.992 1.88c-.218-.438-.364-.703-.424-.703s-.206.265-.424.703L7.584.16C7.5.002 7.32-.049 7.184.045a.36.36 0 0 0-.1.455l1.165 2.209c-1.186 2.447-3.59 7.406-6.28 8.434V9H1v6.977h.969v-.028h4v-4.193C8.321 9.757 9 6.005 9 6.005s.861 3.71 3.016 5.717v4.228H16v.028h1V9z"></svg:path>`,
})
export class SiGlyphTent1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTentCampIcon],svg[si-glyph-tent-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.021 14.023c-2.701-1.25-5.112-7.249-6.289-10.164l1.205-2.284a.355.355 0 0 0-.1-.454c-.138-.094-.316-.043-.4.114L9.436 3.132c-.225-.542-.375-.871-.436-.871c-.06 0-.207.319-.426.847L7.563 1.192c-.084-.157-.264-.208-.4-.114a.355.355 0 0 0-.1.454l1.215 2.302C7.107 6.733 4.699 12.739 2 14.013V12.02H1V15h4.666C8.268 13.082 9 6.926 9 6.926s.943 6.156 3.334 8.074L17 14.997V12.02h-.979z"></svg:path>`,
})
export class SiGlyphTentCampIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTestTubeIcon],svg[si-glyph-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.921.969c0-.937-.091-.938-1.05-.938H5.13c-.958 0-1.052.001-1.052.938h.953v2.94L2.019 14.238c0 .939.777 1.699 1.736 1.699h9.489c.958 0 1.736-.76 1.736-1.699L11.992 3.879l-.014-2.91zm1.048 12.637c.271.884-.203 1.435-1.432 1.435H4.562c-1.401 0-1.745-.593-1.432-1.435l2.786-9.652L5.905.941h5.125V3.93z"></svg:path><svg:path d="M10.039 6.031h-3.02l-1.838 6.308c-.355 1.15-.24 1.584 1.408 1.584h3.879c1.633 0 1.67-.518 1.409-1.584z"></svg:path></svg:g>`,
})
export class SiGlyphTestTubeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTestTube2Icon],svg[si-glyph-test-tube-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.726.04L8.32 1.443l.703.703l-8.48 8.323c-.738.735-.674 1.996.143 2.811l2.031 2.025c.816.814 2.047.91 2.785.173l8.514-8.353l.684.684l1.408-1.404zm-6.37 14.358l-1.771-1.771c-.502-.501-.591-1.232-.195-1.623l8.35-8.225l3.59 3.592l-8.351 8.222c-.395.395-1.123.305-1.623-.195"></svg:path><svg:path d="M5.273 12.78c-.34.336-.904.316-1.406-.184l-.376-.377c-.503-.504-.636-1.184-.298-1.518l3.858-3.858l3.203.909z"></svg:path></svg:g>`,
})
export class SiGlyphTestTube2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTestTubeEmptyIcon],svg[si-glyph-test-tube-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1V.023H6V1h1.012v6L3 15s0 .962 1 .962h10c1 0 1-.962 1-.962l-4.042-8l-.02-6zm2 14.031H4L8 7V1h2v6z"></svg:path>`,
})
export class SiGlyphTestTubeEmptyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTextSearchIcon],svg[si-glyph-text-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 0h13.931v.983H0zm0 2h13.931v.942H0zm0 12h10.958v.951H0zm8.49-9.946C6.01 4.054 4 6.047 4 8.506s2.01 4.452 4.49 4.452s4.489-1.993 4.489-4.452s-2.008-4.452-4.489-4.452m0 7.964a3.54 3.54 0 1 1 0-7.08a3.54 3.54 0 1 1 0 7.08m7.448 2.593l-1.361 1.361l-2.996-2.996s.57-.073.931-.434c.361-.362.431-.928.431-.928z"></svg:path><svg:path d="M8.677 6.43c.526 0 .329-.4-.403-.4a2.267 2.267 0 0 0-2.279 2.256c0 .725.404.921.404.4C6.398 7.44 7.418 6.43 8.677 6.43M0 4h3.973v.962H0zm0 2h3v.973H0zm0 2h2.98v.993H0zm0 2h3.02v.973H0zm0 2h4v.931H0z"></svg:path></svg:g>`,
})
export class SiGlyphTextSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphThermometerIcon],svg[si-glyph-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.984 9.261V.735c0-.371-.371-.672-.83-.672h-1.31c-.458 0-.829.301-.829.672V9.26c-1.273.519-2.016 1.766-2.016 3.225a3.485 3.485 0 0 0 6.968 0c.002-1.459-.711-2.705-1.983-3.224M7.947.957H9.02V10H7.947z"></svg:path>`,
})
export class SiGlyphThermometerIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphThreeBallIcon],svg[si-glyph-three-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.518 7.071C2.046 7.071.04 9.066.04 11.529c0 2.461 2.006 4.456 4.478 4.456s4.476-1.995 4.476-4.456a4.47 4.47 0 0 0-4.476-4.458m.564 1.383a3.64 3.64 0 0 0-3.633 3.642c0 .822-.717.47-.717-.719a3.637 3.637 0 0 1 3.635-3.641c1.186 0 1.535.718.715.718"></svg:path><svg:path d="M11.518 7.071a4.45 4.45 0 0 0-2.742.957q.195.236.361.493a3.6 3.6 0 0 1 2.23-.785c1.186 0 1.535.718.715.718c-.953 0-1.812.376-2.461.978c.268.646.418 1.354.418 2.098a5.46 5.46 0 0 1-1.264 3.499c.76.591 1.704.957 2.742.957c2.472 0 4.476-1.995 4.476-4.456a4.466 4.466 0 0 0-4.475-4.459m-3.5.126a5.57 5.57 0 0 1 4.678-1.104a4.4 4.4 0 0 0 .298-1.563c0-2.463-2.004-4.458-4.476-4.458S4.04 2.067 4.04 4.53c0 .51.104.992.263 1.448c.072-.003.143-.011.215-.011c1.326 0 2.542.462 3.5 1.23M8.367.736c1.186 0 1.535.718.715.718a3.64 3.64 0 0 0-3.633 3.642c0 .822-.717.47-.717-.719A3.637 3.637 0 0 1 8.367.736"></svg:path></svg:g>`,
})
export class SiGlyphThreeBallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTicTacToeIcon],svg[si-glyph-tic-tac-toe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.492 9.019a3.47 3.47 0 1 0 .001 6.94a3.47 3.47 0 0 0-.001-6.94m.041 6.098a2.62 2.62 0 0 1-2.629-2.609a2.62 2.62 0 0 1 2.629-2.609c1.453 0 2.632 1.169 2.632 2.609c0 1.441-1.179 2.609-2.632 2.609M4.512.079a3.427 3.427 0 1 0 .002 6.854A3.427 3.427 0 0 0 4.512.079m0 6.016a2.589 2.589 0 0 1 0-5.176a2.59 2.59 0 0 1 2.589 2.587a2.59 2.59 0 0 1-2.589 2.589M8.006 9.97L7.1 9.063l-2.56 2.561l-2.561-2.561l-.907.907l2.561 2.561l-2.561 2.559l.907.906l2.561-2.558l2.56 2.558l.906-.906l-2.56-2.559zM17.057.926l-.912-.913l-2.577 2.577L10.992.013l-.911.913l2.576 2.576l-2.576 2.574l.911.912l2.576-2.575l2.577 2.575l.912-.912l-2.576-2.574z"></svg:path>`,
})
export class SiGlyphTicTacToeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTimeGlassIcon],svg[si-glyph-time-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12 2.026C12 .908 11.135 0 10.065 0h-3.12C5.877 0 5.01.908 5.01 2.026v3.536l2.021 2.427l-2.021 2.448v3.516c0 1.118.866 2.025 1.935 2.025h3.12c1.069 0 1.935-.907 1.935-2.025v-3.578L9.906 8.001L12 5.625zM11 5L9 7.989L11 11v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3l2-3.011L6 5.02V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"></svg:path><svg:path d="M10 14H7v-2l1.5-1.979L10 12zm0-10L8.521 5.979L7 4z"></svg:path></svg:g>`,
})
export class SiGlyphTimeGlassIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTimeReloadIcon],svg[si-glyph-time-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.549 1.046c-3.859 0-6.819 3.192-7.166 6.985H1.059l1.892 1.952l2.065-1.952H3.677c.331-3.229 2.747-5.958 5.937-5.958c3.412 0 6.189 2.888 6.189 6.437s-2.777 6.438-6.189 6.438c-1.695 0-3.232-.713-4.35-1.865l-.821.826a7.36 7.36 0 0 0 5.106 2.065c4.092 0 7.419-3.349 7.419-7.464s-3.327-7.464-7.419-7.464"></svg:path><svg:path d="M9 3.99V9h3.96V8H9.97V3.99z"></svg:path></svg:g>`,
})
export class SiGlyphTimeReloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTimerIcon],svg[si-glyph-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m12.115 2.612l.525-.812l.85.554l.484-.75L11.527.011l-.483.75l.849.553l-.512.788A7.4 7.4 0 0 0 7.502.999C3.387.999.041 4.352.041 8.475c0 4.12 3.346 7.474 7.461 7.474c4.113 0 7.461-3.354 7.461-7.474a7.46 7.46 0 0 0-2.848-5.863M7.502 14.011c-3.047 0-5.527-2.488-5.527-5.544c0-3.058 2.48-5.545 5.527-5.545s5.527 2.487 5.527 5.545c0 3.055-2.48 5.544-5.527 5.544"></svg:path><svg:path d="M7 4h1v5H7z"></svg:path><svg:path d="M7 8h3v1H7z"></svg:path></svg:g>`,
})
export class SiGlyphTimerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphToiletIcon],svg[si-glyph-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.777 15.974h-6.29s3.013-5.98-1.474-5.98V8.001h11.966s.087 1.217-2.112 2.686c-3.387 2.26-2.09 5.287-2.09 5.287M8 6h7.979v.979H8zM3.012.009v6.974H7V.009zM6 3.036H5V1h1z"></svg:path>`,
})
export class SiGlyphToiletIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphToolBoxIcon],svg[si-glyph-tool-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.988 9.031V8H5.031v1.031H2.938V8H1.014v6H17V8h-1.969v1.031zM5 5.986v.982h8v-.982h2v.982h1.987V4H1v2.968h1.974v-.982zm2.003-3.043H6.01V1.031h5.959v1.912h-.96v-.956H7.003z"></svg:path>`,
})
export class SiGlyphToolBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrafficLightIcon],svg[si-glyph-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.671.017H7.296C6.578.017 6 .608 6 1.334v10.342c0 .727.578 1.317 1.296 1.317h2.375c.717 0 1.297-.591 1.297-1.317V1.334c0-.727-.58-1.317-1.297-1.317m-1.167 11.99a1.536 1.536 0 0 1-1.539-1.534c0-.846.69-1.535 1.539-1.535a1.535 1.535 0 1 1 0 3.069m.01-4.008a1.53 1.53 0 0 1-1.528-1.534a1.53 1.53 0 1 1 3.059 0c0 .847-.683 1.534-1.531 1.534m-.022-4.006c-.805 0-1.461-.668-1.461-1.491s.656-1.494 1.461-1.494c.812 0 1.464.67 1.464 1.494c0 .823-.652 1.491-1.464 1.491m4.149-.014h.524c.337 0 1.811-2.194 1.811-2.194c0-.418-.274-.76-.611-.76h-1.724c-.338 0-.611.342-.611.76v1.434c-.001.419.273.76.611.76m1.723 1.04h-1.726c-.336 0-.609.339-.609.756v1.423c0 .418.273.756.609.756h.524c.337 0 1.812-2.179 1.812-2.179c.001-.418-.275-.756-.61-.756m-.02 4.014h-1.725c-.336 0-.61.342-.61.761v1.433c0 .422.274.761.61.761h.525c.336 0 1.811-2.193 1.811-2.193c0-.42-.274-.762-.611-.762M4.355 1.024H2.64c-.334 0-.605.337-.605.749c0 0 1.463 2.163 1.799 2.163h.521c.335 0 .605-.337.605-.749V1.773c.001-.412-.27-.749-.605-.749m.02 4.015H2.66c-.334 0-.605.339-.605.756c0 0 1.463 2.178 1.799 2.178h.521c.334 0 .605-.338.605-.756V5.795c0-.417-.271-.756-.605-.756m.002 4.015H2.661c-.334 0-.606.332-.606.739c0 0 1.463 2.131 1.799 2.131h.523c.334 0 .604-.33.604-.739V9.793c0-.407-.27-.739-.604-.739M7 13h2.973v3.128H7z"></svg:path>`,
})
export class SiGlyphTrafficLightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrainIcon],svg[si-glyph-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.979 12.484a1.48 1.48 0 0 0-2.956 0l-.003.02a1.48 1.48 0 1 0 2.96 0zm5.019-.03a1.484 1.484 0 0 0-1.494-1.433c-.814 0-1.473.64-1.492 1.433l-.004.034c0 .81.67 1.467 1.496 1.467c.828 0 1.498-.657 1.498-1.467zm4 0a1.484 1.484 0 0 0-1.494-1.433c-.814 0-1.473.64-1.492 1.433l-.004.034c0 .81.67 1.467 1.496 1.467c.828 0 1.498-.657 1.498-1.467z"></svg:path><svg:path d="M16.938 12.98c0-.965-.922-1.971-.922-1.971h-.047V8.015h-.984v-3l-1.962.024v3l-1.054-.024V6.036h-.953v1.979H7.969V4.953h1V3H1.016v1.938h1v5.125H1.03v2.922h.979a2.6 2.6 0 0 1-.048-.48c0-.012.005-.033.005-.033a2.54 2.54 0 0 1 2.535-2.513a2.54 2.54 0 0 1 2.537 2.513c0 .01.006.021.006.033c0 .164-.02.324-.049.48h8.975v-.004zM6 8.041H3.992V4.969H6z"></svg:path></svg:g>`,
})
export class SiGlyphTrainIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrainRailIcon],svg[si-glyph-train-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.989 16h-.978l2-16h.978zm9 0h-.978l-2-16h.978z"></svg:path><svg:path d="M3 13h12v.916H3zm0-3h12v.916H3zm1-3h10v.916H4zm0-3h10v.916H4zm1-3h8v.916H5z"></svg:path></svg:g>`,
})
export class SiGlyphTrainRailIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrashIcon],svg[si-glyph-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.982 5.073l1.025 10.266c0 .366.307.661.684.661h7.58a.673.673 0 0 0 .684-.661L12.98 5.073zm6.051 8.995H6.961V6.989h1.072zm2 0H8.961l1-7.079h1.072zm-4 0H4.961l-1-7.079h1.072zm7.042-11.963H9.937V.709C9.937.317 9.481 0 9.081 0H5.986c-.4 0-.955.225-.955.615v1.396l-3.145.094a.717.717 0 0 0-.727.708v1.155H13.8V2.813a.715.715 0 0 0-.725-.708M5.947 1.44c0-.312.351-.565.783-.565h1.564c.432 0 .782.254.782.565v.665h-3.13z"></svg:path>`,
})
export class SiGlyphTrashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTreeIcon],svg[si-glyph-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.779 12.18l-2.984-3.679s1.601.436 1.775.436c.465 0 .195-.517 0-.714l-2.385-3.031s1.148-.274 1.565-.274s.197-.517 0-.714L9.4.061a.505.505 0 0 0-.714 0l-3.395 4.1c-.198.197-.486.715 0 .715s1.622.316 1.622.316L4.325 8.079c-.198.197-.557.714 0 .714c.319 0 1.95-.291 1.95-.291l-2.958 3.687c-.197.196-.557.714 0 .714s4.691-1.007 4.691-1.007v3.045c0 .537.436.973.975.973c.537 0 1.015-.436 1.015-.973v-3.045s4.375.999 4.78.999s.198-.519.001-.715"></svg:path>`,
})
export class SiGlyphTreeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTreesIcon],svg[si-glyph-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.986 14.203v-2.278c1.52-.339 2.967-1.952 2.967-3.896c0-2.19-1.648-7.982-3.451-7.982S9.047 5.839 9.047 8.029c0 1.901 1.513 3.489 2.984 3.874v2.21a62 62 0 0 0-3.011-.072a24 24 0 0 0-3.067.197v-2.672c1.058-.311 1.97-1.418 1.97-2.75c0-1.57-1.095-5.781-2.442-5.781c-1.35 0-2.442 4.211-2.442 5.781c0 1.354.905 2.48 1.993 2.769v2.793c-2.395.413-4.01 1.113-4.01 1.567h16c-.001-.456-1.627-1.531-4.036-1.742"></svg:path>`,
})
export class SiGlyphTreesIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDoubleArrowDownIcon],svg[si-glyph-triangle-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.044 16.565a1.49 1.49 0 0 1-2.104 0l-6.442-6.444c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1.001 2.103z"></svg:path><svg:path d="M10.044 9.565a1.49 1.49 0 0 1-2.104 0L1.498 3.121c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1.001 2.103z"></svg:path></svg:g>`,
})
export class SiGlyphTriangleDoubleArrowDownIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDoubleArrowLeftIcon],svg[si-glyph-triangle-double-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1.446 10.052a1.49 1.49 0 0 1 0-2.104L7.89 1.506c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path><svg:path d="M8.446 10.052a1.49 1.49 0 0 1 0-2.104l6.444-6.442c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path></svg:g>`,
})
export class SiGlyphTriangleDoubleArrowLeftIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDoubleArrowRightIcon],svg[si-glyph-triangle-double-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.113 15.495c-.582.581-2.103.9-2.103-1.001V1.506c0-1.839 1.521-1.582 2.103-1l6.444 6.442a1.49 1.49 0 0 1 0 2.104z"></svg:path><svg:path d="M2.113 15.495c-.582.581-2.103.9-2.103-1.001V1.506c0-1.839 1.521-1.582 2.103-1l6.444 6.442a1.49 1.49 0 0 1 0 2.104z"></svg:path></svg:g>`,
})
export class SiGlyphTriangleDoubleArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDoubleArrowUpIcon],svg[si-glyph-triangle-double-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.446 6.773c.581.581.9 2.103-1.001 2.103H1.457c-1.839 0-1.582-1.521-1-2.103L6.898.329a1.49 1.49 0 0 1 2.104 0z"></svg:path><svg:path d="M15.446 13.773c.581.581.9 2.103-1.001 2.103H1.457c-1.839 0-1.582-1.521-1-2.103l6.441-6.444a1.49 1.49 0 0 1 2.104 0z"></svg:path></svg:g>`,
})
export class SiGlyphTriangleDoubleArrowUpIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleDownIcon],svg[si-glyph-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.106 12.69a1.49 1.49 0 0 1-2.104 0L1.561 6.246c-.582-.581-.839-2.103 1-2.103h12.988c1.901 0 1.582 1.521 1 2.103z"></svg:path>`,
})
export class SiGlyphTriangleDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleLeftIcon],svg[si-glyph-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.446 10.052a1.49 1.49 0 0 1 0-2.104L9.89 1.506c.581-.582 2.103-.839 2.103 1v12.988c0 1.901-1.521 1.582-2.103 1.001z"></svg:path>`,
})
export class SiGlyphTriangleLeftIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleRightIcon],svg[si-glyph-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.113 15.495c-.582.581-2.103.9-2.103-1.001V1.506c0-1.839 1.521-1.582 2.103-1l6.444 6.442a1.49 1.49 0 0 1 0 2.104z"></svg:path>`,
})
export class SiGlyphTriangleRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleUpIcon],svg[si-glyph-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.96 2.392a1.49 1.49 0 0 1 2.104 0l6.442 6.444c.582.581.839 2.103-1 2.103H2.518c-1.902 0-1.582-1.521-1.001-2.103z"></svg:path>`,
})
export class SiGlyphTriangleUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolley2Icon],svg[si-glyph-trolley-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 1)"><svg:circle cx="4.437" cy="12.437" r="1.437"></svg:circle><svg:ellipse cx="10.452" cy="12.485" rx="1.452" ry="1.485"></svg:ellipse><svg:path d="M14.684.337c-.717 0-1.297.599-1.297 1.338l-.172 1.343H.557c-.318 0-.541.287-.541.654c0 .139.01.27.072.375l1.211 5.454c.04.172.168.299.331.369a.5.5 0 0 0 .265.083H12.36l-.174 1.093H2.564c-.319 0-.501.056-.501.423s.182.474.501.474l10.79.001l1.16-8.948c.057.007.111.018.17.018c.715 0 1.295-.6 1.295-1.338c0-.74-.581-1.339-1.295-1.339m-1.938 5.772H11V3.968h2.078zM2.17 8.994l-.309-2.035h2.182v2.035zm5.799-5.025h2.047v2.047H7.969zm-.938 2.078H4.953V3.953h2.078zm-3-.01H1.834L1.52 3.971h2.512v2.066zm.938.932h2.062v2.078H4.969zm3-.016h2.062v2.094H7.969zm3 2.078V6.984h1.906l-.289 2.047z"></svg:path></svg:g>`,
})
export class SiGlyphTrolley2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyArrowDownIcon],svg[si-glyph-trolley-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M3.17 9.994h1.873V7.959H2.861zM6 8h2.062v2.078H6zm-.969-3.029H2.52l.314 2.066h2.197zM12 7.109h1.746l.332-2.14H12zM9 8h2.062v2.094H9zm2.969 2.031h1.617l.289-2.047h-1.906z"></svg:path><svg:path fill="currentColor" d="M4.039 13.484a1.437 1.437 0 1 0 2.768-.542H4.148c-.07.167-.109.351-.109.542m6.022.016c0 .821.65 1.485 1.453 1.485s1.451-.664 1.451-1.485c0-.197-.039-.385-.107-.557h-2.689c-.069.172-.108.36-.108.557m1.453-1.484q-.152 0-.293.03h.586a1.4 1.4 0 0 0-.293-.03"></svg:path><svg:path fill="currentColor" d="M11.221 12.046H3.564c-.319 0-.501.056-.501.423s.182.474.501.474h.583a1.435 1.435 0 0 1 2.659 0l3.362.001a1.46 1.46 0 0 1 1.053-.898"></svg:path><svg:path fill="currentColor" d="M15.684 1.337c-.717 0-1.297.599-1.297 1.338l-.172 1.343h-3.172v.951h-.027v2.047H8.969v-.974h-.938v1.005H5.953V4.953h.005v-.936H1.557c-.318 0-.541.287-.541.654c0 .139.01.27.072.375L2.299 10.5c.04.172.168.299.331.369a.5.5 0 0 0 .265.083H13.36l-.174 1.093h-1.379c.48.101.871.443 1.051.897h1.496l1.16-8.948c.057.007.111.018.17.018c.715 0 1.295-.6 1.295-1.338s-.581-1.337-1.295-1.337M2.52 4.971h2.512v2.066H2.835zm2.523 5.023H3.17l-.309-2.035h2.182zm2.988.053H5.969V7.969h2.062zm3 0H8.969V7.953h2.062zm2.555-.016h-1.617V7.984h1.906zm.16-2.922H12V4.968h2.078zm-8.269 4.938c-.603 0-1.116.371-1.33.896h2.659a1.435 1.435 0 0 0-1.329-.896"></svg:path><svg:path fill="currentColor" d="M11.807 12.046h-.586c-.48.101-.872.443-1.053.897h2.689a1.46 1.46 0 0 0-1.05-.897M9 3V1h-.979v2h-1l1.5 1.938L9.979 3z"></svg:path></svg:g>`,
})
export class SiGlyphTrolleyArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyArrowUpIcon],svg[si-glyph-trolley-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M2.17 9.994h1.873V7.959H1.861zM5 8h2.062v2.078H5zm-.969-3.029H1.52l.314 2.066h2.197zM11 7.109h1.746l.332-2.14H11zM8 8h2.062v2.094H8zm2.969 2.031h1.617l.289-2.047h-1.906z"></svg:path><svg:path fill="currentColor" d="M3.039 13.484a1.437 1.437 0 1 0 2.768-.542H3.148c-.07.167-.109.351-.109.542m6.022.016c0 .821.65 1.485 1.453 1.485s1.451-.664 1.451-1.485c0-.197-.039-.385-.107-.557H9.169c-.069.172-.108.36-.108.557m1.453-1.484q-.152 0-.293.03h.586a1.4 1.4 0 0 0-.293-.03"></svg:path><svg:path fill="currentColor" d="M10.221 12.046H2.564c-.319 0-.501.056-.501.423s.182.474.501.474h.583a1.435 1.435 0 0 1 2.659 0l3.362.001a1.46 1.46 0 0 1 1.053-.898"></svg:path><svg:path fill="currentColor" d="M14.684 1.337c-.717 0-1.297.599-1.297 1.338l-.172 1.343h-3.172v.951h-.027v2.047H7.969v-.974h-.938v1.005H4.953V4.953h.005v-.936H.557c-.318 0-.541.287-.541.654c0 .139.01.27.072.375L1.299 10.5c.04.172.168.299.331.369a.5.5 0 0 0 .265.083H12.36l-.174 1.093h-1.379c.48.101.871.443 1.051.897h1.496l1.16-8.948c.057.007.111.018.17.018c.715 0 1.295-.6 1.295-1.338s-.581-1.337-1.295-1.337M1.52 4.971h2.512v2.066H1.835zm2.523 5.023H2.17l-.309-2.035h2.182zm2.988.053H4.969V7.969h2.062zm3 0H7.969V7.953h2.062zm2.555-.016h-1.617V7.984h1.906zm.16-2.922H11V4.968h2.078zm-8.269 4.938c-.603 0-1.116.371-1.33.896h2.659a1.435 1.435 0 0 0-1.329-.896"></svg:path><svg:path fill="currentColor" d="M10.807 12.046h-.586c-.48.101-.872.443-1.053.897h2.689a1.46 1.46 0 0 0-1.05-.897M7 2.938v2h.98v-2h1L7.48 1L6.021 2.938z"></svg:path></svg:g>`,
})
export class SiGlyphTrolleyArrowUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyBriefcaseIcon],svg[si-glyph-trolley-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="4.471" cy="14.478" rx="1.471" ry="1.478"></svg:ellipse><svg:circle cx="12.481" cy="14.481" r="1.481"></svg:circle><svg:path d="M15.342 11.062H2.938V3.075L1.206.267A.68.68 0 0 0 .281.126a.63.63 0 0 0-.146.896L2.033 3.53v7.532s-.971-.167-.971.417c0 .521.565.469.934.469h13.346c.368 0 .609-.064.609-.413s-.241-.473-.609-.473M6.223 7.5v-.041z"></svg:path><svg:path d="M6.889 9.297a.63.63 0 0 1-.625.639H4.681a.63.63 0 0 1-.624-.639V2.663c0-.353.279-.639.624-.639h1.583c.346 0 .625.286.625.639zm4.039-.025c0 .366-.282.663-.629.663H8.705c-.349 0-.629-.297-.629-.663V3.77c0-.367.28-.664.629-.664h1.594c.347 0 .629.297.629.664zm4.018-.013c0 .396-.285.719-.638.719h-1.617c-.354 0-.639-.322-.639-.719V4.801c0-.396.285-.717.639-.717h1.617c.353 0 .638.321.638.717z"></svg:path></svg:g>`,
})
export class SiGlyphTrolleyBriefcaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyErrorIcon],svg[si-glyph-trolley-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g fill="currentColor" transform="translate(3 12)"><svg:circle cx="1.437" cy="1.437" r="1.437"></svg:circle><svg:ellipse cx="7.452" cy="1.485" rx="1.452" ry="1.485"></svg:ellipse></svg:g><svg:path d="M5 8h2.062v2.078H5zm0-3h2.078v2.094H5zm3 0h2.047v2.047H8zm5.078-.031H11v2.14h1.746zM8 8h2.062v2.094H8z"></svg:path><svg:path fill="currentColor" d="M2.563 12.046c-.319 0-.501.056-.501.423s.182.474.501.474l9.416.001v-.897zm8.406-2.015V7.984h1.906l-.281 1.995h1.145l.775-5.984c.057.007.111.018.17.018c.715 0 1.295-.6 1.295-1.338s-.58-1.338-1.295-1.338c-.717 0-1.297.599-1.297 1.338l-.172 1.343H.557c-.318 0-.541.287-.541.654c0 .139.01.27.072.375l1.211 5.454c.04.172.168.299.331.369a.5.5 0 0 0 .265.083H11.98v-.922zM11 4.969h2.078l-.332 2.141H11zm-3.031 0h2.047v2.047H7.969zm-6.449.002h2.512v2.066H1.835zm2.523 5.023H2.17l-.309-2.035h2.182zm2.988.053H4.969V7.969h2.062zm0-3H4.953V4.953h2.078zm3 3H7.969V7.953h2.062zm5.963 1.664l-.701-.69l-.788.792l-.796-.792l-.691.702l.793.788l-.791.796l.701.689l.787-.791l.796.791l.69-.701l-.792-.788z"></svg:path></svg:g>`,
})
export class SiGlyphTrolleyErrorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyFullIcon],svg[si-glyph-trolley-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:path d="M5.8 9L3.451 0H.002l.025.938h2.438L5.065 10H15.97V9z"></svg:path><svg:path d="M7 6h1.958v1.955H7zm3 0h1.953v2H10zm0-3h1.938v1.899H10zm0-3h1.953v1.941H10zm3 6h1.953v1.906H13zm0-3h1.938v1.899H13zm0-3h1.953v1.941H13zM7 3h1.938v1.899H7zm0-3h1.953v1.941H7z"></svg:path><svg:ellipse cx="7.494" cy="10.471" rx="1.494" ry="1.471"></svg:ellipse><svg:circle cx="13.487" cy="10.487" r="1.487"></svg:circle></svg:g>`,
})
export class SiGlyphTrolleyFullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyPlusIcon],svg[si-glyph-trolley-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g fill="currentColor" transform="translate(4 12)"><svg:circle cx="1.437" cy="1.437" r="1.437"></svg:circle><svg:ellipse cx="7.452" cy="1.485" rx="1.452" ry="1.485"></svg:ellipse></svg:g><svg:path d="M6 8h2.062v2.078H6zm-.969-3.029H2.52l.314 2.066h2.197zM6 5h2.078v2.094H6zm3 0h2.047v2.047H9zm5.078-.031H12v2.14h1.746zM3.17 9.994h1.873V7.959H2.861zM9 8h2.062v2.094H9z"></svg:path><svg:path fill="currentColor" d="M3.563 12.046c-.319 0-.501.056-.501.423s.182.474.501.474l9.416.001v-.897zm8.406-2.015V7.984h1.906l-.281 1.995h1.145l.775-5.984c.057.007.111.018.17.018c.715 0 1.295-.6 1.295-1.338s-.58-1.338-1.295-1.338c-.717 0-1.297.599-1.297 1.338l-.172 1.343H1.557c-.318 0-.541.287-.541.654c0 .139.01.27.072.375l1.211 5.454c.04.172.168.299.331.369a.5.5 0 0 0 .265.083H12.98v-.922zM12 4.969h2.078l-.332 2.141H12zm-3.031 0h2.047v2.047H8.969zm-6.449.002h2.512v2.066H2.835zm2.523 5.023H3.17l-.309-2.035h2.182zm2.988.053H5.969V7.969h2.062zm0-3H5.953V4.953h2.078zm3 3H8.969V7.953h2.062zM17 12h-1.062v-1H15v1h-1v.958h1v.917h.938v-.917H17z"></svg:path></svg:g>`,
})
export class SiGlyphTrolleyPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyRemoveIcon],svg[si-glyph-trolley-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:g fill="currentColor" transform="translate(4 12)"><svg:circle cx="1.437" cy="1.437" r="1.437"></svg:circle><svg:ellipse cx="7.452" cy="1.485" rx="1.452" ry="1.485"></svg:ellipse></svg:g><svg:path fill="currentColor" d="M14 11h3v.958h-3z"></svg:path><svg:path d="M6 8h2.062v2.078H6zm-.969-3.029H2.52l.314 2.066h2.197zM6 5h2.078v2.094H6zm3 0h2.047v2.047H9zm5.078-.031H12v2.14h1.746zM3.17 9.994h1.873V7.959H2.861zM9 8h2.062v2.094H9z"></svg:path><svg:path fill="currentColor" d="M3.563 12.046c-.319 0-.501.056-.501.423s.182.474.501.474l9.416.001v-.897zm8.406-2.015V7.984h1.906l-.281 1.995h1.145l.775-5.984c.057.007.111.018.17.018c.715 0 1.295-.6 1.295-1.338s-.58-1.338-1.295-1.338c-.717 0-1.297.599-1.297 1.338l-.172 1.343H1.557c-.318 0-.541.287-.541.654c0 .139.01.27.072.375l1.211 5.454c.04.172.168.299.331.369a.5.5 0 0 0 .265.083H12.98v-.922zM12 4.969h2.078l-.332 2.141H12zm-3.031 0h2.047v2.047H8.969zm-6.449.002h2.512v2.066H2.835zm2.523 5.023H3.17l-.309-2.035h2.182zm2.988.053H5.969V7.969h2.062zm0-3H5.953V4.953h2.078zm3 3H8.969V7.953h2.062z"></svg:path></svg:g>`,
})
export class SiGlyphTrolleyRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTruckIcon],svg[si-glyph-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(4 3)"><svg:ellipse cx="1.438" cy="8.491" rx="1.438" ry="1.491"></svg:ellipse><svg:ellipse cx="9.463" cy="8.48" rx="1.463" ry="1.48"></svg:ellipse><svg:path d="M4.031.062v6.885h3.464c.47-.61 1.2-1.01 2.03-1.01c.831 0 1.562.399 2.031 1.01h1.398V.062z"></svg:path></svg:g><svg:path d="M8 11h2.916v.875H8zm8 0h.979v1H16zm-13.064.521a2.585 2.585 0 0 1 4.042-2.132V5.98c0-.527-.403-.954-.901-.954H2.946c-.499 0-1.056.846-1.056.846s-.841 1.505-.841 2.145v3.013c0 .542.396.943.901.943h1.032a2.6 2.6 0 0 1-.046-.452m.063-5.592l3.057.021l-.022 2.112H2.253c-.068-1.276.746-2.133.746-2.133"></svg:path></svg:g>`,
})
export class SiGlyphTruckIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrumpetIcon],svg[si-glyph-trumpet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.622 3.308l1.076-1.076l-.91-.91l-2.431 2.431l-.699-.698l-.658.66l.697.697l-1.305 1.305l-.667-.667l-.721.722l.666.667l-1.302 1.302l-.603-.603l-.691.691l.603.603L6.139 9.97c-1.369 1.369-4.321 2.119-5.1 1.34c0 0 .396 1.366 1.836 2.805c1.438 1.439 2.834 1.865 2.834 1.865c-.779-.778-.008-3.752 1.34-5.099l1.27-1.27l1.037 1.036c.231.231.54.342.875.342c.483 0 1.021-.231 1.463-.672L15.33 6.68c.427-.426.671-.959.671-1.463c0-.349-.119-.651-.341-.874zm.135 2.801l-3.636 3.637c-.45.447-.991.532-1.193.33L8.891 9.04l5.159-5.16l1.037 1.036c.086.086.104.212.104.302c-.001.282-.167.624-.434.891m2.134-4.807L15.703.114c-.092-.093-.299-.037-.461.126s-.219.369-.127.462l1.189 1.188c.094.092.301.036.461-.126c.165-.164.219-.369.126-.462"></svg:path>`,
})
export class SiGlyphTrumpetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTurnOffIcon],svg[si-glyph-turn-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.124 1.613v2.349c1.606.887 2.632 2.624 2.632 4.578c0 2.854-2.35 5.169-5.248 5.169c-2.896 0-5.246-2.314-5.246-5.169c0-2.017 1.012-3.749 2.696-4.601V1.611c-2.937.975-4.895 3.693-4.895 6.929c0 4.052 3.334 7.335 7.444 7.335c4.111 0 7.446-3.283 7.446-7.335c.001-3.177-1.973-5.902-4.829-6.927"></svg:path><svg:path d="M8.46 7.873c.778 0 1.412-.48 1.412-1.075V1.115C9.872.521 9.238.04 8.46.04c-.779 0-1.412.481-1.412 1.075v5.683c0 .595.633 1.075 1.412 1.075"></svg:path></svg:g>`,
})
export class SiGlyphTurnOffIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowDownIcon],svg[si-glyph-two-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.002 11.854L3.008 8.109v3.94l4.994 3.943l4.965-4.042V8.032l-.012-.011zm0-7.784L3.008.119v3.939l4.994 3.965l4.965-4.064V.041l-.012-.01z"></svg:path>`,
})
export class SiGlyphTwoArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowInDownUpIcon],svg[si-glyph-two-arrow-in-down-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.771 4.096a.664.664 0 0 0 0-.946a.68.68 0 0 0-.954 0L9.989 4.503V1c0-.553-.444-1-.992-1a.995.995 0 0 0-.992 1v3.564L6.187 3.18a.674.674 0 0 0-1.15.473c0 .171.066.343.199.474l3.74 2.819zm0 7.78a.664.664 0 0 1 0 .946a.68.68 0 0 1-.954 0l-1.828-1.328V15c0 .553-.444 1-.992 1a.995.995 0 0 1-.992-1v-3.428l-1.818 1.266a.674.674 0 0 1-1.15-.473c0-.171.066-.343.199-.474l3.74-2.838z"></svg:path>`,
})
export class SiGlyphTwoArrowInDownUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowInLeftRightIcon],svg[si-glyph-two-arrow-in-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.125 5.229a.664.664 0 0 0-.946 0a.68.68 0 0 0 0 .954l1.353 1.828H2c-.553 0-1 .444-1 .992s.447.992 1 .992h3.594L4.21 11.812a.673.673 0 0 0 .472 1.15a.67.67 0 0 0 .475-.198l2.819-3.74zm7.696 0a.665.665 0 0 1 .947 0a.677.677 0 0 1 0 .954L12.44 8.011h3.531c.553 0 1 .444 1 .992a.995.995 0 0 1-1 .992h-3.453l1.266 1.817a.675.675 0 0 1-.473 1.15a.67.67 0 0 1-.474-.198l-2.838-3.74z"></svg:path>`,
})
export class SiGlyphTwoArrowInLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowLeftIcon],svg[si-glyph-two-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.146 8.027L8.89 3.032H4.95L1.007 8.027l4.042 4.964h3.918l.01-.011zm7.783 0l3.951-4.995h-3.939L8.976 8.027l4.064 4.964h3.918l.01-.011z"></svg:path>`,
})
export class SiGlyphTwoArrowLeftIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTwoArrowRightIcon],svg[si-glyph-two-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.83 7.999L9.086 13h3.939l3.944-5.001l-4.042-4.969H9.009l-.011.011zm-7.783 0L1.096 13h3.938L9 7.999L4.935 3.03H1.018l-.01.011z"></svg:path>`,
})
export class SiGlyphTwoArrowRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphTypewriterIcon],svg[si-glyph-typewriter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 10h.938v.953H7zm2 0h.938v.953H9zm2 0h.938v.953H11z"></svg:path><svg:path d="M2.062 14.98c0 .562.45 1.02 1.006 1.02h12.863c.556 0 1.006-.457 1.006-1.02l-1.938-6.021V6h-1.976c0 .011.005.021.005.031c0 .998-1.534.818-3.071.969h-.976c-1.528-.15-3.025.029-3.025-.969c0-.011.005-.021.005-.031h-1.94v2H1v2.938h1V9h2.009zm2.907-4.011h1v-.953h-1l.016-1.047h1.047v1h.938v-1h1.062v1h.938v-1h1.062v1h.938v-1h1.062v1h.938v-1h1.062v1.047h-1v.953h1v1.047h-1.047v-1h-.956v1h-1.051v-1h-.965v.953h.007v.047H8.979v-1h-.972v1H6.971v-1H6v1H4.969zM4.979 13h9.041v1H4.979zM16.021 3v1.049H14.94l-.002-3.027l-10.913.041v2.986H2.96V3h-.938v3h.938V4.951h13.062V6h.97V3z"></svg:path></svg:g>`,
})
export class SiGlyphTypewriterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmberllaChairIcon],svg[si-glyph-umberlla-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9 0L1 6v1.984h.953v-1H4v1h1.969v-1h2.047v1h1v5.985h.948V7.984h.005v-1h2.078v1H14v-1h2.016v1H17V6z"></svg:path><svg:path d="M3.229 11.016H1V12h1.678l3.342 2.994l1.011-.01v.985h.938v-.985h1.062v.985H10v-.985h4.047v.985H15v-.985h.984V14H6.562z"></svg:path></svg:g>`,
})
export class SiGlyphUmberllaChairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmbrellaCloseIcon],svg[si-glyph-umbrella-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.031 10.938v1.045h.938L7.907 1.968V.43a.411.411 0 0 0-.824 0v1.538L3.985 11.983h.953v-1.045h1.078v1.045h1.016v3.549c0 .228.251.412.479.412s.459-.185.459-.412v-3.549h.969v-1.045z"></svg:path>`,
})
export class SiGlyphUmbrellaCloseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmbrellaOpenIcon],svg[si-glyph-umbrella-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.98 7.984c0-3.763-3.16-6.659-7.012-6.953V.468c0-.258-.17-.467-.447-.467a.475.475 0 0 0-.49.467v.555c-3.941.205-7.018 3.139-7.018 6.962h.955V6.969H4.03v1.016h1.938V6.969h1.08v1.016h1.904V6.969h1.094l-.016 1.016h1.949V6.969h1.02v1.016h1.938V6.969h1.078v1.016h.965zm-7.96 6.218c0 .479-.507.816-1.003.816c-.316 0-1.035-.016-1.035-.494a.474.474 0 0 0-.48-.466a.473.473 0 0 0-.478.466c0 .99.97 1.473 1.993 1.473c1.025 0 1.978-.803 1.978-1.795v-6.17h-.974z"></svg:path>`,
})
export class SiGlyphUmbrellaOpenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmbrellaSeaIcon],svg[si-glyph-umbrella-sea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.469 1L1 7v1.984h.953v-1H4v1h1.969v-1h2.047v7.047H5.002v1H3v.907h10.938v-.907H12v-1H8.964V8.984h.005v-1h2.078v1H13v-1h2.016v1H16V7z"></svg:path>`,
})
export class SiGlyphUmbrellaSeaIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUpstairIcon],svg[si-glyph-upstair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.969 1.047h-2.896v2h-2.011v2h-2.01v2H8.043v2H6.031v2h-2.01v2H1v2.918h2.896L17 3.965zm-9.096.057H2.949l2.155 1.414l-3.182 3.18l1.326 1.326l3.181-3.181l1.448 2.205z"></svg:path>`,
})
export class SiGlyphUpstairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUpwardsArrowToBarIcon],svg[si-glyph-upwards-arrow-to-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.002 4.913c.551 0 .995-.42.995-.938V2.102c0-.518-.444-.938-.995-.938H1.076c-.55 0-.995.42-.995.938v1.873c0 .519.445.938.995.938zM6.994 6.518a1.49 1.49 0 0 1 2.092 0l6.408 6.374c.579.573.835 2.078-.995 2.078H1.579c-1.891 0-1.573-1.505-.995-2.078z"></svg:path>`,
})
export class SiGlyphUpwardsArrowToBarIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUpwardsArrowWithLoopIcon],svg[si-glyph-upwards-arrow-with-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 7h2.941v1.943H1z"></svg:path><svg:path d="M14.02 7.049H8.017v1.909h6.052c.545 0 .988.44.988.979v3.129a.985.985 0 0 1-.988.979H7.958a.985.985 0 0 1-.988-.979V3.968h1.75c.392-.393.392-.638 0-1.029L6.708.291a1.003 1.003 0 0 0-1.42 0l-1.99 2.648c-.392.392-.392.638 0 1.029h1.729v9.053a2.977 2.977 0 0 0 2.98 2.967h6.014a2.976 2.976 0 0 0 2.98-2.967v-3.006a2.98 2.98 0 0 0-2.981-2.966"></svg:path></svg:g>`,
})
export class SiGlyphUpwardsArrowWithLoopIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphUsbIcon],svg[si-glyph-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.074 3.098v1.84h.968V6.46L9.907 7.98V2.93L12 2.921L9.542 0L7.031 2.959h2.058v7.566l-4.13-1.099V7.92A1.495 1.495 0 0 0 4.5 4.999a1.495 1.495 0 0 0-.465 2.919V10l5.054 1.585v1.479A1.496 1.496 0 0 0 9.5 16a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.093-1.438V9.01l5.04-1.949V4.937h.97v-1.84z"></svg:path>`,
})
export class SiGlyphUsbIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphViewIcon],svg[si-glyph-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 4)"><svg:path d="M8 0C3.598 0 .031 2.66.031 3.969S3.597 7.938 8 7.938c4.4 0 7.969-2.618 7.969-3.969S12.4 0 8 0m-.01 7.062C4.342 7.062 2.869 5.011 2.869 4S4.342.938 7.99.938c3.646 0 5.119 2.02 5.119 3.062S11.637 7.062 7.99 7.062"></svg:path><svg:ellipse cx="7.932" cy="3.963" rx="1.932" ry="1.963"></svg:ellipse></svg:g>`,
})
export class SiGlyphViewIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWacomTabletIcon],svg[si-glyph-wacom-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 5v9h16V5zm5 2v5h9V7zM.959 7H2v1H.959zM2 12H.959v-1H2zM.953 10V8.979h2V10zM15 13H4V6h11z"></svg:path>`,
})
export class SiGlyphWacomTabletIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWallIcon],svg[si-glyph-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3h4v2h-4zm-2 3h3v1.957h-3zm4 0h2v1.969h-2zM0 9h2v2H0zm3 0h4v2H3zm5 0h3v2H8zm4 0h4v2h-4zM5 6h4v1.957H5zM0 6h4v1.957H0zm10 6h3v1.957h-3zm4 0h2v1.969h-2zm-9 0h4v1.957H5zm-5 0h4v1.957H0zm8-9h3v2H8zM3 3h4v2H3zM0 3h2v2H0z"></svg:path>`,
})
export class SiGlyphWallIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWalletIcon],svg[si-glyph-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.988 10.635V8.327c0-.749.573-1.358 1.279-1.358h4.697V5.531c0-.682-.404-1.252-.957-1.438v.001l-1.651-.014l-.02-.058H4.925l-.141.048l-2.614-.002l-.005-.021c-.636.12-1.148.696-1.148 1.437v7.953c0 .832.648 1.555 1.391 1.555h11.214c.743 0 1.343-.676 1.343-1.508v-1.453h-4.697c-.706 0-1.28-.647-1.28-1.396"></svg:path><svg:path d="M15.996 8.061h-5.007c-.529 0-.958.468-.958 1.045v.816c0 .576.429 1.044.958 1.044h5.007c.529 0 .959-.468.959-1.044v-.816c0-.578-.43-1.045-.959-1.045m-2.965 1.955h-2.062V9h2.062zM4.926 4.022l6.631-2.269l.78 2.269h1.285c.135 0 .263.029.386.07L12.619.051L2.049 3.572l.117.476q.119-.024.242-.025z"></svg:path></svg:g>`,
})
export class SiGlyphWalletIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWashMachineIcon],svg[si-glyph-wash-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.031.042h-15v3h15zm-12.989 2H1.938V.958h1.104zm2 0H3.938V.958h1.104z"></svg:path><svg:path d="M1.021 3v13h14.958V3zm7.491 12.083c-3.068 0-5.555-2.5-5.555-5.583s2.486-5.584 5.555-5.584c3.067 0 5.554 2.5 5.554 5.584c-.001 3.083-2.487 5.583-5.554 5.583"></svg:path><svg:path d="M8.516 5.083c-2.453 0-4.441 1.979-4.441 4.416s1.988 4.418 4.441 4.418c2.454 0 4.442-1.979 4.442-4.418c0-2.437-1.988-4.416-4.442-4.416m3.283 4.945c.079 0 .15-.021.218-.048a3.53 3.53 0 0 1-3.501 3.037a3.53 3.53 0 0 1-3.537-3.519c0-1.94 1.584-3.516 3.537-3.516a3.53 3.53 0 0 1 3.501 3.036a.53.53 0 1 0-.218 1.01"></svg:path></svg:g>`,
})
export class SiGlyphWashMachineIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWashMachine2Icon],svg[si-glyph-wash-machine-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.031.042h-15v3h15zM3 1.958H2v-1h1zm2 0H4v-1h1z"></svg:path><svg:path d="M1.021 3v13h14.958V3zm7.436 12a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11"></svg:path><svg:path d="M8.516 5.083c-2.453 0-4.441 1.979-4.441 4.416s1.988 4.418 4.441 4.418c2.454 0 4.442-1.979 4.442-4.418c0-2.437-1.988-4.416-4.442-4.416m3.283 4.945c.079 0 .15-.021.218-.048c-.235 1.716-2.19 1.256-3.501.037c-1.531-1.424-3.537 1.425-3.537-.519c0-1.94 1.584-3.516 3.537-3.516a3.53 3.53 0 0 1 3.501 3.036a.53.53 0 1 0-.218 1.01"></svg:path></svg:g>`,
})
export class SiGlyphWashMachine2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWatchIcon],svg[si-glyph-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.969 6h-.953v2.941h.07v.043H10v-.953H8.969z"></svg:path><svg:path d="M12.936 8.016a4.44 4.44 0 0 0-1.133-2.521A4.6 4.6 0 0 0 11 4.812V1H6v3.811a4.6 4.6 0 0 0-.859.76a4.4 4.4 0 0 0-1.117 2.92c0 .945.3 1.818.804 2.542c.315.453.715.843 1.173 1.154v3.767h5v-3.769c.415-.282.78-.631 1.081-1.032a4.46 4.46 0 0 0 .858-2.152h1.03v-.984zm-.936.62a3.47 3.47 0 0 1-.695 1.95A3.5 3.5 0 0 1 8.507 12a3.5 3.5 0 0 1-2.877-1.508A3.47 3.47 0 0 1 5 8.5c0-.878.337-1.673.875-2.287A3.48 3.48 0 0 1 8.507 5c1.025 0 1.94.45 2.58 1.153c.544.596.883 1.372.913 2.23v.254z"></svg:path></svg:g>`,
})
export class SiGlyphWatchIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWebcamIcon],svg[si-glyph-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(2 1)"><svg:ellipse cx="5.967" cy="5.979" rx="1.967" ry="1.979"></svg:ellipse><svg:path d="M7.598.001c.002.035.014.068.014.105C7.61.788 6.887 1.34 5.994 1.34c-.892 0-1.615-.555-1.615-1.238c0-.035.01-.067.014-.102C1.864.714.003 3.072.001 5.88C-.003 9.259 2.678 11.999 5.985 12c3.31.003 5.994-2.732 5.996-6.108c.001-2.81-1.856-5.172-4.383-5.891M2 5.997a4 4 0 1 1 8 .008a4 4 0 1 1-8-.008"></svg:path></svg:g><svg:path d="M7.958 14.25a7.3 7.3 0 0 1-3.917-1.142l-1.824 1.811a.73.73 0 0 0 0 1.039l11.531-.052a.733.733 0 0 0 .002-1.039l-1.807-1.8a7.3 7.3 0 0 1-3.985 1.183"></svg:path></svg:g>`,
})
export class SiGlyphWebcamIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWeightDownIcon],svg[si-glyph-weight-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.905 5.01c0-1.088-.912-1.971-2.038-1.971h-.923c.034-.152.056-.32.056-.508C10 1.135 8.877 0 7.495 0S4.99 1.135 4.99 2.531c0 .188.026.355.068.508h-.922c-1.125 0-2.037.883-2.037 1.971L.083 13.985c0 1.09.912 1.972 2.039 1.972H12.88c1.126 0 2.037-.882 2.037-1.972zM5.824 2.531c0-.949.749-1.723 1.671-1.723c.921 0 1.67.773 1.67 1.723c0 .178-.034.346-.083.508H5.906a1.7 1.7 0 0 1-.082-.508m1.139 7.416V6.958h1.074v2.968l2.07.021l-2.648 3.092l-2.49-3.092z"></svg:path>`,
})
export class SiGlyphWeightDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWeightKilogramsIcon],svg[si-glyph-weight-kilograms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9 9h.905v.92H9z"></svg:path><svg:path d="M12.017 4.424c0-.732-.597-1.407-1.335-1.407h-.769A2.493 2.493 0 0 0 7.486 0a2.492 2.492 0 0 0-2.427 3.017h-.744c-.735 0-1.332.675-1.332 1.407l-1.975 9.25A1.33 1.33 0 0 0 2.344 15h10.313a1.33 1.33 0 0 0 1.333-1.326zM6 2.508C6 1.676 6.673 1 7.5 1C8.326 1 9 1.676 9 2.508A1.5 1.5 0 0 1 8.912 3H6.089A1.5 1.5 0 0 1 6 2.508m1.047 6.497H6.045v.948h1.002v1.067H5.982v-1.005h-.939v1.005H3.962V5.911h1.081v3.031h.939V7.937h1.065zm4 4.018h-1v1.023H8.985v-1.008l.064-.063l.892-.017l.012-1.937H7.986l-.008-3.069l3.07.013z"></svg:path></svg:g>`,
})
export class SiGlyphWeightKilogramsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWeightUpIcon],svg[si-glyph-weight-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.867 3.039h-.923c.034-.152.056-.32.056-.508C12 1.135 10.877 0 9.495 0S6.99 1.135 6.99 2.531c0 .188.026.355.068.508h-.922c-1.125 0-2.037.883-2.037 1.971l-2.016 8.975c0 1.09.79 1.972 1.917 1.972h11c1.126 0 1.917-.882 1.917-1.972L14.905 5.01c0-1.088-.912-1.971-2.038-1.971m-5.043-.508c0-.949.749-1.723 1.671-1.723c.921 0 1.67.773 1.67 1.723c0 .178-.034.346-.083.508H7.906a1.7 1.7 0 0 1-.082-.508m2.23 7.549v2.959H8.946v-2.938l-2.133-.021l2.73-3.06l2.564 3.06z"></svg:path>`,
})
export class SiGlyphWeightUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWheelChairIcon],svg[si-glyph-wheel-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(2 1)"><svg:ellipse cx="6.49" cy="1.471" rx="1.49" ry="1.471"></svg:ellipse><svg:path d="M12.6 14.951a.98.98 0 0 1-.819-.442l-1.272-2.511H5.993a.993.993 0 0 1-.987-.999V5.064c0-.553.442-.998.987-.998c.543 0 .986.445.986.998v4.937h4.056c.329 0 .636.165.817.442l1.084 2.225l.654-.268a.98.98 0 0 1 1.323.449a1.004 1.004 0 0 1-.444 1.338l-1.431.659a.96.96 0 0 1-.438.105"></svg:path><svg:path d="M5.381 15.974c-2.936 0-5.324-2.384-5.324-5.313c0-1.726.845-3.35 2.26-4.346a.667.667 0 0 1 .931.162a.666.666 0 0 1-.161.93a3.98 3.98 0 0 0-1.692 3.254a3.986 3.986 0 0 0 3.987 3.977c1.1 0 2.123-.437 2.885-1.23a.668.668 0 1 1 .964.925a5.3 5.3 0 0 1-3.85 1.641"></svg:path></svg:g>`,
})
export class SiGlyphWheelChairIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWheelSteelIcon],svg[si-glyph-wheel-steel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.999 16C3.589 16 0 12.41 0 8s3.588-8 7.999-8C12.411 0 16 3.59 16 8s-3.59 8-8.001 8M8 2C4.69 2 2 4.692 2 8s2.692 6 6 6s6-2.692 6-6s-2.69-6-6-6"></svg:path><svg:path d="M7.992 6c-2.316 0-4.098.797-4.961 2.346c.037.473.154.928.336 1.352c1.221-.652 3.551 1.83 2.818 2.935c.58.204 1.141.355 1.797.355a6 6 0 0 0 1.887-.315c-.734-1.105 1.525-3.535 2.754-2.869a4.3 4.3 0 0 0 .344-1.396C12.095 6.875 10.293 6 7.992 6m.01 3.156c-.625 0-1.127-.51-1.127-1.141s.502-1.141 1.127-1.141c.619 0 1.123.51 1.123 1.141s-.504 1.141-1.123 1.141"></svg:path></svg:g>`,
})
export class SiGlyphWheelSteelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWieghtIcon],svg[si-glyph-wieght-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6.079V5h-1.955v3H4V5.041H2v1.011h-.961v5.906H2v.997h2V10h10.045v2.996H16v-1.038h1V6.079z"></svg:path>`,
})
export class SiGlyphWieghtIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWifi1Icon],svg[si-glyph-wifi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:circle cx="7.989" cy="5.989" r="1.989"></svg:circle><svg:path d="M3.574 11.996C1.349 10.691.028 8.486.028 6.061c0-2.472 1.421-4.769 3.721-6.039l.428.73C2.168 1.876.93 3.894.93 6.061c0 2.128 1.151 4.063 3.09 5.215zm8.094-.717c2.095-1.079 3.387-3.092 3.387-5.298c0-2.162-1.254-4.155-3.284-5.249l.436-.695c2.308 1.236 3.734 3.498 3.734 5.944c0 2.499-1.472 4.784-3.854 6.005z"></svg:path><svg:path d="M5.342 9.975C3.908 9.114 3.027 7.612 3.027 6.01c0-1.627.898-3.139 2.36-3.994l.434.76C4.645 3.477 3.923 4.7 3.923 6.01c0 1.296.713 2.514 1.872 3.218zm4.662-.731c1.277-.675 2.062-1.909 2.062-3.27c0-1.302-.734-2.511-1.93-3.2l.447-.728c1.465.841 2.366 2.327 2.366 3.928c0 1.664-.958 3.184-2.515 4.01z"></svg:path></svg:g>`,
})
export class SiGlyphWifi1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWindTurbinesIcon],svg[si-glyph-wind-turbines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.938 15.299c0 .352-1.058.639-1.442.639c-.385 0-1.442-.287-1.442-.639l.744-7.592c0-.353.313-.639.698-.639s.698.286.698.639zM9.974 3.498c0 .28-.21.506-.468.506c-.26 0-.469-.226-.469-.506V.568c0-.279.209-.506.469-.506c.258 0 .468.227.468.506zm-5.13 5.441c-.265.183-.602.152-.756-.067c-.15-.219-.061-.547.203-.729l2.771-1.92c.264-.182.603-.153.755.066c.152.22.062.547-.203.73zm9.868-.99a.57.57 0 0 1 .188.783a.57.57 0 0 1-.791.154l-2.836-1.823a.57.57 0 0 1-.188-.784a.57.57 0 0 1 .789-.153zM9 5h.906v.938H9z"></svg:path>`,
})
export class SiGlyphWindTurbinesIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWindowIcon],svg[si-glyph-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.885 7.826l.896-6.236a8 8 0 0 1-.838-.439C6.855-.132 4.673-.085 3.052.257l-.984 6.566c1.524-.345 4.208-.586 6.817 1.003m7.292-.138l.763-6.141c-1.033.472-3.404 1.293-5.962.406l-.887 6.183c2.474 1.334 4.938.237 6.086-.448M8.674 9.199c-2.565-1.586-5.317-1.243-6.702-.913l-.907 5.735c1.159-.484 4.051-.753 6.935.487l.718-5.284zm6.564 6.538l.803-6.436c-.854.432-2.109.902-3.527.902c-.812 0-1.681-.16-2.553-.571l-.701 5.209c.066.039.135.066.204.107c2.12 1.257 4.257 1.15 5.774.789"></svg:path>`,
})
export class SiGlyphWindowIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWoodStoveIcon],svg[si-glyph-wood-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M11.965 3.027V.072h-.949v2.955H3v11.957h2.016L5 15.978h.969v-.994h6.047v.994h.969v-.994H15V3.027zm1.05 7.02V12c0 1.002-.074 1.055-1.016 1.055H6.044c-.94 0-1.045-.053-1.045-1.055V6c0-1.001.104-1.033 1.045-1.033H12c.941 0 1.016.032 1.016 1.033v2.953h1.016v1.094z"></svg:path><svg:path d="M11.974 7.031c0-.539-.401-.975-.896-.975H6.981c-.494 0-.897.436-.897.975v3.979c0 .537.403.975.897.975h4.097c.495 0 .896-.438.896-.975zM8 10H7V8h1zm2 0H8.964V8H10z"></svg:path></svg:g>`,
})
export class SiGlyphWoodStoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWrenchIcon],svg[si-glyph-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.982 11.19l4.177-4.185a3.6 3.6 0 0 0 3.795-.832c.698-.701 1.027-1.534 1.084-2.506l-.677.694l-2.212.74l-2.269-2.257l.776-2.174l.672-.67c-.946.078-1.799.36-2.487 1.048a3.62 3.62 0 0 0-.84 3.772L5.852 8.978c-1.266-.456-2.737-.117-3.765.914a3.596 3.596 0 0 0 0 5.078c1.387 1.39 3.654 1.37 5.066-.045c1.002-1.003 1.231-2.491.83-3.736zm-5.25 3.1a2.5 2.5 0 1 1 3.535-3.535a2.5 2.5 0 0 1-3.534 3.535z"></svg:path>`,
})
export class SiGlyphWrenchIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphWrenchScrewdriverIcon],svg[si-glyph-wrench-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m5.811 11.799l5.852-5.852c1.162.601 2.544.489 3.432-.398c.684-.685.915-1.666.709-2.613l-1.509 1.506l-1.344.262l-1.626-1.609l.28-1.385L13.1.235c-.947-.207-1.93.022-2.613.706c-.889.888-.999 2.27-.398 3.433l-5.852 5.852c-1.163-.6-2.545-.488-3.433.398c-.684.686-.915 1.666-.708 2.613l1.508-1.505l1.343-.263l1.628 1.609l-.281 1.385l-1.495 1.476c.946.206 1.929-.022 2.613-.707c.887-.888.998-2.27.399-3.433"></svg:path><svg:path d="m14.107 12.334l-1.83-.598L9.941 9.4l-.58.58l2.336 2.334l.637 1.872l3.067 1.833l.579-.579zm-6.83-7.227L2.478.29C2.075-.114 1.367-.064.9.408L.367.94c-.467.472-.52 1.179-.115 1.585l4.797 4.817z"></svg:path></svg:g>`,
})
export class SiGlyphWrenchScrewdriverIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphYenIcon],svg[si-glyph-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.722 1.625A.98.98 0 0 0 14.943.9a.98.98 0 0 0-.356-.669a.995.995 0 0 0-1.396.137L7.962 6.064L2.772.37a.994.994 0 0 0-1.757.527a1 1 0 0 0 .219.724l5.798 6.4v1.994H4.03c-.564 0-1.018.463-1.018 1.036c0 .571.455.933 1.018.933h3.002v3c0 .555.42.99.956.99a.99.99 0 0 0 .987-.99v-3h2.973c.563 0 1.019-.361 1.019-.933s-.455-1.036-1.019-1.036H8.975V7.956z"></svg:path>`,
})
export class SiGlyphYenIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphYingYangIcon],svg[si-glyph-ying-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:path d="M7.984.053C3.599.053.045 3.614.045 8.006s3.555 7.953 7.939 7.953s7.939-3.561 7.939-7.953S12.369.053 7.984.053M7.49 2.045c.838 0 1.519.654 1.519 1.46s-.681 1.46-1.519 1.46c-.84 0-1.519-.654-1.519-1.46s.679-1.46 1.519-1.46m.545 12.863c-3.051 0-5.693-3.99.066-6.924c5.256-2.676 2.803-7.24-.066-6.976c4.375 0 6.939 3.111 6.939 6.95c.001 3.839-3.107 6.95-6.939 6.95"></svg:path><svg:ellipse cx="8.493" cy="11.445" rx="1.493" ry="1.445"></svg:ellipse></svg:g>`,
})
export class SiGlyphYingYangIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphZipIcon],svg[si-glyph-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.945.021H4.054c-.57 0-1.034.45-1.034 1.004v13.972c0 .555.464 1.004 1.034 1.004h8.891c.57 0 1.034-.449 1.034-1.004V1.025c0-.554-.463-1.004-1.034-1.004m-2.914 2.026h-1v.906h1v1.094h-1v.906h1v1.094h-1v.922h.984v4.047H6.984V6.969h1l-.016-1.922h-1V3.953h1v-.906h-1V1.953h1v-1h2.062v1.094z"></svg:path><svg:path d="M8 8h.953v.953H8z"></svg:path></svg:g>`,
})
export class SiGlyphZipIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphZoomInIcon],svg[si-glyph-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.913 5.976c0-3.281-2.667-5.939-5.956-5.939C7.666.037 5 2.695 5 5.976c0 3.279 2.666 5.939 5.957 5.939c3.289 0 5.956-2.66 5.956-5.939m-11.004.031c0-2.79 2.271-5.048 5.079-5.048c2.805 0 5.078 2.258 5.078 5.048c0 2.788-2.273 5.047-5.078 5.047c-2.807 0-5.079-2.259-5.079-5.047M2.822 16L1 14.178l4.148-4.149s.086.773.57 1.256c.482.484 1.252.566 1.252.566z"></svg:path><svg:path d="M13.254 5.031h-1.285V3.742c0-.41-.557-.742-.972-.742s-.966.332-.966.742v1.289H8.74c-.41 0-.742.553-.742.968s.332.938.742.938h1.291v1.318c0 .41.551.743.966.743s.972-.333.972-.743V6.937h1.285c.41 0 .742-.523.742-.938s-.332-.968-.742-.968"></svg:path></svg:g>`,
})
export class SiGlyphZoomInIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[siGlyphZoomOutIcon],svg[si-glyph-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 6.01C17 2.725 14.33.063 11.035.063S5.071 2.725 5.071 6.01c0 3.284 2.67 5.948 5.964 5.948S17 9.294 17 6.01M5.889 6c0-2.807 2.289-5.079 5.116-5.079c2.825 0 5.114 2.272 5.114 5.079s-2.289 5.078-5.114 5.078c-2.827 0-5.116-2.272-5.116-5.078m-2.98 9.938l-1.823-1.823l4.148-4.148s.088.773.571 1.256c.483.484 1.252.566 1.252.566z"></svg:path><svg:path d="M13.938 5.996c0 .523-.326.948-.729.948H8.771c-.402 0-.729-.425-.729-.948c0-.525.326-.95.729-.95h4.438c.403 0 .729.425.729.95"></svg:path></svg:g>`,
})
export class SiGlyphZoomOutIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
