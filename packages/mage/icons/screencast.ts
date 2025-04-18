import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageScreencastIcon],svg[mage-screencast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.6 20.325a1.85 1.85 0 0 0-1.85-1.85m4.815 1.85A4.815 4.815 0 0 0 2.75 15.51m7.949 4.815a7.95 7.95 0 0 0-7.949-7.949"></svg:path><svg:path d="M13.925 20.325h3.625a3.7 3.7 0 0 0 3.7-3.7v-9.25a3.7 3.7 0 0 0-3.7-3.7H6.45a3.7 3.7 0 0 0-3.7 3.7V9.15"></svg:path></svg:g>`,
})
export class MageScreencastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
