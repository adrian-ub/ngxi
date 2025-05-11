import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHospitalShieldFillIcon],svg[mage-hospital-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.945 5.069a2.75 2.75 0 0 0-1.33-1l-4.92-1.64a8.58 8.58 0 0 0-5.35 0l-4.91 1.64a2.67 2.67 0 0 0-1.83 2.54v5.28a8.44 8.44 0 0 0 4 7.16l4 2.55a2.72 2.72 0 0 0 2.84 0l4-2.55a8.54 8.54 0 0 0 2.9-3.07a8.44 8.44 0 0 0 1.05-4.09v-5.28a2.66 2.66 0 0 0-.45-1.54m-4.13 7.2a1.2 1.2 0 0 1-1.2 1.2h-1.49v1.5a1.2 1.2 0 0 1-1.2 1.2h-1.8a1.19 1.19 0 0 1-1.2-1.2v-1.53h-1.5a1.25 1.25 0 0 1-.85-.35a1.2 1.2 0 0 1-.35-.85v-1.8c0-.316.126-.618.35-.84a1.2 1.2 0 0 1 .85-.36h1.5v-1.49a1.2 1.2 0 0 1 1.2-1.2h1.8a1.15 1.15 0 0 1 .84.35a1.2 1.2 0 0 1 .36.85v1.49h1.49a1.18 1.18 0 0 1 .85.36a1.15 1.15 0 0 1 .35.84z"></svg:path><svg:path fill="currentColor" d="M15.315 10.769v1.2h-1.94a.75.75 0 0 0-.75.75v1.95h-1.2v-1.95a.76.76 0 0 0-.75-.75h-1.95v-1.2h1.95a.75.75 0 0 0 .75-.75v-1.94h1.2v1.94a.74.74 0 0 0 .75.75z"></svg:path>`,
})
export class MageHospitalShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalSquareIcon],svg[mage-hospital-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.763 10.942v2.116a.53.53 0 0 1-.53.53h-2.645v2.645a.53.53 0 0 1-.53.53h-2.116a.53.53 0 0 1-.53-.53v-2.645H7.768a.53.53 0 0 1-.53-.53v-2.116a.53.53 0 0 1 .53-.53h2.645V7.768a.53.53 0 0 1 .53-.53h2.116a.53.53 0 0 1 .53.53v2.645h2.645a.53.53 0 0 1 .53.53"></svg:path></svg:g>`,
})
export class MageHospitalSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalSquareFillIcon],svg[mage-hospital-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.26 11.06a1.28 1.28 0 0 1-1.28 1.28h-1.89v1.9a1.3 1.3 0 0 1-1.28 1.28h-2.12a1.27 1.27 0 0 1-.9-.38a1.3 1.3 0 0 1-.38-.9v-1.9H7.77a1.27 1.27 0 0 1-.91-.37a1.3 1.3 0 0 1-.37-.91v-2.11a1.3 1.3 0 0 1 .37-.91a1.27 1.27 0 0 1 .91-.37h1.89v-1.9a1.32 1.32 0 0 1 .37-.9a1.27 1.27 0 0 1 .91-.38h2.1a1.26 1.26 0 0 1 .9.37c.24.242.377.569.38.91v1.9h1.89c.34 0 .667.132.91.37c.238.243.371.57.37.91z"></svg:path><svg:path fill="currentColor" d="M16.04 11.17v1.67h-2.42a.75.75 0 0 0-.75.75v2.43h-1.68v-2.43a.76.76 0 0 0-.75-.75h-2.4v-1.67h2.42a.76.76 0 0 0 .75-.75V7.99h1.68v2.43a.75.75 0 0 0 .75.75z"></svg:path>`,
})
export class MageHospitalSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHourGlassIcon],svg[mage-hour-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.77 19.071l-.113 1.696a.524.524 0 0 1-.473.483H5.852a.524.524 0 0 1-.514-.483l-.113-1.696a2.62 2.62 0 0 1 .442-1.655L9.336 12a.82.82 0 0 0 0-.946L5.943 6.553a2.7 2.7 0 0 1-.535-1.614V3.274a.524.524 0 0 1 .524-.524h12.17a.524.524 0 0 1 .523.524V4.94c0 .581-.188 1.147-.534 1.614l-3.371 4.42a.82.82 0 0 0 0 .945l3.628 5.457c.33.5.479 1.1.421 1.696m-9.393-.905h5.283"></svg:path>`,
})
export class MageHourGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHourGlassFillIcon],svg[mage-hour-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.968 16.99l-3.65-5.54l3.37-4.42a3.52 3.52 0 0 0 .69-2.07V3.27a1.27 1.27 0 0 0-.38-.9a1.25 1.25 0 0 0-.9-.37H5.928a1.26 1.26 0 0 0-1.27 1.27v1.67A3.45 3.45 0 0 0 5.348 7l3.36 4.58l-3.67 5.41a3.36 3.36 0 0 0-.56 2.13l.11 1.7A1.28 1.28 0 0 0 5.848 22h12.41a1.25 1.25 0 0 0 .78-.37a1.3 1.3 0 0 0 .37-.81l.11-1.68a3.32 3.32 0 0 0-.55-2.15m-4.31 2.2h-5.23a1 1 0 1 1 0-2h5.28a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageHourGlassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageIdCardIcon],svg[mage-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.5 16.052V7.948a4.14 4.14 0 0 0-1.236-2.945a4.25 4.25 0 0 0-2.985-1.22H6.72a4.25 4.25 0 0 0-2.985 1.22A4.14 4.14 0 0 0 2.5 7.948v8.104c0 1.105.445 2.164 1.236 2.945a4.25 4.25 0 0 0 2.985 1.22H17.28c1.12 0 2.193-.44 2.985-1.22a4.14 4.14 0 0 0 1.236-2.945"></svg:path><svg:path d="M8.552 12.14a2.054 2.054 0 1 0 0-4.108a2.054 2.054 0 0 0 0 4.108m3.081 3.828c0-.812-.324-1.59-.902-2.165a3.09 3.09 0 0 0-4.358 0a3.05 3.05 0 0 0-.902 2.165m9.097-7.049h3.594M14.568 12h1.54m-1.54 3.081h3.594"></svg:path></svg:g>`,
})
export class MageIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageIdCardFillIcon],svg[mage-id-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.82 4.465a5.06 5.06 0 0 0-3.51-1.43H6.75a4.93 4.93 0 0 0-5 4.91v8.11a4.9 4.9 0 0 0 1.46 3.47a5 5 0 0 0 3.51 1.44h10.56a5 5 0 0 0 3.51-1.44a4.83 4.83 0 0 0 1.46-3.47v-8.11a4.87 4.87 0 0 0-1.43-3.48m-9.16 12.25a.75.75 0 0 1-.75-.75a2.3 2.3 0 0 0-.68-1.63a2.43 2.43 0 0 0-3.3 0a2.28 2.28 0 0 0-.68 1.63a.75.75 0 0 1-1.5 0a3.8 3.8 0 0 1 1.12-2.7a3.9 3.9 0 0 1 1.2-.85a2.77 2.77 0 0 1-1.32-2.37a2.8 2.8 0 1 1 5.6 0a2.77 2.77 0 0 1-1.28 2.37c.457.19.875.465 1.23.81a3.88 3.88 0 0 1 1.12 2.7a.74.74 0 0 1-.76.79m6.53-.88H14.6a.75.75 0 0 1 0-1.5h3.59a.75.75 0 1 1 0 1.5m-4.34-3.84a.75.75 0 0 1 .75-.75h1.54a.75.75 0 1 1 0 1.5H14.6a.74.74 0 0 1-.75-.75m4.34-2.33H14.6a.75.75 0 0 1 0-1.5h3.59a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M8.58 11.385a1.3 1.3 0 1 0 0-2.6a1.3 1.3 0 0 0 0 2.6"></svg:path>`,
})
export class MageIdCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageIllustratorIcon],svg[mage-illustrator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.41 9.48c.35 1.14.71 2.28 1.07 3.44H9.36c.36-1.16.7-2.3 1.05-3.44"></svg:path><svg:path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-2.51 14.78h-1.56a.24.24 0 0 1-.27-.2c-.19-.56-.39-1.12-.58-1.69a.27.27 0 0 0-.32-.22H9.1a.27.27 0 0 0-.33.23c-.17.56-.36 1.1-.53 1.66a.26.26 0 0 1-.31.22H6.56c-.24 0-.26 0-.18-.25l2.16-6.23c.2-.57.4-1.14.58-1.71a2 2 0 0 0 .08-.52c0-.21.08-.26.27-.25h1.91c.14 0 .21 0 .26.19l2.46 6.93c.19.54.38 1.07.56 1.6c.08.22.07.24-.17.24m3.06-.17c0 .17-.07.22-.23.22h-1.44c-.2 0-.25-.08-.25-.26v-6.28c0-.2.06-.28.27-.27h1.41c.16 0 .24 0 .24.22q-.01 3.18 0 6.37m-1-7.3a1 1 0 0 1-1.06-1.08a1.07 1.07 0 0 1 1.1-1.06a1 1 0 0 1 1 1.08a1 1 0 0 1-1 1.06z"></svg:path><svg:path fill="currentColor" d="M11.48 12.92H9.36c.36-1.16.7-2.3 1-3.44c.4 1.14.76 2.28 1.12 3.44"></svg:path>`,
})
export class MageIllustratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageIcon],svg[mage-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.24 3.5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h8.5a5 5 0 0 0 5-5v-7a5 5 0 0 0-5-5"></svg:path><svg:path d="m2.99 17l2.75-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.49 1.93M7.99 10.17a1.66 1.66 0 1 0 0-3.32a1.66 1.66 0 0 0 0 3.32"></svg:path></svg:g>`,
})
export class MageImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageCheckIcon],svg[mage-image-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32m8.49 7.759l1.407 1.407a.53.53 0 0 0 .757 0L21.5 16.5"></svg:path></svg:g>`,
})
export class MageImageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageCrossIcon],svg[mage-image-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="m21.5 16.5l-4 3.991m0-3.982l4 3.991"></svg:path></svg:g>`,
})
export class MageImageCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageDownloadIcon],svg[mage-image-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="M18.707 20v-5"></svg:path><svg:path stroke-linejoin="round" d="m16.414 17.895l1.967 1.967a.46.46 0 0 0 .652 0L21 17.895"></svg:path></svg:g>`,
})
export class MageImageDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageFillIcon],svg[mage-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 2.75h-8.5A5.76 5.76 0 0 0 2 8.5v7a5.76 5.76 0 0 0 5.75 5.75h8.5A5.76 5.76 0 0 0 22 15.5v-7a5.76 5.76 0 0 0-5.75-5.75M8 6.1a2.41 2.41 0 1 1-.922 4.635A2.41 2.41 0 0 1 8.01 6.1zm12.5 6.68l-2.18-1.69a3.26 3.26 0 0 0-4.17.37l-2.33 2.33a3 3 0 0 1-3.72.36a1.48 1.48 0 0 0-.94-.24a1.46 1.46 0 0 0-.88.42l-2.43 2.84a4.25 4.25 0 0 1-.35-1.91l1.68-1.95a3 3 0 0 1 3.76-.41a1.43 1.43 0 0 0 1.82-.18l2.33-2.32a4.77 4.77 0 0 1 6.13-.51l1.28 1z"></svg:path><svg:path fill="currentColor" d="M8.91 8.51a.91.91 0 1 1-1.82 0a.91.91 0 0 1 1.82 0"></svg:path>`,
})
export class MageImageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageMinusIcon],svg[mage-image-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="M16.5 18.005h5"></svg:path></svg:g>`,
})
export class MageImageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImagePlusIcon],svg[mage-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="M18.994 15.5v5M16.5 18.005h5"></svg:path></svg:g>`,
})
export class MageImagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageQuestionMarkIcon],svg[mage-image-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="M16.92 15.89a1.6 1.6 0 0 1 1.743-.906a1.55 1.55 0 0 1 1.137.81a1.347 1.347 0 0 1-.784 1.851a.99.99 0 0 0-.64.898v.37"></svg:path><svg:path stroke-linejoin="round" d="M18.347 20.958h.002"></svg:path></svg:g>`,
})
export class MageImageQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageImageUploadIcon],svg[mage-image-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></svg:path><svg:path stroke-linejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></svg:path><svg:path stroke-miterlimit="10" d="M18.707 15v5"></svg:path><svg:path stroke-linejoin="round" d="m21 17.105l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"></svg:path></svg:g>`,
})
export class MageImageUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxIcon],svg[mage-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M15.25 2.75h-6.5a6 6 0 0 0-6 6v6.5a6 6 0 0 0 6 6h6.5a6 6 0 0 0 6-6v-6.5a6 6 0 0 0-6-6Z"></svg:path></svg:g>`,
})
export class MageInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxCheckIcon],svg[mage-inbox-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-linejoin="round" d="m16.25 5.582l1.407 1.407a.53.53 0 0 0 .757 0l2.836-2.836"></svg:path></svg:g>`,
})
export class MageInboxCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxCheckFillIcon],svg[mage-inbox-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.37v4.88A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2h4.87a.75.75 0 1 1 0 1.5H8.75A5.25 5.25 0 0 0 3.5 8.75v2.5H6a2.72 2.72 0 0 1 1.94.8c.512.52.803 1.22.81 1.95A1.25 1.25 0 0 0 10 15.25h4a1.22 1.22 0 0 0 .88-.37a1.26 1.26 0 0 0 .37-.88A2.73 2.73 0 0 1 18 11.25h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M18.03 7.9a1.4 1.4 0 0 1-.49-.1a1.6 1.6 0 0 1-.42-.28l-1.4-1.41a.75.75 0 1 1 1.06-1.06l1.25 1.26l2.69-2.69a.75.75 0 0 1 1.06 1.06l-2.84 2.84a1.3 1.3 0 0 1-.41.28a1.4 1.4 0 0 1-.5.1"></svg:path>`,
})
export class MageInboxCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxCrossIcon],svg[mage-inbox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="m20.75 2.75l-3.5 3.492m0-3.484l3.5 3.492"></svg:path></svg:g>`,
})
export class MageInboxCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxCrossFillIcon],svg[mage-inbox-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.37v4.88A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2h4.87a.75.75 0 1 1 0 1.5H8.75A5.25 5.25 0 0 0 3.5 8.75v2.5H6a2.72 2.72 0 0 1 1.94.8c.512.52.803 1.22.81 1.95A1.25 1.25 0 0 0 10 15.25h4a1.22 1.22 0 0 0 .88-.37a1.26 1.26 0 0 0 .37-.88A2.73 2.73 0 0 1 18 11.25h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M21.28 5.72a.75.75 0 0 1-1.06 1.06l-1.23-1.22l-1.16 1.21a.74.74 0 0 1-.53.22a.73.73 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l1.21-1.21l-1.21-1.21a.75.75 0 0 1 0-1.06a.74.74 0 0 1 1.06 0l1.21 1.21l1.23-1.22a.75.75 0 0 1 1.06 1.06L20.11 4.5z"></svg:path>`,
})
export class MageInboxCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxDownloadIcon],svg[mage-inbox-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M18.957 7.75v-5"></svg:path><svg:path stroke-linejoin="round" d="m16.664 5.645l1.967 1.967a.46.46 0 0 0 .652 0l1.967-1.967"></svg:path></svg:g>`,
})
export class MageInboxDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxDownloadFillIcon],svg[mage-inbox-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.918 10.37v4.88a6.78 6.78 0 0 1-1.972 4.77a6.72 6.72 0 0 1-4.75 1.98H8.721a6.72 6.72 0 0 1-4.75-1.98A6.77 6.77 0 0 1 2 15.25v-6.5a6.77 6.77 0 0 1 1.972-4.77A6.72 6.72 0 0 1 8.722 2h4.85a.746.746 0 0 1 .747.75a.75.75 0 0 1-.747.75h-4.85a5.22 5.22 0 0 0-3.697 1.538A5.26 5.26 0 0 0 3.494 8.75v2.5h2.49a2.7 2.7 0 0 1 1.932.8c.51.52.799 1.22.806 1.95a1.25 1.25 0 0 0 1.245 1.25h3.984a1.2 1.2 0 0 0 .876-.37c.233-.234.365-.55.368-.88a2.74 2.74 0 0 1 .797-1.95a2.72 2.72 0 0 1 1.942-.8h2.49v-.88a.75.75 0 0 1 .747-.75a.745.745 0 0 1 .747.75"></svg:path><svg:path fill="currentColor" d="M18.88 8.5a.745.745 0 0 1-.737-.75v-5a.742.742 0 0 1 1.026-.696a.75.75 0 0 1 .468.696v5a.76.76 0 0 1-.757.75"></svg:path><svg:path fill="currentColor" d="M21.748 5.11a.745.745 0 0 0-1.055 0l-.996 1l-.747.75l-1.763-1.77a.745.745 0 0 0-1.256.535a.75.75 0 0 0 .2.525l1.992 2q.181.17.409.27a1.16 1.16 0 0 0 .916-.01q.221-.091.388-.26l1.992-2a.75.75 0 0 0-.08-1.04"></svg:path>`,
})
export class MageInboxDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxFillIcon],svg[mage-inbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v2.25A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25V13h4a1 1 0 0 1 .71.29c.183.192.286.445.29.71a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3a1 1 0 0 1 1-1z"></svg:path><svg:path fill="currentColor" d="M22 8.75V11h-4a3 3 0 0 0-3 3a1 1 0 0 1-1 1h-4a1 1 0 0 1-.71-.29A1 1 0 0 1 9 14a3 3 0 0 0-3-3H2V8.75A6.76 6.76 0 0 1 8.75 2h6.5A6.76 6.76 0 0 1 22 8.75"></svg:path>`,
})
export class MageInboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxMinusIcon],svg[mage-inbox-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M17.25 5.286h4"></svg:path></svg:g>`,
})
export class MageInboxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxMinusFillIcon],svg[mage-inbox-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.37v4.88A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2h4.87a.75.75 0 1 1 0 1.5H8.75A5.25 5.25 0 0 0 3.5 8.75v2.5H6a2.72 2.72 0 0 1 1.94.8c.512.52.803 1.22.81 1.95A1.25 1.25 0 0 0 10 15.25h4a1.22 1.22 0 0 0 .88-.37a1.26 1.26 0 0 0 .37-.88A2.73 2.73 0 0 1 18 11.25h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M21.25 6.03h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageInboxMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxNotificationIcon],svg[mage-inbox-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path stroke-linecap="round" d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:circle cx="19" cy="5" r="2.5"></svg:circle></svg:g>`,
})
export class MageInboxNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxNotificationFillIcon],svg[mage-inbox-notification-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#mageInboxNotificationFill0)"><svg:path d="M21.875 10.495v4.88a6.76 6.76 0 0 1-6.75 6.75h-6.5a6.76 6.76 0 0 1-6.75-6.75v-6.5a6.76 6.76 0 0 1 6.75-6.75h4.87a.75.75 0 1 1 0 1.5h-4.87a5.25 5.25 0 0 0-5.25 5.25v2.5h2.5a2.75 2.75 0 0 1 2.75 2.75a1.25 1.25 0 0 0 1.25 1.25h4a1.26 1.26 0 0 0 1.25-1.25a2.73 2.73 0 0 1 2.75-2.75h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path d="M18.875 8.375a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path></svg:g><svg:defs><svg:clippath id="mageInboxNotificationFill0"><svg:path fill="#fff" d="M1.875 1.875h20.25v20.25H1.875z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageInboxNotificationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxPlusIcon],svg[mage-inbox-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M18.745 2.75v5M16.25 5.255h5"></svg:path></svg:g>`,
})
export class MageInboxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxPlusFillIcon],svg[mage-inbox-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.37v4.88A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2h4.87a.75.75 0 1 1 0 1.5H8.75A5.25 5.25 0 0 0 3.5 8.75v2.5H6a2.72 2.72 0 0 1 1.94.8c.512.52.803 1.22.81 1.95A1.25 1.25 0 0 0 10 15.25h4a1.22 1.22 0 0 0 .88-.37a1.26 1.26 0 0 0 .37-.88A2.73 2.73 0 0 1 18 11.25h2.5v-.88a.75.75 0 1 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M22 5.25a.75.75 0 0 1-.75.75h-1.76v1.75a.75.75 0 1 1-1.5 0V6h-1.74a.75.75 0 1 1 0-1.5h1.74V2.75a.75.75 0 1 1 1.5 0V4.5h1.76a.76.76 0 0 1 .75.75"></svg:path>`,
})
export class MageInboxPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxQuestionMarkIcon],svg[mage-inbox-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M17.614 3.527a1.33 1.33 0 0 1 1.451-.755a1.3 1.3 0 0 1 .948.675a1.12 1.12 0 0 1-.653 1.543a.83.83 0 0 0-.534.748v.308"></svg:path><svg:path stroke-linejoin="round" d="M18.802 7.75h.003"></svg:path></svg:g>`,
})
export class MageInboxQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxQuestionMarkFillIcon],svg[mage-inbox-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.412v4.862a6.72 6.72 0 0 1-1.98 4.753A6.77 6.77 0 0 1 15.25 22h-6.5a6.77 6.77 0 0 1-4.77-1.973A6.72 6.72 0 0 1 2 15.274V8.797a6.72 6.72 0 0 1 1.98-4.753a6.77 6.77 0 0 1 4.77-1.972h4.87a.75.75 0 0 1 .75.747a.746.746 0 0 1-.75.747H8.75a5.26 5.26 0 0 0-3.712 1.532a5.22 5.22 0 0 0-1.538 3.7v2.49H6a2.73 2.73 0 0 1 1.94.798c.512.518.803 1.215.81 1.943A1.25 1.25 0 0 0 10 15.274h4a1.22 1.22 0 0 0 .88-.368c.234-.233.367-.548.37-.877a2.7 2.7 0 0 1 .8-1.944A2.73 2.73 0 0 1 18 11.29h2.5v-.877a.746.746 0 0 1 .75-.748a.75.75 0 0 1 .75.748"></svg:path><svg:path fill="currentColor" d="M18.83 6.844a.75.75 0 0 1-.75-.747v-.299a1.6 1.6 0 0 1 1-1.445a.6.6 0 0 0 .16-.09a.4.4 0 0 0 .09-.129q.015-.075 0-.15a.26.26 0 0 0 0-.149a.44.44 0 0 0-.15-.16a.5.5 0 0 0-.23-.099a.6.6 0 0 0-.4 0a.64.64 0 0 0-.26.28a.75.75 0 0 1-.716.459a.75.75 0 0 1-.686-.503a.75.75 0 0 1 .042-.585c.19-.426.517-.776.93-.996a2.16 2.16 0 0 1 1.34-.2c.308.053.599.175.85.36a1.844 1.844 0 0 1 .22 2.899a1.9 1.9 0 0 1-.67.399v.338a.734.734 0 0 1-.458.764a.74.74 0 0 1-.312.053m0 1.704a.75.75 0 0 1-.75-.747a.746.746 0 0 1 .75-.747a.75.75 0 0 1 .75.747a.746.746 0 0 1-.75.747"></svg:path>`,
})
export class MageInboxQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxStarIcon],svg[mage-inbox-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-linejoin="round" d="m19.107 1.864l-.31.924a2.36 2.36 0 0 1-1.505 1.505l-.934.31a.157.157 0 0 0 0 .3l.934.31a2.36 2.36 0 0 1 1.493 1.493l.31.936a.157.157 0 0 0 .298 0l.322-.924a2.36 2.36 0 0 1 1.492-1.493l.935-.31a.157.157 0 0 0 0-.3l-.923-.322a2.36 2.36 0 0 1-1.504-1.505l-.31-.935a.157.157 0 0 0-.298.011"></svg:path></svg:g>`,
})
export class MageInboxStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxStarFillIcon],svg[mage-inbox-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 10.86v4.88a6.76 6.76 0 0 1-6.75 6.75h-6.5a6.76 6.76 0 0 1-6.75-6.75v-6.5a6.76 6.76 0 0 1 6.75-6.75h4.87a.75.75 0 1 1 0 1.5H8.25A5.25 5.25 0 0 0 3 9.24v2.5h2.5a2.75 2.75 0 0 1 2.75 2.75a1.25 1.25 0 0 0 1.25 1.25h4a1.26 1.26 0 0 0 1.25-1.25a2.73 2.73 0 0 1 2.75-2.75H20v-.88a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M22.5 5.25c-.01.188-.07.37-.17.53a1 1 0 0 1-.46.34l-.93.31a1.53 1.53 0 0 0-1 1l-.33.94c-.07.17-.18.32-.32.44a.94.94 0 0 1-.54.17a1.1 1.1 0 0 1-.53-.17a.94.94 0 0 1-.33-.46l-.31-.93a1.66 1.66 0 0 0-.39-.63a1.64 1.64 0 0 0-.63-.39l-.93-.31a1.06 1.06 0 0 1-.45-.33a.9.9 0 0 1-.17-.53c.01-.193.071-.38.18-.54a.86.86 0 0 1 .44-.32l.93-.31a1.59 1.59 0 0 0 1-1l.31-.93a1.5 1.5 0 0 1 .3-.43a1.25 1.25 0 0 1 .53-.19a1 1 0 0 1 .54.15a1 1 0 0 1 .35.45l.32 1a1.6 1.6 0 0 0 1 1l.94.33c.17.07.32.18.44.32c.116.14.19.31.21.49"></svg:path>`,
})
export class MageInboxStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxUploadIcon],svg[mage-inbox-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M18.957 2.75v5"></svg:path><svg:path stroke-linejoin="round" d="m21.25 4.855l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"></svg:path></svg:g>`,
})
export class MageInboxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInboxUploadFillIcon],svg[mage-inbox-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 10.393v4.87A6.745 6.745 0 0 1 15.23 22H8.74A6.75 6.75 0 0 1 2 15.264V8.777A6.745 6.745 0 0 1 8.74 2.04h4.862a.749.749 0 1 1 0 1.497H8.74a5.243 5.243 0 0 0-5.242 5.24v2.495h2.496a2.72 2.72 0 0 1 1.937.798a2.82 2.82 0 0 1 .809 1.946a1.247 1.247 0 0 0 1.248 1.248h3.994a1.22 1.22 0 0 0 .878-.37c.234-.233.367-.548.37-.878a2.72 2.72 0 0 1 2.746-2.745h2.496v-.878a.749.749 0 0 1 1.497 0"></svg:path><svg:path fill="currentColor" d="M18.924 8.527a.75.75 0 0 1-.739-.748v-4.99a.74.74 0 0 1 .74-.749a.75.75 0 0 1 .758.749v4.99a.76.76 0 0 1-.759.748"></svg:path><svg:path fill="currentColor" d="M21.8 4.355L19.803 2.36a1.05 1.05 0 0 0-.39-.27a1.2 1.2 0 0 0-.459-.09c-.15.002-.3.032-.44.09a1.4 1.4 0 0 0-.389.27l-1.997 1.995a.75.75 0 0 0 0 1.058a.74.74 0 0 0 1.059 0l.998-.998l.75-.748l1.757 1.756a.73.73 0 0 0 .529.22a.74.74 0 0 0 .529-.22a.75.75 0 0 0 .05-1.068"></svg:path>`,
})
export class MageInboxUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInformationCircleIcon],svg[mage-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m.005-4.222v-6.333"></svg:path><svg:path stroke-width="2" d="M11.956 7.443h.01"></svg:path></svg:g>`,
})
export class MageInformationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInformationCircleFillIcon],svg[mage-information-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m0 4.69a1 1 0 1 1-.03 0zm1 10.83a1 1 0 1 1-2 0v-6.33a1 1 0 0 1 2 0z"></svg:path>`,
})
export class MageInformationCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInformationSquareIcon],svg[mage-information-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17.139v-6.167"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.958 7.563h.008"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageInformationSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInformationSquareFillIcon],svg[mage-information-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-3.29 4.56a1 1 0 1 1-.376.073a1 1 0 0 1 .386-.073zm1 10.58a1 1 0 1 1-2 0v-6.17a1 1 0 1 1 2 0z"></svg:path>`,
})
export class MageInformationSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInstagramCircleIcon],svg[mage-instagram-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63"></svg:path><svg:path fill="currentColor" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.67 2.67 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z"></svg:path><svg:path fill="currentColor" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.39 3.39 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z"></svg:path>`,
})
export class MageInstagramCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageInstagramSquareIcon],svg[mage-instagram-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.823 12.234c-.016.35-.13.688-.331.975a1.7 1.7 0 0 1-.829.643a1.77 1.77 0 0 1-1.053.088a1.8 1.8 0 0 1-.926-.516a1.9 1.9 0 0 1-.468-.976a1.76 1.76 0 0 1 .127-1.043c.144-.327.38-.606.682-.8c.307-.19.662-.291 1.024-.292c.477.026.926.232 1.258.575a1.85 1.85 0 0 1 .516 1.346"></svg:path><svg:path fill="currentColor" d="M17.265 8.002a2.26 2.26 0 0 0-1.248-1.248a2.6 2.6 0 0 0-.887-.175H8.968A2.31 2.31 0 0 0 6.667 8.88v6.279a2.3 2.3 0 0 0 .682 1.628a2.32 2.32 0 0 0 1.619.673h6.162a2.32 2.32 0 0 0 2.123-1.419a2.3 2.3 0 0 0 .178-.882v-6.27a2.6 2.6 0 0 0-.166-.887m-2.437 5.441a2.9 2.9 0 0 1-.644.975c-.28.283-.611.51-.975.673a3.13 3.13 0 0 1-2.486-.028a3.08 3.08 0 0 1-1.765-3.365a3.2 3.2 0 0 1 .829-1.59a3.11 3.11 0 0 1 3.354-.692c.567.23 1.05.628 1.384 1.141a3.03 3.03 0 0 1 .527 1.677c.014.415-.063.827-.224 1.209M15.9 8.626a.555.555 0 1 1-1.102 0a.557.557 0 1 1 1.102 0"></svg:path><svg:path fill="currentColor" d="M16.875 2.25h-9.75A4.875 4.875 0 0 0 2.25 7.125v9.75a4.875 4.875 0 0 0 4.875 4.875h9.75a4.875 4.875 0 0 0 4.875-4.875v-9.75a4.875 4.875 0 0 0-4.875-4.875m2.067 12.812c.01.51-.087 1.019-.283 1.491a3.9 3.9 0 0 1-2.096 2.096c-.473.196-.98.292-1.492.283H9.075a3.8 3.8 0 0 1-1.492-.282a4 4 0 0 1-1.258-.839a3.9 3.9 0 0 1-.838-1.258a3.7 3.7 0 0 1-.312-1.492V9.018a3.8 3.8 0 0 1 .283-1.492A3.9 3.9 0 0 1 7.535 5.41a3.9 3.9 0 0 1 1.54-.263h6.045a3.8 3.8 0 0 1 2.73 1.121c.357.362.641.79.838 1.258c.195.473.292.98.283 1.492z"></svg:path>`,
})
export class MageInstagramSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageKeyIcon],svg[mage-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.543 4.471A6.501 6.501 0 0 0 8.618 7.255a6.52 6.52 0 0 0 .34 4.447L2.5 18.179V21.5h3.364l-.318-1.99l1.965.33l1.67-1.661l-.318-1.99l1.976.318l1.47-1.472a6.5 6.5 0 0 0 8.06-2.261a6.52 6.52 0 0 0-.838-8.338z"></svg:path><svg:path d="M16.99 10.23a2.258 2.258 0 0 1-3.476-2.853a2.26 2.26 0 0 1 3.477-.339a2.275 2.275 0 0 1 0 3.192"></svg:path></svg:g>`,
})
export class MageKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageKeyFillIcon],svg[mage-key-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.953 8.463a7.1 7.1 0 0 0-2.106-4.372l-.108-.088A7.078 7.078 0 0 0 8.086 6.854a7.1 7.1 0 0 0 .078 4.684l-5.95 5.973a.73.73 0 0 0-.214.517v3.24a.723.723 0 0 0 .731.732H5.98a.72.72 0 0 0 .722-.84l-.147-.975l.907.146a.75.75 0 0 0 .644-.195l1.629-1.63a.72.72 0 0 0 .204-.634l-.156-.976l.976.146a.73.73 0 0 0 .634-.205l1.082-1.093a7.06 7.06 0 0 0 6.787-1.042a7.08 7.08 0 0 0 2.702-6.317zm-4.525 2.372a2.93 2.93 0 0 1-1.54.83a3 3 0 0 1-.586.058a3.1 3.1 0 0 1-1.15-.224a3 3 0 0 1-1.346-1.113a2.93 2.93 0 0 1-.508-1.669a3 3 0 0 1 1.853-2.772a3.03 3.03 0 0 1 3.277.654a3.017 3.017 0 0 1 0 4.236"></svg:path>`,
})
export class MageKeyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageKeyboardIcon],svg[mage-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.981 6.583H4.02c-.701 0-1.269.647-1.269 1.444v7.946c0 .797.568 1.444 1.269 1.444h15.96c.701 0 1.269-.647 1.269-1.444V8.027c0-.797-.568-1.444-1.269-1.444M9.357 13.806h5.286m2.748 0h1.058m-11.84 0H5.55m.001-3.612H6.61m2.885 0h1.057m2.896 0h1.057m2.886 0h1.058"></svg:path>`,
})
export class MageKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageKeyboardFillIcon],svg[mage-keyboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.81H4A2.11 2.11 0 0 0 2 8v8a2.11 2.11 0 0 0 2 2.19h16A2.11 2.11 0 0 0 22 16V8a2.11 2.11 0 0 0-2-2.19m-6.53 3.36h1.05a1 1 0 0 1 0 2h-1.05a1 1 0 0 1 0-2m-4 0h1.06a1 1 0 1 1 0 2H9.47a1 1 0 0 1 0-2m-2.88 5.61H5.53a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2m0-3.61H5.53a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2m8 3.61H9.3a1 1 0 0 1 0-2h5.29a1 1 0 1 1 0 2m3.81 0h-1.06a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2m0-3.61h-1.06a1 1 0 0 1 0-2h1.06a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageKeyboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowDownLeftIcon],svg[mage-l-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.32 20.5l-5.21-5.21a1.214 1.214 0 0 1 0-1.724l5.21-5.209"></svg:path><svg:path d="M20.249 3.5v7.286a3.643 3.643 0 0 1-3.643 3.643H3.759"></svg:path></svg:g>`,
})
export class MageLArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowDownRightIcon],svg[mage-l-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14.68 20.5l5.21-5.21a1.21 1.21 0 0 0 0-1.724l-5.21-5.209"></svg:path><svg:path d="M3.751 3.5v7.286a3.643 3.643 0 0 0 3.643 3.643h12.847"></svg:path></svg:g>`,
})
export class MageLArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowLeftDownIcon],svg[mage-l-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3.5 14.68l5.21 5.21a1.21 1.21 0 0 0 1.724 0l5.209-5.21"></svg:path><svg:path d="M20.5 3.751h-7.286a3.643 3.643 0 0 0-3.643 3.643v12.847"></svg:path></svg:g>`,
})
export class MageLArrowLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowLeftUpIcon],svg[mage-l-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3.5 9.32l5.21-5.21a1.214 1.214 0 0 1 1.724 0l5.209 5.21"></svg:path><svg:path d="M20.5 20.249h-7.286a3.643 3.643 0 0 1-3.643-3.643V3.759"></svg:path></svg:g>`,
})
export class MageLArrowLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowRightDownIcon],svg[mage-l-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.5 14.68l-5.21 5.21a1.213 1.213 0 0 1-1.724 0l-5.209-5.21"></svg:path><svg:path d="M3.5 3.751h7.286a3.643 3.643 0 0 1 3.643 3.643v12.847"></svg:path></svg:g>`,
})
export class MageLArrowRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowRightUpIcon],svg[mage-l-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.5 9.32l-5.21-5.21a1.215 1.215 0 0 0-1.724 0L8.357 9.32"></svg:path><svg:path d="M3.5 20.249h7.286a3.643 3.643 0 0 0 3.643-3.643V3.759"></svg:path></svg:g>`,
})
export class MageLArrowRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowUpLeftIcon],svg[mage-l-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.32 3.5L4.11 8.71a1.214 1.214 0 0 0 0 1.724l5.21 5.209"></svg:path><svg:path d="M20.249 20.5v-7.286a3.643 3.643 0 0 0-3.643-3.643H3.759"></svg:path></svg:g>`,
})
export class MageLArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLArrowUpRightIcon],svg[mage-l-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14.68 3.5l5.21 5.21a1.21 1.21 0 0 1 0 1.724l-5.21 5.209"></svg:path><svg:path d="M3.751 20.5v-7.286a3.643 3.643 0 0 1 3.643-3.643h12.847"></svg:path></svg:g>`,
})
export class MageLArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLaptopIcon],svg[mage-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.75 16.163V6.212a1.106 1.106 0 0 0-1.105-1.106H5.377a1.106 1.106 0 0 0-1.105 1.106v9.95m-1.772.001h19v1.365c0 .363-.167.71-.464.966s-.7.4-1.12.4H4.084a1.72 1.72 0 0 1-1.12-.4a1.28 1.28 0 0 1-.463-.966z"></svg:path>`,
})
export class MageLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLaptopFillIcon],svg[mage-laptop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.47 15.39h-1V6.22a1.87 1.87 0 0 0-.54-1.32a1.85 1.85 0 0 0-1.31-.54H5.35a1.9 1.9 0 0 0-.71.14a2 2 0 0 0-1 1a1.9 1.9 0 0 0-.14.71v9.2h-1a.75.75 0 0 0-.75.75v1.36a2 2 0 0 0 .73 1.54a2.45 2.45 0 0 0 1.6.58h15.84a2.5 2.5 0 0 0 1.61-.58a2 2 0 0 0 .72-1.54v-1.36a.75.75 0 0 0-.78-.77m-.85 2.11a.93.93 0 0 1-.2.58a.8.8 0 0 1-.62.31H4.14a.8.8 0 0 1-.62-.31a.93.93 0 0 1-.2-.58v-.88h17.3z"></svg:path>`,
})
export class MageLaptopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutCenterIcon],svg[mage-layout-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 8.917h18.5M12 21.25V8.917"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutCenterFillIcon],svg[mage-layout-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.92V22H8.75A6.76 6.76 0 0 1 2 15.25V9.92zm11 0v5.33A6.76 6.76 0 0 1 15.25 22H13V9.92zm-.06-2H2.06A6.75 6.75 0 0 1 8.75 2h6.5a6.75 6.75 0 0 1 6.69 5.92"></svg:path>`,
})
export class MageLayoutCenterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutDownIcon],svg[mage-layout-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.25 15.084H2.75"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutDownFillIcon],svg[mage-layout-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 16.08A6.75 6.75 0 0 1 15.25 22h-6.5a6.75 6.75 0 0 1-6.69-5.92zM22 8.75v5.33H2V8.75A6.76 6.76 0 0 1 8.75 2h6.5A6.76 6.76 0 0 1 22 8.75"></svg:path>`,
})
export class MageLayoutDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutGridIcon],svg[mage-layout-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 2.75v18.5M21.25 12H2.75"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutGridFillIcon],svg[mage-layout-grid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13v9H8.75A6.76 6.76 0 0 1 2 15.25V13zm11 0v2.25A6.76 6.76 0 0 1 15.25 22H13v-9zm0-4.25V11h-9V2h2.25A6.76 6.76 0 0 1 22 8.75M11 2v9H2V8.75A6.76 6.76 0 0 1 8.75 2z"></svg:path>`,
})
export class MageLayoutGridFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutLeftIcon],svg[mage-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.917 21.25V2.75"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutLeftFillIcon],svg[mage-layout-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.92 2.06v19.88A6.75 6.75 0 0 1 2 15.25v-6.5a6.75 6.75 0 0 1 5.92-6.69M22 8.75v6.5A6.76 6.76 0 0 1 15.25 22H9.92V2h5.33A6.76 6.76 0 0 1 22 8.75"></svg:path>`,
})
export class MageLayoutLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutRightIcon],svg[mage-layout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.084 2.75v18.5"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutRightFillIcon],svg[mage-layout-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.75v6.5a6.75 6.75 0 0 1-5.92 6.69V2.06A6.75 6.75 0 0 1 22 8.75M14.08 2v20H8.75A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2z"></svg:path>`,
})
export class MageLayoutRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpIcon],svg[mage-layout-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 8.917h18.5"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpFillIcon],svg[mage-layout-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 7.92H2.06A6.75 6.75 0 0 1 8.75 2h6.5a6.75 6.75 0 0 1 6.69 5.92m.06 2v5.33A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25V9.92z"></svg:path>`,
})
export class MageLayoutUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpLeftIcon],svg[mage-layout-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 9.167h18.5"></svg:path><svg:path stroke-linecap="square" stroke-linejoin="round" d="M9.167 21.25V9.167"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpLeftFillIcon],svg[mage-layout-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 8.17H2.03A6.76 6.76 0 0 1 8.75 2h6.5a6.76 6.76 0 0 1 6.72 6.17m-13.8 2v11.8A6.76 6.76 0 0 1 2 15.25v-5.08zm13.83 0v5.08A6.76 6.76 0 0 1 15.25 22h-5.08V10.17z"></svg:path>`,
})
export class MageLayoutUpLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpRightIcon],svg[mage-layout-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 9.167h18.5M15.334 21.25V9.167"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLayoutUpRightFillIcon],svg[mage-layout-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 8.17H2.03A6.76 6.76 0 0 1 8.75 2h6.5a6.76 6.76 0 0 1 6.72 6.17m-7.64 2V22H8.75A6.76 6.76 0 0 1 2 15.25v-5.08zm7.67 0v5.08a6.74 6.74 0 0 1-5.67 6.65V10.17z"></svg:path>`,
})
export class MageLayoutUpRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLensIcon],svg[mage-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M16.113 14.375v-4.75L12 7.25L7.886 9.625v4.75L12 16.75zm1.255-10.213L12.01 7.25m9.462 5.425l-5.359-3.05m0 10.935v-6.185m-9.49 5.453l5.368-3.078m-9.462-5.443l5.358 3.068M7.886 3.44v6.185"></svg:path></svg:g>`,
})
export class MageLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLensFillIcon],svg[mage-lens-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.272 17.438l-4.37 2.504a10.1 10.1 0 0 1-2.728-3.207A10 10 0 0 1 2 12.697l4.856 2.781h.06zm5.581-1.238v5.038a10.1 10.1 0 0 1-8.312-.277l4.787-2.732h.09zm6.087-2.938a10 10 0 0 1-1.419 3.998a10.05 10.05 0 0 1-2.95 3.057v-9.54zm.06-1.94L17.144 8.57l-.209-.09l-3.207-1.87l4.37-2.503a10 10 0 0 1 2.727 3.19A10 10 0 0 1 22 11.322m-5.571-8.273l-4.786 2.77h-.08L8.147 7.8V2.762a10.13 10.13 0 0 1 8.282.257zm-10 .663v9.54l-4.37-2.494a10 10 0 0 1 1.423-3.993a10.1 10.1 0 0 1 2.947-3.053m9.424 6.096v4.423L12 16.448l-3.853-2.217V9.808L12 7.59z"></svg:path>`,
})
export class MageLensFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLightBulbIcon],svg[mage-light-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.252 12.49c-.284 2.365-1.833 3.31-2.502 3.996c-.67.688-.55.825-.505 1.834a.916.916 0 0 1-.916.971h-2.658a.92.92 0 0 1-.917-.971c0-.99.092-1.22-.504-1.834c-.76-.76-2.548-1.833-2.548-4.784a5.307 5.307 0 1 1 10.55.788"></svg:path><svg:path d="M10.46 19.236v1.512c0 .413.23.752.513.752h2.053c.285 0 .514-.34.514-.752v-1.512m-2.32-10.54a2.227 2.227 0 0 0-2.226 2.227m10.338.981h1.834m-3.68-6.012l1.301-1.301M18.486 17l1.301 1.3M12 2.377V3.86m-6.76.73l1.292 1.302M4.24 18.3L5.532 17m-.864-5.096H2.835"></svg:path></svg:g>`,
})
export class MageLightBulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLightBulbElectricityIcon],svg[mage-light-bulb-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.156 16.314c-2.583 2.085-5.177 1.491-6.469 1.491s-1.373.262-2.321 1.27a1.3 1.3 0 0 1-.424.302a1.22 1.22 0 0 1-1.01 0a1.3 1.3 0 0 1-.433-.303l-2.594-2.568a1.3 1.3 0 0 1-.303-.454a1.3 1.3 0 0 1-.101-.514a1.23 1.23 0 0 1 .404-.937c1.009-.947 1.292-1.128 1.292-2.327c0-1.51-.717-4.372 2.24-7.334a7.4 7.4 0 0 1 2.523-1.662a7.5 7.5 0 0 1 3.028-.524a7.47 7.47 0 0 1 5.45 2.61a7.52 7.52 0 0 1 .8 8.662a7.5 7.5 0 0 1-2.051 2.288zm-13.554-.01l-1.514 1.511a1.01 1.01 0 0 0-.202 1.26l2.11 2.014c.282.292.847.172 1.291-.242l1.423-1.52"></svg:path><svg:path d="m15.248 5.873l-5.063 4.273a.3.3 0 0 0-.094.12a.4.4 0 0 0-.036.155a.3.3 0 0 0 .067.136a.3.3 0 0 0 .134.031l2.913.68l-1.26 3.382a.14.14 0 0 0-.014.063l.052.012l.062.014l5.063-4.273a.22.22 0 0 0 .212-.114a.3.3 0 0 0 .037-.155a.3.3 0 0 0-.067-.136a.3.3 0 0 0-.135-.031l-2.902-.677l1.172-3.338a.07.07 0 0 0 .015-.062l-.063-.014z"></svg:path></svg:g>`,
})
export class MageLightBulbElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLightBulbElectricityFillIcon],svg[mage-light-bulb-electricity-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.666 7.817a8.3 8.3 0 0 0-4.32-5.011a8.3 8.3 0 0 0-6.63-.22a8.1 8.1 0 0 0-2.78 1.833a8.37 8.37 0 0 0-2.49 7.177v.702c0 .801 0 .841-.87 1.613l-.17.16a2 2 0 0 0-.65 1.494q0 .254.06.501l-1.22 1.223a1.78 1.78 0 0 0-.57 1.002c-.068.4.007.812.21 1.163a.5.5 0 0 0 .14.16l2.08 2.005a1.3 1.3 0 0 0 .94.38a2.16 2.16 0 0 0 1.44-.63l1.11-1.193c.433.11.89.07 1.3-.11c.257-.107.487-.271.67-.482l.29-.31c.65-.702.66-.722 1.48-.722h.67a8.35 8.35 0 0 0 6.15-1.594a.6.6 0 0 0 .13-.08a8.3 8.3 0 0 0 2.945-4.072a8.3 8.3 0 0 0 .055-5.029zM5.806 20.306a.8.8 0 0 1-.32.2l-1.95-1.864a.3.3 0 0 1 0-.1a.32.32 0 0 1 .12-.19l1-1.003l2 2.005zm11.62-9.632a1 1 0 0 1-.34.32l-.12.05l-4.29 3.63a.67.67 0 0 1-.42.16h-.15a.79.79 0 0 1-.6-.662q0-.147.06-.28l.84-2.266l-1.77-.41a.8.8 0 0 1-.3-.091a.56.56 0 0 1-.21-.16a.83.83 0 0 1-.2-.411a1 1 0 0 1 0-.16a1 1 0 0 1 .1-.382a.74.74 0 0 1 .26-.34l4.4-3.729a.66.66 0 0 1 .8 0a.77.77 0 0 1 .38.471q.021.16 0 .32q.005.045 0 .091l-.76 2.205l1.77.411a1 1 0 0 1 .3.09c.09.037.166.1.22.18a.84.84 0 0 1 .19.392q.006.045 0 .09a.94.94 0 0 1-.16.48"></svg:path>`,
})
export class MageLightBulbElectricityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLightBulbFillIcon],svg[mage-light-bulb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.754 2.305a.75.75 0 0 0-1.5 0v1.48a.75.75 0 0 0 1.5 0zm5.111 7.99a5.9 5.9 0 0 0-1.11-2.22a6 6 0 0 0-1.91-1.59a6.2 6.2 0 0 0-2.38-.69a6 6 0 0 0-2.46.33a6 6 0 0 0-2.13 1.29a6.2 6.2 0 0 0-1.43 2a6 6 0 0 0-.49 2.43a6.09 6.09 0 0 0 2.41 5l.35.33c.3.31.3.31.29 1v.32a1.6 1.6 0 0 0 .1.65c.07.222.194.425.36.59q.114.117.25.21v1a1.38 1.38 0 0 0 1.26 1.5h2a1.39 1.39 0 0 0 1.27-1.5v-1a1.6 1.6 0 0 0 .25-.21c.157-.166.277-.364.35-.58a1.7 1.7 0 0 0 .1-.66v-.37c0-.55 0-.55.31-.9l.38-.35a6.17 6.17 0 0 0 2.33-4.07a5.9 5.9 0 0 0-.1-2.51m-5.07 10.63h-1.58v-.63h1.58zm-.79-10.56a1.23 1.23 0 0 0-1.23 1.23a1 1 0 1 1-2 0a3.21 3.21 0 0 1 3.23-3.23a1 1 0 0 1 0 2m9.16 2.5h-1.83a.75.75 0 0 1 0-1.5h1.83a.75.75 0 1 1 0 1.5m-3.68-6.01a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l1.3-1.3a.75.75 0 0 1 1.06 1.06l-1.3 1.3a.73.73 0 0 1-.53.22m2.3 12.44a.8.8 0 0 1-.53-.22l-1.3-1.3a.75.75 0 0 1 .242-1.226a.74.74 0 0 1 .818.166l1.3 1.3a.74.74 0 0 1 0 1.06a.75.75 0 0 1-.53.22M6.535 6.855a.75.75 0 0 1-.53-.22l-1.3-1.3a.753.753 0 1 1 1.07-1.06l1.29 1.3a.75.75 0 0 1-.53 1.28m-2.29 12.44a.7.7 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l1.3-1.3a.75.75 0 0 1 1.06 1.06l-1.29 1.31a.8.8 0 0 1-.54.21m.42-6.43h-1.83a.75.75 0 1 1 0-1.5h1.83a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageLightBulbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLightBulbOffIcon],svg[mage-light-bulb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.131 16.26c-2.565 2.07-5.13 1.478-6.413 1.478s-1.36.27-2.296 1.287a1.28 1.28 0 0 1-1.436.296a1.3 1.3 0 0 1-.424-.296l-2.565-2.573a1.287 1.287 0 0 1 0-1.865c1.026-.94 1.282-1.12 1.282-2.303c0-1.505-.705-4.348 2.22-7.28a7.43 7.43 0 0 1 5.535-2.2A7.4 7.4 0 0 1 19.4 5.39a7.46 7.46 0 0 1 1.75 5.707a7.46 7.46 0 0 1-2.993 5.162zm-13.429-.014l-1.5 1.505c-.411.412-.527.978-.245 1.287l2.091 2.006c.282.283.847.168 1.283-.244l1.41-1.505"></svg:path><svg:path d="M15.912 6.508a3.1 3.1 0 0 0-3.39-.678a3.1 3.1 0 0 0-1.01.678"></svg:path></svg:g>`,
})
export class MageLightBulbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLightBulbOffFillIcon],svg[mage-light-bulb-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.657 7.843a8.17 8.17 0 0 0-4.293-5.023a8.17 8.17 0 0 0-6.585-.242a8.1 8.1 0 0 0-2.815 1.86a8.35 8.35 0 0 0-2.473 7.143v.703c0 .804 0 .834-.915 1.638l-.14.13a2.07 2.07 0 0 0-.643 1.487q-.002.235.06.462l-1.237 1.246a1.7 1.7 0 0 0-.242 2.371l2.091 2.01A1.3 1.3 0 0 0 5.41 22a2.13 2.13 0 0 0 1.428-.633l1.136-1.206q.243.06.493.06a2 2 0 0 0 1.488-.643l.301-.331c.634-.704.644-.714 1.448-.714h.673a8.32 8.32 0 0 0 6.143-1.597l.11-.07a8.2 8.2 0 0 0 3.308-5.707a8 8 0 0 0-.281-3.316M5.802 20.312a.73.73 0 0 1-.311.19l-2.01-1.878a.65.65 0 0 1 .18-.292l1.005-1.004l2.011 2.01zM16.66 7.25a1.006 1.006 0 0 1-1.417 0a2.2 2.2 0 0 0-.684-.462a2.17 2.17 0 0 0-1.629 0c-.254.11-.486.267-.683.462a1.006 1.006 0 0 1-1.428-1.416c.38-.389.835-.697 1.337-.905a4.2 4.2 0 0 1 3.167 0c.505.209.963.516 1.347.905a1.005 1.005 0 0 1-.01 1.376z"></svg:path>`,
})
export class MageLightBulbOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLineIcon],svg[mage-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#mageLine0)"><svg:path d="M9.33 12.22v.52c0 .09-.05.13-.14.13H7.12c-.12 0-.16 0-.16-.16V9.5c0-.13 0-.17.17-.17h.46c.12 0 .16.05.16.16v2.56h1.47a.13.13 0 0 1 .115.113a.1.1 0 0 1-.005.057m1.28-2.73v3.22c0 .12 0 .16-.17.16q-.24.015-.48 0a.14.14 0 0 1-.16-.16V9.49a.15.15 0 0 1 .2-.17h.47a.15.15 0 0 1 .14.17m3.63-.01v3.23c0 .11 0 .15-.16.15h-.51a.14.14 0 0 1-.12-.06l-.75-1l-.7-.95v-.07v1.94c0 .14 0 .17-.17.17h-.46a.14.14 0 0 1-.155-.095a.14.14 0 0 1-.005-.065V9.5a.14.14 0 0 1 .15-.15h.55a.13.13 0 0 1 .09.06L13.1 11l.29.39v.05V9.5c0-.13.05-.18.18-.18h.45c.16 0 .22.05.22.16m2.91.02v.5c0 .11 0 .16-.15.16h-1.35c-.07 0-.07 0-.07.07v.42c0 .08 0 .08.07.08H17c.13 0 .17.05.17.18v.46a.14.14 0 0 1-.16.16h-1.36c-.07 0-.07 0-.07.08V12c0 .08 0 .08.07.08H17c.12 0 .16 0 .16.17v.46c0 .12 0 .16-.16.16h-2.05c-.18 0-.17 0-.17-.16V9.5c0-.12.05-.17.17-.17h2c.16 0 .2.05.2.17"></svg:path><svg:path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m1.1 11a6.4 6.4 0 0 1-1 1.58a14 14 0 0 1-2.18 2q-1.381 1.085-2.88 2c-.31.19-.63.36-.95.52a.94.94 0 0 1-.46.13a.23.23 0 0 1-.27-.26a3 3 0 0 1 0-.41a5 5 0 0 0 .11-.94a.48.48 0 0 0-.28-.45a1.7 1.7 0 0 0-.53-.16a8.8 8.8 0 0 1-2.76-.88a6.9 6.9 0 0 1-2.13-1.69a5.5 5.5 0 0 1-1.21-2.46c0-.21-.06-.42-.08-.64s0-.41 0-.62a5 5 0 0 1 .36-1.61A6.1 6.1 0 0 1 6 7.25a7.5 7.5 0 0 1 2.51-1.73A9 9 0 0 1 10.36 5l.76-.1h1.69a8.6 8.6 0 0 1 3.28.95c.71.365 1.356.844 1.91 1.42a5.5 5.5 0 0 1 1.27 2.14c.11.323.181.66.21 1v.65A4.7 4.7 0 0 1 19.1 13"></svg:path><svg:path d="M14.24 9.48v3.23c0 .11 0 .15-.16.15h-.51a.14.14 0 0 1-.12-.06l-.75-1l-.7-.95v-.07v1.94c0 .14 0 .17-.17.17h-.46a.14.14 0 0 1-.155-.095a.14.14 0 0 1-.005-.065V9.5a.14.14 0 0 1 .15-.15h.55a.13.13 0 0 1 .09.06L13.1 11l.29.39v.05V9.5c0-.13.05-.18.18-.18h.45c.16 0 .22.05.22.16m1.34.72v.42c0 .08 0 .08.07.08H17c.13 0 .17.05.17.18v.46a.14.14 0 0 1-.16.16h-1.36c-.07 0-.07 0-.07.08V12c0 .08 0 .08.07.08H17c.12 0 .16 0 .16.17v.46c0 .12 0 .16-.16.16h-2.05c-.18 0-.17 0-.17-.16V9.5c0-.12.05-.17.17-.17h2c.12 0 .16.05.16.17v.5c0 .11 0 .16-.15.16h-1.31c-.07-.03-.07-.03-.07.04m-6.25 2.02v.52c0 .09-.05.13-.14.13H7.12c-.12 0-.16 0-.16-.16V9.5c0-.13 0-.17.17-.17h.46c.12 0 .16.05.16.16v2.56h1.47a.13.13 0 0 1 .115.113a.1.1 0 0 1-.005.057m1.28-2.73v3.22c0 .12 0 .16-.17.16q-.24.015-.48 0a.14.14 0 0 1-.16-.16V9.49a.15.15 0 0 1 .2-.17h.47a.15.15 0 0 1 .14.17"></svg:path></svg:g><svg:defs><svg:clippath id="mageLine0"><svg:path fill="#fff" d="M2 2h20v20H2z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLinkIcon],svg[mage-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.522 13.48a4.1 4.1 0 0 0 2.892 1.199a4.7 4.7 0 0 0 1.063-.136a4.2 4.2 0 0 0 1.828-1.063l.969-.968l2.878-2.888a4.085 4.085 0 0 0-2.922-6.873a4.1 4.1 0 0 0-2.862 1.096L11.49 6.736"></svg:path><svg:path d="m12.445 17.336l-2.892 2.888a4.094 4.094 0 0 1-6.801-2.944a4.1 4.1 0 0 1 1.031-2.833l2.892-2.888l.969-.968A4.2 4.2 0 0 1 9.47 9.53a4.1 4.1 0 0 1 3.956 1.062"></svg:path></svg:g>`,
})
export class MageLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLinkedinIcon],svg[mage-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"></svg:path>`,
})
export class MageLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLocationIcon],svg[mage-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M21.5 12h-2.111M12 2.5v2.111M2.5 12h2.111M12 21.5v-2.111m0 0A7.389 7.389 0 1 0 12 4.61a7.389 7.389 0 0 0 0 14.778Z"></svg:path><svg:path d="M12 16.222a4.222 4.222 0 1 0 0-8.444a4.222 4.222 0 0 0 0 8.444Z"></svg:path></svg:g>`,
})
export class MageLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLocationFillIcon],svg[mage-location-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.45 11.227h-1.39a8.18 8.18 0 0 0-7.36-7.36v-1.39a.75.75 0 0 0-1.5 0v1.39a8.17 8.17 0 0 0-7.31 7.36H2.5a.75.75 0 1 0 0 1.5h1.39a8.18 8.18 0 0 0 7.36 7.36v1.39a.75.75 0 0 0 1.5 0v-1.39a8.19 8.19 0 0 0 7.36-7.36h1.39a.75.75 0 1 0 0-1.5zm-9.5 7.39a6.64 6.64 0 1 1 6.64-6.64a6.65 6.65 0 0 1-6.64 6.65z"></svg:path><svg:path fill="currentColor" d="M16.48 11.987a4.54 4.54 0 1 1-4.53-4.54a4.53 4.53 0 0 1 4.53 4.54"></svg:path>`,
})
export class MageLocationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLocationPinIcon],svg[mage-location-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.632A5.441 5.441 0 1 0 12 2.75a5.441 5.441 0 0 0 0 10.882m0 0v7.618"></svg:path>`,
})
export class MageLocationPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLockIcon],svg[mage-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9.688H7c-1.38 0-2.5 1.035-2.5 2.312v6.938c0 1.277 1.12 2.312 2.5 2.312h10c1.38 0 2.5-1.035 2.5-2.312V12c0-1.277-1.12-2.312-2.5-2.312m-9.625 0V7.374a4.625 4.625 0 0 1 9.25 0v2.313m-8.094 8.094h6.938"></svg:path>`,
})
export class MageLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLockFillIcon],svg[mage-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.38 9.1V7.51a5.378 5.378 0 0 0-7.487-5.18A5.38 5.38 0 0 0 6.63 7.51V9.1a3.12 3.12 0 0 0-2.88 3v6.94A3.16 3.16 0 0 0 7 22.1h10a3.16 3.16 0 0 0 3.25-3.06V12.1a3.12 3.12 0 0 0-2.87-3M8.13 7.51a3.84 3.84 0 0 1 1.13-2.74A3.9 3.9 0 0 1 12 3.63a3.89 3.89 0 0 1 3.88 3.88v1.56H8.13zm7.34 11.4h-6.9a1 1 0 0 1 0-2h6.94a1 1 0 1 1 0 2z"></svg:path>`,
})
export class MageLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLockSquareIcon],svg[mage-lock-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.13 10.552H8.87c-.865 0-1.565.648-1.565 1.448v4.343c0 .8.7 1.448 1.565 1.448h6.26c.865 0 1.566-.648 1.566-1.448V12c0-.8-.7-1.448-1.565-1.448m-6.027 0V9.104a2.896 2.896 0 1 1 5.792 0v1.448"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLockSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLockSquareFillIcon],svg[mage-lock-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.26 13.44a2 2 0 0 1-2 1.94h-5a2 2 0 0 1-2-1.94V12a2 2 0 0 1 1.42-1.85v-.44a3.08 3.08 0 0 1 .91-2.18a3.17 3.17 0 0 1 4.36 0a3.06 3.06 0 0 1 .91 2.18v.44A2 2 0 0 1 16.53 12z"></svg:path><svg:path fill="currentColor" d="M13.5 9.71v.35h-3v-.35a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class MageLockSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLoginIcon],svg[mage-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10.973 2.755h5.136a4.92 4.92 0 0 1 5.136 4.623v9.244a4.92 4.92 0 0 1-5.136 4.623h-5.136"></svg:path><svg:path stroke-miterlimit="10" d="M16.109 12H2.755"></svg:path><svg:path stroke-linejoin="round" d="m11.397 17.136l4.404-4.404a1.04 1.04 0 0 0 0-1.464l-4.405-4.404"></svg:path></svg:g>`,
})
export class MageLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageLogoutIcon],svg[mage-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M13.477 21.245H8.34a4.92 4.92 0 0 1-5.136-4.623V7.378A4.92 4.92 0 0 1 8.34 2.755h5.136"></svg:path><svg:path stroke-miterlimit="10" d="M20.795 12H7.442"></svg:path><svg:path stroke-linejoin="round" d="m16.083 17.136l4.404-4.404a1.04 1.04 0 0 0 0-1.464l-4.404-4.404"></svg:path></svg:g>`,
})
export class MageLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetDownIcon],svg[mage-magnet-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M3.304 20.163v-8.404a8.893 8.893 0 0 1 8.12-8.99a8.697 8.697 0 0 1 9.273 8.697v8.697a1.087 1.087 0 0 1-1.087 1.087h-3.26a1.087 1.087 0 0 1-1.087-1.087v-8.697a3.261 3.261 0 1 0-6.523 0v8.697a1.087 1.087 0 0 1-1.087 1.087H4.391a1.087 1.087 0 0 1-1.087-1.087Zm11.958-5.436h5.435m-17.393 0h5.435"></svg:path>`,
})
export class MageMagnetDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetDownFillIcon],svg[mage-magnet-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.646 7.675a9.5 9.5 0 0 0-2.21-3.14a9.3 9.3 0 0 0-3.28-2a9.55 9.55 0 0 0-12.63 9.2v8.41a1.78 1.78 0 0 0 .54 1.29a1.8 1.8 0 0 0 1.3.54h3.28a1.83 1.83 0 0 0 1.83-1.83v-8.7a2.54 2.54 0 0 1 .74-1.78a2.57 2.57 0 0 1 3.55 0a2.5 2.5 0 0 1 .74 1.78v8.7a1.83 1.83 0 0 0 1.83 1.83h3.31a1.83 1.83 0 0 0 1.83-1.83v-8.7a9.4 9.4 0 0 0-.83-3.77m-12.69 12.47a.32.32 0 0 1-.2.305a.3.3 0 0 1-.13.025h-3.26a.31.31 0 0 1-.24-.1a.29.29 0 0 1-.1-.23v-4.69h3.93zm12 0a.34.34 0 0 1-.33.33h-3.28a.34.34 0 0 1-.33-.33v-4.69h3.93z"></svg:path>`,
})
export class MageMagnetDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetLeftIcon],svg[mage-magnet-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M3.837 3.304h8.404a8.893 8.893 0 0 1 8.99 8.12a8.7 8.7 0 0 1-8.697 9.273H3.837A1.087 1.087 0 0 1 2.75 19.61v-3.26a1.087 1.087 0 0 1 1.087-1.087h8.697a3.261 3.261 0 1 0 0-6.523H3.837A1.087 1.087 0 0 1 2.75 7.652V4.391a1.087 1.087 0 0 1 1.087-1.087Zm5.436 11.958v5.435m0-17.393v5.435"></svg:path>`,
})
export class MageMagnetLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetLeftFillIcon],svg[mage-magnet-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.973 11.355a9.63 9.63 0 0 0-9.73-8.8h-8.41a1.83 1.83 0 0 0-1.83 1.83v3.26a1.83 1.83 0 0 0 1.83 1.84h8.7a2.51 2.51 0 1 1 0 5.02h-8.7a1.88 1.88 0 0 0-1.3.54a1.86 1.86 0 0 0-.53 1.3v3.26c0 .486.19.953.53 1.3a1.88 1.88 0 0 0 1.3.54h8.72a9.41 9.41 0 0 0 8.89-6.27a9.3 9.3 0 0 0 .53-3.82m-13.45-3.37h-4.69a.29.29 0 0 1-.23-.1a.3.3 0 0 1-.1-.24v-3.26a.32.32 0 0 1 .2-.304a.3.3 0 0 1 .13-.026h4.69zm0 12h-4.69a.33.33 0 0 1-.23-.1a.3.3 0 0 1-.1-.24v-3.26a.36.36 0 0 1 .14-.29a.37.37 0 0 1 .24-.1h4.69z"></svg:path>`,
})
export class MageMagnetLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetRightIcon],svg[mage-magnet-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20.163 20.696h-8.404a8.893 8.893 0 0 1-8.99-8.12a8.697 8.697 0 0 1 8.697-9.273h8.697A1.087 1.087 0 0 1 21.25 4.39v3.26a1.087 1.087 0 0 1-1.087 1.087h-8.697a3.261 3.261 0 1 0 0 6.523h8.697a1.087 1.087 0 0 1 1.087 1.087v3.261a1.087 1.087 0 0 1-1.087 1.087ZM14.727 8.738V3.303m0 17.393v-5.435"></svg:path>`,
})
export class MageMagnetRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetRightFillIcon],svg[mage-magnet-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.461 9.485h8.7a1.82 1.82 0 0 0 1.3-.54a1.87 1.87 0 0 0 .54-1.3v-3.26a1.88 1.88 0 0 0-.54-1.3a1.86 1.86 0 0 0-1.3-.53h-8.72a9.42 9.42 0 0 0-8.89 6.26a9.35 9.35 0 0 0-.53 3.82a9.64 9.64 0 0 0 9.59 8.81h8.55a1.82 1.82 0 0 0 1.3-.54a1.87 1.87 0 0 0 .54-1.3v-3.26a1.87 1.87 0 0 0-.54-1.3a1.82 1.82 0 0 0-1.3-.54h-8.7a2.51 2.51 0 0 1-2.51-2.51a2.53 2.53 0 0 1 2.51-2.51m4-5.43h4.69a.36.36 0 0 1 .24.09a.37.37 0 0 1 .1.24v3.26a.35.35 0 0 1-.21.315a.3.3 0 0 1-.13.025h-4.69zm0 11.95h4.69a.34.34 0 0 1 .34.34v3.26a.35.35 0 0 1-.1.24a.37.37 0 0 1-.24.1h-4.69z"></svg:path>`,
})
export class MageMagnetRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetUpIcon],svg[mage-magnet-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20.696 3.837v8.404a8.893 8.893 0 0 1-8.12 8.99a8.7 8.7 0 0 1-9.273-8.697V3.837A1.087 1.087 0 0 1 4.39 2.75h3.26a1.087 1.087 0 0 1 1.087 1.087v8.697a3.261 3.261 0 1 0 6.523 0V3.837a1.087 1.087 0 0 1 1.087-1.087h3.261a1.087 1.087 0 0 1 1.087 1.087ZM8.738 9.273H3.303m17.393 0h-5.435"></svg:path>`,
})
export class MageMagnetUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMagnetUpFillIcon],svg[mage-magnet-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.895 2.54a1.8 1.8 0 0 0-1.3-.54h-3.26a1.82 1.82 0 0 0-1.3.54a1.86 1.86 0 0 0-.53 1.3v8.7a2.5 2.5 0 0 1-.74 1.77a2.57 2.57 0 0 1-3.55 0a2.46 2.46 0 0 1-.74-1.77v-8.7c0-.486-.19-.952-.53-1.3a1.82 1.82 0 0 0-1.3-.54h-3.26a1.85 1.85 0 0 0-1.701 1.136a1.8 1.8 0 0 0-.14.704v8.7a9.44 9.44 0 0 0 3 6.91a9.47 9.47 0 0 0 6.46 2.55h.65a9.63 9.63 0 0 0 8.8-9.74v-8.4a1.82 1.82 0 0 0-.56-1.32m-12.92 6h-3.93V3.85a.31.31 0 0 1 .1-.24a.35.35 0 0 1 .24-.1h3.25a.33.33 0 0 1 .23.1a.31.31 0 0 1 .1.24zm12 0h-3.93V3.85a.34.34 0 0 1 .09-.24a.37.37 0 0 1 .24-.1h3.26a.35.35 0 0 1 .316.21a.3.3 0 0 1 .023.13z"></svg:path>`,
})
export class MageMagnetUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMaleIcon],svg[mage-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.98 20.75a6.73 6.73 0 1 0 0-13.461a6.73 6.73 0 0 0 0 13.461m10.77-17.5l-6.004 6.004m6.004-.619V3.25h-5.385"></svg:path>`,
})
export class MageMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMapMarkerIcon],svg[mage-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M12 12.8a3.35 3.35 0 1 0 0-6.7a3.35 3.35 0 0 0 0 6.7Z"></svg:path><svg:path d="M12 2.75c-6.7 0-7.817 5.583-6.7 9.815c.983 3.708 3.93 6.242 5.874 8.32a1.117 1.117 0 0 0 1.652 0c1.943-2.078 4.891-4.612 5.874-8.32c1.117-4.232 0-9.815-6.7-9.815Z"></svg:path></svg:g>`,
})
export class MageMapMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMapMarkerFillIcon],svg[mage-map-marker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.296 4.637a8.71 8.71 0 0 0-12.57 0c-1.53 2-2 5-1.14 8.08c.88 3.33 3.23 5.74 5.12 7.67l.92 1a2 2 0 0 0 .63.45a1.86 1.86 0 0 0 1.51 0a2 2 0 0 0 .62-.44l.93-1c1.89-1.93 4.24-4.34 5.12-7.67c.81-3.09.39-6.09-1.14-8.09m-6.29 8.25a3.48 3.48 0 1 1 3.215-2.15a3.47 3.47 0 0 1-3.215 2.14z"></svg:path>`,
})
export class MageMapMarkerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMaximizeIcon],svg[mage-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 15.469v3.469a2.313 2.313 0 0 0 2.313 2.312H8.53m12.72-5.781v3.469a2.31 2.31 0 0 1-2.312 2.312h-3.47M2.75 8.531V5.062A2.31 2.31 0 0 1 5.063 2.75H8.53m6.939 0h3.469a2.313 2.313 0 0 1 2.312 2.313V8.53"></svg:path>`,
})
export class MageMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMediaReelHIcon],svg[mage-media-reel-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.946 8h18.108M2.946 16h18.108M12 2.75v18.5m5-.324V16m0-8V3.184M7 20.926V16m0-8V3.184"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMediaReelHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMediaReelHFillIcon],svg[mage-media-reel-h-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.235 17.589v3.659a6.17 6.17 0 0 1-2.976-3.66zm16.506 0a6.17 6.17 0 0 1-2.976 3.659v-3.66zm-10.623 0V22H8.14a5.5 5.5 0 0 1-1.176-.118v-4.294zm5.882 0v4.294q-.582.12-1.177.117h-2.976v-4.41zm5-9.412h-9.118v7.647H22zm-10.882 0H2v7.647h9.118zM5.235 2.753v3.66H2.26a6.17 6.17 0 0 1 2.976-3.66m16.505 3.659H18.73V2.753a6.16 6.16 0 0 1 3.012 3.66M11.118 2v4.412H6.965V2.118q.581-.12 1.176-.117zM17 2.118v4.294h-4.153V2h2.941c.407-.005.814.035 1.212.118"></svg:path>`,
})
export class MageMediaReelHFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMediaReelVIcon],svg[mage-media-reel-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.875 3.04v17.92M8.125 3.04v17.92M20.96 12H3.04m0 4.843h5.085m7.75 0h5.085M3.04 7.157h5.085m7.75 0h5.085"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMediaReelVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMediaReelVFillIcon],svg[mage-media-reel-v-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.342 18.577a6.12 6.12 0 0 1-3.906 3.2v-3.2zM22 12.882v2.941q.008.5-.094.989h-4.47v-3.93zm0-4.706v2.942h-4.564v-3.93h4.47q.102.49.095.988m-.659-2.752h-3.906v-3.2a6.12 6.12 0 0 1 3.906 3.2M15.671 2H8.318v9.118h7.353zm-9.118.224v3.2H2.66a6.07 6.07 0 0 1 3.894-3.2m-.001 4.964v3.93H2V8.176a4.5 4.5 0 0 1 .095-.988zm0 5.694v3.93H2.095A4.5 4.5 0 0 1 2 15.823v-2.94zm0 5.695v3.2a6.07 6.07 0 0 1-3.894-3.2zm9.118-5.695H8.318V22h7.353z"></svg:path>`,
})
export class MageMediaReelVFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMediumIcon],svg[mage-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.57 17.576a5.57 5.57 0 1 0 0-11.141a5.57 5.57 0 0 0 0 11.141m8.944-.433c1.512 0 2.738-2.3 2.738-5.138s-1.226-5.137-2.738-5.137s-2.738 2.3-2.738 5.137c0 2.838 1.226 5.138 2.738 5.138m4.408-.539c.59 0 1.067-2.06 1.067-4.599s-.478-4.598-1.067-4.598c-.59 0-1.068 2.059-1.068 4.598c0 2.54.478 4.599 1.068 4.599"></svg:path>`,
})
export class MageMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMegaphoneAIcon],svg[mage-megaphone-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m5.549 10.819l-1.826 1.615a1.414 1.414 0 0 0-.288 1.77l1.653 2.9a1.404 1.404 0 0 0 1.662.629l2.297-.783z"></svg:path><svg:path d="M9.258 4.59a26.7 26.7 0 0 1-1.71 4.072a7.2 7.2 0 0 1-2 2.157l3.499 6.112a7.3 7.3 0 0 1 2.882-.668c1.464.066 2.92.25 4.353.552"></svg:path><svg:path d="m9.253 4.591l1.215-.706a1.395 1.395 0 0 1 1.917.517l5.607 9.774a1.42 1.42 0 0 1-.519 1.92l-1.215.707zM3.56 14.416l-.606.358a1.4 1.4 0 0 0-.658.86a1.4 1.4 0 0 0 .149 1.074a1.4 1.4 0 0 0 .854.662a1.38 1.38 0 0 0 1.068-.149l.567-.358m4.804-.203l1.701 2.97a1.44 1.44 0 0 1-.509 1.933a1.404 1.404 0 0 1-1.922-.522l-1.922-3.414m12.55-10.735l-2.498 1.45m4.612 3.531h-2.883M16.225 2.25l-1.442 2.515"></svg:path></svg:g>`,
})
export class MageMegaphoneAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMegaphoneAFillIcon],svg[mage-megaphone-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.44 13.791l-5.499-9.585a2.1 2.1 0 0 0-1.274-.98a2.14 2.14 0 0 0-1.607.205l-1.196.696a.2.2 0 0 0-.078.06l-.069.087a.6.6 0 0 0-.147.275a25.4 25.4 0 0 1-1.588 3.783a6.1 6.1 0 0 1-1.754 1.892l-1.794 1.588a2.14 2.14 0 0 0-.686 1.244a2.3 2.3 0 0 0 .059.98c-.246.136-.46.324-.627.55a2.1 2.1 0 0 0-.363.744a2.2 2.2 0 0 0 0 .833a2.14 2.14 0 0 0 .806 1.397c.22.168.473.29.743.358q.264.071.539.068q.146.015.294 0c.272-.033.533-.127.764-.274c.216.243.489.428.794.54c.237.093.49.14.745.136q.209.005.412-.049l1.597 2.853a2.17 2.17 0 0 0 1.843 1.058a2.14 2.14 0 0 0 2.039-1.578a2.2 2.2 0 0 0-.206-1.607l-1.196-2.078q.484-.108.98-.118c1.395.059 2.782.236 4.146.53h.343l.157-.07l.147-.088l1.049-.607c.482-.279.835-.737.98-1.274a2.14 2.14 0 0 0-.353-1.569M6.551 16.948a.65.65 0 0 1-.431 0a.6.6 0 0 1-.324-.275l-1.49-2.607l-.097-.167a.66.66 0 0 1 .137-.823l1.107-.98l.412.725l2.127 3.725zm10.674-1.96a.7.7 0 0 1-.304.401l-.549.314l-6.136-10.694l.559-.323a.6.6 0 0 1 .48-.059a.63.63 0 0 1 .392.294l5.499 9.576a.66.66 0 0 1 .059.549zm-.255-5.823a.72.72 0 0 1-.637-.362a.735.735 0 0 1 .265-.98l2.45-1.422a.725.725 0 0 1 .98.265a.735.735 0 0 1-.265.98l-2.45 1.421a.7.7 0 0 1-.343.098m4.518 3.47h-2.832a.735.735 0 1 1 0-1.47h2.832a.735.735 0 0 1 0 1.47m-6.831-6.969a.7.7 0 0 1-.363-.098a.726.726 0 0 1-.274-.98l1.411-2.47a.736.736 0 0 1 1.274.735l-1.411 2.46a.73.73 0 0 1-.637.353"></svg:path>`,
})
export class MageMegaphoneAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMegaphoneBIcon],svg[mage-megaphone-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.824 2.945a13 13 0 0 1-5.2 2.327L4.318 6.333A1.95 1.95 0 0 0 2.75 8.241v4.596a1.95 1.95 0 0 0 1.568 1.947l5.306 1.062c1.88.37 3.656 1.152 5.2 2.288a.974.974 0 0 0 1.558-.779V3.724a.974.974 0 0 0-1.558-.78"></svg:path><svg:path d="m8.407 15.563l1.636 4.372a.973.973 0 0 1-.905 1.315h-1.14a1.95 1.95 0 0 1-1.83-1.266L4.22 14.707m8.267-7.089v5.842m6.037-7.059l2.531-1.46m-2.531 9.736l2.531 1.46m-2.726-5.597h2.921"></svg:path></svg:g>`,
})
export class MageMegaphoneBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMegaphoneBFillIcon],svg[mage-megaphone-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.87 2.822a1.7 1.7 0 0 0-.69-.64a1.85 1.85 0 0 0-.93-.18a1.77 1.77 0 0 0-.88.34a12.3 12.3 0 0 1-4.9 2.19l-5.3 1.06a2.8 2.8 0 0 0-1.56.94A2.7 2.7 0 0 0 2 8.242v4.58a2.73 2.73 0 0 0 .59 1.74c.282.354.65.63 1.07.8l1.8 4.88a2.74 2.74 0 0 0 1 1.28c.446.31.977.478 1.52.48h1.16a1.77 1.77 0 0 0 1.41-.75c.153-.228.252-.488.29-.76a1.75 1.75 0 0 0-.1-.82l-1.14-3.06a12 12 0 0 1 4.77 2.12c.257.191.562.309.88.34h.16c.265-.002.525-.067.76-.19a1.71 1.71 0 0 0 1-1.54V3.722a1.66 1.66 0 0 0-.3-.9m-3.39 10.64a1 1 0 0 1-2 0v-5.84a1 1 0 1 1 2 0zm5.04-6.31a.76.76 0 0 1-.65-.38a.74.74 0 0 1 .28-1l2.53-1.46a.74.74 0 0 1 1 .27a.75.75 0 0 1-.27 1l-2.53 1.46a.75.75 0 0 1-.36.11m2.56 9.73a.7.7 0 0 1-.37-.1l-2.53-1.46a.74.74 0 0 1-.28-1a.76.76 0 0 1 1-.28l2.53 1.47a.74.74 0 0 1 .27 1a.75.75 0 0 1-.62.37m.17-5.59h-2.92a.75.75 0 1 1 0-1.5h2.92a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MageMegaphoneBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMemoryCardIcon],svg[mage-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.85 12h-5.7a1.9 1.9 0 0 0-1.9 1.9v2.85c0 1.05.85 1.9 1.9 1.9h5.7a1.9 1.9 0 0 0 1.9-1.9V13.9a1.9 1.9 0 0 0-1.9-1.9M7.668 4.999v1.89m2.85-1.89v1.89m2.85-1.89v1.89"></svg:path><svg:path d="M18.222 6.633v3.135h1.615V17.7a3.866 3.866 0 0 1-3.923 3.8H8.086a3.866 3.866 0 0 1-3.923-3.8V6.3a3.866 3.866 0 0 1 3.923-3.8h7.828a3.866 3.866 0 0 1 3.923 3.8v.333z"></svg:path></svg:g>`,
})
export class MageMemoryCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMemoryCardFillIcon],svg[mage-memory-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.835 7.38a.75.75 0 0 0 .75-.75v-.35a4.61 4.61 0 0 0-4.67-4.53h-7.89a4.61 4.61 0 0 0-4.61 4.55v11.41a4.61 4.61 0 0 0 4.6 4.54h7.89a4.68 4.68 0 0 0 3.28-1.3a4.62 4.62 0 0 0 1.4-3.25V9.76a.75.75 0 0 0-.75-.75h-.86V7.38zM12.625 5a.75.75 0 1 1 1.5 0v1.89a.75.75 0 0 1-1.5 0zm-2.86 0a.75.75 0 1 1 1.5 0v1.89a.75.75 0 0 1-1.5 0zm-2.85 0a.75.75 0 0 1 1.5 0v1.89a.75.75 0 1 1-1.5 0zm10.59 11.75a2.65 2.65 0 0 1-2.65 2.65h-5.7a2.65 2.65 0 0 1-2.65-2.65V13.9a2.65 2.65 0 0 1 2.65-2.65h5.7a2.65 2.65 0 0 1 2.65 2.65z"></svg:path><svg:path fill="currentColor" d="M16.005 13.9v2.85a1.16 1.16 0 0 1-1.15 1.15h-5.7a1.15 1.15 0 0 1-1.15-1.15V13.9a1.14 1.14 0 0 1 1.15-1.15h5.7a1.15 1.15 0 0 1 1.15 1.15"></svg:path>`,
})
export class MageMemoryCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageIcon],svg[mage-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path>`,
})
export class MageMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageCheckIcon],svg[mage-message-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path><svg:path d="m8.447 10.685l2 2a.756.756 0 0 0 1.076 0l4.03-4.03"></svg:path></svg:g>`,
})
export class MageMessageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageCheckFillIcon],svg[mage-message-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.6 4.17a4.67 4.67 0 0 0-3.33-1.38H6.7a4.71 4.71 0 0 0-4.72 4.72v6.6a4.71 4.71 0 0 0 4.72 4.72h2.33l1.95 1.94c.127.143.284.255.46.33c.171.07.355.108.54.11a1.4 1.4 0 0 0 .56-.12a1.4 1.4 0 0 0 .44-.3l2-2h2.33a4.72 4.72 0 0 0 4.71-4.72v-6.6a4.7 4.7 0 0 0-1.42-3.3m-4.36 5.19l-4 4a1.7 1.7 0 0 1-1.24.52a1.8 1.8 0 0 1-.68-.13a1.9 1.9 0 0 1-.57-.39l-2-2a1 1 0 1 1 1.42-1.41L11 11.78l3.86-3.86a1 1 0 0 1 1.41 1.41z"></svg:path>`,
})
export class MageMessageCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageCheckRoundIcon],svg[mage-message-check-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path><svg:path d="m7.88 11.887l2.319 2.32a.875.875 0 0 0 1.248 0l4.673-4.674"></svg:path></svg:g>`,
})
export class MageMessageCheckRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageCheckRoundFillIcon],svg[mage-message-check-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.265 8.18a9.7 9.7 0 0 0-2.17-3.25a10 10 0 0 0-10.9-2.17a10.2 10.2 0 0 0-3.25 2.17a10 10 0 0 0-2.16 3.25a9.8 9.8 0 0 0-.76 3.82a9.6 9.6 0 0 0 .74 3.77l-.5 3.65a2 2 0 0 0 0 .94c.093.304.25.583.46.82a2 2 0 0 0 .79.5a2 2 0 0 0 .93.07l3.65-.54a9.7 9.7 0 0 0 3.88.79a9.9 9.9 0 0 0 3.83-.76a10 10 0 0 0 3.24-2.17a9.7 9.7 0 0 0 2.17-3.24a10 10 0 0 0 0-7.65zm-4.41 2.06l-4.68 4.67c-.17.18-.38.32-.61.41a1.8 1.8 0 0 1-1.44 0a1.8 1.8 0 0 1-.62-.41l-2.31-2.31a1.004 1.004 0 0 1 1.42-1.42l2.24 2.24l4.58-4.59a1 1 0 1 1 1.42 1.41"></svg:path>`,
})
export class MageMessageCheckRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageConversationIcon],svg[mage-message-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.686 18.222q.603.117 1.218.123a7.3 7.3 0 0 0 2.992-.64l3.095.455a1.03 1.03 0 0 0 1.032-1.135l-.372-3.126a7.2 7.2 0 0 0 .599-2.9a7.304 7.304 0 0 0-7.336-7.284a7.295 7.295 0 0 0-7.109 5.654"></svg:path><svg:path d="M13.904 14.745a5.66 5.66 0 0 1-1.218 3.477a5.61 5.61 0 0 1-4.375 2.063a5.7 5.7 0 0 1-2.29-.495l-2.311.413a.754.754 0 0 1-.826-.877l.32-2.363a5.5 5.5 0 0 1-.454-2.219A5.58 5.58 0 0 1 6.805 9.37a5.2 5.2 0 0 1 1.517-.217a5.59 5.59 0 0 1 5.582 5.593"></svg:path></svg:g>`,
})
export class MageMessageConversationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageConversationFillIcon],svg[mage-message-conversation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.98 10.995a8.1 8.1 0 0 0-.63-3.08a7.9 7.9 0 0 0-1.75-2.61a8 8 0 0 0-5.67-2.34a8 8 0 0 0-7.73 5.82a6.25 6.25 0 0 0-2.9 2.14a6.33 6.33 0 0 0-1.28 3.81a6.1 6.1 0 0 0 .43 2.32l-.29 2.14a1.51 1.51 0 0 0 1 1.67c.236.086.49.11.74.07l2.09-.37a6.4 6.4 0 0 0 2.38.47c.94 0 1.87-.208 2.72-.61a6.2 6.2 0 0 0 1.92-1.41q.462.07.93.08c1.06 0 2.11-.21 3.09-.62l2.88.42h.11a1.8 1.8 0 0 0 1.32-.58a1.7 1.7 0 0 0 .37-.64c.08-.241.11-.497.09-.75l-.35-2.93a7.9 7.9 0 0 0 .53-3m-9.88 6.69a4.85 4.85 0 0 1-1.69 1.32a5.5 5.5 0 0 1-2.1.47a5 5 0 0 1-2-.43a.6.6 0 0 0-.3-.07h-.13l-2.27.38l.33-2.36a.9.9 0 0 0-.06-.4a4.7 4.7 0 0 1-.39-1.93a4.82 4.82 0 0 1 3.56-4.58a5.5 5.5 0 0 1 1.28-.18a4.85 4.85 0 0 1 3.42 1.43a4.8 4.8 0 0 1 1.41 3.41a4.9 4.9 0 0 1-1.06 2.94"></svg:path>`,
})
export class MageMessageConversationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsIcon],svg[mage-message-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path><svg:path d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path></svg:g>`,
})
export class MageMessageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsCheckIcon],svg[mage-message-dots-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13m3.25 1.929l1.266 1.266a.48.48 0 0 0 .682 0l2.552-2.552"></svg:path></svg:g>`,
})
export class MageMessageDotsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsCrossIcon],svg[mage-message-dots-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="m20.25 3.75l-3.5 3.492m0-3.484l3.5 3.492"></svg:path></svg:g>`,
})
export class MageMessageDotsCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsDownloadIcon],svg[mage-message-dots-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="M18.477 8.25v-4.5"></svg:path><svg:path stroke-linejoin="round" d="m16.414 6.356l1.77 1.77a.413.413 0 0 0 .586 0l1.77-1.77"></svg:path></svg:g>`,
})
export class MageMessageDotsDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsFillIcon],svg[mage-message-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.605 4.17a4.67 4.67 0 0 0-3.33-1.38H6.705a4.71 4.71 0 0 0-4.71 4.72v6.6a4.71 4.71 0 0 0 4.71 4.72h2.33l1.95 1.94c.127.143.284.255.46.33c.175.072.361.11.55.11q.286-.004.55-.11a1.6 1.6 0 0 0 .44-.31l2-2h2.33a4.7 4.7 0 0 0 3.33-1.38a4.8 4.8 0 0 0 1-1.53c.234-.575.357-1.19.36-1.81v-6.6a4.67 4.67 0 0 0-1.4-3.3m-13.24 8.17a1.66 1.66 0 1 1 1.66-1.66a1.67 1.67 0 0 1-1.66 1.66m4.63 0a1.66 1.66 0 1 1 0-3.32a1.66 1.66 0 0 1 0 3.32m4.62 0a1.66 1.66 0 1 1 1.66-1.66a1.67 1.67 0 0 1-1.66 1.66"></svg:path>`,
})
export class MageMessageDotsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsMinusIcon],svg[mage-message-dots-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="M17.024 5.87h4"></svg:path></svg:g>`,
})
export class MageMessageDotsMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsPlusIcon],svg[mage-message-dots-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="M18.519 2.75v5m-2.495-2.495h5"></svg:path></svg:g>`,
})
export class MageMessageDotsPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsQuestionMarkIcon],svg[mage-message-dots-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="M17.614 3.45a1.2 1.2 0 0 1 1.306-.68a1.16 1.16 0 0 1 .853.607a1.01 1.01 0 0 1-.588 1.389a.745.745 0 0 0-.48.673v.277"></svg:path><svg:path stroke-linejoin="round" d="M18.74 7.896h.002"></svg:path></svg:g>`,
})
export class MageMessageDotsQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundIcon],svg[mage-message-dots-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path><svg:path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundCheckIcon],svg[mage-message-dots-round-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221m7.528-6.742l1.689 1.688a.64.64 0 0 0 .908 0l3.403-3.403"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundCrossIcon],svg[mage-message-dots-round-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-linejoin="round" d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path><svg:path stroke-miterlimit="10" d="m20.25 2.75l-4.5 4.49m0-4.48l4.5 4.49"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundDownloadIcon],svg[mage-message-dots-round-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-miterlimit="10" d="M17.936 8.25v-5.5"></svg:path><svg:path stroke-linejoin="round" d="m15.414 5.935l2.164 2.164a.505.505 0 0 0 .716 0l2.164-2.164M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundFillIcon],svg[mage-message-dots-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 8.18a9.8 9.8 0 0 0-2.16-3.25a10 10 0 0 0-14.15 0a9.8 9.8 0 0 0-2.17 3.25A10 10 0 0 0 2.01 12a9.7 9.7 0 0 0 .74 3.77l-.5 3.65a1.95 1.95 0 0 0 1.29 2.26c.297.098.613.122.92.07l3.65-.54a9.8 9.8 0 0 0 3.88.79a10 10 0 0 0 9.24-13.82zM7.73 13.61a1.61 1.61 0 1 1 .001-3.22a1.61 1.61 0 0 1 0 3.22m4.28 0a1.61 1.61 0 1 1 .001-3.22a1.61 1.61 0 0 1 0 3.22m4.28 0a1.61 1.61 0 1 1 .001-3.22a1.61 1.61 0 0 1 0 3.22"></svg:path>`,
})
export class MageMessageDotsRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundMinusIcon],svg[mage-message-dots-round-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-miterlimit="10" d="M15.024 5.87h6.226"></svg:path><svg:path stroke-linejoin="round" d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundPlusIcon],svg[mage-message-dots-round-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-miterlimit="10" d="M17.768 2.75v5.5m-2.744-2.744h5.5"></svg:path><svg:path stroke-linejoin="round" d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundQuestionMarkIcon],svg[mage-message-dots-round-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-linejoin="round" d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path><svg:path stroke-miterlimit="10" d="M16.614 3.605a1.465 1.465 0 0 1 1.597-.83a1.42 1.42 0 0 1 1.042.742a1.234 1.234 0 0 1-.719 1.697a.91.91 0 0 0-.587.822v.34"></svg:path><svg:path stroke-linejoin="round" d="M17.921 8.25h.003"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundUploadIcon],svg[mage-message-dots-round-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-miterlimit="10" d="M18.394 2.75v5.5"></svg:path><svg:path stroke-linejoin="round" d="m20.917 5.065l-2.165-2.164a.503.503 0 0 0-.716 0l-2.164 2.164M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsUploadIcon],svg[mage-message-dots-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 11.338a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m4.625 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321m-9.25 0a.66.66 0 1 0 0-1.321a.66.66 0 0 0 0 1.321"></svg:path><svg:path stroke-linejoin="round" d="M21.25 10.94v3.17a4 4 0 0 1-1.16 2.81a4.2 4.2 0 0 1-1.29.86a4.1 4.1 0 0 1-1.51.3h-2.65l-2.18 2.18a.8.8 0 0 1-.21.15a.65.65 0 0 1-.5 0a.8.8 0 0 1-.21-.15l-2.18-2.18H6.71a4 4 0 0 1-2.8-1.16a4 4 0 0 1-1.16-2.81v-6.6a4 4 0 0 1 4-4H13"></svg:path><svg:path stroke-miterlimit="10" d="M18.853 3.75v4.5"></svg:path><svg:path stroke-linejoin="round" d="m20.917 5.644l-1.771-1.77a.41.41 0 0 0-.586 0l-1.77 1.77"></svg:path></svg:g>`,
})
export class MageMessageDotsUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageFillIcon],svg[mage-message-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.045 7.77l-.05 6.3a4.7 4.7 0 0 1-.36 1.81a4.7 4.7 0 0 1-2.55 2.55a4.7 4.7 0 0 1-1.81.36h-2.33l-2 2a1.3 1.3 0 0 1-.44.3a1.3 1.3 0 0 1-.55.12a1.4 1.4 0 0 1-.55-.11a1.4 1.4 0 0 1-.46-.33l-1.95-1.94h-2.33a4.71 4.71 0 0 1-4.71-4.72v-6.6a4.7 4.7 0 0 1 1.38-3.34a4.78 4.78 0 0 1 3.33-1.38h10.66a4.71 4.71 0 0 1 4.72 4.72z"></svg:path>`,
})
export class MageMessageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageInfoRoundIcon],svg[mage-message-info-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12m-9.191 4.543v-5.559"></svg:path><svg:path stroke-width="2" d="M11.941 7.457h.006"></svg:path></svg:g>`,
})
export class MageMessageInfoRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageInfoRoundFillIcon],svg[mage-message-info-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.265 8.18a10 10 0 0 0-2.16-3.25a10 10 0 0 0-14.15 0a9.7 9.7 0 0 0-2.17 3.25a9.8 9.8 0 0 0-.76 3.82a9.6 9.6 0 0 0 .74 3.77l-.5 3.65c-.07.31-.07.631 0 .94a2 2 0 0 0 .46.81a1.92 1.92 0 0 0 1.72.58l3.65-.54a9.8 9.8 0 0 0 3.88.79a10 10 0 0 0 9.24-13.82zm-8.18 8.36a1 1 0 1 1-2 0v-5.55a1 1 0 0 1 2 0zm-1.11-7.85a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class MageMessageInfoRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageInformationIcon],svg[mage-message-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964m-9.244 7.743v-5.05"></svg:path><svg:path stroke-width="2" d="M11.898 6.994h.006"></svg:path></svg:g>`,
})
export class MageMessageInformationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageInformationFillIcon],svg[mage-message-information-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.575 4.17a4.67 4.67 0 0 0-3.33-1.38H6.715a4.73 4.73 0 0 0-4.72 4.72v6.6a4.73 4.73 0 0 0 4.72 4.72h2.33l1.95 1.94c.13.14.286.253.46.33c.171.07.355.108.54.11a1.44 1.44 0 0 0 1-.42l2-2h2.33a4.73 4.73 0 0 0 3.33-1.38a4.8 4.8 0 0 0 1-1.53c.231-.575.35-1.19.35-1.81v-6.6a4.7 4.7 0 0 0-1.43-3.3m-7.61 11.08a1 1 0 0 1-2 0V10.2a1 1 0 1 1 2 0zm-1.1-7a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class MageMessageInformationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageMinusIcon],svg[mage-message-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path><svg:path stroke-miterlimit="10" d="M8.459 10.87h7.082"></svg:path></svg:g>`,
})
export class MageMessageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageMinusFillIcon],svg[mage-message-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.6 4.17a4.67 4.67 0 0 0-3.29-1.38H6.7a4.71 4.71 0 0 0-4.72 4.72v6.6a4.71 4.71 0 0 0 4.72 4.72h2.33l1.95 1.94c.127.143.284.255.46.33c.171.07.355.108.54.11a1.4 1.4 0 0 0 .56-.12a1.4 1.4 0 0 0 .44-.3l2-2h2.33a4.72 4.72 0 0 0 4.71-4.72v-6.6a4.7 4.7 0 0 0-1.42-3.3m-5.08 7.7H8.44a1 1 0 0 1 0-2h7.08a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageMessageMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageMinusRoundIcon],svg[mage-message-minus-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path><svg:path stroke-miterlimit="10" d="M8.098 12h7.805"></svg:path></svg:g>`,
})
export class MageMessageMinusRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageMinusRoundFillIcon],svg[mage-message-minus-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.265 8.18a9.7 9.7 0 0 0-2.17-3.25a10 10 0 0 0-10.9-2.17a10.2 10.2 0 0 0-3.25 2.17a10 10 0 0 0-2.16 3.25a9.8 9.8 0 0 0-.76 3.82a9.6 9.6 0 0 0 .74 3.77l-.5 3.65a2 2 0 0 0 0 .94c.093.304.25.583.46.82a2 2 0 0 0 .79.5a2 2 0 0 0 .93.07l3.65-.54a9.7 9.7 0 0 0 3.88.79a9.9 9.9 0 0 0 3.83-.76a10 10 0 0 0 3.24-2.17a9.7 9.7 0 0 0 2.17-3.24a10 10 0 0 0 0-7.65zM15.925 13h-7.8a1 1 0 1 1 0-2h7.8a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMessageMinusRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessagePlusIcon],svg[mage-message-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path><svg:path stroke-miterlimit="10" d="M11.992 7.322v7.081M8.459 10.87h7.082"></svg:path></svg:g>`,
})
export class MageMessagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessagePlusFillIcon],svg[mage-message-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.595 4.17a4.78 4.78 0 0 0-3.33-1.38H6.695a4.71 4.71 0 0 0-4.72 4.72v6.6a4.71 4.71 0 0 0 4.72 4.72h2.36l1.94 1.94c.133.14.293.253.47.33a1.4 1.4 0 0 0 1.09 0a1.5 1.5 0 0 0 .45-.31l2-2h2.33a4.73 4.73 0 0 0 3.33-1.38a4.8 4.8 0 0 0 1-1.53a4.7 4.7 0 0 0 .36-1.81v-6.6a4.7 4.7 0 0 0-1.43-3.3m-5.08 7.7h-2.55v2.53a1 1 0 1 1-2 0v-2.53h-2.53a1 1 0 1 1 0-2h2.53V7.32a1 1 0 0 1 2 0v2.55h2.55a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageMessagePlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessagePlusRoundIcon],svg[mage-message-plus-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path><svg:path stroke-miterlimit="10" d="M11.693 7.816v7.795M7.8 11.722h7.804"></svg:path></svg:g>`,
})
export class MageMessagePlusRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessagePlusRoundFillIcon],svg[mage-message-plus-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.265 8.18a9.8 9.8 0 0 0-2.17-3.25a10 10 0 0 0-10.9-2.17a10.2 10.2 0 0 0-3.25 2.17A9.94 9.94 0 0 0 2.025 12a9.6 9.6 0 0 0 .74 3.77l-.5 3.65a1.9 1.9 0 0 0 0 .94a2 2 0 0 0 .46.82a2 2 0 0 0 .79.5c.296.098.612.122.92.07l3.66-.54a9.7 9.7 0 0 0 3.88.79a10 10 0 0 0 7.07-2.93a9.7 9.7 0 0 0 2.17-3.24a10 10 0 0 0 0-7.65zm-5.6 4.51h-2.91v2.89a1 1 0 1 1-2 0v-2.89h-2.89a1 1 0 1 1 0-2h2.89v-2.9a1 1 0 0 1 2 0v2.9h2.91a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMessagePlusRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageQuestionMarkIcon],svg[mage-message-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="1.5" d="M21.25 7.506v6.607a3.963 3.963 0 0 1-3.964 3.965h-2.643l-2.18 2.18a.636.636 0 0 1-.925 0l-2.18-2.18H6.713a3.964 3.964 0 0 1-3.964-3.965V7.506a3.964 3.964 0 0 1 3.964-3.964h10.572a3.964 3.964 0 0 1 3.964 3.964"></svg:path><svg:path stroke-miterlimit="10" stroke-width="1.5" d="M9.539 8.185a2.615 2.615 0 0 1 2.85-1.482a2.54 2.54 0 0 1 1.86 1.325a2.2 2.2 0 0 1-1.283 3.029a1.625 1.625 0 0 0-1.047 1.468v.606"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M11.898 15.766h.006m-.006 0h.006"></svg:path></svg:g>`,
})
export class MageMessageQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageQuestionMarkFillIcon],svg[mage-message-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.615 4.17a4.7 4.7 0 0 0-3.33-1.38H6.705a4.71 4.71 0 0 0-4.71 4.72v6.6a4.71 4.71 0 0 0 4.71 4.72h2.34l1.94 1.94a1.34 1.34 0 0 0 1.55.32a1.1 1.1 0 0 0 .44-.3l2-2h2.34a4.73 4.73 0 0 0 3.33-1.38a4.8 4.8 0 0 0 1-1.53a4.7 4.7 0 0 0 .36-1.81v-6.6a4.7 4.7 0 0 0-1.39-3.3m-8.72 12.85a1.25 1.25 0 1 1 0-2.499a1.25 1.25 0 0 1 0 2.499m3.31-6.8a3.2 3.2 0 0 1-1.92 1.79a.65.65 0 0 0-.26.2a.6.6 0 0 0-.11.35v.57a1 1 0 1 1-2 0v-.6a2.64 2.64 0 0 1 1.69-2.41a1.22 1.22 0 0 0 .76-.68a1.2 1.2 0 0 0 .09-.49c0-.17-.038-.337-.11-.49a1.6 1.6 0 0 0-.45-.5a1.65 1.65 0 0 0-.66-.27a1.7 1.7 0 0 0-1.07.15a1.65 1.65 0 0 0-.72.76a1 1 0 1 1-1.82-.83a3.6 3.6 0 0 1 1.62-1.7a3.66 3.66 0 0 1 2.32-.35a3.51 3.51 0 0 1 2.56 1.84a3.2 3.2 0 0 1 .08 2.66"></svg:path>`,
})
export class MageMessageQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageQuestionMarkRoundIcon],svg[mage-message-question-mark-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="1.5" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path><svg:path stroke-miterlimit="10" stroke-width="1.5" d="M9.287 8.667a2.88 2.88 0 0 1 3.142-1.631a2.8 2.8 0 0 1 2.05 1.459a2.422 2.422 0 0 1-1.414 3.334a1.79 1.79 0 0 0-1.154 1.615v.667"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M11.888 17.012h.006m-.006 0h.006"></svg:path></svg:g>`,
})
export class MageMessageQuestionMarkRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageQuestionMarkRoundFillIcon],svg[mage-message-question-mark-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.27 8.181a9.8 9.8 0 0 0-2.17-3.25a10 10 0 0 0-14.15 0a10.2 10.2 0 0 0-2.17 3.25a9.8 9.8 0 0 0-.75 3.82a9.6 9.6 0 0 0 .74 3.77l-.5 3.65a1.9 1.9 0 0 0 0 .94c.08.306.239.585.46.81a2 2 0 0 0 .79.51c.296.098.612.122.92.07l3.66-.54a9.7 9.7 0 0 0 3.87.79a9.9 9.9 0 0 0 3.83-.76a10 10 0 0 0 3.24-2.17a9.7 9.7 0 0 0 2.17-3.24a10 10 0 0 0 0-7.65zm-9.35 10.08a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.55-7.39a3.3 3.3 0 0 1-.83 1.17a3.4 3.4 0 0 1-1.23.74a.8.8 0 0 0-.33.26a.77.77 0 0 0-.14.44v.63a1 1 0 0 1-2 0v-.66a2.75 2.75 0 0 1 .51-1.57a2.87 2.87 0 0 1 1.29-1a1.43 1.43 0 0 0 .89-.8a1.7 1.7 0 0 0 .11-.59a1.5 1.5 0 0 0-.14-.58a1.8 1.8 0 0 0-.53-.58a1.74 1.74 0 0 0-.77-.31a2 2 0 0 0-1.24.17a1.9 1.9 0 0 0-.84.89a1 1 0 0 1-1.64.263A1 1 0 0 1 8.4 8.24a3.9 3.9 0 0 1 1.74-1.82a3.93 3.93 0 0 1 2.5-.38a3.84 3.84 0 0 1 2.75 2a3.4 3.4 0 0 1 .08 2.84z"></svg:path>`,
})
export class MageMessageQuestionMarkRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageRoundIcon],svg[mage-message-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"></svg:path>`,
})
export class MageMessageRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageRoundFillIcon],svg[mage-message-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 12a9.9 9.9 0 0 1-.76 3.83a9.7 9.7 0 0 1-2.17 3.24a10 10 0 0 1-3.24 2.17a9.9 9.9 0 0 1-3.83.76a9.7 9.7 0 0 1-3.88-.79l-3.65.54a1.94 1.94 0 0 1-2.21-2.33l.5-3.65A9.6 9.6 0 0 1 2.01 12a9.8 9.8 0 0 1 .76-3.82a10 10 0 0 1 2.16-3.25a10 10 0 0 1 14.15 0a9.7 9.7 0 0 1 2.17 3.25a9.8 9.8 0 0 1 .74 3.82"></svg:path>`,
})
export class MageMessageRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageRoundSquareIcon],svg[mage-message-round-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.328 12a5.32 5.32 0 0 1-3.287 4.923a5.34 5.34 0 0 1-4.227-.061l-2.228.33a.688.688 0 0 1-.783-.825l.309-2.259A5.15 5.15 0 0 1 6.672 12A5.315 5.315 0 0 1 9.96 7.078a5.334 5.334 0 0 1 6.965 2.884c.267.646.404 1.339.403 2.038"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMessageRoundSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageRoundSquareFillIcon],svg[mage-message-round-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.61 12A5.26 5.26 0 0 1 12 17.25a5.3 5.3 0 0 1-1.91-.37l-1.62.24a1.2 1.2 0 0 1-.65-.06a1.25 1.25 0 0 1-.57-.35a1.41 1.41 0 0 1-.36-1.27l.21-1.59a5.4 5.4 0 0 1-.34-1.87a5.23 5.23 0 0 1 1.54-3.7A5.26 5.26 0 0 1 16.88 14z"></svg:path>`,
})
export class MageMessageRoundSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageSquareIcon],svg[mage-message-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.482 9.829v3.916a2.35 2.35 0 0 1-2.35 2.35h-1.566l-1.292 1.291a.376.376 0 0 1-.548 0l-1.292-1.292H8.868a2.35 2.35 0 0 1-2.35-2.35V9.83a2.35 2.35 0 0 1 2.35-2.35h6.265a2.35 2.35 0 0 1 2.35 2.35"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMessageSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessageSquareFillIcon],svg[mage-message-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.51 11.61a3 3 0 0 1-.22 1.14a3 3 0 0 1-.65 1a2.8 2.8 0 0 1-1 .65a3 3 0 0 1-1.14.22h-1l-.89.89a1.2 1.2 0 0 1-.38.27a1.4 1.4 0 0 1-1 0a1.3 1.3 0 0 1-.42-.3l-.87-.87h-1a2.92 2.92 0 0 1-2.11-.87a3 3 0 0 1-.87-2.1v-3.49a3 3 0 0 1 3-3h5.56a3 3 0 0 1 3 3z"></svg:path>`,
})
export class MageMessageSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMessengerIcon],svg[mage-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.772 2.013A9.7 9.7 0 0 0 4.774 4.89a9.62 9.62 0 0 0-2.77 7.019a9.38 9.38 0 0 0 3.12 6.96a.84.84 0 0 1 .291.65v1.45c0 .487.21 1.032.827 1.032a.9.9 0 0 0 .384-.104l1.863-.824a.9.9 0 0 1 .652 0c5.204 1.415 11.049-1.31 12.469-6.67a9.65 9.65 0 0 0-1.708-8.726a9.7 9.7 0 0 0-3.618-2.816a9.75 9.75 0 0 0-4.512-.847m4.494 9.187c-2.55 4.49-2.561 3.48-5.763 1.346c-.373 0-.559.278-1.805 1.16s-1.455 1.253-1.828.858c-.372-.394.78-1.705 2.329-4.234c1.35-2.227 3.213.859 4.4 1.044a11.3 11.3 0 0 0 2.096-1.508c.816-.626 1.048-.87 1.374-.614c.326.255.047.614-.803 1.948"></svg:path>`,
})
export class MageMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMetaIcon],svg[mage-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.035 13.42c.26-6.058 5.405-11.598 10.229-5.27c4.326-6.307 9.45-.643 9.679 4.959a7 7 0 0 1-.706 4.066a3.33 3.33 0 0 1-4.42 1.038c-1.43-.84-2.25-2.386-3.111-3.756c-.57-.944-1.141-1.877-1.701-2.832c-1.256 2.003-2.822 5.727-4.97 6.733a3.485 3.485 0 0 1-4.211-1.183a6.22 6.22 0 0 1-.789-3.755m18.02.623c-.083-2.563-.747-6.422-3.756-6.961c-1.41 0-2.272 1.317-2.998 2.344v.166c.789 1.162 1.473 2.396 2.21 3.59c.602.87 1.587 2.81 2.531 3.184c1.577.498 2.064-1.058 2.013-2.303zm-15.883-.25v.54a2.48 2.48 0 0 0 .56 1.701a1.46 1.46 0 0 0 1.691.27a5.5 5.5 0 0 0 1.608-1.712c1.038-1.473 1.92-3.008 2.915-4.502c0-.104-.176-.28-.217-.384c-.851-1.14-2.075-2.635-3.694-2.075c-2.074 1.245-2.79 3.932-2.863 6.163"></svg:path>`,
})
export class MageMetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMicrophoneIcon],svg[mage-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.64 5.836c0-1.704-1.63-3.086-3.64-3.086S8.36 4.132 8.36 5.836v5.575c0 1.704 1.63 3.086 3.64 3.086s3.64-1.382 3.64-3.086z"></svg:path><svg:path d="M5.328 10.616a6.672 6.672 0 1 0 13.344 0M12 21.25v-3.962M8.36 21.25h7.28"></svg:path></svg:g>`,
})
export class MageMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMicrophoneFillIcon],svg[mage-microphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.43 5.838v5.57a4.43 4.43 0 0 1-8.78 0v-5.57a4.43 4.43 0 0 1 8.78 0"></svg:path><svg:path fill="currentColor" d="M12.79 17.998v2.5h2.89a.75.75 0 0 1 0 1.5H8.4a.75.75 0 1 1 0-1.5h2.85v-2.5a7.4 7.4 0 0 1-6.67-7.38a.75.75 0 0 1 1.5 0a5.92 5.92 0 1 0 11.84 0a.75.75 0 0 1 1.5 0a7.4 7.4 0 0 1-6.67 7.38z"></svg:path>`,
})
export class MageMicrophoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMicrophoneMuteIcon],svg[mage-microphone-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.3 12.705a3.17 3.17 0 0 1-1.3 1.3m-4-.001a3 3 0 0 1-1.65-2.579V5.848A3.4 3.4 0 0 1 12 2.76a3.4 3.4 0 0 1 3.64 3.089v2.518M5.33 10.626a6.64 6.64 0 0 0 2 4.707q.306.363.67.67m2.82 1.179a6.67 6.67 0 0 0 7.221-3.735a6.7 6.7 0 0 0 .629-2.821M12 21.25v-3.998M8.36 21.25h7.28"></svg:path><svg:path d="m20 4.01l-4.36 4.357l-5.63 5.627l-1.98 1.979L4 20"></svg:path></svg:g>`,
})
export class MageMicrophoneMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMicrophoneMuteFillIcon],svg[mage-microphone-mute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.986 14.776a.73.73 0 0 1-.66-.4a.74.74 0 0 1 .3-1a2.45 2.45 0 0 0 1-1.001a.739.739 0 0 1 1.359.127a.75.75 0 0 1-.048.563a3.85 3.85 0 0 1-1.611 1.61a.7.7 0 0 1-.34.1"></svg:path><svg:path fill="currentColor" d="M19.409 10.644a7.55 7.55 0 0 1-.7 3.141a7.48 7.48 0 0 1-4.823 4.003a6.4 6.4 0 0 1-1.151.2v2.511h2.892a.75.75 0 0 1 0 1.501H8.342a.75.75 0 0 1 0-1.5h2.892v-2.512a6 6 0 0 1-.57-.07a.752.752 0 0 1 .27-1.481q.442.078.89.08h.33a5.5 5.5 0 0 0 1.341-.19a5.9 5.9 0 0 0 2.282-1.18a5.9 5.9 0 0 0 2.13-4.543a.75.75 0 0 1 1.502 0zM20.52 4.56l-4.363 4.353l-5.623 5.623l-6.004 6.003a.8.8 0 0 1-.53.22a.75.75 0 0 1-.53-.22a.74.74 0 0 1 0-1.06l3.462-3.462l-.18-.2a7.3 7.3 0 0 1-2.172-5.183a.75.75 0 0 1 .74-.76a.76.76 0 0 1 .751.75a5.92 5.92 0 0 0 1.771 4.172l.14.16l.85-.84a4 4 0 0 1-.65-.77a3.66 3.66 0 0 1-.59-1.892V5.851a4.13 4.13 0 0 1 1.45-2.872a4.92 4.92 0 0 1 5.894 0a4.13 4.13 0 0 1 1.441 2.802v.79l3.092-3.091a.74.74 0 0 1 1.06 0a.75.75 0 0 1-.01 1.08"></svg:path>`,
})
export class MageMicrophoneMuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMicrosoftWindowsIcon],svg[mage-microsoft-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 7.189V2.865c0-.102 0-.115.115-.115h8.622c.128 0 .14 0 .14.128V11.5c0 .128 0 .128-.14.128H2.865c-.102 0-.115 0-.115-.116zM7.189 21.25H2.865c-.102 0-.115 0-.115-.116V12.59c0-.128 0-.128.128-.128h8.635c.102 0 .115 0 .115.115v8.57c0 .09 0 .103-.116.103zM21.25 7.189v4.31c0 .116 0 .116-.116.116h-8.557c-.102 0-.128 0-.128-.115V2.865c0-.09 0-.102.115-.102h8.48c.206 0 .206 0 .206.205zm-8.763 9.661v-4.273c0-.09 0-.115.103-.09h8.621c.026 0 0 .09 0 .142v8.518a.06.06 0 0 1-.017.06a.06.06 0 0 1-.06.017H12.54s-.09 0-.077-.09V16.85z"></svg:path>`,
})
export class MageMicrosoftWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMinimizeIcon],svg[mage-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.531 21.25v-3.469A2.31 2.31 0 0 0 6.22 15.47H2.75m12.719 5.78v-3.469a2.31 2.31 0 0 1 2.312-2.312h3.469M8.531 2.75v3.469A2.31 2.31 0 0 1 6.22 8.53H2.75m18.5.001h-3.469A2.31 2.31 0 0 1 15.47 6.22V2.75"></svg:path>`,
})
export class MageMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMinusIcon],svg[mage-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15"></svg:path>`,
})
export class MageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMinusCircleIcon],svg[mage-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.014 12H6.986M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path>`,
})
export class MageMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMinusCircleFillIcon],svg[mage-minus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75M17 13H7a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMinusCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMinusSquareIcon],svg[mage-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.882 12H7.118"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMinusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMinusSquareFillIcon],svg[mage-minus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.63 11H7.12a1 1 0 0 1 0-2h9.76a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMinusSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMobilePhoneIcon],svg[mage-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.184 2.75H7.816c-.998 0-1.808.833-1.808 1.86v14.78c0 1.027.81 1.86 1.808 1.86h8.368c.998 0 1.808-.833 1.808-1.86V4.61c0-1.027-.81-1.86-1.808-1.86"></svg:path><svg:path d="M12 18.773a.52.52 0 1 0 0-1.038a.52.52 0 0 0 0 1.038M10.003 5.272h3.994"></svg:path></svg:g>`,
})
export class MageMobilePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMobilePhoneFillIcon],svg[mage-mobile-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.165 2h-8.35a2.59 2.59 0 0 0-2.56 2.61v14.78A2.59 2.59 0 0 0 7.815 22h8.37a2.59 2.59 0 0 0 2.56-2.61V4.61A2.59 2.59 0 0 0 16.165 2m-4.18 17.77a1.52 1.52 0 1 1-.02-3.04a1.52 1.52 0 0 1 .02 3.04m2-13.5h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMobilePhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMoneyExchangeIcon],svg[mage-money-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m5.795 14.306l-1.772-1.775l-1.773 1.775m15.955-4.579l1.772 1.776l1.773-1.776"></svg:path><svg:path d="M19.977 11.503c0-2.12-.84-4.151-2.336-5.65A7.97 7.97 0 0 0 12 3.513a7.9 7.9 0 0 0-2.97.577a7.98 7.98 0 0 0-4.555 4.75m-.452 3.69a8 8 0 0 0 1.827 5.082a7.97 7.97 0 0 0 9.966 1.927a8 8 0 0 0 3.585-4.034"></svg:path><svg:path d="M9.58 13.978A2.28 2.28 0 0 0 12 16.054c1.952 0 2.42-1.123 2.42-2.076s-.807-1.963-2.42-1.963s-2.42-.638-2.42-1.938a2.22 2.22 0 0 1 1.537-2.003c.285-.092.585-.125.883-.097a2.33 2.33 0 0 1 2.42 2.1M12 17.264v-1.051m0-9.45v1.21"></svg:path></svg:g>`,
})
export class MageMoneyExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMoonIcon],svg[mage-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.182 14.86A9.474 9.474 0 1 1 9.139 2.819a1.053 1.053 0 0 1 1.38 1.295a7.7 7.7 0 0 0-.085 4.642a7 7 0 0 0 4.81 4.811c1.52.45 3.14.42 4.643-.084a1.053 1.053 0 0 1 1.295 1.379"></svg:path>`,
})
export class MageMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMoonFillIcon],svg[mage-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.88 15.147a10.23 10.23 0 0 1-19.63-5.64a10.28 10.28 0 0 1 6.63-7.37a1.77 1.77 0 0 1 1-.07a1.8 1.8 0 0 1 .89.45a1.81 1.81 0 0 1 .48 1.84a7 7 0 0 0-.08 4.21a6.27 6.27 0 0 0 4.3 4.31a6.9 6.9 0 0 0 4.2-.08a1.83 1.83 0 0 1 1 0a1.8 1.8 0 0 1 1.3 1.39a1.8 1.8 0 0 1-.09.96"></svg:path>`,
})
export class MageMoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMouseIcon],svg[mage-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 9.286C19.5 5.538 16.142 2.5 12 2.5S4.5 5.538 4.5 9.286v5.428c0 3.748 3.358 6.786 7.5 6.786s7.5-3.038 7.5-6.786zM12 10.643V2.5m-7.5 8.143h15"></svg:path>`,
})
export class MageMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMouse2Icon],svg[mage-mouse-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.5 9.286C19.5 5.538 16.142 2.5 12 2.5S4.5 5.538 4.5 9.286v5.428c0 3.748 3.358 6.786 7.5 6.786s7.5-3.038 7.5-6.786z"></svg:path><svg:path d="M13.743 10.421c0-.986-.784-1.785-1.75-1.785c-.967 0-1.75.8-1.75 1.785v1.429c0 .986.783 1.786 1.75 1.786c.966 0 1.75-.8 1.75-1.786zM12 8.636V2.5"></svg:path></svg:g>`,
})
export class MageMouse2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMouse2FillIcon],svg[mage-mouse-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.065 9.331v5.308C20.065 18.696 16.438 22 12 22s-8.065-3.304-8.065-7.36V9.33c0-3.841 3.226-6.999 7.332-7.331v6.08a2.46 2.46 0 0 0-1.72 2.356v1.398a2.444 2.444 0 1 0 4.887 0v-1.398a2.46 2.46 0 0 0-1.7-2.346V2c4.095.303 7.33 3.49 7.33 7.331"></svg:path><svg:path fill="currentColor" d="M13 10.289v1.43a1 1 0 1 1-2 0v-1.43a1 1 0 0 1 2 0"></svg:path>`,
})
export class MageMouse2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMouseFillIcon],svg[mage-mouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.745 11.306v3.81C19.745 18.935 16.303 22 12 22s-7.745-3.098-7.745-6.885v-3.81zM11.14 2v7.585H4.254v-.7A7.263 7.263 0 0 1 11.139 2m8.606 6.885v.7h-6.884V2a7.275 7.275 0 0 1 6.884 6.885"></svg:path>`,
})
export class MageMouseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMousePointerIcon],svg[mage-mouse-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="m6.244 3.114l12.298 8.66A.693.693 0 0 1 18.346 13l-4.62.877a.565.565 0 0 0-.334.82l2.31 4.377a.693.693 0 0 1-.22.981l-1.663.866a.693.693 0 0 1-.935-.289l-2.31-4.387a.577.577 0 0 0-.866-.232L6.325 19.27a.692.692 0 0 1-1.155-.554V3.703a.693.693 0 0 1 1.074-.589"></svg:path>`,
})
export class MageMousePointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMousePointerFillIcon],svg[mage-mouse-pointer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.512 12.566a1.4 1.4 0 0 1-.32.69a1.5 1.5 0 0 1-.64.42l-4.48.85l2.24 4.23c.088.137.15.29.18.45c.035.185.035.375 0 .56a1.3 1.3 0 0 1-.23.51c-.112.157-.255.29-.42.39l-1.69.88a1.36 1.36 0 0 1-.65.16q-.21 0-.41-.06a1.42 1.42 0 0 1-.82-.68l-2.25-4.27l-3.21 3.08a1.4 1.4 0 0 1-1.55.24a1.43 1.43 0 0 1-.79-1.33V3.696a1.5 1.5 0 0 1 .19-.71a1.35 1.35 0 0 1 .54-.52a1.39 1.39 0 0 1 1.43.06l12.3 8.66c.21.153.376.36.48.6c.107.245.141.515.1.78"></svg:path>`,
})
export class MageMousePointerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMultiplyIcon],svg[mage-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5L5 19m14 0L5 5"></svg:path>`,
})
export class MageMultiplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMultiplyCircleIcon],svg[mage-multiply-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.958 8.042l-7.916 7.916m7.916 0L8.042 8.042M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path>`,
})
export class MageMultiplyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMultiplyCircleFillIcon],svg[mage-multiply-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.67 13.5a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.42l-3.25 3.25a1 1 0 0 1-1.41-1.42L10.59 12L7.34 8.75a1 1 0 1 1 1.41-1.41L12 10.59l3.25-3.25a1 1 0 1 1 1.42 1.41L13.42 12z"></svg:path>`,
})
export class MageMultiplyCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMultiplySquareIcon],svg[mage-multiply-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.854 8.146l-7.708 7.708m7.708 0L8.146 8.146"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMultiplySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMultiplySquareFillIcon],svg[mage-multiply-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.31 13.15a1 1 0 0 1 0 1.41a1 1 0 0 1-1.41 0L12 13.41l-3.15 3.15a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41L10.59 12L7.44 8.85a1 1 0 1 1 1.41-1.41L12 10.59l3.15-3.15a1 1 0 1 1 1.41 1.41L13.41 12z"></svg:path>`,
})
export class MageMultiplySquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicIcon],svg[mage-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.97 21.5a4.03 4.03 0 1 0 0-8.06a4.03 4.03 0 0 0 0 8.06ZM12 17.47V2.5m0 0l6.39 1.82a2.3 2.3 0 0 1 1.67 2.21v.968a2.303 2.303 0 0 1-2.878 2.222L12 8.258"></svg:path>`,
})
export class MageMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicAlternateIcon],svg[mage-music-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17.985 19.703a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53ZM6.015 20.79a3.265 3.265 0 1 0 0-6.528a3.265 3.265 0 0 0 0 6.529Zm15.235-4.352v-8.01M9.28 17.526v-6.921"></svg:path><svg:path stroke-linejoin="round" d="M21.25 8.429L9.28 10.605v-3.57a2.176 2.176 0 0 1 1.784-2.176l8.902-1.632a1.088 1.088 0 0 1 1.284 1.088z"></svg:path></svg:g>`,
})
export class MageMusicAlternateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicAlternateFillIcon],svg[mage-music-alternate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.984 4.345v12.12a4 4 0 1 1-1.5-3.13v-4l-10.47 1.9v6.3a4 4 0 1 1-4-4a4 4 0 0 1 2.52.9v-7.41a2.93 2.93 0 0 1 .66-1.9a3 3 0 0 1 1.74-1l8.9-1.63a1.83 1.83 0 0 1 2 1.05c.111.251.163.525.15.8"></svg:path>`,
})
export class MageMusicAlternateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicCircleIcon],svg[mage-music-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect><svg:path stroke-linecap="round" d="M9.667 17.5a2.333 2.333 0 1 0 0-4.667a2.333 2.333 0 0 0 0 4.667ZM12 15.167V6.5m0 0l3.7 1.053a1.33 1.33 0 0 1 .967 1.28v.56A1.334 1.334 0 0 1 15 10.68l-3-.847"></svg:path></svg:g>`,
})
export class MageMusicCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicCircleFillIcon],svg[mage-music-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.42 7.64a2.2 2.2 0 0 1-.22.92a2.1 2.1 0 0 1-.6.73a2.06 2.06 0 0 1-.85.39q-.21.023-.42 0q-.264 0-.52-.06l-2.06-.58v4.34a3.09 3.09 0 1 1-3.08-3.09a2.94 2.94 0 0 1 1.58.45v-6a.6.6 0 0 1 0-.2v-.08a.72.72 0 0 1 .54-.44h.44l3.61 1a2.1 2.1 0 0 1 1.09.75c.27.362.42.799.43 1.25z"></svg:path><svg:path fill="currentColor" d="M11.25 15.17a1.59 1.59 0 1 1-1.58-1.59a1.58 1.58 0 0 1 1.58 1.59m4.67-6.34v.56a.8.8 0 0 1-.07.26a.45.45 0 0 1-.16.2a.7.7 0 0 1-.24.11a.5.5 0 0 1-.25 0l-2.45-.69V7.49l2.74.78a.66.66 0 0 1 .31.21c.068.105.11.225.12.35"></svg:path>`,
})
export class MageMusicCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicFillIcon],svg[mage-music-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.82 6.49v1a3 3 0 0 1-.32 1.34a3 3 0 0 1-.87 1.07a3.1 3.1 0 0 1-1.25.57q-.301.06-.61.06q-.391 0-.77-.09l-4.24-1.2v8.22a4.79 4.79 0 1 1-1.5-3.47V2.46a.6.6 0 0 1 0-.2v-.08a.76.76 0 0 1 .54-.44h.44l6.3 1.79a3 3 0 0 1 2.22 2.93z"></svg:path>`,
})
export class MageMusicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicSquareIcon],svg[mage-music-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.667 17.5a2.333 2.333 0 1 0 0-4.667a2.333 2.333 0 0 0 0 4.667ZM12 15.167V6.5m0 0l3.7 1.053a1.33 1.33 0 0 1 .967 1.28v.56A1.334 1.334 0 0 1 15 10.68l-3-.847"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMusicSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageMusicSquareFillIcon],svg[mage-music-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.17 7.39a2.2 2.2 0 0 1-.22.92a2.1 2.1 0 0 1-.6.73a2.06 2.06 0 0 1-.85.39q-.21.023-.42 0q-.264 0-.52-.06l-2.06-.58v4.34a3.09 3.09 0 1 1-3.08-3.09a2.94 2.94 0 0 1 1.58.45v-6a.6.6 0 0 1 0-.2v-.08a.72.72 0 0 1 .54-.44a.3.3 0 0 1 .14 0h.3l3.61 1a2.1 2.1 0 0 1 1.09.75c.27.362.42.799.43 1.25z"></svg:path><svg:path fill="currentColor" d="M11.25 15.17a1.59 1.59 0 1 1-1.58-1.59a1.58 1.58 0 0 1 1.58 1.59m4.67-6.34v.56a.8.8 0 0 1-.07.26a.45.45 0 0 1-.16.2a.7.7 0 0 1-.24.11a.5.5 0 0 1-.25 0l-2.45-.69V7.49l2.74.78a.66.66 0 0 1 .31.21c.068.105.11.225.12.35"></svg:path>`,
})
export class MageMusicSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNetflixIcon],svg[mage-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.518 13.187V21.5a5 5 0 0 0-1.783-.192a6.5 6.5 0 0 0-1.907.192v-19zM17.172 2.5v18.863l-3.389-9.603V2.5z"></svg:path><svg:path fill="currentColor" d="M6.828 2.5h3.69l6.654 18.89a18.7 18.7 0 0 0-3.786 0C12.836 19.936 6.828 2.5 6.828 2.5"></svg:path>`,
})
export class MageNetflixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNextIcon],svg[mage-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.062 20.25V3.75M3.938 5.416V18.58a1.447 1.447 0 0 0 2.329 1.143l9.113-7.088a1.447 1.447 0 0 0-.087-2.344L6.18 4.216a1.447 1.447 0 0 0-2.242 1.2"></svg:path>`,
})
export class MageNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNextFillIcon],svg[mage-next-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.095 21a.75.75 0 0 1-.75-.75V3.75a.75.75 0 0 1 1.5 0v16.5a.74.74 0 0 1-.75.75m-3.4-9.589a2.25 2.25 0 0 1-.85 1.82l-9.11 7.09c-.326.247-.713.4-1.12.44h-.23a2.14 2.14 0 0 1-1-.22a2.2 2.2 0 0 1-.9-.81a2.17 2.17 0 0 1-.33-1.16V5.421a2.2 2.2 0 0 1 .31-1.12a2.25 2.25 0 0 1 .85-.8a2.18 2.18 0 0 1 2.24.1l9.12 6.08c.29.191.53.448.7.75a2.3 2.3 0 0 1 .32.98"></svg:path>`,
})
export class MageNextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNoteIcon],svg[mage-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 6.861v6.342a2.06 2.06 0 0 1-.606 1.459l-5.982 5.982a2.06 2.06 0 0 1-1.46.606h-6.34a4.11 4.11 0 0 1-4.112-4.111V6.86a4.11 4.11 0 0 1 4.111-4.11H17.14a4.11 4.11 0 0 1 4.111 4.111"></svg:path><svg:path d="m14.056 21.075l-.514-4.11a3.082 3.082 0 0 1 3.443-3.444l4.11.514"></svg:path></svg:g>`,
})
export class MageNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNoteFillIcon],svg[mage-note-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.57 3.42A4.82 4.82 0 0 0 17.13 2H6.89a4.87 4.87 0 0 0-4.86 4.86v10.27A4.88 4.88 0 0 0 6.89 22h6.35c.37-.003.737-.078 1.08-.22l.16-.08l.08-.05a2.4 2.4 0 0 0 .67-.48l6-6c.203-.2.372-.434.5-.69l.08-.17a.6.6 0 0 0 0-.12c.107-.295.16-.606.16-.92V6.93a4.82 4.82 0 0 0-1.4-3.51m-6 16.19l-.34-2.75a2.3 2.3 0 0 1 .11-1a2.2 2.2 0 0 1 .55-.89a2.3 2.3 0 0 1 .9-.56a2.3 2.3 0 0 1 1.05-.11l2.75.34z"></svg:path>`,
})
export class MageNoteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNoteTextIcon],svg[mage-note-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.221 17.084v-8.11a4.166 4.166 0 0 0-4.166-4.197h-8.11A4.166 4.166 0 0 0 3.78 8.944v8.11a4.166 4.166 0 0 0 4.166 4.196h8.11a4.166 4.166 0 0 0 4.166-4.166M16.055 6.805V2.75m-8.11 4.055V2.75m-.507 8.11h9.124m-9.124 5.068h9.124"></svg:path>`,
})
export class MageNoteTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNoteTextFillIcon],svg[mage-note-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 7.06a4.9 4.9 0 0 0-1.07-1.58a4.8 4.8 0 0 0-1.6-1.08a5 5 0 0 0-1.14-.32V2.75a.75.75 0 1 0-1.5 0v1.27H8.7V2.75a.75.75 0 1 0-1.5 0v1.33a4.84 4.84 0 0 0-2.73 1.38a4.9 4.9 0 0 0-1.44 3.48v8.1a5 5 0 0 0 .37 1.9a4.8 4.8 0 0 0 1.06 1.6c.454.464.998.832 1.6 1.08c.598.251 1.24.38 1.89.38h8.11a4.93 4.93 0 0 0 4.91-4.92V8.97a4.7 4.7 0 0 0-.35-1.91m-4 9.59H7.45a.75.75 0 1 1 0-1.5h9.1a.75.75 0 1 1 0 1.5zm0-5.07H7.45a.75.75 0 0 1 0-1.5h9.1a.75.75 0 1 1 0 1.5z"></svg:path>`,
})
export class MageNoteTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNoteWithTextIcon],svg[mage-note-with-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 6.861v6.342a2.06 2.06 0 0 1-.606 1.459l-5.982 5.982a2.06 2.06 0 0 1-1.46.606h-6.34a4.11 4.11 0 0 1-4.112-4.111V6.86a4.11 4.11 0 0 1 4.111-4.11H17.14a4.11 4.11 0 0 1 4.111 4.111"></svg:path><svg:path d="m14.056 21.075l-.514-4.11a3.082 3.082 0 0 1 3.443-3.444l4.11.514M6.861 7.889h9.25M6.861 12h4.111m-4.111 4.111h3.083"></svg:path></svg:g>`,
})
export class MageNoteWithTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNoteWithTextFillIcon],svg[mage-note-with-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.57 3.42A4.82 4.82 0 0 0 17.13 2H6.89a4.87 4.87 0 0 0-4.86 4.86v10.27A4.88 4.88 0 0 0 6.89 22h6.35c.37-.003.737-.078 1.08-.22l.16-.08l.08-.05a2.4 2.4 0 0 0 .67-.48l6-6c.203-.2.372-.434.5-.69l.08-.17c.004-.04.063-.12.059-.16c.107-.296.102-.566.1-.88V6.93a4.82 4.82 0 0 0-1.4-3.51M9.94 16.86H6.85a.75.75 0 1 1 0-1.5h3.09a.75.75 0 0 1 0 1.5m1-4.11H6.82a.75.75 0 0 1 0-1.5h4.12a.75.75 0 0 1 0 1.5M6.82 8.63a.75.75 0 1 1 0-1.5h9.25a.75.75 0 0 1 0 1.5zm7.77 11l-.34-2.75a2.3 2.3 0 0 1 .11-1a2.2 2.2 0 0 1 .55-.89a2.3 2.3 0 0 1 .9-.56a2.3 2.3 0 0 1 1.05-.11l2.75.34z"></svg:path>`,
})
export class MageNoteWithTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellIcon],svg[mage-notification-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.404-5.276a5 5 0 0 0-1.653-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.023 2.023 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.567.73l-.783.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path d="M15.225 17.986a3.2 3.2 0 0 1-3.263 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path></svg:g>`,
})
export class MageNotificationBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellCheckIcon],svg[mage-notification-bell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986m.8-6.788l1.407 1.407a.534.534 0 0 0 .757 0L14.5 9.769"></svg:path></svg:g>`,
})
export class MageNotificationBellCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellCheckFillIcon],svg[mage-notification-bell-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.07.14a.3.3 0 0 1-.09.08l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32c.37.38.816.677 1.31.87c.46.188.953.287 1.45.29h.16a4 4 0 0 0 2.79-1.16a4 4 0 0 0 .87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76c.226-.322.364-.698.4-1.09a2.2 2.2 0 0 0-.14-1.08m-6-5.28l-2.81 2.83c-.113.124-.253.22-.41.28a1.2 1.2 0 0 1-.49.1a1.26 1.26 0 0 1-.91-.38l-1.41-1.4a.75.75 0 0 1 0-1.06a.74.74 0 0 1 1.06 0l1.26 1.25l2.68-2.68a.75.75 0 1 1 1.06 1.06z"></svg:path>`,
})
export class MageNotificationBellCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellCrossIcon],svg[mage-notification-bell-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="m13.75 9.497l-3.5 3.492m0-3.485l3.5 3.493"></svg:path></svg:g>`,
})
export class MageNotificationBellCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellCrossFillIcon],svg[mage-notification-bell-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.07.14a.3.3 0 0 1-.09.08l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32c.37.38.816.677 1.31.87c.46.188.953.287 1.45.29h.16a4 4 0 0 0 2.79-1.16a4 4 0 0 0 .87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76a2.26 2.26 0 0 0 .4-1.09a2.2 2.2 0 0 0-.14-1.08m-6.72-3.1a.75.75 0 0 1-1.06 1.06l-1.23-1.22l-1.21 1.16a.75.75 0 0 1-1.06-1.06l1.21-1.21l-1.21-1.21a.77.77 0 0 1 0-1.07a.75.75 0 0 1 1.06 0l1.22 1.22l1.22-1.22a.74.74 0 0 1 1.06 0a.75.75 0 0 1 0 1.06l-1.22 1.22z"></svg:path>`,
})
export class MageNotificationBellCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellDownloadIcon],svg[mage-notification-bell-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="M12 13.861v-5"></svg:path><svg:path stroke-linejoin="round" d="m9.707 11.756l1.967 1.968a.457.457 0 0 0 .652 0l1.967-1.968"></svg:path></svg:g>`,
})
export class MageNotificationBellDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellDownloadFillIcon],svg[mage-notification-bell-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.07.14a.3.3 0 0 1-.09.08l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32c.37.38.816.677 1.31.87c.46.188.953.287 1.45.29h.16a3.9 3.9 0 0 0 1.47-.29a3.75 3.75 0 0 0 1.32-.87a4 4 0 0 0 .87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76c.226-.322.364-.698.4-1.09a2.2 2.2 0 0 0-.14-1.08m-6.18-3.29l-2 2a1.3 1.3 0 0 1-.39.27q-.15.06-.31.08h-.32a1.18 1.18 0 0 1-.7-.35l-2-2a.75.75 0 1 1 1.06-1.06l1 1v-3.38a.75.75 0 1 1 1.5 0v3.38l1-1a.75.75 0 1 1 1.06 1.06z"></svg:path>`,
})
export class MageNotificationBellDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellFillIcon],svg[mage-notification-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.161 16.656a2.26 2.26 0 0 1-.41 1.088a2.27 2.27 0 0 1-1.89 1h-2.94a4.4 4.4 0 0 1-.23.788a4 4 0 0 1-2.18 2.178c-.495.2-1.026.298-1.56.29h-.08a3.9 3.9 0 0 1-1.44-.29a3.75 3.75 0 0 1-1.32-.87a3.85 3.85 0 0 1-.87-1.308a4.4 4.4 0 0 1-.23-.789h-2.82a2.24 2.24 0 0 1-1.94-.849a2.78 2.78 0 0 1-.26-2.367a6.7 6.7 0 0 1 .88-1.618a3.83 3.83 0 0 0 .82-1.768c0-2.886 0-3.865 1.58-5.743a5.7 5.7 0 0 1 1.9-1.478l.78-.38a.4.4 0 0 0 .1-.09a.3.3 0 0 0 .06-.13a3 3 0 0 1 1.905-2.142a3 3 0 0 1 2.835.434a2.72 2.72 0 0 1 1 1.758v.1a.35.35 0 0 0 .11.1l.72.35c.73.35 1.378.85 1.9 1.468c1.58 1.888 1.58 2.867 1.58 5.753c.134.69.44 1.336.89 1.878c.36.481.652 1.009.87 1.568c.164.332.247.698.24 1.069"></svg:path>`,
})
export class MageNotificationBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellMinusIcon],svg[mage-notification-bell-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="M9.5 11.496h5"></svg:path></svg:g>`,
})
export class MageNotificationBellMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellMinusFillIcon],svg[mage-notification-bell-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.06.13a.4.4 0 0 1-.1.09l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.403.22.78a4 4 0 0 0 .87 1.32c.375.378.825.675 1.32.87c.46.188.953.287 1.45.29h.08a3.9 3.9 0 0 0 1.55-.29a3.75 3.75 0 0 0 1.32-.87a3.8 3.8 0 0 0 .87-1.32q.152-.379.23-.78h2.94a2.3 2.3 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76a2.26 2.26 0 0 0 .4-1.09a2.2 2.2 0 0 0-.14-1.08m-6.5-3.33h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MageNotificationBellMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellMutedIcon],svg[mage-notification-bell-muted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M5.443 17.368c-1.153-.293-1.048-1.509-.87-2.096c.346-1.11 1.687-2.242 1.687-3.469c0-2.724 0-3.479 1.352-5.093a5 5 0 0 1 1.583-1.237l.744-.366a1.05 1.05 0 0 0 .513-.703a1.93 1.93 0 0 1 2.096-1.645a1.94 1.94 0 0 1 2.044 1.645a1.05 1.05 0 0 0 .555.703l.744.366q.479.24.902.566m1.135 2.257c.67 1.048.67 2.012.67 4.192c0 1.226 1.394 2.431 1.74 3.532a1.51 1.51 0 0 1-.72 1.94a1.5 1.5 0 0 1-.737.156H8.14"></svg:path><svg:path stroke-linejoin="round" d="M15.476 18.105a3.083 3.083 0 0 1-3.145 3.144a3.083 3.083 0 0 1-3.143-3.144"></svg:path><svg:path stroke-miterlimit="10" d="M3.542 20.115L19.493 3.33"></svg:path></svg:g>`,
})
export class MageNotificationBellMutedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellMutedFillIcon],svg[mage-notification-bell-muted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.96 5.953a.8.8 0 0 1-.27.58L5.5 17.883a.74.74 0 0 1-.89.14c-3.11-1.47 0-4.37.44-6.21c-.25-3.71 1-6 4.1-7.37a3 3 0 0 1 5.87 0c.62.4 1.84.62 1.94 1.51m3.78 10.9c-.17 2.48-3.34 2-5 2c-.61 4.11-7 4.11-7.65 0c-.76.18-1.42-.51-.8-1.17l9.69-9.93c2.14-.66 1.86 2.55 2 4.72c.05 1.45 1.98 2.74 1.76 4.38"></svg:path>`,
})
export class MageNotificationBellMutedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellPendingIcon],svg[mage-notification-bell-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.568 2.975a2.06 2.06 0 0 0-.73 1.27a1 1 0 0 1-.2.42a1 1 0 0 1-.36.3l-.79.38a5.1 5.1 0 0 0-1.65 1.29c-1.4 1.67-1.4 2.42-1.4 5.27c0 1.29-1.37 2.46-1.73 3.62c-.22.69-.34 2.25 1.48 2.25h13.58a1.6 1.6 0 0 0 .77-.16a1.64 1.64 0 0 0 .6-.51c.148-.218.24-.469.27-.73a1.6 1.6 0 0 0-.13-.78c-.36-1.09-1.79-2.39-1.79-3.68v-2.13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.228 17.775c.003.427-.075.851-.23 1.25a3.4 3.4 0 0 1-.71 1.06a3.2 3.2 0 0 1-2.33.94a3.2 3.2 0 0 1-1.26-.25a3.3 3.3 0 0 1-1.77-1.77a3.2 3.2 0 0 1-.23-1.23"></svg:path><svg:circle cx="15.228" cy="5.475" r="2.5"></svg:circle></svg:g>`,
})
export class MageNotificationBellPendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellPendingFillIcon],svg[mage-notification-bell-pending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.37 16.547c-.039.398-.18.779-.41 1.105a2.37 2.37 0 0 1-1.954 1.023H16.01q-.076.405-.225.788a4.2 4.2 0 0 1-.89 1.35a4.1 4.1 0 0 1-1.35.9A4 4 0 0 1 12.03 22h-.112a3.9 3.9 0 0 1-1.545-.317a4.1 4.1 0 0 1-2.22-2.22a3.6 3.6 0 0 1-.225-.788H5.032a2.3 2.3 0 0 1-1.985-.87a2.8 2.8 0 0 1-.256-2.434c.221-.592.524-1.15.9-1.658a3.9 3.9 0 0 0 .83-1.81c0-2.967 0-3.96 1.616-5.883A5.85 5.85 0 0 1 8.08 4.506l.809-.388a.2.2 0 0 0 .081-.082a.25.25 0 0 0 .072-.133a2.87 2.87 0 0 1 1.023-1.73a.77.77 0 0 1 .92 0a.79.79 0 0 1 .297.88s-1.186 3.704 1.023 5.944c2.21 2.24 5.903.133 5.944.113a.75.75 0 0 1 .757 0a.76.76 0 0 1 .379.655v2.179c.138.71.451 1.374.91 1.933c.366.49.665 1.027.89 1.596c.15.337.213.707.184 1.074"></svg:path><svg:path fill="currentColor" d="M15.303 8.107a2.782 2.782 0 1 0 0-5.564a2.782 2.782 0 0 0 0 5.564"></svg:path>`,
})
export class MageNotificationBellPendingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellPlusIcon],svg[mage-notification-bell-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="M11.995 8.99v5M9.5 11.496h5"></svg:path></svg:g>`,
})
export class MageNotificationBellPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellPlusFillIcon],svg[mage-notification-bell-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 15.606a7 7 0 0 0-.87-1.574a4.1 4.1 0 0 1-.89-1.884c0-2.896 0-3.878-1.58-5.772a5.8 5.8 0 0 0-1.9-1.473l-.73-.35a.3.3 0 0 1-.1-.101a.2.2 0 0 1 0-.1a2.78 2.78 0 0 0-1.009-1.745a2.77 2.77 0 0 0-1.921-.6a2.7 2.7 0 0 0-1.85.611a2.74 2.74 0 0 0-1 1.684a.3.3 0 0 1-.06.13a.4.4 0 0 1-.1.09l-.78.38a5.6 5.6 0 0 0-1.91 1.484c-1.57 1.884-1.57 2.866-1.57 5.762a3.85 3.85 0 0 1-.82 1.774a6.6 6.6 0 0 0-.92 1.583a2.8 2.8 0 0 0 .26 2.376a2.24 2.24 0 0 0 1.94.851h2.82q.065.404.22.782c.2.495.495.944.87 1.323c.375.38.824.676 1.32.872c.46.188.953.287 1.45.29h.08a3.9 3.9 0 0 0 1.55-.29c.497-.194.947-.49 1.32-.872a3.8 3.8 0 0 0 .87-1.323q.151-.38.23-.782h2.94c.346-.001.688-.08 1-.23c.351-.178.653-.44.88-.762c.226-.323.364-.7.4-1.092a2.2 2.2 0 0 0-.14-1.042m-6.5-3.337h-1.76v1.743a.75.75 0 0 1-.75.752a.75.75 0 0 1-.75-.752V12.27h-1.74a.75.75 0 0 1-.75-.752a.75.75 0 0 1 .75-.752h1.74V9.002a.75.75 0 0 1 .75-.752a.75.75 0 0 1 .75.752v1.763h1.76a.75.75 0 0 1 .75.752a.75.75 0 0 1-.75.752"></svg:path>`,
})
export class MageNotificationBellPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellQuestionMarkIcon],svg[mage-notification-bell-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.023 2.023 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.196 3.196 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="M10.496 9.932a1.6 1.6 0 0 1 1.742-.906a1.55 1.55 0 0 1 1.137.81a1.345 1.345 0 0 1-.784 1.852a.99.99 0 0 0-.64.897v.37"></svg:path><svg:path stroke-linejoin="round" d="M11.922 15h.004"></svg:path></svg:g>`,
})
export class MageNotificationBellQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellQuestionMarkFillIcon],svg[mage-notification-bell-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.07.14a.3.3 0 0 1-.09.08l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32c.37.38.816.677 1.31.87c.46.188.953.287 1.45.29h.16a4 4 0 0 0 2.79-1.16a4 4 0 0 0 .87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76a2.26 2.26 0 0 0 .4-1.09a2.2 2.2 0 0 0-.14-1.08m-9.07.17a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m2.16-4.52a2.2 2.2 0 0 1-.5.72c-.222.197-.48.35-.76.45a.2.2 0 0 0-.08.08a.2.2 0 0 0-.05.13v.35a.75.75 0 0 1-1.5 0v-.38a1.8 1.8 0 0 1 .32-1a1.75 1.75 0 0 1 .81-.61a.8.8 0 0 0 .24-.14a1 1 0 0 0 .14-.2a.5.5 0 0 0 0-.25a.7.7 0 0 0-.05-.25a1 1 0 0 0-.23-.24a.7.7 0 0 0-.35-.14a.82.82 0 0 0-.56.08a.8.8 0 0 0-.38.39a.752.752 0 1 1-1.37-.62a2.38 2.38 0 0 1 1.05-1.1a2.34 2.34 0 0 1 1.51-.23c.358.055.7.188 1 .39c.292.214.531.49.7.81a2 2 0 0 1 .21.88c.014.301-.037.601-.15.88"></svg:path>`,
})
export class MageNotificationBellQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellSnoozeIcon],svg[mage-notification-bell-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.568 2.975a2.06 2.06 0 0 0-.73 1.27a1 1 0 0 1-.2.42a1 1 0 0 1-.36.3l-.79.38a5.1 5.1 0 0 0-1.65 1.29c-1.4 1.67-1.4 2.42-1.4 5.27c0 1.29-1.37 2.46-1.73 3.62c-.22.69-.34 2.25 1.48 2.25h13.58a1.6 1.6 0 0 0 .77-.16a1.64 1.64 0 0 0 .6-.51a1.6 1.6 0 0 0 .27-.73a1.6 1.6 0 0 0-.13-.78c-.36-1.09-1.79-2.39-1.79-3.68v-2.13"></svg:path><svg:path d="M15.228 17.775c.003.427-.075.851-.23 1.25a3.4 3.4 0 0 1-.71 1.06a3.2 3.2 0 0 1-2.33.94a3.2 3.2 0 0 1-1.26-.25a3.3 3.3 0 0 1-1.77-1.77a3.2 3.2 0 0 1-.23-1.23m1.45-8.85h4.24a.19.19 0 0 1 .14.32l-4.06 4.06a.19.19 0 0 0 .035.289a.2.2 0 0 0 .105.03h4.24m-.75-10.459h2.69a.1.1 0 0 1 .096.119a.1.1 0 0 1-.026.05l-2.59 2.59a.1.1 0 0 0 .015.153a.1.1 0 0 0 .055.018h2.66"></svg:path></svg:g>`,
})
export class MageNotificationBellSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellSnooze2Icon],svg[mage-notification-bell-snooze-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.65 9.65h4.24a.19.19 0 0 1 .14.32l-4.06 4.06a.19.19 0 0 0 .14.32h4.24"></svg:path><svg:path d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path></svg:g>`,
})
export class MageNotificationBellSnooze2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellSnooze2FillIcon],svg[mage-notification-bell-snooze-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.07.14a.3.3 0 0 1-.09.08l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32c.37.38.816.677 1.31.87c.46.188.953.287 1.45.29h.16a3.9 3.9 0 0 0 1.47-.29a3.75 3.75 0 0 0 1.32-.87a4 4 0 0 0 .87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76c.226-.322.364-.698.4-1.09a2.2 2.2 0 0 0-.14-1.08m-11.35-6.68h4.24a.87.87 0 0 1 .52.16a.9.9 0 0 1 .34.4a1 1 0 0 1 .07.54a1.1 1.1 0 0 1-.24.48l-3.12 3.12h2.89a.75.75 0 1 1 0 1.5h-4.24a.87.87 0 0 1-.52-.16a.84.84 0 0 1-.34-.4a.9.9 0 0 1-.07-.53a1.1 1.1 0 0 1 .24-.49l3.12-3.12h-2.89a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MageNotificationBellSnooze2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellUploadIcon],svg[mage-notification-bell-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.962 17.986h6.81a1.555 1.555 0 0 0 1.512-2.175c-.36-1.088-1.795-2.393-1.795-3.677c0-2.85 0-3.6-1.403-5.276a5 5 0 0 0-1.654-1.283l-.783-.38a1.1 1.1 0 0 1-.511-.73a2.023 2.023 0 0 0-2.176-1.707a2.024 2.024 0 0 0-2.12 1.707a1.09 1.09 0 0 1-.566.73l-.784.38A5 5 0 0 0 6.84 6.858c-1.403 1.676-1.403 2.426-1.403 5.276c0 1.284-1.37 2.458-1.73 3.611c-.217.697-.337 2.241 1.48 2.241z"></svg:path><svg:path stroke-linejoin="round" d="M15.226 17.986a3.196 3.196 0 0 1-3.264 3.263A3.195 3.195 0 0 1 8.7 17.986"></svg:path><svg:path stroke-miterlimit="10" d="M12 8.861v5"></svg:path><svg:path stroke-linejoin="round" d="M14.293 10.966L12.326 9a.46.46 0 0 0-.652 0l-1.967 1.967"></svg:path></svg:g>`,
})
export class MageNotificationBellUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotificationBellUploadFillIcon],svg[mage-notification-bell-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.003 15.578a7 7 0 0 0-.87-1.57a4.1 4.1 0 0 1-.89-1.88c0-2.89 0-3.87-1.58-5.76a5.8 5.8 0 0 0-1.9-1.47l-.73-.35a.3.3 0 0 1-.1-.1a.23.23 0 0 1-.05-.1a2.77 2.77 0 0 0-2.93-2.34a2.77 2.77 0 0 0-2.84 2.29a.3.3 0 0 1-.07.14a.3.3 0 0 1-.09.08l-.78.38a5.6 5.6 0 0 0-1.91 1.48c-1.57 1.88-1.57 2.86-1.57 5.75a3.84 3.84 0 0 1-.82 1.77a6.6 6.6 0 0 0-.88 1.62a2.79 2.79 0 0 0 .26 2.37a2.24 2.24 0 0 0 1.94.85h2.82q.065.404.22.78c.198.497.498.947.88 1.32c.37.38.816.677 1.31.87c.46.188.953.287 1.45.29h.16a4 4 0 0 0 2.79-1.16a4 4 0 0 0 .87-1.31q.152-.384.23-.79h2.94a2.4 2.4 0 0 0 1-.23a2.4 2.4 0 0 0 .88-.76a2.26 2.26 0 0 0 .4-1.09a2.2 2.2 0 0 0-.14-1.08m-6.18-4.1a.75.75 0 0 1-.53.22a.8.8 0 0 1-.53-.22l-1-1v3.38a.75.75 0 0 1-1.5 0v-3.38l-1 1a.75.75 0 0 1-1.06 0a.74.74 0 0 1 0-1.06l2-2a1.3 1.3 0 0 1 .4-.26a1 1 0 0 1 .44-.1a1.2 1.2 0 0 1 .45.09q.222.105.4.27l2 2a.74.74 0 0 1-.07 1.06"></svg:path>`,
})
export class MageNotificationBellUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageNotionIcon],svg[mage-notion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.432 12.904v5.994c-.017.697-.355 1.082-1.053 1.14c-.801.066-1.606.108-2.41.156q-2.43.15-4.861.294c-1.435.085-2.87.16-4.303.257c-.634.041-1.133-.159-1.484-.703c-.104-.161-.237-.306-.355-.46c-.6-.774-1.195-1.55-1.798-2.32a2.7 2.7 0 0 1-.607-1.763c.02-3.41.008-6.818.01-10.227q0-.193.03-.384c.092-.5.402-.81.908-.858c.828-.078 1.669-.132 2.504-.195l3.99-.294c1.278-.093 2.556-.182 3.834-.283a2.58 2.58 0 0 1 1.786.53c1.126.817 2.27 1.607 3.412 2.404a.88.88 0 0 1 .403.797c-.011 1.971-.006 3.943-.006 5.915m-1.162.077V7.877c0-.492-.173-.662-.65-.634l-4.15.236l-5.09.298q-.897.051-1.794.11c-.317.022-.461.162-.508.473q-.018.135-.015.27v9.86c0 .767.204.959.974.914s1.539-.095 2.317-.14l8.239-.473c.442-.025.643-.22.678-.659c.006-.077 0-.154 0-.236zm-1.247-6.916l.027-.051a1.6 1.6 0 0 0-.2-.205c-.546-.399-1.098-.79-1.643-1.183c-.357-.273-.8-.41-1.249-.385c-.894.054-1.786.125-2.68.19l-5.744.417c-.412.03-.829.062-1.231.11a.3.3 0 0 0-.21.161c-.017.049.064.159.127.21c.45.363.908.72 1.362 1.078c.245.204.558.31.876.297c.155-.007.31 0 .464-.014l4.168-.256l5.538-.326q.198-.023.395-.043"></svg:path><svg:path fill="currentColor" d="M15.527 14.688v-4.66c-.252-.03-.493-.065-.736-.083c-.133-.01-.164-.07-.15-.187a.56.56 0 0 1 .492-.5c.803-.06 1.606-.101 2.405-.149c.119.397 0 .592-.38.667c-.419.087-.419.087-.419.512v6.845c0 .159-.042.256-.192.303a8 8 0 0 1-.807.255c-.439.092-.828-.03-1.089-.409a60 60 0 0 1-1.065-1.588c-.804-1.244-1.598-2.493-2.397-3.74c-.016-.026-.038-.051-.083-.113c-.01.086-.019.135-.019.186v4.66c0 .137.044.193.176.218c.296.058.591.129.88.194a.6.6 0 0 1-.54.576a7 7 0 0 1-.731.06c-.592.036-1.184.064-1.775.106c-.173.012-.208-.06-.178-.201a.41.41 0 0 1 .315-.355c.186-.045.37-.104.554-.156v-6.69l-.829-.074a.592.592 0 0 1 .533-.772c.725-.058 1.455-.08 2.178-.162c.309-.034.453.08.608.319c1.023 1.576 2.06 3.146 3.093 4.717z"></svg:path>`,
})
export class MageNotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePackageBoxIcon],svg[mage-package-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.988 17.452l5.75 3.448a2.45 2.45 0 0 0 2.524 0l5.75-3.448c.366-.219.67-.53.88-.901c.205-.37.315-.786.318-1.21V8.278a2.46 2.46 0 0 0-1.198-2.122l-5.75-3.065a2.51 2.51 0 0 0-2.524 0l-5.75 3.065A2.46 2.46 0 0 0 3.79 8.277v7.065c.003.423.113.839.318 1.209c.21.371.514.682.88.901M19.881 7.078L12 11.81"></svg:path><svg:path d="M4.119 7.078L12 11.81v9.44m4.38-8.316V9.179L8.066 4.522"></svg:path></svg:g>`,
})
export class MagePackageBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePackageBoxFillIcon],svg[mage-package-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.15 12.335v9.18a.6.6 0 0 1-.15-.08l-6.51-3.91a1.9 1.9 0 0 1-.7-.7a1.9 1.9 0 0 1-.25-1v-8.07zm9.31-4.58v8.1a2.1 2.1 0 0 1-.27.95a1.74 1.74 0 0 1-.69.71l-6.51 3.91l-.14.07v-9.17l3.26-2v2.77a.85.85 0 1 0 1.7 0v-3.74zm-5.18 1.15l-3.28 2l-7.66-4.6l.11-.07l3.06-1.63zm4.37-2.62l-2.71 1.62l-7.64-4.28l1.66-.87a2 2 0 0 1 1-.27a2.1 2.1 0 0 1 1 .28l6.47 3.46a.5.5 0 0 1 .22.06"></svg:path>`,
})
export class MagePackageBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePauseIcon],svg[mage-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 4.5h-3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1m10 0h-3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1"></svg:path>`,
})
export class MagePauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePauseFillIcon],svg[mage-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 5.5v13a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-13A1.76 1.76 0 0 1 5.5 3.75h3a1.75 1.75 0 0 1 1.75 1.75m10 0v13a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-13a1.76 1.76 0 0 1 1.75-1.75h3a1.75 1.75 0 0 1 1.75 1.75"></svg:path>`,
})
export class MagePauseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePauseSquareIcon],svg[mage-pause-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.074 7.723H8.223a.5.5 0 0 0-.5.5v7.554a.5.5 0 0 0 .5.5h1.851a.5.5 0 0 0 .5-.5V8.223a.5.5 0 0 0-.5-.5m5.703 0h-1.851a.5.5 0 0 0-.5.5v7.554a.5.5 0 0 0 .5.5h1.851a.5.5 0 0 0 .5-.5V8.223a.5.5 0 0 0-.5-.5"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MagePauseSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePauseSquareFillIcon],svg[mage-pause-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-3.93 13.09a1.24 1.24 0 0 1-1.23 1.23H8.58a1.24 1.24 0 0 1-1.23-1.23V8.91a1.24 1.24 0 0 1 1.23-1.23h1.51a1.24 1.24 0 0 1 1.23 1.23zm5.32 0a1.24 1.24 0 0 1-1.23 1.23H13.9a1.24 1.24 0 0 1-1.23-1.23V8.91a1.24 1.24 0 0 1 1.23-1.23h1.51a1.24 1.24 0 0 1 1.23 1.23z"></svg:path>`,
})
export class MagePauseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePaypalIcon],svg[mage-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.026 6.117c-.213 5.113-3.887 6.804-8.485 6.425c-.758 0-.894.778-.972 1.37c-.31 1.556-.398 3.305-.816 4.773h-3.45a.476.476 0 0 1-.496-.467c.632-4.14 1.312-8.29 1.944-12.44c.145-.924.3-1.847.437-2.77a.83.83 0 0 1 .408-.613a31 31 0 0 1 4.277-.117c2.819-.116 7.25-.048 7.153 3.84"></svg:path><svg:path fill="currentColor" d="M18.678 8.061c2.497 1.41 1.526 5.356-.175 7.105a6.36 6.36 0 0 1-4.724 1.439a.784.784 0 0 0-.768.826l-.583 3.625a.73.73 0 0 1-.33.554a18.6 18.6 0 0 1-3.383.107a.417.417 0 0 1-.428-.486c.078-.534.166-1.03.253-1.506a44 44 0 0 1 1.03-5.832a.84.84 0 0 1 .652-.292c.972 0 1.876 0 2.809-.058a5.99 5.99 0 0 0 5.598-5.472z"></svg:path>`,
})
export class MagePaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePenIcon],svg[mage-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.777 19.783l.607-4.162c.037-.272.161-.525.355-.72L15.5 3.124a1.26 1.26 0 0 1 1.19-.341a6.2 6.2 0 0 1 2.832 1.694a6.2 6.2 0 0 1 1.682 2.846a1.26 1.26 0 0 1-.341 1.19L9.089 20.275a1.26 1.26 0 0 1-.721.354l-4.161.607a1.264 1.264 0 0 1-1.43-1.454M13.275 5.364l5.363 5.363"></svg:path>`,
})
export class MagePenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePenFillIcon],svg[mage-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.911 7.142a7.45 7.45 0 0 0-5.07-5.07a2 2 0 0 0-1 0a2 2 0 0 0-.87.52l-2.23 2.24l-9.54 9.53a2.1 2.1 0 0 0-.56 1.14l-.61 4.16a2.1 2.1 0 0 0 .07.93c.102.3.27.573.49.8c.224.222.494.392.79.5c.207.068.423.101.64.1h.29l4.16-.61a2 2 0 0 0 1.15-.56l9.55-9.55l2.22-2.21a2 2 0 0 0 .54-1.92zm-1.46.63a.5.5 0 0 1-.14.22l-1.69 1.69l-4.32-4.31l1.71-1.71a.6.6 0 0 1 .23-.13h.23a5.94 5.94 0 0 1 4 4a.6.6 0 0 1-.02.24"></svg:path>`,
})
export class MagePenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneIcon],svg[mage-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.735 20.191a15 15 0 0 1-.92-.447a19 19 0 0 1-4.1-3.12A18 18 0 0 1 3.88 11.42a11.3 11.3 0 0 1-1.022-3.325a5.93 5.93 0 0 1 .37-3.465c.289-.47.637-.9 1.035-1.279a1.8 1.8 0 0 1 1.278-.601c.505.076.962.34 1.278.742c.69.767 1.43 1.457 2.159 2.186c.287.246.466.595.498.972c-.012.317-.134.62-.345.857c-.242.307-.536.588-.817.882a1.54 1.54 0 0 0-.46 1.279a3.7 3.7 0 0 0 .881 1.457c.486.665.971 1.28 1.52 1.931a13.6 13.6 0 0 0 3.463 2.865a1.28 1.28 0 0 0 1.278.153a4 4 0 0 0 1.137-.946c.275-.335.669-.55 1.099-.601c.383.02.744.184 1.01.46c.344.294.638.64.958.959c.319.32.575.55.843.844q.482.425.907.908c.22.284.324.64.294.997a2.1 2.1 0 0 1-.703 1.087a4.78 4.78 0 0 1-3.756 1.458a10.7 10.7 0 0 1-4.05-1.049Z"></svg:path>`,
})
export class MagePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneCallIcon],svg[mage-phone-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.531 20.217c-.3-.137-.599-.274-.898-.437a18.6 18.6 0 0 1-4.005-3.044a17.6 17.6 0 0 1-3.743-5.078a11 11 0 0 1-.998-3.243a5.8 5.8 0 0 1 .362-3.381a6.2 6.2 0 0 1 1.01-1.248A1.76 1.76 0 0 1 5.508 3.2c.493.074.94.332 1.248.723c.674.749 1.397 1.423 2.108 2.134c.28.24.455.58.487.948c-.012.31-.131.605-.337.836c-.237.3-.524.574-.798.86a1.5 1.5 0 0 0-.45 1.248c.172.535.467 1.023.861 1.423a34 34 0 0 0 1.485 1.883a13.3 13.3 0 0 0 3.38 2.795a1.25 1.25 0 0 0 1.249.15c.423-.237.8-.55 1.11-.923a1.64 1.64 0 0 1 1.073-.587c.374.02.726.18.986.45c.336.286.623.623.935.935s.562.537.824.823q.471.416.885.886c.214.277.317.625.287.973a2.05 2.05 0 0 1-.686 1.06a4.67 4.67 0 0 1-3.668 1.423a10.4 10.4 0 0 1-3.955-1.023Zm5.22-9.019a5.06 5.06 0 0 0-5.059-5.059m8.527 4.705a8.094 8.094 0 0 0-8.095-8.094"></svg:path>`,
})
export class MagePhoneCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneCallFillIcon],svg[mage-phone-call-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.33 19.035a2.57 2.57 0 0 1-.884 1.432a5.25 5.25 0 0 1-3.738 1.564h-.325a11 11 0 0 1-4.205-1.087h-.01c-.305-.142-.62-.284-.925-.457a19 19 0 0 1-4.185-3.18a18.2 18.2 0 0 1-3.9-5.292A11.7 11.7 0 0 1 2.14 8.572a6.4 6.4 0 0 1 .407-3.708a6.8 6.8 0 0 1 1.148-1.432A2.2 2.2 0 0 1 5.29 2.69a2.5 2.5 0 0 1 1.687.935c.457.497 1.015 1.015 1.473 1.493l.63.62c.37.328.599.786.64 1.28c0 .453-.167.89-.468 1.229a9 9 0 0 1-.62.68l-.203.213c-.118.11-.208.246-.264.397q-.075.223-.06.457c.161.431.414.823.74 1.148c.509.69 1.017 1.29 1.535 1.94a12.9 12.9 0 0 0 3.29 2.733c.127.093.273.155.428.182c.134.01.27-.01.396-.06c.355-.209.67-.477.934-.793a2.17 2.17 0 0 1 1.422-.782a2.03 2.03 0 0 1 1.423.61c.203.172.426.406.64.63l.304.314l.315.305l.539.548q.482.428.904.915c.282.39.409.872.355 1.35m-3.646-6.958a.77.77 0 0 1-.762-.762a4.37 4.37 0 0 0-4.378-4.378a.762.762 0 0 1 0-1.524a5.893 5.893 0 0 1 5.902 5.902a.76.76 0 0 1-.762.762"></svg:path><svg:path fill="currentColor" d="M21.209 11.72a.77.77 0 0 1-.762-.761a7.455 7.455 0 0 0-7.456-7.467a.762.762 0 1 1 0-1.523a8.98 8.98 0 0 1 8.98 8.99a.76.76 0 0 1-.762.762"></svg:path>`,
})
export class MagePhoneCallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneCancelIcon],svg[mage-phone-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.254 16.205a17.2 17.2 0 0 1-3.424-4.74a11.2 11.2 0 0 1-.971-3.322a5.9 5.9 0 0 1 .37-3.463a6.4 6.4 0 0 1 1.035-1.278a1.8 1.8 0 0 1 1.278-.6c.505.075.962.34 1.278.741C7.51 4.31 8.25 5 8.979 5.728c.287.246.466.594.498.97c-.012.318-.134.62-.345.857c-.242.307-.536.588-.817.882a1.53 1.53 0 0 0-.46 1.277c.175.548.477 1.047.881 1.457c.486.664.971 1.278 1.52 1.93l.09.089m1.866 1.648q.71.581 1.507 1.035a1.28 1.28 0 0 0 1.278.153c.434-.243.82-.563 1.137-.945c.275-.335.669-.55 1.099-.601c.383.02.744.184 1.01.46c.344.294.638.639.958.958c.319.32.575.55.843.843q.482.425.907.908c.22.283.324.639.294.996c-.114.427-.36.807-.703 1.086a4.78 4.78 0 0 1-3.756 1.457a10.7 10.7 0 0 1-4.012-.958c-.307-.14-.614-.281-.92-.448a17 17 0 0 1-2.696-1.852m-5.264 1.622L18.012 5.72"></svg:path>`,
})
export class MagePhoneCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneCancelFillIcon],svg[mage-phone-cancel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.16 12.267l-.74.73l-2.478 2.416l-.73.72A18 18 0 0 1 3.13 11.68A12.2 12.2 0 0 1 2.1 8.104a6.57 6.57 0 0 1 .421-3.834a7 7 0 0 1 1.182-1.48a2.2 2.2 0 0 1 .73-.535c.287-.136.598-.213.915-.226a2.6 2.6 0 0 1 1.737.956c.473.535 1.028 1.028 1.532 1.573l.647.637a1.76 1.76 0 0 1 .175 2.58a8 8 0 0 1-.627.689l-.226.226q-.183.182-.278.422a1.1 1.1 0 0 0 0 .483c.166.447.425.854.761 1.192c.319.524.689.997 1.09 1.48"></svg:path><svg:path fill="currentColor" d="M18.681 6.08L4.126 20.294a.8.8 0 0 1-.545.226a.76.76 0 0 1-.545-.236a.77.77 0 0 1 0-1.09l3.084-3.083l.73-.72l2.477-2.415l.74-.73l7.442-7.288a.77.77 0 0 1 1.09 0a.773.773 0 0 1 .082 1.12m3.331 12.799a2.68 2.68 0 0 1-.915 1.47a5.2 5.2 0 0 1-1.902 1.254a5.3 5.3 0 0 1-1.963.37h-.35a11.6 11.6 0 0 1-4.306-1.028c-.32-.154-.648-.298-1.028-.483a17 17 0 0 1-2.056-1.337a15 15 0 0 1-.792-.627a.503.503 0 0 1-.082-.688l.103-.113l.195-.196l2.426-2.456l.411-.422l.082-.082a.524.524 0 0 1 .638 0q.42.35.884.637q.286.21.596.38c.13.1.281.167.442.196c.14.011.28-.01.411-.062a3.6 3.6 0 0 0 1.028-.832a2.24 2.24 0 0 1 1.46-.802a2.16 2.16 0 0 1 1.47.627c.216.185.442.421.668.658l.308.329l.319.308a10 10 0 0 1 .565.576q.506.428.936.935c.321.388.483.884.452 1.388"></svg:path>`,
})
export class MagePhoneCancelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneCrossIcon],svg[mage-phone-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.744 20.255c-.313-.145-.615-.29-.906-.447a19.3 19.3 0 0 1-4.113-3.132a18 18 0 0 1-3.89-5.201c-.5-1.06-.83-2.193-.973-3.356a5.9 5.9 0 0 1 .37-3.467c.287-.48.637-.92 1.039-1.31a1.76 1.76 0 0 1 1.263-.592a1.9 1.9 0 0 1 1.285.738c.705.76 1.431 1.466 2.169 2.237c.283.25.463.597.503.973c-.029.299-.15.58-.347.806c-.257.313-.547.593-.827.895a1.53 1.53 0 0 0-.458 1.23c.178.546.48 1.044.883 1.454c.492.66.984 1.32 1.52 1.935a13.8 13.8 0 0 0 3.476 2.864a1.3 1.3 0 0 0 1.241.156a4 4 0 0 0 1.118-.95a1.72 1.72 0 0 1 1.118-.604c.39.014.758.178 1.028.458c.336.302.638.649.962.973c.324.325.57.548.838.84q.478.432.906.916a1.33 1.33 0 0 1 .29.996c-.1.44-.344.833-.693 1.118a4.8 4.8 0 0 1-3.767 1.454a10.7 10.7 0 0 1-4.035-.984ZM17.182 5.68l-3.633 3.636m0-3.636l3.633 3.636"></svg:path>`,
})
export class MagePhoneCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneCrossFillIcon],svg[mage-phone-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.024 18.905a2.63 2.63 0 0 1-.906 1.482a5.3 5.3 0 0 1-1.914 1.265a5.5 5.5 0 0 1-1.955.36h-.36a11.4 11.4 0 0 1-4.343-1.028c-.329-.155-.648-.31-.957-.474a20.4 20.4 0 0 1-4.353-3.313a18.9 18.9 0 0 1-4.116-5.485A11.8 11.8 0 0 1 2.091 8.09a6.45 6.45 0 0 1 .412-3.828a7.5 7.5 0 0 1 1.183-1.523a2.5 2.5 0 0 1 .73-.536c.288-.133.6-.206.917-.216a2.5 2.5 0 0 1 1.029.31c.286.17.537.394.74.658c.381.411.814.843 1.246 1.286l.947.967c.372.34.606.806.658 1.307v.103A1.95 1.95 0 0 1 9.47 7.73c-.175.217-.37.422-.576.638l-.278.299a1.1 1.1 0 0 0-.35.813c.164.463.427.885.772 1.235c.546.72 1.03 1.4 1.585 2.058a13.7 13.7 0 0 0 3.447 2.84a.85.85 0 0 0 .834.123c.36-.215.677-.494.936-.823c.374-.452.91-.74 1.492-.803a2.06 2.06 0 0 1 1.482.628c.206.175.422.402.638.628s.227.247.35.36l.32.32c.195.184.37.36.555.565q.499.443.936.947c.166.2.291.431.37.679q.07.331.042.669"></svg:path><svg:path fill="currentColor" d="M17.877 8.717a.763.763 0 0 1 0 1.091a.8.8 0 0 1-.546.226a.8.8 0 0 1-.545-.226l-1.317-1.327l-1.328 1.327a.772.772 0 0 1-1.09-1.09l1.327-1.328l-1.328-1.328a.772.772 0 0 1 1.091-1.09l1.328 1.327l1.317-1.327a.77.77 0 0 1 1.09 0a.763.763 0 0 1 0 1.09L16.55 7.39z"></svg:path>`,
})
export class MagePhoneCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneFillIcon],svg[mage-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.963 18.855a2.74 2.74 0 0 1-.898 1.47a5.36 5.36 0 0 1-3.848 1.602h-.358a11.4 11.4 0 0 1-4.287-1.082c-.326-.153-.643-.296-1.02-.47A19.8 19.8 0 0 1 7.253 17.1a18.6 18.6 0 0 1-4.012-5.451A11.9 11.9 0 0 1 2.15 8.106a6.5 6.5 0 0 1 .418-3.808a7 7 0 0 1 1.174-1.48a2.3 2.3 0 0 1 1.634-.745a2.54 2.54 0 0 1 1.725.95c.47.52 1.02 1.02 1.52 1.55l.644.634c.38.333.615.802.653 1.306c.001.464-.17.911-.48 1.256a9 9 0 0 1-.622.694l-.215.225a1.15 1.15 0 0 0-.286.418c-.052.154-.07.318-.05.48c.164.444.421.848.755 1.184c.52.704 1.02 1.317 1.582 2.042a13.3 13.3 0 0 0 3.4 2.807c.123.1.27.167.428.194c.14.021.281 0 .408-.062a3.5 3.5 0 0 0 1.021-.826c.36-.444.882-.726 1.45-.787a2.04 2.04 0 0 1 1.46.623q.35.302.663.643l.306.327l.317.306c.193.194.377.368.56.572q.5.43.93.929c.293.374.441.842.418 1.317"></svg:path>`,
})
export class MagePhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneIncomingIcon],svg[mage-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12.744 20.255a17 17 0 0 1-.906-.447a19.3 19.3 0 0 1-4.113-3.132a18 18 0 0 1-3.89-5.201c-.5-1.06-.83-2.193-.973-3.356a5.9 5.9 0 0 1 .37-3.467c.287-.48.637-.92 1.039-1.31a1.76 1.76 0 0 1 1.263-.592a1.9 1.9 0 0 1 1.285.738c.704.76 1.431 1.466 2.169 2.237c.283.25.463.598.503.973c-.029.299-.15.58-.347.806c-.257.313-.547.593-.827.895a1.53 1.53 0 0 0-.458 1.23c.178.546.48 1.044.883 1.454c.492.66.984 1.32 1.52 1.935a13.8 13.8 0 0 0 3.477 2.864a1.3 1.3 0 0 0 1.24.156a4 4 0 0 0 1.118-.95a1.72 1.72 0 0 1 1.118-.604c.39.014.758.178 1.028.458c.336.302.638.649.962.973c.324.325.57.548.838.84q.478.432.906.916a1.33 1.33 0 0 1 .29.996c-.1.44-.344.833-.693 1.118a4.8 4.8 0 0 1-3.767 1.454a10.7 10.7 0 0 1-4.035-.984Zm.38-9.395l5.589-5.593"></svg:path><svg:path stroke-linejoin="round" d="M13.124 7.493v3.366h3.353"></svg:path></svg:g>`,
})
export class MagePhoneIncomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneIncomingFillIcon],svg[mage-phone-incoming-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 18.89a2.62 2.62 0 0 1-.893 1.478c-.541.55-1.192.98-1.91 1.263a5.6 5.6 0 0 1-1.961.359h-.36a11.3 11.3 0 0 1-4.322-1.027a21 21 0 0 1-.955-.472a19.8 19.8 0 0 1-4.343-3.306a19 19 0 0 1-4.106-5.472a11.8 11.8 0 0 1-1.027-3.614a6.5 6.5 0 0 1 .42-3.82A6.8 6.8 0 0 1 3.716 2.77a2.3 2.3 0 0 1 .718-.544c.288-.131.598-.204.914-.216c.362.026.713.135 1.027.318c.286.162.534.383.729.647c.39.411.821.842 1.252 1.284c.431.441.627.636.935.965c.371.34.605.803.657 1.304v.102a2.05 2.05 0 0 1-.473 1.11a8 8 0 0 1-.585.636l-.277.298a1.2 1.2 0 0 0-.277.41a1 1 0 0 0-.062.4c.16.462.419.883.76 1.233c.534.708 1.027 1.396 1.581 2.053a13.6 13.6 0 0 0 3.44 2.834a.83.83 0 0 0 .43.174a.76.76 0 0 0 .401-.051c.36-.217.68-.495.945-.821c.368-.451.9-.739 1.478-.801a2.05 2.05 0 0 1 1.489.626q.332.294.626.626l.35.36l.318.318c.195.185.37.36.564.565c.195.205.627.605.934.944c.165.2.288.43.36.678c.054.218.068.444.041.667"></svg:path><svg:path fill="currentColor" d="m19.434 5.655l-4.426 4.425h1.582a.77.77 0 1 1 0 1.54h-3.47a.7.7 0 0 1-.299-.061a.81.81 0 0 1-.472-.709V7.39a.77.77 0 1 1 1.54 0v1.602l4.425-4.425a.77.77 0 0 1 1.089 0a.77.77 0 0 1 .03 1.088"></svg:path>`,
})
export class MagePhoneIncomingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneMinusIcon],svg[mage-phone-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.744 20.255c-.313-.145-.615-.29-.906-.447a19.3 19.3 0 0 1-4.113-3.132a18 18 0 0 1-3.89-5.201c-.5-1.06-.83-2.193-.973-3.356a5.9 5.9 0 0 1 .37-3.467c.287-.48.637-.92 1.039-1.31a1.76 1.76 0 0 1 1.263-.592a1.9 1.9 0 0 1 1.285.738c.705.76 1.431 1.466 2.169 2.237c.283.25.463.598.503.973c-.029.299-.15.58-.347.806c-.257.313-.547.593-.827.895a1.53 1.53 0 0 0-.458 1.23c.178.546.48 1.044.883 1.454c.492.66.984 1.32 1.52 1.935a13.8 13.8 0 0 0 3.477 2.864a1.3 1.3 0 0 0 1.24.156a4 4 0 0 0 1.118-.95a1.72 1.72 0 0 1 1.118-.604c.39.014.758.178 1.028.458c.336.302.638.649.962.973c.324.325.57.548.838.84q.478.432.906.916a1.33 1.33 0 0 1 .29.996c-.1.44-.344.833-.693 1.118a4.8 4.8 0 0 1-3.767 1.454a10.7 10.7 0 0 1-4.035-.984ZM12.8 7.504h5.13"></svg:path>`,
})
export class MagePhoneMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneMinusFillIcon],svg[mage-phone-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.958 18.858a2.62 2.62 0 0 1-.9 1.471a5.4 5.4 0 0 1-1.9 1.257a5.5 5.5 0 0 1-1.952.358h-.347a11.3 11.3 0 0 1-4.313-1.022a21 21 0 0 1-.95-.47a20.2 20.2 0 0 1-4.323-3.29a18.9 18.9 0 0 1-4.088-5.447a11.5 11.5 0 0 1-1.021-3.597a6.4 6.4 0 0 1 .408-3.802a7 7 0 0 1 1.175-1.502a1.983 1.983 0 0 1 2.637-.44c.286.164.536.383.736.644c.378.409.807.838 1.236 1.278l.94.96c.372.352.598.83.634 1.339v.102c-.038.41-.207.796-.48 1.104a11 11 0 0 1-.573.633l-.286.297c-.12.113-.211.253-.265.408a1.1 1.1 0 0 0-.072.399c.159.462.42.881.767 1.226l.071.092c.48.644 1.022 1.308 1.502 1.911a13.6 13.6 0 0 0 3.424 2.82a.8.8 0 0 0 .419.174c.135.02.272.002.398-.05a3.3 3.3 0 0 0 .94-.818c.371-.45.903-.735 1.482-.797a2.05 2.05 0 0 1 1.472.623c.204.174.419.399.633.624s.225.245.348.357l.316.317c.195.184.368.358.552.562q.492.444.93.94c.164.2.29.429.368.675q.09.326.082.664M18.83 7.423a.766.766 0 0 1-.766.766h-5.242a.766.766 0 1 1 0-1.533h5.283a.777.777 0 0 1 .726.767"></svg:path>`,
})
export class MagePhoneMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneMissedCallIcon],svg[mage-phone-missed-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m6.889 12.731l.777-.269c1.332-.37 2.71-.557 4.092-.557a14.5 14.5 0 0 1 5.139.746a8.9 8.9 0 0 1 2.45 1.394a4.73 4.73 0 0 1 1.752 2.171c.104.434.155.879.15 1.325a1.46 1.46 0 0 1-.38 1.055a1.6 1.6 0 0 1-1.154.309h-2.46a1.24 1.24 0 0 1-.836-.26a1.1 1.1 0 0 1-.28-.676v-.996a1.23 1.23 0 0 0-.437-.996a3 3 0 0 0-1.325-.318c-.647-.1-1.294-.2-1.991-.24a10.9 10.9 0 0 0-3.585.35a1 1 0 0 0-.787.617a3.4 3.4 0 0 0-.11 1.175a1.3 1.3 0 0 1-.278.995a1.16 1.16 0 0 1-.837.319H4.708a9 9 0 0 1-.996 0a1.14 1.14 0 0 1-.736-.398a1.7 1.7 0 0 1-.22-.996a3.85 3.85 0 0 1 1.305-2.988a8.5 8.5 0 0 1 2.828-1.762Z"></svg:path><svg:path stroke-linejoin="round" d="m16.986 5.084l-3.923 3.923a1.504 1.504 0 0 1-2.111 0L7.028 5.084"></svg:path><svg:path stroke-linejoin="round" d="M7.028 9.067V5.083h3.984"></svg:path></svg:g>`,
})
export class MagePhoneMissedCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneMissedCallFillIcon],svg[mage-phone-missed-call-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.981 17.81c.017.255-.022.511-.113.75c-.09.249-.23.476-.411.669a2.23 2.23 0 0 1-1.368.504h-2.726a1.8 1.8 0 0 1-1.183-.38a1.72 1.72 0 0 1-.483-1.03v-1.028a.65.65 0 0 0-.062-.35a.55.55 0 0 0-.164-.236a2.4 2.4 0 0 0-1.029-.247c-.75-.113-1.388-.206-2.057-.247a10.7 10.7 0 0 0-3.528.34a.6.6 0 0 0-.298.123a.55.55 0 0 0-.165.206c-.077.32-.101.65-.072.977c.03.242.01.487-.061.72a1.8 1.8 0 0 1-.34.669a1.7 1.7 0 0 1-1.275.524H4.517q-.515.03-1.028 0a1.73 1.73 0 0 1-1.122-.597a2.24 2.24 0 0 1-.35-1.398a4.4 4.4 0 0 1 .37-1.852a4.5 4.5 0 0 1 1.143-1.563a9.2 9.2 0 0 1 3.085-1.913l.802-.278a16.3 16.3 0 0 1 4.372-.596a15.2 15.2 0 0 1 5.45.792a9.7 9.7 0 0 1 2.675 1.522a5.23 5.23 0 0 1 1.964 2.437c.095.488.13.986.103 1.482M6.296 4.439l.113-.082a.5.5 0 0 0-.113.092zm.699-.216a1 1 0 0 0-.308 0z"></svg:path><svg:path fill="currentColor" d="M17.63 5.54L13.6 9.57c-.437.43-1.024.67-1.636.669a2.28 2.28 0 0 1-1.625-.669L7.613 6.856v2.232a.771.771 0 0 1-1.543 0V4.974a.78.78 0 0 1 .34-.638a.7.7 0 0 1 .277-.123h4.259a.771.771 0 0 1 0 1.542H8.714l2.715 2.716a.79.79 0 0 0 1.028 0l4.032-4.032a.77.77 0 0 1 1.09 0a.79.79 0 0 1 .052 1.1"></svg:path>`,
})
export class MagePhoneMissedCallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneOutgoingIcon],svg[mage-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12.744 20.255c-.313-.145-.615-.29-.906-.447a19.3 19.3 0 0 1-4.114-3.132a18 18 0 0 1-3.891-5.201c-.5-1.06-.829-2.193-.973-3.356a5.9 5.9 0 0 1 .37-3.467c.288-.48.637-.92 1.04-1.31a1.76 1.76 0 0 1 1.262-.592a1.9 1.9 0 0 1 1.286.738c.705.76 1.431 1.466 2.17 2.237c.283.25.462.597.502.973c-.028.299-.15.58-.346.806c-.257.313-.548.593-.828.895a1.53 1.53 0 0 0-.458 1.23c.178.546.48 1.044.883 1.454c.492.66.984 1.32 1.52 1.935a13.8 13.8 0 0 0 3.478 2.864a1.3 1.3 0 0 0 1.241.156a4 4 0 0 0 1.118-.95a1.72 1.72 0 0 1 1.118-.604c.39.014.758.178 1.029.458c.335.302.637.649.961.973c.325.325.57.548.839.84q.477.432.905.916a1.33 1.33 0 0 1 .291.996c-.1.44-.344.833-.693 1.118a4.8 4.8 0 0 1-3.768 1.454a10.7 10.7 0 0 1-4.036-.984Zm5.97-14.988l-5.59 5.592"></svg:path><svg:path stroke-linejoin="round" d="M18.714 8.611V5.255H15.36"></svg:path></svg:g>`,
})
export class MagePhoneOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneOutgoingFillIcon],svg[mage-phone-outgoing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.935 18.844a2.58 2.58 0 0 1-.897 1.468a5.3 5.3 0 0 1-1.897 1.255a5.5 5.5 0 0 1-1.948.357h-.357a11.3 11.3 0 0 1-4.304-1.02a20 20 0 0 1-.949-.47a20.2 20.2 0 0 1-4.314-3.283a18.9 18.9 0 0 1-4.08-5.437a11.7 11.7 0 0 1-1.02-3.59a6.5 6.5 0 0 1 .419-3.794A7 7 0 0 1 3.76 2.831c.2-.226.442-.41.714-.54c.289-.131.6-.204.918-.215c.358.026.706.13 1.02.306c.283.17.532.392.734.653c.377.408.805.836 1.234 1.275l.938.959c.364.34.595.8.653 1.295v.102a1.93 1.93 0 0 1-.48 1.101c-.173.215-.377.419-.57.633l-.286.296c-.12.114-.214.253-.276.408a1.3 1.3 0 0 0-.06.397c.157.461.42.88.764 1.224l.061.092c.49.643 1.02 1.305 1.51 1.907a13.5 13.5 0 0 0 3.417 2.815c.12.097.264.157.418.174a.74.74 0 0 0 .397-.051c.36-.214.678-.49.939-.817c.37-.448.9-.733 1.479-.795a2.04 2.04 0 0 1 1.468.622c.204.174.418.398.633.622c.214.225.224.245.346.357l.317.316c.193.184.367.357.55.561q.496.44.928.939c.164.199.289.427.367.673c.05.23.064.468.041.704"></svg:path><svg:path fill="currentColor" d="M19.63 5.136v3.427a.765.765 0 0 1-1.53 0v-1.56l-4.395 4.395a.75.75 0 0 1-.54.225a.76.76 0 0 1-.54-.225a.765.765 0 0 1 0-1.08L17.03 5.91h-1.58a.765.765 0 0 1 0-1.53h3.579c.1.012.196.05.275.113l.113.102a.82.82 0 0 1 .224.52z"></svg:path>`,
})
export class MagePhoneOutgoingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhonePlusIcon],svg[mage-phone-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.744 20.255a17 17 0 0 1-.906-.447a19.3 19.3 0 0 1-4.113-3.132a18 18 0 0 1-3.89-5.201c-.5-1.06-.83-2.193-.973-3.356a5.9 5.9 0 0 1 .37-3.467c.287-.48.637-.92 1.039-1.31a1.76 1.76 0 0 1 1.263-.592a1.9 1.9 0 0 1 1.285.738c.705.76 1.431 1.466 2.169 2.237c.283.25.463.597.503.973c-.029.299-.15.58-.347.806c-.257.313-.547.593-.827.895a1.53 1.53 0 0 0-.458 1.23c.178.546.48 1.044.883 1.454c.492.66.984 1.32 1.52 1.935a13.8 13.8 0 0 0 3.477 2.864a1.3 1.3 0 0 0 1.24.156a4 4 0 0 0 1.118-.95a1.72 1.72 0 0 1 1.118-.604c.39.014.758.178 1.028.458c.336.302.638.649.962.973c.324.325.57.548.838.84q.478.432.906.916a1.33 1.33 0 0 1 .29.996c-.1.44-.344.833-.693 1.118a4.8 4.8 0 0 1-3.767 1.454a10.7 10.7 0 0 1-4.035-.984ZM15.36 4.931v5.134M12.8 7.504h5.13"></svg:path>`,
})
export class MagePhonePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhonePlusFillIcon],svg[mage-phone-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.047 18.925a2.66 2.66 0 0 1-.899 1.497c-.544.55-1.199.98-1.92 1.26a5.6 5.6 0 0 1-1.973.362h-.362a11.4 11.4 0 0 1-4.348-1.033c-.34-.155-.66-.31-.96-.475a20 20 0 0 1-4.369-3.326a18.8 18.8 0 0 1-4.13-5.504A11.9 11.9 0 0 1 2.051 8.08a6.5 6.5 0 0 1 .424-3.853A6.8 6.8 0 0 1 3.663 2.71c.201-.227.448-.41.723-.537c.289-.134.602-.207.92-.217c.363.025.716.131 1.032.31c.293.16.547.382.744.65l1.25 1.292c.32.32.63.64.95.98c.377.335.613.8.66 1.302v.103a2 2 0 0 1-.485 1.126a8 8 0 0 1-.578.64l-.279.29a1.3 1.3 0 0 0-.279.413a1.1 1.1 0 0 0-.062.413c.162.464.423.887.765 1.24c.547.722 1.032 1.404 1.59 2.013a13.7 13.7 0 0 0 3.46 2.85a1 1 0 0 0 .434.187c.136.018.275 0 .403-.052c.356-.223.673-.502.94-.826a2.33 2.33 0 0 1 1.497-.816c.562.006 1.1.232 1.497.63c.197.186.414.402.63.63l.351.372l.331.32c.196.186.372.361.547.557q.503.454.95.96c.168.2.292.432.362.683c.057.23.067.468.031.702M18.949 7.378a.774.774 0 0 1-.775.775h-1.88v1.87a.775.775 0 1 1-1.549 0v-1.87h-1.89a.774.774 0 1 1 0-1.55h1.87V4.725a.774.774 0 1 1 1.549 0v1.88h1.88a.774.774 0 0 1 .795.774"></svg:path>`,
})
export class MagePhonePlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneRingingLoudIcon],svg[mage-phone-ringing-loud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.89 13.042q.381-.15.776-.259a15 15 0 0 1 4.092-.557a14.2 14.2 0 0 1 5.138.736c.88.307 1.707.75 2.45 1.315a4.7 4.7 0 0 1 1.752 2.17c.104.434.154.879.15 1.324a1.43 1.43 0 0 1-.379 1.056a1.56 1.56 0 0 1-1.155.308h-2.46a1.2 1.2 0 0 1-.836-.268a1.1 1.1 0 0 1-.278-.677v-.996a1.2 1.2 0 0 0-.439-.996a2.84 2.84 0 0 0-1.324-.328a21 21 0 0 0-1.991-.23a11.1 11.1 0 0 0-3.585.34a1.05 1.05 0 0 0-.786.616c-.107.383-.144.78-.11 1.175a1.3 1.3 0 0 1-.279.996c-.23.206-.527.32-.836.319H4.709a9 9 0 0 1-.996 0a1.1 1.1 0 0 1-.736-.398a1.66 1.66 0 0 1-.22-.996a3.85 3.85 0 0 1 1.285-2.918a8.5 8.5 0 0 1 2.848-1.732Zm8.642-3.744a4.98 4.98 0 0 0-7.05 0m9.161-2.111a7.966 7.966 0 0 0-11.271 0"></svg:path>`,
})
export class MagePhoneRingingLoudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhoneRingingLoudFillIcon],svg[mage-phone-ringing-loud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.988 18.053c.012.254-.026.509-.113.749a1.9 1.9 0 0 1-.41.677c-.382.314-.86.487-1.354.492h-2.729a1.49 1.49 0 0 1-1.661-1.457V17.49a.67.67 0 0 0-.062-.36a.8.8 0 0 0-.164-.235a2.4 2.4 0 0 0-1.026-.246a19 19 0 0 0-2.051-.236c-1.183-.082-2.37.03-3.518.328a.56.56 0 0 0-.298.123a.6.6 0 0 0-.174.215a3.5 3.5 0 0 0-.072.954a1.8 1.8 0 0 1-.051.729a2 2 0 0 1-.339.666c-.338.329-.79.512-1.261.513H4.51q-.513.03-1.026 0a1.5 1.5 0 0 1-.636-.184a1.8 1.8 0 0 1-.492-.41a2.3 2.3 0 0 1-.339-1.396a4.47 4.47 0 0 1 1.488-3.323a9.05 9.05 0 0 1 3.077-1.877q.412-.165.84-.277a15.8 15.8 0 0 1 4.34-.595c1.844-.074 3.686.19 5.436.78c.952.339 1.847.82 2.656 1.425a5.37 5.37 0 0 1 1.96 2.452c.122.496.18 1.006.174 1.518m-6.38-7.93a.76.76 0 0 1-.544-.225a4.5 4.5 0 0 0-1.405-.944a4.43 4.43 0 0 0-3.323 0a4.6 4.6 0 0 0-1.416.944a.76.76 0 0 1-1.087 0a.77.77 0 0 1 0-1.088a5.89 5.89 0 0 1 8.318 0a.76.76 0 0 1 0 1.088a.75.75 0 0 1-.543.225"></svg:path><svg:path fill="currentColor" d="M17.772 7.96a.76.76 0 0 1-.544-.226a7.42 7.42 0 0 0-8.062-1.6a7.3 7.3 0 0 0-2.41 1.6a.76.76 0 0 1-1.087 0a.77.77 0 0 1 0-1.087a8.934 8.934 0 0 1 12.688.03a.76.76 0 0 1 0 1.088a.75.75 0 0 1-.585.195"></svg:path>`,
})
export class MagePhoneRingingLoudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePhotoshopIcon],svg[mage-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.8 4.8 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.9 4.9 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"></svg:path><svg:path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.5 3.5 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.6 4.6 0 0 1-2.73.19q-.409-.09-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14q.162-.03.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.2 4.2 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63q.434.289.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"></svg:path>`,
})
export class MagePhotoshopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePinIcon],svg[mage-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.942 6.076l2.442 2.442a1.22 1.22 0 0 1-.147 1.855l-1.757.232a1.7 1.7 0 0 0-.94.452c-.72.696-1.453 1.428-2.674 2.637c-.21.212-.358.478-.427.769l-.94 3.772a1.22 1.22 0 0 1-1.978.379l-3.04-3.052l-3.052-3.04a1.22 1.22 0 0 1 .379-1.978l3.747-.964a1.8 1.8 0 0 0 .77-.44c1.379-1.355 1.88-1.855 2.66-2.698c.233-.25.383-.565.428-.903l.232-1.783a1.22 1.22 0 0 1 1.856-.146zm-9.51 9.498L3.256 20.75"></svg:path>`,
})
export class MagePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePinFillIcon],svg[mage-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.447 9.559a1.8 1.8 0 0 1-.25.82a2 2 0 0 1-.56.63a.7.7 0 0 1-.34.13l-1.76.23a1 1 0 0 0-.52.26c-.53.51-1.07 1-1.81 1.78l-.85.84a.93.93 0 0 0-.23.41l-.94 3.78a.6.6 0 0 1 0 .12a2 2 0 0 1-1.44 1.15h-.36a2.3 2.3 0 0 1-.58-.08a1.94 1.94 0 0 1-.81-.49l-2.54-2.53l-4.67 4.67a.75.75 0 0 1-1.06-1.06l4.67-4.67l-2.5-2.5a2 2 0 0 1-.48-.82a1.8 1.8 0 0 1-.05-.95a1.94 1.94 0 0 1 .39-.85a2 2 0 0 1 .75-.58h.12l3.74-1a1 1 0 0 0 .44-.25c1.39-1.37 1.87-1.85 2.63-2.67a.86.86 0 0 0 .23-.5l.24-1.77a.7.7 0 0 1 .13-.35a2 2 0 0 1 2.28-.69a2 2 0 0 1 .72.46l4.88 4.9a2 2 0 0 1 .57 1.55z"></svg:path>`,
})
export class MagePinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePinterestIcon],svg[mage-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.535 14.938a10.1 10.1 0 0 1-4.973 5.901a10.3 10.3 0 0 1-7.734.718a12.9 12.9 0 0 0 1.93-4.935l.441.341a3.35 3.35 0 0 0 2.888.586a4.85 4.85 0 0 0 1.785-.748a4.8 4.8 0 0 0 1.341-1.384a6.58 6.58 0 0 0 .98-5.49a5.54 5.54 0 0 0-1.617-2.732a5.64 5.64 0 0 0-2.866-1.413a7.22 7.22 0 0 0-5.496.831a5.7 5.7 0 0 0-1.879 1.812a5.6 5.6 0 0 0-.859 2.452a5.1 5.1 0 0 0 .916 3.784a2.7 2.7 0 0 0 1.078.906c.259.128.388-.086.474-.352c.184-.522.324-.789.108-1.215a4.23 4.23 0 0 1-.3-4.1a4.3 4.3 0 0 1 1.352-1.646a4.34 4.34 0 0 1 1.988-.799a4.8 4.8 0 0 1 2.931.427a3.75 3.75 0 0 1 1.484 1.316c.366.563.572 1.213.596 1.881a5.6 5.6 0 0 1-.851 3.667a2.74 2.74 0 0 1-.912.932a2.8 2.8 0 0 1-1.244.41a1.47 1.47 0 0 1-1.279-.475a1.43 1.43 0 0 1-.316-1.315c.205-.842.485-1.673.7-2.526c.093-.347.126-.708.098-1.066a1.28 1.28 0 0 0-.664-1.053a1.32 1.32 0 0 0-1.255-.013c-.306.152-.566.38-.756.663c-.189.282-.3.609-.322.947a3.8 3.8 0 0 0 .14 1.961a.8.8 0 0 1 0 .458c-.377 1.62-.808 3.198-1.077 4.85c-.09.771-.116 1.549-.076 2.324v.5a10.12 10.12 0 0 1-5.339-5.049a9.95 9.95 0 0 1-.471-7.29a10.07 10.07 0 0 1 4.645-5.682a10.26 10.26 0 0 1 7.309-1.068c1.326.342 2.569.947 3.652 1.778a10 10 0 0 1 2.648 3.058a9.9 9.9 0 0 1 .802 7.848"></svg:path>`,
})
export class MagePinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlayIcon],svg[mage-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.644 5.025V18.97a1.533 1.533 0 0 0 2.467 1.21l9.656-7.509a1.532 1.532 0 0 0-.092-2.483L8.019 3.753a1.533 1.533 0 0 0-2.375 1.272"></svg:path>`,
})
export class MagePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlayCircleIcon],svg[mage-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M8.909 7.864v8.27a.909.909 0 0 0 1.463.717l5.725-4.452a.91.91 0 0 0-.055-1.473L10.317 7.11a.909.909 0 0 0-1.408.754"></svg:path></svg:g>`,
})
export class MagePlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlayCircleFillIcon],svg[mage-play-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.3 10.57a1.4 1.4 0 0 1-.4.5l-4.76 3.7a1.3 1.3 0 0 1-.7.28h-.14a1.4 1.4 0 0 1-.6-.14a1.47 1.47 0 0 1-.57-.51a1.43 1.43 0 0 1-.2-.73V8.55a1.34 1.34 0 0 1 .19-.7a1.3 1.3 0 0 1 .54-.5a1.25 1.25 0 0 1 .7-.16c.25.007.492.083.7.22l4.76 3.18a1.33 1.33 0 0 1 .61 1.09c.007.22-.037.44-.13.64"></svg:path>`,
})
export class MagePlayCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlayFillIcon],svg[mage-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.105 11.446a2.34 2.34 0 0 1-.21 1c-.15.332-.38.62-.67.84l-9.65 7.51a2.3 2.3 0 0 1-1.17.46h-.23a2.2 2.2 0 0 1-1-.24a2.29 2.29 0 0 1-1.28-2v-14a2.2 2.2 0 0 1 .33-1.17a2.27 2.27 0 0 1 2.05-1.1c.412.02.812.148 1.16.37l9.66 6.44c.294.204.54.47.72.78c.19.34.29.721.29 1.11"></svg:path>`,
})
export class MagePlayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaySquareIcon],svg[mage-play-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.99 7.973v8.052a.885.885 0 0 0 1.424.699l5.575-4.336a.884.884 0 0 0-.053-1.433L10.36 7.238a.884.884 0 0 0-1.371.735"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MagePlaySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaySquareFillIcon],svg[mage-play-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1 10.39a1.5 1.5 0 0 1-.44.56l-4.51 3.5a1.46 1.46 0 0 1-.78.32h-.16a1.6 1.6 0 0 1-.66-.16a1.4 1.4 0 0 1-.62-.56a1.53 1.53 0 0 1-.24-.8V8.73a1.64 1.64 0 0 1 .22-.78a1.53 1.53 0 0 1 .58-.55a1.6 1.6 0 0 1 .8-.19c.273.022.536.108.77.25l4.51 3c.197.139.361.32.48.53a1.45 1.45 0 0 1 0 1.38z"></svg:path>`,
})
export class MagePlaySquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaylistIcon],svg[mage-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5.5h16m-16 6h16m-16 6h8m3.513-2.462v4.922a.54.54 0 0 0 .871.428l3.408-2.65a.54.54 0 0 0-.033-.877l-3.407-2.272a.54.54 0 0 0-.839.45"></svg:path>`,
})
export class MagePlaylistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaylistAddIcon],svg[mage-playlist-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4 4.75h16m-16 6h16m-16 6h8"></svg:path><svg:path stroke-miterlimit="10" d="M17.745 14.5V19M15.5 16.755H20"></svg:path></svg:g>`,
})
export class MagePlaylistAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaylistAlternateIcon],svg[mage-playlist-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.5h8m-16 6h16m-16 6h16M4 4.038V8.96a.54.54 0 0 0 .87.428l3.409-2.65a.54.54 0 0 0-.033-.877L4.838 3.589A.54.54 0 0 0 4 4.04"></svg:path>`,
})
export class MagePlaylistAlternateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaylistAlternateFillIcon],svg[mage-playlist-alternate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8.266h-8a.75.75 0 1 1 0-1.5h8a.75.75 0 1 1 0 1.5m0 6H4a.75.75 0 1 1 0-1.5h16a.75.75 0 1 1 0 1.5m0 6H4a.75.75 0 1 1 0-1.5h16a.75.75 0 1 1 0 1.5M9.23 7.286a1.2 1.2 0 0 1-.12.59a1.3 1.3 0 0 1-.37.47l-3.41 2.67c-.19.15-.42.24-.66.26h-.13a1.25 1.25 0 0 1-.57-.13a1.3 1.3 0 0 1-.52-.47a1.34 1.34 0 0 1-.2-.69v-4.97a1.31 1.31 0 0 1 .68-1.13a1.27 1.27 0 0 1 .67-.15c.231.013.455.085.65.21l3.41 2.28c.17.11.312.262.41.44c.108.188.163.403.16.62"></svg:path>`,
})
export class MagePlaylistAlternateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaylistFillIcon],svg[mage-playlist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.245H4a.75.75 0 0 1 0-1.5h16a.75.75 0 1 1 0 1.5m0 6H4a.75.75 0 1 1 0-1.5h16a.75.75 0 1 1 0 1.5m-8 6H4a.75.75 0 1 1 0-1.5h8a.75.75 0 1 1 0 1.5m8.72-1c.002.21-.039.417-.12.61a1.4 1.4 0 0 1-.38.47l-3.38 2.67c-.19.15-.42.24-.66.26h-.13a1.3 1.3 0 0 1-.57-.13a1.4 1.4 0 0 1-.52-.47a1.3 1.3 0 0 1-.2-.68v-4.98a1.35 1.35 0 0 1 .68-1.13a1.3 1.3 0 0 1 .67-.15c.232.008.457.081.65.21l3.41 2.28a1.28 1.28 0 0 1 .58 1z"></svg:path>`,
})
export class MagePlaylistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlaystoreIcon],svg[mage-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.637 3.434l8.74 8.571l-8.675 8.65a2.1 2.1 0 0 1-.326-.613a2.5 2.5 0 0 1 0-.755V4.567c-.026-.395.065-.79.26-1.133m12.506 4.833l-2.853 2.826L4.653 2.6c.28-.097.58-.124.873-.078c.46.126.899.32 1.302.573l7.816 4.325c.508.273 1.003.56 1.498.847M13.29 12.93l2.839 2.788l-2.058 1.146l-6.279 3.49c-.52.287-1.042.561-1.55.874a1.8 1.8 0 0 1-1.472.195zm7.36-.925a1.92 1.92 0 0 1-.99 1.72l-2.346 1.302l-3.087-3.022l3.1-3.074c.795.443 1.577.886 2.358 1.303a1.89 1.89 0 0 1 .964 1.771"></svg:path>`,
})
export class MagePlaystoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlusIcon],svg[mage-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15"></svg:path>`,
})
export class MagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlusCircleIcon],svg[mage-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.722v10.556M17.278 12H6.722M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path>`,
})
export class MagePlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlusCircleFillIcon],svg[mage-plus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.96 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 11.96 1.75M17.25 13h-4.28v4.27a1 1 0 0 1-2 0V13H6.69a1 1 0 1 1 0-2h4.28V6.68a1 1 0 0 1 2 0v4.28h4.28a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MagePlusCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlusSquareIcon],svg[mage-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 6.861V17.14M17.14 12H6.86"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MagePlusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePlusSquareFillIcon],svg[mage-plus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.89 11H13v4.14a1 1 0 0 1-2 0V13H6.86a1 1 0 0 1 0-2H11V6.86a1 1 0 0 1 2 0V11h4.14a1 1 0 0 1 0 2"></svg:path>`,
})
export class MagePlusSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePremierProIcon],svg[mage-premier-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.63 11.11a1.16 1.16 0 0 1-.81.77A4 4 0 0 1 8.2 12c-.11 0-.15 0-.15-.16V9.4c0-.09 0-.17.12-.17q.712-.01 1.42.07a1.3 1.3 0 0 1 1.04 1.81"></svg:path><svg:path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-5.14 10.57a3 3 0 0 1-2 1c-.5.06-1 0-1.5.08H8v2.57c0 .2 0 .23-.21.23H6.37c-.15 0-.21-.05-.21-.21V7.79c0-.13 0-.2.18-.2H9.1A4 4 0 0 1 11 8a2.71 2.71 0 0 1 1.55 2.43a2.88 2.88 0 0 1-.69 2.14m5.94-1.29c0 .14-.08.17-.2.17a3.6 3.6 0 0 0-1.45.26l-.13.06a.58.58 0 0 0-.4.62v3.82c0 .23 0 .24-.23.24h-1.45c-.21 0-.23 0-.23-.23v-5.19c0-.38 0-.76-.05-1.14c0-.13 0-.19.17-.18h1.33a.23.23 0 0 1 .27.22c0 .2.07.41.1.58c.3-.21.59-.44.91-.63a2.35 2.35 0 0 1 1.19-.31c.12 0 .18 0 .18.17z"></svg:path>`,
})
export class MagePremierProIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePreviewIcon],svg[mage-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.584 21.25h-1.25a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h6.5a6 6 0 0 1 6 6V10"></svg:path><svg:path stroke-linejoin="round" d="m16.55 16.864l-.51 2.959a1.164 1.164 0 0 1-2.212.093l-2.789-7.882a1.164 1.164 0 0 1 1.493-1.493l8.036 2.788a1.164 1.164 0 0 1-.115 2.234l-3.113.51a1.17 1.17 0 0 0-.79.791"></svg:path></svg:g>`,
})
export class MagePreviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePreviewCircleIcon],svg[mage-preview-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m16.219 17.114l-.51 2.959a1.164 1.164 0 0 1-2.213.093l-2.788-7.882A1.164 1.164 0 0 1 12.2 10.79l8.036 2.788a1.164 1.164 0 0 1-.116 2.234l-3.112.51a1.17 1.17 0 0 0-.79.791"></svg:path><svg:path d="M21.502 9.314A9.726 9.726 0 1 0 9.297 21.5"></svg:path></svg:g>`,
})
export class MagePreviewCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePreviewCircleFillIcon],svg[mage-preview-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.773 14.768c-.029.414-.186.81-.45 1.13a1.9 1.9 0 0 1-.998.63l-3.157.521l-.09.09a.4.4 0 0 0-.09.15l-.5 2.902a1.92 1.92 0 0 1-1.778 1.471h-.09c-.374 0-.74-.111-1.05-.32a1.9 1.9 0 0 1-.739-.92l-2.787-7.906a1.9 1.9 0 0 1 .45-2.001c.253-.263.58-.44.939-.51a1.87 1.87 0 0 1 1.069.07l7.992 2.781c.404.135.754.394 1 .74c.215.351.313.761.28 1.172"></svg:path><svg:path fill="currentColor" d="M9.305 22.243a.8.8 0 0 1-.22 0a10.47 10.47 0 0 1-4.5-2.83a10.49 10.49 0 0 1-2.448-10A10.5 10.5 0 0 1 4.82 4.819a10.47 10.47 0 0 1 9.902-2.765a10.47 10.47 0 0 1 4.669 2.54a10.5 10.5 0 0 1 2.822 4.51a.743.743 0 0 1-1.059.886a.76.76 0 0 1-.37-.436a9 9 0 0 0-2.41-3.894a8.99 8.99 0 0 0-8.585-2.143a9 9 0 0 0-3.953 2.306a9.01 9.01 0 0 0-2.377 8.536a8.99 8.99 0 0 0 6.075 6.443a.77.77 0 0 1 .49 1a.75.75 0 0 1-.72.44"></svg:path>`,
})
export class MagePreviewCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePreviewFillIcon],svg[mage-preview-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8.75A6.76 6.76 0 0 1 2 15.25v-6.5A6.76 6.76 0 0 1 8.75 2h6.5A6.76 6.76 0 0 1 22 8.75V10a.75.75 0 1 1-1.5 0V8.75a5.26 5.26 0 0 0-5.25-5.25h-6.5A5.26 5.26 0 0 0 3.5 8.75v6.5a5.26 5.26 0 0 0 5.25 5.25H10a.75.75 0 1 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M21.52 14.53a1.89 1.89 0 0 1-1.48 1.76l-3.16.52l-.09.09a.4.4 0 0 0-.09.14l-.5 2.91a1.94 1.94 0 0 1-.68 1.06a1.9 1.9 0 0 1-1.1.41h-.09a1.94 1.94 0 0 1-1.79-1.24l-2.79-7.9a1.9 1.9 0 0 1 .45-2a1.8 1.8 0 0 1 .94-.51a1.87 1.87 0 0 1 1.07.07l8 2.78a1.93 1.93 0 0 1 1.29 1.91z"></svg:path>`,
})
export class MagePreviewFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePreviousIcon],svg[mage-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.889 3.7v16.6m16.222-1.676V5.38a1.455 1.455 0 0 0-2.343-1.15L8.6 11.363a1.456 1.456 0 0 0 .087 2.357l9.169 6.113a1.456 1.456 0 0 0 2.255-1.208"></svg:path>`,
})
export class MagePreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePreviousFillIcon],svg[mage-previous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.885 21.06a.76.76 0 0 1-.75-.75V3.69a.75.75 0 0 1 1.5 0v16.6a.75.75 0 0 1-.75.77m16.98-15.713v13.25a2.35 2.35 0 0 1-.32 1.13a2.2 2.2 0 0 1-1.89 1.07h-.1a2.1 2.1 0 0 1-1.11-.36l-9.13-6.12a2.25 2.25 0 0 1-.71-.76a2.3 2.3 0 0 1-.27-1a2.2 2.2 0 0 1 .2-1a2.2 2.2 0 0 1 .64-.81l9.14-7.09a2.2 2.2 0 0 1 1.13-.44a2.2 2.2 0 0 1 2.09 1.02c.204.335.318.718.33 1.11"></svg:path>`,
})
export class MagePreviousFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePrinterIcon],svg[mage-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.625 14.313h-9.25c-.639 0-1.156.517-1.156 1.156v4.625c0 .638.517 1.156 1.156 1.156h9.25c.639 0 1.156-.518 1.156-1.156v-4.625c0-.639-.517-1.156-1.156-1.156"></svg:path><svg:path d="M17.781 17.781h2.313a1.156 1.156 0 0 0 1.156-1.156v-5.781a2.31 2.31 0 0 0-2.312-2.313H5.063a2.31 2.31 0 0 0-2.313 2.313v5.781a1.156 1.156 0 0 0 1.156 1.156H6.22"></svg:path><svg:path d="M16.625 8.531V3.906a1.156 1.156 0 0 0-1.156-1.156H8.53a1.156 1.156 0 0 0-1.156 1.156v4.625"></svg:path></svg:g>`,
})
export class MagePrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[magePrinterFillIcon],svg[mage-printer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.1 8.67a3 3 0 0 0-2.16-.89h-1.56V3.9A1.89 1.89 0 0 0 15.47 2H8.53a1.87 1.87 0 0 0-1.34.55a1.9 1.9 0 0 0-.56 1.35v3.88H5.06A3.06 3.06 0 0 0 2 10.84v5.78a1.91 1.91 0 0 0 1.91 1.91h1.56v1.56A1.92 1.92 0 0 0 7.38 22h9.25a1.91 1.91 0 0 0 1.9-1.91v-1.56h1.57a1.91 1.91 0 0 0 1.9-1.91v-5.78a3 3 0 0 0-.9-2.17m-.6 7.95a.4.4 0 0 1-.12.29a.42.42 0 0 1-.28.12h-1.57v-1.57a1.9 1.9 0 0 0-1.9-1.9H7.38a1.91 1.91 0 0 0-1.91 1.9v1.57H3.91a.45.45 0 0 1-.29-.12a.4.4 0 0 1-.12-.29v-5.78a1.6 1.6 0 0 1 .46-1.11a1.56 1.56 0 0 1 1.1-.45h13.88a1.55 1.55 0 0 1 1.56 1.56z"></svg:path>`,
})
export class MagePrinterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageQrCodeIcon],svg[mage-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.433 5.833h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m0 7.815h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m7.834-7.815h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m0 7.834h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m3.983-4.75V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-3.084m-18.5 0v3.084a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833v3.084"></svg:path>`,
})
export class MageQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageQrCodeFillIcon],svg[mage-qr-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.12 6.96v2.595a1.57 1.57 0 0 1-.968 1.484a1.6 1.6 0 0 1-.612.123h-2.6a1.59 1.59 0 0 1-1.59-1.577V6.99a1.585 1.585 0 0 1 1.59-1.587h2.6a1.59 1.59 0 0 1 1.58 1.557m0 7.495v2.595a1.585 1.585 0 0 1-1.58 1.587h-2.6a1.59 1.59 0 0 1-1.59-1.587v-2.595a1.585 1.585 0 0 1 1.59-1.577h2.6a1.58 1.58 0 0 1 1.58 1.577m7.54-7.495v2.595a1.585 1.585 0 0 1-1.54 1.607h-2.59a1.59 1.59 0 0 1-1.59-1.577V6.99a1.585 1.585 0 0 1 1.59-1.587h2.59a1.59 1.59 0 0 1 1.54 1.557m0 7.515v2.595a1.585 1.585 0 0 1-1.54 1.587h-2.59a1.59 1.59 0 0 1-1.59-1.587v-2.595a1.586 1.586 0 0 1 1.59-1.577h2.59a1.59 1.59 0 0 1 1.54 1.577"></svg:path><svg:path fill="currentColor" d="M21.25 9.695a.76.76 0 0 1-.75-.749V5.862a2.3 2.3 0 0 0-.68-1.686a2.35 2.35 0 0 0-1.65-.679h-3.05a.75.75 0 0 1-.75-.748a.75.75 0 0 1 .75-.749h3.08a3.86 3.86 0 0 1 2.68 1.178A3.8 3.8 0 0 1 22 5.882v3.084a.75.75 0 0 1-.75.729M18.17 22h-3.05a.75.75 0 0 1-.75-.748a.75.75 0 0 1 .75-.749h3.08a2.32 2.32 0 0 0 2.137-1.462a2.3 2.3 0 0 0 .163-.893v-3.054a.75.75 0 0 1 .75-.749a.75.75 0 0 1 .75.749v3.054a3.81 3.81 0 0 1-2.363 3.534c-.465.191-.964.29-1.467.288zm-9.25 0H5.84a3.85 3.85 0 0 1-2.722-1.13A3.83 3.83 0 0 1 2 18.149v-3.054a.75.75 0 0 1 .75-.749a.75.75 0 0 1 .75.749v3.054a2.334 2.334 0 0 0 2.34 2.325h3.08a.75.75 0 0 1 .75.749a.747.747 0 0 1-.75.748zM2.75 9.695A.76.76 0 0 1 2 8.946V5.862a3.8 3.8 0 0 1 1.12-2.684A3.86 3.86 0 0 1 5.83 2.06h3.08a.75.75 0 0 1 .75.749a.75.75 0 0 1-.75.748H5.83a2.333 2.333 0 0 0-2.34 2.325v3.084a.75.75 0 0 1-.74.729"></svg:path>`,
})
export class MageQrCodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageQuestionMarkCircleIcon],svg[mage-question-mark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-miterlimit="10" stroke-width="1.5" d="M9.008 8.84a3.185 3.185 0 0 1 3.471-1.806a3.09 3.09 0 0 1 2.265 1.614a2.682 2.682 0 0 1-1.562 3.689a1.98 1.98 0 0 0-1.276 1.787v.738"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M11.881 17.424h.008"></svg:path><svg:path stroke-linejoin="round" stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageQuestionMarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageQuestionMarkCircleFillIcon],svg[mage-question-mark-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m-.11 16.8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.82-7.32a3.73 3.73 0 0 1-2.21 2.05a1 1 0 0 0-.41.33a.9.9 0 0 0-.18.54v.71a1 1 0 1 1-2 0v-.74a2.9 2.9 0 0 1 .55-1.67a2.9 2.9 0 0 1 1.37-1a1.6 1.6 0 0 0 .63-.38A1.63 1.63 0 0 0 14 9.81a1.7 1.7 0 0 0-.16-.69a2 2 0 0 0-.62-.69a2 2 0 0 0-.89-.36a2.27 2.27 0 0 0-1.44.2a2.2 2.2 0 0 0-1 1a1 1 0 0 1-1.82-.83a4.17 4.17 0 0 1 4.56-2.37a4 4 0 0 1 1.72.7A4.1 4.1 0 0 1 15.6 8.2a3.7 3.7 0 0 1 .08 3.05z"></svg:path>`,
})
export class MageQuestionMarkCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageQuestionMarkSquareIcon],svg[mage-question-mark-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.88 8.54a3.29 3.29 0 0 1 3.576-1.86a3.2 3.2 0 0 1 2.334 1.663a2.76 2.76 0 0 1-1.61 3.8a2.05 2.05 0 0 0-1.314 1.842v.76"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.96 17.162h.009"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageQuestionMarkSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageQuestionMarkSquareFillIcon],svg[mage-question-mark-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-3.28 16.58a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.79-7.59a3.7 3.7 0 0 1-.91 1.29a3.6 3.6 0 0 1-1.35.81a1 1 0 0 0-.63.93v.73a1 1 0 0 1-2 0v-.77a3.06 3.06 0 0 1 .56-1.7a3.13 3.13 0 0 1 1.39-1.07a1.8 1.8 0 0 0 .67-.39c.186-.17.332-.378.43-.61a1.8 1.8 0 0 0 .13-.72a1.8 1.8 0 0 0-.16-.72a2.3 2.3 0 0 0-.65-.72c-.279-.2-.6-.33-.94-.38a2.29 2.29 0 0 0-2.51 1.29a1.002 1.002 0 0 1-1.82-.84a4.35 4.35 0 0 1 1.92-2a4.27 4.27 0 0 1 2.74-.41a4.1 4.1 0 0 1 1.77.72c.53.379.964.875 1.27 1.45c.24.493.37 1.032.38 1.58a3.55 3.55 0 0 1-.29 1.53"></svg:path>`,
})
export class MageQuestionMarkSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRedditIcon],svg[mage-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m6.235 11.43c-.072 0-.155.123-.145.196a3.58 3.58 0 0 1-1.676 3.26a6.7 6.7 0 0 1-3.025 1.184a8.2 8.2 0 0 1-4.115-.36a5.4 5.4 0 0 1-2.799-2.058a3.1 3.1 0 0 1-.514-1.996a.27.27 0 0 0-.154-.298a1.534 1.534 0 1 1 1.687-2.49a.195.195 0 0 0 .288 0a7.2 7.2 0 0 1 3.56-1.162c.4 0 .4 0 .483-.422c.226-1.029.453-2.058.669-3.086c.062-.289.185-.37.463-.31l2.253.474a.216.216 0 0 0 .257-.092a1.03 1.03 0 0 1 1.204-.433a1.1 1.1 0 0 1 .782 1.03a1.13 1.13 0 0 1-.659 1.028a1.11 1.11 0 0 1-1.45-.607c0-.113-.062-.226-.103-.35l-2.212-.463c-.226 1.03-.453 2.14-.69 3.22a7.66 7.66 0 0 1 4.054 1.297a1.52 1.52 0 0 1 1.163-.412a1.49 1.49 0 0 1 1.378 1.142a1.55 1.55 0 0 1-.69 1.708z"></svg:path><svg:path fill="currentColor" d="M14.53 16.105a3.95 3.95 0 0 1-2.345.751a4.02 4.02 0 0 1-2.736-.792a.236.236 0 0 1 0-.36a.26.26 0 0 1 .303-.067a.3.3 0 0 1 .088.067a4.12 4.12 0 0 0 3.827.35q.286-.127.535-.32c.298-.298.648.103.329.37m-3.837-2.921a1.08 1.08 0 0 1-1.348 1.029h-.093a1.03 1.03 0 0 1-.7-.977a1.03 1.03 0 0 1 1.03-1.091a1.1 1.1 0 0 1 1.11 1.04m4.774-.001a1.028 1.028 0 1 1-2.05-.164a1.028 1.028 0 0 1 2.05.164"></svg:path>`,
})
export class MageRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRefreshIcon],svg[mage-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.605 7.705A7.9 7.9 0 0 0 12 5.382a7.93 7.93 0 0 0-7.929 7.929A7.94 7.94 0 0 0 12 21.25a7.94 7.94 0 0 0 7.929-7.94"></svg:path><svg:path stroke-linejoin="round" d="m16.88 2.75l.95 3.858a1.33 1.33 0 0 1-.97 1.609l-3.869.948"></svg:path></svg:g>`,
})
export class MageRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRefreshReverseIcon],svg[mage-refresh-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M6.395 7.705A7.9 7.9 0 0 1 12 5.382a7.93 7.93 0 0 1 7.929 7.929A7.94 7.94 0 0 1 12 21.25a7.94 7.94 0 0 1-7.929-7.94"></svg:path><svg:path stroke-linejoin="round" d="m7.12 2.75l-.95 3.858a1.33 1.33 0 0 0 .97 1.609l3.869.948"></svg:path></svg:g>`,
})
export class MageRefreshReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageReloadIcon],svg[mage-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M18.024 7.043A8.374 8.374 0 0 0 3.74 12.955"></svg:path><svg:path stroke-linejoin="round" d="m17.35 2.75l.832 3.372a1.123 1.123 0 0 1-.854 1.382l-3.372.843"></svg:path><svg:path stroke-miterlimit="10" d="M5.976 16.957a8.374 8.374 0 0 0 14.285-5.912"></svg:path><svg:path stroke-linejoin="round" d="m6.65 21.25l-.832-3.372a1.124 1.124 0 0 1 .855-1.382l3.371-.843"></svg:path></svg:g>`,
})
export class MageReloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageReloadReverseIcon],svg[mage-reload-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M18.024 16.957A8.373 8.373 0 0 1 3.74 11.045"></svg:path><svg:path stroke-linejoin="round" d="m17.35 21.25l.832-3.372a1.123 1.123 0 0 0-.854-1.382l-3.372-.843"></svg:path><svg:path stroke-miterlimit="10" d="M5.976 7.043a8.373 8.373 0 0 1 14.285 5.912"></svg:path><svg:path stroke-linejoin="round" d="m6.65 2.75l-.832 3.372a1.124 1.124 0 0 0 .855 1.382l3.371.843"></svg:path></svg:g>`,
})
export class MageReloadReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRibbonIcon],svg[mage-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.432 10.606L17.14 12.3a2.844 2.844 0 0 0 3.964-.97c.259-.44.395-.94.396-1.449V6.853a2.86 2.86 0 0 0-1.47-2.496a2.84 2.84 0 0 0-2.89.077L14.432 6.13m-4.864 0L6.861 4.434a2.845 2.845 0 0 0-3.965.97c-.259.44-.395.94-.396 1.45v3.028a2.86 2.86 0 0 0 .942 2.14a2.85 2.85 0 0 0 2.222.717a2.7 2.7 0 0 0 1.197-.419l2.707-1.695"></svg:path><svg:path d="M14.85 7.377v1.981c.001.42-.136.828-.39 1.162l-.066.086a1.9 1.9 0 0 1-1.444.657h-1.9a1.9 1.9 0 0 1-1.444-.657a1.3 1.3 0 0 1-.142-.2a1.9 1.9 0 0 1-.314-1.048v-1.98a1.907 1.907 0 0 1 1.9-1.906h1.9a1.9 1.9 0 0 1 1.9 1.905m3.8 5.363l1.51 5.637a.19.19 0 0 1-.177.239a.2.2 0 0 1-.108-.03l-3.087-1.79l-1.748 3.105a.19.19 0 0 1-.294.05a.2.2 0 0 1-.058-.098L12.4 11.282"></svg:path><svg:path d="M9.426 10.406q.06.106.142.2L6.861 12.3c-.36.233-.771.376-1.197.42l-1.51 5.656a.19.19 0 0 0 .275.21l3.097-1.79L9.312 19.9a.19.19 0 0 0 .192.097a.19.19 0 0 0 .159-.145l2.29-8.571m4.797-2.913h-1.862m-5.776 0H7.25"></svg:path></svg:g>`,
})
export class MageRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRibbonFillIcon],svg[mage-ribbon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.778 5.024a3.67 3.67 0 0 0-1.364-1.321a3.5 3.5 0 0 0-1.845-.45a3.6 3.6 0 0 0-1.815.54l-2.277 1.421a2.6 2.6 0 0 0-1.524-.49h-1.876c-.553 0-1.093.17-1.544.49L7.266 3.793a3.6 3.6 0 0 0-1.815-.54a3.5 3.5 0 0 0-1.845.45A3.62 3.62 0 0 0 1.75 6.856v3.003c-.007.51.096 1.015.301 1.481c.204.468.51.885.893 1.222c.376.342.82.6 1.304.76q.22.077.45.11l-1.273 4.775a.86.86 0 0 0 0 .51c.056.176.164.33.311.441c.145.11.32.177.502.19a.9.9 0 0 0 .541-.12l2.457-1.411L8.64 20.25a.88.88 0 0 0 .411.4c.132.063.276.098.422.1h.12a.92.92 0 0 0 .782-.7l1.796-6.708l1.785 6.667a.94.94 0 0 0 .27.49c.149.135.334.222.532.251h.12q.233-.008.442-.11a1 1 0 0 0 .38-.37l1.385-2.453l2.417 1.401a1 1 0 0 0 .521.14a.87.87 0 0 0 .522-.17a.9.9 0 0 0 .33-.44a.9.9 0 0 0 0-.57l-1.293-4.826q.421-.119.802-.33A3.61 3.61 0 0 0 22.25 9.87V6.866a3.64 3.64 0 0 0-.472-1.842m-6.167 2.593h1.153a.753.753 0 0 1 .752.75a.75.75 0 0 1-.752.751H15.61zm-8.375 0H8.39v1.471H7.236a.753.753 0 0 1-.752-.75a.75.75 0 0 1 .752-.751zm2.006 10.75l-1.112-1.93a.75.75 0 0 0-1.003-.28l-1.936 1.12l1.003-3.883c.357-.091.695-.24 1.003-.441l2.257-1.411q.195.137.41.24c.318.14.658.22 1.004.24zm1.765-7.847a1.1 1.1 0 0 1-.481-.1a1.14 1.14 0 0 1-.391-.3l-.08-.121a1.1 1.1 0 0 1-.191-.64V7.355a1.16 1.16 0 0 1 1.153-1.15h1.906a1.15 1.15 0 0 1 .812.34c.215.215.337.506.341.81v2.002c-.003.249-.054.49-.202.691l-.029.06a1 1 0 0 1-.39.3a1.1 1.1 0 0 1-.482.1zm6.138 5.635a.75.75 0 0 0-.572-.07a.74.74 0 0 0-.461.35l-1.073 1.913l-1.705-6.357q.36-.06.692-.21q.227-.106.431-.25l2.267 1.411c.4.25.847.418 1.313.49l1.003 3.834z"></svg:path>`,
})
export class MageRibbonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotIcon],svg[mage-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-12.3 4.45v2.698m6.15-2.698v2.698M9.94 15.588h4.1"></svg:path></svg:g>`,
})
export class MageRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotAppreciateIcon],svg[mage-robot-appreciate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1M9.94 15.588h4.1m-6.16-4.613L8.903 9.95l1.025 1.025m4.102 0l1.025-1.025l1.024 1.025"></svg:path></svg:g>`,
})
export class MageRobotAppreciateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotAppreciateFillIcon],svg[mage-robot-appreciate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 0 0-.717-.717a.755.755 0 0 0-.717.717V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.695-3.118a.83.83 0 0 1-1.148 0a.82.82 0 0 1 0-1.157l.956-.956a.813.813 0 0 1 1.148 0l.956.956a.82.82 0 0 1 0 1.157a.813.813 0 0 1-1.147 0l-.412-.41zm5.316 4.648h-3.92a.813.813 0 0 1 0-1.626h3.92a.813.813 0 1 1 0 1.626m2.525-4.648a.82.82 0 0 1-.574.23a.8.8 0 0 1-.574-.23l-.411-.41l-.402.41a.813.813 0 0 1-1.385-.578c0-.217.086-.425.238-.579l.956-.956a.82.82 0 0 1 1.157 0l.956.956a.82.82 0 0 1 .039 1.157m4.608 2.869a.3.3 0 0 1-.076.191a.27.27 0 0 1-.191.077h-.756a.6.6 0 0 0 0-.125V9.37a.6.6 0 0 0 0-.124h.765a.25.25 0 0 1 .182.077c.048.052.076.12.076.19z"></svg:path>`,
})
export class MageRobotAppreciateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotDeadIcon],svg[mage-robot-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1M9.897 9.372l-2.102 2.102m0-2.102l2.102 2.102m4.206-2.102l2.102 2.102m0-2.102l-2.102 2.102M9.899 16.1h4.1"></svg:path></svg:g>`,
})
export class MageRobotDeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotDeadFillIcon],svg[mage-robot-dead-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.618-2.64a.84.84 0 0 1-1.157 0a.82.82 0 0 1 0-1.157l.43-.43l-.43-.43a.813.813 0 0 1 .579-1.385c.216 0 .424.085.578.237l.43.43l.43-.43a.812.812 0 1 1 1.148 1.148l-.43.43l.43.43a.812.812 0 0 1-.573 1.387a.8.8 0 0 1-.574-.23l-.43-.43zm5.355 4.657h-3.92a.813.813 0 1 1 0-1.625h3.92a.813.813 0 1 1 0 1.625m2.687-5.814a.82.82 0 0 1 0 1.157a.84.84 0 0 1-1.157 0l-.43-.43l-.43.43a.8.8 0 0 1-.574.23a.813.813 0 0 1-.574-1.386l.43-.43l-.43-.431a.812.812 0 1 1 1.147-1.148l.43.43l.43-.43a.82.82 0 0 1 1.158 0a.81.81 0 0 1 0 1.148l-.43.43zm4.485 3.529a.3.3 0 0 1-.077.191a.27.27 0 0 1-.191.077h-.756a.6.6 0 0 0 0-.125v-5.22a.6.6 0 0 0 0-.125h.765a.25.25 0 0 1 .182.077c.048.052.076.12.076.19z"></svg:path>`,
})
export class MageRobotDeadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotFillIcon],svg[mage-robot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 0 0-.717-.717a.727.727 0 0 0-.717.717V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.303-3.232V8.902a.813.813 0 1 1 1.616 0v2.582a.813.813 0 1 1-1.616 0m5.737 4.78h-3.92a.812.812 0 1 1 0-1.625h3.92a.813.813 0 0 1 0 1.626m1.788-4.78a.813.813 0 1 1-1.626 0V8.902a.813.813 0 0 1 1.626 0zm5.345 2.964c0 .07-.028.14-.076.191a.27.27 0 0 1-.192.077h-.755a.6.6 0 0 0 0-.125v-5.22a.6.6 0 0 0 0-.125h.765a.25.25 0 0 1 .182.077c.048.052.075.12.076.19z"></svg:path>`,
})
export class MageRobotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotHappyIcon],svg[mage-robot-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1M9.95 15.237a2.91 2.91 0 0 0 4.1 0m-6.17-4.262L8.903 9.95l1.025 1.025m4.102 0l1.025-1.025l1.024 1.025"></svg:path></svg:g>`,
})
export class MageRobotHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotHappyFillIcon],svg[mage-robot-happy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.695-3.118a.813.813 0 0 1-1.386-.578c0-.217.086-.425.238-.579l.956-.956a.813.813 0 0 1 1.148 0l.956.956a.812.812 0 0 1-.574 1.387a.8.8 0 0 1-.573-.23l-.412-.41zm5.9 4.074a3.605 3.605 0 0 1-5.068 0a.813.813 0 0 1 .885-1.326a.8.8 0 0 1 .262.178a2.017 2.017 0 0 0 2.773 0a.804.804 0 0 1 1.148 0a.813.813 0 0 1 0 1.148m1.912-4.074a.813.813 0 0 1-1.148 0l-.41-.41l-.402.41a.82.82 0 0 1-.574.23a.8.8 0 0 1-.574-.23a.82.82 0 0 1 0-1.157l.957-.956a.813.813 0 0 1 1.147 0l.956.956a.82.82 0 0 1 .077 1.157zm4.609 2.869a.3.3 0 0 1-.077.191a.27.27 0 0 1-.191.077h-.755a.6.6 0 0 0 0-.125V9.37a.6.6 0 0 0 0-.124h.765a.25.25 0 0 1 .181.077c.049.052.076.12.077.19z"></svg:path>`,
})
export class MageRobotHappyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotSadIcon],svg[mage-robot-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-12.3 4.45v2.698m6.15-2.698v2.698M9.95 15.588a2.89 2.89 0 0 1 4.1 0"></svg:path></svg:g>`,
})
export class MageRobotSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotSadFillIcon],svg[mage-robot-sad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.303-3.232V8.902a.813.813 0 1 1 1.616 0v2.582a.813.813 0 1 1-1.616 0m6.292 4.522a.8.8 0 0 1-.574.24a.82.82 0 0 1-.574-.24a1.9 1.9 0 0 0-.64-.43a1.91 1.91 0 0 0-2.133.43a.813.813 0 1 1-1.147-1.147c.331-.334.724-.6 1.157-.784a3.58 3.58 0 0 1 3.91.784a.813.813 0 0 1 0 1.147m1.204-4.522a.813.813 0 0 1-1.625 0V8.902a.813.813 0 0 1 1.625 0zm5.345 2.964a.3.3 0 0 1-.076.191a.27.27 0 0 1-.191.077h-.756a.6.6 0 0 0 0-.125v-5.22a.6.6 0 0 0 0-.125h.765a.25.25 0 0 1 .182.077c.048.052.076.12.076.19z"></svg:path>`,
})
export class MageRobotSadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotScreenIcon],svg[mage-robot-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1"></svg:path><svg:path d="M13.507 7.704h-3.014a2.79 2.79 0 0 0-2.789 2.79v3.013a2.79 2.79 0 0 0 2.79 2.789h3.013a2.79 2.79 0 0 0 2.789-2.79v-3.013a2.79 2.79 0 0 0-2.79-2.789Z"></svg:path></svg:g>`,
})
export class MageRobotScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotScreenFillIcon],svg[mage-robot-screen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m12.89-1.272a3.394 3.394 0 0 1-3.386 3.385h-2.868a3.394 3.394 0 0 1-3.385-3.385v-2.869a3.395 3.395 0 0 1 3.385-3.385H13.5a3.395 3.395 0 0 1 3.385 3.385zm4.255.956a.3.3 0 0 1-.077.191a.27.27 0 0 1-.191.077h-.756a.6.6 0 0 0 0-.124V9.37a.6.6 0 0 0 0-.124h.765a.25.25 0 0 1 .182.077c.048.052.076.12.076.19z"></svg:path><svg:path fill="currentColor" d="M13.5 8.605h-2.887a1.95 1.95 0 0 0-1.951 1.951v2.888a1.95 1.95 0 0 0 1.95 1.95H13.5a1.95 1.95 0 0 0 1.951-1.95v-2.888a1.95 1.95 0 0 0-1.95-1.95"></svg:path>`,
})
export class MageRobotScreenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotUwuIcon],svg[mage-robot-uwu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1M14.05 9.704c0 2.296 2.87 2.296 2.87 0m-10.045 0c0 2.296 2.87 2.296 2.87 0m-.328 5.494c0 1.722 2.583 1.302 2.583.39c0 .912 2.583 1.332 2.583-.39"></svg:path></svg:g>`,
})
export class MageRobotUwuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotUwuFillIcon],svg[mage-robot-uwu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m3.07-3.184A2.45 2.45 0 0 1 6.443 9.8a.717.717 0 0 1 .707-.717a.727.727 0 0 1 .727.717c0 .688.344.956.65.956s.66-.249.66-.956a.717.717 0 0 1 1.434 0a2.16 2.16 0 0 1-2.094 2.371a2 2 0 0 1-1.463-.64m7.525 4.962a2.1 2.1 0 0 1-1.291.411a2.5 2.5 0 0 1-1.244-.325a2.41 2.41 0 0 1-2.533-.086a1.78 1.78 0 0 1-.65-1.434a.717.717 0 1 1 1.434 0c0 .239.076.315.22.363a1.03 1.03 0 0 0 .822-.095a.717.717 0 0 1 1.415 0a1.03 1.03 0 0 0 .822.095c.144-.048.22-.124.22-.363a.717.717 0 0 1 1.435 0a1.78 1.78 0 0 1-.65 1.434m.803-4.322a2.05 2.05 0 0 1-1.473-.64A2.45 2.45 0 0 1 13.3 9.8a.717.717 0 1 1 1.434 0c0 .688.354.956.66.956s.65-.249.65-.956a.717.717 0 1 1 1.434 0a2.16 2.16 0 0 1-2.084 2.371m5.737 2.276a.3.3 0 0 1-.076.191a.27.27 0 0 1-.192.077h-.755a.5.5 0 0 0 0-.125V9.37a.5.5 0 0 0 0-.125h.765a.25.25 0 0 1 .181.077c.049.052.076.12.077.19z"></svg:path>`,
})
export class MageRobotUwuFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotWinkIcon],svg[mage-robot-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1m-7.185 6.662h2.049M8.925 9.796v2.05m1.025 3.229a2.91 2.91 0 0 0 4.1 0"></svg:path></svg:g>`,
})
export class MageRobotWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRobotWinkFillIcon],svg[mage-robot-wink-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.312-2.869v-1.96a.813.813 0 1 1 1.616 0v1.96a.813.813 0 1 1-1.616 0m6.283 3.662a3.605 3.605 0 0 1-5.068 0a.813.813 0 0 1 .885-1.326a.8.8 0 0 1 .262.179a2.017 2.017 0 0 0 2.773 0a.804.804 0 0 1 1.148 0a.813.813 0 0 1 0 1.157zm1.367-3.69h-1.913a.812.812 0 0 1-.574-1.385a.8.8 0 0 1 .574-.232h1.913a.805.805 0 0 1 .754 1.117a.81.81 0 0 1-.754.509zm5.182 2.62a.3.3 0 0 1-.076.19a.27.27 0 0 1-.191.077h-.756a.6.6 0 0 0 0-.124V9.37a.6.6 0 0 0 0-.124h.765a.25.25 0 0 1 .182.077c.048.052.076.12.076.19z"></svg:path>`,
})
export class MageRobotWinkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRocketIcon],svg[mage-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 4.527a1.774 1.774 0 0 0-1.81-1.777a6.9 6.9 0 0 0-2.888.61a5.6 5.6 0 0 0-1.471.938l-7.695 7.706a3.27 3.27 0 0 0 0 4.621a3.27 3.27 0 0 0 4.62 0l7.707-7.706a5.6 5.6 0 0 0 .937-1.504a6.9 6.9 0 0 0 .6-2.888"></svg:path><svg:path d="M14.775 4.603a17.3 17.3 0 0 0 4.665 4.622m-9.744.468l-2.43-.49a2.76 2.76 0 0 0-2.464.752L2.917 11.84a.545.545 0 0 0 .381.937h3.27m7.75 1.538l.48 2.42a2.71 2.71 0 0 1-.742 2.463l-1.896 1.896a.545.545 0 0 1-.927-.392v-3.27m-6.169 1.504l6.943-6.932"></svg:path></svg:g>`,
})
export class MageRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRocketFillIcon],svg[mage-rocket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.818 3.55a2.6 2.6 0 0 0-1.394-1.37A2.5 2.5 0 0 0 19.49 2h-.08a7.8 7.8 0 0 0-3.158.68c-.624.268-1.2.636-1.705 1.09l-.27.28l-.07.06l-4.774 4.768l-2.005-.41a3.5 3.5 0 0 0-1.695.09a3.7 3.7 0 0 0-1.454.87l-1.875 1.869a1.3 1.3 0 0 0-.37.66c-.062.253-.04.519.06.76c.099.238.266.443.48.589c.213.144.465.221.723.22h2.476q-.078.39-.08.79a4 4 0 0 0 .692 2.259l-1.845 1.83a.749.749 0 0 0 .532 1.279a.73.73 0 0 0 .53-.22l1.846-1.83a3.94 3.94 0 0 0 2.266.7q.4 0 .792-.08v2.44a1.32 1.32 0 0 0 .792 1.199c.162.069.336.102.512.1q.12.015.24 0a1.36 1.36 0 0 0 .672-.35l1.895-1.9c.412-.4.712-.899.873-1.449a3.45 3.45 0 0 0 .08-1.69l-.401-1.999l4.733-4.718l.21-.2l.21-.21a6.2 6.2 0 0 0 1.003-1.7a7.6 7.6 0 0 0 .672-3.188a2.5 2.5 0 0 0-.18-1.04M7.9 16.094a3 3 0 0 1-.461-.61l4.01-3.998a.753.753 0 0 1 1.284.53c0 .198-.08.389-.22.53l-4.011 3.998a2.4 2.4 0 0 1-.602-.45M20.514 4.539a6.3 6.3 0 0 1-.541 2.59a4.6 4.6 0 0 1-.652 1.089a16.7 16.7 0 0 1-3.56-3.509c.336-.27.707-.492 1.103-.66a6.2 6.2 0 0 1 2.567-.55q.206.01.401.08q.194.076.341.22c.1.092.179.205.23.33q.079.192.081.4z"></svg:path>`,
})
export class MageRocketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRoundStickerIcon],svg[mage-round-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.5 12L12 21.5a9.5 9.5 0 1 1 9.5-9.5"></svg:path><svg:path d="M12 21.5a7.9 7.9 0 0 1-.56-3.272a6.787 6.787 0 0 1 6.788-6.756a8.05 8.05 0 0 1 3.272.56"></svg:path></svg:g>`,
})
export class MageRoundStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageRoundStickerFillIcon],svg[mage-round-sticker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.555 6.305A10.25 10.25 0 1 0 4.093 18.483a10.26 10.26 0 0 0 7.882 3.772c.097 0 .193-.02.28-.06a.7.7 0 0 0 .25-.16l9.5-9.5a.8.8 0 0 0 .21-.39a.6.6 0 0 0 0-.14a10.2 10.2 0 0 0-1.66-5.7m-8.17 13.78a7 7 0 0 1-.17-1.85a6 6 0 0 1 6.07-6a7.2 7.2 0 0 1 1.8.16z"></svg:path>`,
})
export class MageRoundStickerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSaveFloppyIcon],svg[mage-save-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.16v7.987a4.1 4.1 0 0 1-1.204 2.901a4.1 4.1 0 0 1-2.906 1.202H6.86a4.1 4.1 0 0 1-2.906-1.202a4.1 4.1 0 0 1-1.204-2.901V6.853a4.1 4.1 0 0 1 1.204-2.901A4.1 4.1 0 0 1 6.86 2.75h8.35a3 3 0 0 1 2.25.998l3 3.415c.501.545.783 1.256.79 1.997"></svg:path><svg:path d="M7 21.22v-5.241a1.995 1.995 0 0 1 2-1.997h6a2 2 0 0 1 2 1.997v5.241M15.8 2.81v4.183a1.526 1.526 0 0 1-1.52 1.528H9.72A1.53 1.53 0 0 1 8.2 6.993V2.75m1.946 15.108h3.708"></svg:path></svg:g>`,
})
export class MageSaveFloppyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSaveFloppyFillIcon],svg[mage-save-floppy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.01 6.62l-3-3.42a3.8 3.8 0 0 0-1.27-.92a3.4 3.4 0 0 0-.75-.22a.4.4 0 0 0-.19 0c-.2 0-.39-.05-.59-.06H6.86a4.82 4.82 0 0 0-3.44 1.42A4.9 4.9 0 0 0 2 6.85v10.29A4.85 4.85 0 0 0 6.86 22h10.28A4.87 4.87 0 0 0 22 17.14v-8a3.77 3.77 0 0 0-.99-2.52M8.94 3.42h6.1v3.49a.76.76 0 0 1-.23.55a.8.8 0 0 1-.54.24H9.71a.82.82 0 0 1-.55-.24a.8.8 0 0 1-.22-.55zm8.8 16.94q-.301.06-.61.06h-.89V15.9a1.26 1.26 0 0 0-1.25-1.25h-6a1.25 1.25 0 0 0-1.25 1.25v4.52h-.89a4 4 0 0 1-.61 0v-4.47a2.75 2.75 0 0 1 2.75-2.75h6a2.77 2.77 0 0 1 2.75 2.75zm-8.36-2.59a.76.76 0 0 1 .75-.75h3.71a.76.76 0 0 1 .696 1.039a.74.74 0 0 1-.696.461h-3.71a.74.74 0 0 1-.75-.71z"></svg:path>`,
})
export class MageSaveFloppyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScaleDownIcon],svg[mage-scale-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2 19.404V13.8H4.596m14.808-3.6H13.8V4.596M21 3l-7.2 7.2m-3.6 3.6L3 21"></svg:path>`,
})
export class MageScaleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScaleUpIcon],svg[mage-scale-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.396V21h5.604m6.792-18H21v5.604M21 3l-7.2 7.2m-3.6 3.6L3 21"></svg:path>`,
})
export class MageScaleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScanIcon],svg[mage-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.325 8.3V6.45a2.775 2.775 0 0 0-2.775-2.775h-2.775m0 16.65h2.775a2.775 2.775 0 0 0 2.775-2.775V15.7m-16.65 0v1.85a2.775 2.775 0 0 0 2.775 2.775h2.775m0-16.65H6.45A2.775 2.775 0 0 0 3.675 6.45V8.3M2.75 12h18.5"></svg:path>`,
})
export class MageScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScanUserIcon],svg[mage-scan-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 8.814V6.758a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-2.056m-18.5 0v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 6.758v2.056"></svg:path><svg:path d="M18.177 22.175c0-2.92-3.256-5.294-6.177-5.294s-6.176 2.373-6.176 5.294M12 14.234a3.53 3.53 0 1 0 0-7.06a3.53 3.53 0 0 0 0 7.06"></svg:path></svg:g>`,
})
export class MageScanUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScanUserFillIcon],svg[mage-scan-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.221 8.623a.75.75 0 0 1-.749-.748V5.83a2.333 2.333 0 0 0-2.326-2.334H15.1A.75.75 0 1 1 15.1 2h3.076a3.83 3.83 0 0 1 2.706 1.127A3.75 3.75 0 0 1 22 5.83v2.045a.74.74 0 0 1-.779.748m-18.472 0A.75.75 0 0 1 2 7.875V5.83a3.76 3.76 0 0 1 1.118-2.703A3.82 3.82 0 0 1 5.824 2H8.9a.75.75 0 1 1 0 1.496H5.824A2.36 2.36 0 0 0 3.488 5.83v2.045a.74.74 0 0 1-.739.748m19.231 7.452v2.105a3.8 3.8 0 0 1-1.128 2.703A3.88 3.88 0 0 1 18.166 22H5.814a3.88 3.88 0 0 1-2.696-1.167A3.83 3.83 0 0 1 2.01 18.18v-2.105a.748.748 0 0 1 1.498 0v2.105a2.31 2.31 0 0 0 1.607 2.174c.55-2.992 3.905-5.187 6.84-5.187s6.28 2.205 6.83 5.187a2.3 2.3 0 0 0 .998-.578a2.33 2.33 0 0 0 .69-1.646v-2.055a.748.748 0 0 1 1.497 0zm-6.1-6.315a3.89 3.89 0 0 1-2.4 3.603a3.897 3.897 0 0 1-5.315-2.836a3.89 3.89 0 0 1 1.663-3.995a3.9 3.9 0 0 1 4.91.488a3.9 3.9 0 0 1 1.141 2.74"></svg:path>`,
})
export class MageScanUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScreencastIcon],svg[mage-screencast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.6 20.325a1.85 1.85 0 0 0-1.85-1.85m4.815 1.85A4.815 4.815 0 0 0 2.75 15.51m7.949 4.815a7.95 7.95 0 0 0-7.949-7.949"></svg:path><svg:path d="M13.925 20.325h3.625a3.7 3.7 0 0 0 3.7-3.7v-9.25a3.7 3.7 0 0 0-3.7-3.7H6.45a3.7 3.7 0 0 0-3.7 3.7V9.15"></svg:path></svg:g>`,
})
export class MageScreencastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageScreencastFillIcon],svg[mage-screencast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="mageScreencastFill0" fill="currentColor" d="M10.691 21.07a.74.74 0 0 1-.749-.748a7.193 7.193 0 0 0-7.193-7.193a.75.75 0 1 1 0-1.499a8.7 8.7 0 0 1 8.692 8.692a.75.75 0 0 1-.75.749"></svg:path></svg:defs><svg:path fill="currentColor" d="M4.597 21.071a.74.74 0 0 1-.749-.75a1.11 1.11 0 0 0-1.099-1.098a.75.75 0 1 1 0-1.499a2.607 2.607 0 0 1 2.598 2.598a.75.75 0 0 1-.75.749"></svg:path><svg:path fill="currentColor" d="M7.554 21.07a.75.75 0 0 1-.749-.748a4.066 4.066 0 0 0-4.056-4.056a.75.75 0 1 1 0-1.499c.73 0 1.453.142 2.128.42a5.63 5.63 0 0 1 2.997 2.997c.278.675.42 1.398.42 2.128a.74.74 0 0 1-.74.759"></svg:path><svg:use href="#mageScreencastFill0"></svg:use><svg:path fill="currentColor" d="M21.98 7.375v9.24a4.455 4.455 0 0 1-4.445 4.446h-3.627a.74.74 0 0 1-.74-.84a10 10 0 0 0-2.996-7.672a8.37 8.37 0 0 0-7.253-2.667a.73.73 0 0 1-.62-.15a.74.74 0 0 1-.28-.58V7.376A4.456 4.456 0 0 1 6.466 2.93h11.089A4.465 4.465 0 0 1 22 7.375z"></svg:path><svg:use href="#mageScreencastFill0"></svg:use>`,
})
export class MageScreencastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSearchIcon],svg[mage-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"></svg:path>`,
})
export class MageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSearchFillIcon],svg[mage-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.78 21.79a.82.82 0 0 1-.53.21a.8.8 0 0 1-.53-.21l-4.273-4.28a7 7 0 0 1-.78.59a8.84 8.84 0 0 1-4.883 1.48a8.7 8.7 0 0 1-3.372-.67A8.5 8.5 0 0 1 4.57 17A8.788 8.788 0 0 1 7.04 2.842a8.8 8.8 0 0 1 5.475-.672a8.79 8.79 0 0 1 6.05 4.482a8.78 8.78 0 0 1 .354 7.518a8.5 8.5 0 0 1-1.401 2.29l4.272 4.28a.75.75 0 0 1-.01 1.05"></svg:path>`,
})
export class MageSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSearchSquareIcon],svg[mage-search-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.82 15.857a5.038 5.038 0 1 0 0-10.076a5.038 5.038 0 0 0 0 10.076m3.575-1.462l3.197 3.197"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageSearchSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSearchSquareFillIcon],svg[mage-search-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2 14.94a.78.78 0 0 1-.57.23a.8.8 0 0 1-.56-.23l-2-2a4.81 4.81 0 1 1 1.13-1.13l2 2a.79.79 0 0 1 .01 1.13z"></svg:path><svg:path fill="currentColor" d="M14.5 11a3.21 3.21 0 1 1-6.418 0a3.21 3.21 0 0 1 6.418 0"></svg:path>`,
})
export class MageSearchSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSecurityShieldIcon],svg[mage-security-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 11.543A2.17 2.17 0 1 0 12 7.2a2.17 2.17 0 0 0 0 4.342m0 .001v3.256"></svg:path><svg:path d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageSecurityShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSecurityShieldFillIcon],svg[mage-security-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.872 5.05a2.82 2.82 0 0 0-1.402-1.026l-4.801-1.6a8.68 8.68 0 0 0-5.357 0l-4.8 1.6A2.82 2.82 0 0 0 3.117 5.05a2.82 2.82 0 0 0-.536 1.657v5.158a8.47 8.47 0 0 0 3.972 7.22l3.954 2.486a2.82 2.82 0 0 0 2.993 0l3.954-2.485a8.47 8.47 0 0 0 3.963-7.174V6.754a2.82 2.82 0 0 0-.546-1.704m-7.935 7.286v2.269a.941.941 0 0 1-1.883 0v-2.269a2.984 2.984 0 1 1 1.883 0"></svg:path><svg:path fill="currentColor" d="M13.101 9.502a1.101 1.101 0 1 1-2.202 0a1.101 1.101 0 0 1 2.202 0"></svg:path>`,
})
export class MageSecurityShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSelectBoxIcon],svg[mage-select-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.75 6.861c0-3.402.71-4.111 4.111-4.111M2.75 14.056V9.944M6.861 21.25c-3.402 0-4.111-.71-4.111-4.111m11.306 4.111H9.944m11.306-4.111c0 3.402-.71 4.111-4.111 4.111M21.25 9.944v4.112M17.139 2.75c3.402 0 4.111.71 4.111 4.111M9.944 2.75h4.112"></svg:path>`,
})
export class MageSelectBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageServerIcon],svg[mage-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.002 5.127l.011 5.715a1.15 1.15 0 0 0 1.155 1.15l15.68-.03a1.15 1.15 0 0 0 1.15-1.155l-.011-5.714a1.15 1.15 0 0 0-1.154-1.15l-15.68.03a1.15 1.15 0 0 0-1.15 1.154m14.548 2.835h-3.018m-10.37 4.032c-.636 0-1.152.516-1.152 1.152v5.761c0 .636.516 1.152 1.152 1.152h15.68c.637 0 1.153-.516 1.153-1.152v-5.76c0-.637-.516-1.153-1.152-1.153m-2.293 4.033h-3.018"></svg:path>`,
})
export class MageServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageServer2Icon],svg[mage-server-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.159 9.134c-.637 0-1.152.516-1.152 1.152v3.456c0 .636.515 1.152 1.152 1.152h15.678c.636 0 1.152-.515 1.152-1.152v-3.456c0-.636-.516-1.152-1.152-1.152m-2.293 2.88h-3.018"></svg:path><svg:path d="m3.004 4.554l.01 3.456c.002.636.52 1.15 1.156 1.149l15.678-.05a1.15 1.15 0 0 0 1.148-1.155l-.01-3.456A1.15 1.15 0 0 0 19.83 3.35l-15.678.049c-.636.002-1.15.52-1.148 1.155m14.54 1.689h-3.018M4.159 14.894c-.637 0-1.152.516-1.152 1.152v3.456c0 .636.515 1.152 1.152 1.152h15.678c.636 0 1.152-.516 1.152-1.152v-3.456c0-.636-.516-1.152-1.152-1.152m-2.293 2.88h-3.018"></svg:path></svg:g>`,
})
export class MageServer2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageServer2FillIcon],svg[mage-server-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.53 13.04h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M21.73 7.98V4.52a1.86 1.86 0 0 0-.56-1.34a1.9 1.9 0 0 0-1.34-.56H4.15a1.88 1.88 0 0 0-1.34.56a1.86 1.86 0 0 0-.55 1.31v3.5a1.87 1.87 0 0 1 0 2.27v3.46a1.85 1.85 0 0 1 0 2.3v3.46a1.91 1.91 0 0 0 1.9 1.9h15.68a1.91 1.91 0 0 0 1.9-1.9v-3.46a1.85 1.85 0 0 1 0-2.3v-3.41a1.82 1.82 0 0 0-.41-1.16a1.84 1.84 0 0 0 .4-1.17m-7.22-2.71h3a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2m3 13.53h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2m2.69-5a.4.4 0 0 1-.4.4H4.14a.4.4 0 0 1-.4-.4v-3.49a.39.39 0 0 1 .34-.39h.07l15.49-.05h.18a.4.4 0 0 1 .4.4z"></svg:path>`,
})
export class MageServer2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageServerFillIcon],svg[mage-server-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.735 10.82V5.11a1.89 1.89 0 0 0-1.9-1.9H4.155a1.86 1.86 0 0 0-1.34.56a1.9 1.9 0 0 0-.56 1.34v5.72c.001.417.142.822.4 1.15a1.8 1.8 0 0 0-.4 1.15v5.76a1.9 1.9 0 0 0 1.9 1.9h15.68a1.91 1.91 0 0 0 1.91-1.9v-5.76a1.87 1.87 0 0 1 0-2.34zm-4.2 6.22h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2m0-8.06h-3a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageServerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSettingsIcon],svg[mage-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.132 15.404a3.364 3.364 0 1 0 0-6.728a3.364 3.364 0 0 0 0 6.728"></svg:path><svg:path d="M20.983 15.094a9.4 9.4 0 0 1-1.802 3.1l-2.124-.482a7.25 7.25 0 0 1-2.801 1.56l-.574 2.079a9.5 9.5 0 0 1-1.63.149a9 9 0 0 1-2.032-.23l-.609-2.146a7.5 7.5 0 0 1-2.457-1.493l-2.1.54a9.4 9.4 0 0 1-1.837-3.33l1.55-1.722a7.2 7.2 0 0 1 .069-2.652L3.107 8.872a9.4 9.4 0 0 1 2.067-3.353l2.17.54A7.7 7.7 0 0 1 9.319 4.91l.574-2.124a9 9 0 0 1 2.17-.287c.585 0 1.17.054 1.745.16l.551 2.113c.83.269 1.608.68 2.296 1.217l2.182-.563a9.4 9.4 0 0 1 2.043 3.1l-1.48 1.607a7.4 7.4 0 0 1 .068 3.364z"></svg:path></svg:g>`,
})
export class MageSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSettingsFillIcon],svg[mage-settings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.51 14.59l-1.25-1.32a7.9 7.9 0 0 0-.06-2.9l1.22-1.32a.76.76 0 0 0 .14-.79a10.3 10.3 0 0 0-2.2-3.35a.74.74 0 0 0-.72-.19l-1.84.47a8.5 8.5 0 0 0-1.83-1l-.45-1.72a.73.73 0 0 0-.59-.55a10 10 0 0 0-1.89-.17a9.4 9.4 0 0 0-2.35.31a.73.73 0 0 0-.53.53l-.48 1.77a8.2 8.2 0 0 0-1.52.88l-1.82-.45a.73.73 0 0 0-.72.21a10 10 0 0 0-2.23 3.62a.76.76 0 0 0 .16.77l1.26 1.31q-.096.631-.1 1.27c0 .3 0 .6.05.9l-1.31 1.46a.75.75 0 0 0-.16.73a10 10 0 0 0 2 3.59a.75.75 0 0 0 .76.24l1.72-.44a8 8 0 0 0 2 1.23l.5 1.79a.77.77 0 0 0 .56.53c.721.163 1.459.247 2.2.25q.886-.01 1.76-.17a.75.75 0 0 0 .59-.53l.47-1.69a8.1 8.1 0 0 0 2.38-1.34l1.76.4a.74.74 0 0 0 .73-.24a10.1 10.1 0 0 0 2-3.34a.76.76 0 0 0-.21-.75m-9.39 1.27a3.81 3.81 0 1 1-.021-7.619a3.81 3.81 0 0 1 .02 7.62"></svg:path>`,
})
export class MageSettingsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShareIcon],svg[mage-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.015 15.809a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m11.97-6.529a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m0 11.97a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m-2.971-4.614l-6.028-2.742m6.126-6.312l-6.224 3.395"></svg:path>`,
})
export class MageShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShareFillIcon],svg[mage-share-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.96 17.977a4 4 0 1 1-7.94-.7l-4.9-2.22a4 4 0 0 1-3.11 1.49a4 4 0 1 1 0-8a4 4 0 0 1 2.92 1.28l5.16-2.8a3.6 3.6 0 0 1-.13-1a4 4 0 1 1 1.09 2.74l-5.16 2.81q.135.491.13 1a4 4 0 0 1-.06.7l4.9 2.22a4 4 0 0 1 7.13 2.52z"></svg:path>`,
})
export class MageShareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldCheckIcon],svg[mage-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.67 10.909l1.875 1.874a.71.71 0 0 0 1.008 0l3.777-3.777"></svg:path><svg:path d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShieldCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldCheckFillIcon],svg[mage-shield-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 5.037a2.63 2.63 0 0 0-1.314-.966l-4.939-1.643a8.56 8.56 0 0 0-5.344 0L4.393 4.07a2.66 2.66 0 0 0-1.816 2.522v5.297a8.5 8.5 0 0 0 1.053 4.088a8.4 8.4 0 0 0 2.9 3.064l4.059 2.561a2.71 2.71 0 0 0 2.822 0l4.06-2.561a8.44 8.44 0 0 0 3.952-7.152V6.593a2.65 2.65 0 0 0-.502-1.556m-5.025 4.755l-3.673 3.644a1.8 1.8 0 0 1-.531.367c-.204.08-.42.123-.638.126a1.8 1.8 0 0 1-.638-.126a1.7 1.7 0 0 1-.541-.367L8.066 11.63a.966.966 0 1 1 1.373-1.363l1.614 1.614l3.45-3.46a.967.967 0 0 1 1.363 1.372z"></svg:path>`,
})
export class MageShieldCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldCrossIcon],svg[mage-shield-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m14.51 8.485l-5.02 5.019m0-5.008l5.02 5.019"></svg:path><svg:path stroke-linejoin="round" d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShieldCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldCrossFillIcon],svg[mage-shield-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 5.037a2.63 2.63 0 0 0-1.314-.966l-4.939-1.643a8.56 8.56 0 0 0-5.344 0L4.393 4.07a2.66 2.66 0 0 0-1.816 2.522v5.297a8.5 8.5 0 0 0 1.053 4.088a8.4 8.4 0 0 0 2.9 3.064l4.059 2.561a2.71 2.71 0 0 0 2.822 0l4.06-2.561a8.44 8.44 0 0 0 3.952-7.152V6.593a2.65 2.65 0 0 0-.502-1.556m-5.798 7.732a.967.967 0 1 1-1.363 1.373l-1.75-1.75l-1.73 1.74a.97.97 0 0 1-.686.28a.967.967 0 0 1-.686-1.653l1.74-1.73l-1.74-1.74a.97.97 0 0 1 1.373-1.372l1.73 1.74l1.749-1.75a.966.966 0 1 1 1.363 1.373l-1.74 1.75z"></svg:path>`,
})
export class MageShieldCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldPlusIcon],svg[mage-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M11.992 7.451v7.098m-3.541-3.541h7.098"></svg:path><svg:path stroke-linejoin="round" d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShieldPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldPlusFillIcon],svg[mage-shield-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 5.037a2.63 2.63 0 0 0-1.314-.966l-4.939-1.643a8.56 8.56 0 0 0-5.344 0L4.393 4.07a2.66 2.66 0 0 0-1.816 2.522v5.297a8.44 8.44 0 0 0 3.953 7.152l4.059 2.561a2.71 2.71 0 0 0 2.822 0l4.06-2.561a8.44 8.44 0 0 0 3.952-7.152V6.593a2.65 2.65 0 0 0-.502-1.556m-5.489 6.969h-2.474v2.464a.966.966 0 1 1-1.933 0v-2.455H8.569a.967.967 0 0 1 0-1.933h2.455V7.608a.967.967 0 0 1 1.933 0v2.465h2.474a.966.966 0 0 1 0 1.933"></svg:path>`,
})
export class MageShieldPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldQuestionMarkIcon],svg[mage-shield-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M10.278 8.634a1.83 1.83 0 0 1 1.994-1.037a1.77 1.77 0 0 1 1.301.927a1.542 1.542 0 0 1-.897 2.119a1.14 1.14 0 0 0-.733 1.027v.423"></svg:path><svg:path stroke-linejoin="round" d="M11.91 14.433h.005m8.757-2.543V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShieldQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShieldQuestionMarkFillIcon],svg[mage-shield-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 5.037a2.63 2.63 0 0 0-1.314-.966l-4.939-1.643a8.56 8.56 0 0 0-5.344 0L4.393 4.07a2.66 2.66 0 0 0-1.816 2.522v5.297a8.44 8.44 0 0 0 3.953 7.152l4.059 2.561a2.71 2.71 0 0 0 2.822 0l4.06-2.561a8.44 8.44 0 0 0 3.952-7.152V6.593a2.65 2.65 0 0 0-.502-1.556m-9.007 10.448a.967.967 0 1 1 .01 0zm2.523-5.248a2.45 2.45 0 0 1-.59.84a2.5 2.5 0 0 1-.89.532v.484a.967.967 0 1 1-1.932 0v-.416a2.09 2.09 0 0 1 1.334-1.933a.45.45 0 0 0 .222-.126a.6.6 0 0 0 .126-.174a.6.6 0 0 0 0-.212a.5.5 0 0 0 0-.213a.66.66 0 0 0-.213-.222a.67.67 0 0 0-.32-.135a.8.8 0 0 0-.908.454a.967.967 0 0 1-1.582.252a.97.97 0 0 1-.167-1.064a2.716 2.716 0 0 1 2.977-1.546c.405.065.788.224 1.121.464c.344.255.625.585.822.966c.155.327.24.682.25 1.044c-.007.348-.09.691-.24 1.005z"></svg:path>`,
})
export class MageShieldQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShiledMinusIcon],svg[mage-shiled-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M8.451 11h7.098"></svg:path><svg:path stroke-linejoin="round" d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageShiledMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShiledMinusFillIcon],svg[mage-shiled-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 5.037a2.63 2.63 0 0 0-1.314-.966l-4.939-1.643a8.56 8.56 0 0 0-5.344 0L4.393 4.07a2.66 2.66 0 0 0-1.816 2.522v5.297a8.44 8.44 0 0 0 3.953 7.152l4.059 2.561a2.71 2.71 0 0 0 2.822 0l4.06-2.561a8.44 8.44 0 0 0 3.952-7.152V6.593a2.65 2.65 0 0 0-.502-1.556m-5.489 6.959H8.57a.966.966 0 1 1 0-1.933h6.862a.967.967 0 0 1 0 1.933"></svg:path>`,
})
export class MageShiledMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShopIcon],svg[mage-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.944a3.08 3.08 0 0 1-2.056 2.899a2.9 2.9 0 0 1-1.027.185a3.08 3.08 0 0 1-2.899-2.056a2.9 2.9 0 0 1-.185-1.028c.003.351-.06.7-.185 1.028A3.08 3.08 0 0 1 12 13.028a3.08 3.08 0 0 1-2.898-2.056a2.9 2.9 0 0 1-.185-1.028c.002.351-.06.7-.185 1.028a3.08 3.08 0 0 1-2.899 2.056c-.35.002-.7-.06-1.027-.185A3.08 3.08 0 0 1 2.75 9.944l.462-1.623l1.11-3.166a2.06 2.06 0 0 1 1.943-1.377h11.47a2.06 2.06 0 0 1 1.942 1.377l1.11 3.166z"></svg:path><svg:path d="M19.194 12.843v5.324a2.056 2.056 0 0 1-2.055 2.055H6.86a2.055 2.055 0 0 1-2.056-2.055v-5.324m4.113 4.296h6.166"></svg:path></svg:g>`,
})
export class MageShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShopFillIcon],svg[mage-shop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.914 9.73l-.48-1.66l-1.11-3.17a2.8 2.8 0 0 0-1-1.36a2.74 2.74 0 0 0-1.62-.52H6.234a2.8 2.8 0 0 0-2.65 1.88l-1.13 3.21l-.46 1.62a.8.8 0 0 0 0 .21a3.85 3.85 0 0 0 2.06 3.39v4.83a2.8 2.8 0 0 0 .82 2a2.84 2.84 0 0 0 2 .82h10.28a2.8 2.8 0 0 0 2.81-2.81v-4.83a3.74 3.74 0 0 0 1.35-1.18a3.8 3.8 0 0 0 .7-2.21a1.5 1.5 0 0 0-.1-.22m-6.89 8.4h-6.17a1 1 0 1 1 0-2h6.17a1 1 0 0 1 0 2m5-6.85c-.282.399-.68.7-1.14.86a2.3 2.3 0 0 1-2.08-.31a2.34 2.34 0 0 1-.99-1.86a.75.75 0 1 0-1.5 0v.05a2.4 2.4 0 0 1-.14.74a2.4 2.4 0 0 1-.86 1.12a2.27 2.27 0 0 1-1.33.43a2.32 2.32 0 0 1-2.2-1.57a2 2 0 0 1-.14-.73a.75.75 0 0 0-1.5 0a2.36 2.36 0 0 1-.99 1.87a2.33 2.33 0 0 1-1.35.43a2.6 2.6 0 0 1-.77-.14a2.28 2.28 0 0 1-1.13-.85a2.33 2.33 0 0 1-.42-1.24l.41-1.48l1.11-3.16a1.31 1.31 0 0 1 1.24-.88h11.47c.27.004.535.088.76.24c.219.16.383.383.47.64l1.1 3.12l.43 1.52a2.35 2.35 0 0 1-.47 1.2z"></svg:path>`,
})
export class MageShopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShoppingBagIcon],svg[mage-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.484 6.219v12.14a2.89 2.89 0 0 0 2.891 2.891h9.25a2.89 2.89 0 0 0 2.89-2.89V6.218"></svg:path><svg:path d="m19.516 6.219l-3.134-3.134a1.16 1.16 0 0 0-.82-.335H8.438a1.16 1.16 0 0 0-.821.335L4.484 6.22zM8.531 9.688l.359.705A2.89 2.89 0 0 0 11.48 12h1.04a2.89 2.89 0 0 0 2.59-1.607l.359-.705"></svg:path></svg:g>`,
})
export class MageShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShoppingBagFillIcon],svg[mage-shopping-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.165 6.041a.3.3 0 0 0 0-.1a.4.4 0 0 0 0-.09a.7.7 0 0 0-.12-.17l-3.14-3.13a1.8 1.8 0 0 0-.62-.41a1.5 1.5 0 0 0-.73-.14h-7.12a1.9 1.9 0 0 0-.73.14a1.8 1.8 0 0 0-.62.41l-3.13 3.13a.78.78 0 0 0-.22.52v12.15a3.64 3.64 0 0 0 3.64 3.65h9.25a3.65 3.65 0 0 0 3.64-3.65V6.192a.8.8 0 0 0-.1-.15m-3.89 4.08l-.36.7a3.91 3.91 0 0 1-3.48 2.16h-1a3.9 3.9 0 0 1-2-.59a3.83 3.83 0 0 1-1.43-1.58l-.36-.69a1 1 0 1 1 1.78-.91l.36.71a1.91 1.91 0 0 0 1.7 1.06h1a1.91 1.91 0 0 0 1.7-1.06l.36-.71a1.001 1.001 0 1 1 1.78.91zm-10.06-4.68l1.85-1.85a.4.4 0 0 1 .13-.08a.7.7 0 0 1 .16 0h7.28a.4.4 0 0 1 .13.08l1.86 1.85z"></svg:path>`,
})
export class MageShoppingBagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShoppingCartIcon],svg[mage-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2.5" d="M7.537 21.25h.01m10.391 0h.011"></svg:path><svg:path stroke-width="1.5" d="M4.628 6.526h13.097a4 4 0 0 1 1.543.237A1.73 1.73 0 0 1 20.29 7.88a3.7 3.7 0 0 1-.213 1.686c-.131.57-.25 1.188-.369 1.71a95 95 0 0 0-.736 3.562a2.9 2.9 0 0 1-.629 1.567a2.24 2.24 0 0 1-1.686.582H9.805a8.6 8.6 0 0 1-1.662 0a1.64 1.64 0 0 1-1.33-.985a17 17 0 0 1-.463-2.019c-.095-.534-.214-1.068-.332-1.603c-.416-1.983-.89-3.942-1.39-5.853m0 0C4.32 5.267 4 4.009 3.69 2.75M19.553 12H5.934"></svg:path></svg:g>`,
})
export class MageShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShoppingCartFillIcon],svg[mage-shopping-cart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.548 22.253a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m10.4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.08-14.7a.7.7 0 0 0 0-.14a2.48 2.48 0 0 0-1.49-1.61a4.7 4.7 0 0 0-1.8-.28H5.228l-.79-3.2a.75.75 0 1 0-1.46.35l.94 3.78c.52 2 .94 3.76 1.3 5.43c0 .14 0 .27.08.4c.12.52.24 1.05.33 1.56q.18 1.111.51 2.19c.163.396.429.741.77 1a2.5 2.5 0 0 0 1.18.46h.91q.41.022.82 0h6.73a3.06 3.06 0 0 0 2.26-.78l.08-.08a3.67 3.67 0 0 0 .78-1.9c.16-.93.37-1.88.56-2.77a.4.4 0 0 0 0-.11c.06-.22.1-.44.15-.65s.11-.52.17-.79s.13-.62.17-.83a4.5 4.5 0 0 0 .31-2.03m-2.81 7a2.06 2.06 0 0 1-.43 1.11a1.4 1.4 0 0 1-.48.28a1.7 1.7 0 0 1-.66.07h-6.92a8.5 8.5 0 0 1-1.51 0a1 1 0 0 1-.43-.17a.9.9 0 0 1-.26-.29a15 15 0 0 1-.44-1.93c-.07-.37-.15-.74-.22-1.11h11.75c-.14.63-.28 1.31-.4 2.01z"></svg:path>`,
})
export class MageShoppingCartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShutDownIcon],svg[mage-shut-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.743 7.42a5.078 5.078 0 1 0 4.514 0M12 6.362v4.514"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageShutDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageShutDownFillIcon],svg[mage-shut-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m-.75 4.62a.75.75 0 0 1 1.5 0v4.51a.75.75 0 0 1-1.5 0zm6.42 6.93a5.82 5.82 0 1 1-8.26-6.55a.751.751 0 0 1 .66 1.35a4.3 4.3 0 0 0-2.28 4.86a4.3 4.3 0 0 0 1.52 2.4a4.44 4.44 0 0 0 5.38 0a4.33 4.33 0 0 0-.77-7.26a.753.753 0 1 1 .67-1.35a5.88 5.88 0 0 1 2.68 2.74a5.82 5.82 0 0 1 .36 3.81z"></svg:path>`,
})
export class MageShutDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSimCardIcon],svg[mage-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.444 10.586v6.692a4.22 4.22 0 0 1-4.222 4.222H7.778a4.22 4.22 0 0 1-4.222-4.222V6.722A4.22 4.22 0 0 1 7.778 2.5h4.58a4.22 4.22 0 0 1 2.988 1.235l3.863 3.863a4.22 4.22 0 0 1 1.235 2.988"></svg:path><svg:path d="M15.167 9.889H8.833A2.11 2.11 0 0 0 6.723 12v4.222a2.11 2.11 0 0 0 2.11 2.111h6.334a2.11 2.11 0 0 0 2.11-2.11V12a2.11 2.11 0 0 0-2.11-2.111m-3.167 0v8.444m-5.278-4.222h10.556"></svg:path></svg:g>`,
})
export class MageSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSimCardFillIcon],svg[mage-sim-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.794 8.663a5 5 0 0 0-1.068-1.616l-3.86-3.85a5 5 0 0 0-1.606-1.078a5 5 0 0 0-1.896-.369H7.785a4.99 4.99 0 0 0-4.988 4.988v10.524a4.99 4.99 0 0 0 4.988 4.988h8.43a4.99 4.99 0 0 0 4.988-4.988V10.56a4.8 4.8 0 0 0-.41-1.896m-9.537 8.878H8.843a1.357 1.357 0 0 1-1.357-1.356v-1.357h3.77zm0-4.21h-3.77v-1.356a1.357 1.357 0 0 1 1.356-1.357h2.414zm5.257 2.854a1.357 1.357 0 0 1-1.357 1.357h-2.404v-2.714h3.761zm0-2.853h-3.76v-2.714h2.403a1.357 1.357 0 0 1 1.357 1.357z"></svg:path>`,
})
export class MageSimCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSlackIcon],svg[mage-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.923 16.52h-2.39a1.98 1.98 0 0 1-1.973-1.195a2.01 2.01 0 0 1 .47-2.263a2 2 0 0 1 1.502-.53h4.858a1.98 1.98 0 0 1 1.969 1.63a1.95 1.95 0 0 1-1.147 2.173a2.2 2.2 0 0 1-.876.174c-.8.022-1.601.01-2.413.01m-9.435.501v-2.477a2 2 0 0 1 .56-1.402a2 2 0 0 1 1.377-.608a1.94 1.94 0 0 1 1.393.522c.377.352.6.84.62 1.357q.064 2.608 0 5.215A1.94 1.94 0 0 1 10.805 21a1.92 1.92 0 0 1-1.423.495a1.95 1.95 0 0 1-1.359-.614a1.97 1.97 0 0 1-.535-1.395c-.01-.815 0-1.64 0-2.466m8.938-9.963v2.434a2 2 0 0 1-.524 1.5a1.98 1.98 0 0 1-2.242.469a1.98 1.98 0 0 1-1.078-1.165a2 2 0 0 1-.106-.804V4.46a1.96 1.96 0 0 1 .605-1.386a1.95 1.95 0 0 1 1.408-.537a1.96 1.96 0 0 1 1.383.602a1.98 1.98 0 0 1 .553 1.408c.011.836 0 1.673 0 2.51M6.97 11.511H4.545a1.96 1.96 0 0 1-1.393-.579a1.98 1.98 0 0 1-.427-2.155a1.98 1.98 0 0 1 1.066-1.07a2 2 0 0 1 .754-.15h4.923a1.96 1.96 0 0 1 1.392.579a1.98 1.98 0 0 1-1.392 3.375zm4.478-6.171v.902c0 .18-.06.261-.216.261H9.165A1.92 1.92 0 0 1 7.9 5.787a1.93 1.93 0 0 1-.4-1.402c.022-.492.227-.958.574-1.306a1.965 1.965 0 0 1 3.342 1.12c.032.38.032.487.032.832zm-5.009 7.203q.09 1.221 0 2.444a1.9 1.9 0 0 1-.754 1.18a1.9 1.9 0 0 1-1.356.34a2 2 0 0 1-1.293-.627a2 2 0 0 1-.536-1.338a1.96 1.96 0 0 1 .497-1.346c.33-.369.786-.599 1.278-.643c.736-.065 1.471-.01 2.164-.01M17.443 11.5V9.329c.052-.509.299-.977.689-1.305c.39-.329.891-.492 1.399-.455c.522 0 1.023.208 1.392.579a1.98 1.98 0 0 1 0 2.796c-.37.371-.87.58-1.392.58c-.671 0-1.363-.022-2.088-.022m-4.967 6.072q1.202-.082 2.402 0c.488.09.92.367 1.208.773c.286.406.405.908.329 1.4a2 2 0 0 1-.67 1.264a1.98 1.98 0 0 1-1.343.485a1.92 1.92 0 0 1-1.314-.528a1.94 1.94 0 0 1-.6-1.287c-.044-.695-.012-1.401-.012-2.107"></svg:path>`,
})
export class MageSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSnapchatIcon],svg[mage-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.74 5.457a3.4 3.4 0 0 0 0-.55A3.09 3.09 0 0 0 18.6 2.25H5.42q-.46.011-.906.128a3.08 3.08 0 0 0-2.264 3.06v13.075q-.005.403.079.797a3.1 3.1 0 0 0 3.14 2.44H18.53a3.4 3.4 0 0 0 1.142-.187a3.03 3.03 0 0 0 2.067-2.951c.01-4.418 0-8.786 0-13.155m-3.326 10.914c-.314.18-.536.24-.877.361a.46.46 0 0 0-.315.276a1.07 1.07 0 0 1-.984.708l-.817.05a2.84 2.84 0 0 0-1.24.491a3.84 3.84 0 0 1-3.672.305a3 3 0 0 1-.64-.344a2.95 2.95 0 0 0-1.693-.492a2.5 2.5 0 0 1-.542-.05a.99.99 0 0 1-.777-.648a.44.44 0 0 0-.345-.305a2.6 2.6 0 0 1-1.142-.581a.876.876 0 0 1 .197-1.505c.355-.207.709-.404 1.044-.64c.41-.297.747-.684.984-1.131c.148-.295.138-.325-.128-.502a8 8 0 0 1-.807-.59a1.17 1.17 0 0 1-.364-1.28a1.22 1.22 0 0 1 1.437-.855h.187a4.11 4.11 0 0 1 1.26-3.542a4.2 4.2 0 0 1 2.815-.984a4.17 4.17 0 0 1 3.18 1.318a4.3 4.3 0 0 1 .984 3.267q.335-.03.67 0a1.14 1.14 0 0 1 .984.866a1.2 1.2 0 0 1-.374 1.25a9 9 0 0 1-.847.629c-.226.147-.236.177-.118.423a3.9 3.9 0 0 0 1.585 1.574l.433.236a.905.905 0 0 1 .03 1.633z"></svg:path><svg:path fill="currentColor" d="M17.832 15.316c0 .068-.098.167-.177.196c-.315.128-.63.256-.984.355a.54.54 0 0 0-.463.521a.296.296 0 0 1-.315.295l-.984.069c-.503.084-.98.279-1.398.57a2.9 2.9 0 0 1-3.258-.058a3.6 3.6 0 0 0-1.969-.561h-.05c-.383 0-.432-.06-.491-.433a.38.38 0 0 0-.256-.335c-.168-.068-.335-.108-.502-.177c-.168-.068-.433-.157-.64-.255c-.207-.099-.187-.119-.187-.197s.098-.148.177-.187a5.2 5.2 0 0 0 1.723-1.309c.3-.36.52-.779.65-1.23a.42.42 0 0 0-.168-.53c-.266-.178-.541-.355-.797-.542a2.4 2.4 0 0 1-.374-.325a.4.4 0 0 1 0-.462a.354.354 0 0 1 .393-.187q.305.064.6.157l.13.03l.133.056c.276.099.27-.036.26-.322a14 14 0 0 1 0-1.918a2.68 2.68 0 0 1 1.88-2.214a3.45 3.45 0 0 1 2.598.069a2.765 2.765 0 0 1 1.782 2.656v1.575c0 .255.05.285.276.206l.669-.226a.7.7 0 0 1 .256 0a.39.39 0 0 1 .374.197a.364.364 0 0 1 0 .442a2.3 2.3 0 0 1-.364.335c-.227.157-.463.295-.7.453c-.235.157-.373.344-.245.728a3.6 3.6 0 0 0 1.27 1.77c.315.246.506.347.862.59c.151.102.3.129.29.198"></svg:path>`,
})
export class MageSnapchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSoundWavesIcon],svg[mage-sound-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 9.938v4.124m3.7-7.217v10.31m3.7-13.918v17.526m3.7-13.631v9.736m3.7-7.302v4.868m3.7-3.465v2.062"></svg:path>`,
})
export class MageSoundWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSpotifyIcon],svg[mage-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.053 2A10 10 0 1 0 22 12.053A10.01 10.01 0 0 0 12.053 2m3.892 14.57a.72.72 0 0 1-1.018.18a5.3 5.3 0 0 0-2.715-.741a5.1 5.1 0 0 0-2.704.742a.72.72 0 0 1-1.06-.18a.73.73 0 0 1 .18-1.06a6.54 6.54 0 0 1 3.552-1.061a6.7 6.7 0 0 1 3.563 1.06a.73.73 0 0 1 .149 1.06zm1.283-2.937a.8.8 0 0 1-.636.34a.73.73 0 0 1-.456-.149a7.97 7.97 0 0 0-8.166 0a.788.788 0 0 1-.901-1.294a9.45 9.45 0 0 1 9.968 0a.784.784 0 0 1 .138 1.103zm1.495-2.937a.86.86 0 0 1-.679.329a.9.9 0 0 1-.509-.18a9.76 9.76 0 0 0-10.965 0a.858.858 0 0 1-1.06-1.348a11.46 11.46 0 0 1 13.043 0a.87.87 0 0 1 .117 1.199z"></svg:path>`,
})
export class MageSpotifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStackIcon],svg[mage-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.27 7.796l-3.61 1.876l-4.392 2.236a.55.55 0 0 1-.536 0L7.341 9.672L3.73 7.796a.594.594 0 0 1 0-1.06l8.014-3.925a.57.57 0 0 1 .512 0l8.014 3.925a.594.594 0 0 1 0 1.06"></svg:path><svg:path d="m7.34 9.672l-3.61 1.723a.594.594 0 0 0 0 1.06l3.61 1.876l4.392 2.236a.55.55 0 0 0 .536 0l4.391-2.236l3.611-1.875a.594.594 0 0 0 0-1.014l-3.61-1.77"></svg:path><svg:path d="m7.34 14.33l-3.61 1.725a.594.594 0 0 0 0 1.06l8.002 4.065a.55.55 0 0 0 .536 0l8.002-4.065a.594.594 0 0 0 0-1.014l-3.61-1.77"></svg:path></svg:g>`,
})
export class MageStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStackFillIcon],svg[mage-stack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.125 12.62a1.35 1.35 0 0 0 0-1.31a1.5 1.5 0 0 0-.54-.53l-2.28-1.12l2.3-1.18a1.33 1.33 0 0 0 .53-.49c.13-.214.2-.46.2-.71c0-.248-.07-.49-.2-.7a1.27 1.27 0 0 0-.55-.5l-8-3.92a1.32 1.32 0 0 0-1.18 0l-8 3.93a1.37 1.37 0 0 0-.54.5a1.33 1.33 0 0 0 0 1.4c.124.214.308.388.53.5l2.28 1.17l-2.28 1.09a1.34 1.34 0 0 0-.53.5a1.33 1.33 0 0 0 0 1.4c.124.214.308.388.53.5l2.28 1.17l-2.28 1.09a1.34 1.34 0 0 0-.53.5a1.33 1.33 0 0 0 0 1.4c.127.212.31.385.53.5l8 4c.191.11.408.169.63.17a1.2 1.2 0 0 0 .61-.16l8.06-4.09a1.35 1.35 0 0 0 .47-1.8a1.5 1.5 0 0 0-.54-.53l-2.29-1.12l2.36-1.21a1.4 1.4 0 0 0 .43-.45m-9.14 3.26l-4.26-2.17l-.19-.09l-3.22-1.66l3-1.45l4 2.07c.192.107.41.162.63.16a1.17 1.17 0 0 0 .61-.15l4-2.07l3 1.45z"></svg:path>`,
})
export class MageStackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarIcon],svg[mage-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.495 18.587l4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.05 1.05 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.04 1.04 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.04 1.04 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.04 1.04 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.04 1.04 0 0 1 .991 0"></svg:path>`,
})
export class MageStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarCircleIcon],svg[mage-star-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11.737 6.71l-.569 1.693a4.32 4.32 0 0 1-2.757 2.76l-1.713.569a.287.287 0 0 0 0 .548l1.713.569a4.32 4.32 0 0 1 2.736 2.738l.569 1.715a.288.288 0 0 0 .547 0l.59-1.694a4.32 4.32 0 0 1 2.736-2.738l1.713-.569a.288.288 0 0 0 0-.547l-1.692-.591a4.32 4.32 0 0 1-2.757-2.76l-.569-1.715a.288.288 0 0 0-.547.022"></svg:path><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect></svg:g>`,
})
export class MageStarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarCircleFillIcon],svg[mage-star-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 0 0 0-20.5m5.69 10.84a1 1 0 0 1-.5.35l-1.61.54a3.46 3.46 0 0 0-1.31.81a3.36 3.36 0 0 0-.81 1.31l-.55 1.61a1.1 1.1 0 0 1-.35.46a1 1 0 0 1-.57.19a.9.9 0 0 1-.57-.19a1 1 0 0 1-.36-.48l-.53-1.61a3.34 3.34 0 0 0-2.13-2.12l-1.6-.53a1 1 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a.9.9 0 0 1 .47-.34l1.61-.54a3.6 3.6 0 0 0 1.33-.81c.37-.374.647-.83.81-1.33l.54-1.58a1 1 0 0 1 .33-.48a.9.9 0 0 1 .57-.21a1 1 0 0 1 .56.16a.92.92 0 0 1 .38.47l.54 1.63c.168.503.448.961.82 1.34a3.6 3.6 0 0 0 1.32.81l1.61.56a.9.9 0 0 1 .47.35a1 1 0 0 1 .18.57c-.001.202-.06.4-.17.57"></svg:path>`,
})
export class MageStarCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarFillIcon],svg[mage-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageStarFill0)"><svg:path fill="currentColor" d="M21.95 10.605a1.75 1.75 0 0 1-.5.86l-3.3 3.22a.4.4 0 0 0-.08.12a.3.3 0 0 0 0 .14l.78 4.56c.065.336.03.684-.1 1a1.65 1.65 0 0 1-.61.77a1.83 1.83 0 0 1-.92.35h-.13a1.8 1.8 0 0 1-.84-.21l-4.1-2.14a.28.28 0 0 0-.28 0l-4.1 2.15a1.9 1.9 0 0 1-1 .21a1.83 1.83 0 0 1-.93-.35a1.75 1.75 0 0 1-.61-.78a1.8 1.8 0 0 1-.1-1l.78-4.55a.23.23 0 0 0 0-.14a.4.4 0 0 0-.07-.12l-3.3-3.24a1.8 1.8 0 0 1-.49-.85a1.75 1.75 0 0 1 0-1a1.81 1.81 0 0 1 1.49-1.21l4.5-.66a.18.18 0 0 0 .12-.05a.3.3 0 0 0 .09-.11l2.1-4.18c.143-.3.369-.553.65-.73a1.79 1.79 0 0 1 2.57.74l2.08 4.16a.4.4 0 0 0 .1.12a.2.2 0 0 0 .13.05l4.57.66c.332.05.644.192.9.41c.251.217.441.496.55.81c.106.32.124.662.05.99"></svg:path></svg:g><svg:defs><svg:clippath id="mageStarFill0"><svg:path fill="#fff" d="M2 2.395h20v19.21H2z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarMovingIcon],svg[mage-star-moving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.524 17.649l3.513 1.84a.87.87 0 0 0 .941-.063a.9.9 0 0 0 .307-.392a.96.96 0 0 0 .053-.486l-.677-3.904a1 1 0 0 1 0-.434a.9.9 0 0 1 .233-.37l2.835-2.762a.93.93 0 0 0 .233-.92a.9.9 0 0 0-.72-.614l-3.925-.56a.92.92 0 0 1-.677-.498L14.884 4.91a.89.89 0 0 0-.783-.508a.84.84 0 0 0-.476.138a.8.8 0 0 0-.328.37l-1.799 3.576a.93.93 0 0 1-.666.498l-3.872.56a.93.93 0 0 0-.455.201a.87.87 0 0 0-.275.413a.95.95 0 0 0 .253.92L9.32 13.84q.155.161.233.37a1 1 0 0 1 0 .434l-.677 3.904a.86.86 0 0 0 0 .486a.9.9 0 0 0 .306.392a.87.87 0 0 0 .942.063l3.513-1.84a.9.9 0 0 1 .846 0zM8 5.4H2m3 12.07H2m1.5-5.773H2"></svg:path>`,
})
export class MageStarMovingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarMovingFillIcon],svg[mage-star-moving-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.833 8.142l1.8-3.57a1.64 1.64 0 0 1 1.49-.92c.306 0 .606.09.86.26c.251.166.452.398.58.67l1.76 3.57l.11.08l3.92.57c.302.04.586.165.82.36c.234.205.41.467.51.76a1.66 1.66 0 0 1 0 .91a1.57 1.57 0 0 1-.44.77l-2.84 2.77a.11.11 0 0 0 0 .11l.68 3.93c.047.297.016.6-.09.88a1.7 1.7 0 0 1-1.4 1.05a1.6 1.6 0 0 1-.91-.2l-3.38-1.77l-.17-.07h-.14l-3.52 1.84a1.6 1.6 0 0 1-.76.19h-.17a1.7 1.7 0 0 1-.84-.32a1.54 1.54 0 0 1-.55-.71a1.6 1.6 0 0 1 0-1l.66-3.81a.5.5 0 0 0 0-.11h-.05l-2.82-2.74a1.7 1.7 0 0 1-.46-.8a1.62 1.62 0 0 1 .53-1.65a1.6 1.6 0 0 1 .83-.36l3.87-.57zm-2.83-2h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 1 1 0 1.5m-3 12.07h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5m-1.46-5.77h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageStarMovingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarSquareIcon],svg[mage-star-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11.713 6.229l-.62 1.847a4.72 4.72 0 0 1-3.008 3.01l-1.869.622a.314.314 0 0 0 0 .597l1.87.621a4.71 4.71 0 0 1 2.983 2.987l.62 1.87a.315.315 0 0 0 .598 0l.644-1.847a4.72 4.72 0 0 1 2.984-2.986l1.869-.621a.314.314 0 0 0 0-.598l-1.845-.644a4.71 4.71 0 0 1-3.008-3.011l-.62-1.87a.314.314 0 0 0-.598.023"></svg:path></svg:g>`,
})
export class MageStarSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarSquareFillIcon],svg[mage-star-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageStarSquareFill0)"><svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.53a6.76 6.76 0 0 0 6.75 6.75h6.5A6.75 6.75 0 0 0 22 15.28v-6.5A6.75 6.75 0 0 0 15.25 2m2.65 10.59a1 1 0 0 1-.48.34l-1.68.56a3.7 3.7 0 0 0-1.4.87a3.5 3.5 0 0 0-.86 1.4l-.58 1.67a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.56-.18a.93.93 0 0 1-.35-.48l-.56-1.69a3.59 3.59 0 0 0-2.26-2.26l-1.69-.55a1 1 0 0 1-.47-.36a.94.94 0 0 1 0-1.12a.92.92 0 0 1 .47-.34l1.68-.56a3.6 3.6 0 0 0 1.41-.88c.399-.383.7-.857.88-1.38l.56-1.66a1 1 0 0 1 .32-.48a1 1 0 0 1 .56-.2a1 1 0 0 1 .56.16c.17.109.3.27.37.46l.57 1.71a3.4 3.4 0 0 0 .87 1.41c.395.4.877.701 1.41.88l1.67.58a1 1 0 0 1 .48.35c.105.165.164.355.17.55a1 1 0 0 1-.18.55"></svg:path></svg:g><svg:defs><svg:clippath id="mageStarSquareFill0"><svg:path fill="#fff" d="M2 2h20v20H2z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageStarSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarsAIcon],svg[mage-stars-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.92 3.582l-.624 1.86a4.75 4.75 0 0 1-3.029 3.031l-1.882.625a.316.316 0 0 0 0 .602l1.882.625a4.74 4.74 0 0 1 3.005 3.007l.625 1.884a.317.317 0 0 0 .6 0l.649-1.86a4.75 4.75 0 0 1 3.005-3.007l1.881-.625a.316.316 0 0 0 0-.602l-1.858-.649a4.74 4.74 0 0 1-3.028-3.031l-.625-1.884a.317.317 0 0 0-.6.024m-8.062 8.601l-.446 1.328a3.4 3.4 0 0 1-2.163 2.165l-1.345.447a.225.225 0 0 0-.112.347a.23.23 0 0 0 .112.083l1.345.446a3.39 3.39 0 0 1 2.146 2.148l.446 1.346a.226.226 0 0 0 .43 0l.462-1.329a3.4 3.4 0 0 1 2.146-2.148l1.345-.446a.226.226 0 0 0 0-.43l-1.328-.464a3.39 3.39 0 0 1-2.163-2.165l-.446-1.345a.226.226 0 0 0-.43.017"></svg:path>`,
})
export class MageStarsAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarsAFillIcon],svg[mage-stars-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 9.47a1.07 1.07 0 0 1-.73 1.01l-1.88.62a4 4 0 0 0-2.53 2.54l-.65 1.87a1.1 1.1 0 0 1-.39.52a1.06 1.06 0 0 1-1.63-.54l-.63-1.88a3.9 3.9 0 0 0-1-1.56a4.06 4.06 0 0 0-1.57-1l-1.88-.63a1.05 1.05 0 0 1-.531-.38a1.08 1.08 0 0 1 0-1.25a1.05 1.05 0 0 1 .54-.39l1.87-.63a4 4 0 0 0 1.59-1c.45-.443.793-.984 1-1.58l.62-1.85a1 1 0 0 1 .36-.53a1 1 0 0 1 .62-.22a1.1 1.1 0 0 1 .63.18a1 1 0 0 1 .41.51l.63 1.91c.207.596.55 1.137 1 1.58a4 4 0 0 0 1.58 1l1.87.66a1 1 0 0 1 .52.38c.13.194.194.425.18.66M12.1 16.4a1 1 0 0 1-.18.57a1 1 0 0 1-.48.35l-1.35.45a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.35.48a1 1 0 0 1-1.15 0a1 1 0 0 1-.35-.48l-.44-1.34a2.7 2.7 0 0 0-.641-1a2.7 2.7 0 0 0-1-.64l-1.35-.44a1 1 0 0 1-.48-.36a1 1 0 0 1-.19-.57a1 1 0 0 1 .68-.93l1.34-.44a2.78 2.78 0 0 0 1.64-1.64l.45-1.32a1 1 0 0 1 .33-.48a1 1 0 0 1 1.14-.05c.171.118.303.285.38.48l.45 1.37a2.78 2.78 0 0 0 1.64 1.64l1.34.47a.9.9 0 0 1 .47.35a.94.94 0 0 1 .21.55"></svg:path>`,
})
export class MageStarsAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarsBIcon],svg[mage-stars-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.92 8.797l-.624 1.86a4.75 4.75 0 0 1-3.029 3.03l-1.882.626a.316.316 0 0 0 0 .601l1.882.626a4.74 4.74 0 0 1 3.005 3.007l.625 1.883a.317.317 0 0 0 .6 0l.649-1.86a4.75 4.75 0 0 1 3.005-3.007l1.881-.625a.316.316 0 0 0 0-.601l-1.858-.65a4.74 4.74 0 0 1-3.028-3.03l-.625-1.884a.317.317 0 0 0-.6.024M6.859 3.516l-.446 1.329A3.4 3.4 0 0 1 4.25 7.01l-1.345.446a.226.226 0 0 0 0 .43l1.345.447a3.39 3.39 0 0 1 2.146 2.148l.446 1.345a.226.226 0 0 0 .43 0l.462-1.328A3.4 3.4 0 0 1 9.88 8.35l1.345-.447a.226.226 0 0 0 0-.43L9.897 7.01a3.39 3.39 0 0 1-2.163-2.165l-.446-1.346a.226.226 0 0 0-.43.017"></svg:path>`,
})
export class MageStarsBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarsBFillIcon],svg[mage-stars-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"></svg:path>`,
})
export class MageStarsBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarsCIcon],svg[mage-stars-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.238 10.81l-.569 1.694a4.33 4.33 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.32 4.32 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.32 4.32 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.32 4.32 0 0 1-2.757-2.76l-.569-1.715a.29.29 0 0 0-.448-.126a.3.3 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.15 3.15 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.15 3.15 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.14 3.14 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.57 1.57 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.1.1 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.57 1.57 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.57 1.57 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008"></svg:path>`,
})
export class MageStarsCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStarsCFillIcon],svg[mage-stars-c-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"></svg:path>`,
})
export class MageStarsCFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSteamIcon],svg[mage-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.057 13.698a2.1 2.1 0 0 0-.74.14l.983.382q.322.133.625.305a1.54 1.54 0 0 1 .639 1.272a1.56 1.56 0 0 1-.465 1.098c-.294.29-.692.454-1.106.454a2.1 2.1 0 0 1-.817-.23l-1.111-.444a2.17 2.17 0 0 0 1.966 1.272c.566 0 1.108-.224 1.508-.622a2.12 2.12 0 0 0 0-3.005a2.14 2.14 0 0 0-1.508-.622zM11.994 2.25a9.78 9.78 0 0 0-6.646 2.59a9.7 9.7 0 0 0-3.098 6.403l5.274 2.239c.46-.284.993-.425 1.533-.407h.14l2.325-3.282a1 1 0 0 1 0-.216c0-.755.224-1.493.645-2.12a3.83 3.83 0 0 1 1.72-1.406a3.85 3.85 0 0 1 4.175.827a3.81 3.81 0 0 1 .83 4.16a3.8 3.8 0 0 1-1.41 1.712c-.63.42-1.371.643-2.129.643H15.2l-3.359 2.404v.102a2.77 2.77 0 0 1-.734 1.834a2.79 2.79 0 0 1-3.687.367a2.77 2.77 0 0 1-1.083-1.654L2.62 14.88a9.74 9.74 0 0 0 2.896 4.45a9.82 9.82 0 0 0 10.099 1.717a9.8 9.8 0 0 0 4.213-3.241a9.71 9.71 0 0 0 .886-10.166a9.76 9.76 0 0 0-3.59-3.915a9.8 9.8 0 0 0-5.117-1.463z"></svg:path><svg:path fill="currentColor" d="M15.302 7.033a2.56 2.56 0 0 0-2.36 1.57a2.535 2.535 0 0 0 .554 2.773a2.56 2.56 0 0 0 3.93-.386a2.54 2.54 0 0 0-.318-3.212a2.56 2.56 0 0 0-1.806-.745m0 4.44a1.93 1.93 0 0 1-1.79-1.178a1.91 1.91 0 0 1 .409-2.097a1.931 1.931 0 0 1 3.297 1.353a1.92 1.92 0 0 1-1.916 1.921"></svg:path>`,
})
export class MageSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStopIcon],svg[mage-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 5H6.75A1.75 1.75 0 0 0 5 6.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 17.25V6.75A1.75 1.75 0 0 0 17.25 5"></svg:path>`,
})
export class MageStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStopCircleIcon],svg[mage-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M15.089 7.882H8.91a1.03 1.03 0 0 0-1.03 1.03v6.177c0 .568.462 1.03 1.03 1.03h6.178a1.03 1.03 0 0 0 1.03-1.03V8.91a1.03 1.03 0 0 0-1.03-1.03"></svg:path></svg:g>`,
})
export class MageStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStopCircleFillIcon],svg[mage-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.28 13a1.56 1.56 0 0 1-1.57 1.56H9.29a1.56 1.56 0 0 1-1.57-1.56V9.28a1.56 1.56 0 0 1 1.57-1.56h5.42a1.56 1.56 0 0 1 1.57 1.56z"></svg:path>`,
})
export class MageStopCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStopFillIcon],svg[mage-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 6.75v10.5a2.51 2.51 0 0 1-2.5 2.5H6.75a2.51 2.51 0 0 1-2.5-2.5V6.75a2.5 2.5 0 0 1 2.5-2.5h10.5a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class MageStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStopSquareIcon],svg[mage-stop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.008 7.99H8.993c-.554 0-1.003.449-1.003 1.002v6.015c0 .554.45 1.003 1.003 1.003h6.015c.553 0 1.002-.449 1.002-1.003V8.993c0-.553-.449-1.002-1.002-1.002"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageStopSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStopSquareFillIcon],svg[mage-stop-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1 12.52a1.69 1.69 0 0 1-1.75 1.68h-5a1.69 1.69 0 0 1-1.7-1.7v-5a1.69 1.69 0 0 1 1.7-1.7h5a1.69 1.69 0 0 1 1.7 1.7z"></svg:path>`,
})
export class MageStopSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageStripeIcon],svg[mage-stripe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.374 9.668h1.217l.07.331l.251-.18a1.62 1.62 0 0 1 1.88.14c.435.38.717.906.794 1.478a3.66 3.66 0 0 1-.19 2.01a1.74 1.74 0 0 1-1.348 1.137a1.5 1.5 0 0 1-1.116-.221l-.15-.09v1.557l-1.388.292zm1.387 2.433v.945a.2.2 0 0 0 .07.16a.814.814 0 0 0 1.217-.17a1.77 1.77 0 0 0 .242-1.006a1.6 1.6 0 0 0-.262-.895a.783.783 0 0 0-1.206-.16a.22.22 0 0 0-.06.14c-.01.352 0 .674 0 .986m4.524.512a.8.8 0 0 0 .382.674c.289.155.622.208.945.15c.366-.02.725-.112 1.055-.27v.974a.17.17 0 0 1-.11.181a3.3 3.3 0 0 1-1.75.282a2.12 2.12 0 0 1-1.287-.613a2.2 2.2 0 0 1-.552-1.086a3.33 3.33 0 0 1 .24-2.202a1.92 1.92 0 0 1 3.6.231c.118.323.183.662.191 1.006v.683h-2.714zm1.407-1.005a.85.85 0 0 0-.342-.774a.62.62 0 0 0-.714 0a.88.88 0 0 0-.372.784zM2.134 12.985l.252.12c.34.166.708.268 1.086.303q.23.021.462 0a.301.301 0 0 0 .11-.533q-.151-.105-.321-.181c-.322-.131-.644-.242-1.005-.392a1.377 1.377 0 0 1-.252-2.242a2 2 0 0 1 1.257-.453c.489-.03.978.041 1.438.211a.12.12 0 0 1 .09.131v1.176c-.221-.07-.432-.17-.653-.22c-.222-.051-.533-.071-.795-.101a.5.5 0 0 0-.22 0a.251.251 0 0 0-.071.452q.161.108.342.181q.512.17 1.005.392a1.27 1.27 0 0 1 .684 1.428a1.43 1.43 0 0 1-1.197 1.236c-.726.171-1.489.1-2.171-.2a.1.1 0 0 1-.06-.081v-1.207a.1.1 0 0 1 .02-.02m3.719-4.222l1.347-.292v1.197h1.006v1.176H7.2v2.01a.523.523 0 0 0 .654.543q.198-.02.392-.07v1.015c0 .07 0 .111-.08.131a2.08 2.08 0 0 1-1.458 0a1.32 1.32 0 0 1-.865-1.156a1.3 1.3 0 0 1 0-.201V8.763zm2.846.915h1.095c.08 0 .1 0 .11.09q.027.153.071.302l.04-.1a.925.925 0 0 1 1.006-.312v1.246a4 4 0 0 0-.463 0a.9.9 0 0 0-.332.1a.44.44 0 0 0-.261.433v3.066H8.699zm2.774 0h1.377v4.835h-1.377zm-.01-.423V8.25c0-.06 0-.09.07-.1l1.287-.272v1.086z"></svg:path>`,
})
export class MageStripeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSunIcon],svg[mage-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#mageSun0)"><svg:path d="M12 17.885a5.885 5.885 0 1 0 0-11.77a5.885 5.885 0 0 0 0 11.77m-9.281-5.879H1.5m21 0h-1.207m-9.287-9.287V1.5m0 21v-1.207M5.435 5.435l-.859-.859m14.848 14.848l-.86-.86m.001-13.129l.858-.859M4.576 19.424l.86-.86"></svg:path></svg:g><svg:defs><svg:clippath id="mageSun0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSunFillIcon],svg[mage-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.891 12a5.94 5.94 0 0 1-3.68 5.499a5.97 5.97 0 0 1-6.496-1.295A5.948 5.948 0 0 1 11.943 6.05a5.96 5.96 0 0 1 4.21 1.743A5.94 5.94 0 0 1 17.89 12M3.203 13.048H2.05A1.05 1.05 0 0 1 1 12a1.047 1.047 0 0 1 1.05-1.048h1.153A1.05 1.05 0 0 1 4.253 12a1.047 1.047 0 0 1-1.05 1.048m18.747 0h-1.143A1.05 1.05 0 0 1 19.758 12a1.047 1.047 0 0 1 1.05-1.048h1.143A1.05 1.05 0 0 1 23 12a1.047 1.047 0 0 1-1.05 1.048m-9.965-8.8a1.05 1.05 0 0 1-1.05-1.048V2.048A1.047 1.047 0 0 1 11.986 1a1.05 1.05 0 0 1 1.049 1.048V3.2a1.047 1.047 0 0 1-1.05 1.048m0 18.752a1.05 1.05 0 0 1-1.05-1.047V20.8a1.047 1.047 0 0 1 1.05-1.048a1.05 1.05 0 0 1 1.049 1.048v1.152A1.047 1.047 0 0 1 11.984 23M5.753 6.825a1.05 1.05 0 0 1-.745-.314l-.819-.807a1.051 1.051 0 0 1 .745-1.796c.28 0 .548.111.745.308l.819.817a1.047 1.047 0 0 1 0 1.478a1.05 1.05 0 0 1-.745.314m13.271 13.221a1.05 1.05 0 0 1-.735-.304l-.818-.817a1.047 1.047 0 0 1 1.14-1.739q.196.096.34.262l.818.817a1.047 1.047 0 0 1 0 1.477a1.05 1.05 0 0 1-.745.304m-.808-13.221a1.05 1.05 0 0 1-1.034-1.254c.04-.204.142-.391.29-.538l.818-.817a1.05 1.05 0 0 1 1.48 1.488l-.82.807a1.05 1.05 0 0 1-.734.314M4.934 20.046a1.05 1.05 0 0 1-.745-.304a1.046 1.046 0 0 1 0-1.477l.819-.817a1.05 1.05 0 0 1 1.49 0a1.047 1.047 0 0 1 0 1.477l-.819.817a1.05 1.05 0 0 1-.745.304"></svg:path>`,
})
export class MageSunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageSwimRingFillIcon],svg[mage-swim-ring-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.785 8.9a10.18 10.18 0 0 0-9.76-7.15c-1.058 0-2.11.158-3.12.47a10.28 10.28 0 0 0-6.69 6.69a10.1 10.1 0 0 0-.46 3.09a10.22 10.22 0 0 0 10.22 10.25a9.9 9.9 0 0 0 3.12-.48a10.28 10.28 0 0 0 6.69-6.69a10.1 10.1 0 0 0 .46-3.08v-.09a10.2 10.2 0 0 0-.46-3.01M12.005 3a10.4 10.4 0 0 1 2.42.28l-.65 3.23a6.73 6.73 0 0 0-3.59 0l-.65-3.23a10 10 0 0 1 2.47-.28m-5.56 10.68l-3.08.61a10.05 10.05 0 0 1 0-4.67l3.09.61a6.3 6.3 0 0 0 0 3.45zm5.55 7.3a10 10 0 0 1-2.46-.3l.65-3.25c.59.16 1.199.24 1.81.24a6.2 6.2 0 0 0 1.82-.26l.65 3.26a11.4 11.4 0 0 1-2.47.35zm4.09-7.3a4.27 4.27 0 0 1-2.36 2.36a4.4 4.4 0 0 1-3.45 0a4.32 4.32 0 0 1-2.37-2.36a4.5 4.5 0 0 1-.35-1.73a4.5 4.5 0 0 1 2.72-4.09a4.4 4.4 0 0 1 1.72-.35a4.5 4.5 0 0 1 4.1 2.72c.23.547.35 1.136.35 1.73a4.3 4.3 0 0 1-.36 1.72m1.48 0c.151-.561.229-1.14.23-1.72a6 6 0 0 0-.25-1.73l3.11-.61c.36 1.536.36 3.134 0 4.67z"></svg:path>`,
})
export class MageSwimRingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTabletIcon],svg[mage-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.196 5.342l-4.845 4.846a5.992 5.992 0 1 0 8.473 8.473l4.845-4.845a5.992 5.992 0 0 0-8.473-8.474"></svg:path><svg:path d="M16.846 15.639a12.9 12.9 0 0 1-5.053-3.421a12.9 12.9 0 0 1-3.42-5.053m3.633 0a2.56 2.56 0 0 1 3.633 0"></svg:path></svg:g>`,
})
export class MageTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTabletFillIcon],svg[mage-tablet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.205 4.793a6.74 6.74 0 0 0-9.54 0l-1.75 1.76a.34.34 0 0 0-.12.12l-3 3a6.742 6.742 0 0 0 9.53 9.54l4.85-4.85a6.74 6.74 0 0 0 .03-9.57m-7.91 1.65a3.56 3.56 0 0 1 3.9-.78c.432.18.823.445 1.15.78a1 1 0 0 1 0 1.41a1 1 0 0 1-1.41 0a1.57 1.57 0 0 0-1.71-.34a1.4 1.4 0 0 0-.51.34a1.001 1.001 0 0 1-1.42-1.41m4.24 9.43a13.7 13.7 0 0 1-4.3-3.17a13.5 13.5 0 0 1-3.12-4.24l1.14-1.14a12.2 12.2 0 0 0 3 4.32a12.3 12.3 0 0 0 4.38 3.09z"></svg:path>`,
})
export class MageTabletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagIcon],svg[mage-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.524 17.524l-2.722 2.723a2.567 2.567 0 0 1-3.634 0L4.13 13.209A3.85 3.85 0 0 1 3 10.487V5.568A2.57 2.57 0 0 1 5.568 3h4.919c1.021 0 2 .407 2.722 1.13l7.038 7.038a2.567 2.567 0 0 1 0 3.634z"></svg:path><svg:path d="M9.126 11.694a2.568 2.568 0 1 0 0-5.137a2.568 2.568 0 0 0 0 5.137"></svg:path></svg:g>`,
})
export class MageTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTag2Icon],svg[mage-tag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.524 17.524l-2.722 2.723a2.567 2.567 0 0 1-3.634 0L4.13 13.209A3.85 3.85 0 0 1 3 10.487V5.568A2.57 2.57 0 0 1 5.568 3h4.919c1.021 0 2 .407 2.722 1.13l7.038 7.038a2.567 2.567 0 0 1 0 3.634z"></svg:path><svg:path d="M9.126 11.694a2.568 2.568 0 1 0 0-5.137a2.568 2.568 0 0 0 0 5.137m3.326 4.392l3.634-3.634"></svg:path></svg:g>`,
})
export class MageTag2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTag2FillIcon],svg[mage-tag-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.48 11.695a3.4 3.4 0 0 0-.72-1.08l-7-7a4.56 4.56 0 0 0-3.25-1.35H5.59a3.31 3.31 0 0 0-3.32 3.31v4.92a4.58 4.58 0 0 0 1.35 3.26l7 7a3.33 3.33 0 0 0 2.35.98a3.3 3.3 0 0 0 1.27-.26c.4-.169.763-.413 1.07-.72l2.73-2.72l2.72-2.72c.307-.31.551-.677.72-1.08a3.35 3.35 0 0 0 0-2.54m-12.37.46a3.05 3.05 0 1 1 3-3.05a3.06 3.06 0 0 1-3 3.08zm7.66 1l-3.63 3.64a1 1 0 1 1-1.41-1.42l3.63-3.63a1 1 0 1 1 1.41 1.42z"></svg:path>`,
})
export class MageTag2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagCheckIcon],svg[mage-tag-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 12v3.38a3.38 3.38 0 0 1-3.38 3.382H8.661a3.38 3.38 0 0 1-2.389-.992L3.22 13.6a2.96 2.96 0 0 1 0-3.2l3.054-4.17a3.38 3.38 0 0 1 2.39-.992h9.206a3.38 3.38 0 0 1 3.38 3.382z"></svg:path><svg:path d="m9.61 11.905l1.946 1.946a.735.735 0 0 0 1.047 0l3.922-3.921"></svg:path></svg:g>`,
})
export class MageTagCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagCheckFillIcon],svg[mage-tag-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.79 5.72a4.1 4.1 0 0 0-2.92-1.21H8.66a4.12 4.12 0 0 0-2.92 1.22a.3.3 0 0 0-.07.08l-3.08 4.21a3.66 3.66 0 0 0-.59 2a3.74 3.74 0 0 0 .61 2l3.06 4.17l.07.09a4.1 4.1 0 0 0 2.92 1.21h9.21A4.13 4.13 0 0 0 22 15.36V8.59a4.1 4.1 0 0 0-1.21-2.87m-3.56 4.94l-3.92 3.92c-.16.161-.35.29-.56.38a1.67 1.67 0 0 1-1.34 0a1.8 1.8 0 0 1-.57-.38L8.9 12.64a1.004 1.004 0 0 1 1.42-1.42l1.76 1.77l3.74-3.74a1 1 0 1 1 1.41 1.41"></svg:path>`,
})
export class MageTagCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagCrossIcon],svg[mage-tag-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m16.216 9.389l-5.21 5.21M11.005 9.4l5.211 5.211"></svg:path><svg:path stroke-linejoin="round" d="M21.25 12v3.38a3.38 3.38 0 0 1-3.38 3.382H8.661a3.38 3.38 0 0 1-2.389-.992L3.22 13.6a2.96 2.96 0 0 1 0-3.2l3.054-4.17a3.38 3.38 0 0 1 2.39-.992h9.206a3.38 3.38 0 0 1 3.38 3.382z"></svg:path></svg:g>`,
})
export class MageTagCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagCrossFillIcon],svg[mage-tag-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.818 5.695a4.17 4.17 0 0 0-2.93-1.21h-9.18a4.1 4.1 0 0 0-2.92 1.22l-.08.08l-3.08 4.21a3.74 3.74 0 0 0 0 4.05l3 4.17l.08.09a4.1 4.1 0 0 0 2.92 1.21h9.2a4.17 4.17 0 0 0 2.93-1.21a4.1 4.1 0 0 0 1.21-2.92v-6.77a4.1 4.1 0 0 0-1.15-2.92m-3.87 8.21a1 1 0 1 1-1.42 1.41l-1.9-1.9l-1.89 1.89a1 1 0 0 1-1.42-1.41l1.9-1.89l-1.9-1.9a1 1 0 1 1 1.42-1.41l1.89 1.89l1.9-1.9a1 1 0 1 1 1.42 1.41l-1.9 1.91z"></svg:path>`,
})
export class MageTagCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagFillIcon],svg[mage-tag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.52 11.615a3.3 3.3 0 0 0-.76-1l-7-7a4.56 4.56 0 0 0-3.25-1.35H5.59a3.31 3.31 0 0 0-3.32 3.31v4.92a4.58 4.58 0 0 0 1.35 3.26l7 7a3.3 3.3 0 0 0 1.08.72c.401.171.833.26 1.27.26a3.33 3.33 0 0 0 2.34-1l2.73-2.72l2.72-2.72a3.3 3.3 0 0 0 .72-1.08a3.35 3.35 0 0 0 0-2.54zm-12.37.28a2.87 2.87 0 1 1 2.87-2.87a2.88 2.88 0 0 1-2.87 2.9z"></svg:path>`,
})
export class MageTagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagMinusIcon],svg[mage-tag-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M9.62 12h7.37"></svg:path><svg:path stroke-linejoin="round" d="M21.25 12v3.38a3.38 3.38 0 0 1-3.38 3.382H8.661a3.38 3.38 0 0 1-2.389-.992L3.22 13.6a2.96 2.96 0 0 1 0-3.2l3.054-4.17a3.38 3.38 0 0 1 2.39-.992h9.206a3.38 3.38 0 0 1 3.38 3.382z"></svg:path></svg:g>`,
})
export class MageTagMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagMinusFillIcon],svg[mage-tag-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.837 5.695a4.1 4.1 0 0 0-2.92-1.21h-9.21a4.12 4.12 0 0 0-2.92 1.22l-.07.08l-3.08 4.21a3.69 3.69 0 0 0 0 4.05l3 4.17l.07.09a4.1 4.1 0 0 0 2.92 1.21h9.21a4.13 4.13 0 0 0 4.13-4.13v-6.77a4.1 4.1 0 0 0-1.13-2.92m-3.8 7.31h-7.37a1 1 0 0 1 0-2h7.37a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageTagMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagPlusIcon],svg[mage-tag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M13.211 8.315v7.37m-3.676-3.677h7.369"></svg:path><svg:path stroke-linejoin="round" d="M21.25 12v3.38a3.38 3.38 0 0 1-3.38 3.382H8.661a3.38 3.38 0 0 1-2.389-.992L3.22 13.6a2.96 2.96 0 0 1 0-3.2l3.054-4.17a3.38 3.38 0 0 1 2.39-.992h9.206a3.38 3.38 0 0 1 3.38 3.382z"></svg:path></svg:g>`,
})
export class MageTagPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagPlusFillIcon],svg[mage-tag-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.82 5.725a4.15 4.15 0 0 0-2.92-1.21H8.74a4.12 4.12 0 0 0-3 1.21a.3.3 0 0 0-.07.08l-3.08 4.21a3.66 3.66 0 0 0-.59 2a3.74 3.74 0 0 0 .61 2l3.06 4.17l.07.09a4.1 4.1 0 0 0 2.92 1.21h9.21a4.15 4.15 0 0 0 2.92-1.21a4.1 4.1 0 0 0 1.21-2.92v-6.77a4.1 4.1 0 0 0-1.18-2.86m-3.89 7.31h-2.69v2.69a1 1 0 1 1-2 0v-2.68H9.56a1 1 0 0 1 0-2h2.68v-2.69a1 1 0 1 1 2 0v2.69h2.69a1 1 0 1 1 0 2z"></svg:path>`,
})
export class MageTagPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagQuestionMarkIcon],svg[mage-tag-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12v3.38a3.38 3.38 0 0 1-3.38 3.382H8.661a3.38 3.38 0 0 1-2.389-.992L3.22 13.6a2.96 2.96 0 0 1 0-3.2l3.054-4.17a3.38 3.38 0 0 1 2.39-.992h9.206a3.38 3.38 0 0 1 3.38 3.382z"></svg:path><svg:path stroke-miterlimit="10" d="M10.911 9.543a1.9 1.9 0 0 1 2.07-1.076a1.84 1.84 0 0 1 1.351.962a1.598 1.598 0 0 1-.931 2.2a1.18 1.18 0 0 0-.761 1.066v.44"></svg:path><svg:path stroke-linejoin="round" d="M12.606 15.565h.004"></svg:path></svg:g>`,
})
export class MageTagQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTagQuestionMarkFillIcon],svg[mage-tag-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.837 5.695a4.1 4.1 0 0 0-2.93-1.21h-9.2a4.1 4.1 0 0 0-2.92 1.22l-.08.08l-3.08 4.21a3.74 3.74 0 0 0 0 4.05l3 4.17l.08.09a4.1 4.1 0 0 0 2.92 1.21h9.2a4.13 4.13 0 0 0 4.14-4.13v-6.77a4.1 4.1 0 0 0-1.13-2.92m-8.18 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2.67-5.52a2.6 2.6 0 0 1-.63.9a2.7 2.7 0 0 1-.93.55v.05a.2.2 0 0 0 0 .1v.41a1 1 0 1 1-2 0v-.49a2.16 2.16 0 0 1 1.4-2a.7.7 0 0 0 .25-.14a.6.6 0 0 0 .14-.21a.5.5 0 0 0 0-.24a.54.54 0 0 0-.06-.25a.8.8 0 0 0-.23-.25a.8.8 0 0 0-.36-.15a1 1 0 0 0-.61.08a.9.9 0 0 0-.41.43a1 1 0 0 1-1.841-.073a1 1 0 0 1 .031-.767a2.9 2.9 0 0 1 1.3-1.36a2.86 2.86 0 0 1 1.86-.28a2.8 2.8 0 0 1 2.05 1.49a2.6 2.6 0 0 1 .07 2.16z"></svg:path>`,
})
export class MageTagQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelegramIcon],svg[mage-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.077 2.001a10 10 0 0 1 7.077 3.014A10 10 0 0 1 22 12.167c-.678 13.192-19.556 13.08-20-.155a9.95 9.95 0 0 1 2.936-7.127a9.93 9.93 0 0 1 7.141-2.884m1.818 8.376s.016.01-.107.166a5 5 0 0 1-.489.512l-2.544 2.47c-.544.544-.533.878.1 1.334c.811.578 1.633 1.112 2.467 1.68c.833.567 1.855 1.4 2.278.177q.161-.49.244-1c.178-.98.356-1.958.511-2.948c.211-1.39.411-2.78.589-4.182c.089-.69-.278-1.001-.967-.834a5.6 5.6 0 0 0-.833.266l-7.256 3.06c-.688.288-1.377.6-2.055.934c-.167.088-.378.333-.367.5s.245.356.434.434c.466.189.966.322 1.455.478a2.38 2.38 0 0 0 2.222-.367a78 78 0 0 1 2.811-1.913c.445-.3.756-.467 1.19-.768c.222-.11.272-.162.317-.095z"></svg:path>`,
})
export class MageTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionIcon],svg[mage-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path>`,
})
export class MageTelevisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionCheckIcon],svg[mage-television-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path d="m9 10.183l1.689 1.689a.64.64 0 0 0 .908 0L15 8.469"></svg:path></svg:g>`,
})
export class MageTelevisionCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionCheckFillIcon],svg[mage-television-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.7 3.7 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 3.75 3.75h5.5v2H8.53a.75.75 0 0 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-5.37 5.32l-3.4 3.4a1.4 1.4 0 0 1-.99.41a1.5 1.5 0 0 1-.54-.11a1.35 1.35 0 0 1-.45-.31l-1.68-1.68a.75.75 0 1 1 1.06-1.06l1.62 1.62l3.32-3.33a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class MageTelevisionCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionCrossIcon],svg[mage-television-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="m14.25 8.015l-4.5 4.49m0-4.48l4.5 4.49"></svg:path></svg:g>`,
})
export class MageTelevisionCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionCrossFillIcon],svg[mage-television-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.7 3.7 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 3.75 3.75h5.5v2H8.53a.75.75 0 0 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-6.12 8.3a.75.75 0 0 1-.53 1.28a.77.77 0 0 1-.53-.21l-1.75-1.69l-1.71 1.71a.77.77 0 0 1-.817.154a.75.75 0 0 1-.243-1.224l1.71-1.7l-1.71-1.71a.77.77 0 0 1 0-1.07a.75.75 0 0 1 1.06 0l1.71 1.71l1.73-1.72a.75.75 0 0 1 1.06 0a.77.77 0 0 1 0 1.07l-1.72 1.72z"></svg:path>`,
})
export class MageTelevisionCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionDownloadIcon],svg[mage-television-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M12 13.265v-6"></svg:path><svg:path stroke-linejoin="round" d="m9.249 10.739l2.36 2.36a.55.55 0 0 0 .782 0l2.36-2.36"></svg:path></svg:g>`,
})
export class MageTelevisionDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionDownloadFillIcon],svg[mage-television-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.7 3.7 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 3.75 3.75h5.5v2H8.53a.75.75 0 0 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-5.62 6.64a.73.73 0 0 1-.53.22a.74.74 0 0 1-.53-.22l-1.47-1.47v4.41a.75.75 0 1 1-1.5 0v-4.38l-1.47 1.47a.75.75 0 0 1-1.06-1.06l2.36-2.36a1.3 1.3 0 0 1 .42-.28q.167-.075.35-.09a.8.8 0 0 1 .3 0c.12.01.24.04.35.09c.156.066.299.16.42.28l2.36 2.36a.74.74 0 0 1 0 1.06z"></svg:path>`,
})
export class MageTelevisionDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionFillIcon],svg[mage-television-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.315v7.87a3.76 3.76 0 0 1-2.315 3.466a3.7 3.7 0 0 1-1.435.284h-5.5v2h2.72a.75.75 0 1 1 0 1.5H8.53a.75.75 0 1 1 0-1.5h2.72v-2h-5.5a3.72 3.72 0 0 1-2.65-1.1a3.76 3.76 0 0 1-1.1-2.65v-7.87a3.76 3.76 0 0 1 3.75-3.75h12.5A3.76 3.76 0 0 1 22 6.315"></svg:path>`,
})
export class MageTelevisionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionMinusIcon],svg[mage-television-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M9 10.272h6"></svg:path></svg:g>`,
})
export class MageTelevisionMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionMinusFillIcon],svg[mage-television-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.72 3.72 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 2.315 3.466a3.7 3.7 0 0 0 1.435.284h5.5v2H8.53a.75.75 0 1 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-5.9 7.34H9a.75.75 0 0 1 0-1.5h6a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageTelevisionMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionPlusIcon],svg[mage-television-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M11.993 7.265v6M9 10.272h6"></svg:path></svg:g>`,
})
export class MageTelevisionPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionPlusFillIcon],svg[mage-television-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.72 3.72 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 2.315 3.466a3.7 3.7 0 0 0 1.435.284h5.5v2H8.53a.75.75 0 1 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-5.9 7.34h-2.26v2.24a.75.75 0 1 1-1.5 0v-2.24H8.97a.75.75 0 0 1 0-1.5h2.24v-2.26a.75.75 0 1 1 1.5 0v2.26h2.26a.75.75 0 1 1 0 1.5z"></svg:path>`,
})
export class MageTelevisionPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionQuestionMarkIcon],svg[mage-television-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M10.274 7.893a1.834 1.834 0 0 1 1.999-1.04a1.78 1.78 0 0 1 1.304.93a1.545 1.545 0 0 1-.9 2.124a1.14 1.14 0 0 0-.734 1.03v.424"></svg:path><svg:path stroke-linejoin="round" d="M11.91 13.707h.005"></svg:path></svg:g>`,
})
export class MageTelevisionQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionQuestionMarkFillIcon],svg[mage-television-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.7 3.7 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 3.75 3.75h5.5v2H8.53a.75.75 0 1 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-9.74 10a.75.75 0 1 1 0 .06zm3.08-4.208c-.124.3-.262.407-.5.628a2.4 2.4 0 0 1-.82.49a.26.26 0 0 0-.15.13a.4.4 0 0 0-.08.21v.4a.75.75 0 1 1-1.5 0v-.42a2.06 2.06 0 0 1 .35-1.07a2 2 0 0 1 .87-.67a.8.8 0 0 0 .31-.17a.7.7 0 0 0 .19-.28a.72.72 0 0 0-.01-.64a1.05 1.05 0 0 0-.3-.34a1.1 1.1 0 0 0-.44-.18a1.1 1.1 0 0 0-.72.1a1.2 1.2 0 0 0-.48.51a.75.75 0 1 1-1.37-.62a2.59 2.59 0 0 1 2.82-1.47a2.5 2.5 0 0 1 1.06.44a2.6 2.6 0 0 1 .77.88a2.37 2.37 0 0 1 .05 1.97z"></svg:path>`,
})
export class MageTelevisionQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionUploadIcon],svg[mage-television-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M12 7.265v6"></svg:path><svg:path stroke-linejoin="round" d="m14.752 9.791l-2.361-2.36a.55.55 0 0 0-.782 0L9.25 9.79"></svg:path></svg:g>`,
})
export class MageTelevisionUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionUploadFillIcon],svg[mage-television-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 3.665a3.7 3.7 0 0 0-2.65-1.1H5.75A3.76 3.76 0 0 0 2 6.315v7.87a3.76 3.76 0 0 0 2.315 3.466a3.7 3.7 0 0 0 1.435.284h5.5v2H8.53a.75.75 0 1 0 0 1.5h6.94a.75.75 0 1 0 0-1.5h-2.72v-2h5.5a3.72 3.72 0 0 0 2.65-1.1a3.76 3.76 0 0 0 1.1-2.65v-7.87a3.72 3.72 0 0 0-1.1-2.65m-5.62 7.59l-2.31 2.41a1.2 1.2 0 0 1-.42.28a1.3 1.3 0 0 1-1 0a1.2 1.2 0 0 1-.43-.29l-2.35-2.35a.75.75 0 1 1 1.06-1.06l1.47 1.47v-4.42a.75.75 0 1 1 1.5 0v4.37l1.47-1.47a.75.75 0 0 1 1.226.255a.74.74 0 0 1-.216.835z"></svg:path>`,
})
export class MageTelevisionUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThreadsIcon],svg[mage-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.742 8.181l-1.63.433a.5.5 0 0 1 0-.11a8 8 0 0 0-.795-1.872a5.67 5.67 0 0 0-3.079-2.465a8 8 0 0 0-2.112-.392a8.4 8.4 0 0 0-1.59 0a6.9 6.9 0 0 0-2.365.664a5.46 5.46 0 0 0-2.324 2.213a7.6 7.6 0 0 0-.805 2.093q-.221.878-.291 1.78q-.054.871 0 1.741a11.6 11.6 0 0 0 .462 3.018a7.2 7.2 0 0 0 1.007 2.083a5.37 5.37 0 0 0 2.505 1.922c.62.238 1.27.387 1.932.443a9.7 9.7 0 0 0 1.941 0a6 6 0 0 0 2.174-.584a4.76 4.76 0 0 0 1.921-1.65a3.36 3.36 0 0 0 .463-2.958a2.77 2.77 0 0 0-1.107-1.52l-.352-.25c0 .13 0 .24-.05.351c-.1.622-.309 1.22-.614 1.771a3.65 3.65 0 0 1-2.656 1.902a4.6 4.6 0 0 1-2.213-.111a3.5 3.5 0 0 1-1.54-.895a2.9 2.9 0 0 1-.835-1.781a3.02 3.02 0 0 1 1.389-2.948a4.6 4.6 0 0 1 1.63-.644a9.5 9.5 0 0 1 1.77-.12q.683.015 1.359.12h.08v-.06a2.9 2.9 0 0 0-.382-1.077a1.9 1.9 0 0 0-1.258-.885a3.2 3.2 0 0 0-1.871 0a2.16 2.16 0 0 0-1.097.815l-.05.14l-1.379-.955a.6.6 0 0 0 .07-.101a3.9 3.9 0 0 1 2.456-1.56a4.86 4.86 0 0 1 2.545.111a3.5 3.5 0 0 1 2.153 1.831c.253.499.42 1.036.493 1.59c0 .211.05.423.07.634v.08l.413.202a5.3 5.3 0 0 1 1.69 1.338a4.6 4.6 0 0 1 1.007 2.012c.082.44.109.89.08 1.338a5.2 5.2 0 0 1-1.288 3.13a6.8 6.8 0 0 1-3.732 2.243c-1.229.273-2.495.33-3.743.17a8.5 8.5 0 0 1-2.757-.804a7.04 7.04 0 0 1-2.807-2.485a9 9 0 0 1-1.137-2.576a13 13 0 0 1-.392-2.012A17 17 0 0 1 4 11.764c0-.574 0-1.158.1-1.741q.116-.989.363-1.952c.207-.821.526-1.61.946-2.345a7.04 7.04 0 0 1 4.024-3.25a9 9 0 0 1 1.851-.412a11.2 11.2 0 0 1 2.395 0c.94.102 1.857.353 2.716.745a7.26 7.26 0 0 1 3.11 2.636c.54.826.948 1.733 1.207 2.686q.007.03.03.05m-5.665 4.025h-.07A8 8 0 0 0 14 12.065a9 9 0 0 0-1.067 0a4.6 4.6 0 0 0-1.177.16a2 2 0 0 0-.925.544a1.31 1.31 0 0 0 .11 1.952c.226.179.486.309.765.382a3.2 3.2 0 0 0 1.278.06c.291-.036.574-.124.835-.26c.389-.235.692-.587.865-1.007c.225-.54.357-1.116.392-1.7z"></svg:path>`,
})
export class MageThreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThreadsSquareIcon],svg[mage-threads-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="mageThreadsSquare0" fill="currentColor" d="M14 12.31c-.022.42-.117.833-.28 1.22a1.6 1.6 0 0 1-.63.71c-.186.1-.39.165-.6.19a2.4 2.4 0 0 1-.92 0a1.6 1.6 0 0 1-.55-.27a1 1 0 0 1-.08-1.42a1.5 1.5 0 0 1 .67-.38c.272-.085.555-.125.84-.12q.39-.023.78 0q.363.028.72.1z"></svg:path></svg:defs><svg:use href="#mageThreadsSquare0"></svg:use><svg:path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5M7.52 14.53A5 5 0 0 0 8.24 16a4 4 0 0 0 1.81 1.39c.447.166.915.274 1.39.32q.7.068 1.4 0a4.6 4.6 0 0 0 1.57-.41a3.6 3.6 0 0 0 1.39-1.2a2.42 2.42 0 0 0 .33-2.1a2 2 0 0 0-.8-1.09l-.2-.14c0 .09 0 .17-.05.25c-.07.45-.22.882-.44 1.28a2.63 2.63 0 0 1-1.92 1.34a3.3 3.3 0 0 1-1.59-.08A2.55 2.55 0 0 1 10 14.9a2.17 2.17 0 0 1-.61-1.29a2.2 2.2 0 0 1 1-2.12a3.3 3.3 0 0 1 1.2-.49q.636-.105 1.28-.09a8 8 0 0 1 1 .09h.06a2.4 2.4 0 0 0-.27-.78a1.38 1.38 0 0 0-.89-.64a2.3 2.3 0 0 0-1.35 0a1.66 1.66 0 0 0-.79.59v.07l-1-.69v-.07a2.84 2.84 0 0 1 1.77-1.17a3.63 3.63 0 0 1 1.85.08a2.55 2.55 0 0 1 1.55 1.33c.176.359.295.744.35 1.14a4 4 0 0 1 .05.52l.3.14a4 4 0 0 1 1.22 1c.346.427.573.937.66 1.48c.071.328.095.665.07 1a3.75 3.75 0 0 1-.93 2.25a4.93 4.93 0 0 1-2.7 1.63a8 8 0 0 1-1.41.17a8 8 0 0 1-1.29-.05a6.3 6.3 0 0 1-2-.58a5.2 5.2 0 0 1-2-1.79a6.8 6.8 0 0 1-.83-1.86q-.201-.744-.29-1.51V12c0-.42 0-.84.07-1.26a9.5 9.5 0 0 1 .23-1.41A6.3 6.3 0 0 1 7 7.67a5.1 5.1 0 0 1 2.86-2.35A7.4 7.4 0 0 1 11.2 5a7.6 7.6 0 0 1 1.72 0a6.4 6.4 0 0 1 2 .52a5.17 5.17 0 0 1 2.24 1.9A6.6 6.6 0 0 1 18 9.38l-1.18.32v-.08a5.6 5.6 0 0 0-.58-1.35A4.08 4.08 0 0 0 14 6.52a5.6 5.6 0 0 0-1.52-.29a7 7 0 0 0-1.15 0a5 5 0 0 0-1.7.48A3.93 3.93 0 0 0 8 8.31a5.8 5.8 0 0 0-.57 1.49a8 8 0 0 0-.21 1.29a10 10 0 0 0 0 1.25a8.6 8.6 0 0 0 .3 2.19"></svg:path><svg:use href="#mageThreadsSquare0"></svg:use>`,
})
export class MageThreadsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThreeDBoxSquareIcon],svg[mage-three-d-box-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="m7.104 15.81l4.013 2.407a1.74 1.74 0 0 0 1.766 0l4.012-2.407a1.73 1.73 0 0 0 .837-1.48V9.402a1.73 1.73 0 0 0-.837-1.479l-4.012-2.14a1.74 1.74 0 0 0-1.766 0l-4.013 2.14a1.73 1.73 0 0 0-.836 1.48v4.929a1.73 1.73 0 0 0 .836 1.479m10.399-7.247L12 11.866"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M6.497 8.564L12 11.866v6.592"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageThreeDBoxSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThreeDBoxSquareFillIcon],svg[mage-three-d-box-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2.02h-6.5A6.76 6.76 0 0 0 2 8.77v6.46a6.76 6.76 0 0 0 6.75 6.75h6.5A6.76 6.76 0 0 0 22 15.23v-6.5a6.76 6.76 0 0 0-6.75-6.71m1.64 12.83a.94.94 0 0 1-.36.38l-3.84 2.29v-5.23l4.33-2.61v4.67a1 1 0 0 1-.13.5m-9.79 0a1 1 0 0 1-.14-.51V9.67l4.34 2.6v5.26l-3.84-2.31a1 1 0 0 1-.36-.36zm4.91-8.57a1 1 0 0 1 .54.16l3.81 2L12 11.06L7.63 8.44l3.84-2a1 1 0 0 1 .54-.15z"></svg:path>`,
})
export class MageThreeDBoxSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThumbsDownIcon],svg[mage-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.75 2.75H4.568c-.98 0-1.775.795-1.775 1.776v8.284c0 .98.795 1.775 1.775 1.775h1.184c.98 0 1.775-.794 1.775-1.775V4.526c0-.98-.795-1.776-1.775-1.776"></svg:path><svg:path d="m21.16 11.757l-1.42-7.101a2.37 2.37 0 0 0-2.367-1.906h-7.48a2.367 2.367 0 0 0-2.367 2.367v7.101a3.23 3.23 0 0 0 1.184 2.367l.982 5.918a.887.887 0 0 0 1.278.65l1.1-.543a3.55 3.55 0 0 0 1.87-4.048l-.496-1.965h5.396a2.368 2.368 0 0 0 2.32-2.84"></svg:path></svg:g>`,
})
export class MageThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThumbsDownFillIcon],svg[mage-thumbs-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.89 11.6l-1.42-7.09a3.12 3.12 0 0 0-1.1-1.83a3.2 3.2 0 0 0-2-.68H9.89a3.1 3.1 0 0 0-2.21.91A2.48 2.48 0 0 0 5.75 2H4.56a2.52 2.52 0 0 0-2.52 2.52v8.29a2.52 2.52 0 0 0 2.52 2.52h1.2a2.48 2.48 0 0 0 1.85-.82q.18.251.41.46l.94 5.65a1.65 1.65 0 0 0 .87 1.2c.23.114.483.175.74.18a1.7 1.7 0 0 0 .74-.18l1.1-.54a4.29 4.29 0 0 0 2.26-4.91l-.26-1h4.44c.46.004.915-.1 1.33-.3a3.13 3.13 0 0 0 1.72-3.44zM6.76 12.81a1 1 0 0 1-1 1H4.57a1 1 0 0 1-1-1V4.52a1 1 0 0 1 1-1h1.19a1 1 0 0 1 1 1z"></svg:path>`,
})
export class MageThumbsDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThumbsUpIcon],svg[mage-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.75 9.415H4.568c-.98 0-1.775.794-1.775 1.775v8.284c0 .98.795 1.776 1.775 1.776h1.184c.98 0 1.775-.795 1.775-1.776V11.19c0-.98-.795-1.775-1.775-1.775"></svg:path><svg:path d="m21.16 12.243l-1.42 7.101a2.37 2.37 0 0 1-2.367 1.906h-7.48a2.367 2.367 0 0 1-2.367-2.367v-7.101A3.23 3.23 0 0 1 8.71 9.415l.982-5.918a.888.888 0 0 1 1.278-.65l1.1.544a3.55 3.55 0 0 1 1.87 4.047l-.496 1.965h5.396a2.367 2.367 0 0 1 2.32 2.84"></svg:path></svg:g>`,
})
export class MageThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageThumbsUpFillIcon],svg[mage-thumbs-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.863 11.026c-.11-.45-.319-.87-.61-1.23a3 3 0 0 0-1.08-.84a3.1 3.1 0 0 0-1.34-.3h-4.43l.26-1a4.3 4.3 0 0 0-.26-2.85a4.37 4.37 0 0 0-2-2.05l-1.1-.54a1.67 1.67 0 0 0-1.48 0a1.65 1.65 0 0 0-.58.5a1.54 1.54 0 0 0-.29.7l-.94 5.65a3 3 0 0 0-.41.46a2.48 2.48 0 0 0-1.87-.9h-1.18a2.52 2.52 0 0 0-2.52 2.52v8.29a2.52 2.52 0 0 0 2.52 2.52h1.18a2.5 2.5 0 0 0 1.94-.91a3.13 3.13 0 0 0 2.21.91h7.52a3.12 3.12 0 0 0 2-.69a3.06 3.06 0 0 0 1.1-1.82l1.42-7.09a3.2 3.2 0 0 0-.06-1.33m-15.13 8.45a1 1 0 0 1-1 1h-1.18a1 1 0 0 1-1-1v-8.29a1 1 0 0 1 1-1h1.18a1 1 0 0 1 1 1z"></svg:path>`,
})
export class MageThumbsUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTiktokIcon],svg[mage-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.357 7.75a.537.537 0 0 0-.495-.516a4.7 4.7 0 0 1-2.415-.938a4.85 4.85 0 0 1-1.887-3.3a.54.54 0 0 0-.517-.496h-2.108a.517.517 0 0 0-.517.527v12.59a2.794 2.794 0 0 1-2.974 2.762a2.815 2.815 0 0 1-2.51-3.711A2.836 2.836 0 0 1 9.93 12.78a.506.506 0 0 0 .558-.506V9.807s-.896-.063-1.202-.063a5.27 5.27 0 0 0-4.101 1.93a5.8 5.8 0 0 0-1.37 2.52a5.86 5.86 0 0 0 2.14 6.072A5.93 5.93 0 0 0 9.591 21.5q.451 0 .896-.063A5.95 5.95 0 0 0 13.8 19.78a5.84 5.84 0 0 0 1.75-4.133V8.71a7.84 7.84 0 0 0 4.218 1.613a.517.517 0 0 0 .548-.527V7.751z"></svg:path>`,
})
export class MageTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTiktokCircleIcon],svg[mage-tiktok-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.36 5.36 0 0 1-2.903-1.108v4.728a3.94 3.94 0 0 1-1.18 2.81a4 4 0 0 1-2.87 1.17a4.1 4.1 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.93 1.93 0 0 0 1.313-1.816V5.754a.36.36 0 0 1 .359-.36h1.415a.36.36 0 0 1 .359.34a3.3 3.3 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z"></svg:path>`,
})
export class MageTiktokCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrashIcon],svg[mage-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.47 6.015v12.514a2.72 2.72 0 0 0 2.721 2.721h7.618a2.72 2.72 0 0 0 2.72-2.72V6.014m-15.235.001h17.412"></svg:path><svg:path d="M8.735 6.015V4.382a1.63 1.63 0 0 1 1.633-1.632h3.264a1.63 1.63 0 0 1 1.633 1.632v1.633M9.824 16.992v-5.439m4.353 5.439v-5.439"></svg:path></svg:g>`,
})
export class MageTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrash2Icon],svg[mage-trash-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.47 6.015v12.514a2.72 2.72 0 0 0 2.721 2.721h7.618a2.72 2.72 0 0 0 2.72-2.72V6.014m-15.235.001h17.412"></svg:path><svg:path d="M8.735 6.015V4.382a1.63 1.63 0 0 1 1.633-1.632h3.264a1.63 1.63 0 0 1 1.633 1.632v1.633"></svg:path></svg:g>`,
})
export class MageTrash2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrash2FillIcon],svg[mage-trash-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.705 5.27h-4.7v-.89a2.4 2.4 0 0 0-.69-1.68a2.38 2.38 0 0 0-1.69-.7h-3.26a2.44 2.44 0 0 0-1.69.7a2.4 2.4 0 0 0-.69 1.68v.89h-4.69a.75.75 0 0 0 0 1.5h1.42v11.76A3.47 3.47 0 0 0 8.185 22h7.62a3.47 3.47 0 0 0 3.47-3.47V6.77h1.43a.75.75 0 0 0 0-1.5m-6.2 0h-5v-.89a.9.9 0 0 1 .25-.62a.94.94 0 0 1 .63-.26h3.26a.88.88 0 0 1 .63.26a.9.9 0 0 1 .25.62z"></svg:path>`,
})
export class MageTrash2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrash3Icon],svg[mage-trash-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.47 6.015v12.514a2.72 2.72 0 0 0 2.721 2.721h7.618a2.72 2.72 0 0 0 2.72-2.72V6.014m-15.235.001h17.412"></svg:path><svg:path d="M8.735 6.015V4.382a1.63 1.63 0 0 1 1.633-1.632h3.264a1.63 1.63 0 0 1 1.633 1.632v1.633m-5.984 6.081h5.438m-5.438 4.353h5.438"></svg:path></svg:g>`,
})
export class MageTrash3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrash3FillIcon],svg[mage-trash-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.71 5.275h-4.69v-.89a2.37 2.37 0 0 0-.7-1.68a2.4 2.4 0 0 0-1.68-.7h-3.26a2.38 2.38 0 0 0-1.69.7a2.4 2.4 0 0 0-.7 1.68v.89H3.3a.75.75 0 1 0 0 1.5h1.43v11.76a3.48 3.48 0 0 0 1 2.46a3.54 3.54 0 0 0 2.46 1h7.62a3.47 3.47 0 0 0 3.47-3.47V6.775h1.42a.75.75 0 0 0 0-1.5zm-11.22-.89a.9.9 0 0 1 .549-.813a.9.9 0 0 1 .341-.067h3.26a.9.9 0 0 1 .812.544q.068.16.068.336v.89h-5zm5.24 13.07H9.29a1 1 0 0 1 0-2h5.44a1 1 0 0 1 0 2m0-4.35H9.29a1 1 0 0 1 0-2h5.44a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageTrash3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrashFillIcon],svg[mage-trash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.725 5.275h-4.69v-.89a2.4 2.4 0 0 0-.7-1.68a2.38 2.38 0 0 0-1.69-.7h-3.26a2.38 2.38 0 0 0-1.69.7a2.4 2.4 0 0 0-.69 1.68v.89h-4.69a.75.75 0 1 0 0 1.5h1.42v11.76a3.45 3.45 0 0 0 1 2.46a3.5 3.5 0 0 0 2.45 1h7.62a3.5 3.5 0 0 0 2.45-1a3.45 3.45 0 0 0 1-2.46V6.775h1.43a.75.75 0 0 0 0-1.5zm-11.2-.89a.87.87 0 0 1 .26-.62a.9.9 0 0 1 .62-.26h3.26a.88.88 0 0 1 .63.26a.9.9 0 0 1 .26.62v.89h-5zm1.33 12.61a1 1 0 1 1-2 0v-5.43a1 1 0 0 1 2 0zm4.36 0a1 1 0 0 1-2 0v-5.43a1 1 0 0 1 2 0z"></svg:path>`,
})
export class MageTrashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrashSquareIcon],svg[mage-trash-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M7.874 8.218v7.908a1.72 1.72 0 0 0 1.72 1.719h4.813a1.72 1.72 0 0 0 1.719-1.72V8.219m-9.627-.001h11.002m-7.564 0V7.187a1.03 1.03 0 0 1 1.032-1.032h2.062a1.03 1.03 0 0 1 1.032 1.032v1.031"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageTrashSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrashSquareFillIcon],svg[mage-trash-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 7.47v.56h-3.12v-.56a.57.57 0 0 1 .11-.28a.56.56 0 0 1 .27-.1h2.55a.3.3 0 0 1 .11.09a.5.5 0 0 1 .09.12a.3.3 0 0 1-.01.17"></svg:path><svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.75 6.75 0 0 0 15.25 2m2.25 6.88a.5.5 0 0 1-.15.21a.6.6 0 0 1-.22.14a.6.6 0 0 1-.26 0h-.55v6.35a2.1 2.1 0 0 1-.63 1.51a2.07 2.07 0 0 1-1.51.63H9.93a2.15 2.15 0 0 1-2.14-2.14V9.21h-.54a.6.6 0 0 1-.23 0a.6.6 0 0 1-.2-.14a.7.7 0 0 1-.14-.2a.7.7 0 0 1 0-.24a.63.63 0 0 1 .19-.43a.6.6 0 0 1 .43-.19h2.42v-.29c.01-.407.17-.795.45-1.09a1.56 1.56 0 0 1 1.08-.44h1.83a1.54 1.54 0 0 1 1.08.45c.148.14.264.311.34.5c.081.182.119.38.11.58v.29h2.42a.6.6 0 0 1 .44.19a.58.58 0 0 1 .18.43a.6.6 0 0 1-.12.25z"></svg:path>`,
})
export class MageTrashSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyIcon],svg[mage-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.08 2.752H8.92a1.97 1.97 0 0 0-2.062 1.85v6.077a5.49 5.49 0 0 0 3.024 4.8a4.52 4.52 0 0 0 4.236 0a5.49 5.49 0 0 0 3.024-4.8V4.602a1.97 1.97 0 0 0-2.062-1.85Z"></svg:path><svg:path d="M17.142 4.602h2.054a1.97 1.97 0 0 1 2.053 1.85a6.8 6.8 0 0 1-.87 3.311a7.74 7.74 0 0 1-2.423 2.608l-.814.555l-.795.481M6.858 4.602H4.804a1.97 1.97 0 0 0-2.053 1.85c.003 1.16.302 2.3.87 3.311a7.74 7.74 0 0 0 2.423 2.608l.814.555l.795.481m2.294 5.068v-2.969m4.106 2.969v-2.969M8.81 18.475h6.38a1.95 1.95 0 0 1 1.952 1.952v.333a.49.49 0 0 1-.49.49H7.348a.49.49 0 0 1-.49-.49v-.333a1.95 1.95 0 0 1 1.951-1.952Z"></svg:path></svg:g>`,
})
export class MageTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyCircleIcon],svg[mage-trophy-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15.08 2.752H8.92a1.97 1.97 0 0 0-2.062 1.85v6.077a5.49 5.49 0 0 0 3.024 4.8a4.52 4.52 0 0 0 4.236 0a5.49 5.49 0 0 0 3.024-4.8V4.602a1.97 1.97 0 0 0-2.062-1.85Z"></svg:path><svg:path stroke-linecap="round" d="M17.142 4.602h2.054a1.97 1.97 0 0 1 2.053 1.85a6.8 6.8 0 0 1-.87 3.311a7.74 7.74 0 0 1-2.423 2.608l-.814.555l-.795.481M6.858 4.602H4.804a1.97 1.97 0 0 0-2.053 1.85c.003 1.16.302 2.3.87 3.311a7.74 7.74 0 0 0 2.423 2.608l.814.555l.795.481m2.294 5.068v-2.969m4.106 2.969v-2.969M8.81 18.475h6.38a1.95 1.95 0 0 1 1.952 1.952v.333a.49.49 0 0 1-.49.49H7.348a.49.49 0 0 1-.49-.49v-.333a1.95 1.95 0 0 1 1.951-1.952Z"></svg:path><svg:rect width="4" height="4" x="10" y="7.004" rx="2"></svg:rect></svg:g>`,
})
export class MageTrophyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyCircleFillIcon],svg[mage-trophy-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.083 4.548a2.64 2.64 0 0 0-1.904-.69h-1.426a2.7 2.7 0 0 0-.768-1.161a2.68 2.68 0 0 0-1.924-.69H8.979a2.7 2.7 0 0 0-1.994.69a2.6 2.6 0 0 0-.748 1.16H4.831a2.64 2.64 0 0 0-1.934.69A2.73 2.73 0 0 0 2 6.46a7.6 7.6 0 0 0 .997 3.683a8.4 8.4 0 0 0 2.642 2.862l.848.57l.638.39a6.2 6.2 0 0 0 2.083 2.002v1.761H8.82a2.68 2.68 0 0 0-1.904.791a2.7 2.7 0 0 0-.788 1.91v.331a1.24 1.24 0 0 0 .359.88c.233.232.549.362.877.361h9.272a1.22 1.22 0 0 0 1.145-.765c.062-.15.093-.313.091-.476v-.33c0-.717-.283-1.404-.788-1.91a2.7 2.7 0 0 0-1.903-.792h-.39v-1.771a6.2 6.2 0 0 0 2.094-2.002l.658-.4l.808-.55a8.5 8.5 0 0 0 2.652-2.872A7.7 7.7 0 0 0 22 6.409a2.76 2.76 0 0 0-.917-1.861M4.303 9.42a6.1 6.1 0 0 1-.768-2.902A1.22 1.22 0 0 1 4.36 5.44c.151-.051.312-.072.471-.062h1.306v5.344q.013.428.07.85a6.8 6.8 0 0 1-1.904-2.15m7.707 2.362a2.73 2.73 0 0 1-1.523-.464A2.75 2.75 0 0 1 9.32 8.494a2.76 2.76 0 0 1 .75-1.409a2.74 2.74 0 0 1 2.988-.596a2.744 2.744 0 0 1 .897 4.461c-.505.51-1.19.802-1.906.813zm7.707-2.362a7.15 7.15 0 0 1-1.904 2.152q.057-.434.07-.87V5.377h1.335a1.15 1.15 0 0 1 .868.31c.227.2.37.48.399.781a6.2 6.2 0 0 1-.768 2.952"></svg:path><svg:path fill="currentColor" d="M12.01 10.262c.688 0 1.246-.56 1.246-1.251s-.558-1.25-1.246-1.25s-1.246.56-1.246 1.25s.558 1.25 1.246 1.25"></svg:path>`,
})
export class MageTrophyCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyDownIcon],svg[mage-trophy-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.08 2.752H8.92a1.97 1.97 0 0 0-2.062 1.85v6.077a5.49 5.49 0 0 0 3.024 4.8a4.52 4.52 0 0 0 4.236 0a5.49 5.49 0 0 0 3.024-4.8V4.602a1.97 1.97 0 0 0-2.062-1.85Z"></svg:path><svg:path d="M17.142 4.602h2.054a1.97 1.97 0 0 1 2.053 1.85a6.8 6.8 0 0 1-.87 3.311a7.74 7.74 0 0 1-2.423 2.608l-.814.555l-.795.481M6.858 4.602H4.804a1.97 1.97 0 0 0-2.053 1.85c.003 1.16.302 2.3.87 3.311a7.74 7.74 0 0 0 2.423 2.608l.814.555l.795.481m2.294 5.068v-2.969m4.106 2.969v-2.969M8.81 18.475h6.38a1.95 1.95 0 0 1 1.952 1.952v.333a.49.49 0 0 1-.49.49H7.348a.49.49 0 0 1-.49-.49v-.333a1.95 1.95 0 0 1 1.951-1.952Z"></svg:path><svg:path stroke-miterlimit="10" d="M12 11.504v-5"></svg:path><svg:path stroke-linejoin="round" d="m9.707 9.399l1.967 1.967a.46.46 0 0 0 .652 0l1.967-1.967"></svg:path></svg:g>`,
})
export class MageTrophyDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyDownFillIcon],svg[mage-trophy-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.043 4.546a2.62 2.62 0 0 0-1.904-.69h-1.426a2.7 2.7 0 0 0-.768-1.162a2.68 2.68 0 0 0-1.924-.69H8.929a2.65 2.65 0 0 0-1.934.69c-.354.31-.616.712-.758 1.161H4.832a2.64 2.64 0 0 0-1.935.691A2.7 2.7 0 0 0 2 6.457a7.6 7.6 0 0 0 .997 3.683a8.5 8.5 0 0 0 2.642 2.863l.848.57l.638.39a6.2 6.2 0 0 0 2.083 2.002v1.762H8.82a2.69 2.69 0 0 0-2.692 2.702v.33a1.235 1.235 0 0 0 .761 1.15c.15.061.312.092.475.091h9.272a1.245 1.245 0 0 0 1.236-1.241v-.33a2.7 2.7 0 0 0-.787-1.912a2.72 2.72 0 0 0-1.905-.79h-.388v-1.772a6.2 6.2 0 0 0 2.093-2.001l.658-.4l.808-.551a8.5 8.5 0 0 0 2.652-2.873A7.7 7.7 0 0 0 22 6.407a2.76 2.76 0 0 0-.957-1.861M4.263 9.42a6.1 6.1 0 0 1-.767-2.902a1.225 1.225 0 0 1 .824-1.08c.151-.051.312-.072.472-.061h1.306v5.344q.012.427.07.85A6.8 6.8 0 0 1 4.263 9.42m10.519.53l-1.994 2.002a1.16 1.16 0 0 1-.698.34a.57.57 0 0 1-.3 0a1.2 1.2 0 0 1-.318-.08a1.4 1.4 0 0 1-.39-.26L9.09 9.95a.75.75 0 0 1 0-1.06a.766.766 0 0 1 1.067 0l.997 1V6.518a.75.75 0 0 1 .747-.751a.746.746 0 0 1 .748.75V9.89l.997-1a.746.746 0 0 1 1.257.535a.75.75 0 0 1-.2.525zm4.885-.53a7 7 0 0 1-1.894 2.152q.057-.435.07-.871V5.377h1.335c.318-.01.628.1.868.31c.227.2.37.479.399.78a6.1 6.1 0 0 1-.778 2.953"></svg:path>`,
})
export class MageTrophyDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyFillIcon],svg[mage-trophy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.083 4.585a2.62 2.62 0 0 0-1.904-.69h-1.426a2.7 2.7 0 0 0-.768-1.162a2.68 2.68 0 0 0-1.924-.69H8.979a2.7 2.7 0 0 0-1.994.69a2.6 2.6 0 0 0-.748 1.161H4.831a2.64 2.64 0 0 0-1.934.69A2.73 2.73 0 0 0 2 6.497a7.6 7.6 0 0 0 .997 3.682a8.4 8.4 0 0 0 2.642 2.862l.848.57l.638.391a6.2 6.2 0 0 0 2.083 2.002v1.76H8.82c-.714 0-1.4.285-1.904.792a2.7 2.7 0 0 0-.788 1.91v.33a1.23 1.23 0 0 0 .359.881c.233.232.549.361.877.36h9.272a1.22 1.22 0 0 0 1.145-.764c.062-.15.093-.313.091-.476v-.33a2.7 2.7 0 0 0-.788-1.91a2.7 2.7 0 0 0-1.903-.792h-.39v-1.771a6.2 6.2 0 0 0 2.094-2.002l.658-.4l.808-.55a8.5 8.5 0 0 0 2.652-2.873A7.7 7.7 0 0 0 22 6.447a2.76 2.76 0 0 0-.917-1.861M4.303 9.458a6.1 6.1 0 0 1-.768-2.902a1.22 1.22 0 0 1 .825-1.08c.151-.05.312-.072.471-.06h1.306v5.343q.013.427.07.85a6.8 6.8 0 0 1-1.904-2.151m15.414 0a7.15 7.15 0 0 1-1.904 2.152q.057-.435.07-.871V5.415h1.335a1.15 1.15 0 0 1 .868.31c.227.2.37.48.399.781a6.2 6.2 0 0 1-.768 2.952"></svg:path>`,
})
export class MageTrophyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyStarIcon],svg[mage-trophy-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.08 2.752H8.92a1.97 1.97 0 0 0-2.062 1.85v6.077a5.49 5.49 0 0 0 3.024 4.8a4.52 4.52 0 0 0 4.236 0a5.49 5.49 0 0 0 3.024-4.8V4.602a1.97 1.97 0 0 0-2.062-1.85Z"></svg:path><svg:path d="M17.142 4.602h2.054a1.97 1.97 0 0 1 2.053 1.85a6.8 6.8 0 0 1-.87 3.311a7.74 7.74 0 0 1-2.423 2.608l-.814.555l-.795.481M6.858 4.602H4.804a1.97 1.97 0 0 0-2.053 1.85c.003 1.16.302 2.3.87 3.311a7.74 7.74 0 0 0 2.423 2.608l.814.555l.795.481m2.294 5.068v-2.969m4.106 2.969v-2.969M8.81 18.475h6.38a1.95 1.95 0 0 1 1.952 1.952v.333a.49.49 0 0 1-.49.49H7.348a.49.49 0 0 1-.49-.49v-.333a1.95 1.95 0 0 1 1.951-1.952Z"></svg:path><svg:path stroke-linejoin="round" d="m12.143 10.308l1.18.62a.302.302 0 0 0 .437-.319l-.226-1.313a.3.3 0 0 1 .087-.268l.955-.93a.3.3 0 0 0-.166-.515l-1.319-.19a.3.3 0 0 1-.225-.165l-.603-1.205a.302.302 0 0 0-.542 0l-.602 1.205a.3.3 0 0 1-.226.165l-1.3.19a.301.301 0 0 0-.17.515l.955.93a.3.3 0 0 1 .088.268l-.226 1.313a.3.3 0 0 0 .436.32l1.18-.62a.3.3 0 0 1 .287 0"></svg:path></svg:g>`,
})
export class MageTrophyStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyStarFillIcon],svg[mage-trophy-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.083 4.548a2.62 2.62 0 0 0-1.904-.69h-1.426a2.7 2.7 0 0 0-.768-1.162a2.67 2.67 0 0 0-1.924-.69H8.979a2.7 2.7 0 0 0-1.994.69a2.6 2.6 0 0 0-.748 1.161H4.831a2.64 2.64 0 0 0-1.934.69A2.73 2.73 0 0 0 2 6.46a7.6 7.6 0 0 0 .997 3.683a8.4 8.4 0 0 0 2.642 2.862l.848.57l.638.39a6.2 6.2 0 0 0 2.083 2.002v1.76H8.82c-.714 0-1.4.286-1.904.792a2.7 2.7 0 0 0-.788 1.91v.331a1.24 1.24 0 0 0 .359.88c.233.232.549.362.877.361h9.272a1.22 1.22 0 0 0 1.145-.765c.062-.15.093-.313.091-.476v-.33c0-.717-.283-1.404-.788-1.91a2.7 2.7 0 0 0-1.903-.792h-.39v-1.771a6.2 6.2 0 0 0 2.094-2.002l.658-.4l.808-.55a8.5 8.5 0 0 0 2.652-2.872A7.7 7.7 0 0 0 22 6.409a2.76 2.76 0 0 0-.917-1.861M4.303 9.42a6.1 6.1 0 0 1-.768-2.902a1.22 1.22 0 0 1 .825-1.08c.151-.05.312-.072.471-.06h1.306v5.343q.013.428.07.85a6.8 6.8 0 0 1-1.904-2.15m10.558-1.22a.83.83 0 0 1-.239.44l-.658.64l.16.92a.92.92 0 0 1-.349.87a1 1 0 0 1-.469.161h-.06a.9.9 0 0 1-.418-.11l-.818-.43l-.828.43a.8.8 0 0 1-.478.1a.86.86 0 0 1-.758-.55a.9.9 0 0 1-.05-.49l.15-.921l-.658-.64a.84.84 0 0 1-.24-.43a.8.8 0 0 1 0-.501a.75.75 0 0 1 .27-.39a.85.85 0 0 1 .448-.21l.898-.13l.428-.851a.77.77 0 0 1 .32-.35a.89.89 0 0 1 .937 0a.77.77 0 0 1 .329.36l.418.84l.928.13a.92.92 0 0 1 .707.61a.75.75 0 0 1 .03.481zm4.856 1.22a7.15 7.15 0 0 1-1.904 2.152q.057-.435.07-.871V5.378h1.335a1.15 1.15 0 0 1 .868.31c.227.2.37.48.399.781a6.2 6.2 0 0 1-.768 2.952"></svg:path>`,
})
export class MageTrophyStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyUpIcon],svg[mage-trophy-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.08 2.752H8.92a1.97 1.97 0 0 0-2.062 1.85v6.077a5.49 5.49 0 0 0 3.024 4.8a4.52 4.52 0 0 0 4.236 0a5.49 5.49 0 0 0 3.024-4.8V4.602a1.97 1.97 0 0 0-2.062-1.85Z"></svg:path><svg:path d="M17.142 4.602h2.054a1.97 1.97 0 0 1 2.053 1.85a6.8 6.8 0 0 1-.87 3.311a7.74 7.74 0 0 1-2.423 2.608l-.814.555l-.795.481M6.858 4.602H4.804a1.97 1.97 0 0 0-2.053 1.85c.003 1.16.302 2.3.87 3.311a7.74 7.74 0 0 0 2.423 2.608l.814.555l.795.481m2.294 5.068v-2.969m4.106 2.969v-2.969M8.81 18.475h6.38a1.95 1.95 0 0 1 1.952 1.952v.333a.49.49 0 0 1-.49.49H7.348a.49.49 0 0 1-.49-.49v-.333a1.95 1.95 0 0 1 1.951-1.952Z"></svg:path><svg:path stroke-miterlimit="10" d="M12 6.504v5"></svg:path><svg:path stroke-linejoin="round" d="M14.293 8.609L12.326 6.64a.46.46 0 0 0-.652 0L9.707 8.61"></svg:path></svg:g>`,
})
export class MageTrophyUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTrophyUpFillIcon],svg[mage-trophy-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.043 4.546a2.62 2.62 0 0 0-1.904-.69h-1.426a2.7 2.7 0 0 0-.768-1.162a2.68 2.68 0 0 0-1.924-.69H8.929a2.65 2.65 0 0 0-1.934.69c-.354.31-.616.712-.758 1.161H4.832a2.64 2.64 0 0 0-1.935.691A2.7 2.7 0 0 0 2 6.457a7.6 7.6 0 0 0 .997 3.683a8.5 8.5 0 0 0 2.642 2.863l.848.57l.638.39a6.2 6.2 0 0 0 2.083 2.002v1.762H8.82a2.69 2.69 0 0 0-2.692 2.702v.33a1.235 1.235 0 0 0 .761 1.15c.15.061.312.092.475.091h9.272a1.245 1.245 0 0 0 1.236-1.241v-.33a2.7 2.7 0 0 0-.787-1.912a2.72 2.72 0 0 0-1.905-.79h-.388v-1.772a6.2 6.2 0 0 0 2.093-2.001l.658-.4l.808-.551a8.5 8.5 0 0 0 2.652-2.873A7.7 7.7 0 0 0 22 6.407a2.76 2.76 0 0 0-.957-1.861M4.263 9.42a6.1 6.1 0 0 1-.767-2.902a1.2 1.2 0 0 1 .398-.831a1.2 1.2 0 0 1 .898-.31h1.306v5.344q.012.427.07.85A6.8 6.8 0 0 1 4.263 9.42m10.519-.26a.746.746 0 0 1-1.057 0l-.997-1.001v3.383a.75.75 0 0 1-.748.75a.746.746 0 0 1-.748-.75V8.159l-.997 1a.75.75 0 0 1-1.284-.526c0-.2.077-.392.218-.534l1.993-2.002q.176-.166.4-.26q.22-.09.458-.09a1.17 1.17 0 0 1 .847.35L14.861 8.1a.75.75 0 0 1-.08 1.04zm4.885.26a7 7 0 0 1-1.894 2.152q.057-.435.07-.871V5.377h1.335c.318-.01.628.1.868.31c.227.2.37.479.399.78a6.1 6.1 0 0 1-.778 2.953"></svg:path>`,
})
export class MageTrophyUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTubeIcon],svg[mage-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.713 5.278A9.5 9.5 0 1 0 5.287 18.722A9.5 9.5 0 0 0 18.713 5.278M12 16.214a4.222 4.222 0 1 1 .007-8.445A4.222 4.222 0 0 1 12 16.214m6.713-10.936l-3.736 3.737m3.736 9.69l-3.736-3.737m-5.954 0l-3.736 3.737m3.736-9.69L5.287 5.278"></svg:path>`,
})
export class MageTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTubeFillIcon],svg[mage-tube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.121 12.95c.12.636.369 1.242.73 1.78l-2.7 2.7l-1.07 1.06a10.1 10.1 0 0 1-1.55-2.56a10.23 10.23 0 0 1-.34-6.9a10 10 0 0 1 1.9-3.54l3.76 3.76a3 3 0 0 0-.23.38a5 5 0 0 0-.5 3.32m11.34 6.96a10.22 10.22 0 0 1-11.33 1.13a10 10 0 0 1-1.68-1.13l3.77-3.77a5 5 0 0 0 5.48 0l2.76 2.69zm3.79-7.92a10.34 10.34 0 0 1-2.32 6.5l-3.77-3.77a5 5 0 0 0 .8-2.24a5 5 0 0 0-.8-3.24l3.77-3.77a10.27 10.27 0 0 1 2.32 6.52m-3.79-7.91l-3.72 3.75a5.2 5.2 0 0 0-1.28-.6a5 5 0 0 0-3.35.16a4.2 4.2 0 0 0-.84.45l-2.71-2.7l-1.1-1.06a8 8 0 0 1 .8-.6a10.23 10.23 0 0 1 12.19.6zm-3 8.26a3.5 3.5 0 0 1-.4 1.29a3.2 3.2 0 0 1-.6.82c-.24.237-.513.439-.81.6a3.44 3.44 0 0 1-1.64.41a3.54 3.54 0 0 1-1.65-.41a4 4 0 0 1-.56-.38a3.2 3.2 0 0 1-.84-1a3.48 3.48 0 0 1 1.73-4.88a3.42 3.42 0 0 1 2.34-.11q.324.1.62.26a3.5 3.5 0 0 1 1.25 1.14q.095.132.16.28a3.3 3.3 0 0 1 .4 1.98"></svg:path>`,
})
export class MageTubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTwitterIcon],svg[mage-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.98 4.003a16.6 16.6 0 0 1-2.66 1.015a4.22 4.22 0 0 0-3.698-1.28a4.316 4.316 0 0 0-3.477 4.945a.4.4 0 0 0 0 .11a11.88 11.88 0 0 1-8.666-4.338a4.184 4.184 0 0 0 1.292 5.597a4.14 4.14 0 0 1-1.899-.519v.056a4.23 4.23 0 0 0 3.312 4.117c-.361.09-.732.135-1.104.133a3.7 3.7 0 0 1-.795-.066a4.23 4.23 0 0 0 3.919 2.914a8.47 8.47 0 0 1-5.2 1.788A8 8 0 0 1 2 18.42a11.73 11.73 0 0 0 6.425 1.888A11.855 11.855 0 0 0 20.457 8.374v-.54a4.55 4.55 0 0 0 1.524-3.831"></svg:path>`,
})
export class MageTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageTwtichIcon],svg[mage-twtich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.899 6.926h-1.455v4.21H16.9zm-3.795 0H11.65v4.21h1.454z"></svg:path><svg:path fill="currentColor" d="M20.398 3H7.156L3.547 6.543v12.674h4.167V23l3.695-3.74h2.778l6.266-6.276zM8.053 14.733V4.771H18.79v7.316l-2.68 2.679h-2.733l-2.187 2.11V14.69z"></svg:path>`,
})
export class MageTwtichIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUnlockedIcon],svg[mage-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.376 9.69V7.378a4.624 4.624 0 0 1 7.895-3.272q.294.29.52.636m-7.259 13.04h6.936"></svg:path><svg:path d="M17 9.688H7c-1.38 0-2.5 1.035-2.5 2.312v6.938c0 1.277 1.12 2.312 2.5 2.312h10c1.38 0 2.5-1.035 2.5-2.312V12c0-1.277-1.12-2.312-2.5-2.312"></svg:path></svg:g>`,
})
export class MageUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUnlockedFillIcon],svg[mage-unlocked-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.96 8.951H8.08v-1.56c0-.766.23-1.515.66-2.15a3.87 3.87 0 0 1 4-1.65a3.8 3.8 0 0 1 2 1.06q.24.237.42.52a.754.754 0 0 0 1.26-.83a5 5 0 0 0-.62-.75a5.26 5.26 0 0 0-2.75-1.47a5.38 5.38 0 0 0-6.43 5.27v1.59a3.12 3.12 0 0 0-2.87 3v6.94A3.16 3.16 0 0 0 7 21.981h10a3.16 3.16 0 0 0 3.25-3.06v-6.94a3.16 3.16 0 0 0-3.29-3.03m-1.53 9.84H8.49a1 1 0 0 1 0-2h6.94a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageUnlockedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUploadIcon],svg[mage-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 3.212v12.026"></svg:path><svg:path stroke-linejoin="round" d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"></svg:path></svg:g>`,
})
export class MageUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserIcon],svg[mage-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.618 21.25c0-3.602-4.016-6.53-7.618-6.53s-7.618 2.928-7.618 6.53M12 11.456a4.353 4.353 0 1 0 0-8.706a4.353 4.353 0 0 0 0 8.706"></svg:path>`,
})
export class MageUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserCheckIcon],svg[mage-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.359 14.724c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.171-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357m.904 6.897l1.688 1.689a.637.637 0 0 0 .909 0l3.403-3.403"></svg:path>`,
})
export class MageUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserCheckFillIcon],svg[mage-user-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.865 21.25a.75.75 0 0 1-.22.53a.8.8 0 0 1-.53.22H4.481a.75.75 0 0 1-.75-.75c0-4.102 4.491-7.282 8.372-7.282a.76.76 0 0 1 .75.75zm4.001-12.174a5.07 5.07 0 0 1-4.711 3.141a5.12 5.12 0 0 1-5.102-5.112a5.1 5.1 0 0 1 .87-2.84a5.08 5.08 0 0 1 5.252-2.161c.991.192 1.902.68 2.61 1.4a5.05 5.05 0 0 1 1.4 2.621a5.14 5.14 0 0 1-.32 2.951m-.389 11.534a1.4 1.4 0 0 1-.48-.09a1.3 1.3 0 0 1-.41-.28l-1.33-1.33a.75.75 0 1 1 1.06-1.061l1.17 1.17l2.52-2.53a.75.75 0 0 1 1.06 1.06l-2.7 2.69a1.1 1.1 0 0 1-.4.27a1.2 1.2 0 0 1-.49.1"></svg:path>`,
})
export class MageUserCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserCircleIcon],svg[mage-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M6.374 19.653a6.333 6.333 0 0 1 11.252 0M12 13.056a3.399 3.399 0 1 0 0-6.798a3.399 3.399 0 0 0 0 6.798"></svg:path></svg:g>`,
})
export class MageUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserCircleFillIcon],svg[mage-user-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.967 1.752c-2.15.01-4.244.695-5.984 1.957a10.234 10.234 0 0 0-.126 16.493q.075.074.17.12a10.23 10.23 0 0 0 11.95 0a.8.8 0 0 0 .18-.13a10.235 10.235 0 0 0-.172-16.506a10.28 10.28 0 0 0-5.998-1.934zm0 3.76a4.16 4.16 0 0 1 3.878 2.534a4.14 4.14 0 0 1-.882 4.543A4.158 4.158 0 0 1 7.86 9.632a4.15 4.15 0 0 1 1.21-2.898a4.16 4.16 0 0 1 2.897-1.222m4.627 13.92a8.75 8.75 0 0 1-9.245 0a8 8 0 0 1-1.212-.9a7.1 7.1 0 0 1 2.144-2a7.23 7.23 0 0 1 7.382 0a7.1 7.1 0 0 1 2.143 2q-.563.506-1.212.9"></svg:path>`,
})
export class MageUserCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserCrossIcon],svg[mage-user-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.959 14.724c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.17-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357"></svg:path><svg:path stroke-miterlimit="10" d="m19.661 15.487l-5 4.989m0-4.978l5 4.989"></svg:path></svg:g>`,
})
export class MageUserCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserCrossFillIcon],svg[mage-user-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.975 14.718v6.53a.76.76 0 0 1-.75.75h-7.62a.75.75 0 0 1-.75-.75c0-4.1 4.49-7.28 8.37-7.28a.76.76 0 0 1 .75.75m3.97-5.64a5.2 5.2 0 0 1-1.88 2.29a5.11 5.11 0 0 1-5.451.121a5.1 5.1 0 0 1-1.609-7.211a5.1 5.1 0 0 1 2.29-1.89a5.17 5.17 0 0 1 3-.28a5 5 0 0 1 2.61 1.4a5.05 5.05 0 0 1 1.4 2.62a5.14 5.14 0 0 1-.36 2.95m2.98 10.34a.75.75 0 0 1-1.06 1.06l-1.44-1.44l-1.44 1.44a.77.77 0 0 1-.817.154a.75.75 0 0 1-.242-1.224l1.43-1.43l-1.43-1.43a.75.75 0 0 1 1.06-1.06l1.43 1.43l1.45-1.44a.75.75 0 0 1 1.06 1.06l-1.44 1.44z"></svg:path>`,
})
export class MageUserCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserFillIcon],svg[mage-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.37 21.25a.75.75 0 0 1-.75.75H4.38a.75.75 0 0 1-.75-.75c0-4.1 4.5-7.28 8.37-7.28s8.37 3.18 8.37 7.28M17.1 7.11A5.1 5.1 0 1 1 12 2a5.11 5.11 0 0 1 5.1 5.11"></svg:path>`,
})
export class MageUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserMinusIcon],svg[mage-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12.125 14.719c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.17-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357"></svg:path><svg:path stroke-miterlimit="10" d="M13.495 17.988h6"></svg:path></svg:g>`,
})
export class MageUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserMinusFillIcon],svg[mage-user-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.166 21.25a.75.75 0 0 1-.75.75h-7.64a.75.75 0 0 1-.75-.75c0-4.105 4.504-7.289 8.378-7.289a.75.75 0 0 1 .751.751zM17.14 9.076a5 5 0 0 1-1.892 2.293a5.095 5.095 0 0 1-6.446-.638A5.1 5.1 0 0 1 7.31 7.114a5.1 5.1 0 0 1 .861-2.843a5.17 5.17 0 0 1 2.302-1.882A5.115 5.115 0 0 1 16.05 3.5a5 5 0 0 1 1.392 2.623c.197.992.092 2.02-.3 2.953m2.081 9.671h-3.934a.75.75 0 0 1 0-1.502h3.934a.751.751 0 0 1 0 1.502"></svg:path>`,
})
export class MageUserMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserPlusIcon],svg[mage-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12.125 14.719c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.17-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357"></svg:path><svg:path stroke-miterlimit="10" d="M16.488 14.983v5.997m-2.993-2.992h6"></svg:path></svg:g>`,
})
export class MageUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserPlusFillIcon],svg[mage-user-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.181 21.25a.75.75 0 0 1-.75.75H4.792a.75.75 0 0 1-.75-.75c0-4.105 4.504-7.289 8.379-7.289a.75.75 0 0 1 .75.751zm3.975-12.174a5 5 0 0 1-1.892 2.293a5.095 5.095 0 0 1-6.447-.638a5.1 5.1 0 0 1-1.492-3.617a5.1 5.1 0 0 1 .861-2.843a5.17 5.17 0 0 1 2.302-1.882A5.12 5.12 0 0 1 16.064 3.5a5 5 0 0 1 1.392 2.623c.197.992.092 2.02-.3 2.953m2.802 8.91a.74.74 0 0 1-.75.75h-1.362v1.352a.75.75 0 0 1-1.501 0v-1.361h-1.362a.75.75 0 0 1 0-1.502h1.402v-1.362a.751.751 0 0 1 1.501 0v1.362h1.362a.75.75 0 0 1 .71.76"></svg:path>`,
})
export class MageUserPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserQuestionMarkIcon],svg[mage-user-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.959 14.724c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.17-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357"></svg:path><svg:path stroke-miterlimit="10" d="M15.318 15.92a1.6 1.6 0 0 1 1.742-.907a1.55 1.55 0 0 1 1.137.81a1.347 1.347 0 0 1-.784 1.851a.99.99 0 0 0-.64.898v.37"></svg:path><svg:path stroke-linejoin="round" d="M16.745 20.987h.002"></svg:path></svg:g>`,
})
export class MageUserQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserQuestionMarkFillIcon],svg[mage-user-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.37 21.248a.75.75 0 0 1-.75.75H4.99a.75.75 0 0 1-.75-.75c0-4.1 4.49-7.28 8.37-7.28a.76.76 0 0 1 .75.75zm3.96-12.17a5.2 5.2 0 0 1-1.88 2.29a5.11 5.11 0 0 1-5.452.121A5.1 5.1 0 0 1 8.39 4.278a5.1 5.1 0 0 1 2.29-1.89a5.17 5.17 0 0 1 3-.28a5 5 0 0 1 2.61 1.4a5.05 5.05 0 0 1 1.4 2.62a5.14 5.14 0 0 1-.36 2.95m.09 10.61a.76.76 0 0 1-.75-.75v-.37a1.74 1.74 0 0 1 1.12-1.6a.6.6 0 0 0 .24-.14a.5.5 0 0 0 .15-.2a.5.5 0 0 0 0-.25a.7.7 0 0 0 0-.24a.81.81 0 0 0-.58-.39a.8.8 0 0 0-.56.08a.82.82 0 0 0-.38.4a.754.754 0 0 1-1.37-.63a2.36 2.36 0 0 1 2.56-1.33c.36.05.704.187 1 .4c.291.21.53.483.7.8a2 2 0 0 1 .21.88a2.05 2.05 0 0 1-.67 1.58a2 2 0 0 1-.75.45a.2.2 0 0 0-.08.08a.2.2 0 0 0 0 .13v.35a.76.76 0 0 1-.84.75m-.02 2.15a.78.78 0 1 0 0-1.56a.78.78 0 0 0 0 1.56"></svg:path>`,
})
export class MageUserQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserSquareIcon],svg[mage-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6.022 20.504c.284-1.394.974-2.138 2.076-3.038a6.17 6.17 0 0 1 7.805 0c1.101.9 1.882 1.644 2.165 3.038M12 13.028a3.31 3.31 0 1 0 0-6.619a3.31 3.31 0 0 0 0 6.619"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUserSquareFillIcon],svg[mage-user-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.257 2H8.753A6.765 6.765 0 0 0 2 8.75v6.5a6.73 6.73 0 0 0 3.122 5.68a6 6 0 0 0 1.06.56a6.7 6.7 0 0 0 2.561.51h6.504c.9 0 1.791-.18 2.62-.53a6.5 6.5 0 0 0 1.131-.62A6.71 6.71 0 0 0 22 15.26v-6.5A6.76 6.76 0 0 0 15.257 2m-3.252 4.58a3.143 3.143 0 0 1 3.081 3.753a3.14 3.14 0 0 1-4.283 2.288a3.14 3.14 0 0 1-1.94-2.901a3.15 3.15 0 0 1 3.142-3.14m5.002 13.63a5 5 0 0 1-1.7.29H8.803a5.26 5.26 0 0 1-3.391-1.25a6.53 6.53 0 0 1 2.1-2.56a7.176 7.176 0 0 1 9.085 0a6.9 6.9 0 0 1 2.151 2.52c-.523.45-.828.698-1.486.907z"></svg:path>`,
})
export class MageUserSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUsersIcon],svg[mage-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.928 19.634h2.138a1.165 1.165 0 0 0 1.116-1.555a6.85 6.85 0 0 0-6.117-3.95m0-2.759a3.664 3.664 0 0 0 3.665-3.664a3.664 3.664 0 0 0-3.665-3.674m-1.04 16.795a1.908 1.908 0 0 0 1.537-3.035a8.03 8.03 0 0 0-6.222-3.196a8.03 8.03 0 0 0-6.222 3.197a1.909 1.909 0 0 0 1.536 3.034zM9.34 11.485a4.16 4.16 0 0 0 4.15-4.161a4.151 4.151 0 0 0-8.302 0a4.16 4.16 0 0 0 4.151 4.16"></svg:path>`,
})
export class MageUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageUsersFillIcon],svg[mage-users-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.987 18.73a2 2 0 0 1-.34.85a1.9 1.9 0 0 1-1.56.8h-1.651a.74.74 0 0 1-.6-.31a.76.76 0 0 1-.11-.67c.37-1.18.29-2.51-3.061-4.64a.77.77 0 0 1-.32-.85a.76.76 0 0 1 .72-.54a7.61 7.61 0 0 1 6.792 4.39a2 2 0 0 1 .13.97M19.486 7.7a4.43 4.43 0 0 1-4.421 4.42a.76.76 0 0 1-.65-1.13a6.16 6.16 0 0 0 0-6.53a.75.75 0 0 1 .61-1.18a4.3 4.3 0 0 1 3.13 1.34a4.46 4.46 0 0 1 1.291 3.12z"></svg:path><svg:path fill="currentColor" d="M16.675 18.7a2.65 2.65 0 0 1-1.26 2.48c-.418.257-.9.392-1.39.39H4.652a2.63 2.63 0 0 1-1.39-.39A2.62 2.62 0 0 1 2.01 18.7a2.6 2.6 0 0 1 .5-1.35a8.8 8.8 0 0 1 6.812-3.51a8.78 8.78 0 0 1 6.842 3.5a2.7 2.7 0 0 1 .51 1.36M14.245 7.32a4.92 4.92 0 0 1-4.902 4.91a4.903 4.903 0 0 1-4.797-5.858a4.9 4.9 0 0 1 6.678-3.57a4.9 4.9 0 0 1 3.03 4.518z"></svg:path>`,
})
export class MageUsersFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVerifiedCheckIcon],svg[mage-verified-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12.717 3.656l1.137-.904a1.134 1.134 0 0 1 1.808.584l.432 1.51a1.14 1.14 0 0 0 1.137.836h1.467a1.13 1.13 0 0 1 .96.449a1.15 1.15 0 0 1 .178 1.05l-.546 1.626a1.15 1.15 0 0 0 .41 1.293l1.33.973a1.14 1.14 0 0 1 .47.927a1.15 1.15 0 0 1-.47.927l-1.33.973a1.145 1.145 0 0 0-.41 1.293l.546 1.626a1.15 1.15 0 0 1-.602 1.394a1.1 1.1 0 0 1-.536.105h-1.467a1.13 1.13 0 0 0-.712.22a1.14 1.14 0 0 0-.425.616l-.432 1.51a1.15 1.15 0 0 1-.748.782a1.13 1.13 0 0 1-1.06-.198l-1.137-.904a1.13 1.13 0 0 0-1.434 0l-1.137.904a1.135 1.135 0 0 1-1.808-.584l-.432-1.51a1.15 1.15 0 0 0-.425-.617a1.13 1.13 0 0 0-.712-.219H5.302a1.13 1.13 0 0 1-.96-.449a1.15 1.15 0 0 1-.178-1.05l.546-1.626A1.15 1.15 0 0 0 4.3 13.9l-1.33-.973A1.14 1.14 0 0 1 2.5 12a1.15 1.15 0 0 1 .47-.927L4.3 10.1a1.14 1.14 0 0 0 .41-1.293l-.477-1.66a1.15 1.15 0 0 1 .602-1.394a1.1 1.1 0 0 1 .535-.105h1.467a1.145 1.145 0 0 0 1.137-.836l.432-1.51A1.15 1.15 0 0 1 9.17 2.6a1.13 1.13 0 0 1 1.011.209l1.138.904a1.13 1.13 0 0 0 1.399-.057"></svg:path><svg:path d="m8.106 11.894l2.192 2.192a.83.83 0 0 0 1.18 0l4.417-4.418"></svg:path></svg:g>`,
})
export class MageVerifiedCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVerifiedCheckFillIcon],svg[mage-verified-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.02 11.164a1.84 1.84 0 0 0-.57-.67l-1.33-1a.35.35 0 0 1-.14-.2a.36.36 0 0 1 0-.25l.55-1.63a2 2 0 0 0 .06-.9a1.8 1.8 0 0 0-.36-.84a1.86 1.86 0 0 0-.7-.57a1.75 1.75 0 0 0-.85-.17h-1.5a.41.41 0 0 1-.39-.3l-.43-1.5a1.9 1.9 0 0 0-.46-.81a2 2 0 0 0-.78-.49a2 2 0 0 0-.92-.06a1.9 1.9 0 0 0-.83.39l-1.14.9a.35.35 0 0 1-.23.09a.36.36 0 0 1-.22-.05l-1.13-.9a1.85 1.85 0 0 0-.8-.38a1.9 1.9 0 0 0-.88 0a1.9 1.9 0 0 0-.78.43a2.1 2.1 0 0 0-.51.79l-.43 1.51a.38.38 0 0 1-.15.22a.4.4 0 0 1-.27.07H5.41a1.9 1.9 0 0 0-.89.18a1.8 1.8 0 0 0-.71.57a1.9 1.9 0 0 0-.36.83c-.05.293-.03.595.06.88L4 8.993a.41.41 0 0 1-.14.45l-1.33 1c-.242.18-.44.412-.58.68a1.93 1.93 0 0 0 0 1.71a2 2 0 0 0 .58.68l1.33 1a.41.41 0 0 1 .14.45l-.55 1.63a2 2 0 0 0-.07.91c.05.298.174.58.36.82c.183.25.428.45.71.58c.265.126.557.184.85.17h1.49a.38.38 0 0 1 .25.08a.34.34 0 0 1 .14.21l.43 1.51a2 2 0 0 0 .46.8a1.89 1.89 0 0 0 2.54.17l1.15-.91a.39.39 0 0 1 .49 0l1.13.9c.24.202.53.337.84.39q.17.015.34 0a1.9 1.9 0 0 0 .58-.09a1.87 1.87 0 0 0 1.24-1.28l.44-1.52a.34.34 0 0 1 .14-.21a.4.4 0 0 1 .27-.08h1.43a2 2 0 0 0 .89-.17a1.91 1.91 0 0 0 1.06-1.4a1.9 1.9 0 0 0-.07-.92l-.54-1.62a.36.36 0 0 1 0-.25a.35.35 0 0 1 .14-.2l1.33-1a1.9 1.9 0 0 0 .57-.68a1.8 1.8 0 0 0 .21-.86a1.9 1.9 0 0 0-.23-.78m-5.44-.76l-4.42 4.42a2 2 0 0 1-.59.4c-.222.09-.46.138-.7.14a1.7 1.7 0 0 1-.71-.15a1.9 1.9 0 0 1-.6-.4l-2.18-2.19a1 1 0 0 1 1.41-1.41l2.08 2.08l4.3-4.31a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.46z"></svg:path>`,
})
export class MageVerifiedCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoIcon],svg[mage-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.319m9.5 4.119v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.397.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.123a1.34 1.34 0 0 1 .76 1.182"></svg:path>`,
})
export class MageVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoCheckIcon],svg[mage-video-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m6.547 11.932l1.407 1.407a.53.53 0 0 0 .758 0l2.835-2.836"></svg:path><svg:path d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181"></svg:path></svg:g>`,
})
export class MageVideoCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoCheckFillIcon],svg[mage-video-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.93 8.33a2.06 2.06 0 0 0-.86-.77a2.11 2.11 0 0 0-2.2.24l-2.52 2v-.9a4.37 4.37 0 0 0-2.68-4A4.4 4.4 0 0 0 12 4.57H6.1a4.3 4.3 0 0 0-1.67.33a4.38 4.38 0 0 0-2.35 2.36a4.3 4.3 0 0 0-.33 1.66v6.17a4.34 4.34 0 0 0 4.35 4.34h5.83a4.37 4.37 0 0 0 4.017-2.677a4.3 4.3 0 0 0 .333-1.663v-.9l2.52 2c.324.256.718.41 1.13.44h.25a2 2 0 0 0 .9-.21a2.13 2.13 0 0 0 .85-.79a2.05 2.05 0 0 0 .32-1.11V9.37a2.1 2.1 0 0 0-.32-1.04m-9.85 2.68l-2.84 2.84a1.3 1.3 0 0 1-.91.38a1.4 1.4 0 0 1-.49-.1a1.4 1.4 0 0 1-.41-.28l-1.41-1.41a.74.74 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1.25 1.26l2.69-2.69a.75.75 0 0 1 1.06 1.06"></svg:path>`,
})
export class MageVideoCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoCrossIcon],svg[mage-video-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m11.047 10l-4 3.991m0-3.982l4 3.991"></svg:path><svg:path stroke-linejoin="round" d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181"></svg:path></svg:g>`,
})
export class MageVideoCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoCrossFillIcon],svg[mage-video-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.93 8.33a2.06 2.06 0 0 0-.86-.77a2.11 2.11 0 0 0-2.2.24l-2.52 2v-.9a4.37 4.37 0 0 0-2.68-4A4.4 4.4 0 0 0 12 4.57H6.1a4.3 4.3 0 0 0-1.67.33a4.38 4.38 0 0 0-2.35 2.36a4.3 4.3 0 0 0-.33 1.66v6.17a4.34 4.34 0 0 0 4.35 4.34h5.83a4.37 4.37 0 0 0 4.017-2.677a4.3 4.3 0 0 0 .333-1.663v-.9l2.52 2c.324.256.718.41 1.13.44h.25a2 2 0 0 0 .9-.21a2.13 2.13 0 0 0 .85-.79a2.05 2.05 0 0 0 .32-1.11V9.37a2.1 2.1 0 0 0-.32-1.04m-10.35 5.12a.75.75 0 0 1-1.06 1.06l-1.48-1.47l-1.46 1.46a.74.74 0 0 1-.53.22a.73.73 0 0 1-.53-.22a.74.74 0 0 1 0-1.06l1.46-1.46l-1.46-1.46a.75.75 0 0 1 1.06-1.06l1.46 1.46l1.48-1.47a.75.75 0 0 1 1.06 1.06l-1.47 1.47z"></svg:path>`,
})
export class MageVideoCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoDownloadIcon],svg[mage-video-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M9.047 14.5v-5"></svg:path><svg:path stroke-linejoin="round" d="m6.754 12.395l1.968 1.967a.46.46 0 0 0 .65 0l1.968-1.967"></svg:path><svg:path stroke-linejoin="round" d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181"></svg:path></svg:g>`,
})
export class MageVideoDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoDownloadFillIcon],svg[mage-video-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.93 8.33a2.06 2.06 0 0 0-.86-.77a2.11 2.11 0 0 0-2.2.24l-2.52 2v-.9a4.37 4.37 0 0 0-2.68-4A4.4 4.4 0 0 0 12 4.57H6.1a4.3 4.3 0 0 0-1.67.33a4.38 4.38 0 0 0-2.35 2.36a4.3 4.3 0 0 0-.33 1.66v6.17a4.34 4.34 0 0 0 4.35 4.34h5.83a4.37 4.37 0 0 0 4.017-2.677a4.3 4.3 0 0 0 .333-1.663v-.9l2.52 2c.289.23.634.378 1 .43h.25a2 2 0 0 0 .9-.21a2.13 2.13 0 0 0 .98-.78a2.05 2.05 0 0 0 .32-1.11V9.37a2.1 2.1 0 0 0-.32-1.04M11.87 12.9l-2 2a1.05 1.05 0 0 1-.39.27a1.2 1.2 0 0 1-.46.09a1.1 1.1 0 0 1-.47-.1a1.3 1.3 0 0 1-.39-.26l-2-2a.75.75 0 0 1 1.06-1.06l1 1V9.46a.75.75 0 0 1 1.5 0v3.38l1-1a.75.75 0 0 1 1.06 1.06z"></svg:path>`,
})
export class MageVideoDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoFillIcon],svg[mage-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.205 9.41v5.13c.01.382-.087.76-.28 1.09a2.13 2.13 0 0 1-.86.77a2 2 0 0 1-.9.21h-.25a2.07 2.07 0 0 1-1-.43l-2.53-2v.91a4.34 4.34 0 0 1-4.34 4.34h-5.91a4.37 4.37 0 0 1-3.07-1.27a4.3 4.3 0 0 1-1.27-3.07V8.92a4.3 4.3 0 0 1 .33-1.66a4.38 4.38 0 0 1 2.35-2.36a4.3 4.3 0 0 1 1.66-.33h5.79a4.4 4.4 0 0 1 1.67.33a4.38 4.38 0 0 1 2.35 2.36c.22.529.33 1.097.32 1.67v.9l2.53-2a2.09 2.09 0 0 1 3.06.53c.207.313.328.675.35 1.05"></svg:path>`,
})
export class MageVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoMinusIcon],svg[mage-video-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M6.547 12.005h5"></svg:path><svg:path stroke-linejoin="round" d="M12 5.32H6.095A3.595 3.595 0 0 0 2.5 8.923v6.162a3.595 3.595 0 0 0 3.595 3.595H12a3.595 3.595 0 0 0 3.595-3.595V8.924A3.594 3.594 0 0 0 12 5.32m9.5 4.118v5.135c0 .25-.071.496-.205.708a1.36 1.36 0 0 1-.555.493a1.27 1.27 0 0 1-.73.124a1.37 1.37 0 0 1-.677-.278l-3.225-2.588a1.38 1.38 0 0 1-.503-1.047c0-.2.045-.396.133-.575c.092-.168.218-.315.37-.432l3.225-2.567a1.36 1.36 0 0 1 .678-.278c.25-.032.504.011.729.124a1.33 1.33 0 0 1 .76 1.181"></svg:path></svg:g>`,
})
export class MageVideoMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoMinusFillIcon],svg[mage-video-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.92 8.36a2.06 2.06 0 0 0-.86-.77a2.11 2.11 0 0 0-2.2.24l-2.53 2v-.9a4.1 4.1 0 0 0-.32-1.67a4.33 4.33 0 0 0-4-2.69H6.1a4.3 4.3 0 0 0-1.66.33a4.38 4.38 0 0 0-2.35 2.36a4.3 4.3 0 0 0-.33 1.66v6.17a4.34 4.34 0 0 0 4.34 4.34h5.82a4.34 4.34 0 0 0 4.34-4.34v-.91l2.53 2c.289.23.634.378 1 .43h.25a2 2 0 0 0 .9-.21a2.13 2.13 0 0 0 .98-.74a2.05 2.05 0 0 0 .32-1.11V9.42a2.13 2.13 0 0 0-.32-1.06m-10.38 4.4h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageVideoMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageVideoPlayerIcon],svg[mage-video-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.196 7.873h17.608m-4.997 0V2.877M8.193 7.873V2.877m1.947 9.051v4.922c0 .101.032.2.091.286c.06.085.145.154.246.199a.66.66 0 0 0 .633-.057l3.798-2.65a.56.56 0 0 0 .176-.199a.5.5 0 0 0-.02-.492a.6.6 0 0 0-.192-.186l-3.798-2.272a.66.66 0 0 0-.616-.025a.6.6 0 0 0-.232.198a.5.5 0 0 0-.086.276"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageVideoPlayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
