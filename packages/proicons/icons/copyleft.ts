import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCopyleftIcon],svg[proicons-copyleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9.25"></svg:circle><svg:path d="M9.172 14.828a4 4 0 1 0 0-5.656"></svg:path></svg:g>`,
})
export class ProiconsCopyleftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
