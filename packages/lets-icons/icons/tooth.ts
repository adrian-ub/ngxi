import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsToothIcon],svg[lets-icons-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 16.375c1.412 0 2.559 2.625 3.5 2.625c1.882 0 4.5-7 4.5-10.937C20 6.383 18.382 5 16.5 5S13.412 7 12 7S9.382 5 7.5 5S4 6.313 4 8.063C4 12 6.618 19 8.5 19c.941 0 2.088-2.625 3.5-2.625Z"></svg:path>`,
})
export class LetsIconsToothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
