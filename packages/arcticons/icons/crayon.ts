import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrayonIcon],svg[arcticons-crayon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.24 44.338V14.902A11.273 11.273 0 0 0 24 3.662h0a11.273 11.273 0 0 0-11.24 11.24v29.374Z"></svg:path><svg:circle cx="19.611" cy="15.13" r="1.967" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:circle cx="28.389" cy="15.13" r="1.967" fill="none" stroke="currentColor" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M26.49 20.166a.78.78 0 0 1 .708 1.113a3.581 3.581 0 0 1-6.398-.001a.78.78 0 0 1 .709-1.112Z"></svg:path>`,
})
export class ArcticonsCrayonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
