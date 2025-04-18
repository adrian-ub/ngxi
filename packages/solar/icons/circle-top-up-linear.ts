import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpLinearIcon],svg[solar-circle-top-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class SolarCircleTopUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
