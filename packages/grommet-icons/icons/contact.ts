import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsContactIcon],svg[grommet-icons-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 2h21v16h-8l-8 4v-4H1zm5 8h1v1H6zm5 0h1v1h-1zm5 0h1v1h-1z"></svg:path>`,
})
export class GrommetIconsContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
