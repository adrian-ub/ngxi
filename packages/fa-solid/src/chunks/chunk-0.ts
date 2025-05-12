import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidAdIcon],svg[fa-solid-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157.52 272h36.96L176 218.78zM352 256c-13.23 0-24 10.77-24 24s10.77 24 24 24s24-10.77 24-24s-10.77-24-24-24M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48M250.58 352h-16.94c-6.81 0-12.88-4.32-15.12-10.75L211.15 320h-70.29l-7.38 21.25A16 16 0 0 1 118.36 352h-16.94c-11.01 0-18.73-10.85-15.12-21.25L140 176.12A23.995 23.995 0 0 1 162.67 160h26.66A23.99 23.99 0 0 1 212 176.13l53.69 154.62c3.61 10.4-4.11 21.25-15.11 21.25M424 336c0 8.84-7.16 16-16 16h-16c-4.85 0-9.04-2.27-11.98-5.68c-8.62 3.66-18.09 5.68-28.02 5.68c-39.7 0-72-32.3-72-72s32.3-72 72-72c8.46 0 16.46 1.73 24 4.42V176c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16z"></svg:path>`,
})
export class FaSolidAdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAbacusIcon],svg[fa-solid-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 0C14.33 0 0 14.33 0 32v464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V32C64 14.33 49.67 0 32 0zm512 0c-17.67 0-32 14.33-32 32v464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V32c0-17.67-14.33-32-32-32zm-80 32h-32c-8.84 0-16 7.16-16 16v24H256V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h160v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zM352 208c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h128v-48H352v-24zm112 144h-32c-8.84 0-16 7.16-16 16v24H256v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h160v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16z" fill="currentColor"></svg:path>`,
})
export class FaSolidAbacusIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAddressBookIcon],svg[fa-solid-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64zm-228-32c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6z"></svg:path>`,
})
export class FaSolidAddressBookIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAdjustIcon],svg[fa-solid-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8S8 119.033 8 256m248 184V72c101.705 0 184 82.311 184 184c0 101.705-82.311 184-184 184"></svg:path>`,
})
export class FaSolidAdjustIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAddressCardIcon],svg[fa-solid-address-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidAddressCardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAirFreshenerIcon],svg[fa-solid-air-freshener-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160H96c-53 0-96 43-96 96v224c0 17.625 14.375 32 32 32h256c17.625 0 32-14.375 32-32V256c0-53-43-96-96-96m-64 256c-44.125 0-80-35.875-80-80s35.875-80 80-80s80 35.875 80 80s-35.875 80-80 80m64-384c0-17.625-14.375-32-32-32h-64c-17.625 0-32 14.375-32 32v96h128zm157.781 19.578C383 50.969 384 49.359 384 48c0-1.375-1-2.969-2.219-3.578L352 32L339.562 2.219C338.969 1 337.375 0 336 0s-2.969 1-3.594 2.219L320 32l-29.781 12.422C289 45.031 288 46.625 288 48c0 1.359 1 2.969 2.219 3.578L320 64l12.406 29.781C333.031 95 334.625 96 336 96s2.969-1 3.562-2.219L352 64zM448 64l12.406 29.781C461.031 95 462.625 96 464 96s2.969-1 3.562-2.219L480 64l29.781-12.422C511 50.969 512 49.359 512 48c0-1.375-1-2.969-2.219-3.578L480 32L467.562 2.219C466.969 1 465.375 0 464 0s-2.969 1-3.594 2.219L448 32l-29.781 12.422C417 45.031 416 46.625 416 48c0 1.359 1 2.969 2.219 3.578zm32 160l-12.438-29.781C466.969 193 465.375 192 464 192s-2.969 1-3.594 2.219L448 224l-29.781 12.422C417 237.031 416 238.625 416 240c0 1.359 1 2.969 2.219 3.578L448 256l12.406 29.781C461.031 287 462.625 288 464 288s2.969-1 3.562-2.219L480 256l29.781-12.422C511 242.969 512 241.359 512 240c0-1.375-1-2.969-2.219-3.578zm-34.219-76.422C447 146.969 448 145.359 448 144c0-1.375-1-2.969-2.219-3.578L416 128l-12.438-29.781C402.969 97 401.375 96 400 96s-2.969 1-3.594 2.219L384 128l-29.781 12.422C353 141.031 352 142.625 352 144c0 1.359 1 2.969 2.219 3.578L384 160l12.406 29.781C397.031 191 398.625 192 400 192s2.969-1 3.562-2.219L416 160z"></svg:path>`,
})
export class FaSolidAirFreshenerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignCenterIcon],svg[fa-solid-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96m231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z"></svg:path>`,
})
export class FaSolidAlignCenterIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignJustifyIcon],svg[fa-solid-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidAlignJustifyIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignLeftIcon],svg[fa-solid-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352m0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidAlignLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignRightIcon],svg[fa-solid-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32m0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288"></svg:path>`,
})
export class FaSolidAlignRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAllergiesIcon],svg[fa-solid-allergies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 112c-17.6 0-32 14.4-32 32v72c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V64c0-17.6-14.4-32-32-32s-32 14.4-32 32v152c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V32c0-17.6-14.4-32-32-32s-32 14.4-32 32v184c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V64c0-17.6-14.4-32-32-32S96 46.4 96 64v241l-23.6-32.5c-13-17.9-38-21.8-55.9-8.8s-21.8 38-8.8 55.9l125.6 172.7c9 12.4 23.5 19.8 38.8 19.8h197.6c22.3 0 41.6-15.3 46.7-37l26.5-112.7c3.2-13.7 4.9-28.3 5.1-42.3V144c0-17.6-14.4-32-32-32M176 416c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m0-96c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m64 128c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m0-96c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m64 32c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m32 64c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m32-128c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16"></svg:path>`,
})
export class FaSolidAllergiesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAnchorIcon],svg[fa-solid-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01C235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352M288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32s-32-14.355-32-32s14.355-32 32-32"></svg:path>`,
})
export class FaSolidAnchorIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAmericanSignLanguageInterpretingIcon],svg[fa-solid-american-sign-language-interpreting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290.547 189.039c-20.295-10.149-44.147-11.199-64.739-3.89c42.606 0 71.208 20.475 85.578 50.576c8.576 17.899-5.148 38.071-23.617 38.071c18.429 0 32.211 20.136 23.617 38.071c-14.725 30.846-46.123 50.854-80.298 50.854c-.557 0-94.471-8.615-94.471-8.615l-66.406 33.347c-9.384 4.693-19.815.379-23.895-7.781L1.86 290.747c-4.167-8.615-1.111-18.897 6.946-23.621l58.072-33.069L108 159.861c6.39-57.245 34.731-109.767 79.743-146.726c11.391-9.448 28.341-7.781 37.51 3.613c9.446 11.394 7.78 28.067-3.612 37.516c-12.503 10.559-23.618 22.509-32.509 35.57c21.672-14.729 46.679-24.732 74.186-28.067c14.725-1.945 28.063 8.336 29.73 23.065c1.945 14.728-8.336 28.067-23.062 29.734c-16.116 1.945-31.12 7.503-44.178 15.284c26.114-5.713 58.712-3.138 88.079 11.115c13.336 6.669 18.893 22.509 12.224 35.848c-6.389 13.06-22.504 18.617-35.564 12.226m-27.229 69.472c-6.112-12.505-18.338-20.286-32.231-20.286a35.46 35.46 0 0 0-35.565 35.57c0 21.428 17.808 35.57 35.565 35.57c13.893 0 26.119-7.781 32.231-20.286c4.446-9.449 13.614-15.006 23.339-15.284c-9.725-.277-18.893-5.835-23.339-15.284m374.821-37.237c4.168 8.615 1.111 18.897-6.946 23.621l-58.071 33.069L532 352.16c-6.39 57.245-34.731 109.767-79.743 146.726c-10.932 9.112-27.799 8.144-37.51-3.613c-9.446-11.394-7.78-28.067 3.613-37.516c12.503-10.559 23.617-22.509 32.508-35.57c-21.672 14.729-46.679 24.732-74.186 28.067c-10.021 2.506-27.552-5.643-29.73-23.065c-1.945-14.728 8.336-28.067 23.062-29.734c16.116-1.946 31.12-7.503 44.178-15.284c-26.114 5.713-58.712 3.138-88.079-11.115c-13.336-6.669-18.893-22.509-12.224-35.848c6.389-13.061 22.505-18.619 35.565-12.227c20.295 10.149 44.147 11.199 64.739 3.89c-42.606 0-71.208-20.475-85.578-50.576c-8.576-17.899 5.148-38.071 23.617-38.071c-18.429 0-32.211-20.136-23.617-38.071c14.033-29.396 44.039-50.887 81.966-50.854l92.803 8.615l66.406-33.347c9.408-4.704 19.828-.354 23.894 7.781zm-229.227-18.618c-13.893 0-26.119 7.781-32.231 20.286c-4.446 9.449-13.614 15.006-23.339 15.284c9.725.278 18.893 5.836 23.339 15.284c6.112 12.505 18.338 20.286 32.231 20.286a35.46 35.46 0 0 0 35.565-35.57c0-21.429-17.808-35.57-35.565-35.57"></svg:path>`,
})
export class FaSolidAmericanSignLanguageInterpretingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleDoubleDownIcon],svg[fa-solid-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4l96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1m34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1"></svg:path>`,
})
export class FaSolidAngleDoubleDownIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAmbulanceIcon],svg[fa-solid-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"></svg:path>`,
})
export class FaSolidAmbulanceIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleDoubleLeftIcon],svg[fa-solid-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34m-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34"></svg:path>`,
})
export class FaSolidAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleDoubleRightIcon],svg[fa-solid-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34m192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4l-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8"></svg:path>`,
})
export class FaSolidAngleDoubleRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleDoubleUpIcon],svg[fa-solid-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1m-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4l96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0"></svg:path>`,
})
export class FaSolidAngleDoubleUpIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleDownIcon],svg[fa-solid-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4l96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0"></svg:path>`,
})
export class FaSolidAngleDownIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleLeftIcon],svg[fa-solid-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34"></svg:path>`,
})
export class FaSolidAngleLeftIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleRightIcon],svg[fa-solid-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34"></svg:path>`,
})
export class FaSolidAngleRightIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleUpIcon],svg[fa-solid-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1"></svg:path>`,
})
export class FaSolidAngleUpIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngryIcon],svg[fa-solid-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9c2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9c-2.1 6.9-8.4 11.4-15.3 11.4c-.5 0-1.1-.2-1.7-.2c.7 2.7 1.7 5.3 1.7 8.2c0 17.7-14.3 32-32 32S136 257.7 136 240m168 154.2c-27.8-33.4-84.2-33.4-112.1 0c-13.5 16.3-38.2-4.2-24.6-20.5c20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5m76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2c-.6.1-1.1.2-1.7.2c-6.9 0-13.2-4.5-15.3-11.4c-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7c2.5 8.5-2.3 17.4-10.8 19.9"></svg:path>`,
})
export class FaSolidAngryIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAnkhIcon],svg[fa-solid-ankh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 256h-44.62C272.46 222.01 288 181.65 288 144C288 55.63 230.69 0 160 0S32 55.63 32 144c0 37.65 15.54 78.01 36.62 112H24c-13.25 0-24 10.74-24 24v32c0 13.25 10.75 24 24 24h96v152c0 13.25 10.75 24 24 24h32c13.25 0 24-10.75 24-24V336h96c13.25 0 24-10.75 24-24v-32c0-13.26-10.75-24-24-24M160 80c29.61 0 48 24.52 48 64c0 34.66-27.14 78.14-48 100.87c-20.86-22.72-48-66.21-48-100.87c0-39.48 18.39-64 48-64"></svg:path>`,
})
export class FaSolidAnkhIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAppleAltIcon],svg[fa-solid-apple-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M350.85 129c25.97 4.67 47.27 18.67 63.92 42c14.65 20.67 24.64 46.67 29.96 78c4.67 28.67 4.32 57.33-1 86c-7.99 47.33-23.97 87-47.94 119c-28.64 38.67-64.59 58-107.87 58c-10.66 0-22.3-3.33-34.96-10c-8.66-5.33-18.31-8-28.97-8s-20.3 2.67-28.97 8c-12.66 6.67-24.3 10-34.96 10c-43.28 0-79.23-19.33-107.87-58c-23.97-32-39.95-71.67-47.94-119c-5.32-28.67-5.67-57.33-1-86c5.32-31.33 15.31-57.33 29.96-78c16.65-23.33 37.95-37.33 63.92-42c15.98-2.67 37.95-.33 65.92 7q35.955 10.005 60.93 24q24.975-13.995 60.93-24c27.98-7.33 49.96-9.67 65.94-7m-54.94-41c-9.32 8.67-21.65 15-36.96 19c-10.66 3.33-22.3 5-34.96 5l-14.98-1c-1.33-9.33-1.33-20 0-32c2.67-24 10.32-42.33 22.97-55c9.32-8.67 21.65-15 36.96-19c10.66-3.33 22.3-5 34.96-5l14.98 1l1 15c0 12.67-1.67 24.33-4.99 35c-3.99 15.33-10.31 27.67-18.98 37"></svg:path>`,
})
export class FaSolidAppleAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArchiveIcon],svg[fa-solid-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32"></svg:path>`,
})
export class FaSolidArchiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArchwayIcon],svg[fa-solid-archway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M560 448h-16V96H32v352H16.02c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16H176c8.84 0 16-7.16 16-16V320c0-53.02 42.98-96 96-96s96 42.98 96 96l.02 160v16c0 8.84 7.16 16 16 16H560c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m0-448H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h544c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidArchwayIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowAltCircleDownIcon],svg[fa-solid-arrow-alt-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248M212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12"></svg:path>`,
})
export class FaSolidArrowAltCircleDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowAltCircleLeftIcon],svg[fa-solid-arrow-alt-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248m116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12"></svg:path>`,
})
export class FaSolidArrowAltCircleLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowAltCircleRightIcon],svg[fa-solid-arrow-alt-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504S8 393 8 256S119 8 256 8M140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12"></svg:path>`,
})
export class FaSolidArrowAltCircleRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowAltCircleUpIcon],svg[fa-solid-arrow-alt-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248s-111 248-248 248S8 393 8 256m292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FaSolidArrowAltCircleUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowCircleDownIcon],svg[fa-solid-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248m-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4"></svg:path>`,
})
export class FaSolidArrowCircleDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowCircleLeftIcon],svg[fa-solid-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248m28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3"></svg:path>`,
})
export class FaSolidArrowCircleLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowCircleRightIcon],svg[fa-solid-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504S8 393 8 256S119 8 256 8m-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4"></svg:path>`,
})
export class FaSolidArrowCircleRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowCircleUpIcon],svg[fa-solid-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248s-111 248-248 248S8 393 8 256m143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4"></svg:path>`,
})
export class FaSolidArrowCircleUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowDownIcon],svg[fa-solid-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4"></svg:path>`,
})
export class FaSolidArrowDownIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowLeftIcon],svg[fa-solid-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3"></svg:path>`,
})
export class FaSolidArrowLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowRightIcon],svg[fa-solid-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3"></svg:path>`,
})
export class FaSolidArrowRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowUpIcon],svg[fa-solid-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4"></svg:path>`,
})
export class FaSolidArrowUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowsAltIcon],svg[fa-solid-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971"></svg:path>`,
})
export class FaSolidArrowsAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowsAltHIcon],svg[fa-solid-arrows-alt-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97"></svg:path>`,
})
export class FaSolidArrowsAltHIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidArrowsAltVIcon],svg[fa-solid-arrows-alt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971"></svg:path>`,
})
export class FaSolidArrowsAltVIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAssistiveListeningSystemsIcon],svg[fa-solid-assistive-listening-systems-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 260c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-44.112 35.888-80 80-80s80 35.888 80 80c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-13.234-10.767-24-24-24s-24 10.766-24 24m24-176c-97.047 0-176 78.953-176 176c0 15.464 12.536 28 28 28s28-12.536 28-28c0-66.168 53.832-120 120-120s120 53.832 120 120c0 75.164-71.009 70.311-71.997 143.622L288 404c0 28.673-23.327 52-52 52c-15.464 0-28 12.536-28 28s12.536 28 28 28c59.475 0 107.876-48.328 108-107.774c.595-34.428 72-48.24 72-144.226c0-97.047-78.953-176-176-176m-80 236c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32M32 448c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m480-187.993c0-1.518-.012-3.025-.045-4.531C510.076 140.525 436.157 38.47 327.994 1.511c-14.633-4.998-30.549 2.809-35.55 17.442s2.81 30.549 17.442 35.55c85.906 29.354 144.61 110.513 146.077 201.953l.003.188c.026 1.118.033 2.236.033 3.363c0 15.464 12.536 28 28 28s28.001-12.536 28.001-28M152.971 439.029l-80-80L39.03 392.97l80 80z"></svg:path>`,
})
export class FaSolidAssistiveListeningSystemsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAsteriskIcon],svg[fa-solid-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718L77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256L33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036"></svg:path>`,
})
export class FaSolidAsteriskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAtIcon],svg[fa-solid-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248c48.154 0 95.342-14.14 135.408-40.223c12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160c0 38.786-21.093 79.742-58.17 83.693c-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.52 13.52 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775c-74.58 0-137.831 62.234-137.831 151.46c0 65.303 36.785 105.87 96 105.87c26.984 0 57.369-15.637 74.991-38.333c9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232C504 95.653 394.023 8 256 8m-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771c0-44.993 30.779-72.729 58.63-72.729c22.292 0 35.601 15.241 35.601 40.77c0 45.061-33.875 72.73-58.161 72.73"></svg:path>`,
})
export class FaSolidAtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAtlasIcon],svg[fa-solid-atlas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M318.38 208h-39.09c-1.49 27.03-6.54 51.35-14.21 70.41c27.71-13.24 48.02-39.19 53.3-70.41m0-32c-5.29-31.22-25.59-57.17-53.3-70.41c7.68 19.06 12.72 43.38 14.21 70.41zM224 97.31c-7.69 7.45-20.77 34.42-23.43 78.69h46.87c-2.67-44.26-15.75-71.24-23.44-78.69m-41.08 8.28c-27.71 13.24-48.02 39.19-53.3 70.41h39.09c1.49-27.03 6.53-51.35 14.21-70.41m0 172.82c-7.68-19.06-12.72-43.38-14.21-70.41h-39.09c5.28 31.22 25.59 57.17 53.3 70.41M247.43 208h-46.87c2.66 44.26 15.74 71.24 23.43 78.69c7.7-7.45 20.78-34.43 23.44-78.69M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2M224 64c70.69 0 128 57.31 128 128s-57.31 128-128 128S96 262.69 96 192S153.31 64 224 64m160 384H96c-19.2 0-32-12.8-32-32s16-32 32-32h288z"></svg:path>`,
})
export class FaSolidAtlasIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAtomIcon],svg[fa-solid-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 224a32 32 0 1 0 32.007 32a32.064 32.064 0 0 0-32.008-32m214.171-96c-10.877-19.5-40.51-50.75-116.275-41.875C300.392 34.875 267.634 0 223.999 0s-76.39 34.875-97.896 86.125C50.337 77.375 20.706 108.5 9.829 128C-6.55 157.375-5.175 201.125 34.958 256C-5.175 310.875-6.55 354.625 9.829 384c29.13 52.375 101.647 43.625 116.274 41.875C147.608 477.125 180.364 512 223.999 512s76.393-34.875 97.897-86.125c14.629 1.75 87.144 10.5 116.275-41.875c16.379-29.375 15.004-73.125-25.13-128c40.134-54.875 41.509-98.625 25.13-128M63.34 352c-4-7.25-.125-24.75 15.004-48.25a369 369 0 0 0 21.88 19.125c1.626 13.75 4 27.125 6.75 40.125c-24.628.875-39.882-4.375-43.634-11m36.885-162.875a369 369 0 0 0-21.881 19.125c-15.13-23.5-19.004-41-15.004-48.25c3.377-6.125 16.379-11.5 37.885-11.5c1.75 0 3.875.375 5.75.375a443 443 0 0 0-6.75 40.25M223.999 64c9.502 0 22.256 13.5 33.883 37.25a435 435 0 0 0-33.883 12.875a435 435 0 0 0-33.883-12.875C201.746 77.5 214.497 64 224 64m0 384c-9.502 0-22.254-13.5-33.883-37.25c11.254-3.75 22.506-8 33.883-12.875a435 435 0 0 0 33.883 12.875C246.255 434.5 233.5 448 223.999 448m0-112a80 80 0 1 1 80-80a80 80 0 0 1-80 80m160.66 16c-3.625 6.625-19.004 11.875-43.634 11c2.752-13 5.127-26.375 6.752-40.125a368 368 0 0 0 21.878-19.125c15.13 23.5 19.004 41 15.004 48.25m-15.004-143.75a368 368 0 0 0-21.879-19.125a443 443 0 0 0-6.752-40.25c1.875 0 4.002-.375 5.752-.375c21.504 0 34.508 5.375 37.883 11.5c4 7.25.125 24.75-15.004 48.25"></svg:path>`,
})
export class FaSolidAtomIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAudioDescriptionIcon],svg[fa-solid-audio-description-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245c1.22 5.251 2.594 10.823 3.871 15.242m166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776c0-32.239-17.49-49.005-46.175-49.005M512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48M245.459 336.139l-57.097-168A12 12 0 0 0 177 160h-35.894a12 12 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861m184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386"></svg:path>`,
})
export class FaSolidAudioDescriptionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAwardIcon],svg[fa-solid-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85c-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58c-19.5 0-37.82-7.59-51.61-21.37M382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32c-21.07 5.64-16.45 3.18-25.12 11.85c-13.79 13.78-32.12 21.37-51.62 21.37c-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28l52.69 2.01c11.62.44 19.82-11.27 15.43-22.03M263 340c15.28-15.55 17.03-14.21 38.79-20.14c13.89-3.79 24.75-14.84 28.47-28.98c7.48-28.4 5.54-24.97 25.95-45.75c10.17-10.35 14.14-25.44 10.42-39.58c-7.47-28.38-7.48-24.42 0-52.83c3.72-14.14-.25-29.23-10.42-39.58c-20.41-20.78-18.47-17.36-25.95-45.75c-3.72-14.14-14.58-25.19-28.47-28.98c-27.88-7.61-24.52-5.62-44.95-26.41c-10.17-10.35-25-14.4-38.89-10.61c-27.87 7.6-23.98 7.61-51.9 0c-13.89-3.79-28.72.25-38.89 10.61c-20.41 20.78-17.05 18.8-44.94 26.41c-13.89 3.79-24.75 14.84-28.47 28.98c-7.47 28.39-5.54 24.97-25.95 45.75c-10.17 10.35-14.15 25.44-10.42 39.58c7.47 28.36 7.48 24.4 0 52.82c-3.72 14.14.25 29.23 10.42 39.59c20.41 20.78 18.47 17.35 25.95 45.75c3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.68 39.68 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82M97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02s-42.24 96.02-94.34 96.02s-94.34-42.99-94.34-96.02"></svg:path>`,
})
export class FaSolidAwardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBabyIcon],svg[fa-solid-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80s35.8 80 80 80m-53.4 248.8l25.6-32l-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16c8.3 0 16.8-2.6 24-8c17.7-13.2 21.2-38.3 8-56zm142.7-83.2l-61.5 51.2l25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56c7.2 5.4 15.6 8 24 8c12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145C-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8"></svg:path>`,
})
export class FaSolidBabyIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBabyCarriageIcon],svg[fa-solid-baby-carriage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144.8 17c-11.3-17.8-37.2-22.8-54-9.4C35.3 51.9 0 118 0 192h256zM496 96h-48c-35.3 0-64 28.7-64 64v64H0c0 50.6 23 96.4 60.3 130.7C25.7 363.6 0 394.7 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-8.9-1.8-17.2-4.4-25.2c21.6 5.9 44.6 9.2 68.4 9.2s46.9-3.3 68.4-9.2c-2.7 8-4.4 16.3-4.4 25.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-37.3-25.7-68.4-60.3-77.3C425 320.4 448 274.6 448 224v-64h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M80 464c-17.6 0-32-14.4-32-32s14.4-32 32-32s32 14.4 32 32s-14.4 32-32 32m320-32c0 17.6-14.4 32-32 32s-32-14.4-32-32s14.4-32 32-32s32 14.4 32 32"></svg:path>`,
})
export class FaSolidBabyCarriageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBackspaceIcon],svg[fa-solid-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64m-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256z"></svg:path>`,
})
export class FaSolidBackspaceIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBackwardIcon],svg[fa-solid-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2m256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2"></svg:path>`,
})
export class FaSolidBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBaconIcon],svg[fa-solid-bacon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.92 336.39c34.89-34.89 44.2-59.7 54.05-86c10.61-28.29 21.59-57.54 61.37-97.34s69.05-50.77 97.35-61.38c23.88-9 46.64-17.68 76.79-45.37L470.81 8.91a31 31 0 0 0-40.18-2.83c-13.64 10.1-25.15 14.39-41 20.3C247 79.52 209.26 191.29 200.65 214.1c-29.75 78.83-89.55 94.68-98.72 98.09c-24.86 9.26-54.73 20.38-91.07 50.36C-3 374-3.63 395 9.07 407.61l35.76 35.51C80 410.52 107 400.15 133 390.39c26.27-9.84 51.06-19.12 85.92-54m348-232l-35.75-35.51c-35.19 32.63-62.18 43-88.25 52.79c-26.26 9.85-51.06 19.16-85.95 54s-44.19 59.69-54 86C292.33 290 281.34 319.22 241.55 359s-69 50.73-97.3 61.32c-23.86 9-46.61 17.66-76.72 45.33l37.68 37.43a31 31 0 0 0 40.18 2.82c13.6-10.06 25.09-14.34 40.94-20.24c142.2-53 180-164.1 188.94-187.69C405 219.18 464.8 203.3 474 199.86c24.87-9.27 54.74-20.4 91.11-50.41c13.89-11.4 14.52-32.45 1.82-45.05z"></svg:path>`,
})
export class FaSolidBaconIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBacteriaIcon],svg[fa-solid-bacteria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272.35 226.4a17.71 17.71 0 0 0 9.11-23.4l-4-9.08a121 121 0 0 1 12.36-3.08A83.3 83.3 0 0 0 323.57 177l10 9a17.76 17.76 0 1 0 23.92-26.27l-9.72-8.76a83.1 83.1 0 0 0 11.65-48.18l11.85-3.51a17.73 17.73 0 1 0-10.15-34l-11.34 3.36a84 84 0 0 0-36.38-35.57l2.84-10.85a17.8 17.8 0 0 0-34.47-8.93l-2.82 10.78a83.3 83.3 0 0 0-16.74 1.1C250.83 27 240 30.22 229.1 33.39l-3.38-9.46a17.8 17.8 0 0 0-33.56 11.89l3.49 9.8a287 287 0 0 0-43.94 23.57l-6.32-8.43a17.9 17.9 0 0 0-24.94-3.6A17.69 17.69 0 0 0 116.84 82l6.45 8.61a286.6 286.6 0 0 0-34.95 35.33l-8.82-6.42a17.84 17.84 0 0 0-24.89 3.86a17.66 17.66 0 0 0 3.88 24.77l8.88 6.47a286.6 286.6 0 0 0-23 43.91l-10.48-3.59a17.73 17.73 0 1 0-11.59 33.52L32.67 232c-2.79 10-5.79 19.84-7.52 30.22a83.2 83.2 0 0 0-.82 19l-11.58 3.43a17.73 17.73 0 1 0 10.13 34l11.27-3.33a83.5 83.5 0 0 0 36.39 35.43l-2.88 11.06a17.81 17.81 0 0 0 34.48 8.92l2.87-11c1 0 2.07.26 3.1.26a83.4 83.4 0 0 0 45.65-13.88l8.59 8.8a17.77 17.77 0 0 0 25.56-24.7l-9.14-9.37a83.4 83.4 0 0 0 12.08-31.05a119 119 0 0 1 3.87-15.53l9 4.22a17.74 17.74 0 1 0 15.15-32.09l-8.8-4.11c.67-1 1.2-2.08 1.9-3.05a120 120 0 0 1 7.87-9.41a122 122 0 0 1 11.65-11.4a120 120 0 0 1 9.94-7.82c1.12-.77 2.32-1.42 3.47-2.15l3.92 8.85a17.86 17.86 0 0 0 16.32 10.58a18.1 18.1 0 0 0 7.21-1.48M128 256a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80-96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m431.26 45.3a17.79 17.79 0 0 0-17.06-12.69a17.6 17.6 0 0 0-5.08.74l-11.27 3.33a83.6 83.6 0 0 0-36.39-35.43l2.88-11.06a17.81 17.81 0 0 0-34.48-8.91l-2.87 11c-1 0-2.07-.26-3.1-.26a83.3 83.3 0 0 0-45.65 13.89l-8.59-8.81a17.77 17.77 0 0 0-25.56 24.7l9.14 9.37a83.3 83.3 0 0 0-12.08 31.06a119 119 0 0 1-3.87 15.52l-9-4.22a17.74 17.74 0 1 0-15.15 32.09l8.8 4.11c-.67 1-1.2 2.08-1.89 3.05a118 118 0 0 1-7.94 9.47a119 119 0 0 1-11.57 11.33a122 122 0 0 1-10 7.83c-1.12.77-2.32 1.42-3.47 2.15l-3.92-8.85a17.86 17.86 0 0 0-16.32-10.58a18.1 18.1 0 0 0-7.18 1.5a17.71 17.71 0 0 0-9.1 23.37l4 9.08a119 119 0 0 1-12.36 3.08a83.3 83.3 0 0 0-33.77 13.9l-10-9a17.77 17.77 0 1 0-23.92 26.28l9.72 8.75a83.1 83.1 0 0 0-11.65 48.18l-11.86 3.51a17.73 17.73 0 1 0 10.16 34l11.34-3.36A84 84 0 0 0 326.61 479l-2.84 10.85a17.8 17.8 0 0 0 34.47 8.93l2.82-10.78a83.3 83.3 0 0 0 16.74-1.1c11.37-1.89 22.24-5.07 33.1-8.24l3.38 9.46a17.8 17.8 0 0 0 33.56-11.89l-3.49-9.79a287.7 287.7 0 0 0 43.94-23.58l6.32 8.43a17.88 17.88 0 0 0 24.93 3.6a17.67 17.67 0 0 0 3.62-24.89l-6.45-8.61a287.4 287.4 0 0 0 34.95-35.34l8.82 6.42a17.76 17.76 0 1 0 21-28.63l-8.88-6.46a287 287 0 0 0 23-43.92l10.48 3.59a17.73 17.73 0 1 0 11.59-33.52L607.33 280c2.79-10 5.79-19.84 7.52-30.21a83.3 83.3 0 0 0 .82-19.05l11.58-3.43a17.7 17.7 0 0 0 12.01-22.01M416 416a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FaSolidBacteriaIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBacteriumIcon],svg[fa-solid-bacterium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511 102.93A23.76 23.76 0 0 0 481.47 87l-15.12 4.48a111.85 111.85 0 0 0-48.5-47.42l3.79-14.47a23.74 23.74 0 0 0-46-11.91l-3.76 14.37a112 112 0 0 0-22.33 1.47a387 387 0 0 0-44.33 10.41l-4.3-12a23.74 23.74 0 0 0-44.75 15.85l4.3 12.05a383.4 383.4 0 0 0-58.69 31.83l-8-10.63a23.85 23.85 0 0 0-33.24-4.8a23.57 23.57 0 0 0-4.83 33.09l8 10.63a386 386 0 0 0-46.7 47.44l-11-8a23.68 23.68 0 1 0-28 38.17l11.09 8.06a383.5 383.5 0 0 0-30.92 58.75l-12.93-4.43a23.65 23.65 0 1 0-15.47 44.69l13 4.48a386 386 0 0 0-9.3 40.53A111.6 111.6 0 0 0 32.44 375L17 379.56a23.64 23.64 0 0 0 13.51 45.31l15-4.44a111.5 111.5 0 0 0 48.53 47.24l-3.85 14.75a23.66 23.66 0 0 0 17 28.83a24.7 24.7 0 0 0 6 .75a23.73 23.73 0 0 0 23-17.7l3.81-14.63c1.37.05 2.77.35 4.13.35A111.2 111.2 0 0 0 205 461.5l11.45 11.74a23.7 23.7 0 0 0 34.08-32.93l-12.19-12.5a111 111 0 0 0 16.11-41.4a159 159 0 0 1 5.16-20.71l12 5.64a23.66 23.66 0 1 0 20.19-42.79l-11.72-5.49c.89-1.32 1.59-2.77 2.52-4.06a158 158 0 0 1 10.46-12.49a159.5 159.5 0 0 1 15.59-15.28a162 162 0 0 1 13.23-10.4c1.5-1 3.1-1.89 4.63-2.87l5.23 11.8a23.74 23.74 0 0 0 43.48-19.08l-5.36-12.11a159 159 0 0 1 16.49-4.1a111 111 0 0 0 45-18.54l13.33 12a23.69 23.69 0 1 0 31.88-35l-12.94-11.67A110.83 110.83 0 0 0 479.21 137l15.79-4.68a23.61 23.61 0 0 0 16-29.39M160 368a48 48 0 1 1 48-48a48 48 0 0 1-48 48m80-136a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class FaSolidBacteriumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBahaiIcon],svg[fa-solid-bahai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m496.25 202.52l-110-15.44l41.82-104.34c6.67-16.64-11.6-32.18-26.59-22.63L307.44 120L273.35 12.82C270.64 4.27 263.32 0 256 0s-14.64 4.27-17.35 12.82l-34.09 107.19l-94.04-59.89c-14.99-9.55-33.25 5.99-26.59 22.63l41.82 104.34l-110 15.43c-17.54 2.46-21.68 26.27-6.03 34.67l98.16 52.66l-74.48 83.54c-10.92 12.25-1.72 30.93 13.29 30.93c1.31 0 2.67-.14 4.07-.45l108.57-23.65l-4.11 112.55c-.43 11.65 8.87 19.22 18.41 19.22c5.15 0 10.39-2.21 14.2-7.18l68.18-88.9l68.18 88.9c3.81 4.97 9.04 7.18 14.2 7.18c9.54 0 18.84-7.57 18.41-19.22l-4.11-112.55l108.57 23.65c17.36 3.76 29.21-17.2 17.35-30.49l-74.48-83.54l98.16-52.66c15.64-8.39 11.5-32.2-6.04-34.66M338.51 311.68l-51.89-11.3l1.97 53.79L256 311.68l-32.59 42.49l1.96-53.79l-51.89 11.3l35.6-39.93l-46.92-25.17l52.57-7.38l-19.99-49.87l44.95 28.62L256 166.72l16.29 51.23l44.95-28.62l-19.99 49.87l52.57 7.38l-46.92 25.17z"></svg:path>`,
})
export class FaSolidBahaiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBalanceScaleIcon],svg[fa-solid-balance-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51c-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80M128 176l72 144H56zm511.98 160c0-16.18 1.34-8.73-85.05-181.51c-17.65-35.29-68.19-35.36-85.87 0c-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80zM440 320l72-144l72 144zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidBalanceScaleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBalanceScaleLeftIcon],svg[fa-solid-balance-scale-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 448H352V153.25c20.42-8.94 36.1-26.22 43.38-47.47l132-44.26c8.38-2.81 12.89-11.88 10.08-20.26l-10.17-30.34C524.48 2.54 515.41-1.97 507.03.84L389.11 40.37C375.3 16.36 349.69 0 320 0c-44.18 0-80 35.82-80 80c0 3.43.59 6.71 1.01 10.03l-128.39 43.05c-8.38 2.81-12.89 11.88-10.08 20.26l10.17 30.34c2.81 8.38 11.88 12.89 20.26 10.08l142.05-47.63c4.07 2.77 8.43 5.12 12.99 7.12V496c0 8.84 7.16 16 16 16h224c8.84 0 16-7.16 16-16v-32c-.01-8.84-7.17-16-16.01-16m111.98-144c0-16.18 1.34-8.73-85.05-181.51c-17.65-35.29-68.19-35.36-85.87 0c-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80zM440 288l72-144l72 144zm-269.07-37.51c-17.65-35.29-68.19-35.36-85.87 0C-2.06 424.75.02 416.33.02 432H0c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02c0-16.18 1.34-8.73-85.05-181.51M56 416l72-144l72 144z"></svg:path>`,
})
export class FaSolidBalanceScaleLeftIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBalanceScaleRightIcon],svg[fa-solid-balance-scale-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 464v32c0 8.84 7.16 16 16 16h224c8.84 0 16-7.16 16-16V153.25c4.56-2 8.92-4.35 12.99-7.12l142.05 47.63c8.38 2.81 17.45-1.71 20.26-10.08l10.17-30.34c2.81-8.38-1.71-17.45-10.08-20.26l-128.4-43.05c.42-3.32 1.01-6.6 1.01-10.03c0-44.18-35.82-80-80-80c-29.69 0-55.3 16.36-69.11 40.37L132.96.83c-8.38-2.81-17.45 1.71-20.26 10.08l-10.17 30.34c-2.81 8.38 1.71 17.45 10.08 20.26l132 44.26c7.28 21.25 22.96 38.54 43.38 47.47V448H112c-8.84 0-16 7.16-16 16M0 304c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02c0-15.67 2.08-7.25-85.05-181.51c-17.68-35.36-68.22-35.29-85.87 0C-1.32 295.27.02 287.82.02 304zm56-16l72-144l72 144zm328.02 144H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02c0-15.67 2.08-7.25-85.05-181.51c-17.68-35.36-68.22-35.29-85.87 0c-86.38 172.78-85.04 165.33-85.04 181.51M440 416l72-144l72 144z"></svg:path>`,
})
export class FaSolidBalanceScaleRightIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBanIcon],svg[fa-solid-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248s248-111.034 248-248S392.967 8 256 8m130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676M125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676"></svg:path>`,
})
export class FaSolidBanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBandAidIcon],svg[fa-solid-band-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 160v192c0 35.3 28.7 64 64 64h96V96H64c-35.3 0-64 28.7-64 64m576-64h-96v320h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64M192 416h256V96H192zm176-232c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m-96-96c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m0 96c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24"></svg:path>`,
})
export class FaSolidBandAidIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBarcodeIcon],svg[fa-solid-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 448V64h18v384zm26.857-.273V64H36v383.727zm27.143 0V64h8.857v383.727zm44.857 0V64h8.857v383.727zm36 0V64h17.714v383.727zm44.857 0V64h8.857v383.727zm18 0V64h8.857v383.727zm18 0V64h8.857v383.727zm35.715 0V64h18v383.727zm44.857 0V64h18v383.727zm35.999 0V64h18.001v383.727zm36.001 0V64h18.001v383.727zm26.857 0V64h18v383.727zm45.143 0V64h26.857v383.727zm35.714 0V64h9.143v383.727zm18 .273V64h18v384z"></svg:path>`,
})
export class FaSolidBarcodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBarsIcon],svg[fa-solid-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16"></svg:path>`,
})
export class FaSolidBarsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBaseballBallIcon],svg[fa-solid-baseball-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m368.5 363.9l28.8-13.9c11.1 22.9 26 43.2 44.1 60.9c34-42.5 54.5-96.3 54.5-154.9c0-58.5-20.4-112.2-54.2-154.6c-17.8 17.3-32.6 37.1-43.6 59.5l-28.7-14.1c12.8-26 30-49 50.8-69C375.6 34.7 315 8 248 8C181.1 8 120.5 34.6 75.9 77.7c20.7 19.9 37.9 42.9 50.7 68.8l-28.7 14.1c-11-22.3-25.7-42.1-43.5-59.4C20.4 143.7 0 197.4 0 256s20.4 112.3 54.4 154.7c18.2-17.7 33.2-38 44.3-61l28.8 13.9c-12.9 26.7-30.3 50.3-51.5 70.7c44.5 43.1 105.1 69.7 172 69.7c66.8 0 127.3-26.5 171.9-69.5c-21.1-20.4-38.5-43.9-51.4-70.6m-228.3-32l-30.5-9.8c14.9-46.4 12.7-93.8-.6-134l30.4-10c15 45.6 18 99.9.7 153.8m216.3-153.4l30.4 10c-13.2 40.1-15.5 87.5-.6 134l-30.5 9.8c-17.3-54-14.3-108.3.7-153.8"></svg:path>`,
})
export class FaSolidBaseballBallIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBasketballBallIcon],svg[fa-solid-basketball-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2M248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1c-1.2 63.9-21.5 122.3-58.7 167.7zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2c50-1.5 95.5-17 131.2-44.8zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7c-2.6-51.9-21.1-103.1-56.1-145.5L282 256zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1c1.3-64 21.6-122.4 58.7-167.7zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2c-50.1 1.6-95.5 17.1-131.2 44.8zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2"></svg:path>`,
})
export class FaSolidBasketballBallIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBathIcon],svg[fa-solid-bath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 384a95.4 95.4 0 0 0 32 71.09V496a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h256v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-40.91A95.4 95.4 0 0 0 480 384v-48H32Zm464-128H80V69.25a21.26 21.26 0 0 1 36.28-15l19.27 19.26c-13.13 29.88-7.61 59.11 8.62 79.73l-.17.17a16 16 0 0 0 0 22.59l11.31 11.31a16 16 0 0 0 22.63 0L283.31 81.94a16 16 0 0 0 0-22.63L272 48a16 16 0 0 0-22.62 0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62l-19.26-19.27A69.25 69.25 0 0 0 32 69.25V256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidBathIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBatteryEmptyIcon],svg[fa-solid-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160zm16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48"></svg:path>`,
})
export class FaSolidBatteryEmptyIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBatteryFullIcon],svg[fa-solid-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160zm16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48m-48 96H96v128h416z"></svg:path>`,
})
export class FaSolidBatteryFullIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBatteryHalfIcon],svg[fa-solid-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160zm16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48m-240 96H96v128h224z"></svg:path>`,
})
export class FaSolidBatteryHalfIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBatteryQuarterIcon],svg[fa-solid-battery-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160zm16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48m-336 96H96v128h128z"></svg:path>`,
})
export class FaSolidBatteryQuarterIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBatteryThreeQuartersIcon],svg[fa-solid-battery-three-quarters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160zm16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48m-144 96H96v128h320z"></svg:path>`,
})
export class FaSolidBatteryThreeQuartersIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBedIcon],svg[fa-solid-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80s-80 35.89-80 80s35.89 80 80 80m352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112"></svg:path>`,
})
export class FaSolidBedIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBeerIcon],svg[fa-solid-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80m16 208.86a16.02 16.02 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16m-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16"></svg:path>`,
})
export class FaSolidBeerIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBellIcon],svg[fa-solid-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71"></svg:path>`,
})
export class FaSolidBellIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBellSlashIcon],svg[fa-solid-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06c.05-7.55-2.61-15.27-8.61-21.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45M157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h241.92zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64"></svg:path>`,
})
export class FaSolidBellSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBezierCurveIcon],svg[fa-solid-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32M208 88h-84.75C113.75 64.56 90.84 48 64 48C28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56c-3.7-8.08-5.88-16.99-5.88-26.44zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32M576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44c34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40c35.34 0 64-28.65 64-64s-28.66-64-64-64m0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidBezierCurveIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBibleIcon],svg[fa-solid-bible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2M144 144c0-8.84 7.16-16 16-16h48V80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v48h48c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-48v112c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V192h-48c-8.84 0-16-7.16-16-16zm236.8 304H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z"></svg:path>`,
})
export class FaSolidBibleIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBicycleIcon],svg[fa-solid-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.509 192.001c-16.373-.064-32.03 2.955-46.436 8.495l-77.68-125.153A24 24 0 0 0 368.001 64h-64c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h50.649l14.896 24H256.002v-16c0-8.837-7.163-16-16-16h-87.459c-13.441 0-24.777 10.999-24.536 24.437c.232 13.044 10.876 23.563 23.995 23.563h48.726l-29.417 47.52c-13.433-4.83-27.904-7.483-42.992-7.52C58.094 191.83.412 249.012.002 319.236C-.413 390.279 57.055 448 128.002 448c59.642 0 109.758-40.793 123.967-96h52.033a24 24 0 0 0 20.406-11.367L410.37 201.77l14.938 24.067c-25.455 23.448-41.385 57.081-41.307 94.437c.145 68.833 57.899 127.051 126.729 127.719c70.606.685 128.181-55.803 129.255-125.996c1.086-70.941-56.526-129.72-127.476-129.996M186.75 265.772c9.727 10.529 16.673 23.661 19.642 38.228h-43.306zM128.002 400c-44.112 0-80-35.888-80-80s35.888-80 80-80c5.869 0 11.586.653 17.099 1.859l-45.505 73.509C89.715 331.327 101.213 352 120.002 352h81.3c-12.37 28.225-40.562 48-73.3 48m162.63-96h-35.624c-3.96-31.756-19.556-59.894-42.383-80.026L237.371 184h127.547zm217.057 95.886c-41.036-2.165-74.049-35.692-75.627-76.755c-.812-21.121 6.633-40.518 19.335-55.263l44.433 71.586c4.66 7.508 14.524 9.816 22.032 5.156l13.594-8.437c7.508-4.66 9.817-14.524 5.156-22.032l-44.468-71.643a80 80 0 0 1 19.858-2.497c44.112 0 80 35.888 80 80c-.001 45.54-38.252 82.316-84.313 79.885"></svg:path>`,
})
export class FaSolidBicycleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBikingIcon],svg[fa-solid-biking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 96a48 48 0 1 0-48-48a48 48 0 0 0 48 48m-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57l58.25-49.92zm116 39a128 128 0 1 0 128 128a128 128 0 0 0-128-128m0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64M128 256a128 128 0 1 0 128 128a128 128 0 0 0-128-128m0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64"></svg:path>`,
})
export class FaSolidBikingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBinocularsIcon],svg[fa-solid-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99m384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01M176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16m48 256h64V128h-64z"></svg:path>`,
})
export class FaSolidBinocularsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBiohazardIcon],svg[fa-solid-biohazard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M287.9 112c18.6 0 36.2 3.8 52.8 9.6c13.3-10.3 23.6-24.3 29.5-40.7c-25.2-10.9-53-17-82.2-17c-29.1 0-56.9 6-82.1 16.9c5.9 16.4 16.2 30.4 29.5 40.7c16.5-5.7 34-9.5 52.5-9.5M163.6 438.7c12-11.8 20.4-26.4 24.5-42.4c-32.9-26.4-54.8-65.3-58.9-109.6c-8.5-2.8-17.2-4.6-26.4-4.6c-7.6 0-15.2 1-22.5 3.1c4.1 62.8 35.8 118 83.3 153.5m224.2-42.6c4.1 16 12.5 30.7 24.5 42.5c47.4-35.5 79.1-90.7 83-153.5c-7.2-2-14.7-3-22.2-3c-9.2 0-18 1.9-26.6 4.7c-4.1 44.2-26 82.9-58.7 109.3m113.5-205c-17.6-10.4-36.3-16.6-55.3-19.9c6-17.7 10-36.4 10-56.2c0-41-14.5-80.8-41-112.2c-2.5-3-6.6-3.7-10-1.8c-3.3 1.9-4.8 6-3.6 9.7c4.5 13.8 6.6 26.3 6.6 38.5c0 67.8-53.8 122.9-120 122.9S168 117 168 49.2c0-12.1 2.2-24.7 6.6-38.5c1.2-3.7-.3-7.8-3.6-9.7c-3.4-1.9-7.5-1.2-10 1.8C134.6 34.2 120 74 120 115c0 19.8 3.9 38.5 10 56.2c-18.9 3.3-37.7 9.5-55.3 19.9c-34.6 20.5-61 53.3-74.3 92.4c-1.3 3.7.2 7.7 3.5 9.8c3.3 2 7.5 1.3 10-1.6c9.4-10.8 19-19.1 29.2-25.1c57.3-33.9 130.8-13.7 163.9 45s13.4 134-43.9 167.9c-10.2 6.1-22 10.4-35.8 13.4c-3.7.8-6.4 4.2-6.4 8.1c.1 4 2.7 7.3 6.5 8c39.7 7.8 80.6.8 115.2-19.7c18-10.6 32.9-24.5 45.3-40.1c12.4 15.6 27.3 29.5 45.3 40.1c34.6 20.5 75.5 27.5 115.2 19.7c3.8-.7 6.4-4 6.5-8c0-3.9-2.6-7.3-6.4-8.1c-13.9-2.9-25.6-7.3-35.8-13.4c-57.3-33.9-77-109.2-43.9-167.9s106.6-78.9 163.9-45c10.2 6.1 19.8 14.3 29.2 25.1c2.5 2.9 6.7 3.6 10 1.6s4.8-6.1 3.5-9.8c-13.1-39.1-39.5-72-74.1-92.4m-213.4 129c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48"></svg:path>`,
})
export class FaSolidBiohazardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBirthdayCakeIcon],svg[fa-solid-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 384c-28.02 0-31.26-32-74.5-32c-43.43 0-46.825 32-74.75 32c-27.695 0-31.454-32-74.75-32c-42.842 0-47.218 32-74.5 32c-28.148 0-31.202-32-74.75-32c-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48zm0 128H0v-96c43.356 0 46.767-32 74.75-32c27.951 0 31.253 32 74.75 32c42.843 0 47.217-32 74.5-32c28.148 0 31.201 32 74.75 32c43.357 0 46.767-32 74.75-32c27.488 0 31.252 32 74.5 32zM96 96c-17.75 0-32-14.25-32-32c0-31 32-23 32-64c12 0 32 29.5 32 56s-14.25 40-32 40m128 0c-17.75 0-32-14.25-32-32c0-31 32-23 32-64c12 0 32 29.5 32 56s-14.25 40-32 40m128 0c-17.75 0-32-14.25-32-32c0-31 32-23 32-64c12 0 32 29.5 32 56s-14.25 40-32 40"></svg:path>`,
})
export class FaSolidBirthdayCakeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBlenderIcon],svg[fa-solid-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 384H160c-35.35 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-32c0-35.35-28.65-64-64-64m-128 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m40-416h166.54L512 0H48C21.49 0 0 21.49 0 48v160c0 26.51 21.49 48 48 48h103.27l8.73 96h256l17.46-64H328c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h114.18l17.46-64H328c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h140.36l17.46-64H328c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8M64 192V64h69.82l11.64 128z"></svg:path>`,
})
export class FaSolidBlenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBlenderPhoneIcon],svg[fa-solid-blender-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 64h166.54L576 0H192v352h288l17.46-64H392c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h114.18l17.46-64H392c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h140.36l17.46-64H392c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8M158.8 335.01l-25.78-63.26c-2.78-6.81-9.8-10.99-17.24-10.26l-45.03 4.42c-17.28-46.94-17.65-99.78 0-147.72l45.03 4.42c7.43.73 14.46-3.46 17.24-10.26l25.78-63.26c3.02-7.39.2-15.85-6.68-20.07l-39.28-24.1C98.51-3.87 80.09-.5 68.95 11.97c-92.57 103.6-92 259.55 2.1 362.49c9.87 10.8 29.12 12.48 41.65 4.8l39.41-24.18c6.89-4.22 9.7-12.67 6.69-20.07M480 384H192c-35.35 0-64 28.65-64 64v32c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32v-32c0-35.35-28.65-64-64-64m-144 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidBlenderPhoneIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBlindIcon],svg[fa-solid-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.15 510.837a8 8 0 0 1-10.989-2.687l-125.33-206.427a31.9 31.9 0 0 0 12.958-9.485l126.048 207.608a8 8 0 0 1-2.687 10.991M142.803 314.338l-32.54 89.485l36.12 88.285c6.693 16.36 25.377 24.192 41.733 17.501c16.357-6.692 24.193-25.376 17.501-41.734zM96 88c24.301 0 44-19.699 44-44S120.301 0 96 0S52 19.699 52 44s19.699 44 44 44m154.837 169.128l-120-152c-4.733-5.995-11.75-9.108-18.837-9.112V96H80v.026c-7.146.003-14.217 3.161-18.944 9.24L0 183.766v95.694c0 13.455 11.011 24.791 24.464 24.536C37.505 303.748 48 293.1 48 280v-79.766l16-20.571v140.698L9.927 469.055c-6.04 16.609 2.528 34.969 19.138 41.009c16.602 6.039 34.968-2.524 41.009-19.138L136 309.638V202.441l-31.406-39.816a4 4 0 1 1 6.269-4.971l102.3 129.217c9.145 11.584 24.368 11.339 33.708 3.965c10.41-8.216 12.159-23.334 3.966-33.708"></svg:path>`,
})
export class FaSolidBlindIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBlogIcon],svg[fa-solid-blog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22c18.2 6.8 31.3 24.4 31.3 45c0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7c54.4-11.4 98.3-55.4 109.7-109.7c17.4-82.9-37-157.2-112.5-172.2M209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9c129.4 7 233.4 112 240.9 241.5c.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0m.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9c76.8 6.3 138 68.2 144.9 145.2c.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3c-8.4-110.1-96.5-198.2-206.6-206.7"></svg:path>`,
})
export class FaSolidBlogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoldIcon],svg[fa-solid-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4c4.74-48.45-16.39-92.06-50.83-119.6M145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112"></svg:path>`,
})
export class FaSolidBoldIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoltIcon],svg[fa-solid-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5c8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36"></svg:path>`,
})
export class FaSolidBoltIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBombIcon],svg[fa-solid-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m440.5 88.5l-52 52L415 167c9.4 9.4 9.4 24.6 0 33.9l-17.4 17.4c11.8 26.1 18.4 55.1 18.4 85.6c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c30.5 0 59.5 6.6 85.6 18.4L311 97c9.4-9.4 24.6-9.4 33.9 0l26.5 26.5l52-52zM500 60h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12h24c6.6 0 12-5.4 12-12s-5.4-12-12-12M440 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12m33.9 55l17-17c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17c4.8 4.7 12.4 4.7 17 0m-67.8 0c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17zm67.8 34c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17zM112 272c0-35.3 28.7-64 64-64c8.8 0 16-7.2 16-16s-7.2-16-16-16c-52.9 0-96 43.1-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16"></svg:path>`,
})
export class FaSolidBombIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoneIcon],svg[fa-solid-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M598.88 244.56c25.2-12.6 41.12-38.36 41.12-66.53v-7.64C640 129.3 606.7 96 565.61 96c-32.02 0-60.44 20.49-70.57 50.86c-7.68 23.03-11.6 45.14-38.11 45.14H183.06c-27.38 0-31.58-25.54-38.11-45.14C134.83 116.49 106.4 96 74.39 96C33.3 96 0 129.3 0 170.39v7.64c0 28.17 15.92 53.93 41.12 66.53c9.43 4.71 9.43 18.17 0 22.88C15.92 280.04 0 305.8 0 333.97v7.64C0 382.7 33.3 416 74.38 416c32.02 0 60.44-20.49 70.57-50.86c7.68-23.03 11.6-45.14 38.11-45.14h273.87c27.38 0 31.58 25.54 38.11 45.14C505.17 395.51 533.6 416 565.61 416c41.08 0 74.38-33.3 74.38-74.39v-7.64c0-28.18-15.92-53.93-41.12-66.53c-9.42-4.71-9.42-18.17.01-22.88"></svg:path>`,
})
export class FaSolidBoneIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBongIcon],svg[fa-solid-bong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.5 512c23.18 0 44.43-12.58 56-32.66C374.69 451.26 384 418.75 384 384c0-36.12-10.08-69.81-27.44-98.62L400 241.94l9.38 9.38c6.25 6.25 16.38 6.25 22.63 0l11.3-11.32c6.25-6.25 6.25-16.38 0-22.63l-52.69-52.69c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l9.38 9.38l-39.41 39.41c-11.56-11.37-24.53-21.33-38.65-29.51V63.74l15.97-.02c8.82-.01 15.97-7.16 15.98-15.98l.04-31.72C320 7.17 312.82-.01 303.97 0L80.03.26c-8.82.01-15.97 7.16-15.98 15.98l-.04 31.73c-.01 8.85 7.17 16.02 16.02 16.01L96 63.96v153.93C38.67 251.1 0 312.97 0 384c0 34.75 9.31 67.27 25.5 95.34C37.08 499.42 58.33 512 81.5 512zM120.06 259.43L144 245.56V63.91l96-.11v181.76l23.94 13.87c24.81 14.37 44.12 35.73 56.56 60.57h-257c12.45-24.84 31.75-46.2 56.56-60.57"></svg:path>`,
})
export class FaSolidBongIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBookIcon],svg[fa-solid-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7c-4.2-15.4-4.2-59.3 0-74.7c5.4-4.3 8.9-11.1 8.9-18.6M128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6zm253.4 250H96c-17.7 0-32-14.3-32-32c0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64"></svg:path>`,
})
export class FaSolidBookIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBookDeadIcon],svg[fa-solid-book-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 136c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16m176 222.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2M240 56c44.2 0 80 28.7 80 64c0 20.9-12.7 39.2-32 50.9V184c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-13.1c-19.3-11.7-32-30-32-50.9c0-35.3 35.8-64 80-64M124.8 223.3l6.3-14.7c1.7-4.1 6.4-5.9 10.5-4.2l98.3 42.1l98.4-42.1c4.1-1.7 8.8.1 10.5 4.2l6.3 14.7c1.7 4.1-.1 8.8-4.2 10.5L280.6 264l70.3 30.1c4.1 1.7 5.9 6.4 4.2 10.5l-6.3 14.7c-1.7 4.1-6.4 5.9-10.5 4.2L240 281.4l-98.3 42.2c-4.1 1.7-8.8-.1-10.5-4.2l-6.3-14.7c-1.7-4.1.1-8.8 4.2-10.5l70.4-30.1l-70.5-30.3c-4.1-1.7-5.9-6.4-4.2-10.5m256 224.7H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8zM208 136c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16"></svg:path>`,
})
export class FaSolidBookDeadIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBookMedicalIcon],svg[fa-solid-book-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2M144 168a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8zm236.8 280H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z"></svg:path>`,
})
export class FaSolidBookMedicalIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBookOpenIcon],svg[fa-solid-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59c-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49c69.18-34.82 169.23-44.32 218.7-46.92c16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7M264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05C15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66c49.49 2.6 149.59 12.11 218.77 46.95c10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99"></svg:path>`,
})
export class FaSolidBookOpenIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBookReaderIcon],svg[fa-solid-book-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96s96-42.98 96-96M233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05c43.66 2.29 131.99 10.68 193.04 41.43c9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46m248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05c-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9c61.04-30.72 149.32-39.11 192.97-41.4c14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09"></svg:path>`,
})
export class FaSolidBookReaderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBookmarkIcon],svg[fa-solid-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400z"></svg:path>`,
})
export class FaSolidBookmarkIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBorderAllIcon],svg[fa-solid-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"></svg:path>`,
})
export class FaSolidBorderAllIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBorderNoneIcon],svg[fa-solid-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 224h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-288 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96 192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M240 320h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-96 288h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96-384h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 224H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-96H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidBorderNoneIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBorderStyleIcon],svg[fa-solid-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 416h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-96 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m192 0h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m96-192h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-288h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-96H32A32 32 0 0 0 0 64v400a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V96h368a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidBorderStyleIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBowlingBallIcon],svg[fa-solid-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M120 192c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m64-96c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32m48 144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidBowlingBallIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoxIcon],svg[fa-solid-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4M240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224z"></svg:path>`,
})
export class FaSolidBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoxOpenIcon],svg[fa-solid-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5c-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9m212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1M53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64L69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9"></svg:path>`,
})
export class FaSolidBoxOpenIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoxTissueIcon],svg[fa-solid-box-tissue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m383.88 287.82l64-192H338.47a70.2 70.2 0 0 1-66.59-48a70.21 70.21 0 0 0-66.6-48H63.88l64 288Zm-384 192a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64h-512Zm480-256h-40.94l-21.33 64h14.27a16 16 0 0 1 0 32h-352a16 16 0 1 1 0-32h15.21l-14.22-64h-49a32 32 0 0 0-32 32v128h512v-128a32 32 0 0 0-31.99-32"></svg:path>`,
})
export class FaSolidBoxTissueIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBoxesIcon],svg[fa-solid-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M560 288h-80v96l-32-21.3l-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16m-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16m64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidBoxesIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBrailleIcon],svg[fa-solid-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 256c0 35.346-28.654 64-64 64S0 291.346 0 256s28.654-64 64-64s64 28.654 64 64M64 384c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0-352C28.654 32 0 60.654 0 96s28.654 64 64 64s64-28.654 64-64s-28.654-64-64-64m160 192c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0-352c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.654-64-64-64m224 192c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0-352c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.654-64-64-64m160 192c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0 160c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0-320c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class FaSolidBrailleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBrainIcon],svg[fa-solid-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 0c-29.9 0-54.7 20.5-61.8 48.2c-.8 0-1.4-.2-2.2-.2c-35.3 0-64 28.7-64 64c0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9c-.9 4.6-1.4 9.3-1.4 14.1c0 39.8 32.2 72 72 72c4.1 0 8.1-.5 12-1.2c9.6 28.5 36.2 49.2 68 49.2c39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64m368 304c0-29.7-16.3-55.3-40.3-69.1c5.2-10.6 8.3-22.3 8.3-34.9c0-33.4-20.5-62-49.7-74c1-4.5 1.7-9.2 1.7-14c0-35.3-28.7-64-64-64c-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72c31.8 0 58.4-20.7 68-49.2c3.9.7 7.9 1.2 12 1.2c39.8 0 72-32.2 72-72c0-4.8-.5-9.5-1.4-14.1c29-12 49.4-40.6 49.4-73.9"></svg:path>`,
})
export class FaSolidBrainIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBreadSliceIcon],svg[fa-solid-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0C108 0 0 93.4 0 169.14C0 199.44 24.24 224 64 224v256c0 17.67 16.12 32 36 32h376c19.88 0 36-14.33 36-32V224c39.76 0 64-24.56 64-54.86C576 93.4 468 0 288 0"></svg:path>`,
})
export class FaSolidBreadSliceIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBriefcaseIcon],svg[fa-solid-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48m-144 0H192V96h128z"></svg:path>`,
})
export class FaSolidBriefcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBriefcaseMedicalIcon],svg[fa-solid-briefcase-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48M192 96h128v32H192zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidBriefcaseMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBroadcastTowerIcon],svg[fa-solid-broadcast-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150.94 192h33.73c11.01 0 18.61-10.83 14.86-21.18c-4.93-13.58-7.55-27.98-7.55-42.82s2.62-29.24 7.55-42.82C203.29 74.83 195.68 64 184.67 64h-33.73c-7.01 0-13.46 4.49-15.41 11.23C130.64 92.21 128 109.88 128 128s2.64 35.79 7.54 52.76c1.94 6.74 8.39 11.24 15.4 11.24M89.92 23.34C95.56 12.72 87.97 0 75.96 0H40.63c-6.27 0-12.14 3.59-14.74 9.31C9.4 45.54 0 85.65 0 128c0 24.75 3.12 68.33 26.69 118.86c2.62 5.63 8.42 9.14 14.61 9.14h34.84c12.02 0 19.61-12.74 13.95-23.37c-49.78-93.32-16.71-178.15-.17-209.29M614.06 9.29C611.46 3.58 605.6 0 599.33 0h-35.42c-11.98 0-19.66 12.66-14.02 23.25c18.27 34.29 48.42 119.42.28 209.23c-5.72 10.68 1.8 23.52 13.91 23.52h35.23c6.27 0 12.13-3.58 14.73-9.29C630.57 210.48 640 170.36 640 128s-9.42-82.48-25.94-118.71M489.06 64h-33.73c-11.01 0-18.61 10.83-14.86 21.18c4.93 13.58 7.55 27.98 7.55 42.82s-2.62 29.24-7.55 42.82c-3.76 10.35 3.85 21.18 14.86 21.18h33.73c7.02 0 13.46-4.49 15.41-11.24c4.9-16.97 7.53-34.64 7.53-52.76s-2.64-35.79-7.54-52.76c-1.94-6.75-8.39-11.24-15.4-11.24m-116.3 100.12c7.05-10.29 11.2-22.71 11.2-36.12c0-35.35-28.63-64-63.96-64c-35.32 0-63.96 28.65-63.96 64c0 13.41 4.15 25.83 11.2 36.12l-130.5 313.41c-3.4 8.15.46 17.52 8.61 20.92l29.51 12.31c8.15 3.4 17.52-.46 20.91-8.61L244.96 384h150.07l49.2 118.15c3.4 8.16 12.76 12.01 20.91 8.61l29.51-12.31c8.15-3.4 12-12.77 8.61-20.92zM271.62 320L320 203.81L368.38 320z"></svg:path>`,
})
export class FaSolidBroadcastTowerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBroomIcon],svg[fa-solid-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47c59.97-47.76 163.3-40.94 163.3-40.94M636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8l-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55l86.73 109.18l58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92l232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44"></svg:path>`,
})
export class FaSolidBroomIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBrushIcon],svg[fa-solid-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32M0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0zm192 104c13.25 0 24 10.74 24 24c0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24"></svg:path>`,
})
export class FaSolidBrushIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBugIcon],svg[fa-solid-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255c-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0s-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9C-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255c12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0c12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9M257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0"></svg:path>`,
})
export class FaSolidBugIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBuildingIcon],svg[fa-solid-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12M128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12m76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12z"></svg:path>`,
})
export class FaSolidBuildingIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBullhornIcon],svg[fa-solid-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32c0 39.77 9.26 77.35 25.56 110.94c5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56c-16.4-21.52-26.15-48.36-26.15-77.44c0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.02 32.02 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240m-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58z"></svg:path>`,
})
export class FaSolidBullhornIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBullseyeIcon],svg[fa-solid-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m0 432c-101.69 0-184-82.29-184-184c0-101.69 82.29-184 184-184c101.69 0 184 82.29 184 184c0 101.69-82.29 184-184 184m0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128s128-57.31 128-128s-57.31-128-128-128m0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64s64 28.71 64 64s-28.71 64-64 64"></svg:path>`,
})
export class FaSolidBullseyeIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBurnIcon],svg[fa-solid-burn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0C79.7 101.3 0 220.9 0 300.5C0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5m0 448c-56.5 0-96-39-96-94.8c0-13.5 4.6-61.5 96-161.2c91.4 99.7 96 147.7 96 161.2c0 55.8-39.5 94.8-96 94.8"></svg:path>`,
})
export class FaSolidBurnIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBusIcon],svg[fa-solid-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24M112 400c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m16-112c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v128c0 17.67-14.33 32-32 32zm272 112c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidBusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBusAltIcon],svg[fa-solid-bus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24M160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidBusAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidBusinessTimeIcon],svg[fa-solid-business-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144s144-64.41 144-144s-64.41-144-144-144m64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32M320 96H192V64h128zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48"></svg:path>`,
})
export class FaSolidBusinessTimeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalculatorIcon],svg[fa-solid-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48M128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8z"></svg:path>`,
})
export class FaSolidCalculatorIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalculatorAltIcon],svg[fa-solid-calculator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 288H32c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V320c0-17.67-14.33-32-32-32zm-29.09 140.29c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0L112 422.63l-28.29 28.29c-3.12 3.12-8.19 3.12-11.31 0L61.09 439.6c-3.12-3.12-3.12-8.19 0-11.31L89.37 400l-28.29-28.29c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l28.3 28.28 28.29-28.29c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31L134.63 400l28.28 28.29zM480 0H320c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm-16 120c0 4.42-3.58 8-8 8h-40v40c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-40h-40c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h40V56c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v40h40c4.42 0 8 3.58 8 8v16zm16 168H320c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V320c0-17.67-14.33-32-32-32zm-16 152c0 4.42-3.58 8-8 8H344c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm0-64c0 4.42-3.58 8-8 8H344c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zM192 0H32C14.33 0 0 14.33 0 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm-16 120c0 4.42-3.58 8-8 8H56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16z" fill="currentColor"></svg:path>`,
})
export class FaSolidCalculatorAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarIcon],svg[fa-solid-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12m436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FaSolidCalendarIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarAltIcon],svg[fa-solid-calendar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidCalendarAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarCheckIcon],svg[fa-solid-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12M12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12m333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97"></svg:path>`,
})
export class FaSolidCalendarCheckIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarDayIcon],svg[fa-solid-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidCalendarDayIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarMinusIcon],svg[fa-solid-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12m304 192c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H132c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12z"></svg:path>`,
})
export class FaSolidCalendarMinusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarPlusIcon],svg[fa-solid-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12m316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12z"></svg:path>`,
})
export class FaSolidCalendarPlusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarTimesIcon],svg[fa-solid-calendar-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12m257.3 160l48.1-48.1c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0L224 306.7l-48.1-48.1c-4.7-4.7-12.3-4.7-17 0l-28.3 28.3c-4.7 4.7-4.7 12.3 0 17l48.1 48.1l-48.1 48.1c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l48.1-48.1l48.1 48.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17z"></svg:path>`,
})
export class FaSolidCalendarTimesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCalendarWeekIcon],svg[fa-solid-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidCalendarWeekIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCameraIcon],svg[fa-solid-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48M376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120s53.8 120 120 120s120-53.8 120-120m-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88s39.5-88 88-88s88 39.5 88 88"></svg:path>`,
})
export class FaSolidCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCameraRetroIcon],svg[fa-solid-camera-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16m426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6M256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120s120 53.8 120 120s-53.8 120-120 120m0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88s88-39.5 88-88s-39.5-88-88-88m-48 104c-8.8 0-16-7.2-16-16c0-35.3 28.7-64 64-64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32c0 8.8-7.2 16-16 16"></svg:path>`,
})
export class FaSolidCameraRetroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCampgroundIcon],svg[fa-solid-campground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3L278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M320 288l116.36 160H203.64z"></svg:path>`,
})
export class FaSolidCampgroundIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCandyCaneIcon],svg[fa-solid-candy-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M497.5 92C469.6 33.1 411.8 0 352.4 0c-27.9 0-56.2 7.3-81.8 22.6L243.1 39c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6c5.6 0 11.2-1.5 16.4-4.5l27.5-16.4c5.1-3.1 10.8-4.5 16.4-4.5c10.9 0 21.5 5.6 27.5 15.6c9.1 15.1 4.1 34.8-11 43.9L15.6 397.6c-15.2 9.1-20.1 28.7-11 43.9l32.8 54.9c6 10 16.6 15.6 27.5 15.6c5.6 0 11.2-1.5 16.4-4.5L428.6 301c71.7-42.9 104.6-133.5 68.9-209m-177.7 13l-2.5 1.5L296.8 45q14.55-7.05 30.3-10.2l20.6 61.8c-9.8.8-19.4 3.3-27.9 8.4M145.9 431.8l-60.5-38.5l30.8-18.3l60.5 38.5zm107.5-63.9l-60.5-38.5l30.8-18.3l60.5 38.5zM364.3 302l-60.5-38.5l30.8-18.3l60.5 38.5zm20.4-197.3l46-46c8.4 6.5 16 14.1 22.6 22.6L407.6 127c-5.7-9.3-13.7-16.9-22.9-22.3m82.1 107.8l-59.5-19.8c3.2-5.3 5.8-10.9 7.4-17.1c1.1-4.5 1.7-9.1 1.8-13.6l60.4 20.1c-2.1 10.4-5.5 20.6-10.1 30.4"></svg:path>`,
})
export class FaSolidCandyCaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCannabisIcon],svg[fa-solid-cannabis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.47 360.25c-1.56-.82-32.39-16.89-76.78-25.81c64.25-75.12 84.05-161.67 84.93-165.64c1.18-5.33-.44-10.9-4.3-14.77c-3.03-3.04-7.12-4.7-11.32-4.7c-1.14 0-2.29.12-3.44.38c-3.88.85-86.54 19.59-160.58 79.76c.01-1.46.01-2.93.01-4.4c0-118.79-59.98-213.72-62.53-217.7A15.97 15.97 0 0 0 256 0c-5.45 0-10.53 2.78-13.47 7.37c-2.55 3.98-62.53 98.91-62.53 217.7c0 1.47.01 2.94.01 4.4c-74.03-60.16-156.69-78.9-160.58-79.76c-1.14-.25-2.29-.38-3.44-.38c-4.2 0-8.29 1.66-11.32 4.7A15.99 15.99 0 0 0 .38 168.8c.88 3.97 20.68 90.52 84.93 165.64c-44.39 8.92-75.21 24.99-76.78 25.81a16.003 16.003 0 0 0-.02 28.29c2.45 1.29 60.76 31.72 133.49 31.72c6.14 0 11.96-.1 17.5-.31c-11.37 22.23-16.52 38.31-16.81 39.22c-1.8 5.68-.29 11.89 3.91 16.11a16.02 16.02 0 0 0 16.1 3.99c1.83-.57 37.72-11.99 77.3-39.29V504c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-64.01c39.58 27.3 75.47 38.71 77.3 39.29a16.02 16.02 0 0 0 16.1-3.99c4.2-4.22 5.71-10.43 3.91-16.11c-.29-.91-5.45-16.99-16.81-39.22c5.54.21 11.37.31 17.5.31c72.72 0 131.04-30.43 133.49-31.72c5.24-2.78 8.52-8.22 8.51-14.15c-.01-5.94-3.29-11.39-8.53-14.15"></svg:path>`,
})
export class FaSolidCannabisIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCapsulesIcon],svg[fa-solid-capsules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M555.3 300.1L424.2 112.8C401.9 81 366.4 64 330.4 64c-22.6 0-45.5 6.7-65.5 20.7c-19.7 13.8-33.7 32.8-41.5 53.8C220.5 79.2 172 32 112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V218.9c3.3 8.6 7.3 17.1 12.8 25L368 431.2c22.2 31.8 57.7 48.8 93.8 48.8c22.7 0 45.5-6.7 65.5-20.7c51.7-36.2 64.2-107.5 28-159.2M160 256H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48zm194.8 44.9l-65.6-93.7c-7.7-11-10.7-24.4-8.3-37.6c2.3-13.2 9.7-24.8 20.7-32.5c8.5-6 18.5-9.1 28.8-9.1c16.5 0 31.9 8 41.3 21.5l65.6 93.7z"></svg:path>`,
})
export class FaSolidCapsulesIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCarIcon],svg[fa-solid-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91m-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85s-28.8 15.95-48 15.95m320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9s-12.8 31.9-32 31.9"></svg:path>`,
})
export class FaSolidCarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCarAltIcon],svg[fa-solid-car-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m438.66 212.33l-11.24-28.1l-19.93-49.83C390.38 91.63 349.57 64 303.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4l-19.93 49.83l-11.24 28.1C17.22 221.5 0 244.66 0 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-27.34-17.22-50.5-41.34-59.67m-306.73-54.16c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L368 208H112zM80 319.8c-19.2 0-32-12.76-32-31.9S60.8 256 80 256s48 28.71 48 47.85s-28.8 15.95-48 15.95m320 0c-19.2 0-48 3.19-48-15.95S380.8 256 400 256s32 12.76 32 31.9s-12.8 31.9-32 31.9"></svg:path>`,
})
export class FaSolidCarAltIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCarBatteryIcon],svg[fa-solid-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 128h-32V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v48H192V80c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v48H32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32M192 264c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8zm256 0c0 4.42-3.58 8-8 8h-40v40c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-40h-40c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h40v-40c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v40h40c4.42 0 8 3.58 8 8z"></svg:path>`,
})
export class FaSolidCarBatteryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCarCrashIcon],svg[fa-solid-car-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m143.25 220.81l-12.42 46.37c-3.01 11.25-3.63 22.89-2.41 34.39l-35.2 28.98c-6.57 5.41-16.31-.43-14.62-8.77l15.44-76.68c1.06-5.26-2.66-10.28-8-10.79l-77.86-7.55c-8.47-.82-11.23-11.83-4.14-16.54l65.15-43.3c4.46-2.97 5.38-9.15 1.98-13.29L21.46 93.22c-5.41-6.57.43-16.3 8.78-14.62l76.68 15.44c5.26 1.06 10.28-2.66 10.8-8l7.55-77.86c.82-8.48 11.83-11.23 16.55-4.14l43.3 65.14c2.97 4.46 9.15 5.38 13.29 1.98l60.4-49.71c6.57-5.41 16.3.43 14.62 8.77L262.1 86.38c-2.71 3.05-5.43 6.09-7.91 9.4l-32.15 42.97l-10.71 14.32c-32.73 8.76-59.18 34.53-68.08 67.74m494.57 132.51l-12.42 46.36c-3.13 11.68-9.38 21.61-17.55 29.36a67 67 0 0 1-8.76 7l-13.99 52.23c-1.14 4.27-3.1 8.1-5.65 11.38c-7.67 9.84-20.74 14.68-33.54 11.25L515 502.62c-17.07-4.57-27.2-22.12-22.63-39.19l8.28-30.91l-247.28-66.26l-8.28 30.91c-4.57 17.07-22.12 27.2-39.19 22.63l-30.91-8.28c-12.8-3.43-21.7-14.16-23.42-26.51c-.57-4.12-.35-8.42.79-12.68l13.99-52.23a66.6 66.6 0 0 1-4.09-10.45c-3.2-10.79-3.65-22.52-.52-34.2l12.42-46.37c5.31-19.8 19.36-34.83 36.89-42.21a64.3 64.3 0 0 1 18.49-4.72l18.13-24.23l32.15-42.97c3.45-4.61 7.19-8.9 11.2-12.84c8-7.89 17.03-14.44 26.74-19.51c4.86-2.54 9.89-4.71 15.05-6.49c10.33-3.58 21.19-5.63 32.24-6.04s22.31.82 33.43 3.8l122.68 32.87c11.12 2.98 21.48 7.54 30.85 13.43a111.1 111.1 0 0 1 34.69 34.5c8.82 13.88 14.64 29.84 16.68 46.99l6.36 53.29l3.59 30.05a64.5 64.5 0 0 1 22.74 29.93c4.39 11.88 5.29 25.19 1.75 38.39M255.58 234.34c-18.55-4.97-34.21 4.04-39.17 22.53s4.11 34.12 22.65 39.09c18.55 4.97 45.54 15.51 50.49-2.98c4.96-18.49-15.43-53.67-33.97-58.64m290.61 28.17l-6.36-53.29c-.58-4.87-1.89-9.53-3.82-13.86c-5.8-12.99-17.2-23.01-31.42-26.82l-122.68-32.87a48.01 48.01 0 0 0-50.86 17.61l-32.15 42.97l172 46.08zm18.49 54.65c-18.55-4.97-53.8 15.31-58.75 33.79c-4.95 18.49 23.69 22.86 42.24 27.83s34.21-4.04 39.17-22.53c4.95-18.48-4.11-34.12-22.66-39.09"></svg:path>`,
})
export class FaSolidCarCrashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCarSideIcon],svg[fa-solid-car-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 192h-16L419.22 56.02A64.03 64.03 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96M160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48s48 21.53 48 48s-21.53 48-48 48m72-240H116.93l38.4-96H232zm48 0V96h89.24l76.8 96zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48s48 21.53 48 48s-21.53 48-48 48"></svg:path>`,
})
export class FaSolidCarSideIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaravanIcon],svg[fa-solid-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 208a16 16 0 1 0 16 16a16 16 0 0 0-16-16m208 112h-48V160A160 160 0 0 0 416 0H64A64 64 0 0 0 0 64v256a64 64 0 0 0 64 64h32a96 96 0 0 0 192 0h336a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M192 432a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m64-240a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32Zm192 128H320V128a32 32 0 0 1 32-32h64a32 32 0 0 1 32 32Z"></svg:path>`,
})
export class FaSolidCaravanIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretDownIcon],svg[fa-solid-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192"></svg:path>`,
})
export class FaSolidCaretDownIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretLeftIcon],svg[fa-solid-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142"></svg:path>`,
})
export class FaSolidCaretLeftIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretRightIcon],svg[fa-solid-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662"></svg:path>`,
})
export class FaSolidCaretRightIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretSquareDownIcon],svg[fa-solid-caret-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48M92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5"></svg:path>`,
})
export class FaSolidCaretSquareDownIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretSquareLeftIcon],svg[fa-solid-caret-square-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48M259.515 124.485l-123.03 123.03c-4.686 4.686-4.686 12.284 0 16.971l123.029 123.029c7.56 7.56 20.485 2.206 20.485-8.485V132.971c.001-10.691-12.925-16.045-20.484-8.486"></svg:path>`,
})
export class FaSolidCaretSquareLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretSquareRightIcon],svg[fa-solid-caret-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48m140.485 355.515l123.029-123.029c4.686-4.686 4.686-12.284 0-16.971l-123.029-123.03c-7.56-7.56-20.485-2.206-20.485 8.485v246.059c0 10.691 12.926 16.045 20.485 8.486"></svg:path>`,
})
export class FaSolidCaretSquareRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretSquareUpIcon],svg[fa-solid-caret-square-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 432V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48m355.515-140.485l-123.03-123.03c-4.686-4.686-12.284-4.686-16.971 0L92.485 291.515c-7.56 7.56-2.206 20.485 8.485 20.485h246.059c10.691 0 16.045-12.926 8.486-20.485"></svg:path>`,
})
export class FaSolidCaretSquareUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretUpIcon],svg[fa-solid-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142"></svg:path>`,
})
export class FaSolidCaretUpIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCarrotIcon],svg[fa-solid-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217L2.3 479.7c-2.9 6-3.1 13.3 0 19.7c5.4 11.1 18.9 15.7 30 10.3l133.6-65.2l-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6s16.4-6.2 22.6 0l57 57l102-49.8c24-11.7 44.5-31.3 57.1-57.1c30.1-61.7 4.5-136.1-57.2-166.2m92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9c-32.9-39.7-81-49.8-121.7-30.3"></svg:path>`,
})
export class FaSolidCarrotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCartArrowDownIcon],svg[fa-solid-cart-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994c-29.823-.429-54.35-24.631-55.155-54.447c-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938c-28.54-1.325-51.751-24.385-53.251-52.917c-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320M403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485"></svg:path>`,
})
export class FaSolidCartArrowDownIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCartPlusIcon],svg[fa-solid-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994c-29.823-.429-54.35-24.631-55.155-54.447c-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938c-28.54-1.325-51.751-24.385-53.251-52.917c-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320M408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16"></svg:path>`,
})
export class FaSolidCartPlusIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCashRegisterIcon],svg[fa-solid-cash-register-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m511.1 378.8l-26.7-160c-2.6-15.4-15.9-26.7-31.6-26.7H208v-64h96c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96v64H59.1c-15.6 0-29 11.3-31.6 26.7L.8 378.7q-.9 5.25-.9 10.5V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-90.7c.1-3.5-.2-7-.8-10.5M280 248c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16zm-32 64h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16m-32-80c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16zM80 80V48h192v32zm40 200h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16m16 64v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16m216 112c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8zm24-112c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16zm48-80c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16z"></svg:path>`,
})
export class FaSolidCashRegisterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCatIcon],svg[fa-solid-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54c-61.81 0-113.52-44.05-125.41-102.4M448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16m80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16"></svg:path>`,
})
export class FaSolidCatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCertificateIcon],svg[fa-solid-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99l17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667l-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57L211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671l-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015l-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005l-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99l-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667l15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671l61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015l62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339z"></svg:path>`,
})
export class FaSolidCertificateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChairIcon],svg[fa-solid-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1"></svg:path>`,
})
export class FaSolidChairIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChalkboardIcon],svg[fa-solid-chalkboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 64h448v352h64V40c0-22.06-17.94-40-40-40H72C49.94 0 32 17.94 32 40v376h64zm528 384H480v-64H288v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidChalkboardIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChalkboardTeacherIcon],svg[fa-solid-chalkboard-teacher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360s-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"></svg:path>`,
})
export class FaSolidChalkboardTeacherIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChargingStationIcon],svg[fa-solid-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h320c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m208-320V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v48h-32V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v48h-16c-8.84 0-16 7.16-16 16v32c0 35.76 23.62 65.69 56 75.93v118.49c0 13.95-9.5 26.92-23.26 29.19C431.22 402.5 416 388.99 416 372v-28c0-48.6-39.4-88-88-88h-8V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v352h288V304h8c22.09 0 40 17.91 40 40v24.61c0 39.67 28.92 75.16 68.41 79.01C481.71 452.05 520 416.41 520 372V251.93c32.38-10.24 56-40.17 56-75.93v-32c0-8.84-7.16-16-16-16zm-283.91 47.76l-93.7 139c-2.2 3.33-6.21 5.24-10.39 5.24c-7.67 0-13.47-6.28-11.67-12.92L167.35 224H108c-7.25 0-12.85-5.59-11.89-11.89l16-107C112.9 99.9 117.98 96 124 96h68c7.88 0 13.62 6.54 11.6 13.21L192 160h57.7c9.24 0 15.01 8.78 10.39 15.76"></svg:path>`,
})
export class FaSolidChargingStationIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChartAreaIcon],svg[fa-solid-chart-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7"></svg:path>`,
})
export class FaSolidChartAreaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChartBarIcon],svg[fa-solid-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8m96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8m-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8m96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidChartBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChartLineIcon],svg[fa-solid-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96l32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16"></svg:path>`,
})
export class FaSolidChartLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChartPieIcon],svg[fa-solid-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68c38.7-36.46 65.32-85.61 73.13-140.86c1.34-9.46-6.51-17.85-16.06-17.85m-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04C279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8M224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37C4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03c7.9-5.6 8.42-17.23 1.57-24.08z"></svg:path>`,
})
export class FaSolidChartPieIcon {
  readonly viewBox = input("0 0 544 512")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCheckIcon],svg[fa-solid-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"></svg:path>`,
})
export class FaSolidCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCheckCircleIcon],svg[fa-solid-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248M227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001"></svg:path>`,
})
export class FaSolidCheckCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCheckDoubleIcon],svg[fa-solid-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7L80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34m-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6z"></svg:path>`,
})
export class FaSolidCheckDoubleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCheckSquareIcon],svg[fa-solid-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48m-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001"></svg:path>`,
})
export class FaSolidCheckSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCheeseIcon],svg[fa-solid-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 288v160a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V288zM299.83 32a32 32 0 0 0-21.13 7L0 256h512c0-119.89-94-217.8-212.17-224"></svg:path>`,
})
export class FaSolidCheeseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessIcon],svg[fa-solid-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74 208H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.8 535.8 0 0 1 64 384h128a535.8 535.8 0 0 1-15.94-128H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H144V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H55.09a16 16 0 0 0-15 21.62zm173.16 251.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31m92.77-157.78l-3.29 82.2h126.72l-3.29-82.21l24.6-20.79A32 32 0 0 0 496 256.54V198a6 6 0 0 0-6-6h-26.38a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H373.1a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H310a6 6 0 0 0-6 6v58.6a32 32 0 0 0 11.36 24.4zM384 304a16 16 0 0 1 32 0v32h-32zm119.16 155.58L480 448v-16a16 16 0 0 0-16-16H336a16 16 0 0 0-16 16v16l-23.15 11.58a16 16 0 0 0-8.85 14.31V496a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31"></svg:path>`,
})
export class FaSolidChessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessBishopIcon],svg[fa-solid-chess-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 287.88c0 51.64 22.14 73.83 56 84.6V416h192v-43.52c33.86-10.77 56-33 56-84.6c0-30.61-10.73-67.1-26.69-102.56L185 285.65a8 8 0 0 1-11.31 0l-11.31-11.31a8 8 0 0 1 0-11.31L270.27 155.1c-20.8-37.91-46.47-72.1-70.87-92.59C213.4 59.09 224 47.05 224 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32c0 15 10.6 27.09 24.6 30.51C67.81 106.8 8 214.5 8 287.88M304 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidChessBishopIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessBoardIcon],svg[fa-solid-chess-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"></svg:path>`,
})
export class FaSolidChessBoardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessKingIcon],svg[fa-solid-chess-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 448H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m16-288H256v-48h40a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-40V8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40h-40a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h40v48H32a32 32 0 0 0-30.52 41.54L74.56 416h298.88l73.08-214.46A32 32 0 0 0 416 160"></svg:path>`,
})
export class FaSolidChessKingIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessKnightIcon],svg[fa-solid-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26M52 128a20 20 0 1 1-20 20a20 20 0 0 1 20-20m316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidChessKnightIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessPawnIcon],svg[fa-solid-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105.1 224H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v5.49c0 44-4.14 86.6-24 122.51h176c-19.89-35.91-24-78.51-24-122.51V288h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-25.1c29.39-18.38 49.1-50.78 49.1-88a104 104 0 0 0-208 0c0 37.22 19.71 69.62 49.1 88M304 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidChessPawnIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessQueenIcon],svg[fa-solid-chess-queen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 112a56 56 0 1 0-56-56a56 56 0 0 0 56 56m176 336H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m72.87-263.84l-28.51-15.92c-7.44-5-16.91-2.46-22.29 4.68a47.59 47.59 0 0 1-47.23 18.23C383.7 186.86 368 164.93 368 141.4a13.4 13.4 0 0 0-13.4-13.4h-38.77c-6 0-11.61 4-12.86 9.91a48 48 0 0 1-93.94 0c-1.25-5.92-6.82-9.91-12.86-9.91H157.4a13.4 13.4 0 0 0-13.4 13.4c0 25.69-19 48.75-44.67 50.49a47.5 47.5 0 0 1-41.54-19.15c-5.28-7.09-14.73-9.45-22.09-4.54l-28.57 16a16 16 0 0 0-5.44 20.47L104.24 416h303.52l102.55-211.37a16 16 0 0 0-5.44-20.47"></svg:path>`,
})
export class FaSolidChessQueenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChessRookIcon],svg[fa-solid-chess-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16M224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidChessRookIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronCircleDownIcon],svg[fa-solid-chevron-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248M273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1L154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0"></svg:path>`,
})
export class FaSolidChevronCircleDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronCircleLeftIcon],svg[fa-solid-chevron-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248M142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34"></svg:path>`,
})
export class FaSolidChevronCircleLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronCircleRightIcon],svg[fa-solid-chevron-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504S8 393 8 256S119 8 256 8m113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256L183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34"></svg:path>`,
})
export class FaSolidChevronCircleRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronCircleUpIcon],svg[fa-solid-chevron-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248s-111 248-248 248S8 393 8 256m231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0"></svg:path>`,
})
export class FaSolidChevronCircleUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronDownIcon],svg[fa-solid-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"></svg:path>`,
})
export class FaSolidChevronDownIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronLeftIcon],svg[fa-solid-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94"></svg:path>`,
})
export class FaSolidChevronLeftIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronRightIcon],svg[fa-solid-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256L34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941"></svg:path>`,
})
export class FaSolidChevronRightIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChevronUpIcon],svg[fa-solid-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495L69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001"></svg:path>`,
})
export class FaSolidChevronUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChildIcon],svg[fa-solid-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72s-32.235 72-72 72s-72-32.236-72-72m254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0c-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254"></svg:path>`,
})
export class FaSolidChildIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidChurchIcon],svg[fa-solid-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464.46 246.68L352 179.2V128h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-48V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v48h-48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v51.2l-112.46 67.48A32 32 0 0 0 160 274.12V512h96v-96c0-35.35 28.65-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44M0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.54A32.02 32.02 0 0 0 0 395.96m620.61-29.42L512 320v192h112c8.84 0 16-7.16 16-16V395.96c0-12.8-7.63-24.37-19.39-29.42"></svg:path>`,
})
export class FaSolidChurchIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCircleIcon],svg[fa-solid-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8"></svg:path>`,
})
export class FaSolidCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCircleNotchIcon],svg[fa-solid-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184c-101.689 0-184-82.295-184-184c0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056"></svg:path>`,
})
export class FaSolidCircleNotchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCityIcon],svg[fa-solid-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24M128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12z"></svg:path>`,
})
export class FaSolidCityIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidClinicMedicalIcon],svg[fa-solid-clinic-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm96 261a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8zm186.69-139.72l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59"></svg:path>`,
})
export class FaSolidClinicMedicalIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidClipboardIcon],svg[fa-solid-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48M192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6"></svg:path>`,
})
export class FaSolidClipboardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidClipboardCheckIcon],svg[fa-solid-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48M192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4l106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17"></svg:path>`,
})
export class FaSolidClipboardCheckIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidClipboardListIcon],svg[fa-solid-clipboard-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48M96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24m0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24m0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24m96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidClipboardListIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidClockIcon],svg[fa-solid-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m92.49 313l-20 25a16 16 0 0 1-22.49 2.5l-67-49.72a40 40 0 0 1-15-31.23V112a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5"></svg:path>`,
})
export class FaSolidClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloneIcon],svg[fa-solid-clone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48zM176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48z"></svg:path>`,
})
export class FaSolidCloneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidClosedCaptioningIcon],svg[fa-solid-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48M218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7c-53.6 56.8-172.8 32.1-172.8-67.9c0-97.3 121.7-119.5 172.5-70.1c2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7c-40.8-32-94.6-14.9-94.6 31.2c.1 48 51.1 70.5 92.3 32.6m190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7c-53.5 56.9-172.7 32.1-172.7-67.9c0-97.3 121.7-119.5 172.5-70.1c2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7c-40.8-32-94.6-14.9-94.6 31.2c0 48 51 70.5 92.2 32.6"></svg:path>`,
})
export class FaSolidClosedCaptioningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudIcon],svg[fa-solid-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4"></svg:path>`,
})
export class FaSolidCloudIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudDownloadAltIcon],svg[fa-solid-cloud-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4m-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3"></svg:path>`,
})
export class FaSolidCloudDownloadAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudMeatballIcon],svg[fa-solid-cloud-meatball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 352c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48m416 0c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48m-119 11.1c4.6-14.5 1.6-30.8-9.8-42.3c-11.5-11.5-27.8-14.4-42.3-9.9c-7-13.5-20.7-23-36.9-23s-29.9 9.5-36.9 23c-14.5-4.6-30.8-1.6-42.3 9.9s-14.4 27.8-9.9 42.3c-13.5 7-23 20.7-23 36.9s9.5 29.9 23 36.9c-4.6 14.5-1.6 30.8 9.9 42.3c8.2 8.2 18.9 12.3 29.7 12.3c4.3 0 8.5-1.1 12.6-2.5c7 13.5 20.7 23 36.9 23s29.9-9.5 36.9-23c4.1 1.3 8.3 2.5 12.6 2.5c10.8 0 21.5-4.1 29.7-12.3c11.5-11.5 14.4-27.8 9.8-42.3c13.5-7 23-20.7 23-36.9s-9.5-29.9-23-36.9M512 224c0-53-43-96-96-96c-.6 0-1.1.2-1.6.2c1.1-5.2 1.6-10.6 1.6-16.2c0-44.2-35.8-80-80-80c-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0C114.1 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h43.4c3.6-8 8.4-15.4 14.8-21.8c13.5-13.5 31.5-21.1 50.8-21.3c13.5-13.2 31.7-20.9 51-20.9s37.5 7.7 51 20.9c19.3.2 37.3 7.8 50.8 21.3c6.4 6.4 11.3 13.8 14.8 21.8H416c53 0 96-43 96-96"></svg:path>`,
})
export class FaSolidCloudMeatballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudMoonIcon],svg[fa-solid-cloud-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.8 352.7c5.7-9.6 9.2-20.7 9.2-32.7c0-35.3-28.7-64-64-64c-17.2 0-32.8 6.9-44.3 17.9c-16.3-29.6-47.5-49.9-83.7-49.9c-53 0-96 43-96 96c0 2 .5 3.8.6 5.7C27.1 338.8 0 374.1 0 416c0 53 43 96 96 96h240c44.2 0 80-35.8 80-80c0-41.9-32.3-75.8-73.2-79.3m222.5-54.3c-93.1 17.7-178.5-53.7-178.5-147.7c0-54.2 29-104 76.1-130.8c7.3-4.1 5.4-15.1-2.8-16.7C448.4 1.1 436.7 0 425 0C319.1 0 233.1 85.9 233.1 192c0 8.5.7 16.8 1.8 25c5.9 4.3 11.6 8.9 16.7 14.2c11.4-4.7 23.7-7.2 36.4-7.2c52.9 0 96 43.1 96 96c0 3.6-.2 7.2-.6 10.7c23.6 10.8 42.4 29.5 53.5 52.6c54.4-3.4 103.7-29.3 137.1-70.4c5.3-6.5-.5-16.1-8.7-14.5"></svg:path>`,
})
export class FaSolidCloudMoonIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudMoonRainIcon],svg[fa-solid-cloud-moon-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M350.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5c-12.3 0-23.9 3-34.3 8c-17.4-24.1-45.6-40-77.7-40c-53 0-96 43-96 96c0 .5.2 1.1.2 1.6C27.6 232.9 0 265.2 0 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80c0-39.2-28.2-71.7-65.5-78.5m217.4-1.7c-70.4 13.3-135-40.3-135-110.8c0-40.6 21.9-78 57.5-98.1c5.5-3.1 4.1-11.4-2.1-12.5C479.6.8 470.7 0 461.8 0c-77.9 0-141.1 61.2-144.4 137.9c26.7 11.9 48.2 33.8 58.9 61.7c37.1 14.3 64 47.4 70.2 86.8c5.1.5 10 1.5 15.2 1.5c44.7 0 85.6-20.2 112.6-53.3c4.2-4.8-.2-12-6.4-10.8M364.5 418.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8m-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8m-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8m-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8"></svg:path>`,
})
export class FaSolidCloudMoonRainIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudRainIcon],svg[fa-solid-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 128c-.6 0-1.1.2-1.6.2c1.1-5.2 1.6-10.6 1.6-16.2c0-44.2-35.8-80-80-80c-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0C114.1 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96M88 374.2c-12.8 44.4-40 56.4-40 87.7c0 27.7 21.5 50.1 48 50.1s48-22.4 48-50.1c0-31.4-27.2-43.1-40-87.7c-2.2-8.1-13.5-8.5-16 0m160 0c-12.8 44.4-40 56.4-40 87.7c0 27.7 21.5 50.1 48 50.1s48-22.4 48-50.1c0-31.4-27.2-43.1-40-87.7c-2.2-8.1-13.5-8.5-16 0m160 0c-12.8 44.4-40 56.4-40 87.7c0 27.7 21.5 50.1 48 50.1s48-22.4 48-50.1c0-31.4-27.2-43.1-40-87.7c-2.2-8.1-13.5-8.5-16 0"></svg:path>`,
})
export class FaSolidCloudRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudShowersHeavyIcon],svg[fa-solid-cloud-showers-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.9 370.1c-7.6-4.4-17.4-1.8-21.8 6l-64 112c-4.4 7.7-1.7 17.5 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l64-112c4.4-7.6 1.7-17.4-6-21.8m96 0c-7.6-4.4-17.4-1.8-21.8 6l-64 112c-4.4 7.7-1.7 17.5 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l64-112c4.4-7.6 1.7-17.4-6-21.8m-192 0c-7.6-4.4-17.4-1.8-21.8 6l-64 112c-4.4 7.7-1.7 17.5 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l64-112c4.4-7.6 1.7-17.4-6-21.8m384 0c-7.6-4.4-17.4-1.8-21.8 6l-64 112c-4.4 7.7-1.7 17.5 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l64-112c4.4-7.6 1.7-17.4-6-21.8m-96 0c-7.6-4.4-17.4-1.8-21.8 6l-64 112c-4.4 7.7-1.7 17.5 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l64-112c4.4-7.6 1.7-17.4-6-21.8M416 128c-.6 0-1.1.2-1.6.2c1.1-5.2 1.6-10.6 1.6-16.2c0-44.2-35.8-80-80-80c-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0C114.2 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96"></svg:path>`,
})
export class FaSolidCloudShowersHeavyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudSunIcon],svg[fa-solid-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M575.2 325.7c.2-1.9.8-3.7.8-5.6c0-35.3-28.7-64-64-64c-12.6 0-24.2 3.8-34.1 10c-17.6-38.8-56.5-66-101.9-66c-61.8 0-112 50.1-112 112c0 3 .7 5.8.9 8.7c-49.6 3.7-88.9 44.7-88.9 95.3c0 53 43 96 96 96h272c53 0 96-43 96-96c0-42.1-27.2-77.4-64.8-90.4m-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3c43.7-43.7 114.7-43.7 158.4 0c9.7 9.7 16.9 20.9 22.3 32.7c9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2L237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2L81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8l-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4l-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5c-13.1-5.4-25.4-13.4-36-24m-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3c8-4.7 16.3-8.8 25.2-11.7c5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9"></svg:path>`,
})
export class FaSolidCloudSunIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudSunRainIcon],svg[fa-solid-cloud-sun-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5c-12.3 0-23.9 3-34.3 8c-17.4-24.1-45.6-40-77.7-40c-53 0-96 43-96 96c0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80c0-39.2-28.2-71.7-65.5-78.5m-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8c34.6-34.6 89.1-36.8 126.7-7.4c20-12.9 43.6-20.7 69.2-20.7c.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1l-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71l-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3l-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5l-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2c0-12.5 2.3-24.5 6.2-35.9c-3.6-2.7-7.1-5.2-10.2-8.3m69.8-58c4.3-24.5 15.8-46.4 31.9-64c-9.8-6.2-21.4-9.9-33.8-9.9c-35.3 0-64 28.7-64 64c0 18.7 8.2 35.4 21.1 47.1c11.3-15.9 26.6-28.9 44.8-37.2m330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8m-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8m-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8m-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8c2.5 1.4 5.2 2.1 7.9 2.1c5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8"></svg:path>`,
})
export class FaSolidCloudSunRainIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCloudUploadAltIcon],svg[fa-solid-cloud-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4M393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3"></svg:path>`,
})
export class FaSolidCloudUploadAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCocktailIcon],svg[fa-solid-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 464h-56V338.78l168.74-168.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L176 338.78V464h-56c-22.09 0-40 17.91-40 40c0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8c0-22.09-17.91-40-40-40M432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48c52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0"></svg:path>`,
})
export class FaSolidCocktailIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCodeIcon],svg[fa-solid-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2m-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5m327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6"></svg:path>`,
})
export class FaSolidCodeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCodeBranchIcon],svg[fa-solid-code-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9M80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16m0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16"></svg:path>`,
})
export class FaSolidCodeBranchIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCoffeeIcon],svg[fa-solid-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96M512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64"></svg:path>`,
})
export class FaSolidCoffeeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCogIcon],svg[fa-solid-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14c-11.1-35.6-30-67.8-54.7-94.6c-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7c-36.7-8.2-74.3-7.8-109.2 0c-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3c-24.7 26.7-43.6 58.9-54.7 94.6c-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14c11.1 35.6 30 67.8 54.7 94.6c3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7c36.7 8.2 74.3 7.8 109.2 0c5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3c24.7-26.7 43.6-58.9 54.7-94.6c1.5-5.5-.7-11.3-5.6-14.1M256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidCogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCogsIcon],svg[fa-solid-cogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4c-11.8-4.4-22.6-10.7-32.1-18.6c-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3c-2-12-2.1-24.6 0-37.1c1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7c9.5-7.9 20.4-14.2 32.1-18.6c5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4c11.8 4.4 22.6 10.7 32.1 18.6c4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3c2 12 2.1 24.6 0 37.1c-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7c-9.5 7.9-20.4 14.2-32.1 18.6c-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0m-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8c-38.5-29.7-82.4 14.3-52.8 52.8M386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1c-8.9 24.2-26.4 46.4-42.6 65.8c-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6c-24.6 4.2-50.4 4.4-75.9 0c-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3c-16.2-19.4-33.3-41.6-42.2-65.7c-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29c8.9-24.2 26-46.4 42.2-65.8c7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5c24.6-4.2 50.5-4.4 76-.1c11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3c16.2 19.4 33.2 41.6 42.1 65.8c4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5m-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7c-59.2 77 28.7 164.9 105.7 105.7m243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4c-11.8-4.4-22.6-10.7-32.1-18.6c-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3c-2-12-2.1-24.6 0-37.1c1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7c9.5-7.9 20.4-14.2 32.1-18.6c5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4c11.8 4.4 22.6 10.7 32.1 18.6c4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3c2 12 2.1 24.6 0 37.1c-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7c-9.5 7.9-20.4 14.2-32.1 18.6c-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0M501.6 431c38.5 29.6 82.4-14.3 52.8-52.8c-38.5-29.6-82.4 14.3-52.8 52.8"></svg:path>`,
})
export class FaSolidCogsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCoinsIcon],svg[fa-solid-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3M320 128c106 0 192-28.7 192-64S426 0 320 0S128 28.7 128 64s86 64 192 64M0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4m416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5zM192 160C86 160 0 195.8 0 240s86 80 192 80s192-35.8 192-80s-86-80-192-80m219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8c29.5 14.3 51.2 33.5 60 57.2"></svg:path>`,
})
export class FaSolidCoinsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidColumnsIcon],svg[fa-solid-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M224 416H64V160h160zm224 0H288V160h160z"></svg:path>`,
})
export class FaSolidColumnsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentIcon],svg[fa-solid-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4c32.7 12.3 69 19.4 107.4 19.4c141.4 0 256-93.1 256-208S397.4 32 256 32"></svg:path>`,
})
export class FaSolidCommentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentAltIcon],svg[fa-solid-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64"></svg:path>`,
})
export class FaSolidCommentAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentDollarIcon],svg[fa-solid-comment-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C114.62 32 0 125.12 0 240c0 49.56 21.41 95.01 57.02 130.74C44.46 421.05 2.7 465.97 2.2 466.5A7.995 7.995 0 0 0 8 480c66.26 0 115.99-31.75 140.6-51.38C181.29 440.93 217.59 448 256 448c141.38 0 256-93.12 256-208S397.38 32 256 32m24 302.44V352c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16v-17.73c-11.42-1.35-22.28-5.19-31.78-11.46c-6.22-4.11-6.82-13.11-1.55-18.38l17.52-17.52c3.74-3.74 9.31-4.24 14.11-2.03c3.18 1.46 6.66 2.22 10.26 2.22h32.78c4.66 0 8.44-3.78 8.44-8.42c0-3.75-2.52-7.08-6.12-8.11l-50.07-14.3c-22.25-6.35-40.01-24.71-42.91-47.67c-4.05-32.07 19.03-59.43 49.32-63.05V128c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v17.73c11.42 1.35 22.28 5.19 31.78 11.46c6.22 4.11 6.82 13.11 1.55 18.38l-17.52 17.52c-3.74 3.74-9.31 4.24-14.11 2.03a24.5 24.5 0 0 0-10.26-2.22h-32.78c-4.66 0-8.44 3.78-8.44 8.42c0 3.75 2.52 7.08 6.12 8.11l50.07 14.3c22.25 6.36 40.01 24.71 42.91 47.67c4.05 32.06-19.03 59.42-49.32 63.04"></svg:path>`,
})
export class FaSolidCommentDollarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentDotsIcon],svg[fa-solid-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4c32.7 12.3 69 19.4 107.4 19.4c141.4 0 256-93.1 256-208S397.4 32 256 32M128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidCommentDotsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentMedicalIcon],svg[fa-solid-comment-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C114.62 32 0 125.12 0 240c0 49.56 21.41 95 57 130.74C44.46 421.05 2.7 466 2.2 466.5A8 8 0 0 0 8 480c66.26 0 116-31.75 140.6-51.38A304.7 304.7 0 0 0 256 448c141.39 0 256-93.12 256-208S397.39 32 256 32m96 232a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8z"></svg:path>`,
})
export class FaSolidCommentMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentSlashIcon],svg[fa-solid-comment-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 240c0 49.6 21.4 95 57 130.7c-12.6 50.3-54.3 95.2-54.8 95.8c-2.2 2.3-2.8 5.7-1.5 8.7c1.3 2.9 4.1 4.8 7.3 4.8c66.3 0 116-31.8 140.6-51.4c32.7 12.3 69 19.4 107.4 19.4c27.4 0 53.7-3.6 78.4-10L72.9 186.4c-5.6 17.1-8.9 35-8.9 53.6m569.8 218.1l-114.4-88.4C554.6 334.1 576 289.2 576 240c0-114.9-114.6-208-256-208c-65.1 0-124.2 20.1-169.4 52.7L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3"></svg:path>`,
})
export class FaSolidCommentSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentsIcon],svg[fa-solid-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92c-13.4 30.2-35.5 54.2-35.8 54.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25c32.2 15.7 70.3 25 111.3 25c114.9 0 208-71.6 208-160m122 220c23.9-26 38-57.7 38-92c0-66.9-53.5-124.2-129.3-148.1c.9 6.6 1.3 13.3 1.3 20.1c0 105.9-107.7 192-240 192c-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25c21.8 12.7 52.1 25 88.7 25c3.2 0 6.1-1.9 7.3-4.8c1.3-2.9.7-6.3-1.5-8.7c-.3-.3-22.4-24.2-35.8-54.5"></svg:path>`,
})
export class FaSolidCommentsIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCommentsDollarIcon],svg[fa-solid-comments-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 192c0-88.37-93.12-160-208-160S0 103.63 0 192c0 34.27 14.13 65.95 37.97 91.98C24.61 314.22 2.52 338.16 2.2 338.5A7.995 7.995 0 0 0 8 352c36.58 0 66.93-12.25 88.73-24.98C128.93 342.76 167.02 352 208 352c114.88 0 208-71.63 208-160m-224 96v-16.29c-11.29-.58-22.27-4.52-31.37-11.35c-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73c3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19c0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39c0-24.52 19.05-44.44 42.67-45.07V96c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35c3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73c-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19c0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39c0 24.53-19.05 44.44-42.67 45.07V288c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8m346.01 123.99C561.87 385.96 576 354.27 576 320c0-66.94-53.49-124.2-129.33-148.07c.86 6.6 1.33 13.29 1.33 20.07c0 105.87-107.66 192-240 192c-10.78 0-21.32-.77-31.73-1.88C207.8 439.63 281.77 480 368 480c40.98 0 79.07-9.24 111.27-24.98C501.07 467.75 531.42 480 568 480c3.2 0 6.09-1.91 7.34-4.84c1.27-2.94.66-6.34-1.55-8.67c-.31-.33-22.42-24.24-35.78-54.5"></svg:path>`,
})
export class FaSolidCommentsDollarIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCompactDiscIcon],svg[fa-solid-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160m160 96c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96m0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32"></svg:path>`,
})
export class FaSolidCompactDiscIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCompassIcon],svg[fa-solid-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25c12.49 12.5 32.76 12.5 45.25 0c12.5-12.5 12.5-32.76 0-45.25s-32.76-12.49-45.25 0M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m126.14 148.05L308.17 300.4a31.94 31.94 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.94 31.94 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2"></svg:path>`,
})
export class FaSolidCompassIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCompressIcon],svg[fa-solid-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FaSolidCompressIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCompressAltIcon],svg[fa-solid-compress-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627M443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627"></svg:path>`,
})
export class FaSolidCompressAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCompressArrowsAltIcon],svg[fa-solid-compress-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31l-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24m112-64h112c21.4 0 32.1-25.9 17-41l-33-31l99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24m96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9l99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6zM183 71.1L152 104L52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9"></svg:path>`,
})
export class FaSolidCompressArrowsAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidConciergeBellIcon],svg[fa-solid-concierge-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46M496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidConciergeBellIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCookieIcon],svg[fa-solid-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m510.37 254.79l-12.08-76.26a132.5 132.5 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.6 132.6 0 0 0-12.82 80.94l12.08 76.27a132.5 132.5 0 0 0 37.16 72.95l54.76 54.75a132.1 132.1 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.3 132.3 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96M176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidCookieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCookieBiteIcon],svg[fa-solid-cookie-bite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86c-70.17 0-127-56.49-127.86-126.45c-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.22 132.22 0 0 0-57.79 57.81l-35.1 68.88a132.65 132.65 0 0 0-12.82 80.95l12.08 76.27a132.52 132.52 0 0 0 37.16 72.96l54.77 54.76a132.04 132.04 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.27 132.27 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91M176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidCookieBiteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCopyIcon],svg[fa-solid-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24m120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97"></svg:path>`,
})
export class FaSolidCopyIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCopyrightIcon],svg[fa-solid-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8m117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731c-84.692 0-144.484-63.26-144.484-145.567c0-81.303 62.004-143.401 143.762-143.401c66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295c-.233-.214-26.529-23.88-61.88-23.88c-46.116 0-73.916 33.575-73.916 76.082c0 39.602 25.514 79.692 74.277 79.692c38.697 0 65.28-28.338 65.544-28.625c5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12 12 0 0 1-.553 14.866"></svg:path>`,
})
export class FaSolidCopyrightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCouchIcon],svg[fa-solid-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64m416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64c0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1c0-35.3-28.7-64-64-64"></svg:path>`,
})
export class FaSolidCouchIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCreditCardIcon],svg[fa-solid-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48"></svg:path>`,
})
export class FaSolidCreditCardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCropIcon],svg[fa-solid-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 352h-40V109.25l59.31-59.31c6.25-6.25 6.25-16.38 0-22.63L484.69 4.69c-6.25-6.25-16.38-6.25-22.63 0L402.75 64H192v96h114.75L160 306.75V24c0-13.26-10.75-24-24-24H88C74.75 0 64 10.74 64 24v40H24C10.75 64 0 74.74 0 88v48c0 13.25 10.75 24 24 24h40v264c0 13.25 10.75 24 24 24h232v-96H205.25L352 205.25V488c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-40h40c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24"></svg:path>`,
})
export class FaSolidCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCropAltIcon],svg[fa-solid-crop-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 352h-40V96c0-17.67-14.33-32-32-32H192v96h160v328c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-40h40c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24M160 24c0-13.26-10.75-24-24-24H88C74.75 0 64 10.74 64 24v40H24C10.75 64 0 74.74 0 88v48c0 13.25 10.75 24 24 24h40v256c0 17.67 14.33 32 32 32h224v-96H160z"></svg:path>`,
})
export class FaSolidCropAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCrossIcon],svg[fa-solid-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 128h-96V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h96v224c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V256h96c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidCrossIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCrosshairsIcon],svg[fa-solid-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12M288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634M288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path>`,
})
export class FaSolidCrosshairsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCrowIcon],svg[fa-solid-crow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.22 30.22 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64m-80 72c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidCrowIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCrownIcon],svg[fa-solid-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></svg:path>`,
})
export class FaSolidCrownIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCrutchIcon],svg[fa-solid-crutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m507.31 185.71l-181-181a16 16 0 0 0-22.62 0L281 27.31a16 16 0 0 0 0 22.63l181 181a16 16 0 0 0 22.63 0l22.62-22.63a16 16 0 0 0 .06-22.6m-179.54 66.41l-67.89-67.89l55.1-55.1l-45.25-45.25l-109.67 109.67a96.1 96.1 0 0 0-25.67 46.29L106.65 360.1l-102 102a16 16 0 0 0 0 22.63l22.62 22.62a16 16 0 0 0 22.63 0l102-102l120.25-27.75a95.9 95.9 0 0 0 46.29-25.65l109.68-109.68L382.87 197zm-54.57 54.57a32 32 0 0 1-15.45 8.54l-79.3 18.32l18.3-79.3a32.2 32.2 0 0 1 8.56-15.45l9.31-9.31l67.89 67.89z"></svg:path>`,
})
export class FaSolidCrutchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCubeIcon],svg[fa-solid-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3M256 68.4l192 72v1.1l-192 78l-192-78v-1.1zm32 356V275.5l160-65v133.9z"></svg:path>`,
})
export class FaSolidCubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCubesIcon],svg[fa-solid-cubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52l103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7M358 214.8l-85 31.9v-68.2l85-37zM154 104.1l102-38.2l102 38.2v.6l-102 41.4l-102-41.4zm84 291.1l-85 42.5v-79.1l85-38.8zm0-112l-102 41.4l-102-41.4v-.6l102-38.2l102 38.2zm240 112l-85 42.5v-79.1l85-38.8zm0-112l-102 41.4l-102-41.4v-.6l102-38.2l102 38.2z"></svg:path>`,
})
export class FaSolidCubesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidCutIcon],svg[fa-solid-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M278.06 256L444.48 89.57c4.69-4.69 4.69-12.29 0-16.97c-32.8-32.8-85.99-32.8-118.79 0L210.18 188.12l-24.86-24.86c4.31-10.92 6.68-22.81 6.68-35.26c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c4.54 0 8.99-.32 13.36-.93L142.29 256l-32.93 32.93c-4.37-.61-8.83-.93-13.36-.93c-53.02 0-96 42.98-96 96s42.98 96 96 96s96-42.98 96-96c0-12.45-2.37-24.34-6.68-35.26l24.86-24.86L325.69 439.4c32.8 32.8 85.99 32.8 118.79 0c4.69-4.68 4.69-12.28 0-16.97zM96 160c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32s-14.36 32-32 32m0 256c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32s-14.36 32-32 32"></svg:path>`,
})
export class FaSolidCutIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDatabaseIcon],svg[fa-solid-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143M448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176m0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336"></svg:path>`,
})
export class FaSolidDatabaseIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDeafIcon],svg[fa-solid-deaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 260c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-44.112 35.888-80 80-80s80 35.888 80 80c0 15.464-12.536 28-28 28s-28-12.536-28-28c0-13.234-10.767-24-24-24s-24 10.766-24 24m24-176c-97.047 0-176 78.953-176 176c0 15.464 12.536 28 28 28s28-12.536 28-28c0-66.168 53.832-120 120-120s120 53.832 120 120c0 75.164-71.009 70.311-71.997 143.622L288 404c0 28.673-23.327 52-52 52c-15.464 0-28 12.536-28 28s12.536 28 28 28c59.475 0 107.876-48.328 108-107.774c.595-34.428 72-48.24 72-144.226c0-97.047-78.953-176-176-176m268.485-52.201L480.2 3.515c-4.687-4.686-12.284-4.686-16.971 0L376.2 90.544c-4.686 4.686-4.686 12.284 0 16.971l28.285 28.285c4.686 4.686 12.284 4.686 16.97 0l87.03-87.029c4.687-4.688 4.687-12.286 0-16.972M168.97 314.745c-4.686-4.686-12.284-4.686-16.97 0L3.515 463.23c-4.686 4.686-4.686 12.284 0 16.971L31.8 508.485c4.687 4.686 12.284 4.686 16.971 0L197.256 360c4.686-4.686 4.686-12.284 0-16.971z"></svg:path>`,
})
export class FaSolidDeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDemocratIcon],svg[fa-solid-democrat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m637.3 256.9l-19.6-29.4c-28.2-42.3-75.3-67.5-126.1-67.5H256l-81.2-81.2c20.1-20.1 22.6-51.1 7.5-73.9c-3.4-5.2-10.8-5.9-15.2-1.5l-41.8 41.8L82.4 2.4c-3.6-3.6-9.6-3-12.4 1.2c-12.3 18.6-10.3 44 6.1 60.4c3.3 3.3 7.3 5.3 11.3 7.5c-2.2 1.7-4.7 3.1-6.4 5.4L6.4 176.2c-7.3 9.7-8.4 22.7-3 33.5l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h31c8.5 0 16.6-3.4 22.6-9.4L138 212l54 108h352v-77.8c16.2 12.2 18.3 17.6 40.1 50.3c4.9 7.4 14.8 9.3 22.2 4.4l26.6-17.7c7.3-5 9.3-14.9 4.4-22.3m-341.1-13.6l-16.5 16.1l3.9 22.7c.7 4.1-3.6 7.2-7.2 5.3L256 276.7l-20.4 10.7c-3.6 1.9-7.9-1.2-7.2-5.3l3.9-22.7l-16.5-16.1c-3-2.9-1.3-7.9 2.8-8.5l22.8-3.3l10.2-20.7c1.8-3.7 7.1-3.7 9 0l10.2 20.7l22.8 3.3c4 .6 5.6 5.6 2.6 8.5m112 0l-16.5 16.1l3.9 22.7c.7 4.1-3.6 7.2-7.2 5.3L368 276.7l-20.4 10.7c-3.6 1.9-7.9-1.2-7.2-5.3l3.9-22.7l-16.5-16.1c-3-2.9-1.3-7.9 2.8-8.5l22.8-3.3l10.2-20.7c1.8-3.7 7.1-3.7 9 0l10.2 20.7l22.8 3.3c4 .6 5.6 5.6 2.6 8.5m112 0l-16.5 16.1l3.9 22.7c.7 4.1-3.6 7.2-7.2 5.3L480 276.7l-20.4 10.7c-3.6 1.9-7.9-1.2-7.2-5.3l3.9-22.7l-16.5-16.1c-3-2.9-1.3-7.9 2.8-8.5l22.8-3.3l10.2-20.7c1.8-3.7 7.1-3.7 9 0l10.2 20.7l22.8 3.3c4 .6 5.6 5.6 2.6 8.5M192 496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80h160v80c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V352H192z"></svg:path>`,
})
export class FaSolidDemocratIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDesktopIcon],svg[fa-solid-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48m-16 352H64V64h448z"></svg:path>`,
})
export class FaSolidDesktopIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDharmachakraIcon],svg[fa-solid-dharmachakra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m495 225.06l-17.22 1.08c-5.27-39.49-20.79-75.64-43.86-105.84l12.95-11.43c6.92-6.11 7.25-16.79.73-23.31L426.44 64.4c-6.53-6.53-17.21-6.19-23.31.73L391.7 78.07c-30.2-23.06-66.35-38.58-105.83-43.86L286.94 17c.58-9.21-6.74-17-15.97-17h-29.94c-9.23 0-16.54 7.79-15.97 17l1.08 17.22c-39.49 5.27-75.64 20.79-105.83 43.86l-11.43-12.95c-6.11-6.92-16.79-7.25-23.31-.73L64.4 85.56c-6.53 6.53-6.19 17.21.73 23.31l12.95 11.43c-23.06 30.2-38.58 66.35-43.86 105.84L17 225.06c-9.21-.58-17 6.74-17 15.97v29.94c0 9.23 7.79 16.54 17 15.97l17.22-1.08c5.27 39.49 20.79 75.64 43.86 105.83l-12.95 11.43c-6.92 6.11-7.25 16.79-.73 23.31l21.17 21.17c6.53 6.53 17.21 6.19 23.31-.73l11.43-12.95c30.2 23.06 66.35 38.58 105.84 43.86L225.06 495c-.58 9.21 6.74 17 15.97 17h29.94c9.23 0 16.54-7.79 15.97-17l-1.08-17.22c39.49-5.27 75.64-20.79 105.84-43.86l11.43 12.95c6.11 6.92 16.79 7.25 23.31.73l21.17-21.17c6.53-6.53 6.19-17.21-.73-23.31l-12.95-11.43c23.06-30.2 38.58-66.35 43.86-105.83l17.22 1.08c9.21.58 17-6.74 17-15.97v-29.94c-.01-9.23-7.8-16.54-17.01-15.97M281.84 98.61c24.81 4.07 47.63 13.66 67.23 27.78l-42.62 48.29c-8.73-5.44-18.32-9.54-28.62-11.95zm-51.68 0l4.01 64.12c-10.29 2.41-19.89 6.52-28.62 11.95l-42.62-48.29c19.6-14.12 42.42-23.71 67.23-27.78m-103.77 64.33l48.3 42.61c-5.44 8.73-9.54 18.33-11.96 28.62l-64.12-4.01c4.07-24.81 13.66-47.62 27.78-67.22m-27.78 118.9l64.12-4.01c2.41 10.29 6.52 19.89 11.95 28.62l-48.29 42.62c-14.12-19.6-23.71-42.42-27.78-67.23m131.55 131.55c-24.81-4.07-47.63-13.66-67.23-27.78l42.61-48.3c8.73 5.44 18.33 9.54 28.62 11.96zM256 288c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m25.84 125.39l-4.01-64.12c10.29-2.41 19.89-6.52 28.62-11.96l42.61 48.3c-19.6 14.12-42.41 23.71-67.22 27.78m103.77-64.33l-48.29-42.62c5.44-8.73 9.54-18.32 11.95-28.62l64.12 4.01c-4.07 24.82-13.66 47.64-27.78 67.23m-36.34-114.89c-2.41-10.29-6.52-19.89-11.96-28.62l48.3-42.61c14.12 19.6 23.71 42.42 27.78 67.23z"></svg:path>`,
})
export class FaSolidDharmachakraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiagnosesIcon],svg[fa-solid-diagnoses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 256c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16m-176-80c48.5 0 88-39.5 88-88S368.5 0 320 0s-88 39.5-88 88s39.5 88 88 88M59.8 364c10.2 15.3 29.3 17.8 42.9 9.8c16.2-9.6 56.2-31.7 105.3-48.6V416h224v-90.7c49.1 16.8 89.1 39 105.3 48.6c13.6 8 32.7 5.3 42.9-9.8l17.8-26.7c8.8-13.2 7.6-34.6-10-45.1c-11.9-7.1-29.7-17-51.1-27.4c-28.1 46.1-99.4 17.8-87.7-35.1C409.3 217.2 365.1 208 320 208c-57 0-112.9 14.5-160 32.2c-.2 40.2-47.6 63.3-79.2 36c-11.2 6-21.3 11.6-28.7 16c-17.6 10.5-18.8 31.8-10 45.1zM368 344c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m-96-96c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m-160 8c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16m512 192H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidDiagnosesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceIcon],svg[fa-solid-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48M480 376c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24m-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4M96 248c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24m128 128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24m0-128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24m0-128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24m128 128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidDiceIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceD20Icon],svg[fa-solid-dice-d20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07zM7.41 315.43L82.7 193.08L6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09M18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57m81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176zm233.94-28.9l-76.64 45.99l75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43m-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56m-86.3-200.97l-108.63 190.1l208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14zM240 208H139.57L240 383.75L340.43 208z"></svg:path>`,
})
export class FaSolidDiceD20Icon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceD6Icon],svg[fa-solid-dice-d6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M422.19 109.95L256.21 9.07c-19.91-12.1-44.52-12.1-64.43 0L25.81 109.95c-5.32 3.23-5.29 11.27.06 14.46L224 242.55l198.14-118.14c5.35-3.19 5.38-11.22.05-14.46m13.84 44.63L240 271.46v223.82c0 12.88 13.39 20.91 24.05 14.43l152.16-92.48c19.68-11.96 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.43-11.97-7.25M0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7l152.16 92.47c10.67 6.48 24.05-1.54 24.05-14.43V271.46L11.97 154.58C6.64 151.4 0 155.42 0 161.83"></svg:path>`,
})
export class FaSolidDiceD6Icon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceFiveIcon],svg[fa-solid-dice-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64M128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidDiceFiveIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceFourIcon],svg[fa-solid-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64M128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidDiceFourIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceOneIcon],svg[fa-solid-dice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64M224 288c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidDiceOneIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceSixIcon],svg[fa-solid-dice-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64M128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidDiceSixIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceThreeIcon],svg[fa-solid-dice-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64M128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidDiceThreeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiceTwoIcon],svg[fa-solid-dice-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64M128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m192 192c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidDiceTwoIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDigitalTachographIcon],svg[fa-solid-digital-tachograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 96H32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128c0-17.67-14.33-32-32-32M304 352c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-8c0-4.42 3.58-8 8-8h224c4.42 0 8 3.58 8 8zM72 288v-16c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H80c-4.42 0-8-3.58-8-8m64 0v-16c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8m64 0v-16c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8m64 0v-16c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8m40-64c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-48c0-8.84 7.16-16 16-16h208c8.84 0 16 7.16 16 16zm272 128c0 4.42-3.58 8-8 8H344c-4.42 0-8-3.58-8-8v-8c0-4.42 3.58-8 8-8h224c4.42 0 8 3.58 8 8z"></svg:path>`,
})
export class FaSolidDigitalTachographIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDirectionsIcon],svg[fa-solid-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36m-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76"></svg:path>`,
})
export class FaSolidDirectionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDiseaseIcon],svg[fa-solid-disease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m472.29 195.9l-67.06-23c-19.28-6.6-33.54-20.92-38.14-38.31l-16-60.45c-11.58-43.77-76.57-57.13-110-22.62L195 99.24c-13.26 13.71-33.54 20.93-54.2 19.31l-71.9-5.62c-52-4.07-86.93 44.89-59 82.84l38.54 52.42c11.08 15.07 12.82 33.86 4.64 50.24l-28.43 57C4 396.67 47.46 440.29 98.11 429.23l70-15.28c20.11-4.39 41.45 0 57.07 11.73l54.32 40.83c39.32 29.56 101 7.57 104.45-37.22l4.7-61.86c1.35-17.8 12.8-33.87 30.63-43l62-31.74c44.84-22.96 39.55-80.17-8.99-96.79M160 256a32 32 0 1 1 32-32a32 32 0 0 1-32 32m128 96a32 32 0 1 1 32-32a32 32 0 0 1-32 32m16-128a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class FaSolidDiseaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDivideIcon],svg[fa-solid-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 352c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m0-192c35.35 0 64-28.65 64-64s-28.65-64-64-64s-64 28.65-64 64s28.65 64 64 64m192 48H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidDivideIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDizzyIcon],svg[fa-solid-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m-96 206.6l-28.7 28.7c-14.8 14.8-37.8-7.5-22.6-22.6l28.7-28.7l-28.7-28.7c-15-15 7.7-37.6 22.6-22.6l28.7 28.7l28.7-28.7c15-15 37.6 7.7 22.6 22.6L174.6 192l28.7 28.7c15.2 15.2-7.9 37.4-22.6 22.6zM248 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64m147.3-195.3c15.2 15.2-7.9 37.4-22.6 22.6L344 214.6l-28.7 28.7c-14.8 14.8-37.8-7.5-22.6-22.6l28.7-28.7l-28.7-28.7c-15-15 7.7-37.6 22.6-22.6l28.7 28.7l28.7-28.7c15-15 37.6 7.7 22.6 22.6L366.6 192z"></svg:path>`,
})
export class FaSolidDizzyIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDnaIcon],svg[fa-solid-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.1 494.1c-1.1 9.5 6.3 17.8 15.9 17.8l32.3.1c8.1 0 14.9-5.9 16-13.9c.7-4.9 1.8-11.1 3.4-18.1H380c1.6 6.9 2.9 13.2 3.5 18.1c1.1 8 7.9 14 16 13.9l32.3-.1c9.6 0 17.1-8.3 15.9-17.8c-4.6-37.9-25.6-129-118.9-207.7q-26.4 18.6-58.5 35.4c6.2 4.6 11.4 9.4 17 14.2H159.7c21.3-18.1 47-35.6 78.7-51.4C410.5 199.1 442.1 65.8 447.9 17.9C449 8.4 441.6.1 432 .1L399.6 0c-8.1 0-14.9 5.9-16 13.9c-.7 4.9-1.8 11.1-3.4 18.1H67.8c-1.6-7-2.7-13.1-3.4-18.1c-1.1-8-7.9-14-16-13.9L16.1.1C6.5.1-1 8.4.1 17.9C5.3 60.8 31.4 171.8 160 256C31.5 340.2 5.3 451.2.1 494.1M224 219.6c-25.1-13.7-46.4-28.4-64.3-43.6h128.5c-17.8 15.2-39.1 30-64.2 43.6M355.1 96c-5.8 10.4-12.8 21.1-21 32H114c-8.3-10.9-15.3-21.6-21-32zM92.9 416c5.8-10.4 12.8-21.1 21-32h219.4c8.3 10.9 15.4 21.6 21.2 32z"></svg:path>`,
})
export class FaSolidDnaIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDogIcon],svg[fa-solid-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.06 224L448 277.55V496a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16V384H192v112a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16V282.09C58.84 268.84 32 233.66 32 192a32 32 0 0 1 64 0a32.06 32.06 0 0 0 32 32ZM544 112v32a64 64 0 0 1-64 64h-32v35.58l-128-45.71V48c0-14.25 17.22-21.39 27.31-11.31L374.59 64h53.63c10.91 0 23.75 7.92 28.62 17.69L464 96h64a16 16 0 0 1 16 16m-112 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class FaSolidDogIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDollarSignIcon],svg[fa-solid-dollar-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5c6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3c0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5c24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7c21.5-61.6-14.6-124.8-72.5-141.7"></svg:path>`,
})
export class FaSolidDollarSignIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDollyIcon],svg[fa-solid-dolly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M294.2 277.7c18 5 34.7 13.4 49.5 24.7l161.5-53.8c8.4-2.8 12.9-11.9 10.1-20.2L454.9 47.2c-2.8-8.4-11.9-12.9-20.2-10.1l-61.1 20.4l33.1 99.4L346 177l-33.1-99.4l-61.6 20.5c-8.4 2.8-12.9 11.9-10.1 20.2zm281 48.7L565 296c-2.8-8.4-11.9-12.9-20.2-10.1l-213.5 71.2c-17.2-22-43.6-36.4-73.5-37L158.4 21.9C154 8.8 141.8 0 128 0H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h88.9l92.2 276.7c-26.1 20.4-41.7 53.6-36 90.5c6.1 39.4 37.9 72.3 77.3 79.2c60.2 10.7 112.3-34.8 113.4-92.6l213.3-71.2c8.3-2.8 12.9-11.8 10.1-20.2M256 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48"></svg:path>`,
})
export class FaSolidDollyIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDollyFlatbedIcon],svg[fa-solid-dolly-flatbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 320h384c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H448v128l-48-32l-48 32V32H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16m416 64H128V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h82.9c-1.8 5-2.9 10.4-2.9 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidDollyFlatbedIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDonateIcon],svg[fa-solid-donate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0S48 93.1 48 208s93.1 208 208 208M233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4c5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1c-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3c0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1c0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4c-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1c5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3c0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1c.1-34 26.4-61.5 59.1-62.4M480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32"></svg:path>`,
})
export class FaSolidDonateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDoorClosedIcon],svg[fa-solid-door-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 448H512V50.8C512 22.78 490.47 0 464 0H175.99c-26.47 0-48 22.78-48 50.8V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M415.99 288c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32c.01 17.67-14.32 32-32 32"></svg:path>`,
})
export class FaSolidDoorClosedIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDoorOpenIcon],svg[fa-solid-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17M264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32s24 14.33 24 32s-10.75 32-24 32"></svg:path>`,
})
export class FaSolidDoorOpenIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDotCircleIcon],svg[fa-solid-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8m80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80s35.888-80 80-80s80 35.888 80 80"></svg:path>`,
})
export class FaSolidDotCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDoveIcon],svg[fa-solid-dove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2c-2.1-13.5-19-18.8-27.8-8.3c-21.1 24.9-37.7 54.1-48.9 86.5c34.2 38.3 80 64.6 130.8 75.1M400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9c13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7C20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16"></svg:path>`,
})
export class FaSolidDoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDownloadIcon],svg[fa-solid-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24m296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24m-124 88c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20m64 0c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20"></svg:path>`,
})
export class FaSolidDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDraftingCompassIcon],svg[fa-solid-drafting-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19l53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39c-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47c15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04l70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14M256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32s-32-14.33-32-32s14.33-32 32-32"></svg:path>`,
})
export class FaSolidDraftingCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDragonIcon],svg[fa-solid-dragon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14m556.87 34.1l-100.66-50.31A47.99 47.99 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32 32 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96L292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38c-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2C0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76c2.52-47.28-22.73-90.4-64.64-111.36M489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26c-12.96-.71-25.85-12.53-21.52-29.67"></svg:path>`,
})
export class FaSolidDragonIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDrawPolygonIcon],svg[fa-solid-draw-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1c35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32C28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64c23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32c35.35 0 64-28.65 64-64c.01-35.35-28.64-64-63.99-64m-288 8.88V151.12A63.8 63.8 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1c-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.75 63.75 0 0 0 96 360.88M272 256c0-8.82 7.18-16 16-16s16 7.18 16 16s-7.18 16-16 16s-16-7.18-16-16M400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16s7.18-16 16-16s16 7.18 16 16M64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16s-16-7.18-16-16s7.18-16 16-16M48 416c0-8.82 7.18-16 16-16s16 7.18 16 16s-7.18 16-16 16s-16-7.18-16-16m336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16s16 7.18 16 16s-7.18 16-16 16"></svg:path>`,
})
export class FaSolidDrawPolygonIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDrumIcon],svg[fa-solid-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m431.34 122.05l73.53-47.42a16 16 0 0 0 4.44-22.19l-8.87-13.31a16 16 0 0 0-22.19-4.44l-110.06 71C318.43 96.91 271.22 96 256 96C219.55 96 0 100.55 0 208.15v160.23c0 30.27 27.5 57.68 72 77.86v-101.9a24 24 0 1 1 48 0v118.93c33.05 9.11 71.07 15.06 112 16.73V376.39a24 24 0 1 1 48 0V480c40.93-1.67 78.95-7.62 112-16.73V344.34a24 24 0 1 1 48 0v101.9c44.5-20.18 72-47.59 72-77.86V208.15c0-43.32-35.76-69.76-80.66-86.1M256 272.24c-114.88 0-208-28.69-208-64.09s93.12-64.08 208-64.08c17.15 0 33.73.71 49.68 1.91l-72.81 47a16 16 0 0 0-4.43 22.19l8.87 13.31a16 16 0 0 0 22.19 4.44l118.64-76.52C430.09 168 464 186.84 464 208.15c0 35.4-93.13 64.09-208 64.09"></svg:path>`,
})
export class FaSolidDrumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDrumSteelpanIcon],svg[fa-solid-drum-steelpan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 32C128.94 32 0 89.31 0 160v192c0 70.69 128.94 128 288 128s288-57.31 288-128V160c0-70.69-128.94-128-288-128m-82.99 158.36c-4.45 16.61-14.54 30.57-28.31 40.48C100.23 217.46 48 190.78 48 160c0-30.16 50.11-56.39 124.04-70.03l25.6 44.34c9.86 17.09 12.48 36.99 7.37 56.05M288 240c-21.08 0-41.41-1-60.89-2.7c8.06-26.13 32.15-45.3 60.89-45.3s52.83 19.17 60.89 45.3C329.41 239 309.08 240 288 240m64-144c0 35.29-28.71 64-64 64s-64-28.71-64-64V82.96c20.4-1.88 41.8-2.96 64-2.96s43.6 1.08 64 2.96zm46.93 134.9c-13.81-9.91-23.94-23.9-28.4-40.54c-5.11-19.06-2.49-38.96 7.38-56.04l25.65-44.42C477.72 103.5 528 129.79 528 160c0 30.83-52.4 57.54-129.07 70.9"></svg:path>`,
})
export class FaSolidDrumSteelpanIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDrumstickBiteIcon],svg[fa-solid-drumstick-bite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462.8 49.57a169.44 169.44 0 0 0-239.5 0C187.82 85 160.13 128 160.13 192v85.83l-40.62 40.59c-9.7 9.69-24 11.07-36.78 6a60.33 60.33 0 0 0-65 98.72C33 438.39 54.24 442.7 73.85 438.21c-4.5 19.6-.18 40.83 15.1 56.1a60.35 60.35 0 0 0 98.8-65c-5.09-12.73-3.72-27 6-36.75L234.36 352h85.89a187.9 187.9 0 0 0 61.89-10c-39.64-43.89-39.83-110.23 1.05-151.07c34.38-34.36 86.76-39.46 128.74-16.8c1.3-44.96-14.81-90.28-49.13-124.56"></svg:path>`,
})
export class FaSolidDrumstickBiteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDumbbellIcon],svg[fa-solid-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24m528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8M456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24"></svg:path>`,
})
export class FaSolidDumbbellIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDumpsterIcon],svg[fa-solid-dumpster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M560 160c10.4 0 18-9.8 15.5-19.9l-24-96C549.7 37 543.3 32 536 32h-98.9l25.6 128zM272 32H171.5l-25.6 128H272zm132.5 0H304v128h126.1zM16 160h97.3l25.6-128H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160m544 64h-20l4-32H32l4 32H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h28l20 160v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h320v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16l20-160h28c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidDumpsterIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDumpsterFireIcon],svg[fa-solid-dumpster-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m418.7 104.1l.2-.2l-14.4-72H304v128h60.8c16.2-19.3 34.2-38.2 53.9-55.8M272 32H171.5l-25.6 128H272zm189.3 72.1c18.2 16.3 35.5 33.7 51.1 51.5c5.7-5.6 11.4-11.1 17.3-16.3l21.3-19l21.3 19c1.1.9 2.1 2.1 3.1 3.1c-.1-.8.2-1.5 0-2.3l-24-96C549.7 37 543.3 32 536 32h-98.9l12.3 61.5zM16 160h97.3l25.6-128H40c-7.3 0-13.7 5-15.5 12.1l-24 96C-2 150.2 5.6 160 16 160m324.6 32H32l4 32H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h28l20 160v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208.8c-30.2-33.7-48.8-77.9-48.8-126.4c0-35.9 19.9-82.9 52.6-129.6m210.5-28.8c-14.9 13.3-28.3 27.2-40.2 41.2c-19.5-25.8-43.6-52-71-76.4c-70.2 62.7-120 144.3-120 193.6c0 87.5 71.6 158.4 160 158.4s160-70.9 160-158.4c.1-36.6-37-112.2-88.8-158.4m-18.6 229.4c-14.7 10.7-32.9 17-52.5 17c-49 0-88.9-33.5-88.9-88c0-27.1 16.5-51 49.4-91.9c4.7 5.6 67.1 88.1 67.1 88.1l39.8-47c2.8 4.8 5.4 9.5 7.7 14c18.6 36.7 10.8 83.6-22.6 107.8"></svg:path>`,
})
export class FaSolidDumpsterFireIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidDungeonIcon],svg[fa-solid-dungeon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128.73 195.32l-82.81-51.76c-8.04-5.02-18.99-2.17-22.93 6.45A254.2 254.2 0 0 0 .54 239.28C-.05 248.37 7.59 256 16.69 256h97.13c7.96 0 14.08-6.25 15.01-14.16c1.09-9.33 3.24-18.33 6.24-26.94c2.56-7.34.25-15.46-6.34-19.58M319.03 8C298.86 2.82 277.77 0 256 0s-42.86 2.82-63.03 8c-9.17 2.35-13.91 12.6-10.39 21.39l37.47 104.03A16 16 0 0 0 235.1 144h41.8c6.75 0 12.77-4.23 15.05-10.58l37.47-104.03c3.52-8.79-1.22-19.03-10.39-21.39M112 288H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16m0 128H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16m77.31-283.67l-36.32-90.8c-3.53-8.83-14.13-12.99-22.42-8.31a257.3 257.3 0 0 0-71.61 59.89c-6.06 7.32-3.85 18.48 4.22 23.52l82.93 51.83c6.51 4.07 14.66 2.62 20.11-2.79c5.18-5.15 10.79-9.85 16.79-14.05c6.28-4.41 9.15-12.17 6.3-19.29M398.18 256h97.13c9.1 0 16.74-7.63 16.15-16.72a254.1 254.1 0 0 0-22.45-89.27c-3.94-8.62-14.89-11.47-22.93-6.45l-82.81 51.76c-6.59 4.12-8.9 12.24-6.34 19.58c3.01 8.61 5.15 17.62 6.24 26.94c.93 7.91 7.05 14.16 15.01 14.16m54.85-162.89a257.3 257.3 0 0 0-71.61-59.89c-8.28-4.68-18.88-.52-22.42 8.31l-36.32 90.8c-2.85 7.12.02 14.88 6.3 19.28c6 4.2 11.61 8.9 16.79 14.05c5.44 5.41 13.6 6.86 20.11 2.79l82.93-51.83c8.07-5.03 10.29-16.19 4.22-23.51M496 288h-96c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16m0 128h-96c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h96c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16M240 177.62V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V177.62c-5.23-.89-10.52-1.62-16-1.62s-10.77.73-16 1.62m-64 41.51V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V189.36c-12.78 7.45-23.84 17.47-32 29.77m128-29.77V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V219.13c-8.16-12.3-19.22-22.32-32-29.77"></svg:path>`,
})
export class FaSolidDungeonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEditIcon],svg[fa-solid-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5"></svg:path>`,
})
export class FaSolidEditIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEggIcon],svg[fa-solid-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0C86 0 0 214 0 320s86 192 192 192s192-86 192-192S298 0 192 0"></svg:path>`,
})
export class FaSolidEggIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEjectIcon],svg[fa-solid-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 384v64c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32M48.053 320h351.886c41.651 0 63.581-49.674 35.383-80.435L259.383 47.558c-19.014-20.743-51.751-20.744-70.767 0L12.67 239.565C-15.475 270.268 6.324 320 48.053 320"></svg:path>`,
})
export class FaSolidEjectIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEllipsisHIcon],svg[fa-solid-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72m104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72m-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72"></svg:path>`,
})
export class FaSolidEllipsisHIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEllipsisVIcon],svg[fa-solid-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72M24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8S24 40.2 24 80m0 352c0 39.8 32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72"></svg:path>`,
})
export class FaSolidEllipsisVIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEmptySetIcon],svg[fa-solid-empty-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M507.31 27.31L484.69 4.69c-6.25-6.25-16.38-6.25-22.63 0l-72.09 72.09C352.57 48.78 306.31 32 256 32 132.29 32 32 132.29 32 256c0 50.3 16.78 96.57 44.78 133.96l-72.09 72.1c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l72.09-72.09C159.43 463.22 205.7 480 256 480c123.71 0 224-100.29 224-224 0-50.3-16.78-96.57-44.78-133.96l72.09-72.09c6.25-6.26 6.25-16.39 0-22.64zM112 256c0-79.4 64.6-144 144-144 28.11 0 54.16 8.41 76.35 22.39L134.39 332.35C120.41 310.16 112 284.11 112 256zm288 0c0 79.4-64.6 144-144 144-28.11 0-54.16-8.41-76.35-22.39L377.6 179.65C391.59 201.84 400 227.89 400 256z" fill="currentColor"></svg:path>`,
})
export class FaSolidEmptySetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEnvelopeIcon],svg[fa-solid-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7c22.4 17.4 52.1 39.5 154.1 113.6c21.1 15.4 56.7 47.8 92.2 47.6c35.7.3 72-32.8 92.3-47.6c102-74.1 131.6-96.3 154-113.7M256 320c23.2.4 56.6-29.2 73.4-41.4c132.7-96.3 142.8-104.7 173.4-128.7c5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7c16.8 12.2 50.2 41.8 73.4 41.4"></svg:path>`,
})
export class FaSolidEnvelopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEnvelopeOpenIcon],svg[fa-solid-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433c118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907c-22.845 16.873-55.462 40.705-105.582 77.079c-16.825 12.266-50.21 41.781-73.413 41.43c-23.211.344-56.559-29.143-73.413-41.43c-50.114-36.37-82.734-60.204-105.582-77.079c-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a8 8 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868c20.274 14.781 56.524 47.813 92.264 47.573c35.724.242 71.961-32.771 92.263-47.573c49.85-36.179 82.418-59.97 105.303-76.868a8 8 0 0 0 1.839-10.967z"></svg:path>`,
})
export class FaSolidEnvelopeOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEnvelopeOpenTextIcon],svg[fa-solid-envelope-open-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16m-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19m237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44c-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A48 48 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77"></svg:path>`,
})
export class FaSolidEnvelopeOpenTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEnvelopeSquareIcon],svg[fa-solid-envelope-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938c-10.5 7.655-31.392 26.12-45.883 25.894c-14.503.218-35.367-18.227-45.883-25.895M384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214c14.162 10.341 37.975 32.145 64.694 32.01c26.887.134 51.037-22.041 64.72-32.025c61.958-44.965 81.325-59.406 95.283-70.199"></svg:path>`,
})
export class FaSolidEnvelopeSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEqualsIcon],svg[fa-solid-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32m0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidEqualsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEraserIcon],svg[fa-solid-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48 48 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80z"></svg:path>`,
})
export class FaSolidEraserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEthernetIcon],svg[fa-solid-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 192h-48v-48c0-8.8-7.2-16-16-16h-48V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H80c-8.8 0-16 7.2-16 16v48H16c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h80V320h32v128h64V320h32v128h64V320h32v128h64V320h32v128h80c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidEthernetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEuroSignIcon],svg[fa-solid-euro-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369c-10.692 2.439-27.422 5.413-45.426 5.413c-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03c14.486 0 28.564 2.25 37.851 4.145c6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32C152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788c6.167-1.595 10.027-7.708 8.788-13.957z"></svg:path>`,
})
export class FaSolidEuroSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExchangeAltIcon],svg[fa-solid-exchange-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24m488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24"></svg:path>`,
})
export class FaSolidExchangeAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExclamationIcon],svg[fa-solid-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80s35.888-80 80-80s80 35.888 80 80M25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199"></svg:path>`,
})
export class FaSolidExclamationIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExclamationCircleIcon],svg[fa-solid-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248m-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46s46-20.595 46-46s-20.595-46-46-46m-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654"></svg:path>`,
})
export class FaSolidExclamationCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExclamationTriangleIcon],svg[fa-solid-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46s46-20.595 46-46s-20.595-46-46-46m-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654"></svg:path>`,
})
export class FaSolidExclamationTriangleIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExpandIcon],svg[fa-solid-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FaSolidExpandIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExpandAltIcon],svg[fa-solid-expand-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627m22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627"></svg:path>`,
})
export class FaSolidExpandAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExpandArrowsAltIcon],svg[fa-solid-expand-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6L116.77 402.9L153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256L77.18 148.7L41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9"></svg:path>`,
})
export class FaSolidExpandArrowsAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExternalLinkAltIcon],svg[fa-solid-external-link-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16M488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24"></svg:path>`,
})
export class FaSolidExternalLinkAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidExternalLinkSquareAltIcon],svg[fa-solid-external-link-square-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48m-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526l31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24"></svg:path>`,
})
export class FaSolidExternalLinkSquareAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEyeIcon],svg[fa-solid-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19M288 400a144 144 0 1 1 144-144a143.93 143.93 0 0 1-144 144m0-240a95.3 95.3 0 0 0-25.31 3.79a47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160"></svg:path>`,
})
export class FaSolidEyeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEyeDropperIcon],svg[fa-solid-eye-dropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32l56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62l-128-128zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09l-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1l77.09-77.09c37.51-37.48 37.51-98.26.01-135.75"></svg:path>`,
})
export class FaSolidEyeDropperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidEyeSlashIcon],svg[fa-solid-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144 144 0 0 1-26 2.61m313.82 58.1l-110.55-85.44a331.3 331.3 0 0 0 81.25-102.07a32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45m-183.72-142l-39.3-30.38A94.8 94.8 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.6 46.6 0 0 1-1.54 10l-73.61-56.89A142.3 142.3 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></svg:path>`,
})
export class FaSolidEyeSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFanIcon],svg[fa-solid-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13C189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33c28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62c79.7-10 141.33-77.51 141.33-159.3c0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59c-10-79.7-77.51-141.33-159.3-141.33M256 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FaSolidFanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFastBackwardIcon],svg[fa-solid-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 436V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v151.9L235.5 71.4C256.1 54.3 288 68.6 288 96v131.9L459.5 71.4C480.1 54.3 512 68.6 512 96v320c0 27.4-31.9 41.7-52.5 24.6L288 285.3V416c0 27.4-31.9 41.7-52.5 24.6L64 285.3V436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12"></svg:path>`,
})
export class FaSolidFastBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFastForwardIcon],svg[fa-solid-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 76v360c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V284.1L276.5 440.6c-20.6 17.2-52.5 2.8-52.5-24.6V284.1L52.5 440.6C31.9 457.8 0 443.4 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 226.8V96c0-27.4 31.9-41.7 52.5-24.6L448 226.8V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12"></svg:path>`,
})
export class FaSolidFastForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFaucetIcon],svg[fa-solid-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 256h-38.61c-15.71-13.44-35.46-23.07-57.39-28v-47.56l-32-3.38l-32 3.38V228c-21.93 5-41.68 14.6-57.39 28H16a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h92.79C129.38 421.73 173 448 224 448s94.62-26.27 115.21-64H352a32 32 0 0 1 32 32a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32a160 160 0 0 0-160-160M81.59 159.91l142.41-15l142.41 15c9.42 1 17.59-6.81 17.59-16.8v-30.22c0-10-8.17-17.8-17.59-16.81L256 107.74V80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v27.74L81.59 96.08C72.17 95.09 64 102.9 64 112.89v30.22c0 9.99 8.17 17.8 17.59 16.8"></svg:path>`,
})
export class FaSolidFaucetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFaxIcon],svg[fa-solid-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 160V77.25a32 32 0 0 0-9.38-22.63L425.37 9.37A32 32 0 0 0 402.75 0H160a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32M288 432a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm0-128a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm128 128a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm0-128a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16zm0-112H192V64h160v48a16 16 0 0 0 16 16h48zM64 128H32a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32"></svg:path>`,
})
export class FaSolidFaxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFeatherIcon],svg[fa-solid-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467.14 44.84c-62.55-62.48-161.67-64.78-252.28 25.73c-78.61 78.52-60.98 60.92-85.75 85.66c-60.46 60.39-70.39 150.83-63.64 211.17l178.44-178.25c6.26-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94s24.6 9.37 33.98 0l66.1-66.03C159.42 454.65 279 457.11 353.95 384h-98.19l147.57-49.14c49.99-49.93 36.38-36.18 46.31-46.86h-97.78l131.54-43.8c45.44-74.46 34.31-148.84-16.26-199.36"></svg:path>`,
})
export class FaSolidFeatherIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFeatherAltIcon],svg[fa-solid-feather-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94s24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36c53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0"></svg:path>`,
})
export class FaSolidFeatherAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFemaleIcon],svg[fa-solid-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821"></svg:path>`,
})
export class FaSolidFemaleIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFighterJetIcon],svg[fa-solid-fighter-jet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m544 224l-128-16l-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16l128-16c96-21.333 96-26.583 96-32s0-10.667-96-32"></svg:path>`,
})
export class FaSolidFighterJetIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileIcon],svg[fa-solid-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"></svg:path>`,
})
export class FaSolidFileIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileAltIcon],svg[fa-solid-file-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12m96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"></svg:path>`,
})
export class FaSolidFileAltIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileArchiveIcon],svg[fa-solid-file-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9M128.4 336c-17.9 0-32.4 12.1-32.4 27c0 15 14.6 27 32.5 27s32.4-12.1 32.4-27s-14.6-27-32.5-27M224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24M95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6"></svg:path>`,
})
export class FaSolidFileArchiveIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileAudioIcon],svg[fa-solid-file-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m-64 268c0 10.7-12.9 16-20.5 8.5L104 376H76c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h28l35.5-36.5c7.6-7.6 20.5-2.2 20.5 8.5zm33.2-47.6c9.1-9.3 9.1-24.1 0-33.4c-22.1-22.8 12.2-56.2 34.4-33.5c27.2 27.9 27.2 72.4 0 100.4c-21.8 22.3-56.9-10.4-34.4-33.5m86-117.1c54.4 55.9 54.4 144.8 0 200.8c-21.8 22.4-57-10.3-34.4-33.5c36.2-37.2 36.3-96.5 0-133.8c-22.1-22.8 12.3-56.3 34.4-33.5M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"></svg:path>`,
})
export class FaSolidFileAudioIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileCodeIcon],svg[fa-solid-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24 24 0 0 1 384 121.941M248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747zm51.295 50.479l-27.453-7.97a5.4 5.4 0 0 1-3.681-6.692l61.44-211.626a5.4 5.4 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681m160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879"></svg:path>`,
})
export class FaSolidFileCodeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileContractIcon],svg[fa-solid-file-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24M64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.99 15.99 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05c-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16c2.02 4.06 5.96 6.5 10.16 6.5M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9"></svg:path>`,
})
export class FaSolidFileContractIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileCsvIcon],svg[fa-solid-file-csv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62c0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14c0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62c0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14c.01 21.29-19 38.62-42.39 38.62M256 264v20.8c0 20.27 5.7 40.17 16 56.88c10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09c-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8m121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9"></svg:path>`,
})
export class FaSolidFileCsvIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileDownloadIcon],svg[fa-solid-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9"></svg:path>`,
})
export class FaSolidFileDownloadIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileExcelIcon],svg[fa-solid-file-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8c-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5l-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3c26.1 48.8 20 33.6 36.6 68.5c0 0 6.1-11.7 36.6-68.5c2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"></svg:path>`,
})
export class FaSolidFileExcelIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileExportIcon],svg[fa-solid-file-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24m-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16"></svg:path>`,
})
export class FaSolidFileExportIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileImageIcon],svg[fa-solid-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24 24 0 0 1 7.03 16.971M248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48s-48-21.49-48-48s21.491-48 48-48m208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368L264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304z"></svg:path>`,
})
export class FaSolidFileImageIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileImportIcon],svg[fa-solid-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24"></svg:path>`,
})
export class FaSolidFileImportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileInvoiceIcon],svg[fa-solid-file-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256H96v64h192zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24M64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16"></svg:path>`,
})
export class FaSolidFileInvoiceIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileInvoiceDollarIcon],svg[fa-solid-file-invoice-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24M64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8m144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35c-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73c3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19c0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39c0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35c3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73c-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19c0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39c0 24.53-19.05 44.44-42.67 45.07"></svg:path>`,
})
export class FaSolidFileInvoiceDollarIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileMedicalIcon],svg[fa-solid-file-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m64 160v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8"></svg:path>`,
})
export class FaSolidFileMedicalIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileMedicalAltIcon],svg[fa-solid-file-medical-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 136V0H88C74.7 0 64 10.7 64 24v232H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h140.9c3 0 5.8 1.7 7.2 4.4l19.9 39.8l56.8-113.7c2.9-5.9 11.4-5.9 14.3 0l34.7 69.5H352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-89.9L240 275.8l-56.8 113.7c-2.9 5.9-11.4 5.9-14.3 0L134.1 320H64v168c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H312c-13.2 0-24-10.8-24-24m153-31L343.1 7c-4.5-4.5-10.6-7-17-7H320v128h128v-6.1c0-6.3-2.5-12.4-7-16.9"></svg:path>`,
})
export class FaSolidFileMedicalAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFilePdfIcon],svg[fa-solid-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9c8.4 0 7.6 36.9 2 46.9m-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7c18.3-7 39-17.2 62.9-21.9c-12.7-9.6-24.9-23.4-34.5-40.8M86.1 428.1c0 .8 13.2-5.4 34.9-40.2c-6.7 6.3-29.1 24.5-34.9 40.2M248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24m-8 171.8c-20-12.2-33.3-29-42.7-53.8c4.5-18.5 11.6-46.6 6.2-64.2c-4.7-29.4-42.4-26.5-47.8-6.8c-5 18.3-.4 44.1 8.1 77c-11.6 27.6-28.7 64.6-40.8 85.8c-.1 0-.1.1-.2.1c-27.1 13.9-73.6 44.5-54.5 68c5.6 6.9 16 10 21.5 10c17.9 0 35.7-18 61.1-61.8c25.8-8.5 54.1-19.1 79-23.2c21.7 11.8 47.1 19.5 64 19.5c29.2 0 31.2-32 19.7-43.4c-13.9-13.6-54.3-9.7-73.6-7.2M377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9c37.1 15.8 42.8 9 42.8 9"></svg:path>`,
})
export class FaSolidFilePdfIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFilePowerpointIcon],svg[fa-solid-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M193.7 271.2c8.8 0 15.5 2.7 20.3 8.1c9.6 10.9 9.8 32.7-.2 44.1c-4.9 5.6-11.9 8.5-21.1 8.5h-26.9v-60.7zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m53 165.2c0 90.3-88.8 77.6-111.1 77.6V436c0 6.6-5.4 12-12 12h-30.8c-6.6 0-12-5.4-12-12V236.2c0-6.6 5.4-12 12-12h81c44.5 0 72.9 32.8 72.9 77"></svg:path>`,
})
export class FaSolidFilePowerpointIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFilePrescriptionIcon],svg[fa-solid-file-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m68.53 179.48l11.31 11.31c6.25 6.25 6.25 16.38 0 22.63l-29.9 29.9L304 409.38c6.25 6.25 6.25 16.38 0 22.63l-11.31 11.31c-6.25 6.25-16.38 6.25-22.63 0L240 413.25l-30.06 30.06c-6.25 6.25-16.38 6.25-22.63 0L176 432c-6.25-6.25-6.25-16.38 0-22.63l30.06-30.06L146.74 320H128v48c0 8.84-7.16 16-16 16H96c-8.84 0-16-7.16-16-16V208c0-8.84 7.16-16 16-16h80c35.35 0 64 28.65 64 64c0 24.22-13.62 45.05-33.46 55.92L240 345.38l29.9-29.9c6.25-6.25 16.38-6.25 22.63 0M176 272h-48v-32h48c8.82 0 16 7.18 16 16s-7.18 16-16 16m208-150.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"></svg:path>`,
})
export class FaSolidFilePrescriptionIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileSignatureIcon],svg[fa-solid-file-signature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16c1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zm-96 225.06V416h68.99l161.68-162.78l-67.88-67.88zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25l67.88 67.88l27.25-27.25c9.95-9.94 9.95-26.07 0-36.01"></svg:path>`,
})
export class FaSolidFileSignatureIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileUploadIcon],svg[fa-solid-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9"></svg:path>`,
})
export class FaSolidFileUploadIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileVideoIcon],svg[fa-solid-file-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24 24 0 0 1 384 121.941M224 136V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248c-13.2 0-24-10.8-24-24m96 144.016v111.963c0 21.445-25.943 31.998-40.971 16.971L224 353.941V392c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V280c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v38.059l55.029-55.013c15.011-15.01 40.971-4.491 40.971 16.97"></svg:path>`,
})
export class FaSolidFileVideoIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFileWordIcon],svg[fa-solid-file-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1c-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5c-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7c15.6 78 20.1 109.5 21 122.2c1.6-10.2 7.3-32.7 29.4-122.7c1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2c24 100.4 28.8 124 29.6 129.4c-.2-11.2-2.6-17.8 21.6-129.2c1-5.6 5.9-9.5 11.5-9.5M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9"></svg:path>`,
})
export class FaSolidFileWordIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFillIcon],svg[fa-solid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.63 217.06L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.77c-6.24-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.63l86.19 86.18l-94.76 94.76c-37.49 37.49-37.49 98.26 0 135.75l117.19 117.19c18.75 18.74 43.31 28.12 67.87 28.12c24.57 0 49.13-9.37 67.88-28.12l221.57-221.57c12.49-12.5 12.49-32.76 0-45.26m-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15l81.61-81.61l58.61 58.6c12.49 12.49 32.75 12.49 45.24 0s12.49-32.75 0-45.24l-58.61-58.6l58.95-58.95l162.45 162.44z"></svg:path>`,
})
export class FaSolidFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFillDripIcon],svg[fa-solid-fill-drip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 320s-64 92.65-64 128s28.66 64 64 64s64-28.65 64-64s-64-128-64-128m-9.37-102.94L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.76c-6.25-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.62l86.19 86.18l-94.76 94.76c-37.49 37.48-37.49 98.26 0 135.75l117.19 117.19c18.74 18.74 43.31 28.12 67.87 28.12c24.57 0 49.13-9.37 67.87-28.12l221.57-221.57c12.5-12.5 12.5-32.75.01-45.25m-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15l81.61-81.61l58.6 58.6c12.49 12.49 32.75 12.49 45.24 0s12.49-32.75 0-45.24l-58.6-58.6l58.95-58.95l162.44 162.44z"></svg:path>`,
})
export class FaSolidFillDripIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFilmIcon],svg[fa-solid-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24M96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidFilmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFilterIcon],svg[fa-solid-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0"></svg:path>`,
})
export class FaSolidFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFingerprintIcon],svg[fa-solid-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.12 245.96c-13.25 0-24 10.74-24 24c1.14 72.25-8.14 141.9-27.7 211.55c-2.73 9.72 2.15 30.49 23.12 30.49c10.48 0 20.11-6.92 23.09-17.52c13.53-47.91 31.04-125.41 29.48-224.52c.01-13.25-10.73-24-23.99-24m-.86-81.73C194 164.16 151.25 211.3 152.1 265.32c.75 47.94-3.75 95.91-13.37 142.55c-2.69 12.98 5.67 25.69 18.64 28.36c13.05 2.67 25.67-5.66 28.36-18.64c10.34-50.09 15.17-101.58 14.37-153.02c-.41-25.95 19.92-52.49 54.45-52.34c31.31.47 57.15 25.34 57.62 55.47c.77 48.05-2.81 96.33-10.61 143.55c-2.17 13.06 6.69 25.42 19.76 27.58c19.97 3.33 26.81-15.1 27.58-19.77c8.28-50.03 12.06-101.21 11.27-152.11c-.88-55.8-47.94-101.88-104.91-102.72m-110.69-19.78c-10.3-8.34-25.37-6.8-33.76 3.48c-25.62 31.5-39.39 71.28-38.75 112c.59 37.58-2.47 75.27-9.11 112.05c-2.34 13.05 6.31 25.53 19.36 27.89c20.11 3.5 27.07-14.81 27.89-19.36c7.19-39.84 10.5-80.66 9.86-121.33c-.47-29.88 9.2-57.88 28-80.97c8.35-10.28 6.79-25.39-3.49-33.76m109.47-62.33c-15.41-.41-30.87 1.44-45.78 4.97c-12.89 3.06-20.87 15.98-17.83 28.89c3.06 12.89 16 20.83 28.89 17.83c11.05-2.61 22.47-3.77 34-3.69c75.43 1.13 137.73 61.5 138.88 134.58c.59 37.88-1.28 76.11-5.58 113.63c-1.5 13.17 7.95 25.08 21.11 26.58c16.72 1.95 25.51-11.88 26.58-21.11a929 929 0 0 0 5.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83m252.07 121.45c-2.86-12.92-15.51-21.2-28.61-18.27c-12.94 2.86-21.12 15.66-18.26 28.61c4.71 21.41 4.91 37.41 4.7 61.6c-.11 13.27 10.55 24.09 23.8 24.2h.2c13.17 0 23.89-10.61 24-23.8c.18-22.18.4-44.11-5.83-72.34m-40.12-90.72C417.29 43.46 337.6 1.29 252.81.02C183.02-.82 118.47 24.91 70.46 72.94C24.09 119.37-.9 181.04.14 246.65l-.12 21.47c-.39 13.25 10.03 24.31 23.28 24.69c.23.02.48.02.72.02c12.92 0 23.59-10.3 23.97-23.3l.16-23.64c-.83-52.5 19.16-101.86 56.28-139c38.76-38.8 91.34-59.67 147.68-58.86c69.45 1.03 134.73 35.56 174.62 92.39c7.61 10.86 22.56 13.45 33.42 5.86c10.84-7.62 13.46-22.59 5.84-33.43"></svg:path>`,
})
export class FaSolidFingerprintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFireIcon],svg[fa-solid-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99c-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14"></svg:path>`,
})
export class FaSolidFireIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFireAltIcon],svg[fa-solid-fire-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0C69.74 91.17 0 209.96 0 281.6C0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4m-19.47 340.65C282.43 407.01 255.72 416 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75c6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97c27.35 52.19 15.81 118.97-33.43 153.42"></svg:path>`,
})
export class FaSolidFireAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFireExtinguisherIcon],svg[fa-solid-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m434.027 26.329l-168 28C254.693 56.218 256 67.8 256 72h-58.332C208.353 36.108 181.446 0 144 0c-39.435 0-66.368 39.676-52.228 76.203c-52.039 13.051-75.381 54.213-90.049 90.884c-4.923 12.307 1.063 26.274 13.37 31.197c12.317 4.926 26.279-1.075 31.196-13.37C75.058 112.99 106.964 120 168 120v27.076c-41.543 10.862-72 49.235-72 94.129V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24V240c0-44.731-30.596-82.312-72-92.97V120h40c0 2.974-1.703 15.716 10.027 17.671l168 28C441.342 166.89 448 161.25 448 153.834V38.166c0-7.416-6.658-13.056-13.973-11.837M144 72c-8.822 0-16-7.178-16-16s7.178-16 16-16s16 7.178 16 16s-7.178 16-16 16"></svg:path>`,
})
export class FaSolidFireExtinguisherIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFirstAidIcon],svg[fa-solid-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 80v352c0 26.5 21.5 48 48 48h48V32H48C21.5 32 0 53.5 0 80m128 400h320V32H128zm64-248c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8zM528 32h-48v448h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidFirstAidIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFishIcon],svg[fa-solid-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256L.35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416C464.56 416 576 288 576 256S464.56 96 327.1 96m87.43 184c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24c13.26 0 24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidFishIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFistRaisedIcon],svg[fa-solid-fist-raised-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.98 160V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v146.93c5.02-1.78 10.34-2.93 15.97-2.93zm128 95.99c-.01-35.34-28.66-63.99-63.99-63.99H207.85c-8.78 0-15.9 7.07-15.9 15.85v.56c0 26.27 21.3 47.59 47.57 47.59h35.26c9.68 0 13.2 3.58 13.2 8v16.2c0 4.29-3.59 7.78-7.88 8c-44.52 2.28-64.16 24.71-96.05 72.55l-6.31 9.47a7.994 7.994 0 0 1-11.09 2.22l-13.31-8.88a7.994 7.994 0 0 1-2.22-11.09l6.31-9.47c15.73-23.6 30.2-43.26 47.31-58.08c-17.27-5.51-31.4-18.12-38.87-34.45c-6.59 3.41-13.96 5.52-21.87 5.52h-32c-12.34 0-23.49-4.81-32-12.48C71.48 251.19 60.33 256 48 256H16c-5.64 0-10.97-1.15-16-2.95v77.93c0 33.95 13.48 66.5 37.49 90.51L63.99 448v64h255.98v-63.96l35.91-35.92A96.04 96.04 0 0 0 384 344.21zm-32.01-90.09V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v112h32c11.28 0 21.94 2.31 32 5.9M16 224h32c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v128c0 8.84 7.16 16 16 16m95.99 0h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v160c0 8.84 7.16 16 16 16"></svg:path>`,
})
export class FaSolidFistRaisedIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFlagIcon],svg[fa-solid-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.95 55.95 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048C34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122c53.588 0 97.844 34.783 165.217 34.783c48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016c-34.338 15.948-76.454 31.854-116.95 31.854"></svg:path>`,
})
export class FaSolidFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFlagCheckeredIcon],svg[fa-solid-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2m223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12c2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0C34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1c53.6 0 97.8 34.8 165.2 34.8c48.2 0 86.7-16.3 122.5-40.9c8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29M169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z"></svg:path>`,
})
export class FaSolidFlagCheckeredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFlagUsaIcon],svg[fa-solid-flag-usa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0m267.9 303.6c-57.2-15.1-111.7-28.8-203.9 11.1V384c185.7-92.2 221.7 53.3 397.5-23.1c11.4-5 18.5-16.5 18.5-28.8v-36c-43.6 17.3-80.2 24.1-112.1 24.1c-37.4-.1-68.9-8.4-100-16.6m0-96c-57.2-15.1-111.7-28.8-203.9 11.1v61.5c94.8-37.6 154.6-22.7 212.1-7.6c57.2 15.1 111.7 28.8 203.9-11.1V200c-43.6 17.3-80.2 24.1-112.1 24.1c-37.4 0-68.9-8.3-100-16.5m9.5-125.9c51.8 15.6 97.4 29 202.6-20.1V30.8c0-25.1-26.8-38.1-49.4-26.6C291.3 91.5 305.4-62.2 96 32.4v151.9c94.8-37.5 154.6-22.7 212.1-7.6c57.2 15 111.7 28.7 203.9-11.1V96.7c-53.6 23.5-93.3 31.4-126.1 31.4s-59-7.8-85.7-15.9c-4-1.2-8.1-2.4-12.1-3.5V75.5c7.2 2 14.3 4.1 21.3 6.2M160 128.1c-8.8 0-16-7.1-16-16c0-8.8 7.2-16 16-16s16 7.1 16 16s-7.2 16-16 16m0-55.8c-8.8 0-16-7.1-16-16c0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16m64 47.9c-8.8 0-16-7.1-16-16c0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16m0-55.9c-8.8 0-16-7.1-16-16c0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16"></svg:path>`,
})
export class FaSolidFlagUsaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFlaskIcon],svg[fa-solid-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5M137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6z"></svg:path>`,
})
export class FaSolidFlaskIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFlushedIcon],svg[fa-solid-flushed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 200c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24m-192 0c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M80 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72m232 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32m32-104c-39.8 0-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72"></svg:path>`,
})
export class FaSolidFlushedIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFolderIcon],svg[fa-solid-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48"></svg:path>`,
})
export class FaSolidFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFolderMinusIcon],svg[fa-solid-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48m-96 168c0 8.84-7.16 16-16 16H160c-8.84 0-16-7.16-16-16v-16c0-8.84 7.16-16 16-16h192c8.84 0 16 7.16 16 16z"></svg:path>`,
})
export class FaSolidFolderMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFolderOpenIcon],svg[fa-solid-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M572.694 292.093L500.27 416.248A64 64 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093M152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224"></svg:path>`,
})
export class FaSolidFolderOpenIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFolderPlusIcon],svg[fa-solid-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 128H272l-64-64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V176a48 48 0 0 0-48-48M359.5 296a16 16 0 0 1-16 16h-64v64a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-64h-64a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h64v-64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v64h64a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class FaSolidFolderPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFontIcon],svg[fa-solid-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M176.85 272L224 142.51L271.15 272z"></svg:path>`,
})
export class FaSolidFontIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFootballBallIcon],svg[fa-solid-football-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M481.5 60.3c-4.8-18.2-19.1-32.5-37.3-37.4C420.3 16.5 383 8.9 339.4 8L496 164.8c-.8-43.5-8.2-80.6-14.5-104.5m-467 391.4c4.8 18.2 19.1 32.5 37.3 37.4c23.9 6.4 61.2 14 104.8 14.9L0 347.2c.8 43.5 8.2 80.6 14.5 104.5M4.2 283.4L220.4 500c132.5-19.4 248.8-118.7 271.5-271.4L275.6 12C143.1 31.4 26.8 130.7 4.2 283.4m317.3-123.6c3.1-3.1 8.2-3.1 11.3 0l11.3 11.3c3.1 3.1 3.1 8.2 0 11.3l-28.3 28.3l28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-28.3-28.3l-22.6 22.7l28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L248 278.6l-22.6 22.6l28.3 28.3c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-28.3-28.3l-28.3 28.3c-3.1 3.1-8.2 3.1-11.3 0l-11.3-11.3c-3.1-3.1-3.1-8.2 0-11.3l28.3-28.3l-28.3-28.2c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3l22.6-22.6l-28.3-28.3c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3l22.6-22.6l-28.3-28.3c-3.1-3.1-3.1-8.2 0-11.3l11.3-11.3c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3z"></svg:path>`,
})
export class FaSolidFootballBallIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidForwardIcon],svg[fa-solid-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2m-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2"></svg:path>`,
})
export class FaSolidForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFrogIcon],svg[fa-solid-frog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M446.53 97.43C439.67 60.23 407.19 32 368 32c-39.23 0-71.72 28.29-78.54 65.54C126.75 112.96-.5 250.12 0 416.98C.11 451.9 29.08 480 64 480h304c8.84 0 16-7.16 16-16c0-17.67-14.33-32-32-32h-79.49l35.8-48.33c24.14-36.23 10.35-88.28-33.71-106.6c-23.89-9.93-51.55-4.65-72.24 10.88l-32.76 24.59c-7.06 5.31-17.09 3.91-22.41-3.19c-5.3-7.08-3.88-17.11 3.19-22.41l34.78-26.09c36.84-27.66 88.28-27.62 125.13 0c10.87 8.15 45.87 39.06 40.8 93.21L469.62 480H560c8.84 0 16-7.16 16-16c0-17.67-14.33-32-32-32h-53.63l-98.52-104.68l154.44-86.65A58.16 58.16 0 0 0 576 189.94c0-21.4-11.72-40.95-30.48-51.23c-40.56-22.22-98.99-41.28-98.99-41.28M368 136c-13.26 0-24-10.75-24-24c0-13.26 10.74-24 24-24c13.25 0 24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidFrogIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFrownIcon],svg[fa-solid-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4"></svg:path>`,
})
export class FaSolidFrownIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFrownOpenIcon],svg[fa-solid-frown-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M136 208c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32m187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1c7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1M328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidFrownOpenIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFunctionIcon],svg[fa-solid-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288.73 320c0-52.34 16.96-103.22 48.01-144.95 5.17-6.94 4.45-16.54-2.15-22.14l-24.69-20.98c-7-5.95-17.83-5.09-23.38 2.23C246.09 187.42 224 252.78 224 320c0 67.23 22.09 132.59 62.52 185.84 5.56 7.32 16.38 8.18 23.38 2.23l24.69-20.99c6.59-5.61 7.31-15.2 2.15-22.14-31.06-41.71-48.01-92.6-48.01-144.94zM224 16c0-8.84-7.16-16-16-16h-48C102.56 0 56 46.56 56 104v64H16c-8.84 0-16 7.16-16 16v48c0 8.84 7.16 16 16 16h40v128c0 13.2-10.8 24-24 24H16c-8.84 0-16 7.16-16 16v48c0 8.84 7.16 16 16 16h16c57.44 0 104-46.56 104-104V248h40c8.84 0 16-7.16 16-16v-48c0-8.84-7.16-16-16-16h-40v-64c0-13.2 10.8-24 24-24h48c8.84 0 16-7.16 16-16V16zm353.48 118.16c-5.56-7.32-16.38-8.18-23.38-2.23l-24.69 20.98c-6.59 5.61-7.31 15.2-2.15 22.14 31.05 41.71 48.01 92.61 48.01 144.95 0 52.34-16.96 103.23-48.01 144.95-5.17 6.94-4.45 16.54 2.15 22.14l24.69 20.99c7 5.95 17.83 5.09 23.38-2.23C617.91 452.57 640 387.22 640 320c0-67.23-22.09-132.59-62.52-185.84zm-54.17 231.9L477.25 320l46.06-46.06c6.25-6.25 6.25-16.38 0-22.63l-22.62-22.62c-6.25-6.25-16.38-6.25-22.63 0L432 274.75l-46.06-46.06c-6.25-6.25-16.38-6.25-22.63 0l-22.62 22.62c-6.25 6.25-6.25 16.38 0 22.63L386.75 320l-46.06 46.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L432 365.25l46.06 46.06c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63z" fill="currentColor"></svg:path>`,
})
export class FaSolidFunctionIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFunnelDollarIcon],svg[fa-solid-funnel-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m433.46 165.94l101.2-111.87C554.61 34.12 540.48 0 512.26 0H31.74C3.52 0-10.61 34.12 9.34 54.07L192 256v155.92c0 12.59 5.93 24.44 16 32l79.99 60c20.86 15.64 48.47 6.97 59.22-13.57C310.8 455.38 288 406.35 288 352c0-89.79 62.05-165.17 145.46-186.06M480 192c-88.37 0-160 71.63-160 160s71.63 160 160 160s160-71.63 160-160s-71.63-160-160-160m16 239.88V448c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35c-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73c3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19c0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39c0-24.52 19.05-44.44 42.67-45.07V256c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35c3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73c-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19c0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39c0 24.53-19.04 44.44-42.67 45.07"></svg:path>`,
})
export class FaSolidFunnelDollarIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidFutbolIcon],svg[fa-solid-futbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248m-48 0l-.003-.282l-26.064 22.741l-62.679-58.5l16.454-84.355l34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525l13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073l16.192 84.355l-62.678 58.5l-26.064-22.741l-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897l85.138 10.447l36.301 77.826l-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786l36.301-77.826l85.138-10.447l7.704 33.897C442.503 339.952 456 299.015 456 256m-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527l-29.622 91.312z"></svg:path>`,
})
export class FaSolidFutbolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGamepadIcon],svg[fa-solid-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96M248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40a40 40 0 0 1-40 40m64-96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class FaSolidGamepadIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGasPumpIcon],svg[fa-solid-gas-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9c43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3M256 192H96V64h160z"></svg:path>`,
})
export class FaSolidGasPumpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGavelIcon],svg[fa-solid-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657l39.598 39.598l-81.04 81.04l-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657l81.04-81.04l39.598 39.598l-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941"></svg:path>`,
})
export class FaSolidGavelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGemIcon],svg[fa-solid-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0zm-128 0l69.2 160H149.3L218.5 0zm-267 0h79.8l-69.2 160H0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2"></svg:path>`,
})
export class FaSolidGemIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGenderlessIcon],svg[fa-solid-genderless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80s-80-35.9-80-80s35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144"></svg:path>`,
})
export class FaSolidGenderlessIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGhostIcon],svg[fa-solid-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.1.09C81.01 3.24 0 94.92 0 200.05v263.92c0 14.26 17.23 21.39 27.31 11.31l24.92-18.53c6.66-4.95 16-3.99 21.51 2.21l42.95 48.35c6.25 6.25 16.38 6.25 22.63 0l40.72-45.85c6.37-7.17 17.56-7.17 23.92 0l40.72 45.85c6.25 6.25 16.38 6.25 22.63 0l42.95-48.35c5.51-6.2 14.85-7.17 21.51-2.21l24.92 18.53c10.08 10.08 27.31 2.94 27.31-11.31V192C384 84 294.83-3.17 186.1.09M128 224c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m128 0c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidGhostIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGiftIcon],svg[fa-solid-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32zm256 32h160c17.7 0 32-14.3 32-32V320H288zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40c0-48.5-39.5-88-88-88c-41.6 0-68.5 21.3-103 68.3c-34.5-47-61.4-68.3-103-68.3c-48.5 0-88 39.5-88 88c0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32m-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80c22.1 0 40 17.9 40 40s-17.9 40-40 40"></svg:path>`,
})
export class FaSolidGiftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGiftsIcon],svg[fa-solid-gifts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.6 194.1c1.9-30.8 17.3-61.2 44-79.8C279.4 103.5 268.7 96 256 96h-29.4l30.7-22c7.2-5.1 8.9-15.1 3.7-22.3l-9.3-13c-5.1-7.2-15.1-8.9-22.3-3.7l-32 22.9l11.5-30.6c3.1-8.3-1.1-17.5-9.4-20.6l-15-5.6c-8.3-3.1-17.5 1.1-20.6 9.4l-19.9 53l-19.9-53.1C121 2.1 111.8-2.1 103.5 1l-15 5.6C80.2 9.7 76 19 79.2 27.2l11.5 30.6L58.6 35c-7.2-5.1-17.2-3.5-22.3 3.7l-9.3 13c-5.1 7.2-3.5 17.2 3.7 22.3l30.7 22H32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h168.9c-5.5-9.5-8.9-20.3-8.9-32V256c0-29.9 20.8-55 48.6-61.9M224 480c0 17.7 14.3 32 32 32h160V384H224zm224 32h160c17.7 0 32-14.3 32-32v-96H448zm160-288h-20.4c2.6-7.6 4.4-15.5 4.4-23.8c0-35.5-27-72.2-72.1-72.2c-48.1 0-75.9 47.7-87.9 75.3c-12.1-27.6-39.9-75.3-87.9-75.3c-45.1 0-72.1 36.7-72.1 72.2c0 8.3 1.7 16.2 4.4 23.8H256c-17.7 0-32 14.3-32 32v96h192V224h15.3l.7-.2l.7.2H448v128h192v-96c0-17.7-14.3-32-32-32m-272 0q-4.05-2.1-7.2-4.8c-7.3-6.4-8.8-13.8-8.8-19c0-9.7 6.4-24.2 24.1-24.2c18.7 0 35.6 27.4 44.5 48zm199.2-4.8q-3.15 2.7-7.2 4.8h-52.6c8.8-20.3 25.8-48 44.5-48c17.7 0 24.1 14.5 24.1 24.2c0 5.2-1.5 12.6-8.8 19"></svg:path>`,
})
export class FaSolidGiftsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassCheersIcon],svg[fa-solid-glass-cheers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2l-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8L205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6c-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3c8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3c51.7 0 99.4-33.1 113.4-85.3l20.2-75.4l20.2 75.4c14 52.2 61.7 85.3 113.4 85.3c4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3c1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4M275.9 162.1l-112.1-46.5l36.5-63.4l94.5 39.2zm88.2 0l-18.9-70.7l94.5-39.2l36.5 63.4z"></svg:path>`,
})
export class FaSolidGlassCheersIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassMartiniIcon],svg[fa-solid-glass-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40c0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8c0-22.09-17.91-40-40-40h-56V271.64z"></svg:path>`,
})
export class FaSolidGlassMartiniIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassMartiniAltIcon],svg[fa-solid-glass-martini-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40c0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8c0-22.09-17.91-40-40-40h-56V271.64zM443.77 48l-48 48H116.24l-48-48z"></svg:path>`,
})
export class FaSolidGlassMartiniAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassWhiskeyIcon],svg[fa-solid-glass-whiskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32m-37.4 64l-30 192h-313L69.4 96z"></svg:path>`,
})
export class FaSolidGlassWhiskeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassesIcon],svg[fa-solid-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81c-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73c10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46c-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75c-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81c10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33c-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.2 64.2 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5m-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92c23.86 0 47.26 4.33 69.93 12.92zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92c29.12 0 54.43 6.44 72.55 12.93v37.54z"></svg:path>`,
})
export class FaSolidGlassesIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlobeIcon],svg[fa-solid-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64m324.7-96c-28.6-67.9-86.5-120.4-158-141.6c24.4 33.8 41.2 84.7 50 141.6zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6M487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64M120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64m39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6M19.3 352c28.6 67.9 86.5 120.4 158 141.6c-24.4-33.8-41.2-84.7-50-141.6z"></svg:path>`,
})
export class FaSolidGlobeIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlobeAfricaIcon],svg[fa-solid-globe-africa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.49 15.49 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.6 159.6 0 0 0-25 29.16l-13.03 19.55a27.76 27.76 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.9 78.9 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.66 54.66 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.66 54.66 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7c0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.5 15.5 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5"></svg:path>`,
})
export class FaSolidGlobeAfricaIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlobeAmericasIcon],svg[fa-solid-globe-americas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28c-2.99 3-5.1 6.7-6.17 10.71c-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25c-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97c-14.37-7.95-34.81-19.06-48.81-26.11c-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.8 114.8 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14c20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8 8 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.01 8.01 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.02 16.02 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.5 30.5 0 0 1 8.93 21.57a46.54 46.54 0 0 1-13.72 32.98M417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54z"></svg:path>`,
})
export class FaSolidGlobeAmericasIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlobeAsiaIcon],svg[fa-solid-globe-asia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200c21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42c-1.56-3.12-5.96-3.29-7.76-.3zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.77 26.77 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8 8 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a8 8 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"></svg:path>`,
})
export class FaSolidGlobeAsiaIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGlobeEuropeIcon],svg[fa-solid-globe-europe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3c0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5c0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8c0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256M130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1 5-3.3 8-3.3c6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3 8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2 0-11.3-5.1-11.3-11.3m128 306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8 0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16 8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5 23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0 16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9 5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1"></svg:path>`,
})
export class FaSolidGlobeEuropeIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGolfBallIcon],svg[fa-solid-golf-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 416h224c0 17.7-14.3 32-32 32h-16c-17.7 0-32 14.3-32 32v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-20c0-17.7-14.3-32-32-32h-16c-17.7 0-32-14.3-32-32m320-208c0 74.2-39 139.2-97.5 176h-221C39 347.2 0 282.2 0 208C0 93.1 93.1 0 208 0s208 93.1 208 208m-180.1 43.9c18.3 0 33.1-14.8 33.1-33.1c0-14.4-9.3-26.3-22.1-30.9c9.6 26.8-15.6 51.3-41.9 41.9c4.6 12.8 16.5 22.1 30.9 22.1m49.1 46.9c0-14.4-9.3-26.3-22.1-30.9c9.6 26.8-15.6 51.3-41.9 41.9c4.6 12.8 16.5 22.1 30.9 22.1c18.3 0 33.1-14.9 33.1-33.1m64-64c0-14.4-9.3-26.3-22.1-30.9c9.6 26.8-15.6 51.3-41.9 41.9c4.6 12.8 16.5 22.1 30.9 22.1c18.3 0 33.1-14.9 33.1-33.1"></svg:path>`,
})
export class FaSolidGolfBallIcon {
  readonly viewBox = input("0 0 416 512")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGopuramIcon],svg[fa-solid-gopuram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 352h-16V240c0-8.8-7.2-16-16-16h-16v-80c0-8.8-7.2-16-16-16h-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16S96 7.2 96 16v112H80c-8.8 0-16 7.2-16 16v80H48c-8.8 0-16 7.2-16 16v112H16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h80V352h32V224h32v-96h32v96h-32v128h-32v160h80v-80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v80h80V352h-32V224h-32v-96h32v96h32v128h32v160h80c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16M232 176c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v48h-48zm56 176h-64v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"></svg:path>`,
})
export class FaSolidGopuramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGraduationCapIcon],svg[fa-solid-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87c.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6M352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47z"></svg:path>`,
})
export class FaSolidGraduationCapIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGreaterThanIcon],svg[fa-solid-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1L18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32 32 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01"></svg:path>`,
})
export class FaSolidGreaterThanIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGreaterThanEqualIcon],svg[fa-solid-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m55.22 107.69l175.56 68.09l-175.44 68.05c-18.39 6.03-27.88 24.39-21.2 41l12.09 30.08c6.68 16.61 26.99 25.19 45.38 19.15L393.02 214.2c13.77-4.52 22.98-16.61 22.98-30.17v-15.96c0-13.56-9.21-25.65-22.98-30.17L91.3 17.92c-18.29-6-38.51 2.53-45.15 19.06L34.12 66.9c-6.64 16.53 2.81 34.79 21.1 40.79M424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24"></svg:path>`,
})
export class FaSolidGreaterThanEqualIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrimaceIcon],svg[fa-solid-grimace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M144 400h-8c-17.7 0-32-14.3-32-32v-8h40zm0-56h-40v-8c0-17.7 14.3-32 32-32h8zm-8-136c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32m72 192h-48v-40h48zm0-56h-48v-40h48zm64 56h-48v-40h48zm0-56h-48v-40h48zm64 56h-48v-40h48zm0-56h-48v-40h48zm-8-104c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m64 128c0 17.7-14.3 32-32 32h-8v-40h40zm0-24h-40v-40h8c17.7 0 32 14.3 32 32z"></svg:path>`,
})
export class FaSolidGrimaceIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinIcon],svg[fa-solid-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m80 256c-60.6 0-134.5-38.3-143.8-93.3c-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6.1 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3"></svg:path>`,
})
export class FaSolidGrinIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinAltIcon],svg[fa-solid-grin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m63.7 128.7c7.6-11.4 24.7-11.7 32.7 0c12.4 18.4 15.1 36.9 15.7 55.3c-.5 18.4-3.3 36.9-15.7 55.3c-7.6 11.4-24.7 11.7-32.7 0c-12.4-18.4-15.1-36.9-15.7-55.3c.5-18.4 3.3-36.9 15.7-55.3m-160 0c7.6-11.4 24.7-11.7 32.7 0c12.4 18.4 15.1 36.9 15.7 55.3c-.5 18.4-3.3 36.9-15.7 55.3c-7.6 11.4-24.7 11.7-32.7 0c-12.4-18.4-15.1-36.9-15.7-55.3c.5-18.4 3.3-36.9 15.7-55.3M248 432c-60.6 0-134.5-38.3-143.8-93.3c-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3"></svg:path>`,
})
export class FaSolidGrinAltIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinBeamIcon],svg[fa-solid-grin-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 144c23.8 0 52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5c3.1-42.1 32-71.4 55.8-71.4m-160 0c23.8 0 52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5c3.1-42.1 32-71.4 55.8-71.4m80 280c-60.6 0-134.5-38.3-143.8-93.3c-2-11.9 9.4-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3"></svg:path>`,
})
export class FaSolidGrinBeamIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinBeamSweatIcon],svg[fa-solid-grin-beam-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 128c26.5 0 48-21 48-47c0-20-28.5-60.4-41.6-77.8c-3.2-4.3-9.6-4.3-12.8 0C436.5 20.6 408 61 408 81c0 26 21.5 47 48 47m0 32c-44.1 0-80-35.4-80-79c0-4.4.3-14.2 8.1-32.2C345 23.1 298.3 8 248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248c0-35.1-7.4-68.4-20.5-98.6c-6.3 1.5-12.7 2.6-19.5 2.6m-128-8c23.8 0 52.7 29.3 56 71.4c.7 8.6-10.8 12-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.4-15.6 4-14.9-4.5c3.1-42.1 32-71.4 55.8-71.4m-160 0c23.8 0 52.7 29.3 56 71.4c.7 8.6-10.8 12-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5c3.1-42.1 32-71.4 55.8-71.4m80 280c-60.6 0-134.5-38.3-143.8-93.3c-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.2 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3"></svg:path>`,
})
export class FaSolidGrinBeamSweatIcon {
  readonly viewBox = input("0 0 504 512")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinHeartsIcon],svg[fa-solid-grin-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M90.4 183.6c6.7-17.6 26.7-26.7 44.9-21.9l7.1 1.9l2-7.1c5-18.1 22.8-30.9 41.5-27.9c21.4 3.4 34.4 24.2 28.8 44.5L195.3 243c-1.2 4.5-5.9 7.2-10.5 6l-70.2-18.2c-20.4-5.4-31.9-27-24.2-47.2M248 432c-60.6 0-134.5-38.3-143.8-93.3c-2-11.8 9.2-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.6 22.6 6.1 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3m133.4-201.3l-70.2 18.2c-4.5 1.2-9.2-1.5-10.5-6L281.3 173c-5.6-20.3 7.4-41.1 28.8-44.5c18.6-3 36.4 9.8 41.5 27.9l2 7.1l7.1-1.9c18.2-4.7 38.2 4.3 44.9 21.9c7.7 20.3-3.8 41.9-24.2 47.2"></svg:path>`,
})
export class FaSolidGrinHeartsIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinSquintIcon],svg[fa-solid-grin-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m33.8 189.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 208l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6m-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3zM248 432c-60.6 0-134.5-38.3-143.8-93.3c-2-11.9 9.4-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.2 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3"></svg:path>`,
})
export class FaSolidGrinSquintIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinSquintTearsIcon],svg[fa-solid-grin-squint-tears-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M409.6 111.9c22.6-3.2 73.5-12 88.3-26.8c19.2-19.2 18.9-50.6-.7-70.2S446-5 426.9 14.2c-14.8 14.8-23.5 65.7-26.8 88.3c-.8 5.5 3.9 10.2 9.5 9.4M102.4 400.1c-22.6 3.2-73.5 12-88.3 26.8c-19.1 19.1-18.8 50.6.8 70.2s51 19.9 70.2.7c14.8-14.8 23.5-65.7 26.8-88.3c.8-5.5-3.9-10.2-9.5-9.4m311.7-256.5c-33 3.9-48.6-25.1-45.7-45.7c3.4-24 7.4-42.1 11.5-56.5C285.1-13.4 161.8-.5 80.6 80.6C-.5 161.7-13.4 285 41.4 379.9c14.4-4.1 32.4-8 56.5-11.5c33.2-3.9 48.6 25.2 45.7 45.7c-3.4 24-7.4 42.1-11.5 56.5c94.8 54.8 218.1 41.9 299.3-39.2s94-204.4 39.2-299.3c-14.4 4.1-32.5 8-56.5 11.5M255.7 106c3.3-13.2 22.4-11.5 23.6 1.8l4.8 52.3l52.3 4.8c13.4 1.2 14.9 20.3 1.8 23.6l-90.5 22.6c-8.9 2.2-16.7-5.9-14.5-14.5zm-90.9 230.3L160 284l-52.3-4.8c-13.4-1.2-14.9-20.3-1.8-23.6l90.5-22.6c8.8-2.2 16.7 5.8 14.5 14.5L188.3 338c-3.1 13.2-22.2 11.7-23.5-1.7m215.7 44.2c-29.3 29.3-75.7 50.4-116.7 50.4c-18.9 0-36.6-4.5-51-14.7c-9.8-6.9-8.7-21.8 2-27.2c28.3-14.6 63.9-42.4 97.8-76.3s61.7-69.6 76.3-97.8c5.4-10.5 20.2-11.9 27.3-2c32.3 45.3 7.1 124.7-35.7 167.6"></svg:path>`,
})
export class FaSolidGrinSquintTearsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinStarsIcon],svg[fa-solid-grin-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M94.6 168.9l34.9-5l15.5-31.6c2.9-5.8 11-5.8 13.9 0l15.5 31.6l34.9 5c6.2 1 8.9 8.6 4.3 13.2l-25.4 24.6l6 34.9c1 6.2-5.3 11-11 7.9L152 233.3l-31.3 16.3c-5.7 3.1-12-1.7-11-7.9l6-34.9l-25.4-24.6c-4.6-4.7-1.9-12.3 4.3-13.3M248 432c-60.6 0-134.5-38.3-143.8-93.3c-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3m157.7-249.9l-25.4 24.6l6 34.9c1 6.2-5.3 11-11 7.9L344 233.3l-31.3 16.3c-5.7 3.1-12-1.7-11-7.9l6-34.9l-25.4-24.6c-4.5-4.6-1.9-12.2 4.3-13.2l34.9-5l15.5-31.6c2.9-5.8 11-5.8 13.9 0l15.5 31.6l34.9 5c6.3.9 9 8.5 4.4 13.1"></svg:path>`,
})
export class FaSolidGrinStarsIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinTearsIcon],svg[fa-solid-grin-tears-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102.4 256.1c-22.6 3.2-73.5 12-88.3 26.8c-19.1 19.1-18.8 50.6.8 70.2s51 19.9 70.2.7c14.8-14.8 23.5-65.7 26.8-88.3c.8-5.5-3.9-10.2-9.5-9.4m523.4 26.8c-14.8-14.8-65.7-23.5-88.3-26.8c-5.5-.8-10.3 3.9-9.5 9.5c3.2 22.6 12 73.5 26.8 88.3c19.2 19.2 50.6 18.9 70.2-.7s20-51.2.8-70.3m-129.4-12.8c-3.8-26.6 19.1-49.5 45.7-45.7c8.9 1.3 16.8 2.7 24.3 4.1C552.7 104.5 447.7 8 320 8S87.3 104.5 73.6 228.5c7.5-1.4 15.4-2.8 24.3-4.1c33.2-3.9 48.6 25.3 45.7 45.7c-11.8 82.3-29.9 100.4-35.8 106.4c-.9.9-2 1.6-3 2.5c42.7 74.6 123 125 215.2 125s172.5-50.4 215.2-125.1c-1-.9-2.1-1.5-3-2.5c-5.9-5.9-24-24-35.8-106.3M400 152c23.8 0 52.7 29.3 56 71.4c.7 8.6-10.8 12-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5c3.1-42.1 32-71.4 55.8-71.4m-160 0c23.8 0 52.7 29.3 56 71.4c.7 8.6-10.8 12-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5c3.1-42.1 32-71.4 55.8-71.4m80 280c-60.6 0-134.5-38.3-143.8-93.3c-2-11.7 9.2-21.6 20.7-17.9C227.1 330.5 272 336 320 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9c-9.3 55-83.2 93.3-143.8 93.3"></svg:path>`,
})
export class FaSolidGrinTearsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinTongueIcon],svg[fa-solid-grin-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256c0 106.3 67 196.7 161 232c-5.6-12.2-9-25.7-9-40v-45.5c-24.7-16.2-43.5-38.1-47.8-63.8c-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.6 22.6 6.1 20.7 17.9c-4.3 25.7-23.1 47.6-47.8 63.8V448c0 14.3-3.4 27.8-9 40c94-35.3 161-125.7 161-232C496 119 385 8 248 8m-80 232c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m-34.9 134.6c-14.4-6.5-31.1 2.2-34.6 17.6l-1.8 7.8c-2.1 9.2-15.2 9.2-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6c-.9.4.3-.2-18.9 9.4v63c0 35.2 28 64.5 63.1 64.9c35.7.5 64.9-28.4 64.9-64v-64c-19.5-9.6-18.2-8.9-19-9.3"></svg:path>`,
})
export class FaSolidGrinTongueIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinTongueSquintIcon],svg[fa-solid-grin-tongue-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M293.1 374.6c-14.4-6.5-31.1 2.2-34.6 17.6l-1.8 7.8c-2.1 9.2-15.2 9.2-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6c-.9.4.3-.2-18.9 9.4v63c0 35.2 28 64.5 63.1 64.9c35.7.5 64.9-28.4 64.9-64v-64c-19.5-9.6-18.2-8.9-19-9.3M248 8C111 8 0 119 0 256c0 106.3 67 196.7 161 232c-5.6-12.2-9-25.7-9-40v-45.5c-24.7-16.2-43.5-38.1-47.8-63.8c-2-11.8 9.2-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9c-4.3 25.7-23.1 47.6-47.8 63.8V448c0 14.3-3.4 27.8-9 40c94-35.3 161-125.7 161-232C496 119 385 8 248 8m-33.8 210.3l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3l-33.6-40.3c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.7 4.7 7.7 15.9 0 20.6m163 30c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.8-4.7-7.8-15.9 0-20.6l80-48c11.7-6.9 23.9 7.7 15.4 18L343.6 208z"></svg:path>`,
})
export class FaSolidGrinTongueSquintIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinTongueWinkIcon],svg[fa-solid-grin-tongue-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 184c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24M248 8C111 8 0 119 0 256c0 106.3 67 196.7 161 232c-5.6-12.2-9-25.7-9-40v-45.5c-24.7-16.2-43.5-38.1-47.8-63.8c-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9c-4.3 25.7-23.1 47.6-47.8 63.8V448c0 14.3-3.4 27.8-9 40c94-35.3 161-125.7 161-232C496 119 385 8 248 8m-56 225l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L112 233c-8.5 7.4-21.6.3-19.8-10.8c4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c1.6 11.1-11.6 18.2-20 10.8m152 39c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64m-50.9 102.6c-14.4-6.5-31.1 2.2-34.6 17.6l-1.8 7.8c-2.1 9.2-15.2 9.2-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6c-.9.4.3-.2-18.9 9.4v63c0 35.2 28 64.5 63.1 64.9c35.7.5 64.9-28.4 64.9-64v-64c-19.5-9.6-18.2-8.9-19-9.3"></svg:path>`,
})
export class FaSolidGrinTongueWinkIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGrinWinkIcon],svg[fa-solid-grin-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8S0 119 0 256m200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32m168 25l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8c4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.6 11-11.5 18.2-20 10.8m-243.1 87.8C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6 20.7 17.9c-9.2 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3c-2-11.9 9.3-21.6 20.7-17.9"></svg:path>`,
})
export class FaSolidGrinWinkIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGripHorizontalIcon],svg[fa-solid-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32m160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32m160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32M96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32m160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32m160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidGripHorizontalIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGripLinesIcon],svg[fa-solid-grip-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidGripLinesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGripLinesVerticalIcon],svg[fa-solid-grip-lines-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16m128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16"></svg:path>`,
})
export class FaSolidGripLinesVerticalIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGripVerticalIcon],svg[fa-solid-grip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32m0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32m0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32M288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32m0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32m0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidGripVerticalIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidGuitarIcon],svg[fa-solid-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.63 39L473 9.37a32 32 0 0 0-45.26 0L381.46 55.7a35.14 35.14 0 0 0-8.53 13.79L360.77 106l-76.26 76.26c-12.16-8.76-25.5-15.74-40.1-19.14c-33.45-7.78-67-.88-89.88 22a82.45 82.45 0 0 0-20.24 33.47c-6 18.56-23.21 32.69-42.15 34.46c-23.7 2.27-45.73 11.45-62.61 28.44C-16.11 327-7.9 409 47.58 464.45S185 528 230.56 482.52c17-16.88 26.16-38.9 28.45-62.71c1.76-18.85 15.89-36.13 34.43-42.14a82.6 82.6 0 0 0 33.48-20.25c22.87-22.88 29.74-56.36 22-89.75c-3.39-14.64-10.37-28-19.16-40.2L406 151.23l36.48-12.16a35.14 35.14 0 0 0 13.79-8.53l46.33-46.32a32 32 0 0 0 .03-45.22M208 352a48 48 0 1 1 48-48a48 48 0 0 1-48 48"></svg:path>`,
})
export class FaSolidGuitarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHSquareIcon],svg[fa-solid-h-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48m-112 48h-32c-8.837 0-16 7.163-16 16v80H160v-80c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v224c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-80h128v80c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V144c0-8.837-7.163-16-16-16"></svg:path>`,
})
export class FaSolidHSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHamburgerIcon],svg[fa-solid-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96m16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16M58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224M384 112a16 16 0 1 1-16 16a16 16 0 0 1 16-16M256 80a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-128 32a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class FaSolidHamburgerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHammerIcon],svg[fa-solid-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31l-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62m-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41z"></svg:path>`,
})
export class FaSolidHammerIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHamsaIcon],svg[fa-solid-hamsa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M509.34 307.25C504.28 295.56 492.75 288 480 288h-64V80c0-22-18-40-40-40s-40 18-40 40v134c0 5.52-4.48 10-10 10h-20c-5.52 0-10-4.48-10-10V40c0-22-18-40-40-40s-40 18-40 40v174c0 5.52-4.48 10-10 10h-20c-5.52 0-10-4.48-10-10V80c0-22-18-40-40-40S96 58 96 80v208H32c-12.75 0-24.28 7.56-29.34 19.25a31.97 31.97 0 0 0 5.94 34.58l102.69 110.03C146.97 490.08 199.69 512 256 512s109.03-21.92 144.72-60.14L503.4 341.83a31.97 31.97 0 0 0 5.94-34.58M256 416c-53.02 0-96-64-96-64s42.98-64 96-64s96 64 96 64s-42.98 64-96 64m0-96c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32"></svg:path>`,
})
export class FaSolidHamsaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandHoldingIcon],svg[fa-solid-hand-holding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9"></svg:path>`,
})
export class FaSolidHandHoldingIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandHoldingHeartIcon],svg[fa-solid-hand-holding-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8c-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9"></svg:path>`,
})
export class FaSolidHandHoldingHeartIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandHoldingMedicalIcon],svg[fa-solid-hand-holding-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.88 175.82h64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h-64v-64a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v64h-64a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16m408.19 160.31a39.91 39.91 0 0 0-55.93-8.47l-119.67 88.18H271.86a16 16 0 0 1 0-32h78.24c16 0 30.75-10.87 33.37-26.61a32.06 32.06 0 0 0-31.62-37.38h-160a117.7 117.7 0 0 0-74.12 26.25l-46.5 37.74H15.87a16.11 16.11 0 0 0-16 16v96a16.11 16.11 0 0 0 16 16h347a104.8 104.8 0 0 0 61.7-20.27L559.6 392a40 40 0 0 0 8.47-55.87"></svg:path>`,
})
export class FaSolidHandHoldingMedicalIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandHoldingUsdIcon],svg[fa-solid-hand-holding-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m271.06 144.3l54.27 14.3a8.59 8.59 0 0 1 6.63 8.1c0 4.6-4.09 8.4-9.12 8.4h-35.6a30 30 0 0 1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3 2l-19 17.5a11.7 11.7 0 0 0-2.25 2.66a11.42 11.42 0 0 0 3.88 15.74a83.8 83.8 0 0 0 34.51 11.5V240c0 8.8 7.83 16 17.37 16h17.37c9.55 0 17.38-7.2 17.38-16v-17.6c32.93-3.6 57.84-31 53.5-63c-3.15-23-22.46-41.3-46.56-47.7l-54.27-14.3a8.59 8.59 0 0 1-6.63-8.1c0-4.6 4.09-8.4 9.12-8.4h35.6A30 30 0 0 1 332 83.1c5.23 2.2 11.28 1.7 15.3-2l19-17.5a11.3 11.3 0 0 0 2.17-2.6a11.43 11.43 0 0 0-3.84-15.78a83.8 83.8 0 0 0-34.52-11.5V16c0-8.8-7.82-16-17.37-16h-17.37C285.82 0 278 7.2 278 16v17.6c-32.89 3.6-57.85 31-53.51 63c3.14 23 22.51 41.3 46.57 47.7m294.21 183.8c-11.8-10.7-30.2-10-42.6 0l-92.4 73.9a63.64 63.64 0 0 1-40 14H272a16 16 0 0 1 0-32h78.29c15.9 0 30.71-10.9 33.25-26.6a31 31 0 0 0 .46-5.46A32 32 0 0 0 352 320H192a117.66 117.66 0 0 0-74.1 26.29L71.4 384H16a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h356.77a64 64 0 0 0 40-14L564 377a32 32 0 0 0 1.28-48.9Z"></svg:path>`,
})
export class FaSolidHandHoldingUsdIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandHoldingWaterIcon],svg[fa-solid-hand-holding-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c53 0 96-42.1 96-94c0-40-57.1-120.7-83.2-155.6c-6.4-8.5-19.2-8.5-25.6 0C249.1 41.3 192 122 192 162c0 51.9 43 94 96 94m277.3 72.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9"></svg:path>`,
})
export class FaSolidHandHoldingWaterIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandLizardIcon],svg[fa-solid-hand-lizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 480h192V363.778a96 96 0 0 0-14.833-51.263L398.127 54.368A48 48 0 0 0 357.544 32H24C10.745 32 0 42.745 0 56v16c0 30.928 25.072 56 56 56h229.981c12.844 0 21.556 13.067 16.615 24.923l-21.41 51.385A32 32 0 0 1 251.648 224H128c-35.346 0-64 28.654-64 64v8c0 13.255 10.745 24 24 24h147.406a48 48 0 0 1 25.692 7.455l111.748 70.811A24 24 0 0 1 384 418.539z"></svg:path>`,
})
export class FaSolidHandLizardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandMiddleFingerIcon],svg[fa-solid-hand-middle-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.93 317.12a37.33 37.33 0 0 0-28.28-36.19L416 272v-49.59c0-11.44-9.69-21.29-23.15-23.54l-38.4-6.4C336.63 189.5 320 200.86 320 216v32a8 8 0 0 1-16 0V50c0-26.28-20.25-49.2-46.52-50A48 48 0 0 0 208 48v200a8 8 0 0 1-16 0v-32c0-15.15-16.63-26.51-34.45-23.54l-30.68 5.12c-18 3-30.87 16.12-30.87 31.38V376a8 8 0 0 1-16 0v-76l-27.36 15A37.34 37.34 0 0 0 32 348.4v73.47a37.3 37.3 0 0 0 10.93 26.39l30.93 30.93A112 112 0 0 0 153.05 512h215A112 112 0 0 0 480 400z"></svg:path>`,
})
export class FaSolidHandMiddleFingerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPaperIcon],svg[fa-solid-hand-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007C209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823c-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192 192 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993"></svg:path>`,
})
export class FaSolidHandPaperIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPeaceIcon],svg[fa-solid-hand-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 216c-22.092 0-40 17.909-40 40h-8v-32c0-22.091-17.908-40-40-40s-40 17.909-40 40v32h-8V48c0-26.51-21.49-48-48-48s-48 21.49-48 48v208h-13.572L92.688 78.449C82.994 53.774 55.134 41.63 30.461 51.324C5.787 61.017-6.356 88.877 3.337 113.551l74.765 190.342l-31.09 24.872c-15.381 12.306-19.515 33.978-9.741 51.081l64 112A40 40 0 0 0 136 512h240c18.562 0 34.686-12.77 38.937-30.838l32-136A40 40 0 0 0 448 336v-80c0-22.091-17.908-40-40-40"></svg:path>`,
})
export class FaSolidHandPeaceIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPointDownIcon],svg[fa-solid-hand-point-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.826 467.2V317.966c-8.248 5.841-16.558 10.57-24.918 14.153C35.098 345.752-.014 322.222 0 288c.008-18.616 10.897-32.203 29.092-40c28.286-12.122 64.329-78.648 77.323-107.534c7.956-17.857 25.479-28.453 43.845-28.464l.001-.002h171.526c11.812 0 21.897 8.596 23.703 20.269c7.25 46.837 38.483 61.76 38.315 123.731c-.007 2.724.195 13.254.195 16c0 50.654-22.122 81.574-71.263 72.6c-9.297 18.597-39.486 30.738-62.315 16.45c-21.177 24.645-53.896 22.639-70.944 6.299V467.2c0 24.15-20.201 44.8-43.826 44.8c-23.283 0-43.826-21.35-43.826-44.8M112 72V24c0-13.255 10.745-24 24-24h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24m212-24c0-11.046-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20"></svg:path>`,
})
export class FaSolidHandPointDownIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPointLeftIcon],svg[fa-solid-hand-point-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.8 155.826h149.234c-5.841-8.248-10.57-16.558-14.153-24.918C166.248 99.098 189.778 63.986 224 64c18.616.008 32.203 10.897 40 29.092c12.122 28.286 78.648 64.329 107.534 77.323c17.857 7.956 28.453 25.479 28.464 43.845l.002.001v171.526c0 11.812-8.596 21.897-20.269 23.703c-46.837 7.25-61.76 38.483-123.731 38.315c-2.724-.007-13.254.195-16 .195c-50.654 0-81.574-22.122-72.6-71.263c-18.597-9.297-30.738-39.486-16.45-62.315c-24.645-21.177-22.639-53.896-6.299-70.944H44.8c-24.15 0-44.8-20.201-44.8-43.826c0-23.283 21.35-43.826 44.8-43.826M440 176h48c13.255 0 24 10.745 24 24v192c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24m24 212c11.046 0 20-8.954 20-20s-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20"></svg:path>`,
})
export class FaSolidHandPointLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPointRightIcon],svg[fa-solid-hand-point-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944c14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195c-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845c28.886-12.994 95.413-49.038 107.534-77.323c7.797-18.194 21.384-29.084 40-29.092c34.222-.014 57.752 35.098 44.119 66.908c-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826M96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24M68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20"></svg:path>`,
})
export class FaSolidHandPointRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPointUpIcon],svg[fa-solid-hand-point-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299c22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16c.168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264C10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119c8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8M136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24m168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20s-8.954-20-20-20"></svg:path>`,
})
export class FaSolidHandPointUpIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandPointerIcon],svg[fa-solid-hand-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40 40 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876c17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40m-256 80h-8v96h8zm88 0h-8v96h8zm88 0h-8v96h8z"></svg:path>`,
})
export class FaSolidHandPointerIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandRockIcon],svg[fa-solid-hand-rock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464.8 80c-26.9-.4-48.8 21.2-48.8 48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8c-26.9-.4-48.8 21.2-48.8 48v32h-8V80.8c0-26.3-20.9-48.3-47.2-48.8c-26.9-.4-48.8 21.2-48.8 48v48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8c-26.9-.4-48.8 21.2-48.8 48v136l-8-7.1v-48.1c0-26.3-20.9-48.3-47.2-48.8C21.9 127.6 0 149.2 0 176v66.4c0 27.4 11.7 53.5 32.2 71.8l111.7 99.3c10.2 9.1 16.1 22.2 16.1 35.9v6.7c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24v-2.9c0-12.8 2.6-25.5 7.5-37.3l49-116.3c5-11.8 7.5-24.5 7.5-37.3V128.8c0-26.3-20.9-48.4-47.2-48.8"></svg:path>`,
})
export class FaSolidHandRockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandScissorsIcon],svg[fa-solid-hand-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 440c0-22.092 17.909-40 40-40v-8h-32c-22.091 0-40-17.908-40-40s17.909-40 40-40h32v-8H48c-26.51 0-48-21.49-48-48s21.49-48 48-48h208v-13.572l-177.551-69.74c-24.674-9.694-36.818-37.555-27.125-62.228s37.554-36.817 62.228-27.124l190.342 74.765l24.872-31.09c12.306-15.381 33.978-19.515 51.081-9.741l112 64A40 40 0 0 1 512 168v240c0 18.562-12.77 34.686-30.838 38.937l-136 32A40 40 0 0 1 336 480h-80c-22.091 0-40-17.908-40-40"></svg:path>`,
})
export class FaSolidHandScissorsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandSparklesIcon],svg[fa-solid-hand-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.66 170.64h.09l49.55-20.65a7.32 7.32 0 0 0 3.68-6a7.29 7.29 0 0 0-3.68-6l-49.57-20.67h-.07L86 67.68a6.66 6.66 0 0 0-11.92 0l-20.7 49.63h-.05L3.7 138a7.29 7.29 0 0 0-3.7 6a7.32 7.32 0 0 0 3.68 6l49.59 20.6h.07L74 220.26a6.65 6.65 0 0 0 11.92 0l20.69-49.62Zm364.72 296.77l-1-.42l-1-.5a38.67 38.67 0 0 1 0-69.14l1-.49l1-.43l37.49-15.63l15.63-37.48l.41-1l.47-.95c3.85-7.74 10.58-13.63 18.35-17.34c0-1.33.25-2.69.27-4V144a32 32 0 0 0-64 0v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64a32 32 0 0 0-64 0v152a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V32a32 32 0 0 0-64 0v184a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64a32 32 0 0 0-64 0v241l-23.59-32.49a40 40 0 0 0-64.71 47.09l125.6 172.61A48.07 48.07 0 0 0 268.09 512H465.7c19.24 0 35.65-11.73 43.24-28.79l-.07-.17ZM349.79 339.52L320 351.93l-12.42 29.78a4 4 0 0 1-7.15 0L288 351.93l-29.79-12.41a4 4 0 0 1 0-7.16L288 319.94l12.42-29.78a4 4 0 0 1 7.15 0L320 319.94l29.79 12.42a4 4 0 0 1 0 7.16M640 431.91a7.28 7.28 0 0 0-3.68-6l-49.57-20.67h-.07L566 355.63a6.66 6.66 0 0 0-11.92 0l-20.7 49.63h-.05L483.7 426a7.28 7.28 0 0 0-3.68 6a7.29 7.29 0 0 0 3.68 5.95l49.57 20.67h.07L554 508.21a6.65 6.65 0 0 0 11.92 0l20.69-49.62h.09l49.55-20.66a7.29 7.29 0 0 0 3.68-5.95Z"></svg:path>`,
})
export class FaSolidHandSparklesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandSpockIcon],svg[fa-solid-hand-spock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m510.9 145.27l-68.296 286.824A103.995 103.995 0 0 1 341.437 512H214.074a135.97 135.97 0 0 1-93.185-36.953L12.591 373.127a39.992 39.992 0 0 1 54.812-58.25l60.593 57.026a283.3 283.3 0 0 0-11.67-80.468L73.637 147.36a40.006 40.006 0 1 1 76.719-22.719l37.154 125.395a8.331 8.331 0 0 0 16.057-4.441l-50.305-195.64a39.996 39.996 0 1 1 77.468-19.938l56.095 218.158a10.42 10.42 0 0 0 20.3-.501L344.808 63.97a40.05 40.05 0 0 1 51.302-30.09c19.86 6.3 30.863 27.674 26.676 48.085l-33.839 164.966a7.552 7.552 0 0 0 14.744 3.267l29.397-123.459a39.994 39.994 0 1 1 77.813 18.531"></svg:path>`,
})
export class FaSolidHandSpockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandsIcon],svg[fa-solid-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.8 230.4c-10.6-14.1-30.7-17-44.8-6.4s-17 30.7-6.4 44.8l38.1 50.8c4.8 6.4 4.1 15.3-1.5 20.9l-12.8 12.8c-6.7 6.7-17.6 6.2-23.6-1.1L64 244.4V96c0-17.7-14.3-32-32-32S0 78.3 0 96v218.4c0 10.9 3.7 21.5 10.5 30l104.1 134.3c5 6.5 8.4 13.9 10.4 21.7c1.8 6.9 8.1 11.6 15.3 11.6H272c8.8 0 16-7.2 16-16V384c0-27.7-9-54.6-25.6-76.8zM608 64c-17.7 0-32 14.3-32 32v148.4l-89.8 107.8c-6 7.2-17 7.7-23.6 1.1l-12.8-12.8c-5.6-5.6-6.3-14.5-1.5-20.9l38.1-50.8c10.6-14.1 7.7-34.2-6.4-44.8s-34.2-7.7-44.8 6.4l-57.6 76.8C361 329.4 352 356.3 352 384v112c0 8.8 7.2 16 16 16h131.7c7.1 0 13.5-4.7 15.3-11.6c2-7.8 5.4-15.2 10.4-21.7l104.1-134.3c6.8-8.5 10.5-19.1 10.5-30V96c0-17.7-14.3-32-32-32"></svg:path>`,
})
export class FaSolidHandsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandsHelpingIcon],svg[fa-solid-hands-helping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24m147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7"></svg:path>`,
})
export class FaSolidHandsHelpingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandsWashIcon],svg[fa-solid-hands-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 224a48 48 0 1 0-48-48a48 48 0 0 0 48 48m-184.53-45.55A56.8 56.8 0 0 1 328 176a56 56 0 0 1 19 3.49l15.35-48.61A24 24 0 0 0 342 99.74c-11.53-1.35-22.21 6.44-25.71 17.51l-20.9 66.17ZM93.65 386.33c.8-.19 1.54-.54 2.35-.71v-25.69a156 156 0 0 1 107.06-148l73.7-22.76l34.16-108.12a24 24 0 0 0-20.33-31.11c-11.53-1.34-22.22 6.45-25.72 17.52l-33.45 106.42a8 8 0 0 1-15.26-4.83l43.37-137.79A24 24 0 0 0 239.2.15C227.67-1.19 217 6.6 213.49 17.66l-47.93 151.71a8 8 0 1 1-15.26-4.82l38.56-122a24 24 0 0 0-20.33-31.11C157 10 146.32 17.83 142.82 28.9l-60 189.85l-2.06-50.05a24 24 0 0 0-23.86-24.15c-13.23-.05-24.72 10.54-24.9 23.86v112.73a123.69 123.69 0 0 0 61.65 105.19M519.1 336H360a8 8 0 0 1 0-16h128a24 24 0 0 0 23.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24H288l47.09-17.06a24 24 0 0 0-14.18-45.88l-107.72 33.25A123.88 123.88 0 0 0 128 360v25.65a79.78 79.78 0 0 1 58 108.63A118.9 118.9 0 0 0 248 512h208a24 24 0 0 0 23.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24H360a8 8 0 0 1 0-16h128a24 24 0 0 0 23.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24H360a8 8 0 0 1 0-16h160a24 24 0 0 0 23.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24M416 64a32 32 0 1 0-32-32a32 32 0 0 0 32 32M112 416a48 48 0 1 0 48 48a48 48 0 0 0-48-48"></svg:path>`,
})
export class FaSolidHandsWashIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandshakeIcon],svg[fa-solid-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4M544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16M0 384h64c17.7 0 32-14.3 32-32V128.2H0zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16m435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1"></svg:path>`,
})
export class FaSolidHandshakeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandshakeAltSlashIcon],svg[fa-solid-handshake-alt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358.59 195.6L504.2 313.8a63.4 63.4 0 0 1 22.21 37.91H624a16.05 16.05 0 0 0 16-16v-191.8A16 16 0 0 0 624 128H512l-54.59-54.59A32 32 0 0 0 434.8 64h-85.89a32 32 0 0 0-21.61 8.41l-88.12 80.68l-25.69-19.85L289.09 64H205.3a32 32 0 0 0-22.6 9.41l-20.34 20.3L45.47 3.38A16 16 0 0 0 23 6.19L3.38 31.46a16 16 0 0 0 2.81 22.45l588.35 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.81-22.45L303.4 202.72l32.69-29.92l27-24.7a16 16 0 0 1 21.61 23.61ZM16 128a16.05 16.05 0 0 0-16 16v191.91a16 16 0 0 0 16 16h130.3l90.5 81.89a64 64 0 0 0 90-9.3l.2-.2l17.91 15.5a37.16 37.16 0 0 0 52.29-5.39l8.8-10.82L23.56 128Z"></svg:path>`,
})
export class FaSolidHandshakeAltSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHandshakeSlashIcon],svg[fa-solid-handshake-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128.21V384h64a32 32 0 0 0 32-32V184l-72.17-55.79ZM48 320.1a16 16 0 1 1-16 16a16 16 0 0 1 16-16m80 31.81h18.3l90.5 81.89a64 64 0 0 0 90-9.3l.2-.2l17.91 15.5a37.16 37.16 0 0 0 52.29-5.39l8.8-10.82l-278-214.87Zm416-223.7V352.1a32 32 0 0 0 32 32h64V128.21Zm48 223.89a16 16 0 1 1 16-16a16 16 0 0 1-16 16M303.33 202.67l59.58-54.57a16 16 0 0 1 21.59 23.61l-26.09 23.89L504 313.8a73 73 0 0 1 7.91 7.7V128L457.3 73.41A31.76 31.76 0 0 0 434.7 64h-85.9a31.93 31.93 0 0 0-21.6 8.41l-88.07 80.64l-25.64-19.81L289.09 64H205.3a32 32 0 0 0-22.6 9.41l-20.34 20.31L45.47 3.38A16 16 0 0 0 23 6.19L3.38 31.46a16 16 0 0 0 2.81 22.45l588.34 454.72a16 16 0 0 0 22.47-2.81l19.65-25.27a16 16 0 0 0-2.82-22.45Z"></svg:path>`,
})
export class FaSolidHandshakeSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHanukiahIcon],svg[fa-solid-hanukiah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 160c-4.42 0-8 3.58-8 8v120h32V168c0-4.42-3.58-8-8-8zm-64 0c-4.42 0-8 3.58-8 8v120h32V168c0-4.42-3.58-8-8-8zm224 0c-4.42 0-8 3.58-8 8v120h32V168c0-4.42-3.58-8-8-8zm64 0c-4.42 0-8 3.58-8 8v120h32V168c0-4.42-3.58-8-8-8zm88 8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v120h32zm-440-8c-4.42 0-8 3.58-8 8v120h32V168c0-4.42-3.58-8-8-8zm520 0h-32c-8.84 0-16 7.16-16 16v112c0 17.67-14.33 32-32 32H352V128c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v192H96c-17.67 0-32-14.33-32-32V176c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v112c0 53.02 42.98 96 96 96h192v64H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16H352v-64h192c53.02 0 96-42.98 96-96V176c0-8.84-7.16-16-16-16m-16-32c13.25 0 24-11.94 24-26.67S608 48 608 48s-24 38.61-24 53.33S594.75 128 608 128m-576 0c13.25 0 24-11.94 24-26.67S32 48 32 48S8 86.61 8 101.33S18.75 128 32 128m288-48c13.25 0 24-11.94 24-26.67S320 0 320 0s-24 38.61-24 53.33S306.75 80 320 80m-208 48c13.25 0 24-11.94 24-26.67S112 48 112 48s-24 38.61-24 53.33S98.75 128 112 128m64 0c13.25 0 24-11.94 24-26.67S176 48 176 48s-24 38.61-24 53.33S162.75 128 176 128m64 0c13.25 0 24-11.94 24-26.67S240 48 240 48s-24 38.61-24 53.33S226.75 128 240 128m160 0c13.25 0 24-11.94 24-26.67S400 48 400 48s-24 38.61-24 53.33S386.75 128 400 128m64 0c13.25 0 24-11.94 24-26.67S464 48 464 48s-24 38.61-24 53.33S450.75 128 464 128m64 0c13.25 0 24-11.94 24-26.67S528 48 528 48s-24 38.61-24 53.33S514.75 128 528 128"></svg:path>`,
})
export class FaSolidHanukiahIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHardHatIcon],svg[fa-solid-hard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidHardHatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHashtagIcon],svg[fa-solid-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891M261.889 320h-98.634l22.857-128h98.634z"></svg:path>`,
})
export class FaSolidHashtagIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHatCowboyIcon],svg[fa-solid-hat-cowboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490 296.9C480.51 239.51 450.51 64 392.3 64c-14 0-26.49 5.93-37 14a58.21 58.21 0 0 1-70.58 0c-10.51-8-23-14-37-14c-58.2 0-88.2 175.47-97.71 232.88C188.81 309.47 243.73 320 320 320s131.23-10.51 170-23.1m142.9-37.18a16 16 0 0 0-19.75 1.5c-1 .9-101.27 90.78-293.16 90.78c-190.82 0-292.22-89.94-293.24-90.84A16 16 0 0 0 1 278.53C1.73 280.55 78.32 480 320 480s318.27-199.45 319-201.47a16 16 0 0 0-6.09-18.81z"></svg:path>`,
})
export class FaSolidHatCowboyIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHatCowboySideIcon],svg[fa-solid-hat-cowboy-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M260.8 291.06c-28.63-22.94-62-35.06-96.4-35.06C87 256 21.47 318.72 1.43 412.06c-3.55 16.6-.43 33.83 8.57 47.3C18.75 472.47 31.83 480 45.88 480H592c-103.21 0-155-37.07-233.19-104.46zm234.65-18.29L468.4 116.2A64 64 0 0 0 392 64.41L200.85 105a64 64 0 0 0-50.35 55.79L143.61 226c6.9-.83 13.7-2 20.79-2c41.79 0 82 14.55 117.29 42.82l98 84.48C450.76 412.54 494.9 448 592 448a48 48 0 0 0 48-48c0-25.39-29.6-119.33-144.55-127.23"></svg:path>`,
})
export class FaSolidHatCowboySideIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHatWizardIcon],svg[fa-solid-hat-wizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-304-64l-64-32l64-32l32-64l32 64l64 32l-64 32l-16 32h208l-86.41-201.63a63.96 63.96 0 0 1-1.89-45.45L416 0L228.42 107.19a128 128 0 0 0-53.46 59.15L64 416h144zm64-224l16-32l16 32l32 16l-32 16l-16 32l-16-32l-32-16z"></svg:path>`,
})
export class FaSolidHatWizardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHddIcon],svg[fa-solid-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48m-48-80a79.6 79.6 0 0 1 30.777 6.165L462.25 85.374A48 48 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.6 79.6 0 0 1 48 224zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class FaSolidHddIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadSideCoughIcon],svg[fa-solid-head-side-cough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M616 304a24 24 0 1 0-24-24a24 24 0 0 0 24 24m-64 112a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-64-56a24 24 0 1 0 24 24a24 24 0 0 0-24-24m128 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0-104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-64-40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-74.78-45c-21-47.12-48.5-151.75-73.12-186.75A208.13 208.13 0 0 0 234.1 0H192C86 0 0 86 0 192c0 56.75 24.75 107.62 64 142.88V512h224v-32h64a64 64 0 0 0 64-64h-96a32 32 0 0 1 0-64h96v-32h32a32 32 0 0 0 29.22-45M288 224a32 32 0 1 1 32-32a32.07 32.07 0 0 1-32 32"></svg:path>`,
})
export class FaSolidHeadSideCoughIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadSideCoughSlashIcon],svg[fa-solid-head-side-cough-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M454.11 319.21c19.56-3.81 31.62-25 23.11-44.21c-21-47.12-48.5-151.75-73.12-186.75A208.13 208.13 0 0 0 234.1 0H192A190.64 190.64 0 0 0 84.18 33.3L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.35 454.72a16 16 0 0 0 22.47-2.81l19.64-25.27a16 16 0 0 0-2.81-22.45ZM313.39 210.45L263.61 172c5.88-7.14 14.43-12 24.36-12a32.06 32.06 0 0 1 32 32c.03 7-2.73 13.17-6.58 18.45M616 304a24 24 0 1 0-24-24a24 24 0 0 0 24 24m-64 64a24 24 0 1 0-24-24a24 24 0 0 0 24 24m-264 16a32 32 0 0 1 32-32h19.54L20.73 105.59A190.86 190.86 0 0 0 0 192c0 56.75 24.75 107.62 64 142.88V512h224v-32h64a64 64 0 0 0 64-64h-96a32 32 0 0 1-32-32m328-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24"></svg:path>`,
})
export class FaSolidHeadSideCoughSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadSideMaskIcon],svg[fa-solid-head-side-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.15 184.42C-2.17 244.21 23 298.06 64 334.88V512h160V316.51L3.67 156.25a182 182 0 0 0-3.52 28.17M509.22 275c-21-47.12-48.5-151.75-73.12-186.75A208.11 208.11 0 0 0 266.11 0H200C117 0 42.48 50.57 13.25 123.65L239.21 288h272.55a31.35 31.35 0 0 0-2.54-13M320 224a32 32 0 1 1 32-32a32.07 32.07 0 0 1-32 32m16 144h160l16-48H256v192h145.88a64 64 0 0 0 60.71-43.76L464 464H336a16 16 0 0 1 0-32h138.67l10.67-32H336a16 16 0 0 1 0-32"></svg:path>`,
})
export class FaSolidHeadSideMaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadSideVirusIcon],svg[fa-solid-head-side-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 240a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64-64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m301.2 99c-20.93-47.12-48.43-151.73-73.07-186.75A207.9 207.9 0 0 0 266.09 0H192C86 0 0 86 0 192a191.23 191.23 0 0 0 64 142.81V512h256v-64h64a64 64 0 0 0 64-64v-64h32a32 32 0 0 0 29.2-45M368 240h-12.12c-28.51 0-42.79 34.47-22.63 54.63l8.58 8.57a16 16 0 1 1-22.63 22.63l-8.57-8.58c-20.16-20.16-54.63-5.88-54.63 22.63V352a16 16 0 0 1-32 0v-12.12c0-28.51-34.47-42.79-54.63-22.63l-8.57 8.58a16 16 0 0 1-22.63-22.63l8.58-8.57c20.16-20.16 5.88-54.63-22.63-54.63H112a16 16 0 0 1 0-32h12.12c28.51 0 42.79-34.47 22.63-54.63l-8.58-8.57a16 16 0 0 1 22.63-22.63l8.57 8.58c20.16 20.16 54.63 5.88 54.63-22.63V96a16 16 0 0 1 32 0v12.12c0 28.51 34.47 42.79 54.63 22.63l8.57-8.58a16 16 0 0 1 22.63 22.63l-8.58 8.57c-20.16 20.16-5.88 54.63 22.63 54.63H368a16 16 0 0 1 0 32"></svg:path>`,
})
export class FaSolidHeadSideVirusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadingIcon],svg[fa-solid-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></svg:path>`,
})
export class FaSolidHeadingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadphonesIcon],svg[fa-solid-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256"></svg:path>`,
})
export class FaSolidHeadphonesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadphonesAltIcon],svg[fa-solid-headphones-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06m208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12M256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82c114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32"></svg:path>`,
})
export class FaSolidHeadphonesAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadsetIcon],svg[fa-solid-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72c0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0"></svg:path>`,
})
export class FaSolidHeadsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeartIcon],svg[fa-solid-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9"></svg:path>`,
})
export class FaSolidHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeartBrokenIcon],svg[fa-solid-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96 64l48 128l-144-144l96-64l-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4 2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7 0L481 255.9c43.5-53 41.4-132.3-7.3-182.1"></svg:path>`,
})
export class FaSolidHeartBrokenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHeartbeatIcon],svg[fa-solid-heartbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3l-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3l49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1"></svg:path>`,
})
export class FaSolidHeartbeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHelicopterIcon],svg[fa-solid-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 384h272c17.67 0 32-14.33 32-32c0-123.71-100.29-224-224-224V64h176c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H144c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h176v64H112L68.8 70.4C65.78 66.37 61.03 64 56 64H16.01C5.6 64-2.04 73.78.49 83.88L32 192l160 64l86.4 115.2A32 32 0 0 0 304 384m112-188.49C478.55 208.3 528.03 257.44 540.79 320H416zm219.37 263.3l-22.15-22.2c-6.25-6.26-16.24-6.1-22.64.01c-7.09 6.77-13.84 11.25-24.64 11.25H240c-8.84 0-16 7.18-16 16.03v32.06c0 8.85 7.16 16.03 16 16.03h325.94c14.88 0 35.3-.47 68.45-29.52c7.02-6.14 7.57-17.05.98-23.66"></svg:path>`,
})
export class FaSolidHelicopterIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHighlighterIcon],svg[fa-solid-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 479.98L99.92 512l35.45-35.45l-67.04-67.04zm124.61-240.01a36.59 36.59 0 0 0-10.79 38.1l13.05 42.83l-50.93 50.94l96.23 96.23l50.86-50.86l42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64l-173.34-173.34zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13"></svg:path>`,
})
export class FaSolidHighlighterIcon {
  readonly viewBox = input("0 0 544 512")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHikingIcon],svg[fa-solid-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81c2.61.66 5.22.95 7.8.95c14.33 0 27.37-9.7 31.02-24.23l25.24-100.97l-52.78-52.78zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06c-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44M368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.01 32.01 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57l22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16M240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48s21.49 48 48 48"></svg:path>`,
})
export class FaSolidHikingIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHippoIcon],svg[fa-solid-hippo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M581.12 96.2c-27.67-.15-52.5 17.58-76.6 26.62C489.98 88.27 455.83 64 416 64c-11.28 0-21.95 2.3-32 5.88V56c0-13.26-10.75-24-24-24h-16c-13.25 0-24 10.74-24 24v48.98C286.01 79.58 241.24 64 192 64C85.96 64 0 135.64 0 224v240c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16v-70.79C128.35 407.57 166.72 416 208 416s79.65-8.43 112-22.79V464c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V288h128v32c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-32c17.67 0 32-14.33 32-32v-92.02c0-34.09-24.79-67.59-58.88-67.78M448 176c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16"></svg:path>`,
})
export class FaSolidHippoIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHistoryIcon],svg[fa-solid-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468c-59.015.042-113.223-20.53-155.822-54.911c-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184c0-101.705-82.311-184-184-184c-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531m-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21"></svg:path>`,
})
export class FaSolidHistoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHockeyPuckIcon],svg[fa-solid-hockey-puck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 160c0-53 114.6-96 256-96s256 43 256 96s-114.6 96-256 96S0 213 0 160m0 82.2V352c0 53 114.6 96 256 96s256-43 256-96V242.2c-113.4 82.3-398.5 82.4-512 0"></svg:path>`,
})
export class FaSolidHockeyPuckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHollyBerryIcon],svg[fa-solid-holly-berry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48m112-48c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48m-32-48c26.5 0 48-21.5 48-48S250.5 0 224 0s-48 21.5-48 48s21.5 48 48 48m-16.2 139.1c.1-12.4-13.1-20.1-23.8-13.7c-34.3 20.3-71.4 32.7-108.7 36.2c-9.7.9-15.6 11.3-11.6 20.2c6.2 13.9 11.1 28.6 14.7 43.8s-5.3 30.6-20.2 35.1s-30.1 7.6-45.3 9.1c-9.7 1-15.7 11.3-11.7 20.2c15 32.8 22.9 69.5 23 107.7c.1 14.4 15.2 23.1 27.6 16c33.2-19 68.9-30.5 104.8-33.9c9.7-.9 15.6-11.3 11.6-20.2c-6.2-13.9-11.1-28.6-14.7-43.8s5.3-30.6 20.2-35.1s30.1-7.6 45.3-9.1c9.7-1 15.7-11.3 11.7-20.2c-15.5-34.2-23.3-72.5-22.9-112.3M435 365.6c-15.2-1.6-30.3-4.7-45.3-9.1c-14.9-4.5-23.8-19.9-20.2-35.1q5.4-22.8 14.7-43.8c4-8.9-1.9-19.3-11.6-20.2c-37.3-3.5-74.4-15.9-108.7-36.2c-10.7-6.3-23.9 1.4-23.8 13.7c0 1.6-.2 3.2-.2 4.9c.2 33.3 7 65.7 19.9 94c5.7 12.4 5.2 26.6-.6 38.9c4.9 1.2 9.9 2.2 14.8 3.7c14.9 4.5 23.8 19.9 20.2 35.1q-5.4 22.8-14.7 43.8c-4 8.9 1.9 19.3 11.6 20.2c35.9 3.4 71.6 14.9 104.8 33.9c12.5 7.1 27.6-1.6 27.6-16c.2-38.2 8-75 23-107.7c4.3-8.7-1.8-19.1-11.5-20.1"></svg:path>`,
})
export class FaSolidHollyBerryIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHomeIcon],svg[fa-solid-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"></svg:path>`,
})
export class FaSolidHomeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHorseIcon],svg[fa-solid-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M575.92 76.6c-.01-8.13-3.02-15.87-8.58-21.8c-3.78-4.03-8.58-9.12-13.69-14.5c11.06-6.84 19.5-17.49 22.18-30.66C576.85 4.68 572.96 0 567.9 0H447.92c-70.69 0-128 57.31-128 128H160c-28.84 0-54.4 12.98-72 33.11V160c-48.53 0-88 39.47-88 88v56c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-56c0-13.22 6.87-24.39 16.78-31.68c-.21 2.58-.78 5.05-.78 7.68c0 27.64 11.84 52.36 30.54 69.88l-25.72 68.6a63.95 63.95 0 0 0-2.16 37.99l24.85 99.41A15.98 15.98 0 0 0 107.02 512h65.96c10.41 0 18.05-9.78 15.52-19.88l-26.31-105.26l23.84-63.59L320 345.6V496c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V318.22c19.74-20.19 32-47.75 32-78.22c0-.22-.07-.42-.08-.64V136.89l16 7.11l18.9 37.7c7.45 14.87 25.05 21.55 40.49 15.37l32.55-13.02a32 32 0 0 0 20.12-29.74zm-64 19.4c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16"></svg:path>`,
})
export class FaSolidHorseIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHorseHeadIcon],svg[fa-solid-horse-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m509.8 332.5l-69.9-164.3c-14.9-41.2-50.4-71-93-79.2c18-10.6 46.3-35.9 34.2-82.3c-1.3-5-7.1-7.9-12-6.1L166.9 76.3C35.9 123.4 0 238.9 0 398.8V480c0 17.7 14.3 32 32 32h236.2c23.8 0 39.3-25 28.6-46.3L256 384v-.7c-45.6-3.5-84.6-30.7-104.3-69.6c-1.6-3.1-.9-6.9 1.6-9.3l12.1-12.1c3.9-3.9 10.6-2.7 12.9 2.4c14.8 33.7 48.2 57.4 87.4 57.4c17.2 0 33-5.1 46.8-13.2l46 63.9c6 8.4 15.7 13.3 26 13.3h50.3c8.5 0 16.6-3.4 22.6-9.4l45.3-39.8c8.9-9.1 11.7-22.6 7.1-34.4M328 224c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24"></svg:path>`,
})
export class FaSolidHorseHeadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHospitalIcon],svg[fa-solid-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12M308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12m-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12m104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12m64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12m-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6"></svg:path>`,
})
export class FaSolidHospitalIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHospitalAltIcon],svg[fa-solid-hospital-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 96H416V32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32v368c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16V128c0-17.7-14.3-32-32-32M160 436c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm160 128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm16-170c0 3.3-2.7 6-6 6h-26v26c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6v-26h-26c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h26V86c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v26h26c3.3 0 6 2.7 6 6zm144 298c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidHospitalAltIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHospitalSymbolIcon],svg[fa-solid-hospital-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m112 376c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-88h-96v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V136c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v88h96v-88c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidHospitalSymbolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHospitalUserIcon],svg[fa-solid-hospital-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 320a96 96 0 1 0-96-96a96 96 0 0 0 96 96m48 32a22.9 22.9 0 0 0-7.06 1.09a124.76 124.76 0 0 1-81.89 0A22.8 22.8 0 0 0 432 352a112 112 0 0 0-112 112.62c.14 26.26 21.73 47.38 48 47.38h224c26.27 0 47.86-21.12 48-47.38A112 112 0 0 0 528 352m-198.09 10.45A145 145 0 0 1 352 344.62V128a32 32 0 0 0-32-32h-32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v64H32a32 32 0 0 0-32 32v368a16 16 0 0 0 16 16h288.31A78.62 78.62 0 0 1 288 464.79a143.06 143.06 0 0 1 41.91-102.34M144 404a12 12 0 0 1-12 12H92a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12H92a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm48-122a6 6 0 0 1-6 6h-20a6 6 0 0 1-6-6v-26h-26a6 6 0 0 1-6-6v-20a6 6 0 0 1 6-6h26V70a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v26h26a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6h-26zm80 250a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm0-128a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12z"></svg:path>`,
})
export class FaSolidHospitalUserIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHotTubIcon],svg[fa-solid-hot-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.21 177.65c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35c-4.34-39.11-22.4-74.53-50.13-97.16c-17.37-14.17-28.82-36.75-31.98-62.15C378.96 6.14 372.22 0 364.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35c4.34 39.11 22.4 74.53 50.13 97.16c17.36 14.17 28.82 36.75 31.97 62.14m-108 0c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35c-4.34-39.11-22.4-74.53-50.13-97.16c-17.37-14.17-28.82-36.75-31.98-62.15C270.96 6.14 264.22 0 256.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35c4.34 39.11 22.4 74.53 50.13 97.16c17.36 14.17 28.82 36.75 31.97 62.14M480 256H256l-110.93-83.2a64 64 0 0 0-38.4-12.8H64c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V288c0-17.67-14.33-32-32-32M128 440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zM64 128c35.35 0 64-28.65 64-64S99.35 0 64 0S0 28.65 0 64s28.65 64 64 64"></svg:path>`,
})
export class FaSolidHotTubIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHotdogIcon],svg[fa-solid-hotdog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488.56 23.44a80 80 0 0 0-113.12 0l-352 352a80 80 0 1 0 113.12 113.12l352-352a80 80 0 0 0 0-113.12m-49.93 95.19c-19.6 19.59-37.52 22.67-51.93 25.14C373.76 146 364.4 147.6 352 160s-14 21.76-16.23 34.71c-2.48 14.4-5.55 32.33-25.15 51.92s-37.52 22.67-51.92 25.15C245.75 274 236.4 275.6 224 288s-14 21.75-16.23 34.7c-2.47 14.4-5.54 32.33-25.14 51.92s-37.53 22.68-51.93 25.15C117.76 402 108.4 403.6 96 416a16 16 0 0 1-22.63-22.63c19.6-19.59 37.52-22.67 51.92-25.14c13-2.22 22.3-3.82 34.71-16.23s14-21.75 16.22-34.7c2.48-14.4 5.55-32.33 25.15-51.92s37.52-22.67 51.92-25.14c13-2.22 22.3-3.83 34.7-16.23s14-21.76 16.24-34.71c2.47-14.4 5.54-32.33 25.14-51.92s37.52-22.68 51.92-25.15C394.24 110 403.59 108.41 416 96a16 16 0 0 1 22.63 22.63M31.44 322.18L322.18 31.44l-11.54-11.55c-25-25-63.85-26.66-86.79-3.72L16.17 223.85c-22.94 22.94-21.27 61.79 3.72 86.78zm449.12-132.36L189.82 480.56l11.54 11.55c25 25 63.85 26.66 86.79 3.72l207.68-207.68c22.94-22.94 21.27-61.79-3.72-86.79z"></svg:path>`,
})
export class FaSolidHotdogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHotelIcon],svg[fa-solid-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8M192 384c0-53.02 42.98-96 96-96s96 42.98 96 96zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8z"></svg:path>`,
})
export class FaSolidHotelIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHourglassIcon],svg[fa-solid-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64"></svg:path>`,
})
export class FaSolidHourglassIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHourglassEndIcon],svg[fa-solid-hourglass-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64M192 208c-57.787 0-104-66.518-104-144h208c0 77.945-46.51 144-104 144"></svg:path>`,
})
export class FaSolidHourglassEndIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHourglassHalfIcon],svg[fa-solid-hourglass-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24m-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80c40.821 0 75.862 33.196 92.922 80m.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64"></svg:path>`,
})
export class FaSolidHourglassHalfIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHourglassStartIcon],svg[fa-solid-hourglass-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24m-64 448H88c0-77.458 46.204-144 104-144c57.786 0 104 66.517 104 144"></svg:path>`,
})
export class FaSolidHourglassStartIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHouseDamageIcon],svg[fa-solid-house-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 114.96L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496c0 8.84 7.16 16 16 16h149.23L192 439.19l104.11-64l-60.16-119.22L384 392.75l-104.11 64L319.81 512H496c8.84 0 16-7.16 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm282.69 121.32L512 184.45V48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v51.69L314.75 10.31C307.12 3.45 297.56.01 288 0s-19.1 3.41-26.7 10.27L5.31 236.28c-6.57 5.91-7.12 16.02-1.21 22.6l21.4 23.82c5.9 6.57 16.02 7.12 22.6 1.21L277.42 81.63c6.05-5.33 15.12-5.33 21.17 0L527.91 283.9c6.57 5.9 16.69 5.36 22.6-1.21l21.4-23.82c5.9-6.57 5.36-16.69-1.22-22.59"></svg:path>`,
})
export class FaSolidHouseDamageIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHouseUserIcon],svg[fa-solid-house-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M570.69 236.27L512 184.44V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v51.67L314.78 10.3C308.5 4.61 296.53 0 288 0s-20.46 4.61-26.74 10.3l-256 226A18.27 18.27 0 0 0 0 248.2a18.64 18.64 0 0 0 4.09 10.71L25.5 282.7a21.14 21.14 0 0 0 12 5.3a21.67 21.67 0 0 0 10.69-4.11l15.9-14V480a32 32 0 0 0 32 32H480a32 32 0 0 0 32-32V269.88l15.91 14a21.94 21.94 0 0 0 10.72 4.12a20.9 20.9 0 0 0 11.87-5.31l21.41-23.81a21.64 21.64 0 0 0 4.09-10.69a21 21 0 0 0-5.31-11.92M288 176a64 64 0 1 1-64 64a64 64 0 0 1 64-64m112 272H176a16 16 0 0 1-16-16a96 96 0 0 1 96-96h64a96 96 0 0 1 96 96a16 16 0 0 1-16 16"></svg:path>`,
})
export class FaSolidHouseUserIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidHryvniaIcon],svg[fa-solid-hryvnia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-41.86c13.41-28.63 13.74-63.33-4.13-94.05C303.34 49.84 267.1 32 229.96 32h-78.82c-24.32 0-47.86 8.53-66.54 24.09L72.83 65.9c-10.18 8.49-11.56 23.62-3.07 33.8l20.49 24.59c8.49 10.19 23.62 11.56 33.81 3.07l11.73-9.78c4.32-3.6 9.77-5.57 15.39-5.57h83.62c11.69 0 21.2 9.52 21.2 21.2c0 5.91-2.48 11.58-6.81 15.58L219.7 176H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h134.37l-34.67 32H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h41.86c-13.41 28.63-13.74 63.33 4.13 94.05C80.66 462.15 116.9 480 154.04 480h78.82c24.32 0 47.86-8.53 66.54-24.09l11.77-9.81c10.18-8.49 11.56-23.62 3.07-33.8l-20.49-24.59c-8.49-10.19-23.62-11.56-33.81-3.07l-11.75 9.8a24 24 0 0 1-15.36 5.56H149.2c-11.69 0-21.2-9.52-21.2-21.2c0-5.91 2.48-11.58 6.81-15.58L164.3 336H368c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16H233.63l34.67-32z"></svg:path>`,
})
export class FaSolidHryvniaIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidICursorIcon],svg[fa-solid-i-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 52.048V12.065C256 5.496 250.726.148 244.158.066C211.621-.344 166.469.011 128 37.959C90.266.736 46.979-.114 11.913.114C5.318.157 0 5.519 0 12.114v39.645c0 6.687 5.458 12.078 12.145 11.998C38.111 63.447 96 67.243 96 112.182V224H60c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h36v112c0 44.932-56.075 48.031-83.95 47.959C5.404 447.942 0 453.306 0 459.952v39.983c0 6.569 5.274 11.917 11.842 11.999c32.537.409 77.689.054 116.158-37.894c37.734 37.223 81.021 38.073 116.087 37.845c6.595-.043 11.913-5.405 11.913-12V460.24c0-6.687-5.458-12.078-12.145-11.998C217.889 448.553 160 444.939 160 400V288h36c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-36V112.182c0-44.932 56.075-48.213 83.95-48.142c6.646.018 12.05-5.346 12.05-11.992"></svg:path>`,
})
export class FaSolidICursorIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIceCreamIcon],svg[fa-solid-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96M195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z"></svg:path>`,
})
export class FaSolidIceCreamIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIciclesIcon],svg[fa-solid-icicles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.4 37.9C515.1 18.2 500 0 480 0H32C10.6 0-4.8 20.7 1.4 41.2l87.1 273.4c2.5 7.2 12.7 7.2 15.1 0L140 190.5l44.2 187.3c1.9 8.3 13.7 8.3 15.6 0l46.5-196.9l34.1 133.4c2.3 7.6 13 7.6 15.3 0l45.8-172.5l66.7 363.8c1.7 8.6 14 8.6 15.7 0z"></svg:path>`,
})
export class FaSolidIciclesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIconsIcon],svg[fa-solid-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46M144 468a52 52 0 1 1 52-52a52 52 0 0 1-52 52m355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7M478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.3 83.3 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.3 83.3 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67"></svg:path>`,
})
export class FaSolidIconsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIdBadgeIcon],svg[fa-solid-id-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48M144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16m48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6z"></svg:path>`,
})
export class FaSolidIdBadgeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIdCardIcon],svg[fa-solid-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64M67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2c3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8"></svg:path>`,
})
export class FaSolidIdCardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIdCardAltIcon],svg[fa-solid-id-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 64H384v96H192V64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48M288 224c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8c8.3-25.6 32.4-44.2 60.9-44.2h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2c3.2 9.8-5.2 19.8-15.6 19.8M352 32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v96h128z"></svg:path>`,
})
export class FaSolidIdCardAltIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIglooIcon],svg[fa-solid-igloo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 33.9c-10.5-1.2-21.2-1.9-32-1.9c-99.8 0-187.8 50.8-239.4 128H320zM96 192H30.3C11.1 230.6 0 274 0 320h96zM352 39.4V160h175.4C487.2 99.9 424.8 55.9 352 39.4M480 320h96c0-46-11.1-89.4-30.3-128H480zm-64 64v96h128c17.7 0 32-14.3 32-32v-96H411.5c2.6 10.3 4.5 20.9 4.5 32m32-192H128v128h49.8c22.2-38.1 63-64 110.2-64s88 25.9 110.2 64H448zM0 448c0 17.7 14.3 32 32 32h128v-96c0-11.1 1.9-21.7 4.5-32H0zm288-160c-53 0-96 43-96 96v96h192v-96c0-53-43-96-96-96"></svg:path>`,
})
export class FaSolidIglooIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidImageIcon],svg[fa-solid-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48M112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56s56-25.072 56-56s-25.072-56-56-56M64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336z"></svg:path>`,
})
export class FaSolidImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidImagesIcon],svg[fa-solid-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48M256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48m-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160z"></svg:path>`,
})
export class FaSolidImagesIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidInboxIcon],svg[fa-solid-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M567.938 243.908L462.25 85.374A48 48 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A48 48 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a48 48 0 0 0-8.062-26.625M162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918z"></svg:path>`,
})
export class FaSolidInboxIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIndentIcon],svg[fa-solid-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288m0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160M432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidIndentIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidIndustryIcon],svg[fa-solid-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248"></svg:path>`,
})
export class FaSolidIndustryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
