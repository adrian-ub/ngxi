import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPills2BoldDuotoneIcon],svg[solar-pills-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.465 20.536a5 5 0 1 0 7.07-7.071a5 5 0 0 0-7.07 7.07M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.056 17.75h9.888a5 5 0 0 0 0-1.5h-9.888a5 5 0 0 0 0 1.5M3.974 4.035l6.991 6.991a5 5 0 0 0 1.06-1.06l-6.99-6.992a5 5 0 0 0-1.061 1.06"></svg:path>`,
})
export class SolarPills2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
