import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsSuperheroIcon],svg[dashicons-superhero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 10L18 2L7 10h2l-7 8l11-8zm-4.3 1H3.9l2.5-1.8l7.5-5.5L10 2L3 5v3c0 2 .5 3.9 1.5 5.6zm6.4-2H16l-2.4 1.8L6.5 16c1 .9 2.2 1.6 3.5 2c4.2-1.5 7.1-5.5 7-10V5l-.2-.1z"></svg:path>`,
})
export class DashiconsSuperheroIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
