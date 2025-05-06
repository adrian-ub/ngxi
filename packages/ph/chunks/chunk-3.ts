import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBuildingThinIcon],svg[ph-building-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 228h-28V28h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v200H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M60 28h136v200h-40v-44a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v44H60Zm88 200h-40v-40h40ZM92 64a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-48 40a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-44 44a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8Zm44-4a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBuildingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsIcon],svg[ph-buildings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBuildingsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsBoldIcon],svg[ph-buildings-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-12V96a20 20 0 0 0-20-20h-36V32a20 20 0 0 0-28.45-18.12l-104 48.54A20.06 20.06 0 0 0 28 80.55V204H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-36-104v104h-32V100ZM52 83.09l96-44.79V204H52ZM132 112v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m-40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m0 52v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBuildingsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsDuotoneIcon],svg[ph-buildings-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".2"></svg:path><svg:path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBuildingsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsFillIcon],svg[ph-buildings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.73 208H224V96a16 16 0 0 0-16-16h-44a4 4 0 0 0-4 4v124h-16V32.41a16.43 16.43 0 0 0-6.16-13a16 16 0 0 0-18.72-.69L39.12 72A16 16 0 0 0 32 85.34V208H16.27A8.18 8.18 0 0 0 8 215.47a8 8 0 0 0 8 8.53h224a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.27-7.47M76 184a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.28v-15.45a8.19 8.19 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8Zm0-56a8 8 0 0 1-8.53 8a8.19 8.19 0 0 1-7.47-8.28v-15.45a8.19 8.19 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8Zm40 56a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.26v-15.47a8.19 8.19 0 0 1 7.47-8.26a8 8 0 0 1 8.53 8Zm0-56a8 8 0 0 1-8.53 8a8.19 8.19 0 0 1-7.47-8.26v-15.47a8.19 8.19 0 0 1 7.47-8.26a8 8 0 0 1 8.53 8Z"></svg:path>`,
})
export class PhBuildingsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsLightIcon],svg[ph-buildings-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-18V96a14 14 0 0 0-14-14h-66V32a14 14 0 0 0-21.77-11.64l-80 53.33A14 14 0 0 0 34 85.34V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M208 94a2 2 0 0 1 2 2v114h-68V94ZM46 85.34a2 2 0 0 1 .89-1.66l80-53.34A2 2 0 0 1 130 32v178H46ZM110 112v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m-32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m0 56v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0m32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBuildingsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingsThinIcon],svg[ph-buildings-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-20V96a12 12 0 0 0-12-12h-68V32a12 12 0 0 0-18.66-10l-80 53.33a12 12 0 0 0-5.34 10V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M208 92a4 4 0 0 1 4 4v116h-72V92ZM44 85.34A4 4 0 0 1 45.78 82l80-53.33A4 4 0 0 1 132 32v180H44ZM108 112v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m-32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m0 56v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0m32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBuildingsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerIcon],svg[ph-bulldozer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.09 40.09 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16m-100-64H64V56h50.67ZM48 56v80h-8a39.7 39.7 0 0 0-16 3.35V56Zm112 144H40a24 24 0 0 1 0-48h120a24 24 0 0 1 0 48m8-24a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h120a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBulldozerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerBoldIcon],svg[ph-bulldozer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 196h-8a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h8a12 12 0 0 0 0-24h-8a28 28 0 0 0-28 28v4h-9.68a44.13 44.13 0 0 0-34-31.2l-35.2-84.49A20 20 0 0 0 110.67 36H24A20 20 0 0 0 4 56v101.7A44 44 0 0 0 44 220h112a44.06 44.06 0 0 0 42.32-32H208v4a28 28 0 0 0 28 28h8a12 12 0 0 0 0-24m-106-64H68V60h40ZM44 60v72a43.9 43.9 0 0 0-16 3V60Zm112 136H44a20 20 0 0 1 0-40h112a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhBulldozerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerDuotoneIcon],svg[ph-bulldozer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 176a32 32 0 0 1-32 32H40a32 32 0 0 1-32-32a32 32 0 0 1 32-32h120a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.09 40.09 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16m-100-64H64V56h50.67ZM48 56v80h-8a39.7 39.7 0 0 0-16 3.35V56Zm112 144H40a24 24 0 0 1 0-48h120a24 24 0 0 1 0 48m8-24a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h120a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBulldozerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerFillIcon],svg[ph-bulldozer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.1 40.1 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16M64 56h50.67L148 136H64Zm-40 0h24v80h-8a39.7 39.7 0 0 0-16 3.35Zm136 128H40a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBulldozerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerLightIcon],svg[ph-bulldozer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 202h-8a10 10 0 0 1-10-10v-32a10 10 0 0 1 10-10h8a6 6 0 0 0 0-12h-8a22 22 0 0 0-22 22v10h-20.48a38.08 38.08 0 0 0-33.43-31.78l-36.5-87.61A14 14 0 0 0 114.67 42H24a14 14 0 0 0-14 14v96.72A38 38 0 0 0 40 214h120a38.05 38.05 0 0 0 37.52-32H218v10a22 22 0 0 0 22 22h8a6 6 0 0 0 0-12M116.51 55.23L151 138H62V54h52.67a2 2 0 0 1 1.84 1.23M24 54h26v84H40a37.8 37.8 0 0 0-18 4.54V56a2 2 0 0 1 2-2m136 148H40a26 26 0 0 1 0-52h120a26 26 0 0 1 0 52m6-26a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h120a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBulldozerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBulldozerThinIcon],svg[ph-bulldozer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 204h-8a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h8a4 4 0 0 0 0-8h-8a20 20 0 0 0-20 20v12h-24.23a36.06 36.06 0 0 0-33.06-31.89l-37-88.73A12 12 0 0 0 114.67 44H24a12 12 0 0 0-12 12v97.41A36 36 0 0 0 40 212h120a36 36 0 0 0 35.77-32H220v12a20 20 0 0 0 20 20h8a4 4 0 0 0 0-8M118.36 54.46L154 140H60V52h54.67a4 4 0 0 1 3.69 2.46M24 52h28v88H40a35.76 35.76 0 0 0-20 6.08V56a4 4 0 0 1 4-4m136 152H40a28 28 0 0 1 0-56h120a28 28 0 0 1 0 56m4-28a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h120a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhBulldozerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusIcon],svg[ph-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a32 32 0 0 0-32 32v144a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V64a32 32 0 0 0-32-32M56 176v-56h144v56Zm0-96h144v24H56Zm16-32h112a16 16 0 0 1 16 16H56a16 16 0 0 1 16-16m8 160H56v-16h24Zm96 0v-16h24v16Zm-72-60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72-68v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M24 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusBoldIcon],svg[ph-bus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a36 36 0 0 0-36 36v144a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-16h48v16a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20V64a36 36 0 0 0-36-36M60 168v-56h136v56ZM72 52h112a12 12 0 0 1 12 12v24H60V64a12 12 0 0 1 12-12m8 152H60v-12h20Zm96 0v-12h20v12Zm-68-64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m76-60v24a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0M24 80v24a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusDuotoneIcon],svg[ph-bus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 184h40v24a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8Zm120 24a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24h-40ZM48 72v40h160V72Z" opacity=".2"></svg:path><svg:path d="M184 32H72a32 32 0 0 0-32 32v144a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V64a32 32 0 0 0-32-32M56 176v-56h144v56Zm0-96h144v24H56Zm16-32h112a16 16 0 0 1 16 16H56a16 16 0 0 1 16-16m8 160H56v-16h24Zm96 0v-16h24v16Zm-72-60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72-68v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M24 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusFillIcon],svg[ph-bus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M16 72a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m200-8v144a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-8H88v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32m-112 84a12 12 0 1 0-12 12a12 12 0 0 0 12-12m72 0a12 12 0 1 0-12 12a12 12 0 0 0 12-12m24-76H56v40h144Z"></svg:path>`,
})
export class PhBusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusLightIcon],svg[ph-bus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a30 30 0 0 0-30 30v144a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V64a30 30 0 0 0-30-30M54 178v-60h148v60Zm0-100h148v28H54Zm18-32h112a18 18 0 0 1 18 18v2H54v-2a18 18 0 0 1 18-18m10 162a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-18h28Zm118 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m-98-62a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72-68v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0M22 80v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBusThinIcon],svg[ph-bus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a28 28 0 0 0-28 28v144a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h72v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V64a28 28 0 0 0-28-28M52 180v-64h152v64Zm152-72H52V76h152ZM84 208a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-20h32Zm116 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-144H52v-4a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-104 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72-68v24a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0M20 80v24a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyIcon],svg[ph-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.7 50.48C229 45.7 221.84 40 209 40c-16.85 0-38.46 11.28-57.81 30.16A140 140 0 0 0 136 87.53V56a8 8 0 0 0-16 0v31.53a140 140 0 0 0-15.15-17.37C85.49 51.28 63.88 40 47 40c-12.84 0-20 5.7-23.7 10.48c-6.82 8.77-12.18 24.08-.21 71.2c6.05 23.83 19.51 33 30.63 36.42A44 44 0 0 0 128 205.27a44 44 0 0 0 74.28-47.17c11.12-3.4 24.57-12.59 30.63-36.42c6.72-26.44 11.94-55.58-.21-71.2M92 208a28.12 28.12 0 0 1-3.14-56a8 8 0 1 0-1.76-15.9a43.64 43.64 0 0 0-20.74 7.9c-8.43.09-22-3.57-27.76-26.26c-2.88-11.35-11.6-45.88-2.66-57.44C37.37 58.46 40.09 56 47 56c27.27 0 73 44.88 73 71.67V180a28 28 0 0 1-28 28m125.4-90.26c-5.77 22.69-19.33 26.34-27.77 26.26a43.6 43.6 0 0 0-20.74-7.95a8 8 0 1 0-1.76 15.9A28.11 28.11 0 1 1 136 180v-52.33C136 100.88 181.69 56 209 56c6.95 0 9.66 2.46 11.1 4.3c8.95 11.56.18 46.09-2.7 57.44"></svg:path>`,
})
export class PhButterflyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyBoldIcon],svg[ph-butterfly-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.79 48c-4.27-5.48-12.4-12-26.88-12c-17.86 0-40.5 11.7-60.57 31.3c-3 2.89-5.74 5.85-8.34 8.84V56a12 12 0 0 0-24 0v20.14c-2.6-3-5.38-6-8.34-8.84C87.59 47.7 65 36 47.09 36c-14.48 0-22.61 6.54-26.88 12C7 65 12 93.91 19.28 122.66c5.75 22.64 17.8 33 28.88 37.69A48.12 48.12 0 0 0 92 228a47.87 47.87 0 0 0 36-16.28A48 48 0 0 0 212 180a48.5 48.5 0 0 0-4.14-19.65c11.08-4.67 23.13-15 28.88-37.69C244 93.91 249 65 235.79 48M92 204a24 24 0 0 1-24-24a24.36 24.36 0 0 1 21.31-24.07a12 12 0 0 0-2.64-23.86a47.6 47.6 0 0 0-21.5 7.93c-8.19-.29-18-4.92-22.63-23.24c-7.41-29.18-8.55-47.35-3.39-54C39.74 62 41.3 60 47.09 60c11.21 0 28.82 9.83 43.81 24.47c15.25 14.9 25.1 31.86 25.1 43.2V180a24 24 0 0 1-24 24m121.45-87.25C208.81 135.07 199 139.7 190.82 140a47.54 47.54 0 0 0-21.51-7.92a12 12 0 1 0-2.64 23.86A24.36 24.36 0 0 1 188 180a24 24 0 1 1-48 0v-52.33c0-11.34 9.85-28.3 25.1-43.2C180.09 69.83 197.7 60 208.91 60c5.79 0 7.35 2 7.94 2.76c5.15 6.64 4.02 24.81-3.39 53.99Z"></svg:path>`,
})
export class PhButterflyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyDuotoneIcon],svg[ph-butterfly-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M225.12 119.71c-7.86 30.94-29.31 32.71-37.36 32.23h-1A36 36 0 1 1 128 180a36 36 0 1 1-58.72-28.06h-1c-8 .48-29.5-1.29-37.36-32.23C22.79 87.84 15.78 48 47.07 48S128 95.8 128 127.67C128 95.8 177.64 48 208.93 48s24.28 39.84 16.19 71.71" opacity=".2"></svg:path><svg:path d="M232.7 50.48C229 45.7 221.84 40 209 40c-16.85 0-38.46 11.28-57.81 30.16A140 140 0 0 0 136 87.53V56a8 8 0 0 0-16 0v31.53a140 140 0 0 0-15.15-17.37C85.49 51.28 63.88 40 47 40c-12.84 0-20 5.7-23.7 10.48c-6.82 8.77-12.18 24.08-.21 71.2c6.05 23.83 19.51 33 30.63 36.42A44 44 0 0 0 128 205.27a44 44 0 0 0 74.28-47.17c11.12-3.4 24.57-12.59 30.63-36.42c6.72-26.44 11.94-55.58-.21-71.2M92 208a28.12 28.12 0 0 1-3.14-56a8 8 0 1 0-1.76-15.9a43.64 43.64 0 0 0-20.74 7.9c-8.43.09-22-3.57-27.76-26.26c-2.88-11.35-11.6-45.88-2.66-57.44C37.37 58.46 40.09 56 47 56c27.27 0 73 44.88 73 71.67V180a28 28 0 0 1-28 28m125.4-90.26c-5.77 22.69-19.33 26.34-27.77 26.26a43.6 43.6 0 0 0-20.74-7.95a8 8 0 1 0-1.76 15.9A28.11 28.11 0 1 1 136 180v-52.33C136 100.88 181.69 56 209 56c6.95 0 9.66 2.46 11.1 4.3c8.95 11.56.18 46.09-2.7 57.44"></svg:path></svg:g>`,
})
export class PhButterflyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyFillIcon],svg[ph-butterfly-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100.17a108 108 0 0 0-8-12.64V56a8 8 0 0 1 16 0v31.53a108 108 0 0 0-8 12.64m104.7-49.69C229 45.7 221.84 40 209 40c-16.85 0-38.46 11.28-57.81 30.16A140 140 0 0 0 136 87.53V180a8 8 0 0 1-16 0V87.53a140 140 0 0 0-15.15-17.37C85.49 51.28 63.88 40 47 40c-12.84 0-20 5.7-23.7 10.48c-6.82 8.77-12.18 24.08-.21 71.2c6.05 23.83 19.51 33 30.63 36.42A44 44 0 0 0 128 205.27a44 44 0 0 0 74.28-47.17c11.12-3.4 24.57-12.59 30.63-36.42c6.72-26.44 11.94-55.58-.21-71.2"></svg:path>`,
})
export class PhButterflyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyLightIcon],svg[ph-butterfly-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.1 51.71C226.09 45.27 218.64 42 209 42c-16.33 0-37.41 11.06-56.4 29.59A132 132 0 0 0 134 93.94V56a6 6 0 0 0-12 0v37.94a132 132 0 0 0-18.54-22.35C84.49 53.06 63.4 42 47.07 42c-9.69 0-17.14 3.27-22.15 9.71c-5.53 7.11-7.71 17.69-6.66 32.34c.91 12.73 4.12 26.53 6.81 37.13c6.28 24.74 20.77 33 31.78 35.68A42 42 0 1 0 128 201.62a42 42 0 1 0 71.16-44.76c11-2.63 25.5-10.94 31.78-35.68c6.61-25.97 11.78-54.53.16-69.47M92 210a30.12 30.12 0 0 1-3.34-60a6 6 0 0 0-1.31-12a41.7 41.7 0 0 0-20.28 8c-9 .31-24.12-3.16-30.37-27.76c-3.25-12.81-11.89-46.83-2.31-59.15C37.05 55.66 41.2 54 47.07 54c12.88 0 31.72 10.28 48 26.18C111.69 96.39 122 114.59 122 127.67V180a30 30 0 0 1-30 30m127.31-91.77C213.07 142.83 198 146.29 189 146a41.6 41.6 0 0 0-20.28-8a6 6 0 1 0-1.36 12A30.11 30.11 0 1 1 134 180v-52.33c0-13.08 10.32-31.28 26.93-47.49C177.23 64.28 196.07 54 209 54c5.87 0 10 1.66 12.68 5.08c9.53 12.32.89 46.34-2.36 59.15Z"></svg:path>`,
})
export class PhButterflyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phButterflyThinIcon],svg[ph-butterfly-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.5 52.94C224.89 47 218 44 208.93 44c-25.86 0-61.28 28.73-76.93 57.28V56a4 4 0 0 0-8 0v45.28C108.35 72.73 72.93 44 47.07 44c-9 0-16 3-20.57 8.94c-11.1 14.26-6 42.25.5 67.75c3.67 14.42 10.55 24.64 20.48 30.38a36.8 36.8 0 0 0 12.75 4.45A40 40 0 1 0 128 197.43a40 40 0 1 0 67.77-41.9a36.8 36.8 0 0 0 12.75-4.46c9.93-5.74 16.81-16 20.48-30.38c6.47-25.5 11.6-53.49.5-67.75M92 212a32.12 32.12 0 0 1-3.56-64a4 4 0 0 0-.88-8a39.64 39.64 0 0 0-19.78 8c-22.8 1.24-30.68-20-33-29.24c-5.65-22.24-11-49.26-1.95-60.87C35.87 53.91 40.54 52 47.07 52C76.55 52 124 98.68 124 127.67V180a32 32 0 0 1-32 32m129.24-93.28c-2.34 9.22-10.22 30.47-33 29.24a39.7 39.7 0 0 0-19.8-7.96a4 4 0 0 0-.88 8A32.1 32.1 0 1 1 132 180v-52.33c0-29 47.45-75.67 76.93-75.67c6.53 0 11.2 1.91 14.26 5.85c9.03 11.61 3.7 38.63-1.95 60.87"></svg:path>`,
})
export class PhButterflyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarIcon],svg[ph-cable-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.87 30.59a8 8 0 0 0-9.28-6.46l-224 40A8 8 0 0 0 16 80a8.6 8.6 0 0 0 1.42-.12L120 61.55V96H64a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-56V58.7l105.4-18.82a8 8 0 0 0 6.47-9.29M104 160v-48h48v48Zm-40-48h24v48H48v-32a16 16 0 0 1 16-16m128 96H64a16 16 0 0 1-16-16v-16h160v16a16 16 0 0 1-16 16m16-80v32h-40v-48h24a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCableCarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarBoldIcon],svg[ph-cable-car-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.81 29.89a12 12 0 0 0-13.92-9.7l-224 40A12 12 0 0 0 16 84a12 12 0 0 0 2.12-.19L116 66.33V92H64a36 36 0 0 0-36 36v64a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36v-64a36 36 0 0 0-36-36h-52V62.05l102.11-18.24a12 12 0 0 0 9.7-13.92M108 156v-40h40v40Zm-44-40h20v40H52v-28a12 12 0 0 1 12-12m128 88H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12m12-76v28h-32v-40h20a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCableCarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarDuotoneIcon],svg[ph-cable-car-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128v40H40v-40a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M247.87 30.59a8 8 0 0 0-9.28-6.46l-224 40A8 8 0 0 0 16 80a8.6 8.6 0 0 0 1.42-.12L120 61.56V96H64a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-56V58.7l105.4-18.82a8 8 0 0 0 6.47-9.29M104 160v-48h48v48Zm-40-48h24v48H48v-32a16 16 0 0 1 16-16m128 96H64a16 16 0 0 1-16-16v-16h160v16a16 16 0 0 1-16 16m16-80v32h-40v-48h24a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCableCarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarFillIcon],svg[ph-cable-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.87 30.59a8 8 0 0 0-9.28-6.46l-224 40A8 8 0 0 0 16 80a8.6 8.6 0 0 0 1.42-.12L120 61.56V96H64a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32h-56V58.7l105.4-18.82a8 8 0 0 0 6.47-9.29M104 160v-48h48v48Zm-40-48h24v48H48v-32a16 16 0 0 1 16-16m144 16v32h-40v-48h24a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCableCarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarLightIcon],svg[ph-cable-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.91 31a6 6 0 0 0-7-4.85L15 66.1A6 6 0 0 0 16 78a6.5 6.5 0 0 0 1.07-.09L122 59.17V98H64a30 30 0 0 0-30 30v64a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30v-64a30 30 0 0 0-30-30h-58V57l107.05-19.09a6 6 0 0 0 4.86-6.91M102 162v-52h52v52Zm-38-52h26v52H46v-34a18 18 0 0 1 18-18m128 100H64a18 18 0 0 1-18-18v-18h164v18a18 18 0 0 1-18 18m18-82v34h-44v-52h26a18 18 0 0 1 18 18"></svg:path>`,
})
export class PhCableCarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCableCarThinIcon],svg[ph-cable-car-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.94 31.3a4 4 0 0 0-4.64-3.24l-224 40A4 4 0 0 0 16 76a4 4 0 0 0 .7-.06L124 56.78V100H64a28 28 0 0 0-28 28v64a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28h-60V55.35l108.7-19.41a4 4 0 0 0 3.24-4.64M100 164v-56h56v56Zm-36-56h28v56H44v-36a20 20 0 0 1 20-20m128 104H64a20 20 0 0 1-20-20v-20h168v20a20 20 0 0 1-20 20m20-84v36h-48v-56h28a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCableCarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusIcon],svg[ph-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 208h-48v-24h4a68.07 68.07 0 0 0 68-68a28 28 0 0 0-56 0a12 12 0 0 1-12 12h-4V56a40 40 0 0 0-80 0v32h-4a12 12 0 0 1-12-12a28 28 0 0 0-56 0a68.07 68.07 0 0 0 68 68h4v64H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M96 128H84a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h12a8 8 0 0 0 8-8V56a24 24 0 0 1 48 0v80a8 8 0 0 0 8 8h12a28 28 0 0 0 28-28a12 12 0 0 1 24 0a52.06 52.06 0 0 1-52 52h-12a8 8 0 0 0-8 8v32h-48v-72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCactusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusBoldIcon],svg[ph-cactus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 204h-44v-16a72.08 72.08 0 0 0 72-72a32 32 0 0 0-64 0a8 8 0 0 1-8 8V56a44 44 0 0 0-88 0v28a8 8 0 0 1-8-8a32 32 0 0 0-64 0a72.08 72.08 0 0 0 72 72v56H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M96 124H84a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 32 32h12a12 12 0 0 0 12-12V56a20 20 0 0 1 40 0v80a12 12 0 0 0 12 12h12a32 32 0 0 0 32-32a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48h-12a12 12 0 0 0-12 12v28h-40v-68a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCactusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusDuotoneIcon],svg[ph-cactus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 116a60 60 0 0 1-60 60h-12v40H96v-80H84a60 60 0 0 1-60-60a20 20 0 0 1 20-20a20 20 0 0 1 20 20a20 20 0 0 0 20 20h12V56a32 32 0 0 1 32-32a32 32 0 0 1 32 32v80h12a20 20 0 0 0 20-20a20 20 0 0 1 20-20a20 20 0 0 1 20 20" opacity=".2"></svg:path><svg:path d="M216 208h-48v-24h4a68.07 68.07 0 0 0 68-68a28 28 0 0 0-56 0a12 12 0 0 1-12 12h-4V56a40 40 0 0 0-80 0v32h-4a12 12 0 0 1-12-12a28 28 0 0 0-56 0a68.07 68.07 0 0 0 68 68h4v64H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M96 128H84a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h12a8 8 0 0 0 8-8V56a24 24 0 0 1 48 0v80a8 8 0 0 0 8 8h12a28 28 0 0 0 28-28a12 12 0 0 1 24 0a52.06 52.06 0 0 1-52 52h-12a8 8 0 0 0-8 8v32h-48v-72a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCactusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusFillIcon],svg[ph-cactus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h48v-72h-8a64.07 64.07 0 0 1-64-64a24.07 24.07 0 0 1 24.08-24h.4A23.55 23.55 0 0 1 64 71.52V72a16 16 0 0 0 16 16h8V56a40 40 0 0 1 80 0v72h8a16 16 0 0 0 16-16v-.48A23.55 23.55 0 0 1 215.52 88h.4A24.07 24.07 0 0 1 240 112a64.07 64.07 0 0 1-64 64h-8v32h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCactusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusLightIcon],svg[ph-cactus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 210h-50v-28h6a66.08 66.08 0 0 0 66-66a26 26 0 0 0-52 0a14 14 0 0 1-14 14h-6V56a38 38 0 0 0-76 0v34h-6a14 14 0 0 1-14-14a26 26 0 0 0-52 0a66.08 66.08 0 0 0 66 66h6v68H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M96 130H84a54.06 54.06 0 0 1-54-54a14 14 0 0 1 28 0a26 26 0 0 0 26 26h12a6 6 0 0 0 6-6V56a26 26 0 0 1 52 0v80a6 6 0 0 0 6 6h12a26 26 0 0 0 26-26a14 14 0 0 1 28 0a54.06 54.06 0 0 1-54 54h-12a6 6 0 0 0-6 6v34h-52v-74a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCactusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCactusThinIcon],svg[ph-cactus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-52v-32h8a64.07 64.07 0 0 0 64-64a24 24 0 0 0-48 0a16 16 0 0 1-16 16h-8V56a36 36 0 0 0-72 0v36h-8a16 16 0 0 1-16-16a24 24 0 0 0-48 0a64.07 64.07 0 0 0 64 64h8v72H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M96 132H84a56.06 56.06 0 0 1-56-56a16 16 0 0 1 32 0a24 24 0 0 0 24 24h12a4 4 0 0 0 4-4V56a28 28 0 0 1 56 0v80a4 4 0 0 0 4 4h12a24 24 0 0 0 24-24a16 16 0 0 1 32 0a56.06 56.06 0 0 1-56 56h-12a4 4 0 0 0-4 4v36h-56v-76a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCactusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeIcon],svg[ph-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112a24 24 0 0 0-24-24h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24ZM112 48c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m-72 64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v23.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0a24 24 0 0 1-48 0a8 8 0 0 0-16 0a24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33Zm160 96H56a8 8 0 0 1-8-8v-27.44A38.8 38.8 0 0 0 62.88 176a39.7 39.7 0 0 0 29-11.31A40.4 40.4 0 0 0 96 160a40 40 0 0 0 64 0a40.4 40.4 0 0 0 4.13 4.67A39.67 39.67 0 0 0 192 176h1.14a38.8 38.8 0 0 0 14.86-3.44V200a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhCakeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeBoldIcon],svg[ph-cake-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 112a28 28 0 0 0-28-28h-68v-2.06A36.07 36.07 0 0 0 164 48c0-31.06-29.38-46.11-30.63-46.73a12 12 0 0 0-10.74 0C121.38 1.89 92 16.94 92 48a36.07 36.07 0 0 0 24 33.94V84H48a28 28 0 0 0-28 28v23.33a44.7 44.7 0 0 0 8 25.49V200a28 28 0 0 0 28 28h144a28 28 0 0 0 28-28v-39.18a44.7 44.7 0 0 0 8-25.49ZM124 29.93a43 43 0 0 1 4-3.57a41 41 0 0 1 4 3.57c5.33 5.52 8 11.6 8 18.07a12 12 0 0 1-24 0c0-6.47 2.71-12.55 8-18.07M44 112a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v23.33c0 11.1-8.72 20.37-19.43 20.66A20 20 0 0 1 172 136a12 12 0 0 0-24 0a20 20 0 0 1-40 0a12 12 0 0 0-24 0a20 20 0 0 1-20.57 20C52.72 155.7 44 146.43 44 135.33Zm156 92H56a4 4 0 0 1-4-4v-21.71A42.7 42.7 0 0 0 62.77 180a43.68 43.68 0 0 0 31.91-12.44c.46-.44.9-.9 1.33-1.35a44 44 0 0 0 64 0c.43.45.87.91 1.33 1.35A43.66 43.66 0 0 0 192 180h1.25a42.7 42.7 0 0 0 10.75-1.71V200a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCakeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeDuotoneIcon],svg[ph-cake-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 48c0-24 24-40 24-40s24 16 24 40a24 24 0 0 1-48 0m104 48H48a16 16 0 0 0-16 16v23.33c0 17.44 13.67 32.18 31.1 32.66A32 32 0 0 0 96 136a32 32 0 0 0 64 0a32 32 0 0 0 32.9 32c17.43-.48 31.1-15.22 31.1-32.66V112a16 16 0 0 0-16-16" opacity=".2"></svg:path><svg:path d="M232 112a24 24 0 0 0-24-24h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24ZM112 48c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m-72 64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v23.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0a24 24 0 0 1-48 0a8 8 0 0 0-16 0a24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33Zm160 96H56a8 8 0 0 1-8-8v-27.44A38.8 38.8 0 0 0 62.88 176a39.7 39.7 0 0 0 29-11.31A40.4 40.4 0 0 0 96 160a40 40 0 0 0 64 0a40.4 40.4 0 0 0 4.13 4.67A39.67 39.67 0 0 0 192 176h1.14a38.8 38.8 0 0 0 14.86-3.44V200a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhCakeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeFillIcon],svg[ph-cake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-72v-9a32.06 32.06 0 0 0 24-31c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 2.09 96 20 96 48a32.06 32.06 0 0 0 24 31v9H48a24 24 0 0 0-24 24v23.33a40.84 40.84 0 0 0 8 24.24V200a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24v-40.43a40.84 40.84 0 0 0 8-24.24V112a24 24 0 0 0-24-24m-96-40c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m104 87.33c0 13.25-10.46 24.31-23.32 24.66A24 24 0 0 1 168 136a8 8 0 0 0-16 0a24 24 0 0 1-48 0a8 8 0 0 0-16 0a24 24 0 0 1-24.68 24C50.46 159.64 40 148.58 40 135.33V112a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCakeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeLightIcon],svg[ph-cake-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 112a22 22 0 0 0-22-22h-74V77.4A30.05 30.05 0 0 0 158 48c0-26.9-25.58-44.27-26.67-45a6 6 0 0 0-6.66 0C123.58 3.73 98 21.1 98 48a30.05 30.05 0 0 0 24 29.4V90H48a22 22 0 0 0-22 22v23.33a38.8 38.8 0 0 0 8 23.57V200a22 22 0 0 0 22 22h144a22 22 0 0 0 22-22v-41.1a38.8 38.8 0 0 0 8-23.57ZM110 48c0-15.4 12-27.41 18-32.44c6 5 18 17 18 32.44a18 18 0 0 1-36 0m-72 64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10v23.33c0 14.32-11.33 26.28-25.26 26.66A26 26 0 0 1 166 136a6 6 0 0 0-12 0a26 26 0 0 1-52 0a6 6 0 0 0-12 0a26 26 0 0 1-26.74 26C49.33 161.61 38 149.65 38 135.33Zm162 98H56a10 10 0 0 1-10-10v-30.69A36.8 36.8 0 0 0 62.94 174a37.82 37.82 0 0 0 27.56-10.76a38.8 38.8 0 0 0 5.5-6.74a38 38 0 0 0 64 0a38.8 38.8 0 0 0 5.52 6.74A37.73 37.73 0 0 0 192 174h1.07a36.8 36.8 0 0 0 16.93-4.69V200a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhCakeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCakeThinIcon],svg[ph-cake-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 112a20 20 0 0 0-20-20h-76V75.71A28 28 0 0 0 156 48c0-25.84-24.73-42.63-25.78-43.33a4 4 0 0 0-4.44 0C124.73 5.37 100 22.16 100 48a28 28 0 0 0 24 27.71V92H48a20 20 0 0 0-20 20v23.33a36.85 36.85 0 0 0 8 22.91V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-41.76a36.85 36.85 0 0 0 8-22.91ZM108 48c0-17.39 14.37-30.53 20-35c5.63 4.48 20 17.62 20 35a20 20 0 0 1-40 0m92 164H56a12 12 0 0 1-12-12v-34.27A35.16 35.16 0 0 0 63 172a36.13 36.13 0 0 0 33-19.48a36 36 0 0 0 64 0A36.13 36.13 0 0 0 192 172h1a35.16 35.16 0 0 0 19-6.26V200a12 12 0 0 1-12 12m20-76.67c0 15.39-12.21 28.25-27.21 28.66A28 28 0 0 1 164 136a4 4 0 0 0-8 0a28 28 0 0 1-56 0a4 4 0 0 0-8 0a28 28 0 0 1-28.79 28c-15-.41-27.21-13.27-27.21-28.66V112a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhCakeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorIcon],svg[ph-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120h96a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h80v32H88Zm112-48H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144Zm-100-68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-80 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalculatorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorBoldIcon],svg[ph-calculator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM80 76a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24H92a12 12 0 0 1-12-12m40 52a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-48 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCalculatorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorDuotoneIcon],svg[ph-calculator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 64v48H80V64Z" opacity=".2"></svg:path><svg:path d="M80 120h96a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h80v32H88Zm112-48H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144Zm-100-68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-80 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhCalculatorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorFillIcon],svg[ph-calculator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M88 200a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m16-56a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhCalculatorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorLightIcon],svg[ph-calculator-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 58H80a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6m-6 48H86V70h84Zm30-80H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM98 148a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-80 40a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCalculatorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalculatorThinIcon],svg[ph-calculator-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4m-4 48H84V68h88Zm28-80H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM96 148a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-80 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCalculatorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarIcon],svg[ph-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"></svg:path>`,
})
export class PhCalendarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankIcon],svg[ph-calendar-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z"></svg:path>`,
})
export class PhCalendarBlankIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankBoldIcon],svg[ph-calendar-blank-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Z"></svg:path>`,
})
export class PhCalendarBlankBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankDuotoneIcon],svg[ph-calendar-blank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z"></svg:path></svg:g>`,
})
export class PhCalendarBlankDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankFillIcon],svg[ph-calendar-blank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 48H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarBlankFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankLightIcon],svg[ph-calendar-blank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCalendarBlankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBlankThinIcon],svg[ph-calendar-blank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCalendarBlankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarBoldIcon],svg[ph-calendar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm60-80v56a12 12 0 0 1-24 0v-36.68a12 12 0 0 1-9.37-22l16-8A12 12 0 0 1 112 124m61.49 33.88L163.9 168h4.1a12 12 0 0 1 0 24h-32a12 12 0 0 1-8.71-20.25L155.45 142a4 4 0 0 0 .55-2a4 4 0 0 0-7.47-2a12 12 0 0 1-20.78-12A28 28 0 0 1 180 140a27.77 27.77 0 0 1-5.64 16.86a11 11 0 0 1-.87 1.02"></svg:path>`,
})
export class PhCalendarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckIcon],svg[ph-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-38.34-85.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L116 164.69l42.34-42.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhCalendarCheckIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckBoldIcon],svg[ph-calendar-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm120.49-84.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 159l39.51-39.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCalendarCheckBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckDuotoneIcon],svg[ph-calendar-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-38.34-85.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L116 164.69l42.34-42.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCalendarCheckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckFillIcon],svg[ph-calendar-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-38.34 101.66l-48 48a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L116 164.69l42.34-42.35a8 8 0 0 1 11.32 11.32M48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></svg:path>`,
})
export class PhCalendarCheckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckLightIcon],svg[ph-calendar-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-39.76-86.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L116 167.51l43.76-43.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCalendarCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarCheckThinIcon],svg[ph-calendar-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-41.17-86.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L116 170.34l45.17-45.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCalendarCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotIcon],svg[ph-calendar-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-64-56a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCalendarDotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotBoldIcon],svg[ph-calendar-dot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 152a20 20 0 1 1-20-20a20 20 0 0 1 20 20m80-104v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h20v-4a12 12 0 0 1 24 0v4h72v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20M52 52v24h152V52h-16a12 12 0 0 1-24 0H92a12 12 0 0 1-24 0Zm152 152V100H52v104Z"></svg:path>`,
})
export class PhCalendarDotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotDuotoneIcon],svg[ph-calendar-dot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-64-56a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCalendarDotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotFillIcon],svg[ph-calendar-dot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 136a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-88H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarDotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotLightIcon],svg[ph-calendar-dot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-66-58a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCalendarDotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotThinIcon],svg[ph-calendar-dot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-68-60a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarDotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsIcon],svg[ph-calendar-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-68-76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-88 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarDotsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsBoldIcon],svg[ph-calendar-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm92-76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-96 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCalendarDotsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsDuotoneIcon],svg[ph-calendar-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-68-76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-88 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhCalendarDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsFillIcon],svg[ph-calendar-dots-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M84 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36-64H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarDotsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsLightIcon],svg[ph-calendar-dots-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-70-78a10 10 0 1 1-10-10a10 10 0 0 1 10 10m44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-88 40a10 10 0 1 1-10-10a10 10 0 0 1 10 10m44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCalendarDotsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDotsThinIcon],svg[ph-calendar-dots-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-72-80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-88 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCalendarDotsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarDuotoneIcon],svg[ph-calendar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"></svg:path></svg:g>`,
})
export class PhCalendarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarFillIcon],svg[ph-calendar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-96 152a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm56-8a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45L152 176ZM48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></svg:path>`,
})
export class PhCalendarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartIcon],svg[ph-calendar-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zM152 88a31.9 31.9 0 0 0-24 10.86A32 32 0 0 0 72 120c0 36.52 50.28 62.08 52.42 63.16a8 8 0 0 0 7.16 0C133.72 182.08 184 156.52 184 120a32 32 0 0 0-32-32m-24 78.93c-13.79-7.79-40-26.75-40-46.93a16 16 0 0 1 32 0a8 8 0 0 0 16 0a16 16 0 0 1 32 0c0 20.19-26.21 39.15-40 46.93"></svg:path>`,
})
export class PhCalendarHeartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartBoldIcon],svg[ph-calendar-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16ZM152 84a35.86 35.86 0 0 0-24 9.19A36 36 0 0 0 68 120c0 17 9.53 33.56 28.32 49.22a151.5 151.5 0 0 0 26.31 17.51a12 12 0 0 0 10.74 0a151.5 151.5 0 0 0 26.31-17.51C178.47 153.56 188 137 188 120a36 36 0 0 0-36-36m-24 78.29c-13.15-7.86-36-25.06-36-42.29a12 12 0 0 1 24 0a12 12 0 0 0 24 0a12 12 0 0 1 24 0c0 17.23-22.86 34.44-36 42.29"></svg:path>`,
})
export class PhCalendarHeartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartDuotoneIcon],svg[ph-calendar-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 120c0 32-48 56-48 56s-48-24-48-56a24 24 0 0 1 48 0a24 24 0 0 1 48 0" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zM152 88a31.9 31.9 0 0 0-24 10.86A32 32 0 0 0 72 120c0 36.52 50.28 62.08 52.42 63.16a8 8 0 0 0 7.16 0C133.72 182.08 184 156.52 184 120a32 32 0 0 0-32-32m-24 78.93c-13.79-7.79-40-26.75-40-46.93a16 16 0 0 1 32 0a8 8 0 0 0 16 0a16 16 0 0 1 32 0c0 20.19-26.21 39.15-40 46.93"></svg:path></svg:g>`,
})
export class PhCalendarHeartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartFillIcon],svg[ph-calendar-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 64v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m82.56 103.07a143.5 143.5 0 0 1-24.77 16.51a4 4 0 0 1-3.58 0a143.5 143.5 0 0 1-24.77-16.51C84.56 153 76 138.51 76 124a28 28 0 0 1 52-14.41A28 28 0 0 1 180 124c0 14.51-8.56 29-25.44 43.07M184 64a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCalendarHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartLightIcon],svg[ph-calendar-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2ZM152 90a30 30 0 0 0-24 12a30 30 0 0 0-54 18c0 35.3 49.22 60.32 51.32 61.37a6 6 0 0 0 5.36 0C132.78 180.32 182 155.3 182 120a30 30 0 0 0-30-30m-3.67 65.25A138 138 0 0 1 128 169.19a139 139 0 0 1-20.33-13.94C97.78 147 86 134.15 86 120a18 18 0 0 1 36 0a6 6 0 0 0 12 0a18 18 0 0 1 36 0c0 14.15-11.78 27-21.67 35.25"></svg:path>`,
})
export class PhCalendarHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarHeartThinIcon],svg[ph-calendar-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4ZM152 92a28 28 0 0 0-24 13.59A28 28 0 0 0 76 120c0 14.51 8.56 29 25.44 43.07a143.5 143.5 0 0 0 24.77 16.51a4 4 0 0 0 3.58 0a143.5 143.5 0 0 0 24.77-16.51C171.44 149 180 134.51 180 120a28 28 0 0 0-28-28m-24 79.47c-8.46-4.64-44-25.67-44-51.47a20 20 0 0 1 40 0a4 4 0 0 0 8 0a20 20 0 0 1 40 0c0 25.8-35.54 46.83-44 51.47"></svg:path>`,
})
export class PhCalendarHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarLightIcon],svg[ph-calendar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120m59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z"></svg:path>`,
})
export class PhCalendarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusIcon],svg[ph-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-48-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCalendarMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusBoldIcon],svg[ph-calendar-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm112-52a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusDuotoneIcon],svg[ph-calendar-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-48-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCalendarMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusFillIcon],svg[ph-calendar-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 128h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m56-80H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusLightIcon],svg[ph-calendar-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-50-58a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCalendarMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusThinIcon],svg[ph-calendar-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-52-60a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCalendarMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusIcon],svg[ph-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-48-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCalendarPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusBoldIcon],svg[ph-calendar-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm112-52a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusDuotoneIcon],svg[ph-calendar-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-48-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCalendarPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusFillIcon],svg[ph-calendar-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 128h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16M48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"></svg:path>`,
})
export class PhCalendarPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusLightIcon],svg[ph-calendar-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-50-58a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCalendarPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarPlusThinIcon],svg[ph-calendar-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-52-60a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCalendarPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashIcon],svg[ph-calendar-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62A8 8 0 0 0 48 32a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a8 8 0 0 0 5.92-13.38ZM73.55 80H48V51.88ZM48 208V96h40.1l101.82 112ZM224 48v129.23a8 8 0 1 1-16 0V96h-73.12a8 8 0 0 1 0-16H208V48h-24v8a8 8 0 0 1-16 0v-8H91.25a8 8 0 0 1 0-16H168v-8a8 8 0 0 1 16 0v8h24a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCalendarSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashBoldIcon],svg[ph-calendar-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93A12 12 0 0 0 48 28a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a12 12 0 0 0 8.88-20.07ZM52 204V62.24L180.87 204ZM228 48v117.34a12 12 0 1 1-24 0V100h-58.31a12 12 0 0 1 0-24H204V52h-16a12 12 0 0 1-24 0h-61.94a12 12 0 0 1 0-24H164v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCalendarSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashDuotoneIcon],svg[ph-calendar-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M53.92 34.62A8 8 0 0 0 48 32a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a8 8 0 0 0 5.92-13.38ZM73.55 80H48V51.88ZM48 208V96h40.1l101.82 112ZM224 48v129.23a8 8 0 1 1-16 0V96h-73.12a8 8 0 0 1 0-16H208V48h-24v8a8 8 0 0 1-16 0v-8H91.25a8 8 0 0 1 0-16H168v-8a8 8 0 0 1 16 0v8h24a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCalendarSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashFillIcon],svg[ph-calendar-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v139.57a4 4 0 0 1-7 2.7L116.8 80H208V48h-24v8a8 8 0 0 1-8.52 8a8.18 8.18 0 0 1-7.48-8.27V48H87.71l-8.46-9.31a4 4 0 0 1 3-6.69H168v-8a8 8 0 0 1 8.52-8a8.18 8.18 0 0 1 7.48 8.27V32h24a16 16 0 0 1 16 16m-10.08 162.62A8 8 0 0 1 208 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16a8 8 0 0 1 5.93 2.62ZM73.55 80L48 51.89V80Z"></svg:path>`,
})
export class PhCalendarSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashLightIcon],svg[ph-calendar-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36A6 6 0 0 0 48 34a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a6 6 0 0 0 4.44-10Zm-6.18 11l31.81 35H46V48a2.06 2.06 0 0 1 .26-1M48 210a2 2 0 0 1-2-2V94h43l105.44 116ZM222 48v129.23a6 6 0 1 1-12 0V94h-75.12a6 6 0 0 1 0-12H210V48a2 2 0 0 0-2-2h-26v10a6 6 0 0 1-12 0V46H91.25a6 6 0 0 1 0-12H170V24a6 6 0 0 1 12 0v10h26a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCalendarSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashThinIcon],svg[ph-calendar-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31A4 4 0 0 0 48 36a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a4 4 0 0 0 3-6.69Zm-4.46 7L82.59 84H44V48a4 4 0 0 1 2.5-3.71ZM48 212a4 4 0 0 1-4-4V92h45.87L199 212ZM220 48v129.23a4 4 0 1 1-8 0V92h-77.12a4 4 0 0 1 0-8H212V48a4 4 0 0 0-4-4h-28v12a4 4 0 0 1-8 0V44H91.25a4 4 0 0 1 0-8H172V24a4 4 0 0 1 8 0v12h28a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCalendarSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarIcon],svg[ph-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zm-31.38-94.36l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.52 18.59l-6.86 27.71a8 8 0 0 0 11.82 8.81L128 167.82l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.86-27.71l22.52-18.59a8 8 0 0 0-4.47-14.14m-32.11 23.6a8 8 0 0 0-2.68 8.09l3.5 14.12l-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81l3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18l14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92l6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"></svg:path>`,
})
export class PhCalendarStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarBoldIcon],svg[ph-calendar-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16Zm-27.08-94.35l-27.42-2.12L139 83.25a12 12 0 0 0-22 0l-10.5 24.28l-27.42 2.12a12 12 0 0 0-6.72 21.22l20.58 17l-6.25 25.26a12 12 0 0 0 17.73 13.22L128 172.46l23.58 13.88a12 12 0 0 0 17.73-13.22l-6.25-25.26l20.58-17a12 12 0 0 0-6.72-21.22Zm-35 24.51a12 12 0 0 0-4 12.13l1.21 4.89l-5.07-3a12.06 12.06 0 0 0-12.18 0l-5.07 3l1.21-4.89a12 12 0 0 0-4-12.13l-3.47-2.87l5-.39a12 12 0 0 0 10.09-7.21l2.33-5.4l2.33 5.4a12 12 0 0 0 10.09 7.21l5 .39Z"></svg:path>`,
})
export class PhCalendarStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarDuotoneIcon],svg[ph-calendar-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m149.6 143.41l8.07 32.59L128 158.54L98.33 176l8.07-32.59l-26.4-21.8l34.65-2.67L128 88l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zm-31.38-94.36l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.52 18.59l-6.86 27.71a8 8 0 0 0 11.82 8.81L128 167.82l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.86-27.71l22.52-18.59a8 8 0 0 0-4.47-14.14m-32.11 23.6a8 8 0 0 0-2.68 8.09l3.5 14.12l-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81l3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18l14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92l6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"></svg:path></svg:g>`,
})
export class PhCalendarStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarFillIcon],svg[ph-calendar-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 64v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m106.55 60.7l-24.46 20.19l7.46 30.11a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L128 163.18l-27.64 16.27a4 4 0 0 1-5.91-4.45l7.46-30.15l-24.46-20.15a4 4 0 0 1 2.24-7.08l32.24-2.49l12.4-28.71a4 4 0 0 1 7.34 0l12.4 28.71l32.24 2.49a4 4 0 0 1 2.24 7.08M184 64a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCalendarStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarLightIcon],svg[ph-calendar-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2Zm-33.54-92.37l-31-2.4l-11.95-27.61a6 6 0 0 0-11 0l-11.91 27.61l-31 2.4a6 6 0 0 0-3.36 10.61l23.49 19.39l-7.16 28.93a6 6 0 0 0 8.87 6.61L128 165.5l26.62 15.67a6 6 0 0 0 8.87-6.61l-7.16-28.93l23.49-19.39a6 6 0 0 0-3.36-10.61m-30.68 23.15a6 6 0 0 0-2 6.07l4.63 18.74L131 153.37a6 6 0 0 0-6.08 0l-17.37 10.22l4.63-18.74a6 6 0 0 0-2-6.07l-14.9-12.33l19.83-1.53a6 6 0 0 0 5-3.61l7.89-18.17l7.84 18.17a6 6 0 0 0 5 3.61l19.83 1.53Z"></svg:path>`,
})
export class PhCalendarStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarStarThinIcon],svg[ph-calendar-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4Zm-35.69-90.38l-32.24-2.49l-12.4-28.71a4 4 0 0 0-7.34 0l-12.4 28.71l-32.24 2.49a4 4 0 0 0-2.24 7.08l24.46 20.19L94.45 175a4 4 0 0 0 5.91 4.41L128 163.18l27.64 16.27a4 4 0 0 0 2 .55a4.05 4.05 0 0 0 2.39-.79a4 4 0 0 0 1.49-4.17l-7.46-30.15l24.46-20.19a4 4 0 0 0-2.24-7.08Zm-29.26 22.71a4 4 0 0 0-1.33 4l5.78 23.36l-21.5-12.6a4 4 0 0 0-4.06 0l-21.44 12.64l5.78-23.36a4 4 0 0 0-1.33-4l-18.76-15.53l24.81-1.92a4 4 0 0 0 3.36-2.4L128 98.1l9.68 22.42a4 4 0 0 0 3.36 2.4l24.77 1.92Z"></svg:path>`,
})
export class PhCalendarStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarThinIcon],svg[ph-calendar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-100-92v64a4 4 0 0 1-8 0v-57.53l-10.21 5.11a4 4 0 0 1-3.58-7.16l16-8A4 4 0 0 1 108 120m60 28l-24 32h24a4 4 0 0 1 0 8h-32a4 4 0 0 1-3.2-6.4l28.78-38.37A11.88 11.88 0 0 0 164 136a12 12 0 0 0-22.4-6a4 4 0 0 1-6.92-4A20 20 0 0 1 172 136a19.8 19.8 0 0 1-4 12"></svg:path>`,
})
export class PhCalendarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXIcon],svg[ph-calendar-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-50.34-74.34L139.31 152l18.35 18.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCalendarXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXBoldIcon],svg[ph-calendar-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.49 136.49L145 152l15.52 15.51a12 12 0 0 1-17 17L128 169l-15.51 15.52a12 12 0 0 1-17-17L111 152l-15.49-15.51a12 12 0 1 1 17-17L128 135l15.51-15.52a12 12 0 1 1 17 17ZM228 48v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h20v-4a12 12 0 0 1 24 0v4h72v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20M52 52v24h152V52h-16a12 12 0 0 1-24 0H92a12 12 0 0 1-24 0Zm152 152V100H52v104Z"></svg:path>`,
})
export class PhCalendarXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXDuotoneIcon],svg[ph-calendar-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-50.34-74.34L139.31 152l18.35 18.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCalendarXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXFillIcon],svg[ph-calendar-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-50.34 138.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 152ZM208 80H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z"></svg:path>`,
})
export class PhCalendarXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXLightIcon],svg[ph-calendar-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-51.76-77.76L136.48 152l19.76 19.76a6 6 0 1 1-8.48 8.48L128 160.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L119.52 152l-19.76-19.76a6 6 0 1 1 8.48-8.48L128 143.52l19.76-19.76a6 6 0 1 1 8.48 8.48"></svg:path>`,
})
export class PhCalendarXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCalendarXThinIcon],svg[ph-calendar-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-53.17-81.17L133.66 152l21.17 21.17a4 4 0 0 1-5.66 5.66L128 157.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66L128 146.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCalendarXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellIcon],svg[ph-call-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 184h208a8 8 0 0 0 0-16h-8v-16a96.12 96.12 0 0 0-88-95.66V40h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v16.34A96.12 96.12 0 0 0 32 152v16h-8a8 8 0 0 0 0 16m24-32a80 80 0 0 1 160 0v16H48Zm192 56a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h208a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCallBellIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellBoldIcon],svg[ph-call-bell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 180h208a12 12 0 0 0 0-24h-4.09A100.16 100.16 0 0 0 140 60.72V44h12a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24h12v16.72A100.16 100.16 0 0 0 28.09 156H24a12 12 0 0 0 0 24m104-96a76.09 76.09 0 0 1 75.89 72H52.11A76.09 76.09 0 0 1 128 84m116 124a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h208a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCallBellBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellDuotoneIcon],svg[ph-call-bell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 152v24H40v-24a88 88 0 0 1 176 0" opacity=".2"></svg:path><svg:path d="M24 184h208a8 8 0 0 0 0-16h-8v-16a96.12 96.12 0 0 0-88-95.66V40h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v16.34A96.12 96.12 0 0 0 32 152v16h-8a8 8 0 0 0 0 16m24-32a80 80 0 0 1 160 0v16H48Zm192 56a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h208a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCallBellDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellFillIcon],svg[ph-call-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 176a8 8 0 0 1 8-8h8v-16a96.12 96.12 0 0 1 88-95.66V40h-16a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16h-16v16.34A96.12 96.12 0 0 1 224 152v16h8a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8m216 24H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCallBellFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellLightIcon],svg[ph-call-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 182h208a6 6 0 0 0 0-12h-10v-18a94.1 94.1 0 0 0-88-93.8V38h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v20.2A94.1 94.1 0 0 0 34 152v18H24a6 6 0 0 0 0 12m22-30a82 82 0 0 1 164 0v18H46Zm192 56a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h208a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCallBellLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCallBellThinIcon],svg[ph-call-bell-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 180h208a4 4 0 0 0 0-8h-12v-20a92.11 92.11 0 0 0-88-91.91V36h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v24.09A92.11 92.11 0 0 0 36 152v20H24a4 4 0 0 0 0 8m20-28a84 84 0 0 1 168 0v20H44Zm192 56a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h208a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCallBellThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraIcon],svg[ph-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.66-3.56L100.28 48h55.43l13.63 20.44A8 8 0 0 0 176 72h32a8 8 0 0 1 8 8ZM128 88a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhCameraIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraBoldIcon],svg[ph-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraDuotoneIcon],svg[ph-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64h-32l-16-24H96L80 64H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-80 104a36 36 0 1 1 36-36a36 36 0 0 1-36 36" opacity=".2"></svg:path><svg:path d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.66-3.56L100.28 48h55.43l13.63 20.44A8 8 0 0 0 176 72h32a8 8 0 0 1 8 8ZM128 88a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraFillIcon],svg[ph-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-44 76a36 36 0 1 1-36-36a36 36 0 0 1 36 36"></svg:path>`,
})
export class PhCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraLightIcon],svg[ph-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 58h-28.79L165 36.67a6 6 0 0 0-5-2.67H96a6 6 0 0 0-5 2.67L76.78 58H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h32a6 6 0 0 0 5-2.67L99.21 46h57.57L171 67.33a6 6 0 0 0 5 2.67h32a10 10 0 0 1 10 10ZM128 90a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusIcon],svg[ph-camera-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 136a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8m64-56v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h27.72L87 39.12A16 16 0 0 1 100.28 32h55.44A16 16 0 0 1 169 39.12L180.28 56H208a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.66-3.56L155.72 48h-55.44L86.66 68.44A8 8 0 0 1 80 72H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhCameraPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusBoldIcon],svg[ph-camera-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 136a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1 0-24h20v-20a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m64-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h25.58l10.06-15.09A20 20 0 0 1 100.28 28h55.44a20 20 0 0 1 16.64 8.91L182.42 52H208a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.58 52h-51.16L90 70.66A12 12 0 0 1 80 76H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCameraPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusDuotoneIcon],svg[ph-camera-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h32l13.62-20.44a8 8 0 0 1 6.66-3.56h55.44a8 8 0 0 1 6.66 3.56L176 64h32a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M168 136a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8m64-56v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h27.72L87 39.12A16 16 0 0 1 100.28 32h55.44A16 16 0 0 1 169 39.12L180.28 56H208a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.66-3.56L155.72 48h-55.44L86.66 68.44A8 8 0 0 1 80 72H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhCameraPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusFillIcon],svg[ph-camera-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72L169 39.12A16 16 0 0 0 155.72 32h-55.44A16 16 0 0 0 87 39.12L75.72 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-48 88h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCameraPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusLightIcon],svg[ph-camera-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 136a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26v-26a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m64-56v112a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h28.79l11.84-17.77A14 14 0 0 1 100.28 34h55.44a14 14 0 0 1 11.65 6.23L179.21 58H208a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10h-32a6 6 0 0 1-5-2.67l-13.62-20.44a2 2 0 0 0-1.66-.89h-55.44a2 2 0 0 0-1.66.89L85 67.33A6 6 0 0 1 80 70H48a10 10 0 0 0-10 10v112a10 10 0 0 0 10 10h160a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhCameraPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraPlusThinIcon],svg[ph-camera-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 136a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m64-56v112a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h29.86L90.3 41.34a12 12 0 0 1 10-5.34h55.44a12 12 0 0 1 10 5.34L178.14 60H208a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.33-1.78l-13.62-20.44a4 4 0 0 0-3.33-1.78h-55.44A4 4 0 0 0 97 45.78L83.33 66.22A4 4 0 0 1 80 68H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhCameraPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateIcon],svg[ph-camera-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.66-3.56L100.28 48h55.43l13.63 20.44A8 8 0 0 0 176 72h32a8 8 0 0 1 8 8Zm-40-96v24a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h5.15a32.12 32.12 0 0 0-40.34-1.61a8 8 0 0 1-9.62-12.79a48.21 48.21 0 0 1 60.81 2.63V96a8 8 0 0 1 16 0m-17.61 59.2a8 8 0 0 1-1.58 11.2A48.21 48.21 0 0 1 96 163.77V168a8 8 0 0 1-16 0v-24a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-5.15a32.12 32.12 0 0 0 40.34 1.61a8 8 0 0 1 11.2 1.59"></svg:path>`,
})
export class PhCameraRotateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateBoldIcon],svg[ph-camera-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4Zm-32-92v20a12 12 0 0 1-12 12h-20a12 12 0 0 1-7.76-21.14a28.07 28.07 0 0 0-29 2.73A12 12 0 0 1 96.79 94.4a52.28 52.28 0 0 1 61.14-.91A12 12 0 0 1 180 100m-18.41 52.8a12 12 0 0 1-2.38 16.8a51.7 51.7 0 0 1-31.13 10.34a52.3 52.3 0 0 1-30-9.44A12 12 0 0 1 76 164v-20a12 12 0 0 1 12-12h20a12 12 0 0 1 7.76 21.14a28.07 28.07 0 0 0 29-2.73a12 12 0 0 1 16.83 2.39"></svg:path>`,
})
export class PhCameraRotateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateDuotoneIcon],svg[ph-camera-rotate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h32l16-24h64l16 24h32a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.66-3.56L100.28 48h55.43l13.63 20.44A8 8 0 0 0 176 72h32a8 8 0 0 1 8 8Zm-40-96v24a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h5.15a32.12 32.12 0 0 0-40.34-1.61a8 8 0 0 1-9.62-12.79a48.21 48.21 0 0 1 60.81 2.63V96a8 8 0 0 1 16 0m-17.61 59.2a8 8 0 0 1-1.58 11.2A48.21 48.21 0 0 1 96 163.77V168a8 8 0 0 1-16 0v-24a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-5.15a32.12 32.12 0 0 0 40.34 1.61a8 8 0 0 1 11.2 1.59"></svg:path></svg:g>`,
})
export class PhCameraRotateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateFillIcon],svg[ph-camera-rotate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-51.19 110.4A48.21 48.21 0 0 1 96 163.77V168a8 8 0 0 1-16 0v-24a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-5.15a32.12 32.12 0 0 0 40.34 1.61a8 8 0 0 1 9.62 12.79M176 120a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h5.15a32.12 32.12 0 0 0-40.34-1.61a8 8 0 0 1-9.62-12.79a48.21 48.21 0 0 1 60.81 2.63V96a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCameraRotateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateLightIcon],svg[ph-camera-rotate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 58h-28.79L165 36.67a6 6 0 0 0-5-2.67H96a6 6 0 0 0-5 2.67L76.78 58H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h32a6 6 0 0 0 5-2.67L99.21 46h57.57L171 67.33a6 6 0 0 0 5 2.67h32a10 10 0 0 1 10 10Zm-44-96v24a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h10l-2-2.09a34.12 34.12 0 0 0-44.38-3.12a6 6 0 1 1-7.22-9.59a46.2 46.2 0 0 1 60.14 4.27a.5.5 0 0 0 .1.1L162 105v-9a6 6 0 0 1 12 0m-17.2 60.4a6 6 0 0 1-1.19 8.4a46.18 46.18 0 0 1-60.14-4.27l-.1-.1L94 159v9a6 6 0 0 1-12 0v-24a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-10l2 2.09a34.12 34.12 0 0 0 44.38 3.12a6 6 0 0 1 8.42 1.19"></svg:path>`,
})
export class PhCameraRotateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraRotateThinIcon],svg[ph-camera-rotate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 60h-29.87l-14.81-22.22A4 4 0 0 0 160 36H96a4 4 0 0 0-3.32 1.78L77.85 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h32a4 4 0 0 0 3.33-1.78L98.13 44h59.72l14.82 22.22A4 4 0 0 0 176 68h32a12 12 0 0 1 12 12Zm-48-96v24a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h14.66l-5.27-5.52a36.12 36.12 0 0 0-47-3.29a4 4 0 1 1-4.8-6.39a44.17 44.17 0 0 1 57.51 4.09L164 110V96a4 4 0 0 1 8 0m-16.8 61.6a4 4 0 0 1-.8 5.6a44.15 44.15 0 0 1-57.51-4.09L92 154v14a4 4 0 0 1-8 0v-24a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8H97.34l5.27 5.52a36.12 36.12 0 0 0 47 3.29a4 4 0 0 1 5.59.79"></svg:path>`,
})
export class PhCameraRotateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashIcon],svg[ph-camera-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h149.19l4.89 5.38a8 8 0 1 0 11.84-10.76Zm51.66 80.61l37 40.69A27.7 27.7 0 0 1 128 160a28 28 0 0 1-22.42-44.77M48 200a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h18.28l28.41 31.26A44 44 0 0 0 128 176a44.2 44.2 0 0 0 25.44-8.12l29.2 32.12ZM232 80v106a8 8 0 0 1-16 0V80a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.65-3.56L155.71 48h-55.47a8 8 0 0 1-12.91-9.42l2-3A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhCameraSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashBoldIcon],svg[ph-camera-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l4 4.37A28 28 0 0 0 20 80v112a28 28 0 0 0 28 28h147.42l3.7 4.07a12 12 0 0 0 17.76-16.14Zm49.35 90L136 154.64a24 24 0 0 1-29.77-32.75ZM48 196a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h16.51l24.92 27.41a48 48 0 0 0 63.34 69.67L173.6 196ZM236 80v94.14a12 12 0 0 1-24 0V80a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.57 52h-51.51a12 12 0 0 1 0-24H160a12 12 0 0 1 10 5.34L182.42 52H208a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhCameraSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashDuotoneIcon],svg[ph-camera-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64h-32l-16-24H96L80 64H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-80 104a36 36 0 1 1 36-36a36 36 0 0 1-36 36" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L51.73 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h149.19l4.89 5.38a8 8 0 1 0 11.84-10.76Zm51.66 80.61l37 40.69A27.7 27.7 0 0 1 128 160a28 28 0 0 1-22.42-44.77M48 200a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h18.28l28.41 31.26A44 44 0 0 0 128 176a44.2 44.2 0 0 0 25.44-8.12l29.2 32.12ZM232 80v106a8 8 0 0 1-16 0V80a8 8 0 0 0-8-8h-32a8 8 0 0 1-6.65-3.56L155.71 48h-55.47a8 8 0 0 1-12.91-9.42l2-3A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhCameraSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashFillIcon],svg[ph-camera-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80v112a24.5 24.5 0 0 1-.45 4.65a4 4 0 0 1-6.9 2L86 46.08a4 4 0 0 1-.37-4.91l3.74-5.61A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24m-18.08 130.62a8 8 0 1 1-11.84 10.76l-4.89-5.38H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h3.73l-9.65-10.62a8 8 0 1 1 11.84-10.76ZM148 161.92l-47.88-52.68A36 36 0 0 0 148 161.92"></svg:path>`,
})
export class PhCameraSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashLightIcon],svg[ph-camera-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l12.69 14H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h150.07l5.49 6a6 6 0 0 0 8.88-8.08Zm53.06 76.2l40.11 44.13A29.67 29.67 0 0 1 128 162a30 30 0 0 1-22.5-49.84ZM48 202a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h19.16l30.23 33.25a42 42 0 0 0 56.33 62L187.16 202ZM230 80v106a6 6 0 0 1-12 0V80a10 10 0 0 0-10-10h-32a6 6 0 0 1-5-2.67L156.78 46H99.21l-.23.34a6 6 0 0 1-10-6.65l2-3A6 6 0 0 1 96 34h64a6 6 0 0 1 5 2.67L179.21 58H208a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhCameraSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraSlashThinIcon],svg[ph-camera-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L60.78 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h151l6.08 6.69a4 4 0 1 0 5.92-5.38Zm97.58 119.23A31.7 31.7 0 0 1 128 164a32 32 0 0 1-22.48-54.78ZM48 204a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h20l32.09 35.3a40 40 0 0 0 53.79 59.16L191.69 204ZM228 80v106a4 4 0 0 1-8 0V80a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.32-1.78L157.85 44H98.13l-.82 1.23a4 4 0 1 1-6.65-4.44l2-3A4 4 0 0 1 96 36h64a4 4 0 0 1 3.33 1.78L178.13 60H208a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCameraSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCameraThinIcon],svg[ph-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 60h-29.87l-14.81-22.22A4 4 0 0 0 160 36H96a4 4 0 0 0-3.32 1.78L77.85 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h32a4 4 0 0 0 3.33-1.78L98.13 44h59.72l14.82 22.22A4 4 0 0 0 176 68h32a12 12 0 0 1 12 12ZM128 92a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 72a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireIcon],svg[ph-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.62 226.42a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37l-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38l64 20.37a8 8 0 0 1 5.2 10.05M68 108c0-20.1 9.77-40.87 28.24-60a156 156 0 0 1 27.57-22.76a8 8 0 0 1 8.38 0C134.47 26.59 188 60.08 188 108a60 60 0 0 1-120 0m60 44a16 16 0 0 0 16-16c0-13.57-10-24.46-16-29.79c-6 5.33-16 16.22-16 29.79a16 16 0 0 0 16 16m-44-44a43.83 43.83 0 0 0 12.09 30.24c0-.74-.09-1.49-.09-2.24c0-28 26.44-45.91 27.56-46.66a8 8 0 0 1 8.88 0C133.56 90.09 160 108 160 136c0 .75 0 1.5-.09 2.24A43.83 43.83 0 0 0 172 108c0-32-32.26-58-44-66.34C116.27 50 84 76 84 108"></svg:path>`,
})
export class PhCampfireIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireBoldIcon],svg[ph-campfire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.51 227.4A12 12 0 0 1 216 236a12.2 12.2 0 0 1-3.4-.49l-84.6-25l-84.6 25a12.2 12.2 0 0 1-3.4.49a12 12 0 0 1-3.4-23.51L85.65 198L36.6 183.51a12 12 0 0 1 6.8-23l84.6 25l84.6-25a12 12 0 1 1 6.8 23L170.35 198l49.05 14.49a12 12 0 0 1 8.11 14.91M64 104c0-50.59 55.93-81.28 58.31-82.57a12 12 0 0 1 11.38 0C136.07 22.72 192 53.41 192 104a64 64 0 0 1-128 0m64 40a12 12 0 0 0 12-12c0-6.47-2.71-12.55-8-18.07a41 41 0 0 0-4-3.57a43 43 0 0 0-4 3.57c-5.33 5.52-8 11.6-8 18.07a12 12 0 0 0 12 12m-40-40a39.8 39.8 0 0 0 4.85 19.08c4.81-25 28.66-37.25 29.78-37.81a12 12 0 0 1 10.74 0c1.12.56 25 12.78 29.78 37.81A39.8 39.8 0 0 0 168 104c0-28.34-27.74-49.81-40-57.92c-12.25 8.1-40 29.58-40 57.92"></svg:path>`,
})
export class PhCampfireBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireDuotoneIcon],svg[ph-campfire-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M180 108a52 52 0 0 1-52 52a24 24 0 0 0 24-24c0-24-24-40-24-40s-24 16-24 40a24 24 0 0 0 24 24a52 52 0 0 1-52-52c0-44 52-76 52-76s52 32 52 76" opacity=".2"></svg:path><svg:path d="M128 168a60.07 60.07 0 0 0 60-60c0-47.92-53.53-81.41-55.81-82.81a8 8 0 0 0-8.38 0A156 156 0 0 0 96.24 48C77.77 67.13 68 87.9 68 108a60.07 60.07 0 0 0 60 60m-16-32c0-13.57 10-24.46 16-29.79c6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0m16-94.34C139.74 50 172 76 172 108a43.83 43.83 0 0 1-12.09 30.24c.05-.74.09-1.49.09-2.24c0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 90.09 96 108 96 136c0 .75 0 1.5.09 2.24A43.83 43.83 0 0 1 84 108c0-32 32.27-58 44-66.34m95.62 184.76a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37l-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38l64 20.37a8 8 0 0 1 5.2 10.05"></svg:path></svg:g>`,
})
export class PhCampfireDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireFillIcon],svg[ph-campfire-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132.19 25.19a8 8 0 0 0-8.38 0A156 156 0 0 0 96.24 48C77.77 67.13 68 87.9 68 108a60 60 0 0 0 120 0c0-47.92-53.53-81.41-55.81-82.81M128 152a24 24 0 0 1-24-24c0-24 24-40 24-40s24 16 24 40a24 24 0 0 1-24 24m95.62 74.42a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37l-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38l64 20.37a8 8 0 0 1 5.2 10.05"></svg:path>`,
})
export class PhCampfireFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireLightIcon],svg[ph-campfire-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.72 225.82a6 6 0 0 1-7.54 3.9L128 202.3l-86.18 27.42a6 6 0 1 1-3.64-11.44l70-22.28l-70-22.28a6 6 0 1 1 3.64-11.44L128 189.7l86.18-27.42a6 6 0 1 1 3.64 11.44l-70 22.28l70 22.28a6 6 0 0 1 3.9 7.54M70 108c0-46.81 52.62-79.73 54.86-81.11a6 6 0 0 1 6.28 0C133.38 28.27 186 61.19 186 108a58 58 0 0 1-116 0m58 46a18 18 0 0 0 18-18c0-15.48-12-27.43-18-32.44c-6 5-18 17-18 32.44a18 18 0 0 0 18 18m-46-46a45.93 45.93 0 0 0 17 35.67a30 30 0 0 1-1-7.67c0-26.9 25.58-44.27 26.67-45a6 6 0 0 1 6.66 0c1.09.72 26.67 18.09 26.67 45a30 30 0 0 1-1 7.67A45.93 45.93 0 0 0 174 108c0-34.06-35.15-61.22-46-68.78c-10.85 7.56-46 34.71-46 68.78"></svg:path>`,
})
export class PhCampfireLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCampfireThinIcon],svg[ph-campfire-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.81 225.21A4 4 0 0 1 216 228a4 4 0 0 1-1.21-.19L128 200.2l-86.79 27.61A4 4 0 0 1 40 228a4 4 0 0 1-1.21-7.81l76-24.19l-76-24.19a4 4 0 1 1 2.42-7.62L128 191.8l86.79-27.61a4 4 0 1 1 2.42 7.62l-76 24.19l76 24.19a4 4 0 0 1 2.6 5.02M72 108c0-19 9.38-38.85 27.12-57.27a152 152 0 0 1 26.78-22.14a4 4 0 0 1 4.2 0a152 152 0 0 1 26.78 22.14C174.62 69.15 184 89 184 108a56 56 0 0 1-54.56 56h-2.88A56 56 0 0 1 72 108m56 48a20 20 0 0 0 20-20c0-17.39-14.37-30.53-20-35c-5.63 4.48-20 17.62-20 35a20 20 0 0 0 20 20m-48-48a48 48 0 0 0 23.28 41.13A27.8 27.8 0 0 1 100 136c0-25.84 24.73-42.63 25.78-43.33a4 4 0 0 1 4.44 0c1.05.7 25.78 17.49 25.78 43.33a27.8 27.8 0 0 1-3.28 13.13A48 48 0 0 0 176 108c0-36.37-38.49-64.76-48-71.21c-9.5 6.46-48 34.89-48 71.21"></svg:path>`,
})
export class PhCampfireThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarIcon],svg[ph-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhCarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryIcon],svg[ph-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 136a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8m-88-8H72a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-40v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h16V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h16a16 16 0 0 1 16 16m-80-16h32V56h-32Zm-96 0h32V56H64Zm160 112V88H32v96z"></svg:path>`,
})
export class PhCarBatteryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryBoldIcon],svg[ph-car-battery-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 140a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12m-100-12H68a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m144-36v92a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h12V56a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v16h24V56a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v16h12a20 20 0 0 1 20 20m-80-20h24V60h-24Zm-96 0h24V60H68Zm152 24H36v84h184Z"></svg:path>`,
})
export class PhCarBatteryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryDuotoneIcon],svg[ph-car-battery-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 88v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 136a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8m-88-8H72a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-40v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h16V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h16a16 16 0 0 1 16 16m-80-16h32V56h-32Zm-96 0h32V56H64Zm160 112V88H32v96z"></svg:path></svg:g>`,
})
export class PhCarBatteryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryFillIcon],svg[ph-car-battery-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-16V56a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16h-32V56a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v16H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M64 56h32v16H64Zm40 88H72a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m80 0h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16m8-72h-32V56h32Z"></svg:path>`,
})
export class PhCarBatteryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryLightIcon],svg[ph-car-battery-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 136a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h10v-10a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6m-86-6H72a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m134-42v96a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14V88a14 14 0 0 1 14-14h18V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h36V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h18a14 14 0 0 1 14 14m-80-14h36V56a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2Zm-96 0h36V56a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2Zm164 14a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhCarBatteryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBatteryThinIcon],svg[ph-car-battery-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 136a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4m-84-4H72a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-44v96a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h40V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h20a12 12 0 0 1 12 12m-80-12h40V56a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm-96 0h40V56a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Zm168 12a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhCarBatteryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarBoldIcon],svg[ph-car-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-8.2l-26.72-60.12A20 20 0 0 0 186.8 28H69.2a20 20 0 0 0-18.28 11.88L24.2 100H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M71.8 52h112.4l21.33 48H50.47ZM64 196H44v-16h20Zm128 0v-16h20v16Zm20-40H44v-32h168Z"></svg:path>`,
})
export class PhCarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarDuotoneIcon],svg[ph-car-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 176h40v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8ZM32 200a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24H32ZM194.11 44.75A8 8 0 0 0 186.8 40H69.2a8 8 0 0 0-7.31 4.75L32 112h192Z" opacity=".2"></svg:path><svg:path d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarFillIcon],svg[ph-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h96v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M80 152H56a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m120 0h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16M44.31 104L69.2 48h117.6l24.89 56Z"></svg:path>`,
})
export class PhCarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarLightIcon],svg[ph-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.1l-28.31-63.69A14 14 0 0 0 186.8 34H69.2a14 14 0 0 0-12.79 8.31L28.1 106H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M67.37 47.19A2 2 0 0 1 69.2 46h117.6a2 2 0 0 1 1.83 1.19L214.77 106H41.23ZM66 200a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-18h28Zm150 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m2-32H38v-52h180ZM58 144a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m112 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileIcon],svg[ph-car-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 112h-28.69L168 68.69A15.86 15.86 0 0 0 156.69 64H44.28A16 16 0 0 0 31 71.12L1.34 115.56A8.07 8.07 0 0 0 0 120v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h66a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M44.28 80h112.41l32 32H23ZM64 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32 32 0 0 0-62 0H95a32 32 0 0 0-62 0H16v-40h224Z"></svg:path>`,
})
export class PhCarProfileIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileBoldIcon],svg[ph-car-profile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 108h-23l-42.17-42.14A19.86 19.86 0 0 0 156.69 60H48.28a20 20 0 0 0-16.64 8.91L2 113.34A12 12 0 0 0 0 120v48a20 20 0 0 0 20 20h13.5a34 34 0 0 0 65 0h59a34 34 0 0 0 65 0H236a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M50.42 84H155l24 24H34.42ZM66 188a10 10 0 1 1 10-10a10 10 0 0 1-10 10m124 0a10 10 0 1 1 10-10a10 10 0 0 1-10 10m42-24h-11a34 34 0 0 0-62 0H97a34 34 0 0 0-62 0H24v-32h208Z"></svg:path>`,
})
export class PhCarProfileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileDuotoneIcon],svg[ph-car-profile-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 176a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-29.66-77.66a8 8 0 0 0-5.65-2.34H44.28a8 8 0 0 0-6.66 3.56L8 120h200Z" opacity=".2"></svg:path><svg:path d="M240 112h-28.69L168 68.69A15.86 15.86 0 0 0 156.69 64H44.28A16 16 0 0 0 31 71.12L1.34 115.56A8.07 8.07 0 0 0 0 120v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h66a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M44.28 80h112.41l32 32H23ZM64 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-24h-17a32 32 0 0 0-62 0H95a32 32 0 0 0-62 0H16v-40h224Z"></svg:path></svg:g>`,
})
export class PhCarProfileDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileFillIcon],svg[ph-car-profile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 112h-28.69L168 68.69A15.86 15.86 0 0 0 156.69 64H44.28A16 16 0 0 0 31 71.12L1.34 115.56A8.07 8.07 0 0 0 0 120v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h66a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16M44.28 80h112.41l32 32H23ZM64 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhCarProfileFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileLightIcon],svg[ph-car-profile-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 114h-29.51l-43.9-43.9a13.94 13.94 0 0 0-9.9-4.1H44.28a14 14 0 0 0-11.65 6.23L3 116.67A6 6 0 0 0 2 120v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h69.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M42.62 78.89a2 2 0 0 1 1.66-.89h112.41a2 2 0 0 1 1.41.59L193.52 114H19.21ZM64 194a18 18 0 1 1 18-18a18 18 0 0 1-18 18m128 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30 30 0 0 0-58.8 0H93.4a30 30 0 0 0-58.8 0H16a2 2 0 0 1-2-2v-42h226a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCarProfileLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarProfileThinIcon],svg[ph-car-profile-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 116h-30.34l-44.49-44.48a11.9 11.9 0 0 0-8.48-3.52H44.28a12 12 0 0 0-10 5.34L4.67 117.78A4 4 0 0 0 4 120v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h72.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M41 77.78A4 4 0 0 1 44.28 76h112.41a4 4 0 0 1 2.82 1.17L198.34 116H15.47ZM64 196a20 20 0 1 1 20-20a20 20 0 0 1-20 20m128 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m52-28a4 4 0 0 1-4 4h-20.29a28 28 0 0 0-55.42 0H91.71a28 28 0 0 0-55.42 0H16a4 4 0 0 1-4-4v-44h228a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCarProfileThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleIcon],svg[ph-car-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM216 200h-24v-24a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v24H40v-80h176Z"></svg:path>`,
})
export class PhCarSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleBoldIcon],svg[ph-car-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 100h-8.2l-26.72-60.12A20 20 0 0 0 186.8 28H69.2a20 20 0 0 0-18.28 11.88L24.2 100H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-12h80v12a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M71.8 52h112.4l21.33 48H50.47ZM212 196h-20v-20a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v20H44v-72h168Z"></svg:path>`,
})
export class PhCarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleDuotoneIcon],svg[ph-car-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112H32l29.89-67.25A8 8 0 0 1 69.2 40h117.6a8 8 0 0 1 7.31 4.75Z" opacity=".2"></svg:path><svg:path d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM216 200h-24v-24a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v24H40v-80h176Z"></svg:path></svg:g>`,
})
export class PhCarSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleFillIcon],svg[ph-car-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h96v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16m-195.69 0L69.2 48h117.6l24.89 56Z"></svg:path>`,
})
export class PhCarSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleLightIcon],svg[ph-car-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.1l-28.31-63.69A14 14 0 0 0 186.8 34H69.2a14 14 0 0 0-12.79 8.31L28.1 106H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M67.37 47.19A2 2 0 0 1 69.2 46h117.6a2 2 0 0 1 1.83 1.19L214.77 106H41.23ZM218 200a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2v-24a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h180Z"></svg:path>`,
})
export class PhCarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleThinIcon],svg[ph-car-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.4l-28.83-64.87a12 12 0 0 0-11-7.13H69.2a12 12 0 0 0-11 7.13L29.4 108H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.54 46.38A4 4 0 0 1 69.2 44h117.6a4 4 0 0 1 3.66 2.38L217.84 108H38.16ZM220 200a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4v-24a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h184Z"></svg:path>`,
})
export class PhCarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarThinIcon],svg[ph-car-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.4l-28.83-64.87a12 12 0 0 0-11-7.13H69.2a12 12 0 0 0-11 7.13L29.4 108H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.54 46.38A4 4 0 0 1 69.2 44h117.6a4 4 0 0 1 3.66 2.38L217.84 108H38.16ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 144a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhCarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderIcon],svg[ph-cardholder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24M40 96h176v16h-56a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40Zm8-32h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-56h48.8a40 40 0 0 0 78.4 0H216v56a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhCardholderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderBoldIcon],svg[ph-cardholder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V72a28 28 0 0 0-28-28M48 68h160a4 4 0 0 1 4 4v16h-52a12 12 0 0 0-12 12a20 20 0 0 1-40 0a12 12 0 0 0-12-12H44V72a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-72h41.66a44 44 0 0 0 84.68 0H212v72a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCardholderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderDuotoneIcon],svg[ph-cardholder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v48h-64a32 32 0 0 1-64 0H32V72a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24M40 96h176v16h-56a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40Zm8-32h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-56h48.8a40 40 0 0 0 78.4 0H216v56a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhCardholderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderFillIcon],svg[ph-cardholder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24m-56 72a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40V96h176v16h-56a8 8 0 0 0-8 8M48 64h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhCardholderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderLightIcon],svg[ph-cardholder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 50H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V72a22 22 0 0 0-22-22M38 94h180v20h-58a6 6 0 0 0-6 6a26 26 0 0 1-52 0a6 6 0 0 0-6-6H38Zm10-32h160a10 10 0 0 1 10 10v10H38V72a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-58h52.47a38 38 0 0 0 75.06 0H218v58a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhCardholderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardholderThinIcon],svg[ph-cardholder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20M36 92h184v24h-60a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H36Zm12-32h160a12 12 0 0 1 12 12v12H36V72a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-60h56.22a36 36 0 0 0 71.56 0H220v60a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCardholderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsIcon],svg[ph-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 72H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 128H40V88h144zm48-144v120a8 8 0 0 1-16 0V56H64a8 8 0 0 1 0-16h152a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCardsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsBoldIcon],svg[ph-cards-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V92a20 20 0 0 0-20-20m-4 128H40V96h136Zm64-148v124a12 12 0 0 1-24 0V56H64a12 12 0 0 1 0-24h156a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCardsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsDuotoneIcon],svg[ph-cards-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 88v112a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M184 72H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 128H40V88h144zm48-144v120a8 8 0 0 1-16 0V56H64a8 8 0 0 1 0-16h152a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhCardsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsFillIcon],svg[ph-cards-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m16-48H64a8 8 0 0 0 0 16h152v120a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCardsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsLightIcon],svg[ph-cards-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 74H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Zm44-144v120a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H64a6 6 0 0 1 0-12h152a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhCardsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThinIcon],svg[ph-cards-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 76H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm40-144v120a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4H64a4 4 0 0 1 0-8h152a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCardsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeIcon],svg[ph-cards-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88H48a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16m0 112H48v-96h160zM48 64a8 8 0 0 1 8-8h144a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m16-32a8 8 0 0 1 8-8h112a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhCardsThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeBoldIcon],svg[ph-cards-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96H48a20 20 0 0 0-20 20v84a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-84a20 20 0 0 0-20-20m-4 100H52v-76h152ZM44 68a12 12 0 0 1 12-12h144a12 12 0 0 1 0 24H56a12 12 0 0 1-12-12m16-40a12 12 0 0 1 12-12h112a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhCardsThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeDuotoneIcon],svg[ph-cards-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 104v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 88H48a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16m0 112H48v-96h160zM48 64a8 8 0 0 1 8-8h144a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m16-32a8 8 0 0 1 8-8h112a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCardsThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeFillIcon],svg[ph-cards-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104v96a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M56 72h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16m16-32h112a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCardsThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeLightIcon],svg[ph-cards-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 90H48a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-96a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM50 64a6 6 0 0 1 6-6h144a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m16-32a6 6 0 0 1 6-6h112a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCardsThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeThinIcon],svg[ph-cards-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 92H48a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM52 64a4 4 0 0 1 4-4h144a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m16-32a4 4 0 0 1 4-4h112a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhCardsThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownIcon],svg[ph-caret-circle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46M165.66 82.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 108.69l26.34-26.35a8 8 0 0 1 11.32 0m0 56a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 164.69l26.34-26.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhCaretCircleDoubleDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownBoldIcon],svg[ph-caret-circle-double-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84ZM168.5 79.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 103l23.53-23.53a12 12 0 0 1 16.97.02m0 56a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 159l23.53-23.52a12 12 0 0 1 16.97.04Z"></svg:path>`,
})
export class PhCaretCircleDoubleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownDuotoneIcon],svg[ph-caret-circle-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46M165.66 82.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 108.69l26.34-26.35a8 8 0 0 1 11.32 0m0 56a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 164.69l26.34-26.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownFillIcon],svg[ph-caret-circle-double-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.43A104.15 104.15 0 1 0 232 128a104.17 104.17 0 0 0-30.43-73.57m-35.9 95.24l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 164.71l26.35-26.36a8 8 0 1 1 11.32 11.32m0-56l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 108.68l26.35-26.36a8 8 0 1 1 11.32 11.32Z"></svg:path>`,
})
export class PhCaretCircleDoubleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownLightIcon],svg[ph-caret-circle-double-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-27.4-107.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 111.51l27.76-27.75a6 6 0 0 1 8.48 0m0 56a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 167.51l27.76-27.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleDoubleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownThinIcon],svg[ph-caret-circle-double-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05M162.83 85.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 114.34l29.17-29.17a4 4 0 0 1 5.66 0m0 56a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 170.34l29.17-29.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCaretCircleDoubleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftIcon],svg[ph-caret-circle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-16.57-88.57L147.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32m-56 0L91.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCaretCircleDoubleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftBoldIcon],svg[ph-caret-circle-double-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-10.91-82.95L153 128l23.53 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17Zm-56 0L97 128l23.52 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17Z"></svg:path>`,
})
export class PhCaretCircleDoubleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftDuotoneIcon],svg[ph-caret-circle-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-16.57-88.57L147.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32m-56 0L91.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftFillIcon],svg[ph-caret-circle-double-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-83.92 99.93a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L91.29 128Zm56 0a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L147.32 128Z"></svg:path>`,
})
export class PhCaretCircleDoubleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftLightIcon],svg[ph-caret-circle-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-19.4-91.4L144.49 128l27.75 27.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48m-56 0L88.49 128l27.75 27.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCaretCircleDoubleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftThinIcon],svg[ph-caret-circle-double-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-22.22-94.22L141.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 1 1 5.66 5.66m-56 0L85.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhCaretCircleDoubleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightIcon],svg[ph-caret-circle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-64.57-67.89a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L108.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Zm56 0a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L164.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightBoldIcon],svg[ph-caret-circle-double-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-58.93-67.91a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17-17L103 128l-23.51-23.53a12 12 0 1 1 17-17Zm56 17l-32 32a12 12 0 0 1-17-17L159 128l-23.52-23.53a12 12 0 1 1 17-17l32 32a12 12 0 0 1 .03 17.02Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightDuotoneIcon],svg[ph-caret-circle-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-64.57-67.89a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L108.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Zm56 0a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L164.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightFillIcon],svg[ph-caret-circle-double-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-75.91 79.24l-32 32a8 8 0 1 1-11.32-11.32L108.68 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .02 11.34m56 0l-32 32a8 8 0 0 1-11.32-11.32L164.71 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .01 11.34Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightLightIcon],svg[ph-caret-circle-double-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-67.4-67.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L111.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Zm56 0a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L167.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightThinIcon],svg[ph-caret-circle-double-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-70.22-67.88a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L114.34 128L85.17 98.83a4 4 0 0 1 5.66-5.66Zm56 0a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L170.34 128l-29.17-29.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhCaretCircleDoubleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpIcon],svg[ph-caret-circle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-24.57-27.89a8 8 0 0 1-11.32 11.32L128 147.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Zm0-56a8 8 0 0 1-11.32 11.32L128 91.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpBoldIcon],svg[ph-caret-circle-double-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-18.9-27.89a12 12 0 0 1-17 17L128 153l-23.53 23.53a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Zm0-56a12 12 0 1 1-17 17L128 97l-23.53 23.52a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpDuotoneIcon],svg[ph-caret-circle-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-24.57-27.89a8 8 0 0 1-11.32 11.32L128 147.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Zm0-56a8 8 0 0 1-11.32 11.32L128 91.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpFillIcon],svg[ph-caret-circle-double-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.58 54.43a104 104 0 1 0 0 147.14a104.17 104.17 0 0 0 0-147.14m-35.9 119.25a8 8 0 0 1-11.32 0L128 147.32l-26.35 26.36a8 8 0 1 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 .03 11.32m0-56a8 8 0 0 1-11.32 0L128 91.29l-26.35 26.36a8 8 0 1 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 .03 11.32Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpLightIcon],svg[ph-caret-circle-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-27.4-27.88a6 6 0 1 1-8.48 8.48L128 144.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Zm0-56a6 6 0 1 1-8.48 8.48L128 88.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleUpThinIcon],svg[ph-caret-circle-double-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-30.22-27.88a4 4 0 0 1-5.66 5.66L128 141.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Zm0-56a4 4 0 0 1-5.66 5.66L128 85.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhCaretCircleDoubleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownIcon],svg[ph-caret-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhCaretCircleDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownBoldIcon],svg[ph-caret-circle-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-108.49a12 12 0 0 1 0 17l-40 40a12 12 0 0 1-17 0l-40-40a12 12 0 0 1 17-17L128 135l31.51-31.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCaretCircleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownDuotoneIcon],svg[ph-caret-circle-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCaretCircleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownFillIcon],svg[ph-caret-circle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 93.66l-40 40a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L128 140.69l34.34-34.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCaretCircleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownLightIcon],svg[ph-caret-circle-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-110.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 0 1-8.48 0l-40-40a6 6 0 0 1 8.48-8.48L128 143.51l35.76-35.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownThinIcon],svg[ph-caret-circle-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-110.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66 0l-40-40a4 4 0 0 1 5.66-5.66L128 146.34l37.17-37.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCaretCircleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftIcon],svg[ph-caret-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m21.66-122.34L115.31 128l34.35 34.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCaretCircleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftBoldIcon],svg[ph-caret-circle-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m24.49-115.51L121 128l31.52 31.51a12 12 0 0 1-17 17l-40-40a12 12 0 0 1 0-17l40-40a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCaretCircleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftDuotoneIcon],svg[ph-caret-circle-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m21.66-122.34L115.31 128l34.35 34.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhCaretCircleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftFillIcon],svg[ph-caret-circle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m21.66 138.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32L115.31 128Z"></svg:path>`,
})
export class PhCaretCircleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftLightIcon],svg[ph-caret-circle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m20.24-125.76L112.49 128l35.75 35.76a6 6 0 1 1-8.48 8.48l-40-40a6 6 0 0 1 0-8.48l40-40a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCaretCircleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleLeftThinIcon],svg[ph-caret-circle-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m18.83-129.17L109.66 128l37.17 37.17a4 4 0 0 1-5.66 5.66l-40-40a4 4 0 0 1 0-5.66l40-40a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCaretCircleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightIcon],svg[ph-caret-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m29.66-93.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32Z"></svg:path>`,
})
export class PhCaretCircleRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightBoldIcon],svg[ph-caret-circle-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32.49-92.49a12 12 0 0 1 0 17l-40 40a12 12 0 0 1-17-17L135 128l-31.49-31.51a12 12 0 0 1 17-17Z"></svg:path>`,
})
export class PhCaretCircleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightDuotoneIcon],svg[ph-caret-circle-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m29.66-93.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhCaretCircleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightFillIcon],svg[ph-caret-circle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m29.66 109.66l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretCircleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightLightIcon],svg[ph-caret-circle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m28.24-94.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 0 1-8.48-8.48L143.51 128l-35.75-35.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhCaretCircleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightThinIcon],svg[ph-caret-circle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m26.83-94.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66-5.66L146.34 128l-37.17-37.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhCaretCircleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpIcon],svg[ph-caret-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-77.66a8 8 0 0 1-11.32 11.32L128 115.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhCaretCircleUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpBoldIcon],svg[ph-caret-circle-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-76.49a12 12 0 0 1-17 17L128 121l-31.51 31.49a12 12 0 0 1-17-17l40-40a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhCaretCircleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownIcon],svg[ph-caret-circle-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-117.66a8 8 0 0 1-11.32 11.32L128 83.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Zm0 48a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 172.69l26.34-26.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhCaretCircleUpDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownBoldIcon],svg[ph-caret-circle-up-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-116.49a12 12 0 0 1-17 17L128 89l-23.51 23.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Zm0 48a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L128 167l23.51-23.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCaretCircleUpDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownDuotoneIcon],svg[ph-caret-circle-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m37.66-117.66a8 8 0 0 1-11.32 11.32L128 83.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Zm0 48a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 172.69l26.34-26.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhCaretCircleUpDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownFillIcon],svg[ph-caret-circle-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 133.66l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 172.69l26.34-26.35a8 8 0 0 1 11.32 11.32m0-48a8 8 0 0 1-11.32 0L128 83.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretCircleUpDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownLightIcon],svg[ph-caret-circle-up-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-118.24a6 6 0 1 1-8.48 8.48L128 80.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Zm0 48a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 175.51l27.76-27.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleUpDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownThinIcon],svg[ph-caret-circle-up-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m34.83-118.83a4 4 0 0 1-5.66 5.66L128 77.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Zm0 48a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 178.34l29.17-29.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhCaretCircleUpDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDuotoneIcon],svg[ph-caret-circle-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m45.66-77.66a8 8 0 0 1-11.32 11.32L128 115.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretCircleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpFillIcon],svg[ph-caret-circle-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 125.66a8 8 0 0 1-11.32 0L128 115.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretCircleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpLightIcon],svg[ph-caret-circle-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-78.24a6 6 0 1 1-8.48 8.48L128 112.49l-35.76 35.75a6 6 0 0 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhCaretCircleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpThinIcon],svg[ph-caret-circle-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-78.83a4 4 0 0 1-5.66 5.66L128 109.66l-37.17 37.17a4 4 0 0 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhCaretCircleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownIcon],svg[ph-caret-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 130.34a8 8 0 0 1 0 11.32l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 204.69l74.34-74.35a8 8 0 0 1 11.32 0m-91.32 11.32a8 8 0 0 0 11.32 0l80-80a8 8 0 0 0-11.32-11.32L128 124.69L53.66 50.34a8 8 0 0 0-11.32 11.32Z"></svg:path>`,
})
export class PhCaretDoubleDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownBoldIcon],svg[ph-caret-double-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 127.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 1 1 17-17L128 199l71.51-71.52a12 12 0 0 1 16.98.03m-97 17a12 12 0 0 0 17 0l80-80a12 12 0 0 0-17-17L128 119L56.49 47.51a12 12 0 0 0-17 17Z"></svg:path>`,
})
export class PhCaretDoubleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownDuotoneIcon],svg[ph-caret-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 56l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="m213.66 141.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 204.69l74.34-74.35a8 8 0 0 1 11.32 11.32m-171.32-80A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0Zm25 2.34L128 124.69L188.69 64Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownFillIcon],svg[ph-caret-double-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.39 132.94a8 8 0 0 1-1.73 8.72l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 128h60.69L42.34 61.66A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66L147.31 128H208a8 8 0 0 1 7.39 4.94"></svg:path>`,
})
export class PhCaretDoubleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownLightIcon],svg[ph-caret-double-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 131.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 207.51l75.76-75.75a6 6 0 0 1 8.48 0m-88.48 8.48a6 6 0 0 0 8.48 0l80-80a6 6 0 0 0-8.48-8.48L128 127.51L52.24 51.76a6 6 0 0 0-8.48 8.48Z"></svg:path>`,
})
export class PhCaretDoubleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownThinIcon],svg[ph-caret-double-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 133.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 210.34l77.17-77.17a4 4 0 0 1 5.66 0m-85.66 5.66a4 4 0 0 0 5.66 0l80-80a4 4 0 1 0-5.66-5.66L128 130.34L50.83 53.17a4 4 0 0 0-5.66 5.66Z"></svg:path>`,
})
export class PhCaretDoubleDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftIcon],svg[ph-caret-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L131.31 128ZM51.31 128l74.35-74.34a8 8 0 0 0-11.32-11.32l-80 80a8 8 0 0 0 0 11.32l80 80a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhCaretDoubleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftBoldIcon],svg[ph-caret-double-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.52-71.51a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12 12 0 0 0 17-17Z"></svg:path>`,
})
export class PhCaretDoubleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftDuotoneIcon],svg[ph-caret-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M203.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 208 208V48a8 8 0 0 0-4.94-7.39M192 188.69L131.31 128L192 67.31Zm-66.34 13.65a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L51.31 128Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftFillIcon],svg[ph-caret-double-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48v160a8 8 0 0 1-13.66 5.66L128 147.31V208a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 128 48v60.69l66.34-66.35A8 8 0 0 1 208 48"></svg:path>`,
})
export class PhCaretDoubleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftLightIcon],svg[ph-caret-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L128.49 128ZM48.49 128l75.75-75.76a6 6 0 0 0-8.48-8.48l-80 80a6 6 0 0 0 0 8.48l80 80a6 6 0 1 0 8.48-8.48Z"></svg:path>`,
})
export class PhCaretDoubleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftThinIcon],svg[ph-caret-double-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L125.66 128ZM45.66 128l77.17-77.17a4 4 0 0 0-5.66-5.66l-80 80a4 4 0 0 0 0 5.66l80 80a4 4 0 1 0 5.66-5.66Z"></svg:path>`,
})
export class PhCaretDoubleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightIcon],svg[ph-caret-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L124.69 128L50.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32m80-11.32l-80-80a8 8 0 0 0-11.32 11.32L204.69 128l-74.35 74.34a8 8 0 0 0 11.32 11.32l80-80a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhCaretDoubleRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightBoldIcon],svg[ph-caret-double-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m144.49 136.49l-80 80a12 12 0 0 1-17-17L119 128L47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17m80-17l-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"></svg:path>`,
})
export class PhCaretDoubleRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightDuotoneIcon],svg[ph-caret-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightFillIcon],svg[ph-caret-double-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 133.66l-80 80A8 8 0 0 1 128 208v-60.69l-66.34 66.35A8 8 0 0 1 48 208V48a8 8 0 0 1 13.66-5.66L128 108.69V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretDoubleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightLightIcon],svg[ph-caret-double-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L127.51 128L51.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48m80-8.48l-80-80a6 6 0 0 0-8.48 8.48L207.51 128l-75.75 75.76a6 6 0 1 0 8.48 8.48l80-80a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhCaretDoubleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightThinIcon],svg[ph-caret-double-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m138.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L130.34 128L53.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66m80-5.66l-80-80a4 4 0 0 0-5.66 5.66L210.34 128l-77.17 77.17a4 4 0 0 0 5.66 5.66l80-80a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhCaretDoubleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpIcon],svg[ph-caret-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34a8 8 0 0 1-11.32 11.32L128 131.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0Zm-160-68.68L128 51.31l74.34 74.35a8 8 0 0 0 11.32-11.32l-80-80a8 8 0 0 0-11.32 0l-80 80a8 8 0 0 0 11.32 11.32"></svg:path>`,
})
export class PhCaretDoubleUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpBoldIcon],svg[ph-caret-double-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 191.51a12 12 0 0 1-17 17L128 137l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0Zm-160-63L128 57l71.51 71.52a12 12 0 0 0 17-17l-80-80a12 12 0 0 0-17 0l-80 80a12 12 0 0 0 17 17Z"></svg:path>`,
})
export class PhCaretDoubleUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpDuotoneIcon],svg[ph-caret-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 200H48l80-80Z" opacity=".2"></svg:path><svg:path d="M133.66 114.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 208h160a8 8 0 0 0 5.66-13.66ZM67.31 192L128 131.31L188.69 192Zm-25-66.34a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1-11.32 11.32L128 51.31l-74.34 74.35a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpFillIcon],svg[ph-caret-double-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34A8 8 0 0 1 208 208H48a8 8 0 0 1-5.66-13.66L108.69 128H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 208 128h-60.69Z"></svg:path>`,
})
export class PhCaretDoubleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpLightIcon],svg[ph-caret-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 195.76a6 6 0 1 1-8.48 8.48L128 128.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0Zm-160-71.52L128 48.49l75.76 75.75a6 6 0 0 0 8.48-8.48l-80-80a6 6 0 0 0-8.48 0l-80 80a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhCaretDoubleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpThinIcon],svg[ph-caret-double-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 197.17a4 4 0 0 1-5.66 5.66L128 125.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0Zm-160-74.34L128 45.66l77.17 77.17a4 4 0 1 0 5.66-5.66l-80-80a4 4 0 0 0-5.66 0l-80 80a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhCaretDoubleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownIcon],svg[ph-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhCaretDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownBoldIcon],svg[ph-caret-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCaretDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownDuotoneIcon],svg[ph-caret-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 96l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="M215.39 92.94A8 8 0 0 0 208 88H48a8 8 0 0 0-5.66 13.66l80 80a8 8 0 0 0 11.32 0l80-80a8 8 0 0 0 1.73-8.72M128 164.69L67.31 104h121.38Z"></svg:path></svg:g>`,
})
export class PhCaretDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownFillIcon],svg[ph-caret-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66"></svg:path>`,
})
export class PhCaretDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownLightIcon],svg[ph-caret-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 100.24l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 167.51l75.76-75.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCaretDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretDownThinIcon],svg[ph-caret-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 98.83l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 170.34l77.17-77.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhCaretDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftIcon],svg[ph-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"></svg:path>`,
})
export class PhCaretLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftBoldIcon],svg[ph-caret-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"></svg:path>`,
})
export class PhCaretLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftDuotoneIcon],svg[ph-caret-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M163.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 168 208V48a8 8 0 0 0-4.94-7.39M152 188.69L91.31 128L152 67.31Z"></svg:path></svg:g>`,
})
export class PhCaretLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftFillIcon],svg[ph-caret-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 48v160a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 168 48"></svg:path>`,
})
export class PhCaretLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftLightIcon],svg[ph-caret-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L88.49 128Z"></svg:path>`,
})
export class PhCaretLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLeftThinIcon],svg[ph-caret-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L85.66 128Z"></svg:path>`,
})
export class PhCaretLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownIcon],svg[ph-caret-line-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.34 77.66a8 8 0 0 1 11.32-11.32L128 140.69l74.34-74.35a8 8 0 0 1 11.32 11.32l-80 80a8 8 0 0 1-11.32 0ZM208 184H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCaretLineDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownBoldIcon],svg[ph-caret-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.51 80.49a12 12 0 0 1 17-17L128 135l71.51-71.52a12 12 0 0 1 17 17l-80 80a12 12 0 0 1-17 0ZM208 180H48a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhCaretLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownDuotoneIcon],svg[ph-caret-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 72l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="M122.34 157.66a8 8 0 0 0 11.32 0l80-80A8 8 0 0 0 208 64H48a8 8 0 0 0-5.66 13.66ZM188.69 80L128 140.69L67.31 80ZM216 192a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCaretLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownFillIcon],svg[ph-caret-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.34 77.66A8 8 0 0 1 48 64h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0ZM208 184H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCaretLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownLightIcon],svg[ph-caret-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.76 76.24a6 6 0 0 1 8.48-8.48L128 143.51l75.76-75.75a6 6 0 0 1 8.48 8.48l-80 80a6 6 0 0 1-8.48 0ZM208 186H48a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhCaretLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownThinIcon],svg[ph-caret-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.17 74.83a4 4 0 0 1 5.66-5.66L128 146.34l77.17-77.17a4 4 0 1 1 5.66 5.66l-80 80a4 4 0 0 1-5.66 0ZM208 188H48a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhCaretLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftIcon],svg[ph-caret-line-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L123.31 128ZM72 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftBoldIcon],svg[ph-caret-line-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L129 128ZM72 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCaretLineLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftDuotoneIcon],svg[ph-caret-line-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M195.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 200 208V48a8 8 0 0 0-4.94-7.39M184 188.69L123.31 128L184 67.31ZM80 48v160a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhCaretLineLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftFillIcon],svg[ph-caret-line-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 48v160a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 200 48M72 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftLightIcon],svg[ph-caret-line-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L120.49 128ZM72 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCaretLineLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftThinIcon],svg[ph-caret-line-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L117.66 128ZM72 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCaretLineLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightIcon],svg[ph-caret-line-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.66 122.34a8 8 0 0 1 0 11.32l-80 80a8 8 0 0 1-11.32-11.32L132.69 128L58.34 53.66a8 8 0 0 1 11.32-11.32ZM184 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightBoldIcon],svg[ph-caret-line-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.49 119.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17-17L127 128L55.51 56.49a12 12 0 0 1 17-17ZM184 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCaretLineRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightDuotoneIcon],svg[ph-caret-line-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m144 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="M69.66 42.34A8 8 0 0 0 56 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32ZM72 188.69V67.31L132.69 128ZM192 48v160a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhCaretLineRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightFillIcon],svg[ph-caret-line-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.66 122.34a8 8 0 0 1 0 11.32l-80 80A8 8 0 0 1 56 208V48a8 8 0 0 1 13.66-5.66ZM184 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightLightIcon],svg[ph-caret-line-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.24 123.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48-8.48L135.51 128L59.76 52.24a6 6 0 0 1 8.48-8.48ZM184 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCaretLineRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightThinIcon],svg[ph-caret-line-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.83 125.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66-5.66L138.34 128L61.17 50.83a4 4 0 0 1 5.66-5.66ZM184 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCaretLineRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpIcon],svg[ph-caret-line-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 197.66a8 8 0 0 1-11.32 0L128 123.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32M48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCaretLineUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpBoldIcon],svg[ph-caret-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 183.51a12 12 0 0 1-17 17L128 129l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0ZM48 84h160a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCaretLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpDuotoneIcon],svg[ph-caret-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48l80-80Z" opacity=".2"></svg:path><svg:path d="M133.66 106.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 200h160a8 8 0 0 0 5.66-13.66ZM67.31 184L128 123.31L188.69 184ZM40 72a8 8 0 0 1 8-8h160a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCaretLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpFillIcon],svg[ph-caret-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 186.34A8 8 0 0 1 208 200H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0ZM48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCaretLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpLightIcon],svg[ph-caret-line-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 196.24a6 6 0 0 1-8.48 0L128 120.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0l80 80a6 6 0 0 1 0 8.48M48 78h160a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhCaretLineUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpThinIcon],svg[ph-caret-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 194.83a4 4 0 0 1-5.66 0L128 117.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0l80 80a4 4 0 0 1 0 5.66M48 76h160a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCaretLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightIcon],svg[ph-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightBoldIcon],svg[ph-caret-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"></svg:path>`,
})
export class PhCaretRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightDuotoneIcon],svg[ph-caret-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="m181.66 122.34l-80-80A8 8 0 0 0 88 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M104 188.69V67.31L164.69 128Z"></svg:path></svg:g>`,
})
export class PhCaretRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightFillIcon],svg[ph-caret-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.66 133.66l-80 80A8 8 0 0 1 88 208V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightLightIcon],svg[ph-caret-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m180.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L167.51 128L91.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhCaretRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretRightThinIcon],svg[ph-caret-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m178.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L170.34 128L93.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCaretRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpIcon],svg[ph-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 165.66a8 8 0 0 1-11.32 0L128 91.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpBoldIcon],svg[ph-caret-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhCaretUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownIcon],svg[ph-caret-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0m-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32"></svg:path>`,
})
export class PhCaretUpDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownBoldIcon],svg[ph-caret-up-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.49 167.51a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L128 207l39.51-39.52a12 12 0 0 1 16.98.03m-96-79L128 49l39.51 39.52a12 12 0 0 0 17-17l-48-48a12 12 0 0 0-17 0l-48 48a12 12 0 0 0 17 17Z"></svg:path>`,
})
export class PhCaretUpDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownDuotoneIcon],svg[ph-caret-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 176h96l-48 48Zm48-144L80 80h96Z" opacity=".2"></svg:path><svg:path d="M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168m-48 44.69L99.31 184h57.38ZM80 88h96a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 80 88m48-44.69L156.69 72H99.31Z"></svg:path></svg:g>`,
})
export class PhCaretUpDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownFillIcon],svg[ph-caret-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72.61 83.06a8 8 0 0 1 1.73-8.72l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 176 88H80a8 8 0 0 1-7.39-4.94M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168"></svg:path>`,
})
export class PhCaretUpDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownLightIcon],svg[ph-caret-up-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 171.76a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L128 215.51l43.76-43.75a6 6 0 0 1 8.48 0m-96-87.52L128 40.49l43.76 43.75a6 6 0 0 0 8.48-8.48l-48-48a6 6 0 0 0-8.48 0l-48 48a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhCaretUpDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownThinIcon],svg[ph-caret-up-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.83 173.17a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L128 218.34l45.17-45.17a4 4 0 0 1 5.66 0m-96-90.34L128 37.66l45.17 45.17a4 4 0 1 0 5.66-5.66l-48-48a4 4 0 0 0-5.66 0l-48 48a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhCaretUpDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDuotoneIcon],svg[ph-caret-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 160H48l80-80Z" opacity=".2"></svg:path><svg:path d="m213.66 154.34l-80-80a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 168h160a8 8 0 0 0 5.66-13.66M67.31 152L128 91.31L188.69 152Z"></svg:path></svg:g>`,
})
export class PhCaretUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpFillIcon],svg[ph-caret-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhCaretUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpLightIcon],svg[ph-caret-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 164.24a6 6 0 0 1-8.48 0L128 88.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0l80 80a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhCaretUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCaretUpThinIcon],svg[ph-caret-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 162.83a4 4 0 0 1-5.66 0L128 85.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0l80 80a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCaretUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotIcon],svg[ph-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64h-28.69l26.35-26.34a8 8 0 0 0-11.32-11.32L192 52.69V24a8 8 0 0 0-16 0v32.57a64 64 0 0 0-77.2 10.12c-40.1 39.39-70.25 133.08-73.19 142.45a16 16 0 0 0 21.26 21.26c9.37-2.94 103.18-33.13 142.47-73.21A64 64 0 0 0 199.43 80H232a8 8 0 0 0 0-16m-54.12 82c-8.94 9.12-21.25 17.8-34.85 25.73l-25.38-25.39a8 8 0 0 0-11.32 11.32l22.09 22.09c-40.87 21.19-86.32 35.42-87 35.63A8 8 0 0 0 40 216a8 8 0 0 0 .59-1.41c.29-.93 28-89.58 64-130.67l33.77 33.77a8 8 0 0 0 11.32-11.32l-33.5-33.49a48 48 0 0 1 61.7 73.12"></svg:path>`,
})
export class PhCarrotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotBoldIcon],svg[ph-carrot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60h-19l19.51-19.51a12 12 0 1 0-17-17L196 43V24a12 12 0 0 0-24 0v26a68 68 0 0 0-76 13.87C55.45 103.68 25.18 197 21.78 207.77A20 20 0 0 0 40 236a20.1 20.1 0 0 0 8.24-1.78c7.64-2.42 56.79-18.34 98.91-41.82l.54-.3c17.1-9.57 33-20.39 44.44-32A68 68 0 0 0 206 84h26a12 12 0 0 0 0-24m-56.89 83.12l-.09.09c-8.11 8.28-19.11 16.2-31.33 23.52l-23.21-23.21a12 12 0 1 0-17 17l18.22 18.22c-30.29 15.17-62.13 26.42-75.26 30.82c6.77-20.22 29.79-84.8 58.34-119.74l30.7 30.7a12 12 0 1 0 17-17l-29.94-29.94a44 44 0 0 1 52.57 69.54"></svg:path>`,
})
export class PhCarrotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotDuotoneIcon],svg[ph-carrot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M183.6 151.6C144 192 43.81 223 43.81 223A8 8 0 0 1 33 212.19S64 112 104.4 72.4a56 56 0 0 1 79.2 79.2" opacity=".2"></svg:path><svg:path d="M232 64h-28.69l26.35-26.34a8 8 0 0 0-11.32-11.32L192 52.69V24a8 8 0 0 0-16 0v32.57a64 64 0 0 0-77.2 10.12c-40.1 39.39-70.25 133.08-73.19 142.45a16 16 0 0 0 21.26 21.26c9.37-2.94 103.18-33.13 142.47-73.21A64 64 0 0 0 199.43 80H232a8 8 0 0 0 0-16m-54.12 82c-8.94 9.12-21.25 17.8-34.85 25.73l-25.38-25.39a8 8 0 0 0-11.32 11.32l22.09 22.09c-40.87 21.19-86.32 35.42-87 35.63A8 8 0 0 0 40 216a8 8 0 0 0 .59-1.41c.29-.93 28-89.58 64-130.67l33.77 33.77a8 8 0 0 0 11.32-11.32l-33.5-33.49a48 48 0 0 1 61.7 73.12"></svg:path></svg:g>`,
})
export class PhCarrotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotFillIcon],svg[ph-carrot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80h-32.56a64 64 0 0 1-10.19 77.26c-8.52 8.69-19.61 16.92-31.85 24.51a4 4 0 0 1-4.91-.59l-34.84-34.84a8 8 0 0 0-11.49.18a8.23 8.23 0 0 0 .41 11.38l29.88 29.88a4 4 0 0 1-1 6.39C95.74 214.79 53 228.54 46.78 230.48a16 16 0 0 1-21.26-21.26c2.73-8.71 29-90.27 64.86-133.35a4 4 0 0 1 5.9-.26l42.05 42.06a8 8 0 0 0 11.71-.43a8.19 8.19 0 0 0-.6-11.1l-41.36-41.36a4 4 0 0 1 .63-6.18a64 64 0 0 1 67.28-2V24a8 8 0 0 1 8.54-8a8.18 8.18 0 0 1 7.47 8.28v28.41l26.34-26.35a8 8 0 0 1 11.32 11.32L203.31 64h28.41a8.18 8.18 0 0 1 8.28 7.47a8 8 0 0 1-8 8.53"></svg:path>`,
})
export class PhCarrotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotLightIcon],svg[ph-carrot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 66h-33.52l29.76-29.76a6 6 0 1 0-8.48-8.48L190 57.52V24a6 6 0 0 0-12 0v36.15a62 62 0 0 0-77.8 8C60.17 107.4 30.05 201.45 27.38 210a14 14 0 0 0 18.67 18.67c8.5-2.67 102.62-32.81 141.79-72.77a62 62 0 0 0 8-77.84H232a6 6 0 0 0 0-12Zm-52.69 81.41C170 157 157 166 142.69 174.24l-26.46-26.47a6 6 0 1 0-8.49 8.49l24 24c-41.69 22-89 36.82-89.73 37a6.6 6.6 0 0 0-1.06.44a2 2 0 0 1-2.7-2.7a6.6 6.6 0 0 0 .45-1c.3-1 28.85-92.28 65.78-133l35.27 35.26a6 6 0 1 0 8.48-8.48l-35.1-35.1a50 50 0 0 1 66.18 74.74Z"></svg:path>`,
})
export class PhCarrotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCarrotThinIcon],svg[ph-carrot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 68h-38.34l33.17-33.17a4 4 0 1 0-5.66-5.66L188 62.34V24a4 4 0 0 0-8 0v40a60 60 0 0 0-78.39 5.54c-17.12 16.79-34.51 45.72-51.7 86c-11.93 28-19.61 52-20.59 55.09A12.05 12.05 0 0 0 40 228a12 12 0 0 0 5.36-1.28c3.12-1 27.13-8.65 55.09-20.59c40.29-17.2 69.24-34.61 86-51.71A60 60 0 0 0 192 76h40a4 4 0 0 0 0-8m-51.26 80.79c-9.76 10-23.42 19.39-38.37 27.91l-27.54-27.53a4 4 0 0 0-5.65 5.65l25.9 25.91C92.61 203.55 43.34 219 42.64 219.18a4.5 4.5 0 0 0-.71.3a4 4 0 0 1-5.41-5.41a4.5 4.5 0 0 0 .3-.71c.29-1 29.72-95 67.62-135.27l36.74 36.73a4 4 0 0 0 5.65 0a4 4 0 0 0 0-5.65l-36.65-36.65a52 52 0 0 1 70.56 76.27"></svg:path>`,
})
export class PhCarrotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterIcon],svg[ph-cash-register-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.76 158.06l-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M80 40h40v16H80ZM54.25 72h147.5l20 80H34.25ZM32 192v-24h192v24Zm32-96a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-96 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhCashRegisterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterBoldIcon],svg[ph-cash-register-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.61 157l-22.44-86a20 20 0 0 0-19.35-15H140V40a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v16h-5.82a20 20 0 0 0-19.35 15l-22.44 86a12 12 0 0 0-.39 3v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-.39-3M84 44h32v12H84ZM57.27 80h141.46l17.74 68H39.53ZM36 188v-16h184v16Zm28-72a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhCashRegisterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterDuotoneIcon],svg[ph-cash-register-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160H24l22.49-89.94A8 8 0 0 1 54.25 64h147.5a8 8 0 0 1 7.76 6.06Z" opacity=".2"></svg:path><svg:path d="m239.76 158.06l-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M80 40h40v16H80ZM54.25 72h147.5l20 80H34.25ZM32 192v-24h192v24Zm32-96a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-96 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCashRegisterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterFillIcon],svg[ph-cash-register-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.76 158.06l-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M168 88h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m-32-32a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16Zm8 40a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M80 40h40v16H80Zm-8 48h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m152 72H32v-24h192Z"></svg:path>`,
})
export class PhCashRegisterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterLightIcon],svg[ph-cash-register-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.82 158.54l-22.48-89.93A14 14 0 0 0 201.75 58H134V40a14 14 0 0 0-14-14H80a14 14 0 0 0-14 14v18H54.25a14 14 0 0 0-13.59 10.6l-22.48 89.94A6 6 0 0 0 18 160v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a6 6 0 0 0-.18-1.46M78 40a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2v18H78ZM52.31 71.51A2 2 0 0 1 54.25 70h147.5a2 2 0 0 1 1.94 1.51L224.32 154H31.68ZM224 194H32a2 2 0 0 1-2-2v-26h196v26a2 2 0 0 1-2 2M66 96a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-96 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCashRegisterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterThinIcon],svg[ph-cash-register-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.88 159L213.4 69.09A12 12 0 0 0 201.75 60H132V40a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v20H54.25a12 12 0 0 0-11.65 9.09L20.12 159a4 4 0 0 0-.12 1v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a4 4 0 0 0-.12-1M76 40a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v20H76ZM50.37 71a4 4 0 0 1 3.88-3h147.5a4 4 0 0 1 3.88 3l21.25 85H29.12ZM224 196H32a4 4 0 0 1-4-4v-28h200v28a4 4 0 0 1-4 4M68 96a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-96 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhCashRegisterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeIcon],svg[ph-cassette-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 192l12-16h72l12 16Zm144 0h-28l-21.6-28.8a8 8 0 0 0-6.4-3.2H88a8 8 0 0 0-6.4 3.2L60 192H32V64h192zM176 80H80a32 32 0 0 0 0 64h96a32 32 0 0 0 0-64m-27.7 16a31.92 31.92 0 0 0 0 32h-40.6a31.92 31.92 0 0 0 0-32ZM64 112a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhCassetteTapeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeBoldIcon],svg[ph-cassette-tape-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-37l-12.6-16.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L73 188H36V68h184ZM82 152h92a34 34 0 0 0 0-68H82a34 34 0 0 0 0 68m0-44a10 10 0 1 1-10 10a10 10 0 0 1 10-10m102 10a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-42.5 10h-27a34.1 34.1 0 0 0 0-20h27a34.1 34.1 0 0 0 0 20"></svg:path>`,
})
export class PhCassetteTapeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeDuotoneIcon],svg[ph-cassette-tape-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m168 168l24 32H64l24-32Zm8-80a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-72 24a24 24 0 1 0-24 24a24 24 0 0 0 24-24" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 192l12-16h72l12 16Zm144 0h-28l-21.6-28.8a8 8 0 0 0-6.4-3.2H88a8 8 0 0 0-6.4 3.2L60 192H32V64h192zM176 80H80a32 32 0 0 0 0 64h96a32 32 0 0 0 0-64m-27.7 16a31.92 31.92 0 0 0 0 32h-40.6a31.92 31.92 0 0 0 0-32ZM64 112a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhCassetteTapeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeFillIcon],svg[ph-cassette-tape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156.3 96a31.92 31.92 0 0 0 0 32H99.7a31.92 31.92 0 0 0 0-32ZM72 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16m168-32v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16m-54 128l-15.6-20.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L70 192Zm30-80a32 32 0 0 0-32-32H72a32 32 0 0 0 0 64h112a32 32 0 0 0 32-32m-32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCassetteTapeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeLightIcon],svg[ph-cassette-tape-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M76 194l15-20h74l15 20Zm150-2a2 2 0 0 1-2 2h-29l-22.2-29.6a6 6 0 0 0-4.8-2.4H88a6 6 0 0 0-4.8 2.4L61 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM176 82H80a30 30 0 0 0 0 60h96a30 30 0 0 0 0-60m-24 12a29.92 29.92 0 0 0 0 36h-48a29.92 29.92 0 0 0 0-36Zm-90 18a18 18 0 1 1 18 18a18 18 0 0 1-18-18m114 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhCassetteTapeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeThinIcon],svg[ph-cassette-tape-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M72 196l18-24h76l18 24Zm156-4a4 4 0 0 1-4 4h-30l-22.8-30.4a4 4 0 0 0-3.2-1.6H88a4 4 0 0 0-3.2 1.6L62 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM176 84H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56M60 112a20 20 0 1 1 20 20a20 20 0 0 1-20-20m39.57 20a27.94 27.94 0 0 0 0-40h56.86a27.94 27.94 0 0 0 0 40Zm76.43 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhCassetteTapeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretIcon],svg[ph-castle-turret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-24a8 8 0 0 0-8 8v24h-16V40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v24H88V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M69.66 106.34L56 92.69V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v44.69l-13.66 13.65A8 8 0 0 0 184 112v104h-24v-48a32 32 0 0 0-64 0v48H72V112a8 8 0 0 0-2.34-5.66M144 216h-32v-48a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhCastleTurretIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretBoldIcon],svg[ph-castle-turret-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-12v-95l10.14-10.14A19.86 19.86 0 0 0 220 92.69V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v44.69a19.86 19.86 0 0 0 5.86 14.14L52 117v95H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M72.49 103.51L60 91V52h28v24a12 12 0 0 0 24 0V52h32v24a12 12 0 0 0 24 0V52h28v39l-12.49 12.48A12 12 0 0 0 180 112v100h-16v-44a36 36 0 0 0-72 0v44H76V112a12 12 0 0 0-3.51-8.49M140 212h-24v-44a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhCastleTurretBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretDuotoneIcon],svg[ph-castle-turret-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v44.69a8 8 0 0 1-2.34 5.65L192 112v112h-40v-56a24 24 0 0 0-48 0v56H64V112L50.34 98.34A8 8 0 0 1 48 92.69V48a8 8 0 0 1 8-8h24v32h32V40h32v32h32V40h24a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-24a8 8 0 0 0-8 8v24h-16V40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v24H88V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M69.66 106.34L56 92.69V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48h16v44.69l-13.66 13.65A8 8 0 0 0 184 112v104h-24v-48a32 32 0 0 0-64 0v48H72V112a8 8 0 0 0-2.34-5.66M144 216h-32v-48a16 16 0 0 1 32 0Z"></svg:path></svg:g>`,
})
export class PhCastleTurretDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretFillIcon],svg[ph-castle-turret-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-20a8 8 0 0 0-8 8v24h-24V40a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v24H84V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-104-48a16 16 0 0 1 32 0v48h-32Z"></svg:path>`,
})
export class PhCastleTurretFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretLightIcon],svg[ph-castle-turret-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 218h-18V114.49l11.9-11.91a13.9 13.9 0 0 0 4.1-9.89V48a14 14 0 0 0-14-14h-24a6 6 0 0 0-6 6v26h-20V40a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v26H86V40a6 6 0 0 0-6-6H56a14 14 0 0 0-14 14v44.69a13.9 13.9 0 0 0 4.1 9.89L58 114.49V218H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M68.24 107.76L54.58 94.1a2 2 0 0 1-.58-1.41V48a2 2 0 0 1 2-2h18v26a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V46h20v26a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V46h18a2 2 0 0 1 2 2v44.69a2 2 0 0 1-.58 1.41l-13.66 13.66A6 6 0 0 0 186 112v106h-28v-50a30 30 0 0 0-60 0v50H70V112a6 6 0 0 0-1.76-4.24M146 218h-36v-50a18 18 0 0 1 36 0Z"></svg:path>`,
})
export class PhCastleTurretLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretThinIcon],svg[ph-castle-turret-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 220h-20V113.66l12.49-12.49a11.93 11.93 0 0 0 3.51-8.48V48a12 12 0 0 0-12-12h-24a4 4 0 0 0-4 4v28h-24V40a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v28H84V40a4 4 0 0 0-4-4H56a12 12 0 0 0-12 12v44.69a11.93 11.93 0 0 0 3.51 8.48L60 113.66V220H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M66.83 109.17L53.17 95.51A4 4 0 0 1 52 92.69V48a4 4 0 0 1 4-4h20v28a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V44h24v28a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4v44.69a4 4 0 0 1-1.17 2.82l-13.66 13.66A4 4 0 0 0 188 112v108h-32v-52a28 28 0 0 0-56 0v52H68V112a4 4 0 0 0-1.17-2.83M148 220h-40v-52a20 20 0 0 1 40 0Z"></svg:path>`,
})
export class PhCastleTurretThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatIcon],svg[ph-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60-80v88c0 52.93-46.65 96-104 96S24 188.93 24 136V48a16 16 0 0 1 27.31-11.31c.14.14.26.27.38.41L69 57a111.22 111.22 0 0 1 118.1 0l17.21-19.9c.12-.14.24-.27.38-.41A16 16 0 0 1 232 48m-16 0l-21.56 24.8a8 8 0 0 1-10.81 1.2A89 89 0 0 0 168 64.75V88a8 8 0 1 1-16 0V59.05a97.4 97.4 0 0 0-16-2.72V88a8 8 0 1 1-16 0V56.33a97.4 97.4 0 0 0-16 2.72V88a8 8 0 1 1-16 0V64.75A89 89 0 0 0 72.37 74a8 8 0 0 1-10.81-1.17L40 48v88c0 41.66 35.21 76 80 79.67v-20.36l-13.66-13.66a8 8 0 0 1 11.32-11.31L128 180.68l10.34-10.34a8 8 0 0 1 11.32 11.31L136 195.31v20.36c44.79-3.69 80-38 80-79.67Z"></svg:path>`,
})
export class PhCatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatBoldIcon],svg[ph-cat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.65 29.53a20 20 0 0 0-21.79 4.34c-.2.2-.39.4-.57.61l-15 17.3a115.34 115.34 0 0 0-116.5 0l-15-17.3c-.18-.21-.37-.41-.57-.61A20 20 0 0 0 20 48v88c0 55.14 48.45 100 108 100s108-44.86 108-100V48a20 20 0 0 0-12.35-18.47M212 136c0 38.22-31.35 69.93-72 75.21V197l12.49-12.49a12 12 0 0 0-17-17L128 175l-7.51-7.52a12 12 0 0 0-17 17L116 197v14.24c-40.65-5.28-72-37-72-75.21V58.74l14.54 16.73a12 12 0 0 0 16.21 1.76A86 86 0 0 1 96 65.74V88a12 12 0 0 0 24 0V60.35q4-.35 8-.35t8 .35V88a12 12 0 0 0 24 0V65.74a86.2 86.2 0 0 1 21.25 11.49a12 12 0 0 0 16.21-1.76L212 58.74Zm-112 4a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatDuotoneIcon],svg[ph-cat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v88c0 48.6-43 88-96 88s-96-39.4-96-88V48a8 8 0 0 1 13.66-5.66L67.6 67.6a102.87 102.87 0 0 1 120.8 0l21.94-25.24A8 8 0 0 1 224 48" opacity=".2"></svg:path><svg:path d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m60-80v88c0 52.93-46.65 96-104 96S24 188.93 24 136V48a16 16 0 0 1 27.31-11.31c.14.14.26.27.38.41L69 57a111.22 111.22 0 0 1 118.1 0l17.21-19.9c.12-.14.24-.27.38-.41A16 16 0 0 1 232 48m-16 0l-21.56 24.8a8 8 0 0 1-10.81 1.2A89 89 0 0 0 168 64.75V88a8 8 0 1 1-16 0V59.05a97.4 97.4 0 0 0-16-2.72V88a8 8 0 1 1-16 0V56.33a97.4 97.4 0 0 0-16 2.72V88a8 8 0 1 1-16 0V64.75A89 89 0 0 0 72.37 74a8 8 0 0 1-10.81-1.17L40 48v88c0 41.66 35.21 76 80 79.67v-20.36l-13.66-13.66a8 8 0 0 1 11.32-11.31L128 180.68l10.34-10.34a8 8 0 0 1 11.32 11.31L136 195.31v20.36c44.79-3.69 80-38 80-79.67Z"></svg:path></svg:g>`,
})
export class PhCatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatFillIcon],svg[ph-cat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.83 33.54a16 16 0 0 0-18.14 3.15c-.14.14-.26.27-.38.41L187.05 57A111.28 111.28 0 0 0 69 57L51.69 37.1c-.12-.14-.24-.27-.38-.41a16 16 0 0 0-18.14-3.15A16.4 16.4 0 0 0 24 48.46V136c0 49 40.06 89.63 91.56 95.32a4 4 0 0 0 4.44-4v-32l-13.42-13.43a8.22 8.22 0 0 1-.41-11.37a8 8 0 0 1 11.49-.18L128 180.68l10.34-10.35a8 8 0 0 1 11.49.18a8.22 8.22 0 0 1-.41 11.37L136 195.31v32a4 4 0 0 0 4.44 4C191.94 225.62 232 185 232 136V48.46a16.4 16.4 0 0 0-9.17-14.92M84 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20-64a8 8 0 1 1-16 0V69a8 8 0 0 1 16 0Zm32 0a8 8 0 1 1-16 0V64a8 8 0 0 1 16 0Zm16 0V69a8 8 0 0 1 16 0v19a8 8 0 1 1-16 0m20 64a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatLightIcon],svg[ph-cat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.36 35.07a14 14 0 0 0-15.26 3l-.29.3l-18.39 21.21a109.16 109.16 0 0 0-118.84 0L50.19 38.41l-.29-.3A14 14 0 0 0 26 48v88c0 51.83 45.76 94 102 94s102-42.17 102-94V48a14 14 0 0 0-8.64-12.93M218 136c0 43.38-37.16 79-84 81.81v-23.33l14.24-14.24a6 6 0 0 0-8.48-8.49L128 183.51l-11.76-11.76a6 6 0 0 0-8.48 8.49L122 194.48v23.33C75.16 215 38 179.38 38 136V48a1.91 1.91 0 0 1 1.23-1.85a2.3 2.3 0 0 1 .82-.17a1.87 1.87 0 0 1 1.26.5l21.76 25a6 6 0 0 0 8.11.88A91.5 91.5 0 0 1 90 61.68V88a6 6 0 1 0 12 0V57.51a98 98 0 0 1 20-3.32V88a6 6 0 1 0 12 0V54.19a98 98 0 0 1 20 3.32V88a6 6 0 1 0 12 0V61.68a91.5 91.5 0 0 1 18.82 10.73a6 6 0 0 0 8.11-.88l21.76-25A2 2 0 0 1 218 48Zm-124 4a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhCatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCatThinIcon],svg[ph-cat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.59 36.94a11.83 11.83 0 0 0-13.08 2.61l-.19.2l-19.55 22.49a107.1 107.1 0 0 0-119.54 0L48.68 39.75l-.19-.2A12 12 0 0 0 28 48v88c0 50.72 44.86 92 100 92s100-41.27 100-92V48a11.82 11.82 0 0 0-7.41-11.06M220 136c0 45.09-39.12 82-88 83.91v-26.25l14.83-14.83a4 4 0 1 0-5.66-5.65L128 186.35l-13.17-13.17a4 4 0 1 0-5.66 5.65L124 193.66v26.26C75.12 218 36 181.1 36 136V48a3.93 3.93 0 0 1 2.47-3.7a4.4 4.4 0 0 1 1.6-.31a3.77 3.77 0 0 1 2.67 1.1l21.84 25.14a4 4 0 0 0 5.4.59A94 94 0 0 1 92 58.74V88a4 4 0 0 0 8 0V56a100 100 0 0 1 24-3.93V88a4 4 0 0 0 8 0V52.09A100 100 0 0 1 156 56v32a4 4 0 0 0 8 0V58.74a94 94 0 0 1 22 12.08a4 4 0 0 0 5.4-.59l21.84-25.11A4 4 0 0 1 220 48Zm-128 4a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullIcon],svg[ph-cell-signal-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 72v128a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m32-48a8 8 0 0 0-8 8v168a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-80 80a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalFullIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullBoldIcon],svg[ph-cell-signal-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72v128a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m28-52a12 12 0 0 0-12 12v168a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-80 80a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalFullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullDuotoneIcon],svg[ph-cell-signal-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v160a8 8 0 0 1-8 8H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200H32L192 40Z"></svg:path></svg:g>`,
})
export class PhCellSignalFullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullFillIcon],svg[ph-cell-signal-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40v160a16 16 0 0 1-16 16H32a16 16 0 0 1-11.3-27.32l160-160A16 16 0 0 1 208 40"></svg:path>`,
})
export class PhCellSignalFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullLightIcon],svg[ph-cell-signal-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 72v128a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m34-46a6 6 0 0 0-6 6v168a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-80 80a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalFullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalFullThinIcon],svg[ph-cell-signal-full-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72v128a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m36-44a4 4 0 0 0-4 4v168a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-80 80a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalFullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighIcon],svg[ph-cell-signal-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 72v128a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighBoldIcon],svg[ph-cell-signal-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 72v128a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighDuotoneIcon],svg[ph-cell-signal-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 60.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M152 80v120H32Zm40 120h-24V64l24-24Z"></svg:path></svg:g>`,
})
export class PhCellSignalHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighFillIcon],svg[ph-cell-signal-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200h-24V64l24-24Z"></svg:path>`,
})
export class PhCellSignalHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighLightIcon],svg[ph-cell-signal-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 72v128a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalHighThinIcon],svg[ph-cell-signal-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72v128a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowIcon],svg[ph-cell-signal-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 152v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowBoldIcon],svg[ph-cell-signal-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowDuotoneIcon],svg[ph-cell-signal-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 140.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M72 160v40H32Zm120 40H88v-56L192 40Z"></svg:path></svg:g>`,
})
export class PhCellSignalLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowFillIcon],svg[ph-cell-signal-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200H88v-56L192 40Z"></svg:path>`,
})
export class PhCellSignalLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowLightIcon],svg[ph-cell-signal-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalLowThinIcon],svg[ph-cell-signal-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 152v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumIcon],svg[ph-cell-signal-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112v88a8 8 0 0 1-16 0v-88a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumBoldIcon],svg[ph-cell-signal-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 112v88a12 12 0 0 1-24 0v-88a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumDuotoneIcon],svg[ph-cell-signal-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M120 100.7V208H32a8 8 0 0 1-5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M112 120v80H32Zm80 80h-64v-96l64-64Z"></svg:path></svg:g>`,
})
export class PhCellSignalMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumFillIcon],svg[ph-cell-signal-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200h-64v-96l64-64Z"></svg:path>`,
})
export class PhCellSignalMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumLightIcon],svg[ph-cell-signal-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 112v88a6 6 0 0 1-12 0v-88a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalMediumThinIcon],svg[ph-cell-signal-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 112v88a4 4 0 0 1-8 0v-88a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneIcon],svg[ph-cell-signal-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 192v8a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhCellSignalNoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneBoldIcon],svg[ph-cell-signal-none-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 192v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhCellSignalNoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneDuotoneIcon],svg[ph-cell-signal-none-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.43 3.47l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a16 16 0 0 0-9.88-14.77M192 200H32L192 40Z"></svg:path>`,
})
export class PhCellSignalNoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneFillIcon],svg[ph-cell-signal-none-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200H32L192 40Z"></svg:path>`,
})
export class PhCellSignalNoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneLightIcon],svg[ph-cell-signal-none-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 192v8a6 6 0 0 1-12 0v-8a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhCellSignalNoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalNoneThinIcon],svg[ph-cell-signal-none-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 192v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhCellSignalNoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashIcon],svg[ph-cell-signal-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 152v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m173.92 26.62l-160-176a8 8 0 1 0-11.84 10.76L112 122.29V200a8 8 0 0 0 16 0v-60.11l24 26.4V200a8 8 0 0 0 16 0v-16.11l34.08 37.49a8 8 0 1 0 11.84-10.76m-53.92-87a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v43.63a8 8 0 0 0 8 8Zm40 44a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v127.63a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhCellSignalSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashBoldIcon],svg[ph-cell-signal-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12m176.88 27.93l-160-176a12 12 0 1 0-17.76 16.14L108 123.84V200a12 12 0 0 0 24 0v-49.76l16 17.6V200a12 12 0 0 0 24 0v-5.76l27.12 29.83a12 12 0 0 0 17.76-16.14M160 115.74a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v31.74a12 12 0 0 0 12 12m40 44a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v115.74a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhCellSignalSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashDuotoneIcon],svg[ph-cell-signal-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v160a8 8 0 0 1-8 8H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="m213.92 210.62l-160-176a8 8 0 1 0-11.85 10.76l58.07 63.86l-79.45 79.44A16 16 0 0 0 32 216h160a16.1 16.1 0 0 0 4.56-.68l5.52 6.06a8 8 0 1 0 11.84-10.76M32 200l78.9-78.89L182.64 200Zm96.18-107.49a8 8 0 0 1 0-11.31l52.51-52.5A16 16 0 0 1 208 40v119.63a8 8 0 0 1-16 0V40l-52.5 52.51a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhCellSignalSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashFillIcon],svg[ph-cell-signal-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54l-5.51-6.06a16.1 16.1 0 0 1-4.57.68H32a16 16 0 0 1-15.06-10.59a16.4 16.4 0 0 1 4.07-17l79.13-79.12l-57.88-63.67a8.22 8.22 0 0 1 .14-11.38a8 8 0 0 1 11.48.37l160 176a8 8 0 0 1-.5 11.31M201 172.66a4 4 0 0 0 7-2.69V40a16 16 0 0 0-27.32-11.32l-55.21 55.2a4 4 0 0 0-.13 5.52Z"></svg:path>`,
})
export class PhCellSignalSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashLightIcon],svg[ph-cell-signal-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m172.44 26l-160-176a6 6 0 0 0-8.88 8L114 121.52V200a6 6 0 0 0 12 0v-65.28l28 30.8V200a6 6 0 0 0 12 0v-21.28L203.56 220a6 6 0 0 0 8.88-8.08ZM160 121.63a6 6 0 0 0 6-6V72a6 6 0 0 0-12 0v43.63a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v127.63a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhCellSignalSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalSlashThinIcon],svg[ph-cell-signal-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 152v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4m171 25.31l-160-176a4 4 0 0 0-6 5.38l71 78.06V200a4 4 0 0 0 8 0v-70.45l32 35.2V200a4 4 0 0 0 8 0v-26.45l41 45.14a4 4 0 1 0 5.92-5.38Zm-51-93.68a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v43.63a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v127.63a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhCellSignalSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXIcon],svg[ph-cell-signal-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176ZM160 120a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m40 0a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v80a8 8 0 0 0 8 8m-80-16a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCellSignalXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXBoldIcon],svg[ph-cell-signal-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 191.51a12 12 0 0 1-17 17L184 193l-15.51 15.52a12 12 0 0 1-17-17L167 176l-15.52-15.51a12 12 0 0 1 17-17L184 159l15.51-15.52a12 12 0 0 1 17 17L201 176ZM160 120a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v36a12 12 0 0 0 12 12m40 0a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v76a12 12 0 0 0 12 12m-80-20a12 12 0 0 0-12 12v88a12 12 0 0 0 24 0v-88a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m-40 40a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCellSignalXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXDuotoneIcon],svg[ph-cell-signal-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v120l-45.66 45.66a8 8 0 0 1-5.65 2.34H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40" opacity=".2"></svg:path><svg:path d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.35 18.35a8 8 0 0 1-11.31-11.32L172.68 176l-18.34-18.35a8 8 0 0 1 11.31-11.31L184 164.68l18.34-18.34a8 8 0 0 1 11.32 11.31L195.31 176ZM120 200H32L192 40v72a8 8 0 0 0 16 0V40a16 16 0 0 0-27.31-11.32l-160 160A16 16 0 0 0 32 216h88a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhCellSignalXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXFillIcon],svg[ph-cell-signal-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34a8 8 0 0 1-11.32 11.32L184 187.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L172.69 176l-18.35-18.34a8 8 0 0 1 11.32-11.32L184 164.69l18.34-18.35a8 8 0 0 1 11.32 11.32L195.31 176Zm-56.25-74.24a32 32 0 0 1 23.92 8.05a4 4 0 0 0 5.34 0a31.88 31.88 0 0 1 17.77-8a4 4 0 0 0 3.56-4V40.46a16.41 16.41 0 0 0-9.18-14.93a16 16 0 0 0-18.14 3.16l-160 160a16 16 0 0 0-3.17 18.13A16.4 16.4 0 0 0 32.46 216h93.6a4 4 0 0 0 3.78-5.3a32 32 0 0 1 6.31-32a4 4 0 0 0 0-5.34a32 32 0 0 1 21.26-53.23Z"></svg:path>`,
})
export class PhCellSignalXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXLightIcon],svg[ph-cell-signal-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 195.76a6 6 0 1 1-8.48 8.48L184 184.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L175.52 176l-19.76-19.76a6 6 0 0 1 8.48-8.48L184 167.52l19.76-19.76a6 6 0 0 1 8.48 8.48L192.48 176ZM160 118a6 6 0 0 0 6-6V72a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6m40 0a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v80a6 6 0 0 0 6 6m-80-12a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCellSignalXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellSignalXThinIcon],svg[ph-cell-signal-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 197.17a4 4 0 0 1-5.66 5.66L184 181.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L178.34 176l-21.17-21.17a4 4 0 0 1 5.66-5.66L184 170.34l21.17-21.17a4 4 0 0 1 5.66 5.66L189.66 176ZM160 116a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4m40 0a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v80a4 4 0 0 0 4 4m-80-8a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCellSignalXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerIcon],svg[ph-cell-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12ZM85 192l8-16h70.1l8 16Zm74.54-98.26a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.48-9.3Zm-95.39 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"></svg:path>`,
})
export class PhCellTowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerBoldIcon],svg[ph-cell-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138.67 86.51a12 12 0 0 0-21.34 0l-72 140a12 12 0 1 0 21.34 11l11-21.49h100.61l11.05 21.49a12 12 0 1 0 21.34-11ZM128 118.24L145.36 152h-34.72ZM90.07 192l8.22-16h59.42l8.22 16Zm84.44-123.27a12 12 0 1 1-21.45 10.75a28 28 0 0 0-50.37.52A12 12 0 1 1 81 69.7A52.28 52.28 0 0 1 128 40a51.74 51.74 0 0 1 46.51 28.73m-124.58 76a92 92 0 1 1 156.14 0A12 12 0 0 1 185.71 132a68 68 0 1 0-115.42 0a12 12 0 0 1-20.36 12.7Z"></svg:path>`,
})
export class PhCellTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerDuotoneIcon],svg[ph-cell-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 88a72 72 0 0 1-39.8 64.4L128 88l-32.2 64.4A72 72 0 1 1 200 88" opacity=".2"></svg:path><svg:path d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12ZM85 192l8-16h70.1l8 16Zm74.54-98.26a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.48-9.3Zm-95.39 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"></svg:path></svg:g>`,
})
export class PhCellTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerFillIcon],svg[ph-cell-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M135.16 84.42a8 8 0 0 0-14.32 0l-72 144a8 8 0 0 0 14.31 7.16L77 208h102.1l13.79 27.58A8 8 0 0 0 200 240a8 8 0 0 0 7.15-11.58ZM128 105.89L155.06 160h-54.12Zm31.49-12.15a32 32 0 1 0-63 0a8 8 0 1 1-15.74 2.85a48 48 0 1 1 94.46 0a8 8 0 0 1-7.86 6.58a9 9 0 0 1-1.43-.13a8 8 0 0 1-6.43-9.3m-95.34 42.47a80 80 0 1 1 127.7 0a8 8 0 0 1-12.76-9.65a64 64 0 1 0-102.18 0a8 8 0 0 1-12.76 9.65"></svg:path>`,
})
export class PhCellTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerLightIcon],svg[ph-cell-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.37 85.32a6 6 0 0 0-10.74 0l-72 144a6 6 0 0 0 10.74 5.37L75.71 206h104.58l14.34 28.68A6 6 0 0 0 200 238a5.9 5.9 0 0 0 2.68-.64a6 6 0 0 0 2.69-8.05Zm-5.37 16.1L158.29 162H97.71ZM81.71 194l10-20h72.58l10 20Zm79.74-99.9A33.6 33.6 0 0 0 162 88a34 34 0 0 0-68 0a33.6 33.6 0 0 0 .55 6.1a6 6 0 1 1-11.81 2.13a46 46 0 1 1 90.52 0a6 6 0 0 1-5.89 4.94a5.6 5.6 0 0 1-1.08-.1a6 6 0 0 1-4.84-6.97M65.75 135A78 78 0 1 1 206 88a77.33 77.33 0 0 1-15.75 47a6 6 0 1 1-9.57-7.24A65.42 65.42 0 0 0 194 88a66 66 0 0 0-132 0a65.42 65.42 0 0 0 13.32 39.76a6 6 0 1 1-9.57 7.24"></svg:path>`,
})
export class PhCellTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCellTowerThinIcon],svg[ph-cell-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M131.58 86.21a4 4 0 0 0-7.16 0l-72 144a4 4 0 0 0 7.16 3.58L74.47 204h107.06l14.89 29.79A4 4 0 0 0 200 236a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37ZM128 96.94L161.53 164H94.47ZM78.47 196l12-24h75.06l12 24Zm84.95-101.55A35.6 35.6 0 0 0 164 88a36 36 0 0 0-72 0a35.6 35.6 0 0 0 .58 6.45a4 4 0 0 1-7.88 1.43A45 45 0 0 1 84 88a44 44 0 0 1 88 0a45 45 0 0 1-.7 7.88a4 4 0 0 1-3.94 3.29a4.4 4.4 0 0 1-.71-.07a4 4 0 0 1-3.23-4.65m-96.08 39.34a76 76 0 1 1 121.32 0a4 4 0 1 1-6.38-4.82a68 68 0 1 0-108.56 0a4 4 0 1 1-6.38 4.82"></svg:path>`,
})
export class PhCellTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateIcon],svg[ph-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 136a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8-40H72a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m112 65.47V224a8 8 0 0 1-12 7l-24-13.74L172 231a8 8 0 0 1-12-7v-24H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v30.53a51.88 51.88 0 0 1 0 74.94M160 184v-22.53A52 52 0 0 1 216 76V56H40v128Zm56-12a51.88 51.88 0 0 1-40 0v38.22l16-9.16a8 8 0 0 1 7.94 0l16 9.16Zm16-48a36 36 0 1 0-36 36a36 36 0 0 0 36-36"></svg:path>`,
})
export class PhCertificateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateBoldIcon],svg[ph-certificate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 140a12 12 0 0 1-12 12H72a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12m-12-52H72a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m120 79.14V228a12 12 0 0 1-17.95 10.42L196 225.82l-22 12.6A12 12 0 0 1 156 228v-24H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20v32.86a55.87 55.87 0 0 1 0 78.28M196 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-40 20v-12.86a56 56 0 0 1 56-92.8V60H44v120Zm56 27.32v-25.66a55.87 55.87 0 0 1-32 0v25.66l10.05-5.74a12 12 0 0 1 11.9 0Z"></svg:path>`,
})
export class PhCertificateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateDuotoneIcon],svg[ph-certificate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v34.06a44 44 0 1 0-56 67.88V192H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 136a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8-40H72a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m112 65.47V224a8 8 0 0 1-12 7l-24-13.74L172 231a8 8 0 0 1-12-7v-24H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v30.53a51.88 51.88 0 0 1 0 74.94M160 184v-22.53A52 52 0 0 1 216 76V56H40v128Zm56-12a51.88 51.88 0 0 1-40 0v38.22l16-9.16a8 8 0 0 1 7.94 0l16 9.16Zm16-48a36 36 0 1 0-36 36a36 36 0 0 0 36-36"></svg:path></svg:g>`,
})
export class PhCertificateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateFillIcon],svg[ph-certificate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 86.53V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h120v24a8 8 0 0 0 12 7l24-13.74L220 231a8 8 0 0 0 12-7v-62.53a51.88 51.88 0 0 0 0-74.94M128 144H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 98.21l-16-9.16a8 8 0 0 0-7.94 0l-16 9.16V172a51.88 51.88 0 0 0 40 0ZM196 160a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhCertificateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateLightIcon],svg[ph-certificate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 136a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6-38H72a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m110 62.62V224a6 6 0 0 1-9 5.21l-25-14.3l-25 14.3a6 6 0 0 1-9-5.21v-26H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v31.38a49.91 49.91 0 0 1 0 73.24M196 86a38 38 0 1 0 38 38a38 38 0 0 0-38-38m-34 100v-25.38a50 50 0 0 1 56-81.51V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2Zm56-17.11a49.91 49.91 0 0 1-44 0v44.77l19-10.87a6 6 0 0 1 6 0l19 10.87Z"></svg:path>`,
})
export class PhCertificateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCertificateThinIcon],svg[ph-certificate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4-36H72a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m108 59.74V224a4 4 0 0 1-6 3.47l-26-14.86l-26 14.86a4 4 0 0 1-6-3.47v-28H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v32.26a47.92 47.92 0 0 1 0 71.48M196 84a40 40 0 1 0 40 40a40 40 0 0 0-40-40m-32 104v-28.26a48 48 0 0 1 56-77.28V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4Zm56-22.46a47.81 47.81 0 0 1-48 0v51.57l22-12.58a4 4 0 0 1 4 0l22 12.58Z"></svg:path>`,
})
export class PhCertificateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairIcon],svg[ph-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16M64 40h128v48H64Zm32 64h64v32H96Zm112 64H48v-16h160z"></svg:path>`,
})
export class PhChairIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairBoldIcon],svg[ph-chair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 128h-28v-20h12a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h12v20H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h8v32a12 12 0 0 0 24 0v-32h96v32a12 12 0 0 0 24 0v-32h8a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20M68 44h120v40H68Zm32 64h56v20h-56Zm104 60H52v-16h152Z"></svg:path>`,
})
export class PhChairBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairDuotoneIcon],svg[ph-chair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M56 88V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8m152 56H48a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16M64 40h128v48H64Zm32 64h64v32H96Zm112 64H48v-16h160z"></svg:path></svg:g>`,
})
export class PhChairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairFillIcon],svg[ph-chair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16m-48 0H96v-32h64Z"></svg:path>`,
})
export class PhChairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairLightIcon],svg[ph-chair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 138h-34v-36h18a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h18v36H48a14 14 0 0 0-14 14v16a14 14 0 0 0 14 14h10v42a6 6 0 0 0 12 0v-42h116v42a6 6 0 0 0 12 0v-42h10a14 14 0 0 0 14-14v-16a14 14 0 0 0-14-14M62 88V40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2m32 14h68v36H94Zm116 66a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhChairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChairThinIcon],svg[ph-chair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140h-36v-40h20a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h20v40H48a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12h12v44a4 4 0 0 0 8 0v-44h120v44a4 4 0 0 0 8 0v-44h12a12 12 0 0 0 12-12v-16a12 12 0 0 0-12-12M60 88V40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4m32 12h72v40H92Zm120 68a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhChairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardIcon],svg[ph-chalkboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 56h176v136h-16v-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8v24H72V88h112v48a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v112H40Zm144 136h-56v-16h56Z"></svg:path>`,
})
export class PhChalkboardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardBoldIcon],svg[ph-chalkboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-4V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 60h168v128h-16v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H84v-88h88v20a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v100H44Zm128 128h-40v-16h40Z"></svg:path>`,
})
export class PhChalkboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardDuotoneIcon],svg[ph-chalkboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 80v88h-72v32H64V80Z" opacity=".2"></svg:path><svg:path d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 56h176v136h-16v-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8v24H72V88h112v48a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v112H40Zm144 136h-56v-16h56Z"></svg:path></svg:g>`,
})
export class PhChalkboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardFillIcon],svg[ph-chalkboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Zm0-48a8 8 0 0 1-16 0V72H56v112a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhChalkboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardLightIcon],svg[ph-chalkboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10V56a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v138H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v138h-20v-26a6 6 0 0 0-6-6h-72a6 6 0 0 0-6 6v26H70V86h116v50a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v114H38Zm148 138h-60v-20h60Z"></svg:path>`,
})
export class PhChalkboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleIcon],svg[ph-chalkboard-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8v-24a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v24H40V56h176v80a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-72-16h48v16h-48Z"></svg:path>`,
})
export class PhChalkboardSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleBoldIcon],svg[ph-chalkboard-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-4v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H44V60h168v60a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-68-16h40v16h-40Z"></svg:path>`,
})
export class PhChalkboardSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleDuotoneIcon],svg[ph-chalkboard-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v112h-64v32H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 192h-8v-24a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v24H40V56h176v80a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-72-16h48v16h-48Z"></svg:path></svg:g>`,
})
export class PhChalkboardSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleFillIcon],svg[ph-chalkboard-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhChalkboardSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleLightIcon],svg[ph-chalkboard-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10v-26a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v26H38V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v80a6 6 0 0 0 12 0V56a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v138H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12m-74-20h52v20h-52Z"></svg:path>`,
})
export class PhChalkboardSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleThinIcon],svg[ph-chalkboard-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12v-28a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v28H36V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v80a4 4 0 0 0 8 0V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8m-76-24h56v24h-56Z"></svg:path>`,
})
export class PhChalkboardSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherIcon],svg[ph-chalkboard-teacher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M80 144a24 24 0 1 1 24 24a24 24 0 0 1-24-24m136 56h-56.57a64.4 64.4 0 0 0-28.83-26.16a40 40 0 1 0-53.2 0A64.4 64.4 0 0 0 48.57 200H40V56h176ZM56 96V80a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V88H72v8a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhChalkboardTeacherIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherBoldIcon],svg[ph-chalkboard-teacher-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 84a12 12 0 0 1 12-12h120a12 12 0 0 1 12 12v88a12 12 0 0 1-24 0V96H68a12 12 0 0 1-12-12m180-28v144a20 20 0 0 1-20 20h-66.74a12 12 0 0 1-11.4-8.26a36 36 0 0 0-67.74 0A12 12 0 0 1 58.74 220H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20M104 164a16 16 0 1 0-16-16a16 16 0 0 0 16 16M212 60H44v136h6.92a60.2 60.2 0 0 1 21.76-23.16a40 40 0 1 1 62.64 0A60.2 60.2 0 0 1 157.08 196H212Z"></svg:path>`,
})
export class PhChalkboardTeacherBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherDuotoneIcon],svg[ph-chalkboard-teacher-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 80v96h-88a32 32 0 1 0-32-32h-8V80Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M80 144a24 24 0 1 1 24 24a24 24 0 0 1-24-24m136 56h-56.57a64.4 64.4 0 0 0-28.83-26.16a40 40 0 1 0-53.2 0A64.4 64.4 0 0 0 48.57 200H40V56h176ZM56 96V80a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V88H72v8a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhChalkboardTeacherDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherFillIcon],svg[ph-chalkboard-teacher-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112 32h-56.57a64 64 0 0 0-13.16-16H192a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v96a8 8 0 0 0 6 7.75A63.7 63.7 0 0 0 48.57 200H40V56h176Z"></svg:path>`,
})
export class PhChalkboardTeacherFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherLightIcon],svg[ph-chalkboard-teacher-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h13.39a6 6 0 0 0 5.42-3.43a50 50 0 0 1 90.38 0a6 6 0 0 0 5.42 3.43H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M78 144a26 26 0 1 1 26 26a26 26 0 0 1-26-26m140 56a2 2 0 0 1-2 2h-57.73a62.34 62.34 0 0 0-31.48-27.61a38 38 0 1 0-45.58 0A62.34 62.34 0 0 0 49.73 202H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM198 80v96a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h10V86H70v10a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h128a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChalkboardTeacherLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardTeacherThinIcon],svg[ph-chalkboard-teacher-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChalkboardTeacherThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChalkboardThinIcon],svg[ph-chalkboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v140h-24v-28a4 4 0 0 0-4-4h-72a4 4 0 0 0-4 4v28H68V84h120v52a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v116H36Zm152 140h-64v-24h64Z"></svg:path>`,
})
export class PhChalkboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneIcon],svg[ph-champagne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-19.88 53.23c7.26 44.25 4.35 75.76-8.66 93.66A39.94 39.94 0 0 1 128 183.42V232h16a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h16v-48.58a40 40 0 0 1-27.46-16.53c-13-17.9-15.91-49.41-8.65-93.66a451 451 0 0 1 14.21-59.7A8 8 0 0 1 97.71 8h44.59a8 8 0 0 1 7.61 5.53a451 451 0 0 1 14.21 59.7M93.8 64h52.4c-3-15.58-6.72-29.81-9.78-40h-32.83c-3.06 10.19-6.76 24.42-9.79 40M149 80H91c-4.49 30-5.14 61.54 6.45 77.49C102.63 164.56 110 168 120 168s17.38-3.44 22.52-10.51C154.1 141.54 153.46 110 149 80m71-40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-24 48a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhChampagneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneBoldIcon],svg[ph-champagne-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.7 12.29A12 12 0 0 0 142.29 4h-44.6a12 12 0 0 0-11.41 8.29a454 454 0 0 0-14.36 60.29c-7.44 45.34-4.28 77.86 9.37 96.66A44.1 44.1 0 0 0 108 186.72V228H96a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12v-41.28a44.1 44.1 0 0 0 26.7-17.48c13.66-18.8 16.81-51.32 9.37-96.66a454 454 0 0 0-14.37-60.29M133.36 28c2.08 7.25 5.14 18.7 7.92 32H98.7c2.78-13.3 5.84-24.75 7.92-32Zm5.91 127.14c-4.4 6-10.52 8.86-19.28 8.86s-14.88-2.82-19.28-8.86c-8.83-12.14-11-37.26-6.25-71.14h51.06c4.75 33.88 2.58 59-6.25 71.14M240 56a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-60-36a16 16 0 1 1 16 16a16 16 0 0 1-16-16m36 84a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhChampagneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneDuotoneIcon],svg[ph-champagne-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M120 176c-44.7 0-43.7-57.87-35.8-104h71.6c7.9 46.13 8.9 104-35.8 104" opacity=".2"></svg:path><svg:path d="M149.91 13.53A8 8 0 0 0 142.3 8H97.71a8 8 0 0 0-7.61 5.53a451 451 0 0 0-14.21 59.7c-7.26 44.25-4.35 75.76 8.65 93.66A40 40 0 0 0 112 183.42V232H96a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-16v-48.58a39.94 39.94 0 0 0 27.46-16.53c13-17.9 15.92-49.41 8.66-93.66a451 451 0 0 0-14.21-59.7M103.59 24h32.83c3.06 10.19 6.77 24.42 9.8 40H93.8c3.03-15.58 6.73-29.81 9.79-40m38.93 133.48C137.38 164.56 130 168 120 168s-17.37-3.44-22.51-10.51C85.9 141.54 86.55 110 91 80h58c4.47 30 5.12 61.52-6.48 77.48M232 52a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48-32a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChampagneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneFillIcon],svg[ph-champagne-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.91 13.53A8 8 0 0 0 142.3 8H97.71a8 8 0 0 0-7.61 5.53a451 451 0 0 0-14.21 59.7c-7.26 44.25-4.35 75.76 8.65 93.66A40 40 0 0 0 112 183.42V232H96a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-16v-48.58a39.94 39.94 0 0 0 27.46-16.53c13-17.9 15.92-49.41 8.66-93.66a451 451 0 0 0-14.21-59.7M93.8 64c3-15.58 6.73-29.81 9.79-40h32.83c3.06 10.19 6.77 24.42 9.8 40ZM232 52a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48-32a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChampagneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneLightIcon],svg[ph-champagne-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.26 10H97.65A6 6 0 0 0 92 14.14c-1.47 4.51-35.53 110.73-5.85 151.57c6.75 9.28 16.1 14.62 27.86 15.95V234H96a6 6 0 1 0 0 12h48a6 6 0 1 0 0-12h-18v-52.34c11.76-1.33 21.11-6.67 27.85-15.95c29.68-40.84-4.37-147.06-5.84-151.57a6 6 0 0 0-5.75-4.14m-40.18 12h35.75c2.24 7.48 7 24.29 10.75 44H91.34c3.75-19.71 8.51-36.52 10.74-44m42 136.66C138.55 166.29 130.66 170 120 170s-18.6-3.71-24.14-11.34c-10.4-14.24-12.65-42.11-6.61-80.66h61.42c6.04 38.55 3.78 66.42-6.57 80.66ZM230 52a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-24-32a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhChampagneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChampagneThinIcon],svg[ph-champagne-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.3 12H97.7a4 4 0 0 0-3.8 2.76c-1.45 4.47-35.2 109.75-6.13 149.78c6.73 9.25 16.23 14.38 28.23 15.29V236H96a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20v-56.17c12-.91 21.5-6 28.22-15.29c29.08-40-4.67-145.31-6.12-149.78a4 4 0 0 0-3.8-2.76m-41.65 8h38.7A455 455 0 0 1 151 68H89a462 462 0 0 1 11.65-48m45.1 139.83C139.8 168 131.38 172 120 172s-19.8-4-25.75-12.16C81 141.63 82.6 106.72 87.6 76h64.81c6.45 40 4.16 68.94-6.66 83.83M228 52a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-24-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChampagneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationIcon],svg[ph-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.62 123.51a8 8 0 0 1 .81 7.46l-16 40a8 8 0 0 1-14.86-5.97l11.61-29H96a8 8 0 0 1-7.43-11l16-40a8 8 0 1 1 14.86 6l-11.61 29H128a8 8 0 0 1 6.62 3.51M248 86.63V168a24 24 0 0 1-48 0v-40a8 8 0 0 0-8-8h-16v88h16a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h16V56a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v48h16a24 24 0 0 1 24 24v40a8 8 0 0 0 16 0V86.63a8 8 0 0 0-2.34-5.63l-19.32-19.34a8 8 0 0 1 11.32-11.32L241 69.66a23.85 23.85 0 0 1 7 16.97M160 208V56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v152Z"></svg:path>`,
})
export class PhChargingStationIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationBoldIcon],svg[ph-charging-station-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M137.94 121.27a12 12 0 0 1 1.2 11.19l-16 40A12 12 0 0 1 112 180a11.9 11.9 0 0 1-4.46-.86a12 12 0 0 1-6.68-15.6l9.42-23.54H96a12 12 0 0 1-11.14-16.46l16-40a12 12 0 0 1 22.28 8.92L113.72 116H128a12 12 0 0 1 9.94 5.27M256 86.63V166a30 30 0 0 1-60 0v-38a4 4 0 0 0-4-4h-12v80h12a12 12 0 0 1 0 24H32a12 12 0 0 1 0-24h12V56a28 28 0 0 1 28-28h80a28 28 0 0 1 28 28v44h12a28 28 0 0 1 28 28v38a6 6 0 0 0 12 0V86.63a4 4 0 0 0-1.17-2.83l-19.32-19.31a12 12 0 0 1 17-17l19.29 19.34a27.8 27.8 0 0 1 8.2 19.8M156 204V56a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v148Z"></svg:path>`,
})
export class PhChargingStationBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationDuotoneIcon],svg[ph-charging-station-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 56v160H56V56a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M134.62 123.51a8 8 0 0 1 .81 7.46l-16 40a8 8 0 0 1-14.86-5.97l11.61-29H96a8 8 0 0 1-7.43-11l16-40a8 8 0 1 1 14.86 6l-11.61 29H128a8 8 0 0 1 6.62 3.51M248 86.63V168a24 24 0 0 1-48 0v-40a8 8 0 0 0-8-8h-16v88h16a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h16V56a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v48h16a24 24 0 0 1 24 24v40a8 8 0 0 0 16 0V86.63a8 8 0 0 0-2.34-5.63l-19.32-19.34a8 8 0 0 1 11.32-11.32L241 69.66a23.85 23.85 0 0 1 7 16.97M160 208V56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v152Z"></svg:path></svg:g>`,
})
export class PhChargingStationDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationFillIcon],svg[ph-charging-station-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M135.43 131l-16 40a8 8 0 0 1-14.86-6l11.61-29H96a8 8 0 0 1-7.43-11l16-40a8 8 0 1 1 14.86 6l-11.61 29H128a8 8 0 0 1 7.43 11"></svg:path>`,
})
export class PhChargingStationFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationLightIcon],svg[ph-charging-station-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133 124.64a6 6 0 0 1 .6 5.59l-16 40a6 6 0 1 1-11.14-4.46L119.14 134H96a6 6 0 0 1-5.57-8.23l16-40a6 6 0 0 1 11.14 4.46L104.86 122H128a6 6 0 0 1 5 2.64m113-38V168a22 22 0 0 1-44 0v-40a10 10 0 0 0-10-10h-18v92h18a6 6 0 0 1 0 12H32a6 6 0 0 1 0-12h18V56a22 22 0 0 1 22-22h80a22 22 0 0 1 22 22v50h18a22 22 0 0 1 22 22v40a10 10 0 0 0 20 0V86.63a9.93 9.93 0 0 0-2.93-7.07l-19.31-19.32a6 6 0 0 1 8.48-8.48l19.32 19.31A21.88 21.88 0 0 1 246 86.63ZM162 210V56a10 10 0 0 0-10-10H72a10 10 0 0 0-10 10v154Z"></svg:path>`,
})
export class PhChargingStationLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChargingStationThinIcon],svg[ph-charging-station-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M131.31 125.76a4 4 0 0 1 .4 3.73l-16 40A4 4 0 0 1 112 172a3.9 3.9 0 0 1-1.49-.29a4 4 0 0 1-2.22-5.2l13.8-34.51H96a4 4 0 0 1-3.71-5.49l16-40a4 4 0 1 1 7.42 3L101.91 124H128a4 4 0 0 1 3.31 1.76M244 86.63V168a20 20 0 0 1-40 0v-40a12 12 0 0 0-12-12h-20v96h20a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h20V56a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20v52h20a20 20 0 0 1 20 20v40a12 12 0 0 0 24 0V86.63a12 12 0 0 0-3.51-8.49l-19.32-19.31a4 4 0 0 1 5.66-5.66l19.31 19.32A19.85 19.85 0 0 1 244 86.63M164 212V56a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v156Z"></svg:path>`,
})
export class PhChargingStationThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarIcon],svg[ph-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40H96a8 8 0 0 0-8 8v40H48a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M160 48h40v152h-40Zm-56 48h40v104h-40Zm-48 48h32v56H56Z"></svg:path>`,
})
export class PhChartBarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarBoldIcon],svg[ph-chart-bar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 196h-4V40a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v36H96a12 12 0 0 0-12 12v36H48a12 12 0 0 0-12 12v60h-4a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M164 52h32v144h-32Zm-56 48h32v96h-32Zm-48 48h24v48H60Z"></svg:path>`,
})
export class PhChartBarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarDuotoneIcon],svg[ph-chart-bar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v168h-56V40Z" opacity=".2"></svg:path><svg:path d="M224 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40H96a8 8 0 0 0-8 8v40H48a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M160 48h40v152h-40Zm-56 48h40v104h-40Zm-48 48h32v56H56Z"></svg:path></svg:g>`,
})
export class PhChartBarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarFillIcon],svg[ph-chart-bar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h8v-64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v64h16V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v112h16V40a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v160h8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartBarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalIcon],svg[ph-chart-bar-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96h-40V56a8 8 0 0 0-8-8H56v-8a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-8h88a8 8 0 0 0 8-8v-40h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-56-32v32H56V64Zm-32 128H56v-32h80Zm80-48H56v-32h160Z"></svg:path>`,
})
export class PhChartBarHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalBoldIcon],svg[ph-chart-bar-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 92h-36V56a12 12 0 0 0-12-12H60v-4a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-4h84a12 12 0 0 0 12-12v-36h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-60-24v24H60V68Zm-32 120H60v-24h72Zm80-48H60v-24h152Z"></svg:path>`,
})
export class PhChartBarHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalDuotoneIcon],svg[ph-chart-bar-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104v48H48v-48Z" opacity=".2"></svg:path><svg:path d="M224 96h-40V56a8 8 0 0 0-8-8H56v-8a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-8h88a8 8 0 0 0 8-8v-40h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-56-32v32H56V64Zm-32 128H56v-32h80Zm80-48H56v-32h160Z"></svg:path></svg:g>`,
})
export class PhChartBarHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalFillIcon],svg[ph-chart-bar-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112v32a8 8 0 0 1-8 8H56v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v16h168a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartBarHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalLightIcon],svg[ph-chart-bar-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 98h-42V56a6 6 0 0 0-6-6H54V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-10h90a6 6 0 0 0 6-6v-42h74a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-54-36v36H54V62Zm-32 132H54v-36h84Zm80-48H54v-36h164Z"></svg:path>`,
})
export class PhChartBarHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarHorizontalThinIcon],svg[ph-chart-bar-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 100h-44V56a4 4 0 0 0-4-4H52V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-12h92a4 4 0 0 0 4-4v-44h76a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-52-40v40H52V60Zm-32 136H52v-40h88Zm80-48H52v-40h168Z"></svg:path>`,
})
export class PhChartBarHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarLightIcon],svg[ph-chart-bar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 202h-10V40a6 6 0 0 0-6-6h-56a6 6 0 0 0-6 6v42H96a6 6 0 0 0-6 6v42H48a6 6 0 0 0-6 6v66H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M158 46h44v156h-44Zm-56 48h44v108h-44Zm-48 48h36v60H54Z"></svg:path>`,
})
export class PhChartBarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartBarThinIcon],svg[ph-chart-bar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 204h-12V40a4 4 0 0 0-4-4h-56a4 4 0 0 0-4 4v44H96a4 4 0 0 0-4 4v44H48a4 4 0 0 0-4 4v68H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M156 44h48v160h-48Zm-56 48h48v112h-48Zm-48 48h40v64H52Z"></svg:path>`,
})
export class PhChartBarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutIcon],svg[ph-chart-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8a32 32 0 1 1-27.72 16a8 8 0 0 0-2.93-10.93l-48.5-28A8 8 0 0 0 37.92 76A104 104 0 1 0 128 24M48.09 91.1L83 111.26A48.1 48.1 0 0 0 80 128c0 1.53.08 3 .22 4.52L41.28 143a88.16 88.16 0 0 1 6.81-51.9m-2.67 67.31l39-10.44A48.1 48.1 0 0 0 120 175.32v40.31a88.2 88.2 0 0 1-74.58-57.22M136 215.63v-40.31a48 48 0 0 0 0-94.65V40.36a88 88 0 0 1 0 175.27"></svg:path>`,
})
export class PhChartDonutIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutBoldIcon],svg[ph-chart-donut-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12a28 28 0 1 1-24.26 14a12 12 0 0 0-4.39-16.4l-48.5-28A12 12 0 0 0 34.46 74A108 108 0 1 0 128 20M50 96.81l28.2 16.28A52 52 0 0 0 76 128v1.5l-31.43 8.42A83 83 0 0 1 44 128a84.4 84.4 0 0 1 6-31.19m.83 64.3l31.43-8.43A52.2 52.2 0 0 0 116 178.59v32.54a84.26 84.26 0 0 1-65.19-50.02Zm89.19 50v-32.52A52 52 0 0 0 140 77.4V44.85a84 84 0 0 1 0 166.28Z"></svg:path>`,
})
export class PhChartDonutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutDuotoneIcon],svg[ph-chart-donut-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-96 96v-56a40 40 0 0 0 0-80V32a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8a32 32 0 1 1-27.72 16a8 8 0 0 0-2.93-10.93l-48.5-28A8 8 0 0 0 37.92 76A104 104 0 1 0 128 24M48.09 91.1L83 111.26A48.1 48.1 0 0 0 80 128c0 1.53.08 3 .22 4.52L41.28 143a88.16 88.16 0 0 1 6.81-51.9m-2.67 67.31l39-10.44A48.1 48.1 0 0 0 120 175.32v40.31a88.2 88.2 0 0 1-74.58-57.22M136 215.63v-40.31a48 48 0 0 0 0-94.65V40.36a88 88 0 0 1 0 175.27"></svg:path></svg:g>`,
})
export class PhChartDonutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutFillIcon],svg[ph-chart-donut-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 161.94v65.34a4 4 0 0 1-4.46 4a104.28 104.28 0 0 1-84-64.5a4 4 0 0 1 2.69-5.34l63.09-16.94a4 4 0 0 1 4.35 1.66a32.25 32.25 0 0 0 15.59 12a4 4 0 0 1 2.74 3.78M128.06 24a8 8 0 0 0-8.06 8v56a7.94 7.94 0 0 0 7.87 8a32 32 0 0 1 10.86 62.15a4 4 0 0 0-2.73 3.79v65.34a4 4 0 0 0 4.45 4A104 104 0 0 0 128.06 24m-32 101.49a32 32 0 0 1 4.15-13.42V112a8 8 0 0 0-.57-8.87a8.4 8.4 0 0 0-2.46-2.13L48.85 73.06A8 8 0 0 0 37.92 76A104.12 104.12 0 0 0 25 142.68a4 4 0 0 0 5 3.32l63.22-17a3.94 3.94 0 0 0 2.88-3.51Z"></svg:path>`,
})
export class PhChartDonutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutLightIcon],svg[ph-chart-donut-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6a34 34 0 1 1-29.45 17a6 6 0 0 0-2.2-8.2l-48.5-28a6 6 0 0 0-8.2 2.2A102 102 0 1 0 128 26M47.21 88.29l38.29 22.1A46 46 0 0 0 82 128a48 48 0 0 0 .4 6l-42.7 11.45a90.27 90.27 0 0 1 7.51-57.16M42.81 157l42.7-11.44a46.12 46.12 0 0 0 36.49 28v44.2A90.2 90.2 0 0 1 42.81 157M134 217.8v-44.2a46 46 0 0 0 0-91.21V38.2a90 90 0 0 1 0 179.6"></svg:path>`,
})
export class PhChartDonutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartDonutThinIcon],svg[ph-chart-donut-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4a36 36 0 1 1-31.18 18a4 4 0 0 0-1.47-5.47l-48.5-28A4 4 0 0 0 41.39 78A100 100 0 1 0 128 28M46.38 85.5l41.67 24a43.86 43.86 0 0 0-3.4 25.93l-46.47 12.5a92.2 92.2 0 0 1 8.2-62.43m-6.13 70.15l46.46-12.45A44.11 44.11 0 0 0 124 171.81v48.1a92.17 92.17 0 0 1-83.75-64.26M132 219.91v-48.1a44 44 0 0 0 0-87.63V36.09a92 92 0 0 1 0 183.82"></svg:path>`,
})
export class PhChartDonutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineIcon],svg[ph-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartLineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineBoldIcon],svg[ph-chart-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v85.55L88.1 95a12 12 0 0 1 15.1-.57l56.22 42.16L216.1 87a12 12 0 1 1 15.8 18l-64 56a12 12 0 0 1-15.1.57l-56.22-42.13L44 165.45V196h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChartLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownIcon],svg[ph-chart-line-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartLineDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownBoldIcon],svg[ph-chart-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v11l52 52l23.51-23.52a12 12 0 0 1 17 0L188 139v-11a12 12 0 0 1 24 0v40q0 .6-.06 1.2c0 .16-.05.33-.07.49s-.06.45-.1.67s-.09.38-.14.56s-.09.39-.15.58l-.19.54c-.07.19-.13.38-.21.56s-.15.34-.23.5s-.17.38-.27.57s-.18.3-.27.45s-.21.38-.33.56s-.24.32-.36.47s-.22.32-.34.47s-.46.53-.71.78l-.08.1l-.1.08c-.25.25-.51.48-.78.71l-.46.34c-.16.12-.32.25-.48.36s-.37.22-.55.33s-.3.19-.46.27s-.37.18-.56.27s-.33.16-.51.23l-.54.21l-.57.19a5 5 0 0 1-.55.14l-.58.15l-.64.09l-.53.08a12 12 0 0 1-1.18.05h-40a12 12 0 0 1 0-24h11l-43-43l-23.51 23.52a12 12 0 0 1-17 0L44 93v103h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChartLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownDuotoneIcon],svg[ph-chart-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChartLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownFillIcon],svg[ph-chart-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 152H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v20.69l32 32l34.34-34.35a8 8 0 0 1 11.32 0L176 124.69V104a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h20.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0L64 115.31V176h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownLightIcon],svg[ph-chart-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v13.52l58 58l27.76-27.75a6 6 0 0 1 8.48 0L194 153.52V128a6 6 0 0 1 12 0v40a5.6 5.6 0 0 1-.11 1.1v.06a7.5 7.5 0 0 1-.31 1.05v.07a6 6 0 0 1-.52 1v.06a6.3 6.3 0 0 1-1.68 1.68h-.06a6 6 0 0 1-1 .52h-.07a7.5 7.5 0 0 1-1.05.31h-.06a5.6 5.6 0 0 1-1.1.11H160a6 6 0 0 1 0-12h25.52L128 104.49l-27.76 27.75a6 6 0 0 1-8.48 0L38 78.48V202h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChartLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownThinIcon],svg[ph-chart-line-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v14.34l60 60l29.17-29.17a4 4 0 0 1 5.66 0L196 158.34V128a4 4 0 0 1 8 0v40a4 4 0 0 1-.08.78a3 3 0 0 1-.1.34a3 3 0 0 1-.13.41a3 3 0 0 1-.2.39c-.05.1-.1.2-.16.3a4.2 4.2 0 0 1-1.11 1.11l-.31.16a4 4 0 0 1-.38.2a3 3 0 0 1-.41.13a3 3 0 0 1-.34.1a4 4 0 0 1-.78.08h-40a4 4 0 0 1 0-8h30.34L128 101.66l-29.17 29.17a4 4 0 0 1-5.66 0L36 73.66V204h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChartLineDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineDuotoneIcon],svg[ph-chart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChartLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineFillIcon],svg[ph-chart-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v62.92l34.88-29.07a8 8 0 0 1 9.56-.51l43 28.69l43.41-36.18a8 8 0 0 1 10.24 12.3l-48 40a8 8 0 0 1-9.56.51l-43-28.69L64 155.75V176Z"></svg:path>`,
})
export class PhChartLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineLightIcon],svg[ph-chart-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v98.78l54.05-47.3a6 6 0 0 1 7.55-.28l60.11 45.08l60.34-52.8a6 6 0 0 1 7.9 9l-64 56a6 6 0 0 1-7.55.28l-60.11-45.04l-58.29 51V202h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChartLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineThinIcon],svg[ph-chart-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v103.19L93.37 101a4 4 0 0 1 5-.19l61.41 46.05L221.37 93a4 4 0 0 1 5.26 6l-64 56a4 4 0 0 1-5 .19l-61.41-46L36 161.81V204h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChartLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpIcon],svg[ph-chart-line-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhChartLineUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpBoldIcon],svg[ph-chart-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v99l43.51-43.52a12 12 0 0 1 17 0L128 127l43-43h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-11l-51.51 51.52a12 12 0 0 1-17 0L96 129l-52 52v15h180a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhChartLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpDuotoneIcon],svg[ph-chart-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v144H32V48h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhChartLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpFillIcon],svg[ph-chart-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 152H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v76.69l34.34-34.35a8 8 0 0 1 11.32 0L128 132.69L172.69 88H144a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V99.31l-50.34 50.35a8 8 0 0 1-11.32 0L104 131.31l-40 40V176h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpLightIcon],svg[ph-chart-line-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v113.52l53.76-53.76a6 6 0 0 1 8.48 0L128 135.51L185.52 78H160a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6v40a6 6 0 0 1-12 0V86.48l-61.76 61.76a6 6 0 0 1-8.48 0L96 120.49l-58 58V202h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhChartLineUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartLineUpThinIcon],svg[ph-chart-line-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v118.34l57.17-57.17a4 4 0 0 1 5.66 0L128 138.34L190.34 76H160a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-8 0V81.66l-65.17 65.17a4 4 0 0 1-5.66 0L96 117.66l-60 60V204h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhChartLineUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieIcon],svg[ph-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9M120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37M128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216"></svg:path>`,
})
export class PhChartPieIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieBoldIcon],svg[ph-chart-pie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 24.87a84 84 0 0 1 54 31.2l-54 31.15Zm-90 114.3a83.94 83.94 0 0 1 66-114.3v76.2ZM128 212a83.88 83.88 0 0 1-65.95-32.07L206 96.83A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhChartPieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieDuotoneIcon],svg[ph-chart-pie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32v96l-83.14 48A96 96 0 0 1 128 32" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9M120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37M128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhChartPieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieFillIcon],svg[ph-chart-pie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 71.87 37.27L128 118.76Zm0 176a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216"></svg:path>`,
})
export class PhChartPieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieLightIcon],svg[ph-chart-pie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m74.74 51.92L134 117.61V38.2a90 90 0 0 1 68.74 39.72M122 38.2v86.34L47.24 167.7A90 90 0 0 1 122 38.2m6 179.8a90 90 0 0 1-74.74-39.92l155.5-89.78A90 90 0 0 1 128 218"></svg:path>`,
})
export class PhChartPieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceIcon],svg[ph-chart-pie-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M128 24a8 8 0 0 0-8 8v91.82l-78.81 45.91a8 8 0 0 0-2.87 11A104 104 0 1 0 128 24m0 192a88.47 88.47 0 0 1-71.49-36.68l75.52-44a8 8 0 0 0 4-6.92V40.36A88 88 0 0 1 128 216"></svg:path>`,
})
export class PhChartPieSliceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceBoldIcon],svg[ph-chart-pie-slice-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.82 116.64a12 12 0 0 0 6.18-10.49V40.74a12 12 0 0 0-17-10.91A108.26 108.26 0 0 0 20 128c0 3.37.16 6.76.47 10.1a12 12 0 0 0 17.76 9.38ZM76 62.06v37l-31.19 17.3A84.4 84.4 0 0 1 76 62.06M128 20a12 12 0 0 0-12 12v89.53l-76.82 44.74a12 12 0 0 0-4.3 16.46A108 108 0 1 0 128 20m0 192a84.47 84.47 0 0 1-65.57-31.5L134 138.79a12 12 0 0 0 6-10.37V44.85A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhChartPieSliceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceDuotoneIcon],svg[ph-chart-pie-slice-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 37.5v72l-62.4 36A96 96 0 0 1 96 37.5" opacity=".2"></svg:path><svg:path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M128 24a8 8 0 0 0-8 8v91.82l-78.81 45.91a8 8 0 0 0-2.87 11A104 104 0 1 0 128 24m0 192a88.47 88.47 0 0 1-71.49-36.68l75.52-44a8 8 0 0 0 4-6.92V40.36A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhChartPieSliceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceFillIcon],svg[ph-chart-pie-slice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.9 7.9 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M232 128a104 104 0 0 1-193.68 52.7a8 8 0 0 1 2.87-11L120 123.83V32a8 8 0 0 1 8-8a104.05 104.05 0 0 1 89.74 51.48c.11.16.21.32.31.49s.2.37.29.55A103.34 103.34 0 0 1 232 128"></svg:path>`,
})
export class PhChartPieSliceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceLightIcon],svg[ph-chart-pie-slice-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 109.5v-72a6 6 0 0 0-8-5.66a102 102 0 0 0-66.3 114.75a6 6 0 0 0 8.9 4.11l62.4-36a6 6 0 0 0 3-5.2M90 106l-51.66 29.8Q38 131.91 38 128a90.1 90.1 0 0 1 52-81.58Zm38-80a6 6 0 0 0-6 6v93l-79.8 46.46a6 6 0 0 0-2.15 8.22A102 102 0 1 0 128 26m0 192a90.48 90.48 0 0 1-74.38-39.31L131 133.61a6 6 0 0 0 3-5.19V38.2a90 90 0 0 1-6 179.8"></svg:path>`,
})
export class PhChartPieSliceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieSliceThinIcon],svg[ph-chart-pie-slice-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 109.5v-72a4 4 0 0 0-5.33-3.77a100 100 0 0 0-65 112.5A4 4 0 0 0 35.6 149L98 113a4 4 0 0 0 2-3.5m-8-2.31l-55.33 31.92A92 92 0 0 1 92 43.34ZM128 28a4 4 0 0 0-4 4v94.12l-80.8 47.06a4 4 0 0 0-1.43 5.49A100 100 0 1 0 128 28m0 192a92.47 92.47 0 0 1-77.22-42L130 131.88a4 4 0 0 0 2-3.46V36.09A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhChartPieSliceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPieThinIcon],svg[ph-chart-pie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m77.58 50.59L132 121.07v-85a92.07 92.07 0 0 1 73.58 42.52M124 36.09v89.6l-77.58 44.79A92 92 0 0 1 124 36.09M128 220a92 92 0 0 1-77.58-42.59l159.16-91.89A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhChartPieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarIcon],svg[ph-chart-polar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.63 96h-24.15A64.1 64.1 0 0 0 136 64.52V40.37A88.13 88.13 0 0 1 215.63 120M120 120H80.68A48.09 48.09 0 0 1 120 80.68Zm0 16v39.32A48.09 48.09 0 0 1 80.68 136Zm16 0h39.32A48.09 48.09 0 0 1 136 175.32Zm0-16V80.68A48.09 48.09 0 0 1 175.32 120Zm-16-79.63v24.15A64.1 64.1 0 0 0 64.52 120H40.37A88.13 88.13 0 0 1 120 40.37M40.37 136h24.15A64.1 64.1 0 0 0 120 191.48v24.15A88.13 88.13 0 0 1 40.37 136M136 215.63v-24.15A64.1 64.1 0 0 0 191.48 136h24.15A88.13 88.13 0 0 1 136 215.63"></svg:path>`,
})
export class PhChartPolarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarBoldIcon],svg[ph-chart-polar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m83.13 96h-16.21A68.16 68.16 0 0 0 140 61.08V44.87A84.18 84.18 0 0 1 211.13 116M116 116H85.68A44.13 44.13 0 0 1 116 85.68Zm0 24v30.32A44.13 44.13 0 0 1 85.68 140Zm24 0h30.32A44.13 44.13 0 0 1 140 170.32Zm0-24V85.68A44.13 44.13 0 0 1 170.32 116Zm-24-71.13v16.21A68.16 68.16 0 0 0 61.08 116H44.87A84.18 84.18 0 0 1 116 44.87M44.87 140h16.21A68.16 68.16 0 0 0 116 194.92v16.21A84.18 84.18 0 0 1 44.87 140M140 211.13v-16.21A68.16 68.16 0 0 0 194.92 140h16.21A84.18 84.18 0 0 1 140 211.13"></svg:path>`,
})
export class PhChartPolarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarDuotoneIcon],svg[ph-chart-polar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.63 96h-24.15A64.1 64.1 0 0 0 136 64.52V40.37A88.13 88.13 0 0 1 215.63 120M120 120H80.68A48.09 48.09 0 0 1 120 80.68Zm0 16v39.32A48.09 48.09 0 0 1 80.68 136Zm16 0h39.32A48.09 48.09 0 0 1 136 175.32Zm0-16V80.68A48.09 48.09 0 0 1 175.32 120Zm-16-79.63v24.15A64.1 64.1 0 0 0 64.52 120H40.37A88.13 88.13 0 0 1 120 40.37M40.37 136h24.15A64.1 64.1 0 0 0 120 191.48v24.15A88.13 88.13 0 0 1 40.37 136M136 215.63v-24.15A64.1 64.1 0 0 0 191.48 136h24.15A88.13 88.13 0 0 1 136 215.63"></svg:path></svg:g>`,
})
export class PhChartPolarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarFillIcon],svg[ph-chart-polar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 199.54v27.74a4 4 0 0 1-4.46 4a104.22 104.22 0 0 1-90.8-90.8a4 4 0 0 1 4-4.46h27.72A72.11 72.11 0 0 0 120 199.54M183.42 136H136v47.42A56.11 56.11 0 0 0 183.42 136M136 72.58V120h47.42A56.11 56.11 0 0 0 136 72.58M227.28 136h-27.74A72.11 72.11 0 0 1 136 199.54v27.74a4 4 0 0 0 4.46 4a104.22 104.22 0 0 0 90.8-90.8a4 4 0 0 0-3.98-4.48m-27.74-16h27.74a4 4 0 0 0 4-4.46a104.22 104.22 0 0 0-90.8-90.8a4 4 0 0 0-4.46 4v27.72A72.11 72.11 0 0 1 199.54 120m-84-95.26a104.22 104.22 0 0 0-90.8 90.8a4 4 0 0 0 4 4.46h27.72A72.11 72.11 0 0 1 120 56.46V28.72a4 4 0 0 0-4.46-3.98M72.58 120H120V72.58A56.11 56.11 0 0 0 72.58 120M120 183.42V136H72.58A56.11 56.11 0 0 0 120 183.42"></svg:path>`,
})
export class PhChartPolarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarLightIcon],svg[ph-chart-polar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.8 96h-28.1A62.07 62.07 0 0 0 134 66.3V38.2a90.15 90.15 0 0 1 83.8 83.8m-95.8 0H78.37A50.09 50.09 0 0 1 122 78.37Zm0 12v43.63A50.09 50.09 0 0 1 78.37 134Zm12 0h43.63A50.09 50.09 0 0 1 134 177.63Zm0-12V78.37A50.09 50.09 0 0 1 177.63 122Zm-12-83.8v28.1A62.07 62.07 0 0 0 66.3 122H38.2A90.15 90.15 0 0 1 122 38.2M38.2 134h28.1a62.07 62.07 0 0 0 55.7 55.7v28.1A90.15 90.15 0 0 1 38.2 134m95.8 83.8v-28.1a62.07 62.07 0 0 0 55.7-55.7h28.1a90.15 90.15 0 0 1-83.8 83.8"></svg:path>`,
})
export class PhChartPolarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartPolarThinIcon],svg[ph-chart-polar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.91 96h-32.06A60.07 60.07 0 0 0 132 68.15V36.09A92.13 92.13 0 0 1 219.91 124M124 124H76.17A52.05 52.05 0 0 1 124 76.17Zm0 8v47.83A52.05 52.05 0 0 1 76.17 132Zm8 0h47.83A52.05 52.05 0 0 1 132 179.83Zm0-8V76.17A52.05 52.05 0 0 1 179.83 124Zm-8-87.91v32.06A60.07 60.07 0 0 0 68.15 124H36.09A92.13 92.13 0 0 1 124 36.09M36.09 132h32.06A60.07 60.07 0 0 0 124 187.85v32.06A92.13 92.13 0 0 1 36.09 132M132 219.91v-32.06A60.07 60.07 0 0 0 187.85 132h32.06A92.13 92.13 0 0 1 132 219.91"></svg:path>`,
})
export class PhChartPolarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phChartScatterIcon],svg[ph-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path>`,
})
export class PhChartScatterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
