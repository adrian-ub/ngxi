import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRiceIcon],svg[tdesign-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C8.855 4 6.17 5.211 5.493 7.714A15 15 0 0 0 5.057 10h13.886a15 15 0 0 0-.435-2.282C17.831 5.212 15.148 4 12 4m8 8H4a8 8 0 1 0 16 0M3.048 10c.08-.886.257-1.859.514-2.809C4.605 3.341 8.564 2 12 2c3.44 0 7.397 1.343 8.439 5.196c.256.948.433 1.92.513 2.804H22v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2zm7.95-5.002h2.004v2.004h-2.004zm-3 2h2.004v2.004H7.998zm6 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignRiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
