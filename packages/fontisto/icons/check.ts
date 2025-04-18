import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCheckIcon],svg[fontisto-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 10.909l4.364-4.364l8.727 8.727L28.364-.001l4.364 4.364l-19.636 19.636z"></svg:path>`,
})
export class FontistoCheckIcon {
  readonly viewBox = input("0 0 33 24")
  readonly width = input("1.38em")
  readonly height = input("1em")
}
