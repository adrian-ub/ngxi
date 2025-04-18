import { Component, input } from '@angular/core'

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
