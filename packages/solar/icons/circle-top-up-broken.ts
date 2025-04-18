import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpBrokenIcon],svg[solar-circle-top-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"></svg:path></svg:g>`,
})
export class SolarCircleTopUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
