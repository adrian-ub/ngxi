import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTramFillIcon],svg[ph-tram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48h-48V24h32a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h32v24H72a32 32 0 0 0-32 32v104a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m0 152H72a16 16 0 0 1-16-16v-56h144v56a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTramFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTramLightIcon],svg[ph-tram-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 50h-50V22h34a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h34v28H72a30 30 0 0 0-30 30v104a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30M72 62h112a18 18 0 0 1 18 18v42H54V80a18 18 0 0 1 18-18m112 140H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-90-30a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTramLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTramThinIcon],svg[ph-tram-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 52h-52V20h36a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h36v32H72a28 28 0 0 0-28 28v104a28 28 0 0 0 28 28h16l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h16a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28M72 60h112a20 20 0 0 1 20 20v44H52V80a20 20 0 0 1 20-20m112 144H72a20 20 0 0 1-20-20v-52h152v52a20 20 0 0 1-20 20m-92-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTramThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateIcon],svg[ph-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.76 87.76 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z"></svg:path>`,
})
export class PhTranslateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateBoldIcon],svg[ph-translate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.73 210.63l-56-112a12 12 0 0 0-21.46 0l-20.52 41A84.2 84.2 0 0 1 114 126.22A107.5 107.5 0 0 0 139.33 68H160a12 12 0 0 0 0-24h-52V32a12 12 0 0 0-24 0v12H32a12 12 0 0 0 0 24h83.13A83.7 83.7 0 0 1 96 110.35A84 84 0 0 1 83.6 91a12 12 0 1 0-21.81 10A107.6 107.6 0 0 0 78 126.24A83.54 83.54 0 0 1 32 140a12 12 0 0 0 0 24a107.47 107.47 0 0 0 64-21.07a108.4 108.4 0 0 0 45.39 19.44l-24.13 48.26a12 12 0 1 0 21.46 10.73L151.41 196h65.17l12.68 25.36a12 12 0 1 0 21.47-10.73M163.41 172L184 130.83L204.58 172Z"></svg:path>`,
})
export class PhTranslateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateDuotoneIcon],svg[ph-translate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 184h-80l40-80ZM96 127.56A95.78 95.78 0 0 0 128 56H64a95.78 95.78 0 0 0 32 71.56" opacity=".2"></svg:path><svg:path d="m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.7 87.7 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z"></svg:path></svg:g>`,
})
export class PhTranslateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateFillIcon],svg[ph-translate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 129.89L175.06 160h-30.12l6.36-12.7ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16.84 140.42l-40-80a8 8 0 0 0-14.32 0l-13.18 26.38a62.3 62.3 0 0 1-23.61-10A79.6 79.6 0 0 0 135.6 80H152a8 8 0 0 0 0-16h-40v-8a8 8 0 0 0-16 0v8H56a8 8 0 0 0 0 16h63.48a63.73 63.73 0 0 1-15.3 34.05a66 66 0 0 1-9-13.61a8 8 0 0 0-14.32 7.12a81.8 81.8 0 0 0 11.4 17.15A63.6 63.6 0 0 1 56 136a8 8 0 0 0 0 16a79.56 79.56 0 0 0 48.11-16.13a78.3 78.3 0 0 0 28.18 13.66l-19.45 38.89a8 8 0 0 0 14.32 7.16l9.78-19.58h46.12l9.78 19.58a8 8 0 1 0 14.32-7.16"></svg:path>`,
})
export class PhTranslateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateLightIcon],svg[ph-translate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.37 213.32l-56-112a6 6 0 0 0-10.74 0l-22.3 44.6A90 90 0 0 1 105 127.19A101.73 101.73 0 0 0 133.82 62H160a6 6 0 0 0 0-12h-58V32a6 6 0 0 0-12 0v18H32a6 6 0 0 0 0 12h89.79A89.7 89.7 0 0 1 96 119.23A89.8 89.8 0 0 1 75.11 86a6 6 0 1 0-11.31 4A101.7 101.7 0 0 0 87 127.2A89.56 89.56 0 0 1 32 146a6 6 0 0 0 0 12a101.55 101.55 0 0 0 64-22.63a102.1 102.1 0 0 0 54.53 22.17l-27.89 55.78a6 6 0 0 0 10.74 5.36L147.71 190h72.58l14.34 28.68A6 6 0 0 0 240 222a5.9 5.9 0 0 0 2.68-.64a6 6 0 0 0 2.69-8.04M153.71 178L184 117.42L214.29 178Z"></svg:path>`,
})
export class PhTranslateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateThinIcon],svg[ph-translate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.58 214.21l-56-112a4 4 0 0 0-7.16 0L157.55 148A92.05 92.05 0 0 1 102 127.36A99.68 99.68 0 0 0 131.91 60H160a4 4 0 0 0 0-8h-60V32a4 4 0 0 0-8 0v20H32a4 4 0 0 0 0 8h91.91A91.8 91.8 0 0 1 96 122.05a92 92 0 0 1-22.77-35.38a4 4 0 1 0-7.54 2.66a99.6 99.6 0 0 0 24.3 38A91.6 91.6 0 0 1 32 148a4 4 0 0 0 0 8a99.54 99.54 0 0 0 64-23.21a100.1 100.1 0 0 0 57.66 23l-29.22 58.43a4 4 0 1 0 7.16 3.58l14.87-29.8h75.06l14.89 29.79A4 4 0 0 0 240 220a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37M150.47 180L184 112.94L217.53 180Z"></svg:path>`,
})
export class PhTranslateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashIcon],svg[ph-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhTrashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashBoldIcon],svg[ph-trash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24M100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0m48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTrashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashDuotoneIcon],svg[ph-trash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"></svg:path><svg:path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhTrashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashFillIcon],svg[ph-trash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhTrashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashLightIcon],svg[ph-trash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTrashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleIcon],svg[ph-trash-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16m-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhTrashSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleBoldIcon],svg[ph-trash-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24m-28 156H68V72h120ZM76 20A12 12 0 0 1 88 8h80a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhTrashSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleDuotoneIcon],svg[ph-trash-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"></svg:path><svg:path d="M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16m-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhTrashSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleFillIcon],svg[ph-trash-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56a8 8 0 0 1-8 8h-8v144a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64h-8a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M88 32h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhTrashSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleLightIcon],svg[ph-trash-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12m-22 158a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132ZM82 24a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTrashSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleThinIcon],svg[ph-trash-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8m-20 156a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136ZM84 24a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTrashSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashThinIcon],svg[ph-trash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8M92 40a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm104 168a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136Zm-88-104v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTrashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayIcon],svg[ph-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownIcon],svg[ph-tray-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 125.66a8 8 0 0 1 11.32-11.32L120 132.69V72a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path>`,
})
export class PhTrayArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownBoldIcon],svg[ph-tray-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v92h-24.69a19.86 19.86 0 0 0-14.14 5.86L147 168h-38l-18.17-18.14A19.86 19.86 0 0 0 76.69 144H52V52ZM52 204v-36h23l18.14 18.14a19.86 19.86 0 0 0 14.17 5.86h41.38a19.86 19.86 0 0 0 14.14-5.86L181 168h23v36Zm35.51-87.51a12 12 0 0 1 17-17L116 111V76a12 12 0 0 1 24 0v35l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhTrayArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownDuotoneIcon],svg[ph-tray-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v112h-36.69a8 8 0 0 0-5.66 2.34l-19.31 19.32a8 8 0 0 1-5.66 2.34h-41.37a8 8 0 0 1-5.66-2.34l-19.31-19.32a8 8 0 0 0-5.66-2.34H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.68A15.9 15.9 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 125.66a8 8 0 0 1 11.32-11.32L120 132.69V72a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhTrayArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownFillIcon],svg[ph-tray-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M90.34 114.34a8 8 0 0 1 11.32 0L120 132.69V72a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 0-11.32M208 208H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownLightIcon],svg[ph-tray-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.94 13.94 0 0 0-9.9 4.1l-19.31 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.58L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.58l19.31 19.32a13.94 13.94 0 0 0 9.9 4.1h41.38a13.94 13.94 0 0 0 9.9-4.1l19.31-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2M91.76 124.24a6 6 0 0 1 8.48-8.48L122 137.51V72a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0Z"></svg:path>`,
})
export class PhTrayArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownThinIcon],svg[ph-tray-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a12 12 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.32a12 12 0 0 0-8.48-3.51H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.32a12 12 0 0 0 8.48 3.51h41.38a12 12 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4M93.17 122.83a4 4 0 0 1 5.66-5.66L124 142.34V72a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 1 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0Z"></svg:path>`,
})
export class PhTrayArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpIcon],svg[ph-tray-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 109.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 91.31V152a8 8 0 0 1-16 0V91.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path>`,
})
export class PhTrayArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpBoldIcon],svg[ph-tray-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v92h-24.69a19.86 19.86 0 0 0-14.14 5.86L147 168h-38l-18.17-18.14A19.86 19.86 0 0 0 76.69 144H52V52ZM52 204v-36h23l18.14 18.14a19.86 19.86 0 0 0 14.17 5.86h41.38a19.86 19.86 0 0 0 14.14-5.86L181 168h23v36Zm35.51-87.51a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 105v35a12 12 0 0 1-24 0v-35l-11.51 11.52a12 12 0 0 1-16.98-.03"></svg:path>`,
})
export class PhTrayArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpDuotoneIcon],svg[ph-tray-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v112h-36.69a8 8 0 0 0-5.66 2.34l-19.31 19.32a8 8 0 0 1-5.66 2.34h-41.37a8 8 0 0 1-5.66-2.34l-19.31-19.32a8 8 0 0 0-5.66-2.34H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 109.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 91.31V152a8 8 0 0 1-16 0V91.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhTrayArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpFillIcon],svg[ph-tray-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M90.34 98.34l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 91.31V152a8 8 0 0 1-16 0V91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32M208 208H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpLightIcon],svg[ph-tray-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.9 13.9 0 0 0-9.89 4.1l-19.32 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.59L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.59l19.31 19.31a13.94 13.94 0 0 0 9.9 4.1h41.38a13.9 13.9 0 0 0 9.89-4.1l19.32-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2M91.76 108.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 86.49V152a6 6 0 0 1-12 0V86.49l-21.76 21.75a6 6 0 0 1-8.48 0"></svg:path>`,
})
export class PhTrayArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpThinIcon],svg[ph-tray-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a11.93 11.93 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.31a11.9 11.9 0 0 0-8.48-3.52H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.31a11.9 11.9 0 0 0 8.48 3.52h41.38a11.93 11.93 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4M93.17 106.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 81.66V152a4 4 0 0 1-8 0V81.66l-25.17 25.17a4 4 0 0 1-5.66 0"></svg:path>`,
})
export class PhTrayArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayBoldIcon],svg[ph-tray-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v92h-24.69a19.86 19.86 0 0 0-14.14 5.86L147 168h-38l-18.17-18.14A19.86 19.86 0 0 0 76.69 144H52V52ZM52 204v-36h23l18.14 18.14a19.86 19.86 0 0 0 14.17 5.86h41.38a19.86 19.86 0 0 0 14.14-5.86L181 168h23v36Z"></svg:path>`,
})
export class PhTrayBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayDuotoneIcon],svg[ph-tray-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v112h-36.69a8 8 0 0 0-5.66 2.34l-19.31 19.32a8 8 0 0 1-5.66 2.34h-41.37a8 8 0 0 1-5.66-2.34l-19.31-19.32a8 8 0 0 0-5.66-2.34H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.68A15.9 15.9 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path></svg:g>`,
})
export class PhTrayDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayFillIcon],svg[ph-tray-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208z"></svg:path>`,
})
export class PhTrayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayLightIcon],svg[ph-tray-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.94 13.94 0 0 0-9.9 4.1l-19.31 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.58L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.58l19.31 19.32a13.94 13.94 0 0 0 9.9 4.1h41.38a13.94 13.94 0 0 0 9.9-4.1l19.31-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTrayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayThinIcon],svg[ph-tray-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a12 12 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.32a12 12 0 0 0-8.48-3.51H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.32a12 12 0 0 0 8.48 3.51h41.38a12 12 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTrayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestIcon],svg[ph-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 40H72a56.06 56.06 0 0 0-56 56v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a56.06 56.06 0 0 0-56-56m40 56v8h-32V56.8A40.07 40.07 0 0 1 224 96m-88 40h-16v-32h16Zm-24 16h32a8 8 0 0 0 8-8v-24h24v72H80v-72h24v24a8 8 0 0 0 8 8m40-48v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8H80V56h96v48ZM64 56.8V104H32v-8a40.07 40.07 0 0 1 32-39.2M32 120h32v72H32Zm192 72h-32v-72h32z"></svg:path>`,
})
export class PhTreasureChestIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestBoldIcon],svg[ph-treasure-chest-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a60.07 60.07 0 0 0-60 60v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V96a60.07 60.07 0 0 0-60-60m36 60v4h-28V60.91A36.05 36.05 0 0 1 220 96m-92 60a12 12 0 0 0 12-12v-20h28v64H88v-64h28v20a12 12 0 0 0 12 12m12-56v-4a12 12 0 0 0-24 0v4H88V60h80v40ZM64 60.91V100H36v-4a36.05 36.05 0 0 1 28-35.09M36 124h28v64H36Zm156 64v-64h28v64Z"></svg:path>`,
})
export class PhTreasureChestBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestDuotoneIcon],svg[ph-treasure-chest-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 112v80a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-80h88v32h32v-32Z" opacity=".2"></svg:path><svg:path d="M184 40H72a56.06 56.06 0 0 0-56 56v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a56.06 56.06 0 0 0-56-56m40 56v8h-32V56.8A40.07 40.07 0 0 1 224 96m-88 40h-16v-32h16Zm-24 16h32a8 8 0 0 0 8-8v-24h24v72H80v-72h24v24a8 8 0 0 0 8 8m40-48v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8H80V56h96v48ZM64 56.8V104H32v-8a40.07 40.07 0 0 1 32-39.2M32 120h32v72H32Zm192 72h-32v-72h32z"></svg:path></svg:g>`,
})
export class PhTreasureChestDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestFillIcon],svg[ph-treasure-chest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124v68a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-68a4 4 0 0 1 4-4h36v64a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.27V120h40v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-20h40v64a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V120h36a4 4 0 0 1 4 4m-56-84H72a56 56 0 0 0-56 56v4a4 4 0 0 0 4 4h36V64.27A8.17 8.17 0 0 1 63.47 56A8 8 0 0 1 72 64v40h40V92a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v12h40V64.27a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8v40h36a4 4 0 0 0 4-4v-4a56 56 0 0 0-56-56"></svg:path>`,
})
export class PhTreasureChestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestLightIcon],svg[ph-treasure-chest-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 42H72a54.06 54.06 0 0 0-54 54v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V96a54.06 54.06 0 0 0-54-54m42 54v10h-36V54.44A42.05 42.05 0 0 1 226 96m-88 42h-20v-36h20Zm-26 12h32a6 6 0 0 0 6-6v-26h28v76H78v-76h28v26a6 6 0 0 0 6 6m38-44V96a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v10H78V54h100v52ZM66 54.44V106H30V96a42.05 42.05 0 0 1 36-41.56M30 192v-74h36v76H32a2 2 0 0 1-2-2m194 2h-34v-76h36v74a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTreasureChestLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestThinIcon],svg[ph-treasure-chest-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 44H72a52.06 52.06 0 0 0-52 52v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V96a52.06 52.06 0 0 0-52-52m44 52v12h-40V52.19A44.06 44.06 0 0 1 228 96m-88 44h-24v-40h24Zm-28 8h32a4 4 0 0 0 4-4v-28h32v80H76v-80h32v28a4 4 0 0 0 4 4m36-40V96a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v12H76V52h104v56ZM68 52.19V108H28V96a44.06 44.06 0 0 1 40-43.81M28 192v-76h40v80H32a4 4 0 0 1-4-4m196 4h-36v-80h40v76a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTreasureChestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeIcon],svg[ph-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.1 62.59a76 76 0 0 0-140.2 0A71.71 71.71 0 0 0 16 127.8C15.9 166 48 199 86.14 200a72.1 72.1 0 0 0 33.86-7.53V232a8 8 0 0 0 16 0v-39.53a72.2 72.2 0 0 0 32 7.53h1.82c38.18-1 70.29-34 70.18-72.2a71.71 71.71 0 0 0-41.9-65.21M169.45 184A56.08 56.08 0 0 1 136 174v-41l43.58-21.78a8 8 0 1 0-7.16-14.32L136 115.06V88a8 8 0 0 0-16 0v51.06l-36.42-18.22a8 8 0 1 0-7.16 14.32L120 156.94v17a56 56 0 0 1-33.45 10c-29.65-.71-54.63-26.42-54.55-56.1A55.77 55.77 0 0 1 67.11 76a8 8 0 0 0 4.53-4.67a60 60 0 0 1 112.72 0a8 8 0 0 0 4.53 4.67A55.79 55.79 0 0 1 224 127.84c.08 29.68-24.9 55.39-54.55 56.16"></svg:path>`,
})
export class PhTreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeBoldIcon],svg[ph-tree-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.17 59.62a80 80 0 0 0-146.34 0a76 76 0 0 0 61.17 139V232a12 12 0 0 0 24 0v-33.36a76.3 76.3 0 0 0 28 5.36h1.92a76 76 0 0 0 31.25-144.38M169.35 180a52 52 0 0 1-29.35-8.21v-36.37l41.37-20.69a12 12 0 1 0-10.74-21.46L140 108.58V88a12 12 0 0 0-24 0v44.58l-30.63-15.31a12 12 0 0 0-10.74 21.46L116 159.42v12.37A52.24 52.24 0 0 1 86.65 180c-27.53-.69-50.72-24.56-50.65-52.13a51.81 51.81 0 0 1 32.61-48.1a12 12 0 0 0 6.78-7a56 56 0 0 1 105.22 0a12 12 0 0 0 6.78 7A51.81 51.81 0 0 1 220 127.85c.08 27.56-23.12 51.44-50.65 52.15"></svg:path>`,
})
export class PhTreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeDuotoneIcon],svg[ph-tree-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 127.82c.09 33.94-28.41 63.3-62.34 64.16a63.72 63.72 0 0 1-41.66-14a63.7 63.7 0 0 1-41.65 14c-33.93-.86-62.44-30.22-62.35-64.16a64 64 0 0 1 40.13-59.2a68 68 0 0 1 127.74 0a64 64 0 0 1 40.13 59.2" opacity=".2"></svg:path><svg:path d="M198.1 62.59a76 76 0 0 0-140.2 0A71.71 71.71 0 0 0 16 127.8C15.9 166 48 199 86.14 200a72.2 72.2 0 0 0 33.86-7.53V232a8 8 0 0 0 16 0v-39.53a72.2 72.2 0 0 0 32 7.53h1.82c38.18-1 70.29-34 70.18-72.2a71.71 71.71 0 0 0-41.9-65.21M169.45 184A56.08 56.08 0 0 1 136 174v-41l43.58-21.78a8 8 0 1 0-7.16-14.32L136 115.06V88a8 8 0 0 0-16 0v51.06l-36.42-18.22a8 8 0 1 0-7.16 14.32L120 156.94v17a56 56 0 0 1-33.45 10c-29.65-.71-54.63-26.42-54.55-56.1A55.79 55.79 0 0 1 67.11 76a8 8 0 0 0 4.53-4.67a60 60 0 0 1 112.72 0a8 8 0 0 0 4.53 4.67A55.79 55.79 0 0 1 224 127.84c.08 29.68-24.9 55.39-54.55 56.16"></svg:path></svg:g>`,
})
export class PhTreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenIcon],svg[ph-tree-evergreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.32 187.09l-46-59.09H208a8 8 0 0 0 6.34-12.88l-80-104a8 8 0 0 0-12.68 0l-80 104A8 8 0 0 0 48 128h23.64l-46 59.09A8 8 0 0 0 32 200h88v40a8 8 0 0 0 16 0v-40h88a8 8 0 0 0 6.32-12.91M48.36 184l46-59.09A8 8 0 0 0 88 112H64.25L128 29.12L191.75 112H168a8 8 0 0 0-6.31 12.91L207.64 184Z"></svg:path>`,
})
export class PhTreeEvergreenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenBoldIcon],svg[ph-tree-evergreen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.47 184.63L192.54 132H208a12 12 0 0 0 9.51-19.32l-80-104a12 12 0 0 0-19 0l-80 104A12 12 0 0 0 48 132h15.46l-40.93 52.63A12 12 0 0 0 32 204h84v36a12 12 0 0 0 24 0v-36h84a12 12 0 0 0 9.47-19.37M56.54 180l40.93-52.63A12 12 0 0 0 88 108H72.37L128 35.68L183.63 108H168a12 12 0 0 0-9.47 19.37L199.46 180Z"></svg:path>`,
})
export class PhTreeEvergreenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenDuotoneIcon],svg[ph-tree-evergreen-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m32 192l56-72H48l80-104l80 104h-40l56 72Z" opacity=".2"></svg:path><svg:path d="M230.31 187.09L184.36 128H208a8 8 0 0 0 6.34-12.88l-80-104a8 8 0 0 0-12.68 0l-80 104A8 8 0 0 0 48 128h23.64l-45.95 59.09A8 8 0 0 0 32 200h88v40a8 8 0 0 0 16 0v-40h88a8 8 0 0 0 6.31-12.91M48.36 184l46-59.09A8 8 0 0 0 88 112H64.25L128 29.12L191.75 112H168a8 8 0 0 0-6.31 12.91L207.64 184Z"></svg:path></svg:g>`,
})
export class PhTreeEvergreenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenFillIcon],svg[ph-tree-evergreen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.19 195.51A8 8 0 0 1 224 200h-88v40a8 8 0 0 1-16 0v-40H32a8 8 0 0 1-6.31-12.91l46-59.09H48a8 8 0 0 1-6.34-12.88l80-104a8 8 0 0 1 12.68 0l80 104A8 8 0 0 1 208 128h-23.64l45.95 59.09a8 8 0 0 1 .88 8.42"></svg:path>`,
})
export class PhTreeEvergreenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenLightIcon],svg[ph-tree-evergreen-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.74 188.32L180.27 126H208a6 6 0 0 0 4.76-9.66l-80-104a6 6 0 0 0-9.52 0l-80 104A6 6 0 0 0 48 126h27.73l-48.47 62.32A6 6 0 0 0 32 198h90v42a6 6 0 0 0 12 0v-42h90a6 6 0 0 0 4.74-9.68M44.27 186l48.47-62.32A6 6 0 0 0 88 114H60.19L128 25.84L195.81 114H168a6 6 0 0 0-4.74 9.68L211.73 186Z"></svg:path>`,
})
export class PhTreeEvergreenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenThinIcon],svg[ph-tree-evergreen-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.16 189.54l-51-65.54H208a4 4 0 0 0 3.17-6.44l-80-104a4 4 0 0 0-6.34 0l-80 104A4 4 0 0 0 48 124h31.82l-51 65.54A4 4 0 0 0 32 196h92v44a4 4 0 0 0 8 0v-44h92a4 4 0 0 0 3.16-6.46M40.18 188l51-65.54A4 4 0 0 0 88 116H56.12L128 22.56L199.88 116H168a4 4 0 0 0-3.16 6.46l51 65.54Z"></svg:path>`,
})
export class PhTreeEvergreenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeFillIcon],svg[ph-tree-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 187.85a72 72 0 0 0 8 4.62V232a8 8 0 0 1-16 0v-39.53a72 72 0 0 0 8-4.62m70.1-125.26a76 76 0 0 0-140.2 0A71.71 71.71 0 0 0 16 127.8C15.9 166 48 199 86.14 200a72.2 72.2 0 0 0 33.86-7.53v-35.53l-43.58-21.78a8 8 0 1 1 7.16-14.32L120 139.06V88a8 8 0 0 1 16 0v27.06l36.42-18.22a8 8 0 1 1 7.16 14.32L136 132.94v59.53a72.2 72.2 0 0 0 32 7.53h1.82c38.18-1 70.29-34 70.18-72.2a71.71 71.71 0 0 0-41.9-65.21"></svg:path>`,
})
export class PhTreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeLightIcon],svg[ph-tree-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.55 64.09a74 74 0 0 0-137.1 0A69.71 69.71 0 0 0 18 127.8c-.1 37.11 31.13 69.2 68.19 70.2a70.3 70.3 0 0 0 35.81-8.84V232a6 6 0 0 0 12 0v-42.84a70.1 70.1 0 0 0 34 8.84h1.77c37.1-1 68.33-33.1 68.23-70.2a69.71 69.71 0 0 0-41.45-63.71M169.5 186a57.88 57.88 0 0 1-35.5-11v-43.29l44.68-22.34a6 6 0 1 0-5.36-10.74L134 118.29V88a6 6 0 0 0-12 0v54.29l-39.32-19.66a6 6 0 0 0-5.36 10.74L122 155.71V175a58.1 58.1 0 0 1-35.5 11c-30.71-.77-56.58-27.4-56.5-58.14a57.78 57.78 0 0 1 36.37-53.67a6 6 0 0 0 3.39-3.51a62 62 0 0 1 116.48 0a6 6 0 0 0 3.39 3.51A57.77 57.77 0 0 1 226 127.83c.08 30.75-25.79 57.37-56.5 58.17"></svg:path>`,
})
export class PhTreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmIcon],svg[ph-tree-palm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.79 53.23a66.86 66.86 0 0 0-97.74 0a72.2 72.2 0 0 0-12.05 17a72.2 72.2 0 0 0-12-17a66.86 66.86 0 0 0-97.74 0a8 8 0 0 0 2.6 12.85L77 90.55a71.42 71.42 0 0 0-43.36 33.21a70.64 70.64 0 0 0-7.2 54.32A8 8 0 0 0 39 182.36l81-61.68V224a8 8 0 0 0 16 0V120.68l81 61.68a8 8 0 0 0 12.57-4.28a70.64 70.64 0 0 0-7.2-54.32A71.42 71.42 0 0 0 179 90.55l56.22-24.47a8 8 0 0 0 2.6-12.85ZM67.08 48a51.13 51.13 0 0 1 37.28 16.26a56.53 56.53 0 0 1 14.26 26.93L39 56.53A50.5 50.5 0 0 1 67.08 48M40 161.5a54.8 54.8 0 0 1 7.47-29.7a55.55 55.55 0 0 1 34-25.89A56.5 56.5 0 0 1 96.1 104a55.8 55.8 0 0 1 16.23 2.41Zm168.5-29.7a54.8 54.8 0 0 1 7.5 29.7l-72.3-55.1a56.3 56.3 0 0 1 64.83 25.4Zm-71.12-40.61a56.53 56.53 0 0 1 14.26-26.93A51.13 51.13 0 0 1 188.92 48A50.5 50.5 0 0 1 217 56.53Z"></svg:path>`,
})
export class PhTreePalmIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmBoldIcon],svg[ph-tree-palm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.69 50.47a70.87 70.87 0 0 0-103.54 0A76.6 76.6 0 0 0 128 62.19a76.6 76.6 0 0 0-9.15-11.72a70.87 70.87 0 0 0-103.54 0a12 12 0 0 0 3.9 19.28L66 90.12a75.45 75.45 0 0 0-43.43 89a12 12 0 0 0 18.85 6.41L116 128.75V224a12 12 0 0 0 24 0v-95.25l74.54 56.79a12 12 0 0 0 18.85-6.41a75.45 75.45 0 0 0-43.43-89l46.83-20.37a12 12 0 0 0 3.9-19.28ZM67.08 52a47.16 47.16 0 0 1 34.38 15a52.4 52.4 0 0 1 10.84 17.08L48 56.1A46.3 46.3 0 0 1 67.08 52M44.39 153.15a51.72 51.72 0 0 1 38.14-43.38A52.8 52.8 0 0 1 96.09 108a50 50 0 0 1 7 .47ZM205 133.81a51.1 51.1 0 0 1 6.57 19.34L153 108.46a52.2 52.2 0 0 1 20.51 1.31A51.6 51.6 0 0 1 205 133.81m-61.3-49.73A52.4 52.4 0 0 1 154.54 67a47.16 47.16 0 0 1 34.38-15A46.3 46.3 0 0 1 208 56.1Z"></svg:path>`,
})
export class PhTreePalmBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmDuotoneIcon],svg[ph-tree-palm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 58.75L128 104a65.47 65.47 0 0 1 17.84-45.25a58.87 58.87 0 0 1 86.16 0m-55.44 39.43a64.2 64.2 0 0 0-48.56 6.34L221.81 176a63 63 0 0 0-6.39-48.22a63.73 63.73 0 0 0-38.86-29.6m-66.4-39.43a58.87 58.87 0 0 0-86.16 0L128 104a65.47 65.47 0 0 0-17.84-45.25M79.44 98.18a63.73 63.73 0 0 0-38.86 29.6A63 63 0 0 0 34.19 176L128 104.52a64.2 64.2 0 0 0-48.56-6.34" opacity=".2"></svg:path><svg:path d="M237.79 53.23a66.86 66.86 0 0 0-97.74 0a72.2 72.2 0 0 0-12.05 17a72.2 72.2 0 0 0-12-17a66.86 66.86 0 0 0-97.74 0a8 8 0 0 0 2.6 12.85L77 90.55a71.42 71.42 0 0 0-43.36 33.21a70.64 70.64 0 0 0-7.2 54.32A8 8 0 0 0 39 182.36l81-61.68V224a8 8 0 0 0 16 0V120.68l81 61.68a8 8 0 0 0 12.57-4.28a70.64 70.64 0 0 0-7.2-54.32A71.42 71.42 0 0 0 179 90.55l56.22-24.47a8 8 0 0 0 2.6-12.85ZM67.08 48a51.13 51.13 0 0 1 37.28 16.26a56.53 56.53 0 0 1 14.26 26.93L39 56.53A50.5 50.5 0 0 1 67.08 48M40 161.5a54.8 54.8 0 0 1 7.47-29.7a55.55 55.55 0 0 1 34-25.89A56.5 56.5 0 0 1 96.1 104a55.8 55.8 0 0 1 16.23 2.41Zm168.5-29.7a54.8 54.8 0 0 1 7.5 29.7l-72.3-55.1a56.3 56.3 0 0 1 64.83 25.4Zm-71.12-40.61a56.53 56.53 0 0 1 14.26-26.93A51.13 51.13 0 0 1 188.92 48A50.5 50.5 0 0 1 217 56.53Z"></svg:path></svg:g>`,
})
export class PhTreePalmDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmFillIcon],svg[ph-tree-palm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.84 60.33a8 8 0 0 1-4.65 5.75L179 90.55a71.42 71.42 0 0 1 43.36 33.21a70.64 70.64 0 0 1 7.2 54.32a8 8 0 0 1-12.56 4.28l-81-61.68V224a8 8 0 0 1-16 0V120.68l-81 61.68a8 8 0 0 1-12.57-4.28a70.64 70.64 0 0 1 7.2-54.32A71.42 71.42 0 0 1 77 90.55L20.81 66.08a8 8 0 0 1-2.6-12.85a66.86 66.86 0 0 1 97.74 0a72.2 72.2 0 0 1 12 17a72.2 72.2 0 0 1 12.05-17a66.86 66.86 0 0 1 97.74 0a8 8 0 0 1 2.1 7.1"></svg:path>`,
})
export class PhTreePalmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmLightIcon],svg[ph-tree-palm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.35 54.61a64.87 64.87 0 0 0-94.85 0A70 70 0 0 0 128 75a70 70 0 0 0-13.5-20.37a64.87 64.87 0 0 0-94.85 0a6 6 0 0 0 2 9.64l61.83 26.9c-1.85.34-3.7.74-5.54 1.23a69.42 69.42 0 0 0-42.5 32.39a68.65 68.65 0 0 0-7 52.79a6 6 0 0 0 3.86 4.12a6.1 6.1 0 0 0 1.93.32a6 6 0 0 0 3.64-1.23L122 116.64V224a6 6 0 0 0 12 0V116.64l84.17 64.13a6 6 0 0 0 3.64 1.23a6.1 6.1 0 0 0 1.93-.32a6 6 0 0 0 3.86-4.12a68.65 68.65 0 0 0-7-52.79a69.42 69.42 0 0 0-42.5-32.39c-1.84-.49-3.69-.89-5.54-1.23l61.83-26.9a6 6 0 0 0 2-9.64ZM67.08 46a53.16 53.16 0 0 1 38.73 16.88a58.77 58.77 0 0 1 15.47 31.65L34.93 57a52.6 52.6 0 0 1 32.15-11M38.29 165.33a56.77 56.77 0 0 1 7.48-34.53A57.58 57.58 0 0 1 81 104a58.8 58.8 0 0 1 15.12-2a57.7 57.7 0 0 1 20.43 3.73Zm171.94-34.53a56.77 56.77 0 0 1 7.48 34.53l-78.24-59.61a58.24 58.24 0 0 1 70.76 25.08m-75.51-36.27a58.77 58.77 0 0 1 15.47-31.65A53.16 53.16 0 0 1 188.92 46a52.6 52.6 0 0 1 32.15 11Z"></svg:path>`,
})
export class PhTreePalmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmThinIcon],svg[ph-tree-palm-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.9 56a62.86 62.86 0 0 0-92 0A68.2 68.2 0 0 0 128 80.44a68.2 68.2 0 0 0-15-24.45a62.86 62.86 0 0 0-91.9.01a4 4 0 0 0 1.3 6.42L90.86 92.2a68.7 68.7 0 0 0-12.45 2.11a67.5 67.5 0 0 0-41.28 31.46a66.72 66.72 0 0 0-6.8 51.23a4 4 0 0 0 2.57 2.75a4.1 4.1 0 0 0 1.29.21a4 4 0 0 0 2.43-.82L124 112.6V224a4 4 0 0 0 8 0V112.6l87.38 66.58a4 4 0 0 0 2.43.82a4.1 4.1 0 0 0 1.29-.21a4 4 0 0 0 2.57-2.75a66.72 66.72 0 0 0-6.8-51.27a67.5 67.5 0 0 0-41.28-31.46a68.7 68.7 0 0 0-12.45-2.11l68.46-29.79a4 4 0 0 0 1.3-6.41M67.08 44a55.13 55.13 0 0 1 40.18 17.5a60.86 60.86 0 0 1 16.44 36.27L31.12 57.48A54.75 54.75 0 0 1 67.08 44M36.77 169A58.72 58.72 0 0 1 44 129.79A59.57 59.57 0 0 1 80.47 102a61 61 0 0 1 15.63-2a59.7 59.7 0 0 1 24.41 5.22ZM212 129.79a58.72 58.72 0 0 1 7.23 39.21l-83.74-63.8A60.24 60.24 0 0 1 212 129.79m-79.66-32a60.86 60.86 0 0 1 16.4-36.29a54.8 54.8 0 0 1 76.14-4Z"></svg:path>`,
})
export class PhTreePalmThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureIcon],svg[ph-tree-structure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 112h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a24 24 0 0 0-24 24v32H72v-8a16 16 0 0 0-16-16H24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h32v32a24 24 0 0 0 24 24h16v16a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h16v16a16 16 0 0 0 16 16M56 144H24v-32h32zm104 16h48v48h-48Zm0-112h48v48h-48Z"></svg:path>`,
})
export class PhTreeStructureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureBoldIcon],svg[ph-tree-structure-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 116h48a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12h-12a28 28 0 0 0-28 28v28H76v-4a20 20 0 0 0-20-20H24a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h24v28a28 28 0 0 0 28 28h12v12a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12h-12a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h12v12a20 20 0 0 0 20 20M52 140H28v-24h24Zm112 24h40v40h-40Zm0-112h40v40h-40Z"></svg:path>`,
})
export class PhTreeStructureBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureDuotoneIcon],svg[ph-tree-structure-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M64 112v32a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m144-72h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8m0 112h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M160 112h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a24 24 0 0 0-24 24v32H72v-8a16 16 0 0 0-16-16H24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h32v32a24 24 0 0 0 24 24h16v16a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h16v16a16 16 0 0 0 16 16M56 144H24v-32h32zm104 16h48v48h-48Zm0-112h48v48h-48Z"></svg:path></svg:g>`,
})
export class PhTreeStructureDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureFillIcon],svg[ph-tree-structure-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 96V80h-16a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h16v-16a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16v-16h-16a24 24 0 0 1-24-24v-32H72v8a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v8h32V88a24 24 0 0 1 24-24h16V48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhTreeStructureFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureLightIcon],svg[ph-tree-structure-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 110h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v18h-18a22 22 0 0 0-22 22v34H70v-10a14 14 0 0 0-14-14H24a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-10h36v34a22 22 0 0 0 22 22h18v18a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v18h-18a10 10 0 0 1-10-10V88a10 10 0 0 1 10-10h18v18a14 14 0 0 0 14 14M58 144a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Zm100 16a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2Zm0-112a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2Z"></svg:path>`,
})
export class PhTreeStructureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureThinIcon],svg[ph-tree-structure-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 108h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-20a20 20 0 0 0-20 20v36H68v-12a12 12 0 0 0-12-12H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h40v36a20 20 0 0 0 20 20h20v20a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-20a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20v20a12 12 0 0 0 12 12M60 144a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm96 16a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Zm0-112a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Z"></svg:path>`,
})
export class PhTreeStructureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeThinIcon],svg[ph-tree-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195 65.59a72 72 0 0 0-134 0a67.72 67.72 0 0 0-41 62.22c-.1 36 30.24 67.26 66.25 68.17A68.24 68.24 0 0 0 124 185.66V232a4 4 0 0 0 8 0v-46.33A68.1 68.1 0 0 0 168 196h1.72c36-.91 66.34-32.13 66.24-68.17A67.73 67.73 0 0 0 195 65.59M169.55 188A60.15 60.15 0 0 1 132 176v-45.5l45.79-22.89a4 4 0 1 0-3.58-7.16L132 121.53V88a4 4 0 0 0-8 0v57.53l-42.21-21.11a4 4 0 1 0-3.58 7.16L124 154.47V176a60 60 0 0 1-37.55 12c-31.77-.8-58.54-28.35-58.45-60.15a59.77 59.77 0 0 1 37.62-55.5A4 4 0 0 0 67.88 70a64 64 0 0 1 120.24 0a4 4 0 0 0 2.26 2.33a59.79 59.79 0 0 1 37.62 55.5c.09 31.8-26.68 59.35-58.45 60.17"></svg:path>`,
})
export class PhTreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewIcon],svg[ph-tree-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 152h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H88V80h8a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v112a24 24 0 0 0 24 24h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96a8 8 0 0 1-8-8v-64h72v8a16 16 0 0 0 16 16M64 32h32v32H64Zm112 160h32v32h-32Zm0-88h32v32h-32Z"></svg:path>`,
})
export class PhTreeViewIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewBoldIcon],svg[ph-tree-view-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 156h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4H92V84h4a20 20 0 0 0 20-20V32a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v108a28 28 0 0 0 28 28h60v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4H96a4 4 0 0 1-4-4v-60h64v4a20 20 0 0 0 20 20M68 36h24v24H68Zm112 160h24v24h-24Zm0-88h24v24h-24Z"></svg:path>`,
})
export class PhTreeViewBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewDuotoneIcon],svg[ph-tree-view-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 32v32a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m104 64h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m0 88h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M176 152h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H88V80h8a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v112a24 24 0 0 0 24 24h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96a8 8 0 0 1-8-8v-64h72v8a16 16 0 0 0 16 16M64 32h32v32H64Zm112 160h32v32h-32Zm0-88h32v32h-32Z"></svg:path></svg:g>`,
})
export class PhTreeViewDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewFillIcon],svg[ph-tree-view-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 136v-8H88v64a8 8 0 0 0 8 8h64v-8a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-8H96a24 24 0 0 1-24-24V80h-8a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-8v32h72v-8a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhTreeViewFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewLightIcon],svg[ph-tree-view-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 150h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H86V78h10a14 14 0 0 0 14-14V32a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v114a22 22 0 0 0 22 22h66v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H96a10 10 0 0 1-10-10v-66h76v10a14 14 0 0 0 14 14M62 64V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2m112 128a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Zm0-88a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Z"></svg:path>`,
})
export class PhTreeViewLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewThinIcon],svg[ph-tree-view-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 148h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H84V76h12a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v116a20 20 0 0 0 20 20h68v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H96a12 12 0 0 1-12-12v-68h80v12a12 12 0 0 0 12 12M60 64V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4m112 128a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Zm0-88a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Z"></svg:path>`,
})
export class PhTreeViewThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownIcon],svg[ph-trend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L224 172.69V128a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhTrendDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownBoldIcon],svg[ph-trend-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h35l-67-67l-31.51 31.52a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L96 119l31.51-31.52a12 12 0 0 1 17 0L220 163v-35a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTrendDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownDuotoneIcon],svg[ph-trend-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128v64h-64Z" opacity=".2"></svg:path><svg:path d="M235.06 120.61a8 8 0 0 0-8.72 1.73L200 148.69l-58.34-58.35a8 8 0 0 0-11.32 0L96 124.69L29.66 58.34a8 8 0 0 0-11.32 11.32l72 72a8 8 0 0 0 11.32 0L136 107.31L188.69 160l-26.35 26.34A8 8 0 0 0 168 200h64a8 8 0 0 0 8-8v-64a8 8 0 0 0-4.94-7.39M224 184h-36.69L224 147.31Z"></svg:path></svg:g>`,
})
export class PhTrendDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownFillIcon],svg[ph-trend-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66L188.69 160L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L200 148.69l26.34-26.35A8 8 0 0 1 240 128"></svg:path>`,
})
export class PhTrendDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownLightIcon],svg[ph-trend-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 128v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.52L136 104.49l-35.76 35.75a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L96 127.51l35.76-35.75a6 6 0 0 1 8.48 0L226 177.52V128a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTrendDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownThinIcon],svg[ph-trend-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.34L136 101.66l-37.17 37.17a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L96 130.34l37.17-37.17a4 4 0 0 1 5.66 0L228 182.34V128a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTrendDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpIcon],svg[ph-trend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v64a8 8 0 0 1-16 0V75.31l-82.34 82.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L212.69 64H168a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrendUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpBoldIcon],svg[ph-trend-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTrendUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpDuotoneIcon],svg[ph-trend-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v64l-64-64Z" opacity=".2"></svg:path><svg:path d="M232 48h-64a8 8 0 0 0-5.66 13.66L188.69 88L136 140.69l-34.34-34.35a8 8 0 0 0-11.32 0l-72 72a8 8 0 0 0 11.32 11.32L96 123.31l34.34 34.35a8 8 0 0 0 11.32 0L200 99.31l26.34 26.35A8 8 0 0 0 240 120V56a8 8 0 0 0-8-8m-8 52.69L187.31 64H224Z"></svg:path></svg:g>`,
})
export class PhTrendUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpFillIcon],svg[ph-trend-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v64a8 8 0 0 1-13.66 5.66L200 99.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L188.69 88l-26.35-26.34A8 8 0 0 1 168 48h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrendUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpLightIcon],svg[ph-trend-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 56v64a6 6 0 0 1-12 0V70.48l-85.76 85.76a6 6 0 0 1-8.48 0L96 120.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0L136 143.51L217.52 62H168a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTrendUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpThinIcon],svg[ph-trend-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 56v64a4 4 0 0 1-8 0V65.66l-89.17 89.17a4 4 0 0 1-5.66 0L96 117.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0L136 146.34L222.34 60H168a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTrendUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleIcon],svg[ph-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224h174.9a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72"></svg:path>`,
})
export class PhTriangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleBoldIcon],svg[ph-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.26 186.1L152.81 34.23a28.74 28.74 0 0 0-49.62 0L15.74 186.1a27.45 27.45 0 0 0 0 27.71A28.31 28.31 0 0 0 40.55 228h174.9a28.31 28.31 0 0 0 24.79-14.19a27.45 27.45 0 0 0 .02-27.71m-20.8 15.7a4.46 4.46 0 0 1-4 2.2H40.55a4.46 4.46 0 0 1-4-2.2a3.56 3.56 0 0 1 0-3.73L124 46.2a4.75 4.75 0 0 1 8 0l87.45 151.87a3.56 3.56 0 0 1 .01 3.73"></svg:path>`,
})
export class PhTriangleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedIcon],svg[ph-triangle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 216a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m76.8-27.91l-4.66-8.09a8 8 0 0 0-13.86 8l4.65 8.09a7.59 7.59 0 0 1 0 7.72a8.5 8.5 0 0 1-7.48 4.2H192a8 8 0 0 0 0 16h23.45a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.73M64 208H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l4.65-8.08a8 8 0 1 0-13.86-8l-4.66 8.08a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224H64a8 8 0 0 0 0-16m138.18-56a8 8 0 0 0 6.93-12l-23-40a8 8 0 0 0-13.86 8l23 40a8 8 0 0 0 6.93 4M149.35 36.22a24.76 24.76 0 0 0-42.7 0L93 60a8 8 0 1 0 13.86 8l13.7-23.78a8.75 8.75 0 0 1 15 0L149.18 68a8 8 0 0 0 6.94 4a7.9 7.9 0 0 0 4-1.07A8 8 0 0 0 163 60Zm-68.5 60.85A8 8 0 0 0 69.93 100l-23 40a8 8 0 0 0 13.87 8l23-40a8 8 0 0 0-2.95-10.93"></svg:path>`,
})
export class PhTriangleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedBoldIcon],svg[ph-triangle-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 216a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12m76.26-29.9l-4.66-8.1a12 12 0 1 0-20.79 12l4.65 8.08a3.56 3.56 0 0 1 0 3.73a4.46 4.46 0 0 1-4 2.2H192a12 12 0 0 0 0 24h23.46a28.31 28.31 0 0 0 24.79-14.19a27.47 27.47 0 0 0 .01-27.72M64 204H40.55a4.46 4.46 0 0 1-4-2.2a3.56 3.56 0 0 1 0-3.73l4.64-8.07a12 12 0 1 0-20.79-12l-4.66 8.09a27.47 27.47 0 0 0 0 27.71A28.31 28.31 0 0 0 40.55 228H64a12 12 0 0 0 0-24m138.17-48a12 12 0 0 0 10.39-18l-23-40a12 12 0 0 0-20.8 12l23 40a12 12 0 0 0 10.42 6ZM166.5 58l-13.69-23.77a28.74 28.74 0 0 0-49.62 0L89.5 58a12 12 0 1 0 20.79 12L124 46.2a4.75 4.75 0 0 1 8 0L145.71 70a12 12 0 0 0 10.41 6a11.87 11.87 0 0 0 6-1.6A12 12 0 0 0 166.5 58M82.85 93.6A12 12 0 0 0 66.46 98l-23 40a12 12 0 0 0 20.8 12l23-40a12 12 0 0 0-4.41-16.4"></svg:path>`,
})
export class PhTriangleDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedDuotoneIcon],svg[ph-triangle-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91" opacity=".2"></svg:path><svg:path d="M160 216a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m76.8-27.91l-4.66-8.09a8 8 0 0 0-13.86 8l4.65 8.09a7.59 7.59 0 0 1 0 7.72a8.5 8.5 0 0 1-7.48 4.2H192a8 8 0 0 0 0 16h23.45a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.73M64 208H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l4.65-8.08a8 8 0 1 0-13.86-8l-4.66 8.08a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224H64a8 8 0 0 0 0-16m138.18-56a8 8 0 0 0 6.93-12l-23-40a8 8 0 0 0-13.86 8l23 40a8 8 0 0 0 6.93 4M149.35 36.22a24.76 24.76 0 0 0-42.7 0L93 60a8 8 0 1 0 13.86 8l13.7-23.78a8.75 8.75 0 0 1 15 0L149.18 68a8 8 0 0 0 6.94 4a7.9 7.9 0 0 0 4-1.07A8 8 0 0 0 163 60Zm-68.5 60.85A8 8 0 0 0 69.93 100l-23 40a8 8 0 0 0 13.87 8l23-40a8 8 0 0 0-2.95-10.93"></svg:path></svg:g>`,
})
export class PhTriangleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedFillIcon],svg[ph-triangle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224h174.9a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72M108 200H60.79a12 12 0 0 1-10.39-18l24.18-42a8 8 0 0 1 13.87 8l-20.74 36H108a8 8 0 0 1 0 16m-1.12-84A8 8 0 0 1 93 108l24.59-42.7a12 12 0 0 1 20.8 0L163 108a8 8 0 0 1-13.87 8L128 79.31Zm98.72 78a12.05 12.05 0 0 1-10.39 6H148a8 8 0 0 1 0-16h40.29l-20.74-36a8 8 0 0 1 13.87-8l24.18 42a12 12 0 0 1 0 12"></svg:path>`,
})
export class PhTriangleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedLightIcon],svg[ph-triangle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158 216a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m77.07-26.91l-4.66-8.09a6 6 0 1 0-10.4 6l4.66 8.09a9.49 9.49 0 0 1 0 9.72a10.46 10.46 0 0 1-9.21 5.2H192a6 6 0 0 0 0 12h23.45a22.37 22.37 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.73M64 210H40.55a10.46 10.46 0 0 1-9.21-5.2a9.49 9.49 0 0 1 0-9.72L36 187a6 6 0 0 0-10.4-6l-4.66 8.08a21.53 21.53 0 0 0 0 21.72A22.37 22.37 0 0 0 40.55 222H64a6 6 0 0 0 0-12m138.18-60a6 6 0 0 0 5.2-9l-23-40a6 6 0 1 0-10.4 6l23 40a6 6 0 0 0 5.2 3M147.61 37.22a22.75 22.75 0 0 0-39.22 0L94.69 61a6 6 0 1 0 10.4 6l13.7-23.78a10.75 10.75 0 0 1 18.42 0L150.91 67a6 6 0 0 0 10.4-6ZM79.85 98.8a6 6 0 0 0-8.19 2.2l-23 40A6 6 0 1 0 59 147l23-40a6 6 0 0 0-2.15-8.2"></svg:path>`,
})
export class PhTriangleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedThinIcon],svg[ph-triangle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 216a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m77.34-25.91l-4.66-8.09a4 4 0 1 0-6.93 4l4.65 8.08a11.45 11.45 0 0 1 0 11.72a12.47 12.47 0 0 1-10.94 6.2H192a4 4 0 0 0 0 8h23.46a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71M64 212H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l4.65-8.08a4 4 0 1 0-6.93-4l-4.66 8.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220H64a4 4 0 0 0 0-8m138.18-64a4 4 0 0 0 3.47-6l-23-40a4 4 0 1 0-6.93 4l23 40a4 4 0 0 0 3.46 2m-56.3-109.78a20.75 20.75 0 0 0-35.76 0L96.42 62a4 4 0 1 0 6.94 4l13.69-23.79a12.76 12.76 0 0 1 21.9 0L152.64 66a4 4 0 0 0 6.94-4Zm-67 62.31a4 4 0 0 0-5.49 1.47l-23 40a4 4 0 0 0 6.94 4l23-40a4 4 0 0 0-1.48-5.47Z"></svg:path>`,
})
export class PhTriangleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDuotoneIcon],svg[ph-triangle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91" opacity=".2"></svg:path><svg:path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.34 24.34 0 0 0 40.55 224h174.9a24.34 24.34 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72"></svg:path></svg:g>`,
})
export class PhTriangleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleFillIcon],svg[ph-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72"></svg:path>`,
})
export class PhTriangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleLightIcon],svg[ph-triangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.07 189.09L147.61 37.22a22.75 22.75 0 0 0-39.22 0L20.93 189.09a21.53 21.53 0 0 0 0 21.72A22.35 22.35 0 0 0 40.55 222h174.9a22.35 22.35 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.72m-10.41 15.71a10.46 10.46 0 0 1-9.21 5.2H40.55a10.46 10.46 0 0 1-9.21-5.2a9.49 9.49 0 0 1 0-9.72l87.45-151.87a10.75 10.75 0 0 1 18.42 0l87.46 151.87a9.49 9.49 0 0 1-.01 9.72"></svg:path>`,
})
export class PhTriangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleThinIcon],svg[ph-triangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.34 190.09L145.88 38.22a20.75 20.75 0 0 0-35.76 0L22.66 190.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220h174.92a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71m-6.94 15.71a12.47 12.47 0 0 1-10.94 6.2H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l87.45-151.87a12.76 12.76 0 0 1 21.9 0l87.45 151.87a11.45 11.45 0 0 1 0 11.72"></svg:path>`,
})
export class PhTriangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyIcon],svg[ph-trolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTrolleyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyBoldIcon],svg[ph-trolley-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 224a20 20 0 1 1-20-20a20 20 0 0 1 20 20m124-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m24-36H60V75.31a19.86 19.86 0 0 0-5.86-14.14L32.49 39.51a12 12 0 0 0-17 17L36 77v91h-4a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTrolleyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyDuotoneIcon],svg[ph-trolley-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 88v96H48V72h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTrolleyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyFillIcon],svg[ph-trolley-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 160h128a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhTrolleyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyLightIcon],svg[ph-trolley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 224a14 14 0 1 1-14-14a14 14 0 0 1 14 14m130-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m24-32H54V75.31a13.94 13.94 0 0 0-4.1-9.9L28.24 43.76a6 6 0 1 0-8.48 8.48L41.41 73.9a2 2 0 0 1 .59 1.41V178H32a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTrolleyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseIcon],svg[ph-trolley-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M72 144V72a16 16 0 0 1 16-16h32V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16m64-88h32V40h-32Zm-48 88h128V72H88Z"></svg:path>`,
})
export class PhTrolleySuitcaseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseBoldIcon],svg[ph-trolley-suitcase-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 156h120a20 20 0 0 0 20-20V76a20 20 0 0 0-20-20h-24V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v16H96a20 20 0 0 0-20 20v60a20 20 0 0 0 20 20m48-112h24v12h-24Zm-44 36h112v52H100Zm-8 144a20 20 0 1 1-20-20a20 20 0 0 1 20 20m144 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20m16-44a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h4V77L15.51 56.49a12 12 0 0 1 17-17l21.63 21.68A19.86 19.86 0 0 1 60 75.31V168h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTrolleySuitcaseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseDuotoneIcon],svg[ph-trolley-suitcase-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v72a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M72 144V72a16 16 0 0 1 16-16h32V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16m64-88h32V40h-32Zm-48 88h128V72H88Z"></svg:path></svg:g>`,
})
export class PhTrolleySuitcaseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseFillIcon],svg[ph-trolley-suitcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 224a16 16 0 1 1-16-16a16 16 0 0 1 16 16m128-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m24-32H56V75.31A15.86 15.86 0 0 0 51.31 64L29.66 42.34a8 8 0 0 0-11.32 11.32L40 75.31V176h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M72 144V72a16 16 0 0 1 16-16h32V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16m64-88h32V40h-32Z"></svg:path>`,
})
export class PhTrolleySuitcaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseLightIcon],svg[ph-trolley-suitcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 158h128a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14h-34V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v18H88a14 14 0 0 0-14 14v72a14 14 0 0 0 14 14m46-118a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v18h-36ZM86 72a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v72a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2Zm0 152a14 14 0 1 1-14-14a14 14 0 0 1 14 14m144 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m16-40a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h10V75.31a2 2 0 0 0-.59-1.41L19.76 52.24a6 6 0 1 1 8.48-8.48L49.9 65.41a13.94 13.94 0 0 1 4.1 9.9V178h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTrolleySuitcaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseThinIcon],svg[ph-trolley-suitcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 156h128a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v20H88a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12m44-116a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v20h-40ZM84 72a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v72a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm0 152a12 12 0 1 1-12-12a12 12 0 0 1 12 12m144 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m16-40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h12V75.31a4 4 0 0 0-1.17-2.83L21.17 50.83a4 4 0 0 1 5.66-5.66l21.66 21.66A12 12 0 0 1 52 75.31V180h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTrolleySuitcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyThinIcon],svg[ph-trolley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 224a12 12 0 1 1-12-12a12 12 0 0 1 12 12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m24-32H52V75.31a12 12 0 0 0-3.51-8.48L26.83 45.17a4 4 0 0 0-5.66 5.66l21.66 21.65A4 4 0 0 1 44 75.31V180H32a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTrolleyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyIcon],svg[ph-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64h-24V48a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16M48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm144-8.9c0 35.52-29 64.64-64 64.9a64 64 0 0 1-64-64V56h128ZM232 96a24 24 0 0 1-24 24h-.5a82 82 0 0 0 .5-8.9V80h24Z"></svg:path>`,
})
export class PhTrophyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyBoldIcon],svg[ph-trophy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60h-20V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v12H24A20 20 0 0 0 4 80v16a44.05 44.05 0 0 0 44 44h.77A84.18 84.18 0 0 0 116 195.15V212H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-16.89c30.94-4.51 56.53-26.2 67-55.11h1a44.05 44.05 0 0 0 44-44V80a20 20 0 0 0-20-20M28 96V84h16v28c0 1.21 0 2.41.09 3.61A20 20 0 0 1 28 96m160 15.1c0 33.33-26.71 60.65-59.54 60.9A60 60 0 0 1 68 112V60h120ZM228 96a20 20 0 0 1-16.12 19.62c.08-1.5.12-3 .12-4.52V84h16Z"></svg:path>`,
})
export class PhTrophyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyDuotoneIcon],svg[ph-trophy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v63.1c0 39.7-31.75 72.6-71.45 72.9A72 72 0 0 1 56 112V48Z" opacity=".2"></svg:path><svg:path d="M232 64h-24V48a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16M48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm144-8.9c0 35.52-29 64.64-64 64.9a64 64 0 0 1-64-64V56h128ZM232 96a24 24 0 0 1-24 24h-.5a82 82 0 0 0 .5-8.9V80h24Z"></svg:path></svg:g>`,
})
export class PhTrophyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyFillIcon],svg[ph-trophy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64h-24V48a8 8 0 0 0-8-8H56a8 8 0 0 0-8 8v16H24A16 16 0 0 0 8 80v16a40 40 0 0 0 40 40h3.65A80.13 80.13 0 0 0 120 191.61V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.42c31.94-3.23 58.44-25.64 68.08-55.58H208a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16M48 120a24 24 0 0 1-24-24V80h24v32q0 4 .39 8Zm184-24a24 24 0 0 1-24 24h-.5a82 82 0 0 0 .5-8.9V80h24Z"></svg:path>`,
})
export class PhTrophyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyLightIcon],svg[ph-trophy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 66h-26V48a6 6 0 0 0-6-6H56a6 6 0 0 0-6 6v18H24a14 14 0 0 0-14 14v16a38 38 0 0 0 38 38h5.14A78 78 0 0 0 122 189.75V218H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-28.25c32.44-2.52 59.43-25.3 68.62-55.75H208a38 38 0 0 0 38-38V80a14 14 0 0 0-14-14M48 122a26 26 0 0 1-26-26V80a2 2 0 0 1 2-2h26v34a81 81 0 0 0 .65 10Zm146-10.9c0 36.62-29.38 66.63-65.5 66.9A66 66 0 0 1 62 112V54h132ZM234 96a26 26 0 0 1-26 26h-2.77a78.5 78.5 0 0 0 .77-10.9V78h26a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTrophyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyThinIcon],svg[ph-trophy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 68h-28V48a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4v20H24a12 12 0 0 0-12 12v16a36 36 0 0 0 36 36h6.66A76 76 0 0 0 124 187.89V220H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-32.12c32.93-1.74 60.41-24.91 69.11-55.88H208a36 36 0 0 0 36-36V80a12 12 0 0 0-12-12M48 124a28 28 0 0 1-28-28V80a4 4 0 0 1 4-4h28v36a77 77 0 0 0 1 12Zm148-12.9c0 37.71-30.79 68.62-68 68.9a68 68 0 0 1-68-68V52h136ZM236 96a28 28 0 0 1-28 28h-5.1a77.4 77.4 0 0 0 1.1-12.9V76h28a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhTrophyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckIcon],svg[ph-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.42 117l-14-35a15.93 15.93 0 0 0-14.84-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.58-3M192 88h34.58l9.6 24H192ZM32 72h144v64H32Zm48 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m81-24h-50a32 32 0 0 0-62 0H32v-32h144v12.31A32.1 32.1 0 0 0 161 184m31 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32.06 32.06 0 0 0-31-24v-32h48Z"></svg:path>`,
})
export class PhTruckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckBoldIcon],svg[ph-truck-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.14 115.54l-14-35A19.89 19.89 0 0 0 222.58 68H196v-4a12 12 0 0 0-12-12H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h14.06a36 36 0 0 0 67.88 0h44.12a36 36 0 0 0 67.88 0H236a20 20 0 0 0 20-20v-64a21.7 21.7 0 0 0-.86-4.46M196 92h23.88l6.4 16H196ZM80 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12m92-41.92A36.32 36.32 0 0 0 158.06 180h-44.12a36 36 0 0 0-67.88 0H36v-40h136Zm0-46.08H36V76h136Zm20 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40-24h-6.06A36.09 36.09 0 0 0 196 156.23V132h36Z"></svg:path>`,
})
export class PhTruckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckDuotoneIcon],svg[ph-truck-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 120v64a8 8 0 0 1-8 8h-24a24 24 0 0 0-48 0h-64a24 24 0 0 0-48 0H32a8 8 0 0 1-8-8v-40h160v-24Z" opacity=".2"></svg:path><svg:path d="m255.42 117l-14-35a15.93 15.93 0 0 0-14.84-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.58-3M192 88h34.58l9.6 24H192ZM32 72h144v64H32Zm48 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m81-24h-50a32 32 0 0 0-62 0H32v-32h144v12.31A32.1 32.1 0 0 0 161 184m31 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32.06 32.06 0 0 0-31-24v-32h48Z"></svg:path></svg:g>`,
})
export class PhTruckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckFillIcon],svg[ph-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8.1 8.1 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-48-72V72h144v64Zm160 72a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24Z"></svg:path>`,
})
export class PhTruckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckLightIcon],svg[ph-truck-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.57 117.78l-14-35a13.93 13.93 0 0 0-13-8.8H190V64a6 6 0 0 0-6-6H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-.43-2.22M190 86h36.58a2 2 0 0 1 1.86 1.26l10.7 26.74H190ZM30 72a2 2 0 0 1 2-2h146v68H30Zm50 138a18 18 0 1 1 18-18a18 18 0 0 1-18 18m82.6-24h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-34h148v15.48A30.1 30.1 0 0 0 162.6 186m29.4 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30.05 30.05 0 0 0-29.4-24c-.67 0-1.34 0-2 .07V126h52Z"></svg:path>`,
})
export class PhTruckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckThinIcon],svg[ph-truck-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.71 118.52l-14-35A12 12 0 0 0 226.58 76H188V64a4 4 0 0 0-4-4H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-.29-1.48M188 84h38.58a4 4 0 0 1 3.72 2.51L242.09 116H188ZM28 72a4 4 0 0 1 4-4h148v72H28Zm52 140a20 20 0 1 1 20-20a20 20 0 0 1-20 20m84.29-24h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-36h152v18.71A28.05 28.05 0 0 0 164.29 188M192 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20m52-28a4 4 0 0 1-4 4h-20.29A28 28 0 0 0 188 164.29V124h56Z"></svg:path>`,
})
export class PhTruckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerIcon],svg[ph-truck-trailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96.8V96a56.06 56.06 0 0 0-56-56h-8a16 16 0 0 0-16 16v120h-16V72a8 8 0 0 0-8-8H16A16 16 0 0 0 0 80v104a32 32 0 0 0 56 21.13A32 32 0 0 0 111 192h82a32 32 0 0 0 63-8v-48a40.07 40.07 0 0 0-32-39.2M160 56h8a40 40 0 0 1 40 40v8a8 8 0 0 0 8 8a24 24 0 0 1 24 24v20.31a31.7 31.7 0 0 0-16-4.31a32.06 32.06 0 0 0-31 24h-33Zm-48 24v96h-1a32 32 0 0 0-55-13.13a31.9 31.9 0 0 0-40-6.56V80ZM32 200a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhTruckTrailerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerBoldIcon],svg[ph-truck-trailer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 93.65A60.08 60.08 0 0 0 164 36a20 20 0 0 0-20 20v116h-16V72a12 12 0 0 0-12-12H20A20 20 0 0 0 0 80v104a36 36 0 0 0 60 26.8a36 36 0 0 0 57.94-14.8h68.12A36 36 0 0 0 256 184v-48a44.08 44.08 0 0 0-32-42.35m-56-33.43A36.06 36.06 0 0 1 200 96v8a12 12 0 0 0 12 12a20 20 0 0 1 20 20v14.06A36 36 0 0 0 186.06 172H168ZM104 84v70.08a35.92 35.92 0 0 0-44 3.12a35.93 35.93 0 0 0-36-7.14V84ZM36 196a12 12 0 1 1 12-12a12 12 0 0 1-12 12m48 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m136 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhTruckTrailerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerDuotoneIcon],svg[ph-truck-trailer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 72h104v112h-16a24 24 0 0 0-48 0a24 24 0 0 0-48 0V80a8 8 0 0 1 8-8m200 32v-8a48 48 0 0 0-48-48h-8a8 8 0 0 0-8 8v128h48a24 24 0 0 1 48 0v-48a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M224 96.8V96a56.06 56.06 0 0 0-56-56h-8a16 16 0 0 0-16 16v120h-16V72a8 8 0 0 0-8-8H16A16 16 0 0 0 0 80v104a32 32 0 0 0 56 21.13A32 32 0 0 0 111 192h82a32 32 0 0 0 63-8v-48a40.07 40.07 0 0 0-32-39.2M160 56h8a40 40 0 0 1 40 40v8a8 8 0 0 0 8 8a24 24 0 0 1 24 24v20.31a31.7 31.7 0 0 0-16-4.31a32.06 32.06 0 0 0-31 24h-33Zm-48 24v96h-1a32 32 0 0 0-55-13.13a31.9 31.9 0 0 0-40-6.56V80ZM32 200a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhTruckTrailerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerFillIcon],svg[ph-truck-trailer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96.8V96a56.06 56.06 0 0 0-56-56h-8a16 16 0 0 0-16 16v120h-16V72a8 8 0 0 0-8-8H16A16 16 0 0 0 0 80v104a32 32 0 0 0 56 21.13A32 32 0 0 0 111 192h82a32 32 0 0 0 63-8v-48a40.07 40.07 0 0 0-32-39.2M32 200a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhTruckTrailerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerLightIcon],svg[ph-truck-trailer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 98.47V96a54.06 54.06 0 0 0-54-54h-8a14 14 0 0 0-14 14v122h-20V72a6 6 0 0 0-6-6H16A14 14 0 0 0 2 80v104a30 30 0 0 0 54 18a30 30 0 0 0 53.4-12h85.2a30 30 0 0 0 59.4-6v-48a38.07 38.07 0 0 0-32-37.53M158 56a2 2 0 0 1 2-2h8a42 42 0 0 1 42 42v8a6 6 0 0 0 6 6a26 26 0 0 1 26 26v24a30 30 0 0 0-47.4 18H158ZM16 78h98v100h-4.6A30 30 0 0 0 56 166a30 30 0 0 0-42-6V80a2 2 0 0 1 2-2m16 124a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m144 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhTruckTrailerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerThinIcon],svg[ph-truck-trailer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 100.22V96a52.06 52.06 0 0 0-52-52h-8a12 12 0 0 0-12 12v124h-24V72a4 4 0 0 0-4-4H16A12 12 0 0 0 4 80v104a28 28 0 0 0 52 14.41A28 28 0 0 0 107.71 188h88.58a28 28 0 0 0 55.71-4v-48a36.06 36.06 0 0 0-32-35.78M12 80a4 4 0 0 1 4-4h100v104h-8.29A28 28 0 0 0 56 169.59a28 28 0 0 0-44-5.16Zm20 124a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m144 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-48a28 28 0 0 0-27.71 24H156V56a4 4 0 0 1 4-4h8a44.05 44.05 0 0 1 44 44v8a4 4 0 0 0 4 4a28 28 0 0 1 28 28v28.43a27.9 27.9 0 0 0-20-8.43"></svg:path>`,
})
export class PhTruckTrailerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoIcon],svg[ph-tumblr-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 120a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8h-40V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8a40 40 0 0 1-40 40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h24v56a64.07 64.07 0 0 0 64 64h40a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 1-8-8v-48Zm-32 72h24v32h-32a48.05 48.05 0 0 1-48-48v-64a8 8 0 0 0-8-8H72V79.43A56.13 56.13 0 0 0 119.43 32H136v40a8 8 0 0 0 8 8h40v24h-40a8 8 0 0 0-8 8v56a24 24 0 0 0 24 24"></svg:path>`,
})
export class PhTumblrLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoBoldIcon],svg[ph-tumblr-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 124a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V24a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12a36 36 0 0 1-36 36a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h20v52a68.07 68.07 0 0 0 68 68h40a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-32a4 4 0 0 1-4-4v-44Zm-32 72h20v24h-28a44.05 44.05 0 0 1-44-44v-64a12 12 0 0 0-12-12H76V82.79A60.18 60.18 0 0 0 122.79 36H132v36a12 12 0 0 0 12 12h36v16h-36a12 12 0 0 0-12 12v56a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhTumblrLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoDuotoneIcon],svg[ph-tumblr-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 112v56a16 16 0 0 0 16 16h32v48h-40a56 56 0 0 1-56-56v-64H64V72a48 48 0 0 0 48-48h32v48h48v40Z" opacity=".2"></svg:path><svg:path d="M192 120a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8h-40V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8a40 40 0 0 1-40 40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h24v56a64.07 64.07 0 0 0 64 64h40a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 1-8-8v-48Zm-32 72h24v32h-32a48.05 48.05 0 0 1-48-48v-64a8 8 0 0 0-8-8H72V79.43A56.13 56.13 0 0 0 119.43 32H136v40a8 8 0 0 0 8 8h40v24h-40a8 8 0 0 0-8 8v56a24 24 0 0 0 24 24"></svg:path></svg:g>`,
})
export class PhTumblrLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoFillIcon],svg[ph-tumblr-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 120v48a8 8 0 0 0 8 8h32a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-40a64.07 64.07 0 0 1-64-64v-56H64a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8a40 40 0 0 0 40-40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v40h40a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8Z"></svg:path>`,
})
export class PhTumblrLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoLightIcon],svg[ph-tumblr-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 118a6 6 0 0 0 6-6V72a6 6 0 0 0-6-6h-42V24a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6a42 42 0 0 1-42 42a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h26v58a62.07 62.07 0 0 0 62 62h40a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6h-32a10 10 0 0 1-10-10v-50Zm-32 72h26v36h-34a50.06 50.06 0 0 1-50-50v-64a6 6 0 0 0-6-6H70V77.67A54.12 54.12 0 0 0 117.67 30H138v42a6 6 0 0 0 6 6h42v28h-42a6 6 0 0 0-6 6v56a22 22 0 0 0 22 22"></svg:path>`,
})
export class PhTumblrLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoThinIcon],svg[ph-tumblr-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 116a4 4 0 0 0 4-4V72a4 4 0 0 0-4-4h-44V24a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4a44.05 44.05 0 0 1-44 44a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h28v60a60.07 60.07 0 0 0 60 60h40a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4h-32a12 12 0 0 1-12-12v-52Zm-32 72h28v40h-36a52.06 52.06 0 0 1-52-52v-64a4 4 0 0 0-4-4H68V75.85A52.09 52.09 0 0 0 115.85 28H140v44a4 4 0 0 0 4 4h44v32h-44a4 4 0 0 0-4 4v56a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhTumblrLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoIcon],svg[ph-twitch-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m0 124.25L165.1 192H120a8 8 0 0 0-5.12 1.85L80 222.92V200a8 8 0 0 0-8-8H48V48h160ZM160 136V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m-48 0V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhTwitchLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoBoldIcon],svg[ph-twitch-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h12v28a12 12 0 0 0 19.68 9.22L124.34 212h40.76a20.06 20.06 0 0 0 12.81-4.64l42.89-35.74a19.93 19.93 0 0 0 7.2-15.37V48a20 20 0 0 0-20-20m-4 126.38L163.66 188H120a12 12 0 0 0-7.68 2.78L84 214.38V200a12 12 0 0 0-12-12H52V52h152ZM156 136V88a12 12 0 0 1 24 0v48a12 12 0 0 1-24 0m-48 0V88a12 12 0 0 1 24 0v48a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhTwitchLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoDuotoneIcon],svg[ph-twitch-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v108.25a8 8 0 0 1-2.88 6.15l-42.89 35.75a8.05 8.05 0 0 1-5.13 1.85H120l-48 40v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m0 124.25L165.1 192H120a8 8 0 0 0-5.12 1.85L80 222.92V200a8 8 0 0 0-8-8H48V48h160ZM160 136V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m-48 0V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhTwitchLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoFillIcon],svg[ph-twitch-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m-80 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhTwitchLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoLightIcon],svg[ph-twitch-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h18v34a6 6 0 0 0 9.84 4.61L122.17 206h42.93a14 14 0 0 0 9-3.25L217 167a14 14 0 0 0 5-10.76V48a14 14 0 0 0-14-14m2 122.25a2 2 0 0 1-.72 1.54l-42.9 35.75a2 2 0 0 1-1.28.46H120a6 6 0 0 0-3.84 1.39L78 227.19V200a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM174 88v48a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m-48 0v48a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTwitchLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoThinIcon],svg[ph-twitch-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h20v36a4 4 0 0 0 2.3 3.62a3.9 3.9 0 0 0 1.7.38a4 4 0 0 0 2.56-.93L121.45 204h43.65a12.06 12.06 0 0 0 7.69-2.78l42.89-35.75a11.93 11.93 0 0 0 4.32-9.22V48a12 12 0 0 0-12-12m4 120.25a4 4 0 0 1-1.44 3.08l-42.9 35.74a4 4 0 0 1-2.56.93H120a4 4 0 0 0-2.56.93L76 231.46V200a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM172 88v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-48 0v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTwitchLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoIcon],svg[ph-twitter-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.66 48.66 0 0 0-41.47-24a46.9 46.9 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a111 111 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72m-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.51-6.25 27.56-17 37.88-32.48A8 8 0 0 0 92 169.08c-.47-.27-43.91-26.34-44-96c16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.94 30.94 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"></svg:path>`,
})
export class PhTwitterLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoBoldIcon],svg[ph-twitter-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.09 67.41A12 12 0 0 0 240 60h-28.18a52.73 52.73 0 0 0-43.67-24a50.85 50.85 0 0 0-36.6 14.85A51.87 51.87 0 0 0 116 88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12 12 0 0 0-20.47 7.38c-6.31 70.17 24.65 107.79 42.06 123.12C56.4 192.83 36 200.68 35.8 200.76a12 12 0 0 0-5.8 17.9C32 221.55 43.44 236 80 236c72.25 0 132.7-55.26 139.6-126.63l28.88-28.88a12 12 0 0 0 2.61-13.08m-51.57 28.11a11.93 11.93 0 0 0-3.49 7.72C192.14 164.23 141.18 212 80 212a91 91 0 0 1-12.49-.79C78 204.55 89.72 195.07 98 182.66a12 12 0 0 0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37 94.4 96 110.79 126 115.84A12 12 0 0 0 140 104V88a28 28 0 0 1 8.41-20.07A27.07 27.07 0 0 1 167.86 60a28.83 28.83 0 0 1 25.82 16.81a12 12 0 0 0 11 7.19H211Z"></svg:path>`,
})
export class PhTwitterLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoDuotoneIcon],svg[ph-twitter-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 72l-32 32c-4.26 66.84-60.08 120-128 120c-32 0-40-12-40-12s32-12 48-36c0 0-55.15-32-47.22-120c0 0 39.66 40 87.22 48V88c0-22 18-40.27 40-40a40.74 40.74 0 0 1 36.67 24Z" opacity=".2"></svg:path><svg:path d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.65 48.65 0 0 0-41.47-24a46.87 46.87 0 0 0-33.74 13.7A47.87 47.87 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.3 47.79 9.57 79.77 22 98.18a111 111 0 0 0 21.89 24.2c-15.27 17.53-39.25 26.74-39.5 26.84a8 8 0 0 0-3.85 11.93c.74 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.68 0 129.72-54.42 135.76-124.44l29.9-29.9a8 8 0 0 0 1.73-8.72m-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.52-6.25 27.56-17 37.88-32.48a8 8 0 0 0-2.61-11.34c-.13-.08-12.86-7.74-24.48-25.29C54.54 124.11 48 100.38 48 73.09c16 13 45.25 33.18 78.69 38.8A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.9 30.9 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z"></svg:path></svg:g>`,
})
export class PhTwitterLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoFillIcon],svg[ph-twitter-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a111 111 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhTwitterLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoLightIcon],svg[ph-twitter-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.54 69.71A6 6 0 0 0 240 66h-31.6a46.6 46.6 0 0 0-40.33-24a44.93 44.93 0 0 0-32.31 13.12A45.92 45.92 0 0 0 122 88v8.66c-42-10-76.6-44.52-77-44.88a6 6 0 0 0-10.2 3.68c-4.25 47.22 9.42 78.75 21.64 96.89a107.7 107.7 0 0 0 23.07 25c-15.49 19-41.34 28.89-41.62 29a6 6 0 0 0-2.88 9C36 216.83 45.78 230 80 230c69.88 0 128.23-54 133.82-123.34l30.42-30.41a6 6 0 0 0 1.3-6.54m-41.78 30.05a6 6 0 0 0-1.75 3.86C197.93 167.76 144.33 218 80 218c-14 0-22.76-2.41-28.06-4.8c11.3-5.68 29.72-16.88 41.05-33.87a6 6 0 0 0 .85-4.67a6 6 0 0 0-2.84-3.84c-.13-.08-13.13-7.86-25-25.72C52 124 45.31 98.43 46 68.88c14.88 12.6 45.57 35.09 81 41a6 6 0 0 0 7-5.92V88a34 34 0 0 1 10.19-24.34A33.05 33.05 0 0 1 167.93 54c13.43.17 26 8.37 31.24 20.4a6 6 0 0 0 5.5 3.6h20.84Z"></svg:path>`,
})
export class PhTwitterLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoThinIcon],svg[ph-twitter-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.7 70.47A4 4 0 0 0 240 68h-32.8a44.57 44.57 0 0 0-39.15-24a42.76 42.76 0 0 0-30.88 12.55A43.85 43.85 0 0 0 124 88v11.16c-43.65-9.39-80-45.6-80.39-46a4 4 0 0 0-4.19-.95a4 4 0 0 0-2.63 3.41c-4.2 46.62 9.27 77.71 21.31 95.59A103.7 103.7 0 0 0 82.35 177c-15.68 20.49-43.46 31.13-43.75 31.24a4 4 0 0 0-1.93 6c.27.4 2.79 4 9.54 7.36C54.73 225.84 66.1 228 80 228c69.09 0 126.73-53.56 131.89-122.23l30.94-30.94a4 4 0 0 0 .87-4.36m-38.53 30.7a4 4 0 0 0-1.16 2.58C199.85 168.94 145.38 220 80 220c-17.85 0-27.63-3.89-32.5-6.87c10.37-4.82 31.45-16.34 43.83-34.91a4 4 0 0 0 .56-3.12a3.93 3.93 0 0 0-1.89-2.55c-.13-.08-13.39-8-25.52-26.15C54 130.71 42.39 104.11 44.19 64.65c13.17 11.62 45.48 37 83.15 43.3a4 4 0 0 0 4.66-4V88a36 36 0 0 1 10.79-25.76A35 35 0 0 1 168 52c14.2.18 27.49 8.86 33.06 21.61a4 4 0 0 0 3.61 2.39h25.67Z"></svg:path>`,
})
export class PhTwitterLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaIcon],svg[ph-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128Zm64.15 0c1.39-30.77 10.53-52.81 18.3-66.24A106.4 106.4 0 0 1 128 43.16a106.3 106.3 0 0 1 13.52 18.6C154.8 84.7 159 109.28 159.82 128Zm79.65 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z"></svg:path>`,
})
export class PhUmbrellaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaBoldIcon],svg[ph-umbrella-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.93 126.3A116.43 116.43 0 0 0 49 50.81a115.45 115.45 0 0 0-37 75.49A20 20 0 0 0 32 148h84v52a36 36 0 0 0 72 0a12 12 0 0 0-24 0a12 12 0 0 1-24 0v-52h84a20 20 0 0 0 20-21.7ZM100.41 124c2.67-39.33 18.08-63.51 27.59-74.87c9.52 11.39 24.92 35.56 27.59 74.87Zm-35.1-55.54A92 92 0 0 1 99 48.65C88.8 65.25 78.39 90.08 76.36 124H36.44a91.56 91.56 0 0 1 28.87-55.54M179.64 124c-2-33.92-12.44-58.75-22.65-75.35A92.19 92.19 0 0 1 219.56 124Z"></svg:path>`,
})
export class PhUmbrellaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaDuotoneIcon],svg[ph-umbrella-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32S88 64 88 136H32a8 8 0 0 1-8-8.71A104.21 104.21 0 0 1 128 32m104 95.29A104.21 104.21 0 0 0 128 32s40 32 40 104h56a8 8 0 0 0 8-8.71" opacity=".2"></svg:path><svg:path d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128Zm64.15 0c1.39-30.77 10.53-52.81 18.3-66.24A106.4 106.4 0 0 1 128 43.16a106.3 106.3 0 0 1 13.52 18.6C154.8 84.7 159 109.28 159.82 128Zm79.65 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z"></svg:path></svg:g>`,
})
export class PhUmbrellaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaFillIcon],svg[ph-umbrella-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 126.63A112.21 112.21 0 0 0 128 24A112.21 112.21 0 0 0 16.05 126.63A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128zm143.83 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z"></svg:path>`,
})
export class PhUmbrellaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaLightIcon],svg[ph-umbrella-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0a6 6 0 0 0-12 0a18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21M94.11 130c1.69-51.21 24.7-80.16 33.89-89.73c9.2 9.58 32.2 38.53 33.89 89.73Zm-63.57-.65a2 2 0 0 1-.53-1.56a98.14 98.14 0 0 1 82.91-88.62c-12 15-29.43 44.44-30.83 90.83H32a2 2 0 0 1-1.46-.65m194.92 0a2 2 0 0 1-1.46.65h-50.09c-1.4-46.39-18.81-75.87-30.83-90.83A98.14 98.14 0 0 1 226 127.79a2 2 0 0 1-.54 1.56"></svg:path>`,
})
export class PhUmbrellaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleIcon],svg[ph-umbrella-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.43 96.43 0 0 1 161.4-62.48A95.32 95.32 0 0 1 224 128Z"></svg:path>`,
})
export class PhUmbrellaSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleBoldIcon],svg[ph-umbrella-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.93 126.3A116.43 116.43 0 0 0 49 50.81a115.45 115.45 0 0 0-37 75.49A20 20 0 0 0 32 148h84v52a36 36 0 0 0 72 0a12 12 0 0 0-24 0a12 12 0 0 1-24 0v-52h84a20 20 0 0 0 20-21.7ZM36.44 124a92.45 92.45 0 0 1 154.25-55.54A91.56 91.56 0 0 1 219.56 124Z"></svg:path>`,
})
export class PhUmbrellaSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleDuotoneIcon],svg[ph-umbrella-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 136H32a8 8 0 0 1-8-8.71a104.37 104.37 0 0 1 207.94 0A8 8 0 0 1 224 136" opacity=".2"></svg:path><svg:path d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.43 96.43 0 0 1 161.4-62.48A95.32 95.32 0 0 1 224 128Z"></svg:path></svg:g>`,
})
export class PhUmbrellaSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleFillIcon],svg[ph-umbrella-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.76 138.83A16 16 0 0 1 224 144h-88v56a16 16 0 0 0 32 0a8 8 0 0 1 16 0a32 32 0 0 1-64 0v-56H32a16 16 0 0 1-16-17.37a112.44 112.44 0 0 1 188.2-72.88a111.56 111.56 0 0 1 35.8 72.88a16.1 16.1 0 0 1-4.24 12.2"></svg:path>`,
})
export class PhUmbrellaSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleLightIcon],svg[ph-umbrella-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0a6 6 0 0 0-12 0a18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21m-12.49 2.56a2 2 0 0 1-1.51.65H32a2 2 0 0 1-1.49-.65a2 2 0 0 1-.53-1.56a98.43 98.43 0 0 1 164.78-63.74A97.5 97.5 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z"></svg:path>`,
})
export class PhUmbrellaSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleThinIcon],svg[ph-umbrella-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 127A108.44 108.44 0 0 0 54.46 56.69A107.53 107.53 0 0 0 20 127a12 12 0 0 0 12 13h92v60a28 28 0 0 0 56 0a4 4 0 0 0-8 0a20 20 0 0 1-40 0v-60h92a12 12 0 0 0 12-13m-9 3.74a4 4 0 0 1-3 1.3H32a4 4 0 0 1-4-4.38a100.43 100.43 0 0 1 168.1-65a99.53 99.53 0 0 1 31.88 65a4 4 0 0 1-1.05 3.04Z"></svg:path>`,
})
export class PhUmbrellaSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaThinIcon],svg[ph-umbrella-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 127A108.44 108.44 0 0 0 54.46 56.69A107.53 107.53 0 0 0 20 127a12 12 0 0 0 12 13h92v60a28 28 0 0 0 56 0a4 4 0 0 0-8 0a20 20 0 0 1-40 0v-60h92a12 12 0 0 0 12-13m-204 5a4 4 0 0 1-4-4.38a100.2 100.2 0 0 1 89.73-91.09C106 49.76 85.08 80.45 84 132Zm60 0c1.21-56 27.6-86.37 35.94-94.57c8.41 8.21 34.79 38.57 36 94.57Zm134.87-1.3a4 4 0 0 1-3 1.3H172c-1-51.55-22-82.24-33.7-95.47a100.2 100.2 0 0 1 89.7 91.09a4 4 0 0 1-1.07 3.08Z"></svg:path>`,
})
export class PhUmbrellaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionIcon],svg[ph-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 64v80a80 80 0 0 1-160 0V64a8 8 0 0 1 16 0v80a64 64 0 0 0 128 0V64a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhUnionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionBoldIcon],svg[ph-union-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 64v80a84 84 0 0 1-168 0V64a12 12 0 0 1 24 0v80a60 60 0 0 0 120 0V64a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhUnionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionDuotoneIcon],svg[ph-union-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 64v80a72 72 0 0 1-144 0V64Z" opacity=".2"></svg:path><svg:path d="M208 64v80a80 80 0 0 1-160 0V64a8 8 0 0 1 16 0v80a64 64 0 0 0 128 0V64a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhUnionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionFillIcon],svg[ph-union-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104a56 56 0 0 1-112 0V80a8 8 0 0 1 16 0v56a40 40 0 0 0 80 0V80a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhUnionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionLightIcon],svg[ph-union-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 64v80a78 78 0 0 1-156 0V64a6 6 0 0 1 12 0v80a66 66 0 0 0 132 0V64a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhUnionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionThinIcon],svg[ph-union-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 64v80a76 76 0 0 1-152 0V64a4 4 0 0 1 8 0v80a68 68 0 0 0 136 0V64a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhUnionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteIcon],svg[ph-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a64.11 64.11 0 0 1 48 62M45.47 56.79l52.62 52.61a80.5 80.5 0 0 0-9.93 15.44L36.3 73a64 64 0 0 1 9.17-16.21M73 36.3l51.86 51.86a80.5 80.5 0 0 0-15.44 9.93L56.79 45.47A64 64 0 0 1 73 36.3m61.46 110.83l-25.57-25.57a64.7 64.7 0 0 1 12.69-12.69l25.57 25.57a64.7 64.7 0 0 1-12.71 12.69ZM155.31 120L136 100.69A63.5 63.5 0 0 1 160 96a63.5 63.5 0 0 1-4.69 24m-54.62 16L120 155.31A63.5 63.5 0 0 1 96 160a63.5 63.5 0 0 1 4.69-24m45.91 21.91l52.61 52.62A64 64 0 0 1 183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.46-9.93m11.31-11.31a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.19Zm.09-66.55a80 80 0 0 0-16.49 2.13l-50-50C93 32.07 94.48 32 96 32a64.11 64.11 0 0 1 62 48.05M32 96c0-1.52.07-3 .18-4.51l50 50A80 80 0 0 0 80.05 158A64.11 64.11 0 0 1 32 96m66 80a80 80 0 0 0 16.49-2.13l50 50c-1.49.11-3 .18-4.51.18A64.11 64.11 0 0 1 98 176"></svg:path>`,
})
export class PhUniteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteBoldIcon],svg[ph-unite-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 78A84 84 0 1 0 78 178A84 84 0 1 0 178 78m42 82a61 61 0 0 1-.38 6.65l-44-44a83.3 83.3 0 0 0 4-19.34A60.09 60.09 0 0 1 220 160m-74-30.94L126.94 110a59.57 59.57 0 0 1 28.9-9.81a59.57 59.57 0 0 1-9.84 28.87m-36-2.12L129.06 146a59.57 59.57 0 0 1-28.9 9.81a59.57 59.57 0 0 1 9.84-28.87m42.7-50.6a83.3 83.3 0 0 0-19.34 4l-44-44A61 61 0 0 1 96 36a60.09 60.09 0 0 1 56.67 40.34ZM64.19 45.16l46.73 46.73a85 85 0 0 0-19 19l-46.76-46.7a60.45 60.45 0 0 1 19.03-19.03M36 96a61 61 0 0 1 .38-6.65l44 44a83.3 83.3 0 0 0-4 19.34A60.09 60.09 0 0 1 36 96m67.33 83.66a83.3 83.3 0 0 0 19.34-4l44 44a61 61 0 0 1-6.67.34a60.09 60.09 0 0 1-56.67-40.34m88.48 31.18l-46.73-46.73a85 85 0 0 0 19-19l46.73 46.73a60.45 60.45 0 0 1-19 19"></svg:path>`,
})
export class PhUniteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteDuotoneIcon],svg[ph-unite-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160a72 72 0 0 1-143.6 7.6a72 72 0 1 1 79.2-79.2A72 72 0 0 1 232 160" opacity=".2"></svg:path><svg:path d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 0a64.07 64.07 0 0 1-64 64a64.07 64.07 0 0 1 64-64m0 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path></svg:g>`,
})
export class PhUniteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteFillIcon],svg[ph-unite-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 164a76 76 0 0 1-151.9 3.9a76 76 0 1 1 79.8-79.8A76.1 76.1 0 0 1 240 164"></svg:path>`,
})
export class PhUniteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteLightIcon],svg[ph-unite-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.91 83.09a78 78 0 1 0-89.82 89.82a78 78 0 1 0 89.82-89.82M226 160a65 65 0 0 1-.62 8.9l-53.76-53.77A77.8 77.8 0 0 0 174 96v-.49A66.1 66.1 0 0 1 226 160M45.31 53.79l55.5 55.5a77.9 77.9 0 0 0-12 19L34 73.48a66 66 0 0 1 11.31-19.69m88.92 96l-28-28a66.5 66.5 0 0 1 15.52-15.52l28 28a66.5 66.5 0 0 1-15.52 15.48ZM162 96a65.6 65.6 0 0 1-6 27.49L132.51 100A65.6 65.6 0 0 1 160 94h1.95c.05.7.05 1.35.05 2m-52.71 4.81l-55.5-55.5A66 66 0 0 1 73.48 34l54.8 54.81a77.9 77.9 0 0 0-18.99 12M94 160a65.6 65.6 0 0 1 6-27.49L123.49 156A65.6 65.6 0 0 1 96 162c-.65 0-1.3 0-2-.05zm52.71-4.81l55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.9 77.9 0 0 0 18.99-12m8.48-8.48a77.9 77.9 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69Zm5.3-64.7H160a77.8 77.8 0 0 0-19.13 2.38L87.1 30.62A65 65 0 0 1 96 30a66.1 66.1 0 0 1 64.49 52ZM30 96a65 65 0 0 1 .62-8.9l53.76 53.77A77.8 77.8 0 0 0 82 160v.49A66.1 66.1 0 0 1 30 96m65.51 78H96a77.8 77.8 0 0 0 19.13-2.38l53.77 53.76a65 65 0 0 1-8.9.62a66.1 66.1 0 0 1-64.49-52"></svg:path>`,
})
export class PhUniteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareIcon],svg[ph-unite-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-68.69 56L48 100.69V59.31L196.69 208Zm-96-160h41.38L208 155.31v41.38ZM208 132.69L179.31 104H208Zm-56-56L123.31 48H152ZM48 123.31L76.69 152H48Zm56 56L132.69 208H104Z"></svg:path>`,
})
export class PhUniteSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareBoldIcon],svg[ph-unite-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44L52 91V69l135 135ZM69 52h22l113 113v22Zm135 79l-23-23h23Zm-56-56l-23-23h23Zm-96 50l23 23H52Zm56 56l23 23h-23Z"></svg:path>`,
})
export class PhUniteSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareDuotoneIcon],svg[ph-unite-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v120H96v-56H40V40h120v56Z" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 120H104v-48a8 8 0 0 0-8-8H48V48h104v48a8 8 0 0 0 8 8h48Z"></svg:path></svg:g>`,
})
export class PhUniteSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareFillIcon],svg[ph-unite-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v120a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-48H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhUniteSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareLightIcon],svg[ph-unite-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-61.52 120L46 101.52v-47L201.52 210Zm-100-164h47L210 154.48v47ZM210 137.52L174.48 102H210Zm-56-56L118.48 46H154Zm-108 37L81.52 154H46Zm56 56L137.52 210H102Z"></svg:path>`,
})
export class PhUniteSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareThinIcon],svg[ph-unite-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-62.34 120L44 102.34V49.66L206.34 212Zm-104-168h52.68L212 153.66v52.68ZM212 142.34L169.66 100H212Zm-56-56L113.66 44H156ZM44 113.66L86.34 156H44Zm56 56L142.34 212H100Z"></svg:path>`,
})
export class PhUniteSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteThinIcon],svg[ph-unite-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.17 84.83a76 76 0 1 0-86.34 86.34a76 76 0 1 0 86.34-86.34M228 160a68.6 68.6 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.93A68.1 68.1 0 0 1 228 160M45.2 50.86l58.34 58.33a76.4 76.4 0 0 0-14.09 22.6L31.67 74A68.1 68.1 0 0 1 45.2 50.86M74 31.67l57.78 57.78a76.4 76.4 0 0 0-22.6 14.09L50.86 45.2A68.1 68.1 0 0 1 74 31.67M164 96a67.6 67.6 0 0 1-7.45 30.89l-27.44-27.44A67.6 67.6 0 0 1 160 92c1.3 0 2.6 0 3.88.12c.12 1.28.12 2.58.12 3.88m-30 56.36L103.64 122A68.7 68.7 0 0 1 122 103.64L152.36 134A68.7 68.7 0 0 1 134 152.36M92 160a67.6 67.6 0 0 1 7.45-30.89l27.44 27.44A67.6 67.6 0 0 1 96 164c-1.3 0-2.6-.05-3.88-.12c-.07-1.28-.12-2.58-.12-3.88m54.81-7.54l58.33 58.34A68.1 68.1 0 0 1 182 224.33l-57.78-57.78a76.4 76.4 0 0 0 22.59-14.09m5.65-5.65a76.4 76.4 0 0 0 14.09-22.6L224.33 182a68.1 68.1 0 0 1-13.53 23.15Zm10.47-62.74c-1 0-2-.07-2.93-.07a76 76 0 0 0-19.73 2.61L82.93 29.27a68 68 0 0 1 80 54.8M28 96a68.6 68.6 0 0 1 1.27-13.07l57.34 57.34A76 76 0 0 0 84 160c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96m65.07 75.93c1 0 2 .07 2.93.07a76 76 0 0 0 19.73-2.61l57.34 57.34a68 68 0 0 1-80-54.8"></svg:path>`,
})
export class PhUniteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadIcon],svg[ph-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16M85.66 77.66L120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32M200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhUploadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadBoldIcon],svg[ph-upload-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 184a16 16 0 1 1 16-16a16 16 0 0 1-16 16m36-68h-44a12 12 0 0 0 0 24h40v56H36v-56h40a12 12 0 0 0 0-24H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20M88.49 80.49L116 53v75a12 12 0 0 0 24 0V53l27.51 27.52a12 12 0 1 0 17-17l-48-48a12 12 0 0 0-17 0l-48 48a12 12 0 1 0 17 17Z"></svg:path>`,
})
export class PhUploadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadDuotoneIcon],svg[ph-upload-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 136v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16M85.66 77.66L120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32M200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path></svg:g>`,
})
export class PhUploadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadFillIcon],svg[ph-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.34 77.66a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L136 43.31V128a8 8 0 0 1-16 0V43.31L85.66 77.66a8 8 0 0 1-11.32 0M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h68a4 4 0 0 1 4 4v3.46c0 13.45 11 24.79 24.46 24.54A24 24 0 0 0 152 128v-4a4 4 0 0 1 4-4h68a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhUploadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadLightIcon],svg[ph-upload-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h48a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-48a6 6 0 0 1 0-12h48a14 14 0 0 1 14 14M84.24 76.24L122 38.49V128a6 6 0 0 0 12 0V38.49l37.76 37.75a6 6 0 0 0 8.48-8.48l-48-48a6 6 0 0 0-8.48 0l-48 48a6 6 0 0 0 8.48 8.48M198 168a10 10 0 1 0-10 10a10 10 0 0 0 10-10"></svg:path>`,
})
export class PhUploadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleIcon],svg[ph-upload-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M93.66 77.66L120 51.31V144a8 8 0 0 0 16 0V51.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32"></svg:path>`,
})
export class PhUploadSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleBoldIcon],svg[ph-upload-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 144v64a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-64a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0M96.49 80.49L116 61v83a12 12 0 0 0 24 0V61l19.51 19.52a12 12 0 1 0 17-17l-40-40a12 12 0 0 0-17 0l-40 40a12 12 0 1 0 17 17Z"></svg:path>`,
})
export class PhUploadSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleDuotoneIcon],svg[ph-upload-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160H40V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M93.66 77.66L120 51.31V144a8 8 0 0 0 16 0V51.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32"></svg:path></svg:g>`,
})
export class PhUploadSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleFillIcon],svg[ph-upload-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0M88 80h32v64a8 8 0 0 0 16 0V80h32a8 8 0 0 0 5.66-13.66l-40-40a8 8 0 0 0-11.32 0l-40 40A8 8 0 0 0 88 80"></svg:path>`,
})
export class PhUploadSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleLightIcon],svg[ph-upload-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 144v64a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6v-64a6 6 0 0 1 12 0v58h164v-58a6 6 0 0 1 12 0M92.24 76.24L122 46.49V144a6 6 0 0 0 12 0V46.49l29.76 29.75a6 6 0 0 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhUploadSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleThinIcon],svg[ph-upload-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0M90.83 74.83L124 41.66V144a4 4 0 0 0 8 0V41.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhUploadSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadThinIcon],svg[ph-upload-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 136v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-64a12 12 0 0 1 12-12h48a4 4 0 0 1 0 8H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4v-64a4 4 0 0 0-4-4h-48a4 4 0 0 1 0-8h48a12 12 0 0 1 12 12M82.83 74.83L124 33.66V128a4 4 0 0 0 8 0V33.66l41.17 41.17a4 4 0 1 0 5.66-5.66l-48-48a4 4 0 0 0-5.66 0l-48 48a4 4 0 0 0 5.66 5.66M196 168a8 8 0 1 0-8 8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhUploadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbIcon],svg[ph-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.44 121.34l-48-32A8 8 0 0 0 192 96v24H72V72h33a32 32 0 1 0 0-16H72a16 16 0 0 0-16 16v48H8a8 8 0 0 0 0 16h48v48a16 16 0 0 0 16 16h32v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H72v-48h120v24a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M136 48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-16 128h32v32h-32Zm88-30.95V111l25.58 17Z"></svg:path>`,
})
export class PhUsbIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbBoldIcon],svg[ph-usb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.2 118.4l-48-36A12 12 0 0 0 184 92v24H76V76h22.06a36 36 0 1 0 0-24H72a20 20 0 0 0-20 20v44H12a12 12 0 0 0 0 24h40v44a20 20 0 0 0 20 20h24v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4H76v-40h108v24a12 12 0 0 0 19.2 9.6l48-36a12 12 0 0 0 0-19.2M132 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-12 128h24v24h-24Zm88-40v-24l16 12Z"></svg:path>`,
})
export class PhUsbBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbDuotoneIcon],svg[ph-usb-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m40 32v64l48-32Zm-48 72h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="m252.44 121.34l-48-32A8 8 0 0 0 192 96v24H72V72h33a32 32 0 1 0 0-16H72a16 16 0 0 0-16 16v48H8a8 8 0 0 0 0 16h48v48a16 16 0 0 0 16 16h32v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H72v-48h120v24a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M136 48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-16 128h32v32h-32Zm88-30.95V111l25.58 17Z"></svg:path></svg:g>`,
})
export class PhUsbDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbFillIcon],svg[ph-usb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 128a4 4 0 0 1-1.78 3.33l-48 32A4 4 0 0 1 196 160v-24H72v48h36v-8a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12h-32a12 12 0 0 1-12-12v-8H72a16 16 0 0 1-16-16v-48H8a8 8 0 0 1 0-16h48V72a16 16 0 0 1 16-16h37.17a28 28 0 1 1 0 16H72v48h124V96a4 4 0 0 1 6.22-3.33l48 32A4 4 0 0 1 252 128"></svg:path>`,
})
export class PhUsbFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbLightIcon],svg[ph-usb-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.33 123l-48-32a6 6 0 0 0-9.33 5v26H70V72a2 2 0 0 1 2-2h34.6a30 30 0 1 0 0-12H72a14 14 0 0 0-14 14v50H8a6 6 0 0 0 0 12h50v50a14 14 0 0 0 14 14h34v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H72a2 2 0 0 1-2-2v-50h124v26a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M136 46a18 18 0 1 1-18 18a18 18 0 0 1 18-18m-18 130a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Zm88-27.21v-41.58L237.18 128Z"></svg:path>`,
})
export class PhUsbLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbThinIcon],svg[ph-usb-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.22 124.67l-48-32A4 4 0 0 0 196 96v28H68V72a4 4 0 0 1 4-4h36.29a28 28 0 1 0 0-8H72a12 12 0 0 0-12 12v52H8a4 4 0 0 0 0 8h52v52a12 12 0 0 0 12 12h36v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H72a4 4 0 0 1-4-4v-52h128v28a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M136 44a20 20 0 1 1-20 20a20 20 0 0 1 20-20m-20 132a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Zm88-23.47v-49.06L240.79 128Z"></svg:path>`,
})
export class PhUsbThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserIcon],svg[ph-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"></svg:path>`,
})
export class PhUserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserBoldIcon],svg[ph-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52"></svg:path>`,
})
export class PhUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckIcon],svg[ph-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.25-10.3c-14.94-17.78-33.52-30.41-54.12-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m197.66 33.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L216 148.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhUserCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckBoldIcon],svg[ph-user-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.5 156.54a72 72 0 1 0-89 0a124 124 0 0 0-48.69 35.74a12 12 0 0 0 18.38 15.44C46.88 191.42 71 172 108 172s61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44a123.9 123.9 0 0 0-48.69-35.74M60 100a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m192.49 36.49l-32 32a12 12 0 0 1-17 0l-16-16a12 12 0 0 1 17-17L212 143l23.51-23.52a12 12 0 1 1 17 17Z"></svg:path>`,
})
export class PhUserCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckDuotoneIcon],svg[ph-user-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2"></svg:path><svg:path d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.25-10.3c-14.94-17.78-33.52-30.41-54.12-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m197.66 33.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L216 148.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhUserCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckFillIcon],svg[ph-user-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 133.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L216 148.69l26.34-26.35a8 8 0 0 1 11.32 11.32M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17A8 8 0 0 0 24 208h168a8 8 0 0 0 6.13-13.15c-14.95-17.78-33.53-30.41-54.13-37.17"></svg:path>`,
})
export class PhUserCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckLightIcon],svg[ph-user-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 158.25a66 66 0 1 0-62 0c-22 6.23-41.88 19.16-57.61 37.89a6 6 0 0 0 9.18 7.72C49.11 179.44 77.31 166 108 166s58.9 13.44 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 177.41 161 164.48 139 158.25M54 100a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m198.24 32.24l-32 32a6 6 0 0 1-8.48 0l-16-16a6 6 0 0 1 8.48-8.48L216 151.51l27.76-27.75a6 6 0 1 1 8.48 8.48"></svg:path>`,
})
export class PhUserCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckThinIcon],svg[ph-user-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.17 158.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 177.7 76.71 164 108 164s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59M52 100a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56m198.83 30.83l-32 32a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 5.66-5.66L216 154.34l29.17-29.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhUserCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleIcon],svg[ph-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"></svg:path>`,
})
export class PhUserCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleBoldIcon],svg[ph-user-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M79.57 196.57a60 60 0 0 1 96.86 0a83.72 83.72 0 0 1-96.86 0M100 120a28 28 0 1 1 28 28a28 28 0 0 1-28-28m94 59.94a83.5 83.5 0 0 0-29-23.42a52 52 0 1 0-74 0a83.5 83.5 0 0 0-29 23.42a84 84 0 1 1 131.9 0Z"></svg:path>`,
})
export class PhUserCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckIcon],svg[ph-user-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.35 104.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M237.66 45.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L200 60.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhUserCircleCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckBoldIcon],svg[ph-user-circle-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.69 100.17a12 12 0 0 0-9.85 13.83a85 85 0 0 1 1.16 14a83.57 83.57 0 0 1-18 51.94a83.5 83.5 0 0 0-29-23.42a52 52 0 1 0-74 0a83.5 83.5 0 0 0-29 23.42A83.94 83.94 0 0 1 128 44a85 85 0 0 1 14 1.16a12 12 0 0 0 4-23.67A108.1 108.1 0 0 0 20 128a108 108 0 0 0 216 0a109 109 0 0 0-1.49-18a12 12 0 0 0-13.82-9.83M100 120a28 28 0 1 1 28 28a28 28 0 0 1-28-28m-20.43 76.57a60 60 0 0 1 96.86 0a83.72 83.72 0 0 1-96.86 0M240.49 48.49l-32 32a12 12 0 0 1-17 0l-16-16a12 12 0 0 1 17-17L200 55l23.51-23.52a12 12 0 1 1 17 17Z"></svg:path>`,
})
export class PhUserCircleCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckDuotoneIcon],svg[ph-user-circle-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M221.35 104.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M237.66 45.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L200 60.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhUserCircleCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckFillIcon],svg[ph-user-circle-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.56 110.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41A79.7 79.7 0 0 1 84 165.1a4 4 0 0 1 4.84.32a59.8 59.8 0 0 0 78.26 0a4 4 0 0 1 4.84-.32a79.9 79.9 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64M84 120a44 44 0 1 0 44-44a44 44 0 0 0-44 44m153.66-85.66a8 8 0 0 0-11.32 0L200 60.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhUserCircleCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckLightIcon],svg[ph-user-circle-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.68 106.08a6 6 0 0 0-4.92 6.91A91.7 91.7 0 0 1 218 128a89.65 89.65 0 0 1-24.49 61.64a77.53 77.53 0 0 0-40-31.38a46 46 0 1 0-51 0a77.53 77.53 0 0 0-40 31.38A89.95 89.95 0 0 1 128 38a91.6 91.6 0 0 1 15 1.24a6 6 0 1 0 2-11.83a101.9 101.9 0 1 0 83.6 83.6a6 6 0 0 0-6.92-4.93M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-22.56 78a66 66 0 0 1 113.12 0a89.8 89.8 0 0 1-113.12 0m164.8-153.76l-32 32a6 6 0 0 1-8.48 0l-16-16a6 6 0 0 1 8.48-8.48L200 63.51l27.76-27.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhUserCircleCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckThinIcon],svg[ph-user-circle-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 108.05a4 4 0 0 0-3.28 4.61A93.4 93.4 0 0 1 220 128a91.7 91.7 0 0 1-26.83 64.87a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34A92 92 0 0 1 128 36a93.4 93.4 0 0 1 15.34 1.27a4 4 0 0 0 1.32-7.89A100 100 0 1 0 228 128a102 102 0 0 0-1.38-16.66a4 4 0 0 0-4.62-3.29M92 120a36 36 0 1 1 36 36a36 36 0 0 1-36-36m-23.13 78.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m166-155.59l-32 32a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 5.66-5.66L200 66.34l29.17-29.17a4 4 0 1 1 5.66 5.66Z"></svg:path>`,
})
export class PhUserCircleCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedIcon],svg[ph-user-circle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88 88 0 0 0-44 0A8 8 0 0 1 96.26 37m-62.91 73a8 8 0 0 0 9.85-5.57a87.9 87.9 0 0 1 22-38.09a8 8 0 0 0-11.4-11.2a103.9 103.9 0 0 0-26 45a8 8 0 0 0 5.55 9.86M150 213.22a88 88 0 0 1-44 0a8 8 0 0 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49m62.8-108.77a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.21a88.14 88.14 0 0 1 21.98 38.07Zm15.44 51.39a103.7 103.7 0 0 1-30.68 49.47a8 8 0 0 1-12.49-2.31a64 64 0 0 0-114.14 0a8 8 0 0 1-12.48 2.32a103.74 103.74 0 0 1-30.68-49.49a8 8 0 0 1 15.42-4.27a87.6 87.6 0 0 0 19 34.88a79.57 79.57 0 0 1 36.1-28.77a48 48 0 1 1 59.38 0a79.57 79.57 0 0 1 36.1 28.77a87.6 87.6 0 0 0 19-34.88a8 8 0 1 1 15.42 4.28ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32"></svg:path>`,
})
export class PhUserCircleDashedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedBoldIcon],svg[ph-user-circle-dashed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0a12 12 0 1 1-6 23.23a84 84 0 0 0-42 0a12 12 0 0 1-14.62-8.6m-60.09 75.82a12.2 12.2 0 0 0 3.2.43a12 12 0 0 0 11.56-8.8a84 84 0 0 1 21-36.35a12 12 0 1 0-17.11-16.81a108.1 108.1 0 0 0-27 46.76a12 12 0 0 0 8.35 14.77M149 209.35a84 84 0 0 1-42 0a12 12 0 1 0-6 23.23a108 108 0 0 0 54 0a12 12 0 1 0-6-23.23m59.95-103.83a12 12 0 0 0 23.12-6.42a108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Zm23.15 51.39a107.86 107.86 0 0 1-31.86 51.38a12 12 0 0 1-18.72-3.48a60 60 0 0 0-107 0a12 12 0 0 1-8.5 6.36a12.5 12.5 0 0 1-2.19.2a12 12 0 0 1-8-3.08a107.85 107.85 0 0 1-31.92-51.39A12 12 0 0 1 47 150.49A83.6 83.6 0 0 0 62 180a83.46 83.46 0 0 1 29-23.47a52 52 0 1 1 74 0A83.6 83.6 0 0 1 194 180a83.7 83.7 0 0 0 15-29.49a12 12 0 0 1 23.13 6.42ZM128 148a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhUserCircleDashedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedDuotoneIcon],svg[ph-user-circle-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88 88 0 0 0-44 0A8 8 0 0 1 96.26 37m-62.91 73a8 8 0 0 0 9.85-5.57a87.9 87.9 0 0 1 22-38.09a8 8 0 0 0-11.41-11.2a104 104 0 0 0-26 45a8 8 0 0 0 5.56 9.86M150 213.22a88 88 0 0 1-44 0a8 8 0 0 0-4 15.49a104.1 104.1 0 0 0 52 0a8 8 0 0 0-4-15.49m62.8-108.77a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.21a88.14 88.14 0 0 1 21.98 38.07Zm15.44 51.39a103.7 103.7 0 0 1-30.68 49.47a8 8 0 0 1-12.49-2.31a64 64 0 0 0-114.14 0a8 8 0 0 1-5.67 4.23a8 8 0 0 1-1.46.14a8 8 0 0 1-5.35-2.05a103.74 103.74 0 0 1-30.68-49.49a8 8 0 0 1 15.42-4.27a87.6 87.6 0 0 0 19 34.88a79.57 79.57 0 0 1 36.1-28.77a48 48 0 1 1 59.38 0a79.57 79.57 0 0 1 36.1 28.77a87.6 87.6 0 0 0 19-34.88a8 8 0 1 1 15.42 4.28ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32"></svg:path></svg:g>`,
})
export class PhUserCircleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedFillIcon],svg[ph-user-circle-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.26 37a8 8 0 0 1 5.74-9.71a104.1 104.1 0 0 1 52 0a8 8 0 0 1-2 15.75a8.2 8.2 0 0 1-2-.26a88 88 0 0 0-44 0A8 8 0 0 1 96.26 37m-62.91 73a8 8 0 0 0 9.85-5.57a88 88 0 0 1 22-38.09a8 8 0 0 0-11.41-11.2a104.05 104.05 0 0 0-26 45a8 8 0 0 0 5.56 9.86m179.44-5.56a8 8 0 0 0 15.42-4.28a104 104 0 0 0-26-45a8 8 0 1 0-11.41 11.22a88 88 0 0 1 21.99 38.07Zm9.87 41.56a8 8 0 0 0-9.85 5.58a87.6 87.6 0 0 1-19 34.83a79.8 79.8 0 0 0-21.81-21.3a4 4 0 0 0-4.83.31a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.84-.31a79.5 79.5 0 0 0-22 21.12a87.7 87.7 0 0 1-18.83-34.67a8 8 0 0 0-15.42 4.28a104.07 104.07 0 0 0 200.46 0a8 8 0 0 0-5.61-9.84M128 164a44 44 0 1 0-44-44a44.05 44.05 0 0 0 44 44"></svg:path>`,
})
export class PhUserCircleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedLightIcon],svg[ph-user-circle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.19 36.54a6 6 0 0 1 4.31-7.31a102 102 0 0 1 51 0a6 6 0 1 1-3 11.61a90 90 0 0 0-45 0a6 6 0 0 1-7.31-4.3m-64.3 71.54a6 6 0 0 0 1.6.22a6 6 0 0 0 5.78-4.4A90 90 0 0 1 63.78 65a6 6 0 1 0-8.56-8.41A102.1 102.1 0 0 0 29.7 100.7a6 6 0 0 0 4.19 7.38M150.5 215.15a90 90 0 0 1-45 0a6 6 0 1 0-3 11.61a102 102 0 0 0 51 0a6 6 0 0 0-3-11.62Zm64.22-111.24a6 6 0 0 0 5.78 4.4a6 6 0 0 0 1.6-.22a6 6 0 0 0 4.18-7.38a102 102 0 0 0-25.49-44.18a6 6 0 0 0-8.55 8.41a90.1 90.1 0 0 1 22.48 38.97m11.58 51.39a101.75 101.75 0 0 1-30.08 48.53a6 6 0 0 1-9.37-1.74a66 66 0 0 0-117.7 0a6 6 0 0 1-4.26 3.18a5.7 5.7 0 0 1-1.09.1a6 6 0 0 1-4-1.54a101.74 101.74 0 0 1-30.1-48.53a6 6 0 1 1 11.56-3.21a89.8 89.8 0 0 0 21.2 37.59a77.56 77.56 0 0 1 40-31.43a46 46 0 1 1 51 0a77.56 77.56 0 0 1 40 31.43a89.7 89.7 0 0 0 21.2-37.58a6 6 0 1 1 11.56 3.2ZM128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34"></svg:path>`,
})
export class PhUserCircleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedThinIcon],svg[ph-user-circle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100.13 36a4 4 0 0 1 2.87-4.83a100.1 100.1 0 0 1 50 0a4 4 0 0 1-1 7.88a4.4 4.4 0 0 1-1-.13a92 92 0 0 0-46 0a4 4 0 0 1-4.87-2.92m-65.71 70.16a4 4 0 0 0 4.92-2.79a91.9 91.9 0 0 1 23-39.82a4 4 0 0 0-5.71-5.61a100.15 100.15 0 0 0-25 43.3a4 4 0 0 0 2.79 4.92M151 217.09a92 92 0 0 1-46 0a4 4 0 0 0-2 7.75a100 100 0 0 0 50 0a4 4 0 1 0-2-7.74Zm65.65-113.71a4 4 0 1 0 7.7-2.14a100.1 100.1 0 0 0-25-43.31a4 4 0 1 0-5.71 5.61a92 92 0 0 1 23.01 39.84m7.73 51.39a99.77 99.77 0 0 1-29.5 47.57a4 4 0 0 1-6.24-1.16a68 68 0 0 0-121.28 0a4 4 0 0 1-2.83 2.12a3.6 3.6 0 0 1-.73.07a4 4 0 0 1-2.68-1a99.8 99.8 0 0 1-29.5-47.58a4 4 0 1 1 7.71-2.13a91.9 91.9 0 0 0 23.47 40.25a75.66 75.66 0 0 1 44.54-34.08a44 44 0 1 1 41.32 0a75.66 75.66 0 0 1 44.54 34.08a91.83 91.83 0 0 0 23.47-40.28a4 4 0 0 1 7.71 2.14M128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36"></svg:path>`,
})
export class PhUserCircleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDuotoneIcon],svg[ph-user-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"></svg:path></svg:g>`,
})
export class PhUserCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleFillIcon],svg[ph-user-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44.05 44.05 0 0 1 44 44m60 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.09 88.09 0 0 0-91.47-87.93C77.43 41.89 39.87 81.12 40 128.25a87.65 87.65 0 0 0 22.24 58.16A79.7 79.7 0 0 1 84 165.1a4 4 0 0 1 4.83.32a59.83 59.83 0 0 0 78.28 0a4 4 0 0 1 4.83-.32a79.7 79.7 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128"></svg:path>`,
})
export class PhUserCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearIcon],svg[ph-user-circle-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.25 63.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M192 56a8 8 0 1 1 8 8a8 8 0 0 1-8-8m29.35 48.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0"></svg:path>`,
})
export class PhUserCircleGearIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearBoldIcon],svg[ph-user-circle-gear-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.57 46.11a12 12 0 0 1 15.12-7.7l3.31 1.07V36a12 12 0 0 1 24 0v3.48l3.31-1.07a12 12 0 1 1 7.42 22.82l-3.31 1.08l2 2.82a12 12 0 1 1-19.41 14.1L200 76.42l-2 2.81a12 12 0 1 1-19.41-14.1l2-2.82l-3.31-1.08a12 12 0 0 1-7.71-15.12M236 128A108 108 0 1 1 128 20a109 109 0 0 1 18 1.49a12 12 0 0 1-4 23.67A85 85 0 0 0 128 44a83.94 83.94 0 0 0-65.95 135.94a83.5 83.5 0 0 1 29-23.42a52 52 0 1 1 74 0a83.5 83.5 0 0 1 29 23.42A83.57 83.57 0 0 0 212 128a85 85 0 0 0-1.16-14a12 12 0 0 1 23.67-4a109 109 0 0 1 1.49 18m-108 20a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 64a83.53 83.53 0 0 0 48.43-15.43a60 60 0 0 0-96.86 0A83.53 83.53 0 0 0 128 212"></svg:path>`,
})
export class PhUserCircleGearBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearDuotoneIcon],svg[ph-user-circle-gear-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 0 1 184.92 50.69a16 16 0 0 0 20.39 20.39A95.6 95.6 0 0 1 224 128" opacity=".2"></svg:path><svg:path d="m228.25 63.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M192 56a8 8 0 1 1 8 8a8 8 0 0 1-8-8m29.35 48.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0"></svg:path></svg:g>`,
})
export class PhUserCircleGearDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearFillIcon],svg[ph-user-circle-gear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.25 63.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M200 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8m-72 12a44 44 0 1 1-44 44a44 44 0 0 1 44-44m102.56 34.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41A79.7 79.7 0 0 1 84 165.1a4 4 0 0 1 4.83.32a59.81 59.81 0 0 0 78.27 0a4 4 0 0 1 4.84-.32a79.9 79.9 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64"></svg:path>`,
})
export class PhUserCircleGearFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearLightIcon],svg[ph-user-circle-gear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.25 64.8l-5.92-3.41a22 22 0 0 0 0-10.78l5.92-3.41a6 6 0 0 0-6-10.4l-5.93 3.43a22 22 0 0 0-9.32-5.39V28a6 6 0 0 0-12 0v6.84a22 22 0 0 0-9.32 5.39l-5.93-3.43a6 6 0 0 0-6 10.4l5.92 3.41a22 22 0 0 0 0 10.78l-5.92 3.41a6 6 0 0 0 6 10.4l5.93-3.43a22 22 0 0 0 9.32 5.39V84a6 6 0 0 0 12 0v-6.84a22 22 0 0 0 9.32-5.39l5.93 3.43a6 6 0 0 0 6-10.4M200 66a10 10 0 1 1 10-10a10 10 0 0 1-10 10m21.68 40.08a6 6 0 0 0-4.92 6.91A92 92 0 0 1 218 128a89.65 89.65 0 0 1-24.49 61.64a77.53 77.53 0 0 0-40-31.38a46 46 0 1 0-51 0a77.53 77.53 0 0 0-40 31.38A89.95 89.95 0 0 1 128 38a91.7 91.7 0 0 1 15 1.24a6 6 0 1 0 2-11.83a102 102 0 1 0 50 177.44c.65 1.36 1.68 0 2.34-2.11A102 102 0 0 0 228.59 111a6 6 0 0 0-6.91-4.92M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-22.56 78a66 66 0 0 1 113.12 0a89.8 89.8 0 0 1-113.12 0"></svg:path>`,
})
export class PhUserCircleGearLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearThinIcon],svg[ph-user-circle-gear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.25 66.54L219 62.33a19.78 19.78 0 0 0 0-12.66l7.29-4.21a4 4 0 0 0-4-6.92l-7.31 4.21A20 20 0 0 0 204 36.4V28a4 4 0 0 0-8 0v8.4a20 20 0 0 0-10.94 6.35l-7.31-4.21a4 4 0 1 0-4 6.92l7.25 4.21a19.78 19.78 0 0 0 0 12.66l-7.29 4.21a4 4 0 0 0 2 7.46a3.9 3.9 0 0 0 2-.54l7.31-4.21A20 20 0 0 0 196 75.6V84a4 4 0 0 0 8 0v-8.4a20 20 0 0 0 10.94-6.35l7.31 4.21a3.9 3.9 0 0 0 2 .54a4 4 0 0 0 2-7.46M200 68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m22 40.06a4 4 0 0 0-3.28 4.6A93.6 93.6 0 0 1 220 128a91.7 91.7 0 0 1-26.83 64.87a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34A92 92 0 0 1 128 36a93.4 93.4 0 0 1 15.34 1.27a4 4 0 0 0 1.32-7.89a99.89 99.89 0 1 0 82 82a4 4 0 0 0-4.66-3.32M92 120a36 36 0 1 1 36 36a36 36 0 0 1-36-36m-23.13 78.42a68 68 0 0 1 118.27 0a91.81 91.81 0 0 1-118.27 0"></svg:path>`,
})
export class PhUserCircleGearThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleLightIcon],svg[ph-user-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M71.44 198a66 66 0 0 1 113.12 0a89.8 89.8 0 0 1-113.12 0M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m99.51 69.64a77.53 77.53 0 0 0-40-31.38a46 46 0 1 0-51 0a77.53 77.53 0 0 0-40 31.38a90 90 0 1 1 131 0"></svg:path>`,
})
export class PhUserCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusIcon],svg[ph-user-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 56a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m58.08 37.33a103.93 103.93 0 1 1-80.76-67.89a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A88 88 0 0 0 211 98.67a8 8 0 0 1 15.09-5.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path>`,
})
export class PhUserCircleMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusBoldIcon],svg[ph-user-circle-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 56a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m65.85 36A108 108 0 1 1 128 20a109 109 0 0 1 18 1.49a12 12 0 0 1-4 23.67A85 85 0 0 0 128 44a83.94 83.94 0 0 0-65.95 135.94a83.5 83.5 0 0 1 29-23.42a52 52 0 1 1 74 0a83.36 83.36 0 0 1 29 23.42A83.94 83.94 0 0 0 207.22 100a12 12 0 0 1 22.63-8M128 148a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 64a83.53 83.53 0 0 0 48.43-15.43a60 60 0 0 0-96.86 0A83.53 83.53 0 0 0 128 212"></svg:path>`,
})
export class PhUserCircleMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusDuotoneIcon],svg[ph-user-circle-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M168 56a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m58.08 37.33a103.93 103.93 0 1 1-80.76-67.89a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A88 88 0 0 0 211 98.67a8 8 0 0 1 15.09-5.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path></svg:g>`,
})
export class PhUserCircleMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusFillIcon],svg[ph-user-circle-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a44 44 0 1 1-44 44a44 44 0 0 1 44-44m48-12h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m39.87 24.46A8 8 0 0 0 211 98.67a88 88 0 0 1-17.23 87.74A79.9 79.9 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.89-.32a79.7 79.7 0 0 0-21.79 21.31A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.9 103.9 0 1 0 80.76 67.89a8 8 0 0 0-10.21-4.87"></svg:path>`,
})
export class PhUserCircleMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusLightIcon],svg[ph-user-circle-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 56a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m54.19 38A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.53 77.53 0 0 1 40 31.38A90 90 0 0 0 212.88 98a6 6 0 1 1 11.31-4M128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20a66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserCircleMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusThinIcon],svg[ph-user-circle-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 56a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4m50.31 38.67A100 100 0 1 1 128 28a100.7 100.7 0 0 1 16.66 1.38a4 4 0 0 1-1.32 7.89A93.4 93.4 0 0 0 128 36a92 92 0 0 0-65.17 156.87a75.6 75.6 0 0 1 44.51-34a44 44 0 1 1 41.32 0a75.6 75.6 0 0 1 44.51 34a92 92 0 0 0 21.6-95.54a4 4 0 1 1 7.54-2.66M128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0 64a91.6 91.6 0 0 0 59.14-21.58a68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"></svg:path>`,
})
export class PhUserCircleMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusIcon],svg[ph-user-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8m62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64M128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path>`,
})
export class PhUserCirclePlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusBoldIcon],svg[ph-user-circle-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 56a12 12 0 0 1 12-12h12V32a12 12 0 0 1 24 0v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0V68h-12a12 12 0 0 1-12-12m70.51 54A107.88 107.88 0 1 1 146 21.49a12 12 0 0 1-4 23.67A85 85 0 0 0 128 44a83.94 83.94 0 0 0-65.95 135.94a83.5 83.5 0 0 1 29-23.42a52 52 0 1 1 74 0a83.36 83.36 0 0 1 29 23.42A83.52 83.52 0 0 0 212 128a85 85 0 0 0-1.16-14a12 12 0 0 1 23.67-4M128 148a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 64a83.53 83.53 0 0 0 48.43-15.43a60 60 0 0 0-96.86 0A83.53 83.53 0 0 0 128 212"></svg:path>`,
})
export class PhUserCirclePlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusDuotoneIcon],svg[ph-user-circle-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8m62.56 54.68a103.92 103.92 0 1 1-85.24-85.24a8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a89 89 0 0 0-1.22-14.68a8 8 0 1 1 15.78-2.64M128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path></svg:g>`,
})
export class PhUserCirclePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusFillIcon],svg[ph-user-circle-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a44 44 0 1 1-44 44a44 44 0 0 1 44-44m48-12h16v16a8 8 0 0 0 16 0V64h16a8 8 0 0 0 0-16h-16V32a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16m45.35 40.11a8 8 0 0 0-6.57 9.21A89 89 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41A79.9 79.9 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.89-.32a79.7 79.7 0 0 0-21.79 21.31A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57"></svg:path>`,
})
export class PhUserCirclePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusLightIcon],svg[ph-user-circle-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 56a6 6 0 0 1 6-6h18V32a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V62h-18a6 6 0 0 1-6-6m58.59 55A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.53 77.53 0 0 1 40 31.38A89.65 89.65 0 0 0 218 128a92 92 0 0 0-1.24-15a6 6 0 1 1 11.83-2M128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20a66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserCirclePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusThinIcon],svg[ph-user-circle-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 56a4 4 0 0 1 4-4h20V32a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0V60h-20a4 4 0 0 1-4-4m54.62 55.34a99.89 99.89 0 1 1-82-82a4 4 0 0 1-1.32 7.89A93.4 93.4 0 0 0 128 36a92 92 0 0 0-65.17 156.87a75.6 75.6 0 0 1 44.51-34a44 44 0 1 1 41.32 0a75.6 75.6 0 0 1 44.51 34A91.7 91.7 0 0 0 220 128a93.6 93.6 0 0 0-1.27-15.34a4 4 0 0 1 7.89-1.32M128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0 64a91.6 91.6 0 0 0 59.14-21.58a68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"></svg:path>`,
})
export class PhUserCirclePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleThinIcon],svg[ph-user-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserDuotoneIcon],svg[ph-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"></svg:path></svg:g>`,
})
export class PhUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFillIcon],svg[ph-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"></svg:path>`,
})
export class PhUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusIcon],svg[ph-user-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m136 92a8 8 0 0 1-6.41-3.19a52 52 0 0 0-83.2 0a8 8 0 1 1-12.8-9.62A67.94 67.94 0 0 1 101 141.51a40 40 0 1 1 53.94 0a67.94 67.94 0 0 1 27.43 21.68A8 8 0 0 1 176 176m-48-40a24 24 0 1 0-24-24a24 24 0 0 0 24 24"></svg:path>`,
})
export class PhUserFocusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusBoldIcon],svg[ph-user-focus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40v36a12 12 0 0 1-24 0V52h-24a12 12 0 0 1 0-24h36a12 12 0 0 1 12 12m-12 128a12 12 0 0 0-12 12v24h-24a12 12 0 0 0 0 24h36a12 12 0 0 0 12-12v-36a12 12 0 0 0-12-12M76 204H52v-24a12 12 0 0 0-24 0v36a12 12 0 0 0 12 12h36a12 12 0 0 0 0-24M40 88a12 12 0 0 0 12-12V52h24a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v36a12 12 0 0 0 12 12m136 92a12 12 0 0 1-9.6-4.79a48 48 0 0 0-76.82 0a12 12 0 0 1-19.18-14.42a72.1 72.1 0 0 1 23.92-20.5a44 44 0 1 1 67.34 0a72.1 72.1 0 0 1 23.92 20.5A12 12 0 0 1 176 180m-48-48a20 20 0 1 0-20-20a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhUserFocusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusDuotoneIcon],svg[ph-user-focus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 112a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m136 92a8 8 0 0 1-6.41-3.19a52 52 0 0 0-83.2 0a8 8 0 1 1-12.8-9.62A67.94 67.94 0 0 1 101 141.51a40 40 0 1 1 53.94 0a67.94 67.94 0 0 1 27.43 21.68A8 8 0 0 1 176 176m-48-40a24 24 0 1 0-24-24a24 24 0 0 0 24 24"></svg:path></svg:g>`,
})
export class PhUserFocusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusFillIcon],svg[ph-user-focus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40v36a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h36a8 8 0 0 1 8 8m-8 132a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h36a8 8 0 0 0 8-8v-36a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v36a8 8 0 0 0 8 8h36a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v36a8 8 0 0 0 8 8m61 57.51a67.94 67.94 0 0 0-27.4 21.68A8 8 0 0 0 80 176h96a8 8 0 0 0 6.4-12.81a67.94 67.94 0 0 0-27.4-21.68a40 40 0 1 0-53.94 0Z"></svg:path>`,
})
export class PhUserFocusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusLightIcon],svg[ph-user-focus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v36a6 6 0 0 1-12 0V46h-30a6 6 0 0 1 0-12h36a6 6 0 0 1 6 6m-6 134a6 6 0 0 0-6 6v30h-30a6 6 0 0 0 0 12h36a6 6 0 0 0 6-6v-36a6 6 0 0 0-6-6M76 210H46v-30a6 6 0 0 0-12 0v36a6 6 0 0 0 6 6h36a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V46h30a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6m136 92a6 6 0 0 1-4.8-2.4a54 54 0 0 0-86.4 0a6 6 0 1 1-9.6-7.2a65.65 65.65 0 0 1 29.69-22.26a38 38 0 1 1 46.22 0a65.65 65.65 0 0 1 29.69 22.26a6 6 0 0 1-4.8 9.6m-48-36a26 26 0 1 0-26-26a26 26 0 0 0 26 26"></svg:path>`,
})
export class PhUserFocusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusThinIcon],svg[ph-user-focus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v36a4 4 0 0 1-8 0V44h-32a4 4 0 0 1 0-8h36a4 4 0 0 1 4 4m-4 136a4 4 0 0 0-4 4v32h-32a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M76 212H44v-32a4 4 0 0 0-8 0v36a4 4 0 0 0 4 4h36a4 4 0 0 0 0-8M40 80a4 4 0 0 0 4-4V44h32a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m136 92a4 4 0 0 1-3.2-1.6a56 56 0 0 0-89.6 0a4 4 0 1 1-6.4-4.8a63.65 63.65 0 0 1 32.5-22.85a36 36 0 1 1 37.4 0a63.65 63.65 0 0 1 32.5 22.85a4 4 0 0 1-3.2 6.4m-48-32a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhUserFocusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearIcon],svg[ph-user-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 1 0 12.24 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.26-10.3c-14.95-17.78-33.53-30.41-54.13-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m196.25 43.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 1 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V108a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 8 13.86l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V164a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M216 136a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhUserGearIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearBoldIcon],svg[ph-user-gear-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.5 156.53a72 72 0 1 0-89 0a124 124 0 0 0-48.69 35.75a12 12 0 0 0 18.38 15.44C48.54 184.69 75.11 172 104 172c37 0 61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44a124 124 0 0 0-48.69-35.75M56 100a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m190.53 40l-7.11 2.31l4.39 6.05a12 12 0 1 1-19.41 14.11l-4.4-6.06l-4.4 6.06a12 12 0 1 1-19.41-14.11l4.39-6.05l-7.11-2.31a12 12 0 1 1 7.41-22.83l7.12 2.31V112a12 12 0 0 1 24 0v7.48l7.12-2.31a12 12 0 1 1 7.41 22.83"></svg:path>`,
})
export class PhUserGearBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearDuotoneIcon],svg[ph-user-gear-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2"></svg:path><svg:path d="M144 157.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 1 0 12.24 10.3C50.25 181.19 77.91 168 108 168s57.75 13.19 77.87 37.15a8 8 0 0 0 12.26-10.3c-14.95-17.78-33.53-30.41-54.13-37.17M56 100a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m196.25 43.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 1 0-8-13.86l-4.67 2.7a23.9 23.9 0 0 0-7.58-4.39V108a8 8 0 0 0-16 0v5.38a23.9 23.9 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 8 13.86l4.67-2.7a23.9 23.9 0 0 0 7.58 4.39V164a8 8 0 0 0 16 0v-5.38a23.9 23.9 0 0 0 7.58-4.39l4.67 2.7a7.9 7.9 0 0 0 4 1.07a8 8 0 0 0 4-14.93M224 144a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhUserGearDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearFillIcon],svg[ph-user-gear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M255.18 154a8 8 0 0 1-6.94 4a7.9 7.9 0 0 1-4-1.07l-4.67-2.7a23.9 23.9 0 0 1-7.58 4.39V164a8 8 0 0 1-16 0v-5.38a23.9 23.9 0 0 1-7.58-4.39l-4.67 2.7a7.9 7.9 0 0 1-4 1.07a8 8 0 0 1-4-14.93l4.66-2.69a23.6 23.6 0 0 1 0-8.76l-4.66-2.69a8 8 0 1 1 8-13.86l4.67 2.7a23.9 23.9 0 0 1 7.58-4.39V108a8 8 0 0 1 16 0v5.38a23.9 23.9 0 0 1 7.58 4.39l4.67-2.7a8 8 0 1 1 8 13.86l-4.66 2.69a23.6 23.6 0 0 1 0 8.76l4.66 2.69a8 8 0 0 1 2.94 10.93M224 144a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhUserGearFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearLightIcon],svg[ph-user-gear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 158.25a66 66 0 1 0-62 0c-22 6.23-41.88 19.16-57.61 37.89a6 6 0 0 0 9.18 7.72C49.1 179.44 77.31 166 108 166s58.9 13.44 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 177.41 161 164.48 139 158.25M54 100a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m197.25 44.8l-5.92-3.41a22 22 0 0 0 0-10.78l5.92-3.41a6 6 0 0 0-6-10.4l-5.93 3.43a22 22 0 0 0-9.32-5.39V108a6 6 0 0 0-12 0v6.84a22 22 0 0 0-9.32 5.39l-5.93-3.43a6 6 0 0 0-6 10.4l5.92 3.41a22 22 0 0 0 0 10.78l-5.92 3.41a6 6 0 0 0 6 10.4l5.93-3.43a22 22 0 0 0 9.32 5.39V164a6 6 0 0 0 12 0v-6.84a22 22 0 0 0 9.32-5.39l5.93 3.43a6 6 0 0 0 6-10.4M224 146a10 10 0 1 1 10-10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhUserGearLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearThinIcon],svg[ph-user-gear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.17 158.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 177.7 76.7 164 108 164s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59M52 100a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56m198.25 46.54l-7.25-4.21a19.78 19.78 0 0 0 0-12.66l7.29-4.21a4 4 0 1 0-4-6.92l-7.31 4.21A20 20 0 0 0 228 116.4V108a4 4 0 0 0-8 0v8.4a20 20 0 0 0-10.94 6.35l-7.31-4.21a4 4 0 1 0-4 6.92l7.29 4.21a19.78 19.78 0 0 0 0 12.66l-7.29 4.21a4 4 0 0 0 2 7.46a3.9 3.9 0 0 0 2-.54l7.31-4.21A20 20 0 0 0 220 155.6v8.4a4 4 0 0 0 8 0v-8.4a20 20 0 0 0 10.94-6.35l7.31 4.21a3.9 3.9 0 0 0 2 .54a4 4 0 0 0 2-7.46M224 148a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhUserGearThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserLightIcon],svg[ph-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58"></svg:path>`,
})
export class PhUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListIcon],svg[ph-user-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a8 8 0 0 1 8-8h88a8 8 0 0 1 0 16h-88a8 8 0 0 1-8-8m96 40h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m0 48h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-96.25 22a8 8 0 0 1-5.76 9.74a7.6 7.6 0 0 1-2 .26a8 8 0 0 1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09 18.05-56.25 42a8 8 0 0 1-15.5-4c5.59-21.71 21.84-39.29 42.46-48a48 48 0 1 1 58.58 0c20.63 8.71 36.88 26.29 42.47 48M80 136a32 32 0 1 0-32-32a32 32 0 0 0 32 32"></svg:path>`,
})
export class PhUserListIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListBoldIcon],svg[ph-user-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a12 12 0 0 1 12-12h80a12 12 0 0 1 0 24h-80a12 12 0 0 1-12-12m92 36h-80a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24m0 48h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m-88.38 25a12 12 0 1 1-23.24 6c-5.72-22.23-28.24-39-52.38-39s-46.66 16.76-52.38 39a12 12 0 1 1-23.24-6c5.38-20.9 20.09-38.16 39.11-48a52 52 0 1 1 73 0c19.04 9.85 33.75 27.11 39.13 48M80 132a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhUserListBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListDuotoneIcon],svg[ph-user-list-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M120 104a40 40 0 1 1-40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M152 80a8 8 0 0 1 8-8h88a8 8 0 0 1 0 16h-88a8 8 0 0 1-8-8m96 40h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m0 48h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-96.25 22a8 8 0 0 1-5.76 9.74a7.6 7.6 0 0 1-2 .26a8 8 0 0 1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09 18.05-56.25 42a8 8 0 0 1-15.5-4c5.59-21.71 21.84-39.29 42.46-48a48 48 0 1 1 58.58 0c20.63 8.71 36.88 26.29 42.47 48M80 136a32 32 0 1 0-32-32a32 32 0 0 0 32 32"></svg:path></svg:g>`,
})
export class PhUserListDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListFillIcon],svg[ph-user-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 80a8 8 0 0 1 8-8h88a8 8 0 0 1 0 16h-88a8 8 0 0 1-8-8m96 40h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m0 48h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-138.71-26a48 48 0 1 0-58.58 0c-20.62 8.73-36.87 26.3-42.46 48A8 8 0 0 0 16 200h128a8 8 0 0 0 7.75-10c-5.59-21.71-21.84-39.28-42.46-48"></svg:path>`,
})
export class PhUserListFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListLightIcon],svg[ph-user-list-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154 80a6 6 0 0 1 6-6h88a6 6 0 0 1 0 12h-88a6 6 0 0 1-6-6m94 42h-88a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12m0 48h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-98.19 20.5a6 6 0 1 1-11.62 3C131.7 168.29 107.23 150 80 150s-51.7 18.29-58.19 43.49a6 6 0 1 1-11.62-3c5.74-22.28 23-40.07 44.67-48a46 46 0 1 1 50.28 0c21.65 7.94 38.94 25.73 44.67 48.01M80 138a34 34 0 1 0-34-34a34 34 0 0 0 34 34"></svg:path>`,
})
export class PhUserListLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListThinIcon],svg[ph-user-list-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 80a4 4 0 0 1 4-4h88a4 4 0 0 1 0 8h-88a4 4 0 0 1-4-4m92 44h-88a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m0 48h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-100.13 19a4 4 0 0 1-2.87 4.87a4 4 0 0 1-1 .13a4 4 0 0 1-3.87-3c-6.71-26.08-32-45-60.13-45s-53.41 18.92-60.13 45a4 4 0 1 1-7.74-2c5.92-23 24.57-41.14 47.52-48a44 44 0 1 1 40.7 0c22.95 6.86 41.65 25 47.52 48M80 140a36 36 0 1 0-36-36a36 36 0 0 0 36 36"></svg:path>`,
})
export class PhUserListThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusIcon],svg[ph-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52"></svg:path>`,
})
export class PhUserMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusBoldIcon],svg[ph-user-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-54.81 56.28a12 12 0 1 1-18.38 15.44C169.12 191.42 145 172 108 172c-28.89 0-55.46 12.68-74.81 35.72a12 12 0 0 1-18.38-15.44a124.1 124.1 0 0 1 48.69-35.75a72 72 0 1 1 89 0a124 124 0 0 1 48.69 35.75M108 148a48 48 0 1 0-48-48a48.05 48.05 0 0 0 48 48"></svg:path>`,
})
export class PhUserMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusDuotoneIcon],svg[ph-user-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2"></svg:path><svg:path d="M256 136a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52"></svg:path></svg:g>`,
})
export class PhUserMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusFillIcon],svg[ph-user-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M248 128h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhUserMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusLightIcon],svg[ph-user-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.26a66 66 0 1 1 62 0c22 6.22 41.86 19.15 57.59 37.88M108 154a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54"></svg:path>`,
})
export class PhUserMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusThinIcon],svg[ph-user-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 136a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-56.94 61.43a4 4 0 0 1-6.12 5.14C168 177.7 139.3 164 108 164s-60 13.7-80.94 38.57a4 4 0 1 1-6.12-5.14c16.71-19.9 38.13-33.13 61.89-38.59a64 64 0 1 1 50.34 0c23.76 5.46 45.18 18.69 61.89 38.59M108 156a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56"></svg:path>`,
})
export class PhUserMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusIcon],svg[ph-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52"></svg:path>`,
})
export class PhUserPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusBoldIcon],svg[ph-user-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12m-54.81 56.28a12 12 0 1 1-18.38 15.44C169.12 191.42 145 172 108 172c-28.89 0-55.46 12.68-74.81 35.72a12 12 0 0 1-18.38-15.44a124.1 124.1 0 0 1 48.69-35.75a72 72 0 1 1 89 0a124 124 0 0 1 48.69 35.75M108 148a48 48 0 1 0-48-48a48.05 48.05 0 0 0 48 48"></svg:path>`,
})
export class PhUserPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusDuotoneIcon],svg[ph-user-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2"></svg:path><svg:path d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52"></svg:path></svg:g>`,
})
export class PhUserPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusFillIcon],svg[ph-user-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-112 21.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17A8 8 0 0 0 24 208h168a8 8 0 0 0 6.13-13.15c-14.95-17.78-33.53-30.41-54.13-37.17"></svg:path>`,
})
export class PhUserPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusLightIcon],svg[ph-user-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.25a66 66 0 1 1 62 0c22 6.23 41.86 19.16 57.59 37.89M108 154a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54"></svg:path>`,
})
export class PhUserPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusThinIcon],svg[ph-user-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 136a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-56.94 61.43a4 4 0 0 1-6.12 5.14C168 177.7 139.3 164 108 164s-60 13.7-80.94 38.57a4 4 0 1 1-6.12-5.14c16.71-19.9 38.13-33.13 61.89-38.59a64 64 0 1 1 50.34 0c23.76 5.46 45.18 18.69 61.89 38.59M108 156a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56"></svg:path>`,
})
export class PhUserPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleIcon],svg[ph-user-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-23.43 80a64 64 0 0 1 110.86 0ZM216 200h-14.67a80.14 80.14 0 0 0-43.69-42.28a48 48 0 1 0-59.28 0A80.14 80.14 0 0 0 54.67 200H40V56h176z"></svg:path>`,
})
export class PhUserRectangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleBoldIcon],svg[ph-user-rectangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-116 92a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 52a59.66 59.66 0 0 1 40.85 16h-81.7A59.66 59.66 0 0 1 128 180m84 16h-12.44A83.46 83.46 0 0 0 165 164.5a52 52 0 1 0-74 0A83.46 83.46 0 0 0 56.44 196H44V60h168Z"></svg:path>`,
})
export class PhUserRectangleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleDuotoneIcon],svg[ph-user-rectangle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8h-20.1a72 72 0 0 0-67.9-48a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-67.9 48H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-23.43 80a64 64 0 0 1 110.86 0ZM216 200h-14.67a80.14 80.14 0 0 0-43.69-42.28a48 48 0 1 0-59.28 0A80.14 80.14 0 0 0 54.67 200H40V56h176z"></svg:path></svg:g>`,
})
export class PhUserRectangleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleFillIcon],svg[ph-user-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44m60-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144h14.68a80 80 0 0 1 29.41-34.84a4 4 0 0 1 4.83.31a59.82 59.82 0 0 0 78.16 0a4 4 0 0 1 4.83-.31A80 80 0 0 1 201.32 200z"></svg:path>`,
})
export class PhUserRectangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleLightIcon],svg[ph-user-rectangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-24.79 82a66 66 0 0 1 117.58 0ZM218 200a2 2 0 0 1-2 2h-16a78.18 78.18 0 0 0-46.55-43.71a46 46 0 1 0-50.9 0A78.18 78.18 0 0 0 56 202H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhUserRectangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleThinIcon],svg[ph-user-rectangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M66 204a68 68 0 0 1 124 0Zm154-4a4 4 0 0 1-4 4h-17.33a76.17 76.17 0 0 0-50.06-45.14a44 44 0 1 0-41.22 0A76.17 76.17 0 0 0 57.33 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-92-44a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserRectangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundIcon],svg[ph-user-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 165.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 189.19 77.91 176 108 176s57.75 13.19 77.88 37.15a8 8 0 1 0 12.25-10.3c-14.95-17.78-33.53-30.41-54.13-37.17M56 108a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m151.36-42.4a108.36 108.36 0 0 1 0 84.8a8 8 0 0 1-7.36 4.86a8 8 0 0 1-7.36-11.15a92.26 92.26 0 0 0 0-72.22a8 8 0 0 1 14.72-6.29M248 108a139 139 0 0 1-11.29 55.15a8 8 0 0 1-14.7-6.3a124.43 124.43 0 0 0 0-97.7a8 8 0 1 1 14.7-6.3A139 139 0 0 1 248 108"></svg:path>`,
})
export class PhUserSoundIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundBoldIcon],svg[ph-user-sound-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.5 164.53a72 72 0 1 0-89 0a124.1 124.1 0 0 0-48.69 35.75a12 12 0 0 0 18.38 15.44C46.88 199.42 71 180 108 180s61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44a124 124 0 0 0-48.69-35.75M60 108a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m192 0a143.1 143.1 0 0 1-11.61 56.73a12 12 0 1 1-22-9.46a120.48 120.48 0 0 0 0-94.54a12 12 0 1 1 22-9.46A143.1 143.1 0 0 1 252 108m-45-43.24a108.26 108.26 0 0 1 0 86.48a12 12 0 0 1-22-9.62a84.35 84.35 0 0 0 0-67.24a12 12 0 1 1 22-9.62"></svg:path>`,
})
export class PhUserSoundBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundDuotoneIcon],svg[ph-user-sound-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 108a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2"></svg:path><svg:path d="M144 165.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17a8 8 0 0 0 12.25 10.3C50.25 189.19 77.91 176 108 176s57.75 13.19 77.88 37.15a8 8 0 1 0 12.25-10.3c-14.95-17.78-33.53-30.41-54.13-37.17M56 108a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52m151.36-42.4a108.36 108.36 0 0 1 0 84.8a8 8 0 0 1-7.36 4.86a8 8 0 0 1-7.36-11.15a92.26 92.26 0 0 0 0-72.22a8 8 0 0 1 14.72-6.29M248 108a139 139 0 0 1-11.29 55.15a8 8 0 0 1-14.7-6.3a124.43 124.43 0 0 0 0-97.7a8 8 0 1 1 14.7-6.3A139 139 0 0 1 248 108"></svg:path></svg:g>`,
})
export class PhUserSoundDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundFillIcon],svg[ph-user-sound-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.13 202.85A8 8 0 0 1 192 216H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17m-1.27-141.46a8 8 0 0 0-4.22 10.5a92.26 92.26 0 0 1 0 72.22a8 8 0 1 0 14.72 6.29a108.36 108.36 0 0 0 0-84.8a8 8 0 0 0-10.5-4.21m39.85-8.54a8 8 0 1 0-14.7 6.3a124.43 124.43 0 0 1 0 97.7a8 8 0 1 0 14.7 6.3a140.34 140.34 0 0 0 0-110.3"></svg:path>`,
})
export class PhUserSoundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundLightIcon],svg[ph-user-sound-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 166.26a66 66 0 1 0-62 0c-22 6.22-41.88 19.15-57.61 37.88a6 6 0 0 0 9.18 7.72C49.11 187.45 77.31 174 108 174s58.9 13.45 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 185.41 161 172.48 139 166.26M54 108a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m151.52-41.61a106.33 106.33 0 0 1 0 83.22a6 6 0 0 1-11-4.71a94.3 94.3 0 0 0 0-73.8a6 6 0 0 1 11-4.71M246 108a137.2 137.2 0 0 1-11.12 54.37a6 6 0 0 1-11-4.74a126.4 126.4 0 0 0 0-99.26a6 6 0 0 1 11-4.74A137.2 137.2 0 0 1 246 108"></svg:path>`,
})
export class PhUserSoundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundThinIcon],svg[ph-user-sound-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.17 166.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 185.7 76.71 172 108 172s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59M52 108a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56m151.68-40.83a104.35 104.35 0 0 1 0 81.66a4 4 0 0 1-3.68 2.43a4.1 4.1 0 0 1-1.57-.32a4 4 0 0 1-2.11-5.25a96.32 96.32 0 0 0 0-75.38a4 4 0 0 1 7.36-3.14M244 108a135.2 135.2 0 0 1-11 53.58a4 4 0 0 1-3.68 2.42a3.9 3.9 0 0 1-1.57-.32a4 4 0 0 1-2.1-5.26a128.44 128.44 0 0 0 0-100.84a4 4 0 1 1 7.35-3.16A135.2 135.2 0 0 1 244 108"></svg:path>`,
})
export class PhUserSoundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareIcon],svg[ph-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-27.33 88a64.36 64.36 0 0 1 19.13-25.8a64 64 0 0 1 80.4 0a64.36 64.36 0 0 1 19.13 25.8ZM208 208h-3.67a79.9 79.9 0 0 0-46.68-50.29a48 48 0 1 0-59.3 0A79.9 79.9 0 0 0 51.67 208H48V48h160z"></svg:path>`,
})
export class PhUserSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareBoldIcon],svg[ph-user-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v144.24a83.63 83.63 0 0 0-39.08-39.67a52 52 0 1 0-73.84 0A83.63 83.63 0 0 0 52 196.24V52Zm-104 68a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 52a59.34 59.34 0 0 1 37.69 13.31A60.45 60.45 0 0 1 181.06 204H74.94a60.45 60.45 0 0 1 15.37-18.69A59.34 59.34 0 0 1 128 172"></svg:path>`,
})
export class PhUserSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareDuotoneIcon],svg[ph-user-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8M57.78 216A72 72 0 0 1 128 160a40 40 0 1 1 40-40a40 40 0 0 1-40 40a72 72 0 0 1 70.22 56Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m-27.33 88a64.45 64.45 0 0 1 19.13-25.8a64 64 0 0 1 80.4 0a64.45 64.45 0 0 1 19.13 25.8ZM208 208h-3.67a79.87 79.87 0 0 0-46.69-50.29a48 48 0 1 0-59.28 0A79.87 79.87 0 0 0 51.67 208H48V48h160z"></svg:path></svg:g>`,
})
export class PhUserSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareFillIcon],svg[ph-user-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44m52-72v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160h3.67a80.6 80.6 0 0 1 26.07-38.25q3.08-2.48 6.36-4.62a4 4 0 0 1 4.81.33a59.82 59.82 0 0 0 78.18 0a4 4 0 0 1 4.81-.33q3.28 2.15 6.36 4.62A80.6 80.6 0 0 1 204.33 208z"></svg:path>`,
})
export class PhUserSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareLightIcon],svg[ph-user-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-28.23 90a66.43 66.43 0 0 1 20.77-29.36a66 66 0 0 1 82.92 0A66.43 66.43 0 0 1 190.23 210ZM210 208a2 2 0 0 1-2 2h-5.17a77.85 77.85 0 0 0-49.38-51.71a46 46 0 1 0-50.9 0A77.85 77.85 0 0 0 53.17 210H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhUserSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareThinIcon],svg[ph-user-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M63 212a68 68 0 0 1 130 0Zm149-4a4 4 0 0 1-4 4h-6.66a76 76 0 0 0-52.75-53.13a44 44 0 1 0-41.18 0A76 76 0 0 0 54.66 212H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-52a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchIcon],svg[ph-user-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 133.66l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L216 132.69V128A88 88 0 0 0 56.49 76.67a8 8 0 0 1-13-9.34A104 104 0 0 1 232 128v4.69l10.34-10.35a8 8 0 0 1 11.32 11.32m-41.18 55A104 104 0 0 1 24 128v-4.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L40 123.31V128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.6 79.6 0 0 1 36.08 28.78a90 90 0 0 0 5.71-7.11a8 8 0 0 1 13 9.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a88.2 88.2 0 0 0 53.92-18.49a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path>`,
})
export class PhUserSwitchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchBoldIcon],svg[ph-user-switch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 174.26a12 12 0 0 0-16.76 2.74q-1.47 2.06-3.05 4a76 76 0 0 0-30-28.37a48 48 0 1 0-70.28.08a76.8 76.8 0 0 0-30.06 28.25a83.6 83.6 0 0 1-18.3-43.55a12 12 0 0 0 16-17.88l-20-20a12 12 0 0 0-17 0l-20 20a12 12 0 0 0 16.83 17.1a107.88 107.88 0 0 0 37.72 73.61a12.3 12.3 0 0 0 1.88 1.57a107.82 107.82 0 0 0 136.47-.26a13 13 0 0 0 1.28-1.06a107.7 107.7 0 0 0 18-19.46a12 12 0 0 0-2.73-16.77M128 96a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 116a83.5 83.5 0 0 1-46.94-14.37a52 52 0 0 1 93.88 0A84.07 84.07 0 0 1 128 212m124.49-75.51l-20 20a12 12 0 0 1-17 0l-20-20a12 12 0 0 1 16-17.88A84 84 0 0 0 59.74 79a12 12 0 1 1-19.48-14a108 108 0 0 1 195.4 54.4a12 12 0 0 1 16.83 17.1Z"></svg:path>`,
})
export class PhUserSwitchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchDuotoneIcon],svg[ph-user-switch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="m253.66 133.66l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L216 132.69V128A88 88 0 0 0 56.49 76.67a8 8 0 0 1-13-9.34A104 104 0 0 1 232 128v4.69l10.34-10.35a8 8 0 0 1 11.32 11.32m-41.18 55A104 104 0 0 1 24 128v-4.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L40 123.31V128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.6 79.6 0 0 1 36.08 28.78a90 90 0 0 0 5.71-7.11a8 8 0 0 1 13 9.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a88.2 88.2 0 0 0 53.92-18.49a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></svg:path></svg:g>`,
})
export class PhUserSwitchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchFillIcon],svg[ph-user-switch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 120a44 44 0 1 1 44 44a44 44 0 0 1-44-44m126.16 57.18a8.21 8.21 0 0 0-10.86 2.41a87 87 0 0 1-5.52 6.85A79.8 79.8 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.8 59.8 0 0 1-78.26 0a4 4 0 0 0-4.9-.32a79.7 79.7 0 0 0-21.79 21.31A87.66 87.66 0 0 1 40.37 136h15.4a8.2 8.2 0 0 0 6.69-3.28a8 8 0 0 0-.8-10.38l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0-.8 10.38A8.2 8.2 0 0 0 8.23 136H24.3a104 104 0 0 0 188.18 52.67a8 8 0 0 0-2.32-11.49m45.23-52.24A8 8 0 0 0 248 120h-16.3A104 104 0 0 0 43.52 67.33a8 8 0 0 0 13 9.34A88 88 0 0 1 215.63 120H200a8 8 0 0 0-5.66 13.66l24 24a8 8 0 0 0 11.32 0l24-24a8 8 0 0 0 1.73-8.72"></svg:path>`,
})
export class PhUserSwitchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchLightIcon],svg[ph-user-switch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.24 132.24l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 1 1 8.48-8.48L218 137.51V128A90 90 0 0 0 54.87 75.5a6 6 0 1 1-9.74-7A102 102 0 0 1 230 128v9.51l13.76-13.75a6 6 0 1 1 8.48 8.48m-41.39 55.26A102 102 0 0 1 26 128v-9.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0l24 24a6 6 0 1 1-8.48 8.48L38 118.49V128a89.65 89.65 0 0 0 24.49 61.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.5 77.5 0 0 1 40 31.41a89 89 0 0 0 7.58-9.17a6 6 0 1 1 9.74 7ZM128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a90.24 90.24 0 0 0 56.57-20a66 66 0 0 0-113.13 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserSwitchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchThinIcon],svg[ph-user-switch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.83 130.83l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 1 1 5.66-5.66L220 142.34V128A92 92 0 0 0 53.25 74.34a4 4 0 0 1-6.5-4.68A100 100 0 0 1 228 128v14.34l17.17-17.17a4 4 0 1 1 5.66 5.66m-41.6 55.51A100 100 0 0 1 28 128v-14.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0l24 24a4 4 0 0 1-5.66 5.66L36 113.66V128a91.7 91.7 0 0 0 26.83 64.87a75.6 75.6 0 0 1 44.51-34a44 44 0 1 1 41.32 0a75.57 75.57 0 0 1 44.52 34.07a91 91 0 0 0 9.56-11.24a4 4 0 1 1 6.49 4.68ZM128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0 64a92.23 92.23 0 0 0 59.14-21.57a68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"></svg:path>`,
})
export class PhUserSwitchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserThinIcon],svg[ph-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"></svg:path>`,
})
export class PhUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersIcon],svg[ph-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"></svg:path>`,
})
export class PhUsersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersBoldIcon],svg[ph-users-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.18 156.94a64 64 0 1 0-82.36 0a100.23 100.23 0 0 0-39.49 32a12 12 0 0 0 19.35 14.2a76 76 0 0 1 122.64 0a12 12 0 0 0 19.36-14.2a100.33 100.33 0 0 0-39.5-32M44 108a40 40 0 1 1 40 40a40 40 0 0 1-40-40m206.1 97.67a12 12 0 0 1-16.78-2.57A76.31 76.31 0 0 0 172 172a12 12 0 0 1 0-24a40 40 0 1 0-10.3-78.67a12 12 0 1 1-6.16-23.19a64 64 0 0 1 57.64 110.8a100.23 100.23 0 0 1 39.49 32a12 12 0 0 1-2.57 16.73"></svg:path>`,
})
export class PhUsersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersDuotoneIcon],svg[ph-users-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 108a52 52 0 1 1-52-52a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"></svg:path></svg:g>`,
})
export class PhUsersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFillIcon],svg[ph-users-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.47 195.63a8 8 0 0 1-6.7 12.37H10.23a8 8 0 0 1-6.7-12.37a95.83 95.83 0 0 1 47.22-37.71a60 60 0 1 1 66.5 0a95.83 95.83 0 0 1 47.22 37.71m87.91-.15a95.87 95.87 0 0 0-47.13-37.56A60 60 0 0 0 144.7 54.59a4 4 0 0 0-1.33 6a75.83 75.83 0 0 1 3.63 89.94a4 4 0 0 0 1.07 5.53a112.3 112.3 0 0 1 29.85 30.83a23.92 23.92 0 0 1 3.65 16.47a4 4 0 0 0 3.95 4.64h60.3a8 8 0 0 0 7.73-5.93a8.22 8.22 0 0 0-1.17-6.59"></svg:path>`,
})
export class PhUsersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourIcon],svg[ph-users-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path>`,
})
export class PhUsersFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourBoldIcon],svg[ph-users-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.79 121.59a12 12 0 0 0 16.81-2.38a48 48 0 0 1 76.81 0a12 12 0 0 0 16.8 2.39a12.2 12.2 0 0 0 2.38-2.39a48 48 0 0 1 76.81 0a12 12 0 1 0 19.19-14.41a72 72 0 0 0-25.3-21.22a40 40 0 1 0-64.58 0A71 71 0 0 0 128 94.31a71 71 0 0 0-15.71-10.74a40 40 0 1 0-64.58 0a72 72 0 0 0-25.3 21.22a12 12 0 0 0 2.38 16.8M176 44a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-96 0a16 16 0 1 1-16 16a16 16 0 0 1 16-16m128.29 151.57a40 40 0 1 0-64.58 0A71.3 71.3 0 0 0 128 206.3a71.3 71.3 0 0 0-15.71-10.73a40 40 0 1 0-64.58 0a72 72 0 0 0-25.3 21.22a12 12 0 0 0 19.19 14.42a48 48 0 0 1 76.81 0a12 12 0 0 0 16.8 2.39a12.2 12.2 0 0 0 2.38-2.39a48 48 0 0 1 76.81 0a12 12 0 1 0 19.19-14.41a71.9 71.9 0 0 0-25.3-21.23M80 156a16 16 0 1 1-16 16a16 16 0 0 1 16-16m96 0a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhUsersFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourDuotoneIcon],svg[ph-users-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 168a32 32 0 1 1-32-32a32 32 0 0 1 32 32M80 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 104a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0-40a32 32 0 1 0-32-32a32 32 0 0 0 32 32" opacity=".2"></svg:path><svg:path d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path></svg:g>`,
})
export class PhUsersFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourFillIcon],svg[ph-users-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.4 219.19A8 8 0 0 1 224 232H32a8 8 0 0 1-6.4-12.8A67.9 67.9 0 0 1 53 197.51a40 40 0 1 1 53.93 0a67.4 67.4 0 0 1 21 14.29a67.4 67.4 0 0 1 21-14.29a40 40 0 1 1 53.93 0a67.85 67.85 0 0 1 27.54 21.68M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8 0a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.93 0a67.4 67.4 0 0 0-21 14.29a67.4 67.4 0 0 0-21-14.29a40 40 0 1 0-53.93 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2"></svg:path>`,
})
export class PhUsersFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourLightIcon],svg[ph-users-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.4 124.8a6 6 0 0 0 8.4-1.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.6 5.6 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.69-22.26a38 38 0 1 0-46.22 0A65.3 65.3 0 0 0 128 110.7a65.3 65.3 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.7 65.7 0 0 0 27.2 116.4a6 6 0 0 0 1.2 8.4M176 38a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26m119.11 160.13a38 38 0 1 0-46.22 0A65.3 65.3 0 0 0 128 214.7a65.3 65.3 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.7 65.7 0 0 0 27.2 220.4a6 6 0 1 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.6 5.6 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.68-22.26M80 142a26 26 0 1 1-26 26a26 26 0 0 1 26-26m96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26"></svg:path>`,
})
export class PhUsersFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourThinIcon],svg[ph-users-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.6 123.2a4 4 0 0 0 5.6-.8a56 56 0 0 1 89.6 0a3.93 3.93 0 0 0 6.38 0a56 56 0 0 1 89.6 0a4 4 0 1 0 6.4-4.8a63.55 63.55 0 0 0-32.5-22.85a36 36 0 1 0-37.4 0a63.4 63.4 0 0 0-29.3 19a63.34 63.34 0 0 0-29.3-19a36 36 0 1 0-37.4 0A63.6 63.6 0 0 0 28.8 117.6a4 4 0 0 0 .8 5.6M148 64a28 28 0 1 1 28 28a28 28 0 0 1-28-28m-96 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28m142.7 134.75a36 36 0 1 0-37.4 0A63.4 63.4 0 0 0 128 217.7a63.34 63.34 0 0 0-29.3-18.95a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a3.93 3.93 0 0 0 6.38 0a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.55 63.55 0 0 0-32.48-22.85M52 168a28 28 0 1 1 28 28a28 28 0 0 1-28-28m96 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></svg:path>`,
})
export class PhUsersFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersLightIcon],svg[ph-users-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"></svg:path>`,
})
export class PhUsersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThinIcon],svg[ph-users-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.19 159a56 56 0 1 0-46.38 0a91.83 91.83 0 0 0-53.93 38.81a4 4 0 1 0 6.7 4.37a84 84 0 0 1 140.84 0a4 4 0 1 0 6.7-4.37A91.83 91.83 0 0 0 107.19 159M36 108a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m212 95.35a4 4 0 0 1-5.53-1.17A83.81 83.81 0 0 0 172 164a4 4 0 0 1 0-8a48 48 0 1 0-17.82-92.58a4 4 0 1 1-3-7.43a56 56 0 0 1 44 103a91.83 91.83 0 0 1 53.93 38.86a4 4 0 0 1-1.11 5.5"></svg:path>`,
})
export class PhUsersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeIcon],svg[ph-users-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89a8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.84 8a57 57 0 0 0-98.16 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhUsersThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeBoldIcon],svg[ph-users-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.38 181.1a52 52 0 1 0-72.76 0a75.9 75.9 0 0 0-30 28.89a12 12 0 0 0 20.78 12a53 53 0 0 1 91.22 0a12 12 0 1 0 20.78-12a75.9 75.9 0 0 0-30.02-28.89M100 144a28 28 0 1 1 28 28a28 28 0 0 1-28-28m147.21 9.59a12 12 0 0 1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12 12 0 0 1-1.82-22.91a20 20 0 1 0-24.78-28.3a12 12 0 1 1-21-11.6a44 44 0 1 1 73.28 48.35a92.2 92.2 0 0 1 22.85 21.69a12 12 0 0 1-2.39 16.8m-192.28-24c-9.48 2.05-21 10.55-29.33 21.65a12 12 0 0 1-19.19-14.45a92.4 92.4 0 0 1 22.85-21.69a44 44 0 1 1 73.28-48.35a12 12 0 1 1-21 11.6a20 20 0 1 0-24.78 28.3a12 12 0 0 1-1.82 22.91Z"></svg:path>`,
})
export class PhUsersThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeDuotoneIcon],svg[ph-users-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 144a40 40 0 1 1-40-40a40 40 0 0 1 40 40M64 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m128 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1 0-16a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21M190.92 212a8 8 0 1 1-13.85 8a57 57 0 0 0-98.15 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212M128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8"></svg:path></svg:g>`,
})
export class PhUsersThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeFillIcon],svg[ph-users-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64.12 147.8a4 4 0 0 1-4 4.2H16a8 8 0 0 1-7.8-6.17a8.35 8.35 0 0 1 1.62-6.93A67.8 67.8 0 0 1 37 117.51a40 40 0 1 1 66.46-35.8a3.94 3.94 0 0 1-2.27 4.18A64.08 64.08 0 0 0 64 144c0 1.28 0 2.54.12 3.8m182-8.91A67.76 67.76 0 0 0 219 117.51a40 40 0 1 0-66.46-35.8a3.94 3.94 0 0 0 2.27 4.18A64.08 64.08 0 0 1 192 144c0 1.28 0 2.54-.12 3.8a4 4 0 0 0 4 4.2H240a8 8 0 0 0 7.8-6.17a8.33 8.33 0 0 0-1.63-6.94Zm-89 43.18a48 48 0 1 0-58.37 0A72.13 72.13 0 0 0 65.07 212A8 8 0 0 0 72 224h112a8 8 0 0 0 6.93-12a72.15 72.15 0 0 0-33.74-29.93Z"></svg:path>`,
})
export class PhUsersThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeLightIcon],svg[ph-users-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.6 148.8a6 6 0 0 1-8.4-1.2A53.58 53.58 0 0 0 192 126a6 6 0 0 1 0-12a26 26 0 1 0-25.18-32.5a6 6 0 0 1-11.62-3a38 38 0 1 1 59.91 39.63a65.7 65.7 0 0 1 29.69 22.27a6 6 0 0 1-1.2 8.4M189.19 213a6 6 0 0 1-2.19 8.2a5.9 5.9 0 0 1-3 .81a6 6 0 0 1-5.2-3a59 59 0 0 0-101.62 0a6 6 0 1 1-10.38-6a70.1 70.1 0 0 1 36.2-30.46a46 46 0 1 1 50.1 0A70.1 70.1 0 0 1 189.19 213M128 178a34 34 0 1 0-34-34a34 34 0 0 0 34 34m-58-58a6 6 0 0 0-6-6a26 26 0 1 1 25.18-32.51a6 6 0 1 0 11.62-3a38 38 0 1 0-59.91 39.63A65.7 65.7 0 0 0 11.2 140.4a6 6 0 1 0 9.6 7.2A53.58 53.58 0 0 1 64 126a6 6 0 0 0 6-6"></svg:path>`,
})
export class PhUsersThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeThinIcon],svg[ph-users-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 147.44a4 4 0 0 1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4 4 0 0 1-1.2-.2a37 37 0 0 1-3.8.2a4 4 0 0 1 0-8a28 28 0 1 0-27.12-35a4 4 0 0 1-7.75-2a36 36 0 1 1 54 39.48c10.81 3.85 20.51 12 27.31 23.48a4 4 0 0 1-1.4 5.44M187.46 214a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2a61 61 0 0 0-105.08 0a4 4 0 0 1-6.92-4a68.35 68.35 0 0 1 39.19-31a44 44 0 1 1 40.54 0a68.35 68.35 0 0 1 39.19 31M128 180a36 36 0 1 0-36-36a36 36 0 0 0 36 36m-64-64a28 28 0 1 1 27.12-35a4 4 0 0 0 7.75-2a36 36 0 1 0-53.57 39.75a63.55 63.55 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8A55.55 55.55 0 0 1 64 124a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhUsersThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanIcon],svg[ph-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.07 106.79l-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M230.59 104H176V64h20.26ZM104 104V64h56v40ZM88 64v40H32V64Zm-8 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m31-24a32 32 0 0 0-62 0h-50a32 32 0 0 0-62 0H32v-56h208v56Z"></svg:path>`,
})
export class PhVanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanBoldIcon],svg[ph-van-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.11 104.18l-45.57-53.09A19.94 19.94 0 0 0 192.26 44H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h14.06a36 36 0 0 0 67.88 0h40.12a36 36 0 0 0 67.88 0H236a20 20 0 0 0 20-20v-64a12.05 12.05 0 0 0-2.89-7.82M217.89 100H176V68h14.42ZM104 100V68h48v32ZM80 68v32H36V68Zm0 128a12 12 0 1 1 12-12a12 12 0 0 1-12 12m108 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m33.94-24a36 36 0 0 0-67.88 0h-40.12a36 36 0 0 0-67.88 0H36v-48h196v48Z"></svg:path>`,
})
export class PhVanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanDuotoneIcon],svg[ph-van-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 112v64a8 8 0 0 1-8 8h-24a24 24 0 0 0-48 0h-64a24 24 0 0 0-48 0H32a8 8 0 0 1-8-8v-64Z" opacity=".2"></svg:path><svg:path d="m254.07 106.79l-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M230.59 104H176V64h20.26ZM104 104V64h56v40ZM88 64v40H32V64Zm-8 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m31-24a32 32 0 0 0-62 0h-50a32 32 0 0 0-62 0H32v-56h208v56Z"></svg:path></svg:g>`,
})
export class PhVanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanFillIcon],svg[ph-van-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.07 106.79l-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M32 104V64h56v40Zm48 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-96h-56V64h56Zm32 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-16-96V64h20.26l34.33 40Z"></svg:path>`,
})
export class PhVanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanLightIcon],svg[ph-van-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.55 108.09L207 55a14 14 0 0 0-10.74-5H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-1.45-3.91m-54.7-45.32L234.94 106H174V62h22.26a2 2 0 0 1 1.59.77M102 106V62h60v44ZM32 62h58v44H30V64a2 2 0 0 1 2-2m48 140a18 18 0 1 1 18-18a18 18 0 0 1-18 18m112 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48-24h-18.6a30 30 0 0 0-58.8 0h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-58h212v58a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhVanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanThinIcon],svg[ph-van-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251 109.4l-45.53-53.1a12 12 0 0 0-9.21-4.3H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-1-2.6m-51.64-47.93L239.3 108H172V60h24.26a4 4 0 0 1 3.1 1.47M100 108V60h64v48ZM32 60h60v48H28V64a4 4 0 0 1 4-4m48 144a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48-24h-20.29a28 28 0 0 0-55.42 0h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-60h216v60a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhVanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultIcon],svg[ph-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z"></svg:path>`,
})
export class PhVaultIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultBoldIcon],svg[ph-vault-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h12v12a12 12 0 0 0 24 0v-12h104v12a12 12 0 0 0 24 0v-12h12a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 188V60h168v52h-21.68a44 44 0 1 0 0 24H212v52Zm124-64a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhVaultBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultDuotoneIcon],svg[ph-vault-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48H40a8 8 0 0 0-8 8v136a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-64 120a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 152H40V56h176v64h-16.68a48 48 0 1 0 0 16H216zm-50.16-72a16 16 0 1 0 0 16H183a32 32 0 1 1 0-16Z"></svg:path></svg:g>`,
})
export class PhVaultDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultFillIcon],svg[ph-vault-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-28.91a36 36 0 1 1 0-16H208a8 8 0 0 1 0 16m-44-8a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhVaultFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultLightIcon],svg[ph-vault-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h18v18a6 6 0 0 0 12 0v-18h116v18a6 6 0 0 0 12 0v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m0 152H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v66h-20.4a46 46 0 1 0 0 12H218v58a2 2 0 0 1-2 2m-51.37-72a14 14 0 1 0 0 12h20.83a34 34 0 1 1 0-12Z"></svg:path>`,
})
export class PhVaultLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultThinIcon],svg[ph-vault-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h20v20a4 4 0 0 0 8 0v-20h120v20a4 4 0 0 0 8 0v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m0 152H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v68h-24.19a44 44 0 1 0 0 8H220v60a4 4 0 0 1-4 4m-52.7-72a12 12 0 1 0 0 8h24.47a36 36 0 1 1 0-8Z"></svg:path>`,
})
export class PhVaultThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeIcon],svg[ph-vector-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 141.66l-32 32a8 8 0 0 1-11.32-11.32L212.69 144h-89.38l-56 56H96a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l56-56V43.31L93.66 61.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L128 43.31V128h84.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeBoldIcon],svg[ph-vector-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 144.49l-32 32a12 12 0 0 1-17-17L203 148h-78l-48 48h19a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l48-48V53L96.49 64.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L132 53v71h71l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhVectorThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeDuotoneIcon],svg[ph-vector-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 40v96l-67.31 67.31a16 16 0 0 1-11.32 4.69H48V102.63a16 16 0 0 1 4.69-11.32L120 24h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m237.66 141.66l-32 32a8 8 0 0 1-11.32-11.32L212.69 144h-89.38l-56 56H96a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l56-56V43.31L93.66 61.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L128 43.31V128h84.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path></svg:g>`,
})
export class PhVectorThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeFillIcon],svg[ph-vector-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 141.66l-32 32A8 8 0 0 1 192 168v-24h-68.69l-40 40l18.35 18.34A8 8 0 0 1 96 216H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 13.66-5.66L72 172.69l40-40V64H88a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 152 64h-24v64h64v-24a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeLightIcon],svg[ph-vector-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 140.24l-32 32a6 6 0 0 1-8.48-8.48L217.51 142h-95l-60 60H96a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.51l60-60v-95L92.24 60.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L126 38.49V130h91.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhVectorThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeThinIcon],svg[ph-vector-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 138.83l-32 32a4 4 0 0 1-5.66-5.66L222.34 140H121.66l-64 64H96a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l64-64V33.66L90.83 58.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L124 33.66V132h98.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhVectorThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoIcon],svg[ph-vector-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 197.66l-32 32a8 8 0 0 1-11.32-11.32L204.69 200H80a8 8 0 0 1-8-8V59.31L53.66 77.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L88 59.31V184h116.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoBoldIcon],svg[ph-vector-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 200.49l-32 32a12 12 0 0 1-17-17L195 204H80a12 12 0 0 1-12-12V69L56.49 80.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L92 69v111h103l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhVectorTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoDuotoneIcon],svg[ph-vector-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v136H80V40h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m229.66 197.66l-32 32a8 8 0 0 1-11.32-11.32L204.69 200H80a8 8 0 0 1-8-8V59.31L53.66 77.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L88 59.31V184h116.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path></svg:g>`,
})
export class PhVectorTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoFillIcon],svg[ph-vector-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 197.66l-32 32A8 8 0 0 1 184 224v-24H80a8 8 0 0 1-8-8V80H48a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 112 80H88v104h96v-24a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoLightIcon],svg[ph-vector-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 196.24l-32 32a6 6 0 0 1-8.48-8.48L209.51 198H80a6 6 0 0 1-6-6V54.49L52.24 76.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L86 54.49V186h123.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhVectorTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoThinIcon],svg[ph-vector-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 194.83l-32 32a4 4 0 0 1-5.66-5.66L214.34 196H80a4 4 0 0 1-4-4V49.66L50.83 74.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L84 49.66V188h130.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhVectorTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateIcon],svg[ph-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32H96a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h64a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 168a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm48-112v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0M56 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m-32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhVibrateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateBoldIcon],svg[ph-vibrate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 28H92a28 28 0 0 0-28 28v144a28 28 0 0 0 28 28h72a28 28 0 0 0 28-28V56a28 28 0 0 0-28-28m4 172a4 4 0 0 1-4 4H92a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm64-100v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m-184 0v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhVibrateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateDuotoneIcon],svg[ph-vibrate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 56v144a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M160 32H96a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h64a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 168a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm48-112v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0M56 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m-32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhVibrateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateFillIcon],svg[ph-vibrate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 56v144a24 24 0 0 1-24 24H96a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24m24 24a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 16a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M48 80a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M16 96a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhVibrateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateLightIcon],svg[ph-vibrate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 34H96a22 22 0 0 0-22 22v144a22 22 0 0 0 22 22h64a22 22 0 0 0 22-22V56a22 22 0 0 0-22-22m10 166a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10V56a10 10 0 0 1 10-10h64a10 10 0 0 1 10 10Zm44-112v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0M54 88v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m-32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhVibrateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateThinIcon],svg[ph-vibrate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36H96a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m12 164a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12Zm40-112v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0M52 88v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhVibrateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoIcon],svg[ph-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhVideoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoBoldIcon],svg[ph-video-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 120H44V60h168Zm24 52a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12m-132-80V88a12 12 0 0 1 18.36-10.18l32 20a12 12 0 0 1 0 20.36l-32 20A12 12 0 0 1 104 128"></svg:path>`,
})
export class PhVideoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraIcon],svg[ph-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z"></svg:path>`,
})
export class PhVideoCameraIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraBoldIcon],svg[ph-video-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.45 69.31a12 12 0 0 0-12.51 1L212 88.43V72a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-16.43l24.94 18.14A12 12 0 0 0 256 176V80a12 12 0 0 0-6.55-10.69M188 180H36V76h152Zm44-27.57l-20-14.54v-19.78l20-14.54Z"></svg:path>`,
})
export class PhVideoCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraDuotoneIcon],svg[ph-video-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z"></svg:path></svg:g>`,
})
export class PhVideoCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraFillIcon],svg[ph-video-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 72v112a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m58 .25a8.23 8.23 0 0 0-6.63 1.22l-33.59 22.39a4 4 0 0 0-1.78 3.33v57.62a4 4 0 0 0 1.78 3.33l33.78 22.52a8 8 0 0 0 8.58.19a8.33 8.33 0 0 0 3.86-7.17V80a8 8 0 0 0-6-7.75"></svg:path>`,
})
export class PhVideoCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraLightIcon],svg[ph-video-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.83 74.71a6 6 0 0 0-6.16.3L206 100.79V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-28.79L244.67 181a6 6 0 0 0 9.33-5V80a6 6 0 0 0-3.17-5.29M194 184a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm48-19.21l-36-24v-25.58l36-24Z"></svg:path>`,
})
export class PhVideoCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashIcon],svg[ph-video-camera-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16h-78.94a8 8 0 0 0 0 16H192v87.63a8 8 0 0 0 16 0V159l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M240 161.05l-32-21.33v-23.44L240 95ZM53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h150.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM32 184V72h34.28L168.1 184Z"></svg:path>`,
})
export class PhVideoCameraSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashBoldIcon],svg[ph-video-camera-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.45 69.31a12 12 0 0 0-12.51 1L212 88.43V72a20 20 0 0 0-20-20h-68.12a12 12 0 0 0 0 24H188v68a12 12 0 0 0 4.46 9.33c.15.13.31.25.48.38l44 32A12 12 0 0 0 256 176V80a12 12 0 0 0-6.55-10.69M232 152.43l-20-14.54v-19.78l20-14.54ZM56.88 31.93a12 12 0 1 0-17.76 16.14L42.69 52H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h148.87l18.25 20.07a12 12 0 0 0 17.76-16.14ZM36 180V76h28.51l94.55 104Z"></svg:path>`,
})
export class PhVideoCameraSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashDuotoneIcon],svg[ph-video-camera-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16h-78.94a8 8 0 0 0 0 16H192v87.63a8 8 0 0 0 16 0V159l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M240 161.05l-32-21.33v-23.44L240 95ZM53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h150.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM32 184V72h34.28L168.1 184Z"></svg:path></svg:g>`,
})
export class PhVideoCameraSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashFillIcon],svg[ph-video-camera-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 80.23v95.45a8.33 8.33 0 0 1-3.86 7.17a8 8 0 0 1-8.58-.19l-33.78-22.52a4 4 0 0 1-1.78-3.33V99.19a4 4 0 0 1 1.78-3.32l33.78-22.53a8 8 0 0 1 9.73.66a8.23 8.23 0 0 1 2.71 6.23M53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h150.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM185 155.07a4 4 0 0 0 7-2.7V72a16 16 0 0 0-16-16h-72a4 4 0 0 0-3 6.69Z"></svg:path>`,
})
export class PhVideoCameraSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashLightIcon],svg[ph-video-camera-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.83 74.71a6 6 0 0 0-6.16.3L206 100.79V72a14 14 0 0 0-14-14h-78.94a6 6 0 0 0 0 12H192a2 2 0 0 1 2 2v87.63a6 6 0 0 0 12 0v-4.42L244.67 181a6 6 0 0 0 9.33-5V80a6 6 0 0 0-3.17-5.29M242 164.79l-36-24v-25.58l36-24ZM52.44 36a6 6 0 0 0-8.88 8l12.69 14H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h151.53l20 22a6 6 0 0 0 8.88-8.08ZM32 186a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h35.16l105.46 116Z"></svg:path>`,
})
export class PhVideoCameraSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashThinIcon],svg[ph-video-camera-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12h-78.94a4 4 0 0 0 0 8H192a4 4 0 0 1 4 4v87.63a4 4 0 0 0 8 0v-8.16l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53M244 168.53l-40-26.67v-27.72l40-26.67ZM51 37.31a4 4 0 0 0-6 5.38L60.78 60H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.41L205 218.69a4 4 0 1 0 5.92-5.38ZM32 188a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h36.05l109.09 120Z"></svg:path>`,
})
export class PhVideoCameraSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraThinIcon],svg[ph-video-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-32.53l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53M196 184a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm48-15.47l-40-26.67v-27.72l40-26.67Z"></svg:path>`,
})
export class PhVideoCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceIcon],svg[ph-video-conference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-48V56h48ZM40 56h112v144H40Zm176 144h-48v-64h48zM180 88a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-68.25-2a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M80 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhVideoConferenceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceBoldIcon],svg[ph-video-conference-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 80h-56V60h56Zm-160 4a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-8 49.77C46.69 161.84 55 156 64 156c9.43 0 18.19 6.44 20.38 15a12 12 0 0 0 23.24-6a43.22 43.22 0 0 0-15.16-23A36 36 0 0 0 44 90.08V60h88v136H44ZM156 196v-56h56v56Zm12-108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhVideoConferenceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceDuotoneIcon],svg[ph-video-conference-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40 48a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h120V48Zm56 96a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-48V56h48ZM40 56h112v144H40Zm176 144h-48v-64h48zM180 88a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-68.25-2a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M80 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhVideoConferenceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceFillIcon],svg[ph-video-conference-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96-52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136-48v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-64 64h48V56h-48Zm-32.25 46a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M216 200v-64h-48v64z"></svg:path>`,
})
export class PhVideoConferenceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceLightIcon],svg[ph-video-conference-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 14v66h-52V54h50a2 2 0 0 1 2 2M38 200V56a2 2 0 0 1 2-2h114v148H40a2 2 0 0 1-2-2m178 2h-50v-68h52v66a2 2 0 0 1-2 2M182 88a10 10 0 1 1 10 10a10 10 0 0 1-10-10m20 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-68.19-1.49A38 38 0 0 0 115.23 143a30 30 0 1 0-38.45 0a38 38 0 0 0-18.59 23.5a6 6 0 0 0 11.62 3C72.67 158.38 83.93 150 96 150s23.34 8.38 26.19 19.49a6 6 0 0 0 11.62-3ZM78 120a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhVideoConferenceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceThinIcon],svg[ph-video-conference-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 12v68h-56V52h52a4 4 0 0 1 4 4M36 200V56a4 4 0 0 1 4-4h116v152H40a4 4 0 0 1-4-4m180 4h-52v-72h56v68a4 4 0 0 1-4 4M184 88a8 8 0 1 1 8 8a8 8 0 0 1-8-8m16 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-68.13-1a36.2 36.2 0 0 0-20.43-23.67a28 28 0 1 0-30.88 0A36.28 36.28 0 0 0 60.13 167a4 4 0 0 0 2.87 4.87a4 4 0 0 0 1 .13a4 4 0 0 0 3.87-3C71 157 83.05 148 96 148s25.06 9 28.13 21a4 4 0 1 0 7.74-2M76 120a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhVideoConferenceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoDuotoneIcon],svg[ph-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48H40a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-104 96V80l48 32Z" opacity=".2"></svg:path><svg:path d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhVideoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoFillIcon],svg[ph-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8m0-152v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-68 56a8 8 0 0 0-3.41-6.55l-40-28A8 8 0 0 0 108 84v56a8 8 0 0 0 12.59 6.55l40-28A8 8 0 0 0 164 112"></svg:path>`,
})
export class PhVideoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoLightIcon],svg[ph-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m163.33 107l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 132.79V91.21L149.18 112ZM216 42H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm12 40a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhVideoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoThinIcon],svg[ph-video-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m162.22 108.67l-48-32A4 4 0 0 0 108 80v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M116 136.53V87.47L152.79 112ZM216 44H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm8 40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhVideoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteIcon],svg[ph-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM178.05 87.66C164.59 77.56 146.81 72 128 72s-36.59 5.56-50 15.66C63.79 98.27 56 112.6 56 128s7.79 29.73 22 40.34c13.41 10.1 31.19 15.66 50 15.66s36.59-5.56 50.05-15.66C192.21 157.73 200 143.4 200 128s-7.79-29.73-21.95-40.34M128 168c-30.88 0-56-17.94-56-40s25.12-40 56-40s56 17.94 56 40s-25.12 40-56 40"></svg:path>`,
})
export class PhVignetteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteBoldIcon],svg[ph-vignette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM81.43 166.05C94 175.05 110.56 180 128 180s34-4.95 46.57-13.95C188.19 156.32 196 142.45 196 128s-7.81-28.32-21.43-38C162 81 145.44 76 128 76s-34 5-46.57 14C67.81 99.68 60 113.55 60 128s7.81 28.32 21.43 38.05M128 100c23.85 0 44 12.82 44 28s-20.15 28-44 28s-44-12.82-44-28s20.15-28 44-28"></svg:path>`,
})
export class PhVignetteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteDuotoneIcon],svg[ph-vignette-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-88 128c-35.35 0-64-21.49-64-48s28.65-48 64-48s64 21.49 64 48s-28.65 48-64 48" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM178.05 87.66C164.59 77.56 146.81 72 128 72s-36.59 5.56-50 15.66C63.79 98.27 56 112.6 56 128s7.79 29.73 22 40.34c13.41 10.1 31.19 15.66 50 15.66s36.59-5.56 50.05-15.66C192.21 157.73 200 143.4 200 128s-7.79-29.73-21.95-40.34M128 168c-30.88 0-56-17.94-56-40s25.12-40 56-40s56 17.94 56 40s-25.12 40-56 40"></svg:path></svg:g>`,
})
export class PhVignetteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteFillIcon],svg[ph-vignette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 88c0 30.93-32.24 56-72 56s-72-25.07-72-56s32.24-56 72-56s72 25.07 72 56"></svg:path>`,
})
export class PhVignetteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteLightIcon],svg[ph-vignette-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM128 74c-38.6 0-70 24.22-70 54s31.4 54 70 54s70-24.22 70-54s-31.4-54-70-54m0 96c-32 0-58-18.84-58-42s26-42 58-42s58 18.84 58 42s-26 42-58 42"></svg:path>`,
})
export class PhVignetteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteThinIcon],svg[ph-vignette-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM128 76c-37.5 0-68 23.33-68 52s30.5 52 68 52s68-23.33 68-52s-30.5-52-68-52m0 96c-33.08 0-60-19.74-60-44s26.92-44 60-44s60 19.74 60 44s-26.92 44-60 44"></svg:path>`,
})
export class PhVignetteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordIcon],svg[ph-vinyl-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16m72 56a72.08 72.08 0 0 1-72 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0m-40 0a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhVinylRecordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordBoldIcon],svg[ph-vinyl-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-128a44.05 44.05 0 0 0-44 44a12 12 0 0 1-24 0a68.07 68.07 0 0 1 68-68a12 12 0 0 1 0 24m68 44a68.07 68.07 0 0 1-68 68a12 12 0 0 1 0-24a44.05 44.05 0 0 0 44-44a12 12 0 0 1 24 0m-68 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhVinylRecordBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordDuotoneIcon],svg[ph-vinyl-record-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m0 120a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16m72 56a72.08 72.08 0 0 1-72 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0m-40 0a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhVinylRecordDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordFillIcon],svg[ph-vinyl-record-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72 128a8 8 0 0 1-16 0a72.08 72.08 0 0 1 72-72a8 8 0 0 1 0 16a56.06 56.06 0 0 0-56 56m32 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24m24 72a8 8 0 0 1 0-16a56.06 56.06 0 0 0 56-56a8 8 0 0 1 16 0a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhVinylRecordFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordLightIcon],svg[ph-vinyl-record-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-148a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0a70.08 70.08 0 0 1 70-70a6 6 0 0 1 0 12m70 58a70.08 70.08 0 0 1-70 70a6 6 0 0 1 0-12a58.07 58.07 0 0 0 58-58a6 6 0 0 1 12 0m-40 0a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhVinylRecordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordThinIcon],svg[ph-vinyl-record-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60.07 60.07 0 0 0-60 60a4 4 0 0 1-8 0a68.07 68.07 0 0 1 68-68a4 4 0 0 1 0 8m68 60a68.07 68.07 0 0 1-68 68a4 4 0 0 1 0-8a60.07 60.07 0 0 0 60-60a4 4 0 0 1 8 0m-40 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhVinylRecordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityIcon],svg[ph-virtual-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m123.49 98.81l-24 64a8 8 0 0 1-15 0l-24-64a8 8 0 1 1 15-5.62l16.51 44l16.51-44a8 8 0 1 1 15 5.62ZM256 128a80.09 80.09 0 0 1-80 80H80a80 80 0 0 1 0-160h96a80.09 80.09 0 0 1 80 80m-16 0a64.07 64.07 0 0 0-64-64H80a64 64 0 0 0 0 128h96a64.07 64.07 0 0 0 64-64m-59.16 10.35L191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35M152 128h12a12 12 0 0 0 0-24h-12Z"></svg:path>`,
})
export class PhVirtualRealityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityBoldIcon],svg[ph-virtual-reality-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m127 104.73l-24 56a12 12 0 0 1-22.06 0l-24-56A12 12 0 0 1 79 95.27l13 30.27l13-30.27a12 12 0 0 1 22 9.46M256 128a84.09 84.09 0 0 1-84 84H84a84 84 0 0 1 0-168h88a84.09 84.09 0 0 1 84 84m-24 0a60.07 60.07 0 0 0-60-60H84a60 60 0 0 0 0 120h88a60.07 60.07 0 0 0 60-60m-32-8a31.85 31.85 0 0 1-7.93 21.05l5.69 8A12 12 0 1 1 178.24 163l-7.91-11.06c-.77.05-1.55.09-2.33.09h-8v4a12 12 0 0 1-24 0V100a12 12 0 0 1 12-12h20a32 32 0 0 1 32 32m-40 8h8a8 8 0 0 0 0-16h-8Z"></svg:path>`,
})
export class PhVirtualRealityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityDuotoneIcon],svg[ph-virtual-reality-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 128a72 72 0 0 1-72 72H80a72 72 0 0 1-72-72a72 72 0 0 1 72-72h96a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="m123.49 98.81l-24 64a8 8 0 0 1-15 0l-24-64a8 8 0 1 1 15-5.62l16.51 44l16.51-44a8 8 0 1 1 15 5.62ZM256 128a80.09 80.09 0 0 1-80 80H80a80 80 0 0 1 0-160h96a80.09 80.09 0 0 1 80 80m-16 0a64.07 64.07 0 0 0-64-64H80a64 64 0 0 0 0 128h96a64.07 64.07 0 0 0 64-64m-59.16 10.35L191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35M152 128h12a12 12 0 0 0 0-24h-12Z"></svg:path></svg:g>`,
})
export class PhVirtualRealityDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityFillIcon],svg[ph-virtual-reality-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 48H80a80 80 0 0 0 0 160h96a80 80 0 0 0 0-160m-52.51 50.81l-24 64a8 8 0 0 1-15 0l-24-64a8 8 0 1 1 15-5.62l16.51 44l16.51-44a8 8 0 1 1 15 5.62ZM191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35Zm-15-40a12 12 0 0 1-12 12h-12v-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhVirtualRealityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityLightIcon],svg[ph-virtual-reality-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m121.62 98.11l-24 64a6 6 0 0 1-11.24 0l-24-64a6 6 0 0 1 11.24-4.22l18.38 49l18.38-49a6 6 0 1 1 11.24 4.22M254 128a78.09 78.09 0 0 1-78 78H80a78 78 0 0 1 0-156h96a78.09 78.09 0 0 1 78 78m-12 0a66.08 66.08 0 0 0-66-66H80a66 66 0 0 0 0 132h96a66.08 66.08 0 0 0 66-66m-63.8 9.76l11 19.26a6 6 0 0 1-10.42 6l-12.07-21.12a27 27 0 0 1-2.71.1h-14v18a6 6 0 0 1-12 0V96a6 6 0 0 1 6-6h20a26 26 0 0 1 14.2 47.76M164 130a14 14 0 0 0 0-28h-14v28Z"></svg:path>`,
})
export class PhVirtualRealityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityThinIcon],svg[ph-virtual-reality-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m119.75 97.4l-24 64a4 4 0 0 1-7.5 0l-24-64a4 4 0 1 1 7.5-2.8l20.25 54l20.25-54a4 4 0 0 1 7.5 2.8M252 128a76.08 76.08 0 0 1-76 76H80a76 76 0 0 1 0-152h96a76.08 76.08 0 0 1 76 76m-8 0a68.07 68.07 0 0 0-68-68H80a68 68 0 0 0 0 136h96a68.07 68.07 0 0 0 68-68m-68.5 9.06l12 21a4 4 0 0 1-1.49 5.45a3.9 3.9 0 0 1-2 .53a4 4 0 0 1-3.47-2l-12.75-22.34a25 25 0 0 1-3.79.3h-16v20a4 4 0 0 1-8 0V96a4 4 0 0 1 4-4h20a24 24 0 0 1 11.5 45.06M180 116a16 16 0 0 0-16-16h-16v32h16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhVirtualRealityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusIcon],svg[ph-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 108a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-28 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68-8a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-32 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96-56h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16m-112 88a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class PhVirusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusBoldIcon],svg[ph-virus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 128a20 20 0 1 1 20-20a20 20 0 0 1-20 20m60-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m-40 40a20 20 0 1 0 20 20a20 20 0 0 0-20-20m124-20a12 12 0 0 1-12 12h-12.72a99.6 99.6 0 0 1-20.62 49.69l9.83 9.82a12 12 0 0 1-17 17l-9.82-9.83a99.6 99.6 0 0 1-49.67 20.6V240a12 12 0 0 1-24 0v-12.72a99.6 99.6 0 0 1-49.69-20.62l-9.82 9.83a12 12 0 0 1-17-17l9.83-9.82A99.6 99.6 0 0 1 28.72 140H16a12 12 0 0 1 0-24h12.72a99.6 99.6 0 0 1 20.62-49.69l-9.83-9.82a12 12 0 0 1 17-17l9.82 9.83A99.6 99.6 0 0 1 116 28.72V16a12 12 0 0 1 24 0v12.72a99.6 99.6 0 0 1 49.69 20.62l9.82-9.83a12 12 0 0 1 17 17l-9.83 9.82a99.6 99.6 0 0 1 20.6 49.67H240a12 12 0 0 1 12 12m-48 0a76 76 0 1 0-76 76a76.08 76.08 0 0 0 76-76"></svg:path>`,
})
export class PhVirusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusDuotoneIcon],svg[ph-virus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 40a88 88 0 1 0 88 88a88 88 0 0 0-88-88m-20 88a20 20 0 1 1 20-20a20 20 0 0 1-20 20" opacity=".2"></svg:path><svg:path d="M136 108a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-28 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68-8a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-32 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96-56h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16m-112 88a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path></svg:g>`,
})
export class PhVirusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusFillIcon],svg[ph-virus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16M80 108a28 28 0 1 1 28 28a28 28 0 0 1-28-28m48 84a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhVirusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusLightIcon],svg[ph-virus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 108a26 26 0 1 0-26 26a26 26 0 0 0 26-26m-26 14a14 14 0 1 1 14-14a14 14 0 0 1-14 14m82 6a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-48 48a14 14 0 1 1-14-14a14 14 0 0 1 14 14m98-54h-18.2a93.57 93.57 0 0 0-23.26-56.06l13.7-13.7a6 6 0 0 0-8.48-8.48l-13.7 13.7A93.57 93.57 0 0 0 134 34.2V16a6 6 0 0 0-12 0v18.2a93.57 93.57 0 0 0-56.06 23.26l-13.7-13.7a6 6 0 0 0-8.48 8.48l13.7 13.7A93.57 93.57 0 0 0 34.2 122H16a6 6 0 0 0 0 12h18.2a93.57 93.57 0 0 0 23.26 56.06l-13.7 13.7a6 6 0 1 0 8.48 8.48l13.7-13.7A93.57 93.57 0 0 0 122 221.8V240a6 6 0 0 0 12 0v-18.2a93.57 93.57 0 0 0 56.06-23.26l13.7 13.7a6 6 0 0 0 8.48-8.48l-13.7-13.7A93.57 93.57 0 0 0 221.8 134H240a6 6 0 0 0 0-12m-112 88a82 82 0 1 1 82-82a82.1 82.1 0 0 1-82 82"></svg:path>`,
})
export class PhVirusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusThinIcon],svg[ph-virus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 108a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-24 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80 4a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12m100-52h-20.09a91.64 91.64 0 0 0-24.12-58.13l15-15a4 4 0 1 0-5.66-5.66l-15 15A91.64 91.64 0 0 0 132 36.09V16a4 4 0 0 0-8 0v20.09a91.64 91.64 0 0 0-58.13 24.12l-15-15a4 4 0 0 0-5.66 5.66l15 15A91.64 91.64 0 0 0 36.09 124H16a4 4 0 0 0 0 8h20.09a91.64 91.64 0 0 0 24.12 58.13l-15 15a4 4 0 0 0 5.66 5.66l15-15A91.64 91.64 0 0 0 124 219.91V240a4 4 0 0 0 8 0v-20.09a91.64 91.64 0 0 0 58.13-24.12l15 15a4 4 0 0 0 5.66-5.66l-15-15A91.64 91.64 0 0 0 219.91 132H240a4 4 0 0 0 0-8m-112 88a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class PhVirusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorIcon],svg[ph-visor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 56H72A72 72 0 0 0 .08 131.4c1.69 36.69 31.76 66.79 68.45 68.52c15.85.74 32-5.9 49.38-20.3a15.88 15.88 0 0 1 20.24 0C148.72 188.39 165 200 184 200a72 72 0 0 0 72-72.95C255.49 87.87 222.76 56 183.05 56m40.81 111.34A55.63 55.63 0 0 1 184 184c-13.88 0-27-9.51-35.65-16.67a31.91 31.91 0 0 0-40.65 0C93.52 179 80.94 184.49 69.28 183.94a56.36 56.36 0 0 1-53.22-53.28A56 56 0 0 1 72 72h111.05c31 0 56.55 24.79 56.95 55.25a55.66 55.66 0 0 1-16.14 40.09M184 96a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhVisorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorBoldIcon],svg[ph-visor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 104a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12m67.91 27.63A76.29 76.29 0 0 1 182.43 204h-1.69c-14.44 0-29.37-5.78-45.58-17.64a12.08 12.08 0 0 0-14.32 0C104 198.68 88.56 204.44 73.57 204A76.29 76.29 0 0 1 .09 131.63A76 76 0 0 1 76 52h104a76 76 0 0 1 75.91 79.63M217.62 92.1A51.56 51.56 0 0 0 180 76H76a52 52 0 0 0-51.94 54.51A52.19 52.19 0 0 0 74.32 180c9.42.29 20-4 32.35-13a36 36 0 0 1 42.66 0c12.36 9 22.91 13.29 32.35 13a52.19 52.19 0 0 0 50.26-49.48a51.63 51.63 0 0 0-14.32-38.42"></svg:path>`,
})
export class PhVisorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorDuotoneIcon],svg[ph-visor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 127.15A64 64 0 0 1 184 192c-15.48 0-29.68-9.35-40.75-18.5a23.91 23.91 0 0 0-30.45-.05c-11.81 9.79-27.19 19.26-43.89 18.48A64 64 0 0 1 72 64h111.05c35.17 0 64.49 28 64.95 63.15" opacity=".2"></svg:path><svg:path d="M183.05 56H72A72 72 0 0 0 .08 131.4c1.69 36.69 31.76 66.79 68.45 68.52c15.85.74 32-5.9 49.38-20.3a15.88 15.88 0 0 1 20.24 0C148.72 188.39 165 200 184 200a72 72 0 0 0 72-72.95C255.49 87.87 222.76 56 183.05 56m40.81 111.34A55.63 55.63 0 0 1 184 184c-13.88 0-27-9.51-35.65-16.67a31.91 31.91 0 0 0-40.65 0C93.52 179 81 184.49 69.28 183.94a56.36 56.36 0 0 1-53.22-53.28A56 56 0 0 1 72 72h111.05c31 0 56.55 24.79 56.95 55.25a55.66 55.66 0 0 1-16.14 40.09M184 96a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhVisorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorFillIcon],svg[ph-visor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 56H72A72 72 0 0 0 .08 131.4c1.69 36.69 31.76 66.79 68.45 68.52c15.84.72 32-5.9 49.38-20.3a15.87 15.87 0 0 1 20.24 0C148.72 188.39 165 200 184 200a72 72 0 0 0 72-72.95C255.49 87.87 222.76 56 183.05 56M176 104H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhVisorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorLightIcon],svg[ph-visor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 58H72a70 70 0 0 0-69.92 73.3C3.72 167 33 196.24 68.62 197.92c15.31.71 31-5.77 48-19.84a17.89 17.89 0 0 1 22.8 0C149.75 186.66 165.6 198 184 198a70 70 0 0 0 70-70.93C253.5 89 221.67 58 183.05 58m42.23 110.74A57.57 57.57 0 0 1 184 186c-14.53 0-28-9.77-36.93-17.13a29.9 29.9 0 0 0-38.09 0c-14.58 12.09-27.6 17.67-39.78 17.1a58.36 58.36 0 0 1-55.12-55.18A58 58 0 0 1 72 70h111.05c32.09 0 58.54 25.67 58.95 57.23a57.62 57.62 0 0 1-16.72 41.51M182 96a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhVisorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorThinIcon],svg[ph-visor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 60H72a68 68 0 0 0-67.93 71.21c1.6 34.66 30 63.08 64.65 64.71c14.77.72 30-5.64 46.63-19.38a19.9 19.9 0 0 1 25.35 0C150.79 184.92 166.25 196 184 196a68 68 0 0 0 68-68.9c-.49-37-31.42-67.1-68.95-67.1m43.65 110.15A59.57 59.57 0 0 1 184 188c-15.17 0-29.07-10-38.2-17.58a27.88 27.88 0 0 0-35.55 0c-15 12.41-28.45 18.14-41.15 17.55a60.37 60.37 0 0 1-57-57.09A60 60 0 0 1 72 68h111.05c33.18 0 60.52 26.56 60.94 59.2a59.6 59.6 0 0 1-17.29 42.95M180 96a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhVisorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailIcon],svg[ph-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M16 128a40 40 0 1 1 40 40a40 40 0 0 1-40-40m184 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhVoicemailIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailBoldIcon],svg[ph-voicemail-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 68a60 60 0 0 0-48 96h-40a60 60 0 1 0-48 24h136a60 60 0 0 0 0-120M24 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36m172 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhVoicemailBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailDuotoneIcon],svg[ph-voicemail-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48m96-48a48 48 0 1 0 48 48a48 48 0 0 0-48-48" opacity=".2"></svg:path><svg:path d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M16 128a40 40 0 1 1 40 40a40 40 0 0 1-40-40m184 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhVoicemailDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailFillIcon],svg[ph-voicemail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M56 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40m144 0a40 40 0 1 1 40-40a40 40 0 0 1-40 40m24-40a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-144 0a24 24 0 1 1-24-24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhVoicemailFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailLightIcon],svg[ph-voicemail-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 74a54 54 0 0 0-33.89 96H89.89A54 54 0 1 0 56 182h144a54 54 0 0 0 0-108M14 128a42 42 0 1 1 42 42a42 42 0 0 1-42-42m186 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhVoicemailLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailThinIcon],svg[ph-voicemail-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76a52 52 0 0 0-27.66 96H83.66A52 52 0 1 0 56 180h144a52 52 0 0 0 0-104M12 128a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m188 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhVoicemailThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballIcon],svg[ph-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m81.74 136.58a88 88 0 0 1-93.49 3.78L132.62 136h83a87.2 87.2 0 0 1-5.88 24.58M91.12 48.11a87.6 87.6 0 0 1 24.22-7.2a88 88 0 0 1 50 79.09h-32.72ZM215.63 120h-34.26a104.18 104.18 0 0 0-35.78-78.23A88.18 88.18 0 0 1 215.63 120M77.27 56.13l17.12 29.65a104.14 104.14 0 0 0-49.86 70.09a87.95 87.95 0 0 1 32.74-99.74M58.9 182.43a88 88 0 0 1 43.49-82.79L118.76 128l-41.49 71.87a88.6 88.6 0 0 1-18.37-17.44M128 216a87.5 87.5 0 0 1-36.88-8.11l17.13-29.67a104.23 104.23 0 0 0 85.53 8.17A87.8 87.8 0 0 1 128 216"></svg:path>`,
})
export class PhVolleyballIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballBoldIcon],svg[ph-volleyball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M96.83 50a83.5 83.5 0 0 1 17.92-5a84 84 0 0 1 46.51 71h-26.33Zm38.1 90h76.2a83.4 83.4 0 0 1-4.69 18a84.07 84.07 0 0 1-84.68 4.79Zm76.2-24h-25.84a107.4 107.4 0 0 0-14.4-49.71a108.7 108.7 0 0 0-11.39-16.14A84.21 84.21 0 0 1 211.13 116M76.07 62.05L89 84.39a107.44 107.44 0 0 0-35.85 37.32a109 109 0 0 0-8.28 18a83.65 83.65 0 0 1 31.2-77.66M62.79 180.87A84 84 0 0 1 101 105.2l13.14 22.8l-38.07 66a84.7 84.7 0 0 1-13.28-13.13m34 25.11l12.92-22.37A107.4 107.4 0 0 0 160 196a109 109 0 0 0 19.59-1.78A83.72 83.72 0 0 1 96.83 206Z"></svg:path>`,
})
export class PhVolleyballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballDuotoneIcon],svg[ph-volleyball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216.25 165.8A96 96 0 0 1 80 211.15a95.75 95.75 0 0 1-28.86-25.58A96 96 0 0 1 105.47 89L80 44.86a95.55 95.55 0 0 1 36.58-12.2A96 96 0 0 1 173.06 128H128l-22.53 39a96 96 0 0 0 110.78-1.22Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m81.74 136.58a88 88 0 0 1-93.49 3.78L132.62 136h83a87.2 87.2 0 0 1-5.88 24.58M91.12 48.11a87.6 87.6 0 0 1 24.22-7.2a88 88 0 0 1 50 79.09h-32.72ZM215.63 120h-34.26a104.18 104.18 0 0 0-35.78-78.23A88.18 88.18 0 0 1 215.63 120M77.27 56.13l17.12 29.65a104.14 104.14 0 0 0-49.86 70.09a87.95 87.95 0 0 1 32.74-99.74M58.9 182.43a88 88 0 0 1 43.49-82.79L118.76 128l-41.49 71.87a88.6 88.6 0 0 1-18.37-17.44M128 216a87.5 87.5 0 0 1-36.88-8.11l17.13-29.67a104.23 104.23 0 0 0 85.53 8.17A87.8 87.8 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhVolleyballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballFillIcon],svg[ph-volleyball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.63 96h-34.26a104.18 104.18 0 0 0-35.78-78.23A88.18 88.18 0 0 1 215.63 120m-171.1 35.87a87.95 87.95 0 0 1 32.74-99.74l17.12 29.65a104.14 104.14 0 0 0-49.86 70.09m14.37 26.56a88 88 0 0 1 43.49-82.79L118.76 128l-41.49 71.87a88.6 88.6 0 0 1-18.37-17.44m150.84-21.85a88 88 0 0 1-93.49 3.78L132.62 136h83a87.2 87.2 0 0 1-5.88 24.58"></svg:path>`,
})
export class PhVolleyballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballLightIcon],svg[ph-volleyball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m83.37 135.89a90 90 0 0 1-97.85 3.18L131.46 134h86.34a89.5 89.5 0 0 1-6.43 27.89M88.3 47.24a89.5 89.5 0 0 1 27.35-8.39A90 90 0 0 1 167.34 122h-35.88ZM217.8 122h-38.46a102.12 102.12 0 0 0-40.84-83.38A90.15 90.15 0 0 1 217.8 122M77.92 53.26l19.21 33.27a102.16 102.16 0 0 0-51.79 77.06A89.93 89.93 0 0 1 77.92 53.26M57 183.19a90 90 0 0 1 46.17-86.26l17.9 31.07l-43.15 74.74A90.6 90.6 0 0 1 57 183.19M128 218a89.5 89.5 0 0 1-39.7-9.24l19.22-33.29a102.13 102.13 0 0 0 92.58 6.34A89.91 89.91 0 0 1 128 218"></svg:path>`,
})
export class PhVolleyballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballThinIcon],svg[ph-volleyball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m85 135.19a92 92 0 0 1-102.18 2.57L130.31 132h89.6a91.6 91.6 0 0 1-6.91 31.19M85.52 46.42A91.1 91.1 0 0 1 116 36.79A92 92 0 0 1 169.29 124h-39ZM219.91 124h-42.62a100.06 100.06 0 0 0-46-87.93A92.11 92.11 0 0 1 219.91 124M78.59 50.42l21.3 36.89a100.09 100.09 0 0 0-53.16 83.77A91.92 91.92 0 0 1 78.59 50.42M55 183.94a92 92 0 0 1 48.87-89.7L123.38 128l-44.79 77.58A92.8 92.8 0 0 1 55 183.94M128 220a91.4 91.4 0 0 1-42.48-10.42l21.3-36.89a100.07 100.07 0 0 0 99.1 4.16A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhVolleyballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallIcon],svg[ph-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M88 144v-32h80v32Zm-48 0v-32h32v32Zm144-32h32v32h-32Zm32-16h-80V64h80Zm-96-32v32H40V64Zm-80 96h80v32H40Zm96 32v-32h80v32Z"></svg:path>`,
})
export class PhWallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallBoldIcon],svg[ph-wall-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M92 140v-24h72v24Zm-48 0v-24h24v24Zm144-24h24v24h-24Zm24-24h-72V68h72Zm-96-24v24H44V68Zm-72 96h72v24H44Zm96 24v-24h72v24Z"></svg:path>`,
})
export class PhWallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallDuotoneIcon],svg[ph-wall-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 104H32V56h96Zm48 0v48h-48v48h96v-96Z" opacity=".2"></svg:path><svg:path d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M88 144v-32h80v32Zm-48 0v-32h32v32Zm144-32h32v32h-32Zm32-16h-80V64h80Zm-96-32v32H40V64Zm-80 96h80v32H40Zm96 32v-32h80v32Z"></svg:path></svg:g>`,
})
export class PhWallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallFillIcon],svg[ph-wall-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v32a4 4 0 0 1-4 4h-92V52a4 4 0 0 1 4-4h84a8 8 0 0 1 8 8m-4 52h-44v44h44a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M88 152h80v-44H88Zm-60 0h44v-44H28a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m200 16h-92v36a4 4 0 0 0 4 4h84a8 8 0 0 0 8-8v-28a4 4 0 0 0-4-4M28 92h92V52a4 4 0 0 0-4-4H32a8 8 0 0 0-8 8v32a4 4 0 0 0 4 4m-4 80v28a8 8 0 0 0 8 8h84a4 4 0 0 0 4-4v-36H28a4 4 0 0 0-4 4"></svg:path>`,
})
export class PhWallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallLightIcon],svg[ph-wall-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h192a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M86 146v-36h84v36Zm-48 0v-36h36v36Zm144-36h36v36h-36Zm36-12h-84V62h84Zm-96-36v36H38V62Zm-84 96h84v36H38Zm96 36v-36h84v36Z"></svg:path>`,
})
export class PhWallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallThinIcon],svg[ph-wall-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M84 148v-40h88v40Zm-48 0v-40h40v40Zm144-40h40v40h-40Zm40-8h-88V60h88Zm-96-40v40H36V60Zm-88 96h88v40H36Zm96 40v-40h88v40Z"></svg:path>`,
})
export class PhWallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletIcon],svg[ph-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 128H56a8 8 0 0 1-8-8V78.63A23.8 23.8 0 0 0 56 80h160Zm-48-60a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhWalletIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletBoldIcon],svg[ph-wallet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-36v80a32 32 0 0 1-32 32H60a32 32 0 0 1-32-32V60.92A32 32 0 0 1 60 28h132a12 12 0 0 1 0 24H60a8 8 0 0 0-8 8.26v.08A8.32 8.32 0 0 0 60.48 68H204a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8H60.48A33.7 33.7 0 0 1 52 90.92V180a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhWalletBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletDuotoneIcon],svg[ph-wallet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v112a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16V56a16 16 0 0 0 16 16h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 128H56a8 8 0 0 1-8-8V78.63A23.8 23.8 0 0 0 56 80h160Zm-48-60a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhWalletDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletFillIcon],svg[ph-wallet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-36 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWalletFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletLightIcon],svg[ph-wallet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66H56a10 10 0 0 1 0-20h136a6 6 0 0 0 0-12H56a22 22 0 0 0-22 22v128a22 22 0 0 0 22 22h160a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H56a10 10 0 0 1-10-10V75.59A21.84 21.84 0 0 0 56 78h160a2 2 0 0 1 2 2Zm-28-60a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWalletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletThinIcon],svg[ph-wallet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68H56a12 12 0 0 1 0-24h136a4 4 0 0 0 0-8H56a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h160a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12V72a19.86 19.86 0 0 0 12 4h160a4 4 0 0 1 4 4Zm-32-60a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWalletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseIcon],svg[ph-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8 8 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 99l176-37.67V184h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40Zm136 53H80v-16h96Zm-96 16h96v16H80Z"></svg:path>`,
})
export class PhWarehouseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseBoldIcon],svg[ph-warehouse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 180h-4V61.13l6.51-1.39a12 12 0 1 0-5-23.47l-224 48A12 12 0 0 0 16 108a12.2 12.2 0 0 0 2.53-.26l1.48-.32V180H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 102.27l168-36V180h-20v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60H44ZM168 144H88v-12h80Zm-80 24h80v12H88Z"></svg:path>`,
})
export class PhWarehouseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseDuotoneIcon],svg[ph-warehouse-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 128v64H72v-64Z" opacity=".2"></svg:path><svg:path d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8 8 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 99l176-37.67V184h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40Zm136 53H80v-16h96Zm-96 16h96v16H80Z"></svg:path></svg:g>`,
})
export class PhWarehouseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseFillIcon],svg[ph-warehouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8 8 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-56 0H72v-16h112Zm0-32H72v-16h112Z"></svg:path>`,
})
export class PhWarehouseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseLightIcon],svg[ph-warehouse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 186h-10V56.28l11.26-2.41a6 6 0 1 0-2.52-11.74l-224 48a6 6 0 0 0 2.52 11.74L26 100v86H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 97.42l180-38.57V186h-28v-58a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v58H38ZM178 154H78v-20h100ZM78 166h100v20H78Z"></svg:path>`,
})
export class PhWarehouseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseThinIcon],svg[ph-warehouse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-12V54.66l12.84-2.75a4 4 0 1 0-1.68-7.82l-224 48A4 4 0 0 0 16 100a4 4 0 0 0 .84-.09L28 97.52V188H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 95.81l184-39.43V188h-32v-60a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v60H36ZM180 156H76v-24h104Zm-104 8h104v24H76Z"></svg:path>`,
})
export class PhWarehouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningIcon],svg[ph-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningBoldIcon],svg[ph-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.26 186.1L152.81 34.23a28.74 28.74 0 0 0-49.62 0L15.74 186.1a27.45 27.45 0 0 0 0 27.71A28.31 28.31 0 0 0 40.55 228h174.9a28.31 28.31 0 0 0 24.79-14.19a27.45 27.45 0 0 0 .02-27.71m-20.8 15.7a4.46 4.46 0 0 1-4 2.2H40.55a4.46 4.46 0 0 1-4-2.2a3.56 3.56 0 0 1 0-3.73L124 46.2a4.77 4.77 0 0 1 8 0l87.44 151.87a3.56 3.56 0 0 1 .02 3.73M116 136v-32a12 12 0 0 1 24 0v32a12 12 0 0 1-24 0m28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleIcon],svg[ph-warning-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWarningCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleBoldIcon],svg[ph-warning-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m-12-80V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0m28 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhWarningCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleDuotoneIcon],svg[ph-warning-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhWarningCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleFillIcon],svg[ph-warning-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-8 56a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleLightIcon],svg[ph-warning-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-6-82V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWarningCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleThinIcon],svg[ph-warning-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-4-84V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWarningCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondIcon],svg[ph-warning-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 72a8 8 0 0 1 8 8v56a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8m-12 100a12 12 0 1 0 12-12a12 12 0 0 0-12 12m124-44a15.85 15.85 0 0 1-4.67 11.28l-96.05 96.06a16 16 0 0 1-22.56 0l-96-96.06a16 16 0 0 1 0-22.56l96.05-96.06a16 16 0 0 1 22.56 0l96.05 96.06A15.85 15.85 0 0 1 240 128m-16 0l-96-96l-96 96l96 96Z"></svg:path>`,
})
export class PhWarningDiamondIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondBoldIcon],svg[ph-warning-diamond-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 68a12 12 0 0 1 12 12v52a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12m0 88a16 16 0 1 0 16 16a16 16 0 0 0-16-16m116-28a19.86 19.86 0 0 1-5.84 14.11l-96 96.06a20 20 0 0 1-28.21 0l-96-96.06a20 20 0 0 1 0-28.22L114 17.83a20 20 0 0 1 28.21 0l96.06 96.06A19.86 19.86 0 0 1 244 128m-25.68 0L128 37.67L37.68 128L128 218.33Z"></svg:path>`,
})
export class PhWarningDiamondBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondDuotoneIcon],svg[ph-warning-diamond-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m229.67 133.62l-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19" opacity=".2"></svg:path><svg:path d="M128 72a8 8 0 0 1 8 8v56a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8m-12 100a12 12 0 1 0 12-12a12 12 0 0 0-12 12m124-44a15.85 15.85 0 0 1-4.67 11.28l-96.05 96.06a16 16 0 0 1-22.56 0l-96-96.06a16 16 0 0 1 0-22.56l96.05-96.06a16 16 0 0 1 22.56 0l96.05 96.06A15.85 15.85 0 0 1 240 128m-16 0l-96-96l-96 96l96 96Z"></svg:path></svg:g>`,
})
export class PhWarningDiamondDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondFillIcon],svg[ph-warning-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.33 116.72l-96.05-96.06a16 16 0 0 0-22.56 0l-96 96.06a16 16 0 0 0 0 22.56l96.05 96.06a16 16 0 0 0 22.56 0l96.05-96.06a16 16 0 0 0 0-22.56ZM120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningDiamondFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondLightIcon],svg[ph-warning-diamond-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10m110-34a13.82 13.82 0 0 1-4.09 9.86l-96 96.06a14 14 0 0 1-19.72 0l-96-96.06a13.93 13.93 0 0 1 0-19.72l96.05-96.06a14 14 0 0 1 19.72 0l96 96.06A13.82 13.82 0 0 1 238 128m-12 0a1.94 1.94 0 0 0-.57-1.38l-96.05-96.06a2 2 0 0 0-2.76 0l-96.05 96.06a2 2 0 0 0 0 2.76l96.05 96.06a2 2 0 0 0 2.76 0l96.05-96.06A1.94 1.94 0 0 0 226 128"></svg:path>`,
})
export class PhWarningDiamondLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondThinIcon],svg[ph-warning-diamond-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8m108-36a11.87 11.87 0 0 1-3.5 8.45l-96.05 96.06a12 12 0 0 1-16.9 0l-96-96.06a12 12 0 0 1 0-16.9l96.05-96.06a12 12 0 0 1 16.9 0l96.05 96.06A11.87 11.87 0 0 1 236 128m-8 0a3.9 3.9 0 0 0-1.16-2.79l-96.05-96.06a4 4 0 0 0-5.58 0l-96 96.06a3.94 3.94 0 0 0 0 5.58l96.05 96.06a4 4 0 0 0 5.58 0l96.05-96.06A3.9 3.9 0 0 0 228 128"></svg:path>`,
})
export class PhWarningDiamondThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDuotoneIcon],svg[ph-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91" opacity=".2"></svg:path><svg:path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningFillIcon],svg[ph-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72M120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningLightIcon],svg[ph-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.07 189.09L147.61 37.22a22.75 22.75 0 0 0-39.22 0L20.93 189.09a21.53 21.53 0 0 0 0 21.72A22.35 22.35 0 0 0 40.55 222h174.9a22.35 22.35 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.72m-10.41 15.71a10.46 10.46 0 0 1-9.21 5.2H40.55a10.46 10.46 0 0 1-9.21-5.2a9.51 9.51 0 0 1 0-9.72l87.45-151.87a10.75 10.75 0 0 1 18.42 0l87.46 151.87a9.51 9.51 0 0 1-.01 9.72M122 144v-40a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonIcon],svg[ph-warning-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55m-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhWarningOctagonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonBoldIcon],svg[ph-warning-octagon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 132V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0m120-40.45v72.9a19.86 19.86 0 0 1-5.86 14.14l-51.55 51.55a19.85 19.85 0 0 1-14.14 5.86h-72.9a19.85 19.85 0 0 1-14.14-5.86l-51.55-51.55A19.86 19.86 0 0 1 20 164.45v-72.9a19.86 19.86 0 0 1 5.86-14.14l51.55-51.55A19.85 19.85 0 0 1 91.55 20h72.9a19.85 19.85 0 0 1 14.14 5.86l51.55 51.55A19.86 19.86 0 0 1 236 91.55m-24 1.66L162.79 44H93.21L44 93.21v69.58L93.21 212h69.58L212 162.79ZM128 156a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhWarningOctagonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonDuotoneIcon],svg[ph-warning-octagon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66" opacity=".2"></svg:path><svg:path d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55m-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhWarningOctagonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonFillIcon],svg[ph-warning-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.31 80.23l-51.54-51.54A16.13 16.13 0 0 0 164.45 24h-72.9a16.13 16.13 0 0 0-11.32 4.69L28.69 80.23A16.13 16.13 0 0 0 24 91.55v72.9a16.13 16.13 0 0 0 4.69 11.32l51.54 51.54A16.13 16.13 0 0 0 91.55 232h72.9a16.13 16.13 0 0 0 11.32-4.69l51.54-51.54a16.13 16.13 0 0 0 4.69-11.32v-72.9a16.13 16.13 0 0 0-4.69-11.32M120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWarningOctagonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonLightIcon],svg[ph-warning-octagon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m108-44.45v72.9a13.92 13.92 0 0 1-4.1 9.9l-51.55 51.55a13.92 13.92 0 0 1-9.9 4.1h-72.9a13.92 13.92 0 0 1-9.9-4.1L30.1 174.35a13.92 13.92 0 0 1-4.1-9.9v-72.9a13.92 13.92 0 0 1 4.1-9.9L81.65 30.1a13.92 13.92 0 0 1 9.9-4.1h72.9a13.92 13.92 0 0 1 9.9 4.1l51.55 51.55a13.92 13.92 0 0 1 4.1 9.9m-12 0a2 2 0 0 0-.59-1.42l-51.54-51.54a2 2 0 0 0-1.42-.59h-72.9a2 2 0 0 0-1.41.59L38.58 90.13a2 2 0 0 0-.58 1.42v72.9a2 2 0 0 0 .59 1.42l51.54 51.54a2 2 0 0 0 1.42.59h72.9a2 2 0 0 0 1.41-.59l51.56-51.54a2 2 0 0 0 .58-1.42ZM128 162a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhWarningOctagonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonThinIcon],svg[ph-warning-octagon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m104-44.45v72.9a12 12 0 0 1-3.51 8.49l-51.55 51.55a12 12 0 0 1-8.49 3.51h-72.9a12 12 0 0 1-8.49-3.51l-51.55-51.55a12 12 0 0 1-3.51-8.49v-72.9a12 12 0 0 1 3.51-8.49l51.55-51.55A12 12 0 0 1 91.55 28h72.9a12 12 0 0 1 8.49 3.51l51.55 51.55a12 12 0 0 1 3.51 8.49m-8 0a4 4 0 0 0-1.17-2.83l-51.55-51.55a4.06 4.06 0 0 0-2.83-1.17h-72.9a4.06 4.06 0 0 0-2.83 1.17L37.17 88.72A4 4 0 0 0 36 91.55v72.9a4 4 0 0 0 1.17 2.83l51.55 51.55a4.06 4.06 0 0 0 2.83 1.17h72.9a4.06 4.06 0 0 0 2.83-1.17l51.55-51.55a4 4 0 0 0 1.17-2.83ZM128 164a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhWarningOctagonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningThinIcon],svg[ph-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.34 190.09L145.88 38.22a20.75 20.75 0 0 0-35.76 0L22.66 190.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220h174.92a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71m-6.94 15.71a12.47 12.47 0 0 1-10.94 6.2H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l87.45-151.87a12.76 12.76 0 0 1 21.9 0l87.45 151.87a11.45 11.45 0 0 1 0 11.72M124 144v-40a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineIcon],svg[ph-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM128 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m72-108a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-74.34 49.66l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhWashingMachineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineBoldIcon],svg[ph-washing-machine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m72-36v168a20 20 0 0 1-20 20H44a20 20 0 0 1-20-20V44a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20m-24 4H48v160h160Zm-68.49 75.51l-16 16a12 12 0 0 0 17 17l16-16a12 12 0 1 0-17-17m-15-16a12 12 0 0 0-17 0l-8 8a12 12 0 0 0 17 17l8-8a12 12 0 0 0-.02-17ZM128 196a68.05 68.05 0 0 0 67.19-78.52a12 12 0 0 0-23.72 3.69a44 44 0 1 1-36.64-36.64a12 12 0 0 0 3.69-23.72A68 68 0 1 0 128 196"></svg:path>`,
})
export class PhWashingMachineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineDuotoneIcon],svg[ph-washing-machine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM128 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m72-108a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-74.34 49.66l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhWashingMachineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineFillIcon],svg[ph-washing-machine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a56 56 0 1 1 56-56a56 56 0 0 1-56 56m60-104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-54.34 29.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhWashingMachineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineLightIcon],svg[ph-washing-machine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM128 66a62 62 0 1 0 62 62a62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50m70-110a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-73.76 48.24l-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 8.48m32-.48a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhWashingMachineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineThinIcon],svg[ph-washing-machine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM128 68a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52m68-112a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-73.17 46.83l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 5.66m32 2.34a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhWashingMachineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchIcon],svg[ph-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 128a79.94 79.94 0 0 0-32.7-64.47l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38A79.94 79.94 0 0 0 208 128M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0ZM64 128a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64m89.32 96h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM120 128V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhWatchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchBoldIcon],svg[ph-watch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 128a79.85 79.85 0 0 0-27.95-60.68L173 28.43A20 20 0 0 0 153.32 12h-50.64A20 20 0 0 0 83 28.43l-7 38.89a79.84 79.84 0 0 0 0 121.36l7 38.89A20 20 0 0 0 102.68 244h50.64A20 20 0 0 0 173 227.57l7.05-38.89A79.85 79.85 0 0 0 208 128M106 36h44l2.9 16a79.76 79.76 0 0 0-49.76 0Zm44 184h-44l-2.9-16a79.76 79.76 0 0 0 49.76 0Zm-22-36a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m40-56a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-28a12 12 0 0 1 24 0v16h16a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWatchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchDuotoneIcon],svg[ph-watch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M208 128a79.94 79.94 0 0 0-32.7-64.47l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38A79.94 79.94 0 0 0 208 128M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0ZM64 128a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64m89.32 96h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM120 128V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhWatchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchFillIcon],svg[ph-watch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m175.3 63.53l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38a79.9 79.9 0 0 0 0-128.94M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0Zm50.64 192h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM168 136h-40a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhWatchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchLightIcon],svg[ph-watch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 128a77.92 77.92 0 0 0-32.53-63.31L167.1 29.5A14 14 0 0 0 153.32 18h-50.64A14 14 0 0 0 88.9 29.5l-6.37 35.19a77.87 77.87 0 0 0 0 126.62l6.37 35.19a14 14 0 0 0 13.78 11.5h50.64a14 14 0 0 0 13.78-11.5l6.37-35.19A77.92 77.92 0 0 0 206 128M100.71 31.64a2 2 0 0 1 2-1.64h50.64a2 2 0 0 1 2 1.64l4.56 25.19a77.68 77.68 0 0 0-63.7 0Zm54.58 192.72a2 2 0 0 1-2 1.64h-50.61a2 2 0 0 1-2-1.64l-4.56-25.19a77.68 77.68 0 0 0 63.7 0ZM128 194a66 66 0 1 1 66-66a66.08 66.08 0 0 1-66 66m46-66a6 6 0 0 1-6 6h-40a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhWatchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchThinIcon],svg[ph-watch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 128a75.94 75.94 0 0 0-32.35-62.16l-6.52-36A12 12 0 0 0 153.32 20h-50.64a12 12 0 0 0-11.81 9.86l-6.52 36a75.89 75.89 0 0 0 0 124.32l6.52 36a12 12 0 0 0 11.81 9.82h50.64a12 12 0 0 0 11.81-9.86l6.52-36A75.94 75.94 0 0 0 204 128M98.74 31.29a4 4 0 0 1 3.94-3.29h50.64a4 4 0 0 1 3.94 3.29l5.26 29a75.69 75.69 0 0 0-69 0Zm58.52 193.42a4 4 0 0 1-3.94 3.29h-50.64a4 4 0 0 1-3.94-3.29l-5.26-29a75.69 75.69 0 0 0 69 0ZM128 196a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68m44-68a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhWatchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothIcon],svg[ph-wave-sawtooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.19 134.81l-104 64A8 8 0 0 1 120 192V78.32l-91.81 56.49a8 8 0 0 1-8.38-13.62l104-64A8 8 0 0 1 136 64v113.68l91.81-56.49a8 8 0 0 1 8.38 13.62"></svg:path>`,
})
export class PhWaveSawtoothIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothBoldIcon],svg[ph-wave-sawtooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.29 138.22l-104 64A12 12 0 0 1 116 192V85.47l-85.71 52.75a12 12 0 0 1-12.58-20.44l104-64A12 12 0 0 1 140 64v106.53l85.71-52.75a12 12 0 1 1 12.58 20.44"></svg:path>`,
})
export class PhWaveSawtoothBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothDuotoneIcon],svg[ph-wave-sawtooth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 64v64H24Zm104 64H128v64Z" opacity=".2"></svg:path><svg:path d="m236.19 134.81l-104 64A8 8 0 0 1 120 192V78.32l-91.81 56.49a8 8 0 0 1-8.38-13.62l104-64A8 8 0 0 1 136 64v113.68l91.81-56.49a8 8 0 0 1 8.38 13.62"></svg:path></svg:g>`,
})
export class PhWaveSawtoothDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothFillIcon],svg[ph-wave-sawtooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.56 94.66l-72 48A8 8 0 0 1 128 184a8 8 0 0 1-8-8V95l-59.56 39.66a8 8 0 1 1-8.88-13.32l72-48A8 8 0 0 1 136 80v81.05l59.56-39.71a8 8 0 0 1 8.88 13.32"></svg:path>`,
})
export class PhWaveSawtoothFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothLightIcon],svg[ph-wave-sawtooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.14 133.11l-104 64A6 6 0 0 1 122 192V74.74l-94.85 58.37a6 6 0 1 1-6.29-10.22l104-64A6 6 0 0 1 134 64v117.26l94.85-58.37a6 6 0 1 1 6.29 10.22"></svg:path>`,
})
export class PhWaveSawtoothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothThinIcon],svg[ph-wave-sawtooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.1 131.41l-104 64a4 4 0 0 1-2.1.59a4 4 0 0 1-4-4V71.16l-97.9 60.25a4 4 0 0 1-4.2-6.82l104-64A4 4 0 0 1 132 64v120.84l97.9-60.25a4 4 0 1 1 4.2 6.82"></svg:path>`,
})
export class PhWaveSawtoothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineIcon],svg[ph-wave-sine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.24 131.4c-22 46.8-41.4 68.6-61.2 68.6c-25.1 0-40.73-33.32-57.28-68.6C107.7 103.56 92.9 72 78 72c-16.4 0-36.31 37.21-46.72 59.4a8 8 0 0 1-14.48-6.8C38.71 77.8 58.16 56 78 56c25.1 0 40.73 33.32 57.28 68.6C148.3 152.44 163.1 184 178 184c16.4 0 36.31-37.21 46.72-59.4a8 8 0 0 1 14.48 6.8Z"></svg:path>`,
})
export class PhWaveSineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineBoldIcon],svg[ph-wave-sine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.86 133.1c-23 49-43 70.9-64.82 70.9c-27.64 0-43.8-34.44-60.9-70.9c-7.14-15.32-14.61-31.1-22.22-42.37C88.39 81.09 82.53 76 78 76c-3.82 0-18.24 4.12-43.09 57.1a12 12 0 0 1-21.73-10.2c23-49 43-70.9 64.82-70.9c27.64 0 43.8 34.44 60.9 70.9c7.19 15.32 14.61 31.15 22.22 42.37c6.53 9.64 12.39 14.73 17 14.73c3.82 0 18.24-4.12 43.09-57.1a12 12 0 0 1 21.73 10.2Z"></svg:path>`,
})
export class PhWaveSineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineDuotoneIcon],svg[ph-wave-sine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 128c-52 110.85-78 55.43-104 0Zm-208 0h104c-26-55.43-52-110.85-104 0" opacity=".2"></svg:path><svg:path d="M239.24 131.4c-22 46.8-41.4 68.6-61.2 68.6c-25.1 0-40.73-33.32-57.28-68.6C107.7 103.56 92.9 72 78 72c-16.4 0-36.31 37.21-46.72 59.4a8 8 0 0 1-14.48-6.8C38.71 77.8 58.16 56 78 56c25.1 0 40.73 33.32 57.28 68.6C148.3 152.44 163.1 184 178 184c16.4 0 36.31-37.21 46.72-59.4a8 8 0 0 1 14.48 6.8Z"></svg:path></svg:g>`,
})
export class PhWaveSineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineFillIcon],svg[ph-wave-sine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-4.78 91.44c-16.68 35-31.06 50.56-46.65 50.56c-19.68 0-31.39-24.56-43.79-50.56C112 113 101 90 91.43 90c-3.74 0-14.37 4-32.21 41.44a8 8 0 0 1-14.44-6.88C61.46 89.59 75.84 74 91.43 74c19.68 0 31.39 24.56 43.79 50.56C144 143 155 166 164.57 166c3.74 0 14.37-4 32.21-41.44a8 8 0 1 1 14.44 6.88"></svg:path>`,
})
export class PhWaveSineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineLightIcon],svg[ph-wave-sine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.43 130.55C215.84 176.57 197 198 178 198c-23.83 0-39.2-32.76-55.47-67.45C109.26 102.17 94.17 70 78 70c-9.18 0-25 10.5-48.53 60.55a6 6 0 0 1-10.86-5.1C40.16 79.43 59 58 78 58c23.83 0 39.2 32.76 55.47 67.45C146.74 153.83 161.83 186 178 186c9.18 0 25.05-10.5 48.53-60.55a6 6 0 0 1 10.86 5.1Z"></svg:path>`,
})
export class PhWaveSineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineThinIcon],svg[ph-wave-sine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.62 129.7C214.4 174.93 196.1 196 178 196c-22.56 0-37.67-32.21-53.66-66.3C110.15 99.37 95.44 68 78 68c-14.2 0-31.13 20.76-50.34 61.7a4 4 0 0 1-7.24-3.4C41.6 81.07 59.9 60 78 60c22.56 0 37.67 32.21 53.66 66.3c14.19 30.33 28.9 61.7 46.34 61.7c14.2 0 31.13-20.76 50.34-61.7a4 4 0 0 1 7.24 3.4Z"></svg:path>`,
})
export class PhWaveSineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareIcon],svg[ph-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128v56a8 8 0 0 1-8 8H128a8 8 0 0 1-8-8V80H32v48a8 8 0 0 1-16 0V72a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v104h88v-48a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhWaveSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareBoldIcon],svg[ph-wave-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128v56a12 12 0 0 1-12 12H128a12 12 0 0 1-12-12V84H36v44a12 12 0 0 1-24 0V72a12 12 0 0 1 12-12h104a12 12 0 0 1 12 12v100h80v-44a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhWaveSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareDuotoneIcon],svg[ph-wave-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 72v56H24V72Zm0 56v56h104v-56Z" opacity=".2"></svg:path><svg:path d="M240 128v56a8 8 0 0 1-8 8H128a8 8 0 0 1-8-8V80H32v48a8 8 0 0 1-16 0V72a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v104h88v-48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhWaveSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareFillIcon],svg[ph-wave-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 128a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8V96H64v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v72h56v-32a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhWaveSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareLightIcon],svg[ph-wave-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 128v56a6 6 0 0 1-6 6H128a6 6 0 0 1-6-6V78H30v50a6 6 0 0 1-12 0V72a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6v106h92v-50a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhWaveSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareThinIcon],svg[ph-wave-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128v56a4 4 0 0 1-4 4H128a4 4 0 0 1-4-4V76H28v52a4 4 0 0 1-8 0V72a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v108h96v-52a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhWaveSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleIcon],svg[ph-wave-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z"></svg:path>`,
})
export class PhWaveTriangleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleBoldIcon],svg[ph-wave-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.73 135l-52 72a12 12 0 0 1-19.46 0L76 76.5L33.73 135a12 12 0 1 1-19.46-14l52-72a12 12 0 0 1 19.46 0L180 179.5l42.27-58.5a12 12 0 1 1 19.46 14"></svg:path>`,
})
export class PhWaveTriangleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleDuotoneIcon],svg[ph-wave-triangle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m76 56l52 72H24Zm156 72H128l52 72Z" opacity=".2"></svg:path><svg:path d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z"></svg:path></svg:g>`,
})
export class PhWaveTriangleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleFillIcon],svg[ph-wave-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-9.85 93.12l-40 48A8 8 0 0 1 160 184h-.43a8 8 0 0 1-6.23-3.55l-58-87.09l-33.19 39.76a8 8 0 0 1-12.3-10.24l40-48a8 8 0 0 1 12.81.68l58.05 87.09l33.14-39.77a8 8 0 1 1 12.3 10.24"></svg:path>`,
})
export class PhWaveTriangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleLightIcon],svg[ph-wave-triangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.86 131.51l-52 72a6 6 0 0 1-9.72 0L76 66.25l-47.14 65.26a6 6 0 1 1-9.72-7l52-72a6 6 0 0 1 9.72 0L180 189.75l47.14-65.26a6 6 0 0 1 9.72 7Z"></svg:path>`,
})
export class PhWaveTriangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleThinIcon],svg[ph-wave-triangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.24 130.34l-52 72a4 4 0 0 1-6.48 0L76 62.83l-48.76 67.51a4 4 0 1 1-6.48-4.68l52-72a4 4 0 0 1 6.48 0L180 193.17l48.76-67.51a4 4 0 0 1 6.48 4.68"></svg:path>`,
})
export class PhWaveTriangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformIcon],svg[ph-waveform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m32-72a8 8 0 0 0-8 8v192a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m40 32a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m40 32a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m40-16a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhWaveformIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformBoldIcon],svg[ph-waveform-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m28-76a12 12 0 0 0-12 12v192a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m40 32a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m40 32a12 12 0 0 0-12 12v64a12 12 0 0 0 24 0V96a12 12 0 0 0-12-12m40-16a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0V80a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhWaveformBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformDuotoneIcon],svg[ph-waveform-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 96v64H48V96Z" opacity=".2"></svg:path><svg:path d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m32-72a8 8 0 0 0-8 8v192a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m40 32a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m40 32a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8m40-16a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhWaveformDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformFillIcon],svg[ph-waveform-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 152a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 32a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 8a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhWaveformFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformLightIcon],svg[ph-waveform-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m34-70a6 6 0 0 0-6 6v192a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6m40-16a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhWaveformLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashIcon],svg[ph-waveform-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-2.08-61.38a8 8 0 1 0-11.84 10.76L80 87.09V224a8 8 0 0 0 16 0V104.69l24 26.4V192a8 8 0 0 0 16 0v-43.31l66.08 72.69a8 8 0 1 0 11.84-10.76ZM88 44.43a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v4.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V64a8 8 0 0 0-16 0v16.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28.43a8 8 0 0 0 8 8M208 72a8 8 0 0 0-8 8v88.43a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhWaveformSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashBoldIcon],svg[ph-waveform-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m-3.12-64.07a12 12 0 1 0-17.76 16.14L76 88.64V224a12 12 0 0 0 24 0V115l16 17.6V192a12 12 0 0 0 24 0v-33l59.12 65a12 12 0 0 0 17.76-16.14ZM128 80.54a12 12 0 0 0 12-12V64a12 12 0 0 0-24 0v4.54a12 12 0 0 0 12 12m40 44a12 12 0 0 0 12-12V96a12 12 0 0 0-24 0v16.54a12 12 0 0 0 12 12M208 68a12 12 0 0 0-12 12v76.54a12 12 0 0 0 24 0V80a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhWaveformSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashDuotoneIcon],svg[ph-waveform-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 96v64H48V96Z" opacity=".2"></svg:path><svg:path d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-2.08-61.38a8 8 0 1 0-11.84 10.76L80 87.09V224a8 8 0 0 0 16 0V104.69l24 26.4V192a8 8 0 0 0 16 0v-43.31l66.08 72.69a8 8 0 1 0 11.84-10.76ZM88 44.43a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v4.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V64a8 8 0 0 0-16 0v16.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28.43a8 8 0 0 0 8 8M208 72a8 8 0 0 0-8 8v88.43a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhWaveformSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashFillIcon],svg[ph-waveform-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 56a8 8 0 0 1 16 0v50.75a8 8 0 0 1-16 0Zm-32 8a8 8 0 0 1 16 0v10.75a8 8 0 0 1-16 0Zm-80 48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm125.66 45.66a8 8 0 0 1-11.32 0L136 147.31V168a8 8 0 0 1-16 0v-36.69l-16-16V184a8 8 0 0 1-16 0V99.32L58.34 69.66a8 8 0 0 1 11.32-11.32l128 128a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhWaveformSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashLightIcon],svg[ph-waveform-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-1.56-60a6 6 0 0 0-8.88 8L82 86.32V224a6 6 0 0 0 12 0V99.52l28 30.8V192a6 6 0 0 0 12 0v-48.48L203.56 220a6 6 0 0 0 8.88-8.08ZM88 42.43a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v4.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V64a6 6 0 0 0-12 0v16.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V96a6 6 0 0 0-12 0v28.43a6 6 0 0 0 6 6M208 74a6 6 0 0 0-6 6v88.43a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhWaveformSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashThinIcon],svg[ph-waveform-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-1-58.69a4 4 0 0 0-6 5.38l39 42.86V224a4 4 0 0 0 8 0V94.35l32 35.2V192a4 4 0 0 0 8 0v-53.65l73 80.34a4 4 0 1 0 5.92-5.38Zm37 3.12a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v4.43a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V64a4 4 0 0 0-8 0v16.43a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V96a4 4 0 0 0-8 0v28.43a4 4 0 0 0 4 4M208 76a4 4 0 0 0-4 4v88.43a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhWaveformSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
