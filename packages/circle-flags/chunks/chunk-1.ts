import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMaIcon],svg[circle-flags-ma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMa0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#496e2d" d="M407.3 210H291.7L256 100.3L220.3 210H104.7l93.5 68l-35.7 109.8L256 320l93.5 68l-35.7-110zm-183 59.5l12.2-37.1h39l12.1 37.1l-31.6 23l-31.6-23zm44-59.4h-24.6l12.3-37.9zm38.3 45.7l-7.7-23.4h39.9zM213 232.4l-7.7 23.4l-32.2-23.4zm-8.3 97.3l12.3-38l20 14.5zm70.1-23.4l20-14.5l12.3 37.9z"></svg:path></svg:g>`,
})
export class CircleFlagsMaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMalayaliIcon],svg[circle-flags-malayali-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMalayali0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMalayali0)"><svg:path fill="#ffda44" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0z"></svg:path><svg:path fill="#338af3" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsMalayaliIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsManipurIcon],svg[circle-flags-manipur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsManipur0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsManipur0)"><svg:path fill="#d80027" d="M0 0h512v73L256 96L0 73Z"></svg:path><svg:path fill="#eee" d="M0 73h512v73l-256 23L0 146Z"></svg:path><svg:path fill="#333" d="M0 146h512v73l-256 23L0 219Z"></svg:path><svg:path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z"></svg:path><svg:path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z"></svg:path><svg:path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z"></svg:path><svg:path fill="#6da544" d="M0 439h512v73H0z"></svg:path></svg:g>`,
})
export class CircleFlagsManipurIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMaoriIcon],svg[circle-flags-maori-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMaori0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMaori0)"><svg:path fill="#eee" d="m0 68.6l247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"></svg:path><svg:path fill="#333" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z"></svg:path><svg:path fill="#d80027" d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8a47 47 0 0 1 0 93.9a68.3 68.3 0 0 0 0-136.5z"></svg:path></svg:g>`,
})
export class CircleFlagsMaoriIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMarsIcon],svg[circle-flags-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMars0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMars0)"><svg:path fill="#6da544" d="M170 0h172l32 256l-32 256H170l-32-256Z"></svg:path><svg:path fill="#d80027" d="M0 0h170v512H0Z"></svg:path><svg:path fill="#0052b4" d="M342 0h170v512H342Z"></svg:path></svg:g>`,
})
export class CircleFlagsMarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMcIcon],svg[circle-flags-mc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMc0)"><svg:path fill="#eee" d="m0 256l258.2-43.3L512 256v256H0z"></svg:path><svg:path fill="#d80027" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsMcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMdIcon],svg[circle-flags-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMd0)"><svg:path fill="#0052b4" d="M0 0h144.7l36 254.6l-36 257.4H0z"></svg:path><svg:path fill="#d80027" d="M367.3 0H512v512H367.3l-29.7-257.3z"></svg:path><svg:path fill="#ffda44" d="M144.7 0h222.6v512H144.7z"></svg:path><svg:path fill="#ff9811" d="M345.1 201.4H284a27.8 27.8 0 1 0-55.6 0h-61.2a28.2 28.2 0 0 0 28.3 27.4h-1a27.4 27.4 0 0 0 27.5 27.4c0 13.4 9.6 24.5 22.3 27l-21.6 48.7a88.8 88.8 0 0 0 33.5 6.5a88.8 88.8 0 0 0 33.5-6.5L268.1 283a27.4 27.4 0 0 0 22.3-26.9a27.4 27.4 0 0 0 27.4-27.4h-.9a28.2 28.2 0 0 0 28.3-27.4z"></svg:path><svg:path fill="#0052b4" d="M256.1 239.3L220 256v33.4l36.2 22.3l36.2-22.3V256z"></svg:path><svg:path fill="#d80027" d="M220 222.6h72.3V256H220z"></svg:path></svg:g>`,
})
export class CircleFlagsMdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMeIcon],svg[circle-flags-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMe0)"><svg:path fill="#ffda44" d="M0 0h512v44.5l-43.6 209.7L512 467.5V512H0v-44.5l46.6-212L0 44.5z"></svg:path><svg:path fill="#a2001d" d="M0 44.5h512v423H0z"></svg:path><svg:path fill="#ffda44" d="M200.3 189.2h111.4v-44.5l-22.3 11.1l-33.4-33.4l-33.4 33.4l-22.3-11.1zM356.2 256h-55.7a25.5 25.5 0 0 0 3.5-12.8a25.7 25.7 0 0 0-48.3-12.1a25.7 25.7 0 1 0-45 24.9h-54.9c0 17 14.9 30.8 31.9 30.8h-1c0 14 9.2 25.8 22 29.6l-25 25l23.6 23.6l33.5-33.5c1.3.5 2.6.9 4 1.1l-20.2 45.7a83.2 83.2 0 0 0 31.4 6.2a83.2 83.2 0 0 0 31.4-6.2l-20.2-45.7a25.4 25.4 0 0 0 4-1.1l33.5 33.5l23.6-23.6l-25-25a30.8 30.8 0 0 0 22-29.6h-1c17 0 31.9-13.8 31.9-30.8"></svg:path><svg:path fill="#6da544" d="m256 272.7l-36.2 16.7v33.4L256 345l36.2-22.2v-33.4z"></svg:path><svg:path fill="#0052b4" d="M219.8 256h72.4v44.5h-72.4z"></svg:path></svg:g>`,
})
export class CircleFlagsMeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMfIcon],svg[circle-flags-mf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMf0)"><svg:path fill="#eee" d="M0 128V0h512v128L299 512h-86z"></svg:path><svg:circle cx="256" cy="213" r="57" fill="#ffda44"></svg:circle><svg:path fill="#eee" d="M185 213h142l-71 128Z"></svg:path><svg:path fill="#d80027" d="M256 341L142 235h228z"></svg:path><svg:path fill="#0052b4" d="m0 128l213 213v171H0Zm512 0L299 341v171h213z"></svg:path></svg:g>`,
})
export class CircleFlagsMfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMgIcon],svg[circle-flags-mg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMg0)"><svg:path fill="#eee" d="M0 0h167l45.6 257.6L167.1 512H0z"></svg:path><svg:path fill="#d80027" d="M167 0h345v256l-176.7 53.5L166.9 256z"></svg:path><svg:path fill="#6da544" d="M167 256h345v256H167z"></svg:path></svg:g>`,
})
export class CircleFlagsMgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMhIcon],svg[circle-flags-mh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMh0)"><svg:path fill="#0052b4" d="M0 0h397.6L512 114.2V512H0z"></svg:path><svg:path fill="#eee" d="M512 0H397.6L0 512L493.4 53.7z"></svg:path><svg:path fill="#ff9811" d="m0 512l512-397.8V0z"></svg:path><svg:path fill="#eee" d="M222.2 150.1L191 164.8l16.7 30.3l-34-6.5l-4.3 34.3l-23.6-25.2l-23.7 25.2l-4.3-34.3l-33.9 6.5l16.6-30.3l-31.2-14.7l31.2-14.7L84 105.1l34 6.5l4.2-34.3l23.7 25.3l23.6-25.3l4.3 34.3l34-6.5l-16.7 30.3z"></svg:path></svg:g>`,
})
export class CircleFlagsMhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMiIcon],svg[circle-flags-mi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMi0)"><svg:path fill="#eee" d="m0 68.6l247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"></svg:path><svg:path fill="#333" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z"></svg:path><svg:path fill="#d80027" d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8a47 47 0 0 1 0 93.9a68.3 68.3 0 0 0 0-136.5z"></svg:path></svg:g>`,
})
export class CircleFlagsMiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMizoramIcon],svg[circle-flags-mizoram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMizoram0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMizoram0)"><svg:path fill="#eee" d="M0 0h512v256l-256 32L0 256Z"></svg:path><svg:path fill="#338af3" d="M0 256h512v256H0Z"></svg:path><svg:circle cx="256" cy="256" r="128" fill="#d80027"></svg:circle></svg:g>`,
})
export class CircleFlagsMizoramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMkIcon],svg[circle-flags-mk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMk0)"><svg:path fill="#ffda44" d="M0 0h68.2l86 33.6L216.5 0h78.8l61.2 34.8L443.8 0H512v68.3l-31.4 88l31.4 60.2v78.8L477.4 356l34.6 87.8V512h-68.2l-77-37.3l-71.3 37.3h-78.8l-61-39.7L68.2 512H0v-68l40.3-88.2L0 295.5v-78.8L40.3 157L0 68.2z"></svg:path><svg:path fill="#d80027" d="M295.5 512h148.3L256 256zm-79-512H68.2L256 256zm.2 512L256 256L68.2 512zM0 216.7L256 256L0 68.2zm0 227.2L256 256L0 295.5zM512 68.3L256 256l256-39.5zM443.8 0H295.3L256 256zM512 443.8V295.3L256 256z"></svg:path><svg:circle cx="256" cy="256" r="89" fill="#d80027"></svg:circle><svg:circle cx="256" cy="256" r="66.8" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsMkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMlIcon],svg[circle-flags-ml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMl0)"><svg:path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"></svg:path><svg:path fill="#6da544" d="M0 0h167v512H0z"></svg:path><svg:path fill="#d80027" d="M345 0h167v512H345z"></svg:path></svg:g>`,
})
export class CircleFlagsMlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMmIcon],svg[circle-flags-mm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMm0)"><svg:path fill="#6da544" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#ffda44" d="M0 0h512v167H0z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0z"></svg:path><svg:path fill="#eee" d="M431.5 216.5h-134L256 89l-41.4 127.6h-134l108.3 78.8L147.5 423L256 345l108.5 78l-41.4-127.6z"></svg:path></svg:g>`,
})
export class CircleFlagsMmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMnIcon],svg[circle-flags-mn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMn0)"><svg:path fill="#a2001d" d="M0 0h167l84.9 45L345 0h167v512H345l-87.7-48.1L167 512H0z"></svg:path><svg:path fill="#0052b4" d="M167 0h178v512H167z"></svg:path><svg:g fill="#ffda44"><svg:path d="M122.4 256h22.3v89h-22.3zm-89 0h22.3v89H33.4z"></svg:path><svg:circle cx="89" cy="289.4" r="22.3"></svg:circle><svg:circle cx="89" cy="211.5" r="11.1"></svg:circle><svg:path d="M66.8 322.8h44.5V345H66.8zm0-89h44.5V256H66.8zM89 133.5l8 24.2h25.4l-20.6 15l7.9 24.3L89 182l-20.6 15l7.9-24.3l-20.6-15h25.5z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsMnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMniIcon],svg[circle-flags-mni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMni0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMni0)"><svg:path fill="#d80027" d="M0 0h512v73L256 96L0 73Z"></svg:path><svg:path fill="#eee" d="M0 73h512v73l-256 23L0 146Z"></svg:path><svg:path fill="#333" d="M0 146h512v73l-256 23L0 219Z"></svg:path><svg:path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z"></svg:path><svg:path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z"></svg:path><svg:path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z"></svg:path><svg:path fill="#6da544" d="M0 439h512v73H0z"></svg:path></svg:g>`,
})
export class CircleFlagsMniIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMoIcon],svg[circle-flags-mo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMo0)"><svg:path fill="#496e2d" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M300.5 245.3c-6.3 0-12.2 1.3-17.8 3.3c3-6.8 5.1-14.3 5.1-22.4c0-31.8-31.8-55.6-31.8-55.6s-31.8 23.8-31.8 55.6c0 8 2 15.6 5 22.4c-5.5-2-11.4-3.3-17.7-3.3c-31.8 0-55.7 31.8-55.7 31.8s23.9 31.8 55.7 31.8C230 309 246 298 256 289c10 9.1 25.9 20 44.5 20c31.8 0 55.7-31.8 55.7-31.8s-23.9-31.8-55.7-31.8z"></svg:path><svg:path fill="#ffda44" d="m256 100.2l6.6 20.2h21.2l-17.2 12.5l6.6 20.2l-17.2-12.5l-17.2 12.5l6.6-20.2l-17.2-12.5h21.2zm-80.8 35.3l12.6 11.4l14.7-8.5l-6.9 15.5l12.7 11.4l-17-1.8l-6.9 15.6l-3.5-16.7l-17-1.7l14.8-8.5zM116 194.7l16.6 3.5l8.5-14.7l1.8 17l16.6 3.5l-15.5 6.9l1.8 16.9l-11.4-12.6l-15.5 6.9l8.5-14.8zm220.8-59.2L324.2 147l-14.7-8.5l6.9 15.5l-12.7 11.4l17-1.8l6.9 15.6l3.5-16.7l17-1.7l-14.8-8.5zm59.2 59.2l-16.6 3.5l-8.5-14.7l-1.8 17l-16.6 3.5l15.5 6.9l-1.8 16.9l11.4-12.6l15.5 6.9l-8.5-14.8z"></svg:path><svg:path fill="#eee" d="M256 398c25.3 0 48.5-8.5 67.2-22.6H188.8c18.7 14.1 42 22.6 67.2 22.6m-102-66.8a111.3 111.3 0 0 0 13.2 22.6h177.6a111.3 111.3 0 0 0 13.2-22.6z"></svg:path></svg:g>`,
})
export class CircleFlagsMoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMpIcon],svg[circle-flags-mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMp0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMp0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M248 417.2a16.7 16.7 0 0 1-15-11a16.7 16.7 0 0 1-29.7-7.6a16.7 16.7 0 0 1-27.6-13.5a16.7 16.7 0 0 1-24.3-18.9a16.7 16.7 0 0 1-17.8-5a16.7 16.7 0 0 1-2.3-18.3a16.7 16.7 0 0 1-15-26.8a16.7 16.7 0 0 1-9.2-29.4a16.7 16.7 0 0 1-3.1-30.5a16.7 16.7 0 0 1 3-30.6a16.7 16.7 0 0 1 9.2-29.4a16.7 16.7 0 0 1 15-26.9a16.7 16.7 0 0 1 2.2-18.3c4.5-5.2 11.5-7 17.7-5a16.7 16.7 0 0 1 6-17.5a16.7 16.7 0 0 1 18.3-1.4a16.7 16.7 0 0 1 27.6-13.6a16.7 16.7 0 0 1 29.7-7.7a16.7 16.7 0 0 1 30.7-1.6a16.7 16.7 0 0 1 30.4 4.6a16.7 16.7 0 0 1 28.9 10.6a16.7 16.7 0 0 1 26.1 16.2c6-2.6 13.2-1.5 18.2 3.2a16.7 16.7 0 0 1 4.1 18a16.7 16.7 0 0 1 17.7 25.1a16.7 16.7 0 0 1 15.4 10.1a16.7 16.7 0 0 1-3.2 18.2a16.7 16.7 0 0 1 6.2 30c6 2.6 10.2 8.5 10.2 15.4v.4c0 6.9-4.2 12.8-10.2 15.4a16.7 16.7 0 0 1-6.1 30a16.7 16.7 0 0 1-12.2 28.3a16.7 16.7 0 0 1-.4 18.5a16.7 16.7 0 0 1-17.1 6.8a16.7 16.7 0 0 1-4.2 18c-5 4.7-12.2 5.7-18.1 3.2a16.7 16.7 0 0 1-26 16.3a16.7 16.7 0 0 1-28.8 10.7a16.7 16.7 0 0 1-30.5 4.6a16.7 16.7 0 0 1-15.9 9.4z"></svg:path><svg:circle cx="256" cy="256" r="111.3" fill="#338af3"></svg:circle><svg:path fill="#acabb1" d="M280.4 218.2c5.4-4 9-10.5 9-17.9v-11c0-12.4-10-22.3-22.3-22.3H245c-12.3 0-22.3 10-22.3 22.2v11.1c0 7.4 3.6 13.9 9 18L211.5 423s11.1 11 44.5 11s44.5-11 44.5-11z"></svg:path><svg:path fill="#eee" d="m256 167l19.3 59.5H338l-50.6 36.8l19.3 59.5L256 286l-50.6 36.8l19.3-59.5l-50.6-36.8h62.6z"></svg:path></svg:g>`,
})
export class CircleFlagsMpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMqIcon],svg[circle-flags-mq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMq0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMq0)"><svg:path fill="#6da544" d="M0 0h512v256l-256 44Z"></svg:path><svg:path fill="#333" d="M210 256h302v256H0z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsMqIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMqOldIcon],svg[circle-flags-mq-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMqOld0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMqOld0)"><svg:path fill="#0052b4" d="M0 0h222.6l31 23.4L289.4 0H512v222.6l-21.5 31l21.5 35.8V512H289.4l-34.2-20.5l-32.6 20.5H0V289.4l22.7-32.6L0 222.6z"></svg:path><svg:path fill="#eee" d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0z"></svg:path><svg:path fill="#eee" d="M343.4 162.4a6.2 6.2 0 0 1 6.2-6.1h13.2a38 38 0 0 0 0-75.9h-12.6c-4-3-9.6-5-15.6-5c-12.7 0-23 8.3-23 18.4c0 10 10.1 18.2 22.6 18.3h28.6a6.2 6.2 0 0 1 0 12.4h-13.2a38 38 0 0 0 0 75.8h51.1v-31.7h-51.1a6.2 6.2 0 0 1-6.2-6.2m-200.4 0a6.2 6.2 0 0 1 6.2-6.1h13.2a38 38 0 0 0 0-75.9H150c-4.1-3-9.6-5-15.7-5c-12.6 0-22.9 8.3-22.9 18.4c0 10 10 18.2 22.6 18.3h28.5a6.2 6.2 0 0 1 0 12.4h-13.2a38 38 0 0 0 0 75.8h51.1v-31.7h-51a6.2 6.2 0 0 1-6.3-6.2zm200.4 236.2a6.2 6.2 0 0 1 6.2-6.2h13.2a38 38 0 0 0 0-75.8h-12.6c-4-3-9.6-5-15.6-5c-12.7 0-23 8.3-23 18.4c0 10 10.1 18.1 22.6 18.3h28.6a6.2 6.2 0 0 1 6.2 6.2a6.2 6.2 0 0 1-6.2 6.2h-13.2a38 38 0 0 0 0 75.8h51v-31.7h-51a6.2 6.2 0 0 1-6.2-6.2m-200.4 0a6.2 6.2 0 0 1 6.2-6.2h13.2a38 38 0 0 0 0-75.8H150c-4.1-3-9.6-5-15.7-5c-12.6 0-22.9 8.3-22.9 18.4c0 10 10 18.1 22.6 18.3h28.5a6.2 6.2 0 0 1 6.2 6.2a6.2 6.2 0 0 1-6.2 6.2h-13.2a38 38 0 0 0 0 75.8h51.1v-31.7h-51a6.2 6.2 0 0 1-6.3-6.2z"></svg:path></svg:g>`,
})
export class CircleFlagsMqOldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMrIcon],svg[circle-flags-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMr0)"><svg:path fill="#496e2d" d="M0 0h512v512H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M256 295.8a89 89 0 0 1-87-70a89.4 89.4 0 0 0-2 19a89 89 0 1 0 178 0a89.4 89.4 0 0 0-2-19a89 89 0 0 1-87 70"></svg:path><svg:path d="m256 178l8.3 25.6H291l-21.7 15.8l8.3 25.5L256 229l-21.7 15.8l8.3-25.5l-21.7-15.8h26.8z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsMrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMrjIcon],svg[circle-flags-mrj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMrj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMrj0)"><svg:path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"></svg:path><svg:path fill="#eee" d="M512 0v170H0V0Z"></svg:path><svg:path fill="#d80027" d="M512 342v170H0V342Z"></svg:path></svg:g>`,
})
export class CircleFlagsMrjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMsIcon],svg[circle-flags-ms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMs0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#338af3" d="M289.4 133.6V256l78 40.4l77.9-40.4V133.6h-156z"></svg:path><svg:path fill="#a2001d" d="M289.4 256c0 59.6 77.9 78 77.9 78s78-18.4 78-78h-156z"></svg:path><svg:path fill="#333" d="M400.7 189.2h-22.3V167h-22.2v22.2h-22.3v22.3h22.3v66.8h22.2v-66.8h22.3z"></svg:path></svg:g>`,
})
export class CircleFlagsMsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMtIcon],svg[circle-flags-mt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMt0)"><svg:path fill="#eee" d="M0 0h256l52 259.2L256 512H0z"></svg:path><svg:path fill="#d80027" d="M256 0h256v512H256z"></svg:path><svg:path fill="#acabb1" d="M178 100.2V66.8h-33.3v33.4h-33.4v33.4h33.4V167h33.4v-33.4h33.4v-33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsMtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMuIcon],svg[circle-flags-mu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMu0)"><svg:path fill="#6da544" d="m0 378.3l254-37.1l258 37V512H0z"></svg:path><svg:path fill="#ffda44" d="m0 256.1l252.2-33.3L512 256v122.4H0z"></svg:path><svg:path fill="#0052b4" d="M0 133.7L249.7 97L512 133.7v122.4H0z"></svg:path><svg:path fill="#d80027" d="M0 0h512v133.7H0z"></svg:path></svg:g>`,
})
export class CircleFlagsMuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMvIcon],svg[circle-flags-mv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMv0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#6da544" d="M89 133.6h334v244.8H89z"></svg:path><svg:path fill="#eee" d="M297.2 328.3a72.3 72.3 0 1 1 34.4-136a89 89 0 1 0 0 127.3a72 72 0 0 1-34.4 8.7"></svg:path></svg:g>`,
})
export class CircleFlagsMvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMwIcon],svg[circle-flags-mw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMw0)"><svg:path fill="#d80027" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#333" d="M0 0h512v167H0z"></svg:path><svg:path fill="#496e2d" d="M0 345h512v167H0z"></svg:path><svg:path fill="#d80027" d="m332.5 122.4l-31.2-14.7l16.6-30.3l-34 6.5l-4.3-34.3L256 75l-23.6-25.3L228 84l-34-6.5l16.7 30.3l-31.3 14.7z"></svg:path></svg:g>`,
})
export class CircleFlagsMwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMxIcon],svg[circle-flags-mx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMx0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMx0)"><svg:path fill="#eee" d="M144 0h223l33 256l-33 256H144l-32-256z"></svg:path><svg:path fill="#496e2d" d="M0 0h144v512H0z"></svg:path><svg:path fill="#d80027" d="M368 0h144v512H368z"></svg:path><svg:path fill="#ffda44" d="M256 277v10h12l10-22z"></svg:path><svg:path fill="#496e2d" d="M160 242a96 96 0 0 0 192 0h-11a85 85 0 0 1-170 0zm39 17l-4 2c-2 2-2 6 1 8c15 14 34 22 54 24v17h12v-17c20-2 39-10 54-24c3-2 3-6 1-8s-6-2-8 0a78 78 0 0 1-53 21c-19 0-38-8-53-21z"></svg:path><svg:path fill="#338af3" d="M256 316c-14 0-28-5-40-13l6-9c20 13 48 13 68 0l7 9c-12 8-26 13-41 13"></svg:path><svg:path fill="#751a46" d="M256 174c22 11 12 33 11 34l-2-4c-5-11-18-18-31-18v11c6 0 11 5 11 11c-7 7-9 17-4 26l4 8l-13 23l29-7l18 18v-11l11 11l23-11l-35-21l-5-21l28 16c4 11 12 21 23 26c9-83-42-91-61-91z"></svg:path><svg:path fill="#6da544" d="M222 271c-15 0-33-12-38-40l11-2c4 23 18 31 27 31q4.5 0 6-3c0-2 0-3-6-5c-3-1-7-2-10-5c-10-12 4-24 11-30c1-1 2-2 1-3c0 0-2-2-5-2c-7 0-12-4-14-11c-2-6 2-13 8-17l5 11c-2 0-2 2-2 4c0 0 1 2 3 2c7 0 14 4 16 9c1 3 2 9-5 15c-7 7-11 12-9 15l5 1c5 2 14 5 13 17c-1 8-8 13-17 13h-1z"></svg:path><svg:path fill="#ffda44" d="m234 186l-12 11v11l18-9c3-1 3-5 1-7z"></svg:path><svg:circle cx="172" cy="275" r="8" fill="#ffda44"></svg:circle><svg:circle cx="189" cy="302" r="8" fill="#ffda44"></svg:circle><svg:circle cx="216" cy="323" r="8" fill="#ffda44"></svg:circle><svg:circle cx="297" cy="323" r="8" fill="#ffda44"></svg:circle><svg:circle cx="324" cy="302" r="8" fill="#ffda44"></svg:circle><svg:circle cx="341" cy="275" r="8" fill="#ffda44"></svg:circle><svg:rect width="34" height="22" x="239" y="299" fill="#ff9811" rx="11" ry="11"></svg:rect></svg:g>`,
})
export class CircleFlagsMxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMyIcon],svg[circle-flags-my-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMy0)"><svg:path fill="#eee" d="M0 256L256 0h256v55.7l-19.5 33l19.5 33.7v66.8l-22.1 37.7L512 256v66.8l-20.2 38.5l20.2 28.3v66.7l-254.5 28.2L0 456.3v-66.7l26-35.1l-26-31.7z"></svg:path><svg:path fill="#d80027" d="M256 256h256v-66.8H222.9zm-33.1-133.6H512V55.7H222.9zM512 512v-55.7H0V512zM0 389.6h512v-66.8H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h256v256H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M170.2 219.1a63.3 63.3 0 1 1 30.1-119a78 78 0 1 0 0 111.4a63 63 0 0 1-30 7.6z"></svg:path><svg:path d="m188 111.3l11.3 23.5l25.4-5.9l-11.4 23.5l20.4 16.2l-25.4 5.7l.1 26l-20.3-16.2l-20.4 16.2l.1-26l-25.4-5.7l20.4-16.2l-11.4-23.5l25.4 6z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsMyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMzIcon],svg[circle-flags-mz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMz0)"><svg:path fill="#eee" d="m99 136.8l413 20v31.5l-35.9 66.1l36.2 68.4l-.3 32.4l-413 22z"></svg:path><svg:path fill="#496e2d" d="M512 156.8V0H0l122 156.8z"></svg:path><svg:path fill="#333" d="M167 188.3v134.5h345.3l-.3-134.5z"></svg:path><svg:path fill="#ffda44" d="M512 355.2V512H0l122-156.8z"></svg:path><svg:path fill="#a2001d" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ffda44" d="m103.6 189.2l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6H87z"></svg:path><svg:path fill="#eee" d="M55.1 256h97v44.5h-97z"></svg:path><svg:path fill="#333" d="m170.5 205l-15.7-15.8l-51.2 51.2l-51.1-51.2L36.7 205L88 256l-51.2 51.3l15.8 15.5l51.1-51l51.2 51l15.7-15.5l-51.2-51.2z"></svg:path></svg:g>`,
})
export class CircleFlagsMzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNaIcon],svg[circle-flags-na-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNa0)"><svg:path fill="#eee" d="m0 401.9l160.6-237.1L401.9 0H449l63 63v47.3L350.3 339.2L110.3 512H63L0 449z"></svg:path><svg:path fill="#a2001d" d="M0 512h63L512 63V0h-63L0 449z"></svg:path><svg:path fill="#0052b4" d="M0 0v401.9L401.9 0z"></svg:path><svg:path fill="#496e2d" d="M512 512V110.3L110.3 512z"></svg:path><svg:path fill="#ffda44" d="m211.5 144.7l-28.7 13.5L198 186l-31.2-6l-4 31.5l-21.6-23.2l-21.7 23.2l-4-31.5l-31 6l15.2-27.8L71 144.7l28.7-13.5l-15.3-27.8l31.1 6l4-31.5l21.7 23.2L163 78l4 31.5l31-6l-15.2 27.8z"></svg:path></svg:g>`,
})
export class CircleFlagsNaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNatoIcon],svg[circle-flags-nato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNato0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNato0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m365.9 273.9l46-17.9l-46-17.9l-25.3-9.8l-41-16l-16-41a89.4 89.4 0 0 1 57 57l25.3 9.8a112 112 0 0 0-92-92l-17.9-46l-17.9 46a112 112 0 0 0-92 92l-46 17.9l46 17.9a112 112 0 0 0 92 92l17.9 46l17.9-46a112 112 0 0 0 92-92m-83.5-44.3L256 256h94.4l-68 26.4L256 256v94.4l-26.4-68L256 256h-94.4l68-26.4L256 256v-94.4zm-54-58.2l-16 41l-41 16a89.4 89.4 0 0 1 57-57m-57 112.3l41 16l16 41a89.4 89.4 0 0 1-57-57m112.3 57l16-41l41-16a89.4 89.4 0 0 1-57 57"></svg:path><svg:path fill="#0052b4" d="M350.4 256H256l26.4 26.4zm-188.8 0H256l-26.4-26.4zm94.4 94.4V256l-26.4 26.4zm0-94.4l26.4-26.4l-26.4-68z"></svg:path><svg:path fill="#eee" d="M244.9 33.4H267v44.5h-22zM33.4 244.9h44.5V267H33.4zM244.9 434H267v44.5h-22zM434 244.9h44.5V267H434z"></svg:path></svg:g>`,
})
export class CircleFlagsNatoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNbIcon],svg[circle-flags-nb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNb0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNb0)"><svg:path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7l-65.5 50.7H0V322.8l51.4-68.5l-51.4-65z"></svg:path><svg:path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3l36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7l24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"></svg:path><svg:path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsNbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNcIcon],svg[circle-flags-nc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNc0)"><svg:path fill="#496e2d" d="M0 352h512v160H0z"></svg:path><svg:path fill="#d80027" d="M0 160h512v192H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v160H0z"></svg:path><svg:path fill="#ffda44" d="M398 256a168 168 0 1 1-336 0a168 168 0 0 1 336 0"></svg:path><svg:path fill="#333" d="M230 80a176 176 0 1 0 0 352a176 176 0 0 0 0-352m-8 16v34c-8 4-14 8-15 16l-1 16l6-3l10-4v8a24 24 0 0 0-16 23a24 24 0 0 0 16 22v8h-20v16h20v8a24 24 0 0 0-16 22a24 24 0 0 0 16 23v7h-20v17h20v7a24 24 0 0 0-16 23a24 24 0 0 0 16 22v8c-10 0-18 3-23 7c-7 5-22 20-30 28a160 160 0 0 1 53-308m16 0a160 160 0 0 1 51 309l-30-29c-5-4-12-6-21-7v-8a24 24 0 0 0 16-22a24 24 0 0 0-16-23v-7h21v-16h-21v-8a24 24 0 0 0 16-23a24 24 0 0 0-16-22v-8h21v-16h-21v-7a24 24 0 0 0 16-23a24 24 0 0 0-16-23v-20c6-5 11-13 17-23c4-8 2-11 2-11l-2 3l-17 11z"></svg:path></svg:g>`,
})
export class CircleFlagsNcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNdIcon],svg[circle-flags-nd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNd0)"><svg:path fill="#6da544" d="M31.4 0H512v512H31.4z"></svg:path><svg:path fill="#ffda44" d="M57.8 73.3H512v73.3l-65.1 110l65.1 110v73.3H57.8z"></svg:path><svg:path fill="#d80027" d="M132 146.6h380v73.3l-27 36l27 37.3v73.3H132z"></svg:path><svg:path fill="#eee" d="M0 0v512l279.8-256z"></svg:path><svg:path fill="#d80027" d="m103 189.2l16.5 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6h53.6z"></svg:path><svg:path fill="#ffda44" d="m148.5 260.2l-43.2-15.3l-3.4-31a16.7 16.7 0 1 0-32.5 7.6l-12 12.1h21.5c0 22.4-16.7 22.4-16.7 44.7l9.2 22.2h55.7l9.3-22.2a22.2 22.2 0 0 0 1.7-6.6c8-3.2 10.4-11.5 10.4-11.5"></svg:path><svg:path fill="#333" d="m31.4 0l220 220H512v73.2H250.2L31.4 512H0l256-256L0 0z"></svg:path></svg:g>`,
})
export class CircleFlagsNdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNeIcon],svg[circle-flags-ne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNe0)"><svg:path fill="#eee" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#ff9811" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#6da544" d="M0 367.3h512V512H0z"></svg:path><svg:circle cx="256" cy="256.1" r="89" fill="#ff9811"></svg:circle></svg:g>`,
})
export class CircleFlagsNeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNfIcon],svg[circle-flags-nf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNf0)"><svg:path fill="#6da544" d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"></svg:path><svg:path fill="#eee" d="M144.7 0h222.6v512H144.7z"></svg:path><svg:path fill="#6da544" d="m323 334l-67-211.6L189.3 334h50.1v55.7h33.4V334z"></svg:path></svg:g>`,
})
export class CircleFlagsNfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNgIcon],svg[circle-flags-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNg0)"><svg:path fill="#6da544" d="M0 0v512h160l96-64l96 64h160V0H352l-96 64l-96-64Z"></svg:path><svg:path fill="#eee" d="M160 0h192v512H160Z"></svg:path></svg:g>`,
})
export class CircleFlagsNgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNiIcon],svg[circle-flags-ni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNi0)"><svg:path fill="#338af3" d="M0 0h512v144.7l-41.4 111.7L512 367.3V512H0V367.3l41.5-107.9L0 144.7z"></svg:path><svg:path fill="#eee" d="M0 144.7h512v222.6H0z"></svg:path><svg:path fill="#ffda44" d="M256 178a78 78 0 1 0 0 156a78 78 0 0 0 0-156m0 122.5a44.5 44.5 0 1 1 0-89a44.5 44.5 0 0 1 0 89"></svg:path><svg:path fill="#0052b4" d="M294.6 267.1L256 256l-38.6 11.1l-12.8 22.3h102.8z"></svg:path><svg:path fill="#338af3" d="M256 200.3L230.3 245l25.7 11l25.7-11.1z"></svg:path><svg:path fill="#6da544" d="M217.4 267.1h77.2L281.7 245h-51.4z"></svg:path></svg:g>`,
})
export class CircleFlagsNiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNlIcon],svg[circle-flags-nl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNl0)"><svg:path fill="#eee" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#a2001d" d="M0 0h512v167H0z"></svg:path><svg:path fill="#0052b4" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsNlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNlFrIcon],svg[circle-flags-nl-fr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNlFr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNlFr0)"><svg:path fill="#eee" d="M0 0v51.7l32 103.4H0v103.5L32 362H0v150h150v-32l103.4 32h103.5v-32l103.4 32H512v-51.7l-32-103.4h32V253.4L480 150h32V0H362v32L258.6 0H155.1v32L51.7 0z"></svg:path><svg:path fill="#0052b4" d="M51.7 0L512 460.3V356.9L155.1 0zm206.9 0L512 253.4V150L362 0zM0 51.8v103.4L356.8 512h103.4zm0 206.9v103.4L149.9 512h103.5z"></svg:path><svg:path fill="#d80027" d="M261.6 222.2a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m-100-100a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m200 200a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m-254-45.9a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.5a38 38 0 0 0 53.7 53.8a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.9a18 18 0 0 0 0-25.3m100 100a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m207-207a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.5a38 38 0 0 0 53.7 53.8a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.9a18 18 0 0 0 0-25.3m-100-100a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.6a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.3"></svg:path></svg:g>`,
})
export class CircleFlagsNlFrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNnIcon],svg[circle-flags-nn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNn0)"><svg:path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7l-65.5 50.7H0V322.8l51.4-68.5l-51.4-65z"></svg:path><svg:path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3l36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7l24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"></svg:path><svg:path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsNnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNoIcon],svg[circle-flags-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNo0)"><svg:path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7l-65.5 50.7H0V322.8l51.4-68.5l-51.4-65z"></svg:path><svg:path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3l36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7l24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"></svg:path><svg:path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsNoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNonIcon],svg[circle-flags-non-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNon0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNon0)"><svg:path fill="#eee" d="M16 16h480l16 16v480H32l-16-16Z"></svg:path><svg:path fill="#333" d="M0 0v512h32v-97c42-2 83-10 122-25l37 90l30-12l-37-89c38-18 73-41 103-70l68 69l23-23l-69-68c29-30 52-65 70-103l89 37l12-30l-90-37c15-39 23-80 25-122h97V0Zm256 32c46 0 88 14 123 37A368 368 0 0 1 69 379A224 224 0 0 1 256 32"></svg:path><svg:path fill="#333" d="M194 138a28 28 0 0 0-28 28H82a28 28 0 0 0 28 28a28 28 0 0 0 28 28a28 28 0 0 0 28 28h56a28 28 0 0 0 28-28a28 28 0 0 0 28-28a28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28"></svg:path></svg:g>`,
})
export class CircleFlagsNonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNorthernCyprusIcon],svg[circle-flags-northern-cyprus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNorthernCyprus0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNorthernCyprus0)"><svg:path fill="#eee" d="M0 0v48l32 24L0 96v320l32 24l-32 24v48h512v-48l-32-24l32-24V96l-32-24l32-24V0Z"></svg:path><svg:path fill="#d80027" d="M0 464h512v-48H0ZM0 48v48h512V48Zm270 255v-94l55 76l-89-29l89-29z"></svg:path><svg:path fill="#d80027" d="M185 167a89 89 0 1 0 62 153a72 72 0 0 1-34 8a72 72 0 1 1 34-136a89 89 0 0 0-62-25"></svg:path></svg:g>`,
})
export class CircleFlagsNorthernCyprusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNpIcon],svg[circle-flags-np-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNp0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNp0)"><svg:path fill="#eee" d="M228.4 0H512v512h-27.4L159.4 258.5z"></svg:path><svg:path fill="#0052b4" d="M510.5 283.8L228.5 0h-39.3l-70.9 253.8L445.2 512h39.4L256.4 283.8h254z"></svg:path><svg:path fill="#d80027" d="M445.2 256L189.2 0H0v512h445.2l-256-256z"></svg:path><svg:path fill="#eee" d="m243.5 378l-31.3-14.7L229 333l-34 6.5l-4.3-34.3l-23.6 25.2l-23.7-25.2l-4.3 34.3l-34-6.5l16.7 30.3L90.4 378l31.3 14.7l-16.6 30.3l34-6.5l4.2 34.3l23.7-25.2l23.6 25.2l4.3-34.3l34 6.5l-16.7-30.3zM149.8 89l-3.2 25l-24.7-4.7l12.1 22l-22.7 10.7h-11.1a66.8 66.8 0 0 0 133.5 0h-11.1L200 131.3l12-22l-24.6 4.7l-3.1-25l-17.2 18.4z"></svg:path></svg:g>`,
})
export class CircleFlagsNpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNrIcon],svg[circle-flags-nr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNr0)"><svg:path fill="#0052b4" d="M0 0h512v233.7L494.3 257l17.7 21.3V512H0V278.3l18.7-22.9L0 233.7z"></svg:path><svg:path fill="#eee" d="m211.5 345l-28.7 13.5l15.3 27.8l-31.2-6l-4 31.5l-21.6-23.1l-21.7 23.1l-4-31.4l-31.1 6l15.3-27.9L71 345l28.7-13.4l-15.3-27.8l31.1 6l4-31.5l21.7 23.1l21.7-23.1l4 31.4l31-6l-15.2 27.9z"></svg:path><svg:path fill="#ffda44" d="M0 233.7h512v44.6H0z"></svg:path></svg:g>`,
})
export class CircleFlagsNrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNuIcon],svg[circle-flags-nu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNu0)"><svg:path fill="#ffda44" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32l42-16l41 16h45l-8-16l8-15v-14l-16-42l16-41V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#0052b4" d="M128 256v-83l83 83zm128-45l-83-83h83z"></svg:path><svg:path fill="#d80027" d="m128 128l128 128v-31l-97-97Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Z"></svg:path><svg:circle cx="64" cy="64" r="48" fill="#0052b4"></svg:circle><svg:path fill="#ffda44" d="m50 198l14-44l15 44l-38-27h47zM162 86l14-44l15 44l-38-27h47ZM64 17l28 86l-73-53h90l-73 53Z"></svg:path></svg:g>`,
})
export class CircleFlagsNuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNyIcon],svg[circle-flags-ny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNy0)"><svg:path fill="#d80027" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#333" d="M0 0h512v167H0z"></svg:path><svg:path fill="#496e2d" d="M0 345h512v167H0z"></svg:path><svg:path fill="#d80027" d="m332.5 122.4l-31.2-14.7l16.6-30.3l-34 6.5l-4.3-34.3L256 75l-23.6-25.3L228 84l-34-6.5l16.7 30.3l-31.3 14.7z"></svg:path></svg:g>`,
})
export class CircleFlagsNyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNzIcon],svg[circle-flags-nz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNz0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Zm382 92l-11 35h-37l30 21l-12 35l30-22l30 22l-12-35l30-21h-37zm61 72l-11 35h-37l30 21l-11 35l29-21l30 21l-12-35l30-21h-37Zm-123 10l-11 35h-37l30 22l-11 35l29-22l30 22l-11-35l29-22h-36zm59 130l-11 35h-37l30 21l-11 35l29-21l30 21l-11-35l29-21h-36z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97zm251 201l-5 18h-19l15 10l-6 18l15-11l15 11l-5-18l14-10h-18Zm-59-129l-5 17h-19l15 11l-6 17l15-11l15 11l-6-17l15-11h-18zm123-11l-6 18h-18l15 11l-6 17l15-11l15 11l-6-17l15-11h-18zm-61-72l-6 17h-18l15 11l-6 17l15-10l15 10l-6-17l15-11h-18z"></svg:path></svg:g>`,
})
export class CircleFlagsNzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOcIcon],svg[circle-flags-oc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOc0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="64" r="32" fill="#ffda44"></svg:circle><svg:circle cx="64" cy="256" r="32" fill="#ffda44"></svg:circle><svg:circle cx="448" cy="256" r="32" fill="#ffda44"></svg:circle><svg:circle cx="256" cy="448" r="32" fill="#ffda44"></svg:circle><svg:circle cx="352" cy="400" r="32" fill="#ffda44"></svg:circle><svg:circle cx="400" cy="352" r="32" fill="#ffda44"></svg:circle><svg:circle cx="352" cy="112" r="32" fill="#ffda44"></svg:circle><svg:circle cx="400" cy="160" r="32" fill="#ffda44"></svg:circle><svg:circle cx="160" cy="112" r="32" fill="#ffda44"></svg:circle><svg:circle cx="112" cy="160" r="32" fill="#ffda44"></svg:circle><svg:circle cx="112" cy="352" r="32" fill="#ffda44"></svg:circle><svg:circle cx="160" cy="400" r="32" fill="#ffda44"></svg:circle><svg:path fill="#ffda44" d="m256 60l-103 52l20 61l-61-20l-52 103l52 103l61-20l-20 61l103 52l103-52l-20-61l61 20l52-103l-52-103l-61 20l20-61zm0 36l64 32l-32 96l96-32l32 64l-32 64l-96-32l32 96l-64 32l-64-32l32-96l-96 32l-32-64l32-64l96 32l-32-96z"></svg:path></svg:g>`,
})
export class CircleFlagsOcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOccitaniaIcon],svg[circle-flags-occitania-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOccitania0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOccitania0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="64" r="32" fill="#ffda44"></svg:circle><svg:circle cx="64" cy="256" r="32" fill="#ffda44"></svg:circle><svg:circle cx="448" cy="256" r="32" fill="#ffda44"></svg:circle><svg:circle cx="256" cy="448" r="32" fill="#ffda44"></svg:circle><svg:circle cx="352" cy="400" r="32" fill="#ffda44"></svg:circle><svg:circle cx="400" cy="352" r="32" fill="#ffda44"></svg:circle><svg:circle cx="352" cy="112" r="32" fill="#ffda44"></svg:circle><svg:circle cx="400" cy="160" r="32" fill="#ffda44"></svg:circle><svg:circle cx="160" cy="112" r="32" fill="#ffda44"></svg:circle><svg:circle cx="112" cy="160" r="32" fill="#ffda44"></svg:circle><svg:circle cx="112" cy="352" r="32" fill="#ffda44"></svg:circle><svg:circle cx="160" cy="400" r="32" fill="#ffda44"></svg:circle><svg:path fill="#ffda44" d="m256 60l-103 52l20 61l-61-20l-52 103l52 103l61-20l-20 61l103 52l103-52l-20-61l61 20l52-103l-52-103l-61 20l20-61zm0 36l64 32l-32 96l96-32l32 64l-32 64l-96-32l32 96l-64 32l-64-32l32-96l-96 32l-32-64l32-64l96 32l-32-96z"></svg:path></svg:g>`,
})
export class CircleFlagsOccitaniaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOlympicsIcon],svg[circle-flags-olympics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOlympics0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOlympics0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#338af3" d="M109.6 153.1A71.8 71.8 0 0 0 38 224.7a71.8 71.8 0 0 0 71.6 71.6a71.8 71.8 0 0 0 71.6-71.6a71.8 71.8 0 0 0-71.6-71.6m0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6s-51.6-23-51.6-51.6s23-51.6 51.6-51.6"></svg:path><svg:path fill="#333" d="M256 153.1a71.8 71.8 0 0 0-71.6 71.6a71.8 71.8 0 0 0 71.6 71.6a71.8 71.8 0 0 0 71.6-71.6a71.8 71.8 0 0 0-71.6-71.6m0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6s-51.6-23-51.6-51.6s23-51.6 51.6-51.6"></svg:path><svg:path fill="#d80027" d="M402.4 153.1a71.8 71.8 0 0 0-71.6 71.6a71.8 71.8 0 0 0 71.6 71.6a71.8 71.8 0 0 0 71.6-71.6a71.8 71.8 0 0 0-71.6-71.6m0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6s-51.6-23-51.6-51.6s23-51.6 51.6-51.6"></svg:path><svg:path fill="#ffda44" d="M182.8 215.7a71.8 71.8 0 0 0-71.6 71.6a71.8 71.8 0 0 0 71.6 71.6a71.8 71.8 0 0 0 71.6-71.6a71.8 71.8 0 0 0-71.6-71.6m0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6s-51.6-23-51.6-51.6s23-51.6 51.6-51.6"></svg:path><svg:path fill="#6da544" d="M329.2 215.7a71.8 71.8 0 0 0-71.6 71.6a71.8 71.8 0 0 0 71.6 71.6a71.8 71.8 0 0 0 71.6-71.6a71.8 71.8 0 0 0-71.6-71.6m0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6s-51.6-23-51.6-51.6s23-51.6 51.6-51.6"></svg:path><svg:path fill="#338af3" d="m166.9 181.7l-16 12a51.5 51.5 0 0 1 0 61.9l16 12a71.6 71.6 0 0 0 0-85.9"></svg:path><svg:path fill="#333" d="m313.3 181.7l-16 12a51.5 51.5 0 0 1 0 61.9l16 12a71.6 71.6 0 0 0 0-85.9M225 266l-12 16a71.7 71.7 0 0 0 43 14.3v-20a51.5 51.5 0 0 1-31-10.3"></svg:path><svg:path fill="#d80027" d="m371.4 266l-12 16a71.7 71.7 0 0 0 43 14.3v-20a51.5 51.5 0 0 1-31-10.3"></svg:path></svg:g>`,
})
export class CircleFlagsOlympicsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOmIcon],svg[circle-flags-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOm0)"><svg:path fill="#eee" d="M189.2 0H512v167l-347.5 24.6z"></svg:path><svg:path fill="#6da544" d="m163 320l349 25v167H189.2z"></svg:path><svg:path fill="#d80027" d="M0 0h189.2v167H512v178H189.2v167H0z"></svg:path><svg:path fill="#eee" d="M156.6 112.7L133 89l-15.7 15.8L101.5 89L78 112.7l15.8 15.7L78 144l23.6 23.6l15.8-15.7l15.7 15.7l23.6-23.6l-15.7-15.7z"></svg:path></svg:g>`,
})
export class CircleFlagsOmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOrIcon],svg[circle-flags-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOr0)"><svg:path fill="#ffda44" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#eee" d="M0 352h512v160H0Z"></svg:path></svg:g>`,
})
export class CircleFlagsOrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOsIcon],svg[circle-flags-os-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOs0)"><svg:path fill="#d80027" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#eee" d="M0 0h512v167H0z"></svg:path><svg:path fill="#ffda44" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsOsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOtoIcon],svg[circle-flags-oto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOto0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOto0)"><svg:path fill="#ff9811" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#eee" d="m0 160l256-32l256 32v32H0Z"></svg:path><svg:path fill="#338af3" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#eee" d="m0 352l256 32l256-32v-32H0Z"></svg:path><svg:path fill="#6da544" d="M0 352h512v160H0Z"></svg:path><svg:circle cx="256" cy="256" r="160" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="128" fill="#338af3"></svg:circle><svg:path fill="#ff9811" d="M207 139v68h-68l49 49l-49 49h68v68l49-49l49 49v-68h68l-49-49l49-49h-68v-68l-49 49z"></svg:path></svg:g>`,
})
export class CircleFlagsOtoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOtomiIcon],svg[circle-flags-otomi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOtomi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOtomi0)"><svg:path fill="#ff9811" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#eee" d="m0 160l256-32l256 32v32H0Z"></svg:path><svg:path fill="#338af3" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#eee" d="m0 352l256 32l256-32v-32H0Z"></svg:path><svg:path fill="#6da544" d="M0 352h512v160H0Z"></svg:path><svg:circle cx="256" cy="256" r="160" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="128" fill="#338af3"></svg:circle><svg:path fill="#ff9811" d="M207 139v68h-68l49 49l-49 49h68v68l49-49l49 49v-68h68l-49-49l49-49h-68v-68l-49 49z"></svg:path></svg:g>`,
})
export class CircleFlagsOtomiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPaIcon],svg[circle-flags-pa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPa0)"><svg:path fill="#eee" d="M0 0h256l256 256v256H256L0 256z"></svg:path><svg:path fill="#0052b4" d="M0 256v256h256V256z"></svg:path><svg:path fill="#d80027" d="M256 0h256v256H256z"></svg:path><svg:path fill="#0052b4" d="m152.4 89l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51L82.2 140h53.6z"></svg:path><svg:path fill="#d80027" d="m359.6 289.4l16.6 51h53.6L386.4 372l16.6 51l-43.4-31.5l-43.4 31.6l16.6-51l-43.4-31.6H343z"></svg:path></svg:g>`,
})
export class CircleFlagsPaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPapIcon],svg[circle-flags-pap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPap0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPap0)"><svg:path fill="#ffda44" d="m0 322.8l253.6-18.4L512 322.8v33.4l-258 15.3L0 356.2zm0 66.8l257.2-13.8L512 389.6V423l-253 16.9L0 423z"></svg:path><svg:path fill="#338af3" d="M0 0h512v322.8H0zm0 356.2h512v33.4H0zM0 423h512v89H0z"></svg:path><svg:path fill="#eee" d="m117.3 161.5l-50-22.1l50-22l22-50.1l22.2 50l50 22l-50 22.2l-22.1 50z"></svg:path><svg:path fill="#d80027" d="m139.4 94.9l13.6 30.9l31 13.6l-31 13.6l-13.6 31l-13.6-31l-31-13.6l31-13.6z"></svg:path></svg:g>`,
})
export class CircleFlagsPapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPeIcon],svg[circle-flags-pe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPe0)"><svg:path fill="#d80027" d="M0 0h167l86 41.2L345 0h167v512H345l-87.9-41.4L167 512H0z"></svg:path><svg:path fill="#eee" d="M167 0h178v512H167z"></svg:path></svg:g>`,
})
export class CircleFlagsPeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPfIcon],svg[circle-flags-pf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPf0)"><svg:path fill="#d80027" d="M0 0h512v133.7l-52 126l52 118.8V512H0V378.5l53-121L0 133.6z"></svg:path><svg:path fill="#eee" d="M0 133.7h512v244.8H0z"></svg:path><svg:path fill="#ffda44" d="M345 256.1c0 49.2-39.8 78-89 78s-89-28.8-89-78a89 89 0 1 1 178 0"></svg:path><svg:path fill="#0052b4" d="M345 256.1a89 89 0 1 1-178 0"></svg:path><svg:path fill="#d80027" d="M200.3 233.8h22.3v44.6h-22.3zm89 0h22.4v44.6h-22.3zM245 200.4h22v78h-22z"></svg:path></svg:g>`,
})
export class CircleFlagsPfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPgIcon],svg[circle-flags-pg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPg0)"><svg:path fill="#333" d="M512 512L301.3 226.6L0 0v512z"></svg:path><svg:path fill="#a2001d" d="m0 0l512 512V0z"></svg:path><svg:path fill="#eee" d="m195 346l4.2 12.9h13.6l-11 8l4.2 12.8l-11-7.9l-11 7.9l4.2-12.9l-11-8h13.6zm-34.6-123.7l7 21.5h22.5L171.7 257l7 21.5l-18.3-13.3l-18.2 13.3l6.9-21.5l-18.2-13.2h22.5zm0 157.4l7 21.5h22.5l-18.2 13.2l7 21.6l-18.3-13.4l-18.2 13.4l6.9-21.6l-18.2-13.2h22.5zm66-101.2l7 21.5H256l-18.2 13.3l6.9 21.4l-18.2-13.2l-18.3 13.2l7-21.4l-18.3-13.3h22.5zm-132 0l7 21.5h22.5l-18.2 13.3l7 21.4l-18.3-13.2l-18.3 13.2l7-21.4L64.8 300h22.5z"></svg:path><svg:path fill="#ffda44" d="M430.3 189a67 67 0 0 0-42.6-19.7l48.2-37.6a89.7 89.7 0 0 0-70.3-26A67.2 67.2 0 0 0 348.5 76l-19.2 38.2a28 28 0 0 0-4.8-6.3a28 28 0 1 0-39.7 39.7a28 28 0 0 0 6.3 4.8L253 171.5a67.2 67.2 0 0 0 29.6 17.2a89.7 89.7 0 0 0 26 70.2l42.2-54.2a16.8 16.8 0 0 1 11.9-4.9c4.4 0 8.7 1.7 12 5a16.8 16.8 0 0 1 4.8 11.9c0 4.5-1.7 8.8-4.9 12l15.9 15.9a39.1 39.1 0 0 0 3.7-51.4a44.7 44.7 0 0 1 20.2 11.6a45 45 0 0 1 0 63.6l15.9 15.9a67 67 0 0 0 0-95.4z"></svg:path></svg:g>`,
})
export class CircleFlagsPgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPhIcon],svg[circle-flags-ph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPh0)"><svg:path fill="#0052b4" d="M0 0h512v256l-265 45.2z"></svg:path><svg:path fill="#d80027" d="M210 256h302v256H0z"></svg:path><svg:path fill="#eee" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ffda44" d="M175.3 256L144 241.3l16.7-30.3l-34 6.5l-4.3-34.3l-23.6 25.2L75 183.2l-4.3 34.3l-34-6.5l16.7 30.3L22.3 256l31.2 14.7L37 301l34-6.5l4.2 34.3l23.7-25.2l23.6 25.2l4.3-34.3l34 6.5l-16.7-30.3zm-107-155.8l10.4 14.5l17-5.4l-10.6 14.4l10.4 14.5l-17-5.6L68 147l.2-17.9l-17-5.6l17-5.4zm0 264.8l10.4 14.6l17-5.4l-10.6 14.3l10.4 14.6l-17-5.7L68 411.8l.2-17.9l-17-5.6l17-5.4zm148.4-132.4L206.3 247l-17-5.4l10.5 14.4l-10.4 14.6l17-5.7l10.6 14.4l-.1-17.9l17-5.6l-17.1-5.4z"></svg:path></svg:g>`,
})
export class CircleFlagsPhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPirateIcon],svg[circle-flags-pirate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPirate0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPirate0)"><svg:path fill="#333" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#eee" d="M368 109c-10-1-18 7-18 17c0 5 2 11 6 14l-17 17l17 16l16-17c4 4 9 6 14 6c10 0 18-8 17-18c1-10-7-18-17-18c0-10-8-18-18-17m-16 226l-17 16l21 21c-4 4-6 9-6 14c0 10 8 18 18 17c10 1 18-7 18-17c10 0 18-8 17-18c1-10-7-18-17-18c-5 0-10 2-14 6zm-96-185c-59 0-106 48-106 106v41s14 8 36 29c21 22 29 36 29 36h82s8-14 29-36c22-21 36-29 36-29v-41c0-58-47-106-106-106"></svg:path><svg:circle cx="206" cy="267.7" r="35.3" fill="#333"></svg:circle><svg:circle cx="306" cy="267.7" r="35.3" fill="#333"></svg:circle><svg:path fill="#eee" d="M144 109c10-1 18 7 18 17c0 5-2 11-6 14l17 17l-17 16l-16-17c-4 4-9 6-14 6c-10 0-18-8-17-18c-1-10 7-18 17-18c0-10 8-18 18-17m16 226l17 16l-21 21c4 4 6 9 6 14c0 10-8 18-18 17c-10 1-18-7-18-17c-10 0-18-8-17-18c-1-10 7-18 17-18c5 0 10 2 14 6z"></svg:path><svg:path fill="#333" d="M256 293a8 8 0 0 0-7 4l-13 20a8 8 0 0 0 7 12h26a8 8 0 0 0 7-12l-13-20a8 8 0 0 0-7-4"></svg:path></svg:g>`,
})
export class CircleFlagsPirateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPkIcon],svg[circle-flags-pk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPk0)"><svg:path fill="#eee" d="M0 0h133.6l50.2 252.5L133.6 512H0z"></svg:path><svg:path fill="#496e2d" d="M133.6 0H512v512H133.6z"></svg:path><svg:path fill="#eee" d="M365.5 298.3A72.3 72.3 0 1 1 313.7 168a89 89 0 1 0 74.6 103.2a72 72 0 0 1-22.8 27.2zM364 167l18.2 19.6l24.3-11.3l-13 23.5l18.2 19.6l-26.3-5.1l-13 23.4l-3.3-26.7l-26.1-5l24.4-11.3z"></svg:path></svg:g>`,
})
export class CircleFlagsPkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPkJkIcon],svg[circle-flags-pk-jk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPkJk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPkJk0)"><svg:path fill="#ff9811" d="M0 0h224l32 88l-32 88l-96 32L0 176Z"></svg:path><svg:path fill="#eee" d="m0 224l256-32l256 32v48l-32 24l32 24v48l-32 24l32 24v48l-256 32L0 464v-48l32-24l-32-24v-48l32-24l-32-24Z"></svg:path><svg:path fill="#496e2d" d="M224 0v176H0v48h512V0ZM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"></svg:path><svg:circle cx="355.6" cy="110.2" r="80.5" fill="#eee"></svg:circle><svg:circle cx="376.2" cy="91.9" r="73.8" fill="#496e2d"></svg:circle><svg:path fill="#eee" d="m370 76l47-20l-27 44l-4-50l34 38z"></svg:path></svg:g>`,
})
export class CircleFlagsPkJkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPkSdIcon],svg[circle-flags-pk-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPkSd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPkSd0)"><svg:path fill="#496e2d" d="M0 0h512v512H0z"></svg:path><svg:ellipse cx="256" cy="284" fill="#eee" rx="140" ry="132"></svg:ellipse><svg:ellipse cx="256" cy="249" fill="#496e2d" rx="122" ry="111"></svg:ellipse><svg:path fill="#eee" d="M256.8 149.6h-1.6c-.3 8.5-4.7 15-11.3 20.9s-15.4 11.1-24.1 17a95.8 95.8 0 0 0-24 21.6a55.3 55.3 0 0 0-10.8 34.5c0 14.4 4.5 25.3 11.1 34a99 99 0 0 0 24.2 21.3c8.8 6 17.5 11.2 24 17.2a32 32 0 0 1 10 15.1c.4 2.1.8 4.2 1 6.5h1.5c.1-2.3.5-4.4.9-6.4a32 32 0 0 1 10-15.2c6.5-6 15.2-11.2 24-17.2a99 99 0 0 0 24.2-21.2c6.6-8.8 11-19.7 11-34a55.4 55.4 0 0 0-10.7-34.6a96 96 0 0 0-24-21.5c-8.8-6-17.5-11.2-24.1-17.1c-6.6-6-11-12.4-11.3-21z"></svg:path><svg:path fill="#eee" d="M262.6 117.8h29l-23 15.3l9 23.4l-22.3-14.7h-.1l-22 14.6l8.3-24l-21.2-14.6h26.2l7.6-22.2zm56.6 28.9c-2 4.4-3.1 9.6-3 13.8c-2.6-1.5-10.4-5-12.8-5.5c.1 5.8 1.9 12 4.7 16c-6-.7-11.2.3-15.7 2c9.6 13 20.4 14.8 34 10.8a26 26 0 0 0 2.7 12.5a30.6 30.6 0 0 0-15.8-.3c6.8 12.6 17.9 18.5 31 15.7a22.6 22.6 0 0 0-2.3 13a30.7 30.7 0 0 0-14.6-6.1c3.9 16 12.3 22 23.4 26.6c-3.6 1.5-7.8 10.3-8.1 11.4a30.6 30.6 0 0 0-10.7-11.7c-4.2 13-1.5 25.3 9 32.6c-1.1-1.1-8 4.7-9.3 6.4a30.6 30.6 0 0 0-5.4-14.8c-8.7 10.2-11 22.4-4.5 33a26.2 26.2 0 0 0-9 4.4a30.6 30.6 0 0 0-2.6-15.6c-9.5 7.4-13.7 22.4-10.7 31.4c-3.8 0-7.5.7-10.9 2.2a30.7 30.7 0 0 0 1.2-15.8c-13.5 6.5-19.5 17.4-17.2 30.9l-9.7 4l4.7 2.2l6.4-3.6c13.6 6.5 26.6 6.5 36.4-2c-4-2.8-8.8-5-13-5.6a25.9 25.9 0 0 0 6.1-7.5c12.6 6.3 26.3 1.3 34-10.2a31.4 31.4 0 0 0-13.9-2.5a25.9 25.9 0 0 0 4.1-8.3c13.5 1.5 26-4.3 30.3-16.6c-4.8-1-10.1-1-14.1.1c.9-1.2 2.5-9.7 2.6-10.8c14.2-4.4 22.2-12.6 22.6-27.2c-4.8.9-9.7 3-13 5.5a71.3 71.3 0 0 0-2-11.8a30.1 30.1 0 0 0 9.8-36a31 31 0 0 0-9.5 10.4c.4-1-4.3-8.6-6.8-9.9c7.7-12 5.3-26.8-4-36c-2.6 4-4.5 9-4.9 13.2c-1.4-3-7.7-5.8-10-6.7c3.4-14.4 2.7-24.6-9.5-33.6m-126.4 0c2 4.4 3.1 9.6 3 13.8c2.6-1.5 10.5-5 12.8-5.5c-.1 5.8-1.9 12-4.7 16c6-.7 11.2.3 15.7 2c-9.6 13-20.4 14.8-34 10.8a26 26 0 0 1-2.7 12.5a30.6 30.6 0 0 1 15.8-.3c-6.8 12.6-17.9 18.5-31 15.7a22.6 22.6 0 0 1 2.3 13a30.7 30.7 0 0 1 14.6-6.1c-3.9 16-12.3 22-23.4 26.6c3.6 1.5 7.8 10.3 8.1 11.4a30.6 30.6 0 0 1 10.7-11.7c4.2 13 1.5 25.3-9 32.6c1.1-1.1 8 4.7 9.3 6.4a30.6 30.6 0 0 1 5.4-14.8c8.7 10.2 11 22.4 4.5 33a26.2 26.2 0 0 1 9 4.4a30.6 30.6 0 0 1 2.6-15.6c9.5 7.4 13.7 22.4 10.7 31.4c3.8 0 7.5.7 10.9 2.2a30.6 30.6 0 0 1-1.2-15.8c13.5 6.5 19.5 17.4 17.2 30.9l9.7 4l-4.7 2.2l-6.4-3.6c-13.6 6.5-26.6 6.5-36.4-2c4-2.8 8.8-5 13-5.6a25.9 25.9 0 0 1-6.1-7.5c-12.6 6.3-26.3 1.3-34-10.2c4.5-2 9.7-2.9 13.9-2.5a25.9 25.9 0 0 1-4.1-8.3c-13.5 1.5-26-4.3-30.3-16.6c4.8-1 10.1-1 14.1.1c-.9-1.2-2.5-9.7-2.6-10.8c-14.2-4.4-22.2-12.6-22.6-27.2c4.8.9 9.7 3 13 5.5c.2-2.7 1.4-10.2 2-11.8a30.1 30.1 0 0 1-9.8-36a31 31 0 0 1 9.5 10.4c-.4-1 4.3-8.6 6.8-9.9a28.7 28.7 0 0 1 4-36c2.6 4 4.5 9 4.9 13.2c1.4-3 7.8-5.8 10-6.7c-3.4-14.4-2.7-24.6 9.5-33.6"></svg:path></svg:g>`,
})
export class CircleFlagsPkSdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPlIcon],svg[circle-flags-pl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPl0)"><svg:path fill="#d80027" d="m0 256l256.4-44.3L512 256v256H0z"></svg:path><svg:path fill="#eee" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsPlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPmIcon],svg[circle-flags-pm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPm0)"><svg:path fill="#338af3" d="M160 0h352v512H160l-32-256z"></svg:path><svg:path fill="#eee" d="m0 160l80-32l80 32v192l-80 32l-80-32z"></svg:path><svg:rect width="160" height="160" fill="#d80027" ry="0"></svg:rect><svg:path fill="#6da544" d="M160 21V0h-20L0 139v21h20z"></svg:path><svg:path fill="#6da544" d="M0 21V0h20l140 139v21h-20z"></svg:path><svg:path fill="#eee" d="M0 64h160v32H0z"></svg:path><svg:path fill="#eee" d="M64 0h32v160H64z"></svg:path><svg:path fill="#d80027" d="M0 512h160V352H0z"></svg:path><svg:path fill="#ffda44" d="M340 146v158h-40c-24 0-24-32-24-32h-96v32h20l147 32l145-32v-24h-80s0 24-24 24h-32V146z"></svg:path><svg:path fill="#ffda44" d="M356 138v32c-31-11-61 8-80-32c33 23 51-10 80 0m-72 46s-24 24-16 72h-72s32-56 88-72m16 104h95c-31-48 0-104 0-104h-95s-40 56 0 104m101-24a96 96 0 0 1 4-64h63s-16 32-1 64zm-101 40h192s-8 0-16 24s-16 48-56 48H276c-39 0-52-50-76-72z"></svg:path><svg:rect width="96" height="32" x="32" y="384" fill="#ffda44" rx="16" ry="16"></svg:rect><svg:rect width="96" height="32" x="32" y="448" fill="#ffda44" rx="16" ry="16"></svg:rect></svg:g>`,
})
export class CircleFlagsPmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPmsIcon],svg[circle-flags-pms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsPms0" width="576" height="576" x="-32" y="-32" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsPms0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" fill-rule="evenodd" d="M512 204.8H310.9V0H201.1v204.8H0v102.4h201.1V512h109.8V307.2H512z"></svg:path><svg:path fill="#0052b4" d="M256 544c-77 0-149.3-30-203.6-84.4C-2 405.3-32 333-32 256S-2 106.7 52.4 52.4C106.7-2 179-32 256-32S405.3-2 459.6 52.4C514 106.7 544 179 544 256s-30 149.3-84.4 203.6A286.1 286.1 0 0 1 256 544m0-512c-59.8 0-116 23.3-158.4 65.6C55.3 140 32 196.2 32 256s23.3 116 65.6 158.4C140 456.7 196.2 480 256 480s116-23.3 158.4-65.6C456.7 372 480 315.8 480 256s-23.3-116-65.6-158.4A222.5 222.5 0 0 0 256 32"></svg:path><svg:path fill="#0052b4" d="m432 176l-32-64H112l-32 64h64l-20-40h120l-20 40h64l-20-40h120l-20 40z"></svg:path></svg:g>`,
})
export class CircleFlagsPmsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPnIcon],svg[circle-flags-pn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPn0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#acabb1" d="m401 156l-34 11l-33-11l-11-28l11-28h67l-11 28Z"></svg:path><svg:path fill="#338af3" d="M289 156v122c0 60 78 78 78 78s78-18 78-78V156z"></svg:path><svg:path fill="#6da544" d="M296 307c20 37 71 49 71 49s52-12 71-49l-71-118z"></svg:path><svg:path fill="#ffda44" d="m445 277l-78-121l-78 121v1a62 62 0 0 0 7 29l71-110l71 110a62 62 0 0 0 7-29z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path></svg:g>`,
})
export class CircleFlagsPnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPrIcon],svg[circle-flags-pr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPr0)"><svg:path fill="#eee" d="m27 63.3l485 39.1v102.4L477.3 259l34.7 48.2v102.4L27.4 446.9z"></svg:path><svg:path fill="#d80027" d="m0 0l51.2 102.4H512V0zm0 512h512V409.6H51.2zm180-204.8h332V204.8H180z"></svg:path><svg:path fill="#0052b4" d="M0 0v512l256-256z"></svg:path><svg:path fill="#eee" d="m103.6 189.2l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6H87z"></svg:path></svg:g>`,
})
export class CircleFlagsPrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPsIcon],svg[circle-flags-ps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPs0)"><svg:path fill="#eee" d="M41.3 121.9L512 167v178L43.8 391.3z"></svg:path><svg:path fill="#333" d="M0 0h512v167H111z"></svg:path><svg:path fill="#6da544" d="M111 345h401v167H0z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsPsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPtIcon],svg[circle-flags-pt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPt0)"><svg:path fill="#6da544" d="M0 512h167l37.9-260.3L167 0H0z"></svg:path><svg:path fill="#d80027" d="M512 0H167v512h345z"></svg:path><svg:circle cx="167" cy="256" r="89" fill="#ffda44"></svg:circle><svg:path fill="#d80027" d="M116.9 211.5V267a50 50 0 1 0 100.1 0v-55.6H117z"></svg:path><svg:path fill="#eee" d="M167 283.8c-9.2 0-16.7-7.5-16.7-16.7V245h33.4v22c0 9.2-7.5 16.7-16.7 16.7z"></svg:path></svg:g>`,
})
export class CircleFlagsPtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPt20Icon],svg[circle-flags-pt-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPt200"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPt200)"><svg:path fill="#0052b4" d="M0 512h189.2l41.4-256L189.2 0H0z"></svg:path><svg:path fill="#eee" d="M189.2 0H512v512H189.2z"></svg:path><svg:path fill="#d80027" d="M91.8 89v41.8a37.6 37.6 0 1 0 75.2 0V89z"></svg:path><svg:path fill="#eee" d="M129.4 146c-8.4 0-15.3-6.8-15.3-15.2v-19.5h30.6v19.5c0 8.4-6.9 15.3-15.3 15.3z"></svg:path><svg:path fill="#ffda44" d="M278.3 267.1h-66.8a22.3 22.3 0 0 0-44.5 0h-66.8a23 23 0 0 0 23 22.3h-.8c0 12.3 10 22.3 22.3 22.3c0 12.2 10 22.2 22.3 22.2h44.5c12.3 0 22.2-10 22.2-22.2c12.3 0 22.3-10 22.3-22.3h-.7a23 23 0 0 0 23-22.3m9.1-35.6l-5.8 9.4l7 8.4l-10.6-2.7l-5.9 9.4l-.8-11l-10.7-2.7l10.3-4.1l-.8-11l7 8.4zm-34-28.6l-2.4 10.8l9.6 5.5l-11 1.2l-2.3 10.7l-4.5-10l-11 1.1l8.2-7.4l-4.4-10l9.5 5.5zm-42-15.2l1.6 10.9l10.9 2l-10 4.7l1.6 11l-7.7-8l-9.9 4.9l5.2-9.8l-7.7-8l10.9 2zm-44.4 0l5.1 9.7l10.9-2l-7.7 8l5.2 9.8l-9.9-4.9l-7.7 8l1.6-11l-10-4.8l11-2zm-42 15.2l8.2 7.4l9.6-5.5l-4.5 10l8.2 7.4l-11-1.1l-4.5 10l-2.3-10.7l-11-1.2l9.6-5.5zm-34 28.6l10.2 4.1l7-8.4l-.7 11l10.2 4.1L107 245l-.8 11l-5.8-9.4l-10.7 2.7l7-8.4z"></svg:path></svg:g>`,
})
export class CircleFlagsPt20Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPt30Icon],svg[circle-flags-pt-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPt300"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPt300)"><svg:path fill="#0052b4" d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"></svg:path><svg:path fill="#ffda44" d="M144.7 0h222.6v512H144.7z"></svg:path><svg:path fill="#d80027" d="m328.4 278.3l16.7 22.2v-89l-16.7 22.2h-50v-50l22.2-16.7h-89l22.2 16.7v50h-50l-16.7-22.2v89l16.7-22.2h50v50L211.6 345h89l-22.2-16.7v-50z"></svg:path><svg:path fill="#eee" d="M323 244.9h-56v-55.7h-22V245h-55.7v22H245v55.7h22V267h55.7z"></svg:path></svg:g>`,
})
export class CircleFlagsPt30Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPtBrIcon],svg[circle-flags-pt-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPtBr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPtBr0)"><svg:path fill="#6da544" d="M512 0v512H0l224-288Z"></svg:path><svg:path fill="#ffda44" d="m346 166l-122 58l-58 122l90 66l212-156Z"></svg:path><svg:path fill="#0052b4" d="m319 193l-95 31l-31 95a89 89 0 0 0 136-12l14-34a89 89 0 0 0-24-80"></svg:path><svg:path fill="#eee" d="M255 257c29 9 55 26 74 50c7-10 12-22 14-34c-17-18-38-32-62-42l-57-7Z"></svg:path><svg:path fill="#fff" d="M0 512L512 0H0Z"></svg:path><svg:path fill="#496e2d" d="M0 0v512l167-167l32-172L167 0Z"></svg:path><svg:path fill="#d80027" d="M167 0v167l89 89L512 0Z"></svg:path><svg:path fill="#ffda44" d="M167 167a89 89 0 0 0-89 89a89 89 0 0 0 89 89l89-89a89 89 0 0 0-89-89"></svg:path><svg:path fill="#d80027" d="M117 212v55a50 50 0 1 0 100 0v-56H117Z"></svg:path><svg:path fill="#eee" d="M167 284c-9 0-17-8-17-17v-22h34v22c0 9-8 17-17 17"></svg:path></svg:g>`,
})
export class CircleFlagsPtBrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPwIcon],svg[circle-flags-pw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPw0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:circle cx="200.3" cy="256" r="111.3" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsPwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPyIcon],svg[circle-flags-py-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPy0)"><svg:path fill="#eee" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#0052b4" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#6da544" d="m319 182l-23.6 23.5a55.5 55.5 0 0 1-39.4 95a55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0"></svg:path><svg:path fill="#ffda44" d="m256 211.5l8.3 25.5H291l-21.7 15.8l8.3 25.5l-21.7-15.8l-21.7 15.8l8.3-25.5l-21.7-15.8h26.8z"></svg:path></svg:g>`,
})
export class CircleFlagsPyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsQaIcon],svg[circle-flags-qa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsQa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsQa0)"><svg:path fill="#eee" d="M0 0h173l61 255.8L173.4 512H0z"></svg:path><svg:path fill="#751a46" d="m173 0l-72.7 30.8L176 63l-75.7 32.2l75.7 32.1l-75.7 32.2l75.7 32.1l-75.7 32.1l75.7 32.2l-75.7 32.2l75.7 32.1l-75.7 32.2l75.7 32.1l-75.7 32.2l75.7 32.1l-75.7 32.2l73.1 31H512V0z"></svg:path></svg:g>`,
})
export class CircleFlagsQaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsQuIcon],svg[circle-flags-qu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsQu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsQu0)"><svg:path fill="#4a1f63" d="M0 512h512v-70l-256-32L0 442Z"></svg:path><svg:path fill="#0052b4" d="M0 442h512v-70l-256-32L0 372Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v70l-256 32L0 70Z"></svg:path><svg:path fill="#ffda44" d="M0 70h512v70l-256 32L0 140Z"></svg:path><svg:path fill="#eee" d="M0 140h512v70l-32 46l32 46v70H0v-70l32-46l-32-46Z"></svg:path><svg:path fill="#496e2d" d="M0 210h512v92H0z"></svg:path></svg:g>`,
})
export class CircleFlagsQuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsQuechuaIcon],svg[circle-flags-quechua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsQuechua0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsQuechua0)"><svg:path fill="#4a1f63" d="M0 512h512v-70l-256-32L0 442Z"></svg:path><svg:path fill="#0052b4" d="M0 442h512v-70l-256-32L0 372Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v70l-256 32L0 70Z"></svg:path><svg:path fill="#ffda44" d="M0 70h512v70l-256 32L0 140Z"></svg:path><svg:path fill="#eee" d="M0 140h512v70l-32 46l32 46v70H0v-70l32-46l-32-46Z"></svg:path><svg:path fill="#496e2d" d="M0 210h512v92H0z"></svg:path></svg:g>`,
})
export class CircleFlagsQuechuaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsReIcon],svg[circle-flags-re-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRe0)"><svg:path fill="#0052b4" d="M64 0L0 64v160l32 32l-32 32v224l256-32l256 32V288l-32-32l32-32V64L448 0H288l-32 32l-32-32z"></svg:path><svg:path fill="#d80027" d="M256 256L0 512h512z"></svg:path><svg:path fill="#ffda44" d="M0 224v64l512-64v64z"></svg:path><svg:path fill="#ffda44" d="M256 256L0 64V0h64zm0 0L448 0h64v64zm0 0L224 0h64z"></svg:path></svg:g>`,
})
export class CircleFlagsReIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRmIcon],svg[circle-flags-rm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRm0)"><svg:path fill="#eee" d="M128 0h128l256 256v256H0V256Z"></svg:path><svg:path fill="#338af3" d="M256 0h64l32 32l32-32h64l64 64v64l-32 32l32 32v64h-64l-32-32l-32 32h-64l-64-64v-64l32-32l-32-32Z"></svg:path><svg:path fill="#333" d="M0 0h128v256H0z"></svg:path><svg:path fill="#ffda44" d="M320 0v64h-64v64h128V0zm64 128v128h64v-64h64v-64zm-128 64h64v64h-64zM448 0h64v64h-64z"></svg:path><svg:path fill="#333" d="M291 291c-32 0-68 8-82 19c-5 4-7 10-7 16c0 10 7 18 17 20l-25 7a99 99 0 0 0-77-44a9 9 0 0 0-3 18c33 12 45 13 57 37c-21-7-35 24-48 37c-3 1-4 4-4 7c0 5 4 9 9 9l6-2c13-10 26-33 44-28c57 16 66 13 105 7c-31 9-30 21-8 36c-11 17-25 17-41 22c-4 1-7 5-7 9c0 5 4 9 9 9l5-1c19-9 40-18 60-33c-1-8-13-17 8-24c9 8 14 19 41 16c4 7 10 12 7 28l-12 3c-5 0-8 4-8 9s4 9 9 9c3 0 6-2 7-4l18-14c2-15-2-29-8-42c-14-2-17-15-23-29c12 6 22 12 32-3c-14-5-28-13-39-4c-39-24-55-19-80-24c9-8 11-20 8-37c26-7 69-23 96 26c3-41-30-54-66-55"></svg:path></svg:g>`,
})
export class CircleFlagsRmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRnIcon],svg[circle-flags-rn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRn0)"><svg:path fill="#eee" d="M0 0h47.2l207.5 30L464.8 0H512v47.2L477.4 256L512 464.8V512h-47.2l-209.1-35.8L47.2 512H0v-47.2l32.8-202.7L0 47.2z"></svg:path><svg:path fill="#d80027" d="M47.2 0L256 208.8L464.8 0zM256 303.2L47.2 512h417.6z"></svg:path><svg:path fill="#6da544" d="M0 47.2v417.6L208.8 256zm512 0L303.2 256L512 464.8z"></svg:path><svg:circle cx="256" cy="256" r="111.3" fill="#eee"></svg:circle><svg:path fill="#d80027" d="m256 178l9.6 16.8H285l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.6-16.7H227l9.6-16.7l-9.6-16.7h19.3zm-49 78l9.6 16.7H236l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.6-16.7H178l9.6-16.7l-9.6-16.7h19.3zm98 0l9.6 16.7H334l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.6-16.7H276l9.6-16.7l-9.6-16.7h19.3z"></svg:path></svg:g>`,
})
export class CircleFlagsRnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRoIcon],svg[circle-flags-ro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRo0)"><svg:path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"></svg:path><svg:path fill="#0052b4" d="M0 0h167v512H0z"></svg:path><svg:path fill="#d80027" d="M345 0h167v512H345z"></svg:path></svg:g>`,
})
export class CircleFlagsRoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRsIcon],svg[circle-flags-rs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRs0)"><svg:path fill="#0052b4" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0z"></svg:path><svg:path fill="#eee" d="M0 345h512v167H0z"></svg:path><svg:path fill="#d80027" d="M66.2 144.7v127.7c0 72.6 94.9 95 94.9 95s94.9-22.4 94.9-95V144.7z"></svg:path><svg:path fill="#ffda44" d="M105.4 167h111.4v-44.6l-22.3 11.2l-33.4-33.4l-33.4 33.4l-22.3-11.2zm128.3 123.2l-72.3-72.4L89 290.2l23.7 23.6l48.7-48.7l48.7 48.7z"></svg:path><svg:path fill="#eee" d="M233.7 222.6H200a22.1 22.1 0 0 0 3-11.1a22.3 22.3 0 0 0-42-10.5a22.3 22.3 0 0 0-41.9 10.5a22.1 22.1 0 0 0 3 11.1H89a23 23 0 0 0 23 22.3h-.7c0 12.3 10 22.2 22.3 22.2c0 11 7.8 20 18.1 21.9l-17.5 39.6a72.1 72.1 0 0 0 27.2 5.3a72.1 72.1 0 0 0 27.2-5.3L171.1 289c10.3-2 18.1-11 18.1-21.9c12.3 0 22.3-10 22.3-22.2h-.8a23 23 0 0 0 23-22.3"></svg:path></svg:g>`,
})
export class CircleFlagsRsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuIcon],svg[circle-flags-ru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRu0)"><svg:path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"></svg:path><svg:path fill="#eee" d="M512 0v170H0V0Z"></svg:path><svg:path fill="#d80027" d="M512 342v170H0V342Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuBaIcon],svg[circle-flags-ru-ba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuBa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuBa0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#338af3" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#496e2d" d="M0 352h512v160H0Z"></svg:path><svg:circle cx="256" cy="256" r="64" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsRuBaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuCeIcon],svg[circle-flags-ru-ce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuCe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuCe0)"><svg:path fill="#d80027" d="m96 357l208-32l208 32v155H96l-32-78Z"></svg:path><svg:path fill="#496e2d" d="M96 0h416v293l-208 32l-208-32l-32-147Z"></svg:path><svg:path fill="#eee" d="M0 0v512h96V357h416v-64H96V0Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuCeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuCuIcon],svg[circle-flags-ru-cu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuCu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuCu0)"><svg:path fill="#ffda44" d="M0 0h512v385l-256 64L0 385z"></svg:path><svg:path fill="#a2001d" d="m375 97l23-24v24h23l-23 23l23 23h-23v23l-23-23l-24 23v-23h-22l22-23l-22-23h22V73zm-238 0l23-24v24h24l-24 23l24 23h-24v23l-23-23l-23 23v-23H91l23-23l-23-23h23V73zm119-50l23-23v23h23l-23 23l23 24h-23v23l-23-23l-23 23V94h-23l23-24l-23-23h23V24Z" class="fil1"></svg:path><svg:path fill="#a2001d" d="m218 103l-35 35v28h-28l-35 35l29 29h20v38l17 17l32-32l11 11v121H0v127h512V385H282V264l11-11l32 32l17-17v-38h21l29-29l-35-35l-29 1v-29l-34-35l-29 29v23l26 26l-35 35l-35-35l26-26v-23z" class="fil1"></svg:path></svg:g>`,
})
export class CircleFlagsRuCuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuDaIcon],svg[circle-flags-ru-da-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuDa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuDa0)"><svg:path fill="#0052b4" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#6da544" d="M0 0h512v167H0Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuDaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuDprIcon],svg[circle-flags-ru-dpr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuDpr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuDpr0)"><svg:path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"></svg:path><svg:path fill="#333" d="M512 0v170H0V0Z"></svg:path><svg:path fill="#d80027" d="M512 342v170H0V342Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuDprIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuKoIcon],svg[circle-flags-ru-ko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuKo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuKo0)"><svg:path fill="#6da544" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#eee" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v167H0Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuKoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuLprIcon],svg[circle-flags-ru-lpr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuLpr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuLpr0)"><svg:path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"></svg:path><svg:path fill="#338af3" d="M512 0v170H0V0Z"></svg:path><svg:path fill="#d80027" d="M512 342v170H0V342Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuLprIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuTaIcon],svg[circle-flags-ru-ta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuTa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuTa0)"><svg:path fill="#eee" d="m0 224l256-32l256 32v64l-256 32L0 288Z"></svg:path><svg:path fill="#496e2d" d="M0 0h512v224H0z"></svg:path><svg:path fill="#d80027" d="M0 288h512v224H0z"></svg:path></svg:g>`,
})
export class CircleFlagsRuTaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuUdIcon],svg[circle-flags-ru-ud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuUd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuUd0)"><svg:path fill="#eee" d="M160 0h192l32 256l-32 256H160l-32-256Z"></svg:path><svg:path fill="#333" d="M0 0h160v512H0Z"></svg:path><svg:path fill="#d80027" d="M352 0h160v512H352ZM229 176l107 107H176l107-107v160L176 229h160L229 336Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuUdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRwIcon],svg[circle-flags-rw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRw0)"><svg:path fill="#496e2d" d="m0 378.5l254.1-22.1L512 378.5V512H0z"></svg:path><svg:path fill="#ffda44" d="m0 256.1l255-30.3l257 30.3v122.4H0z"></svg:path><svg:path fill="#338af3" d="M0 0h512v256H0z"></svg:path><svg:path fill="#ffda44" d="m289.4 150l31.3 14.6L304 195l34-6.5l4.3 34.3l23.6-25.2l23.7 25.2l4.3-34.3l34 6.5l-16.7-30.3l31.2-14.7l-31.2-14.7l16.6-30.3l-34 6.5l-4.2-34.3l-23.7 25.3l-23.6-25.3l-4.3 34.3l-34-6.5l16.7 30.3z"></svg:path></svg:g>`,
})
export class CircleFlagsRwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSaIcon],svg[circle-flags-sa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSa0)"><svg:path fill="#496e2d" d="M0 0h512v512H0z"></svg:path><svg:g fill="#eee"><svg:path d="M144.7 306c0 18.5 15 33.5 33.4 33.5h100.2a27.8 27.8 0 0 0 27.8 27.8h33.4a27.8 27.8 0 0 0 27.8-27.8V306zm225.4-161.3v78c0 12.2-10 22.2-22.3 22.2v33.4c30.7 0 55.7-25 55.7-55.7v-77.9H370zm-239.3 78c0 12.2-10 22.2-22.3 22.2v33.4c30.7 0 55.7-25 55.7-55.7v-77.9h-33.4z"></svg:path><svg:path d="M320 144.7h33.4v78H320zm-50 44.5a5.6 5.6 0 0 1-11.2 0v-44.5h-33.4v44.5a5.6 5.6 0 0 1-11.1 0v-44.5h-33.4v44.5a39 39 0 0 0 39 39a38.7 38.7 0 0 0 22.2-7a38.7 38.7 0 0 0 22.2 7c1.7 0 3.4-.1 5-.3a22.3 22.3 0 0 1-21.6 17v33.4c30.6 0 55.6-25 55.6-55.7v-77.9H270z"></svg:path><svg:path d="M180.9 244.9h50v33.4h-50z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsSaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSamiIcon],svg[circle-flags-sami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSami0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSami0)"><svg:path fill="#ffda44" d="M199 0h32l32 256l-32 256h-32l-32-256Z"></svg:path><svg:path fill="#496e2d" d="M167 0h32v512h-32l-32-256Z"></svg:path><svg:path fill="#0052b4" d="M231 0h281v512H231Z"></svg:path><svg:path fill="#d80027" d="M0 0h167v512H0Zm199 132l-32 16l32 16a92 92 0 1 1 0 184l-32 16l32 16a124 124 0 0 0 0-248"></svg:path><svg:path fill="#0052b4" d="M199 132a124 124 0 0 0 0 248v-32a92 92 0 1 1 0-184z"></svg:path></svg:g>`,
})
export class CircleFlagsSamiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSbIcon],svg[circle-flags-sb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSb0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSb0)"><svg:path fill="#496e2d" d="M512 512V23.6L256 255.9L23.6 512z"></svg:path><svg:path fill="#0052b4" d="M0 0h488.4L256 256L0 488.4z"></svg:path><svg:path fill="#ffda44" d="M488.4 0L0 488.4V512h23.6L512 23.6V0z"></svg:path><svg:path fill="#eee" d="m107.8 89l5.5 17h18l-14.6 10.5l5.5 17L108 123l-14.5 10.6l5.5-17L84.4 106h17.8zm91.3 0l5.5 17h18L208 116.4l5.6 17L199 123l-14.5 10.6l5.6-17l-14.5-10.6h18zm-91.3 89l5.5 17h18l-14.6 10.5l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17L84.4 195h17.8zm91.3 0l5.5 17h18L208 205.5l5.6 17l-14.5-10.5l-14.5 10.5l5.6-17l-14.5-10.5h18zm-45.7-44.5l5.6 17h17.8L162.4 161l5.5 17l-14.5-10.5L139 178l5.5-17l-14.5-10.5h18z"></svg:path></svg:g>`,
})
export class CircleFlagsSbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsScIcon],svg[circle-flags-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSc0)"><svg:path fill="#0052b4" d="M0 0v332l150.9-138.5L225.2 0z"></svg:path><svg:path fill="#ffda44" d="M273.1 253.3L512 0H225.2L0 332v80.2z"></svg:path><svg:path fill="#d80027" d="M512 0L0 412.2v50.4L277.9 390L512 256z"></svg:path><svg:path fill="#eee" d="M0 462.6L512 256v133.5l-223.9 78.8L0 488.4z"></svg:path><svg:path fill="#6da544" d="m512 389.5l-512 99V512h512z"></svg:path></svg:g>`,
})
export class CircleFlagsScIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSdIcon],svg[circle-flags-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSd0)"><svg:path fill="#eee" d="M43.6 109.4L512 144.7v222.6L43.8 397.2z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H111z"></svg:path><svg:path fill="#333" d="M111 367.3h401V512H0z"></svg:path><svg:path fill="#496e2d" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsSdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSeIcon],svg[circle-flags-se-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSe0)"><svg:path fill="#0052b4" d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7l22.6 35.1V512H200.3l-32-19.8l-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"></svg:path><svg:path fill="#ffda44" d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsSeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSgIcon],svg[circle-flags-sg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSg0)"><svg:path fill="#eee" d="m0 256l257.7-51L512 256v256H0z"></svg:path><svg:path fill="#d80027" d="M0 0h512v256H0z"></svg:path><svg:g fill="#eee"><svg:path d="M155.8 133.6A78 78 0 0 1 217 57.5a78.2 78.2 0 0 0-16.7-1.8a78 78 0 1 0 16.7 154a78 78 0 0 1-61.2-76.1M256 61.2l5.5 17h18l-14.6 10.5l5.6 17L256 95.2l-14.5 10.5l5.6-17l-14.5-10.5h17.9z"></svg:path><svg:path d="m212.6 94.6l5.6 17H236l-14.4 10.5l5.5 17l-14.5-10.5l-14.4 10.5l5.5-17l-14.5-10.5h17.9zm86.8 0l5.5 17h17.9l-14.5 10.5l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17l-14.4-10.5h17.8zm-16.7 50.1l5.5 17h17.9l-14.5 10.5l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17l-14.4-10.5h17.9zm-53.4 0l5.5 17h18l-14.5 10.5l5.5 17l-14.5-10.5l-14.4 10.5l5.5-17l-14.5-10.5h17.9z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsSgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsShIcon],svg[circle-flags-sh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSh0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M288 128h160v80l-80 32l-80-32z"></svg:path><svg:path fill="#333" d="M368 140a14 14 0 0 0-14 14h-42a14 14 0 0 0 14 14a14 14 0 0 0 14 14a14 14 0 0 0 14 14h28a14 14 0 0 0 14-14a14 14 0 0 0 14-14a14 14 0 0 0 14-14h-42a14 14 0 0 0-14-14"></svg:path><svg:path fill="#338af3" d="M288 208v48c0 61 80 80 80 80s80-19 80-80v-48z"></svg:path><svg:path fill="#eee" d="M372 221c-9 0-15 8-25 1c5 12 14 9 22 10v6h-14s-14 20 0 38h14v5h-14c-9 0-9-11-9-11h-34v11h7c9 8 13 26 27 26h52c15 0 17-9 20-17c3-7 5-8 6-9v-8h-29s0 8-8 8h-12v-6h14c-11-17 0-37 0-37h-14v-16l-4-1zm-23 17c-20 6-31 26-31 26h25c-2-17 6-26 6-26m44 6a34 34 0 0 0-2 23h24c-5-12 0-23 0-23z"></svg:path></svg:g>`,
})
export class CircleFlagsShIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsShAcIcon],svg[circle-flags-sh-ac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsShAc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsShAc0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#6da544" d="m320 144l48-80l48 80z"></svg:path><svg:circle cx="368" cy="144" r="48" fill="#acabb1"></svg:circle><svg:path fill="#338af3" d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z"></svg:path><svg:rect width="32" height="128" x="288" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:rect width="32" height="128" x="416" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:path fill="#6da544" d="m368 160l-48 67c2 11 9 19 16 26l32-45l32 45c8-7 14-15 16-26z"></svg:path></svg:g>`,
})
export class CircleFlagsShAcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsShHlIcon],svg[circle-flags-sh-hl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsShHl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsShHl0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M288 128h160v80l-80 32l-80-32z"></svg:path><svg:path fill="#333" d="M368 140a14 14 0 0 0-14 14h-42a14 14 0 0 0 14 14a14 14 0 0 0 14 14a14 14 0 0 0 14 14h28a14 14 0 0 0 14-14a14 14 0 0 0 14-14a14 14 0 0 0 14-14h-42a14 14 0 0 0-14-14"></svg:path><svg:path fill="#338af3" d="M288 208v48c0 61 80 80 80 80s80-19 80-80v-48z"></svg:path><svg:path fill="#eee" d="M372 221c-9 0-15 8-25 1c5 12 14 9 22 10v6h-14s-14 20 0 38h14v5h-14c-9 0-9-11-9-11h-34v11h7c9 8 13 26 27 26h52c15 0 17-9 20-17c3-7 5-8 6-9v-8h-29s0 8-8 8h-12v-6h14c-11-17 0-37 0-37h-14v-16l-4-1zm-23 17c-20 6-31 26-31 26h25c-2-17 6-26 6-26m44 6a34 34 0 0 0-2 23h24c-5-12 0-23 0-23z"></svg:path></svg:g>`,
})
export class CircleFlagsShHlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsShTaIcon],svg[circle-flags-sh-ta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsShTa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsShTa0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8zm32-144l48-80l48 80z"></svg:path><svg:circle cx="368" cy="144" r="48" fill="#338af3"></svg:circle><svg:path fill="#338af3" d="M320 144v48l48 32l48-32v-48z"></svg:path><svg:rect width="32" height="128" x="288" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:rect width="32" height="128" x="416" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:path fill="#eee" d="M320 192v29c0 36 48 48 48 48s48-12 48-48v-29zm48-48l-16 48h32z"></svg:path><svg:path fill="#338af3" d="m352 192l16 48l16-48z"></svg:path></svg:g>`,
})
export class CircleFlagsShTaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSiIcon],svg[circle-flags-si-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSi0)"><svg:path fill="#0052b4" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#eee" d="M0 0h512v167H0z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0z"></svg:path><svg:path fill="#0052b4" d="M222.7 167v-66.8H89V167l67 82.6z"></svg:path><svg:path fill="#eee" d="M89 167v22.2c0 51.1 66.8 66.8 66.8 66.8s66.8-15.7 66.8-66.8V167l-22.3 22.2l-44.5-33.4l-44.5 33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsSiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSjIcon],svg[circle-flags-sj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSj0)"><svg:path fill="#d80027" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7l-65.5 50.7H0V322.8l51.4-68.5l-51.4-65z"></svg:path><svg:path fill="#eee" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3l36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7l24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"></svg:path><svg:path fill="#0052b4" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsSjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSkIcon],svg[circle-flags-sk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSk0)"><svg:path fill="#0052b4" d="m0 160l256-32l256 32v192l-256 32L0 352z"></svg:path><svg:path fill="#eee" d="M0 0h512v160H0z"></svg:path><svg:path fill="#d80027" d="M0 352h512v160H0z"></svg:path><svg:path fill="#eee" d="M64 63v217c0 104 144 137 144 137s144-33 144-137V63z"></svg:path><svg:path fill="#d80027" d="M96 95v185a83 78 0 0 0 9 34h206a83 77 0 0 0 9-34V95z"></svg:path><svg:path fill="#eee" d="M288 224h-64v-32h32v-32h-32v-32h-32v32h-32v32h32v32h-64v32h64v32h32v-32h64z"></svg:path><svg:path fill="#0052b4" d="M152 359a247 231 0 0 0 56 24c12-3 34-11 56-24a123 115 0 0 0 47-45a60 56 0 0 0-34-10l-14 2a60 56 0 0 0-110 0a60 56 0 0 0-14-2c-12 0-24 4-34 10a123 115 0 0 0 47 45"></svg:path></svg:g>`,
})
export class CircleFlagsSkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSlIcon],svg[circle-flags-sl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSl0)"><svg:path fill="#eee" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#6da544" d="M0 0h512v167H0z"></svg:path><svg:path fill="#338af3" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsSlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSmIcon],svg[circle-flags-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSm0)"><svg:path fill="#338af3" d="m0 256l256-52.3L512 256v256H0z"></svg:path><svg:path fill="#eee" d="M0 0h512v256H0z"></svg:path><svg:path fill="#6da544" d="M357.6 176.6L256 278.3L154.4 176.6a121.7 121.7 0 0 0-20.8 68.3v33.4c0 53.6 34.6 99.2 82.7 115.8a37 37 0 0 0 4 40l36.4-29.2l36.4 29.2a37 37 0 0 0 3.9-40.5a122.6 122.6 0 0 0 81.4-115.3v-33.4c0-25.3-7.6-48.7-20.8-68.3"></svg:path><svg:path fill="#ffda44" d="M256 367.3c-49.1 0-89-40-89-89v-33.4a89.1 89.1 0 0 1 178 0v33.4c0 49-39.9 89-89 89"></svg:path><svg:path fill="#338af3" d="M311.7 278.3v-33.4a55.7 55.7 0 0 0-111.4 0v33.4l55.7 11z"></svg:path><svg:path fill="#6da544" d="M200.3 278.3a55.7 55.7 0 0 0 111.4 0z"></svg:path><svg:path fill="#ffda44" d="M322.8 155.8A33.4 33.4 0 0 0 267 131v-19.6h11.2V89H267V78h-22v11h-11.2v22.3H245v19.6a33.4 33.4 0 0 0-44.5 49.8v19.6h111.3v-19.6c6.8-6.1 11-15 11-24.9"></svg:path></svg:g>`,
})
export class CircleFlagsSmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSnIcon],svg[circle-flags-sn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSn0)"><svg:path fill="#ffda44" d="M144.8 0h222.4l32 260l-32 252H144.8l-32.1-256z"></svg:path><svg:path fill="#496e2d" d="M0 0h144.8v512H0z"></svg:path><svg:path fill="#d80027" d="M367.2 0H512v512H367.2z"></svg:path><svg:path fill="#496e2d" d="m256.1 167l22.1 68h71.5L292 277l22 68l-57.8-42l-57.9 42l22.1-68l-57.8-42H234z"></svg:path></svg:g>`,
})
export class CircleFlagsSnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSoIcon],svg[circle-flags-so-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSo0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m256 133.6l27.6 85H373L300.7 271l27.6 85l-72.3-52.5l-72.3 52.6l27.6-85l-72.3-52.6h89.4z"></svg:path></svg:g>`,
})
export class CircleFlagsSoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSomalilandIcon],svg[circle-flags-somaliland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSomaliland0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSomaliland0)"><svg:path fill="#eee" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#496e2d" d="M0 0h512v167H0z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0z"></svg:path><svg:path fill="#333" d="m256 200.3l13.8 42.6h44.7L278.4 269l13.8 42.6l-36.2-26.3l-36.2 26.3l13.8-42.6l-36.1-26.2h44.7z"></svg:path><svg:g fill="#eee"><svg:path d="M332 50v52c0 8.2-6.6 14.9-14.8 14.9V139a37.1 37.1 0 0 0 37.1-37V50h-22.2zm-159.5 52c0 8.2-6.6 14.9-14.8 14.9V139a37.1 37.1 0 0 0 37-37V50h-22.2z"></svg:path><svg:path d="M298.7 50h22.2v52h-22.2zm-33.4 29.8a3.7 3.7 0 0 1-3.7 3.7a3.7 3.7 0 0 1-3.7-3.7V50h-22.3v29.7a3.7 3.7 0 0 1-3.7 3.7a3.7 3.7 0 0 1-3.7-3.7V50h-22.3v29.7a26 26 0 0 0 26 26a25.8 25.8 0 0 0 14.8-4.7a25.8 25.8 0 0 0 14.9 4.6c1 0 2.2 0 3.2-.2a14.9 14.9 0 0 1-14.4 11.4V139a37.1 37.1 0 0 0 37.1-37V50h-22.2v29.7z"></svg:path><svg:path d="M206 116.9h33.3V139h-33.4z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsSomalilandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSouthOssetiaIcon],svg[circle-flags-south-ossetia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSouthOssetia0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSouthOssetia0)"><svg:path fill="#d80027" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#eee" d="M0 0h512v167H0z"></svg:path><svg:path fill="#ffda44" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsSouthOssetiaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSovietUnionIcon],svg[circle-flags-soviet-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSovietUnion0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSovietUnion0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m90 243l25 25l21-21l115 115l18-18l-115-115l29-29l-44-6z"></svg:path><svg:path fill="#ffda44" d="M173 166a93 93 0 0 1 44 40c22 38 16 83-14 100c-22 13-52 7-75-15l-58 53l18 18l42-46c27 24 63 30 90 14c36-21 45-73 20-116a95 95 0 0 0-67-48m-43-6l105-77H105l105 77l-40-124z"></svg:path><svg:path fill="#d80027" d="m153 129l45-34h-56l45 34l-17-54z"></svg:path></svg:g>`,
})
export class CircleFlagsSovietUnionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSqIcon],svg[circle-flags-sq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSq0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSq0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#333" d="M400.7 190H308a33.3 33.3 0 0 0-24.2-56.4a33.3 33.3 0 0 0-27.8 14.9a33.4 33.4 0 1 0-52 41.5h-92.7a45.8 45.8 0 0 0 46 44.5h-1.5c0 24.6 20 44.6 44.5 44.6c0 8 2.1 15.4 5.8 21.8l-37 37l28.4 28.3l40.2-40.2a30.5 30.5 0 0 0 4.9 1.4l-24.3 54.8L256 423l37.7-40.8l-24.3-54.8a30.4 30.4 0 0 0 4.9-1.4l40.2 40.2l28.3-28.3l-37-37a44.2 44.2 0 0 0 5.9-21.8c24.5 0 44.5-20 44.5-44.6h-1.5c24.6 0 46-19.9 46-44.5"></svg:path></svg:g>`,
})
export class CircleFlagsSqIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSrIcon],svg[circle-flags-sr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSr0)"><svg:path fill="#6da544" d="M0 0h512v111.3l-85.3 143.1L512 400.7V512H0V400.7l87-149L0 111.3z"></svg:path><svg:path fill="#eee" d="M0 111.3h512V167l-41 84.7l41 93.3v55.7H0V345l44.2-86.6L0 167z"></svg:path><svg:path fill="#a2001d" d="M0 167h512v178H0z"></svg:path><svg:path fill="#ffda44" d="m256 167l22.1 68h71.5l-57.8 42l22 68l-57.8-42l-57.9 42l22.1-68l-57.8-42h71.5z"></svg:path></svg:g>`,
})
export class CircleFlagsSrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSsIcon],svg[circle-flags-ss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSs0)"><svg:path fill="#eee" d="M74.1 115L512 156.9v31.5l-42.4 70.3l42.4 64.2v31.5L74.1 386.8z"></svg:path><svg:path fill="#333" d="M0 0h512v156.8H50z"></svg:path><svg:path fill="#a2001d" d="M150.6 188.3H512v134.5H150.6z"></svg:path><svg:path fill="#496e2d" d="M50 354.3h462V512H0z"></svg:path><svg:path fill="#0052b4" d="M0 0v512l256-256z"></svg:path><svg:path fill="#ffda44" d="m83.4 192.4l31.2 43.6l51.2-16.3l-31.9 43.2l31.3 43.6l-51-16.9l-31.7 43.2l.3-53.7L32 262.2L83 246z"></svg:path></svg:g>`,
})
export class CircleFlagsSsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsStIcon],svg[circle-flags-st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSt0)"><svg:path fill="#6da544" d="M0 0h512v167l-52.6 83.8L512 345v167H0l72-264.3z"></svg:path><svg:path fill="#ffda44" d="M114.9 166.9H512v178H114.9z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path><svg:path fill="#333" d="m325 211.5l11.1 34H372l-29 21l11.1 34l-29-21l-28.9 21l11-34l-28.8-21H314zm111.4 0l11 34h35.8l-29 21l11.1 34l-29-21l-28.9 21l11.1-34l-29-21h35.8z"></svg:path></svg:g>`,
})
export class CircleFlagsStIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSuIcon],svg[circle-flags-su-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSu0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m90 243l25 25l21-21l115 115l18-18l-115-115l29-29l-44-6z"></svg:path><svg:path fill="#ffda44" d="M173 166a93 93 0 0 1 44 40c22 38 16 83-14 100c-22 13-52 7-75-15l-58 53l18 18l42-46c27 24 63 30 90 14c36-21 45-73 20-116a95 95 0 0 0-67-48m-43-6l105-77H105l105 77l-40-124z"></svg:path><svg:path fill="#d80027" d="m153 129l45-34h-56l45 34l-17-54z"></svg:path></svg:g>`,
})
export class CircleFlagsSuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSvIcon],svg[circle-flags-sv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSv0)"><svg:path fill="#0052b4" d="M0 0h512v144.7l-40.5 112.6l40.5 110V512H0V367.3l42.2-114L0 144.7z"></svg:path><svg:path fill="#eee" d="M0 144.7h512v222.6H0z"></svg:path><svg:path fill="#ffda44" d="m204.6 267.1l51.4-89l51.4 89z"></svg:path><svg:path fill="#6da544" d="M322.8 296.5L256 330l-66.8-33.4V252h133.6z"></svg:path><svg:path fill="#ffda44" d="m319 182l-23.6 23.5a55.5 55.5 0 0 1-39.4 95a55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0"></svg:path></svg:g>`,
})
export class CircleFlagsSvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSwIcon],svg[circle-flags-sw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSw0)"><svg:path fill="#eee" d="m0 144.7l253.4-28.2L512 144.7V178l-36 76.4l36 79.6v33.3L254.7 400L0 367.3V334l39-78l-39-78z"></svg:path><svg:path fill="#333" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#a2001d" d="M0 178h512v156H0z"></svg:path><svg:path fill="#496e2d" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#eee" d="m335.9 118.3l-30.3-14l-49.4 111.9l-49.4-111.9l-30.3 14L237.8 256l-61.3 137.7l30.3 14l49.4-111.9l49.4 111.9l30.3-14L274.6 256z"></svg:path><svg:path fill="#eee" d="M256.2 111.3s-7 5.8-16.7 16l-16 127.6l16 129.8c9.7 10.2 16.7 16 16.7 16s7-5.8 16.7-16l15-130.7l-15-126.7c-9.7-10.2-16.7-16-16.7-16"></svg:path><svg:path fill="#333" d="m311.9 179.2l-10 75.5l10 78.1A158.6 158.6 0 0 0 334 256c0-28.2-9.7-54.5-22.2-76.8zm-111.4 0l8.9 74.3l-9 79.3a158.6 158.6 0 0 1-22.1-76.8c0-28.2 9.7-54.5 22.2-76.8"></svg:path><svg:path fill="#a2001d" d="M200.5 179.2v153.6a269 269 0 0 0 39 51.9V127.3c-11.4 12-26.6 30-39 52zm111.4 0a269 269 0 0 0-39-51.9v257.4c11.4-12 26.5-30 39-52V179.3z"></svg:path></svg:g>`,
})
export class CircleFlagsSwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSxIcon],svg[circle-flags-sx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSx0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSx0)"><svg:path fill="#d80027" d="M0 0h512v256l-265 45.2z"></svg:path><svg:path fill="#0052b4" d="M210 256h302v256H0z"></svg:path><svg:path fill="#eee" d="M0 0v512l256-256z"></svg:path><svg:g fill="#ffda44"><svg:path d="M28 256a73 73 0 0 0-.2 5.6a72.3 72.3 0 1 0 144.5-5.6z"></svg:path><svg:circle cx="100.2" cy="200.3" r="22.3"></svg:circle></svg:g><svg:path fill="#d80027" d="M50 194.8V267c0 38.4 50.2 50 50.2 50s50-11.6 50-50v-72.3h-100z"></svg:path><svg:path fill="#338af3" d="M100.2 294c-9.3-3.4-28-12-28-27v-50H128v50c0 15-18.6 23.6-27.8 26.9z"></svg:path><svg:path fill="#eee" d="M111.3 244.9v-11.2l-11.1-5.5l-11.2 5.5V245l-5.5 5.5v22.3h33.4v-22.3z"></svg:path></svg:g>`,
})
export class CircleFlagsSxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSyIcon],svg[circle-flags-sy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSy0)"><svg:path fill="#eee" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#496e2d" d="M0 0h512v167H0z"></svg:path><svg:path fill="#333" d="M0 345h512v167H0z"></svg:path><svg:path fill="#d80027" d="m110 200l36 112l-95-69h117l-94 69zm146 0l36 112l-94-69h117l-95 69zm146 0l36 112l-94-69h117l-95 69z"></svg:path></svg:g>`,
})
export class CircleFlagsSyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSzIcon],svg[circle-flags-sz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSz0)"><svg:path fill="#ffda44" d="m0 144.7l256-20.5l256 20.5V178l-37.4 79l37.4 77v33.3l-256 24.1L0 367.3V334l37.7-77.3L0 178z"></svg:path><svg:path fill="#333" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#0052b4" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#a2001d" d="M0 178h512v156H0z"></svg:path><svg:path fill="#ffda44" d="M89.2 244.9h334V267h-334zm44.6-44.6h244.8v22.3H133.8z"></svg:path><svg:path fill="#eee" d="m256.2 189.2l-18 65.2l18 68.4c66.8 0 124-66.8 124-66.8s-57.2-66.8-124-66.8"></svg:path><svg:path fill="#333" d="M256.2 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"></svg:path><svg:path fill="#eee" d="M211.7 233.7h22.2v44.6h-22.2z"></svg:path><svg:path fill="#333" d="M278.5 233.7h22.2v44.6h-22.2z"></svg:path><svg:g fill="#0052b4" transform="translate(.2)"><svg:circle cx="89" cy="256" r="22.3"></svg:circle><svg:circle cx="423" cy="256" r="22.3"></svg:circle></svg:g></svg:g>`,
})
export class CircleFlagsSzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTaIcon],svg[circle-flags-ta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTa0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8zm32-144l48-80l48 80z"></svg:path><svg:circle cx="368" cy="144" r="48" fill="#338af3"></svg:circle><svg:path fill="#338af3" d="M320 144v48l48 32l48-32v-48z"></svg:path><svg:rect width="32" height="128" x="288" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:rect width="32" height="128" x="416" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:path fill="#eee" d="M320 192v29c0 36 48 48 48 48s48-12 48-48v-29zm48-48l-16 48h32z"></svg:path><svg:path fill="#338af3" d="m352 192l16 48l16-48z"></svg:path></svg:g>`,
})
export class CircleFlagsTaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTcIcon],svg[circle-flags-tc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTc0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#ffda44" d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"></svg:path><svg:path fill="#ff9811" d="M356.2 178c0 12.4-10 44.6-22.3 44.6s-22.2-32.2-22.2-44.5s22.2-22.3 22.2-22.3s22.3 10 22.3 22.3z"></svg:path><svg:path fill="#a2001d" d="M415.2 202.3a92.2 92.2 0 0 0 6.4-28c0-10.2-13.3-18.5-13.3-18.5s-13.4 8.3-13.4 18.6c0 6.4 2.8 19.2 6.4 28l-7.7 17.3a38.9 38.9 0 0 0 14.7 3a38.9 38.9 0 0 0 14.7-3z"></svg:path><svg:path fill="#6da544" d="M350.6 256s-11.1 22.3-11.1 44.5H395c0-22.2-11.1-44.5-11.1-44.5l-16.7-11.1l-16.7 11.1Z"></svg:path><svg:path fill="#d80027" d="M384 256v-5.6a16.7 16.7 0 0 0-33.4 0v5.6z"></svg:path></svg:g>`,
})
export class CircleFlagsTcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTdIcon],svg[circle-flags-td-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTd0)"><svg:path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"></svg:path><svg:path fill="#026" d="M0 0h167v512H0z"></svg:path><svg:path fill="#d80027" d="M345 0h167v512H345z"></svg:path></svg:g>`,
})
export class CircleFlagsTdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTeIcon],svg[circle-flags-te-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTe0)"><svg:path fill="#eee" d="M0 0h512v128l-256 64L0 128Z"></svg:path><svg:path fill="#338af3" d="M0 128h512v128l-256 64L0 256Z"></svg:path><svg:path fill="#ff9811" d="M0 256h512v128l-256 64L0 384Z"></svg:path><svg:path fill="#496e2d" d="M0 384h512v128H0z"></svg:path></svg:g>`,
})
export class CircleFlagsTeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTfIcon],svg[circle-flags-tf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTf0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0h256v256H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h75v224H0z"></svg:path><svg:path fill="#d80027" d="M149 0h75v224h-75z"></svg:path><svg:path fill="#eee" d="m323 158l13 21h36v71l-27-43l-37 59h18l19-34l39 70l39-70l19 34h18l-37-59l-27 43v-39h16l12-20h-28v-12h36l13-21zm43 88h-40v14h40zm76 0h-40v14h40z"></svg:path><svg:path fill="#eee" d="m301 181l13 38l-34-23h42l-34 23zm166 0l13 38l-34-23h42l-34 23zM339 282l13 38l-34-23h42l-34 23zm90 0l13 38l-34-23h42l-34 23zm-45 34l13 38l-34-23h42l-34 23z"></svg:path></svg:g>`,
})
export class CircleFlagsTfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTgIcon],svg[circle-flags-tg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTg0)"><svg:path fill="#496e2d" d="M256 0h256v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7l30.5 51.7V512H0V409.6l34.7-51L0 307.1z"></svg:path><svg:path fill="#ff9811" d="M0 44.5v423V256z"></svg:path><svg:path fill="#ffda44" d="M231.7 102.4v102.4H512V102.4zM0 307.2v102.4h512V307.2H256l-128.2-26.4z"></svg:path><svg:path fill="#d80027" d="M256 307.2V0H0v307.2z"></svg:path><svg:path fill="#eee" d="m141.4 122.4l16.5 51h53.7L168 205l16.6 51l-43.4-31.5L98 256l16.5-51L71 173.5h53.7z"></svg:path></svg:g>`,
})
export class CircleFlagsTgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsThIcon],svg[circle-flags-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTh0)"><svg:path fill="#d80027" d="M0 0h512v89l-79.2 163.7L512 423v89H0v-89l82.7-169.6L0 89z"></svg:path><svg:path fill="#eee" d="M0 89h512v78l-42.6 91.2L512 345v78H0v-78l40-92.5L0 167z"></svg:path><svg:path fill="#0052b4" d="M0 167h512v178H0z"></svg:path></svg:g>`,
})
export class CircleFlagsThIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTiIcon],svg[circle-flags-ti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTi0)"><svg:path fill="#d80027" d="M0 0h512v512H0l64-256Z"></svg:path><svg:path fill="#ffda44" d="M0 0v512l256-256Zm404 168v176L300 202l168 54l-168 54Z"></svg:path></svg:g>`,
})
export class CircleFlagsTiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTibetIcon],svg[circle-flags-tibet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTibet0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTibet0)"><svg:path fill="#eee" d="m12.4 481.9l491.1.6l-247-247.3z"></svg:path><svg:path fill="#d80027" d="M45 467.4L193.1 319l63-107.5l80.2 105.1L512 362.1V256l-27.8-50l27.8-56V44.7l-260-28l-252 28l38.5 58.8L0 150v106.1l37 50.7l-37 55.4v105.2l23.6 15.8z"></svg:path><svg:path fill="#0052b4" d="m512 362l-206.4-85.4L319 319l148.3 148.4l23 18.1l21.6-18.1zm0-105.9v-106l-255.8 106zM467.7 44.6l-60.9-17.8l-63 17.8l-87.6 211.5zm-211.5 0L214.7 27l-46.1 17.7l87.6 211.5zm-211.5 0L23.9 28.8L0 44.6V150l256.2 106.1zM0 256.1v106.1l256.2-106z"></svg:path><svg:path fill="#ffda44" d="m256.2 256.1l63 63a89 89 0 1 0-126 0zm39 128l-38.8 19.5l-39.2-19.5a39 39 0 1 1 78 0"></svg:path><svg:path fill="#0052b4" d="M295.2 384.1a39 39 0 0 1-78 0"></svg:path><svg:path fill="#ffda44" d="M0 0v44.6h512V0zm0 467.4V512h512v-44.6z"></svg:path></svg:g>`,
})
export class CircleFlagsTibetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTjIcon],svg[circle-flags-tj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTj0)"><svg:path fill="#eee" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#6da544" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#ffda44" d="M211.5 323h89v-38l-17.8 9l-26.7-26.9l-26.7 26.7l-17.8-8.9zm-51-44.6l4.2 12.7H178l-10.9 8l4.2 12.7l-10.9-8l-10.8 8l4.1-12.8l-10.7-7.9h13.4zm12.9-44.6l4.1 12.8H191l-10.8 8l4.1 12.6l-10.8-7.9l-10.9 8l4.2-12.8l-10.9-8h13.4zm36.7-33.4l4.2 12.8h13.4l-10.9 8l4.2 12.6l-11-7.7l-10.8 7.8l4.1-12.7l-10.8-7.9H206zm141.4 78l-4.2 12.7H334l10.9 8l-4.2 12.7l10.9-8l10.8 8l-4.1-12.8l10.7-7.9h-13.4zm-12.9-44.6l-4.1 12.8H321l10.8 8l-4.1 12.6l10.8-7.9l10.9 8l-4.2-12.8l10.9-8h-13.4zM302 200.4l-4.2 12.8h-13.4l10.9 8l-4.2 12.6l10.9-7.7l10.8 7.8l-4.1-12.7l10.8-7.9H306zm-46-16.6l4.1 12.7h13.5l-10.9 8l4.1 12.6l-10.8-7.8l-10.8 7.8l4.1-12.7l-10.9-7.9H252z"></svg:path></svg:g>`,
})
export class CircleFlagsTjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTkIcon],svg[circle-flags-tk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="circleFlagsTk0" fill="#eee" d="m188 133.6l5.6 17h17.9L197 161l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17l-14.4-10.5h17.8zM115.5 256l7 21.3h22.3l-18 13l6.8 21.4l-18-13.2l-18.1 13.2l6.9-21.3l-18.1-13.1h22.3zm0-178l7 21.2h22.3l-18 13.1l6.8 21.3l-18-13.2l-18.1 13.2l6.9-21.3l-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2l6.9 21.2l-18.1-13.1l-18.1 13.1l7-21.2l-18.2-13.2H53z"></svg:path></svg:defs><svg:mask id="circleFlagsTk1"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTk1)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:use href="#circleFlagsTk0"></svg:use><svg:use href="#circleFlagsTk0"></svg:use><svg:path fill="#ffda44" d="M411.8 122.4L144.7 345h361.7v-35.8a167.4 167.4 0 0 1-97.9-152.3c0-11.7 1-23.5 3.3-34.5m94.6 244.9H144.7v33.4h361.7z"></svg:path></svg:g>`,
})
export class CircleFlagsTkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTlIcon],svg[circle-flags-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTl0)"><svg:path fill="#ffda44" d="m0 0l214 251.8L0 512l418-256z"></svg:path><svg:path fill="#d80027" d="M512 0H0l367.3 256L0 512h512z"></svg:path><svg:path fill="#333" d="M0 0v512l256-256z"></svg:path><svg:path fill="#eee" d="m71 197.4l39 36.8l47-25.6l-23 48.4l39 36.9l-53.2-7l-23 48.5l-9.9-52.7l-53.2-7l47.1-25.6z"></svg:path></svg:g>`,
})
export class CircleFlagsTlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTmIcon],svg[circle-flags-tm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTm0)"><svg:path fill="#496e2d" d="M0 0h66.8l67.8 32.3L200.3 0H512v512H200.3l-70.2-34.1L66.8 512H0z"></svg:path><svg:path fill="#d80027" d="M66.8 0h133.5v512H66.8z"></svg:path><svg:g fill="#eee"><svg:path d="M374.4 193.1a78 78 0 0 0-31.9-92.3a78.2 78.2 0 0 1 16.3 4a78 78 0 1 1-52.6 146.6a78 78 0 0 1-15.1-7.3a78 78 0 0 0 83.3-51m-69.8-102l-11 14.2l-16.8-6l10 14.8l-10.9 14l17.2-5l10 14.9l.6-18l17.2-5l-16.9-6z"></svg:path><svg:path d="m334.1 137.3l-11 14l-16.8-6l10.1 14.8l-11 14.2l17.2-5l10.1 14.7l.5-17.8l17.2-5l-16.8-6zM252.5 108l-11 14.1l-16.8-6l10 14.7l-10.9 14.2l17.2-5l10 14.7l.6-17.8l17.1-5l-16.8-6zm-1.2 52.7l-11 14.2l-16.8-6l10 14.7l-10.9 14.2l17.2-5l10 14.7l.6-17.8l17.1-5l-16.8-6zm50.2 18l-11 14.2l-16.8-6l10 14.7l-10.9 14.2l17.2-5l10 14.7l.6-17.8l17.2-5l-16.9-6z"></svg:path></svg:g><svg:path fill="#eee" d="M117.8 134.8L95.4 118v-12l38.2-28l15.8-.1l22.3 16.7v11.5l-38.1 28.7z"></svg:path><svg:path fill="#ff9811" d="M133.6 78h-15.8L95.4 94.5V106h38.2zm0 56.8h15.8l22.3-16.7v-12h-38.1z"></svg:path><svg:path fill="#496e2d" d="m117.8 284.4l-22.4-16.6v-23.6l22.4-16.6h31.6l22.3 16.6v23.6l-22.3 16.6zm54.7 36.7h-9.7v-9.8h-17.1l-12.1-12l-12.1 12h-17.2v9.8h-9.7v19.5h9.7v9.7h17.2l12 12.1l12.2-12.1h17v-9.7h9.8zm0-149.7h-9.7v-9.7h-17.1l-12.1-12.1l-12.1 12h-17.2v9.8h-9.7V191h9.7v9.8h17.2l12 12l12.2-12h17V191h9.8z"></svg:path><svg:g fill="#d80027"><svg:path d="M122.4 244.9h22.3V267h-22.3z"></svg:path><svg:circle cx="133.6" cy="181.2" r="11.1"></svg:circle><svg:circle cx="133.6" cy="330.8" r="11.1"></svg:circle></svg:g><svg:path fill="#eee" d="m117.8 434l-22.4-16.8v-12l38.2-28l15.8-.1l22.3 16.7v11.5L133.6 434z"></svg:path><svg:path fill="#ff9811" d="M133.6 377.2h-15.8l-22.4 16.5v11.5h38.2zm0 56.8h15.8l22.3-16.7v-12h-38.1z"></svg:path></svg:g>`,
})
export class CircleFlagsTmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTnIcon],svg[circle-flags-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTn0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="122.4" fill="#eee"></svg:circle><svg:g fill="#d80027"><svg:path d="m271 209.2l21 29l34.1-11.1l-21 29l21 28.9l-34-11.1l-21 29V267L237 256l34-11z"></svg:path><svg:path d="M283.8 328.3a72.3 72.3 0 1 1 34.4-136a89 89 0 1 0 0 127.3a72 72 0 0 1-34.4 8.7"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsTnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsToIcon],svg[circle-flags-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTo0)"><svg:path fill="#d80027" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#eee" d="M0 0h256v256H0z"></svg:path><svg:path fill="#d80027" d="M167 133.6v-33.4h-33.4v33.4h-33.4V167h33.4v33.3H167V167h33.3v-33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsToIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTorresStraitIslandsIcon],svg[circle-flags-torres-strait-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTorresStraitIslands0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTorresStraitIslands0)"><svg:path fill="#0052b4" d="m0 128l256-32l256 32v256l-256 32L0 384Z"></svg:path><svg:path fill="#333" d="m0 96l256-32l256 32v32H0Z"></svg:path><svg:path fill="#6da544" d="M0 0h512v96H0Z"></svg:path><svg:path fill="#333" d="m0 416l256 32l256-32v-32H0Z"></svg:path><svg:path fill="#6da544" d="M0 512h512v-96H0Z"></svg:path><svg:path fill="#eee" d="M245 144c-106 32-101 112-67 186l-40 38l73-27v-98c24-35 66-35 90 0v98l73 27l-40-38c34-74 39-154-67-186l-11 46l-11-46zm11 83l-9 27h-28l23 17l-9 28l23-17l23 17l-9-28l24-17h-29l-9-27z"></svg:path></svg:g>`,
})
export class CircleFlagsTorresStraitIslandsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTrIcon],svg[circle-flags-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTr0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:g fill="#eee"><svg:path d="m350 182l33 46l54-18l-33 46l33 46l-54-18l-33 46v-57l-54-17l54-18z"></svg:path><svg:path d="M260 370a114 114 0 1 1 54-215a141 141 0 1 0 0 202c-17 9-35 13-54 13"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsTrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTranslingualIcon],svg[circle-flags-translingual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTranslingual0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTranslingual0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M302.7 233.7a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M209.4 72.3a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M302.7 72.3a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M349.2 153a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M209.4 233.7a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M162.8 153a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M256 153.1a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83c0 45.9-37 83-83 83s-83-37.1-83-83c0-46 37-83 83-83"></svg:path></svg:g>`,
})
export class CircleFlagsTranslingualIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTransnistriaIcon],svg[circle-flags-transnistria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTransnistria0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTransnistria0)"><svg:path fill="#a2001d" d="M0 0h512v189.5l-39 62l39 71.6V512H0V323l40.8-67L0 189.5z"></svg:path><svg:path fill="#6da544" d="M0 189.5h512v133.6H0z"></svg:path></svg:g>`,
})
export class CircleFlagsTransnistriaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTtIcon],svg[circle-flags-tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTt0)"><svg:path fill="#d80027" d="M0 110.2L110.2 0H512v401.8L401.8 512H0z"></svg:path><svg:path fill="#eee" d="M110.2 0H63L0 63v47.2L401.8 512H449l63-63v-47.2z"></svg:path><svg:path fill="#333" d="M512 512v-63L63 0H0v63l449 449z"></svg:path></svg:g>`,
})
export class CircleFlagsTtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTvIcon],svg[circle-flags-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTv0)"><svg:path fill="#338af3" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#eee" d="M0 0h33.4l32 16.9L100.3 0H256v33.4l-14.8 33.5l14.8 33.3v33.4l-9.3 33.7l9.3 41.5v15.7l-6.2 11.6L256 256h-47.2l-39.3-7l-35.9 7.1l-33.4-.1l-32.6-16.6L33.4 256H0V100.2l14.2-35.8L0 33.4z"></svg:path><svg:path fill="#d80027" d="m256 224.5l-91-91h-31.4L256 256z"></svg:path><svg:path fill="#d80027" d="M33.4 0v33.4H0v66.8h33.4V256h66.8V100.2H256V33.4H100.2V0z"></svg:path><svg:path fill="#ffda44" d="m279.4 423l5.5 17h18l-14.6 10.5l5.6 17l-14.5-10.5l-14.5 10.5l5.6-17L256 440h17.9zm142.4-111.3l5.5 17h18l-14.5 10.5l5.5 17l-14.5-10.5l-14.5 10.5l5.6-17l-14.5-10.5h17.9zm35.7-167l5.5 17h18l-14.5 10.5l5.6 17l-14.5-10.5l-14.5 10.5l5.6-17l-14.5-10.5H452zm8.8 122.4l5.6 17h17.8l-14.4 10.5l5.5 17l-14.5-10.5l-14.4 10.6l5.5-17l-14.5-10.6h18zM305 383l16 8l12.6-12.6l-2.8 17.7l16 8.1L329 407l-2.8 17.7l-8.1-16l-17.7 2.8l12.7-12.6zm0-66.8l16 8.1l12.6-12.6l-2.8 17.6l16 8.1l-17.7 2.8l-2.8 17.7l-8.1-16l-17.7 2.9l12.7-12.7zm55.7 42.8l16 8.1l12.6-12.6l-2.8 17.6l16 8.1l-17.8 2.8l-2.7 17.7l-8.2-16l-17.6 2.9l12.6-12.7zm0-143l16 8.1l12.6-12.6l-2.8 17.6l16 8.2l-17.8 2.8l-2.7 17.6l-8.2-16l-17.6 2.9l12.6-12.7zm54-1.7l15.9 8.1l12.6-12.6l-2.8 17.6l16 8.1l-17.7 2.8l-2.8 17.7l-8.1-16l-17.8 3l12.7-12.7z"></svg:path><svg:path fill="#0052b4" d="M180.8 133.6H256v75.2zm-47.2 47.2v75.3l75.2-.1z"></svg:path></svg:g>`,
})
export class CircleFlagsTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTwIcon],svg[circle-flags-tw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTw0)"><svg:path fill="#d80027" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#0052b4" d="M256 256V0H0v256z"></svg:path><svg:path fill="#eee" d="m222.6 149.8l-31.3 14.7l16.7 30.3l-34-6.5l-4.3 34.3l-23.6-25.2l-23.7 25.2l-4.3-34.3l-34 6.5l16.7-30.3l-31.2-14.7l31.2-14.7l-16.6-30.3l34 6.5l4.2-34.3l23.7 25.3L169.7 77l4.3 34.3l34-6.5l-16.7 30.3z"></svg:path><svg:circle cx="146.1" cy="149.8" r="47.7" fill="#0052b4"></svg:circle><svg:circle cx="146.1" cy="149.8" r="41.5" fill="#eee"></svg:circle></svg:g>`,
})
export class CircleFlagsTwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTyIcon],svg[circle-flags-ty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTy0)"><svg:path fill="#d80027" d="M0 0h512v133.7l-52 126l52 118.8V512H0V378.5l53-121L0 133.6z"></svg:path><svg:path fill="#eee" d="M0 133.7h512v244.8H0z"></svg:path><svg:path fill="#ffda44" d="M345 256.1c0 49.2-39.8 78-89 78s-89-28.8-89-78a89 89 0 1 1 178 0"></svg:path><svg:path fill="#0052b4" d="M345 256.1a89 89 0 1 1-178 0"></svg:path><svg:path fill="#d80027" d="M200.3 233.8h22.3v44.6h-22.3zm89 0h22.4v44.6h-22.3zM245 200.4h22v78h-22z"></svg:path></svg:g>`,
})
export class CircleFlagsTyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTzIcon],svg[circle-flags-tz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTz0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="M399 0L167 167L0 399v45l68 68h45l232-167l167-232V68L444 0Z"></svg:path><svg:path fill="#333" d="M444 0L0 444v68h68L512 68V0Z"></svg:path><svg:path fill="#338af3" d="m113 512l399-399v399z"></svg:path><svg:path fill="#6da544" d="M0 399V0h399Z"></svg:path></svg:g>`,
})
export class CircleFlagsTzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUaIcon],svg[circle-flags-ua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUa0)"><svg:path fill="#ffda44" d="m0 256l258-39.4L512 256v256H0z"></svg:path><svg:path fill="#338af3" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsUaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUdmIcon],svg[circle-flags-udm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUdm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUdm0)"><svg:path fill="#eee" d="M160 0h192l32 256l-32 256H160l-32-256Z"></svg:path><svg:path fill="#333" d="M0 0h160v512H0Z"></svg:path><svg:path fill="#d80027" d="M352 0h160v512H352ZM229 176l107 107H176l107-107v160L176 229h160L229 336Z"></svg:path></svg:g>`,
})
export class CircleFlagsUdmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUgIcon],svg[circle-flags-ug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUg0)"><svg:path fill="#ffda44" d="M0 85v342l256 31l256-31V85L256 53Z"></svg:path><svg:path fill="#333" d="M0 0h512v85H0z"></svg:path><svg:path fill="#d80027" d="M0 171h512v85l-256 31L0 256Z"></svg:path><svg:path fill="#333" d="M0 256h512v85H0z"></svg:path><svg:path fill="#d80027" d="M0 427h512v85H0z"></svg:path><svg:circle cx="256" cy="256" r="85.3" fill="#eee"></svg:circle><svg:path fill="#333" d="m287 260l-31-13l8-26a17 17 0 0 0-5-16l8-8a28 28 0 0 0-19-8a28 28 0 0 0-20 8l8 8a17 17 0 0 0-5 12l1 5l-12 12h21s-9 13-14 24c-4 11 0 25 12 30l6 2l11 10v12l-11 11h22v-23l10-10h21a22 22 0 0 0-11-30"></svg:path></svg:g>`,
})
export class CircleFlagsUgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUkIcon],svg[circle-flags-uk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUk0)"><svg:path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"></svg:path><svg:path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"></svg:path><svg:path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"></svg:path></svg:g>`,
})
export class CircleFlagsUkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUmIcon],svg[circle-flags-um-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUm0)"><svg:path fill="#eee" d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"></svg:path><svg:path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h256v256H0Z"></svg:path><svg:path fill="#eee" d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"></svg:path></svg:g>`,
})
export class CircleFlagsUmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUnIcon],svg[circle-flags-un-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUn0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="145" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="111" fill="#338af3"></svg:circle><svg:path fill="#338af3" d="M76 76h360L256 256z"></svg:path><svg:circle cx="256" cy="256" r="89" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="69" fill="#338af3"></svg:circle><svg:path fill="#eee" d="M246 178h20v156h-20z"></svg:path><svg:path fill="#eee" d="M334 246v20H178v-20z"></svg:path><svg:path fill="#eee" d="m304 193.7l14.2 14.2l-110.3 110.3l-14.2-14.1z"></svg:path><svg:path fill="#eee" d="m318.2 304l-14.1 14.2l-110.4-110.3l14.2-14.2z"></svg:path><svg:circle cx="256" cy="256" r="44" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="22" fill="#338af3"></svg:circle><svg:ellipse cx="256" cy="412" fill="#eee" rx="44" ry="40"></svg:ellipse><svg:path fill="#338af3" d="m256 407l-78 63h156z"></svg:path></svg:g>`,
})
export class CircleFlagsUnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUnitedNationsIcon],svg[circle-flags-united-nations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUnitedNations0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUnitedNations0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="145" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="111" fill="#338af3"></svg:circle><svg:path fill="#338af3" d="M76 76h360L256 256z"></svg:path><svg:circle cx="256" cy="256" r="89" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="69" fill="#338af3"></svg:circle><svg:path fill="#eee" d="M246 178h20v156h-20z"></svg:path><svg:path fill="#eee" d="M334 246v20H178v-20z"></svg:path><svg:path fill="#eee" d="m304 193.7l14.2 14.2l-110.3 110.3l-14.2-14.1z"></svg:path><svg:path fill="#eee" d="m318.2 304l-14.1 14.2l-110.4-110.3l14.2-14.2z"></svg:path><svg:circle cx="256" cy="256" r="44" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="22" fill="#338af3"></svg:circle><svg:ellipse cx="256" cy="412" fill="#eee" rx="44" ry="40"></svg:ellipse><svg:path fill="#338af3" d="m256 407l-78 63h156z"></svg:path></svg:g>`,
})
export class CircleFlagsUnitedNationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUrIcon],svg[circle-flags-ur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUr0)"><svg:path fill="#eee" d="M0 0h133.6l50.2 252.5L133.6 512H0z"></svg:path><svg:path fill="#496e2d" d="M133.6 0H512v512H133.6z"></svg:path><svg:path fill="#eee" d="M365.5 298.3A72.3 72.3 0 1 1 313.7 168a89 89 0 1 0 74.6 103.2a72 72 0 0 1-22.8 27.2zM364 167l18.2 19.6l24.3-11.3l-13 23.5l18.2 19.6l-26.3-5.1l-13 23.4l-3.3-26.7l-26.1-5l24.4-11.3z"></svg:path></svg:g>`,
})
export class CircleFlagsUrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsIcon],svg[circle-flags-us-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUs0)"><svg:path fill="#eee" d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"></svg:path><svg:path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h256v256H0Z"></svg:path><svg:path fill="#eee" d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsAkIcon],svg[circle-flags-us-ak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAk0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m336.8 199.7l104-75.1h-128l104 75.1l-40-122.1zM57 231.7l52-37.4H45l52 37.4l-20-60.9zm85.5 31.7l52-37.4h-64l52 37.4l-20-60.9zM185 309l52-37.4h-64l52 37.4l-20-60.9zm43 47.6l52-37.4h-64l52 37.4l-20-60.9zm-5.6 67.1l52-37.4h-64l52 37.4l-20-60.9zM356 402.2l52-37.4h-64l52 37.4l-20-60.9zm-37.4 53.2l52-37.4h-64l52 37.4l-20-60.9z"></svg:path></svg:g>`,
})
export class CircleFlagsUsAkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsAlIcon],svg[circle-flags-us-al-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAl0)"><svg:path fill="#eee" d="M0 68L68 0h376l68 68v376l-68 68H68L0 444Z"></svg:path><svg:path fill="#d80027" d="M0 0v68l188 188L0 444v68h68l188-188l188 188h68v-68L324 256L512 68V0h-68L256 188L68 0Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsAlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsArIcon],svg[circle-flags-us-ar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAr0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#0052b4" d="M256 70L5 256l251 186l251-186Z"></svg:path><svg:path fill="#eee" d="M256 130L85 256l171 126l171-126Zm-13.4-5.7l34.7-25h-42.7l34.7 25L256 83.7ZM46.5 277.4l27.2-33.1l-41.4 11.1l40.1 15L49 234.6Zm419 0l-27.2-33.1l41.4 11.1l-40.1 15l23.4-35.8zm-145.7-104l27.2-33.1l-41.4 11.1l40.1 15l-23.4-35.8zm70.3 52l27.2-33.1l-41.4 11.1l40.1 15l-23.4-35.8zm-197.9-52L165 140.3l41.4 11.1l-40.1 15l23.4-35.8zm-70.3 52l-27.2-33.1l41.4 11.1l-40.1 15l23.4-35.8zm-13 104l27.2-33.1l-41.5 11.1l40.2 15l-23.4-35.8zm70.3 52l27.2-33.1l-41.4 11.1l40.1 15l-23.4-35.8zm63.5 46.9l34.7-24.9h-42.7l34.7 24.9l-13.3-40.6zm160.4-98.9l-27.2-33.1l41.5 11.1l-40.2 15l23.4-35.8zm-70.3 52l-27.2-33.1l41.4 11.1l-40.1 15l23.4-35.8z"></svg:path><svg:path fill="#0052b4" d="m242.7 204.7l34.7-25h-42.7l34.7 25l-13.3-40.7zm-39.2 103l34.7-25h-42.7l34.7 25l-13.3-40.7zm78.2 0l34.7-25h-42.7l34.7 25l-13.3-40.7zm-39.1-4.4l34.7 25h-42.7l34.7-25L256 344ZM160 223h192v32H160z"></svg:path></svg:g>`,
})
export class CircleFlagsUsArIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsAsIcon],svg[circle-flags-us-as-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAs0)"><svg:path fill="#eee" d="M512 20.4V490L23.8 255.8z"></svg:path><svg:path fill="#a2001d" d="M445.2 246.5h-30.5c8-9.6 7.5-23.7-1.5-32.7a24.2 24.2 0 0 0 0-34.2l-.5.5a25 25 0 0 0 .5-34.8l-137 137a23.9 23.9 0 0 0 34 0l2.6-2.5l65.6-6v28.3h22.3v-30.2l33.4-3z"></svg:path><svg:path fill="#ffda44" d="M278.3 311.7L256 300.5l22.3-11.1H423v22.3z"></svg:path><svg:path fill="#0052b4" d="M0 0v512h512L28.7 256.2L512 0z"></svg:path><svg:path fill="#d80027" d="M512 0L0 256l512 256v-22L43.8 256L512 20.4z"></svg:path></svg:g>`,
})
export class CircleFlagsUsAsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsAzIcon],svg[circle-flags-us-az-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsAz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsAz0)"><svg:path fill="#d80027" d="M71 0L0 34v91l16 35l-16 36v60l256 64l256-64v-60l-16-36l16-35V34L441 0h-85l-32 16l-32-16h-72l-32 16l-32-16Z"></svg:path><svg:path fill="#0052b4" d="M0 256h512v256H0Z"></svg:path><svg:path fill="#ffda44" d="m292 0l-36 256L356 0zm-36 256L512 34V0h-71zm0 0l256-60v-71zm0 0L0 125v71zm0 0L71 0H0v35zm0 0L220 0h-64z"></svg:path><svg:path fill="#ff9811" d="m256 128l83 256l-217-159h268L173 384Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsAzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsBetsyRossIcon],svg[circle-flags-us-betsy-ross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsBetsyRoss0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsBetsyRoss0)"><svg:path fill="#d80027" d="M312 0h200v512H0V273Z"></svg:path><svg:path fill="#eee" d="M280 41v39h232V41Zm0 78v39h232v-39zm0 78v39h232v-39ZM0 275v39h512v-39H312l-156-64Zm0 78v39h512v-39zm0 78v39h512v-39z"></svg:path><svg:path fill="#0052b4" d="M0 0h312v275H0Z"></svg:path><svg:path fill="#eee" d="m260 176l2 17l-15 6l16 4l1 16l9-14l16 3l-11-12l8-14l-15 7zm-144 0l-11 12l-15-6l8 14l-11 12l17-3l8 14l1-16l16-4l-15-6zm173-47l-10 13l-15-5l9 13l-9 13l15-5l10 13v-16l15-5l-15-5zm-201 0v16l-16 5l16 5v16l9-13l16 5l-10-13l10-13l-16 5zm177-48l-2 16l-16 4l15 6l-2 17l11-12l15 6l-8-14l11-12l-16 3zm-153 0l-8 14l-17-3l11 12l-8 14l15-6l11 12l-2-17l15-6l-16-4zm134-32l-12 11l-14-8l7 15l-13 11l17-2l6 15l4-16l16-1l-14-8zm-116 0l3 16l-14 9l16 1l4 16l7-15l16 2l-12-11l6-15l-14 8zm58-15l-5 15h-16l13 10l-5 15l13-9l13 9l-5-15l13-10h-16zm58 217l-12-11l-14 8l7-15l-13-11l17 2l6-15l4 16l16 1l-14 8zm-116 0l3-16l-14-9l16-1l4-16l7 15l16-2l-12 11l6 15l-14-8zm58 15l-5-15h-16l13-10l-5-15l13 9l13-9l-5 15l13 10h-16z"></svg:path></svg:g>`,
})
export class CircleFlagsUsBetsyRossIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsCaIcon],svg[circle-flags-us-ca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsCa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsCa0)"><svg:path fill="#eee" d="M0 0h512v416l-256 32L0 416Z"></svg:path><svg:path fill="#6da544" d="m396 280l-132-10l-140 14l-8 12h299z"></svg:path><svg:path fill="#584528" d="m389 273l-19-77l-55-31l-95-4l-75 27l-16 35l11 19l26 1l10-11l24-4l-12 31l-19 25l17 2l19-12l26-24l22 11l-13 17l26-2l9-16l-4-19l21 4l1 23l-14 8l1 6h26l34-30l27 16l-6 8l1 5h17l10-7zM84 340h178v32H84Z"></svg:path><svg:path fill="#d80027" d="M0 416h512v96H0Z"></svg:path><svg:path fill="#584528" d="M288 340h140v32H288Z"></svg:path><svg:path fill="#d80027" d="m71 182l69-50H55l69 50l-26-81z"></svg:path></svg:g>`,
})
export class CircleFlagsUsCaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsCoIcon],svg[circle-flags-us-co-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsCo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsCo0)"><svg:path fill="#0052b4" d="M0 0h512v167l-64 89l64 89v167H0V345l64-89l-64-89Z"></svg:path><svg:path fill="#eee" d="M0 167h512v178H0z"></svg:path><svg:path fill="#d80027" d="M344.3 299.8A128 128 0 0 1 201.8 382A128 128 0 0 1 96 256a128 128 0 0 1 105.8-126a128 128 0 0 1 142.5 82.2L224 256z"></svg:path><svg:circle cx="224" cy="256" r="64" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsUsCoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsConfederateBattleIcon],svg[circle-flags-us-confederate-battle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsConfederateBattle0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsConfederateBattle0)"><svg:path fill="#d80027" d="M0 68L68 0h376l68 68v376l-68 68H68L0 444Z"></svg:path><svg:path fill="#eee" d="M0 50v18l188 188L0 444v18l50 50h18l188-188l188 188h18l50-50v-18L324 256L512 68V50L462 0h-18L256 188L68 0H50Z"></svg:path><svg:path fill="#0052b4" d="M0 0v50l206 206L0 462v50h50l206-206l206 206h50v-50L306 256L512 50V0h-50L256 206L50 0z"></svg:path><svg:path fill="#eee" d="m307 274l19 57l-49-35h60l-48 35zm-51-51l19 57l-49-35h60l-48 35zm103 103l19 57l-49-35h60l-48 35zm51 51l19 57l-49-35h60l-48 35zM153 120l19 57l-49-35h60l-48 35zm-51-51l19 57l-49-35h60l-48 35zm103 103l19 57l-49-35h60l-48 35zm0 102l-18 57l48-35h-60l49 35zm-52 52l-18 57l48-35h-60l49 35zm-51 51l-18 57l48-35H72l49 35zm257-257l-18 57l48-35h-60l49 35zm51-51l-18 57l48-35h-60l49 35zM307 172l-18 57l48-35h-60l49 35z"></svg:path></svg:g>`,
})
export class CircleFlagsUsConfederateBattleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsDcIcon],svg[circle-flags-us-dc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsDc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsDc0)"><svg:path fill="#eee" d="M0 0h512v186l-64 48l64 48v57l-64 48l64 48v77H0v-77l64-48l-64-48v-57l64-48l-64-48Z"></svg:path><svg:path fill="#d80027" d="M0 186h512v96H0zm0 153h512v96H0zm224-181l83-60H205l83 60l-32-98Zm118 0l83-60H323l83 60l-32-98Zm-236 0l83-60H87l83 60l-32-98Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsDcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsFlIcon],svg[circle-flags-us-fl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsFl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsFl0)"><svg:path fill="#eee" d="M0 68L68 0h376l68 68v376l-68 68H68L0 444Z"></svg:path><svg:path fill="#d80027" d="M0 0v68l188 188L0 444v68h68l188-188l188 188h68v-68L324 256L512 68V0h-68L256 188L68 0Z"></svg:path><svg:circle cx="256" cy="256" r="96" fill="#ff9811"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="#6da544"></svg:circle></svg:g>`,
})
export class CircleFlagsUsFlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsGaIcon],svg[circle-flags-us-ga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsGa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsGa0)"><svg:path fill="#d80027" d="M512 0v171l-64 85l64 85v171H0V341L341 0Z"></svg:path><svg:path fill="#eee" d="M341 171h171v170H341l-64-85z"></svg:path><svg:path fill="#0052b4" d="M0 0h341v341H0Z"></svg:path><svg:path fill="#ffda44" d="M184 133a40 40 0 0 0-40 40v60h80v-60a40 40 0 0 0-40-40"></svg:path><svg:path fill="#eee" d="m167 105l52-37h-64l52 37l-20-61zm101 62l37 52v-64l-37 52l61-20zm-62 101l-52 37h64l-52-37l20 61zm-101-61l-37-52v64l37-52l-61 20zm125-92l63 10l-45-45l10 63l29-57zm28 115l-10 63l45-45l-63 10l57 29zm-115 28l-63-10l45 45l-10-63l-29 57Zm-28-115l10-63l-45 45l63-10l-57-29Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsGaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsGuIcon],svg[circle-flags-us-gu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsGu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsGu0)"><svg:path fill="#d80027" d="M0 0h512v44.6l-41.2 207.2L512 467.6V512H0v-44.4l38-219l-38-204z"></svg:path><svg:path fill="#0052b4" d="M0 44.6h512v423H0z"></svg:path><svg:path fill="#d80027" d="M241.5 417.7c-3.5-3-85.7-74.5-85.7-161.6c0-87 82.2-158.6 85.7-161.6L256 82.1l14.5 12.4c3.5 3 85.7 74.4 85.7 161.6S274 414.7 270.5 417.7L256 430.1z"></svg:path><svg:path fill="#338af3" d="M334 256.1c0-78-78-144.7-78-144.7s-78 66.8-78 144.7a150 150 0 0 0 17.5 66.8h121a150 150 0 0 0 17.4-66.8z"></svg:path><svg:path fill="#0052b4" d="M334 256.1a150 150 0 0 1-17.5 66.8L256 334l-60.5-11a150 150 0 0 1-17.4-66.9h155.8z"></svg:path><svg:path fill="#ffda44" d="M256 400.8s37.5-32.2 60.5-78h-121c23 45.8 60.5 78 60.5 78"></svg:path><svg:path fill="#6da544" d="M206 211.6h100l-50 50z"></svg:path><svg:path fill="#a2001d" d="M239.3 245h33.4v100.1h-33.4z"></svg:path></svg:g>`,
})
export class CircleFlagsUsGuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsHiIcon],svg[circle-flags-us-hi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsHi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsHi0)"><svg:path fill="#eee" d="M0 256V96l32-32L0 32V0h32l32 32L96 0h416v64l-32 64l32 64v64l-32 64l32 64v64l-256 32L0 448v-64l32-64z"></svg:path><svg:path fill="#0052b4" d="m173 128l83 83v-19h256v-64L384 96l-128 32Zm-45 45v83h83zM0 320v64h512v-64l-256-32Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160H0v64h512v-64H96V96h160v32h256V64H256V32H96V0zm224 256v-31l-97-97h-31zM0 448v64h512v-64z"></svg:path></svg:g>`,
})
export class CircleFlagsUsHiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsInIcon],svg[circle-flags-us-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsIn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsIn0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="M224 361h64l-52 37.5l20-61l20 61zm-79.2-32.8h64l-52 37.5l20-61l20 61zM112 249h64l-52 37.5l20-61l20 61zm144 145l-12 8.6V451l12 21l12-21v-48.4zm6.7-207.7c-14.3 5.2-18.9 17.4-17.5 30.5a20.7 20.7 0 0 1-6.3-11.5a26 26 0 0 0-6 15.9a27.8 27.8 0 0 0 8.3 19.8H216v16h16l12 31h-12v16h12v44.4l12-36.6l12 36.6V304h12v-16h-12l12-31h16v-16h-23.3c7.6-8.5 8.6-23.3 1.9-34c-.3 6.4-3.5 11.2-5.6 14.8c-.9-11.8-11.2-18.8-6.3-35.5M224 63.5h64L236 101l20-61l20 61zm92.1 29.9h64l-52 37.5l20-61l20 61zm63.5 63.5h64l-52 37.5l20-61l20 61zm29.9 92.1h64l-52 37.5l20-61l20 61zm-29.9 92.1h64l-52 37.5l20-61l20 61zm-63.5 63.5h64l-52 37.5l20-61l20 61zm-184.2 0h64l-52 37.5l20-61l20 61zm-63.5-63.5h64l-52 37.5l20-61l20 61zM38.5 249h64l-52 37.5l20-61l20 61zm29.9-92.1h64l-52 37.5l20-61l20 61zm63.5-63.5h64l-52 37.5l20-61l20 61zM224 137h64l-52 37.5l20-61l20 61zm112 112h64l-52 37.5l20-61l20 61zm-32.8 79.2h64l-52 37.5l20-61l20 61z"></svg:path></svg:g>`,
})
export class CircleFlagsUsInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsMdIcon],svg[circle-flags-us-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsMd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsMd0)"><svg:path fill="#333" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#ff9811" d="M64 0v128l64 64V64Zm64 64l64 64V0h-64zm64 64v128l64 64V192Zm64 64l64 64V0h-64zm64 64v128l64 64V320Zm64 64l64 64V0h-64zm64 64v128h64v-64zm0 128l-64-64v64zM320 384l-64-64v192h64zM192 256l-64-64v320h64zM64 128L0 64v448h64z"></svg:path><svg:path fill="#eee" d="M256 0v256h256V0zm0 256H0v256h256z"></svg:path><svg:path fill="#a2001d" d="M384 0v32h32v64h64v32h32V0zm96 128h-96v96h32v-64h64zm-96 96h-32v-64h-64v-32h-32v128h128zm-128 32H128v32h32v64h64v32h32zm-32 128h-96v96h32v-64h64zm-96 96H96v-64H32v-32H0v128h128zm-96-96h96v-96H96v64H32zm256-256h96V32h-32v64h-64z"></svg:path></svg:g>`,
})
export class CircleFlagsUsMdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsMoIcon],svg[circle-flags-us-mo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsMo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsMo0)"><svg:path fill="#eee" d="m0 170l256-64l256 64v172l-256 64L0 342Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v170H0Z"></svg:path><svg:path fill="#0052b4" d="M0 342h512v170H0Z"></svg:path><svg:circle cx="256" cy="256" r="160" fill="#0052b4"></svg:circle><svg:circle cx="256" cy="256" r="104" fill="#eee"></svg:circle><svg:path fill="#eee" d="m240 148.4l41.6-30h-51.2l41.6 30l-16-48.8zM363.6 240l30 41.6v-51.2l-30 41.6l48.8-16zM272 363.6l-41.6 30h51.2l-41.6-30l16 48.8zM148.4 272l-30-41.6v51.2l30-41.6l-48.8 16zm147.5-117.2l51.1-5.2l-44.4-25.6l21.1 46.8l10.5-50.3zm61.3 141.1l5.2 51.1l25.6-44.4l-46.8 21.1l50.2 10.5zm-141.1 61.3l-51.1 5.2l44.4 25.6l-21.1-46.8l-10.5 50.2zm-61.3-141.1l-5.2-51.1l-25.6 44.4l46.8-21.1l-50.2-10.5Zm186.4-27.8l46.8 21.1l-25.6-44.4l-5.2 51.1l34.3-38.3zm-17.5 152.9L302.6 388l44.4-25.6l-51.1-5.2l38.3 34.2zm-152.9-17.5L124 302.6l25.6 44.4l5.2-51.1l-34.3 38.3zm17.5-152.9l21.1-46.8l-44.4 25.6l51.1 5.2l-38.3-34.2z"></svg:path><svg:path fill="#338af3" d="M256 168a88 88 0 0 0-74.9 42H331a88 88 0 0 0-75-42"></svg:path><svg:circle cx="256" cy="280" r="56" fill="#ff9811"></svg:circle><svg:path fill="#eee" d="M288 280a32 32 0 0 1-32 32l-16-32l16-32a32 32 0 0 1 32 32"></svg:path><svg:path fill="#0052b4" d="M256 248a32 32 0 0 0-32 32l16 16l16-16z"></svg:path><svg:path fill="#d80027" d="M256 312a32 32 0 0 1-32-32h32z"></svg:path></svg:g>`,
})
export class CircleFlagsUsMoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsMpIcon],svg[circle-flags-us-mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsMp0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsMp0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M248 417.2a16.7 16.7 0 0 1-15-11a16.7 16.7 0 0 1-29.7-7.6a16.7 16.7 0 0 1-27.6-13.5a16.7 16.7 0 0 1-24.3-18.9a16.7 16.7 0 0 1-17.8-5a16.7 16.7 0 0 1-2.3-18.3a16.7 16.7 0 0 1-15-26.8a16.7 16.7 0 0 1-9.2-29.4a16.7 16.7 0 0 1-3.1-30.5a16.7 16.7 0 0 1 3-30.6a16.7 16.7 0 0 1 9.2-29.4a16.7 16.7 0 0 1 15-26.9a16.7 16.7 0 0 1 2.2-18.3c4.5-5.2 11.5-7 17.7-5a16.7 16.7 0 0 1 6-17.5a16.7 16.7 0 0 1 18.3-1.4a16.7 16.7 0 0 1 27.6-13.6a16.7 16.7 0 0 1 29.7-7.7a16.7 16.7 0 0 1 30.7-1.6a16.7 16.7 0 0 1 30.4 4.6a16.7 16.7 0 0 1 28.9 10.6a16.7 16.7 0 0 1 26.1 16.2c6-2.6 13.2-1.5 18.2 3.2a16.7 16.7 0 0 1 4.1 18a16.7 16.7 0 0 1 17.7 25.1a16.7 16.7 0 0 1 15.4 10.1a16.7 16.7 0 0 1-3.2 18.2a16.7 16.7 0 0 1 6.2 30c6 2.6 10.2 8.5 10.2 15.4v.4c0 6.9-4.2 12.8-10.2 15.4a16.7 16.7 0 0 1-6.1 30a16.7 16.7 0 0 1-12.2 28.3a16.7 16.7 0 0 1-.4 18.5a16.7 16.7 0 0 1-17.1 6.8a16.7 16.7 0 0 1-4.2 18c-5 4.7-12.2 5.7-18.1 3.2a16.7 16.7 0 0 1-26 16.3a16.7 16.7 0 0 1-28.8 10.7a16.7 16.7 0 0 1-30.5 4.6a16.7 16.7 0 0 1-15.9 9.4z"></svg:path><svg:circle cx="256" cy="256" r="111.3" fill="#338af3"></svg:circle><svg:path fill="#acabb1" d="M280.4 218.2c5.4-4 9-10.5 9-17.9v-11c0-12.4-10-22.3-22.3-22.3H245c-12.3 0-22.3 10-22.3 22.2v11.1c0 7.4 3.6 13.9 9 18L211.5 423s11.1 11 44.5 11s44.5-11 44.5-11z"></svg:path><svg:path fill="#eee" d="m256 167l19.3 59.5H338l-50.6 36.8l19.3 59.5L256 286l-50.6 36.8l19.3-59.5l-50.6-36.8h62.6z"></svg:path></svg:g>`,
})
export class CircleFlagsUsMpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsMsIcon],svg[circle-flags-us-ms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsMs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsMs0)"><svg:path fill="#d80027" d="M0 0h104l152 64L408 0h104v512H408l-152-64l-152 64H0Z"></svg:path><svg:path fill="#ff9811" d="M104 0h24l128 64L384 0h24v512h-24l-128-64l-128 64h-24z"></svg:path><svg:path fill="#0052b4" d="M128 0h256v512H128Z"></svg:path><svg:path fill="#eee" d="m198 155l3 16l-14 9l16 1l4 16l7-15l16 2l-12-11l6-15l-14 8zm116 0l-12 11l-14-8l7 15l-13 11l17-2l6 15l4-16l16-1l-14-8zm-134 32l-8 14l-17-3l11 12l-8 14l15-6l11 12l-2-17l15-6l-16-4zm153 0l-2 16l-16 4l15 6l-2 17l11-12l15 6l-8-14l11-12l-16 3zm-77 21a16 16 0 0 0-16 16a16 16 0 0 0 2 8a16 16 0 0 0-6-6a16 16 0 0 0-8-2a16 16 0 0 0-14 8a16 16 0 0 0 6 22a16 16 0 0 0 8 2a16 16 0 0 0-8 2a16 16 0 0 0-6 22a16 16 0 0 0 22 6a16 16 0 0 0 6-6a16 16 0 0 0-2 8a16 16 0 0 0 16 16a16 16 0 0 0 16-16a16 16 0 0 0-2-8a16 16 0 0 0 6 6a16 16 0 0 0 22-6a16 16 0 0 0-6-22a16 16 0 0 0-8-2a16 16 0 0 0 8-2a16 16 0 0 0 6-22a16 16 0 0 0-13-8a16 16 0 0 0-9 2a16 16 0 0 0-6 6a16 16 0 0 0 2-8a16 16 0 0 0-16-16m-100 27v16l-16 5l16 5v16l9-13l16 5l-10-13l10-13l-16 5zm201 0l-10 13l-15-5l9 13l-9 13l15-5l10 13v-16l15-5l-15-5zm-173 47l-11 12l-15-6l8 14l-11 12l17-3l8 14l1-16l16-4l-15-6zm144 0l2 17l-15 6l16 4l1 16l9-14l16 3l-11-12l8-14l-15 7zm-130 40l-11 12a104 104 0 0 0 138 0l-11-12a88 88 0 0 1-116 0"></svg:path><svg:path fill="#ff9811" d="m256 140l-5 15h-16l13 10l-5 15l13-9l13 9l-5-15l13-10h-16zm0 100a16 16 0 0 0-16 16a16 16 0 0 0 16 16a16 16 0 0 0 16-16a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class CircleFlagsUsMsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsNcIcon],svg[circle-flags-us-nc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsNc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsNc0)"><svg:path fill="#0052b4" d="M0 0h232l64 256l-64 256H0Z"></svg:path><svg:path fill="#d80027" d="M232 0h280v256l-140 64l-140-64Z"></svg:path><svg:path fill="#eee" d="M232 256h280v256H232Z"></svg:path><svg:path fill="#0052b4" d="M0 0h232v512H0z"></svg:path><svg:path fill="#eee" d="m91 294l65-47H76l65 47l-25-76z"></svg:path><svg:path fill="#ffda44" d="M24 224h40v64H24zm144 0h40v64h-40zM64 92v16H24v32h40v-16h104v16h40v-32h-40V92zm0 328v-16H24v-32h40v16h104v-16h40v32h-40v16z"></svg:path></svg:g>`,
})
export class CircleFlagsUsNcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsNmIcon],svg[circle-flags-us-nm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsNm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsNm0)"><svg:path fill="#ffda44" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#d80027" d="M256 56c-7 0-12 5-12 12v128h-24v-92a12 12 0 0 0-24 0v92h-92a12 12 0 0 0 0 24h92v24H68a12 12 0 0 0 0 24h128v24h-92a12 12 0 0 0 0 24h92v92c0 7 5 12 12 12s12-5 12-12v-92h24v128c0 7 5 12 12 12s12-5 12-12V316h24v92c0 7 5 12 12 12s12-5 12-12v-92h92c7 0 12-5 12-12s-5-12-12-12h-92v-24h128c7 0 12-5 12-12s-5-12-12-12H316v-24h92c7 0 12-5 12-12s-5-12-12-12h-92v-92a12 12 0 0 0-24 0v92h-24V68c0-7-5-12-12-12"></svg:path><svg:circle cx="256" cy="256" r="88" fill="#d80027"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsUsNmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsOrIcon],svg[circle-flags-us-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsOr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsOr0)"><svg:path fill="#0052b4" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#ffda44" d="M167 230v37c0 68 89 89 89 89s89-21 89-89v-37zm9 170h160v48H176ZM112 64h288v48H112Z"></svg:path><svg:path fill="#ffda44" d="M256 146a28 28 0 0 0-28 28h-84a28 28 0 0 0 28 28a28 28 0 0 0 28 28a28 28 0 0 0 28 28h56a28 28 0 0 0 28-28a28 28 0 0 0 28-28a28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28"></svg:path></svg:g>`,
})
export class CircleFlagsUsOrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsPrIcon],svg[circle-flags-us-pr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsPr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsPr0)"><svg:path fill="#eee" d="m27 63.3l485 39.1v102.4L477.3 259l34.7 48.2v102.4L27.4 446.9z"></svg:path><svg:path fill="#d80027" d="m0 0l51.2 102.4H512V0zm0 512h512V409.6H51.2zm180-204.8h332V204.8H180z"></svg:path><svg:path fill="#0052b4" d="M0 0v512l256-256z"></svg:path><svg:path fill="#eee" d="m103.6 189.2l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6H87z"></svg:path></svg:g>`,
})
export class CircleFlagsUsPrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsRiIcon],svg[circle-flags-us-ri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsRi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsRi0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#0052b4" d="M204 296v16h-40v32h40v-16h104v16h40v-32h-40v-16z"></svg:path><svg:path fill="#ffda44" d="m236 107l52-38h-64l52 38l-20-61zm170 129l37 52v-64l-37 52l61-20zM276 406l-52 37h64l-52-37l20 61zM107 276l-38-52v64l38-52l-61 20zm206-159l64-7l-55-32l26 59l13-63zm83 196l6 64l32-55l-59 26l63 13zm-197 83l-64 6l55 32l-26-59l-13 63zm-82-197l-7-64l-32 55l59-26l-63-13Zm259-35l58 26l-32-55l-7 64l43-48zm-28 212l-26 58l55-32l-64-7l48 43zm-211-28l-59-26l32 55l6-64l-42 48zm27-211l26-59l-55 32l64 6l-48-42zm92-3a24 24 0 0 0-24 24a24 24 0 0 0 16 23v17h-16v16h16v39c-20-2-30-15-33-18l11-11h-32v32l10-10a68 68 0 0 0 104 0l10 10v-32h-32l11 11c-3 3-13 16-33 18v-39h16v-16h-16v-17a24 24 0 0 0 16-23a24 24 0 0 0-24-24m0 16a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class CircleFlagsUsRiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsScIcon],svg[circle-flags-us-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsSc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsSc0)"><svg:path fill="#0052b4" d="M0 0h512v512H0Z"></svg:path><svg:circle cx="118" cy="118" r="54" fill="#eee"></svg:circle><svg:circle cx="104.5" cy="104.5" r="38.5" fill="#0052b4"></svg:circle><svg:path fill="#eee" d="m238 439l12-221h24l12 221z"></svg:path><svg:path fill="#eee" d="M292 220c26-11 36-19 76-18c-34-15-65-20-91 0c8-20 15-40 42-59c-46 8-61 24-65 51c-11-27-38-29-76-29c42 23 33 20 54 44c-27-4-58 8-88 42c41-22 61-15 88-11a76 76 0 0 0-35 72c30-38 26-27 65-61c15 34 34 42 41 73c8-31 0-65-15-77c30 12 57 20 72 42c-7-53-42-60-68-69"></svg:path></svg:g>`,
})
export class CircleFlagsUsScIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsTnIcon],svg[circle-flags-us-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsTn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsTn0)"><svg:path fill="#0052b4" d="M448 0h64v512h-64l-16-256Z"></svg:path><svg:path fill="#eee" d="M416 0h32v512h-32l-16-256Z"></svg:path><svg:path fill="#d80027" d="M0 0h416v512H0z"></svg:path><svg:circle cx="208" cy="256" r="160" fill="#eee"></svg:circle><svg:circle cx="208" cy="256" r="128" fill="#0052b4"></svg:circle><svg:path fill="#eee" d="m145 284l60 83V265l-60 83l98-32zm15-128l-22 100l76-68l-102 11l89 51zm147 49l-42 93l-21-100l75 69l-102-11z"></svg:path></svg:g>`,
})
export class CircleFlagsUsTnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsTxIcon],svg[circle-flags-us-tx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsTx0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsTx0)"><svg:path fill="#0052b4" d="M0 0h167l64 256l-64 256H0Z"></svg:path><svg:path fill="#eee" d="m43.5 317l104-75h-128l104 75l-40-122zM167 0h345v256l-173 64l-172-64Z"></svg:path><svg:path fill="#d80027" d="M167 256h345v256H167z"></svg:path></svg:g>`,
})
export class CircleFlagsUsTxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsUmIcon],svg[circle-flags-us-um-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsUm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsUm0)"><svg:path fill="#eee" d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"></svg:path><svg:path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h256v256H0Z"></svg:path><svg:path fill="#eee" d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsUmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsViIcon],svg[circle-flags-us-vi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsVi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsVi0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M299.5 178.8a43.5 43.5 0 1 0-87 0H117a44 44 0 0 0 44.2 42.9h-1.4a42.8 42.8 0 0 0 42.8 42.8l53.5 42l53.5-42a42.8 42.8 0 0 0 42.8-42.8H351a44 44 0 0 0 44.2-42.9h-95.6z"></svg:path><svg:path d="m236.9 302.3l-27 60.9a122 122 0 0 0 46.1 9a122 122 0 0 0 46-9l-26.9-60.9H237z"></svg:path></svg:g><svg:path fill="#eee" d="m255.3 214l-55 21.5v39.7a49.1 49.1 0 0 0 22.3 40l11.3-2.3l11 14.3a98 98 0 0 0 11.1 3.6s4.6-1.1 11.1-3.6l9.4-14.1l13 2.1a49.2 49.2 0 0 0 22.2-40.1v-39.6z"></svg:path><svg:path fill="#338af3" d="M62 257.8L92.3 342l29.8-84.2h22.7l-43.4 111.3H83L39.3 257.8h22.8zm349.8 111.3V257.8h21.7v111.3z"></svg:path><svg:path fill="#d80027" d="M222.6 224.4v90.8a96 96 0 0 0 22.3 12V224.3zm66.8 0v90.8a98 98 0 0 1-22.3 12V224.3z"></svg:path><svg:path fill="#0052b4" d="M200.3 200.2h111.4v35.3H200.3z"></svg:path></svg:g>`,
})
export class CircleFlagsUsViIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsWaIcon],svg[circle-flags-us-wa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsWa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsWa0)"><svg:path fill="#6da544" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="156" fill="#333"></svg:circle><svg:circle cx="256" cy="256" r="144" fill="#ffda44"></svg:circle><svg:path fill="#338af3" d="M256 144a112 112 0 0 0-112 112a112 112 0 0 0 45 89h134a112 112 0 0 0 45-89a112 112 0 0 0-112-112"></svg:path><svg:path fill="#ffd6bb" d="M256 189a46 46 0 0 0-47 46v23c0 25 21 52 47 52s47-27 47-52v-23c0-26-21-46-47-46"></svg:path><svg:path fill="#eee" d="M321 243a13 13 0 0 0-10-18a13 13 0 0 0-11-18a47 47 0 0 0-87 0a13 13 0 0 0-12 18a13 13 0 0 0-9 18a13 13 0 0 0 1 25c0 5 4 9 9 10v1a12 12 0 0 0 18 10a58 58 0 0 1-3-5v-50c0-21 18-34 39-34c22 0 40 13 40 34v50l-4 5a12 12 0 0 0 19-11c4-1 8-5 9-10a13 13 0 0 0 1-25"></svg:path><svg:path fill="#acabb1" d="M274 193a3 3 0 0 0-3 3v6l6 3v-9a3 3 0 0 0-3-3m-18-2a3 3 0 0 0-3 3v6a52 52 0 0 1 6 0v-6a3 3 0 0 0-3-3m-18 2a3 3 0 0 0-3 3v9a41 41 0 0 1 6-3v-6a3 3 0 0 0-3-3"></svg:path><svg:rect width="34" height="6" x="239" y="281" fill="#333" rx="3" ry="3"></svg:rect><svg:rect width="6" height="12" x="231" y="250" fill="#333" rx="3" ry="3"></svg:rect><svg:rect width="6" height="12" x="275" y="250" fill="#333" rx="3" ry="3"></svg:rect><svg:path fill="none" d="M225 245s3-3 9-3s8 3 8 3m28 0s3-3 9-3s8 3 8 3"></svg:path><svg:path fill="#eee" d="M239 303c-3 0-6 3-6 6v2h-2c-3 0-6 3-6 6v47a112 112 0 0 0 31 4a112 112 0 0 0 31-4v-47c0-3-3-6-6-6h-2v-2c0-3-3-6-6-6z"></svg:path><svg:path fill="#333" d="m225 318l-30 9c-3 0-6 3-6 6v12a112 112 0 0 0 52 22v-43c0-3-3-6-6-6zm52 0c-3 0-6 3-6 6v43a112 112 0 0 0 52-22v-12c0-3-3-6-6-6l-30-9z"></svg:path><svg:path fill="none" d="M258 597h344v341H258z"></svg:path><svg:path fill="#ff9811" d="m256 250l8 20h-16z"></svg:path></svg:g>`,
})
export class CircleFlagsUsWaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsWiIcon],svg[circle-flags-us-wi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsWi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsWi0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="M167 156v111c0 68 89 89 89 89s89-21 89-89V156Z"></svg:path><svg:path fill="#eee" d="M112 64h288v48H112Zm64 336h160v48H176Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsWiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsWyIcon],svg[circle-flags-us-wy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsWy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsWy0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="256" fill="#d80027"></svg:circle><svg:circle cx="256" cy="256" r="224" fill="#eee"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="#0052b4"></svg:circle><svg:path fill="#eee" d="M163 128c-3 0-6 2-7 5c0 3 0 6 3 7v1a15 15 0 0 1 7 13a18 18 0 0 0-19 6c-2 2-4 3-7 3h-9c-11 0-20 9-20 20v14c0 9 7 16 15 16v12c0 3-2 7-4 9c-4 4-6 9-6 14c0 10 6 17 15 20l14 23c3 4 9 4 12 0l3-5l2-1l8 14v14c0 12 7 22 16 27v35c0 4 3 8 8 8h14l4-1l2 1h15c2 0 4-2 4-4v-45c5-5 8-12 8-21h54l-18 60c-1 5 2 10 8 10h13c4 0 7-2 8-6l12-44c7 5 14 9 23 10v27c0 8 6 14 13 14h14c7 0 13-6 13-14V267c4-2 7-6 10-9v34a20 20 0 0 0 10 37V229c0-20-12-39-30-46c-40-17-84-30-118-45c-7-3-15-4-22-5c-15 0-29 5-39 14c-6-10-16-18-29-19"></svg:path><svg:circle cx="256" cy="230" r="64" fill="#0052b4"></svg:circle><svg:circle cx="256" cy="230" r="48" fill="#eee"></svg:circle></svg:g>`,
})
export class CircleFlagsUsWyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUyIcon],svg[circle-flags-uy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUy0)"><svg:path fill="#338af3" d="M0 256L256 0h256v55.7l-20.7 34.5l20.7 32.2v66.8l-21.2 32.7L512 256v66.8l-24 31.7l24 35.1v66.7l-259.1 28.3L0 456.3v-66.7l27.1-33.3L0 322.8z"></svg:path><svg:path fill="#eee" d="M256 256h256v-66.8H236.9zm-19.1-133.6H512V55.7H236.9zM512 512v-55.7H0V512zM0 389.6h512v-66.8H0z"></svg:path><svg:path fill="#eee" d="M0 0h256v256H0z"></svg:path><svg:path fill="#ffda44" d="m222.6 149.8l-31.3 14.7l16.7 30.3l-34-6.5l-4.3 34.3l-23.6-25.2l-23.7 25.2l-4.3-34.3l-33.9 6.5l16.6-30.3l-31.2-14.7l31.2-14.7l-16.6-30.3l34 6.5l4.2-34.3l23.7 25.3L169.7 77l4.3 34.3l34-6.5l-16.7 30.3z"></svg:path></svg:g>`,
})
export class CircleFlagsUyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUzIcon],svg[circle-flags-uz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUz0)"><svg:path fill="#d80027" d="m0 178l254.2-22L512 178v22.3l-40.2 54.1l40.2 57.3V334l-254 23.4L0 334v-22.3l36.7-59.4l-36.7-52z"></svg:path><svg:path fill="#338af3" d="M0 0h512v178H0z"></svg:path><svg:path fill="#eee" d="M0 200.3h512v111.4H0z"></svg:path><svg:path fill="#6da544" d="M0 334h512v178H0z"></svg:path><svg:path fill="#eee" d="M117.2 105.7a50 50 0 0 1 39.3-48.9a50.2 50.2 0 0 0-10.7-1.1a50 50 0 1 0 10.7 99c-22.5-5-39.3-25-39.3-49m69 22.8l3.3 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.7 6.4l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.4 10.4l-8.8-6.4l-9 6.4l3.5-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.8 6.4l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.8 6.4l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.8 6.4l3.4-10.4l-8.8-6.5h11zm-105-36.4l3.4 10.4h11l-9 6.5l3.4 10.4l-8.8-6.5l-9 6.5l3.5-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.5l-8.8 6.5l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.5l-8.8 6.5l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.5l-8.8 6.5l3.4-10.4l-8.8-6.5h11zm-70-36.4l3.4 10.4h11l-9 6.4l3.6 10.5l-9-6.5l-8.8 6.5l3.4-10.5l-9-6.4h11zm35 0l3.4 10.4h11l-9 6.4l3.6 10.5l-9-6.5l-8.8 6.5l3.4-10.5l-9-6.4h11zm35 0l3.4 10.4h11l-9 6.4l3.6 10.5l-9-6.5l-8.8 6.5l3.4-10.5l-8.8-6.4h11z"></svg:path></svg:g>`,
})
export class CircleFlagsUzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVaIcon],svg[circle-flags-va-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVa0)"><svg:path fill="#ffda44" d="M0 0h256l51.7 254.7L256 512H0z"></svg:path><svg:path fill="#eee" d="M256 0h256v512H256z"></svg:path><svg:path fill="#acabb1" d="m354 222.8l48.1 63.6A33.4 33.4 0 1 0 420 273l-75-99.2l-17.7 13.4l-26.7 20.2l26.9 35.5l26.6-20.1zm69.3 73.1a11.1 11.1 0 1 1 13.4 17.8a11.1 11.1 0 0 1-13.4-17.8"></svg:path><svg:path fill="#ffda44" d="m436.6 242.9l26.8-35.5l-26.6-20.2l-17.8-13.4l-75 99.2a33.4 33.4 0 1 0 17.8 13.4l48-63.6l26.8 20zm-93.8 68.6a11.1 11.1 0 1 1-17.8-13.4a11.1 11.1 0 0 1 17.8 13.4"></svg:path></svg:g>`,
})
export class CircleFlagsVaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVcIcon],svg[circle-flags-vc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVc0)"><svg:path fill="#ffda44" d="M378.5 0H133.7l-22.3 256l22.3 256h244.8l22.3-256z"></svg:path><svg:path fill="#338af3" d="M133.7 512V0H0v512z"></svg:path><svg:path fill="#6da544" d="M512 0H378.5v512H512zM200.4 322.8L156 256l44.5-66.8l44.7 66.8zm111.4 0L267.1 256l44.6-66.8l44.5 66.8zm-55.7 89L211.6 345l44.5-66.7l44.5 66.7z"></svg:path></svg:g>`,
})
export class CircleFlagsVcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVeIcon],svg[circle-flags-ve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVe0)"><svg:path fill="#0052b4" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#ffda44" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#d80027" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#eee" d="M443.4 306.4L429.8 317l6 16.1l-14.3-9.6l-13.5 10.7l4.7-16.5l-14.2-9.6l17.1-.6l4.7-16.5l6 16.1zm-34.7-60l-9 14.5l11 13.2L394 270l-9 14.6l-1.3-17l-16.6-4.3l15.9-6.4l-1.2-17l11 13zm-53-44.5l-3.6 16.8l14.9 8.4l-17 1.8l-3.6 16.8l-7-15.7l-17 1.8l12.7-11.5l-7-15.6l14.8 8.6zm-65-23.7l2.3 17l17 3l-15.5 7.5l2.4 17l-12-12.4l-15.4 7.6l8-15.2l-11.8-12.3l16.9 3zm-69.3 0l8 15.1l17-3l-12 12.4l8 15.2l-15.4-7.6l-11.9 12.4l2.4-17l-15.4-7.5l16.9-3zm-65 23.7l12.7 11.5l14.8-8.6l-7 15.7l12.8 11.4l-17-1.8l-7 15.7l-3.7-16.7l-17-1.8l14.8-8.5zm-53.1 44.5l15.9 6.4l11-13l-1.2 17l16 6.4l-16.7 4.2l-1.2 17L118 270l-16.7 4.2l11-13.2zm-34.7 60l17.2.5l5.9-16l4.7 16.4l17.1.6l-14.2 9.6l4.7 16.6l-13.5-10.6l-14.2 9.6l5.9-16z"></svg:path></svg:g>`,
})
export class CircleFlagsVeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVgIcon],svg[circle-flags-vg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVg0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#ffda44" d="m367.3 256l-69.2 69.2a77.9 77.9 0 0 0 138.4 0z"></svg:path><svg:path fill="#6da544" d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"></svg:path><svg:path fill="#ffda44" d="M311.7 155.8h22.2v22.3h-22.2zm0 50.1h22.2v22.3h-22.2zm0 50.1h22.2v22.3h-22.2zm89-100.2H423v22.3h-22.3zm0 50.1H423v22.3h-22.3zm0 50.1H423v22.3h-22.3z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M350.6 189.2H384v89h-33.4z"></svg:path><svg:circle cx="367.3" cy="189.2" r="16.7" fill="#a2001d"></svg:circle></svg:g>`,
})
export class CircleFlagsVgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsViIcon],svg[circle-flags-vi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVi0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M299.5 178.8a43.5 43.5 0 1 0-87 0H117a44 44 0 0 0 44.2 42.9h-1.4a42.8 42.8 0 0 0 42.8 42.8l53.5 42l53.5-42a42.8 42.8 0 0 0 42.8-42.8H351a44 44 0 0 0 44.2-42.9h-95.6z"></svg:path><svg:path d="m236.9 302.3l-27 60.9a122 122 0 0 0 46.1 9a122 122 0 0 0 46-9l-26.9-60.9H237z"></svg:path></svg:g><svg:path fill="#eee" d="m255.3 214l-55 21.5v39.7a49.1 49.1 0 0 0 22.3 40l11.3-2.3l11 14.3a98 98 0 0 0 11.1 3.6s4.6-1.1 11.1-3.6l9.4-14.1l13 2.1a49.2 49.2 0 0 0 22.2-40.1v-39.6z"></svg:path><svg:path fill="#338af3" d="M62 257.8L92.3 342l29.8-84.2h22.7l-43.4 111.3H83L39.3 257.8h22.8zm349.8 111.3V257.8h21.7v111.3z"></svg:path><svg:path fill="#d80027" d="M222.6 224.4v90.8a96 96 0 0 0 22.3 12V224.3zm66.8 0v90.8a98 98 0 0 1-22.3 12V224.3z"></svg:path><svg:path fill="#0052b4" d="M200.3 200.2h111.4v35.3H200.3z"></svg:path></svg:g>`,
})
export class CircleFlagsViIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVnIcon],svg[circle-flags-vn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVn0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m256 133.6l27.6 85H373L300.7 271l27.6 85l-72.3-52.5l-72.3 52.6l27.6-85l-72.3-52.6h89.4z"></svg:path></svg:g>`,
})
export class CircleFlagsVnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVoIcon],svg[circle-flags-vo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVo0)"><svg:path fill="#4a1f63" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="M0 0h304v304H0Z"></svg:path><svg:path fill="#4a1f63" d="M176 72a104 104 0 1 0 0 208a104 104 0 0 0 0-208m-25 20c-8 8-16 18-22 31l-17-7c10-11 24-20 39-24m50 0c15 4 29 13 39 24l-17 7c-6-13-14-23-22-31m-17 5c7 7 16 17 24 30l-24 4zm-16 0v34l-24-4c8-13 17-23 24-30m82 31c8 12 12 26 14 40h-28c-1-11-3-21-7-31zm-148 0l21 9c-4 10-6 20-7 31H88c2-14 6-28 14-40m112 14c3 8 5 17 6 26h-36v-21zm-76 0l30 5v21h-36c1-9 3-18 6-26m-50 42h28c1 11 3 21 7 31l-21 9c-8-12-12-25-14-40m44 0h36v21l-30 5c-3-8-5-17-6-26m52 0h36c-1 9-3 18-6 26l-30-5zm52 0h28c-2 15-6 28-14 40l-21-9c4-10 6-20 7-31m-68 37v34c-7-6-16-17-24-30zm16 0l24 4c-8 13-17 24-24 30zm39 8c7 3 13 5 17 8a89 89 0 0 1-39 23c8-8 16-18 22-31m-94 0c6 13 14 23 22 31c-15-4-29-12-39-23z"></svg:path></svg:g>`,
})
export class CircleFlagsVoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVuIcon],svg[circle-flags-vu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVu0)"><svg:path fill="#d80027" d="M512 222.6V0H0l215.6 239.4z"></svg:path><svg:path fill="#6da544" d="M512 289.4V512H0l216.5-240z"></svg:path><svg:path fill="#333" d="m0 0l222.6 222.6H512v22.2l-10.9 11.8L512 267v22.4H222.6L0 512v-31.5l8-23l-8-8.6V63l9.5-10.4l-9.5-21z"></svg:path><svg:g fill="#ffda44"><svg:path d="M512 244.8H213.2L0 31.7V63l192.8 193L0 449v31.5L213.2 267H512z"></svg:path><svg:path d="M62.2 310.6V289a38.8 38.8 0 0 0 38.8-38.8A27.5 27.5 0 0 0 73.5 223a18.7 18.7 0 0 0-18.7 18.7a12 12 0 0 0 12 12c3.7 0 6.8-3 6.8-6.8H95A28.2 28.2 0 0 1 66.8 275c-18.4 0-33.4-15-33.4-33.4c0-22.2 18-40.2 40-40.2a49 49 0 0 1 49 49c0 33.1-27 60.2-60.2 60.2"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsVuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsWfIcon],svg[circle-flags-wf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsWf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsWf0)"><svg:path fill="#d80027" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0h256v256H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h75v224H0Z"></svg:path><svg:path fill="#d80027" d="M149 0h75v224h-75z"></svg:path><svg:path fill="#eee" d="m384 232l-72-72h144zm-24 24l-72-72v144zm24 24l-72 72h144zm24-24l72-72v144z"></svg:path></svg:g>`,
})
export class CircleFlagsWfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsWiphalaIcon],svg[circle-flags-wiphala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsWiphala0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsWiphala0)"><svg:path fill="#eee" d="M0 73V0h73l439 439v73h-73Z"></svg:path><svg:path fill="#ffda44" d="M73 0v73h73v73h73v73h74v74h73v73h73v73h73v-73l-73-73l-73-73v-1l-73-73l-74-73l-73-73z"></svg:path><svg:path fill="#ff9811" d="M146 0v73h73v73h74v73h73v74h73v73h73v-73l-73-74L293 73L219 0z"></svg:path><svg:path fill="#d80027" d="M219 0v73h74v73h73v73h73v74h73v-74l-73-73l-73-73l-73-73z"></svg:path><svg:path fill="#4a1f63" d="M293 0v73h73v73h73v73h73v-73l-73-73l-73-73z"></svg:path><svg:path fill="#0052b4" d="M366 0v73h73v73h73V73L439 0z"></svg:path><svg:path fill="#6da544" d="M439 0v73h73V0Zm0 512v-73h-74v-73h-73v-73h-73v-74h-73v-73H73V73H0v73l73 73l73 73v1l73 73l73 73l73 73z"></svg:path><svg:path fill="#0052b4" d="M366 512v-73h-74v-73h-73v-73h-73v-74H73v-73H0v73l73 74l146 146l73 73z"></svg:path><svg:path fill="#4a1f63" d="M292 512v-73h-73v-73h-73v-73H73v-74H0v74l73 73l73 73l73 73z"></svg:path><svg:path fill="#d80027" d="M219 512v-73h-73v-73H73v-74H0v74l73 73l73 73z"></svg:path><svg:path fill="#ff9811" d="M146 512v-73H73v-73H0v73l73 73z"></svg:path><svg:path fill="#ffda44" d="M73 512v-73H0v73z"></svg:path></svg:g>`,
})
export class CircleFlagsWiphalaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsWsIcon],svg[circle-flags-ws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsWs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsWs0)"><svg:path fill="#d80027" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h256v256H0z"></svg:path><svg:path fill="#eee" d="m205 167l4.2 12.7h13.4l-10.8 7.9l4.1 12.7l-10.8-7.8l-10.9 7.8l4.1-12.7l-10.8-7.9h13.4zM137.8 66.8l7 21.2H167l-18.1 13.2l6.9 21.2l-18.1-13.1l-18 13.1l6.8-21.2l-18-13.2h22.3zM204.5 89l6.9 21.3h22.3l-18 13.1l6.9 21.3l-18.1-13.1l-18.1 13.1l7-21.3l-18.2-13.1h22.4zm-52.8 89l6.9 21.3H181l-18.1 13.2l6.9 21.2l-18.1-13.1l-18 13.1l6.8-21.2l-18-13.2h22.3zm-58.5-55.6l6.9 21.3h22.3l-18 13.1l6.9 21.3l-18.1-13.2L75 178.1l6.9-21.3l-18-13.1h22.3z"></svg:path></svg:g>`,
})
export class CircleFlagsWsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsXhIcon],svg[circle-flags-xh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsXh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsXh0)"><svg:path fill="#eee" d="m0 0l192 256L0 512h47l465-189v-34l-32-33l32-33v-34L47 0Z"></svg:path><svg:path fill="#333" d="M0 142v228l140-114z"></svg:path><svg:path fill="#ffda44" d="M192 256L0 95v47l114 114L0 370v47z"></svg:path><svg:path fill="#6da544" d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"></svg:path><svg:path fill="#d80027" d="M512 0H47l189 189h276z"></svg:path><svg:path fill="#0052b4" d="M512 512H47l189-189h276z"></svg:path></svg:g>`,
})
export class CircleFlagsXhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsXkIcon],svg[circle-flags-xk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsXk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsXk0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m112.4 155.8l5.6 17h17.9l-14.5 10.5l5.5 17l-14.5-10.5L98 200.3l5.5-17L89 172.8h18zm55.7-16.7l5.5 17h18L177 166.6l5.6 17l-14.5-10.5l-14.5 10.6l5.6-17l-14.5-10.6h17.9zm55.7-16.7l5.5 17h17.9L232.7 150l5.5 17l-14.4-10.6l-14.5 10.6l5.5-17l-14.5-10.6h18zm175.8 33.4l-5.6 17h-17.9l14.5 10.5l-5.5 17l14.5-10.5l14.4 10.5l-5.5-17l14.5-10.5h-18zm-55.7-16.7l-5.5 17h-18l14.6 10.5l-5.6 17l14.5-10.5l14.5 10.6l-5.6-17l14.5-10.6h-17.9zm-55.7-16.7l-5.5 17h-17.9l14.5 10.6l-5.5 17l14.4-10.6l14.5 10.6l-5.5-17l14.5-10.6h-18z"></svg:path><svg:path fill="#ffda44" d="M300.5 267.1L256 211.5l-22.3 11.1V245l-33.4 22h-22.2v29a89 89 0 0 1 55.6 82.5H256v-22.2l22.3-22.3l22.2 22.3l22.3-22.3v-22.2l22.2-33.4l-44.5-11.2z"></svg:path></svg:g>`,
})
export class CircleFlagsXkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsXxIcon],svg[circle-flags-xx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsXx0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsXx0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:circle cx="253" cy="380" r="32" fill="#acabb1"></svg:circle><svg:path fill="#acabb1" d="M322.4 135.5c-15.6-13.6-37.4-20.3-65.5-20.3c-27.9 0-49.9 7.2-66 21.4a74.9 74.9 0 0 0-24.3 55.4h-.2v12.8H224l.1-9a35.2 35.2 0 0 1 9.3-24.8c5.8-6.1 13.7-9 23.5-9c20.7 0 31 11 31 33.4c0 7.4-2 14.5-6 21.1a124.2 124.2 0 0 1-23.9 26a90.4 90.4 0 0 0-24.8 32.3c-4.5 11-6.8 26.7-6.8 45.2h51l.8-13.1a54 54 0 0 1 17.3-33.9l16.2-15.2a131.4 131.4 0 0 0 26.4-33.2a69.5 69.5 0 0 0 7.6-31.8c-.1-24.7-7.8-43.7-23.3-57.3"></svg:path></svg:g>`,
})
export class CircleFlagsXxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYeIcon],svg[circle-flags-ye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYe0)"><svg:path fill="#eee" d="m0 167l253.8-19.3L512 167v178l-254.9 32.3L0 345z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0z"></svg:path><svg:path fill="#333" d="M0 345h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsYeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYiIcon],svg[circle-flags-yi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYi0)"><svg:path fill="#eee" d="M0 0h512v56l-25 32l25 34v268l-26 36l26 30v56H0v-56l25-34l-25-32V122l27-33L0 56z"></svg:path><svg:path fill="#333" d="M0 390v66h512v-66z"></svg:path><svg:circle cx="256" cy="186" r="104" fill="#333"></svg:circle><svg:circle cx="256" cy="186" r="84" fill="#eee"></svg:circle><svg:circle cx="256" cy="186" r="64" fill="#333"></svg:circle><svg:circle cx="256" cy="186" r="44" fill="#eee"></svg:circle><svg:path fill="#333" d="m246 319l-49 11v14h118v-14l-49-11z"></svg:path><svg:path fill="#eee" d="M148 78h216v108H148z"></svg:path><svg:path fill="#333" d="M246 180h20v150h-20zm87-8h34l-7 15h-20zm-40 0h34l-7 15h-20zm-108 0h34l-7 15h-20zm-40 0h34l-7 15h-20z"></svg:path><svg:path fill="#333" d="M239 172h34l-7 15h-20zM0 56v66h512V56z"></svg:path></svg:g>`,
})
export class CircleFlagsYiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYoIcon],svg[circle-flags-yo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYo0)"><svg:path fill="#eee" d="M384 0h128v128L352 352L128 512H0V384l160-224Z"></svg:path><svg:path fill="#338af3" d="M0 384L384 0H0Z"></svg:path><svg:path fill="#6da544" d="M512 128L128 512h384z"></svg:path><svg:path fill="#ffda44" d="m432 234l-6 11h-13l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11h-13zm-14-68l-6 11h-13l6 11l-6 10h13l6 12l6-12h13l-6-10l6-11h-12zm-37-56l-7 11h-12l6 11l-6 10h12l7 12l6-12h13l-7-10l7-11h-13zm-56-38l-7 11h-12l6 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm-69-14l-6 11h-13l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11h-13zm-68 14l-7 11h-13l7 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm-56 38l-7 11h-13l7 11l-7 10h13l7 12l6-12h13l-7-10l7-11h-13zm-38 56l-7 11H75l6 11l-6 10h12l7 12l6-12h13l-7-10l7-11h-13zm-14 68l-6 11H61l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11H86Zm14 69l-7 11H75l6 11l-6 10h12l7 11l6-11h13l-7-11l7-10h-13zm38 56l-7 11h-13l7 11l-7 10h13l7 11l6-11h13l-7-11l7-10h-13zm56 37l-7 11h-13l7 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm68 14l-6 11h-13l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11h-13zm69-14l-7 11h-12l6 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm56-37l-7 11h-12l6 11l-6 10h12l7 11l6-11h13l-7-11l7-10h-13zm37-56l-6 11h-13l6 11l-6 10h13l6 11l6-11h13l-6-11l6-10h-13zM256 165c-3 0-6 3-6 6v20a38 28 0 0 0-32 28a38 28 0 0 0 1 5l3 23a34 54 0 0 0 17 47v22h34v-22a34 54 0 0 0 17-47l3-23a38 28 0 0 0 1-5a38 28 0 0 0-32-28v-20c0-3-3-6-6-6"></svg:path><svg:path fill="#d80027" d="M199 199a80 80 0 1 0 114 0l-17 17a56 56 0 0 1 16 40a56 56 0 0 1-56 56a56 56 0 0 1-56-56a56 56 0 0 1 16-40z"></svg:path></svg:g>`,
})
export class CircleFlagsYoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYorubalandIcon],svg[circle-flags-yorubaland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYorubaland0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYorubaland0)"><svg:path fill="#eee" d="M384 0h128v128L352 352L128 512H0V384l160-224Z"></svg:path><svg:path fill="#338af3" d="M0 384L384 0H0Z"></svg:path><svg:path fill="#6da544" d="M512 128L128 512h384z"></svg:path><svg:path fill="#ffda44" d="m432 234l-6 11h-13l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11h-13zm-14-68l-6 11h-13l6 11l-6 10h13l6 12l6-12h13l-6-10l6-11h-12zm-37-56l-7 11h-12l6 11l-6 10h12l7 12l6-12h13l-7-10l7-11h-13zm-56-38l-7 11h-12l6 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm-69-14l-6 11h-13l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11h-13zm-68 14l-7 11h-13l7 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm-56 38l-7 11h-13l7 11l-7 10h13l7 12l6-12h13l-7-10l7-11h-13zm-38 56l-7 11H75l6 11l-6 10h12l7 12l6-12h13l-7-10l7-11h-13zm-14 68l-6 11H61l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11H86Zm14 69l-7 11H75l6 11l-6 10h12l7 11l6-11h13l-7-11l7-10h-13zm38 56l-7 11h-13l7 11l-7 10h13l7 11l6-11h13l-7-11l7-10h-13zm56 37l-7 11h-13l7 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm68 14l-6 11h-13l6 11l-6 11h13l6 11l6-11h13l-6-11l6-11h-13zm69-14l-7 11h-12l6 11l-6 11h12l7 11l6-11h13l-7-11l7-11h-13zm56-37l-7 11h-12l6 11l-6 10h12l7 11l6-11h13l-7-11l7-10h-13zm37-56l-6 11h-13l6 11l-6 10h13l6 11l6-11h13l-6-11l6-10h-13zM256 165c-3 0-6 3-6 6v20a38 28 0 0 0-32 28a38 28 0 0 0 1 5l3 23a34 54 0 0 0 17 47v22h34v-22a34 54 0 0 0 17-47l3-23a38 28 0 0 0 1-5a38 28 0 0 0-32-28v-20c0-3-3-6-6-6"></svg:path><svg:path fill="#d80027" d="M199 199a80 80 0 1 0 114 0l-17 17a56 56 0 0 1 16 40a56 56 0 0 1-56 56a56 56 0 0 1-56-56a56 56 0 0 1 16-40z"></svg:path></svg:g>`,
})
export class CircleFlagsYorubalandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYtIcon],svg[circle-flags-yt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYt0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYt0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#acabb1" d="M113 139c-4 0-11 2-23 8a59 59 0 0 0-13 9c-28 27-20 68-11 79c3 4 16 23 32 30c22 8 36 28 37 51c0 24-15 44-34 46h-4c-19 0-36-19-37-43v2c1 29 20 52 43 52s44-12 55-32l5-8a43 43 0 0 0 4-14c4-19 6-70-47-95c-40-20-45-36-40-43a4 4 0 0 1 3-1a19 19 0 0 0 18 19a15 15 0 0 0 10-4s18 18 24 11s0-7-6-14c-5-7 0-21-11-28c-12-7-18-7-12-15a16 16 0 0 1 12-7s0-3-5-3m287 0c-5 0-5 3-5 3c5 1 9 3 12 7c5 8 0 8-12 15s-6 21-12 28c-5 7-11 7-5 14c5 7 24-11 24-11a15 15 0 0 0 10 4a19 19 0 0 0 18-19a4 4 0 0 1 2 1c6 7 1 23-40 43c-52 25-50 76-47 95l5 14a189 189 0 0 0 5 8c10 20 32 33 54 32c24 0 43-23 44-52v-2c-2 24-18 43-38 43h-4c-19-2-33-22-33-46c1-23 15-43 36-51c16-7 29-26 33-30c8-11 17-52-11-79a59 59 0 0 0-14-9c-12-6-18-8-22-8M26 199c-1 0-2 1-2 3c-2 16-1 52 33 64a2 2 0 0 0 3-1l6-8v-4c-5-7-22-31-22-44l-2-2a19 19 0 0 1-15-7zm460 0l-1 1a19 19 0 0 1-15 7l-2 2c0 13-17 37-21 44v4l5 8a2 2 0 0 0 3 1c34-12 35-48 34-64z"></svg:path><svg:path fill="#0052b4" d="M211 147a22.5 22.5 0 0 0 0 45a22.5 22.5 0 0 0 0 45l45 32l45-32a22.5 22.5 0 0 0 0-45a22.5 22.5 0 1 0-22.5-22.5a22.5 22.5 0 0 0-45 0A22.5 22.5 0 0 0 211 147"></svg:path><svg:path fill="#d80027" d="M211 327a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 211 282a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 211 237h90a22.5 22.5 0 0 1 22.5 22.5A22.5 22.5 0 0 1 301 282a22.5 22.5 0 0 1 22.5 22.5A22.5 22.5 0 0 1 301 327a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 256 327a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 211 327"></svg:path><svg:path fill="#eee" d="M232 188a25 25 0 0 0-1 5a25 25 0 0 0 25 25a25 25 0 0 0 25-25a25 25 0 0 0-1-5a25 25 0 0 1-24 19a25 25 0 0 1-24-19"></svg:path><svg:path fill="#ffda44" d="M283 254a4 4 0 0 0-4 4v8l-7-4a4 4 0 0 0-2-1a4 4 0 0 0-3 2a4 4 0 0 0 1 6l7 4l-7 3a4 4 0 0 0-1 6a4 4 0 0 0 5 1l7-3v7a4 4 0 0 0 4 4a4 4 0 0 0 4-4v-7l7 3a4 4 0 0 0 5-1a4 4 0 0 0-1-6l-7-3l7-4a4 4 0 0 0 1-6a4 4 0 0 0-3-2a4 4 0 0 0-2 1l-7 4v-8a4 4 0 0 0-4-4m-54 0a4 4 0 0 0-4 4v8l-7-4a4 4 0 0 0-2-1a4 4 0 0 0-3 2a4 4 0 0 0 1 6l7 4l-7 3a4 4 0 0 0-1 6a4 4 0 0 0 5 1l7-3v7a4 4 0 0 0 4 4a4 4 0 0 0 4-4v-7l7 3a4 4 0 0 0 5-1a4 4 0 0 0-1-6l-7-3l7-4a4 4 0 0 0 1-6a4 4 0 0 0-3-2a4 4 0 0 0-2 1l-7 4v-8a4 4 0 0 0-4-4"></svg:path></svg:g>`,
})
export class CircleFlagsYtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYuIcon],svg[circle-flags-yu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYu0)"><svg:path fill="#eee" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#d80027" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v167H0Z"></svg:path><svg:path fill="#ffda44" d="m137 413l309-222H66l309 222L256 51Z"></svg:path><svg:path fill="#d80027" d="m183 350l189-136H140l188 136l-72-221z"></svg:path></svg:g>`,
})
export class CircleFlagsYuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsYuaIcon],svg[circle-flags-yua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsYua0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsYua0)"><svg:path fill="#eee" d="M144 0h223l33 256l-33 256H144l-32-256z"></svg:path><svg:path fill="#496e2d" d="M0 0h144v512H0z"></svg:path><svg:path fill="#d80027" d="M368 0h144v512H368z"></svg:path><svg:path fill="#ffda44" d="M256 277v10h12l10-22z"></svg:path><svg:path fill="#496e2d" d="M160 242a96 96 0 0 0 192 0h-11a85 85 0 0 1-170 0zm39 17l-4 2c-2 2-2 6 1 8c15 14 34 22 54 24v17h12v-17c20-2 39-10 54-24c3-2 3-6 1-8s-6-2-8 0a78 78 0 0 1-53 21c-19 0-38-8-53-21z"></svg:path><svg:path fill="#338af3" d="M256 316c-14 0-28-5-40-13l6-9c20 13 48 13 68 0l7 9c-12 8-26 13-41 13"></svg:path><svg:path fill="#751a46" d="M256 174c22 11 12 33 11 34l-2-4c-5-11-18-18-31-18v11c6 0 11 5 11 11c-7 7-9 17-4 26l4 8l-13 23l29-7l18 18v-11l11 11l23-11l-35-21l-5-21l28 16c4 11 12 21 23 26c9-83-42-91-61-91z"></svg:path><svg:path fill="#6da544" d="M222 271c-15 0-33-12-38-40l11-2c4 23 18 31 27 31q4.5 0 6-3c0-2 0-3-6-5c-3-1-7-2-10-5c-10-12 4-24 11-30c1-1 2-2 1-3c0 0-2-2-5-2c-7 0-12-4-14-11c-2-6 2-13 8-17l5 11c-2 0-2 2-2 4c0 0 1 2 3 2c7 0 14 4 16 9c1 3 2 9-5 15c-7 7-11 12-9 15l5 1c5 2 14 5 13 17c-1 8-8 13-17 13h-1z"></svg:path><svg:path fill="#ffda44" d="m234 186l-12 11v11l18-9c3-1 3-5 1-7z"></svg:path><svg:circle cx="172" cy="275" r="8" fill="#ffda44"></svg:circle><svg:circle cx="189" cy="302" r="8" fill="#ffda44"></svg:circle><svg:circle cx="216" cy="323" r="8" fill="#ffda44"></svg:circle><svg:circle cx="297" cy="323" r="8" fill="#ffda44"></svg:circle><svg:circle cx="324" cy="302" r="8" fill="#ffda44"></svg:circle><svg:circle cx="341" cy="275" r="8" fill="#ffda44"></svg:circle><svg:rect width="34" height="22" x="239" y="299" fill="#ff9811" rx="11" ry="11"></svg:rect></svg:g>`,
})
export class CircleFlagsYuaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsZaIcon],svg[circle-flags-za-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsZa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsZa0)"><svg:path fill="#eee" d="m0 0l192 256L0 512h47l465-189v-34l-32-33l32-33v-34L47 0Z"></svg:path><svg:path fill="#333" d="M0 142v228l140-114z"></svg:path><svg:path fill="#ffda44" d="M192 256L0 95v47l114 114L0 370v47z"></svg:path><svg:path fill="#6da544" d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"></svg:path><svg:path fill="#d80027" d="M512 0H47l189 189h276z"></svg:path><svg:path fill="#0052b4" d="M512 512H47l189-189h276z"></svg:path></svg:g>`,
})
export class CircleFlagsZaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsZhIcon],svg[circle-flags-zh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsZh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsZh0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m140.1 155.8l22.1 68h71.5l-57.8 42.1l22.1 68l-57.9-42l-57.9 42l22.2-68l-57.9-42.1H118zm163.4 240.7l-16.9-20.8l-25 9.7l14.5-22.5l-16.9-20.9l25.9 6.9l14.6-22.5l1.4 26.8l26 6.9l-25.1 9.6zm33.6-61l8-25.6l-21.9-15.5l26.8-.4l7.9-25.6l8.7 25.4l26.8-.3l-21.5 16l8.6 25.4l-21.9-15.5zm45.3-147.6L370.6 212l19.2 18.7l-26.5-3.8l-11.8 24l-4.6-26.4l-26.6-3.8l23.8-12.5l-4.6-26.5l19.2 18.7zm-78.2-73l-2 26.7l24.9 10.1l-26.1 6.4l-1.9 26.8l-14.1-22.8l-26.1 6.4l17.3-20.5l-14.2-22.7l24.9 10.1z"></svg:path></svg:g>`,
})
export class CircleFlagsZhIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsZmIcon],svg[circle-flags-zm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsZm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsZm0)"><svg:path fill="#496e2d" d="M0 0h512v256L256 512H0z"></svg:path><svg:path fill="#ff9811" d="M473 167h-66.7a22.3 22.3 0 0 0-44.6 0H295a23 23 0 0 0 23 22.2h-.8c0 12.3 10 22.3 22.3 22.3c0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2c12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.2"></svg:path><svg:path fill="#333" d="M341.3 256h85.4l21.1 126.3L426.7 512h-85.4l-23.5-128z"></svg:path><svg:path fill="#d80027" d="M256 256h85.3v256H256z"></svg:path><svg:path fill="#ff9811" d="M426.7 256H512v256h-85.3z"></svg:path></svg:g>`,
})
export class CircleFlagsZmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsZuIcon],svg[circle-flags-zu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsZu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsZu0)"><svg:path fill="#eee" d="m0 0l192 256L0 512h47l465-189v-34l-32-33l32-33v-34L47 0Z"></svg:path><svg:path fill="#333" d="M0 142v228l140-114z"></svg:path><svg:path fill="#ffda44" d="M192 256L0 95v47l114 114L0 370v47z"></svg:path><svg:path fill="#6da544" d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"></svg:path><svg:path fill="#d80027" d="M512 0H47l189 189h276z"></svg:path><svg:path fill="#0052b4" d="M512 512H47l189-189h276z"></svg:path></svg:g>`,
})
export class CircleFlagsZuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsZwIcon],svg[circle-flags-zw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsZw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsZw0)"><svg:path fill="#6da544" d="M31.4 0H512v512H31.4z"></svg:path><svg:path fill="#ffda44" d="M57.8 73.3H512v73.3l-65.1 110l65.1 110v73.3H57.8z"></svg:path><svg:path fill="#d80027" d="M132 146.6h380v73.3l-27 36l27 37.3v73.3H132z"></svg:path><svg:path fill="#eee" d="M0 0v512l279.8-256z"></svg:path><svg:path fill="#d80027" d="m103 189.2l16.5 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6h53.6z"></svg:path><svg:path fill="#ffda44" d="m148.5 260.2l-43.2-15.3l-3.4-31a16.7 16.7 0 1 0-32.5 7.6l-12 12.1h21.5c0 22.4-16.7 22.4-16.7 44.7l9.2 22.2h55.7l9.3-22.2a22.2 22.2 0 0 0 1.7-6.6c8-3.2 10.4-11.5 10.4-11.5"></svg:path><svg:path fill="#333" d="m31.4 0l220 220H512v73.2H250.2L31.4 512H0l256-256L0 0z"></svg:path></svg:g>`,
})
export class CircleFlagsZwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAfarIcon],svg[circle-flags-afar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAfar0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAfar0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#496e2d" d="M0 352h512v160H0Z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256L0 0z"></svg:path><svg:path fill="#ff9811" d="m345 229l-12 11l40 40l-40 40l11 11l40-40l40 40l11-11l-40-40l40-40l-11-11l-40 40z"></svg:path><svg:path fill="#d80027" d="m384 181l21 62l-54-38h66l-53 39z"></svg:path></svg:g>`,
})
export class CircleFlagsAfarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAcIcon],svg[circle-flags-ac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAc0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#6da544" d="m320 144l48-80l48 80z"></svg:path><svg:circle cx="368" cy="144" r="48" fill="#acabb1"></svg:circle><svg:path fill="#338af3" d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z"></svg:path><svg:rect width="32" height="128" x="288" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:rect width="32" height="128" x="416" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:path fill="#6da544" d="m368 160l-48 67c2 11 9 19 16 26l32-45l32 45c8-7 14-15 16-26z"></svg:path></svg:g>`,
})
export class CircleFlagsAcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAfIcon],svg[circle-flags-af-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAf0)"><svg:path fill="#d80027" d="M144.7 0h222.6l37 257.7l-37 254.3H144.7l-42.4-255.2z"></svg:path><svg:path fill="#496e2d" d="M367.3 0H512v512H367.3z"></svg:path><svg:path fill="#333" d="M0 0h144.7v512H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M256 167a89 89 0 1 0 0 178a89 89 0 0 0 0-178m0 144.7a55.7 55.7 0 1 1 0-111.4a55.7 55.7 0 0 1 0 111.4"></svg:path><svg:path d="M256 222.6c-12.3 0-22.3 10-22.3 22.3v33.4h44.6v-33.4c0-12.3-10-22.3-22.3-22.3"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsAfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAdIcon],svg[circle-flags-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAd0)"><svg:path fill="#0052b4" d="M0 0h144.7l36 254.6l-36 257.4H0z"></svg:path><svg:path fill="#d80027" d="M367.3 0H512v512H367.3l-29.7-257.3z"></svg:path><svg:path fill="#ffda44" d="M144.7 0h222.6v512H144.7z"></svg:path><svg:path fill="#d80027" d="M256 354.5V256h66.8v47.3zm-66.8-165.3H256V256h-66.8z"></svg:path><svg:path fill="#ff9811" d="M289.4 167a22.3 22.3 0 0 0-33.4-19.3a22.1 22.1 0 0 0-11.1-3c-12.3 0-22.3 10-22.3 22.3H167v111.3c0 41.4 32.9 65.4 58.7 77.8a22.1 22.1 0 0 0-3 11.2a22.3 22.3 0 0 0 33.3 19.3a22.1 22.1 0 0 0 11.1 3a22.3 22.3 0 0 0 19.2-33.5c25.8-12.4 58.7-36.4 58.7-77.8V167zm22.3 111.3c0 5.8 0 23.4-27.5 40.9a136.5 136.5 0 0 1-28.2 13.3c-7-2.4-17.8-6.7-28.2-13.3c-27.5-17.5-27.5-35.1-27.5-41v-77.9h111.4z"></svg:path></svg:g>`,
})
export class CircleFlagsAdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
