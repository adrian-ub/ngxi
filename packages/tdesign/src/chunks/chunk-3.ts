import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPersonalInformationIcon],svg[tdesign-personal-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V7.414L14.586 3zm7 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M6 19a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1h-2v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H6z"></svg:path>`,
})
export class TdesignPersonalInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPersonalInformationFilledIcon],svg[tdesign-personal-information-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.91 1H3v22h18V7.09zm.09 9.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6 19a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H6z"></svg:path>`,
})
export class TdesignPersonalInformationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPhoneLockedIcon],svg[tdesign-phone-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v10h-2V3H6v18h5v2H4zm13.5 13.5c.69 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0v.75h-1.251V23h9v-6.5zm-.751 2V21h-5v-2.5z"></svg:path>`,
})
export class TdesignPhoneLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPhoneLockedFilledIcon],svg[tdesign-phone-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1H4v22h7.5v-6H6V3h12v8.02c.709.059 1.383.24 2 .524z"></svg:path><svg:path fill="currentColor" d="M20.75 15.75v.75h1.248V23h-9v-6.5h1.252v-.75a3.25 3.25 0 0 1 6.5 0m-2 0a1.25 1.25 0 1 0-2.5 0v.75h2.5z"></svg:path>`,
})
export class TdesignPhoneLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPhoneSearchIcon],svg[tdesign-phone-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v10h-2V3H6v18h6.5v2H4zm13.25 13.5a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412z"></svg:path>`,
})
export class TdesignPhoneSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPhoneSearchFilledIcon],svg[tdesign-phone-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1H4v22h10.796a6.25 6.25 0 0 1-3.791-6H6V3h12v8.044a6.2 6.2 0 0 1 2 .592z"></svg:path><svg:path fill="currentColor" d="M22 17.25c0 .95-.278 1.833-.758 2.575l1.672 1.677l-1.416 1.412l-1.67-1.674A4.75 4.75 0 1 1 22 17.25m-2 0a2.75 2.75 0 1 0-.812 1.951l.009-.009A2.74 2.74 0 0 0 20 17.25"></svg:path>`,
})
export class TdesignPhoneSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPiIcon],svg[tdesign-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.161 3h18.258v2h-5.61a111 111 0 0 0-.414 7.741c-.024 1.49-.006 2.85.07 3.9q.058.791.15 1.264c.055.284.102.383.1.385c.64.81 2.544 1.31 4.583-.699l.712-.702l1.404 1.425l-.713.702c-2.59 2.552-5.988 2.575-7.594.465c-.262-.345-.383-.821-.456-1.194c-.082-.424-.14-.938-.181-1.503c-.082-1.133-.1-2.56-.075-4.075A113 113 0 0 1 13.801 5h-3.466c-.163 2.463-.615 5.692-1.52 8.542c-.512 1.619-1.187 3.167-2.076 4.39c-.889 1.225-2.052 2.203-3.546 2.497l-.981.193l-.387-1.962l.981-.193c.829-.163 1.601-.726 2.315-1.71c.714-.983 1.31-2.31 1.788-3.82C7.737 10.33 8.168 7.33 8.331 5H3.16zm12.553 15.29l-.015-.02z"></svg:path>`,
})
export class TdesignPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPianoIcon],svg[tdesign-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v4h18V5zm18 6h-2v5h-2v-5h-2v5h-2v-5h-2v5H9v-5H7v5H5v-5H3v8h18z"></svg:path>`,
})
export class TdesignPianoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPianoFilledIcon],svg[tdesign-piano-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm20 8h-2v5h-2v-5h-2v5h-2v-5h-2v5H9v-5H7v5H5v-5H3v8h18z"></svg:path>`,
})
export class TdesignPianoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPinIcon],svg[tdesign-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.787.693l5.523 5.522l-6.365 7.774l2.188 2.188l-5.659 5.659l-4.95-4.95L2.16 23.25L.746 21.836l6.364-6.364l-4.95-4.95l5.66-5.659l2.188 2.189zm-4.313 18.314l2.83-2.83l-2.054-2.054l6.365-7.774l-2.963-2.962l-7.779 6.358L7.82 7.692l-2.83 2.83z"></svg:path>`,
})
export class TdesignPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPinFilledIcon],svg[tdesign-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.076.981l4.949 4.95l-6.365 7.773l2.121 2.12l-5.305 5.306l-4.596-4.596l-6.718 6.718l-1.414-1.415l6.718-6.717l-4.597-4.596l5.306-5.306l2.121 2.122z"></svg:path>`,
})
export class TdesignPinFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayIcon],svg[tdesign-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 12L8.5 17.629V6.37z"></svg:path>`,
})
export class TdesignPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleIcon],svg[tdesign-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"></svg:path><svg:path fill="currentColor" d="M18.25 12L8.5 17.63V6.37z"></svg:path>`,
})
export class TdesignPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleFilledIcon],svg[tdesign-play-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M8.75 16.5l8-4.5l-8-4.5z"></svg:path>`,
})
export class TdesignPlayCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleStrokeIcon],svg[tdesign-play-circle-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m7.5-5.63L18.25 12L8.5 17.63zm2 3.465v4.33L14.25 12z"></svg:path>`,
})
export class TdesignPlayCircleStrokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleStrokeAddIcon],svg[tdesign-play-circle-stroke-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18h1v2h-1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11v1h-2v-1a9 9 0 0 0-9-9M9.5 7.131L16.803 12L9.5 16.869zm2 3.737v2.264L13.197 12zM20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class TdesignPlayCircleStrokeAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleStrokeAddFilledIcon],svg[tdesign-play-circle-stroke-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11c0 .99-.13 1.95-.376 2.863a5.5 5.5 0 0 0-7.761 7.761C13.95 22.869 12.99 23 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m4.803 11L9.5 7.13v9.737z"></svg:path><svg:path fill="currentColor" d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class TdesignPlayCircleStrokeAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayCircleStrokeFilledIcon],svg[tdesign-play-circle-stroke-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m4.75 11l-8-4.5v9z"></svg:path>`,
})
export class TdesignPlayCircleStrokeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayDemoIcon],svg[tdesign-play-demo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2h-1v14h-6.586l4 4L17 23.414l-5-5l-5 5L5.586 22l4-4H3V4H2zm3 2v12h14V4zm5 2.5l4.667 3.5L10 13.5z"></svg:path>`,
})
export class TdesignPlayDemoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayDemoFilledIcon],svg[tdesign-play-demo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v2h1v14h6.586l-4 4L7 23.414l5-5l5 5L18.414 22l-4-4H21V4h1zm-7.333 8L10 13.5v-7z"></svg:path>`,
})
export class TdesignPlayDemoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayRectangleIcon],svg[tdesign-play-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm5 1.37L17.75 12L8 17.63zm2 3.465v4.33L13.75 12z"></svg:path>`,
})
export class TdesignPlayRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayRectangleFilledIcon],svg[tdesign-play-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-6.25 9l-8 4.5v-9z"></svg:path>`,
})
export class TdesignPlayRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPlusIcon],svg[tdesign-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.5V11h4.5v2H13v4.5h-2V13H6.5v-2H11V6.5z"></svg:path>`,
})
export class TdesignPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPopsicleIcon],svg[tdesign-popsicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.151 2.95a7 7 0 0 1 9.9 9.9l-8.84 8.839l-2.828-2.829l-3.182 3.182a3 3 0 1 1-4.242-4.243l3.182-3.182l-2.829-2.828zm1.06 15.91l7.042-7.042a4.3 4.3 0 0 0-.431-.997c-.451-.757-1.287-1.619-2.915-1.94c-2.261-.447-3.547-1.706-4.245-2.879a6 6 0 0 1-.257-.477l-6.264 6.264zm.746-14.849c.079.265.21.61.423.968c.451.757 1.287 1.618 2.915 1.94c2.261.446 3.546 1.706 4.245 2.878q.056.095.107.188a5.002 5.002 0 0 0-7.69-5.974m-6.402 12.02l-3.182 3.183a1 1 0 1 0 1.414 1.414l3.182-3.182z"></svg:path>`,
})
export class TdesignPopsicleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPopsicleFilledIcon],svg[tdesign-popsicle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.835 2.35a7.001 7.001 0 0 1 10.216 9.24a7 7 0 0 0-.186-.527c-.696-1.734-2.283-3.532-5.587-4.143c-2.614-.483-3.648-1.807-4.094-2.92a5 5 0 0 1-.35-1.65m-1.75 1.668L2.313 11.79l3.18 3.18l-3.535 3.537a2.5 2.5 0 1 0 3.535 3.535l3.536-3.535l3.183 3.183l8.148-8.148l-.006-.158a5 5 0 0 0-.345-1.576c-.447-1.113-1.48-2.437-4.095-2.92c-3.304-.611-4.891-2.409-5.587-4.143q-.148-.373-.243-.726"></svg:path>`,
})
export class TdesignPopsicleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPortraitIcon],svg[tdesign-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zm-3 6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m2.665 3.769a3.5 3.5 0 1 0-5.33 0A5 5 0 0 0 7 16.5v1h2v-1a3 3 0 1 1 6 0v1h2v-1a5 5 0 0 0-2.335-4.231M4 15v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPortraitFilledIcon],svg[tdesign-portrait-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v5H2V2h7v2zm16 0v5h2V2h-7v2zM4 15v5h5v2H2v-7zm16 5v-5h2v7h-7v-2zM12 7a3 3 0 0 1 1.318 5.696A4.5 4.5 0 0 1 16.5 17v.997h-9V17c0-2.027 1.34-3.74 3.182-4.304A3 3 0 0 1 12 7"></svg:path>`,
})
export class TdesignPortraitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPoutIcon],svg[tdesign-pout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM15 14v3.133l-6.116-.765l.248-1.984l3.868.483V14z"></svg:path>`,
})
export class TdesignPoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPoutFilledIcon],svg[tdesign-pout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zm.23 5.267V14h-2v.867l-3.867-.484l-.248 1.985z"></svg:path>`,
})
export class TdesignPoutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPoweroffIcon],svg[tdesign-poweroff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v10h-2V2zm3.78 1.728l.809.589a9.5 9.5 0 1 1-11.178 0l.808-.59l1.178 1.617l-.808.59a7.5 7.5 0 1 0 8.822 0l-.808-.59z"></svg:path>`,
})
export class TdesignPoweroffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPreciseMonitorIcon],svg[tdesign-precise-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v6h-2V2zm-9 .586L9.914 8.5L8.5 9.914L2.586 4zM21.414 4L15.5 9.914L14.086 8.5L20 2.586zm-11.146 7A2 2 0 0 1 14 12a2 2 0 0 1-3.732 1H2v-2zM16 11h6v2h-6zm-6.086 4.5L4 21.414L2.586 20L8.5 14.086zm5.586-1.414L21.414 20L20 21.414L14.086 15.5zM13 16v6h-2v-6z"></svg:path>`,
})
export class TdesignPreciseMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPreviousIcon],svg[tdesign-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 4.336v15.328L9.586 12zM8.5 5v14h-2V5zm3.914 7l2.836 2.836V9.164z"></svg:path>`,
})
export class TdesignPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPreviousFilledIcon],svg[tdesign-previous-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 4.336v15.328L9.586 12zM8.5 5v14h-2V5z"></svg:path>`,
})
export class TdesignPreviousFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPrintIcon],svg[tdesign-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v5h3.5v11H19v4H5v-4H.5V7H4zm2 5h12V4H6zM2.5 9v7H5v-2h14v2h2.5V9zM17 16H7v4h10zm0-5.504h2.004V12.5H17z"></svg:path>`,
})
export class TdesignPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPrintFilledIcon],svg[tdesign-print-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v4H4zm2 15h12v5H6z"></svg:path><svg:path fill="currentColor" d="M.5 8h23v11H20v-4H4v4H.5zM20 10.5h-2v2h2z"></svg:path>`,
})
export class TdesignPrintFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPumpkinIcon],svg[tdesign-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.277 1.113l.555.832c.468.702.748 1.405.916 2.09a8.2 8.2 0 0 1 3.565 1.233c.708-.247 1.595-.297 2.434-.124c1.178.244 2.424.958 3.148 2.41c.464.93.6 2.24.563 3.55a18.7 18.7 0 0 1-.648 4.246c-.378 1.393-.924 2.752-1.633 3.787c-.686 1-1.685 1.922-3.008 1.922H15.28c-.23.218-.522.416-.902.572c-.595.244-1.364.369-2.375.369s-1.78-.125-2.375-.369a2.9 2.9 0 0 1-.902-.572H6.369c-1.268 0-2.179-1.008-2.765-1.964c-.63-1.028-1.127-2.377-1.475-3.764a20 20 0 0 1-.594-4.232c-.03-1.306.105-2.615.57-3.545c.724-1.453 1.972-2.166 3.152-2.41c.84-.173 1.729-.123 2.438.124a8.3 8.3 0 0 1 2.996-1.157a4.5 4.5 0 0 0-.523-1.056l-.555-.832zm-.286 4.975c-1.123.197-1.942.682-2.409.989c-.705 1.793-.69 4.433-.286 6.966c.207 1.3.508 2.516.828 3.493c.334 1.016.651 1.657.844 1.899l.027.034l.024.036c.053.08.135.18.369.276c.266.109.75.219 1.616.219s1.35-.11 1.616-.22c.234-.095.315-.195.369-.275l.023-.036l.028-.034c.193-.242.51-.883.843-1.9c.32-.976.621-2.193.829-3.492c.404-2.533.419-5.173-.287-6.966c-.47-.31-1.297-.799-2.432-.993q.009.436.007.845V8h-2V7c0-.317 0-.62-.01-.912m6.536.96c.649 2.216.535 4.956.16 7.31a25 25 0 0 1-.903 3.8q-.153.471-.323.9h.708c.32 0 .797-.232 1.358-1.051c.538-.785 1.008-1.912 1.353-3.18a16.7 16.7 0 0 0 .578-3.78c.035-1.216-.113-2.12-.353-2.6c-.403-.808-1.073-1.201-1.763-1.344a3 3 0 0 0-.815-.054M6.48 7.05a3 3 0 0 0-.82.054c-.693.143-1.365.537-1.767 1.343c-.24.482-.388 1.386-.36 2.606c.029 1.181.218 2.527.536 3.793c.319 1.275.753 2.412 1.239 3.204c.529.863.92 1.01 1.06 1.01h1.178a16 16 0 0 1-.323-.9a25 25 0 0 1-.903-3.801c-.376-2.354-.489-5.094.16-7.309"></svg:path>`,
})
export class TdesignPumpkinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPumpkinFilledIcon],svg[tdesign-pumpkin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.833 1.945l-.555-.832l-1.664 1.11l.555.832c.233.35.401.7.522 1.056c-2.701.46-3.098 3.018-3.257 5.515c-.116 1.828.04 3.79.339 5.612c.298 1.822.735 3.489 1.172 4.721c.603 1.706 1.211 2.041 3.06 2.041c1.967 0 2.42-.437 3.048-2.248c.436-1.26.873-2.912 1.17-4.703c.299-1.79.455-3.705.339-5.492c-.184-2.84-.759-5.23-3.813-5.522a6.5 6.5 0 0 0-.916-2.09M6.287 5.28q.055-.12.113-.237a5 5 0 0 0-1.142.101c-1.18.243-2.428.957-3.153 2.41c-.464.93-.6 2.239-.569 3.545c.032 1.344.245 2.837.594 4.232c.348 1.387.844 2.736 1.475 3.763c.586.957 1.497 1.965 2.765 1.965h.852q-.088-.219-.163-.433c-.48-1.355-.944-3.138-1.26-5.065c-.315-1.926-.49-4.044-.36-6.062c.078-1.242.225-2.841.848-4.219m10.655 15.127q-.106.311-.24.652h.468c1.322 0 2.322-.921 3.008-1.922c.709-1.035 1.255-2.394 1.633-3.787c.38-1.401.608-2.899.647-4.246c.038-1.31-.098-2.62-.562-3.55c-.724-1.452-1.97-2.166-3.148-2.41a5 5 0 0 0-1.174-.1c.706 1.377.894 3.003.984 4.383c.128 1.981-.046 4.055-.361 5.95c-.316 1.898-.78 3.66-1.255 5.03"></svg:path>`,
})
export class TdesignPumpkinFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidIcon],svg[tdesign-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 2.96l4.44 7.893l1.06-1.928L23.69 22H.29zM13.227 11L11 7.04L8.772 11zm-5.58 2L3.71 20H10v-7zM12 13v4.107L14.259 13zm.691 7H15.5v-3h-1.16zm4.809 0h2.809l-1.65-3h-1.16zm.059-5l-1.06-1.925L15.442 15z"></svg:path>`,
})
export class TdesignPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidFilledIcon],svg[tdesign-pyramid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 2.96l4.44 7.893l1.06-1.928L23.693 22H.291zM12.693 20h2.809v-3h-1.159zm4.809 0h2.809l-1.65-3H17.5zm.059-5l-1.06-1.925L15.443 15z"></svg:path>`,
})
export class TdesignPyramidFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidMayaIcon],svg[tdesign-pyramid-maya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4h2v3h1v3h1v3h1v6H2v-6h1v-3h1v-3h1V8h2V4H6zm3 2v4h5.999L15 4zm4 6h-2v11h2zm2 11h5v-2h-1v-3h-1v-3h-1v-3h-2zm-6 0V10H7v3H6v3H5v3H4v2zm2-16.002h2.004v2.004H11z"></svg:path>`,
})
export class TdesignPyramidMayaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidMayaFilledIcon],svg[tdesign-pyramid-maya-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4H7V4H6zm5 2.498v2.004h2.004V4.498zM5 10h3v13H2v-4h1v-3h1v-3h1zm9 0h-4v13h4zm5 0h-3v13h6v-4h-1v-3h-1v-3h-1z"></svg:path>`,
})
export class TdesignPyramidMayaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQrcodeIcon],svg[tdesign-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm2 2v5h5V4zm9-2h9v9h-9zm2 2v5h5V4zM5.5 5.5h2.004v2.004H5.5zm11 0h2.004v2.004H16.5zm-3.504 7.496H15V15h-2.004zm7 0H22V15h-2.004zM2 13h9v9H2zm2 2v5h5v-5zm11.996.996H18v2h2v2h2V22h-2.004v-2h-2v-2h-2zM5.5 16.5h2.004v2.004H5.5zm7.496 3.496H15V22h-2.004z"></svg:path>`,
})
export class TdesignQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuadraticIcon],svg[tdesign-quadratic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.253 3H23v2H12.747L7.882 21.418l-4.215-6.775H1v-2h3.778l2.451 3.94zM22 10v2.136a2 2 0 0 1-.726 1.542L19.07 15.5l2.204 1.822A2 2 0 0 1 22 18.864V21h-2v-2.136l-2.5-2.067l-2.5 2.067V21h-2v-2.136a2 2 0 0 1 .726-1.542L15.93 15.5l-2.204-1.822A2 2 0 0 1 13 12.136V10h2v2.136l2.5 2.067l2.5-2.067V10z"></svg:path>`,
})
export class TdesignQuadraticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireIcon],svg[tdesign-questionnaire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zM12 7.5a1 1 0 0 0-1 1v1H9v-1a3 3 0 1 1 6 0c0 .676-.172 1.246-.474 1.71a2.96 2.96 0 0 1-1.029.95a4 4 0 0 1-.494.238v.352h-2v-1c0-.424.245-.687.361-.79c.12-.105.24-.165.296-.192c.107-.05.233-.094.309-.12l.018-.007c.19-.066.36-.127.52-.218a.96.96 0 0 0 .343-.305c.072-.11.15-.294.15-.618a1 1 0 0 0-1-1m-1 5h2.004v2.004H11z"></svg:path>`,
})
export class TdesignQuestionnaireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireDoubleIcon],svg[tdesign-questionnaire-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h19v14H5.82L1 19.443zm2 2v11.557L5.18 14H18V4zm20.5.5v18.443L18.68 19.5H7.5v-2h11.82l2.18 1.557V4.5z"></svg:path><svg:path fill="currentColor" d="M10.5 6.5a1 1 0 0 0-1 1v1h-2v-1a3 3 0 0 1 6 0c0 .676-.172 1.246-.474 1.71a2.96 2.96 0 0 1-1.029.95a4 4 0 0 1-.494.238v.352h-2v-1c0-.424.245-.687.361-.79c.12-.105.24-.165.296-.192c.107-.05.233-.094.309-.12l.018-.007c.19-.066.36-.127.52-.218a.96.96 0 0 0 .343-.305c.072-.11.15-.294.15-.618a1 1 0 0 0-1-1m-1 5h2.004v2.004H9.5z"></svg:path>`,
})
export class TdesignQuestionnaireDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireDoubleFilledIcon],svg[tdesign-questionnaire-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v14H5.82L1 19.443V2zM9.5 7.5a1 1 0 1 1 2 0c0 .324-.078.508-.15.618a.96.96 0 0 1-.344.305c-.16.091-.328.152-.52.218l-.017.007c-.075.026-.202.07-.309.12a1.3 1.3 0 0 0-.296.192c-.116.103-.36.366-.36.79v1h2v-.352c.15-.061.32-.14.493-.238a2.96 2.96 0 0 0 1.029-.95c.302-.464.474-1.034.474-1.71a3 3 0 1 0-6 0v1h2zm2.004 4H9.5v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M23.5 22.943V4.5h-2v14.557L19.32 17.5H7.5v2h11.18z"></svg:path>`,
})
export class TdesignQuestionnaireDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuestionnaireFilledIcon],svg[tdesign-questionnaire-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM11 8.5a1 1 0 1 1 2 0c0 .324-.078.508-.15.618a.96.96 0 0 1-.344.305c-.16.091-.328.152-.52.218l-.017.007c-.075.026-.202.07-.309.12a1.3 1.3 0 0 0-.296.192a1.05 1.05 0 0 0-.36.79v1h2v-.352c.15-.061.32-.14.493-.238a2.96 2.96 0 0 0 1.029-.95c.302-.464.474-1.034.474-1.71a3 3 0 1 0-6 0v1h2zm2.004 4H11v2.004h2.004z"></svg:path>`,
})
export class TdesignQuestionnaireFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQueueIcon],svg[tdesign-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 2.001l.003 18.418L20 18.415V4.001l-12.999.001v-2zm-20 4h16v16H2zm2 2v12h12V8zm7 1.5V13h3.5v2H11v3.5H9V15H5.5v-2H9V9.5z"></svg:path>`,
})
export class TdesignQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQueueFilledIcon],svg[tdesign-queue-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.003 20.419L22 2L7 2.002l.001 2H20v14.413z"></svg:path><svg:path fill="currentColor" d="M18 6H2v16h16zm-3.5 9H11v3.5H9V15H5.5v-2H9V9.5h2V13h3.5z"></svg:path>`,
})
export class TdesignQueueFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuoteIcon],svg[tdesign-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M2.5 5H11v7.65L6.518 19H3.795l2.666-6H2.5zm2 2v4H9V7zM13 5h8.5v7.65L17.018 19h-2.723l2.666-6H13zm2 2v4h4.5V7z"></svg:path>`,
})
export class TdesignQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignQuoteFilledIcon],svg[tdesign-quote-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M2.5 5H11v7.65L6.518 19H3.795l2.666-6H2.5zM13 5h8.5v7.65L17.018 19h-2.723l2.666-6H13z"></svg:path>`,
})
export class TdesignQuoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadarIcon],svg[tdesign-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.055A9.001 9.001 0 0 0 12 21a9 9 0 0 0 9-9c0-1.98-.638-3.808-1.72-5.293l-.59-.809l1.617-1.177l.59.808A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1h1v9.268A2.01 2.01 0 0 1 14 12a2 2 0 1 1-3-1.732V7.612a4.502 4.502 0 0 0 1 8.888a4.5 4.5 0 0 0 3.64-7.146l-.589-.809l1.617-1.177l.589.808A6.5 6.5 0 1 1 11 5.576z"></svg:path>`,
})
export class TdesignRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio1Icon],svg[tdesign-radio-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.342 2.447L6.236 6H23v16h-1v-1v1H1V6.382L12.447.658zM21 20V8H3v12zM9 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m10-3h4v2h-4zm0 4h4v2h-4z"></svg:path>`,
})
export class TdesignRadio1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio1FilledIcon],svg[tdesign-radio-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M23 22H1V6.382L12.447.658l.895 1.79L6.236 6H23zM9 10a4 4 0 1 0 0 8a4 4 0 0 0 0-8m10 1h-4v2h4zm0 4h-4v2h4z"></svg:path>`,
})
export class TdesignRadio1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio2Icon],svg[tdesign-radio-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v16h-4v3h-2v-3H7v3H5v-3H1zm2 2v12h18V5zm12 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0M5 8h4v2H5zm0 4h4v2H5z"></svg:path>`,
})
export class TdesignRadio2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio2FilledIcon],svg[tdesign-radio-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M23 3v16h-4v3h-2v-3H7v3H5v-3H1V3zm-8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M9 8H5v2h4zm0 4H5v2h4z"></svg:path>`,
})
export class TdesignRadio2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadishIcon],svg[tdesign-radish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.39 1.954v4.243L20 2.586L21.415 4l-3.611 3.611h4.242v2h-4.5c.611.815 1.333 1.931 1.551 2.982c.64 2.6-.633 5.871-3.934 7.913c-2.744 1.698-6.857 2.548-12.508 1.675l-.723-.112l-.112-.724c-.47-3.042-.446-5.631-.06-7.803c.666-3.755 2.416-6.26 4.514-7.612C7.92 4.869 9.81 4.51 11.407 4.903c1.051.218 2.168.94 2.982 1.552v-4.5zm-1.708 7.364l-.012-.012a11 11 0 0 0-.355-.326a18 18 0 0 0-.974-.81c-.828-.638-1.717-1.184-2.35-1.31l-.024-.005l-.023-.006c-.694-.174-1.562-.129-2.455.197l2.426 2.466l-1.426 1.402L6.71 8.09c-1.227 1.035-2.336 2.739-2.883 5.3l3.088 3.117l-1.421 1.407L3.5 15.901c-.073 1.304-.02 2.77.192 4.407c4.127.536 7.16.042 9.284-.905l-2.89-2.907l1.419-1.41l3.256 3.275c2.174-1.643 2.76-3.83 2.39-5.304l-.005-.024l-.005-.023c-.127-.634-.672-1.522-1.31-2.35a18 18 0 0 0-1.137-1.33z"></svg:path>`,
})
export class TdesignRadishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRadishFilledIcon],svg[tdesign-radish-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.39 6.197V1.954h-2v4.5c-.816-.611-1.932-1.333-2.983-1.551c-1.373-.337-2.961-.12-4.426.621l3.58 3.632l-1.425 1.404l-3.838-3.894c-1.32 1.156-2.431 2.838-3.11 5.075l4.373 4.411l-1.42 1.408l-3.466-3.495c-.302 2.06-.288 4.478.144 7.28l.112.724l.724.111c5.193.803 9.088.15 11.815-1.279l-4.092-4.113l1.418-1.41l4.387 4.41c2.538-2.038 3.483-4.883 2.914-7.195c-.218-1.051-.94-2.167-1.551-2.982h4.5v-2h-4.243L21.414 4L20 2.586z"></svg:path>`,
})
export class TdesignRadishFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRainHeavyIcon],svg[tdesign-rain-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 4h-.064C8.6 4.033 6.7 5.935 6.7 8.2q0 .394.073.765l.184.956l-.95.21C4.832 10.391 4 11.391 4 12.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 15.822 2 14.309 2 12.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 8.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074C21.158 8.422 22 9.943 22 11.667c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.767-1.824V18h-2v-5.998h2v3.1l.914-.384C19.16 14.193 20 13.01 20 11.667c0-1.051-.511-1.999-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 4m1.898 6.002V20h-2v-9.998zm-4 2V18h-2v-5.998z"></svg:path>`,
})
export class TdesignRainHeavyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRainLightIcon],svg[tdesign-rain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 4h-.064C8.6 4.033 6.7 5.935 6.7 8.2q0 .394.073.765l.184.956l-.95.21C4.832 10.391 4 11.391 4 12.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 15.822 2 14.309 2 12.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 8.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074C21.158 8.422 22 9.943 22 11.667c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.775-1.843l.922-.388C19.16 14.193 20 13.01 20 11.667c0-1.051-.511-1.999-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 4m-.102 5.998h2.004v2.004h-2.004zm-4 2h2.004v2.004H6.998zm8 0h2.004v2.004h-2.004zm-4 2h2.004v2.004h-2.004zm-4 2h2.004v2.004H6.998zm8 0h2.004v2.004h-2.004zm-4 2h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignRainLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRainLightFilledIcon],svg[tdesign-rain-light-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 3h-.091C7.55 3.049 4.7 5.77 4.7 9.2q0 .132.006.262C3.125 10.158 2 11.704 2 13.533c0 1.776 1.063 3.288 2.568 4.009l.205.098h13.728l.186-.079C20.618 16.75 22 14.877 22 12.667c0-1.723-.842-3.245-2.127-4.214a5.6 5.6 0 0 0-2.653-1.075c-.655-2.066-2.387-3.655-4.534-4.186A6.6 6.6 0 0 0 11.1 3M6.998 18.998h2.004v2.004H6.998zm8 0h2.004v2.004h-2.004zm-1.996 2h-2.004v2.004h2.004z"></svg:path>`,
})
export class TdesignRainLightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRainMediumIcon],svg[tdesign-rain-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 4h-.064C8.6 4.033 6.7 5.935 6.7 8.2q0 .394.073.765l.184.956l-.95.21C4.832 10.391 4 11.391 4 12.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 15.822 2 14.309 2 12.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 8.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074C21.158 8.422 22 9.943 22 11.667c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.775-1.843l.922-.388C19.16 14.193 20 13.01 20 11.667c0-1.051-.511-1.999-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 4m1.898 6.002v2.999h-2v-2.999zm-4 2V15h-2v-2.998zm8 0V15h-2v-2.998zm-4 1.999V20h-2v-6zm-6 1.997h2.004v2.004H6.998zm8 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignRainMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRainbowIcon],svg[tdesign-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a9 9 0 0 0-9 9v1H1v-1C1 10.925 5.925 6 12 6s11 4.925 11 11v1h-2v-1a9 9 0 0 0-9-9m0 3a6 6 0 0 0-6 6v1H4v-1a8 8 0 1 1 16 0v1h-2v-1a6 6 0 0 0-6-6m0 3a3 3 0 0 0-3 3v1H7v-1a5 5 0 0 1 10 0v1h-2v-1a3 3 0 0 0-3-3"></svg:path>`,
})
export class TdesignRainbowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRectangleIcon],svg[tdesign-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4z"></svg:path>`,
})
export class TdesignRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRectangleFilledIcon],svg[tdesign-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2z"></svg:path>`,
})
export class TdesignRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRefreshIcon],svg[tdesign-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 5.835A10.49 10.49 0 0 0 12 1.5c-5.427 0-9.89 4.115-10.443 9.396l-.104.994l1.99.209l.103-.995A8.501 8.501 0 0 1 19.213 7.5H15.5v2h7v-7h-2zm.057 6.066l-.104.995A8.501 8.501 0 0 1 4.787 16.5H8.5v-2h-7v7h2v-3.335A10.49 10.49 0 0 0 12 22.5c5.426 0 9.89-4.115 10.442-9.396l.104-.994z"></svg:path>`,
})
export class TdesignRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRelationIcon],svg[tdesign-relation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.239 1.633L12 4.684l1.761-3.05l1.732 1l-2.338 4.05L19.11 17H23v2h-2.735l1.128 1.954l-1.732 1L17.956 19H6.044L4.34 21.954l-1.732-1L3.735 19H1v-2h3.89l5.955-10.316l-2.338-4.05zM12 8.684L7.199 17H16.8z"></svg:path>`,
})
export class TdesignRelationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRelativityIcon],svg[tdesign-relativity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h13v7h7v13H9v-7H2zm9 13v5h9v-9h-5v4zm2-6V4H4v9h5V9zm0 2h-2v2h2z"></svg:path>`,
})
export class TdesignRelativityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRelativityFilledIcon],svg[tdesign-relativity-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H2v13h5V7h8z"></svg:path><svg:path fill="currentColor" d="M15 9H9v6h6z"></svg:path><svg:path fill="currentColor" d="M9 17h8V9h5v13H9z"></svg:path>`,
})
export class TdesignRelativityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRemoteWaveIcon],svg[tdesign-remote-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 3a9.99 9.99 0 0 0-8.426 4.612l-.54.841l-1.684-1.079l.54-.842A11.99 11.99 0 0 1 12.004 1c4.247 0 7.978 2.207 10.11 5.532l.539.842l-1.684 1.08l-.54-.842A9.99 9.99 0 0 0 12.004 3m-.012 3.988A5 5 0 0 0 7.78 9.294l-.54.842l-1.683-1.079l.54-.842a7 7 0 0 1 5.896-3.227a7 7 0 0 1 5.897 3.227l.54.842l-1.684 1.08l-.54-.843a5 5 0 0 0-4.213-2.306M5 11h14v12h-2V13H7v10H5zm6 4h2.004v2.004H11z"></svg:path>`,
})
export class TdesignRemoteWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRemoteWaveFilledIcon],svg[tdesign-remote-wave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 3a9.99 9.99 0 0 0-8.426 4.612l-.54.841l-1.683-1.079l.54-.842A11.99 11.99 0 0 1 12.005 1c4.246 0 7.977 2.207 10.109 5.532l.54.842l-1.685 1.08l-.54-.842A9.99 9.99 0 0 0 12.005 3m-.011 3.988A5 5 0 0 0 7.78 9.294l-.54.842l-1.684-1.079l.54-.842a7 7 0 0 1 5.897-3.227a7 7 0 0 1 5.897 3.227l.54.842l-1.684 1.08l-.54-.843a5 5 0 0 0-4.213-2.306M5 11h14v12H5zm6 4v2.004h2.004V15z"></svg:path>`,
})
export class TdesignRemoteWaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRemoveIcon],svg[tdesign-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h16v2H4z"></svg:path>`,
})
export class TdesignRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignReplayIcon],svg[tdesign-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 14l-4.4-3.3l1.2-1.6l.928.696A9 9 0 1 0 12 21a9 9 0 0 0 8.252-5.4l.4-.917l1.833.801l-.4.916A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-6.197-2L9.5 16.869V7.13zM11.5 10.868v2.264L13.197 12z"></svg:path>`,
})
export class TdesignReplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignReplayFilledIcon],svg[tdesign-replay-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 14l-4.4-3.3l1.2-1.6l.928.696A9 9 0 1 0 12 21a9 9 0 0 0 8.252-5.4l.4-.917l1.833.801l-.4.916A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-6.197-2L9.5 16.869V7.13z"></svg:path>`,
})
export class TdesignReplayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRiceIcon],svg[tdesign-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C8.855 4 6.17 5.211 5.493 7.714A15 15 0 0 0 5.057 10h13.886a15 15 0 0 0-.435-2.282C17.831 5.212 15.148 4 12 4m8 8H4a8 8 0 1 0 16 0M3.048 10c.08-.886.257-1.859.514-2.809C4.605 3.341 8.564 2 12 2c3.44 0 7.397 1.343 8.439 5.196c.256.948.433 1.92.513 2.804H22v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2zm7.95-5.002h2.004v2.004h-2.004zm-3 2h2.004v2.004H7.998zm6 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignRiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRiceBallIcon],svg[tdesign-rice-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.017 2.403C9.847 1.515 10.887 1 12 1s2.153.515 2.983 1.403c1.603 1.716 3.345 4.17 4.796 6.781c1.448 2.605 2.649 5.44 3.113 7.924c.15.805.169 1.628-.108 2.432c-.28.814-.828 1.504-1.626 2.103c-.367.275-.92.457-1.443.592c-.57.147-1.276.28-2.067.39c-1.585.223-3.578.37-5.645.375h-.005c-2.068-.005-4.06-.152-5.646-.375a19 19 0 0 1-2.067-.39c-.522-.135-1.076-.317-1.443-.592c-.798-.6-1.345-1.29-1.626-2.103c-.277-.804-.258-1.627-.108-2.432c.464-2.483 1.665-5.32 3.113-7.924c1.451-2.61 3.193-5.065 4.796-6.78M12 3c-.462 0-.998.209-1.521.769c-1.47 1.572-3.12 3.885-4.51 6.387c-1.395 2.508-2.486 5.131-2.895 7.32c-.112.6-.094 1.045.033 1.412c.123.357.383.74.936 1.156q-.004-.003 0 0c.011.006.064.036.182.082q.205.08.56.173c.474.122 1.1.241 1.845.346l.37.05V13h10v7.694q.19-.023.37-.05a17 17 0 0 0 1.845-.345a5 5 0 0 0 .56-.173c.118-.046.17-.076.181-.082q.005-.003 0 0c.553-.416.814-.799.937-1.156c.127-.367.145-.812.033-1.413c-.41-2.188-1.5-4.81-2.895-7.32c-1.39-2.5-3.04-4.814-4.51-6.386C12.998 3.209 12.462 3 12 3m3 17.89V15H9v5.89c.946.067 1.961.107 3 .11a44 44 0 0 0 3-.11M10.998 5.128h2.004v2.004h-2.004zM8.296 9.187h2.003v2.004H8.296zm5.405 0h2.003v2.004h-2.003z"></svg:path>`,
})
export class TdesignRiceBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRiceBallFilledIcon],svg[tdesign-rice-ball-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.017 2.403C9.847 1.515 10.887 1 12 1s2.153.515 2.983 1.403c1.603 1.716 3.345 4.17 4.796 6.781c1.448 2.605 2.649 5.44 3.113 7.924c.15.805.169 1.628-.108 2.432c-.28.814-.828 1.504-1.626 2.103c-.367.275-.92.457-1.443.592c-.57.147-1.276.28-2.067.39q-.314.045-.648.084V14H7v8.71a32 32 0 0 1-.648-.085a19 19 0 0 1-2.067-.39c-.522-.135-1.076-.317-1.443-.592c-.798-.6-1.345-1.29-1.626-2.103c-.277-.804-.258-1.627-.108-2.432c.464-2.483 1.665-5.32 3.113-7.924c1.451-2.61 3.193-5.065 4.796-6.78m1.981 2.725v2.004h2.004V5.128zM8.296 9.187v2.004h2.003V9.187zm7.408 0h-2.003v2.004h2.003z"></svg:path><svg:path fill="currentColor" d="M15 16v6.895c-.953.064-1.966.102-2.998.105h-.005A46 46 0 0 1 9 22.895V16z"></svg:path>`,
})
export class TdesignRiceBallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRiceFilledIcon],svg[tdesign-rice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C8.855 4 6.17 5.211 5.493 7.714A15 15 0 0 0 5.057 10h13.886a15 15 0 0 0-.435-2.282C17.831 5.212 15.148 4 12 4m-8.952 6c.08-.886.257-1.859.514-2.809C4.605 3.341 8.564 2 12 2c3.44 0 7.397 1.343 8.439 5.196c.256.948.433 1.92.513 2.804H22v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2zm7.95-5.002h2.004v2.004h-2.004zm-3 2h2.004v2.004H7.998zm6 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignRiceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRoastIcon],svg[tdesign-roast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm-5 4h6v5H9zm2 2v1h2v-1z"></svg:path>`,
})
export class TdesignRoastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRoastFilledIcon],svg[tdesign-roast-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-3 9v-4H9v4z"></svg:path>`,
})
export class TdesignRoastFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRocketIcon],svg[tdesign-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.557 3.1H20.9v1.343a7 7 0 0 1-2.05 4.95l-7.557 7.556l-4.243-4.243l7.557-7.556a7 7 0 0 1 4.95-2.05m-1.554 9.968l2.26-2.261A9 9 0 0 0 22.9 4.443V1.1h-3.343a9 9 0 0 0-6.364 2.636l-2.261 2.26l-5.657-.707L1.04 9.524L14.475 22.96l4.235-4.235zm-1.792 1.791l.393 3.143l-2.129 2.129l-1.768-1.768zm-7.07-7.071l-3.505 3.504L3.87 9.524l2.129-2.129zm-3.505 9.16l-3.535 3.536L.687 19.07l3.535-3.535zm2.829 2.83l-3.536 3.535l-1.414-1.414l3.535-3.536z"></svg:path>`,
})
export class TdesignRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRocketFilledIcon],svg[tdesign-rocket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.003 13.068l2.26-2.261A9 9 0 0 0 22.9 4.443V1.1h-3.343a9 9 0 0 0-6.364 2.636l-2.261 2.26l-5.657-.707L1.04 9.524L14.475 22.96l4.235-4.235zm-1.792 1.791l.393 3.143l-2.129 2.129l-1.768-1.768zm-7.07-7.071l-3.505 3.504L3.87 9.524l2.129-2.129zm-3.505 9.16l-3.535 3.536L.687 19.07l3.535-3.535zm2.829 2.83l-3.536 3.535l-1.414-1.414l3.535-3.536z"></svg:path>`,
})
export class TdesignRocketFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRollbackIcon],svg[tdesign-rollback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.93 14A7 7 0 0 1 14 20H5.5v-2H14a5 5 0 1 0 0-10H6.914l2.5 2.5L8 11.914L3.086 7L8 2.086L9.414 3.5L6.914 6H14a7 7 0 0 1 7 7v1z"></svg:path>`,
})
export class TdesignRollbackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRollfrontIcon],svg[tdesign-rollfront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.07 14A7 7 0 0 0 10 20h8.5v-2H10a5 5 0 0 1 0-10h7.086l-2.5 2.5L16 11.914L20.914 7L16 2.086L14.586 3.5l2.5 2.5H10a7 7 0 0 0-7 7v1z"></svg:path>`,
})
export class TdesignRollfrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRootListIcon],svg[tdesign-root-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm2 3.5h12v2H6zm0 4h8v2H6z"></svg:path>`,
})
export class TdesignRootListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRootListFilledIcon],svg[tdesign-root-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm-4 5.5H6v2h12zm-4 4H6v2h8z"></svg:path>`,
})
export class TdesignRootListFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRotateIcon],svg[tdesign-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18a9 9 0 0 0 8.252-5.4l.4-.917l1.833.801l-.4.916A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11v2l-4.4-3.3l1.2-1.6l.928.696A9.004 9.004 0 0 0 12 3"></svg:path>`,
})
export class TdesignRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRotateLockedIcon],svg[tdesign-rotate-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18a9 9 0 0 0 8.252-5.4l1.832.8A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11v2l-3.6-2.7l1.2-1.6l.128.096A9.004 9.004 0 0 0 12 3m0 5.5c.69 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0v.75H7.499V17h9v-6.5zm-.751 2V15h-5v-2.5z"></svg:path>`,
})
export class TdesignRotateLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRotateLockedFilledIcon],svg[tdesign-rotate-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.226 3a9 9 0 0 0 0 18a9 9 0 0 0 8.252-5.4l1.833.8A11 11 0 0 1 12.226 23c-6.075 0-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11v2l-3.6-2.7l1.2-1.6l.128.096A9.004 9.004 0 0 0 12.227 3m0 5.5c.69 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0v.75H7.725V17h9v-6.5z"></svg:path>`,
})
export class TdesignRotateLockedFilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRotationIcon],svg[tdesign-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v9a9 9 0 0 1 9 9h9v2H2V2zm0 18h7a7 7 0 0 0-7-7z"></svg:path>`,
})
export class TdesignRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRoundIcon],svg[tdesign-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path>`,
})
export class TdesignRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRoundFilledIcon],svg[tdesign-round-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path>`,
})
export class TdesignRoundFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRouterWaveIcon],svg[tdesign-router-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 3a9.99 9.99 0 0 0-8.426 4.612l-.54.841l-1.684-1.079l.54-.842A11.99 11.99 0 0 1 12.004 1c4.247 0 7.978 2.207 10.11 5.532l.539.842l-1.684 1.08l-.54-.842A9.99 9.99 0 0 0 12.004 3m-.012 3.988A5 5 0 0 0 7.78 9.294l-.54.842l-1.683-1.079l.54-.842a7 7 0 0 1 5.896-3.227a7 7 0 0 1 5.897 3.227l.54.842l-1.684 1.08l-.54-.843a5 5 0 0 0-4.213-2.306M13 11v3h7v9H4v-9h7v-3zm-7 5v5h12v-5z"></svg:path>`,
})
export class TdesignRouterWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRouterWaveFilledIcon],svg[tdesign-router-wave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 3a9.99 9.99 0 0 0-8.426 4.612l-.54.841l-1.683-1.079l.54-.842A11.99 11.99 0 0 1 12.005 1c4.246 0 7.977 2.207 10.109 5.532l.54.842l-1.685 1.08l-.54-.842A9.99 9.99 0 0 0 12.005 3m-.011 3.988A5 5 0 0 0 7.78 9.294l-.54.842l-1.684-1.079l.54-.842a7 7 0 0 1 5.897-3.227a7 7 0 0 1 5.897 3.227l.54.842l-1.684 1.08l-.54-.843a5 5 0 0 0-4.213-2.306M13 11v3h7v9H4v-9h7v-3z"></svg:path>`,
})
export class TdesignRouterWaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRssIcon],svg[tdesign-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h1c9.389 0 17 7.611 17 17v1h-2v-1c0-8.284-6.716-15-15-15H3zm0 7h1c5.523 0 10 4.477 10 10v1h-2v-1a8 8 0 0 0-8-8H3zm0 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRulerIcon],svg[tdesign-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.719 2h11.035L13.64 20H22v2H1.719zm4.869 18l3.657-16H8.28l-.625 2.5h4.22v2h-4.72L6.53 11h4.22v2H6.03l-.625 2.5h4.22v2h-4.72L4.28 20z"></svg:path>`,
})
export class TdesignRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignRulerFilledIcon],svg[tdesign-ruler-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.78 2H6.72L5.594 6.5h4.281v2H5.094L4.469 11H8.75v2H3.969l-.625 2.5h4.281v2H2.844L1.719 22h20.28v-2H12.28z"></svg:path>`,
})
export class TdesignRulerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSailingHotelIcon],svg[tdesign-sailing-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 .811l1.171.204c3.987.693 6.584 2.801 8.154 5.48c.974 1.661 1.538 3.519 1.822 5.352c.28 1.812.29 3.624.135 5.248c-.139 1.463-.416 2.819-.774 3.905H21v2H4v-2h3zM9 21h6.376c.299-.708.588-1.747.78-3H9zm0-5h7.357c.049-.966.03-1.98-.077-3H9zm0-5h6.95a12.8 12.8 0 0 0-1.079-3H9zm0-5h4.513C12.426 4.77 10.961 3.793 9 3.248z"></svg:path>`,
})
export class TdesignSailingHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSailingHotelFilledIcon],svg[tdesign-sailing-hotel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.171 1.015L7 .81V6h9.019c-1.593-2.441-4.11-4.335-7.848-4.985M17.079 8H7v3h10.996a15.7 15.7 0 0 0-.917-3m1.211 5H7v3h11.36c.043-.964.027-1.976-.07-3m-.113 5H7v3H4v2h17v-2h-3.492c.283-.858.515-1.885.67-3"></svg:path>`,
})
export class TdesignSailingHotelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSandwichIcon],svg[tdesign-sandwich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.8 2.515a2 2 0 0 1 2.494.476L21 8.638V22H3V8.406zM5 10v4h14v-4zm12.865-2l-3.107-3.73L7.922 8zM19 16H5v4h14z"></svg:path>`,
})
export class TdesignSandwichIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSandwichFilledIcon],svg[tdesign-sandwich-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.8 2.515a2 2 0 0 1 2.494.476L21 8.638H3v-.232zM3 17.368h18v4.63H3zm18-6.728H3v4.63h18z"></svg:path>`,
})
export class TdesignSandwichFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSaturationIcon],svg[tdesign-saturation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .07l7.068 7a9.856 9.856 0 0 1 0 14.029c-3.905 3.867-10.231 3.867-14.136 0a9.856 9.856 0 0 1 0-14.029zm0 2.814L6.34 8.491a7.856 7.856 0 0 0 0 11.187c3.125 3.095 8.195 3.095 11.32 0a7.856 7.856 0 0 0 0-11.187zm-1 6.15h1a5.482 5.482 0 1 1 0 10.964h-1zm2 2.147v6.671a3.483 3.483 0 0 0 0-6.671"></svg:path>`,
})
export class TdesignSaturationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSaturationFilledIcon],svg[tdesign-saturation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.068 7.07L12 .07l-7.068 7a9.856 9.856 0 0 0 0 14.029c3.905 3.867 10.231 3.867 14.136 0a9.856 9.856 0 0 0 0-14.029M18 13.996a6 6 0 0 1-6 6v-12a6 6 0 0 1 6 6"></svg:path>`,
})
export class TdesignSaturationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSausageIcon],svg[tdesign-sausage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.998 2.003v1.996h2.004v2h-1.257a4.22 4.22 0 0 1-1.04 4.268l-9.44 9.44a4.22 4.22 0 0 1-4.267 1.04V22h-2v-2H2.002v-2h1.249a4.22 4.22 0 0 1 1.04-4.269l9.44-9.44a4.22 4.22 0 0 1 4.267-1.04v-1.25zm-1.707 3.704a2.225 2.225 0 0 0-3.146 0l-9.44 9.44a2.225 2.225 0 1 0 3.146 3.146l9.44-9.44a2.225 2.225 0 0 0 0-3.146"></svg:path>`,
})
export class TdesignSausageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSausageFilledIcon],svg[tdesign-sausage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.998 2.003v1.996h2.004v2h-1.257a4.22 4.22 0 0 1-1.04 4.268l-9.44 9.44a4.22 4.22 0 0 1-4.267 1.04V22h-2v-2H2.002v-2h1.249a4.22 4.22 0 0 1 1.04-4.269l9.44-9.44a4.22 4.22 0 0 1 4.267-1.04v-1.25z"></svg:path>`,
})
export class TdesignSausageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSaveIcon],svg[tdesign-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14.414L22 7.586V22H2zm2 2v16h2v-6h12v6h2V8.414L15.586 4H13v4H6V4zm4 0v2h3V4zm8 16v-4H8v4z"></svg:path>`,
})
export class TdesignSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSaveFilledIcon],svg[tdesign-save-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v2h3V2z"></svg:path><svg:path fill="currentColor" d="M6 2v4h7V2h3.414L22 7.586V22h-4v-7H6v7H2V2z"></svg:path><svg:path fill="currentColor" d="M8 22h8v-5H8z"></svg:path>`,
})
export class TdesignSaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSavingPotIcon],svg[tdesign-saving-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.198 22.5h5.604l.445-2h2.506l.445 2h5.604l.632-2.843c3.65-3.061 4.69-8.39 2.226-12.658q-.34-.585-.74-1.108Q22 5.455 22 5a5 5 0 0 0-9.007-2.99c-1.344.084-2.7.402-4.005.954l-.92.39l.778 1.841l.921-.39a10.4 10.4 0 0 1 2.31-.678Q12 4.553 12 5a5 5 0 0 0 8.959 3.054a8 8 0 0 1-2.04 10.256l-.283.221l-.438 1.97h-2.396l-.444-2H9.642l-.444 2H6.802l-.669-3.01l-.501-.192c-1.064-.408-2.563-1.27-3.632-2.23V10.5h1.066l2.047-3.41l-.668-1.671c.806.104 1.735.501 2.601 1.454l.673.74l1.48-1.346l-.673-.74c-1.893-2.082-4.17-2.37-5.752-2.001l-1.135.264l1.248 3.12l-.953 1.59H0v7.416l.295.293c1.15 1.144 2.795 2.16 4.115 2.747zm.302-11h2.004V9.494H5.5zM17 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class TdesignSavingPotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSavingPotFilledIcon],svg[tdesign-saving-pot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.802 22.5H5.198l-.788-3.544C3.09 18.37 1.444 17.353.295 16.21L0 15.916V8.501h1.934l.953-1.59l-1.248-3.12l1.134-.265c1.114-.258 2.57-.193 3.994.592l.02-.011a23 23 0 0 1 .712-.408a15 15 0 0 1 1.504-.741c.457-.185.892-.34 1.314-.468a6.5 6.5 0 0 0 12.25 4.35l.093.16c2.465 4.268 1.425 9.596-2.226 12.657l-.632 2.844h-5.604l-.445-2h-2.506zM4.5 11.5h2.004V9.496H4.5z"></svg:path><svg:path fill="currentColor" d="M16.5 0a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9"></svg:path>`,
})
export class TdesignSavingPotFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScanIcon],svg[tdesign-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zM2 11h20v2H2zm2 4v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScreen4kIcon],svg[tdesign-screen-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm12 3v2.048l1-.708V8h2v1.598a1.5 1.5 0 0 1-.633 1.225L15.703 12l1.664 1.177A1.5 1.5 0 0 1 18 14.402V16h-2v-1.34l-1-.708V16h-2V8zM7 8v3.429h2V8h2v8H9v-2.571H7a2 2 0 0 1-2-2V8z"></svg:path>`,
})
export class TdesignScreen4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScreen4kFilledIcon],svg[tdesign-screen-4k-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-8 7.048l1-.708V8h2v1.598a1.5 1.5 0 0 1-.633 1.225L15.703 12l1.664 1.177A1.5 1.5 0 0 1 18 14.402V16h-2v-1.34l-1-.708V16h-2V8h2zm-8 1.38h2V8h2v8H9v-2.571H7a2 2 0 0 1-2-2V8h2z"></svg:path>`,
})
export class TdesignScreen4kFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScreencastIcon],svg[tdesign-screencast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-6v-2h4V4H3l.001 13h4v2H1zm4.586 20L12 15.585L18.414 22zm4.828-2h3.172L12 18.414z"></svg:path>`,
})
export class TdesignScreencastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScreencastFilledIcon],svg[tdesign-screencast-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-5.965L12 13.964L6.965 19H1z"></svg:path><svg:path fill="currentColor" d="M17.207 22H6.793L12 16.793z"></svg:path>`,
})
export class TdesignScreencastFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScreenshotIcon],svg[tdesign-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v14h-2V4H4v12H2zm3.403 7h2.822L12 12.797L15.774 9h2.823l-5.186 5.216l2.688 2.704a3.3 3.3 0 0 1 1.615-.42c1.8 0 3.286 1.44 3.286 3.25S19.514 23 17.714 23s-3.285-1.44-3.285-3.25c0-.49.108-.953.303-1.367L12 15.635l-2.732 2.748c.194.414.303.877.303 1.367c0 1.81-1.486 3.25-3.285 3.25S3 21.56 3 19.75s1.486-3.25 3.286-3.25c.585 0 1.137.152 1.615.42l2.688-2.704zm12.311 9.5c-.725 0-1.285.574-1.285 1.25s.56 1.25 1.285 1.25S19 20.426 19 19.75s-.56-1.25-1.286-1.25m-11.428 0C5.56 18.5 5 19.074 5 19.75S5.56 21 6.286 21c.725 0 1.285-.574 1.285-1.25s-.56-1.25-1.285-1.25"></svg:path>`,
})
export class TdesignScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScrollBarIcon],svg[tdesign-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20h-2V2zM2 2h16v20H2zm2 2v16h12V4z"></svg:path>`,
})
export class TdesignScrollBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignScrollBarFilledIcon],svg[tdesign-scroll-bar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20h-2V2zM2 2h16v20H2z"></svg:path>`,
})
export class TdesignScrollBarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCardIcon],svg[tdesign-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h16v22H3V11.586l2-2zm2 2v7.414l-2 2V21h14V3zm4 2v3H9V5zm3 0v3h-2V5zm3 0v3h-2V5z"></svg:path>`,
})
export class TdesignSdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCard1Icon],svg[tdesign-sd-card-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h12.515L21 9.68V22H3zm9 2h-1v3.5H9V4H8v3.5H6V4H5v16h14v-9.68L14.485 4H14v3.5h-2z"></svg:path>`,
})
export class TdesignSdCard1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCard1FilledIcon],svg[tdesign-sd-card-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.515 2L21 9.68V22H3V2zM7 4H5v4h2zm3.5 0h-2v4h2zM14 4h-2v4h2z"></svg:path>`,
})
export class TdesignSdCard1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSdCardFilledIcon],svg[tdesign-sd-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H5v8.586l-2 2V23h18zM11 8H9V5h2zm3 0h-2V5h2zm1 0V5h2v3z"></svg:path>`,
})
export class TdesignSdCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSealIcon],svg[tdesign-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M6.5 7a5.5 5.5 0 1 1 11 0c0 1.707-.78 3.555-1.984 4.831c-.217.23-.362.457-.442.669H20a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2h4.926a2.1 2.1 0 0 0-.442-.669C7.28 10.555 6.5 8.707 6.5 7M12 3.5A3.5 3.5 0 0 0 8.5 7c0 1.157.557 2.524 1.439 3.46c.546.579 1.061 1.41 1.061 2.416V13a1.5 1.5 0 0 1-1.5 1.5H4v3h16v-3h-5.5A1.5 1.5 0 0 1 13 13v-.124c0-1.005.515-1.837 1.061-2.417C14.943 9.524 15.5 8.157 15.5 7A3.5 3.5 0 0 0 12 3.5m-10 17h20v2H2z"></svg:path>`,
})
export class TdesignSealIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSealFilledIcon],svg[tdesign-seal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M2 20.5h20v2H2zM7 7a5 5 0 0 1 10 0c0 1.57-.725 3.297-1.847 4.488q-.245.26-.407.553c-.263.486.202.959.754.959H20a2 2 0 0 1 2 2v4.5H2V15a2 2 0 0 1 2-2h4.5c.552 0 1.017-.473.754-.959a2.7 2.7 0 0 0-.407-.553C7.725 10.298 7 8.57 7 7"></svg:path>`,
})
export class TdesignSealFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSearchIcon],svg[tdesign-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49"></svg:path>`,
})
export class TdesignSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSearchErrorIcon],svg[tdesign-search-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.097 5.904A6.5 6.5 0 0 0 4 10.504l.001 1h-2v-1a8.5 8.5 0 1 1 15.176 5.258l5.344 5.345l-1.414 1.414l-5.344-5.345A8.48 8.48 0 0 1 10.5 19h-1v-2h1a6.5 6.5 0 0 0 4.596-11.096M1.672 13.257L4.5 16.086l2.829-2.829l1.414 1.415L5.915 17.5l2.828 2.828l-1.414 1.415L4.5 18.914l-2.828 2.829l-1.414-1.415L3.086 17.5L.258 14.672z"></svg:path>`,
})
export class TdesignSearchErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSearchErrorFilledIcon],svg[tdesign-search-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.762 17.177a8.47 8.47 0 0 1-4.934 1.817a6.5 6.5 0 0 0-8.772-7.519a8.5 8.5 0 1 1 15.12 4.287l5.345 5.345l-1.415 1.414z"></svg:path><svg:path fill="currentColor" d="m8.743 14.672l-1.415-1.415L4.5 16.086l-2.828-2.829l-1.415 1.415L3.086 17.5L.257 20.328l1.415 1.415L4.5 18.914l2.828 2.829l1.415-1.415L5.914 17.5z"></svg:path>`,
})
export class TdesignSearchErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSearchFilledIcon],svg[tdesign-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.762 17.177A8.501 8.501 0 0 1 4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.415 1.414z"></svg:path>`,
})
export class TdesignSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSecuredIcon],svg[tdesign-secured-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .44l10 3.5V12c0 4.127-2.533 7.012-4.896 8.803a19.7 19.7 0 0 1-4.65 2.595l-.087.033l-.025.009l-.007.002l-.003.001c-.001 0-.002 0-.332-.943l-.331.944h-.001l-.003-.002l-.007-.002l-.025-.01l-.087-.032a18 18 0 0 1-1.39-.606a20 20 0 0 1-3.26-1.989C4.534 19.012 2 16.127 2 12V3.94zm0 22.06l-.331.944l.331.116l.331-.116zm0-1.072l.009-.004a17.8 17.8 0 0 0 3.887-2.215C18.034 17.59 20 15.223 20 12V5.36l-8-2.8l-8 2.8V12c0 3.223 1.966 5.588 4.104 7.21A17.8 17.8 0 0 0 12 21.428m6.072-13.085l-7.071 7.071l-4.243-4.242l1.415-1.415L11 12.586l5.657-5.657z"></svg:path>`,
})
export class TdesignSecuredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSecuredFilledIcon],svg[tdesign-secured-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3.94L12 .44L2 3.94V12c0 4.127 2.534 7.012 4.896 8.803a19.8 19.8 0 0 0 4.65 2.595q.17.064.342.122l.112.04l.114-.04a14 14 0 0 0 .65-.244a19.7 19.7 0 0 0 4.34-2.473C19.467 19.012 22 16.127 22 12zM11.001 15.415L6.76 11.172l1.414-1.415l2.828 2.829l5.657-5.657l1.415 1.414z"></svg:path>`,
})
export class TdesignSecuredFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSendIcon],svg[tdesign-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.292 1.665L24.002 12L.293 22.336L3.94 12zM5.708 13l-2 5.665L18.999 12L3.708 5.336l2 5.664H11v2z"></svg:path>`,
})
export class TdesignSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSendCancelIcon],svg[tdesign-send-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.292 1.665L24.002 12l-5.456 2.379l-.8-1.833L18.999 12L3.708 5.336l2 5.664H11v2H5.708l-2 5.665l8.56-3.731l.799 1.833L.292 22.336L3.94 12zm22.79 14.33l-2.832 2.851l2.821 2.822l-1.414 1.414l-2.819-2.82l-2.818 2.819l-1.414-1.415l2.818-2.817l-2.838-2.838L16 14.597l2.836 2.835l2.827-2.846z"></svg:path>`,
})
export class TdesignSendCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSendCancelFilledIcon],svg[tdesign-send-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.003 12L.292 1.665L3.587 11H11v2H3.587L.292 22.336l12.57-5.48a6.503 6.503 0 0 1 8.746-3.812z"></svg:path><svg:path fill="currentColor" d="m21.83 14.757l-2.828 2.829l-2.828-2.829l-1.414 1.415L17.588 19l-2.828 2.828l1.414 1.415l2.828-2.829l2.829 2.829l1.414-1.415L20.417 19l2.828-2.828z"></svg:path>`,
})
export class TdesignSendCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSendFilledIcon],svg[tdesign-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.003 12L.292 1.665L3.587 11H11v2H3.587L.292 22.336z"></svg:path>`,
})
export class TdesignSendFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSensorsIcon],svg[tdesign-sensors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-2.437-.87-4.667-2.317-6.402l-.64-.768l1.535-1.281l.64.767A11.96 11.96 0 0 1 24 12a11.95 11.95 0 0 1-2.782 7.683l-.64.768l-1.536-1.281l.64-.768A9.96 9.96 0 0 0 22 11.999m-4.623-4.483A6.98 6.98 0 0 1 19 12c0 1.704-.61 3.268-1.623 4.482l-.64.768l-1.536-1.281l.64-.768A4.98 4.98 0 0 0 17 12a4.98 4.98 0 0 0-1.158-3.201L15.2 8.03l1.536-1.281zM12 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8.799 8.03l-.64.769A4.98 4.98 0 0 0 7 11.999c0 1.219.435 2.333 1.158 3.2l.641.769l-1.536 1.28l-.64-.767A6.98 6.98 0 0 1 5 12c0-1.704.61-3.268 1.623-4.482l.64-.767zm-3.841-3.2l-.64.768A9.96 9.96 0 0 0 2 11.999c0 2.436.87 4.667 2.317 6.402l.64.768l-1.535 1.28l-.64-.767A11.96 11.96 0 0 1 0 12c0-2.921 1.045-5.602 2.781-7.683l.641-.767z"></svg:path>`,
})
export class TdesignSensorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSensors1Icon],svg[tdesign-sensors-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.636 4.223l-.707.707A9.97 9.97 0 0 0 2 12a9.97 9.97 0 0 0 2.929 7.072l.707.707l-1.414 1.414l-.707-.707A11.97 11.97 0 0 1 0 12.001c0-3.314 1.344-6.315 3.515-8.486l.707-.707zm14.141-1.415l.707.707A11.97 11.97 0 0 1 24 12.001c0 3.313-1.344 6.315-3.514 8.485l-.708.707l-1.414-1.414l.707-.707A9.97 9.97 0 0 0 22 12a9.97 9.97 0 0 0-2.93-7.071l-.707-.707zM8.464 7.051l-.707.707A5.98 5.98 0 0 0 6 12c0 1.658.67 3.156 1.757 4.243l.707.707l-1.414 1.414l-.707-.707A7.98 7.98 0 0 1 4 12c0-2.208.897-4.21 2.343-5.656l.707-.708zm8.485-1.415l.707.708A7.98 7.98 0 0 1 20 12c0 2.21-.897 4.21-2.344 5.657l-.707.707l-1.414-1.414l.707-.707A5.98 5.98 0 0 0 18 12a5.98 5.98 0 0 0-1.758-4.242l-.707-.707zM12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 5 3.874v4.905h-2v-4.905A4 4 0 0 1 8 12"></svg:path>`,
})
export class TdesignSensors1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSensors2Icon],svg[tdesign-sensors-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.343 4.929l-.707.707A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364l.707.707l-1.414 1.414l-.707-.707A10.97 10.97 0 0 1 1 12c0-3.037 1.232-5.79 3.222-7.778l.707-.707zm12.728-1.414l.707.707A10.97 10.97 0 0 1 23 12c0 3.037-1.232 5.789-3.222 7.778l-.707.707l-1.414-1.414l.707-.707A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.636-6.364l-.707-.707zm-9.9 4.242l-.707.707A4.98 4.98 0 0 0 7 12c0 1.381.559 2.63 1.465 3.536l.707.707l-1.414 1.414l-.708-.707A6.98 6.98 0 0 1 5 12c0-1.933.785-3.684 2.05-4.95l.707-.707zm7.072-1.414l.707.707A6.98 6.98 0 0 1 19 12a6.98 6.98 0 0 1-2.05 4.95l-.707.707l-1.415-1.414l.707-.707A4.98 4.98 0 0 0 17 12a4.98 4.98 0 0 0-1.464-3.536l-.708-.707zM13 9v6h-2V9z"></svg:path>`,
})
export class TdesignSensors2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSensorsOffIcon],svg[tdesign-sensors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.219 4.317A11.96 11.96 0 0 1 24 12c0 2.953-1.068 5.659-2.837 7.749l1.251 1.25L21 22.415l-8.482-8.482a2 2 0 0 1-2.45-2.45l-2.24-2.24A4.97 4.97 0 0 0 7 12c0 1.219.435 2.333 1.158 3.2l.641.768l-1.536 1.282l-.64-.768A6.98 6.98 0 0 1 5 12a6.97 6.97 0 0 1 1.394-4.192L4.257 5.67A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 2.317 6.4l.64.768l-1.535 1.282l-.64-.768A11.96 11.96 0 0 1 0 12a11.96 11.96 0 0 1 2.836-7.75L1.586 3L3 1.586l8.482 8.482Q11.73 10 12 10a2 2 0 0 1 1.932 2.518l2.24 2.24A5 5 0 0 0 17 12a4.98 4.98 0 0 0-1.158-3.2l-.642-.77l1.536-1.28l.64.767A6.98 6.98 0 0 1 19 12a6.97 6.97 0 0 1-1.394 4.192l2.137 2.137A9.96 9.96 0 0 0 22 11.999c0-2.435-.87-4.666-2.317-6.4l-.64-.769l1.535-1.28z"></svg:path>`,
})
export class TdesignSensorsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSequenceIcon],svg[tdesign-sequence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h8v6H7v10H5V10H2zm6 4V6H4v2zm6-4h8v6h-3v10h-2V10h-3zm6 4V6h-4v2zm-7.364 4.086L16.385 16l-3.75 3.914l-1.444-1.384L12.657 17H8v-2h4.657l-1.466-1.53z"></svg:path>`,
})
export class TdesignSequenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSequenceFilledIcon],svg[tdesign-sequence-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h8v6H7v10H5V10H2zm12 0h8v6h-3v10h-2V10h-3zm-1.364 8.086L16.385 16l-3.75 3.914l-1.444-1.384L12.657 17H8v-2h4.657l-1.466-1.53z"></svg:path>`,
})
export class TdesignSequenceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSerenityIcon],svg[tdesign-serenity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm-5.1 4.634l.5.865C9.922 15.4 10.89 16 12 16s2.08-.601 2.6-1.5l.5-.866l1.731 1.001l-.5.866A5 5 0 0 1 12 18a5 5 0 0 1-4.33-2.5l-.501-.865z"></svg:path>`,
})
export class TdesignSerenityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSerenityFilledIcon],svg[tdesign-serenity-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-8.6 5.5l-.5-.866l-1.731 1.001l.5.866A5 5 0 0 0 12 18a5 5 0 0 0 4.33-2.5l.501-.865l-1.731-1.001l-.5.865A3 3 0 0 1 12 16a3 3 0 0 1-2.6-1.5"></svg:path>`,
})
export class TdesignSerenityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignServerIcon],svg[tdesign-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v9H2v-9zm-2 2H4v5h16zm2-13v9H2V2zm-2 2H4v5h16zM7.504 16.5v2.004H5.5V16.5zm0-11v2.004H5.5V5.5z"></svg:path>`,
})
export class TdesignServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignServerFilledIcon],svg[tdesign-server-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v9h20zM7.004 5.5v2.004H5V5.5zM22 13H2v9h20zM7.004 16.5v2.004H5V16.5z"></svg:path>`,
})
export class TdesignServerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignServiceIcon],svg[tdesign-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11C2 5.477 6.477 1 12 1s10 4.477 10 10v5.154C22 17.8 20.58 19 19 19h-3v-8h4a8 8 0 1 0-16 0h4v8H6.063A2 2 0 0 0 8 20.5h1.564c.316-.453.841-.75 1.436-.75h2a1.75 1.75 0 1 1 0 3.5h-2c-.595 0-1.12-.297-1.436-.75H8a4 4 0 0 1-3.986-3.66C2.874 18.463 2 17.446 2 16.155zm4 6v-4H4v3.154c0 .393.37.846 1 .846zm14-4h-2v4h1c.63 0 1-.453 1-.846z"></svg:path>`,
})
export class TdesignServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignServiceFilledIcon],svg[tdesign-service-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11C2 5.477 6.477 1 12 1s10 4.477 10 10v5.154C22 17.8 20.58 19 19 19h-3v-8h4a8 8 0 1 0-16 0h4v8H6.063A2 2 0 0 0 8 20.5h1.564c.316-.453.841-.75 1.436-.75h2a1.75 1.75 0 1 1 0 3.5h-2c-.595 0-1.12-.297-1.436-.75H8a4 4 0 0 1-3.986-3.66C2.874 18.463 2 17.446 2 16.155z"></svg:path>`,
})
export class TdesignServiceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSettingIcon],svg[tdesign-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L4.34 7.577v8.846L12 20.845l7.66-4.422V7.577zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSetting1Icon],svg[tdesign-setting-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.18 1h5.64l.647 3.237a8.5 8.5 0 0 1 1.52.88l3.129-1.059l2.82 4.884l-2.481 2.18a8.6 8.6 0 0 1 0 1.756l2.48 2.18l-2.819 4.884l-3.129-1.058a8.5 8.5 0 0 1-1.52.879L14.819 23H9.18l-.647-3.237a8.5 8.5 0 0 1-1.52-.88l-3.129 1.059l-2.82-4.884l2.481-2.18a8.6 8.6 0 0 1 0-1.756l-2.48-2.18l2.82-4.884l3.128 1.058a8.5 8.5 0 0 1 1.52-.879zm1.64 2l-.542 2.705l-.525.193a6.5 6.5 0 0 0-1.912 1.106l-.43.359l-2.615-.885l-1.18 2.044l2.072 1.821l-.095.551a6.6 6.6 0 0 0 0 2.212l.095.55l-2.073 1.822l1.18 2.044l2.616-.885l.43.359a6.5 6.5 0 0 0 1.912 1.106l.525.193L10.82 21h2.36l.542-2.705l.525-.193a6.5 6.5 0 0 0 1.912-1.106l.43-.359l2.616.885l1.18-2.044l-2.072-1.821l.094-.551a6.6 6.6 0 0 0 0-2.212l-.094-.55l2.072-1.822l-1.18-2.044l-2.616.885l-.43-.359a6.5 6.5 0 0 0-1.912-1.106l-.525-.193L13.18 3zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path>`,
})
export class TdesignSetting1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSetting1FilledIcon],svg[tdesign-setting-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.82 1H9.18l-.647 3.237a8.5 8.5 0 0 0-1.52.88l-3.13-1.059l-2.819 4.884l2.481 2.18a8.6 8.6 0 0 0 0 1.756l-2.481 2.18l2.82 4.884l3.129-1.058c.472.342.98.638 1.52.879L9.18 23h5.64l.647-3.237a8.5 8.5 0 0 0 1.52-.88l3.13 1.059l2.82-4.884l-2.482-2.18a8.6 8.6 0 0 0 0-1.756l2.481-2.18l-2.82-4.884l-3.128 1.058a8.5 8.5 0 0 0-1.52-.879zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class TdesignSetting1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSettingFilledIcon],svg[tdesign-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.66 6.423L12 .845L2.34 6.423v11.154L12 23.155l9.66-5.578zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class TdesignSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShareIcon],svg[tdesign-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.991 1.035a4 4 0 1 1-.855 6.267l-6.28 3.626q.147.533.145 1.072c0 .358-.047.719-.145 1.072l6.28 3.626a4.002 4.002 0 0 1 6.32 4.803a4 4 0 0 1-7.32-3.07l-6.28-3.627a4.002 4.002 0 1 1 0-5.608l6.28-3.626a4 4 0 0 1 1.855-4.535M19.723 3.5a2 2 0 1 0-3.464 2a2 2 0 0 0 3.464-2M3.071 12.527a2.002 2.002 0 0 0 2.93 1.204a2 2 0 1 0-2.93-1.204m15.92 5.242a2 2 0 1 0-2 3.464a2 2 0 0 0 2-3.464"></svg:path>`,
})
export class TdesignShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShare1Icon],svg[tdesign-share-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1.85L23.553 12L11.5 22.15v-6.227c-4.194.2-7.073 1.7-9.186 4.658L.52 19.804c.523-2.617 1.58-5.295 3.478-7.462c1.761-2.014 4.209-3.543 7.502-4.187zm2 4.3v3.717l-.858.123c-3.27.467-5.551 1.853-7.14 3.669a12 12 0 0 0-1.744 2.658C6.096 14.666 8.978 13.9 12.5 13.9h1v3.95L20.448 12z"></svg:path>`,
})
export class TdesignShare1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShare1FilledIcon],svg[tdesign-share-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1.85L23.553 12L11.5 22.15v-6.227c-4.194.2-7.073 1.7-9.186 4.658L.52 19.804c.523-2.617 1.58-5.295 3.478-7.462c1.761-2.014 4.209-3.543 7.502-4.187z"></svg:path>`,
})
export class TdesignShare1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShareFilledIcon],svg[tdesign-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 4.5a3.5 3.5 0 0 1-5.909 2.54l-7.186 4.148a3.5 3.5 0 0 1 0 1.624l7.186 4.149a3.5 3.5 0 1 1-.998 1.733l-7.189-4.15a3.5 3.5 0 1 1 0-5.087l7.19-4.151A3.5 3.5 0 1 1 21.5 4.5"></svg:path>`,
})
export class TdesignShareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSharpnessIcon],svg[tdesign-sharpness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5.586V19.5H1.587zM6.416 17.5H18.5V5.414zM20.5 21v2h-19v-2z"></svg:path>`,
})
export class TdesignSharpnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSharpnessFilledIcon],svg[tdesign-sharpness-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5.586V19.5H1.587zM20.5 21v2H1.502v-2z"></svg:path>`,
})
export class TdesignSharpnessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShieldErrorIcon],svg[tdesign-shield-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.67 23.444L12 22.5l.33.944l-.33.116zm.33-2.016l.009-.004a17.8 17.8 0 0 0 3.887-2.215C18.034 17.59 20 15.223 20 12V5.36l-8-2.8l-8 2.8V12c0 3.223 1.966 5.588 4.104 7.21A17.8 17.8 0 0 0 12 21.428m-5.104-.625C4.534 19.012 2 16.127 2 12V3.94l10-3.5l10 3.5V12c0 4.127-2.533 7.012-4.896 8.803a19.8 19.8 0 0 1-4.65 2.595l-.087.033l-.025.009l-.007.002l-.005.002L12 22.5l-.33.944l-.005-.002l-.007-.002l-.025-.01l-.087-.032a18 18 0 0 1-1.39-.606a20 20 0 0 1-3.26-1.989M11 16.5V10h2v6.5zm2-8h-2.004V6.496H13z"></svg:path>`,
})
export class TdesignShieldErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShieldErrorFilledIcon],svg[tdesign-shield-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 4.127 2.534 7.012 4.896 8.803a19.8 19.8 0 0 0 4.65 2.595q.17.064.342.122l.112.04l.112-.04a13 13 0 0 0 .653-.244a19.8 19.8 0 0 0 4.34-2.473C19.465 19.012 22 16.127 22 12V3.94L12 .44L2 3.94zm11-3.5h-2.004V6.496H13zm-2 8V10h2v6.5z"></svg:path>`,
})
export class TdesignShieldErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShimenIcon],svg[tdesign-shimen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.999 1.996l11 1.1v4.81l-2.932.293L21.075 22h-7.162L15.01 8.713l-.621.06l-.121.011q-1.026.098-2.168.212l-.1.01l-2.914-.292l.991 13.287H2.923L3.931 8.199L.999 7.906v-4.81zM5.922 8.398L5.075 20h2.847L7.064 8.512zm11.11.113L16.085 20h2.838l-.846-11.6l-.435.046l-.014.001zM3 4.906v1.19l9 .9q1.095-.109 2.076-.203l.12-.011l1.81-.176c.492-.05.95-.098 1.415-.147l.012-.001c.469-.05.945-.1 1.468-.152L21 6.096v-1.19l-9-.9z"></svg:path>`,
})
export class TdesignShimenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShimenFilledIcon],svg[tdesign-shimen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998 1.996l11 1.1v4.81l-2.932.293L21.074 22h-7.162l1.096-13.288l-3.01.287l-2.914-.286L10.076 22H2.922L3.93 8.199L.998 7.906v-4.81zM5.921 8.398L5.074 20H7.92L7.063 8.512zm11.11.113L16.084 20h2.838l-.846-11.6z"></svg:path>`,
})
export class TdesignShimenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShopIcon],svg[tdesign-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5.5a4.5 4.5 0 0 1 9 0V7H21v16H3V7h4.5zm0 3.5H5v12h14V9h-2.5v3h-2V9h-5v3h-2zm7-2V5.5a2.5 2.5 0 0 0-5 0V7z"></svg:path>`,
})
export class TdesignShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop1Icon],svg[tdesign-shop-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 7.465V20h4v-7h8v7h4V9.465A4 4 0 0 1 18 10a4 4 0 0 1-3-1.354A4 4 0 0 1 12 10a4 4 0 0 1-3-1.354A4 4 0 0 1 6 10a4 4 0 0 1-2-.535M10 6a2 2 0 1 0 4 0V4h-4zM8 4H4v2a2 2 0 1 0 4 0zm8 0v2a2 2 0 1 0 4 0V4zm-2 16v-5h-4v5z"></svg:path>`,
})
export class TdesignShop1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop1FilledIcon],svg[tdesign-shop-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v3a4 4 0 0 0 7 2.646A4 4 0 0 0 12 9a4 4 0 0 0 3-1.354A4 4 0 0 0 22 5z"></svg:path><svg:path fill="currentColor" d="M2 22V9.473A5.98 5.98 0 0 0 6 11a6 6 0 0 0 3-.803c.882.51 1.907.803 3 .803a6 6 0 0 0 3-.803c.882.51 1.907.803 3 .803a5.98 5.98 0 0 0 4-1.527V22h-5.5v-8h-9v8z"></svg:path><svg:path fill="currentColor" d="M9.5 16v6h5v-6z"></svg:path>`,
})
export class TdesignShop1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop2Icon],svg[tdesign-shop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.982 5.11C6.409 3.397 8.684 2 12 2s5.591 1.397 7.018 3.11c1.06 1.27 1.655 2.72 1.879 3.89H22v2h-1v9h1v2H2v-2h1v-9H2V9h1.103c.224-1.17.82-2.62 1.879-3.89M5 11v9h3v-3a4 4 0 1 1 8 0v3h3v-9zm13.846-2a7 7 0 0 0-1.364-2.61A6.4 6.4 0 0 0 14.4 4.341q.272.481.512 1.011c.493 1.097.887 2.379 1.03 3.648zm-4.92 0a10.7 10.7 0 0 0-.838-2.827a9 9 0 0 0-.868-1.536q-.114-.159-.22-.286q-.106.127-.22.286c-.298.413-.6.939-.868 1.536A10.7 10.7 0 0 0 10.074 9zM8.058 9c.143-1.27.536-2.551 1.03-3.648q.239-.531.512-1.01A6.4 6.4 0 0 0 6.518 6.39A7 7 0 0 0 5.154 9zM14 20v-3a2 2 0 0 0-4 0v3z"></svg:path>`,
})
export class TdesignShop2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop2FilledIcon],svg[tdesign-shop-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.982 5.11C6.409 3.397 8.684 2 12 2s5.591 1.397 7.018 3.11c1.06 1.27 1.655 2.72 1.879 3.89H22v2h-1v9h1v2h-5.5v-3.5a4.5 4.5 0 1 0-9 0V22H2v-2h1v-9H2V9h1.103c.224-1.17.82-2.62 1.879-3.89M18.846 9a7 7 0 0 0-1.364-2.61A6.4 6.4 0 0 0 14.4 4.341q.272.481.512 1.011c.493 1.097.887 2.379 1.03 3.648zm-4.92 0a10.7 10.7 0 0 0-.838-2.827a9 9 0 0 0-.868-1.536q-.114-.159-.22-.286q-.106.127-.22.286c-.298.413-.6.939-.868 1.536A10.7 10.7 0 0 0 10.074 9zM8.058 9c.143-1.27.536-2.551 1.03-3.648q.239-.531.512-1.01A6.4 6.4 0 0 0 6.518 6.39A7 7 0 0 0 5.154 9z"></svg:path><svg:path fill="currentColor" d="M12 16a2.5 2.5 0 0 0-2.5 2.5V22h5v-3.5A2.5 2.5 0 0 0 12 16"></svg:path>`,
})
export class TdesignShop2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop3Icon],svg[tdesign-shop-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 7.465V20h4v-7h8v7h4V9.465A4 4 0 0 1 18 10a4 4 0 0 1-3-1.354A4 4 0 0 1 12 10a4 4 0 0 1-3-1.354A4 4 0 0 1 6 10a4 4 0 0 1-2-.535M8 6h2a2 2 0 1 0 4 0h2a2 2 0 1 0 4 0V4H4v2a2 2 0 1 0 4 0m6 14v-5h-4v5z"></svg:path>`,
})
export class TdesignShop3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop3FilledIcon],svg[tdesign-shop-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V8.625A5.6 5.6 0 0 0 5.375 9.75c1.24 0 2.384-.4 3.313-1.079A5.6 5.6 0 0 0 12 9.75c1.24 0 2.384-.4 3.313-1.079a5.6 5.6 0 0 0 3.312 1.079A5.6 5.6 0 0 0 22 8.625V22h-5.5v-8h-9v8zM5.375 7.75A3.63 3.63 0 0 1 2 5.45V2h20v3.45a3.626 3.626 0 0 1-6.687.15a3.64 3.64 0 0 1-1.397 1.603A3.6 3.6 0 0 1 12 7.75c-.704 0-1.36-.2-1.916-.547A3.64 3.64 0 0 1 8.688 5.6A3.64 3.64 0 0 1 7.29 7.203a3.6 3.6 0 0 1-1.916.547"></svg:path><svg:path fill="currentColor" d="M9.5 22v-6h5v6z"></svg:path>`,
})
export class TdesignShop3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop4Icon],svg[tdesign-shop-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a2 2 0 0 0-2 2v1h3V4zm3 0v3h4V4zm6 0v3h3V6a2 2 0 0 0-2-2zm5 3h1v2h-1v11h1v2H2v-2h1V9H2V7h1V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4zm-2 2H5v11h3v-5a4 4 0 0 1 8 0v5h3zm-5 11v-5a2 2 0 1 0-4 0v5z"></svg:path>`,
})
export class TdesignShop4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop4FilledIcon],svg[tdesign-shop-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h1v2h-1v11h1v2h-5.5v-5.5a4.5 4.5 0 1 0-9 0V22H2v-2h1V9H2V7h1V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4zM7 4a2 2 0 0 0-2 2v1h3V4zm3 0v3h4V4zm6 0v3h3V6a2 2 0 0 0-2-2z"></svg:path><svg:path fill="currentColor" d="M12 14a2.5 2.5 0 0 0-2.5 2.5V22h5v-5.5A2.5 2.5 0 0 0 12 14"></svg:path>`,
})
export class TdesignShop4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop5Icon],svg[tdesign-shop-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2h17.44l.972 2.914c.181.543.391 1.332.163 2.154A4 4 0 0 1 21 8.646V20h1v2H2v-2h1V8.646A4 4 0 0 1 2 6v-.162zM5 9.874V20h3v-7h8v7h3V9.874a4 4 0 0 1-4-1.228A4 4 0 0 1 12 10a4 4 0 0 1-3-1.354a3.99 3.99 0 0 1-4 1.228M10 6a2 2 0 1 0 4 0V4h-4zM8 4H4.72l-.715 2.146c.039.533.285 1.008.662 1.345A2 2 0 0 0 8 6zm8 0v2a2 2 0 0 0 3.928.535c.059-.213.026-.512-.133-.989L19.279 4zm-2 16v-5h-4v5z"></svg:path>`,
})
export class TdesignShop5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShop5FilledIcon],svg[tdesign-shop-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.889 2s.043.051.111.147c.281.39 1 1.52 1 2.852c0 .84-.383 1.598-1 2.142A3.52 3.52 0 0 1 18.667 8a3.57 3.57 0 0 1-1.984-.59c-.819-.546-1.35-1.422-1.35-2.41c0 .988-.53 1.864-1.35 2.41c-.554.37-1.24.59-1.983.59a3.57 3.57 0 0 1-1.984-.59c-.819-.546-1.35-1.422-1.35-2.41c0 .988-.53 1.864-1.35 2.41c-.554.37-1.24.59-1.983.59A3.52 3.52 0 0 1 3 7.14C2.383 6.597 2 5.838 2 5c0-1.332.719-2.461 1-2.852c.069-.096.111-.147.111-.147zm-2.222 7.999c.812 0 1.61-.18 2.333-.51v10.507h1V22h-5.5v-8h-9v8H2v-2.004h1V9.49a5.6 5.6 0 0 0 2.333.509c1.21 0 2.392-.4 3.333-1.099A5.63 5.63 0 0 0 12 10c1.21 0 2.392-.4 3.333-1.099A5.63 5.63 0 0 0 18.667 10"></svg:path><svg:path fill="currentColor" d="M9.5 22v-6h5v6z"></svg:path>`,
})
export class TdesignShop5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShopFilledIcon],svg[tdesign-shop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a4.5 4.5 0 0 0-4.5 4.5V7H3v16h18V7h-4.5V5.5A4.5 4.5 0 0 0 12 1m2.5 4.5V7h-5V5.5a2.5 2.5 0 0 1 5 0m-7 6.5V9h2v3zm7 0V9h2v3z"></svg:path>`,
})
export class TdesignShopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShrimpIcon],svg[tdesign-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.598 5.99L14 9.588V5c1.324 0 2.55.359 3.598.99M12 5v6h-2c-2.023 0-3.784-.591-5.02-1.614C3.765 8.38 3 6.913 3 5zm2 9.415l3.59 3.592A7 7 0 0 1 14 19zM12 17v2H8a2 2 0 0 1 2-2zm2 4c2.19 0 4.215-.798 5.773-2.095A8.94 8.94 0 0 0 23 12a9.03 9.03 0 0 0-3.218-6.898A8.9 8.9 0 0 0 14 3H1v2c0 2.505 1.027 4.538 2.706 5.927C5.366 12.301 7.604 13 10 13h2v2h-2a4 4 0 0 0-4 4v2zm5.153-4.258L15.413 13h5.517a6.9 6.9 0 0 1-1.777 3.742M20.928 11h-5.513l3.737-3.735A7.03 7.03 0 0 1 20.928 11M9.002 5.998H6.998v2.004h2.004z"></svg:path>`,
})
export class TdesignShrimpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShrimpFilledIcon],svg[tdesign-shrimp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 21v-6H9a4 4 0 0 0-4 4v2zm0-18H1v1.375c0 2.283 1.074 4.104 2.757 5.322C5.414 10.897 7.634 11.5 10 11.5h2.5zM8.002 4.998v2.004H5.998V4.998zm6.498 9.417v6.571c1.8-.1 3.468-.736 4.832-1.736zM22.946 13a8.9 8.9 0 0 1-2.14 4.895L15.913 13zm-2.142-6.886A9 9 0 0 1 22.944 11h-7.028zM14.5 9.587l4.838-4.835A8.9 8.9 0 0 0 14.5 3.013z"></svg:path>`,
})
export class TdesignShrimpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShrinkHorizontalIcon],svg[tdesign-shrink-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 11h5.086l-2.5-2.5L5.5 7.086L10.414 12L5.5 16.914L4.086 15.5l2.5-2.5H1.5zM13 3v18h-2V3zm.586 9L18.5 7.086L19.914 8.5l-2.5 2.5H22.5v2h-5.086l2.5 2.5l-1.414 1.414z"></svg:path>`,
})
export class TdesignShrinkHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShrinkVerticalIcon],svg[tdesign-shrink-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1.5v5.086l2.5-2.5L16.914 5.5L12 10.414L7.086 5.5L8.5 4.086l2.5 2.5V1.5zM21 13H3v-2h18zm-9 .586l4.914 4.914l-1.414 1.414l-2.5-2.5V22.5h-2v-5.086l-2.5 2.5L7.086 18.5z"></svg:path>`,
})
export class TdesignShrinkVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShutterIcon],svg[tdesign-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.288 6.004L7.504 9.96l3.924-6.943a8.98 8.98 0 0 0-6.14 2.986M13.65 3.15L11.475 7h8.01a9 9 0 0 0-5.835-3.85M20.488 9H15.96l4.025 7.156A8.96 8.96 0 0 0 21 12c0-1.053-.18-2.063-.512-3m-1.768 8.987L16.5 14.04l-3.904 6.94a8.98 8.98 0 0 0 6.124-2.993m-8.347 2.866L12.54 17H4.515a9 9 0 0 0 5.858 3.853M3.512 15H8.04l-1.413-2.511L4.02 7.833A8.96 8.96 0 0 0 3 12c0 1.053.18 2.063.512 3m6.823 0h3.33l1.688-3l-1.688-3h-3.32l-1.697 3.001zM3.289 5.282a10.98 10.98 0 0 1 9.939-4.214A11.01 11.01 0 0 1 22.084 7.6c.59 1.348.916 2.837.916 4.4c0 2.522-.85 4.85-2.28 6.705a10.98 10.98 0 0 1-9.92 4.23A11.01 11.01 0 0 1 1.916 16.4A11 11 0 0 1 1 12c0-2.528.854-4.86 2.289-6.718"></svg:path>`,
})
export class TdesignShutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShutterFilledIcon],svg[tdesign-shutter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.81 1.362l-3.312 5.842h10.404a11.02 11.02 0 0 0-7.093-5.842m7.811 7.76h-6.823l5.196 9.214A10.95 10.95 0 0 0 23 12c0-.995-.133-1.96-.38-2.878m-2.954 10.766l-3.35-5.935l-5.086 9.02q.38.027.77.027c2.981 0 5.686-1.187 7.666-3.112M9.214 22.644l3.301-5.85H2.097a11.02 11.02 0 0 0 7.117 5.85M1.38 14.876h6.822L3.016 5.652A10.95 10.95 0 0 0 1 12c0 .995.132 1.959.38 2.876M4.344 4.101a10.97 10.97 0 0 1 8.45-3.072l-5.108 9.017z"></svg:path>`,
})
export class TdesignShutterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShutupIcon],svg[tdesign-shutup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm-3 3.586l1 1l1-1L14.414 14l-1 1l1 1L13 17.414l-1-1l-1 1L9.586 16l1-1l-1-1z"></svg:path>`,
})
export class TdesignShutupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignShutupFilledIcon],svg[tdesign-shutup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-6 4.586l-1-1L9.586 14l1 1l-1 1L11 17.414l1-1l1 1L14.414 16l-1-1l1-1L13 12.586z"></svg:path>`,
})
export class TdesignShutupFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCardIcon],svg[tdesign-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586 1H21v22H3V5.586zm.828 2L5 6.414V21h14V3zM8 8.998h2.004v2.004H8zm6 0h2.004v2.004H14zM13 9v5h-2V9zm-3 3v5H8v-5zm6 0v5h-2v-5zm-5.002 2.998h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard1Icon],svg[tdesign-sim-card-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586 1H21v22H3V5.586zm.828 2L5 6.414V21h14V3zM10.5 9.006h3v7.982h-2v-5.982h-1z"></svg:path>`,
})
export class TdesignSimCard1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard1FilledIcon],svg[tdesign-sim-card-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7.586L3 5.586V23h18zm-9.5 15.988v-5.982h-1v-2h3v7.982z"></svg:path>`,
})
export class TdesignSimCard1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard2Icon],svg[tdesign-sim-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586 1H21v22H3V5.586zm.828 2L5 6.414V21h14V3zM12 10a1 1 0 0 0-1 1v1H9v-1a3 3 0 1 1 5.149 2.094l-.028.028l-1.841 1.611H15v2H9v-1.787l3.739-3.272A1 1 0 0 0 12 10"></svg:path>`,
})
export class TdesignSimCard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard2FilledIcon],svg[tdesign-sim-card-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7.586L3 5.586V23h18zM11 11v1H9v-1a3 3 0 1 1 5.149 2.094l-.028.028l-1.841 1.611H15v2H9v-1.787l3.739-3.272A1 1 0 1 0 11 11"></svg:path>`,
})
export class TdesignSimCard2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCardFilledIcon],svg[tdesign-sim-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7.586L3 5.586V23h18zM10.004 8.998v2.004H8V8.998zM11 14V9h2v5zm-3 3v-5h2v5zm8 0h-2v-5h2zm-2-8.002h2.004v2.004H14zm-.998 6v2.004h-2.004v-2.004z"></svg:path>`,
})
export class TdesignSimCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSinisterSmileIcon],svg[tdesign-sinister-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H8v1H6zm8 0h4v2h-2v1h-2zm-5.1 4.634l.5.865C9.922 15.4 10.89 16 12 16s2.08-.601 2.6-1.5l.5-.866l1.731 1.001l-.5.866A5 5 0 0 1 12 18a5 5 0 0 1-4.33-2.5l-.501-.865z"></svg:path>`,
})
export class TdesignSinisterSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSinisterSmileFilledIcon],svg[tdesign-sinister-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v3h2v-1h2zm8 0h-4v3h2v-1h2zm-8.6 5.5l-.5-.866l-1.731 1.001l.5.866A5 5 0 0 0 12 18a5 5 0 0 0 4.33-2.5l.501-.865l-1.731-1.001l-.5.865A3 3 0 0 1 12 16a3 3 0 0 1-2.6-1.5"></svg:path>`,
})
export class TdesignSinisterSmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSipIcon],svg[tdesign-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.781 8.132A3.424 3.424 0 1 0 15.94 3.29l-1.748 1.748l-1.286-1.285l-1.414 1.414l1.286 1.285L2.072 17.157v4.842h4.843l10.704-10.704l1.285 1.286l1.415-1.415l-1.286-1.285zm-4.576 1.749L6.086 19.999H4.072v-2.014L14.191 7.867zm-.6-3.429l1.748-1.748a1.424 1.424 0 1 1 2.014 2.014L17.62 8.466z"></svg:path>`,
})
export class TdesignSipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSipFilledIcon],svg[tdesign-sip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.558 12.356l-4.843-4.842l-9.643 9.643V22h4.842zm4.222-4.224a3.424 3.424 0 0 0-4.842-4.842L14.19 5.038l-1.286-1.285l-1.414 1.414l7.413 7.414l1.415-1.415l-1.286-1.285z"></svg:path>`,
})
export class TdesignSipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSitemapIcon],svg[tdesign-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2 5.5a3.5 3.5 0 0 1 6.855-1h6.29A3.502 3.502 0 0 1 22 5.5a3.5 3.5 0 0 1-6.855 1h-6.29q-.105.35-.276.665l8.256 8.256a3.5 3.5 0 1 1-1.414 1.414L7.165 8.579q-.315.172-.665.276v6.29A3.502 3.502 0 0 1 5.5 22a3.5 3.5 0 0 1-1-6.855v-6.29A3.5 3.5 0 0 1 2 5.5M18.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-13 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignSitemapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSitemapFilledIcon],svg[tdesign-sitemap-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a3.5 3.5 0 0 1 6.855-1h6.29A3.502 3.502 0 0 1 22 5.5a3.5 3.5 0 0 1-6.855 1h-6.29q-.105.35-.276.665l8.256 8.256a3.5 3.5 0 1 1-1.414 1.414L7.165 8.579q-.315.172-.665.276v6.29A3.502 3.502 0 0 1 5.5 22a3.5 3.5 0 0 1-1-6.855v-6.29A3.5 3.5 0 0 1 2 5.5"></svg:path>`,
})
export class TdesignSitemapFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSlashIcon],svg[tdesign-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.366 2.974l-11 19.052l-1.732-1l11-19.052z"></svg:path>`,
})
export class TdesignSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSleepIcon],svg[tdesign-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m7-3.5v1a.5.5 0 0 0 1 0v-1h2v1a2.5 2.5 0 0 1-5 0v-1zm7 0v1a.5.5 0 0 0 1 0v-1h2v1a2.5 2.5 0 0 1-5 0v-1zM11 14h2.004v2.004H11z"></svg:path>`,
})
export class TdesignSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSleepFilledIcon],svg[tdesign-sleep-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M8 9.5v-1H6v1a2.5 2.5 0 0 0 5 0v-1H9v1a.5.5 0 0 1-1 0m7 0v-1h-2v1a2.5 2.5 0 0 0 5 0v-1h-2v1a.5.5 0 0 1-1 0M13.004 14H11v2.004h2.004z"></svg:path>`,
})
export class TdesignSleepFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSliceIcon],svg[tdesign-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.186 18.962l7.974 2.683l4.657-4.657l1.185 1.185l8.057-8.059a4.606 4.606 0 0 0-6.515-6.513zm10.13-7.303l6.643-6.644A2.606 2.606 0 1 1 20.645 8.7l-6.643 6.645zm1.087 3.915l-3.78 3.78l-3.742-1.26l5.021-5.02z"></svg:path>`,
})
export class TdesignSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSliceFilledIcon],svg[tdesign-slice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.186 18.962l7.974 2.683l4.657-4.657l1.185 1.185l8.057-8.059a4.606 4.606 0 0 0-6.515-6.513zm11.217-3.388l-3.78 3.78l-3.742-1.26l5.021-5.02z"></svg:path>`,
})
export class TdesignSliceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSlideshowIcon],svg[tdesign-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v18H6zm2 2v14h8V5zM1 5h3.5v14H1v-2h1.5V7H1zm18.5 0H23v2h-1.5v10H23v2h-3.5z"></svg:path>`,
})
export class TdesignSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSlideshowFilledIcon],svg[tdesign-slideshow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h12v18H6zM1 5h3.5v14H1v-2h1.5V7H1zm18.5 0H23v2h-1.5v10H23v2h-3.5z"></svg:path>`,
})
export class TdesignSlideshowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSmileIcon],svg[tdesign-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-8.1 5.634l.5.865C9.922 15.4 10.89 16 12 16s2.08-.601 2.6-1.5l.5-.866l1.731 1.001l-.5.866A5 5 0 0 1 12 18a5 5 0 0 1-4.33-2.5l-.501-.865z"></svg:path>`,
})
export class TdesignSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSmileFilledIcon],svg[tdesign-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-7.6 2.5l-.5-.866l-1.731 1.001l.5.866A5 5 0 0 0 12 18a5 5 0 0 0 4.33-2.5l.501-.865l-1.731-1.001l-.5.865A3 3 0 0 1 12 16a3 3 0 0 1-2.6-1.5"></svg:path>`,
})
export class TdesignSmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSneerIcon],svg[tdesign-sneer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm2.718 4.78l-.25.97c-.269 1.045-.793 1.895-1.613 2.467c-.806.563-1.792.783-2.855.783h-1v-2h1c.8 0 1.343-.167 1.71-.423c.353-.246.647-.646.822-1.326l.249-.969z"></svg:path>`,
})
export class TdesignSneerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSneerFilledIcon],svg[tdesign-sneer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-1.532 5.75l.25-.97l-1.937-.498l-.25.969c-.174.68-.468 1.08-.82 1.326c-.368.256-.91.423-1.711.423h-1v2h1c1.063 0 2.049-.22 2.855-.783c.82-.572 1.344-1.422 1.613-2.468"></svg:path>`,
})
export class TdesignSneerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSnowflakeIcon],svg[tdesign-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1.586l1-1L15.414 3L13 5.414v4.203l3.943-3.98l1.42 1.407l-3.949 3.987l4.169-.028L21 8.586L22.414 10l-1 1H23v2h-1.586l1 1L21 15.414l-2.411-2.411l-4.175.028l3.95 3.912l-1.407 1.421L13 14.446v4.14L15.414 21L14 22.414l-1-1V23h-2v-1.586l-1 1L8.586 21L11 18.586v-4.14l-3.957 3.918l-1.407-1.421l3.95-3.912l-4.175-.028L3 15.414L1.586 14l1-1H1v-2h1.586l-1-1L3 8.586l2.417 2.417l4.169.028l-3.95-3.988l1.421-1.407L11 9.617V5.414L8.586 3L10 1.586l1 1V1z"></svg:path>`,
})
export class TdesignSnowflakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSonicIcon],svg[tdesign-sonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM9 6v12H7V6zm8 0v12h-2V6zM5 9v6H3V9zm16 0v6h-2V9z"></svg:path>`,
})
export class TdesignSonicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundIcon],svg[tdesign-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm13.98-8.933l.603.798a7 7 0 0 1-.003 8.44l-.603.798l-1.595-1.206l.603-.798a5 5 0 0 0 .002-6.03l-.603-.797zM18.186 9.09l.603.798a3.5 3.5 0 0 1-.001 4.22l-.604.798L16.59 13.7l.603-.797a1.5 1.5 0 0 0 .001-1.809l-.603-.798z"></svg:path>`,
})
export class TdesignSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundDownIcon],svg[tdesign-sound-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zM16 11h8v2h-8z"></svg:path>`,
})
export class TdesignSoundDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundDownFilledIcon],svg[tdesign-sound-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM24 11h-8v2h8z"></svg:path>`,
})
export class TdesignSoundDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundFilledIcon],svg[tdesign-sound-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM21.581 7.78l-.602-.799l-1.596 1.206l.602.798a5 5 0 0 1-.002 6.03l-.603.797l1.595 1.206l.603-.797a7 7 0 0 0 .003-8.442"></svg:path><svg:path fill="currentColor" d="m18.789 9.889l-.603-.798l-1.596 1.205l.603.798a1.5 1.5 0 0 1 0 1.809l-.604.797l1.595 1.207l.603-.798a3.5 3.5 0 0 0 .002-4.22"></svg:path>`,
})
export class TdesignSoundFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundHighIcon],svg[tdesign-sound-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm13.45-10.28l.708.708a8 8 0 0 1 0 11.314l-.707.707l-1.415-1.415l.708-.707a6 6 0 0 0 0-8.485l-.707-.707zm-3.181 3.183l1.414-1.414l.707.707a5.5 5.5 0 0 1 0 7.778l-.707.707l-1.414-1.414l.707-.707a3.5 3.5 0 0 0 0-4.95zm-.354.353l.707.707a3 3 0 0 1 0 4.243l-.707.707l-1.414-1.414l.707-.707a1 1 0 0 0 0-1.414l-.707-.707z"></svg:path>`,
})
export class TdesignSoundHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundHighFilledIcon],svg[tdesign-sound-high-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM21.157 6.343l-.707-.707l-1.415 1.414l.708.707a6 6 0 0 1 0 8.485l-.707.707l1.414 1.415l.707-.707a8 8 0 0 0 0-11.314"></svg:path><svg:path fill="currentColor" d="m18.682 7.404l-1.414 1.414l.707.707a3.5 3.5 0 0 1 0 4.95l-.707.707l1.414 1.414l.707-.707a5.5 5.5 0 0 0 0-7.778z"></svg:path><svg:path fill="currentColor" d="M17.621 14.121a3 3 0 0 0 0-4.243l-.707-.707l-1.414 1.415l.707.707a1 1 0 0 1 0 1.414l-.707.707l1.414 1.414z"></svg:path>`,
})
export class TdesignSoundHighFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundLowIcon],svg[tdesign-sound-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm11.683-8.512l.707.707a5.5 5.5 0 0 1 0 7.778l-.707.707l-1.414-1.414l.707-.707a3.5 3.5 0 0 0 0-4.95l-.707-.707z"></svg:path>`,
})
export class TdesignSoundLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundLowFilledIcon],svg[tdesign-sound-low-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zm12.389-10.1l-.707-.707l-1.414 1.414l.707.707a3.5 3.5 0 0 1 0 4.95l-.707.707l1.414 1.414l.707-.707a5.5 5.5 0 0 0 0-7.778"></svg:path>`,
})
export class TdesignSoundLowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMuteIcon],svg[tdesign-sound-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22.71L9.737 17.5H5v-11h4.737L19 1.29zM8.999 8.5H7v7h1.999zm2 7.415L17 19.29V4.71l-6.001 3.375z"></svg:path>`,
})
export class TdesignSoundMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMute1Icon],svg[tdesign-sound-mute-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zm10.88-7.45L20 10.584l2.121-2.12l1.415 1.413L21.414 12l2.121 2.121l-1.414 1.414L20 13.414l-2.121 2.121l-1.415-1.414L18.587 12l-2.121-2.122z"></svg:path>`,
})
export class TdesignSoundMute1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMute1FilledIcon],svg[tdesign-sound-mute-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zm13-7.624l-2.12-2.122l-1.415 1.415l2.121 2.12l-2.121 2.122l1.414 1.414L20 13.415l2.122 2.12l1.414-1.414L21.415 12l2.12-2.121l-1.413-1.415z"></svg:path>`,
})
export class TdesignSoundMute1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundMuteFilledIcon],svg[tdesign-sound-mute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17.5v-11H5v11zm10 5.21l-8-4.5V5.79l8-4.5z"></svg:path>`,
})
export class TdesignSoundMuteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundUpIcon],svg[tdesign-sound-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.29v21.42L5.737 17.5H1v-11h4.737zM4.999 8.5H3v7h1.999zm2 7.415L13 19.29V4.71L6.999 8.084zM19 8h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class TdesignSoundUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSoundUpFilledIcon],svg[tdesign-sound-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM21 8h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class TdesignSoundUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSpaceIcon],svg[tdesign-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9v5h18V9h2v7H1V9z"></svg:path>`,
})
export class TdesignSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSpeechlessIcon],svg[tdesign-speechless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm-5 5h6v2H9z"></svg:path>`,
})
export class TdesignSpeechlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSpeechless1Icon],svg[tdesign-speechless-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h5v6h3v2H9v-6H6zm8 0h4v2h-4z"></svg:path>`,
})
export class TdesignSpeechless1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSpeechless1FilledIcon],svg[tdesign-speechless-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M11 9H6v2h3v6h5v-2h-3zm7 0h-4v2h4z"></svg:path>`,
})
export class TdesignSpeechless1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSpeechlessFilledIcon],svg[tdesign-speechless-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-3 7v-2H9v2z"></svg:path>`,
})
export class TdesignSpeechlessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStarIcon],svg[tdesign-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.259 9.161l8.839-.18zm0 6.092l-1.47 4.23l-4.478.091l3.569 2.706l-1.297 4.287L12 15.478l3.676 2.558l-1.296-4.287l3.568-2.706l-4.477-.09z"></svg:path>`,
})
export class TdesignStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStarFilledIcon],svg[tdesign-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18z"></svg:path>`,
})
export class TdesignStarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStatueOfJesusIcon],svg[tdesign-statue-of-jesus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1h4v4h-4zM2 6h20v2.66l-7 3V17h.78l1.5 6H6.72l1.5-6H9v-5.34l-7-3zm7 3.483V8H5.539zM11 8v2.586l2 2V8zm4 0v1.483L18.461 8zm-2 7.414l-2-2V17h2zM14.22 19H9.78l-.5 2h5.44z"></svg:path>`,
})
export class TdesignStatueOfJesusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStatueOfJesusFilledIcon],svg[tdesign-statue-of-jesus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1h4v4h-4zM2 6h20v2.66l-7 3V17h.78l1.5 6H6.72l1.5-6H9v-5.34l-7-3zm7 3.483V8H5.539zM11 8v2.586l2 2V8zm4 0v1.483L18.461 8zm-2 7.414l-2-2V17h2z"></svg:path>`,
})
export class TdesignStatueOfJesusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStickyNoteIcon],svg[tdesign-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v12.414L14.414 22H2zm2 2v16h9v-7h7V4zm14.586 11H15v3.586zM6 8h12v2H6zm0 4h5v2H6z"></svg:path>`,
})
export class TdesignStickyNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStickyNoteFilledIcon],svg[tdesign-sticky-note-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M16.414 22H2V2h20v14.414zm-.914-6.5V20l4.5-4.5zM18 10V8H6v2zm-7 4v-2H6v2z"></svg:path>`,
})
export class TdesignStickyNoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStopIcon],svg[tdesign-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h8v8H8z"></svg:path>`,
})
export class TdesignStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStopCircleIcon],svg[tdesign-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12"></svg:path><svg:path fill="currentColor" d="M8 8h8v8H8z"></svg:path>`,
})
export class TdesignStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStopCircleFilledIcon],svg[tdesign-stop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m4 7v8H8V8z"></svg:path>`,
})
export class TdesignStopCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStopCircleStrokeIcon],svg[tdesign-stop-circle-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m7-4h8v8H8zm2 2v4h4v-4z"></svg:path>`,
})
export class TdesignStopCircleStrokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStopCircleStrokeFilledIcon],svg[tdesign-stop-circle-stroke-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m4 7v8H8V8z"></svg:path>`,
})
export class TdesignStopCircleStrokeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStoreIcon],svg[tdesign-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2.5h17v2h-17zm-.82 3h18.64l1.18 5.901V13.5H21v8h-2v-8h-5v8H3v-8H1.5v-2.099zm2.32 8v6h7v-6zm15.48-2l-.8-4H4.32l-.8 4z"></svg:path>`,
})
export class TdesignStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStoreFilledIcon],svg[tdesign-store-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2.5h17v2h-17zm-.82 3h18.64l1.18 5.901V13.5H21v8h-2v-8h-5v8H3v-8H1.5v-2.099zm2.32 8v6h7v-6z"></svg:path>`,
})
export class TdesignStoreFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoadIcon],svg[tdesign-street-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm14.372 2.343L6.657 13.372l-1.029-1.715l2.111-1.267L5.64 6.611l1.749-.97l2.066 3.72l7.888-4.733zm0 6l-2.111 1.267l2.099 3.779l-1.748.97l-2.067-3.72l-7.888 4.733l-1.029-1.715l11.715-7.029z"></svg:path>`,
})
export class TdesignStreetRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoad1Icon],svg[tdesign-street-road-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm6.177 2.216l-2.393 11.96l-1.96-.391L8.215 5.823zm5.608-.393l2.392 11.962l-1.962.392l-2.392-11.961zM13 7v3h-2V7zm0 4v3h-2v-3zm0 4v3h-2v-3z"></svg:path>`,
})
export class TdesignStreetRoad1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoad1FilledIcon],svg[tdesign-street-road-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM7.784 18.177l2.393-11.962l-1.962-.392l-2.392 11.961zm10.393-.393l-2.393-11.96l-1.96.391l2.391 11.962zM13 10V7h-2v3zm0 4v-3h-2v3zm0 4v-3h-2v3z"></svg:path>`,
})
export class TdesignStreetRoad1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoadFilledIcon],svg[tdesign-street-road-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM6.657 13.372l11.715-7.03l-1.03-1.714L9.456 9.36L7.388 5.64l-1.748.971l2.1 3.78l-2.112 1.266zm9.604.238l2.11-1.267l-1.028-1.715l-11.715 7.029l1.029 1.715l7.887-4.733l2.067 3.72l1.749-.97z"></svg:path>`,
})
export class TdesignStreetRoadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSubtitleIcon],svg[tdesign-subtitle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm2 5a2 2 0 0 1 2-2h4v2H7v4h4v2H7a2 2 0 0 1-2-2zm8 0a2 2 0 0 1 2-2h4v2h-4v4h4v2h-4a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignSubtitleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSubtitleFilledIcon],svg[tdesign-subtitle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM7 8h4v2H7v4h4v2H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m8 0h4v2h-4v4h4v2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class TdesignSubtitleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSubwayLineIcon],svg[tdesign-subway-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v3h9.17A3 3 0 0 1 18 3.17V2h2v1.17a3.001 3.001 0 0 1 0 5.66V19H8.83A3 3 0 0 1 7 20.83V22H5v-1.17A3 3 0 0 1 3.17 19H2v-2h1.17A3 3 0 0 1 5 15.17V7H2V5h3V2zm0 5v8.17A3 3 0 0 1 8.83 17H18V8.83A3 3 0 0 1 16.17 7zm12-2a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TdesignSubwayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSubwayLineFilledIcon],svg[tdesign-subway-line-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v3h9.17A3 3 0 0 1 18 3.17V2h2v1.17a3.001 3.001 0 0 1 0 5.66V19H8.83A3 3 0 0 1 7 20.83V22H5v-1.17A3 3 0 0 1 3.17 19H2v-2h1.17A3 3 0 0 1 5 15.17V7H2V5h3V2zm0 5v8.17A3 3 0 0 1 8.83 17H18V8.83A3 3 0 0 1 16.17 7z"></svg:path>`,
})
export class TdesignSubwayLineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSumIcon],svg[tdesign-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.586 3H21v2H6.414l7 7l-7 7H21v2H1.586l9-9z"></svg:path>`,
})
export class TdesignSumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSunFallIcon],svg[tdesign-sun-fall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3h-2V3zm7.485 3.928L18.364 9.05L16.95 7.636l2.121-2.122zM4.93 5.514l2.12 2.122L5.636 9.05L3.515 6.929zM12 10a4 4 0 0 0-4 4v1H6v-1a6 6 0 0 1 12 0v1h-2v-1a4 4 0 0 0-4-4M1 13h3v2H1zm19 0h3v2h-3zM1 17h8.303L12 18.798L14.697 17H23v2h-7.697L12 21.202L8.697 19H1z"></svg:path>`,
})
export class TdesignSunFallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSunFallFilledIcon],svg[tdesign-sun-fall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3h-2V3zm7.485 3.928L18.364 9.05L16.95 7.636l2.121-2.122zM4.93 5.514l2.12 2.122L5.636 9.05L3.515 6.929zM6 15v-1a6 6 0 0 1 12 0v1zm-5-2h3v2H1zm19 0h3v2h-3zM1 17h8.303L12 18.798L14.697 17H23v2h-7.697L12 21.202L8.697 19H1z"></svg:path>`,
})
export class TdesignSunFallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSunRisingIcon],svg[tdesign-sun-rising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3h-2V3zm7.485 3.928L18.364 9.05L16.95 7.636l2.121-2.122zM4.93 5.514l2.12 2.122L5.636 9.05L3.515 6.929zM12 10a4 4 0 0 0-4 4v1H6v-1a6 6 0 0 1 12 0v1h-2v-1a4 4 0 0 0-4-4M1 13h3v2H1zm19 0h3v2h-3zm-8 2.798L15.303 18H23v2h-8.303L12 18.202L9.303 20H1v-2h7.697z"></svg:path>`,
})
export class TdesignSunRisingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSunRisingFilledIcon],svg[tdesign-sun-rising-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3h-2V3zm7.485 3.928L18.364 9.05L16.95 7.636l2.121-2.122zM4.93 5.514l2.12 2.122L5.636 9.05L3.515 6.929zM6 15v-1a6 6 0 0 1 12 0v1zm-5-2h3v2H1zm19 0h3v2h-3zm-8 2.798L15.303 18H23v2h-8.303L12 18.202L9.303 20H1v-2h7.697z"></svg:path>`,
})
export class TdesignSunRisingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSunnyIcon],svg[tdesign-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v3h-2V1zm7.485 3.928L18.364 7.05L16.95 5.636l2.121-2.122zM4.93 3.514l2.12 2.122L5.636 7.05L3.515 4.929zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m-5-1h3v2H1zm19 0h3v2h-3zM7.05 18.363l-2.12 2.123l-1.415-1.416l2.121-2.122zm11.314-1.414l2.121 2.122l-1.414 1.414l-2.121-2.121zM13 20v3h-2v-3z"></svg:path>`,
})
export class TdesignSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSunnyFilledIcon],svg[tdesign-sunny-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v3h-2V1zm7.485 3.928L18.364 7.05L16.95 5.636l2.121-2.122zM4.93 3.514l2.12 2.122L5.636 7.05L3.515 4.929zM6 12a6 6 0 1 1 12 0a6 6 0 0 1-12 0m-5-1h3v2H1zm19 0h3v2h-3zM7.05 18.363l-2.12 2.123l-1.415-1.416l2.121-2.122zm11.314-1.414l2.121 2.122l-1.414 1.414l-2.121-2.121zM13 20v3h-2v-3z"></svg:path>`,
})
export class TdesignSunnyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSupportIcon],svg[tdesign-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.382 4.968l2.86 2.86a5.01 5.01 0 0 1 5.516 0l2.86-2.86a9.004 9.004 0 0 0-11.236 0m12.65 1.414l-2.86 2.86a5.01 5.01 0 0 1 0 5.516l2.86 2.86a9.004 9.004 0 0 0 0-11.236m-1.414 12.65l-2.86-2.86a5.01 5.01 0 0 1-5.516 0l-2.86 2.86a9.004 9.004 0 0 0 11.236 0m-12.65-1.414l2.86-2.86a5.01 5.01 0 0 1 0-5.516l-2.86-2.86a9.004 9.004 0 0 0 0 11.236M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0s-4.296-11.26 0-15.556m9.9 5.657a3 3 0 1 0-4.243 4.242A3 3 0 0 0 14.12 9.88"></svg:path>`,
})
export class TdesignSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSupportFilledIcon],svg[tdesign-support-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.96 3.546L9.615 8.2a4.49 4.49 0 0 1 4.773 0l4.652-4.652a11 11 0 0 0-14.078 0M20.454 4.96L15.8 9.615a4.49 4.49 0 0 1 0 4.772l4.653 4.653a11 11 0 0 0 0-14.078M19.04 20.454L14.387 15.8a4.49 4.49 0 0 1-4.773 0L4.96 20.455a11 11 0 0 0 14.079 0M3.547 19.04L8.2 14.385a4.49 4.49 0 0 1 0-4.772L3.547 4.96a11 11 0 0 0 0 14.078"></svg:path>`,
})
export class TdesignSupportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSurprisedIcon],svg[tdesign-surprised-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m8 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-2 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignSurprisedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSurprised1Icon],svg[tdesign-surprised-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-5 6c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5s1-.452 1-1.5s-.644-1.5-1-1.5m-3 1.5c0-1.713 1.146-3.5 3-3.5s3 1.787 3 3.5s-1.146 3.5-3 3.5s-3-1.787-3-3.5"></svg:path>`,
})
export class TdesignSurprised1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSurprised1FilledIcon],svg[tdesign-surprised-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5c0-1.048.644-1.5 1-1.5s1 .452 1 1.5s-.644 1.5-1 1.5s-1-.452-1-1.5"></svg:path><svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-5 0c-1.854 0-3 1.787-3 3.5s1.146 3.5 3 3.5s3-1.787 3-3.5s-1.146-3.5-3-3.5"></svg:path>`,
})
export class TdesignSurprised1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSurprisedFilledIcon],svg[tdesign-surprised-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M8 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class TdesignSurprisedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwapIcon],svg[tdesign-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 3.086l7.414 7.414H2v-2h15.586l-4-4zM22 13.5v2H6.414l4 4L9 20.914L1.586 13.5z"></svg:path>`,
})
export class TdesignSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwapLeftIcon],svg[tdesign-swap-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.414 9l-4 4H22v2H1.586L9 7.586z"></svg:path>`,
})
export class TdesignSwapLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwapRightIcon],svg[tdesign-swap-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.586L22.414 15H2v-2h15.586l-4-4z"></svg:path>`,
})
export class TdesignSwapRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwear1Icon],svg[tdesign-swear-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM8.019 16.805C8.42 14.802 9.91 13 12 13s3.582 1.802 3.98 3.805L16.22 18H7.781zM10.445 16h3.11c-.422-.662-1.02-1-1.555-1s-1.133.338-1.555 1"></svg:path>`,
})
export class TdesignSwear1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwear1FilledIcon],svg[tdesign-swear-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zm-2.77 1.334c-2.09 0-3.58 1.801-3.98 3.804h7.961C15.581 15.001 14.09 13.2 12 13.2"></svg:path>`,
})
export class TdesignSwear1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwear2Icon],svg[tdesign-swear-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5.769-3.866l3.464 2l-1 1.732l-3.464-2zm11.464 1.732l-3.464 2l-1-1.732l3.464-2zM12 14c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5s1-.452 1-1.5s-.644-1.5-1-1.5m-3 1.5c0-1.713 1.146-3.5 3-3.5s3 1.787 3 3.5s-1.146 3.5-3 3.5s-3-1.787-3-3.5"></svg:path>`,
})
export class TdesignSwear2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSwear2FilledIcon],svg[tdesign-swear-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5c0-1.048.644-1.5 1-1.5c.355 0 1 .452 1 1.5s-.645 1.5-1 1.5c-.356 0-1-.452-1-1.5"></svg:path><svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-1.767-12.866l-3.464-2l-1 1.732l3.464 2zm4.536 1.732l3.464-2l-1-1.732l-3.464 2zm-2.77.134c-1.853 0-3 1.787-3 3.5s1.147 3.5 3 3.5c1.854 0 3-1.787 3-3.5S13.854 12 12 12"></svg:path>`,
})
export class TdesignSwear2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystem2Icon],svg[tdesign-system-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.37V13H8V4.052l.042-.14c.123-.413.45-1.115 1.063-1.728C9.74 1.546 10.695 1 12 1c1.306 0 2.259.546 2.895 1.184c.613.613.94 1.315 1.063 1.728l.042.14v2.385h-2V4.37a2.5 2.5 0 0 0-.52-.773C13.158 3.274 12.694 3 12 3s-1.158.274-1.48.597a2.5 2.5 0 0 0-.52.773M4.052 8h2.385v2H4.37a2.5 2.5 0 0 0-.773.52C3.274 10.842 3 11.306 3 12s.274 1.158.597 1.48c.276.276.586.442.773.52H13v2H4.052l-.14-.042c-.413-.123-1.115-.45-1.728-1.063C1.546 14.26 1 13.305 1 12c0-1.306.546-2.259 1.184-2.895c.613-.613 1.315-.94 1.728-1.063zM11 8h8.948l.14.042c.413.123 1.114.45 1.729 1.063C22.454 9.74 23 10.695 23 12c0 1.306-.546 2.259-1.183 2.895c-.614.613-1.316.94-1.729 1.063l-.14.042h-2.384v-2h2.066a2.5 2.5 0 0 0 .773-.52c.323-.322.597-.786.597-1.48s-.274-1.158-.597-1.48a2.5 2.5 0 0 0-.773-.52H11zm5 3v8.948l-.042.14c-.123.413-.45 1.114-1.063 1.729C14.26 22.454 13.305 23 12 23c-1.306 0-2.259-.546-2.895-1.183c-.613-.614-.94-1.316-1.063-1.729L8 19.948v-2.384h2v2.066c.078.187.244.497.52.773c.322.323.786.597 1.48.597s1.158-.274 1.48-.597a2.5 2.5 0 0 0 .52-.773V11z"></svg:path>`,
})
export class TdesignSystem2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystem3Icon],svg[tdesign-system-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.077A3.926 3.926 0 0 1 11 5.923V11H5.923A3.926 3.926 0 0 1 2 7.077zm2 2v3.077C4 8.137 4.864 9 5.923 9H9V5.923C9 4.863 8.136 4 7.077 4zm12.923 0C15.863 4 15 4.864 15 5.923V9h3.077C19.137 9 20 8.136 20 7.077V4zM13 5.923A3.926 3.926 0 0 1 16.923 2H22v5.077A3.926 3.926 0 0 1 18.077 11H13zM5.923 15C4.863 15 4 15.864 4 16.923V20h3.077C8.137 20 9 19.136 9 18.077V15zM2 16.923A3.926 3.926 0 0 1 5.923 13H11v5.077A3.926 3.926 0 0 1 7.077 22H2zM13 13h5.077A3.926 3.926 0 0 1 22 16.923V22h-5.077A3.926 3.926 0 0 1 13 18.077zm2 2v3.077c0 1.06.864 1.923 1.923 1.923H20v-3.077c0-1.06-.863-1.923-1.923-1.923z"></svg:path>`,
})
export class TdesignSystem3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystem3FilledIcon],svg[tdesign-system-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.077A3.926 3.926 0 0 1 11 5.923V11H5.923A3.926 3.926 0 0 1 2 7.077zm11 3.923A3.926 3.926 0 0 1 16.923 2H22v5.077A3.926 3.926 0 0 1 18.077 11H13zm-11 11A3.926 3.926 0 0 1 5.923 13H11v5.077A3.926 3.926 0 0 1 7.077 22H2zM13 13h5.077A3.926 3.926 0 0 1 22 16.923V22h-5.077A3.926 3.926 0 0 1 13 18.077z"></svg:path>`,
})
export class TdesignSystem3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemApplicationIcon],svg[tdesign-system-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v9H2v-9zm-2 2H4v5h16zm2-13v9H2V2zm-2 2H4v5h16zM7.504 16.5v2.004H5.5V16.5zm0-11v2.004H5.5V5.5z"></svg:path><svg:path fill="currentColor" d="M11.504 7.504V5.5H9.5v2.004zm0 11V16.5H9.5v2.004z"></svg:path>`,
})
export class TdesignSystemApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemApplicationFilledIcon],svg[tdesign-system-application-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v9h20zM7.004 5.5v2.004H5V5.5zm4 0v2.004H9V5.5zM22 13H2v9h20zM7.004 16.5v2.004H5V16.5zm4 2.004H9V16.5h2.004z"></svg:path>`,
})
export class TdesignSystemApplicationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemBlockedIcon],svg[tdesign-system-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v9.5h-2V3H3v13h8.5v2H1zm17.5 13a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18.5 14m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M13 17.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M2.25 21h9.25v2H2.25z"></svg:path>`,
})
export class TdesignSystemBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemBlockedFilledIcon],svg[tdesign-system-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h10.518a6.97 6.97 0 0 1 .92-4.002H3v-10h18v6.962c.734.28 1.409.681 2 1.178zM3 20h8.96c.28.734.681 1.409 1.178 2H3z"></svg:path><svg:path fill="currentColor" d="M18.5 12a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M15 17.5a3.5 3.5 0 0 1 5.165-3.08l-4.744 4.745A3.5 3.5 0 0 1 15 17.5m1.835 3.08l4.744-4.745a3.5 3.5 0 0 1-4.745 4.745"></svg:path>`,
})
export class TdesignSystemBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCodeIcon],svg[tdesign-system-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v16H1zm2 2v12h18V4zm12 2.086L18.914 10L15 13.914L13.586 12.5l2.5-2.5l-2.5-2.5zM10.414 7.5l-2.5 2.5l2.5 2.5L9 13.914L5.086 10L9 6.086zM3 20h18v2H3z"></svg:path>`,
})
export class TdesignSystemCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCodeFilledIcon],svg[tdesign-system-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h22zm-9.414 10.5l2.5-2.5l-2.5-2.5L15 6.086L18.914 10L15 13.914zM9 13.914L5.086 10L9 6.086L10.414 7.5l-2.5 2.5l2.5 2.5zM21 20H3v2h18z"></svg:path>`,
})
export class TdesignSystemCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemComponentsIcon],svg[tdesign-system-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-.663 0-1.222.548-1.222 1.25S11.337 6.5 12 6.5s1.222-.548 1.222-1.25S12.663 4 12 4M8.778 5.25C8.778 3.467 10.208 2 12 2c1.791 0 3.222 1.467 3.222 3.25A3.25 3.25 0 0 1 13 8.34v.836l3.849 2.25v4.457l.818.411a3.2 3.2 0 0 1 2.11-.794C21.57 15.5 23 16.967 23 18.75S21.569 22 19.778 22s-3.222-1.467-3.222-3.25q0-.379.082-.735l-.753-.378L12 19.908l-3.885-2.27l-.753.378q.082.355.082.734c0 1.783-1.43 3.25-3.222 3.25C2.431 22 1 20.533 1 18.75s1.431-3.25 3.222-3.25c.81 0 1.548.3 2.112.795l.817-.411v-4.458L11 9.176v-.835A3.25 3.25 0 0 1 8.778 5.25M12 10.908l-2.849 1.666v3.352L12 17.592l2.849-1.666v-3.352zm-6.775 7.126a1.22 1.22 0 0 0-1.003-.534C3.56 17.5 3 18.048 3 18.75S3.559 20 4.222 20c.664 0 1.222-.548 1.222-1.25q-.001-.22-.068-.416zm13.399.303a1.3 1.3 0 0 0-.068.413c0 .702.558 1.25 1.222 1.25S21 19.452 21 18.75s-.559-1.25-1.222-1.25c-.41 0-.779.209-1.002.533z"></svg:path>`,
})
export class TdesignSystemComponentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemComponentsFilledIcon],svg[tdesign-system-components-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.813a2.751 2.751 0 1 0-2 0v1.363l-3.85 2.25v4.458l-1.28.644a2.75 2.75 0 1 0 1.08 1.696l1.165-.587L12 19.908l3.885-2.27l1.165.585q-.05.256-.05.527a2.75 2.75 0 1 0 1.13-2.223l-1.281-.644v-4.457l-3.85-2.25z"></svg:path>`,
})
export class TdesignSystemComponentsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCoordinateIcon],svg[tdesign-system-coordinate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.272 1v2.65l6.613 3.89v7.745l2.465 1.295l-.93 1.77l-2.507-1.317l-5.641 3.317V23h-2v-2.65l-5.69-3.346l-3.12 1.304l-.77-1.845l2.967-1.24V7.539l6.613-3.889V1zm-1 4.382l-4.64 2.73l4.64 2.728l4.64-2.729zm5.613 4.477l-4.613 2.713v5.458l4.613-2.713zm-6.613 8.17v-5.457L6.66 9.859v5.458z"></svg:path>`,
})
export class TdesignSystemCoordinateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCoordinateFilledIcon],svg[tdesign-system-coordinate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.272 1v2.65l6.613 3.89v7.745l2.465 1.295l-.93 1.77l-2.507-1.317l-5.641 3.317V23h-2v-2.65l-5.69-3.346l-3.12 1.304l-.77-1.845l2.967-1.24V7.539l6.613-3.889V1zm-2 17.03v-5.458L6.66 9.859v5.458z"></svg:path>`,
})
export class TdesignSystemCoordinateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemDeviceIcon],svg[tdesign-system-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.533 1H21v21H2V6.588h4.533zm2 5.588h4.534V20H19V3H8.533zM11.067 20V8.588H4V20zM6 16h3v2H6z"></svg:path>`,
})
export class TdesignSystemDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemDeviceFilledIcon],svg[tdesign-system-device-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H8v5h5v15h9z"></svg:path><svg:path fill="currentColor" d="M2 9h9v12.998H2zm3 8v2h3v-2z"></svg:path>`,
})
export class TdesignSystemDeviceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemInterfaceIcon],svg[tdesign-system-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 7v11h16V9zm16-2V4H4v3zM6 11h2.004v2.004H6zm4 0h2.004v2.004H10zm4 0h2.004v2.004H14z"></svg:path>`,
})
export class TdesignSystemInterfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemInterfaceFilledIcon],svg[tdesign-system-interface-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v5h20zM2 9v13h20V9zm3 3h2.004v2.004H5zm4 0h2.004v2.004H9zm4 0h2.004v2.004H13z"></svg:path>`,
})
export class TdesignSystemInterfaceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLocationIcon],svg[tdesign-system-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h9v2H1zm17.5 13a2.75 2.75 0 0 0-2.75 2.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18.5 14m0 9.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.027l-.137-.098a13 13 0 0 1-1.865-1.677c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM17.25 16h2.5v2h-2.5zm-15 5H12v2H2.25z"></svg:path>`,
})
export class TdesignSystemLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLocationFilledIcon],svg[tdesign-system-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h10.75v-1.25c0-.98.209-1.912.585-2.752H3v-10h18v6.48a6.8 6.8 0 0 1 2 1.24zM3 20h8.75v2H3z"></svg:path><svg:path fill="currentColor" d="m18.5 23.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.027l-.137-.098a13 13 0 0 1-1.865-1.677c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM19.75 16h-2.5v2h2.5z"></svg:path>`,
})
export class TdesignSystemLocationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLockedIcon],svg[tdesign-system-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h10v2H1zm18.502 13.5c.69 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0v.75H15V23h9v-6.5zm-.752 2V21h-5v-2.5zM2.25 21H13v2H2.25z"></svg:path>`,
})
export class TdesignSystemLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLockedFilledIcon],svg[tdesign-system-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h12v-2c0-.698.11-1.371.314-2.002H3v-10h18v5.676c.72.17 1.395.46 2 .848zM3 20h10v2H3z"></svg:path><svg:path fill="currentColor" d="M22.752 14.75v.75H24V22h-9v-6.5h1.252v-.75a3.25 3.25 0 1 1 6.5 0m-2 0a1.25 1.25 0 0 0-2.5 0v.75h2.5z"></svg:path>`,
})
export class TdesignSystemLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLogIcon],svg[tdesign-system-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 8v10h16V10zm16-2V4H4v4zM5 5h2.004v2.004H5zm1 7h12v2H6zm0 4h6v2H6z"></svg:path>`,
})
export class TdesignSystemLogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemLogFilledIcon],svg[tdesign-system-log-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v6h20V2zm2 2h2.004v2.004H4zm-2 6v12h20V10zm3 3h14v2H5zm0 4h6v2H5z"></svg:path>`,
})
export class TdesignSystemLogFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemMarkedIcon],svg[tdesign-system-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h9.5v2H1zm13.5 11.996H23v10.295l-4.247-2.617L14.5 23.29zm2 2v4.715l2.254-1.385L21 19.709v-4.713zM2.25 21H12.5v2H2.25z"></svg:path>`,
})
export class TdesignSystemMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemMarkedFilledIcon],svg[tdesign-system-marked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h11.5v-4.002H3v-10h18V11h2zM3 20h9.5v2H3z"></svg:path><svg:path fill="currentColor" d="M23 12.996h-8.5V23.29l4.253-2.615L23 23.291z"></svg:path>`,
})
export class TdesignSystemMarkedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemMessagesIcon],svg[tdesign-system-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m15-6.766v13.532L9.723 15H6V9h3.723zm-2 3.532L10.277 11H8v2h2.277L14 15.234z"></svg:path>`,
})
export class TdesignSystemMessagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemMessagesFilledIcon],svg[tdesign-system-messages-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M9.503 14.5H6.5v-5h3.003l5.997-4v13z"></svg:path>`,
})
export class TdesignSystemMessagesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemRegulationIcon],svg[tdesign-system-regulation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v17H1zm2 2v13h18V3zm6 2v5H7V5zm4 0v3h-2V5zm4 0v5h-2V5zm-4 4v5h-2V9zm-4 2v3H7v-3zm8 0v3h-2v-3zM3.222 21h17.556v2H3.222z"></svg:path>`,
})
export class TdesignSystemRegulationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemRegulationFilledIcon],svg[tdesign-system-regulation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h22zM7 10V6h2v4zm4-2V6h2v2zm6 2h-2V6h2zm-6 4V9h2v5zm-2 0H7v-3h2zm6 0v-3h2v3zm6 6H3v2h18z"></svg:path>`,
})
export class TdesignSystemRegulationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemSearchIcon],svg[tdesign-system-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v11h-2V3H3v13h9v2H1zm17.25 14a2.75 2.75 0 0 1 1.947 4.693l-.01.008A2.75 2.75 0 1 1 18.25 15m3.992 5.325a4.75 4.75 0 1 0-1.414 1.415l1.67 1.674l1.416-1.412zM2.25 21H12v2H2.25z"></svg:path>`,
})
export class TdesignSystemSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemSearchFilledIcon],svg[tdesign-system-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h10.541a6.7 6.7 0 0 1 .792-4.002H3v-10h18v7.086a6.8 6.8 0 0 1 2 1.37zM3 20h9.084a6.8 6.8 0 0 0 1.37 2H3z"></svg:path><svg:path fill="currentColor" d="M23 17.25c0 .95-.278 1.833-.758 2.575l1.672 1.677l-1.416 1.412l-1.67-1.674A4.75 4.75 0 1 1 23 17.25m-2 0a2.75 2.75 0 1 0-.812 1.951l.009-.008A2.74 2.74 0 0 0 21 17.25"></svg:path>`,
})
export class TdesignSystemSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemSettingIcon],svg[tdesign-system-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v8.25h-2V4H3v12h8.5v2H1zm2 18h8.5v2H3z"></svg:path><svg:path fill="currentColor" d="M19.5 12v1.376c.715.184 1.352.56 1.854 1.072l1.193-.689l1 1.732l-1.192.688a4 4 0 0 1 0 2.142l1.192.688l-1 1.732l-1.193-.689a4 4 0 0 1-1.854 1.072V22.5h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688a4 4 0 0 1 1.854-1.071V12zm-2.751 4.283a2 2 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a2 2 0 0 0 3.43 0l.036-.063c.159-.287.249-.616.249-.967c0-.35-.09-.68-.249-.967l-.036-.063a2 2 0 0 0-3.43 0z"></svg:path>`,
})
export class TdesignSystemSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemSettingFilledIcon],svg[tdesign-system-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h10.768a6.7 6.7 0 0 1 .96-4.002H3v-10h18v7.23a6.8 6.8 0 0 1 2 1.24zM3 20h9.228a6.8 6.8 0 0 0 1.24 2H3z"></svg:path><svg:path fill="currentColor" d="M19.5 13.376V12h-2v1.376a4 4 0 0 0-1.854 1.072l-1.193-.689l-1 1.732l1.192.688a4 4 0 0 0 0 2.142l-1.192.688l1 1.732l1.193-.689a4 4 0 0 0 1.854 1.072V22.5h2v-1.376a4 4 0 0 0 1.854-1.072l1.192.689l1-1.732l-1.191-.688a4 4 0 0 0 0-2.142l1.191-.688l-1-1.732l-1.192.688a4 4 0 0 0-1.854-1.071m-2.715 2.844a2 2 0 0 1 3.43 0l.036.063c.159.287.249.616.249.967c0 .35-.09.68-.249.967l-.037.063a2 2 0 0 1-3.429 0l-.037-.063a2 2 0 0 1-.248-.967a2 2 0 0 1 .248-.967z"></svg:path>`,
})
export class TdesignSystemSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemStorageIcon],svg[tdesign-system-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4v3.625H11V4zM13 4v5.625H6.5V4H4v16h16V9.04L14.96 4zm2.79-2L22 8.212v13.79H2V2zM7 14v-2h10v2zm0 3v-2h6v2z"></svg:path>`,
})
export class TdesignSystemStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemStorageFilledIcon],svg[tdesign-system-storage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.79 2L22 8.212v13.79H2V2zM7 4v5h4V4zm0 9v2h10v-2zm0 3v2h6v-2z"></svg:path>`,
})
export class TdesignSystemStorageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemSumIcon],svg[tdesign-system-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.527 5.693a32 32 0 0 1 2.424 2.194a32 32 0 0 1 2.193 2.424a17.5 17.5 0 0 0 1.379-2.499c.454-1.033.681-1.914.71-2.598c.029-.682-.14-1.059-.346-1.264s-.582-.374-1.264-.345c-.683.028-1.564.255-2.598.71a17.6 17.6 0 0 0-2.498 1.378M11.839 4.42c1.163-.81 2.306-1.463 3.38-1.936c1.168-.513 2.302-.835 3.32-.878c1.02-.042 2.028.195 2.763.93s.972 1.743.93 2.762c-.044 1.018-.365 2.153-.879 3.32c-.472 1.074-1.126 2.217-1.935 3.38c.81 1.164 1.463 2.307 1.936 3.382c.513 1.167.835 2.302.878 3.32c.042 1.018-.195 2.027-.93 2.762s-1.743.972-2.762.93c-1.018-.043-2.153-.365-3.32-.879c-1.074-.472-2.218-1.126-3.381-1.936c-1.163.81-2.307 1.464-3.381 1.936c-1.167.514-2.302.835-3.32.878c-1.019.043-2.028-.194-2.762-.93c-.735-.734-.973-1.743-.93-2.762c.043-1.017.365-2.152.878-3.32c.473-1.074 1.127-2.217 1.936-3.38c-.809-1.164-1.463-2.307-1.935-3.381c-.514-1.167-.835-2.302-.878-3.32c-.043-1.019.194-2.027.93-2.762c.734-.735 1.743-.972 2.762-.93c1.017.043 2.152.365 3.32.878c1.073.473 2.217 1.127 3.38 1.936m-6.305 5.89a32 32 0 0 1 2.192-2.423a32 32 0 0 1 2.425-2.194a17.5 17.5 0 0 0-2.498-1.378c-1.034-.455-1.915-.682-2.598-.71c-.682-.029-1.06.14-1.265.345s-.374.582-.345 1.264c.029.684.256 1.565.71 2.598a17.5 17.5 0 0 0 1.379 2.499m1.212 1.688a30 30 0 0 0 2.395 2.699a30 30 0 0 0 2.698 2.395a30 30 0 0 0 2.698-2.395a30 30 0 0 0 2.395-2.699a30 30 0 0 0-2.395-2.697a30 30 0 0 0-2.698-2.396A30 30 0 0 0 9.14 9.301a30 30 0 0 0-2.395 2.697m-1.212 1.688a17.5 17.5 0 0 0-1.38 2.5c-.454 1.033-.68 1.914-.71 2.597c-.028.682.14 1.06.346 1.265s.582.374 1.264.345c.683-.029 1.565-.256 2.598-.71a17.5 17.5 0 0 0 2.5-1.38a32 32 0 0 1-2.425-2.192a32 32 0 0 1-2.193-2.425m7.993 4.618a17.5 17.5 0 0 0 2.499 1.379c1.033.454 1.915.681 2.598.71s1.059-.14 1.264-.345c.205-.206.374-.583.345-1.265c-.028-.683-.255-1.564-.71-2.598a17.5 17.5 0 0 0-1.379-2.499a32 32 0 0 1-2.193 2.425a32 32 0 0 1-2.424 2.193M11 11h2.004v2.004H11z"></svg:path>`,
})
export class TdesignSystemSumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemUnlockedIcon],svg[tdesign-system-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h10v2H1zm18.502 13.5c-.69 0-1.25.56-1.25 1.25v.75H24V23h-9v-6.5h1.252v-.75a3.25 3.25 0 0 1 5.54-2.305l.71.705l-1.41 1.418l-.71-.705a1.24 1.24 0 0 0-.88-.363M17 18.5V21h5v-2.5zM2.25 21H13v2H2.25z"></svg:path>`,
})
export class TdesignSystemUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemUnlockedFilledIcon],svg[tdesign-system-unlocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h12v-2c0-.698.11-1.371.314-2.002H3v-10h18v5.676c.72.17 1.395.46 2 .848zM3 20h10v2H3z"></svg:path><svg:path fill="currentColor" d="M18.252 14.75a1.25 1.25 0 0 1 2.13-.887l.71.705l1.41-1.418l-.71-.705a3.25 3.25 0 0 0-5.541 2.305v.75H15V22h9v-6.5h-5.748z"></svg:path>`,
})
export class TdesignSystemUnlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTabIcon],svg[tdesign-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 20h-21v-2h21zm0-16v12h-6V4zm-2 2h-2v8h2zM15 4v12H9V4zm-2 2h-2v8h2zM7.5 4v12h-6V4zm-2 2h-2v8h2z"></svg:path>`,
})
export class TdesignTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTabFilledIcon],svg[tdesign-tab-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 20h-21v-2h21zm0-16v12h-6V4zM15 4v12H9V4zM7.5 4v12h-6V4z"></svg:path>`,
})
export class TdesignTabFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTableIcon],svg[tdesign-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h20V2H2zm2-2v-5h4v5zm6 0v-5h4v5zm6 0v-5h4v5zm4-7h-4V8h4zm0-7H4V4h16zM4 8h4v5H4zm6 5V8h4v5z"></svg:path>`,
})
export class TdesignTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTable1Icon],svg[tdesign-table-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h16V4zm16 6h-4v10h4zm-6 10V10h-4v10zm-6 0V10H4v10z"></svg:path>`,
})
export class TdesignTable1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTable1FilledIcon],svg[tdesign-table-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 2H2v6h20zM7.33 10H2v12h5.33zm7.336 0H9.334v12h5.33zm2.003 0h5.33v12h-5.33z" clip-rule="evenodd"></svg:path>`,
})
export class TdesignTable1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTable2Icon],svg[tdesign-table-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 3.5h21v17h-21zm2 2v3H11v-3zm9.5 0v3h7.5v-3zm7.5 5H13v3h7.5zm0 5H13v3h7.5zm-9.5 3v-3H3.5v3zm-7.5-5H11v-3H3.5z"></svg:path>`,
})
export class TdesignTable2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTable2FilledIcon],svg[tdesign-table-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.5H1.5v4.318H11zM1.5 9.818v4.364H11V9.818zm0 6.364V20.5H11v-4.318zM13 20.5h9.5v-4.318H13zm9.5-6.318V9.818H13v4.364zm0-6.364V3.5H13v4.318z"></svg:path>`,
})
export class TdesignTable2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTableAddIcon],svg[tdesign-table-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v2h16V4zm16 4H4v12h16zm-7 2v3h3v2h-3v3h-2v-3H8v-2h3v-3z"></svg:path>`,
})
export class TdesignTableAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTableAddFilledIcon],svg[tdesign-table-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 6V4h16v2zm12 9h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class TdesignTableAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTableFilledIcon],svg[tdesign-table-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h20V2H2zm2-2v-5h4v5zm6 0v-5h4v5zm6 0v-5h4v5zm4-7h-4V8h4zM4 8h4v5H4zm6 5V8h4v5z"></svg:path>`,
})
export class TdesignTableFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTableSplitIcon],svg[tdesign-table-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v2h7V4zm9 0v2h7V4zm7 4H4v12h16zm-9.002 1.998h2.004v2.004h-2.004zm-6 3h2.004v2.004H4.998zm3 0h2.004v2.004H7.998zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm3 0h2.004v2.004h-2.004zm-6 3h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignTableSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTableSplitFilledIcon],svg[tdesign-table-split-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM4 6h7V4H4zm9 0h7V4h-7zm.002 4.75h-2.004v2.004h2.004zm-6 3H4.998v2.004h2.004zm3 0H7.998v2.004h2.004zm3 0h-2.004v2.004h2.004zm3 0h-2.004v2.004h2.004zm3 0h-2.004v2.004h2.004zm-6 3h-2.004v2.004h2.004z"></svg:path>`,
})
export class TdesignTableSplitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTagIcon],svg[tdesign-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.878 23.02l-9.9-9.9L11.1 3.016l9.9-.017v9.917zm.001-2.827L19 12.085V5.002l-7.07.012l-8.122 8.108zm4.117-11.19V7H17v2.004z"></svg:path>`,
})
export class TdesignTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTagFilledIcon],svg[tdesign-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.979 13.12l9.899 9.9L21 12.915V2.998l-9.9.017zm14.017-4.116V7H17v2.004z"></svg:path>`,
})
export class TdesignTagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTangerinrIcon],svg[tdesign-tangerinr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.504 1.586l2.521 2.535l2.712-2.534l1.365 1.46l-1.023.958c.786.037 1.572.297 2.206.587c.657.3 1.262.683 1.642 1.028c1.51 1.155 2.981 3.706 3.069 6.616c.091 3.042-1.322 6.402-5.492 9.04a4.9 4.9 0 0 1-1.596.625c-.542.112-1.149.145-1.695.015a5.6 5.6 0 0 1-.838-.26l-.07-.027a.2.2 0 0 0-.055-.016A2 2 0 0 0 12 21.6c-.155 0-.222.007-.25.012a.2.2 0 0 0-.055.016l-.07.027a5.6 5.6 0 0 1-.838.26c-.546.13-1.153.097-1.695-.015a4.9 4.9 0 0 1-1.596-.626c-4.17-2.637-5.583-5.996-5.492-9.038c.088-2.911 1.559-5.462 3.07-6.617c.379-.345.984-.728 1.641-1.028c.678-.31 1.529-.586 2.37-.592l-1-1.004zM7.546 6.41c-.555.253-.975.545-1.141.702l-.043.041l-.048.036c-1 .745-2.24 2.728-2.31 5.107c-.07 2.276.937 4.996 4.561 7.288c.244.154.578.285.93.357c.36.074.656.07.83.028c.303-.071.433-.122.569-.175l.103-.04c.298-.111.557-.154 1.003-.154s.706.043 1.003.154l.103.04c.136.053.266.104.568.175c.175.042.47.046.83-.028c.353-.072.687-.203.93-.357c3.625-2.292 4.631-5.012 4.563-7.289c-.072-2.378-1.312-4.361-2.31-5.106l-.049-.036l-.043-.04c-.166-.158-.586-.45-1.141-.703c-.553-.252-1.118-.41-1.567-.41c-.854 0-1.503.17-1.843.3A3 3 0 0 1 12 6.513c-.412 0-.775-.112-1.044-.214c-.34-.129-.99-.3-1.843-.3c-.449 0-1.014.159-1.567.411M8 8.001h2.004v2.003H8zm-2 3h2.004v2.003H6zm2 3h2.004v2.003H8z"></svg:path>`,
})
export class TdesignTangerinrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTangerinrFilledIcon],svg[tdesign-tangerinr-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.868 4.547l1.542-1.55l-1.418-1.411l-2.421 2.435a3.3 3.3 0 0 0-.605-.838c-.646-.65-1.467-.93-2.184-1.044a7 7 0 0 0-1.911-.014c-.253.03-.465.069-.616.1c-.603.122-1.199.288-1.793.453q-.402.114-.805.22L7.76 4.704l-.036.01c-1.587.454-3.048 1.257-4.103 2.64S2 10.595 2 13c0 3.006 1.111 5.305 2.996 6.83c1.854 1.5 4.35 2.167 7.004 2.167c2.652 0 5.15-.664 7.005-2.163C20.89 18.312 22.002 16.013 22 13c-.001-2.414-.59-4.27-1.652-5.65c-1.062-1.376-2.517-2.177-4.066-2.633c-.44-.13-.931-.173-1.414-.169M7 8h2.004v2.004H7zm-2 3h2.004v2.004H5zm4.004 3v2.004H7V14z"></svg:path>`,
})
export class TdesignTangerinrFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTapeIcon],svg[tdesign-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5h-1.465l-2 3H6.465l-2-3zm3.869 0l.666 1h8.93l.666-1zM8 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m11-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTapeFilledIcon],svg[tdesign-tape-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v18h22V3zm17 4H6L4.5 5h15zm-8 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m9 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class TdesignTapeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskIcon],svg[tdesign-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v20H3V3h4zm0 4H5v16h14V5h-2v2H7zm8-2H9v2h6zm-6 8h6v2H9zm0 4h6v2H9z"></svg:path>`,
})
export class TdesignTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTask1Icon],svg[tdesign-task-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v20H3V3h4zm0 4H5v16h14V5h-2v2H7zm8-2H9v2h6z"></svg:path>`,
})
export class TdesignTask1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTask1FilledIcon],svg[tdesign-task-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M3 3h3v4h12V3h3v20H3z"></svg:path>`,
})
export class TdesignTask1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskAddIcon],svg[tdesign-task-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v9h-2V5h-2v2H7V5H5v16h7v2H3V3h4zm2 4h6V3H9zm11 9v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path>`,
})
export class TdesignTaskAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskAdd1Icon],svg[tdesign-task-add-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18h1v2h-1C5.925 23 1 18.075 1 12S5.925 1 12 1c1.498 0 2.928.3 4.232.844l.923.385l-.77 1.846l-.923-.385A9 9 0 0 0 12 3m11.414 1.5L12 15.914L6.086 10L7.5 8.586l4.5 4.5l10-10zM20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class TdesignTaskAdd1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskAddFilledIcon],svg[tdesign-task-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h10.876A6.5 6.5 0 0 1 21 12.814V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M24 20h-4v4h-2v-4h-4v-2h4v-4h2v4h4z"></svg:path>`,
})
export class TdesignTaskAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskCheckedIcon],svg[tdesign-task-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v11h-2V5h-2v2H7V5H5v16h6v2H3V3h4zm2 4h6V3H9zm14.657 11.586l-7.07 7.07l-4.243-4.242L13.758 18l2.828 2.828l5.657-5.656z"></svg:path>`,
})
export class TdesignTaskCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskChecked1Icon],svg[tdesign-task-checked-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 9 9v-1h2v1c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1c1.498 0 2.928.3 4.232.844l.923.385l-.77 1.846l-.923-.385A9 9 0 0 0 12 3m11.414 1.5L12 15.914L6.086 10L7.5 8.586l4.5 4.5l10-10z"></svg:path>`,
})
export class TdesignTaskChecked1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskCheckedFilledIcon],svg[tdesign-task-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h9.876A6.5 6.5 0 0 1 21 13.232V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M12.344 19.414L13.758 18l2.828 2.828l5.657-5.656l1.415 1.414l-7.072 7.07z"></svg:path>`,
})
export class TdesignTaskCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskDoubleIcon],svg[tdesign-task-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15h-5v-2h5z"></svg:path><svg:path fill="currentColor" d="M12 2V0h-2v2H6v17h15V2h-4V0h-2v2zm3 4h2V4h2v13H8V4h2v2h2V4h3z"></svg:path><svg:path fill="currentColor" d="M4 21V6H2v17h13v-2z"></svg:path>`,
})
export class TdesignTaskDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskDoubleFilledIcon],svg[tdesign-task-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v2h3V0h2v2h4v17H6V2h4V0zm-1 15h5v-2h-5z"></svg:path><svg:path fill="currentColor" d="M4 6v15h11v2H2V6z"></svg:path>`,
})
export class TdesignTaskDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskErrorIcon],svg[tdesign-task-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v9h-2V5h-2v2H7V5H5v16h7v2H3V3h4zm2 4h6V3H9zm7.172 9.757L19 17.586l2.828-2.829l1.415 1.415L20.414 19l2.829 2.828l-1.415 1.415L19 20.414l-2.828 2.829l-1.415-1.415L17.586 19l-2.829-2.828z"></svg:path>`,
})
export class TdesignTaskErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskErrorFilledIcon],svg[tdesign-task-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h10.876A6.5 6.5 0 0 1 21 12.814V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="m23.243 21.828l-1.414 1.415L19 20.414l-2.828 2.829l-1.414-1.415L17.586 19l-2.828-2.828l1.414-1.415L19 17.586l2.829-2.829l1.414 1.415L20.415 19z"></svg:path>`,
})
export class TdesignTaskErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskFilledIcon],svg[tdesign-task-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M3 3h3v4h12V3h3v20H3zm12 10v-2H9v2zm0 4v-2H9v2z"></svg:path>`,
})
export class TdesignTaskFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskLocationIcon],svg[tdesign-task-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 0v2h7V0h2v2H21v8.5h-2V9H5v12h9v2H3V2h3.5V0zM5 7h14V4H5zm13.75 7A2.75 2.75 0 0 0 16 16.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18.75 14m0 9.701c-.25-.167-.506-.329-.75-.506a13 13 0 0 1-1.865-1.677C15.14 20.424 14 18.75 14 16.75a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-1.865 1.677c-.244.177-.5.339-.75.506M17.5 16H20v2h-2.5z"></svg:path>`,
})
export class TdesignTaskLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskLocationFilledIcon],svg[tdesign-task-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M3 3h3v4h12V3h3v7.917a6.25 6.25 0 0 0-8.5 5.833c0 2.563 1.445 4.589 2.525 5.777q.229.25.452.473H3z"></svg:path><svg:path fill="currentColor" d="m18.75 23.701l-.203-.134a14 14 0 0 1-.547-.372a13 13 0 0 1-1.865-1.677C15.14 20.424 14 18.75 14 16.75a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-1.865 1.677c-.179.13-.363.25-.547.372zM17.5 16v2H20v-2z"></svg:path>`,
})
export class TdesignTaskLocationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskMarkedIcon],svg[tdesign-task-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v8h-2V5h-2v2H7V5H5v16h7.5v2H3V3h4zm2 4h6V3H9zm5.75 7.996h8.5v10.295l-4.247-2.617l-4.253 2.615zm2 2v4.715l2.254-1.385l2.246 1.383v-4.713z"></svg:path>`,
})
export class TdesignTaskMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskMarkedFilledIcon],svg[tdesign-task-marked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h9.75V11H21V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M14.75 12.996h8.5v10.295l-4.247-2.617l-4.253 2.615z"></svg:path>`,
})
export class TdesignTaskMarkedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskSettingIcon],svg[tdesign-task-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v9h-2V5h-2v2H7V5H5v16h7v2H3V3h4zm2 4h6V3H9zm11 8.75v1.376c.715.184 1.352.56 1.854 1.072l1.193-.689l1 1.732l-1.192.688a4 4 0 0 1 0 2.142l1.192.688l-1 1.732l-1.193-.689A4 4 0 0 1 20 22.874v1.376h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.689A4 4 0 0 1 18 15.126V13.75zm-2.751 4.283a2 2 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a2 2 0 0 0 3.43 0l.036-.063A2 2 0 0 0 21 19c0-.35-.09-.68-.249-.967l-.036-.063a2 2 0 0 0-3.43 0z"></svg:path>`,
})
export class TdesignTaskSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskSettingFilledIcon],svg[tdesign-task-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h10.876A6.5 6.5 0 0 1 21 12.814V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M20 13.75v1.376c.715.184 1.352.56 1.854 1.072l1.192-.689l1 1.732l-1.191.688a4 4 0 0 1 0 2.142l1.191.688l-1 1.732l-1.192-.689A4 4 0 0 1 20 22.874v1.376h-2v-1.376a4 4 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4 4 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.689A4 4 0 0 1 18 15.126V13.75zm-2.751 4.283a2 2 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a2 2 0 0 0 3.43 0l.036-.063A2 2 0 0 0 21 19c0-.35-.09-.68-.249-.967l-.037-.063a2 2 0 0 0-3.429 0z"></svg:path>`,
})
export class TdesignTaskSettingFilledIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskTimeIcon],svg[tdesign-task-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h10v2h4v8h-2V5h-2v2H7V5H5v16h6v2H3V3h4zm2 4h6V3H9z"></svg:path><svg:path fill="currentColor" d="M18 14.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m6.5-2.248v1.834L20.414 19L19 20.414l-2-2v-2.662z"></svg:path>`,
})
export class TdesignTaskTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskTimeFilledIcon],svg[tdesign-task-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M3 3h3v4h12V3h3v8.674A7 7 0 0 0 13.101 23H3z"></svg:path><svg:path fill="currentColor" d="M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m7.914 1L19 17.586v-1.834h-2v2.662l2 2z"></svg:path>`,
})
export class TdesignTaskTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskVisibleIcon],svg[tdesign-task-visible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1H7v2H3v20h7v-2H5V5h2v2h10V5h2v8h2V3h-4zm-2 4H9V3h6zm.75 15v-2h2.5v2z"></svg:path><svg:path fill="currentColor" d="M17.002 23.5c4.419 0 6.09-4.5 6.09-4.5s-1.673-4.5-6.09-4.5s-6.09 4.5-6.09 4.5s1.672 4.5 6.09 4.5m-.002-2c-2.615 0-3.87-2.5-3.87-2.5s1.25-2.5 3.87-2.5s3.87 2.5 3.87 2.5s-1.254 2.5-3.87 2.5"></svg:path>`,
})
export class TdesignTaskVisibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskVisibleFilledIcon],svg[tdesign-task-visible-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h8.911a9 9 0 0 1-.557-.55a9.7 9.7 0 0 1-1.214-1.626a11 11 0 0 1-.603-1.23l-.258-.596l.257-.595c.17-.395.357-.813.604-1.228c.262-.44.66-1.029 1.214-1.626c1.107-1.192 2.974-2.547 5.644-2.55A7.33 7.33 0 0 1 21 14.168V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M21.548 16.569c-.93-1.002-2.427-2.07-4.547-2.07c-2.119.002-3.616 1.07-4.546 2.071a8.2 8.2 0 0 0-1.277 1.832a8 8 0 0 0-.165.366l-.099.232l.1.231c.047.113.102.24.164.366a8.2 8.2 0 0 0 1.277 1.833c.93 1.002 2.427 2.07 4.547 2.07s3.616-1.068 4.546-2.07a8.2 8.2 0 0 0 1.277-1.833c.063-.126.117-.253.165-.366l.1-.231l-.1-.232a7 7 0 0 0-.165-.365a8.2 8.2 0 0 0-1.277-1.834M18.25 18v2h-2.5v-2z"></svg:path>`,
})
export class TdesignTaskVisibleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTeaIcon],svg[tdesign-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v5H9V2zM7 3v4H5V3zm8 0v4h-2V3zM2.927 8H21v5a4 4 0 0 1-4 4h-.933a6.67 6.67 0 0 1-2.583 3H20v2H3v-2h3.506a6.6 6.6 0 0 1-3.084-5.039v-.007zm13.648 7H17a2 2 0 0 0 2-2v-3h-2.068l-.353 4.954v.007zm-1.648-5H5.074l.341 4.797A4.603 4.603 0 0 0 10 19c2.059 0 3.836-1.38 4.412-3.289c.09-.295.145-.587.173-.914z"></svg:path>`,
})
export class TdesignTeaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTeaFilledIcon],svg[tdesign-tea-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v5H9V2zM7 3v4H5V3zm8 0v4h-2V3zM2.927 8H21v5a4 4 0 0 1-4 4h-.933a6.67 6.67 0 0 1-2.583 3H20v2H3v-2h3.506a6.6 6.6 0 0 1-3.084-5.039v-.007zm13.648 7H17a2 2 0 0 0 2-2v-3h-2.068l-.353 4.954v.007z"></svg:path>`,
})
export class TdesignTeaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTeahouseIcon],svg[tdesign-teahouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v1h8V2h2v1h1v2h-1v1.667L20.5 10H22v2h-1v8h1v2H2v-2h1v-8H2v-2h1.5L6 6.667V5H5V3h1V2zm0 3v1h8V5zm8.5 3h-9L6 10h12zm2.5 4h-3v8h3zm-5 8v-8h-4v8zm-6 0v-8H5v8z"></svg:path>`,
})
export class TdesignTeahouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTeahouseFilledIcon],svg[tdesign-teahouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v1h8V2h2v1h1v2h-1v1.667L20.5 10H22v2h-1v8h1v2H2v-2h1v-8H2v-2h1.5L6 6.667V5H5V3h1V2zm0 3v1h8V5zm11 7h-3v8h3zm-5 8v-8h-4v8zm-6 0v-8H5v8z"></svg:path>`,
})
export class TdesignTeahouseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTemplateIcon],svg[tdesign-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h16V4zm16 6h-9v10h9zM9 20V10H4v10z"></svg:path>`,
})
export class TdesignTemplateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTemplateFilledIcon],svg[tdesign-template-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v6h20zm0 8H11v12h11zM9 22V10H2v12z"></svg:path>`,
})
export class TdesignTemplateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTempleIcon],svg[tdesign-temple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.586L19.414 9H21v2h-1v9h2v2H2v-2h2v-9H3V9h1.586zM6 11v9h5v-9zm7 0v9h5v-9zm3.586-2L12 4.414L7.414 9z"></svg:path>`,
})
export class TdesignTempleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTempleFilledIcon],svg[tdesign-temple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.586L19.414 9H21v2h-1v9h2v2H2v-2h2v-9H3V9h1.586zM6 11v9h5v-9zm7 0v9h5v-9z"></svg:path>`,
})
export class TdesignTempleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalIcon],svg[tdesign-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5.586L9.914 12L3.5 18.414L2.086 17l5-5l-5-5zM12 18h10v2H12z"></svg:path>`,
})
export class TdesignTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangleIcon],svg[tdesign-terminal-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v18H1V3zm-2 2H3v14h18zm-2 12h-7v-2h7zm-8.93-5l-3.739 3.744l-1.415-1.413L7.244 12L4.916 9.67L6.33 8.255z"></svg:path>`,
})
export class TdesignTerminalRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangle1Icon],svg[tdesign-terminal-rectangle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v3h18V5zm18 5H3v9h18zM7 11.086l3.414 3.414L7 17.914L5.586 16.5l2-2l-2-2zM12 15h6v2h-6z"></svg:path>`,
})
export class TdesignTerminalRectangle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangle1FilledIcon],svg[tdesign-terminal-rectangle-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8.005V3H1v5.005zm0 1.99H1V21h22zM7 12.084l3.414 3.414L7 18.912l-1.414-1.414l2-2l-2-2zm5 4.414h6v2h-6z"></svg:path>`,
})
export class TdesignTerminalRectangle1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalRectangleFilledIcon],svg[tdesign-terminal-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21V3H1v18zm-12.93-9l-3.739 3.744l-1.415-1.413L7.244 12L4.916 9.669l1.415-1.413zM19 17h-7v-2h7z"></svg:path>`,
})
export class TdesignTerminalRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalWindowIcon],svg[tdesign-terminal-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM3 10h18v9H3zm0-2V5h18v3zm4 9H5v-5h2z"></svg:path>`,
})
export class TdesignTerminalWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalWindowFilledIcon],svg[tdesign-terminal-window-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8V3H1v5zm0 1.998H1V21h22zM5 18v-5h2v5z"></svg:path>`,
})
export class TdesignTerminalWindowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextboxIcon],svg[tdesign-textbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm7 4.5H6v-2h12v2h-5V18h-2z"></svg:path>`,
})
export class TdesignTextboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextboxFilledIcon],svg[tdesign-textbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM6 8.5h5V18h2V8.5h5v-2H6z"></svg:path>`,
})
export class TdesignTextboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatBoldIcon],svg[tdesign-textformat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5v18h9a5 5 0 0 0 2.436-9.367A5 5 0 0 0 13 3zm7 8H7V5h6a3 3 0 1 1 0 6m-6 2h7a3 3 0 1 1 0 6H7z"></svg:path>`,
})
export class TdesignTextformatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatColorIcon],svg[tdesign-textformat-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.813 17.525l-.394-.919l-6-14L13.16 2h-2.32l-.26.606l-6 14l-.393.92l1.838.787l.394-.92l1.824-4.254h7.515l1.823 4.255l.394.92zM9.791 11.14H9.1L12 4.372l2.9 6.767H9.791M19 22h1v-2H4v2z"></svg:path>`,
})
export class TdesignTextformatColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatItalicIcon],svg[tdesign-textformat-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3H18v2h-3.67l-2.625 14H16.5v2H6v-2h3.67l2.625-14H7.5z"></svg:path>`,
})
export class TdesignTextformatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatStrikethroughIcon],svg[tdesign-textformat-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.977 3.083C9.3 2.276 10.87 2 12.003 2c2.454 0 4.286.991 6.053 2.161l.834.553l-1.104 1.667l-.834-.552C15.279 4.722 13.855 4 12.002 4c-.87 0-2.054.222-2.983.79c-.88.536-1.522 1.363-1.522 2.709c0 .456.078.827.2 1.132l.37.929l-1.858.74l-.37-.929A5 5 0 0 1 5.497 7.5c0-2.158 1.11-3.58 2.48-4.417M4 11h16v2h-2.963c.853.801 1.463 1.932 1.463 3.504c0 2.158-1.11 3.58-2.48 4.417c-1.323.807-2.892 1.082-4.025 1.082c-2.457 0-4.286-.989-6.051-2.17l-.832-.556l1.113-1.662l.83.556c1.666 1.114 3.086 1.832 4.94 1.832c.871 0 2.054-.223 2.983-.79c.88-.536 1.522-1.363 1.522-2.71c0-1.302-.638-2.05-1.549-2.564c-.948-.536-2.116-.767-3.047-.938h-3.9V13H4z"></svg:path>`,
})
export class TdesignTextformatStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatUnderlineIcon],svg[tdesign-textformat-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v9a6 6 0 0 1-12 0V3h2v9a4 4 0 0 0 8 0V3zM4 20h16v2H4z"></svg:path>`,
})
export class TdesignTextformatUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatWrapIcon],svg[tdesign-textformat-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm0 7h15c1.148 0 2.38.284 3.35 1.012C21.36 12.77 22 13.946 22 15.5s-.64 2.73-1.65 3.488C19.38 19.716 18.148 20 17 20h-5.414l1.707-1.707l2-2l.707-.707L17.414 17l-.707.707l-.293.293H17c.852 0 1.62-.216 2.15-.613c.49-.367.85-.941.85-1.887s-.36-1.52-.85-1.887C18.62 13.216 17.852 13 17 13H2zm1 7H2v2h8v-2z"></svg:path>`,
})
export class TdesignTextformatWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTheatersIcon],svg[tdesign-theaters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2V2h20zM20 4h-2.5v2.5H20zm0 4.5h-2.5V11H20zm0 4.5h-2.5v2.5H20zm-2.5 4.5V20H20v-2.5zm-2-2V13H15v-2h.5V8.5H15v-2h.5V4h-7v2.5H9v2h-.5V11H9v2h-.5v2.5H9v2h-.5V20h7v-2.5H15v-2zM6.5 4H4v2.5h2.5zm0 4.5H4V11h2.5zm0 4.5H4v2.5h2.5zm0 4.5H4V20h2.5z"></svg:path>`,
})
export class TdesignTheatersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTheatersFilledIcon],svg[tdesign-theaters-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2V2h20zM20 4h-2.5v2.5H20zm0 4.5h-2.5V11H20zm0 4.5h-2.5v2.5H20zm-2.5 4.5V20H20v-2.5zM6.5 4H4v2.5h2.5zm0 4.5H4V11h2.5zm0 4.5H4v2.5h2.5zm0 4.5H4V20h2.5z"></svg:path>`,
})
export class TdesignTheatersFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDownIcon],svg[tdesign-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.879 22.617l1.279-.213A4 4 0 0 0 15.5 18.46V16h5.32a2 2 0 0 0 1.972-2.329l-1.666-10a2 2 0 0 0-1.973-1.67H7v11.197zm1.234-2.254L9 12.803V4h10.153l1.667 10H13.5v4.459a2 2 0 0 1-1.387 1.904M4 14V2H2v12z"></svg:path>`,
})
export class TdesignThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDown1Icon],svg[tdesign-thumb-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.446 22.236l-1.716-.572a3.7 3.7 0 0 1-2.53-3.51V15.7H5.332a3 3 0 0 1-2.965-3.456l1.184-7.7A3 3 0 0 1 6.516 2H21v11.9h-3.85zm-1.09-2.472L15.85 11.9H19V4H6.515a1 1 0 0 0-.988.848l-1.185 7.7a1 1 0 0 0 .989 1.152H11.2v4.454a1.7 1.7 0 0 0 1.154 1.61"></svg:path>`,
})
export class TdesignThumbDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDown1FilledIcon],svg[tdesign-thumb-down-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.446 22.236l-1.716-.572a3.7 3.7 0 0 1-2.53-3.51V15.7H5.332a3 3 0 0 1-2.965-3.456l1.184-7.7A3 3 0 0 1 6.516 2H21v11.9h-3.85z"></svg:path>`,
})
export class TdesignThumbDown1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDown2Icon],svg[tdesign-thumb-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.446 22.236l-1.716-.572a3.7 3.7 0 0 1-2.53-3.51V15.7H5.332a3 3 0 0 1-2.965-3.456l1.184-7.7A3 3 0 0 1 6.516 2H22v11.9h-4.85zM17.5 11.9H20V4h-2.5zm-2-7.9H6.517a1 1 0 0 0-.988.848l-1.185 7.7a1 1 0 0 0 .989 1.152H11.2v4.454a1.7 1.7 0 0 0 1.154 1.61l3.146-7.076z"></svg:path>`,
})
export class TdesignThumbDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDown2FilledIcon],svg[tdesign-thumb-down-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.73 21.664l1.716.572L17.15 13.9V2H6.516a3 3 0 0 0-2.965 2.544l-1.184 7.7A3 3 0 0 0 5.332 15.7H9.2v2.454a3.7 3.7 0 0 0 2.53 3.51M22 13.9V2h-2.85v11.9z"></svg:path>`,
})
export class TdesignThumbDown2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDownFilledIcon],svg[tdesign-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.879 22.617l1.279-.213A4 4 0 0 0 15.5 18.46V16h5.32a2 2 0 0 0 1.972-2.329l-1.666-10A2 2 0 0 0 19.153 2H7v11.198zM4 14V2H2v12z"></svg:path>`,
})
export class TdesignThumbDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUpIcon],svg[tdesign-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.879 1.383l1.279.213A4 4 0 0 1 15.5 5.54V8h5.32a2 2 0 0 1 1.972 2.329l-1.666 10a2 2 0 0 1-1.973 1.67H7V10.803zm1.234 2.254L9 11.197V20h10.153l1.667-10H13.5V5.54a2 2 0 0 0-1.387-1.904M4 10v12H2V10z"></svg:path>`,
})
export class TdesignThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUp1Icon],svg[tdesign-thumb-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.555 1.764l1.715.572a3.7 3.7 0 0 1 2.53 3.51V8.3h3.869a3 3 0 0 1 2.965 3.456l-1.185 7.7A3 3 0 0 1 17.484 22H3V10.1h3.85zm1.09 2.472L8.15 12.1H5V20h12.484a1 1 0 0 0 .988-.848l1.185-7.7a1 1 0 0 0-.988-1.152H12.8V5.846a1.7 1.7 0 0 0-1.155-1.61"></svg:path>`,
})
export class TdesignThumbUp1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUp1FilledIcon],svg[tdesign-thumb-up-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.555 1.764l1.715.572a3.7 3.7 0 0 1 2.53 3.51V8.3h3.869a3 3 0 0 1 2.965 3.456l-1.185 7.7A3 3 0 0 1 17.484 22H3V10.1h3.85z"></svg:path>`,
})
export class TdesignThumbUp1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUp2Icon],svg[tdesign-thumb-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.555 1.764l1.715.572a3.7 3.7 0 0 1 2.53 3.51V8.3h3.869a3 3 0 0 1 2.965 3.456l-1.185 7.7A3 3 0 0 1 17.484 22H2V10.1h4.85zM6.5 12.1H4V20h2.5zm2 7.9h8.984a1 1 0 0 0 .988-.848l1.185-7.7a1 1 0 0 0-.988-1.152H12.8V5.846a1.7 1.7 0 0 0-1.155-1.61L8.5 11.312z"></svg:path>`,
})
export class TdesignThumbUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUp2FilledIcon],svg[tdesign-thumb-up-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.27 2.336l-1.715-.572L6.85 10.1V22h10.634a3 3 0 0 0 2.965-2.544l1.185-7.7A3 3 0 0 0 18.668 8.3H14.8V5.846a3.7 3.7 0 0 0-2.53-3.51M2 10.1V22h2.85V10.1z"></svg:path>`,
})
export class TdesignThumbUp2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUpFilledIcon],svg[tdesign-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.158 1.596A4 4 0 0 1 15.5 5.54V8h5.32a2 2 0 0 1 1.973 2.329l-1.667 10a2 2 0 0 1-1.973 1.67H7V10.803l3.879-9.42zM4 22H2V10h2z"></svg:path>`,
})
export class TdesignThumbUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderIcon],svg[tdesign-thunder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 5h-.064C8.6 5.033 6.7 6.935 6.7 9.2q0 .394.073.765l.184.956l-.95.21C4.832 11.391 4 12.391 4 13.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 16.822 2 15.309 2 13.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 9.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074c1.285.969 2.127 2.49 2.127 4.214c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.775-1.843l.922-.388C19.16 15.193 20 14.01 20 12.667c0-1.051-.511-1.998-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 5m2.777 5.677L11.817 14h4.018l-4.023 6.38l-1.691-1.067L12.21 16H8.226l3.95-6.377z"></svg:path>`,
})
export class TdesignThunderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderstormIcon],svg[tdesign-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 5h-.064C8.6 5.033 6.7 6.935 6.7 9.2q0 .394.073.765l.184.956l-.95.21C4.832 11.391 4 12.391 4 13.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 16.822 2 15.309 2 13.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 9.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074c1.285.969 2.127 2.49 2.127 4.214c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.775-1.843l.922-.388C19.16 15.193 20 14.01 20 12.667c0-1.051-.511-1.998-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 5m2.777 5.677L11.817 14h4.018l-4.023 6.38l-1.691-1.067L12.21 16H8.226l3.95-6.377zm-6.879 7.321h2.004v2.004H6.998zm8 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignThunderstormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderstormNightIcon],svg[tdesign-thunderstorm-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.131.901l-.102 1.185q-.017.194-.017.394a4.505 4.505 0 0 0 4.899 4.488l1.185-.102l-.103 1.184a6.5 6.5 0 0 1-2.162 4.3a5.2 5.2 0 0 1 1.186 3.309c0 2.212-1.383 4.085-3.316 4.898l-.921.388l-.776-1.844l.922-.387c1.25-.526 2.09-1.71 2.09-3.055c0-1.052-.51-2-1.332-2.62a3.6 3.6 0 0 0-2.172-.718h-.059l-.854.014l-.146-.842C15.17 9.87 13.9 8.535 12.215 8.118a4.6 4.6 0 0 0-1.172-.134c-2.438.034-4.34 1.938-4.34 4.205q0 .393.072.766l.184.956l-.95.21C4.833 14.38 4 15.38 4 16.526c0 .948.567 1.793 1.434 2.207l.902.432l-.864 1.804l-.902-.431C3.064 19.817 2 18.303 2 16.526c0-1.831 1.126-3.378 2.708-4.074a6 6 0 0 1-.005-.263c0-3.146 2.398-5.699 5.463-6.138a6.51 6.51 0 0 1 5.78-5.047zm-4.9 5.178q.234.041.463.097c2.15.531 3.883 2.122 4.538 4.19a5.6 5.6 0 0 1 2.045.676a4.5 4.5 0 0 0 1.5-2.099a6.51 6.51 0 0 1-5.723-5.722a4.52 4.52 0 0 0-2.823 2.858m1.646 7.577l-2.06 3.323h4.018l-4.023 6.38l-1.691-1.067l2.089-3.313H8.226l3.95-6.376z"></svg:path>`,
})
export class TdesignThunderstormNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderstormNightFilledIcon],svg[tdesign-thunderstorm-night-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.131.901l-.102 1.185q-.017.194-.017.394a4.505 4.505 0 0 0 4.899 4.488l1.185-.102l-.103 1.184a6.5 6.5 0 0 1-2.162 4.3a5.2 5.2 0 0 1 1.186 3.309c0 2.212-1.383 4.085-3.316 4.898l-.921.388l-.776-1.844l.922-.387c1.25-.526 2.09-1.71 2.09-3.055c0-1.052-.51-2-1.332-2.62a3.6 3.6 0 0 0-2.207-.718h-.024l-.854.014l-.146-.842C14.17 9.87 12.9 8.535 11.215 8.118a4.6 4.6 0 0 0-1.172-.134c-2.438.034-4.34 1.938-4.34 4.205q0 .393.072.766l.184.956l-.95.21C3.833 14.38 3 15.38 3 16.526c0 .948.567 1.793 1.434 2.207l.902.432l-.864 1.804l-.902-.431C2.064 19.817 1 18.303 1 16.526c0-1.831 1.126-3.378 2.708-4.074a6 6 0 0 1-.005-.263c0-3.146 2.398-5.699 5.463-6.138a6.51 6.51 0 0 1 5.78-5.047zm-3.254 12.755l-2.06 3.323h4.018l-4.023 6.38l-1.691-1.067l2.089-3.313H7.226l3.95-6.376z"></svg:path>`,
})
export class TdesignThunderstormNightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderstormSunnyIcon],svg[tdesign-thunderstorm-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.003 1v2.004H14V1zm-5.95 1.635l1.417 1.417l-1.417 1.417l-1.417-1.417zm9.898 0l1.416 1.416l-1.415 1.417l-1.418-1.416zm-8.992 3.42A7 7 0 0 0 10.1 6c-3.499 0-6.4 2.74-6.4 6.2q0 .132.006.263C2.125 13.158 1 14.703 1 16.533c0 1.776 1.063 3.288 2.568 4.009l.902.431l.864-1.804l-.902-.431C3.566 18.323 3 17.48 3 16.534c0-1.143.832-2.143 2.007-2.403l.95-.21l-.184-.955A4 4 0 0 1 5.7 12.2C5.7 9.916 7.634 8 10.1 8q.576.002 1.106.134c1.683.416 2.952 1.75 3.234 3.372l.147.841l.854-.013h.059a3.6 3.6 0 0 1 1.759.45C18.314 13.37 19 14.451 19 15.667c0 1.344-.84 2.526-2.088 3.051l-.922.388l.775 1.843l.922-.387C19.618 19.749 21 17.877 21 15.667c0-1.575-.702-2.979-1.803-3.949a5 5 0 0 0-8.238-5.663m2.108.65a3 3 0 0 1 4.413 3.984a5.6 5.6 0 0 0-1.26-.31c-.507-1.601-1.66-2.916-3.153-3.673M21 8h2.004v2.004H21zm-8.123 5.677L10.817 17h4.018l-4.023 6.38l-1.691-1.067L11.21 19H7.226l3.95-6.377z"></svg:path>`,
})
export class TdesignThunderstormSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderstormSunnyFilledIcon],svg[tdesign-thunderstorm-sunny-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.003 1v2.004H14V1zm-5.95 1.635l1.417 1.417l-1.417 1.417l-1.417-1.417zm9.898 0l1.416 1.416l-1.415 1.417l-1.418-1.416zm-8.992 3.42A7 7 0 0 0 10.1 6c-3.499 0-6.4 2.74-6.4 6.2q0 .132.006.263C2.125 13.158 1 14.703 1 16.533c0 1.776 1.063 3.288 2.568 4.009l.902.431l.864-1.804l-.902-.431C3.566 18.323 3 17.48 3 16.534c0-1.143.832-2.143 2.007-2.403l.95-.21l-.184-.955A4 4 0 0 1 5.7 12.2C5.7 9.916 7.634 8 10.1 8q.576.002 1.106.134c1.683.416 2.952 1.75 3.234 3.372l.147.841l.854-.013h.059a3.6 3.6 0 0 1 1.759.45C18.314 13.37 19 14.451 19 15.667c0 1.344-.84 2.526-2.088 3.051l-.922.388l.775 1.843l.922-.387C19.618 19.749 21 17.877 21 15.667c0-1.575-.702-2.979-1.803-3.949a5 5 0 0 0-8.238-5.663M21 8h2.004v2.004H21zm-8.123 5.677L10.817 17h4.018l-4.023 6.38l-1.691-1.067L11.21 19H7.226l3.95-6.377z"></svg:path>`,
})
export class TdesignThunderstormSunnyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTicketIcon],svg[tdesign-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h22v5.469l-.57.271a2.5 2.5 0 0 0 0 4.52l.57.271V20H1v-5.469l.57-.271a2.5 2.5 0 0 0 0-4.52L1 9.47zm2 2v2.258c1.205.806 2 2.18 2 3.742a4.5 4.5 0 0 1-2 3.742V18h18v-2.258A4.5 4.5 0 0 1 19 12c0-1.561.795-2.936 2-3.742V6zm5 3h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class TdesignTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTicketFilledIcon],svg[tdesign-ticket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h22v5.041a3 3 0 0 0 0 5.918V20H1v-5.041A3 3 0 0 0 1 9.04zm15 7V9H8v2zm0 4v-2H8v2z"></svg:path>`,
})
export class TdesignTicketFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTimeIcon],svg[tdesign-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8 4.414l-4-4V5.5h2v6.086L16.414 15z"></svg:path>`,
})
export class TdesignTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTimeFilledIcon],svg[tdesign-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m1-17.5h-2v6.914l4 4L16.414 15L13 11.586z"></svg:path>`,
})
export class TdesignTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsIcon],svg[tdesign-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v17h-7.586L12 22.414L8.586 19H1V2zm-2 2H3v13h6.414L12 19.586L14.586 17H21z"></svg:path>`,
})
export class TdesignTipsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsDoubleIcon],svg[tdesign-tips-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H6v11h4.914l2.586 2.586L16.086 18H21zm2 13h-6.086L13.5 23.414L10.086 20H4V5h19zM19 3.5H2.5v12h-2v-14H19z"></svg:path>`,
})
export class TdesignTipsDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsDoubleFilledIcon],svg[tdesign-tips-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20h-6.086L13.5 23.414L10.086 20H4V5h19zM19 3.5H2.5v12h-2v-14H19z"></svg:path>`,
})
export class TdesignTipsDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsFilledIcon],svg[tdesign-tips-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v17h-7.586L12 22.414L8.586 19H1V2z"></svg:path>`,
})
export class TdesignTipsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTomatoIcon],svg[tdesign-tomato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.504 1.586l2.521 2.535l2.712-2.534l1.365 1.46l-1.023.958c.415.019.816.097 1.203.211c1.06.312 2.108.916 2.644 1.404c1.511 1.154 2.982 3.705 3.07 6.616c.091 3.042-1.322 6.402-5.492 9.04a4.9 4.9 0 0 1-1.596.625c-.542.112-1.149.145-1.695.015a5.6 5.6 0 0 1-.838-.26l-.07-.027a.2.2 0 0 0-.055-.016A2 2 0 0 0 12 21.6c-.155 0-.222.007-.25.012a.2.2 0 0 0-.055.016l-.07.027a5.6 5.6 0 0 1-.838.26c-.546.13-1.153.097-1.695-.015a4.9 4.9 0 0 1-1.596-.626c-4.17-2.637-5.583-5.996-5.492-9.038c.088-2.911 1.559-5.462 3.07-6.617c.536-.489 1.566-1.096 2.651-1.406A5.2 5.2 0 0 1 9.085 4l-1-1.004zm.966 4.568l.839.802a1 1 0 0 0 1.382 0l.84-.802c-.2.047-.364.1-.487.146A3 3 0 0 1 12 6.514c-.412 0-.775-.112-1.044-.214a4 4 0 0 0-.486-.146m5.777.17L14.073 8.4a3 3 0 0 1-4.146 0L7.75 6.321c-.62.253-1.137.595-1.345.792l-.043.041l-.048.036c-1 .745-2.24 2.728-2.31 5.107c-.07 2.276.937 4.996 4.561 7.288c.244.154.578.285.93.357c.36.074.656.07.83.028c.303-.071.433-.122.569-.175l.103-.04c.298-.111.557-.154 1.003-.154s.706.043 1.003.154l.103.04c.136.053.266.104.568.175c.175.042.47.046.83-.028c.353-.072.687-.203.93-.357c3.625-2.292 4.631-5.012 4.563-7.289c-.072-2.378-1.312-4.361-2.31-5.106l-.049-.036l-.043-.04c-.2-.191-.726-.533-1.348-.79"></svg:path>`,
})
export class TdesignTomatoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTomatoFilledIcon],svg[tdesign-tomato-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 4.121L9.504 1.586l-1.418 1.41l1.05 1.056c-.482-.005-.972.037-1.41.162c-1.588.454-3.049 1.257-4.104 2.64C2.567 8.24 2 10.096 2 12.5c0 2.524 1.112 5.063 2.693 6.863c1.557 1.771 3.796 3.055 6.094 2.51c.356-.084.612-.16.765-.205l.112-.033h.002c.076-.021.123-.034.334-.034s.258.013.334.034h.002l.112.033c.152.045.41.12.765.205c2.305.547 4.545-.734 6.101-2.507c1.58-1.8 2.687-4.34 2.686-6.866c-.001-2.415-.59-4.27-1.652-5.65c-1.062-1.377-2.517-2.178-4.066-2.634a4.7 4.7 0 0 0-1.25-.168l1.07-1l-1.365-1.461zM12 8C9.742 8 9 6 9 6s1.875.636 3 .636S15 6 15 6s-.742 2-3 2"></svg:path>`,
})
export class TdesignTomatoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsIcon],svg[tdesign-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.534 1.866a8.502 8.502 0 0 1 11.487 9.793l5.154 5.153l-1.415 1.414l-5.987-5.987l.178-.576a6.5 6.5 0 0 0-1.615-6.518A6.5 6.5 0 0 0 8.34 3.392l4.228 4.228l-4.95 4.95L3.39 8.34a6.5 6.5 0 0 0 1.754 5.996a6.5 6.5 0 0 0 6.518 1.615l.575-.178l5.988 5.988l-1.414 1.414l-5.154-5.153A8.502 8.502 0 0 1 1.864 6.535l.254-.624l1.672.002l3.828 3.828L9.74 7.62L5.912 3.792L5.91 2.12zm9.216 12.471l4.95 4.95l-1.414 1.414l-4.95-4.95z"></svg:path>`,
})
export class TdesignToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsCircleIcon],svg[tdesign-tools-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-7.31 7.225l-4.207-4.207a5.001 5.001 0 0 1-5.885-6.814l.318-.738l1.355.262L9.114 9.57l.459-.46L7.73 7.27l-.263-1.354l.739-.319a5.001 5.001 0 0 1 6.813 5.886l4.207 4.208zm.708-3.535l-3.71-3.71l.263-.62a3 3 0 0 0-2.46-4.157l1.91 1.909l-3.287 3.287l-1.91-1.91a3 3 0 0 0 4.157 2.462l.62-.264l3.71 3.71z"></svg:path>`,
})
export class TdesignToolsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsCircleFilledIcon],svg[tdesign-tools-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-.374-8.547l4.065 4.066l2.829-2.829l-4.066-4.065a4.5 4.5 0 0 0-6.05-5.57l-.369.16l.157.81l2.088 2.087l-1.166 1.166L7.026 8.19l-.81-.156l-.159.368a4.501 4.501 0 0 0 5.569 6.051"></svg:path>`,
})
export class TdesignToolsCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsFilledIcon],svg[tdesign-tools-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.735 6.567l-1.896-.064l-.225.731a8.5 8.5 0 0 0 2.113 8.518a8.5 8.5 0 0 0 8.487 2.122l5.295 5.296l2.123-2.123l-4.296-4.296l1.414-1.414l4.296 4.296l2.12-2.12l-5.296-5.294a8.5 8.5 0 0 0-2.122-8.488A8.5 8.5 0 0 0 7.23 1.618l-.73.225l.063 1.896l3.528 3.528l-2.828 2.828z"></svg:path>`,
})
export class TdesignToolsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTornadoIcon],svg[tdesign-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.528 4A.514.514 0 0 0 5 4.5c0 .259.219.5.528.5H19v2H5.528C4.149 7 3 5.898 3 4.5S4.15 2 5.528 2H8v2zM21 8v2H6V8zM8 11h11v2H8zm-2 3h9v2H6zm-1 3h8v2H5zm3 3h7v2H8z"></svg:path>`,
})
export class TdesignTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTowerIcon],svg[tdesign-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1h3v6h-.977c.079 1.872.37 4.353.903 6.731c.317 1.414.714 2.768 1.192 3.925c.355.86.74 1.574 1.145 2.118q.112.123.201.226H20v2h-6v-2h1.674q-.133-.123-.275-.246c-.54-.47-1.14-.921-1.749-1.25c-.615-.33-1.174-.504-1.65-.504s-1.035.173-1.65.505c-.608.328-1.209.778-1.75 1.249q-.14.123-.274.246H10v2H4v-2h1.536l.2-.226c.405-.544.79-1.259 1.146-2.118c.478-1.157.875-2.511 1.192-3.925c.533-2.378.824-4.859.903-6.731H8V2h3V1zm-2.021 7a42 42 0 0 1-.953 7.169c-.2.89-.433 1.774-.703 2.618l.076-.042C10.173 17.327 11.07 17 12 17c.932 0 1.827.327 2.6.745l.077.042a31 31 0 0 1-.703-2.618A42 42 0 0 1 13.021 8zM10 6h4V4h-4z"></svg:path>`,
})
export class TdesignTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTower1Icon],svg[tdesign-tower-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1h3v6h-.939c.2 1.785.874 4.199 1.819 6.581c1.055 2.662 2.37 5.084 3.552 6.419H22v2h-7.847l-.139-.831l-.002-.012l-.014-.066a4 4 0 0 0-.424-1.088C13.238 20.428 12.764 20 12 20c-.763 0-1.238.427-1.574 1.004a4 4 0 0 0-.438 1.153l-.002.011l-.139.832H2v-2h1.568c1.182-1.335 2.497-3.757 3.552-6.419C8.065 12.2 8.74 9.785 8.94 8H8V2h3V1zm-2.051 7c-.2 2.1-.972 4.803-1.97 7.319c-.816 2.059-1.83 4.107-2.898 5.681H8.24c.103-.294.251-.646.46-1.004C9.236 19.073 10.261 18 12 18s2.763 1.073 3.302 1.996c.208.358.356.71.459 1.004h2.158c-1.069-1.574-2.082-3.622-2.899-5.681c-.997-2.516-1.768-5.218-1.969-7.319zM10 6h4V4h-4z"></svg:path>`,
})
export class TdesignTower1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTower1FilledIcon],svg[tdesign-tower-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1h3v6h-.939c.2 1.785.874 4.199 1.819 6.581c1.055 2.662 2.37 5.084 3.552 6.419H22v2h-7.847l-.139-.831l-.002-.012l-.014-.066a4 4 0 0 0-.424-1.088C13.238 20.428 12.764 20 12 20c-.763 0-1.238.427-1.574 1.004a4 4 0 0 0-.438 1.153l-.002.011l-.139.832H2v-2h1.568c1.182-1.335 2.497-3.757 3.552-6.419C8.065 12.2 8.74 9.785 8.94 8H8V2h3V1zm-2.051 7c-.2 2.1-.972 4.803-1.97 7.319c-.816 2.059-1.83 4.107-2.898 5.681H8.24c.103-.294.251-.646.46-1.004C9.236 19.073 10.261 18 12 18s2.763 1.073 3.302 1.996c.208.358.356.71.459 1.004h2.158c-1.069-1.574-2.082-3.622-2.899-5.681c-.997-2.516-1.768-5.218-1.969-7.319z"></svg:path>`,
})
export class TdesignTower1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTower2Icon],svg[tdesign-tower-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .586l2.973 2.973L15.936 18H17v5H7v-5h1.064l.963-14.44zM10.069 18h3.862l-.904-13.558L12 3.414l-1.027 1.028zM9 20v1h6v-1z"></svg:path>`,
})
export class TdesignTower2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTower2FilledIcon],svg[tdesign-tower-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .586l2.973 2.973L15.936 18H17v5H7v-5h1.064l.963-14.44zM10.069 18h3.862l-.904-13.558L12 3.414l-1.027 1.028z"></svg:path>`,
})
export class TdesignTower2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTower3Icon],svg[tdesign-tower-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.126V1h2v2.126a4.002 4.002 0 0 1 1.575 6.935L16.127 23H7.873l1.553-12.939A4.002 4.002 0 0 1 11 3.126m.334 7.819L10.127 21h3.746l-1.207-10.055a4 4 0 0 1-1.332 0M12 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignTower3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTower3FilledIcon],svg[tdesign-tower-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.126V1h2v2.126a4.002 4.002 0 0 1 1.575 6.935L16.127 23H7.873l1.553-12.939A4.002 4.002 0 0 1 11 3.126m.334 7.819L10.127 21h3.746l-1.207-10.055a4 4 0 0 1-1.332 0"></svg:path>`,
})
export class TdesignTower3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTowerClockIcon],svg[tdesign-tower-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .932l5.288 1.983l-.703 1.873l-.585-.22V5h3v12h-2v6H7v-6H5V5h3v-.432l-.585.22l-.702-1.873zm-2 2.886V5h4V3.818l-2-.75zM9 17v4h6v-4h-2v3h-2v-3zm8-2V7H7v8zm-5-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class TdesignTowerClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTowerClockFilledIcon],svg[tdesign-tower-clock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 11a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path fill="currentColor" d="M17.288 2.914L12 .932L6.713 2.914l.702 1.873l.585-.22V5H5v12h2v6h10v-6h2V5h-3v-.432l.585.22zM11 20v-3h2v3zm1-12.25a3.25 3.25 0 1 1 0 6.5a3.25 3.25 0 0 1 0-6.5"></svg:path>`,
})
export class TdesignTowerClockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTowerFilledIcon],svg[tdesign-tower-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1h3v6h-.977c.079 1.872.37 4.353.903 6.731c.317 1.414.714 2.768 1.192 3.925c.355.86.74 1.574 1.145 2.118q.112.123.201.226H20v2h-6v-2h1.674q-.133-.123-.275-.246c-.54-.47-1.14-.921-1.749-1.25c-.615-.33-1.174-.504-1.65-.504s-1.035.173-1.65.505c-.608.328-1.209.778-1.75 1.249q-.14.123-.274.246H10v2H4v-2h1.536l.2-.226c.405-.544.79-1.259 1.146-2.118c.478-1.157.875-2.511 1.192-3.925c.533-2.378.824-4.859.903-6.731H8V2h3V1zm-2.021 7a42 42 0 0 1-.953 7.169c-.2.89-.433 1.774-.703 2.618l.076-.042C10.173 17.327 11.07 17 12 17c.932 0 1.827.327 2.6.745l.077.042a31 31 0 0 1-.703-2.618A42 42 0 0 1 13.021 8z"></svg:path>`,
})
export class TdesignTowerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTownIcon],svg[tdesign-town-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.442L11 5.913V2h5.468L22 8.638V22H2zm11 2v16h7V9.362L15.532 4zm-2 16V8.887L6.558 4H4v16zM6 7.998h2.004v2.004H6zm9 0h2.004v2.004H15zm-9 4h2.004v2.004H6zm9 0h2.004v2.004H15zm-9 4h2.004v2.004H6zm9 0h2.004v2.004H15z"></svg:path>`,
})
export class TdesignTownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTownFilledIcon],svg[tdesign-town-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.004 7.998H6v2.004h2.004zm0 4H6v2.004h2.004zm0 4H6v2.004h2.004z"></svg:path><svg:path fill="currentColor" d="M7.442 2H2v20h20V8.638L16.468 2H11v3.913zM11 8.887V20H4V4h2.558zm4-.889h2.004v2.004H15zm0 4h2.004v2.004H15zm2.004 4v2.004H15v-2.004z"></svg:path>`,
})
export class TdesignTownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficIcon],svg[tdesign-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4h3v2h-3v3h3v2h-3v3h3v2h-3v4H6v-4H3v-2h3v-3H3v-2h3V8H3V6h3zm2 2v16h8V4zm2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignTrafficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficEventsIcon],svg[tdesign-traffic-events-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.914l3.643 8.687l.406.899l-.025.01L19.165 19H21v2H3v-2h1.835l3.14-7.49l-.024-.01l.406-.9zM10.149 11.5l-1.145 2.73h5.992l-1.145-2.73zm2.863-2L12 7.086L10.988 9.5zm2.823 6.73h-7.67L7.004 19h9.992z"></svg:path>`,
})
export class TdesignTrafficEventsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficEventsFilledIcon],svg[tdesign-traffic-events-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.762 8.5L12 1.914L9.238 8.5zm.838 2H8.4l-1.565 3.73h10.33zm2.404 5.73H5.996L4.835 19H3v2h18v-2h-1.835z"></svg:path>`,
})
export class TdesignTrafficEventsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTrafficFilledIcon],svg[tdesign-traffic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v4H3v2h3v3H3v2h3v3H3v2h3v4h12v-4h3v-2h-3v-3h3v-2h-3V8h3V6h-3zm-8 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class TdesignTrafficFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTransformIcon],svg[tdesign-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2M1 4a3 3 0 0 1 5.83-1h10.34A3.001 3.001 0 1 1 21 6.83v10.34A3.001 3.001 0 1 1 17.17 21H6.83A3.001 3.001 0 1 1 3 17.17V6.83A3 3 0 0 1 1 4m4 2.83v10.34A3 3 0 0 1 6.83 19h10.34A3 3 0 0 1 19 17.17V6.83A3 3 0 0 1 17.17 5H6.83A3 3 0 0 1 5 6.83M20 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2M4 19a1 1 0 1 0 0 2a1 1 0 0 0 0-2m16 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TdesignTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform1Icon],svg[tdesign-transform-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2zm4 6v8h2v2h8v-2h2V8h-2V6H8v2zm0-4H4v2h2zm14 2V4h-2v2zm-2 12v2h2v-2zM6 20v-2H4v2z"></svg:path>`,
})
export class TdesignTransform1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform1FilledIcon],svg[tdesign-transform-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2zm4 6v8h2v2h8v-2h2V8h-2V6H8v2z"></svg:path>`,
})
export class TdesignTransform1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform2Icon],svg[tdesign-transform-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v15h6v2H6V8H1V6h5V1zm2 5h8v10h5v2h-5v5h-2V8h-6z"></svg:path>`,
})
export class TdesignTransform2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform3Icon],svg[tdesign-transform-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.5V6h8.586L20 2.586L21.414 4L18 7.414V16h3.5v2H18v3.5h-2V18H6V8H2.5V6H6V2.5zM8 8v6.586L14.586 8zm8 1.414L9.414 16H16z"></svg:path>`,
})
export class TdesignTransform3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTransformFilledIcon],svg[tdesign-transform-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4a3 3 0 0 1 5.83-1h10.34A3.001 3.001 0 1 1 21 6.83v10.34A3.001 3.001 0 1 1 17.17 21H6.83A3.001 3.001 0 1 1 3 17.17V6.83A3 3 0 0 1 1 4m4 2.83v10.34A3 3 0 0 1 6.83 19h10.34A3 3 0 0 1 19 17.17V6.83A3 3 0 0 1 17.17 5H6.83A3 3 0 0 1 5 6.83"></svg:path>`,
})
export class TdesignTransformFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTranslateIcon],svg[tdesign-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6H8V8.5H4V11H2zm2 1.5h4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm8-3h6a3 3 0 0 1 3 3V9h-2V6.5a1 1 0 0 0-1-1h-6zm6 8V13h4v2h-1.062a7.97 7.97 0 0 1-2.19 4.563A6 6 0 0 0 21 20h1v2h-1a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 13 22h-1v-2h1c.796 0 1.556-.155 2.251-.437a8 8 0 0 1-1.48-2.134l-.43-.903l1.807-.858l.429.903A6 6 0 0 0 17 18.472A6 6 0 0 0 18.917 15H12v-2h4v-1.5zM6 13v6a1 1 0 0 0 1 1h2.5v2H7a3 3 0 0 1-3-3v-6z"></svg:path>`,
})
export class TdesignTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTranslate1Icon],svg[tdesign-translate-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2v2.5H2v2h7.46a15 15 0 0 1-2.085 3.665A15 15 0 0 1 5.91 7.868l-.459-.889l-1.777.917l.458.889a17 17 0 0 0 1.894 2.9a15 15 0 0 1-3.028 2.309l-.865.5l1.001 1.732l.866-.501a17 17 0 0 0 3.374-2.56a17 17 0 0 0 3.374 2.56l.866.501l1.001-1.731l-.865-.5a15 15 0 0 1-3.029-2.31A17 17 0 0 0 11.59 6.5H13v-2H8.5V2zm10 7.164l-5.832 12.312l1.808.856L13.58 20h5.84l1.104 2.332l1.808-.856zM18.472 18h-3.944l1.972-4.164z"></svg:path>`,
})
export class TdesignTranslate1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeListIcon],svg[tdesign-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22a4 4 0 0 1-1-7.874V9.874A4.002 4.002 0 0 1 6 2a4 4 0 0 1 1 7.874v4.252A4.002 4.002 0 0 1 6 22m-2-4a2 2 0 1 0 4 0a2 2 0 0 0-4 0M4 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 12h7v2h-7zm0-7h10v2H12zm0-7h7v2h-7z"></svg:path>`,
})
export class TdesignTreeListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeRoundDotIcon],svg[tdesign-tree-round-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1 5.874A4.002 4.002 0 0 1 12 1a4 4 0 0 1 1 7.874V11h4a3 3 0 0 1 3 3v1.126A4.002 4.002 0 0 1 19 23a4 4 0 0 1-1-7.874V14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.126A4.002 4.002 0 0 1 5 23a4 4 0 0 1-1-7.874V14a3 3 0 0 1 3-3h4zM19.003 17h-.006a2 2 0 1 0 .006 0M5 17a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignTreeRoundDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeRoundDotFilledIcon],svg[tdesign-tree-round-dot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 23a3.5 3.5 0 0 1-1-6.855V14a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v2.145A3.502 3.502 0 0 1 4.5 23a3.5 3.5 0 0 1-1-6.855V14a3 3 0 0 1 3-3H11V7.855A3.502 3.502 0 0 1 12 1a3.5 3.5 0 0 1 1 6.855V11h4.5a3 3 0 0 1 3 3v2.145a3.502 3.502 0 0 1-1 6.855"></svg:path>`,
})
export class TdesignTreeRoundDotFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeRoundDotVerticalIcon],svg[tdesign-tree-round-dot-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.126 4A4.002 4.002 0 0 1 23 5a4 4 0 0 1-7.874 1H14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.126A4.002 4.002 0 0 1 23 19a4 4 0 0 1-7.874 1H14a3 3 0 0 1-3-3v-4H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H11V7a3 3 0 0 1 3-3zM19 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignTreeRoundDotVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeRoundDotVerticalFilledIcon],svg[tdesign-tree-round-dot-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4.5a3.5 3.5 0 0 1-6.855 1H14a1 1 0 0 0-1 1v11c0 1.004.408 1.003.925 1h2.22a3.502 3.502 0 0 1 6.855 1a3.5 3.5 0 0 1-6.855 1H14a3 3 0 0 1-3-3V13H7.855A3.502 3.502 0 0 1 1 12a3.5 3.5 0 0 1 6.855-1H11V6.5a3 3 0 0 1 3-3h2.145A3.502 3.502 0 0 1 23 4.5"></svg:path>`,
})
export class TdesignTreeRoundDotVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotIcon],svg[tdesign-tree-square-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2h7v7H13v2.333h6.5V15H22v7h-7v-7h2.5v-1.667h-11V15H9v7H2v-7h2.5v-3.667H11V9H8.5zm5 5V4h-3v3zM4 17v3h3v-3zm13 0v3h3v-3z"></svg:path>`,
})
export class TdesignTreeSquareDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotFilledIcon],svg[tdesign-tree-square-dot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h-2v6h6v-6h-2v-4.667h-7V8h2V2H9v6h2v3.333H4V16H2v6h6v-6H6v-2.667h12z"></svg:path>`,
})
export class TdesignTreeSquareDotFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotVerticalIcon],svg[tdesign-tree-square-dot-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h3v3h-3zm-2 2.5V9h7V2h-7v2.5h-3.667V11H9V8.5H2v7h7V13h2.333v6.5H15V22h7v-7h-7v2.5h-1.667v-11zM17 20v-3h3v3zM7 10.5v3H4v-3z"></svg:path>`,
})
export class TdesignTreeSquareDotVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeSquareDotVerticalFilledIcon],svg[tdesign-tree-square-dot-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v2h6V2h-6v2h-4.667v7H8V9H2v6h6v-2h3.333v7H16v2h6v-6h-6v2h-2.667V6z"></svg:path>`,
})
export class TdesignTreeSquareDotVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTrendingDownIcon],svg[tdesign-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.086 7.5L8.5 13.914l4-4L17.586 15H13.5v2H21V9.5h-2v4.086l-6.5-6.5l-4 4l-5-5z"></svg:path>`,
})
export class TdesignTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTrendingUpIcon],svg[tdesign-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.086 16.5L8.5 10.086l4 4L17.586 9H13.5V7H21v7.5h-2v-4.086l-6.5 6.5l-4-4l-5 5z"></svg:path>`,
})
export class TdesignTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTvIcon],svg[tdesign-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-6v-2h4V4H3l.001 13h4v2H1zm11 13.587l4.242 4.242l2.42 2.415h-2.833l-1-1L12 18.417l-2.827 2.828l-1 1H5.34l2.419-2.414z"></svg:path>`,
})
export class TdesignTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTv1Icon],svg[tdesign-tv-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v15h-4.046l2.698 2.063l-1.215 1.589L16.66 18H7.336l-4.771 3.652l-1.216-1.588L4.044 18H0zm2 2v11h20V5z"></svg:path>`,
})
export class TdesignTv1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTv1FilledIcon],svg[tdesign-tv-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v15h-4.046l2.698 2.063l-1.215 1.589L16.66 18H7.336l-4.771 3.652l-1.216-1.588L4.044 18H0z"></svg:path>`,
})
export class TdesignTv1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTv2Icon],svg[tdesign-tv-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v15H0zm2 2v11h20V5zm2 15h16v2H4z"></svg:path>`,
})
export class TdesignTv2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTv2FilledIcon],svg[tdesign-tv-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v15H0zm4 17h16v2H4z"></svg:path>`,
})
export class TdesignTv2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTvFilledIcon],svg[tdesign-tv-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-4.754L12 12.76L5.755 19H1z"></svg:path><svg:path fill="currentColor" d="M12 15.587L7.759 19.83l-2.42 2.414h2.834L12 18.416l3.829 3.828h2.833z"></svg:path>`,
})
export class TdesignTvFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTypographyIcon],svg[tdesign-typography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h15v8H2zm2 2v4h11V5zm-2 9h20v2H2zm0 5h20v2H2z"></svg:path>`,
})
export class TdesignTypographyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignTypographyFilledIcon],svg[tdesign-typography-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h15v8H2zm0 11h20v2H2zm0 5h20v2H2z"></svg:path>`,
})
export class TdesignTypographyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortableIcon],svg[tdesign-uncomfortable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m9.233-2.134l-3.464 2l-1-1.732l3.464-2zm4.536-1.732l3.464 2l-1 1.732l-3.464-2zM9.5 15.5a1 1 0 0 0-1 1v1h-2v-1a3 3 0 0 1 5.065-2.177a1 1 0 0 0 .206.158a.2.2 0 0 0 .044.019h.37a.2.2 0 0 0 .044-.019a1 1 0 0 0 .207-.158A3 3 0 0 1 17.5 16.5v1h-2.001v-1a1 1 0 0 0-1.688-.726c-.322.306-.878.726-1.621.726h-.382c-.743 0-1.299-.42-1.621-.726A1 1 0 0 0 9.5 15.5m2.318-1"></svg:path>`,
})
export class TdesignUncomfortableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortable1Icon],svg[tdesign-uncomfortable-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.619-4.862L11 9.04v1.46l-3.2 2.4l-1.2-1.6l1.86-1.394L6.637 8.88zm9.743 1.743L15.54 9.906L17.4 11.3l-1.2 1.6l-3.2-2.4V9.04l3.381-1.902zM7.67 15.5A5 5 0 0 1 12 13a5 5 0 0 1 4.33 2.5l.501.865l-1.731 1.001l-.5-.865A3 3 0 0 0 12 15a3 3 0 0 0-2.6 1.5l-.5.866l-1.731-1.001z"></svg:path>`,
})
export class TdesignUncomfortable1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortable1FilledIcon],svg[tdesign-uncomfortable-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M11 9.04L7.618 7.138l-.98 1.743l1.82 1.025L6.6 11.3l1.2 1.6l3.2-2.4zm4.54.866l1.821-1.025l-.98-1.743L13 9.04v1.46l3.2 2.4l1.2-1.6zM12 13a5 5 0 0 0-4.33 2.5l-.502.865L8.9 17.366l.5-.865A3 3 0 0 1 12 15c1.109 0 2.079.601 2.599 1.5l.5.866l1.732-1.001l-.5-.866A5 5 0 0 0 12 13"></svg:path>`,
})
export class TdesignUncomfortable1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortable2Icon],svg[tdesign-uncomfortable-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.619-4.862L11 9.04v1.46l-3.2 2.4l-1.2-1.6l1.86-1.394L6.637 8.88zm9.743 1.743L15.54 9.906L17.4 11.3l-1.2 1.6l-3.2-2.4V9.04l3.381-1.902zM9.5 15.5a1 1 0 0 0-1 1v1h-2v-1a3 3 0 0 1 5.065-2.177a1 1 0 0 0 .206.158a.2.2 0 0 0 .044.019h.37a.2.2 0 0 0 .044-.019a1 1 0 0 0 .207-.158A3 3 0 0 1 17.5 16.5v1h-2.001v-1a1 1 0 0 0-1.688-.726c-.322.306-.878.726-1.621.726h-.382c-.743 0-1.299-.42-1.621-.726A1 1 0 0 0 9.5 15.5m2.318-1"></svg:path>`,
})
export class TdesignUncomfortable2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortable2FilledIcon],svg[tdesign-uncomfortable-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m-1 8.04L7.619 7.138l-.98 1.743l1.82 1.024L6.6 11.3l1.2 1.6l3.2-2.4zm4.54.865l1.822-1.024l-.98-1.743L13 9.04v1.46l3.2 2.4l1.2-1.6zM8.5 16.5a1 1 0 0 1 1.688-.726c.322.306.878.726 1.621.726h.382c.743 0 1.299-.42 1.621-.726a1 1 0 0 1 1.688.726v1h2v-1a3 3 0 0 0-5.065-2.177a1 1 0 0 1-.206.158a.2.2 0 0 1-.044.018h-.37a.2.2 0 0 1-.044-.018a1 1 0 0 1-.207-.158A3 3 0 0 0 6.5 16.5v1h2.001z"></svg:path>`,
})
export class TdesignUncomfortable2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortableFilledIcon],svg[tdesign-uncomfortable-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8.499 3.5a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0-5.065-2.177a1 1 0 0 1-.206.158a.2.2 0 0 1-.044.019h-.37a.2.2 0 0 1-.044-.019a1 1 0 0 1-.207-.158A3 3 0 0 0 6.5 16.5v1h2.001v-1a1 1 0 0 1 1.688-.726c.322.306.878.726 1.621.726h.382c.743 0 1.299-.42 1.621-.726c.18-.17.42-.274.688-.274m-7.732-3.634l3.464-2l-1-1.732l-3.464 2zm11.464-1.732l-3.464-2l-1 1.732l3.464 2z"></svg:path>`,
})
export class TdesignUncomfortableFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeIcon],svg[tdesign-undertake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.861 8.777a1.38 1.38 0 0 0-.976.402l-2.184 2.185V15.5h6.014l6.147-1.537l3.741-1.596a.645.645 0 0 0-.48-1.188l-.02.006l-6.773 1.557h-3.757v-2h3.247a.983.983 0 0 0 0-1.965zm7.919 1.35l3.836-.883a2.647 2.647 0 0 1 1.86 4.924l-.027.013l-3.948 1.684l-6.54 1.635H0V9.95h4.286l2.187-2.187a3.38 3.38 0 0 1 2.392-.986h.001h-.002h4.956a2.983 2.983 0 0 1 2.96 3.35M3.7 11.949H2V15.5h1.7z"></svg:path>`,
})
export class TdesignUndertakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeDeliveryIcon],svg[tdesign-undertake-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2h14v9.5h-2V4h-2v5.618l-3-1.5l-3 1.5V4h-2v5.5h-2zm6 2v2.382l1-.5l1 .5V4zm-5.065 9.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.803-1.45l3.532-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.875.875 0 1 0 0-1.75zm7.552 1.152l3.552-.817a2.56 2.56 0 0 1 3.211 2.47a2.56 2.56 0 0 1-1.414 2.287l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"></svg:path>`,
})
export class TdesignUndertakeDeliveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeDeliveryFilledIcon],svg[tdesign-undertake-delivery-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-14v7.842a5 5 0 0 1 .94-.092h4.685a4.375 4.375 0 0 1 4.093 2.83l1.964-.452a4.06 4.06 0 0 1 2.318.088zm-9 2h4v4l-2-1.5l-2 1.5z"></svg:path><svg:path fill="currentColor" d="m19.54 13.585l-3.553.817a2.87 2.87 0 0 0-.83-2.31a2.88 2.88 0 0 0-2.032-.842H8.439a3.25 3.25 0 0 0-2.301.948L4.086 14.25H0v7.25h11.373l6.197-1.55l3.74-1.594l.026-.014a2.555 2.555 0 0 0-1.797-4.757m-11.584-.24a1.3 1.3 0 0 1 .479-.095h4.69a.875.875 0 1 1 0 1.75H10v2h3.614l6.412-1.475l.02-.005a.556.556 0 0 1 .416 1.022L16.93 18.05l-5.803 1.45H5.5v-3.836l2.05-2.05a1.3 1.3 0 0 1 .406-.27M2 16.25h1.5v3.25H2z"></svg:path>`,
})
export class TdesignUndertakeDeliveryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeEnvironmentProtectionIcon],svg[tdesign-undertake-environment-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.513c.21.257.446.561.681.897C18.421 5.466 19 6.617 19 7.5a2 2 0 1 1-4 0c0-.883.579-2.034 1.319-3.09c.235-.336.471-.64.681-.897M17 .57l-.714.73h-.002l-.003.004l-.008.008l-.03.031l-.105.112a18 18 0 0 0-1.457 1.806C13.921 4.346 13 5.945 13 7.5a4 4 0 0 0 8 0c0-1.555-.921-3.154-1.681-4.238a18 18 0 0 0-1.562-1.917l-.03-.031l-.008-.01l-.003-.002l-.002-.002zM8.435 13.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.804-1.451l3.531-1.507a.555.555 0 0 0-.163-1.032a.6.6 0 0 0-.253.01l-.02.005L13.614 17H10v-2h3.125a.875.875 0 0 0 0-1.75zm7.552 1.152l3.552-.817a2.556 2.556 0 0 1 1.797 4.757l-.027.013l-3.74 1.596l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"></svg:path>`,
})
export class TdesignUndertakeEnvironmentProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeEnvironmentProtectionFilledIcon],svg[tdesign-undertake-environment-protection-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 .57c-.288.295-.582.584-.862.886a18 18 0 0 0-1.457 1.806C13.921 4.346 13 5.945 13 7.5a4 4 0 0 0 8 0c0-1.555-.921-3.154-1.681-4.238a18 18 0 0 0-1.457-1.806c-.28-.302-.574-.59-.862-.885M8.435 13.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.804-1.451l3.531-1.507a.555.555 0 0 0-.163-1.032a.6.6 0 0 0-.253.01l-.02.005L13.614 17H10v-2h3.125a.875.875 0 0 0 0-1.75zm7.552 1.152l3.552-.817a2.556 2.556 0 0 1 1.797 4.757l-.027.013l-3.74 1.596l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"></svg:path>`,
})
export class TdesignUndertakeEnvironmentProtectionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeFilledIcon],svg[tdesign-undertake-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.861 8.777a1.38 1.38 0 0 0-.976.402l-2.184 2.185V15.5h6.014l6.147-1.537l3.741-1.596a.645.645 0 0 0-.48-1.188l-.02.006l-6.773 1.557h-3.757v-2h3.247a.983.983 0 0 0 0-1.965zm7.919 1.35l3.836-.883a2.647 2.647 0 0 1 1.86 4.924l-.027.013l-3.948 1.684l-6.54 1.635H0V9.95h4.286l2.187-2.187a3.38 3.38 0 0 1 2.392-.986h.001h-.002h4.956a2.983 2.983 0 0 1 2.96 3.35"></svg:path>`,
})
export class TdesignUndertakeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeHoldUpIcon],svg[tdesign-undertake-hold-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.952 5.71a3.357 3.357 0 1 0-4.747 4.747l.793.793h3.127a2.875 2.875 0 0 1 2.862 3.152l1.124-.259l3.686-3.685A3.357 3.357 0 0 0 16.05 5.71L15 6.758zm6.605 7.816l.123.02a2.558 2.558 0 0 1 1.688 3.854c-.25.404-.607.73-1.032.942l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 1.251-.776a5.358 5.358 0 0 1 7.613-7.46a5.357 5.357 0 0 1 7.21 7.91zM3.5 16.25H2v3.25h1.5zm2 3.25h5.627l5.804-1.45l3.531-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.874.874 0 1 0 0-1.75h-4.69a1.25 1.25 0 0 0-.885.364l-2.05 2.05z"></svg:path>`,
})
export class TdesignUndertakeHoldUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeHoldUpFilledIcon],svg[tdesign-undertake-hold-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.557 13.526l.123.02a2.558 2.558 0 0 1 1.688 3.854c-.25.404-.607.73-1.032.942l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 1.251-.776a5.358 5.358 0 0 1 7.613-7.46a5.357 5.357 0 0 1 7.21 7.91zM3.5 16.25H2v3.25h1.5zm2 3.25h5.627l5.804-1.45l3.531-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.874.874 0 1 0 0-1.75h-4.69a1.25 1.25 0 0 0-.885.364l-2.05 2.05z"></svg:path>`,
})
export class TdesignUndertakeHoldUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeTransactionIcon],svg[tdesign-undertake-transaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M10 5.5a4.5 4.5 0 0 1 6.5-4.032a4.5 4.5 0 1 1 0 8.064A4.5 4.5 0 0 1 10 5.5m8.25 2.488q.123.012.25.012a2.5 2.5 0 1 0-.25-4.988A4.5 4.5 0 0 1 19 5.5a4.5 4.5 0 0 1-.75 2.488M8.435 13.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.803-1.45l3.532-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.875.875 0 1 0 0-1.75zm7.552 1.152l3.552-.817a2.56 2.56 0 0 1 3.211 2.47a2.56 2.56 0 0 1-1.414 2.287l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"></svg:path>`,
})
export class TdesignUndertakeTransactionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeTransactionFilledIcon],svg[tdesign-undertake-transaction-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.5a4.5 4.5 0 0 1 6.5-4.032a4.5 4.5 0 1 1 0 8.064A4.5 4.5 0 0 1 10 5.5m8.25 2.488q.123.012.25.012a2.5 2.5 0 1 0-.25-4.988A4.5 4.5 0 0 1 19 5.5a4.5 4.5 0 0 1-.75 2.488M8.435 13.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.803-1.45l3.532-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.875.875 0 1 0 0-1.75zm7.552 1.152l3.552-.817a2.56 2.56 0 0 1 3.211 2.47a2.56 2.56 0 0 1-1.414 2.287l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"></svg:path>`,
})
export class TdesignUndertakeTransactionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUnfoldLessIcon],svg[tdesign-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 3.586l4 4l4-4L17.414 5L12 10.414L6.586 5zm4 10L17.414 19L16 20.414l-4-4l-4 4L6.586 19z"></svg:path>`,
})
export class TdesignUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUnfoldMoreIcon],svg[tdesign-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.586L17.414 9L16 10.414l-4-4l-4 4L6.586 9zm-4 10l4 4l4-4L17.414 15L12 20.414L6.586 15z"></svg:path>`,
})
export class TdesignUnfoldMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUnhappyIcon],svg[tdesign-unhappy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-9.33 7.5A5 5 0 0 1 12 13a5 5 0 0 1 4.33 2.5l.501.865l-1.731 1.001l-.5-.865A3 3 0 0 0 12 15a3 3 0 0 0-2.6 1.5l-.5.866l-1.731-1.001z"></svg:path>`,
})
export class TdesignUnhappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUnhappy1Icon],svg[tdesign-unhappy-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm-6.33 6.5A5 5 0 0 1 12 13a5 5 0 0 1 4.33 2.5l.501.865l-1.731 1.001l-.5-.865A3 3 0 0 0 12 15a3 3 0 0 0-2.6 1.5l-.5.866l-1.731-1.001z"></svg:path>`,
})
export class TdesignUnhappy1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUnhappy1FilledIcon],svg[tdesign-unhappy-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-6 4a5 5 0 0 0-4.33 2.5l-.501.865L8.9 17.366l.5-.865C9.922 15.6 10.89 15 12 15s2.08.601 2.6 1.5l.5.866l1.731-1.001l-.5-.866A5 5 0 0 0 12 13"></svg:path>`,
})
export class TdesignUnhappy1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUnhappyFilledIcon],svg[tdesign-unhappy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-5 1a5 5 0 0 0-4.33 2.5l-.501.865L8.9 17.366l.5-.865C9.922 15.6 10.89 15 12 15s2.08.601 2.6 1.5l.5.866l1.731-1.001l-.5-.866A5 5 0 0 0 12 13"></svg:path>`,
})
export class TdesignUnhappyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUninstallIcon],svg[tdesign-uninstall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.594l4.914 4.858l-1.406 1.422L13 5.394v7.11h-2v-7.11l-2.508 2.48l-1.406-1.422zM2 2h5.5v2H4v10h16V4h-3.5V2H22v20H2zm18 14H4v4h16zm-14.002.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignUninstallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUninstallFilledIcon],svg[tdesign-uninstall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.914 6.452L12 1.594L7.086 6.452l1.406 1.422L11 5.394v7.11h2v-7.11l2.508 2.48z"></svg:path><svg:path fill="currentColor" d="M7.5 2H2v20h20V2h-5.5v2H20v10H4V4h3.5zm.502 14.998v2.004H5.998v-2.004zm3 0v2.004H8.998v-2.004z"></svg:path>`,
})
export class TdesignUninstallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUploadIcon],svg[tdesign-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.586L17.914 8.5L16.5 9.914l-3.5-3.5V16h-2V6.414l-3.5 3.5L6.086 8.5zM4.5 14v5h15v-5h2v7h-19v-7z"></svg:path>`,
})
export class TdesignUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUpload1Icon],svg[tdesign-upload-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.586L18.414 9L17 10.414l-4-4V16h-2V6.414l-4 4L5.586 9zM3 18h18v2H3z"></svg:path>`,
})
export class TdesignUpload1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUpscaleIcon],svg[tdesign-upscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.056 1.994l6.91.04l.04 6.91l-2 .011l-.02-3.527l-5.027 5.028l-1.415-1.415l5.027-5.027l-3.526-.02zM2 2h10v2H4v6H2zm0 10h4v2H4v2H2zm6 0h4v4h-2v-2H8zm14 0v10h-8v-2h6v-8zM4 18v2h2v2H2v-4zm8 0v4H8v-2h2v-2z"></svg:path>`,
})
export class TdesignUpscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUsbIcon],svg[tdesign-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v9h2v11H2V11h2zm0 11v7h16v-7zm14-2V4H6v7zM8 6.496h2.004V8.5H8zm6 0h2.004V8.5H14z"></svg:path>`,
})
export class TdesignUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUsbFilledIcon],svg[tdesign-usb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v9h2v11H2V11h2zm14 9V4H6v7zM8 6.496h2.004V8.5H8zm6 0h2.004V8.5H14z"></svg:path>`,
})
export class TdesignUsbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserIcon],svg[tdesign-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H3zm5-3a3 3 0 0 0-3 3v1h14v-1a3 3 0 0 0-3-3z"></svg:path>`,
})
export class TdesignUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUser1Icon],svg[tdesign-user-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M3.5 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v2h-2z"></svg:path>`,
})
export class TdesignUser1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUser1FilledIcon],svg[tdesign-user-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M3.5 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-17z"></svg:path>`,
})
export class TdesignUser1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserAddIcon],svg[tdesign-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M19 13v4h4v2h-4v4h-2v-4h-4v-2h4v-4zM8 16a4 4 0 0 0-4 4h8.05v2H2v-2a6 6 0 0 1 6-6h4v2z"></svg:path>`,
})
export class TdesignUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserAddFilledIcon],svg[tdesign-user-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M23 19h-4v4h-2v-4h-4v-2h4v-4h2v4h4zm-10.124-5a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowDownIcon],svg[tdesign-user-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M19 12v7.11l2.508-2.48l1.406 1.422L18 22.91l-4.914-4.858l1.406-1.422L17 19.11V12zM8 16a4 4 0 0 0-4 4h8.8v2H2v-2a6 6 0 0 1 6-6h4.75v2z"></svg:path>`,
})
export class TdesignUserArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowDownFilledIcon],svg[tdesign-user-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M19 12v7.11l2.508-2.48l1.406 1.422L18 22.91l-4.914-4.858l1.406-1.422L17 19.11V12zm-6.124 2a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserArrowDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowLeftIcon],svg[tdesign-user-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m12.872 6.994l-2.48 2.508h7.11v2h-7.11l2.48 2.508l-1.422 1.406l-4.858-4.914l4.858-4.914zM8 16a4 4 0 0 0-4 4h8.05v2H2v-2a6 6 0 0 1 6-6h4v2z"></svg:path>`,
})
export class TdesignUserArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowLeftFilledIcon],svg[tdesign-user-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m7.372 12.494l-2.48 2.508h7.11v2h-7.11l2.48 2.508l-1.422 1.406l-4.858-4.914l4.858-4.914z"></svg:path><svg:path fill="currentColor" d="M12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserArrowLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowRightIcon],svg[tdesign-user-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m13.05 5.588l4.858 4.914l-4.858 4.914l-1.422-1.406l2.48-2.508h-7.11v-2h7.11l-2.48-2.508zM8 16a4 4 0 0 0-4 4h8.05v2H2v-2a6 6 0 0 1 6-6h4v2z"></svg:path>`,
})
export class TdesignUserArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowRightFilledIcon],svg[tdesign-user-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m7.55 11.088l4.858 4.914l-4.858 4.914l-1.422-1.406l2.48-2.508h-7.11v-2h7.11l-2.48-2.508zM12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserArrowRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowUpIcon],svg[tdesign-user-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m12 5.094l4.914 4.858l-1.406 1.422L19 16.394v7.11h-2v-7.11l-2.508 2.48l-1.406-1.422zM8 16a4 4 0 0 0-4 4h8.8v2H2v-2a6 6 0 0 1 6-6h4.75v2z"></svg:path>`,
})
export class TdesignUserArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserArrowUpFilledIcon],svg[tdesign-user-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M18 12.594l4.914 4.858l-1.406 1.422L19 16.394v7.11h-2v-7.11l-2.508 2.48l-1.406-1.422zM12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserArrowUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserAvatarIcon],svg[tdesign-user-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm17.5 18h.5V4H4v16h.5a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5M12 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M7.5 9.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m2 7.5a3 3 0 0 0-3 3h11a3 3 0 0 0-3-3z"></svg:path>`,
})
export class TdesignUserAvatarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserAvatarFilledIcon],svg[tdesign-user-avatar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-6.25 7.5a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M5 19.502a4.5 4.5 0 0 1 4.5-4.5h5a4.5 4.5 0 0 1 4.5 4.5v.5H5z"></svg:path>`,
})
export class TdesignUserAvatarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserBlockedIcon],svg[tdesign-user-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m12 7a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18 14.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M8 16a4 4 0 0 0-4 4h7.05v2H2v-2a6 6 0 0 1 6-6h3v2z"></svg:path>`,
})
export class TdesignUserBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserBlockedFilledIcon],svg[tdesign-user-blocked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m1 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 0 0-3.08 5.165l4.745-4.744A3.5 3.5 0 0 0 18 14.5m3.08 1.835l-4.745 4.744a3.5 3.5 0 0 0 4.745-4.745M12.255 14A6.97 6.97 0 0 0 11 18c0 1.487.464 2.866 1.255 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserBlockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserBusinessIcon],svg[tdesign-user-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H3zm5-3a3 3 0 0 0-3 3v1h5.613l-1.334-4zm3.387 0L12 17.838L12.613 16zm3.334 0l-1.334 4H19v-1a3 3 0 0 0-3-3z"></svg:path>`,
})
export class TdesignUserBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserBusinessFilledIcon],svg[tdesign-user-business-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M8 14a5 5 0 0 0-5 5v3h18v-3a5 5 0 0 0-5-5h-1.382L12 19.236L9.382 14z"></svg:path>`,
})
export class TdesignUserBusinessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserCheckedIcon],svg[tdesign-user-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m17.657 7.59l-7.071 7.071l-4.243-4.243l1.414-1.414l2.829 2.829l5.657-5.657zM8 16a4 4 0 0 0-4 4h8.05v2H2v-2a6 6 0 0 1 6-6h4v2z"></svg:path>`,
})
export class TdesignUserCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserChecked1Icon],svg[tdesign-user-checked-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0m20.096 1.44l-5.657 5.656l-3.535-3.535l1.414-1.415l2.121 2.122l4.243-4.243zM0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2H0z"></svg:path>`,
})
export class TdesignUserChecked1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserChecked1FilledIcon],svg[tdesign-user-checked-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 7a5 5 0 1 1 10 0a5 5 0 0 1-10 0m20.096 1.44l-5.657 5.656l-3.535-3.535l1.414-1.415l2.121 2.122l4.243-4.243zM0 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2H0z"></svg:path>`,
})
export class TdesignUserChecked1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserCheckedFilledIcon],svg[tdesign-user-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m12.157 13.09l-7.072 7.071l-4.242-4.243l1.414-1.414l2.828 2.829l5.657-5.657z"></svg:path><svg:path fill="currentColor" d="M12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserCircleIcon],svg[tdesign-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9a8.96 8.96 0 0 0 1.773 5.365A5 5 0 0 1 9.5 14h5a5 5 0 0 1 4.727 3.365A8.96 8.96 0 0 0 21 12a9 9 0 0 0-9-9m5.5 16.125V19a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3v.125A8.96 8.96 0 0 0 12 21c2.072 0 3.979-.7 5.5-1.875M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.98 10.98 0 0 1-3.85 8.36A10.96 10.96 0 0 1 12 23a10.96 10.96 0 0 1-7.15-2.64A10.98 10.98 0 0 1 1 12m11-6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M7.5 8.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class TdesignUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserCircleFilledIcon],svg[tdesign-user-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 3.345-1.493 6.342-3.85 8.36A10.96 10.96 0 0 1 12 23c-2.73 0-5.227-.994-7.15-2.64A10.98 10.98 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11m-7-3.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0m2.5 9.725V18a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v.225q.31.323.65.615A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 6.5-2.775"></svg:path>`,
})
export class TdesignUserCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tdesignUserClearIcon],svg[tdesign-user-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m9.172 6.257L18 16.586l2.828-2.829l1.415 1.415L19.414 18l2.829 2.828l-1.415 1.415L18 19.414l-2.828 2.829l-1.415-1.415L16.586 18l-2.829-2.828zM8 16a4 4 0 0 0-4 4h8.05v2H2v-2a6 6 0 0 1 6-6h4v2z"></svg:path>`,
})
export class TdesignUserClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
