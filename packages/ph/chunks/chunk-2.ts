import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingThinIcon],svg[ph-battery-charging-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-116.6 29.9a4 4 0 0 1 .18 3.89l-16 32A4 4 0 0 1 116 164a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L125.53 132H100a4 4 0 0 1-3.58-5.79l16-32a4 4 0 1 1 7.16 3.58L106.47 124H132a4 4 0 0 1 3.4 1.9"></svg:path>`,
})
export class PhBatteryChargingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalIcon],svg[ph-battery-charging-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150.81 131.79a8 8 0 0 1 .35 7.79l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 6.81 3.79M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryChargingVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalBoldIcon],svg[ph-battery-charging-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.21 133.69a12 12 0 0 1 .52 11.68l-16 32a12 12 0 1 1-21.46-10.74l7.31-14.63H112a12 12 0 0 1-10.73-17.37l16-32a12 12 0 1 1 21.46 10.74L131.42 128H144a12 12 0 0 1 10.21 5.69M104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24m100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhBatteryChargingVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalDuotoneIcon],svg[ph-battery-charging-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M150.81 131.79a8 8 0 0 1 .35 7.79l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 6.81 3.79M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBatteryChargingVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalFillIcon],svg[ph-battery-charging-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 32H80a24 24 0 0 0-24 24v168a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m-24.84 107.58l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 7.16 11.58M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBatteryChargingVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalLightIcon],svg[ph-battery-charging-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.1 132.85a6 6 0 0 1 .27 5.83l-16 32a6 6 0 1 1-10.74-5.36L134.29 142H112a6 6 0 0 1-5.37-8.68l16-32a6 6 0 0 1 10.74 5.36L121.71 130H144a6 6 0 0 1 5.1 2.85M96 14h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m102 42v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhBatteryChargingVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryChargingVerticalThinIcon],svg[ph-battery-charging-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.4 133.9a4 4 0 0 1 .18 3.89l-16 32A4 4 0 0 1 128 172a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L137.53 140H112a4 4 0 0 1-3.58-5.79l16-32a4 4 0 1 1 7.16 3.58L118.47 132H144a4 4 0 0 1 3.4 1.9M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryChargingVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyIcon],svg[ph-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryEmptyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyBoldIcon],svg[ph-battery-empty-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryEmptyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyDuotoneIcon],svg[ph-battery-empty-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryEmptyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyFillIcon],svg[ph-battery-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryEmptyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyLightIcon],svg[ph-battery-empty-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryEmptyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryEmptyThinIcon],svg[ph-battery-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullIcon],svg[ph-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-24-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryFullIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullBoldIcon],svg[ph-battery-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-16-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryFullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullDuotoneIcon],svg[ph-battery-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-24-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryFullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullFillIcon],svg[ph-battery-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-16-80v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h136a8 8 0 0 1 8 8m64 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullLightIcon],svg[ph-battery-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm-28-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryFullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryFullThinIcon],svg[ph-battery-full-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm-32-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryFullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighIcon],svg[ph-battery-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-64-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighBoldIcon],svg[ph-battery-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighDuotoneIcon],svg[ph-battery-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm-64-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighFillIcon],svg[ph-battery-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8m72-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighLightIcon],svg[ph-battery-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm-68-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryHighThinIcon],svg[ph-battery-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm-72-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowIcon],svg[ph-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM64 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowBoldIcon],svg[ph-battery-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4ZM64 104v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowDuotoneIcon],svg[ph-battery-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM64 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowFillIcon],svg[ph-battery-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8m152-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowLightIcon],svg[ph-battery-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10ZM62 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryLowThinIcon],svg[ph-battery-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12ZM60 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumIcon],svg[ph-battery-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM104 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumBoldIcon],svg[ph-battery-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-96-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBatteryMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumDuotoneIcon],svg[ph-battery-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM104 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-40 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhBatteryMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumFillIcon],svg[ph-battery-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8m112-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumLightIcon],svg[ph-battery-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10ZM102 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-40 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m192 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBatteryMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryMediumThinIcon],svg[ph-battery-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12ZM100 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-40 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m192 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBatteryMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusIcon],svg[ph-battery-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 128a8 8 0 0 1-8 8h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 8 8m72-48v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusBoldIcon],svg[ph-battery-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 128a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12H92a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m72-48v96a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h168a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4Zm44 12a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBatteryPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusDuotoneIcon],svg[ph-battery-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 128a8 8 0 0 1-8 8h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 8 8m72-48v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhBatteryPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusFillIcon],svg[ph-battery-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-56 80h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 0 16m112-40v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusLightIcon],svg[ph-battery-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 128a6 6 0 0 1-6 6h-22v22a6 6 0 0 1-12 0v-22H88a6 6 0 0 1 0-12h22v-22a6 6 0 0 1 12 0v22h22a6 6 0 0 1 6 6m72-48v96a22 22 0 0 1-22 22H32a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h168a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H32a10 10 0 0 0-10 10v96a10 10 0 0 0 10 10h168a10 10 0 0 0 10-10Zm38 10a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBatteryPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusThinIcon],svg[ph-battery-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 128a4 4 0 0 1-4 4h-24v24a4 4 0 0 1-8 0v-24H88a4 4 0 0 1 0-8h24v-24a4 4 0 0 1 8 0v24h24a4 4 0 0 1 4 4m72-48v96a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h168a12 12 0 0 0 12-12Zm36 12a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBatteryPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalIcon],svg[ph-battery-plus-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-28 76h-20v-20a8 8 0 0 0-16 0v20h-20a8 8 0 0 0 0 16h20v20a8 8 0 0 0 16 0v-20h20a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhBatteryPlusVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalBoldIcon],svg[ph-battery-plus-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-28 68h-12v-12a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v12a12 12 0 0 0 24 0v-12h12a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryPlusVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalDuotoneIcon],svg[ph-battery-plus-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-28 76h-20v-20a8 8 0 0 0-16 0v20h-20a8 8 0 0 0 0 16h20v20a8 8 0 0 0 16 0v-20h20a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryPlusVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalFillIcon],svg[ph-battery-plus-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-36 84a8 8 0 0 0-8-8h-20v-20a8 8 0 0 0-16 0v20h-20a8 8 0 0 0 0 16h20v20a8 8 0 0 0 16 0v-20h20a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhBatteryPlusVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalLightIcon],svg[ph-battery-plus-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-30 78h-22v-22a6 6 0 0 0-12 0v22h-22a6 6 0 0 0 0 12h22v22a6 6 0 0 0 12 0v-22h22a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryPlusVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusVerticalThinIcon],svg[ph-battery-plus-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-32 80h-24v-24a4 4 0 0 0-8 0v24h-24a4 4 0 0 0 0 8h24v24a4 4 0 0 0 8 0v-24h24a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryPlusVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyIcon],svg[ph-battery-vertical-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyBoldIcon],svg[ph-battery-vertical-empty-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyDuotoneIcon],svg[ph-battery-vertical-empty-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBatteryVerticalEmptyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyFillIcon],svg[ph-battery-vertical-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyLightIcon],svg[ph-battery-vertical-empty-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalEmptyThinIcon],svg[ph-battery-vertical-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryVerticalEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullIcon],svg[ph-battery-vertical-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhBatteryVerticalFullIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullBoldIcon],svg[ph-battery-vertical-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 12h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalFullBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullDuotoneIcon],svg[ph-battery-vertical-full-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalFullDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullFillIcon],svg[ph-battery-vertical-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 8H96a8 8 0 0 0-8 8v136a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryVerticalFullFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullLightIcon],svg[ph-battery-vertical-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 18H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalFullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalFullThinIcon],svg[ph-battery-vertical-full-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 20H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalFullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighIcon],svg[ph-battery-vertical-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 56H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhBatteryVerticalHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighBoldIcon],svg[ph-battery-vertical-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 52h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighDuotoneIcon],svg[ph-battery-vertical-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 56H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighFillIcon],svg[ph-battery-vertical-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m72 96H96a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a8 8 0 0 0-8-8m40-48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighLightIcon],svg[ph-battery-vertical-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 58H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalHighThinIcon],svg[ph-battery-vertical-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 60H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowIcon],svg[ph-battery-vertical-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 136H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhBatteryVerticalLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowBoldIcon],svg[ph-battery-vertical-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 132h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowDuotoneIcon],svg[ph-battery-vertical-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 136H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowFillIcon],svg[ph-battery-vertical-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m72 176H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m40-128v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryVerticalLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowLightIcon],svg[ph-battery-vertical-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 138H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalLowThinIcon],svg[ph-battery-vertical-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 140H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumIcon],svg[ph-battery-vertical-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 32H80a24 24 0 0 0-24 24v168a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 192a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-16-24a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m80 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBatteryVerticalMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumBoldIcon],svg[ph-battery-vertical-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 12a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m112 48v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm-24 92h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m0 40h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBatteryVerticalMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumDuotoneIcon],svg[ph-battery-vertical-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 96H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m0 40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBatteryVerticalMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumFillIcon],svg[ph-battery-vertical-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-24 88H96a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBatteryVerticalMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumLightIcon],svg[ph-battery-vertical-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 8a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m108 48v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Zm-26 98H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 40H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBatteryVerticalMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryVerticalMediumThinIcon],svg[ph-battery-vertical-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-28 100H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 40H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBatteryVerticalMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningIcon],svg[ph-battery-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-32-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm-92 52a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28a8 8 0 0 0 8 8m0 12a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBatteryWarningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningBoldIcon],svg[ph-battery-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm56-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-156 12v-16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m28 36a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBatteryWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningDuotoneIcon],svg[ph-battery-warning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8Zm48-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-148 28V96a8 8 0 0 1 16 0v28a8 8 0 0 1-16 0m20 32a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhBatteryWarningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningFillIcon],svg[ph-battery-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-92 32a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m140-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhBatteryWarningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningLightIcon],svg[ph-battery-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-144 28V96a6 6 0 0 1 12 0v28a6 6 0 0 1-12 0m16 32a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBatteryWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningThinIcon],svg[ph-battery-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-140 28V96a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0m12 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBatteryWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalIcon],svg[ph-battery-warning-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m8 24a12 12 0 1 0 12 12a12 12 0 0 0-12-12M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBatteryWarningVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalBoldIcon],svg[ph-battery-warning-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 136v-36a12 12 0 0 1 24 0v36a12 12 0 0 1-24 0m12 24a16 16 0 1 0 16 16a16 16 0 0 0-16-16M104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24m100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhBatteryWarningVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalDuotoneIcon],svg[ph-battery-warning-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v168a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Zm-56 88a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m0 16a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhBatteryWarningVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalFillIcon],svg[ph-battery-warning-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-80 80a8 8 0 0 0 16 0V96a8 8 0 0 0-16 0Zm20 36a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhBatteryWarningVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalLightIcon],svg[ph-battery-warning-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V96a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10M96 14h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m102 42v168a22 22 0 0 1-22 22H80a22 22 0 0 1-22-22V56a22 22 0 0 1 22-22h96a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H80a10 10 0 0 0-10 10v168a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhBatteryWarningVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBatteryWarningVerticalThinIcon],svg[ph-battery-warning-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhBatteryWarningVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallIcon],svg[ph-beach-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m81.7 71.3a199.8 199.8 0 0 0-40.94-8.06a199.8 199.8 0 0 0-8.06-40.94a88.57 88.57 0 0 1 49 49M216 128a87.8 87.8 0 0 1-4.28 27.12a200.3 200.3 0 0 0-29.16-49.93a183 183 0 0 1 32.31 8.75A88 88 0 0 1 216 128m-73.94-86.87a183 183 0 0 1 8.75 32.31a200.3 200.3 0 0 0-49.93-29.16a88.05 88.05 0 0 1 41.18-3.15M80.44 54a183.9 183.9 0 0 1 61.25 32.64A200.2 200.2 0 0 0 40.41 119.5A88.11 88.11 0 0 1 80.44 54m-39.77 84.86a184.08 184.08 0 0 1 112.88-36.41a184.08 184.08 0 0 1-36.41 112.88a88.18 88.18 0 0 1-76.47-76.47m95.83 76.73a200.2 200.2 0 0 0 32.87-101.28A183.9 183.9 0 0 1 202 175.56a88.11 88.11 0 0 1-65.5 40.03"></svg:path>`,
})
export class PhBeachBallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallBoldIcon],svg[ph-beach-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m84 108a84.3 84.3 0 0 1-1.32 14.74a205 205 0 0 0-18.52-31.49a177 177 0 0 1 19.08 5.62A85 85 0 0 1 212 128m-9.61-38.94a204 204 0 0 0-30-5.47a204 204 0 0 0-5.47-30a84.53 84.53 0 0 1 35.47 35.47m-63.26-44.3a177 177 0 0 1 5.62 19.08a205 205 0 0 0-31.49-18.52a82.5 82.5 0 0 1 25.87-.56m-58.06 13.6a179.8 179.8 0 0 1 49.8 25.06a204.2 204.2 0 0 0-85.23 28.05a84.23 84.23 0 0 1 35.43-53.11M45 140.65a180.2 180.2 0 0 1 104.62-34.22a180.2 180.2 0 0 1-34.22 104.62a84.22 84.22 0 0 1-70.4-70.4m99.58 69.71a204.2 204.2 0 0 0 28.05-85.23a179.8 179.8 0 0 1 25.06 49.8a84.23 84.23 0 0 1-53.16 35.43Z"></svg:path>`,
})
export class PhBeachBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallDuotoneIcon],svg[ph-beach-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M161.23 93.36a191.1 191.1 0 0 0-82-48.09a96.4 96.4 0 0 1 68.68-11.2a191.9 191.9 0 0 1 13.32 59.29m60.7 14.7a192.2 192.2 0 0 0-59.29-13.29a191 191 0 0 1 48.09 82a96.37 96.37 0 0 0 11.2-68.67ZM32.27 135.19a96 96 0 0 0 88.54 88.54a191.56 191.56 0 0 0 40.5-129a191.6 191.6 0 0 0-129.04 40.46" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m81.7 71.3a199.8 199.8 0 0 0-40.94-8.06a199.8 199.8 0 0 0-8.06-40.94a88.57 88.57 0 0 1 49 49M216 128a87.8 87.8 0 0 1-4.28 27.12a200.3 200.3 0 0 0-29.16-49.93a183 183 0 0 1 32.31 8.75A88 88 0 0 1 216 128m-73.94-86.87a183 183 0 0 1 8.75 32.31a200.3 200.3 0 0 0-49.93-29.16a88.05 88.05 0 0 1 41.18-3.15M80.44 54a183.9 183.9 0 0 1 61.25 32.64A200.2 200.2 0 0 0 40.41 119.5A88.11 88.11 0 0 1 80.44 54m-39.77 84.86a184.08 184.08 0 0 1 112.88-36.41a184.08 184.08 0 0 1-36.41 112.88a88.18 88.18 0 0 1-76.47-76.47m95.83 76.73a200.2 200.2 0 0 0 32.87-101.28A183.9 183.9 0 0 1 202 175.56a88.11 88.11 0 0 1-65.5 40.03"></svg:path></svg:g>`,
})
export class PhBeachBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallFillIcon],svg[ph-beach-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m83.44 76A196 196 0 0 0 165 91a196 196 0 0 0-9-46.44A88.43 88.43 0 0 1 211.44 100M85 51.24a188.3 188.3 0 0 1 67.3 39.21a196.3 196.3 0 0 0-112.22 34.06A88.07 88.07 0 0 1 85 51.24m46.48 164.68a196.3 196.3 0 0 0 34.06-112.23A188.3 188.3 0 0 1 204.76 171a88.07 88.07 0 0 1-73.27 44.92Z"></svg:path>`,
})
export class PhBeachBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallLightIcon],svg[ph-beach-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m85 72.45a198 198 0 0 0-46.09-9.37A198 198 0 0 0 157.55 43A90.47 90.47 0 0 1 213 98.45m-69.48-59.11a186.6 186.6 0 0 1 10.11 39a198.5 198.5 0 0 0-58.48-34.13a90.17 90.17 0 0 1 48.37-4.87M80.15 51.81A186.1 186.1 0 0 1 147 88.47a198.3 198.3 0 0 0-108.92 35a90.05 90.05 0 0 1 42.07-71.66M38.55 138a186.16 186.16 0 0 1 117-37.46a186.16 186.16 0 0 1-37.46 117A90.18 90.18 0 0 1 38.55 138m94 79.94a198.33 198.33 0 0 0 35-108.93a186.2 186.2 0 0 1 36.66 66.89a90.05 90.05 0 0 1-71.66 41.99Zm79.24-57a198.5 198.5 0 0 0-34.11-58.48a186.6 186.6 0 0 1 39 10.11a90.17 90.17 0 0 1-4.87 48.37Z"></svg:path>`,
})
export class PhBeachBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeachBallThinIcon],svg[ph-beach-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m88.14 73.64A195 195 0 0 0 165 91a195 195 0 0 0-10.68-51.1a92.33 92.33 0 0 1 61.82 61.74M145 37.58a187.5 187.5 0 0 1 11.3 45.68a196.4 196.4 0 0 0-66.63-38.88A91.3 91.3 0 0 1 128 36a92.4 92.4 0 0 1 17 1.58M79.86 49.63a188.1 188.1 0 0 1 72.45 40.82A196.2 196.2 0 0 0 36 127.39a92 92 0 0 1 43.86-77.76M36.44 137a188.17 188.17 0 0 1 121-38.48a188.17 188.17 0 0 1-38.48 121A92.17 92.17 0 0 1 36.44 137m92.17 83a196.2 196.2 0 0 0 36.94-116.3a188.1 188.1 0 0 1 40.82 72.45A92 92 0 0 1 128.61 220m83-53.66a196.4 196.4 0 0 0-38.87-66.64a187.5 187.5 0 0 1 45.68 11.3a92.4 92.4 0 0 1 1.58 17a91.3 91.3 0 0 1-8.38 38.33Z"></svg:path>`,
})
export class PhBeachBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieIcon],svg[ph-beanie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93a28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M116 36a12 12 0 1 1 12 12a12 12 0 0 1-12-12m12 28a80.09 80.09 0 0 1 80 80v16H48v-16a80.09 80.09 0 0 1 80-80m-8 112v32H80v-32Zm16 0h40v32h-40Zm-96 0h24v32H40Zm176 32h-24v-32h24z"></svg:path>`,
})
export class PhBeanieIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieBoldIcon],svg[ph-beanie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160v-16a100.17 100.17 0 0 0-70.52-95.56a32 32 0 1 0-59 0A100.17 100.17 0 0 0 28 144v16a20 20 0 0 0-8 16v32a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20v-32a20 20 0 0 0-8-16M120 36a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 32a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76m-12 112v24H84v-24Zm24 0h32v24h-32Zm-96 0h16v24H44Zm168 24h-16v-24h16Z"></svg:path>`,
})
export class PhBeanieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieDuotoneIcon],svg[ph-beanie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 144v24H40v-24a88 88 0 0 1 176 0" opacity=".2"></svg:path><svg:path d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93a28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M116 36a12 12 0 1 1 12 12a12 12 0 0 1-12-12m12 28a80.09 80.09 0 0 1 80 80v16H48v-16a80.09 80.09 0 0 1 80-80m-8 112v32H80v-32Zm16 0h40v32h-40Zm-96 0h24v32H40Zm176 32h-24v-32h24z"></svg:path></svg:g>`,
})
export class PhBeanieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieFillIcon],svg[ph-beanie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93a28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M120 176v32H80v-32Zm16 0h40v32h-40ZM116 36a12 12 0 1 1 12 12a12 12 0 0 1-12-12M40 176h24v32H40Zm176 32h-24v-32h24z"></svg:path>`,
})
export class PhBeanieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieLightIcon],svg[ph-beanie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 163.37V144a94.17 94.17 0 0 0-73.7-91.79a26 26 0 1 0-40.6 0A94.17 94.17 0 0 0 34 144v19.37A14 14 0 0 0 26 176v32a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14v-32a14 14 0 0 0-8-12.63M114 36a14 14 0 1 1 14 14a14 14 0 0 1-14-14m14 26a82.1 82.1 0 0 1 82 82v18H46v-18a82.1 82.1 0 0 1 82-82m-6 112v36H78v-36Zm12 0h44v36h-44Zm-96 34v-32a2 2 0 0 1 2-2h26v36H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-26v-36h26a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBeanieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeanieThinIcon],svg[ph-beanie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 164.7V144a92.15 92.15 0 0 0-75.57-90.53a24 24 0 1 0-32.86 0A92.15 92.15 0 0 0 36 144v20.7a12 12 0 0 0-8 11.3v32a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-32a12 12 0 0 0-8-11.3M112 36a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 24a84.09 84.09 0 0 1 84 84v20H44v-20a84.09 84.09 0 0 1 84-84m-4 112v40H76v-40Zm8 0h48v40h-48Zm-96 36v-32a4 4 0 0 1 4-4h28v40H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4h-28v-40h28a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBeanieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedIcon],svg[ph-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z"></svg:path>`,
})
export class PhBedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedBoldIcon],svg[ph-bed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 68H36V48a12 12 0 0 0-24 0v160a12 12 0 0 0 24 0v-28h196v28a12 12 0 0 0 24 0v-96a44.05 44.05 0 0 0-44-44m-112 88H36V92h64Zm132 0H124V92h88a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhBedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedDuotoneIcon],svg[ph-bed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 112v56H112V80h104a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z"></svg:path></svg:g>`,
})
export class PhBedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedFillIcon],svg[ph-bed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Z"></svg:path>`,
})
export class PhBedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedLightIcon],svg[ph-bed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74H30V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-34h212v34a6 6 0 0 0 12 0v-96a38 38 0 0 0-38-38M30 86h76v76H30Zm88 76V86h98a26 26 0 0 1 26 26v50Z"></svg:path>`,
})
export class PhBedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBedThinIcon],svg[ph-bed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76H28V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-36h216v36a4 4 0 0 0 8 0v-96a36 36 0 0 0-36-36M28 84h80v80H28Zm88 80V84h100a28 28 0 0 1 28 28v52Z"></svg:path>`,
})
export class PhBedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleIcon],svg[ph-beer-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 42.34l-32-32a8 8 0 0 0-11.32 11.32l1.48 1.47l-55.17 41.38l-38.22 7.65a8.05 8.05 0 0 0-4.09 2.18L23 157.66a24 24 0 0 0 0 33.94L64.4 233a24 24 0 0 0 33.94 0l83.32-83.31a8 8 0 0 0 2.18-4.09l7.65-38.22l41.38-55.17l1.47 1.48a8 8 0 0 0 11.32-11.32ZM96 107.31L148.69 160L104 204.69L51.31 152ZM81.37 224a7.94 7.94 0 0 1-5.65-2.34l-41.38-41.38a8 8 0 0 1 0-11.31l5.66-5.66L92.69 216L87 221.66a8 8 0 0 1-5.63 2.34M177.6 99.2a7.9 7.9 0 0 0-1.44 3.23l-7.53 37.63l-8.63 8.63L107.31 96l8.63-8.63l37.63-7.53a7.9 7.9 0 0 0 3.23-1.44l58.45-43.84l6.19 6.19Z"></svg:path>`,
})
export class PhBeerBottleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleBoldIcon],svg[ph-beer-bottle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.49 39.51l-32-32a12 12 0 0 0-18.55 15L147 60.77l-37.33 7.46a12.1 12.1 0 0 0-6.14 3.28L20.2 154.83a28 28 0 0 0 0 39.6l41.37 41.37a28 28 0 0 0 39.6 0l83.32-83.31a12.1 12.1 0 0 0 3.28-6.14l7.46-37.35l38.23-51a12 12 0 0 0 15-18.55ZM112 191l-47-47l31-31l47 47Zm-30.63 29a4 4 0 0 1-2.83-1.17l-41.37-41.37a4 4 0 0 1 0-5.66L48 161l47 47l-10.8 10.83a4 4 0 0 1-2.83 1.17m93-123.2a12 12 0 0 0-2.17 4.85l-7.2 36.43l-5 4.92l-47-47l5-5l36.43-7.28a12 12 0 0 0 4.85-2.17l55.67-41.76l1.29 1.29Z"></svg:path>`,
})
export class PhBeerBottleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleDuotoneIcon],svg[ph-beer-bottle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m160 160l-56 56l-64-64l56-56Z" opacity=".2"></svg:path><svg:path d="m245.66 42.34l-32-32a8 8 0 0 0-11.32 11.32l1.48 1.47l-55.17 41.38l-38.22 7.65a8.05 8.05 0 0 0-4.09 2.18L23 157.66a24 24 0 0 0 0 33.94L64.4 233a24 24 0 0 0 33.94 0l83.32-83.31a8 8 0 0 0 2.18-4.09l7.65-38.22l41.38-55.17l1.47 1.48a8 8 0 0 0 11.32-11.32ZM104 204.69L51.31 152L96 107.31L148.69 160ZM81.37 224a7.94 7.94 0 0 1-5.65-2.34l-41.38-41.38a8 8 0 0 1 0-11.31l5.66-5.66L92.69 216L87 221.66a8 8 0 0 1-5.63 2.34M177.6 99.2a7.9 7.9 0 0 0-1.44 3.23l-7.53 37.63l-8.63 8.63L107.31 96l8.63-8.63l37.63-7.53a7.9 7.9 0 0 0 3.23-1.44l58.45-43.84l6.19 6.19Z"></svg:path></svg:g>`,
})
export class PhBeerBottleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleFillIcon],svg[ph-beer-bottle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 42.34l-32-32a8 8 0 0 0-11.32 11.32l1.48 1.47l-55.17 41.38l-38.22 7.65a8.05 8.05 0 0 0-4.09 2.18L23 157.66a24 24 0 0 0 0 33.94L64.4 233a24 24 0 0 0 33.94 0l83.32-83.31a8 8 0 0 0 2.18-4.09l7.65-38.22l41.38-55.17l1.47 1.48a8 8 0 0 0 11.32-11.32ZM81.37 224a7.94 7.94 0 0 1-5.65-2.34l-41.38-41.38a8 8 0 0 1 0-11.31l5.66-5.66L92.69 216L87 221.66a8 8 0 0 1-5.63 2.34M177.6 99.2a7.9 7.9 0 0 0-1.44 3.23l-7.53 37.63l-8.63 8.63L107.31 96l8.63-8.63l37.63-7.53a7.9 7.9 0 0 0 3.23-1.44l58.45-43.84l6.19 6.19Z"></svg:path>`,
})
export class PhBeerBottleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleLightIcon],svg[ph-beer-bottle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 43.76l-32-32a6 6 0 0 0-8.48 8.48l3.11 3.11l-57.38 43l-38.67 7.74a5.9 5.9 0 0 0-3.06 1.64l-83.32 83.34a22 22 0 0 0 0 31.11l41.38 41.38a22 22 0 0 0 31.11 0l83.31-83.32a5.9 5.9 0 0 0 1.64-3.06l7.74-38.67l43-57.38l3.11 3.11a6 6 0 0 0 8.48-8.48ZM88.44 223.07a10 10 0 0 1-14.14 0L32.93 181.7a10 10 0 0 1 0-14.14l7.07-7.07L95.51 216ZM104 207.51L48.49 152L96 104.49L151.51 160Zm75.2-107.11a5.9 5.9 0 0 0-1.08 2.42L170.47 141L160 151.51L104.49 96L115 85.53l38.22-7.65a5.9 5.9 0 0 0 2.42-1.08l59.84-44.88l8.64 8.64Z"></svg:path>`,
})
export class PhBeerBottleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerBottleThinIcon],svg[ph-beer-bottle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.83 45.17l-32-32a4 4 0 0 0-5.66 5.66l4.74 4.74l-59.58 44.69l-39.11 7.82a4 4 0 0 0-2 1.09l-83.36 83.32a20 20 0 0 0 0 28.28l41.37 41.37a20 20 0 0 0 28.28 0l83.32-83.31a4 4 0 0 0 1.09-2.05l7.82-39.11l44.69-59.58l4.74 4.74a4 4 0 1 0 5.66-5.66m-153 179.31a12 12 0 0 1-17 0l-41.32-41.37a12 12 0 0 1 0-17l8.49-8.45L98.34 216ZM104 210.34L45.66 152L96 101.66L154.34 160Zm76.8-108.74a3.9 3.9 0 0 0-.72 1.62L172.32 142L160 154.34L101.66 96L114 83.68l38.81-7.76a3.9 3.9 0 0 0 1.62-.72l61.22-45.92l11.1 11.1Z"></svg:path>`,
})
export class PhBeerBottleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinIcon],svg[ph-beer-stein-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 104v80a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-80a8 8 0 0 0-8-8m96 16v64a24 24 0 0 1-24 24h-16v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V72c0-30.88 28.71-56 64-56c16.77 0 32.91 5.8 44.82 16H160a40 40 0 0 1 40 40v16h16a24 24 0 0 1 24 24M57 64h125.62A24 24 0 0 0 160 48h-14.26a8 8 0 0 1-5.53-2.22C131.06 37 117.87 32 104 32c-23.18 0-42.57 13.76-47 32m127 144V80H56v128zm40-96a8 8 0 0 0-8-8h-16v80h16a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhBeerSteinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinBoldIcon],svg[ph-beer-stein-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-12V72a44.05 44.05 0 0 0-44-44h-9.73c-12.5-10.22-29.09-16-46.27-16c-37.5 0-68 26.92-68 60v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-4h12a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28M104 36c12.85 0 25 4.62 33.44 12.67a12 12 0 0 0 8.3 3.33H160a20 20 0 0 1 19.6 16H60.28C62.72 50 81.39 36 104 36m76 168H60V92h120Zm40-28a4 4 0 0 1-4 4h-12v-72h12a4 4 0 0 1 4 4Zm-112-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m48 0v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhBeerSteinBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinDuotoneIcon],svg[ph-beer-stein-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 72v136a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V72Z" opacity=".2"></svg:path><svg:path d="M104 104v80a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-80a8 8 0 0 0-8-8m96 16v64a24 24 0 0 1-24 24h-16v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V72c0-30.88 28.71-56 64-56c16.77 0 32.91 5.8 44.82 16H160a40 40 0 0 1 40 40v16h16a24 24 0 0 1 24 24M57 64h125.62A24 24 0 0 0 160 48h-14.26a8 8 0 0 1-5.53-2.22C131.06 37 117.87 32 104 32c-23.18 0-42.57 13.76-47 32m127 144V80H56v128zm40-96a8 8 0 0 0-8-8h-16v80h16a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhBeerSteinDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinFillIcon],svg[ph-beer-stein-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-16V72a40 40 0 0 0-40-40h-11.18c-11.91-10.2-28-16-44.82-16c-35.29 0-64 25.12-64 56v136a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-8h16a24 24 0 0 0 24-24v-64a24 24 0 0 0-24-24m-112 96a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0ZM57 64c4.46-18.24 23.85-32 47-32c13.87 0 27.06 5 36.21 13.78a8 8 0 0 0 5.53 2.22H160a24 24 0 0 1 22.62 16Zm167 112a8 8 0 0 1-8 8h-16v-80h16a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhBeerSteinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinLightIcon],svg[ph-beer-stein-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-18V72a38 38 0 0 0-38-38h-11.93c-11.6-10.2-27.51-16-44.07-16c-34.19 0-62 24.22-62 54v136a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-10h18a22 22 0 0 0 22-22v-64a22 22 0 0 0-22-22M104 30c14.38 0 28.08 5.22 37.59 14.33a6 6 0 0 0 4.15 1.67H160a26 26 0 0 1 25.29 20H54.52C58 45.67 78.86 30 104 30m82 178a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V78h132Zm40-32a10 10 0 0 1-10 10h-18v-84h18a10 10 0 0 1 10 10Zm-124-72v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0m48 0v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhBeerSteinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeerSteinThinIcon],svg[ph-beer-stein-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-20V72a36 36 0 0 0-36-36h-12.69C136 25.81 120.34 20 104 20c-33.08 0-60 23.33-60 52v136a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-12h20a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20M104 28c14.89 0 29.09 5.43 39 14.89a4 4 0 0 0 2.74 1.11H160a28 28 0 0 1 27.71 24H52.22c2.4-22.39 24.7-40 51.78-40m84 180a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V76h136Zm40-32a12 12 0 0 1-12 12h-20v-88h20a12 12 0 0 1 12 12Zm-128-72v80a4 4 0 0 1-8 0v-80a4 4 0 0 1 8 0m48 0v80a4 4 0 0 1-8 0v-80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhBeerSteinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoIcon],svg[ph-behance-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m-24 78a42 42 0 0 1-42 42H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h58a38 38 0 0 1 25.65 66A42 42 0 0 1 136 158m-96-42h50a22 22 0 0 0 0-44H40Zm80 42a26 26 0 0 0-26-26H40v52h54a26 26 0 0 0 26-26m128-6a8 8 0 0 1-8 8h-71a32 32 0 0 0 56.59 11.2a8 8 0 0 1 12.8 9.61A48 48 0 1 1 248 152m-17-8a32 32 0 0 0-62 0Z"></svg:path>`,
})
export class PhBehanceLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoBoldIcon],svg[ph-behance-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.82 121.39A42 42 0 0 0 86 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h58a46 46 0 0 0 27.82-82.61M44 76h42a18 18 0 0 1 0 36H44Zm46 104H44v-44h46a22 22 0 0 1 0 44m66-104a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m44 24a52 52 0 0 0 0 104a51.45 51.45 0 0 0 22.7-5.21a12 12 0 1 0-10.49-21.58A27.7 27.7 0 0 1 200 180a28.05 28.05 0 0 1-25.3-16H240a12 12 0 0 0 12-12a52.06 52.06 0 0 0-52-52m-25.3 40a28 28 0 0 1 50.6 0Z"></svg:path>`,
})
export class PhBehanceLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoDuotoneIcon],svg[ph-behance-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 152h-80a40 40 0 0 1 80 0M94 124h-4a30 30 0 0 0 0-60H32v128h62a34 34 0 0 0 0-68" opacity=".2"></svg:path><svg:path d="M160 80a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m-24 78a42 42 0 0 1-42 42H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h58a38 38 0 0 1 25.65 66A42 42 0 0 1 136 158m-96-42h50a22 22 0 0 0 0-44H40Zm80 42a26 26 0 0 0-26-26H40v52h54a26 26 0 0 0 26-26m128-6a8 8 0 0 1-8 8h-71a32 32 0 0 0 56.59 11.2a8 8 0 0 1 12.8 9.61A48 48 0 1 1 248 152m-17-8a32 32 0 0 0-62 0Z"></svg:path></svg:g>`,
})
export class PhBehanceLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoFillIcon],svg[ph-behance-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 120H64V96h28a12 12 0 0 1 0 24m4 16H64v32h32a16 16 0 0 0 0-32m80-16a24 24 0 0 0-22.62 16h45.24A24 24 0 0 0 176 120m64-64v144a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16m-96 32a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m-16 64a32 32 0 0 0-14.13-26.53A28 28 0 0 0 92 80H56a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8h40a32 32 0 0 0 32-32m88-8a40 40 0 1 0-13.54 30a8 8 0 0 0-10.59-12a24 24 0 0 1-38.49-10H208a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhBehanceLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoLightIcon],svg[ph-behance-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112.15 122.36A36 36 0 0 0 90 58H32a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h62a40 40 0 0 0 18.15-75.64M38 70h52a24 24 0 0 1 0 48H38Zm56 116H38v-56h56a28 28 0 0 1 0 56m68-106a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6m38 26a46 46 0 1 0 36.8 73.61a6 6 0 0 0-9.6-7.21a34 34 0 0 1-60.67-14.4H240a6 6 0 0 0 6-6a46.06 46.06 0 0 0-46-46m-33.47 40a34 34 0 0 1 66.94 0Z"></svg:path>`,
})
export class PhBehanceLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBehanceLogoThinIcon],svg[ph-behance-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.16 122.74A34 34 0 0 0 90 60H32a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h62a38 38 0 0 0 14.16-73.26M36 68h54a26 26 0 0 1 0 52H36Zm58 120H36v-60h58a30 30 0 0 1 0 60m70-108a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m36 28a44 44 0 1 0 35.2 70.41a4 4 0 0 0-6.4-4.81a36 36 0 0 1-64.58-17.6H240a4 4 0 0 0 4-4a44.05 44.05 0 0 0-44-44m-35.78 40a36 36 0 0 1 71.56 0Z"></svg:path>`,
})
export class PhBehanceLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellIcon],svg[ph-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></svg:path>`,
})
export class PhBellIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellBoldIcon],svg[ph-bell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h36.18a44 44 0 0 0 87.64 0H208a19.77 19.77 0 0 0 17.31-10a20.08 20.08 0 0 0-.02-20.07M128 212a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16m-73.34-40C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68Z"></svg:path>`,
})
export class PhBellBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellDuotoneIcon],svg[ph-bell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></svg:path></svg:g>`,
})
export class PhBellDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellFillIcon],svg[ph-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216"></svg:path>`,
})
export class PhBellFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellLightIcon],svg[ph-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.07 176.94C214.41 167.2 206 139.73 206 104a78 78 0 1 0-156 0c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.48a38 38 0 0 0 75 0H208a14 14 0 0 0 12.06-21.06ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218m81.71-33a1.9 1.9 0 0 1-1.7 1H48a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.57-13 15.7-43.31 15.7-79a66 66 0 1 1 132 0c0 35.68 8.14 65.95 15.71 79a2 2 0 0 1 0 2"></svg:path>`,
})
export class PhBellLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingIcon],svg[ph-bell-ringing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 71.1a8 8 0 0 1-10.78-3.42a94.13 94.13 0 0 0-33.46-36.91a8 8 0 1 1 8.54-13.54a111.46 111.46 0 0 1 39.12 43.09A8 8 0 0 1 224 71.1M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.54a111.46 111.46 0 0 0-39.12 43.09A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200h-40.8a40 40 0 0 1-78.4 0H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M150.62 200h-45.24a24 24 0 0 0 45.24 0M208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z"></svg:path>`,
})
export class PhBellRingingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingBoldIcon],svg[ph-bell-ringing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.81 74.65A11.86 11.86 0 0 1 220.3 76a12 12 0 0 1-10.67-6.47a90.1 90.1 0 0 0-32-35.38a12 12 0 1 1 12.8-20.29a115.25 115.25 0 0 1 40.54 44.62a12 12 0 0 1-5.16 16.17M46.37 69.53a90.1 90.1 0 0 1 32-35.38A12 12 0 1 0 65.6 13.86a115.25 115.25 0 0 0-40.54 44.62a12 12 0 0 0 5.13 16.17A11.86 11.86 0 0 0 35.7 76a12 12 0 0 0 10.67-6.47m173.51 98.35A20 20 0 0 1 204 200h-32.19a44 44 0 0 1-87.62 0H52a20 20 0 0 1-15.91-32.12c7.17-9.33 15.73-26.62 15.88-55.94A76 76 0 0 1 204 112c.15 29.26 8.71 46.55 15.88 55.88M147.6 200h-39.2a20 20 0 0 0 39.2 0m48.74-24c-8.16-13-16.19-33.57-16.34-63.94A52 52 0 1 0 76 112c-.15 30.42-8.18 51-16.34 64Z"></svg:path>`,
})
export class PhBellRingingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingDuotoneIcon],svg[ph-bell-ringing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 147.81 56 112a72 72 0 0 1 144 0c0 35.82 8.3 56.6 14.9 68a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M224 71.1a8 8 0 0 1-10.78-3.42a94.13 94.13 0 0 0-33.46-36.91a8 8 0 1 1 8.54-13.54a111.46 111.46 0 0 1 39.12 43.09A8 8 0 0 1 224 71.1M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.54a111.46 111.46 0 0 0-39.12 43.09A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200h-40.8a40 40 0 0 1-78.4 0H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M150.62 200h-45.24a24 24 0 0 0 45.24 0M208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z"></svg:path></svg:g>`,
})
export class PhBellRingingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingFillIcon],svg[ph-bell-ringing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 71.1a8 8 0 0 1-10.78-3.42a94.13 94.13 0 0 0-33.46-36.91a8 8 0 1 1 8.54-13.54a111.46 111.46 0 0 1 39.12 43.09A8 8 0 0 1 224 71.1M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.54a111.46 111.46 0 0 0-39.12 43.09A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200h-40.8a40 40 0 0 1-78.4 0H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M150.62 200h-45.24a24 24 0 0 0 45.24 0"></svg:path>`,
})
export class PhBellRingingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingLightIcon],svg[ph-bell-ringing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.05 69.33a6 6 0 0 1-8.05-2.57a96 96 0 0 0-34.2-37.68a6 6 0 0 1 6.4-10.15a109.26 109.26 0 0 1 38.41 42.31a6 6 0 0 1-2.56 8.09M41 66.76a96 96 0 0 1 34.2-37.68a6 6 0 0 0-6.4-10.15a109.26 109.26 0 0 0-38.41 42.31A6 6 0 1 0 41 66.76m179 110.18A14 14 0 0 1 208 198h-42.5a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C45.13 161.09 50 138.63 50 112a78 78 0 0 1 156 0c0 27 4.74 48.86 14.08 64.94ZM153.29 198h-50.58a26 26 0 0 0 50.58 0m56.42-15C199.29 165 194 141.15 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 .01-2"></svg:path>`,
})
export class PhBellRingingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellRingingThinIcon],svg[ph-bell-ringing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.13 67.55a3.94 3.94 0 0 1-1.84.45a4 4 0 0 1-3.55-2.16a99.4 99.4 0 0 0-34.87-38.46a4 4 0 1 1 4.26-6.76a107.34 107.34 0 0 1 37.71 41.54a4 4 0 0 1-1.71 5.39M39.26 65.84a99.4 99.4 0 0 1 34.87-38.46a4 4 0 0 0-4.26-6.76a107.34 107.34 0 0 0-37.71 41.54a4 4 0 0 0 1.71 5.39a3.94 3.94 0 0 0 1.84.45a4 4 0 0 0 3.55-2.16M218.36 178A12 12 0 0 1 208 196h-44.23a36 36 0 0 1-71.54 0H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66m-62.65 18h-55.42a28 28 0 0 0 55.42 0m55.73-14C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4a3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2a4 4 0 0 0 .01-4"></svg:path>`,
})
export class PhBellRingingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleIcon],svg[ph-bell-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path>`,
})
export class PhBellSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleBoldIcon],svg[ph-bell-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h160a19.77 19.77 0 0 0 17.31-10a20.08 20.08 0 0 0-.02-20.07M54.66 172C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBellSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleDuotoneIcon],svg[ph-bell-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path></svg:g>`,
})
export class PhBellSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleFillIcon],svg[ph-bell-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.81-48.06C216.25 166.38 208 139.33 208 104a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.8-24.06Z"></svg:path>`,
})
export class PhBellSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleLightIcon],svg[ph-bell-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 224a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m54.11-33a13.83 13.83 0 0 1-12.1 7H48a14 14 0 0 1-12.06-21.06C41.59 167.2 50 139.74 50 104a78 78 0 1 1 156 0c0 35.73 8.42 63.2 14.08 72.94a13.9 13.9 0 0 1 .03 14.06m-10.41-8c-7.57-13-15.7-43.32-15.7-79a66 66 0 1 0-132 0c0 35.69-8.14 66-15.71 79a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 0-2"></svg:path>`,
})
export class PhBellSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingIcon],svg[ph-bell-simple-ringing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m59.39-163.68a111.36 111.36 0 0 0-39.12-43.08a8 8 0 1 0-8.54 13.53a94.13 94.13 0 0 1 33.46 36.91a8 8 0 0 0 14.2-7.36M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.53a111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z"></svg:path>`,
})
export class PhBellSimpleRingingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingBoldIcon],svg[ph-bell-simple-ringing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 228a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m58.94-169.52a115.25 115.25 0 0 0-40.54-44.62a12 12 0 1 0-12.8 20.29a90.1 90.1 0 0 1 32 35.38A12 12 0 0 0 220.3 76a11.86 11.86 0 0 0 5.51-1.35a12 12 0 0 0 5.13-16.17M46.37 69.53a90.1 90.1 0 0 1 32-35.38A12 12 0 1 0 65.6 13.86a115.25 115.25 0 0 0-40.54 44.62a12 12 0 0 0 5.13 16.17A11.86 11.86 0 0 0 35.7 76a12 12 0 0 0 10.67-6.47m173.51 98.35A20 20 0 0 1 204 200H52a20 20 0 0 1-15.91-32.12c7.17-9.33 15.73-26.62 15.88-55.94A76 76 0 0 1 204 112c.15 29.26 8.71 46.55 15.88 55.88M196.34 176c-8.16-13-16.19-33.57-16.34-63.94A52 52 0 1 0 76 112c-.15 30.42-8.18 51-16.34 64Z"></svg:path>`,
})
export class PhBellSimpleRingingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingDuotoneIcon],svg[ph-bell-simple-ringing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 147.81 56 112a72 72 0 0 1 144 0c0 35.82 8.3 56.6 14.9 68a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m59.39-163.68a111.36 111.36 0 0 0-39.12-43.08a8 8 0 1 0-8.54 13.53a94.13 94.13 0 0 1 33.46 36.91a8 8 0 0 0 14.2-7.36M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.53a111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72m186.1 103.94A16 16 0 0 1 208 200H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94M208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z"></svg:path></svg:g>`,
})
export class PhBellSimpleRingingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingFillIcon],svg[ph-bell-simple-ringing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m59.39-163.68a111.36 111.36 0 0 0-39.12-43.08a8 8 0 1 0-8.54 13.53a94.13 94.13 0 0 1 33.46 36.91a8 8 0 0 0 14.2-7.36M35.71 72a8 8 0 0 0 7.1-4.32a94.13 94.13 0 0 1 33.46-36.91a8 8 0 1 0-8.54-13.53a111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72M208 112a80 80 0 0 0-160 0c0 26.28-4.78 48.39-13.81 63.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.79-24.06C212.78 160.38 208 138.27 208 112"></svg:path>`,
})
export class PhBellSimpleRingingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingLightIcon],svg[ph-bell-simple-ringing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.92 224a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m59.69-162.77a109.23 109.23 0 0 0-38.41-42.3a6 6 0 0 0-6.4 10.14A96 96 0 0 1 215 66.76a6 6 0 1 0 10.65-5.53ZM41 66.76a96 96 0 0 1 34.2-37.69a6 6 0 0 0-6.4-10.14a109.23 109.23 0 0 0-38.41 42.3A6 6 0 1 0 41 66.76m179 110.17A14 14 0 0 1 208 198H48a14 14 0 0 1-12.06-21C45.13 161.08 50 138.62 50 112a78 78 0 0 1 156 0c0 27 4.74 48.84 14.08 64.93Zm-10.37 6C199.29 165 194 141.14 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 .01-2Z"></svg:path>`,
})
export class PhBellSimpleRingingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleRingingThinIcon],svg[ph-bell-simple-ringing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m59.84-161.84a107.34 107.34 0 0 0-37.71-41.54a4 4 0 1 0-4.26 6.76a99.4 99.4 0 0 1 34.87 38.46a4 4 0 0 0 3.55 2.16a3.94 3.94 0 0 0 1.84-.45a4 4 0 0 0 1.71-5.39M39.26 65.84a99.4 99.4 0 0 1 34.87-38.46a4 4 0 0 0-4.26-6.76a107.34 107.34 0 0 0-37.71 41.54a4 4 0 0 0 1.71 5.39a3.94 3.94 0 0 0 1.84.45a4 4 0 0 0 3.55-2.16M218.36 178A12 12 0 0 1 208 196H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66m-6.92 4C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4a3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2a4 4 0 0 0 .01-4"></svg:path>`,
})
export class PhBellSimpleRingingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashIcon],svg[ph-bell-simple-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76L58.82 63.8A79.6 79.6 0 0 0 48 104c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h134.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM48 184c7.7-13.24 16-43.92 16-80a63.65 63.65 0 0 1 6.26-27.62L168.09 184Zm120 40a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m46-44.75a8.1 8.1 0 0 1-2.93.55a8 8 0 0 1-7.44-5.08C196.35 156.19 192 129.75 192 104a64 64 0 0 0-95.57-55.69a8 8 0 0 1-7.9-13.91A80 80 0 0 1 208 104c0 35.35 8.05 58.59 10.52 64.88a8 8 0 0 1-4.52 10.37"></svg:path>`,
})
export class PhBellSimpleSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashBoldIcon],svg[ph-bell-simple-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14l14.8 16.29A83.6 83.6 0 0 0 44 104c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.05 20.07A19.75 19.75 0 0 0 48 196h125.6l25.52 28.07a12 12 0 0 0 17.76-16.14M54.68 172C63.52 154 68 131.14 68 104a59.8 59.8 0 0 1 3.52-20.29L151.78 172ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12M88.89 42.35a12 12 0 0 1 6.37-15.73A84 84 0 0 1 212 104c0 18.68 2.38 34.93 7.07 48.28a12 12 0 1 1-22.64 8C190.83 144.32 188 125.4 188 104a60 60 0 0 0-83.38-55.28a12 12 0 0 1-15.73-6.37"></svg:path>`,
})
export class PhBellSimpleSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashDuotoneIcon],svg[ph-bell-simple-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L58.82 63.8A79.6 79.6 0 0 0 48 104c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h134.64l19.44 21.38a8 8 0 1 0 11.84-10.76ZM48 184c7.7-13.24 16-43.92 16-80a63.65 63.65 0 0 1 6.26-27.62L168.09 184Zm120 40a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m46-44.75a8.1 8.1 0 0 1-2.93.55a8 8 0 0 1-7.44-5.08C196.35 156.19 192 129.75 192 104a64 64 0 0 0-95.57-55.69a8 8 0 0 1-7.9-13.91A80 80 0 0 1 208 104c0 35.35 8.05 58.59 10.52 64.88a8 8 0 0 1-4.52 10.37"></svg:path></svg:g>`,
})
export class PhBellSimpleSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashFillIcon],svg[ph-bell-simple-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.84 192a1.85 1.85 0 0 1-3 .28L83.27 43.19a4 4 0 0 1 .8-6A79.55 79.55 0 0 1 129.17 24c43.83.66 78.63 37.1 78.83 80.92c.14 34.88 8.31 61.54 13.82 71a15.89 15.89 0 0 1 .02 16.08M160 216H96.22a8.19 8.19 0 0 0-8.22 7.47a8 8 0 0 0 8 8.53h63.74a8.19 8.19 0 0 0 8.26-7.47a8 8 0 0 0-8-8.53M53.84 34.62A8 8 0 1 0 42 45.38l16.79 18.47A79.4 79.4 0 0 0 47.93 104c0 35.09-8.15 62-13.7 71.73a16.42 16.42 0 0 0 .09 16.68A15.78 15.78 0 0 0 47.91 200h134.71l19.45 21.38a8 8 0 0 0 11.85-10.76Z"></svg:path>`,
})
export class PhBellSimpleSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashLightIcon],svg[ph-bell-simple-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l17.75 19.56A77.45 77.45 0 0 0 50 104c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h135.53l20 22a6 6 0 0 0 8.88-8.08ZM48 186a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.56-13 15.7-43.31 15.7-79a65.6 65.6 0 0 1 7.78-31.12L172.62 186Zm118 38a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m47.27-46.62a5.9 5.9 0 0 1-2.2.42a6 6 0 0 1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70a66 66 0 0 0-98.55-57.42a6 6 0 1 1-5.93-10.43A78 78 0 0 1 206 104c0 35.7 8.16 59.24 10.66 65.61a6 6 0 0 1-3.39 7.77"></svg:path>`,
})
export class PhBellSimpleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleSlashThinIcon],svg[ph-bell-simple-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.75 60.18L51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.5 75.5 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h136.41L205 218.69a4 4 0 1 0 5.92-5.38ZM48 188a3.89 3.89 0 0 1-3.43-2a4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.6 67.6 0 0 1 9.4-34.51L177.14 188Zm116 36a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m48.53-48.48a3.9 3.9 0 0 1-1.46.28a4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18"></svg:path>`,
})
export class PhBellSimpleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleThinIcon],svg[ph-bell-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m54.38-34a11.84 11.84 0 0 1-10.38 6H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-6.95-8C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZIcon],svg[ph-bell-simple-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m-24-88h-17l23.7-35.56A8 8 0 0 0 144 88h-32a8 8 0 0 0 0 16h17.05l-23.7 35.56A8 8 0 0 0 112 152h32a8 8 0 0 0 0-16m77.84 56a15.8 15.8 0 0 1-13.84 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06M208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path>`,
})
export class PhBellSimpleZIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZBoldIcon],svg[ph-bell-simple-z-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 140a12 12 0 0 1-12 12h-32a12 12 0 0 1-10-18.66L121.58 104H112a12 12 0 1 1 0-24h32a12 12 0 0 1 10 18.66L134.42 128H144a12 12 0 0 1 12 12m69.33 46A19.77 19.77 0 0 1 208 196H48a19.77 19.77 0 0 1-17.31-10a20.08 20.08 0 0 1 .05-20.06C39.39 151 44 129.58 44 104a84 84 0 0 1 168 0c0 25.57 4.59 47 13.27 61.93a20.08 20.08 0 0 1 .07 20.07Zm-24-14c-8.84-18-13.33-40.87-13.33-68a60 60 0 0 0-120 0c0 27.14-4.48 50-13.33 68ZM160 212H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBellSimpleZBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZDuotoneIcon],svg[ph-bell-simple-z-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m-24-88h-17l23.7-35.56A8 8 0 0 0 144 88h-32a8 8 0 0 0 0 16h17.05l-23.7 35.56A8 8 0 0 0 112 152h32a8 8 0 0 0 0-16m77.84 56a15.8 15.8 0 0 1-13.84 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06M208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path></svg:g>`,
})
export class PhBellSimpleZDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZFillIcon],svg[ph-bell-simple-z-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM152 144a8 8 0 0 0-8-8h-17l23.7-35.56A8 8 0 0 0 144 88h-32a8 8 0 0 0 0 16h17.05l-23.7 35.56A8 8 0 0 0 112 152h32a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhBellSimpleZFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZLightIcon],svg[ph-bell-simple-z-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 224a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-22-86h-20.79L149 99.33a6 6 0 0 0-5-9.33h-32a6 6 0 0 0 0 12h20.79L107 140.67a6 6 0 0 0 5 9.33h32a6 6 0 0 0 0-12m76.11 53a13.83 13.83 0 0 1-12.1 7H48a14 14 0 0 1-12.06-21.06C41.59 167.2 50 139.74 50 104a78 78 0 1 1 156 0c0 35.73 8.42 63.2 14.08 72.94a13.9 13.9 0 0 1 .03 14.06m-10.41-8c-7.57-13-15.7-43.32-15.7-79a66 66 0 1 0-132 0c0 35.69-8.14 66-15.71 79a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 0-2"></svg:path>`,
})
export class PhBellSimpleZLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSimpleZThinIcon],svg[ph-bell-simple-z-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 224a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-20-84h-24.53l27.86-41.78A4 4 0 0 0 144 92h-32a4 4 0 0 0 0 8h24.53l-27.86 41.78A4 4 0 0 0 112 148h32a4 4 0 0 0 0-8m74.38 50a11.84 11.84 0 0 1-10.38 6H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-6.95-8C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellSimpleZThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashIcon],svg[ph-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76L58.82 63.8A79.6 79.6 0 0 0 48 104c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.8a40 40 0 0 0 78.4 0h15.44l19.44 21.38a8 8 0 1 0 11.84-10.76ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a63.65 63.65 0 0 1 6.26-27.62L168.09 184Zm166-4.73a8.1 8.1 0 0 1-2.93.55a8 8 0 0 1-7.44-5.08C196.35 156.19 192 129.75 192 104a64 64 0 0 0-95.57-55.69a8 8 0 0 1-7.9-13.91A80 80 0 0 1 208 104c0 35.35 8.05 58.59 10.52 64.88a8 8 0 0 1-4.52 10.37Z"></svg:path>`,
})
export class PhBellSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashBoldIcon],svg[ph-bell-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14l14.8 16.29A83.6 83.6 0 0 0 44 104c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.05 20.07A19.75 19.75 0 0 0 48 196h36.19a44 44 0 0 0 87.62 0h1.79l25.52 28.07a12 12 0 0 0 17.76-16.14M68 104a59.8 59.8 0 0 1 3.52-20.29L151.78 172h-97.1C63.52 154 68 131.14 68 104m60 108a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16M88.89 42.35a12 12 0 0 1 6.37-15.73A84 84 0 0 1 212 104c0 18.68 2.38 34.93 7.07 48.28a12 12 0 1 1-22.64 8C190.83 144.32 188 125.4 188 104a60 60 0 0 0-83.38-55.28a12 12 0 0 1-15.73-6.37"></svg:path>`,
})
export class PhBellSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashDuotoneIcon],svg[ph-bell-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L58.82 63.8A79.6 79.6 0 0 0 48 104c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.8a40 40 0 0 0 78.4 0h15.44l19.44 21.38a8 8 0 1 0 11.84-10.76ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m-80-32c7.7-13.24 16-43.92 16-80a63.65 63.65 0 0 1 6.26-27.62L168.09 184Zm166-4.73a8.1 8.1 0 0 1-2.93.55a8 8 0 0 1-7.44-5.08C196.35 156.19 192 129.75 192 104a64 64 0 0 0-95.57-55.69a8 8 0 0 1-7.9-13.91A80 80 0 0 1 208 104c0 35.35 8.05 58.59 10.52 64.88a8 8 0 0 1-4.52 10.37Z"></svg:path></svg:g>`,
})
export class PhBellSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashFillIcon],svg[ph-bell-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.84 192a1.85 1.85 0 0 1-3 .28L83.27 43.19a4 4 0 0 1 .8-6A79.55 79.55 0 0 1 129.17 24c43.83.66 78.63 37.1 78.83 80.92c.14 34.88 8.31 61.54 13.82 71a15.89 15.89 0 0 1 .02 16.08m-7.92 18.62a8 8 0 0 1-11.85 10.76L182.62 200h-15.46a40 40 0 0 1-78.41 0H47.91a15.78 15.78 0 0 1-13.59-7.59a16.42 16.42 0 0 1-.09-16.68c5.55-9.73 13.7-36.64 13.7-71.73a79.4 79.4 0 0 1 10.86-40.15L42 45.38a8 8 0 1 1 11.84-10.76ZM150.59 200h-45.27a24 24 0 0 0 45.27 0"></svg:path>`,
})
export class PhBellSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashLightIcon],svg[ph-bell-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l17.75 19.56A77.45 77.45 0 0 0 50 104c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.5a38 38 0 0 0 75 0h18l20 22a6 6 0 0 0 8.88-8.08ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218m-80-32a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.56-13 15.7-43.31 15.7-79a65.6 65.6 0 0 1 7.78-31.12L172.62 186Zm165.29-8.62a5.9 5.9 0 0 1-2.2.42a6 6 0 0 1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70a66 66 0 0 0-98.57-57.42a6 6 0 1 1-5.93-10.43A78 78 0 0 1 206 104c0 35.7 8.16 59.24 10.66 65.61a6 6 0 0 1-3.39 7.77Z"></svg:path>`,
})
export class PhBellSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellSlashThinIcon],svg[ph-bell-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.5 75.5 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h44.23a36 36 0 0 0 71.54 0h20.64L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a28 28 0 0 1-27.71-24h55.42A28 28 0 0 1 128 220m-80-32a3.89 3.89 0 0 1-3.43-2a4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.6 67.6 0 0 1 9.4-34.51L177.14 188Zm164.55-12.48a3.9 3.9 0 0 1-1.46.28a4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18Z"></svg:path>`,
})
export class PhBellSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellThinIcon],svg[ph-bell-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.35 178c-5.77-10-14.35-37.87-14.35-74a76 76 0 1 0-152 0c0 36.13-8.59 64-14.36 73.95A12 12 0 0 0 48 196h44.23a36 36 0 0 0 71.54 0H208a12 12 0 0 0 10.35-18M128 220a28 28 0 0 1-27.71-24h55.42A28 28 0 0 1 128 220m83.45-34a3.91 3.91 0 0 1-3.44 2H48a3.91 3.91 0 0 1-3.44-2a4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a68 68 0 1 1 136 0c0 35.31 8 65.17 15.44 78a4 4 0 0 1 .01 4"></svg:path>`,
})
export class PhBellThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZIcon],svg[ph-bell-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 144a8 8 0 0 1-8 8h-32a8 8 0 0 1-6.65-12.44l23.7-35.56H112a8 8 0 0 1 0-16h32a8 8 0 0 1 6.65 12.44L127 136h17a8 8 0 0 1 8 8m69.84 48a15.8 15.8 0 0 1-13.84 8h-40.81a40 40 0 0 1-78.38 0H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06m-71.22 8h-45.24a24 24 0 0 0 45.24 0M208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path>`,
})
export class PhBellZIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZBoldIcon],svg[ph-bell-z-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 140a12 12 0 0 1-12 12h-32a12 12 0 0 1-10-18.66L121.58 104H112a12 12 0 1 1 0-24h32a12 12 0 0 1 10 18.66L134.42 128H144a12 12 0 0 1 12 12m69.33 46A19.77 19.77 0 0 1 208 196h-36.18a44 44 0 0 1-87.64 0H48a19.77 19.77 0 0 1-17.31-10a20.08 20.08 0 0 1 .05-20.06C39.39 151 44 129.58 44 104a84 84 0 0 1 168 0c0 25.57 4.59 47 13.27 61.93a20.08 20.08 0 0 1 .07 20.07Zm-77.73 10h-39.2a20 20 0 0 0 39.2 0m53.74-24c-8.85-18-13.34-40.87-13.34-68a60 60 0 0 0-120 0c0 27.14-4.48 50-13.33 68Z"></svg:path>`,
})
export class PhBellZBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZDuotoneIcon],svg[ph-bell-z-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12" opacity=".2"></svg:path><svg:path d="M152 144a8 8 0 0 1-8 8h-32a8 8 0 0 1-6.65-12.44l23.7-35.56H112a8 8 0 0 1 0-16h32a8 8 0 0 1 6.65 12.44L127 136h17a8 8 0 0 1 8 8m69.84 48a15.8 15.8 0 0 1-13.84 8h-40.81a40 40 0 0 1-78.38 0H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06m-71.22 8h-45.24a24 24 0 0 0 45.24 0M208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"></svg:path></svg:g>`,
})
export class PhBellZDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZFillIcon],svg[ph-bell-z-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06M128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216m16-64h-32a8 8 0 0 1-6.65-12.44l23.7-35.56H112a8 8 0 0 1 0-16h32a8 8 0 0 1 6.65 12.44L127 136h17a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBellZFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZLightIcon],svg[ph-bell-z-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 144a6 6 0 0 1-6 6h-32a6 6 0 0 1-5-9.33L132.79 102H112a6 6 0 0 1 0-12h32a6 6 0 0 1 5 9.33L123.21 138H144a6 6 0 0 1 6 6m70.11 47a13.83 13.83 0 0 1-12.1 7h-42.49a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C41.59 167.2 50 139.74 50 104a78 78 0 1 1 156 0c0 35.73 8.42 63.2 14.08 72.94a13.9 13.9 0 0 1 .03 14.06m-66.82 7h-50.58a26 26 0 0 0 50.58 0m56.41-15c-7.57-13-15.7-43.32-15.7-79a66 66 0 1 0-132 0c0 35.69-8.14 66-15.71 79a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 0-2"></svg:path>`,
})
export class PhBellZLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBellZThinIcon],svg[ph-bell-z-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 144a4 4 0 0 1-4 4h-32a4 4 0 0 1-3.33-6.22L136.53 100H112a4 4 0 0 1 0-8h32a4 4 0 0 1 3.33 6.22L119.47 140H144a4 4 0 0 1 4 4m70.38 46a11.84 11.84 0 0 1-10.38 6h-44.23a36 36 0 0 1-71.54 0H48a12 12 0 0 1-10.35-18C43.42 168 52 140.13 52 104a76 76 0 1 1 152 0c0 36.13 8.59 64 14.36 73.95a11.92 11.92 0 0 1 .02 12.05m-62.67 6h-55.42a28 28 0 0 0 55.42 0m55.72-14C204 169.17 196 139.31 196 104a68 68 0 1 0-136 0c0 35.32-8 65.17-15.44 78a4 4 0 0 0 0 4a3.91 3.91 0 0 0 3.44 2h160a3.91 3.91 0 0 0 3.44-2a4 4 0 0 0-.01-4"></svg:path>`,
})
export class PhBellZThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltIcon],svg[ph-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 160h-56V96h56a8 8 0 0 0 0-16h-58.17A16 16 0 0 0 176 72h-64a16 16 0 0 0-13.83 8H64a8 8 0 0 0-16 0H8a8 8 0 0 0 0 16h40v64H8a8 8 0 0 0 0 16h40a8 8 0 0 0 16 0h34.17a16 16 0 0 0 13.83 8h64a16 16 0 0 0 13.83-8H248a8 8 0 0 0 0-16M64 96h32v64H64Zm48 72V88h64v32h-32a8 8 0 0 0 0 16h32v32Z"></svg:path>`,
})
export class PhBeltIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltBoldIcon],svg[ph-belt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 156h-48v-56h48a12 12 0 0 0 0-24h-52a20 20 0 0 0-16-8h-64a20 20 0 0 0-16 8H67.3a12 12 0 0 0-22.6 0H12a12 12 0 0 0 0 24h32v56H12a12 12 0 0 0 0 24h32.7a12 12 0 0 0 22.6 0H96a20 20 0 0 0 16 8h64a20 20 0 0 0 16-8h52a12 12 0 0 0 0-24M68 100h24v56H68Zm48-8h56v24h-28a12 12 0 0 0 0 24h28v24h-56Z"></svg:path>`,
})
export class PhBeltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltDuotoneIcon],svg[ph-belt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 88h96v80H8Zm176 0v80h64V88Z" opacity=".2"></svg:path><svg:path d="M248 160h-56V96h56a8 8 0 0 0 0-16h-58.16A16 16 0 0 0 176 72h-64a16 16 0 0 0-13.84 8H64a8 8 0 0 0-16 0H8a8 8 0 0 0 0 16h40v64H8a8 8 0 0 0 0 16h40a8 8 0 0 0 16 0h34.16a16 16 0 0 0 13.84 8h64a16 16 0 0 0 13.84-8H248a8 8 0 0 0 0-16M64 96h32v64H64Zm48 72V88h64v32h-32a8 8 0 0 0 0 16h32v32Z"></svg:path></svg:g>`,
})
export class PhBeltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltFillIcon],svg[ph-belt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 80v96a8 8 0 0 1-16 0H8a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h40a8 8 0 0 1 16 0m192 8v80a8 8 0 0 1-8 8h-58.17a16 16 0 0 1-13.83 8h-64a16 16 0 0 1-13.83-8H84a4 4 0 0 1-4-4V84a4 4 0 0 1 4-4h14.17A16 16 0 0 1 112 72h64a16 16 0 0 1 13.83 8H248a8 8 0 0 1 8 8m-80 79.8V136h-32a8 8 0 0 1 0-16h32V88h-64v80h64z"></svg:path>`,
})
export class PhBeltFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltLightIcon],svg[ph-belt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 162h-58V94h58a6 6 0 0 0 0-12h-59.37A14 14 0 0 0 176 74h-64a14 14 0 0 0-12.63 8H62v-2a6 6 0 0 0-12 0v2H8a6 6 0 0 0 0 12h42v68H8a6 6 0 0 0 0 12h42v2a6 6 0 0 0 12 0v-2h37.37a14 14 0 0 0 12.63 8h64a14 14 0 0 0 12.63-8H248a6 6 0 0 0 0-12M62 94h36v68H62Zm114 76h-64a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v34h-34a6 6 0 0 0 0 12h34v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBeltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBeltThinIcon],svg[ph-belt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 164h-60V92h60a4 4 0 0 0 0-8h-60.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H60v-4a4 4 0 0 0-8 0v4H8a4 4 0 0 0 0 8h44v72H8a4 4 0 0 0 0 8h44v4a4 4 0 0 0 8 0v-4h40.7a12 12 0 0 0 11.3 8h64a12 12 0 0 0 11.3-8H248a4 4 0 0 0 0-8M60 92h40v72H60Zm116 80h-64a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v36h-36a4 4 0 0 0 0 8h36v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBeltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveIcon],svg[ph-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.07 144.41A96.68 96.68 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.68 96.68 0 0 0-40.07 56.41A32 32 0 1 0 51.08 146A80.6 80.6 0 0 1 99 93.44a32 32 0 0 0 58.06 0A80.6 80.6 0 0 1 204.92 146a32 32 0 1 0 16.15-1.57ZM56 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-80a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhBezierCurveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveBoldIcon],svg[ph-bezier-curve-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.28 141a100.6 100.6 0 0 0-31.4-49H240a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H16a12 12 0 0 0 0 24h47.12a100.6 100.6 0 0 0-31.4 49A36 36 0 1 0 56 143.74a76.66 76.66 0 0 1 41.15-45.21a36 36 0 0 0 61.7 0A76.66 76.66 0 0 1 200 143.74a36 36 0 1 0 24.28-2.74M40 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m88-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m88 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBezierCurveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveDuotoneIcon],svg[ph-bezier-curve-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80a24 24 0 1 1-24-24a24 24 0 0 1 24 24M40 152a24 24 0 1 0 24 24a24 24 0 0 0-24-24m176 0a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M221.07 144.41A96.68 96.68 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.68 96.68 0 0 0-40.07 56.41A32 32 0 1 0 51.08 146A80.6 80.6 0 0 1 99 93.44a32 32 0 0 0 58.06 0A80.6 80.6 0 0 1 204.92 146a32 32 0 1 0 16.15-1.57ZM56 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-80a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhBezierCurveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveFillIcon],svg[ph-bezier-curve-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221 144.4A96.26 96.26 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.26 96.26 0 0 0-40 56.4A32 32 0 1 0 71 184h114a32 32 0 1 0 36-39.6M40 192a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88-128a16 16 0 1 1-16 16a16 16 0 0 1 16-16m88 128a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhBezierCurveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveLightIcon],svg[ph-bezier-curve-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.44 146.2A94.66 94.66 0 0 0 173.92 86H240a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H16a6 6 0 0 0 0 12h66.08a94.66 94.66 0 0 0-45.52 60.2a30 30 0 1 0 12.09 1.08a82.53 82.53 0 0 1 51.4-56.39a30 30 0 0 0 55.9 0a82.53 82.53 0 0 1 51.4 56.39a30 30 0 1 0 12.09-1.08M58 176a18 18 0 1 1-18-18a18 18 0 0 1 18 18m70-78a18 18 0 1 1 18-18a18 18 0 0 1-18 18m88 96a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhBezierCurveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBezierCurveThinIcon],svg[ph-bezier-curve-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.83 148.07A92.6 92.6 0 0 0 165.53 84H240a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H16a4 4 0 0 0 0 8h74.47a92.6 92.6 0 0 0-52.3 64.07a28 28 0 1 0 8.07.64a84.51 84.51 0 0 1 55-60.36a28 28 0 0 0 53.46 0a84.53 84.53 0 0 1 55 60.36a28 28 0 1 0 8.07-.64ZM60 176a20 20 0 1 1-20-20a20 20 0 0 1 20 20m68-76a20 20 0 1 1 20-20a20 20 0 0 1-20 20m88 96a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhBezierCurveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleIcon],svg[ph-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 112a47.8 47.8 0 0 0-16.93 3.09L165.93 72H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a48.13 48.13 0 1 0 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17A48 48 0 1 0 208 112M80 160a32 32 0 1 1-20.21-29.74l-18.25 25a8 8 0 1 0 12.92 9.42l18.25-25A31.88 31.88 0 0 1 80 160m128 32a32 32 0 0 1-22.51-54.72l15.6 26.72a8 8 0 1 0 13.82-8l-15.61-26.79A32 32 0 1 1 208 192"></svg:path>`,
})
export class PhBicycleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleBoldIcon],svg[ph-bicycle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 108a51.8 51.8 0 0 0-15.13 2.25L168.89 76H192a4 4 0 0 1 4 4a12 12 0 0 0 24 0a28 28 0 0 0-28-28h-44a12 12 0 0 0-10.37 18l8.14 14h-36.21L94.37 58A12 12 0 0 0 84 52H52a12 12 0 0 0 0 24h25.11l11.07 19L74 112.89a52.17 52.17 0 1 0 18.8 14.92l8.37-10.57L118 146.05A12 12 0 1 0 138.7 134l-15.14-26h36.21l8.39 14.38A52 52 0 1 0 204 108M80 160a28 28 0 1 1-21.71-27.28l-15.7 19.83a12 12 0 0 0 18.82 14.9l15.7-19.83A27.84 27.84 0 0 1 80 160m124 28a28 28 0 0 1-23.11-43.79l12.74 21.84A12 12 0 0 0 214.37 154l-12.75-21.84c.79-.07 1.58-.11 2.38-.11a28 28 0 0 1 0 56Z"></svg:path>`,
})
export class PhBicycleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleDuotoneIcon],svg[ph-bicycle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 160a40 40 0 1 1-40-40a40 40 0 0 1 40 40M48 120a40 40 0 1 0 40 40a40 40 0 0 0-40-40" opacity=".2"></svg:path><svg:path d="M208 112a47.8 47.8 0 0 0-16.93 3.09L165.93 72H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a48.13 48.13 0 1 0 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17A48 48 0 1 0 208 112M80 160a32 32 0 1 1-20.21-29.74l-18.25 25a8 8 0 1 0 12.92 9.42l18.25-25A31.88 31.88 0 0 1 80 160m128 32a32 32 0 0 1-22.51-54.72l15.6 26.72a8 8 0 1 0 13.82-8l-15.61-26.79A32 32 0 1 1 208 192"></svg:path></svg:g>`,
})
export class PhBicycleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleFillIcon],svg[ph-bicycle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54.46 164.71l27.87-38.21a48 48 0 1 1-12.92-9.44l-27.87 38.23a8 8 0 1 0 12.92 9.42M208 112a47.8 47.8 0 0 0-16.93 3.09L214.91 156a8 8 0 1 1-13.82 8l-23.83-40.86A48 48 0 1 0 208 112m-42.07-40H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a47.9 47.9 0 0 1 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17a48.1 48.1 0 0 1 13.81-8.08Z"></svg:path>`,
})
export class PhBicycleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleLightIcon],svg[ph-bicycle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 114a45.9 45.9 0 0 0-17.8 3.58L162.45 70H192a10 10 0 0 1 10 10a6 6 0 0 0 12 0a22 22 0 0 0-22-22h-40a6 6 0 0 0-5.18 9l13.4 23H98.11L81.18 61A6 6 0 0 0 76 58H48a6 6 0 0 0 0 12h24.55l15 25.64L70 119.62a46.22 46.22 0 1 0 9.68 7.09L94.11 107l32.71 56a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-32.07-55h62.11l12.63 21.66A46 46 0 1 0 208 114M82 160a34 34 0 1 1-19.13-30.57l-19.72 27a6 6 0 0 0 9.7 7.08l19.7-27A33.88 33.88 0 0 1 82 160m126 34a34 34 0 0 1-22-59.86L202.82 163a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-16.86-28.91A34 34 0 1 1 208 194"></svg:path>`,
})
export class PhBicycleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBicycleThinIcon],svg[ph-bicycle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116a43.7 43.7 0 0 0-18.62 4.15L159 68h33a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20h-40a4 4 0 0 0-3.46 6l15.16 26H97L79.46 62A4 4 0 0 0 76 60H48a4 4 0 0 0 0 8h25.7l16.19 27.76l-19.32 26.49A44.21 44.21 0 1 0 77 127l17.29-23.7l34.25 58.7a4 4 0 0 0 3.46 2a4.1 4.1 0 0 0 2-.54a4 4 0 0 0 1.44-5.48l-33.83-58h66.74l14.11 24.19A44 44 0 1 0 208 116M84 160a36 36 0 1 1-18.16-31.25l-21.07 28.89a4 4 0 0 0 6.46 4.72l21.07-28.9A35.92 35.92 0 0 1 84 160m124 36a36 36 0 0 1-21.47-64.88l18 30.9a4 4 0 0 0 3.46 2a4.1 4.1 0 0 0 2-.54a4 4 0 0 0 1.44-5.48l-18-30.89A36 36 0 1 1 208 196"></svg:path>`,
})
export class PhBicycleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryIcon],svg[ph-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 24c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32m72 32c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32M145 49.22a8 8 0 0 1 3.11-10.88l24-13.33A8 8 0 0 1 184 32v80a8 8 0 0 1-16 0V45.6l-12.12 6.73A8 8 0 0 1 145 49.22M104 144v80a8 8 0 0 1-16 0v-66.4l-12.12 6.73a8 8 0 0 1-7.76-14l24-13.33a8 8 0 0 1 11.88 7"></svg:path>`,
})
export class PhBinaryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryBoldIcon],svg[ph-binary-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 24c-23.55 0-40 19.74-40 48s16.45 48 40 48s40-19.74 40-48s-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24s16 21.54 16 24s-.45 24-16 24m53.27-42.63a12 12 0 0 1 5.36-16.1l24-12A12 12 0 0 1 192 36v72a12 12 0 0 1-24 0V55.42l-6.63 3.31a12 12 0 0 1-16.1-5.36M164 136c-23.55 0-40 19.74-40 48s16.45 48 40 48s40-19.74 40-48s-16.45-48-40-48m0 72c-15.55 0-16-21.54-16-24s.45-24 16-24s16 21.54 16 24s-.45 24-16 24m-60-60v72a12 12 0 0 1-24 0v-52.58l-6.63 3.31a12 12 0 1 1-10.74-21.46l24-12A12 12 0 0 1 104 148"></svg:path>`,
})
export class PhBinaryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryDuotoneIcon],svg[ph-binary-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M94 24c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32m72 32c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32M145 49.22a8 8 0 0 1 3.11-10.88l24-13.33A8 8 0 0 1 184 32v80a8 8 0 0 1-16 0V45.6l-12.12 6.73A8 8 0 0 1 145 49.22M104 144v80a8 8 0 0 1-16 0v-66.4l-12.12 6.73a8 8 0 0 1-7.76-14l24-13.33a8 8 0 0 1 11.88 7"></svg:path></svg:g>`,
})
export class PhBinaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryFillIcon],svg[ph-binary-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 168c0 4.75-1.11 9.16-3.05 12.11A7.77 7.77 0 0 1 158 184c-9.72 0-10-14.36-10-16c0-4.74 1.11-9.16 3.05-12.11A7.77 7.77 0 0 1 158 152c9.72 0 10 14.36 10 16m56-120v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-83.16 27.58a8 8 0 0 0 10.74 3.58l4.42-2.22V112a8 8 0 0 0 16 0V64a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0-3.58 10.74M112 144a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32l4.42-2.22V192a8 8 0 0 0 16 0Zm16-56c0-18.84-10.69-32-26-32S76 69.16 76 88s10.69 32 26 32s26-13.16 26-32m56 80c0-18.84-10.69-32-26-32s-26 13.16-26 32s10.69 32 26 32s26-13.16 26-32m-82-96a7.77 7.77 0 0 0-7 3.89c-1.94 3-3 7.37-3 12.11c0 1.64.28 16 10 16a7.77 7.77 0 0 0 7-3.89c1.94-3 3-7.36 3-12.11c0-1.64-.28-16-10-16"></svg:path>`,
})
export class PhBinaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryLightIcon],svg[ph-binary-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121.75 41.21C115.22 31.26 105.62 26 94 26s-21.22 5.26-27.75 15.21C60.93 49.31 58 60.25 58 72s2.93 22.69 8.25 30.79C72.78 112.74 82.38 118 94 118s21.22-5.26 27.75-15.21c5.32-8.1 8.25-19 8.25-30.79s-2.93-22.69-8.25-30.79M94 106c-19 0-24-21.37-24-34s5-34 24-34s24 21.37 24 34s-5 34-24 34m99.75 47.21C187.22 143.26 177.62 138 166 138s-21.22 5.26-27.75 15.21c-5.32 8.1-8.25 19-8.25 30.79s2.93 22.69 8.25 30.79c6.53 10 16.13 15.21 27.75 15.21s21.22-5.26 27.75-15.21c5.32-8.1 8.25-19 8.25-30.79s-2.93-22.69-8.25-30.79M166 218c-18.95 0-24-21.37-24-34s5.05-34 24-34s24 21.37 24 34s-5 34-24 34M146.75 48.25a6 6 0 0 1 2.34-8.16l24-13.34A6 6 0 0 1 182 32v80a6 6 0 0 1-12 0V42.2l-15.09 8.38a6 6 0 0 1-8.16-2.33M102 144v80a6 6 0 0 1-12 0v-69.8l-15.09 8.38a6 6 0 1 1-5.82-10.49l24-13.34A6 6 0 0 1 102 144"></svg:path>`,
})
export class PhBinaryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinaryThinIcon],svg[ph-binary-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 28c-10.92 0-19.93 5-26.08 14.31C62.81 50.09 60 60.64 60 72s2.81 21.91 7.92 29.7C74.07 111.05 83.08 116 94 116s19.93-5 26.08-14.3C125.19 93.91 128 83.37 128 72s-2.81-21.91-7.92-29.69C113.93 33 104.92 28 94 28m0 80c-18 0-26-18.08-26-36s8-36 26-36s26 18.08 26 36s-8 36-26 36m98.08 46.31C185.93 145 176.92 140 166 140s-19.93 4.95-26.08 14.31c-5.11 7.78-7.92 18.33-7.92 29.69s2.81 21.91 7.92 29.7c6.15 9.35 15.16 14.3 26.08 14.3s19.93-4.95 26.08-14.3c5.11-7.79 7.92-18.33 7.92-29.7s-2.81-21.91-7.92-29.69M166 220c-18 0-26-18.08-26-36s8-36 26-36s26 18.08 26 36s-8 36-26 36M148.5 47.28a4 4 0 0 1 1.56-5.44l24-13.34A4 4 0 0 1 180 32v80a4 4 0 0 1-8 0V38.8l-18.06 10a4 4 0 0 1-5.44-1.52M100 144v80a4 4 0 0 1-8 0v-73.2l-18.06 10a4 4 0 1 1-3.88-7l24-13.34A4 4 0 0 1 100 144"></svg:path>`,
})
export class PhBinaryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsIcon],svg[ph-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.2 151.87a47 47 0 0 0-2.35-5.45L193.26 51.8a7.8 7.8 0 0 0-1.66-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a7.8 7.8 0 0 0-1.66 2.44L21.15 146.4a47 47 0 0 0-2.35 5.45A48 48 0 1 0 112 168V96h32v72a48 48 0 1 0 93.2-16.13M76.71 59.75a16 16 0 0 1 19.29-1v73.51a47.9 47.9 0 0 0-46.79-9.92ZM64 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96-141.26a16 16 0 0 1 19.29 1l27.5 62.58a47.9 47.9 0 0 0-46.79 9.93ZM192 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhBinocularsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsBoldIcon],svg[ph-binoculars-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241 150.65v-.05a51 51 0 0 0-2.53-5.9l-41.54-94.52a12 12 0 0 0-2.5-3.65a36 36 0 0 0-50.92 0A12 12 0 0 0 140 55v21h-24V55a12 12 0 0 0-3.51-8.48a36 36 0 0 0-50.92 0a12 12 0 0 0-2.5 3.65L17.53 144.7a51 51 0 0 0-2.53 5.9s0 0 0 .05A52 52 0 1 0 116 168v-68h24v68a52 52 0 1 0 101-17.35M80 62.28a12 12 0 0 1 12-1.22v63.15a51.9 51.9 0 0 0-35.9-7.62ZM64 196a28 28 0 1 1 28-28a28 28 0 0 1-28 28M164 61.06a12.06 12.06 0 0 1 12 1.22l23.87 54.31a51.9 51.9 0 0 0-35.9 7.62ZM192 196a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhBinocularsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsDuotoneIcon],svg[ph-binoculars-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 168a40 40 0 1 1-40-40a40 40 0 0 1 40 40m88-40a40 40 0 1 0 40 40a40 40 0 0 0-40-40" opacity=".2"></svg:path><svg:path d="M237.2 151.87a47 47 0 0 0-2.35-5.45L193.26 51.8a7.8 7.8 0 0 0-1.66-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a7.8 7.8 0 0 0-1.66 2.44L21.15 146.4a47 47 0 0 0-2.35 5.45A48 48 0 1 0 112 168V96h32v72a48 48 0 1 0 93.2-16.13M76.71 59.75a16 16 0 0 1 19.29-1v73.51a47.9 47.9 0 0 0-46.79-9.92ZM64 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96-141.26a16 16 0 0 1 19.29 1l27.5 62.58a47.9 47.9 0 0 0-46.79 9.93ZM192 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhBinocularsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsFillIcon],svg[ph-binoculars-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.22 151.9v-.1a1.4 1.4 0 0 0-.07-.22a49 49 0 0 0-2.31-5.3L193.27 51.8a8 8 0 0 0-1.67-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a8 8 0 0 0-1.67 2.44l-41.53 94.5a49 49 0 0 0-2.31 5.3a2 2 0 0 0-.07.21s0 .08 0 .11a48 48 0 0 0 90.32 32.51a47.5 47.5 0 0 0 2.9-16.59V96h32v71.83a47.5 47.5 0 0 0 2.9 16.59a48 48 0 0 0 90.32-32.51Zm-143.15 27a32 32 0 0 1-60.2-21.71l1.81-4.13A32 32 0 0 1 96 167.88v.12a32 32 0 0 1-1.93 10.94ZM203 198.07A32 32 0 0 1 160 168v-.11a32 32 0 0 1 60.32-14.78l1.81 4.13A32 32 0 0 1 203 198.07"></svg:path>`,
})
export class PhBinocularsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsLightIcon],svg[ph-binoculars-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 147.24L191.43 52.6a6 6 0 0 0-1.25-1.83a30 30 0 0 0-42.42 0A6 6 0 0 0 146 55v27h-36V55a6 6 0 0 0-1.76-4.25a30 30 0 0 0-42.42 0a6 6 0 0 0-1.25 1.83L23 147.24A46 46 0 1 0 110 168V94h36v74a46 46 0 1 0 87-20.76M64 202a34 34 0 1 1 34-34a34 34 0 0 1-34 34m0-80a45.8 45.8 0 0 0-18.55 3.92l29.61-67.38A18 18 0 0 1 98 57.71V137a45.9 45.9 0 0 0-34-15m94-64.28a18 18 0 0 1 22.94.83l29.61 67.37A45.9 45.9 0 0 0 158 137ZM192 202a34 34 0 1 1 34-34a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhBinocularsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBinocularsThinIcon],svg[ph-binoculars-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.22 148.09L189.6 53.41a3.9 3.9 0 0 0-.83-1.22a28 28 0 0 0-39.6 0A4 4 0 0 0 148 55v29h-40V55a4 4 0 0 0-1.17-2.83a28 28 0 0 0-39.6 0a3.9 3.9 0 0 0-.83 1.22l-41.62 94.7A44 44 0 1 0 108 168V92h40v76a44 44 0 1 0 83.22-19.91M64 204a36 36 0 1 1 36-36a36 36 0 0 1-36 36m0-80a43.8 43.8 0 0 0-22.66 6.3L73.4 57.35a20 20 0 0 1 26.6-.59v86A44 44 0 0 0 64 124m92-67.23a20 20 0 0 1 26.6.59l32.06 72.94A43.92 43.92 0 0 0 156 142.74ZM192 204a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhBinocularsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardIcon],svg[ph-biohazard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.68 104.28q-1.4-2.88-3.06-5.6a60 60 0 0 0-26.92-78a8 8 0 0 0-7.4 14.19a44 44 0 0 1 22.42 49.53a63.85 63.85 0 0 0-85.46 0a44 44 0 0 1 22.44-49.53a8 8 0 1 0-7.4-14.19a60 60 0 0 0-26.93 78a63 63 0 0 0-3.05 5.58A60.07 60.07 0 0 0 16 164a8 8 0 0 0 16 0a44.09 44.09 0 0 1 32.89-42.58A63.94 63.94 0 0 0 109 193.11a44 44 0 0 1-56.65 8a8 8 0 1 0-8.62 13.47A60 60 0 0 0 126.74 196h2.52a60 60 0 0 0 83.05 18.59a8 8 0 1 0-8.62-13.47a44 44 0 0 1-56.65-8a63.94 63.94 0 0 0 44.07-71.69A44.09 44.09 0 0 1 224 164a8 8 0 0 0 16 0a60.07 60.07 0 0 0-54.32-59.72M128 84a47.9 47.9 0 0 1 35.56 15.79a44 44 0 0 1-71.13 0A47.9 47.9 0 0 1 128 84m.12 49.92l-.12.2l-.12-.2zM80 132a47.6 47.6 0 0 1 1.44-11.65a44 44 0 0 1 36 58.46A48.07 48.07 0 0 1 80 132m58.57 46.81a44 44 0 0 1 36-58.46a48 48 0 0 1-36 58.46"></svg:path>`,
})
export class PhBiohazardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardBoldIcon],svg[ph-biohazard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.26 100.55c-.37-.71-.76-1.42-1.16-2.11a64 64 0 0 0-29.55-81.29a12 12 0 1 0-11.1 21.28A39.91 39.91 0 0 1 168 73.92c0 1-.05 2-.13 3a67.79 67.79 0 0 0-79.74 0c-.08-1-.13-2-.13-3a39.92 39.92 0 0 1 21.55-35.5a12 12 0 1 0-11.09-21.28a64 64 0 0 0-29.57 81.31c-.4.7-.78 1.39-1.15 2.1A64.08 64.08 0 0 0 12 164a12 12 0 0 0 24 0a40 40 0 0 1 24.18-36.73c-.11 1.56-.18 3.14-.18 4.73a68.12 68.12 0 0 0 41.63 62.68a40 40 0 0 1-47.16 3a12 12 0 1 0-12.94 20.21A63.95 63.95 0 0 0 128 201.24a63.95 63.95 0 0 0 86.47 16.69a12 12 0 1 0-12.94-20.21a40 40 0 0 1-47.16-3A68.12 68.12 0 0 0 196 132c0-1.59-.07-3.17-.18-4.73A40 40 0 0 1 220 164a12 12 0 0 0 24 0a64.08 64.08 0 0 0-55.74-63.45M128 88a43.85 43.85 0 0 1 30.23 12.07a39.93 39.93 0 0 1-60.46 0A43.8 43.8 0 0 1 128 88m-44 44a44.4 44.4 0 0 1 .57-7.06a40 40 0 0 1 30.18 49A44.08 44.08 0 0 1 84 132m57.25 42a40 40 0 0 1 30.18-49a44 44 0 0 1-30.18 49"></svg:path>`,
})
export class PhBiohazardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardDuotoneIcon],svg[ph-biohazard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 132a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M185.68 104.28q-1.4-2.88-3.06-5.6a60 60 0 0 0-26.92-78a8 8 0 0 0-7.4 14.19a44 44 0 0 1 22.42 49.53a63.85 63.85 0 0 0-85.46 0a44 44 0 0 1 22.44-49.53a8 8 0 1 0-7.4-14.19a60 60 0 0 0-26.93 78a63 63 0 0 0-3.05 5.58A60.07 60.07 0 0 0 16 164a8 8 0 0 0 16 0a44.09 44.09 0 0 1 32.89-42.58A63.94 63.94 0 0 0 109 193.11a44 44 0 0 1-56.65 8a8 8 0 1 0-8.62 13.47A60 60 0 0 0 126.74 196h2.52a60 60 0 0 0 83.05 18.59a8 8 0 1 0-8.62-13.47a44 44 0 0 1-56.65-8a63.94 63.94 0 0 0 44.07-71.69A44.09 44.09 0 0 1 224 164a8 8 0 0 0 16 0a60.07 60.07 0 0 0-54.32-59.72M128 84a47.9 47.9 0 0 1 35.56 15.79a44 44 0 0 1-71.13 0A47.9 47.9 0 0 1 128 84m.12 49.92l-.12.2l-.12-.2zM80 132a47.6 47.6 0 0 1 1.44-11.65a44 44 0 0 1 36 58.46A48.07 48.07 0 0 1 80 132m58.57 46.81a44 44 0 0 1 36-58.46a48 48 0 0 1-36 58.46"></svg:path></svg:g>`,
})
export class PhBiohazardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardFillIcon],svg[ph-biohazard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.83 159.58a60.09 60.09 0 0 0-54.17-55.31a62 62 0 0 0-3-5.59a59.94 59.94 0 0 0-26.82-77.93l-.14-.08a8 8 0 0 0-1.14-.48a8 8 0 0 0-6.21 14.69h.07C149.6 35.57 168 45.73 168 68a40 40 0 0 1-2 12.53a63.83 63.83 0 0 0-76 0A40 40 0 0 1 88 68c0-22.35 18.53-32.51 19.65-33.1a8 8 0 0 0-7.33-14.22l-.15.08a60 60 0 0 0-26.85 78c-1.1 1.8-2.12 3.66-3 5.57a60.11 60.11 0 0 0-54.15 55.32a36 36 0 0 0-.14 4.87A8 8 0 0 0 32 164c0-1.36.07-2.71.19-4c.73-6.25 4.06-19.08 18.64-27.49a39.8 39.8 0 0 1 13.32-4.81c-.1 1.43-.16 2.88-.16 4.34a64.09 64.09 0 0 0 39 58.91a39.8 39.8 0 0 1-12.15 10.84c-19.07 11-36.88.36-38.39-.58l-.12-.08a8 8 0 0 0-8.71 13.42l.24.15a59.95 59.95 0 0 0 82.88-18.7h2.52a60 60 0 0 0 82.89 18.69l.23-.15a8 8 0 0 0-8.71-13.42l-.12.08c-1.51.94-19.32 11.59-38.39.58A39.8 39.8 0 0 1 153 190.9a64.09 64.09 0 0 0 39-58.9c0-1.46-.07-2.9-.16-4.33a39.8 39.8 0 0 1 13.33 4.8c14.47 8.35 17.86 21.06 18.63 27.32c.13 1.39.2 2.79.2 4.21a8 8 0 0 0 16 .46a36 36 0 0 0-.17-4.88m-130.1 16.8A48.08 48.08 0 0 1 80 132c0-1.27.07-2.53.17-3.78l1 .25a40 40 0 0 1 28.54 47.91ZM128 134.11l-.11-.19h.22Zm0-26.11a39.9 39.9 0 0 1-29.93-13.49a47.84 47.84 0 0 1 59.84 0A39.88 39.88 0 0 1 128 108m18.29 68.37a39.9 39.9 0 0 1 29.55-48.13c.1 1.24.16 2.49.16 3.76a48.07 48.07 0 0 1-29.72 44.37Z"></svg:path>`,
})
export class PhBiohazardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardLightIcon],svg[ph-biohazard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.35 106.18a62 62 0 0 0-4-7.33a58 58 0 0 0-25.58-76.38a6 6 0 1 0-5.54 10.64a46 46 0 0 1 22.51 55a61.89 61.89 0 0 0-87.5 0a46 46 0 0 1 22.53-55a6 6 0 0 0-5.54-10.64a58 58 0 0 0-25.59 76.4a61 61 0 0 0-4 7.31A58.06 58.06 0 0 0 18 164a6 6 0 0 0 12 0a46.08 46.08 0 0 1 37.43-45.19a61.95 61.95 0 0 0 45 73.21a46 46 0 0 1-61.2 10.75a6 6 0 0 0-6.48 10.11a58 58 0 0 0 80.9-18.94c.77 0 1.55.06 2.34.06s1.57 0 2.34-.06a58 58 0 0 0 80.9 18.94a6 6 0 0 0-6.48-10.11A46 46 0 0 1 143.56 192a61.95 61.95 0 0 0 45-73.21A46.08 46.08 0 0 1 226 164a6 6 0 0 0 12 0a58.06 58.06 0 0 0-53.65-57.82M128 82a49.87 49.87 0 0 1 38.09 17.67a46 46 0 0 1-76.19 0A49.86 49.86 0 0 1 128 82m3.8 49.79a57 57 0 0 0-3.8 6.56a58 58 0 0 0-3.79-6.56c1.25.08 2.51.13 3.78.13s2.55-.05 3.81-.13M78 132a49.7 49.7 0 0 1 2-13.82A46.06 46.06 0 0 1 122 164a45.6 45.6 0 0 1-3.32 17.12A50.07 50.07 0 0 1 78 132m59.32 49.12A45.6 45.6 0 0 1 134 164a46.06 46.06 0 0 1 42-45.82a50 50 0 0 1-38.72 62.94Z"></svg:path>`,
})
export class PhBiohazardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBiohazardThinIcon],svg[ph-biohazard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183 108.08a60 60 0 0 0-4.94-9.08a56 56 0 0 0-24.21-74.73a4 4 0 1 0-3.7 7.09a48 48 0 0 1 22.37 60.49a59.91 59.91 0 0 0-89.05 0a48 48 0 0 1 22.38-60.5a4 4 0 0 0-3.7-7.1A56 56 0 0 0 77.93 99a61 61 0 0 0-4.93 9.08A56.07 56.07 0 0 0 20 164a4 4 0 0 0 8 0a48.06 48.06 0 0 1 42.08-47.62a60 60 0 0 0 45.75 74.38a48 48 0 0 1-65.67 13.7a4 4 0 1 0-4.32 6.73a56 56 0 0 0 78.69-19.3c1.15.07 2.3.11 3.47.11s2.32 0 3.47-.11a56 56 0 0 0 78.69 19.3a4 4 0 1 0-4.32-6.73a48 48 0 0 1-65.67-13.7a60 60 0 0 0 45.75-74.38A48.06 48.06 0 0 1 228 164a4 4 0 0 0 8 0a56.07 56.07 0 0 0-53-55.92m-8.75.21c-.79.08-1.56.19-2.34.3c.5-.63 1-1.28 1.46-1.93c.32.54.63 1.08.89 1.63ZM128 80a51.93 51.93 0 0 1 40.57 19.52a48 48 0 0 1-81.15 0A51.94 51.94 0 0 1 128 80m8.07 49.33a56.1 56.1 0 0 0-8.07 13.92a55.9 55.9 0 0 0-8.07-13.91a56.4 56.4 0 0 0 8.06.58a55 55 0 0 0 8.08-.59m-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62c.46.65.94 1.33 1.44 1.92ZM76 132a51.8 51.8 0 0 1 2.51-15.93a48 48 0 0 1 41.39 67.3A52.08 52.08 0 0 1 76 132m60.1 51.37a48 48 0 0 1 41.39-67.3a52 52 0 0 1-41.39 67.3"></svg:path>`,
})
export class PhBiohazardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdIcon],svg[ph-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m64 12a8 8 0 0 1-3.56 6.66L216 100.28V120a104.11 104.11 0 0 1-104 104H24a16 16 0 0 1-12.49-26l.1-.12L96 96.63V76.89c0-33.42 26.79-60.73 59.71-60.89h.29a60 60 0 0 1 57.21 41.86l23.23 15.48A8 8 0 0 1 240 80m-22.42 0L201.9 69.54a8 8 0 0 1-3.31-4.64A44 44 0 0 0 156 32h-.22C131.64 32.12 112 52.25 112 76.89v22.63a8 8 0 0 1-1.85 5.13L24 208h26.9l70.94-85.12a8 8 0 1 1 12.29 10.24L71.75 208H112a88.1 88.1 0 0 0 88-88V96a8 8 0 0 1 3.56-6.66Z"></svg:path>`,
})
export class PhBirdIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdBoldIcon],svg[ph-bird-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 72a16 16 0 1 1-16-16a16 16 0 0 1 16 16m68 8a12 12 0 0 1-5.34 10L220 102.42V120a108.12 108.12 0 0 1-108 108H24a20 20 0 0 1-15.59-32.5l.15-.18L92 95.18V76.89c0-35.61 28.57-64.72 63.69-64.89h.31a63.94 63.94 0 0 1 60.58 43.29L238.66 70A12 12 0 0 1 244 80m-33.63 0l-10.69-7.13a12 12 0 0 1-5-7A40 40 0 0 0 156 36h-.19c-21.95.11-39.8 18.45-39.8 40.89v22.63a12 12 0 0 1-2.79 7.69L32.57 204h20.48l69.74-83.68a12 12 0 1 1 18.43 15.36L84.29 204H112a84.09 84.09 0 0 0 84-84V96a12 12 0 0 1 5.35-10Z"></svg:path>`,
})
export class PhBirdBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdDuotoneIcon],svg[ph-bird-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 80l-24 16v24a96 96 0 0 1-96 96H24a8 8 0 0 1-6.25-13L104 99.52V76.89c0-28.77 23-52.75 51.74-52.89a52 52 0 0 1 50.59 38.89Z" opacity=".2"></svg:path><svg:path d="M176 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m64 12a8 8 0 0 1-3.56 6.66L216 100.28V120a104.11 104.11 0 0 1-104 104H24a16 16 0 0 1-12.49-26l.1-.12L96 96.63V76.89c0-33.42 26.79-60.73 59.71-60.89h.29a60 60 0 0 1 57.21 41.86l23.23 15.48A8 8 0 0 1 240 80m-22.42 0L201.9 69.54a8 8 0 0 1-3.31-4.64A44 44 0 0 0 156 32h-.22C131.64 32.12 112 52.25 112 76.89v22.63a8 8 0 0 1-1.85 5.13L24 208h26.9l70.94-85.12a8 8 0 1 1 12.29 10.24L71.75 208H112a88.1 88.1 0 0 0 88-88V96a8 8 0 0 1 3.56-6.66Z"></svg:path></svg:g>`,
})
export class PhBirdDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdFillIcon],svg[ph-bird-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.44 73.34l-23.23-15.48A60 60 0 0 0 156 16h-.29C122.79 16.16 96 43.47 96 76.89v19.74L11.63 197.88l-.1.12A16 16 0 0 0 24 224h88a104.11 104.11 0 0 0 104-104v-19.72l20.44-13.62a8 8 0 0 0 0-13.32m-110.29 59.78l-60 72a8 8 0 1 1-12.29-10.24l60-72a8 8 0 1 1 12.29 10.24M164 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBirdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdLightIcon],svg[ph-bird-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 68a10 10 0 1 1-10-10a10 10 0 0 1 10 10m64 12a6 6 0 0 1-2.67 5L214 99.21V120a102.12 102.12 0 0 1-102 102H24a14 14 0 0 1-10.93-22.75l.07-.09L98 97.35V76.89c0-32.32 25.89-58.74 57.72-58.89h.28a58 58 0 0 1 55.51 41.13L235.33 75a6 6 0 0 1 2.67 5m-16.82 0L203 67.88a6 6 0 0 1-2.48-3.48A46 46 0 0 0 156 30h-.23C130.53 30.12 110 51.16 110 76.89v22.63a6 6 0 0 1-1.39 3.85L22.43 206.78A2 2 0 0 0 24 210h27.86l71.53-85.84a6 6 0 0 1 9.22 7.68L67.48 210H112a90.1 90.1 0 0 0 90-90V96a6 6 0 0 1 2.67-5Z"></svg:path>`,
})
export class PhBirdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBirdThinIcon],svg[ph-bird-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 68a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 12a4 4 0 0 1-1.78 3.33L212 98.14V120a100.11 100.11 0 0 1-100 100H24a12 12 0 0 1-9.37-19.5L100 98.08V76.89c0-31.22 25-56.74 55.72-56.89h.28a55.94 55.94 0 0 1 53.79 40.39l24.43 16.28A4 4 0 0 1 236 80m-11.21 0l-20.68-13.78a4.08 4.08 0 0 1-1.65-2.33A48 48 0 0 0 156 28h-.24C129.43 28.13 108 50.06 108 76.89v22.63a4 4 0 0 1-.93 2.56L20.84 205.56A4 4 0 0 0 24 212h28.79l72.14-86.56a4 4 0 0 1 6.14 5.12L63.21 212H112a92.1 92.1 0 0 0 92-92V96a4 4 0 0 1 1.78-3.33Z"></svg:path>`,
})
export class PhBirdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintIcon],svg[ph-blueprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56H72V40a8 8 0 0 0-8-8H48a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h184a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M32 64a16 16 0 0 1 16-16h8v96h-8a31.8 31.8 0 0 0-16 4.29Zm192 128H48a16 16 0 0 1 0-32h16a8 8 0 0 0 8-8V72h152Zm-120-56a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16Zm32-16h24v16h-24Z"></svg:path>`,
})
export class PhBlueprintIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintBoldIcon],svg[ph-blueprint-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H76v-8a12 12 0 0 0-12-12H48a36 36 0 0 0-36 36v112a36 36 0 0 0 36 36h184a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12M36 64a12 12 0 0 1 12-12h4v88h-4a35.6 35.6 0 0 0-12 2.06Zm184 124H48a12 12 0 0 1 0-24h16a12 12 0 0 0 12-12V72h144Zm-116-52a12 12 0 0 0 0 24h12v4a12 12 0 0 0 24 0v-4h16v4a12 12 0 0 0 24 0v-4h12a12 12 0 0 0 0-24h-12v-12h12a12 12 0 0 0 0-24h-12v-4a12 12 0 0 0-24 0v4h-16v-4a12 12 0 0 0-24 0v4h-12a12 12 0 0 0 0 24h12v12Zm36-12h16v12h-16Z"></svg:path>`,
})
export class PhBlueprintBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintDuotoneIcon],svg[ph-blueprint-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v136H48a24 24 0 0 1 0-48h16V64Z" opacity=".2"></svg:path><svg:path d="M232 56H72V40a8 8 0 0 0-8-8H48a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h184a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M32 64a16 16 0 0 1 16-16h8v96h-8a31.8 31.8 0 0 0-16 4.29Zm192 128H48a16 16 0 0 1 0-32h16a8 8 0 0 0 8-8V72h152Zm-120-56a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16Zm32-16h24v16h-24Z"></svg:path></svg:g>`,
})
export class PhBlueprintDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintFillIcon],svg[ph-blueprint-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120h24v16h-24Zm104-56v136a8 8 0 0 1-8 8H48a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h16a8 8 0 0 1 8 8v16h160a8 8 0 0 1 8 8M56 48h-8a16 16 0 0 0-16 16v84.29A31.8 31.8 0 0 1 48 144h8Zm120 88v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16h-16a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhBlueprintFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintLightIcon],svg[ph-blueprint-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H70V40a6 6 0 0 0-6-6H48a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h184a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6M30 64a18 18 0 0 1 18-18h10v100H48a29.87 29.87 0 0 0-18 6Zm196 130H48a18 18 0 0 1 0-36h16a6 6 0 0 0 6-6V70h156Zm-122-56a6 6 0 0 0 0 12h18v10a6 6 0 0 0 12 0v-10h28v10a6 6 0 0 0 12 0v-10h18a6 6 0 0 0 0-12h-18v-20h18a6 6 0 0 0 0-12h-18V96a6 6 0 0 0-12 0v10h-28V96a6 6 0 0 0-12 0v10h-18a6 6 0 0 0 0 12h18v20Zm30-20h28v20h-28Z"></svg:path>`,
})
export class PhBlueprintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBlueprintThinIcon],svg[ph-blueprint-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H68V40a4 4 0 0 0-4-4H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h184a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4M28 64a20 20 0 0 1 20-20h12v104H48a27.94 27.94 0 0 0-20 8.42Zm200 132H48a20 20 0 0 1 0-40h16a4 4 0 0 0 4-4V68h160Zm-124-56a4 4 0 0 0 0 8h20v12a4 4 0 0 0 8 0v-12h32v12a4 4 0 0 0 8 0v-12h20a4 4 0 0 0 0-8h-20v-24h20a4 4 0 0 0 0-8h-20V96a4 4 0 0 0-8 0v12h-32V96a4 4 0 0 0-8 0v12h-20a4 4 0 0 0 0 8h20v24Zm28-24h32v24h-32Z"></svg:path>`,
})
export class PhBlueprintThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothIcon],svg[ph-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Z"></svg:path>`,
})
export class PhBluetoothIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothBoldIcon],svg[ph-bluetooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.2 166.4L148 128l51.2-38.4a12 12 0 0 0 0-19.2l-64-48A12 12 0 0 0 116 32v72L71.2 70.4a12 12 0 0 0-14.4 19.2L108 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M140 56l32 24l-32 24Zm0 144v-48l32 24Z"></svg:path>`,
})
export class PhBluetoothBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedIcon],svg[ph-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Zm-76-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m156-12a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBluetoothConnectedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedBoldIcon],svg[ph-bluetooth-connected-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.2 166.4L148 128l51.2-38.4a12 12 0 0 0 0-19.2l-64-48A12 12 0 0 0 116 32v72L71.2 70.4a12 12 0 0 0-14.4 19.2L108 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M140 56l32 24l-32 24Zm0 144v-48l32 24Zm-84-56a16 16 0 1 1 16-16a16 16 0 0 1-16 16m168-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBluetoothConnectedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedDuotoneIcon],svg[ph-bluetooth-connected-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m192 80l-64 48V32Zm-64 144l64-48l-64-48Z" opacity=".2"></svg:path><svg:path d="M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Zm-76-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m156-12a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhBluetoothConnectedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedFillIcon],svg[ph-bluetooth-connected-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4M72 128a12 12 0 1 0-12 12a12 12 0 0 0 12-12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBluetoothConnectedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedLightIcon],svg[ph-bluetooth-connected-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.6 171.2L138 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 122 32v84L67.6 75.2a6 6 0 0 0-7.2 9.6L118 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M134 44l48 36l-48 36Zm0 168v-72l48 36Zm-74-74a10 10 0 1 1 10-10a10 10 0 0 1-10 10m154-10a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBluetoothConnectedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothConnectedThinIcon],svg[ph-bluetooth-connected-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Zm-72-80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m152-8a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBluetoothConnectedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothDuotoneIcon],svg[ph-bluetooth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m192 80l-64 48V32Zm-64 144l64-48l-64-48Z" opacity=".2"></svg:path><svg:path d="M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Z"></svg:path></svg:g>`,
})
export class PhBluetoothDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothFillIcon],svg[ph-bluetooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4"></svg:path>`,
})
export class PhBluetoothFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothLightIcon],svg[ph-bluetooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.6 171.2L138 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 122 32v84L67.6 75.2a6 6 0 0 0-7.2 9.6L118 128l-57.6 43.2a6 6 0 1 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M134 44l48 36l-48 36Zm0 168v-72l48 36Z"></svg:path>`,
})
export class PhBluetoothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashIcon],svg[ph-bluetooth-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.92 210.62l-160-176a8 8 0 0 0-11.84 10.76l70.84 77.93L59.2 169.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l50.83-38.12l26.45 29.1a8 8 0 1 0 11.84-10.76M136 208v-64l11.73 8.8l25.08 27.59ZM120 71.63V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8l-33.53 25.15a8 8 0 0 1-9.6-12.8l25-18.75L136 48v23.63a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhBluetoothSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashBoldIcon],svg[ph-bluetooth-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.88 207.93l-160-176a12 12 0 0 0-17.76 16.14L115 122.75L56.8 166.4a12 12 0 1 0 14.4 19.2L116 152v72a12 12 0 0 0 19.2 9.6l47.91-35.94l24 26.41a12 12 0 0 0 17.76-16.14ZM140 200v-48l5 3.77l21.87 24.06ZM116 59.74V32a12 12 0 0 1 19.2-9.6l64 48a12 12 0 0 1 0 19.2l-27.1 20.33a12 12 0 0 1-14.4-19.2L172 80l-32-24v3.74a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhBluetoothSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashDuotoneIcon],svg[ph-bluetooth-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 128l64 48l-64 48Zm0-96v96l64-48Z" opacity=".2"></svg:path><svg:path d="m221.92 210.62l-160-176a8 8 0 0 0-11.84 10.76l70.84 77.93L59.2 169.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l50.83-38.12l26.45 29.1a8 8 0 1 0 11.84-10.76M136 208v-64l11.73 8.8l25.08 27.59ZM120 71.63V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8l-33.53 25.15a8 8 0 0 1-9.6-12.8l25-18.75L136 48v23.63a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhBluetoothSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashFillIcon],svg[ph-bluetooth-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.38 221.92a8 8 0 0 1-11.3-.54l-26.45-29.1l-50.83 38.12a8 8 0 0 1-8.89.47a8.29 8.29 0 0 1-3.91-7.18V144l-51.2 38.4a8 8 0 0 1-11.16-1.55a8.26 8.26 0 0 1 1.81-11.43l61.47-46.11l-70.84-77.93a8 8 0 0 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M155 113.22a4 4 0 0 0 5.36.51L196.8 86.4a8 8 0 0 0 0-12.8l-64-48a8 8 0 0 0-10 .29a8.25 8.25 0 0 0-2.8 6.35v40.94a4 4 0 0 0 1 2.69Z"></svg:path>`,
})
export class PhBluetoothSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashLightIcon],svg[ph-bluetooth-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.44 212l-160-176a6 6 0 0 0-8.88 8l72.32 79.55L60.4 171.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l52.28-39.21L211.56 220a6 6 0 0 0 8.88-8.08ZM134 212v-72l15.09 11.31l26.68 29.36ZM122 71.63V32a6 6 0 0 1 9.6-4.8l64 48a6 6 0 0 1 0 9.6L162.07 110a6 6 0 0 1-7.2-9.6L182 80l-48-36v27.63a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhBluetoothSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothSlashThinIcon],svg[ph-bluetooth-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219 213.31l-160-176a4 4 0 0 0-6 5.38l74 81.42h-.14a5 5 0 0 0-.51.18l-.15.06h-.05a4 4 0 0 0-.56.35h-.05l-64 48a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 2.21 3.58a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 2.4-.8l53.74-40.3L213 218.69a4 4 0 1 0 5.92-5.38ZM132 216v-80l18.44 13.83L178.73 181Zm-8-144.37V32a4 4 0 0 1 6.4-3.2l64 48a4 4 0 0 1 0 6.4l-33.53 25.15a4 4 0 0 1-2.4.8a4 4 0 0 1-2.4-7.2l29.26-22L132 40v31.63a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhBluetoothSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothThinIcon],svg[ph-bluetooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194.4 172.8L134.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 124 32v88L66.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L124 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4M132 40l53.33 40L132 120Zm0 176v-80l53.33 40Z"></svg:path>`,
})
export class PhBluetoothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXIcon],svg[ph-bluetooth-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.8 169.6L125.33 128l23.47-17.6a8 8 0 0 0-9.6-12.8L120 112V48l19.2 14.4a8 8 0 1 0 9.6-12.8l-32-24A8 8 0 0 0 104 32v80L52.8 73.6a8 8 0 0 0-9.6 12.8L98.67 128L43.2 169.6a8 8 0 1 0 9.6 12.8L104 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M120 208v-64l42.67 32ZM237.66 98.34a8 8 0 0 1-11.32 11.32L208 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L196.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L208 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L219.31 80Z"></svg:path>`,
})
export class PhBluetoothXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXBoldIcon],svg[ph-bluetooth-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.2 166.4L132 128l11.61-8.71a12 12 0 1 0-14.4-19.2L124 104V56l5.21 3.91a12 12 0 1 0 14.4-19.2L119.2 22.4A12 12 0 0 0 100 32v72L55.2 70.4a12 12 0 0 0-14.4 19.2L92 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L100 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M124 200v-48l32 24ZM240.49 95.51a12 12 0 0 1-17 17L208 97l-15.51 15.52a12 12 0 1 1-17-17L191 80l-15.48-15.51a12 12 0 1 1 17-17L208 63l15.51-15.52a12 12 0 0 1 17 17L225 80Z"></svg:path>`,
})
export class PhBluetoothXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXDuotoneIcon],svg[ph-bluetooth-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 176l-64 48v-96Zm-8.53-102.4L112 32v96l55.47-41.6a8 8 0 0 0 0-12.8" opacity=".2"></svg:path><svg:path d="M180.8 169.6L125.33 128l23.47-17.6a8 8 0 0 0-9.6-12.8L120 112V48l19.2 14.4a8 8 0 1 0 9.6-12.8l-32-24A8 8 0 0 0 104 32v80L52.8 73.6a8 8 0 0 0-9.6 12.8L98.67 128L43.2 169.6a8 8 0 1 0 9.6 12.8L104 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M120 208v-64l42.67 32ZM237.66 98.34a8 8 0 0 1-11.32 11.32L208 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L196.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L208 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L219.31 80Z"></svg:path></svg:g>`,
})
export class PhBluetoothXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXFillIcon],svg[ph-bluetooth-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a7.9 7.9 0 0 1-4.11-1.14a8.3 8.3 0 0 1-3.9-7.18V144l-51.23 38.4a8 8 0 0 1-11.16-1.55a8.26 8.26 0 0 1 1.8-11.43L98.66 128L43.38 86.57a8.19 8.19 0 0 1-2.13-10.93a8 8 0 0 1 11.51-2L104 112V32.24a8.21 8.21 0 0 1 2.83-6.34a8 8 0 0 1 10-.3l33.62 25.2A4 4 0 0 1 152 54v52a4 4 0 0 1-1.6 3.2L125.34 128l55.5 41.6A8 8 0 0 1 184 176m53.47-77.87L219.37 80l18.11-18.11a8.21 8.21 0 0 0 .41-11.37a8 8 0 0 0-11.49-.18l-18.35 18.35l-18.12-18.11a8.23 8.23 0 0 0-10.83-.88a8 8 0 0 0-.73 12L196.73 80l-18.15 18.13a8.2 8.2 0 0 0-.6 11.1a8 8 0 0 0 11.71.43l18.36-18.35l18.35 18.35a8 8 0 0 0 11.72-.43a8.21 8.21 0 0 0-.61-11.1Z"></svg:path>`,
})
export class PhBluetoothXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXLightIcon],svg[ph-bluetooth-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.6 171.2L122 128l25.6-19.2a6 6 0 1 0-7.2-9.6L118 116V44l22.4 16.8a6 6 0 1 0 7.2-9.6l-32-24A6 6 0 0 0 106 32v84L51.6 75.2a6 6 0 0 0-7.2 9.6L102 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L106 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6M118 212v-72l48 36ZM236.24 99.76a6 6 0 1 1-8.48 8.48L208 88.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L199.51 80l-19.75-19.76a6 6 0 0 1 8.48-8.48L208 71.51l19.76-19.75a6 6 0 0 1 8.48 8.48L216.49 80Z"></svg:path>`,
})
export class PhBluetoothXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBluetoothXThinIcon],svg[ph-bluetooth-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.4 172.8L118.67 128l27.73-20.8a4 4 0 1 0-4.8-6.4L116 120V40l25.6 19.2a4 4 0 0 0 4.8-6.4l-32-24A4 4 0 0 0 108 32v88L50.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8l-59.73 44.8a4 4 0 0 0 4.8 6.4L108 136v88a4 4 0 0 0 2.21 3.58a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 2.4-.8l64-48a4 4 0 0 0 0-6.4M116 216v-80l53.33 40Zm118.83-114.83a4 4 0 0 1-5.66 5.66L208 85.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L202.34 80l-21.17-21.17a4 4 0 0 1 5.66-5.66L208 74.34l21.17-21.17a4 4 0 1 1 5.66 5.66L213.66 80Z"></svg:path>`,
})
export class PhBluetoothXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatIcon],svg[ph-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.06 110.59L208 106.23V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.23l-13.06 4.36A16 16 0 0 0 24 125.77V152c0 61.54 97.89 86.72 102.06 87.76a8 8 0 0 0 3.88 0C134.11 238.72 232 213.54 232 152v-26.23a16 16 0 0 0-10.94-15.18M64 56h128v44.9l-61.47-20.49a8 8 0 0 0-5.06 0L64 100.9Zm152 96c0 24.91-23.68 43-43.55 53.83A228 228 0 0 1 128 223.72A227 227 0 0 1 83.81 206C47.6 186.35 40 165.79 40 152v-26.23l80-26.67V168a8 8 0 0 0 16 0V99.1l80 26.67Z"></svg:path>`,
})
export class PhBoatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatBoldIcon],svg[ph-boat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.33 106.79L212 103.35V56a20 20 0 0 0-20-20h-52V24a12 12 0 0 0-24 0v12H64a20 20 0 0 0-20 20v47.35l-10.33 3.44a20 20 0 0 0-13.67 19V152c0 64.63 100.8 90.57 105.09 91.64a11.94 11.94 0 0 0 5.82 0C135.2 242.57 236 216.63 236 152v-26.23a20 20 0 0 0-13.67-18.98M68 60h120v35.35l-56.21-18.73a11.85 11.85 0 0 0-7.58 0L68 95.35Zm144 92c0 36.69-58.08 60.43-84 67.59c-25.94-7.17-84-30.9-84-67.59v-23.35l72-24V168a12 12 0 0 0 24 0v-63.35l72 24Z"></svg:path>`,
})
export class PhBoatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatDuotoneIcon],svg[ph-boat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 125.77V152c0 56-96 80-96 80s-96-24-96-80v-26.23a8 8 0 0 1 5.47-7.59L128 88l90.53 30.18a8 8 0 0 1 5.47 7.59" opacity=".2"></svg:path><svg:path d="M221.06 110.59L208 106.23V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.23l-13.06 4.36A16 16 0 0 0 24 125.77V152c0 61.54 97.89 86.72 102.06 87.76a8 8 0 0 0 3.88 0C134.11 238.72 232 213.54 232 152v-26.23a16 16 0 0 0-10.94-15.18M64 56h128v44.9l-61.47-20.49a8 8 0 0 0-5.06 0L64 100.9Zm152 96c0 24.91-23.68 43-43.55 53.83A228 228 0 0 1 128 223.72A227 227 0 0 1 83.81 206C47.6 186.35 40 165.79 40 152v-26.23l80-26.67V168a8 8 0 0 0 16 0V99.1l80 26.67Z"></svg:path></svg:g>`,
})
export class PhBoatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatFillIcon],svg[ph-boat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.06 110.59L208 106.23V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.23l-13.06 4.36A16 16 0 0 0 24 125.77V152c0 61.54 97.89 86.72 102.06 87.76a8 8 0 0 0 3.88 0C134.11 238.72 232 213.54 232 152v-26.23a16 16 0 0 0-10.94-15.18M136 168a8 8 0 0 1-16 0v-63.13a8 8 0 0 1 16 0Zm56-67.1l-61.47-20.49a8 8 0 0 0-5.06 0L64 100.9V56h128Z"></svg:path>`,
})
export class PhBoatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatLightIcon],svg[ph-boat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.43 112.48l-14.43-4.8V56a14 14 0 0 0-14-14h-58V24a6 6 0 0 0-12 0v18H64a14 14 0 0 0-14 14v51.68l-14.43 4.8A14 14 0 0 0 26 125.77V152c0 60 96.44 84.79 100.54 85.82a6 6 0 0 0 2.92 0a235.4 235.4 0 0 0 49.4-19.54C212.32 200.15 230 177.24 230 152v-26.23a14 14 0 0 0-9.57-13.29M62 56a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v47.68l-64.1-21.37a6 6 0 0 0-3.8 0L62 103.68Zm156 96c0 47.1-78.28 70.54-90 73.79c-11.73-3.25-90-26.69-90-73.79v-26.23a2 2 0 0 1 1.37-1.9L122 96.32V168a6 6 0 0 0 12 0V96.32l82.63 27.55a2 2 0 0 1 1.37 1.9Z"></svg:path>`,
})
export class PhBoatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoatThinIcon],svg[ph-boat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.79 114.38L204 109.12V56a12 12 0 0 0-12-12h-60V24a4 4 0 0 0-8 0v20H64a12 12 0 0 0-12 12v53.12l-15.8 5.26a12 12 0 0 0-8.2 11.39V152c0 24.46 17.32 46.77 50.09 64.52A233.2 233.2 0 0 0 127 235.88a4 4 0 0 0 1.94 0a233.2 233.2 0 0 0 48.94-19.36C210.68 198.77 228 176.46 228 152v-26.23a12 12 0 0 0-8.21-11.39M60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v50.45l-66.74-22.24a3.9 3.9 0 0 0-2.52 0L60 106.45Zm160 96c0 49.32-82.08 73.16-92 75.86c-9.92-2.7-92-26.54-92-75.86v-26.23a4 4 0 0 1 2.73-3.8L124 93.55V168a4 4 0 0 0 8 0V93.55L217.26 122a4 4 0 0 1 2.74 3.8Z"></svg:path>`,
})
export class PhBoatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombIcon],svg[ph-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 32a8 8 0 0 0-8 8a52.7 52.7 0 0 1-3.57 17.39C232.38 67.22 225.7 72 216 72c-11.06 0-18.85-9.76-29.49-24.65C176 32.66 164.12 16 144 16c-16.39 0-29 8.89-35.43 25a66 66 0 0 0-3.9 15H88a16 16 0 0 0-16 16v9.59A88 88 0 0 0 112 248h1.59A88 88 0 0 0 152 81.59V72a16 16 0 0 0-16-16h-15.12a46.8 46.8 0 0 1 2.69-9.37C127.62 36.78 134.3 32 144 32c11.06 0 18.85 9.76 29.49 24.65C184 71.34 195.88 88 216 88c16.39 0 29-8.89 35.43-25A68.7 68.7 0 0 0 256 40a8 8 0 0 0-8-8M140.8 94a72 72 0 1 1-57.6 0a8 8 0 0 0 4.8-7.34V72h48v14.66a8 8 0 0 0 4.8 7.34m-28.91 115.32A8 8 0 0 1 104 216a8.5 8.5 0 0 1-1.33-.11a57.5 57.5 0 0 1-46.57-46.57a8 8 0 1 1 15.78-2.64a41.29 41.29 0 0 0 33.43 33.43a8 8 0 0 1 6.58 9.21"></svg:path>`,
})
export class PhBombIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombBoldIcon],svg[ph-bomb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 28a12 12 0 0 0-12 12a48.7 48.7 0 0 1-3.33 16c-4.44 10.64-11.24 12-16.67 12c-8.81 0-14.91-8.5-23.91-22.49C178.5 30.58 166.55 12 144 12c-18.14 0-32 9.78-39.14 27.54A68.3 68.3 0 0 0 101.27 52H88a20 20 0 0 0-20 20v7.18A92 92 0 0 0 112 252h1.66A92 92 0 0 0 156 79.18V72a20 20 0 0 0-20-20h-10.07a41 41 0 0 1 1.4-4c4.44-10.62 11.24-12 16.67-12c8.81 0 14.91 8.5 23.91 22.49C177.5 73.42 189.45 92 212 92c18.14 0 32-9.78 39.14-27.54A71.9 71.9 0 0 0 256 40a12 12 0 0 0-12-12M139.2 97.65a68 68 0 1 1-54.4 0a12 12 0 0 0 7.2-11V76h40v10.66a12 12 0 0 0 7.2 10.99m-27.75 104.11a12 12 0 0 1-11.45 8.41a12.2 12.2 0 0 1-3.6-.55A51.79 51.79 0 0 1 60 160a12 12 0 0 1 24 0a27.89 27.89 0 0 0 19.6 26.72a12 12 0 0 1 7.85 15.04"></svg:path>`,
})
export class PhBombBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombDuotoneIcon],svg[ph-bomb-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 160A80 80 0 1 1 80 86.66V72a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v14.66A80 80 0 0 1 192 160" opacity=".2"></svg:path><svg:path d="M248 32a8 8 0 0 0-8 8a52.7 52.7 0 0 1-3.57 17.39C232.38 67.22 225.7 72 216 72c-11.06 0-18.85-9.76-29.49-24.65C176 32.66 164.12 16 144 16c-16.39 0-29 8.89-35.43 25a66 66 0 0 0-3.9 15H88a16 16 0 0 0-16 16v9.59A88 88 0 0 0 112 248h1.59A88 88 0 0 0 152 81.59V72a16 16 0 0 0-16-16h-15.12a46.8 46.8 0 0 1 2.69-9.37C127.62 36.78 134.3 32 144 32c11.06 0 18.85 9.76 29.49 24.65C184 71.34 195.88 88 216 88c16.39 0 29-8.89 35.43-25A68.7 68.7 0 0 0 256 40a8 8 0 0 0-8-8M140.8 94a72 72 0 1 1-57.6 0a8 8 0 0 0 4.8-7.34V72h48v14.66a8 8 0 0 0 4.8 7.34m-28.91 115.32A8 8 0 0 1 104 216a8.5 8.5 0 0 1-1.33-.11a57.5 57.5 0 0 1-46.57-46.57a8 8 0 1 1 15.78-2.64a41.29 41.29 0 0 0 33.43 33.43a8 8 0 0 1 6.58 9.21"></svg:path></svg:g>`,
})
export class PhBombDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombFillIcon],svg[ph-bomb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 32a8 8 0 0 0-8 8a52.7 52.7 0 0 1-3.57 17.39C232.38 67.22 225.7 72 216 72c-11.06 0-18.85-9.76-29.49-24.65C176 32.66 164.12 16 144 16c-16.39 0-29 8.89-35.43 25a66 66 0 0 0-3.9 15H88a16 16 0 0 0-16 16v9.59A88 88 0 0 0 112 248h1.59A88 88 0 0 0 152 81.59V72a16 16 0 0 0-16-16h-15.12a46.8 46.8 0 0 1 2.69-9.37C127.62 36.78 134.3 32 144 32c11.06 0 18.85 9.76 29.49 24.65C184 71.34 195.88 88 216 88c16.39 0 29-8.89 35.43-25A68.7 68.7 0 0 0 256 40a8 8 0 0 0-8-8M111.89 209.32A8 8 0 0 1 104 216a8.5 8.5 0 0 1-1.33-.11a57.5 57.5 0 0 1-46.57-46.57a8 8 0 1 1 15.78-2.64a41.29 41.29 0 0 0 33.43 33.43a8 8 0 0 1 6.58 9.21"></svg:path>`,
})
export class PhBombFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombLightIcon],svg[ph-bomb-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 34a6 6 0 0 0-6 6a54.1 54.1 0 0 1-3.57 17.77C234.06 68.69 226.72 74 216 74c-12.91 0-21.76-12.38-31.12-25.49C174.67 34.21 163.09 18 144 18c-15.74 0-27.35 8.22-33.57 23.77a65.4 65.4 0 0 0-4 16.23H88a14 14 0 0 0-14 14v10.83A86 86 0 0 0 112 246h1.55A86 86 0 0 0 150 82.83V72a14 14 0 0 0-14-14h-17.47a51.4 51.4 0 0 1 3.15-12c4.38-10.74 11.69-16 22.32-16c12.91 0 21.75 12.38 31.12 25.49C185.33 69.79 196.91 86 216 86c15.74 0 27.35-8.22 33.57-23.77A66.5 66.5 0 0 0 254 40a6 6 0 0 0-6-6M138 72v14.66a6 6 0 0 0 3.6 5.49a74 74 0 1 1-59.2 0a6 6 0 0 0 3.6-5.49V72a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2m-33 130.08a6 6 0 0 1-1 11.92a7 7 0 0 1-1-.08A55.48 55.48 0 0 1 58.08 169a6 6 0 1 1 11.84-2A43.29 43.29 0 0 0 105 202.08"></svg:path>`,
})
export class PhBombLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBombThinIcon],svg[ph-bomb-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 36a4 4 0 0 0-4 4c0 1.47-.42 36-28 36c-13.94 0-23.08-12.79-32.75-26.33C172.83 35.09 162.06 20 144 20c-14.86 0-25.82 7.79-31.71 22.51A63.7 63.7 0 0 0 108.22 60H88a12 12 0 0 0-12 12v12.08A84 84 0 0 0 112 244h1.51A84 84 0 0 0 148 84.08V72a12 12 0 0 0-12-12h-19.76c.92-9.42 5.45-32 27.76-32c13.94 0 23.08 12.79 32.75 26.33C187.17 68.91 197.94 84 216 84c14.86 0 25.82-7.79 31.71-22.51A64.3 64.3 0 0 0 252 40a4 4 0 0 0-4-4M140 72v14.66a4 4 0 0 0 2.4 3.66a76 76 0 1 1-60.8 0a4 4 0 0 0 2.4-3.66V72a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4m-35.34 132.05A4 4 0 0 1 104 212a5 5 0 0 1-.66-.05a53.46 53.46 0 0 1-43.29-43.29a4 4 0 0 1 7.9-1.32a45.31 45.31 0 0 0 36.71 36.71"></svg:path>`,
})
export class PhBombThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneIcon],svg[ph-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></svg:path>`,
})
export class PhBoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneBoldIcon],svg[ph-bone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.74 58.31a39.9 39.9 0 0 0-23.35-13.7a40 40 0 1 0-74.86 25.87l-66 66.05a40 40 0 1 0-25.87 74.86a40 40 0 1 0 74.86-25.86l66.05-66.06a40 40 0 0 0 49.22-61.16Zm-18.64 36.2a16 16 0 0 1-20.54 3a20 20 0 0 0-24.84 2.76l-70.4 70.4a20 20 0 0 0-2.75 24.84a16 16 0 1 1-29.41 6A12 12 0 0 0 56.3 187.7a11.6 11.6 0 0 0-1.85.14a16 16 0 1 1 6-29.4a20 20 0 0 0 24.83-2.76l70.4-70.4a20 20 0 0 0 2.76-24.84a16 16 0 1 1 29.4-6a12 12 0 0 0 13.71 13.71a16 16 0 0 1 14.55 26.36"></svg:path>`,
})
export class PhBoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneDuotoneIcon],svg[ph-bone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M225.09 102.44a28 28 0 0 1-35.92 5.3a8 8 0 0 0-10 1.07l-70.38 70.38a8 8 0 0 0-1.07 10A28 28 0 1 1 56.3 199.7a28 28 0 1 1 10.51-51.42a8 8 0 0 0 10-1.07l70.38-70.38a8 8 0 0 0 1.07-10a28 28 0 1 1 51.42-10.51a28 28 0 0 1 25.41 46.12" opacity=".2"></svg:path><svg:path d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74a36 36 0 1 0-66.37 22.92a.3.3 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37a36 36 0 1 0 66.37-22.92v-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8a16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88a20 20 0 1 1-36.75 7.5a8 8 0 0 0-7.91-9.24a8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5a8 8 0 0 0 9.14 9.14a20 20 0 0 1 18.17 33Z"></svg:path></svg:g>`,
})
export class PhBoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneFillIcon],svg[ph-bone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.12 107.72a35.91 35.91 0 0 1-46.19 6.8a.14.14 0 0 0-.1 0l-70.35 70.36v.08a36 36 0 1 1-66.37 22.92a36 36 0 1 1 22.92-66.37a.14.14 0 0 0 .1 0l70.35-70.36v-.08a36 36 0 1 1 66.37-22.92a36 36 0 0 1 23.27 59.57"></svg:path>`,
})
export class PhBoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneLightIcon],svg[ph-bone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.14 62.17A33.88 33.88 0 0 0 206 50a34 34 0 1 0-62.81 20a2 2 0 0 1-.23 2.54L72.56 143a2.06 2.06 0 0 1-2.55.23A34 34 0 1 0 50 206a34 34 0 1 0 62.81-20a2 2 0 0 1 .23-2.54l70.4-70.4a2 2 0 0 1 2.54-.23a34 34 0 0 0 44.15-50.65Zm-9.54 36.31a22 22 0 0 1-28.24 4.17a14 14 0 0 0-17.4 1.92L104.57 175a14 14 0 0 0-1.92 17.4a22 22 0 1 1-40.41 8.26a6 6 0 0 0-5.93-6.93a7 7 0 0 0-.93.07a22 22 0 1 1 8.26-40.41A14 14 0 0 0 81 151.43L151.43 81a14 14 0 0 0 1.92-17.4a22 22 0 1 1 40.41-8.26a6 6 0 0 0 6.86 6.86a22 22 0 0 1 20 36.24Z"></svg:path>`,
})
export class PhBoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoneThinIcon],svg[ph-bone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.6 63.46A31.83 31.83 0 0 0 204.1 52h-.1a32 32 0 1 0-59.17 17a4 4 0 0 1-.51 5L74 144.36a4 4 0 0 1-5 .51A32 32 0 1 0 51.9 204h.1a32 32 0 1 0 59.16-17a4 4 0 0 1 .51-5L182 111.64a4 4 0 0 1 5-.51a32 32 0 0 0 41.6-47.67m-6.5 36.34a24 24 0 0 1-30.8 4.55a12 12 0 0 0-14.93 1.65L106 176.37a12 12 0 0 0-1.63 14.93a24 24 0 1 1-44.09 9a4 4 0 0 0-1.12-3.45a4 4 0 0 0-2.83-1.17a4 4 0 0 0-.62.05a24 24 0 1 1 9-44.09A12 12 0 0 0 79.63 150L150 79.63a12 12 0 0 0 1.63-14.93a24 24 0 1 1 44.09-9a4 4 0 0 0 4.57 4.57A24 24 0 0 1 222.1 99.8"></svg:path>`,
})
export class PhBoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookIcon],svg[ph-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z"></svg:path>`,
})
export class PhBookIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBoldIcon],svg[ph-book-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 20H72a36 36 0 0 0-36 36v168a12 12 0 0 0 12 12h144a12 12 0 0 0 0-24H60v-4a12 12 0 0 1 12-12h136a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12m-12 152H72a35.6 35.6 0 0 0-12 2.06V56a12 12 0 0 1 12-12h124Z"></svg:path>`,
})
export class PhBookBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkIcon],svg[ph-book-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-88 16h48v72l-19.21-14.4a8 8 0 0 0-9.6 0L120 112Zm80 144H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h32v88a8 8 0 0 0 12.8 6.4L144 114l27.21 20.4A8 8 0 0 0 176 136a8 8 0 0 0 8-8V40h16Z"></svg:path>`,
})
export class PhBookBookmarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkBoldIcon],svg[ph-book-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 20H72a36 36 0 0 0-36 36v168a12 12 0 0 0 12 12h144a12 12 0 0 0 0-24H60v-4a12 12 0 0 1 12-12h136a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12m-88 24h36v59l-10.51-8.41a12 12 0 0 0-15 0L120 103Zm76 128H72a35.6 35.6 0 0 0-12 2.06V56a12 12 0 0 1 12-12h24v84a12 12 0 0 0 19.5 9.37l22.49-18l22.51 18A12 12 0 0 0 180 128V44h16Z"></svg:path>`,
})
export class PhBookBookmarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkDuotoneIcon],svg[ph-book-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24h40v96l32-24l32 24V32Z" opacity=".2"></svg:path><svg:path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-88 16h48v72l-19.21-14.4a8 8 0 0 0-9.6 0L120 112Zm80 144H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h32v88a8 8 0 0 0 12.8 6.4L144 114l27.21 20.4A8 8 0 0 0 176 136a8.1 8.1 0 0 0 3.58-.84A8 8 0 0 0 184 128V40h16Z"></svg:path></svg:g>`,
})
export class PhBookBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkFillIcon],svg[ph-book-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-24 96l-25.61-19.2a4 4 0 0 0-4.8 0L128 120V40h56Z"></svg:path>`,
})
export class PhBookBookmarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkLightIcon],svg[ph-book-bookmark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-90 12h52v78l-22.41-16.8a6 6 0 0 0-7.2 0L118 116Zm84 148H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h34v90a6 6 0 0 0 9.6 4.8l28.4-21.3l28.41 21.3A6 6 0 0 0 182 128V38h20Z"></svg:path>`,
})
export class PhBookBookmarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkThinIcon],svg[ph-book-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4m-92 8h56v84l-25.61-19.2a4 4 0 0 0-4.8 0L116 120Zm88 152H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h36v92a4 4 0 0 0 6.4 3.2L144 109l29.61 22.2a4 4 0 0 0 2.4.8a4 4 0 0 0 4-4V36h24Z"></svg:path>`,
})
export class PhBookBookmarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookDuotoneIcon],svg[ph-book-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z" opacity=".2"></svg:path><svg:path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z"></svg:path></svg:g>`,
})
export class PhBookDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookFillIcon],svg[ph-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32v160a8 8 0 0 1-8 8H72a16 16 0 0 0-16 16h136a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8V56a32 32 0 0 1 32-32h136a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBookFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookLightIcon],svg[ph-book-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"></svg:path>`,
})
export class PhBookLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenIcon],svg[ph-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z"></svg:path>`,
})
export class PhBookOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenBoldIcon],svg[ph-book-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 44H24a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M96 188H36V68h60a20 20 0 0 1 20 20v104.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V88a20 20 0 0 1 20-20h60Z"></svg:path>`,
})
export class PhBookOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenDuotoneIcon],svg[ph-book-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144h-72a32 32 0 0 0-32 32a32 32 0 0 0-32-32H24V56h72a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z"></svg:path></svg:g>`,
})
export class PhBookOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenFillIcon],svg[ph-book-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v144a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94a7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v87.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V80a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBookOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenLightIcon],svg[ph-book-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 50H24a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M96 194H30V62h66a26 26 0 0 1 26 26v116.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.87 37.87 0 0 0-26 10.32V88a26 26 0 0 1 26-26h66Z"></svg:path>`,
})
export class PhBookOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextIcon],svg[ph-book-open-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64ZM160 88h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16m48 40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBookOpenTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextBoldIcon],svg[ph-book-open-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 44H24a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M96 188H36V68h60a20 20 0 0 1 20 20v104.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V88a20 20 0 0 1 20-20h60Zm-56-92h32a12 12 0 0 1 0 24h-32a12 12 0 0 1 0-24m44 52a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBookOpenTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextDuotoneIcon],svg[ph-book-open-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144h-72a32 32 0 0 0-32 32V88a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64ZM160 88h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16m48 40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBookOpenTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextFillIcon],svg[ph-book-open-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48h-64a32 32 0 0 0-32 32v87.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V80a32 32 0 0 0-32-32H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 23.94a7.9 7.9 0 0 0 5.12 7.55A8 8 0 0 0 136 232a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-24 120h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m0-32h-39.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h39.73a8.17 8.17 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53"></svg:path>`,
})
export class PhBookOpenTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextLightIcon],svg[ph-book-open-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 50H24a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M96 194H30V62h66a26 26 0 0 1 26 26v116.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.87 37.87 0 0 0-26 10.32V88a26 26 0 0 1 26-26h66ZM160 90h40a6 6 0 0 1 0 12h-40a6 6 0 0 1 0-12m46 38a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBookOpenTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenTextThinIcon],svg[ph-book-open-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H24a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M96 196H28V60h68a28 28 0 0 1 28 28v121.4A35.94 35.94 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h68ZM160 92h40a4 4 0 0 1 0 8h-40a4 4 0 0 1 0-8m44 36a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhBookOpenTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenThinIcon],svg[ph-book-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H24a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M96 196H28V60h68a28 28 0 0 1 28 28v121.4A35.93 35.93 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h68Z"></svg:path>`,
})
export class PhBookOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserIcon],svg[ph-book-open-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 72h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8M96 192H32V88h64a24 24 0 0 1 24 24v88a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8v-88a24 24 0 0 1 24-24h64ZM89.6 43.19a48 48 0 0 1 76.8 0a8 8 0 0 1-12.79 9.62a32 32 0 0 0-51.22 0a8 8 0 1 1-12.79-9.62"></svg:path>`,
})
export class PhBookOpenUserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserBoldIcon],svg[ph-book-open-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 72h-72a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 72H24a12 12 0 0 0-12 12v116a12 12 0 0 0 12 12h72a20 20 0 0 1 20 20a12 12 0 0 0 24 0a20 20 0 0 1 20-20h72a12 12 0 0 0 12-12V84a12 12 0 0 0-12-12M96 188H36V96h60a20 20 0 0 1 20 20v76.81A43.8 43.8 0 0 0 96 188m124 0h-60a43.7 43.7 0 0 0-20 4.83V116a20 20 0 0 1 20-20h60ZM86.4 40.79a52 52 0 0 1 83.2 0a12 12 0 0 1-19.19 14.42a28 28 0 0 0-44.82 0A12 12 0 0 1 86.4 40.79"></svg:path>`,
})
export class PhBookOpenUserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserDuotoneIcon],svg[ph-book-open-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v120h-72a32 32 0 0 0-32 32a32 32 0 0 0-32-32H24V80h72a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M232 72h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8M96 192H32V88h64a24 24 0 0 1 24 24v88a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8v-88a24 24 0 0 1 24-24h64ZM89.6 43.19a48 48 0 0 1 76.8 0a8 8 0 0 1-12.79 9.62a32 32 0 0 0-51.22 0a8 8 0 1 1-12.79-9.62"></svg:path></svg:g>`,
})
export class PhBookOpenUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserFillIcon],svg[ph-book-open-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80v120a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94a7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v63.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V104a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8M88.81 56H89a47.92 47.92 0 0 1 36 17.4a4 4 0 0 0 6.08 0A47.92 47.92 0 0 1 167 56h.19a4 4 0 0 0 3.54-5.84a48 48 0 0 0-85.46 0A4 4 0 0 0 88.81 56"></svg:path>`,
})
export class PhBookOpenUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserLightIcon],svg[ph-book-open-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 74h-72a38 38 0 0 0-32 17.55A38 38 0 0 0 96 74H24a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h72a26 26 0 0 1 26 26a6 6 0 0 0 12 0a26 26 0 0 1 26-26h72a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6M96 194H30V86h66a26 26 0 0 1 26 26v92.31A37.86 37.86 0 0 0 96 194m130 0h-66a37.83 37.83 0 0 0-26 10.33V112a26 26 0 0 1 26-26h66ZM91.2 44.4a46 46 0 0 1 73.6 0a6 6 0 1 1-9.6 7.2a34 34 0 0 0-54.4 0a6 6 0 1 1-9.6-7.2"></svg:path>`,
})
export class PhBookOpenUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserThinIcon],svg[ph-book-open-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 76h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 76H24a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28a4 4 0 0 0 8 0a28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4M96 196H28V84h68a28 28 0 0 1 28 28v97.4A35.93 35.93 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V112a28 28 0 0 1 28-28h68ZM92.8 45.6a44 44 0 0 1 70.4 0a4 4 0 0 1-6.4 4.8a36 36 0 0 0-57.6 0a4 4 0 1 1-6.4-4.8"></svg:path>`,
})
export class PhBookOpenUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookThinIcon],svg[ph-book-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4m-4 160H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h132Z"></svg:path>`,
})
export class PhBookThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkIcon],svg[ph-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 16v113.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 161.56V48Zm-51.77 129.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"></svg:path>`,
})
export class PhBookmarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkBoldIcon],svg[ph-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a20 20 0 0 0-20 20v176a12 12 0 0 0 18.36 10.18l57.63-36l57.65 36A12 12 0 0 0 204 224V48a20 20 0 0 0-20-20m-4 24v102.35l-45.65-28.53a12 12 0 0 0-12.72 0L76 154.35V52Zm-45.65 121.82a12 12 0 0 0-12.72 0L76 202.35v-19.7l52-32.5l52 32.5v19.7Z"></svg:path>`,
})
export class PhBookmarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkDuotoneIcon],svg[ph-bookmark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 176v48l-64-40l-64 40v-48l64-40Z" opacity=".2"></svg:path><svg:path d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 16v113.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 161.56V48Zm-51.77 129.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"></svg:path></svg:g>`,
})
export class PhBookmarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkFillIcon],svg[ph-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m-51.77 145.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"></svg:path>`,
})
export class PhBookmarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkLightIcon],svg[ph-bookmark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38l60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14M72 46h112a2 2 0 0 1 2 2v117.18l-54.83-34.27a6 6 0 0 0-6.36 0L70 165.17V48a2 2 0 0 1 2-2m59.17 132.91a6 6 0 0 0-6.36 0L70 213.17v-33.84l58-36.25l58 36.25v33.84Z"></svg:path>`,
})
export class PhBookmarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleIcon],svg[ph-bookmark-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z"></svg:path>`,
})
export class PhBookmarkSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleBoldIcon],svg[ph-bookmark-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a20 20 0 0 0-20 20v176a12 12 0 0 0 18.36 10.18l57.63-36l57.65 36A12 12 0 0 0 204 224V48a20 20 0 0 0-20-20m-4 174.35l-45.65-28.53a12 12 0 0 0-12.72 0L76 202.35V52h104Z"></svg:path>`,
})
export class PhBookmarkSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleDuotoneIcon],svg[ph-bookmark-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z"></svg:path></svg:g>`,
})
export class PhBookmarkSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleFillIcon],svg[ph-bookmark-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhBookmarkSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleLightIcon],svg[ph-bookmark-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38l60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14m2 179.17l-54.83-34.26a6 6 0 0 0-6.36 0L70 213.17V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBookmarkSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkSimpleThinIcon],svg[ph-bookmark-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12m4 180.78l-57.89-36.17a4 4 0 0 0-4.24 0L68 216.78V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBookmarkSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarkThinIcon],svg[ph-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12M72 44h112a4 4 0 0 1 4 4v120.78l-57.89-36.17a4 4 0 0 0-4.24 0L68 168.78V48a4 4 0 0 1 4-4m58.11 136.61a4 4 0 0 0-4.24 0L68 216.78v-38.56l60-37.5l60 37.5v38.56Z"></svg:path>`,
})
export class PhBookmarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksIcon],svg[ph-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H96a16 16 0 0 0-16 16v16H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224v-39.31l19.35 13.82A8 8 0 0 0 208 192V40a16 16 0 0 0-16-16m-32 184.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96Zm32-32L176 165V72a16 16 0 0 0-16-16H96V40h96Z"></svg:path>`,
})
export class PhBookmarksIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksBoldIcon],svg[ph-bookmarks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H96a20 20 0 0 0-20 20v20H64a20 20 0 0 0-20 20v144a12 12 0 0 0 19.32 9.51L108 199.14l44.69 34.37A12 12 0 0 0 172 224v-46.4l20.68 15.91A12 12 0 0 0 212 184V40a20 20 0 0 0-20-20m-44 179.63l-32.69-25.14a12 12 0 0 0-14.63 0L68 199.63V84h80Zm40-40l-16-12.3V80a20 20 0 0 0-20-20h-52V44h88Z"></svg:path>`,
})
export class PhBookmarksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksDuotoneIcon],svg[ph-bookmarks-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v152l-32-22.85V72a8 8 0 0 0-8-8H88V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 24H96a16 16 0 0 0-16 16v16H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224v-39.31l19.35 13.82A8 8 0 0 0 208 192V40a16 16 0 0 0-16-16m-32 184.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96Zm32-32L176 165V72a16 16 0 0 0-16-16H96V40h96Z"></svg:path></svg:g>`,
})
export class PhBookmarksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksFillIcon],svg[ph-bookmarks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H96a16 16 0 0 0-16 16v16H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224v-39.31l19.35 13.82A8 8 0 0 0 208 192V40a16 16 0 0 0-16-16m0 152.46L176 165V72a16 16 0 0 0-16-16H96V40h96Z"></svg:path>`,
})
export class PhBookmarksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksLightIcon],svg[ph-bookmarks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H96a14 14 0 0 0-14 14v18H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224v-43.2l22.51 16.08A6 6 0 0 0 206 192V40a14 14 0 0 0-14-14m-30 186.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Zm32-32l-20-14.28V72a14 14 0 0 0-14-14H94V40a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBookmarksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleIcon],svg[ph-bookmarks-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16m0 152.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96ZM208 40v152a8 8 0 0 1-16 0V40H88a8 8 0 0 1 0-16h104a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBookmarksSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleBoldIcon],svg[ph-bookmarks-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 56H60a20 20 0 0 0-20 20v152a12 12 0 0 0 19 9.76l49-35l49 35a12 12 0 0 0 19-9.76V76a20 20 0 0 0-20-20m-4 148.68l-37-26.45a12 12 0 0 0-14 0l-37 26.45V80h88ZM216 36v152a12 12 0 0 1-24 0V40H92a12 12 0 0 1 0-24h104a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhBookmarksSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleDuotoneIcon],svg[ph-bookmarks-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 72v152l-56-40l-56 40V72a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16m0 152.46l-43.36-31a8 8 0 0 0-9.3 0L64 208.45V72h96ZM208 40v152a8 8 0 0 1-16 0V40H88a8 8 0 0 1 0-16h104a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhBookmarksSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleFillIcon],svg[ph-bookmarks-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16"></svg:path><svg:path d="M192 24H88a8 8 0 0 0 0 16h104v152a8 8 0 0 0 16 0V40a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhBookmarksSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleLightIcon],svg[ph-bookmarks-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 58H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224V72a14 14 0 0 0-14-14m2 154.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2ZM206 40v152a6 6 0 0 1-12 0V40a2 2 0 0 0-2-2H88a6 6 0 0 1 0-12h104a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhBookmarksSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksSimpleThinIcon],svg[ph-bookmarks-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 60H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 172 224V72a12 12 0 0 0-12-12m4 156.23l-49.68-35.49a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM204 40v152a4 4 0 0 1-8 0V40a4 4 0 0 0-4-4H88a4 4 0 0 1 0-8h104a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBookmarksSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBookmarksThinIcon],svg[ph-bookmarks-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H96a12 12 0 0 0-12 12v20H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 172 224v-47.08l25.68 18.33a3.94 3.94 0 0 0 2.32.75a4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 204 192V40a12 12 0 0 0-12-12m-28 188.23l-49.68-35.48a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Zm32-32l-24-17.14V72a12 12 0 0 0-12-12H92V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBookmarksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksIcon],svg[ph-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm6.62 31.47l46.82-10.05l3.34 15.9L146 97.53Zm6.64 31.57l46.82-10.06l13.3 63.24l-46.82 10.06ZM216 197.94l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z"></svg:path>`,
})
export class PhBooksIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksBoldIcon],svg[ph-books-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.57 193.73l-33.19-157.8a20 20 0 0 0-23.76-15.48l-46.81 10.06a19.82 19.82 0 0 0-11 6.65A20 20 0 0 0 104 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V90.25l25.62 121.82A20 20 0 0 0 169.15 228a20.3 20.3 0 0 0 4.23-.45l46.81-10.06a20.1 20.1 0 0 0 15.38-23.76M148.19 88.65l39-8.38l2.53 12l-39 8.38Zm7.46 35.5l39-8.38l9.16 43.58l-39 8.38Zm24.06-79.39l2.53 12l-39 8.38l-2.53-12ZM60 88h40v80H60Zm40-36v12H60V52ZM60 204v-12h40v12Zm112.29-.76l-2.53-12l39-8.38l2.53 12Z"></svg:path>`,
})
export class PhBooksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksDuotoneIcon],svg[ph-books-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 72h64v112H48Zm142.64-33.61a8 8 0 0 0-9.5-6.21l-46.81 10a8.07 8.07 0 0 0-6.15 9.57L139.79 107l62.46-13.42Z" opacity=".2"></svg:path><svg:path d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm6.62 31.47l46.82-10.05l3.34 15.9L146 97.53Zm6.64 31.57l46.82-10.06l13.3 63.24l-46.82 10.06ZM216 197.94l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z"></svg:path></svg:g>`,
})
export class PhBooksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksFillIcon],svg[ph-books-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z"></svg:path>`,
})
export class PhBooksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksLightIcon],svg[ph-books-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M54 78h52v100H54Zm2-32h48a2 2 0 0 1 2 2v18H54V48a2 2 0 0 1 2-2m48 164H56a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2m125.7-15L196.51 37.16a14 14 0 0 0-16.63-10.85l-46.81 10.06A14.09 14.09 0 0 0 122.3 53l33.19 157.81a14 14 0 0 0 6.1 8.9a13.85 13.85 0 0 0 7.57 2.26a13.6 13.6 0 0 0 3-.32l46.81-10.05A14.09 14.09 0 0 0 229.7 195m-82.81-83.32l50.73-10.9l14.12 67.16L161 178.81Zm-6.63-31.56L191 69.19L195.15 89l-50.73 10.9Zm-4.66-32l46.8-10.05a2 2 0 0 1 .42 0a1.9 1.9 0 0 1 1.05.32a2 2 0 0 1 .89 1.31l3.75 17.82l-50.72 10.82l-3.74-17.78a2.07 2.07 0 0 1 1.55-2.46Zm80.81 151.8L169.6 210a1.92 1.92 0 0 1-1.47-.27a2 2 0 0 1-.89-1.31l-3.75-17.82l50.72-10.9l3.79 17.73a2.07 2.07 0 0 1-1.59 2.47Z"></svg:path>`,
})
export class PhBooksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBooksThinIcon],svg[ph-books-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M52 76h56v104H52Zm4-32h48a4 4 0 0 1 4 4v20H52V48a4 4 0 0 1 4-4m48 168H56a4 4 0 0 1-4-4v-20h56v20a4 4 0 0 1-4 4m123.74-16.62L194.55 37.57a12 12 0 0 0-14.25-9.3l-46.81 10.05a12.1 12.1 0 0 0-9.23 14.3l33.19 157.81a12 12 0 0 0 14.25 9.3l46.81-10.06a12.08 12.08 0 0 0 9.23-14.29m-83.21-85.27l54.63-11.73l15 71.07l-54.63 11.74Zm-6.64-31.56l54.64-11.74l5 23.74l-54.64 11.73Zm-2.71-32.4L182 36.09a4 4 0 0 1 .84-.09a3.94 3.94 0 0 1 2.14.64a4 4 0 0 1 1.76 2.58L190.88 59l-54.64 11.72L132.09 51a4.07 4.07 0 0 1 3.09-4.85m81.65 155.7L170 211.91a4 4 0 0 1-3-.55a4 4 0 0 1-1.76-2.58L161.12 189l54.64-11.73l4.15 19.73a4.07 4.07 0 0 1-3.08 4.85"></svg:path>`,
})
export class PhBooksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootIcon],svg[ph-boot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 112h-32V56a16 16 0 0 0-16-16H32a8 8 0 0 0-7.47 10.86c11.06 28.84 8.76 83.71-.22 114.93A8.3 8.3 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56.06 56.06 0 0 0-56-56M42.86 56H144v24h-32a8 8 0 0 0 0 16h32v16h-32a8 8 0 0 0 0 16h80a40.07 40.07 0 0 1 39.2 32H42.25c6.75-30.84 8.16-74.17.61-104M232 200h-26.11l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192Z"></svg:path>`,
})
export class PhBootIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootBoldIcon],svg[ph-boot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 104h-28V56a20 20 0 0 0-20-20H32a12 12 0 0 0-11.2 16.3c10.88 28.39 8.3 78.36-.33 108.38A12 12 0 0 0 20 164v36a20 20 0 0 0 20 20h26.11a20.16 20.16 0 0 0 9-2.11L86.83 212h14.34l11.77 5.89a20.16 20.16 0 0 0 9 2.11h28.22a20.16 20.16 0 0 0 8.95-2.11l11.72-5.89h14.34l11.77 5.89a20.16 20.16 0 0 0 8.95 2.11H232a20 20 0 0 0 20-20v-36a60.07 60.07 0 0 0-60-60M48 60h92v44h-24a12 12 0 0 0 0 24h76a36.07 36.07 0 0 1 33.94 24H47.21c5.54-27.92 7.02-63.59.79-92m180 136h-21.17l-11.77-5.89a20.16 20.16 0 0 0-8.95-2.11h-16.22a20.16 20.16 0 0 0-8.95 2.11L149.17 196h-26.34l-11.77-5.89a20.16 20.16 0 0 0-9-2.11H85.89a20.16 20.16 0 0 0-9 2.11L65.17 196H44v-20h184Z"></svg:path>`,
})
export class PhBootBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootDuotoneIcon],svg[ph-boot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 168c9.22-32.06 12-88.65 0-120h112a8 8 0 0 1 8 8v64h40a48 48 0 0 1 48 48Z" opacity=".2"></svg:path><svg:path d="M192 112h-32V56a16 16 0 0 0-16-16H32a8 8 0 0 0-7.47 10.86c11.06 28.84 8.76 83.71-.22 114.93A8.3 8.3 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56.06 56.06 0 0 0-56-56m-48-56v24h-32a8 8 0 0 0 0 16h32v16h-32a8 8 0 0 0 0 16h80a40.07 40.07 0 0 1 39.2 32H42.25c6.74-30.84 8.16-74.17.61-104Zm61.89 144l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192v24Z"></svg:path></svg:g>`,
})
export class PhBootDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootFillIcon],svg[ph-boot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 112h-79.73a8.17 8.17 0 0 1-8.25-7.47A8 8 0 0 1 112 96h44a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-43.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h44a4 4 0 0 0 4-4v-4a16 16 0 0 0-16-16H32.22a8.23 8.23 0 0 0-5.08 1.64a8 8 0 0 0-2.61 9.22c11.06 28.84 8.76 83.71-.22 114.93A8 8 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56 56 0 0 0-56-56m40 88h-26.11l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192Z"></svg:path>`,
})
export class PhBootFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootLightIcon],svg[ph-boot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 114h-34V56a14 14 0 0 0-14-14H32a6 6 0 0 0-5.6 8.15c9 23.44 11.13 76.92-.17 116.19A6.2 6.2 0 0 0 26 168v32a14 14 0 0 0 14 14h26.11a14 14 0 0 0 6.26-1.48L85 206.21a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48h28.22a14 14 0 0 0 6.26-1.48l12.62-6.31a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48H232a14 14 0 0 0 14-14v-32a54.06 54.06 0 0 0-54-54M40.27 54H144a2 2 0 0 1 2 2v26h-34a6 6 0 0 0 0 12h34v20h-34a6 6 0 0 0 0 12h80a42.05 42.05 0 0 1 41.56 36H39.75c7.36-31.56 8.96-77.69.52-108M234 200a2 2 0 0 1-2 2h-26.11a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48h-16.22a14 14 0 0 0-6.26 1.48L151 201.79a2 2 0 0 1-.9.21h-28.21a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48H85.89a14 14 0 0 0-6.26 1.48L67 201.79a2 2 0 0 1-.9.21H40a2 2 0 0 1-2-2v-26h196Z"></svg:path>`,
})
export class PhBootLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBootThinIcon],svg[ph-boot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 116h-36V56a12 12 0 0 0-12-12H32a4 4 0 0 0-3.73 5.43c9.29 24.23 11.46 77.22-.11 117.46A3.8 3.8 0 0 0 28 168v32a12 12 0 0 0 12 12h26.11a12.1 12.1 0 0 0 5.37-1.27l12.62-6.31a4.1 4.1 0 0 1 1.79-.42h16.22a4.1 4.1 0 0 1 1.79.42l12.62 6.31a12.1 12.1 0 0 0 5.37 1.27h28.22a12.1 12.1 0 0 0 5.37-1.27l12.62-6.31a4.1 4.1 0 0 1 1.79-.42h16.22a4.1 4.1 0 0 1 1.79.42l12.62 6.31a12.1 12.1 0 0 0 5.37 1.27H232a12 12 0 0 0 12-12v-32a52.06 52.06 0 0 0-52-52M37.6 52H144a4 4 0 0 1 4 4v28h-36a4 4 0 0 0 0 8h36v24h-36a4 4 0 0 0 0 8h80a44.06 44.06 0 0 1 43.81 40H37.2c8.04-32.19 9.8-81.35.4-112M236 200a4 4 0 0 1-4 4h-26.11a4.1 4.1 0 0 1-1.79-.42l-12.62-6.31a12.1 12.1 0 0 0-5.37-1.27h-16.22a12.1 12.1 0 0 0-5.37 1.27l-12.62 6.31a4.1 4.1 0 0 1-1.79.42h-28.22a4.1 4.1 0 0 1-1.79-.42l-12.62-6.31a12.1 12.1 0 0 0-5.37-1.27H85.89a12.1 12.1 0 0 0-5.37 1.27l-12.62 6.31a4.1 4.1 0 0 1-1.79.42H40a4 4 0 0 1-4-4v-28h200Z"></svg:path>`,
})
export class PhBootThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesIcon],svg[ph-boules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56.28 36.41L60.4 184.28a88.3 88.3 0 0 1-10.19-15.18L169.1 50.21a87.8 87.8 0 0 1 15.18 10.2m11.31 11.31a87.8 87.8 0 0 1 10.2 15.18L86.9 205.79a87.8 87.8 0 0 1-15.18-10.2ZM128 40a87.8 87.8 0 0 1 25.05 3.64L43.64 153.05A88 88 0 0 1 128 40m0 176a87.8 87.8 0 0 1-25-3.64L212.36 103A88 88 0 0 1 128 216"></svg:path>`,
})
export class PhBoulesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesBoldIcon],svg[ph-boules-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m50.28 40.75L60.75 178.28a85 85 0 0 1-8.36-13.7L164.58 52.39a85 85 0 0 1 13.7 8.36m17 17a85 85 0 0 1 8.36 13.7L91.42 203.61a85 85 0 0 1-13.7-8.36ZM128 44a85 85 0 0 1 10.37.66l-93.71 93.71A83.87 83.87 0 0 1 128 44m0 168a85 85 0 0 1-10.37-.66l93.71-93.71A83.87 83.87 0 0 1 128 212"></svg:path>`,
})
export class PhBoulesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesDuotoneIcon],svg[ph-boules-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m215.52 88.48l-127 127a96.47 96.47 0 0 1-48-48l127-127a96.47 96.47 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56.28 36.41L60.4 184.28a88.3 88.3 0 0 1-10.19-15.18L169.1 50.21a87.8 87.8 0 0 1 15.18 10.2m11.31 11.31a87.8 87.8 0 0 1 10.2 15.18L86.9 205.79a87.8 87.8 0 0 1-15.18-10.2ZM128 40a87.8 87.8 0 0 1 25.05 3.64L43.64 153.05A88 88 0 0 1 128 40m0 176a87.8 87.8 0 0 1-25-3.64L212.36 103A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhBoulesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesFillIcon],svg[ph-boules-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128c0 56.63-47.38 104-104 104a103.7 103.7 0 0 1-31.52-4.89a4 4 0 0 1-1.62-6.65l125.6-125.61a4 4 0 0 1 6.65 1.62A103.7 103.7 0 0 1 232 128m-16.16-55.61a103 103 0 0 0-6.06-8.56a4 4 0 0 0-6-.33L63.5 203.82a4 4 0 0 0 .33 6a103 103 0 0 0 8.56 6.06a4 4 0 0 0 5-.54L215.3 77.39a4 4 0 0 0 .54-5m-23.67-26.17a103 103 0 0 0-8.56-6.06a4 4 0 0 0-5 .54L40.7 178.62a4 4 0 0 0-.54 5a103 103 0 0 0 6.06 8.56a4 4 0 0 0 6 .33L192.5 52.18a4 4 0 0 0-.33-5.96m-32.64-17.33A103.7 103.7 0 0 0 128 24C71.38 24 24 71.37 24 128a103.7 103.7 0 0 0 4.89 31.53a4 4 0 0 0 6.65 1.62L161.15 35.54a4 4 0 0 0-1.62-6.65"></svg:path>`,
})
export class PhBoulesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesLightIcon],svg[ph-boules-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m59.22 34.29L60.29 187.22a90.2 90.2 0 0 1-12.53-18.49l121-121a90.2 90.2 0 0 1 18.46 12.56m8.49 8.49a90.2 90.2 0 0 1 12.53 18.49l-121 121a90.2 90.2 0 0 1-18.49-12.53ZM128 38a89.7 89.7 0 0 1 28.79 4.72L42.72 156.79A90 90 0 0 1 128 38m0 180a89.7 89.7 0 0 1-28.79-4.72L213.28 99.21A90 90 0 0 1 128 218"></svg:path>`,
})
export class PhBoulesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoulesThinIcon],svg[ph-boules-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m62.13 32.21L60.21 190.13a92 92 0 0 1-14.88-21.8l123-123a92 92 0 0 1 21.8 14.88m5.66 5.66a92.2 92.2 0 0 1 14.88 21.8l-123 123a92.2 92.2 0 0 1-21.8-14.88ZM128 36a91.4 91.4 0 0 1 32.43 5.91L41.91 160.43A92 92 0 0 1 128 36m0 184a91.4 91.4 0 0 1-32.43-5.91L214.09 95.57A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhBoulesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxIcon],svg[ph-bounding-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-32-48h32v32h-32ZM48 48h32v15.9a.5.5 0 0 0 0 .2V80H48Zm32 160H48v-32h32v15.9a.5.5 0 0 0 0 .2zm128 0h-32v-32h32Zm-24-48h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z"></svg:path>`,
})
export class PhBoundingBoxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxBoldIcon],svg[ph-bounding-box-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 100a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v56h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-56Zm-28-48h24v24h-24ZM52 52h24v24H52Zm24 152H52v-24h24Zm128 0h-24v-24h24Zm-24-48h-4a20 20 0 0 0-20 20v4h-56v-4a20 20 0 0 0-20-20h-4v-56h4a20 20 0 0 0 20-20v-4h56v4a20 20 0 0 0 20 20h4Z"></svg:path>`,
})
export class PhBoundingBoxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxDuotoneIcon],svg[ph-bounding-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 40H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8m128 128h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m-128 0H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-32-48h32v32h-32ZM48 48h32v15.9a.5.5 0 0 0 0 .2V80H48Zm32 160H48v-32h32v15.9a.5.5 0 0 0 0 .2zm128 0h-32v-32h32Zm-24-48h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z"></svg:path></svg:g>`,
})
export class PhBoundingBoxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxFillIcon],svg[ph-bounding-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-24 64h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z"></svg:path>`,
})
export class PhBoundingBoxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxLightIcon],svg[ph-bounding-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 94a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H94V48a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v68H48a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-10h68v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-10V94Zm-34-46a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2ZM46 80V48a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2m36 128a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Zm128-32v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2m-24-14h-10a14 14 0 0 0-14 14v10H94v-10a14 14 0 0 0-14-14H70V94h10a14 14 0 0 0 14-14V70h68v10a14 14 0 0 0 14 14h10Z"></svg:path>`,
})
export class PhBoundingBoxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoundingBoxThinIcon],svg[ph-bounding-box-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 92a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H92V48a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v72H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h72v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-12V92Zm-36-44a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4ZM44 80V48a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m40 128a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm128-32v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m-24-12h-12a12 12 0 0 0-12 12v12H92v-12a12 12 0 0 0-12-12H68V92h12a12 12 0 0 0 12-12V68h72v12a12 12 0 0 0 12 12h12Z"></svg:path>`,
})
export class PhBoundingBoxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodIcon],svg[ph-bowl-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-24.46 0h-51.42a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104m-26.06-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23M128 40a72 72 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40m36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72"></svg:path>`,
})
export class PhBowlFoodIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodBoldIcon],svg[ph-bowl-food-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 100h-4.78a92 92 0 0 0-182.44 0H32a12 12 0 0 0-12 12a108.38 108.38 0 0 0 56 94.68V208a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-1.32A108.38 108.38 0 0 0 236 112a12 12 0 0 0-12-12m-53.71-39.94a92 92 0 0 0-43.1 39.94H106a68.27 68.27 0 0 1 62-40c.76 0 1.52 0 2.29.06m17.22 19.08a67.7 67.7 0 0 1 7.41 20.86h-38.79a67.9 67.9 0 0 1 31.38-20.86M128 44c.83 0 1.65 0 2.48.06A92.3 92.3 0 0 0 80.37 100H61.08A68.1 68.1 0 0 1 128 44m35 144.39a12 12 0 0 0-7 10.91v4.7h-56v-4.7a12 12 0 0 0-7-10.91A84.32 84.32 0 0 1 44.87 124h166.26A84.32 84.32 0 0 1 163 188.39"></svg:path>`,
})
export class PhBowlFoodBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodDuotoneIcon],svg[ph-bowl-food-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112a96 96 0 0 1-56 87.3v8.7a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-8.7A96 96 0 0 1 32 112Z" opacity=".2"></svg:path><svg:path d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-50.52-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23m15.91 18.2A71.45 71.45 0 0 1 199.54 104h-51.42a71.84 71.84 0 0 1 41.27-29.57M128 40a72 72 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40m36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72"></svg:path></svg:g>`,
})
export class PhBowlFoodDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodFillIcon],svg[ph-bowl-food-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8m-50.52-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23M148.12 104a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104ZM128 40a72 72 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40"></svg:path>`,
})
export class PhBowlFoodFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodLightIcon],svg[ph-bowl-food-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 106h-10.23a86 86 0 0 0-171.54 0H32a6 6 0 0 0-6 6a102.35 102.35 0 0 0 56 91.06V208a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-4.94A102.35 102.35 0 0 0 230 112a6 6 0 0 0-6-6m-49.76-51.71a74 74 0 0 1 8.15 7.6A85.9 85.9 0 0 0 130.84 106h-33.5A74.24 74.24 0 0 1 168 54c2.08 0 4.17.11 6.24.29m16.06 17.85A73.5 73.5 0 0 1 201.74 106h-57.26a73.9 73.9 0 0 1 45.82-33.86M128 38a73.7 73.7 0 0 1 26.8 5a86.32 86.32 0 0 0-69.94 63h-30.6A74.09 74.09 0 0 1 128 38m37.5 155.84a6 6 0 0 0-3.5 5.46v8.7a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2v-8.7a6 6 0 0 0-3.5-5.46A90.35 90.35 0 0 1 38.2 118h179.6a90.35 90.35 0 0 1-52.3 75.84"></svg:path>`,
})
export class PhBowlFoodLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlFoodThinIcon],svg[ph-bowl-food-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 108h-12.1a84 84 0 0 0-167.8 0H32a4 4 0 0 0-4 4a100.32 100.32 0 0 0 56 89.82V208a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-6.18A100.32 100.32 0 0 0 228 112a4 4 0 0 0-4-4m-20.11 0h-62.84a75.92 75.92 0 0 1 50.16-38.14A75.45 75.45 0 0 1 203.89 108M186 62.93A83.92 83.92 0 0 0 132.08 108h-37.4A76.22 76.22 0 0 1 168 52c2.33 0 4.68.13 7 .34a77 77 0 0 1 11 10.59M128 36a75.5 75.5 0 0 1 34.3 8.21A84.26 84.26 0 0 0 86.41 108h-34.3A76.09 76.09 0 0 1 128 36m38.33 159.66a4 4 0 0 0-2.33 3.64v8.7a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4v-8.7a4 4 0 0 0-2.33-3.64A92.33 92.33 0 0 1 36.09 116h183.82a92.33 92.33 0 0 1-53.58 79.66"></svg:path>`,
})
export class PhBowlFoodThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamIcon],svg[ph-bowl-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 112H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V216a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 120a8 8 0 0 0-8-8m-59.34 88a8 8 0 0 0-4.66 7.27V216H96v-8.71a8 8 0 0 0-4.66-7.29a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m40 0c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 128 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 128 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m40 0c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 168 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 168 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88"></svg:path>`,
})
export class PhBowlSteamIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamBoldIcon],svg[ph-bowl-steam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 108H32a12 12 0 0 0-12 12a108.38 108.38 0 0 0 56 94.68V216a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-1.32A108.38 108.38 0 0 0 236 120a12 12 0 0 0-12-12m-61 88.39a12 12 0 0 0-7 10.9V212h-56v-4.71a12 12 0 0 0-7-10.9A84.32 84.32 0 0 1 44.87 132h166.26A84.32 84.32 0 0 1 163 196.39M74.93 50.15a26.3 26.3 0 0 0 4.71-7a12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3c2.71 9.14-.67 19.26-10 30.08a26.3 26.3 0 0 0-4.71 7A12 12 0 0 1 84 96a11.8 11.8 0 0 1-3.33-.47C75 93.89 67.46 88.9 64.89 80.23c-2.71-9.14.67-19.23 10.04-30.08m44 0a26.3 26.3 0 0 0 4.71-7a12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3c2.71 9.14-.67 19.26-10 30.08a26.3 26.3 0 0 0-4.71 7A12 12 0 0 1 128 96a11.8 11.8 0 0 1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3c-2.71-9.14.67-19.23 10.04-30.08m44 0a26.3 26.3 0 0 0 4.71-7a12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3c2.71 9.14-.67 19.26-10 30.08a26.3 26.3 0 0 0-4.71 7A12 12 0 0 1 172 96a11.8 11.8 0 0 1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3c-2.71-9.14.67-19.23 10.04-30.08"></svg:path>`,
})
export class PhBowlSteamBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamDuotoneIcon],svg[ph-bowl-steam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 120a96 96 0 0 1-56 87.3v8.7a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-8.7A96 96 0 0 1 32 120Z" opacity=".2"></svg:path><svg:path d="M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m31.06 27.89c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 128 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 128 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89Zm40 0c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 168 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 168 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89ZM232 120a104.35 104.35 0 0 1-56 92.28V216a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-3.72A104.35 104.35 0 0 1 24 120a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8m-16.37 8H40.37a88.29 88.29 0 0 0 51 72a8 8 0 0 1 4.63 7.29V216h64v-8.71a8 8 0 0 1 4.66-7.27A88.29 88.29 0 0 0 215.63 128"></svg:path></svg:g>`,
})
export class PhBowlSteamDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamFillIcon],svg[ph-bowl-steam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14c-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.1 8.1 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76c2.46 8.07-.55 17.45-8.94 27.89c-5.35 6.66-6.67 11.16-6.12 13.14c.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.1 8.1 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76c-2.46-8.07.55-17.45 8.94-27.88m31.06 27.89c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 128 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 128 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89Zm40 0c2.88 9.43 11.79 12.45 12.79 12.76A8.1 8.1 0 0 0 168 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14c8.39-10.44 11.4-19.82 8.94-27.89c-2.88-9.43-11.78-12.45-12.79-12.76A8.1 8.1 0 0 0 168 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14c-8.39 10.44-11.4 19.82-8.94 27.89ZM224 112H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V216a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 120a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBowlSteamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamLightIcon],svg[ph-bowl-steam-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 114H32a6 6 0 0 0-6 6a102.35 102.35 0 0 0 56 91.06V216a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-4.94A102.35 102.35 0 0 0 230 120a6 6 0 0 0-6-6m-58.5 87.84a6 6 0 0 0-3.5 5.45V216a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2v-8.71a6 6 0 0 0-3.5-5.45A90.35 90.35 0 0 1 38.2 126h179.6a90.35 90.35 0 0 1-52.3 75.84M83.32 56.24c5.05-6.28 7.41-11.73 6.48-15c-.72-2.53-3.64-3.57-3.67-3.58A6 6 0 0 1 88 26a5.8 5.8 0 0 1 1.78.27c.91.28 8.9 3 11.48 11.44c2.26 7.39-.63 16.15-8.58 26.05c-5.05 6.28-7.41 11.73-6.48 15c.72 2.53 3.64 3.57 3.67 3.58A6 6 0 0 1 88 94a5.8 5.8 0 0 1-1.78-.27c-.91-.28-8.9-3-11.48-11.44c-2.26-7.39.63-16.15 8.58-26.05m40 0c5.05-6.28 7.41-11.73 6.48-15c-.72-2.53-3.64-3.57-3.67-3.58A6 6 0 0 1 128 26a5.8 5.8 0 0 1 1.78.27c.91.28 8.9 3 11.48 11.44c2.26 7.39-.63 16.15-8.58 26.05c-5.05 6.28-7.41 11.73-6.48 15c.72 2.53 3.64 3.57 3.67 3.58A6 6 0 0 1 128 94a5.8 5.8 0 0 1-1.78-.27c-.91-.28-8.9-3-11.48-11.44c-2.26-7.39.63-16.15 8.58-26.05m40 0c5.05-6.28 7.41-11.73 6.48-15c-.72-2.53-3.64-3.57-3.67-3.58A6 6 0 0 1 168 26a5.8 5.8 0 0 1 1.78.27c.91.28 8.9 3 11.48 11.44c2.26 7.39-.63 16.15-8.58 26.05c-5.05 6.28-7.41 11.73-6.48 15c.72 2.53 3.64 3.57 3.67 3.58A6 6 0 0 1 168 94a5.8 5.8 0 0 1-1.78-.27c-.91-.28-8.9-3-11.48-11.44c-2.26-7.39.63-16.15 8.58-26.05"></svg:path>`,
})
export class PhBowlSteamLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlSteamThinIcon],svg[ph-bowl-steam-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 116H32a4 4 0 0 0-4 4a100.32 100.32 0 0 0 56 89.82V216a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-6.18A100.32 100.32 0 0 0 228 120a4 4 0 0 0-4-4m-57.67 87.66a4 4 0 0 0-2.33 3.64v8.7a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4v-8.7a4 4 0 0 0-2.33-3.64A92.31 92.31 0 0 1 36.09 124h183.82a92.31 92.31 0 0 1-53.58 79.66M164.88 57.5c5.56-6.92 8-12.89 6.83-16.81c-1-3.54-4.9-4.87-4.94-4.88a4 4 0 0 1 2.42-7.63c.32.1 7.84 2.52 10.16 10.11c2.05 6.72-.72 14.87-8.23 24.22c-5.56 6.91-8 12.88-6.83 16.8c1 3.54 4.9 4.87 4.94 4.88A4 4 0 0 1 168 92a4.1 4.1 0 0 1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11c-2.05-6.71.72-14.87 8.23-24.21m-40 0c5.56-6.92 8-12.89 6.83-16.81c-1-3.54-4.9-4.87-4.94-4.88a4 4 0 0 1 2.42-7.63c.32.1 7.84 2.52 10.16 10.11c2.05 6.72-.72 14.87-8.23 24.22c-5.56 6.91-8 12.88-6.83 16.8c1 3.54 4.9 4.87 4.94 4.88A4 4 0 0 1 128 92a4.1 4.1 0 0 1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11c-2.05-6.71.72-14.87 8.23-24.21m-40 0c5.56-6.92 8-12.89 6.83-16.81c-1-3.54-4.9-4.87-4.94-4.88a4 4 0 0 1 2.42-7.63c.32.1 7.84 2.52 10.16 10.11c2.05 6.72-.72 14.87-8.23 24.22c-5.56 6.91-8 12.88-6.83 16.8c1 3.54 4.9 4.87 4.94 4.88A4 4 0 0 1 88 92a4.1 4.1 0 0 1-1.19-.18c-.32-.1-7.84-2.52-10.16-10.11c-2.05-6.71.72-14.87 8.23-24.21"></svg:path>`,
})
export class PhBowlSteamThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallIcon],svg[ph-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20 28a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBowlingBallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallBoldIcon],svg[ph-bowling-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m16-84a16 16 0 1 1-16-16a16 16 0 0 1 16 16m16-16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m32 24a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhBowlingBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallDuotoneIcon],svg[ph-bowling-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m20-12a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20 28a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhBowlingBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallFillIcon],svg[ph-bowling-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m4 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m20-36a12 12 0 1 1 12 12a12 12 0 0 1-12-12m20 52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBowlingBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallLightIcon],svg[ph-bowling-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m14-102a10 10 0 1 1-10-10a10 10 0 0 1 10 10m22-14a10 10 0 1 1 10-10a10 10 0 0 1-10 10m18 30a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhBowlingBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBowlingBallThinIcon],svg[ph-bowling-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m12-104a8 8 0 1 1-8-8a8 8 0 0 1 8 8m24-16a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 32a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhBowlingBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownIcon],svg[ph-box-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-61.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhBoxArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownBoldIcon],svg[ph-box-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.73 66.63l-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-64.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 151v-39a12 12 0 0 1 24 0v39l11.51-11.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhBoxArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownDuotoneIcon],svg[ph-box-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V72Z" opacity=".2"></svg:path><svg:path d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-61.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhBoxArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownFillIcon],svg[ph-box-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58m-57.5 89.24l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32M52.94 64l8-16h134.12l8 16Z"></svg:path>`,
})
export class PhBoxArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownLightIcon],svg[ph-box-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.37 69.32l-16-32A6 6 0 0 0 200 34H56a6 6 0 0 0-5.37 3.32l-16 32A6.1 6.1 0 0 0 34 72v136a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V72a6.1 6.1 0 0 0-.63-2.68M59.71 46h136.58l10 20H49.71ZM208 210H48a2 2 0 0 1-2-2V78h164v130a2 2 0 0 1-2 2m-43.76-62.24a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 169.51V104a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhBoxArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownThinIcon],svg[ph-box-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.58 70.21l-16-32A4 4 0 0 0 200 36H56a4 4 0 0 0-3.58 2.21l-16 32A4 4 0 0 0 36 72v136a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V72a4 4 0 0 0-.42-1.79M58.47 44h139.06l12 24H46.47ZM208 212H48a4 4 0 0 1-4-4V76h168v132a4 4 0 0 1-4 4m-45.17-62.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 174.34V104a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhBoxArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpIcon],svg[ph-box-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 123.31V184a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhBoxArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpBoldIcon],svg[ph-box-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.73 66.63l-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-68.49a12 12 0 0 1-17 17L140 141v39a12 12 0 0 1-24 0v-39l-11.51 11.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhBoxArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpDuotoneIcon],svg[ph-box-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V72Z" opacity=".2"></svg:path><svg:path d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58M60.94 48h134.12l8 16H52.94ZM208 208H48V80h160zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 123.31V184a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhBoxArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpFillIcon],svg[ph-box-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58m-57.5 73.24a8 8 0 0 1-11.32 0L136 123.31V184a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32M52.94 64l8-16h134.12l8 16Z"></svg:path>`,
})
export class PhBoxArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpLightIcon],svg[ph-box-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.37 69.32l-16-32A6 6 0 0 0 200 34H56a6 6 0 0 0-5.37 3.32l-16 32A6.1 6.1 0 0 0 34 72v136a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V72a6.1 6.1 0 0 0-.63-2.68M59.71 46h136.58l10 20H49.71ZM208 210H48a2 2 0 0 1-2-2V78h164v130a2 2 0 0 1-2 2m-43.76-78.24a6 6 0 1 1-8.48 8.48L134 118.49V184a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhBoxArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpThinIcon],svg[ph-box-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.58 70.21l-16-32A4 4 0 0 0 200 36H56a4 4 0 0 0-3.58 2.21l-16 32A4 4 0 0 0 36 72v136a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V72a4 4 0 0 0-.42-1.79M58.47 44h139.06l12 24H46.47ZM208 212H48a4 4 0 0 1-4-4V76h168v132a4 4 0 0 1-4 4m-45.17-78.83a4 4 0 0 1-5.66 5.66L132 113.66V184a4 4 0 0 1-8 0v-70.34l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhBoxArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveIcon],svg[ph-boxing-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 16h-48a56.06 56.06 0 0 0-56 56h-8a32 32 0 0 0-32 32v29.19a16.1 16.1 0 0 0 3.51 10a8 8 0 0 0 .62.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.85a16 16 0 0 0 .62-4.39V72a56.06 56.06 0 0 0-56-56m40 102.88l-15.69 54.92a8 8 0 0 0-.31 2.2v40H80v-40a8 8 0 0 0-2.38-5.69L40 133.12V104a16 16 0 0 1 16-16h8v16a8 8 0 0 0 16 0V72a40 40 0 0 1 40-40h48a40 40 0 0 1 40 40Zm-36.42 48.28L153.89 176l17.69 8.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84l-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32"></svg:path>`,
})
export class PhBoxingGloveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveBoldIcon],svg[ph-boxing-glove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 12h-48a60.08 60.08 0 0 0-59.87 56H56a36 36 0 0 0-36 36v29.19a20.13 20.13 0 0 0 4.38 12.5a12 12 0 0 0 .94 1L60 181v35a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-38.32l15.23-53.3a20 20 0 0 0 .77-5.5V72a60.07 60.07 0 0 0-60-60m36 106.32l-15.54 54.38a12.3 12.3 0 0 0-.46 3.3v36H84v-36a12 12 0 0 0-3.56-8.53L44 131.45V104a12 12 0 0 1 12-12h4v12a12 12 0 0 0 24 0V72a36 36 0 0 1 36-36h48a36 36 0 0 1 36 36ZM166.66 162l-9 6l9 6a12 12 0 1 1-13.32 20L136 182.42L118.66 194a12 12 0 0 1-13.32-20l9-6l-9-6a12 12 0 0 1 13.32-20L136 153.58L153.34 142a12 12 0 1 1 13.32 20"></svg:path>`,
})
export class PhBoxingGloveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveDuotoneIcon],svg[ph-boxing-glove-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v46.88a8 8 0 0 1-.31 2.2L200 176v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8v-40l-38.25-37.81a8 8 0 0 1-1.75-5V104a24 24 0 0 1 24-24h16v-8a48 48 0 0 1 48-48h48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M168 16h-48a56.06 56.06 0 0 0-56 56h-8a32 32 0 0 0-32 32v29.19a16.14 16.14 0 0 0 3.5 10q.3.36.63.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.84a16 16 0 0 0 .62-4.4V72a56.06 56.06 0 0 0-56-56m40 102.88l-15.69 54.92a8 8 0 0 0-.31 2.2v40H80v-40a8 8 0 0 0-2.38-5.69L40 133.12V104a16 16 0 0 1 16-16h8v16a8 8 0 0 0 16 0V72a40 40 0 0 1 40-40h48a40 40 0 0 1 40 40Zm-36.42 48.28L153.89 176l17.69 8.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84l-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32"></svg:path></svg:g>`,
})
export class PhBoxingGloveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveFillIcon],svg[ph-boxing-glove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 16h-48a56 56 0 0 0-56 56v31.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8V78.7a4 4 0 0 0-5.63-3.65A32 32 0 0 0 24 104v29.19a16.14 16.14 0 0 0 3.5 10q.3.36.63.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.84a16 16 0 0 0 .62-4.4V72a56 56 0 0 0-56-56m3.58 168.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84l-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32L153.89 176Z"></svg:path>`,
})
export class PhBoxingGloveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveLightIcon],svg[ph-boxing-glove-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 18h-48a54.06 54.06 0 0 0-54 54v2H56a30 30 0 0 0-30 30v29.19a14 14 0 0 0 3.07 8.75a6 6 0 0 0 .47.52l36.46 36V216a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-39.16l15.46-54.11a14 14 0 0 0 .54-3.85V72a54.06 54.06 0 0 0-54-54m42 100.88a2 2 0 0 1-.08.55l-15.69 54.92A6 6 0 0 0 194 176v40a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2v-40a6 6 0 0 0-1.78-4.27L38.3 134.25a2 2 0 0 1-.3-1.06V104a18 18 0 0 1 18-18h10v18a6 6 0 0 0 12 0V72a42 42 0 0 1 42-42h48a42 42 0 0 1 42 42Zm-39.32 46.49L149.42 176l21.26 10.63a6 6 0 0 1-5.36 10.74L136 182.71l-29.32 14.66a6 6 0 0 1-5.36-10.74L122.58 176l-21.26-10.63a6 6 0 0 1 5.36-10.74L136 169.29l29.32-14.66a6 6 0 1 1 5.36 10.74"></svg:path>`,
})
export class PhBoxingGloveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBoxingGloveThinIcon],svg[ph-boxing-glove-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 20h-48a52.06 52.06 0 0 0-52 52v4H56a28 28 0 0 0-28 28v29.19a12 12 0 0 0 2.63 7.5c.1.12.2.24.31.35L68 177.67V216a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-39.44l15.54-54.38a12.3 12.3 0 0 0 .46-3.3V72a52.06 52.06 0 0 0-52-52m44 98.88a4 4 0 0 1-.15 1.1l-15.7 54.92a4 4 0 0 0-.15 1.1v40a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4v-40a4 4 0 0 0-1.19-2.84l-38.05-37.62a4 4 0 0 1-.76-2.35V104a20 20 0 0 1 20-20h12v20a4 4 0 0 0 8 0V72a44.05 44.05 0 0 1 44-44h48a44.05 44.05 0 0 1 44 44Zm-42.21 44.7L145 176l24.84 12.42a4 4 0 0 1-3.58 7.16L136 180.47l-30.21 15.11a4 4 0 1 1-3.58-7.16L127.05 176l-24.84-12.42a4 4 0 1 1 3.58-7.16L136 171.53l30.21-15.11a4 4 0 0 1 3.58 7.16"></svg:path>`,
})
export class PhBoxingGloveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleIcon],svg[ph-brackets-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86.75 44.3L33.48 128l53.27 83.7a8 8 0 0 1-2.46 11.05A7.9 7.9 0 0 1 80 224a8 8 0 0 1-6.76-3.71l-56-88a8 8 0 0 1 0-8.59l56-88a8 8 0 1 1 13.5 8.59Zm152 79.41l-56-88a8 8 0 1 0-13.5 8.59l53.27 83.7l-53.27 83.7a8 8 0 0 0 2.46 11.05A7.9 7.9 0 0 0 176 224a8 8 0 0 0 6.76-3.71l56-88a8 8 0 0 0-.01-8.58"></svg:path>`,
})
export class PhBracketsAngleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleBoldIcon],svg[ph-brackets-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.12 46.44L38.22 128l51.9 81.56a12 12 0 1 1-20.24 12.88l-56-88a12 12 0 0 1 0-12.88l56-88a12 12 0 0 1 20.24 12.88m152 75.12l-56-88a12 12 0 1 0-20.24 12.88l51.9 81.56l-51.9 81.56a12 12 0 1 0 20.24 12.88l56-88a12 12 0 0 0 0-12.88"></svg:path>`,
})
export class PhBracketsAngleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleDuotoneIcon],svg[ph-brackets-angle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 128l-56 88H80l-56-88l56-88h96Z" opacity=".2"></svg:path><svg:path d="M86.75 44.3L33.48 128l53.27 83.7a8 8 0 0 1-2.46 11.05A7.9 7.9 0 0 1 80 224a8 8 0 0 1-6.76-3.71l-56-88a8 8 0 0 1 0-8.59l56-88a8 8 0 1 1 13.5 8.59Zm152 79.41l-56-88a8 8 0 1 0-13.5 8.59l53.27 83.7l-53.27 83.7a8 8 0 0 0 2.46 11.05A7.9 7.9 0 0 0 176 224a8 8 0 0 0 6.76-3.71l56-88a8 8 0 0 0-.01-8.58"></svg:path></svg:g>`,
})
export class PhBracketsAngleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleFillIcon],svg[ph-brackets-angle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M103 180a8 8 0 0 1-13.95 8l-32-56a8 8 0 0 1 0-7.94l32-56A8 8 0 0 1 103 76l-29.79 52Zm96-48l-32 56a8 8 0 0 1-13.9-7.94l29.74-52L153.05 76A8 8 0 1 1 167 68l32 56a8 8 0 0 1 0 8"></svg:path>`,
})
export class PhBracketsAngleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleLightIcon],svg[ph-brackets-angle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.06 43.22L31.11 128l54 84.78a6 6 0 0 1-1.84 8.28a6 6 0 0 1-8.28-1.84l-56-88a6 6 0 0 1 0-6.44l56-88a6 6 0 0 1 10.12 6.44Zm152 81.56l-56-88a6 6 0 1 0-10.12 6.44L224.89 128l-53.95 84.78a6 6 0 0 0 1.84 8.28a6 6 0 0 0 8.28-1.84l56-88a6 6 0 0 0 0-6.44"></svg:path>`,
})
export class PhBracketsAngleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleThinIcon],svg[ph-brackets-angle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.37 42.15L28.74 128l54.63 85.85a4 4 0 0 1-1.22 5.52A4 4 0 0 1 80 220a4 4 0 0 1-3.37-1.85l-56-88a4 4 0 0 1 0-4.3l56-88a4 4 0 1 1 6.74 4.3m152 83.7l-56-88a4 4 0 1 0-6.74 4.3L227.26 128l-54.63 85.85a4 4 0 0 0 1.22 5.52a4 4 0 0 0 2.15.63a4 4 0 0 0 3.37-1.85l56-88a4 4 0 0 0 0-4.3"></svg:path>`,
})
export class PhBracketsAngleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyIcon],svg[ph-brackets-curly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhBracketsCurlyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyBoldIcon],svg[ph-brackets-curly-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.8 119.49a35 35 0 0 1-5.75 8.51a35 35 0 0 1 5.75 8.51C60 147.24 60 159.83 60 172c0 25.94 1.84 32 20 32a12 12 0 0 1 0 24c-19.14 0-32.2-6.9-38.8-20.51C36 196.76 36 184.17 36 172c0-25.94-1.84-32-20-32a12 12 0 0 1 0-24c18.16 0 20-6.06 20-32c0-12.17 0-24.76 5.2-35.49C47.8 34.9 60.86 28 80 28a12 12 0 0 1 0 24c-18.16 0-20 6.06-20 32c0 12.17 0 24.76-5.2 35.49M240 116c-18.16 0-20-6.06-20-32c0-12.17 0-24.76-5.2-35.49C208.2 34.9 195.14 28 176 28a12 12 0 0 0 0 24c18.16 0 20 6.06 20 32c0 12.17 0 24.76 5.2 35.49A35 35 0 0 0 207 128a35 35 0 0 0-5.75 8.51C196 147.24 196 159.83 196 172c0 25.94-1.84 32-20 32a12 12 0 0 0 0 24c19.14 0 32.2-6.9 38.8-20.51c5.2-10.73 5.2-23.32 5.2-35.49c0-25.94 1.84-32 20-32a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhBracketsCurlyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyDuotoneIcon],svg[ph-brackets-curly-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88" opacity=".2"></svg:path><svg:path d="M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhBracketsCurlyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyFillIcon],svg[ph-brackets-curly-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 155.84c.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16c-31.27 0-31.72-22.43-32-35.84c-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16c.28-13.41.73-35.84 32-35.84a8 8 0 0 1 0 16c-15.59 0-15.71 5.9-16 20.16c-.17 8.31-.41 20.09-8 27.84c7.59 7.75 7.83 19.53 8 27.84M200 136c-15.59 0-15.71 5.9-16 20.16c-.28 13.41-.73 35.84-32 35.84a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16c.17-8.31.41-20.09 8-27.84c-7.6-7.75-7.84-19.53-8-27.84c-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c31.27 0 31.72 22.43 32 35.84c.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBracketsCurlyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyLightIcon],svg[ph-brackets-curly-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.91 128a27.7 27.7 0 0 1 9.49 11.13C54 148.62 54 160.51 54 172c0 24.27 1.21 38 26 38a6 6 0 0 1 0 12c-16.88 0-27.81-5.6-33.4-17.13C42 195.38 42 183.49 42 172c0-24.27-1.21-38-26-38a6 6 0 0 1 0-12c24.79 0 26-13.73 26-38c0-11.49 0-23.38 4.6-32.87C52.19 39.6 63.12 34 80 34a6 6 0 0 1 0 12c-24.79 0-26 13.73-26 38c0 11.49 0 23.38-4.6 32.87A27.7 27.7 0 0 1 39.91 128M240 122c-24.79 0-26-13.73-26-38c0-11.49 0-23.38-4.6-32.87C203.81 39.6 192.88 34 176 34a6 6 0 0 0 0 12c24.79 0 26 13.73 26 38c0 11.49 0 23.38 4.6 32.87a27.7 27.7 0 0 0 9.49 11.13a27.7 27.7 0 0 0-9.49 11.13c-4.6 9.49-4.6 21.38-4.6 32.87c0 24.27-1.21 38-26 38a6 6 0 0 0 0 12c16.88 0 27.81-5.6 33.4-17.13c4.6-9.49 4.6-21.38 4.6-32.87c0-24.27 1.21-38 26-38a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhBracketsCurlyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsCurlyThinIcon],svg[ph-brackets-curly-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.89 128C52 136.23 52 155.64 52 172c0 24.8 1.35 40 28 40a4 4 0 0 1 0 8c-36 0-36-26.61-36-48c0-24.8-1.35-40-28-40a4 4 0 0 1 0-8c26.65 0 28-15.2 28-40c0-21.39 0-48 36-48a4 4 0 0 1 0 8c-26.65 0-28 15.2-28 40c0 16.36 0 35.77-16.11 44M240 124c-26.65 0-28-15.2-28-40c0-21.39 0-48-36-48a4 4 0 0 0 0 8c26.65 0 28 15.2 28 40c0 16.36 0 35.77 16.11 44C204 136.23 204 155.64 204 172c0 24.8-1.35 40-28 40a4 4 0 0 0 0 8c36 0 36-26.61 36-48c0-24.8 1.35-40 28-40a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhBracketsCurlyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundIcon],svg[ph-brackets-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 128c0 58.29 34.67 80.25 36.15 81.16a8 8 0 0 1-8.27 13.7C66.09 221.78 24 195.75 24 128s42.09-93.78 43.88-94.86a8 8 0 0 1 8.26 13.7C74.54 47.83 40 69.82 40 128m148.12-94.86a8 8 0 0 0-8.27 13.7C181.33 47.75 216 69.71 216 128s-34.67 80.25-36.12 81.14a8 8 0 0 0 8.24 13.72C189.91 221.78 232 195.75 232 128s-42.09-93.78-43.88-94.86"></svg:path>`,
})
export class PhBracketsRoundIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundBoldIcon],svg[ph-brackets-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.33 222.19a12 12 0 0 1-16.5 4.09C64 225.16 20 198 20 128s44-97.16 45.83-98.28a12 12 0 0 1 12.41 20.53C76.71 51.21 44 72.31 44 128s32.85 76.88 34.25 77.75a12 12 0 0 1 4.08 16.44M190.17 29.72a12 12 0 1 0-12.42 20.53c1.4.87 34.25 21.94 34.25 77.75s-32.85 76.88-34.17 77.7a12 12 0 1 0 12.34 20.58C192 225.16 236 198 236 128s-44-97.16-45.83-98.28"></svg:path>`,
})
export class PhBracketsRoundBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundDuotoneIcon],svg[ph-brackets-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128c0 64-40 88-40 88H72s-40-24-40-88s40-88 40-88h112s40 24 40 88" opacity=".2"></svg:path><svg:path d="M40 128c0 58.29 34.67 80.25 36.15 81.16a8 8 0 0 1-8.27 13.7C66.09 221.78 24 195.75 24 128s42.09-93.78 43.88-94.86a8 8 0 0 1 8.26 13.7C74.54 47.83 40 69.82 40 128m148.12-94.86a8 8 0 0 0-8.27 13.7C181.33 47.75 216 69.71 216 128s-34.67 80.25-36.12 81.14a8 8 0 0 0 8.24 13.72C189.91 221.78 232 195.75 232 128s-42.09-93.78-43.88-94.86"></svg:path></svg:g>`,
})
export class PhBracketsRoundDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundFillIcon],svg[ph-brackets-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M99.61 176.86a8 8 0 0 1-7.19 14.3A71.23 71.23 0 0 1 56 128a71.23 71.23 0 0 1 36.42-63.16a8 8 0 0 1 7.18 14.3C98.37 79.78 72 93.76 72 128s26.48 48.28 27.61 48.86m64 14.3a8 8 0 1 1-7.16-14.32c1.1-.56 27.58-14.52 27.58-48.84s-26.48-48.28-27.61-48.86a8 8 0 0 1 7.19-14.3A71.23 71.23 0 0 1 200 128a71.23 71.23 0 0 1-36.42 63.16Z"></svg:path>`,
})
export class PhBracketsRoundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundLightIcon],svg[ph-brackets-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.52 64C44.23 81.46 38 103 38 128s6.23 46.54 18.52 64c9.17 13 18.49 18.81 18.59 18.87a6 6 0 0 1-6.2 10.27C67.16 220.09 26 194.63 26 128s41.16-92.09 42.91-93.14a6 6 0 0 1 6.2 10.27C75 45.19 65.69 51 56.52 64m130.57-29.14a6 6 0 0 0-6.2 10.27c.1.06 9.42 5.84 18.59 18.87C211.77 81.46 218 103 218 128s-6.23 46.54-18.52 64c-9.17 13-18.49 18.81-18.57 18.85a6 6 0 1 0 6.18 10.29c1.75-1 42.91-26.51 42.91-93.14s-41.16-92.09-42.91-93.14"></svg:path>`,
})
export class PhBracketsRoundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsRoundThinIcon],svg[ph-brackets-round-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55 62.67C46.34 74.93 36 96.22 36 128s10.34 53.07 19 65.33c9.41 13.3 19 19.19 19.06 19.24A4 4 0 0 1 72 220a4 4 0 0 1-2-.57c-1.77-1.03-42-25.92-42-91.43s40.23-90.4 41.94-91.43a4 4 0 0 1 4.13 6.86c-.07.05-9.65 5.94-19.07 19.24m131.05-26.1a4 4 0 0 0-4.13 6.86c.1 0 9.65 5.94 19.06 19.24c8.67 12.26 19 33.55 19 65.33s-10.34 53.07-19 65.33c-9.41 13.3-19 19.19-19.05 19.24a4 4 0 0 0 4.12 6.86c1.71-1 41.94-25.92 41.94-91.43s-40.22-90.4-41.93-91.43Z"></svg:path>`,
})
export class PhBracketsRoundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareIcon],svg[ph-brackets-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48v160h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16Zm168-16h-40a8 8 0 0 0 0 16h32v160h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhBracketsSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareBoldIcon],svg[ph-brackets-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 52v152h28a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24Zm164-24h-40a12 12 0 0 0 0 24h28v152h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBracketsSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareDuotoneIcon],svg[ph-brackets-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M48 48v160h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16Zm168-16h-40a8 8 0 0 0 0 16h32v160h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhBracketsSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareFillIcon],svg[ph-brackets-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 176a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H80v96Zm88 8a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h24V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhBracketsSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareLightIcon],svg[ph-brackets-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 46v164h34a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12Zm170-12h-40a6 6 0 0 0 0 12h34v164h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBracketsSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareThinIcon],svg[ph-brackets-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 44v168h36a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8Zm172-8h-40a4 4 0 0 0 0 8h36v168h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhBracketsSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainIcon],svg[ph-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 124a56.11 56.11 0 0 0-32-50.61V72a48 48 0 0 0-88-26.49A48 48 0 0 0 40 72v1.39a56 56 0 0 0 0 101.2V176a48 48 0 0 0 88 26.49A48 48 0 0 0 216 176v-1.41A56.09 56.09 0 0 0 248 124M88 208a32 32 0 0 1-31.81-28.56A56 56 0 0 0 64 180h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.33-77.73A8 8 0 0 0 56 78.73V72a32 32 0 0 1 64 0v68.26A47.8 47.8 0 0 0 88 128a8 8 0 0 0 0 16a32 32 0 0 1 0 64m104-44h-8a8 8 0 0 0 0 16h8a56 56 0 0 0 7.81-.56A32 32 0 1 1 168 144a8 8 0 0 0 0-16a47.8 47.8 0 0 0-32 12.26V72a32 32 0 0 1 64 0v6.73a8 8 0 0 0 5.33 7.54A40 40 0 0 1 192 164m16-52a8 8 0 0 1-8 8h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 8 8m-148 8h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0v4a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhBrainIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainBoldIcon],svg[ph-brain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 124a60.14 60.14 0 0 0-32-53.08a52 52 0 0 0-92-32.11a52 52 0 0 0-92 32.11a60 60 0 0 0 0 106.14a52 52 0 0 0 92 32.13a52 52 0 0 0 92-32.13A60.05 60.05 0 0 0 252 124M88 204a28 28 0 0 1-26.85-20.07c1 0 1.89.07 2.85.07h8a12 12 0 0 0 0-24h-8a36 36 0 0 1-12-69.95a12 12 0 0 0 8-11.32V72a28 28 0 0 1 56 0v60.18a51.6 51.6 0 0 0-7.2-3.85a12 12 0 1 0-9.6 22A28 28 0 0 1 88 204m104-44h-8a12 12 0 0 0 0 24h8c1 0 1.9 0 2.85-.07a28 28 0 1 1-38-33.61a12 12 0 1 0-9.6-22a51.6 51.6 0 0 0-7.2 3.85V72a28 28 0 0 1 56 0v6.73a12 12 0 0 0 8 11.32a36 36 0 0 1-12 70Zm16-44a12 12 0 0 1-12 12a40 40 0 0 1-40-40v-4a12 12 0 0 1 24 0v4a16 16 0 0 0 16 16a12 12 0 0 1 12 12M100 88a40 40 0 0 1-40 40a12 12 0 0 1 0-24a16 16 0 0 0 16-16v-4a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhBrainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainDuotoneIcon],svg[ph-brain-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 124a48 48 0 0 1-32 45.27V176a40 40 0 0 1-80 0a40 40 0 0 1-80 0v-6.73a48 48 0 0 1 0-90.54V72a40 40 0 0 1 80 0a40 40 0 0 1 80 0v6.73A48 48 0 0 1 240 124" opacity=".2"></svg:path><svg:path d="M248 124a56.11 56.11 0 0 0-32-50.61V72a48 48 0 0 0-88-26.49A48 48 0 0 0 40 72v1.39a56 56 0 0 0 0 101.2V176a48 48 0 0 0 88 26.49A48 48 0 0 0 216 176v-1.41A56.09 56.09 0 0 0 248 124M88 208a32 32 0 0 1-31.81-28.56A56 56 0 0 0 64 180h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.33-77.73A8 8 0 0 0 56 78.73V72a32 32 0 0 1 64 0v68.26A47.8 47.8 0 0 0 88 128a8 8 0 0 0 0 16a32 32 0 0 1 0 64m104-44h-8a8 8 0 0 0 0 16h8a56 56 0 0 0 7.81-.56A32 32 0 1 1 168 144a8 8 0 0 0 0-16a47.8 47.8 0 0 0-32 12.26V72a32 32 0 0 1 64 0v6.73a8 8 0 0 0 5.33 7.54A40 40 0 0 1 192 164m16-52a8 8 0 0 1-8 8h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 8 8m-148 8h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0v4a36 36 0 0 1-36 36"></svg:path></svg:g>`,
})
export class PhBrainDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainFillIcon],svg[ph-brain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 76v-4a44 44 0 0 0-74.86-31.31a3.93 3.93 0 0 0-1.14 2.8v88.72a4 4 0 0 0 6.2 3.33a47.67 47.67 0 0 1 25.48-7.54a8.18 8.18 0 0 1 8.31 7.58a8 8 0 0 1-8 8.42a32 32 0 0 0-32 32v33.88a4 4 0 0 0 1.49 3.12a47.92 47.92 0 0 0 74.21-17.16a4 4 0 0 0-4.49-5.56A68 68 0 0 1 192 192h-7.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8a51.6 51.6 0 0 0 24-5.88A52 52 0 0 0 212 76m-12 36h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 0 16M88 28a44.05 44.05 0 0 0-44 44v4a52 52 0 0 0-4 94.12A51.6 51.6 0 0 0 64 176h7.73a8.18 8.18 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53h-8a67.5 67.5 0 0 1-15.21-1.73a4 4 0 0 0-4.5 5.55A47.93 47.93 0 0 0 118.51 213a4 4 0 0 0 1.49-3.12V176a32 32 0 0 0-32-32a8 8 0 0 1-8-8.42a8.18 8.18 0 0 1 8.32-7.58a47.67 47.67 0 0 1 25.48 7.54a4 4 0 0 0 6.2-3.33V43.49a4 4 0 0 0-1.14-2.81A43.85 43.85 0 0 0 88 28m8 48a36 36 0 0 1-36 36h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhBrainFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainLightIcon],svg[ph-brain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 124a54.13 54.13 0 0 0-32-49.33V72a46 46 0 0 0-86-22.67A46 46 0 0 0 42 72v2.67a54 54 0 0 0 0 98.63v2.7a46 46 0 0 0 86 22.67A46 46 0 0 0 214 176v-2.7a54.07 54.07 0 0 0 32-49.3M88 210a34 34 0 0 1-34-32.94a53.7 53.7 0 0 0 10 .94h8a6 6 0 0 0 0-12h-8a42 42 0 0 1-14-81.61a6 6 0 0 0 4-5.66V72a34 34 0 0 1 68 0v73.05A45.9 45.9 0 0 0 88 130a6 6 0 0 0 0 12a34 34 0 0 1 0 68m104-44h-8a6 6 0 0 0 0 12h8a53.7 53.7 0 0 0 10-.94A34 34 0 1 1 168 142a6 6 0 0 0 0-12a45.9 45.9 0 0 0-34 15.05V72a34 34 0 0 1 68 0v6.73a6 6 0 0 0 4 5.66A42 42 0 0 1 192 166m14-54a6 6 0 0 1-6 6h-4a34 34 0 0 1-34-34v-4a6 6 0 0 1 12 0v4a22 22 0 0 0 22 22h4a6 6 0 0 1 6 6m-146 6h-4a6 6 0 0 1 0-12h4a22 22 0 0 0 22-22v-4a6 6 0 0 1 12 0v4a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhBrainLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrainThinIcon],svg[ph-brain-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 124a52.1 52.1 0 0 0-32-48v-4a44 44 0 0 0-84-18.3A44 44 0 0 0 44 72v4a52 52 0 0 0 0 96v4a44 44 0 0 0 84 18.3a44 44 0 0 0 84-18.3v-4a52.07 52.07 0 0 0 32-48M88 212a36 36 0 0 1-36-36v-1.41A52 52 0 0 0 64 176h8a4 4 0 0 0 0-8h-8a44 44 0 0 1-14.67-85.5A4 4 0 0 0 52 78.73V72a36 36 0 0 1 72 0v78.75A44 44 0 0 0 88 132a4 4 0 0 0 0 8a36 36 0 0 1 0 72m104-44h-8a4 4 0 0 0 0 8h8a52 52 0 0 0 12-1.41V176a36 36 0 1 1-36-36a4 4 0 0 0 0-8a44 44 0 0 0-36 18.75V72a36 36 0 0 1 72 0v6.73a4 4 0 0 0 2.67 3.77A44 44 0 0 1 192 168m12-56a4 4 0 0 1-4 4h-4a32 32 0 0 1-32-32v-4a4 4 0 0 1 8 0v4a24 24 0 0 0 24 24h4a4 4 0 0 1 4 4M92 84a32 32 0 0 1-32 32h-4a4 4 0 0 1 0-8h4a24 24 0 0 0 24-24v-4a4 4 0 0 1 8 0Z"></svg:path>`,
})
export class PhBrainThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyIcon],svg[ph-brandy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88a95.63 95.63 0 0 0-15.53-52.37a8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88M58.7 48h138.6a79.5 79.5 0 0 1 10.3 32H48.4a79.5 79.5 0 0 1 10.3-32M128 168a80.11 80.11 0 0 1-79.6-72h159.2a80.11 80.11 0 0 1-79.6 72"></svg:path>`,
})
export class PhBrandyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyBoldIcon],svg[ph-brandy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 88a99.63 99.63 0 0 0-16.18-54.55a12 12 0 0 0-10-5.45H54.23a12 12 0 0 0-10 5.45A99.63 99.63 0 0 0 28 88a100.15 100.15 0 0 0 88 99.28V212H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-24.72A100.15 100.15 0 0 0 228 88M61.05 52H195a75.4 75.4 0 0 1 8.1 24H53a75.4 75.4 0 0 1 8.05-24m67 112a76.12 76.12 0 0 1-75-64H203a76.12 76.12 0 0 1-75 64Z"></svg:path>`,
})
export class PhBrandyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyDuotoneIcon],svg[ph-brandy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 88a88 88 0 0 1-176 0Z" opacity=".2"></svg:path><svg:path d="M224 88a95.63 95.63 0 0 0-15.53-52.37a8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88M58.7 48h138.6a79.5 79.5 0 0 1 10.3 32H48.4a79.5 79.5 0 0 1 10.3-32M128 168a80.11 80.11 0 0 1-79.6-72h159.2a80.11 80.11 0 0 1-79.6 72"></svg:path></svg:g>`,
})
export class PhBrandyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyFillIcon],svg[ph-brandy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88a95.63 95.63 0 0 0-15.53-52.37a8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88M58.7 48h138.6a79.5 79.5 0 0 1 10.3 32H48.4a79.5 79.5 0 0 1 10.3-32"></svg:path>`,
})
export class PhBrandyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyLightIcon],svg[ph-brandy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 88a93.64 93.64 0 0 0-15.21-51.28a6 6 0 0 0-5-2.72H54.23a6 6 0 0 0-5 2.72A93.64 93.64 0 0 0 34 88a94.1 94.1 0 0 0 88 93.8V218H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-36.2A94.1 94.1 0 0 0 222 88M57.56 46h140.88a81.6 81.6 0 0 1 11.34 36H46.22a81.6 81.6 0 0 1 11.34-36M128 170a82.09 82.09 0 0 1-81.76-76h163.52A82.09 82.09 0 0 1 128 170"></svg:path>`,
})
export class PhBrandyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrandyThinIcon],svg[ph-brandy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 88a91.67 91.67 0 0 0-14.88-50.18a4 4 0 0 0-3.35-1.82H54.23a4 4 0 0 0-3.35 1.82A91.67 91.67 0 0 0 36 88a92.11 92.11 0 0 0 88 91.91V220H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-40.09A92.11 92.11 0 0 0 220 88M56.43 44h143.14a83.5 83.5 0 0 1 12.32 40H44.11a83.5 83.5 0 0 1 12.32-40M128 172a84.1 84.1 0 0 1-83.9-80h167.8a84.1 84.1 0 0 1-83.9 80"></svg:path>`,
})
export class PhBrandyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadIcon],svg[ph-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80a40 40 0 0 0-40-40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40.06 40.06 0 0 0 240 80M48 120a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48a8 8 0 0 0 0 16v80H48Zm152-16a8 8 0 0 0 0 16v80h-40v-83.35A40 40 0 0 0 176 56h24a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhBreadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadBoldIcon],svg[ph-bread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80a44.05 44.05 0 0 0-44-44H48a44 44 0 0 0-20 83.17V200a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20v-80.83A44 44 0 0 0 244 80M52 123.3a12 12 0 0 0-4-23.3a20 20 0 0 1 0-40h92a20 20 0 0 1 0 40a12 12 0 0 0-4 23.3V196H52ZM200 100a12 12 0 0 0-4 23.3V196h-36v-76.83A43.92 43.92 0 0 0 179.17 60H200a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhBreadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadDuotoneIcon],svg[ph-bread-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 111v89a8 8 0 0 1-8 8h-56a8 8 0 0 0 8-8v-89a32 32 0 0 0-8-63h56a32 32 0 0 1 8 63" opacity=".2"></svg:path><svg:path d="M240 80a40 40 0 0 0-40-40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40.06 40.06 0 0 0 240 80M48 120a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48a8 8 0 0 0 0 16v80H48Zm152-16a8 8 0 0 0 0 16v80h-40v-83.35A40 40 0 0 0 176 56h24a24 24 0 0 1 0 48"></svg:path></svg:g>`,
})
export class PhBreadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadFillIcon],svg[ph-bread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H48a40 40 0 0 0-16 76.65V200a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-83.35A40 40 0 0 0 200 40m-56 64a8 8 0 0 0 0 16v80H48v-80a8 8 0 0 0 0-16a24 24 0 0 1 0-48h96a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhBreadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadLightIcon],svg[ph-bread-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 80a38 38 0 0 0-38-38H48a38 38 0 0 0-14 73.32V200a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-84.68A38.07 38.07 0 0 0 238 80M46 200v-82h2a6 6 0 0 0 0-12a26 26 0 0 1 0-52h96a26 26 0 0 1 0 52a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2m154-94a6 6 0 0 0 0 12h2v82a2 2 0 0 1-2 2h-42.16a15 15 0 0 0 .16-2v-84.68A38 38 0 0 0 171.68 54H200a26 26 0 0 1 0 52"></svg:path>`,
})
export class PhBreadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBreadThinIcon],svg[ph-bread-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 80a36 36 0 0 0-36-36H48a36 36 0 0 0-12 69.94V200a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-86.06A36.07 36.07 0 0 0 236 80M44 200v-84.23a35 35 0 0 0 4 .23a4 4 0 0 0 0-8a28 28 0 0 1 0-56h96a28 28 0 0 1 0 56a4 4 0 0 0 0 8a35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m156-92a4 4 0 0 0 0 8a35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4h-44.7a11.8 11.8 0 0 0 .7-4v-86.06A36 36 0 0 0 166.59 52H200a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhBreadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeIcon],svg[ph-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 160h-32v-58.66a71.9 71.9 0 0 0 29 21.42a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0a56 56 0 0 1-112 0a8 8 0 0 0-16 0a55.78 55.78 0 0 1-35 51.93a8 8 0 0 0 6 14.83a71.9 71.9 0 0 0 29-21.42V160H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-88-33.8V160h-32v-33.8a72 72 0 0 0 32 0m-72-25a72.5 72.5 0 0 0 24 19.27V160H72Zm88 58.8v-39.52a72.5 72.5 0 0 0 24-19.27V160Z"></svg:path>`,
})
export class PhBridgeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeBoldIcon],svg[ph-bridge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156h-28v-44.51a76.4 76.4 0 0 0 23.49 15a12 12 0 0 0 9-22.25A51.81 51.81 0 0 1 204 56a12 12 0 0 0-24 0a52 52 0 0 1-104 0a12 12 0 0 0-24 0a51.81 51.81 0 0 1-32.5 48.22a12 12 0 1 0 9 22.25a76.4 76.4 0 0 0 23.49-15V156H24a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h104v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24m-92-24.95V156h-24v-24.95a76.3 76.3 0 0 0 24 0m-64-19.67a76.4 76.4 0 0 0 16 11.53V156H76ZM164 156v-33.09a76.4 76.4 0 0 0 16-11.53V156Z"></svg:path>`,
})
export class PhBridgeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeDuotoneIcon],svg[ph-bridge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 168H24v-52.65A64 64 0 0 0 64 56a64 64 0 0 0 128 0a64 64 0 0 0 40 59.35Z" opacity=".2"></svg:path><svg:path d="M232 160h-32v-58.66a71.9 71.9 0 0 0 29 21.42a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0a56 56 0 0 1-112 0a8 8 0 0 0-16 0a55.78 55.78 0 0 1-35 51.93a8 8 0 0 0 6 14.83a71.9 71.9 0 0 0 29-21.42V160H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-88-33.8V160h-32v-33.8a72 72 0 0 0 32 0m-72-25a72.5 72.5 0 0 0 24 19.27V160H72Zm88 58.8v-39.52a72.5 72.5 0 0 0 24-19.27V160Z"></svg:path></svg:g>`,
})
export class PhBridgeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeFillIcon],svg[ph-bridge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 160h-8v-39.5c1.63.81 3.29 1.57 5 2.26a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0a56 56 0 0 1-112 0a8 8 0 0 0-16 0a55.78 55.78 0 0 1-35 51.93a8 8 0 0 0 6 14.83c1.71-.69 3.37-1.45 5-2.26V160h-7.4c-6.31 0-8.6 4.78-8.6 8a8 8 0 0 0 8 8h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-160-8a8 8 0 0 1-16 0v-47.88a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-19.68a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-19.68a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-47.88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhBridgeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeLightIcon],svg[ph-bridge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 162h-34V95.28a69.8 69.8 0 0 0 31.75 25.63a6 6 0 1 0 4.5-11.12A57.8 57.8 0 0 1 198 56a6 6 0 0 0-12 0a58 58 0 0 1-116 0a6 6 0 0 0-12 0a57.8 57.8 0 0 1-36.25 53.79a6 6 0 1 0 4.5 11.12A69.8 69.8 0 0 0 58 95.28V162H24a6 6 0 0 0 0 12h34v26a6 6 0 0 0 12 0v-26h116v26a6 6 0 0 0 12 0v-26h34a6 6 0 0 0 0-12m-86-38.35V162h-36v-38.35a70.1 70.1 0 0 0 36 0m-76-28.5a70.5 70.5 0 0 0 28 24.09V162H70ZM158 162v-42.76a70.5 70.5 0 0 0 28-24.09V162Z"></svg:path>`,
})
export class PhBridgeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBridgeThinIcon],svg[ph-bridge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 164h-36V88.09a67.8 67.8 0 0 0 34.5 31a4 4 0 1 0 3-7.42A59.77 59.77 0 0 1 196 56a4 4 0 0 0-8 0a60 60 0 0 1-120 0a4 4 0 0 0-8 0a59.77 59.77 0 0 1-37.5 55.64a4 4 0 0 0 3 7.42a67.8 67.8 0 0 0 34.5-31V164H24a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h120v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8m-84-43v43h-40v-43a68 68 0 0 0 40 0M68 88a68.43 68.43 0 0 0 32 30v46H68Zm88 76v-46a68.43 68.43 0 0 0 32-30v76Z"></svg:path>`,
})
export class PhBridgeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseIcon],svg[ph-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBriefcaseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseBoldIcon],svg[ph-briefcase-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 100a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12m136-32v128a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V68a20 20 0 0 1 20-20h36v-8a28 28 0 0 1 28-28h48a28 28 0 0 1 28 28v8h36a20 20 0 0 1 20 20M100 48h56v-8a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4ZM44 72v35.23A180.06 180.06 0 0 0 128 128a180 180 0 0 0 84-20.78V72Zm168 120v-58.06A204.3 204.3 0 0 1 128 152a204.2 204.2 0 0 1-84-18.06V192Z"></svg:path>`,
})
export class PhBriefcaseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseDuotoneIcon],svg[ph-briefcase-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 118.31V200a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-81.69A191.14 191.14 0 0 0 128 144a191.1 191.1 0 0 0 96-25.69" opacity=".2"></svg:path><svg:path d="M104 112a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8m128-40v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16M96 56h64v-8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8ZM40 72v41.62A184.1 184.1 0 0 0 128 136a184 184 0 0 0 88-22.39V72Zm176 128v-68.37A200.25 200.25 0 0 1 128 152a200.2 200.2 0 0 1-88-20.36V200z"></svg:path></svg:g>`,
})
export class PhBriefcaseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseFillIcon],svg[ph-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 112a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m80-40v128a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16M96 56h64v-8a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8Zm120 57.61V72H40v41.61A184 184 0 0 0 128 136a184 184 0 0 0 88-22.39"></svg:path>`,
})
export class PhBriefcaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseLightIcon],svg[ph-briefcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 112a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m124-40v128a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h42V48a22 22 0 0 1 22-22h48a22 22 0 0 1 22 22v10h42a14 14 0 0 1 14 14M94 58h68V48a10 10 0 0 0-10-10h-48a10 10 0 0 0-10 10ZM38 72v42.79A186 186 0 0 0 128 138a185.9 185.9 0 0 0 90-23.22V72a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2m180 128v-71.63A198.1 198.1 0 0 1 128 150a198.05 198.05 0 0 1-90-21.62V200a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhBriefcaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalIcon],svg[ph-briefcase-metal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M40 112h176v48H40Zm56-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v24H40V72Zm0 128H40v-24h176z"></svg:path>`,
})
export class PhBriefcaseMetalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalBoldIcon],svg[ph-briefcase-metal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52h-36V40a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20M44 120h168v32H44Zm56-80a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm112 36v20H44V76ZM44 196v-20h168v20Z"></svg:path>`,
})
export class PhBriefcaseMetalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalDuotoneIcon],svg[ph-briefcase-metal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v32H32V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8M32 200a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-32H32Z" opacity=".2"></svg:path><svg:path d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M40 112h176v48H40Zm56-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v24H40V72Zm0 128H40v-24h176z"></svg:path></svg:g>`,
})
export class PhBriefcaseMetalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalFillIcon],svg[ph-briefcase-metal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 112h200a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4m-4 88a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-20a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4ZM232 72v20a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16m-72-24a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v8h64Z"></svg:path>`,
})
export class PhBriefcaseMetalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalLightIcon],svg[ph-briefcase-metal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M38 110h180v52H38Zm56-62a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM40 70h176a2 2 0 0 1 2 2v26H38V72a2 2 0 0 1 2-2m176 132H40a2 2 0 0 1-2-2v-26h180v26a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBriefcaseMetalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalThinIcon],svg[ph-briefcase-metal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M36 108h184v56H36Zm56-60a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM40 68h176a4 4 0 0 1 4 4v28H36V72a4 4 0 0 1 4-4m176 136H40a4 4 0 0 1-4-4v-28h184v28a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBriefcaseMetalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleIcon],svg[ph-briefcase-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96zm120.008 152h-176V80h176l.01 128z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleBoldIcon],svg[ph-briefcase-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 56H180v-8a28.031 28.031 0 0 0-28-28h-48a28.031 28.031 0 0 0-28 28v8H40.008a20.022 20.022 0 0 0-20 20v128a20.022 20.022 0 0 0 20 20h176a20.022 20.022 0 0 0 20-20V76a20.022 20.022 0 0 0-20-20zM100 48a4.004 4.004 0 0 1 4-4h48a4.004 4.004 0 0 1 4 4v8h-56zm112.008 152h-168V80h168z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleDuotoneIcon],svg[ph-briefcase-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect x="32.008" y="72" width="192" height="144" rx="8" opacity=".2" fill="currentColor"></svg:rect><svg:path d="M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96zm120.008 152h-176V80h176l.01 128z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleFillIcon],svg[ph-briefcase-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleLightIcon],svg[ph-briefcase-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 66H174V56a22.025 22.025 0 0 0-22-22h-48a22.025 22.025 0 0 0-22 22v10H40.008a14.016 14.016 0 0 0-14 14v128a14.016 14.016 0 0 0 14 14h176a14.016 14.016 0 0 0 14-14V80a14.016 14.016 0 0 0-14-14zM94 56a10.011 10.011 0 0 1 10-10h48a10.011 10.011 0 0 1 10 10v10H94zm124.008 152a2.003 2.003 0 0 1-2 2h-176a2.003 2.003 0 0 1-2-2V80a2.003 2.003 0 0 1 2-2h176a2.003 2.003 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleThinIcon],svg[ph-briefcase-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 68H172V56a20.022 20.022 0 0 0-20-20h-48a20.022 20.022 0 0 0-20 20v12H40.008a12.013 12.013 0 0 0-12 12v128a12.013 12.013 0 0 0 12 12h176a12.013 12.013 0 0 0 12-12V80a12.013 12.013 0 0 0-12-12zM92 56a12.013 12.013 0 0 1 12-12h48a12.013 12.013 0 0 1 12 12v12H92zm128.008 152a4.004 4.004 0 0 1-4 4h-176a4.004 4.004 0 0 1-4-4V80a4.004 4.004 0 0 1 4-4h176a4.004 4.004 0 0 1 4 4z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseThinIcon],svg[ph-briefcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 112a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m120-40v128a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h44V48a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v12h44a12 12 0 0 1 12 12M92 60h72V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12ZM36 72v44a188 188 0 0 0 92 24a188 188 0 0 0 92-24V72a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4m184 128v-74.9a196.06 196.06 0 0 1-92 22.9a196 196 0 0 1-92-22.9V200a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhBriefcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastIcon],svg[ph-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m73.71 7.14a80 80 0 0 1-14.08 22.2a8 8 0 0 1-11.92-10.67a63.95 63.95 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67a80.08 80.08 0 0 1 14.08 84.47M69 103.09a64 64 0 0 0 11.26 67.58a8 8 0 0 1-11.92 10.67a79.93 79.93 0 0 1 0-106.67a8 8 0 1 1 11.95 10.67A63.8 63.8 0 0 0 69 103.09M248 128a119.58 119.58 0 0 1-34.29 84a8 8 0 1 1-11.42-11.2a103.9 103.9 0 0 0 0-145.56A8 8 0 1 1 213.71 44A119.58 119.58 0 0 1 248 128M53.71 200.78A8 8 0 1 1 42.29 212a119.87 119.87 0 0 1 0-168a8 8 0 1 1 11.42 11.2a103.9 103.9 0 0 0 0 145.56Z"></svg:path>`,
})
export class PhBroadcastIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastBoldIcon],svg[ph-broadcast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m77.39 12.7a84 84 0 0 1-14.78 23.3a12 12 0 0 1-17.89-16a59.92 59.92 0 0 0 0-80a12 12 0 0 1 17.89-16a84.07 84.07 0 0 1 14.78 88.7M83.28 168a12 12 0 0 1-17.89 16a83.94 83.94 0 0 1 0-112a12 12 0 0 1 17.89 16a59.92 59.92 0 0 0 0 80M252 128a123.63 123.63 0 0 1-35.43 86.78A12 12 0 1 1 199.43 198a99.88 99.88 0 0 0 0-140a12 12 0 0 1 17.14-16.8A123.63 123.63 0 0 1 252 128M56.57 198a12 12 0 0 1-17.14 16.8a123.89 123.89 0 0 1 0-173.56A12 12 0 0 1 56.57 58a99.88 99.88 0 0 0 0 140"></svg:path>`,
})
export class PhBroadcastBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastDuotoneIcon],svg[ph-broadcast-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m73.71 7.14a80 80 0 0 1-14.08 22.2a8 8 0 0 1-11.92-10.67a63.95 63.95 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67a80.08 80.08 0 0 1 14.08 84.47M69 103.09a64 64 0 0 0 11.26 67.58a8 8 0 0 1-11.92 10.67a79.93 79.93 0 0 1 0-106.67a8 8 0 1 1 11.95 10.67A63.8 63.8 0 0 0 69 103.09M248 128a119.58 119.58 0 0 1-34.29 84a8 8 0 1 1-11.42-11.2a103.9 103.9 0 0 0 0-145.56A8 8 0 1 1 213.71 44A119.58 119.58 0 0 1 248 128M53.71 200.78A8 8 0 1 1 42.29 212a119.87 119.87 0 0 1 0-168a8 8 0 1 1 11.42 11.2a103.9 103.9 0 0 0 0 145.56Z"></svg:path></svg:g>`,
})
export class PhBroadcastDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastFillIcon],svg[ph-broadcast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40m40 0a79.74 79.74 0 0 0-20.37-53.33a8 8 0 1 0-11.92 10.67a64 64 0 0 1 0 85.33a8 8 0 0 0 11.92 10.67A79.8 79.8 0 0 0 208 128M80.29 85.34a8 8 0 1 0-11.92-10.67a79.94 79.94 0 0 0 0 106.67a8 8 0 0 0 11.92-10.67a63.95 63.95 0 0 1 0-85.33m158.28-4A119.5 119.5 0 0 0 213.71 44a8 8 0 1 0-11.42 11.2a103.9 103.9 0 0 1 0 145.56A8 8 0 1 0 213.71 212a120.12 120.12 0 0 0 24.86-130.71Zm-206.4 87.14A103.9 103.9 0 0 1 53.71 55.22A8 8 0 1 0 42.29 44a119.87 119.87 0 0 0 0 168a8 8 0 1 0 11.42-11.2a103.6 103.6 0 0 1-21.54-32.32"></svg:path>`,
})
export class PhBroadcastFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastLightIcon],svg[ph-broadcast-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m78-26a77.74 77.74 0 0 1-19.86 52a6 6 0 0 1-8.94-8a65.93 65.93 0 0 0 0-88a6 6 0 1 1 8.94-8A77.74 77.74 0 0 1 206 128M67.18 102.31A65.93 65.93 0 0 0 78.8 172a6 6 0 0 1-.47 8.47a6 6 0 0 1-8.47-.47a77.93 77.93 0 0 1 0-104a6 6 0 1 1 8.94 8a66.2 66.2 0 0 0-11.62 18.31M246 128a117.7 117.7 0 0 1-33.71 82.58a6 6 0 0 1-8.58-8.4a105.88 105.88 0 0 0 0-148.36a6 6 0 0 1 8.58-8.4A117.7 117.7 0 0 1 246 128M52.29 202.18a6 6 0 0 1-8.58 8.4a117.92 117.92 0 0 1 0-165.16a6 6 0 1 1 8.58 8.4a105.88 105.88 0 0 0 0 148.36"></svg:path>`,
})
export class PhBroadcastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroadcastThinIcon],svg[ph-broadcast-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m76-28a75.74 75.74 0 0 1-19.35 50.67a4 4 0 0 1-6-5.34a67.92 67.92 0 0 0 0-90.66a4 4 0 0 1 6-5.34A75.74 75.74 0 0 1 204 128M65.34 101.53a67.92 67.92 0 0 0 12 71.8a4 4 0 0 1-6 5.34a75.93 75.93 0 0 1 0-101.34a4 4 0 1 1 6 5.34a68 68 0 0 0-12 18.86M244 128a115.68 115.68 0 0 1-33.14 81.18a4 4 0 0 1-5.72-5.6a107.89 107.89 0 0 0 0-151.16a4 4 0 0 1 5.72-5.6A115.68 115.68 0 0 1 244 128M50.86 203.58a4 4 0 0 1-5.72 5.6a115.91 115.91 0 0 1 0-162.36a4 4 0 1 1 5.72 5.6a107.89 107.89 0 0 0 0 151.16"></svg:path>`,
})
export class PhBroadcastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomIcon],svg[ph-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.5 216.81c-22.56-11-35.5-34.58-35.5-64.8v-17.28a15.94 15.94 0 0 0-10.09-14.87L165 110a8 8 0 0 1-4.48-10.34l21.32-53a28 28 0 0 0-16.1-37a28.14 28.14 0 0 0-35.82 16a.6.6 0 0 0 0 .12L108.9 79a8 8 0 0 1-10.37 4.49L73.11 73.14a15.89 15.89 0 0 0-17.37 3.66C34.68 98.45 24 123.75 24 152a111.45 111.45 0 0 0 31.18 77.53A8 8 0 0 0 61 232h171a8 8 0 0 0 3.5-15.19M67.14 88l25.41 10.3a24 24 0 0 0 31.23-13.45l21-53c2.56-6.11 9.47-9.27 15.43-7a12 12 0 0 1 6.88 15.92l-21.4 52.99a24 24 0 0 0 13.43 31.14l24.88 9.83V153L55.77 101.71A109 109 0 0 1 67.14 88m48 128a87.53 87.53 0 0 1-24.34-42a8 8 0 0 0-15.49 4a105.2 105.2 0 0 0 18.36 38H64.44A95.54 95.54 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.29l137.8 55.12c3 18 10.56 33.48 21.89 45.16Z"></svg:path>`,
})
export class PhBroomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomBoldIcon],svg[ph-broom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.24 213.21C216.12 203 204 180.64 204 152v-17.27a19.94 19.94 0 0 0-12.62-18.59l-24.86-9.81a4 4 0 0 1-2.26-5.14l21.33-53A32 32 0 0 0 167.17 6a32.13 32.13 0 0 0-40.92 18.2l-.07.18l-21 53.09a3.94 3.94 0 0 1-2.14 2.2a3.9 3.9 0 0 1-3 .06L74.6 69.43A19.89 19.89 0 0 0 52.87 74C31.06 96.43 20 122.68 20 152a115.46 115.46 0 0 0 32.29 80.3A12 12 0 0 0 61 236h171a12 12 0 0 0 5.24-22.79M68.19 92.73L91.06 102a28 28 0 0 0 36.44-15.69l20.95-53a8.32 8.32 0 0 1 10.33-4.81a8 8 0 0 1 4.61 10.57a1 1 0 0 0 0 .11L142 92.29a28.05 28.05 0 0 0 15.68 36.33l22.32 8.83V152c0 1 0 2.07.05 3.1l-122.44-49a102 102 0 0 1 10.58-13.37M116.74 212a83.73 83.73 0 0 1-22.09-39a12 12 0 0 0-23.25 6a110.3 110.3 0 0 0 14.49 33H66.25A91.53 91.53 0 0 1 44 152a84 84 0 0 1 3.41-24.11l136.67 54.66A86.6 86.6 0 0 0 198.66 212Z"></svg:path>`,
})
export class PhBroomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomDuotoneIcon],svg[ph-broom-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192.8 165.12L43.93 105.57a111 111 0 0 1 17.54-23.19a8 8 0 0 1 8.67-1.81l25.38 10.28a16 16 0 0 0 20.82-9l21-53.1c4.15-10 15.47-15.33 25.63-11.53a20 20 0 0 1 11.51 26.39l-21.35 53.1a16 16 0 0 0 8.93 20.75L187 127.3a8 8 0 0 1 5 7.43V152a105 105 0 0 0 .8 13.12" opacity=".2"></svg:path><svg:path d="M235.5 216.81c-22.56-11-35.5-34.58-35.5-64.8v-17.28a15.94 15.94 0 0 0-10.09-14.87L165 110a8 8 0 0 1-4.48-10.34l21.32-53a28 28 0 0 0-16.1-37a28.14 28.14 0 0 0-35.82 16a.6.6 0 0 0 0 .12L108.9 79a8 8 0 0 1-10.37 4.49L73.11 73.14a15.89 15.89 0 0 0-17.37 3.66C34.68 98.45 24 123.75 24 152a111.45 111.45 0 0 0 31.18 77.53A8 8 0 0 0 61 232h171a8 8 0 0 0 3.5-15.19M67.14 88l25.41 10.3a24 24 0 0 0 31.23-13.45l21-53c2.56-6.11 9.47-9.27 15.43-7a12 12 0 0 1 6.88 15.92l-21.4 52.99a24 24 0 0 0 13.43 31.14l24.88 9.83V153L55.77 101.71A109 109 0 0 1 67.14 88m48 128a87.53 87.53 0 0 1-24.34-42a8 8 0 0 0-15.49 4a105.2 105.2 0 0 0 18.36 38H64.44A95.54 95.54 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.29l137.8 55.12c3 18 10.56 33.48 21.89 45.16Z"></svg:path></svg:g>`,
})
export class PhBroomDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomFillIcon],svg[ph-broom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.29 216.7C212.86 205.69 200 182.12 200 152v-17.31a15.94 15.94 0 0 0-10.09-14.87l-28.65-11.46A8 8 0 0 1 156.79 98l22.32-56.67C184 28.79 178 14.21 165.34 9.51a24 24 0 0 0-30.7 13.71l-22.39 56.86a8 8 0 0 1-10.41 4.5l-28.73-11.5a15.91 15.91 0 0 0-17.38 3.66C34.68 98.4 24 123.71 24 152a111.53 111.53 0 0 0 31.15 77.53A8.06 8.06 0 0 0 61 232h171a8 8 0 0 0 8-7.51a8.21 8.21 0 0 0-4.71-7.79m-120.18-.7a87.5 87.5 0 0 1-24.26-41.71a8.21 8.21 0 0 0-9.25-6.18a8 8 0 0 0-6.32 9.89a105.3 105.3 0 0 0 18.36 38h-29.2A95.62 95.62 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.3l137.8 55.13c3 18.06 10.55 33.5 21.89 45.19Z"></svg:path>`,
})
export class PhBroomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomLightIcon],svg[ph-broom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.62 218.6C211.35 207.29 198 183 198 152v-17.3a14 14 0 0 0-8.82-13l-24.89-9.83a10 10 0 0 1-5.59-13L180 45.9a26 26 0 0 0-15-34.33c-12.95-4.83-27.88 1.84-33.31 15l-21 53.11a10 10 0 0 1-13 5.61L72.37 75a13.9 13.9 0 0 0-15.2 3.19C36.49 99.42 26 124.26 26 152a109.53 109.53 0 0 0 30.62 76.16A6 6 0 0 0 61 230h171a6 6 0 0 0 2.62-11.4M65.77 86.52a2 2 0 0 1 2.12-.43l25.4 10.29a22 22 0 0 0 28.63-12.32l21-53c3-7.13 11-10.81 18-8.21a14 14 0 0 1 8 18.54l-21.36 53.1a22.05 22.05 0 0 0 12.3 28.51l24.88 9.83a2 2 0 0 1 1.26 1.87V152c0 1.34 0 2.65.08 4L52.74 102.61a110 110 0 0 1 13.03-16.09M114.33 218a89.6 89.6 0 0 1-25.5-43.5a6 6 0 1 0-11.62 3a102.9 102.9 0 0 0 20.6 40.5H63.56A97.56 97.56 0 0 1 38 152a87.4 87.4 0 0 1 8.71-38.86l140.64 56.26c3.15 19.92 11.77 36.66 25 48.6Z"></svg:path>`,
})
export class PhBroomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBroomThinIcon],svg[ph-broom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.75 220.4C209.76 208.75 196 183.82 196 152v-17.28a12 12 0 0 0-7.56-11.15l-24.89-9.83a12 12 0 0 1-6.71-15.55l21.33-53a23.88 23.88 0 0 0-31.93-31a24.72 24.72 0 0 0-12.62 13.11l-21 53.1A12 12 0 0 1 97 87.13L71.63 76.84a12 12 0 0 0-13 2.73C38.3 100.45 28 124.82 28 152a107.5 107.5 0 0 0 30.07 74.77A4 4 0 0 0 61 228h171a4 4 0 0 0 1.75-7.6M64.34 85.15a3.94 3.94 0 0 1 4.3-.89L94 94.55a20 20 0 0 0 26-11.2l21-53c3.39-8.16 12.61-12.35 20.58-9.35a16 16 0 0 1 9.19 21.16l-21.36 53.06a20 20 0 0 0 11.18 26l24.9 9.83a4 4 0 0 1 2.51 3.72V152c0 2.36.08 4.69.22 7l-138.5-55.4a111 111 0 0 1 14.62-18.45M113.56 220a91.35 91.35 0 0 1-26.66-45a4 4 0 0 0-7.75 2a100.2 100.2 0 0 0 23.09 43H62.68A99.5 99.5 0 0 1 36 152a89.4 89.4 0 0 1 9.73-41.4l143.4 57.4c3.22 22 13.23 40.09 28.8 52Z"></svg:path>`,
})
export class PhBroomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserIcon],svg[ph-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v32H40V56Zm0 144H40v-96h176z"></svg:path>`,
})
export class PhBrowserIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserBoldIcon],svg[ph-browser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v24H44V60ZM44 196v-88h168v88Z"></svg:path>`,
})
export class PhBrowserBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserDuotoneIcon],svg[ph-browser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v40H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v32H40V56Zm0 144H40v-96h176z"></svg:path></svg:g>`,
})
export class PhBrowserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserFillIcon],svg[ph-browser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v32H40V56Z"></svg:path>`,
})
export class PhBrowserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserLightIcon],svg[ph-browser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v34H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2v-98h180v98a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhBrowserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowserThinIcon],svg[ph-browser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v36H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V100h184v100a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhBrowserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersIcon],svg[ph-browsers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 48v16H40V88Zm0 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path>`,
})
export class PhBrowsersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersBoldIcon],svg[ph-browsers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 32H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-20h20a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20m-44 64v16H40V96Zm0 104H40v-64h136Zm40-40h-16V92a20 20 0 0 0-20-20H80V56h136Z"></svg:path>`,
})
export class PhBrowsersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersDuotoneIcon],svg[ph-browsers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v112a8 8 0 0 1-8 8h-24V88a8 8 0 0 0-8-8H64V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h144v16H40Zm144 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path></svg:g>`,
})
export class PhBrowsersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersFillIcon],svg[ph-browsers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 48v16H40V88Zm32 80h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path>`,
})
export class PhBrowsersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersLightIcon],svg[ph-browsers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 86h144a2 2 0 0 1 2 2v18H38V88a2 2 0 0 1 2-2m146 114a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h148Zm32-32a2 2 0 0 1-2 2h-18V88a14 14 0 0 0-14-14H70V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhBrowsersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBrowsersThinIcon],svg[ph-browsers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 84h144a4 4 0 0 1 4 4v20H36V88a4 4 0 0 1 4-4m148 116a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h152Zm32-32a4 4 0 0 1-4 4h-20V88a12 12 0 0 0-12-12H68V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhBrowsersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugIcon],svg[ph-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 92a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m116 64a87.8 87.8 0 0 1-3 23l22.24 9.72A8 8 0 0 1 232 192a7.9 7.9 0 0 1-3.2-.67L207.38 182a88 88 0 0 1-158.76 0l-21.42 9.33a7.9 7.9 0 0 1-3.2.67a8 8 0 0 1-3.2-15.33L43 167a87.8 87.8 0 0 1-3-23v-8H16a8 8 0 0 1 0-16h24v-8a87.8 87.8 0 0 1 3-23l-22.2-9.67a8 8 0 1 1 6.4-14.66L48.62 74a88 88 0 0 1 158.76 0l21.42-9.36a8 8 0 0 1 6.4 14.66L213 89.05a87.8 87.8 0 0 1 3 23v8h24a8 8 0 0 1 0 16h-24ZM56 120h144v-8a72 72 0 0 0-144 0Zm64 95.54V136H56v8a72.08 72.08 0 0 0 64 71.54M200 144v-8h-64v79.54A72.08 72.08 0 0 0 200 144"></svg:path>`,
})
export class PhBugIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleIcon],svg[ph-bug-beetle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 152h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16.4a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 0 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32l19.5 19.49A79.76 79.76 0 0 0 48.4 104H32a8 8 0 0 0 0 16h16v16H32a8 8 0 0 0 0 16h16v8c0 2.7.14 5.37.4 8H32a8 8 0 0 0 0 16h19.68a80 80 0 0 0 152.64 0H224a8 8 0 0 0 0-16h-16.4c.26-2.63.4-5.3.4-8ZM128 48a64.07 64.07 0 0 1 63.48 56h-127A64.07 64.07 0 0 1 128 48m8 175.48V144a8 8 0 0 0-16 0v79.48A64.07 64.07 0 0 1 64 160v-40h128v40a64.07 64.07 0 0 1-56 63.48"></svg:path>`,
})
export class PhBugBeetleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleBoldIcon],svg[ph-bug-beetle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160a12 12 0 0 0 0-24h-12v-16h12a12 12 0 0 0 0-24h-13.55a83.7 83.7 0 0 0-18.78-38.7l16.82-16.81a12 12 0 1 0-17-17l-18 18a83.7 83.7 0 0 0-91.1 0l-18-18a12 12 0 0 0-17 17L64.33 57.3A83.7 83.7 0 0 0 45.55 96H32a12 12 0 0 0 0 24h12v16H32a12 12 0 0 0 0 24h12a83.6 83.6 0 0 0 1.55 16H32a12 12 0 0 0 0 24h22.15a84 84 0 0 0 147.7 0H224a12 12 0 0 0 0-24h-13.55a83.6 83.6 0 0 0 1.55-16ZM128 52a60.1 60.1 0 0 1 57.82 44H70.18A60.1 60.1 0 0 1 128 52m12 166.79V148a12 12 0 0 0-24 0v70.79A60.09 60.09 0 0 1 68 160v-40h120v40a60.09 60.09 0 0 1-48 58.79"></svg:path>`,
})
export class PhBugBeetleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleDuotoneIcon],svg[ph-bug-beetle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 112v48a72 72 0 0 1-72 72a72 72 0 0 1-72-72v-48Z" opacity=".2"></svg:path><svg:path d="M208 152h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16.4a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 0 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32l19.5 19.49A79.76 79.76 0 0 0 48.4 104H32a8 8 0 0 0 0 16h16v16H32a8 8 0 0 0 0 16h16v8c0 2.7.14 5.37.4 8H32a8 8 0 0 0 0 16h19.68a80 80 0 0 0 152.64 0H224a8 8 0 0 0 0-16h-16.4c.26-2.63.4-5.3.4-8ZM128 48a64.07 64.07 0 0 1 63.48 56h-127A64.07 64.07 0 0 1 128 48m8 175.48V144a8 8 0 0 0-16 0v79.48A64.07 64.07 0 0 1 64 160v-40h128v40a64.07 64.07 0 0 1-56 63.48"></svg:path></svg:g>`,
})
export class PhBugBeetleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleFillIcon],svg[ph-bug-beetle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120h-16v-16h16a8 8 0 0 1 0 16M32 104a8 8 0 0 0 0 16h16v-16Zm176 56c0 2.7-.14 5.37-.4 8H224a8 8 0 0 1 0 16h-19.68a80 80 0 0 1-152.64 0H32a8 8 0 0 1 0-16h16.4c-.26-2.63-.4-5.3-.4-8v-8H32a8 8 0 0 1 0-16h16v-16h160v16h16a8 8 0 0 1 0 16h-16Zm-72-16a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0ZM69.84 57.15A79.76 79.76 0 0 0 48.4 104h159.2a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 0 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32Z"></svg:path>`,
})
export class PhBugBeetleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleLightIcon],svg[ph-bug-beetle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 150h18a6 6 0 0 0 0-12h-18v-20h18a6 6 0 0 0 0-12h-18.25a77.8 77.8 0 0 0-22.38-48.88l20.87-20.88a6 6 0 1 0-8.48-8.48l-21.49 21.49a77.8 77.8 0 0 0-92.53 0l-21.5-21.49a6 6 0 0 0-8.48 8.48l20.88 20.88A77.76 77.76 0 0 0 50.25 106H32a6 6 0 0 0 0 12h18v20H32a6 6 0 0 0 0 12h18v10a79 79 0 0 0 .66 10H32a6 6 0 0 0 0 12h21.18a78 78 0 0 0 149.64 0H224a6 6 0 0 0 0-12h-18.66a79 79 0 0 0 .66-10ZM128 46a66.07 66.07 0 0 1 65.71 60H62.29A66.07 66.07 0 0 1 128 46m6 179.71V144a6 6 0 0 0-12 0v81.71A66.07 66.07 0 0 1 62 160v-42h132v42a66.07 66.07 0 0 1-60 65.71"></svg:path>`,
})
export class PhBugBeetleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBeetleThinIcon],svg[ph-bug-beetle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 148h20a4 4 0 0 0 0-8h-20v-24h20a4 4 0 0 0 0-8h-20.11a75.8 75.8 0 0 0-23.37-50.86l22.31-22.31a4 4 0 1 0-5.66-5.66L174.44 51.9a75.77 75.77 0 0 0-92.88 0L58.83 29.17a4 4 0 0 0-5.66 5.66l22.31 22.31A75.8 75.8 0 0 0 52.11 108H32a4 4 0 0 0 0 8h20v24H32a4 4 0 0 0 0 8h20v12a75.4 75.4 0 0 0 1 12H32a4 4 0 0 0 0 8h22.69a76 76 0 0 0 146.62 0H224a4 4 0 0 0 0-8h-21a75.4 75.4 0 0 0 1-12ZM128 44a68.08 68.08 0 0 1 67.87 64H60.13A68.08 68.08 0 0 1 128 44m4 183.87V144a4 4 0 0 0-8 0v83.87A68.08 68.08 0 0 1 60 160v-44h136v44a68.08 68.08 0 0 1-64 67.87"></svg:path>`,
})
export class PhBugBeetleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugBoldIcon],svg[ph-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-40-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m120 72a91.8 91.8 0 0 1-2.34 20.64l19.15 8.36a12 12 0 0 1-9.62 22l-18-7.85a92 92 0 0 1-162.46 0l-18 7.85a12 12 0 1 1-9.62-22l19.15-8.36A91.8 91.8 0 0 1 36 144v-4H16a12 12 0 0 1 0-24h20v-4a91.8 91.8 0 0 1 2.34-20.64L19.19 83a12 12 0 0 1 9.62-22l18 7.85a92 92 0 0 1 162.46 0l18-7.85a12 12 0 1 1 9.62 22l-19.15 8.36A91.8 91.8 0 0 1 220 112v4h20a12 12 0 0 1 0 24h-20ZM60 116h136v-4a68 68 0 0 0-136 0Zm56 94.92V140H60v4a68.1 68.1 0 0 0 56 66.92M196 144v-4h-56v70.92A68.1 68.1 0 0 0 196 144"></svg:path>`,
})
export class PhBugBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidIcon],svg[ph-bug-droid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m191.83 51.48l13.83-13.82a8 8 0 0 0-11.32-11.32L179.79 40.9a87.81 87.81 0 0 0-103.58 0L61.66 26.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 112v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 40a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m0 184a72.08 72.08 0 0 1-72-72v-16h144v16a72.08 72.08 0 0 1-72 72m16-132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBugDroidIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidBoldIcon],svg[ph-bug-droid-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m197.35 51.62l11.14-11.13a12 12 0 1 0-17-17l-12.15 12.2a91.84 91.84 0 0 0-102.68 0L64.49 23.51a12 12 0 0 0-17 17l11.16 11.11A91.58 91.58 0 0 0 36 112v40a92 92 0 0 0 184 0v-40a91.58 91.58 0 0 0-22.65-60.38M196 112v4H60v-4a68 68 0 0 1 136 0m-68 108a68.07 68.07 0 0 1-68-68v-12h136v12a68.07 68.07 0 0 1-68 68m12-132a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-56 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhBugDroidBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidDuotoneIcon],svg[ph-bug-droid-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128v24a80 80 0 0 1-160 0v-24Z" opacity=".2"></svg:path><svg:path d="m191.83 51.48l13.83-13.82a8 8 0 0 0-11.32-11.32L179.79 40.9a87.81 87.81 0 0 0-103.58 0L61.66 26.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 112v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 40a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m0 184a72.08 72.08 0 0 1-72-72v-16h144v16a72.08 72.08 0 0 1-72 72m16-132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhBugDroidDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidFillIcon],svg[ph-bug-droid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m191.83 51.48l13.83-13.82a8 8 0 0 0-11.32-11.32L179.79 40.9a87.81 87.81 0 0 0-103.58 0L61.66 26.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 112v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 40a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m16 52a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBugDroidFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidLightIcon],svg[ph-bug-droid-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m189 51.47l15.22-15.23a6 6 0 1 0-8.48-8.48L180 43.54a85.76 85.76 0 0 0-104 0L60.24 27.76a6 6 0 0 0-8.48 8.48L67 51.47A85.7 85.7 0 0 0 42 112v40a86 86 0 0 0 172 0v-40a85.7 85.7 0 0 0-25-60.53M128 38a74.09 74.09 0 0 1 74 74v10H54v-10a74.09 74.09 0 0 1 74-74m0 188a74.09 74.09 0 0 1-74-74v-18h148v18a74.09 74.09 0 0 1-74 74m18-134a10 10 0 1 1 10 10a10 10 0 0 1-10-10m-56 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhBugDroidLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDroidThinIcon],svg[ph-bug-droid-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m186.17 51.49l16.66-16.66a4 4 0 1 0-5.66-5.66l-17 17a83.72 83.72 0 0 0-104.26 0l-17-17a4 4 0 0 0-5.66 5.66l16.58 16.66A83.75 83.75 0 0 0 44 112v40a84 84 0 0 0 168 0v-40a83.75 83.75 0 0 0-25.83-60.51M128 36a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76m0 192a76.08 76.08 0 0 1-76-76v-20h152v20a76.08 76.08 0 0 1-76 76m20-136a8 8 0 1 1 8 8a8 8 0 0 1-8-8m-56 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBugDroidThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugDuotoneIcon],svg[ph-bug-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128v16a80 80 0 0 1-160 0v-16Z" opacity=".2"></svg:path><svg:path d="M144 92a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m116 64a87.8 87.8 0 0 1-3 23l22.24 9.72A8 8 0 0 1 232 192a7.9 7.9 0 0 1-3.2-.67L207.38 182a88 88 0 0 1-158.76 0l-21.42 9.33a7.9 7.9 0 0 1-3.2.67a8 8 0 0 1-3.2-15.33L43 167a87.8 87.8 0 0 1-3-23v-8H16a8 8 0 0 1 0-16h24v-8a87.8 87.8 0 0 1 3-23l-22.2-9.67a8 8 0 1 1 6.4-14.66L48.62 74a88 88 0 0 1 158.76 0l21.42-9.36a8 8 0 0 1 6.4 14.66L213 89.05a87.8 87.8 0 0 1 3 23v8h24a8 8 0 0 1 0 16h-24ZM56 120h144v-8a72 72 0 0 0-144 0Zm64 95.54V136H56v8a72.08 72.08 0 0 0 64 71.54M200 144v-8h-64v79.54A72.08 72.08 0 0 0 200 144"></svg:path></svg:g>`,
})
export class PhBugDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugFillIcon],svg[ph-bug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-68-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m116 64a87.8 87.8 0 0 1-3 23l22.24 9.72A8 8 0 0 1 232 192a7.9 7.9 0 0 1-3.2-.67L207.38 182a88 88 0 0 1-158.76 0l-21.42 9.33a7.9 7.9 0 0 1-3.2.67a8 8 0 0 1-3.2-15.33L43 167a87.8 87.8 0 0 1-3-23v-8H16a8 8 0 0 1 0-16h24v-8a87.8 87.8 0 0 1 3-23l-22.2-9.67a8 8 0 1 1 6.4-14.66L48.62 74a88 88 0 0 1 158.76 0l21.42-9.36a8 8 0 0 1 6.4 14.66L213 89.05a87.8 87.8 0 0 1 3 23v8h24a8 8 0 0 1 0 16h-24Zm-80 0a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0Zm64-32a72 72 0 0 0-144 0v8h144Z"></svg:path>`,
})
export class PhBugFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugLightIcon],svg[ph-bug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146 92a10 10 0 1 1 10 10a10 10 0 0 1-10-10m-46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m146 46a6 6 0 0 1-6 6h-26v10a85.9 85.9 0 0 1-3.45 24.08l23.85 10.42a6 6 0 0 1-4.8 11l-23.23-10.15a86 86 0 0 1-156.74 0L26.4 189.5a6 6 0 1 1-4.8-11l23.85-10.42A85.9 85.9 0 0 1 42 144v-10H16a6 6 0 0 1 0-12h26v-10a85.9 85.9 0 0 1 3.45-24.08L21.6 77.5a6 6 0 0 1 4.8-11l23.23 10.15a86 86 0 0 1 156.74 0L229.6 66.5a6 6 0 1 1 4.8 11l-23.85 10.42A85.9 85.9 0 0 1 214 112v10h26a6 6 0 0 1 6 6m-192-6h148v-10a74 74 0 0 0-148 0Zm68 95.74V134H54v10a74.09 74.09 0 0 0 68 73.74M202 134h-68v83.74A74.09 74.09 0 0 0 202 144Z"></svg:path>`,
})
export class PhBugLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBugThinIcon],svg[ph-bug-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 92a8 8 0 1 1 8 8a8 8 0 0 1-8-8m-48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m144 44a4 4 0 0 1-4 4h-28v12a83.6 83.6 0 0 1-3.87 25.2l25.47 11.13A4 4 0 0 1 232 188a4.1 4.1 0 0 1-1.6-.33l-25-10.95a84 84 0 0 1-154.72 0l-25 10.95A4.1 4.1 0 0 1 24 188a4 4 0 0 1-1.6-7.67l25.47-11.13A83.6 83.6 0 0 1 44 144v-12H16a4 4 0 0 1 0-8h28v-12a83.6 83.6 0 0 1 3.87-25.2L22.4 75.67a4 4 0 0 1 3.2-7.34l25 11a84 84 0 0 1 154.72 0l25-11a4 4 0 1 1 3.2 7.34L208.13 86.8A83.6 83.6 0 0 1 212 112v12h28a4 4 0 0 1 4 4m-192-4h152v-12a76 76 0 0 0-152 0Zm72 95.89V132H52v12a76.09 76.09 0 0 0 72 75.89M204 132h-72v87.89A76.09 76.09 0 0 0 204 144Z"></svg:path>`,
})
export class PhBugThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingIcon],svg[ph-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 32h128v192h-32v-40a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40H64Zm80 192h-32v-32h32ZM88 64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBuildingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentIcon],svg[ph-building-apartment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 112h40a8 8 0 0 0 8-8V48h80v24a8 8 0 0 0 8 8h40v128h-64v-40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v40H40Zm96 96h-16v-32h16ZM112 72a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m56 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-80 32a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m24-32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m56 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBuildingApartmentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentBoldIcon],svg[ph-building-apartment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-4V76a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v60H32a12 12 0 0 0-12 12v92h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 124h36a12 12 0 0 0 12-12V52h72v24a12 12 0 0 0 12 12h36v116h-64v-28a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v28H44Zm64-48a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m0 36a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m-64 36a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m12 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBuildingApartmentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentDuotoneIcon],svg[ph-building-apartment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v144h-80v-48h-32v48H32V104h48V40h96v32Z" opacity=".2"></svg:path><svg:path d="M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 112h40a8 8 0 0 0 8-8V48h80v24a8 8 0 0 0 8 8h40v128h-64v-40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v40H40Zm96 96h-16v-32h16ZM112 72a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m56 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-80 32a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m24-32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m56 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhBuildingApartmentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentFillIcon],svg[ph-building-apartment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M80 176H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 64h-32v-40h32Zm-8-64h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m56 96h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBuildingApartmentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentLightIcon],svg[ph-building-apartment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-10V72a6 6 0 0 0-6-6h-42V40a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v58H32a6 6 0 0 0-6 6v106H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 110h42a6 6 0 0 0 6-6V46h84v26a6 6 0 0 0 6 6h42v132h-68v-42a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v42H38Zm100 100h-20v-36h20ZM114 72a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-84 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m28-32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m56 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhBuildingApartmentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingApartmentThinIcon],svg[ph-building-apartment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-12V72a4 4 0 0 0-4-4h-44V40a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-4 4v108H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 108h44a4 4 0 0 0 4-4V44h88v28a4 4 0 0 0 4 4h44v136h-72v-44a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v44H36Zm104 104h-24v-40h24ZM116 72a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-88 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m32-32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhBuildingApartmentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingBoldIcon],svg[ph-building-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-20V36h4a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24h4v184H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M68 36h120v184h-24v-36a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v36H68Zm72 184h-24v-24h24ZM84 64a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12m-52 40a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m52 0a12 12 0 0 1 12-12h12a12 12 0 0 1 0 24h-12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBuildingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingDuotoneIcon],svg[ph-building-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 24v208h-48v-48h-48v48H56V24Z" opacity=".2"></svg:path><svg:path d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 32h128v192h-32v-40a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40H64Zm80 192h-32v-32h32ZM88 64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhBuildingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingFillIcon],svg[ph-building-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 56h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m0 40h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m-8 48a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m72 80h-48v-40h48Zm16-72h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhBuildingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingLightIcon],svg[ph-building-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 226h-26V30h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v196H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M62 30h132v196h-36v-42a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v42H62Zm84 196h-36v-36h36ZM90 64a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-48 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m48 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m-42 46a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12Zm42-6a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhBuildingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeIcon],svg[ph-building-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhBuildingOfficeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phBuildingOfficeBoldIcon],svg[ph-building-office-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 204h-12V99.3a12 12 0 0 0-4-23.3h-40V51.3a12 12 0 0 0-4-23.3H40a12 12 0 0 0-4 23.3V204H24a12 12 0 0 0 0 24h220a12 12 0 0 0 0-24m-36-104v104h-20V100ZM60 52h104v152h-16v-44a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v44H60Zm64 152h-24v-32h24ZM72 80a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m-48 40a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhBuildingOfficeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
