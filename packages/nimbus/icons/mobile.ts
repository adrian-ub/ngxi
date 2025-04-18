import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusMobileIcon],svg[nimbus-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 0h-8.5A1.25 1.25 0 0 0 2.5 1.25v13.5A1.25 1.25 0 0 0 3.75 16h8.5a1.25 1.25 0 0 0 1.25-1.25V1.25A1.25 1.25 0 0 0 12.25 0m0 14.75h-8.5V1.25h8.5z"></svg:path><svg:ellipse cx="8" cy="12.75" fill="currentColor" rx=".8" ry=".75"></svg:ellipse>`,
})
export class NimbusMobileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
