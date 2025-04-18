import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBodyIcon],svg[bx-body-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 22V9h5V7H4v2h5v13h2v-7h2v7z"></svg:path>`,
})
export class BxBodyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
