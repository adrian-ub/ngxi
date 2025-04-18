import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDizzyFaceIcon],svg[emojione-dizzy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:path d="M28.6 19.8L16.5 32c-.8.8-3.6-2-2.8-2.8L25.9 17c.7-.7 3.5 2.1 2.7 2.8"></svg:path><svg:path d="M25.8 32L13.7 19.8c-.8-.8 2-3.6 2.8-2.8l12.2 12.2c.7.8-2.1 3.6-2.9 2.8m24.5-12.2L38.2 32c-.8.8-3.6-2-2.8-2.8L47.6 17c.7-.7 3.5 2.1 2.7 2.8"></svg:path><svg:path d="M47.5 32L35.4 19.8c-.8-.8 2-3.6 2.8-2.8l12.2 12.2c.7.8-2.1 3.6-2.9 2.8"></svg:path><svg:circle cx="32" cy="47" r="9"></svg:circle></svg:g><svg:path fill="#fff" d="M26 44c1.2-2.4 3.4-4 6-4s4.8 1.6 6 4z"></svg:path>`,
})
export class EmojioneDizzyFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
