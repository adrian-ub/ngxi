import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatComputerMouseIcon],svg[fluent-emoji-flat-computer-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CDC4D6" d="M7 7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v18a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5z"></svg:path><svg:path fill="#998EA4" d="M16.5 2h-1v4H15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.5v2.5a.5.5 0 0 0 1 0V12h.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatComputerMouseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
