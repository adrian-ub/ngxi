import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidCaretRightIcon],svg[fa-solid-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662"></svg:path>`,
})
export class FaSolidCaretRightIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
