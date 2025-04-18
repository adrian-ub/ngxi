import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeyboardSolidIcon],svg[teenyicons-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0v4h5.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-7A1.5 1.5 0 0 1 1.5 4H7V0zm2 6h1v1h-1zm1 2h-1v1h1zm0 3H4v1h7zM7 8h1v1H7zM5 8H4v1h1zm3-2H7v1h1zM4 6h1v1H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsKeyboardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
