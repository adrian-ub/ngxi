import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXFillIcon],svg[ph-funnel-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 128a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m56 48h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m69.66 10.34a8 8 0 0 1-11.32 11.32L176 187.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L164.69 176l-10.35-10.34a8 8 0 0 1 11.32-11.32L176 164.69l10.34-10.35a8 8 0 0 1 11.32 11.32L187.31 176ZM208 96H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunnelSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
