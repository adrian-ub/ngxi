import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlash20FilledIcon],svg[fluent-flash-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.212 2c-.474 0-.89.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.022 1.354H6.23l-1.17 4.68c-.264 1.055 1.041 1.777 1.796.995l8.676-8.858l.004-.004c.64-.667.18-1.811-.767-1.811h-2.564l1.262-3.594l.002-.008A1.062 1.062 0 0 0 12.461 2z"></svg:path>`,
})
export class FluentFlash20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
