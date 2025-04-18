import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownBrokenIcon],svg[solar-circle-top-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m21 3l-9 9m0 0h5.344M12 12V6.656"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"></svg:path></svg:g>`,
})
export class SolarCircleTopDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
