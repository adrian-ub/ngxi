import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiEntranceIcon],svg[maki-entrance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.5v-1a1 1 0 0 0-2 0v3zM6 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m9 3a1 1 0 0 1-1 1h-1.58a1 1 0 0 0-.71.29l-5.42 5.42a1 1 0 0 1-.7.29H3a1 1 0 0 1 0-2h1.59a1 1 0 0 0 .7-.29l5.42-5.42a1 1 0 0 1 .71-.29H14a1 1 0 0 1 1 1"></svg:path>`,
})
export class MakiEntranceIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
