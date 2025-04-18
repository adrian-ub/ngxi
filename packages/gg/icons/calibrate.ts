import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCalibrateIcon],svg[gg-calibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 5a8.97 8.97 0 0 1 6.314 2.586l-4.243 4.243A3 3 0 0 0 12.05 11c-.855 0-1.625.357-2.172.93L5.636 7.687A8.97 8.97 0 0 1 12.05 5m0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgCalibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
