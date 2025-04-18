import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsCompassIcon],svg[duo-icons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M16.243 7.757c-.354-.353-4.95.707-6.364 2.122c-1.414 1.414-2.475 6.01-2.122 6.364c.354.353 4.95-.707 6.364-2.122c1.415-1.414 2.475-6.01 2.122-6.364" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
