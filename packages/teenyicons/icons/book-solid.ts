import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBookSolidIcon],svg[teenyicons-book-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H3V0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 15h1v-1h6.5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 11.5 0H4zm7-10H7V4h4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBookSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
