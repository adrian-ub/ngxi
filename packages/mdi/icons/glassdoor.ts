import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassdoorIcon],svg[mdi-glassdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 2a3 3 0 0 0-3 3v11.5h3V5h11a3 3 0 0 0-3-3H8m8 5.5V19H5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7.5h-3z" fill="currentColor"></svg:path>`,
})
export class MdiGlassdoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
