import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTrolleybusIcon],svg[fluent-emoji-flat-trolleybus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00F397" d="M30 25a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.1l14-1l14 1z"></svg:path><svg:path fill="#212121" fill-rule="evenodd" d="M8.5 30a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m15 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M8.5 28a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="#F8312F" d="M28 23a1 1 0 0 1 1-1h1v2h-1a1 1 0 0 1-1-1"></svg:path><svg:path fill="#FFB02E" d="M2 22a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z"></svg:path><svg:path fill="#F4F4F4" d="M16.543 6.543C17.433 5.653 18.675 5 20 5a1 1 0 1 1 0 2c-.675 0-1.433.347-2.043.957A3.5 3.5 0 0 0 17.23 9H19a1 1 0 0 1 1 1v1h7a3 3 0 0 1 3 3v7H2v-7a3 3 0 0 1 3-3h8v-1a1 1 0 0 1 1-1h1.122c.229-.94.76-1.795 1.42-2.457"></svg:path><svg:path fill="#5092FF" d="M2 19h28v2H2z"></svg:path><svg:path fill="#00A6ED" d="M10 13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm6 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM2 18.003V14c0-.346.059-.678.166-.987H5.92c.61 0 1.1.49 1.1 1.1v2.79c0 .61-.49 1.1-1.1 1.1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTrolleybusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
