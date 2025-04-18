import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContrastDrop2LineIcon],svg[ri-contrast-drop-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.097l-4.95 4.95a7 7 0 1 0 9.9 0zM12 .27l6.364 6.364a9 9 0 1 1-12.728 0zM7 12.997h10a5 5 0 1 1-10 0"></svg:path>`,
})
export class RiContrastDrop2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
