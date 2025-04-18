import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContrastDrop2FillIcon],svg[ri-contrast-drop-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.636 6.633L12 .269l6.364 6.364a9 9 0 1 1-12.728 0M12 3.097l-4.95 4.95A6.98 6.98 0 0 0 5 12.997h14a6.98 6.98 0 0 0-2.05-4.95z"></svg:path>`,
})
export class RiContrastDrop2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
