import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsSuperheroAltIcon],svg[dashicons-superhero-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H5L2 8l8 8l8-8zm-3.3 6.9L10 11l-1.7.9l.3-1.9l-1.4-1.4l1.9-.3l.9-1.7l.9 1.8l1.9.3l-1.4 1.3z"></svg:path>`,
})
export class DashiconsSuperheroAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
