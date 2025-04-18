import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatChessPawnIcon],svg[fluent-emoji-flat-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M18.646 9a4 4 0 1 0-5.292 0H13a2 2 0 1 0 0 4h.5v4s0 .5-.5 1l-2.025 2.025c-1.493 1.493-1.26 3.703.015 4.975A3 3 0 0 0 8 28v2h16v-2a3 3 0 0 0-2.99-3c1.274-1.272 1.508-3.482.015-4.975L19 18c-.5-.5-.5-1-.5-1v-4h.5a2 2 0 1 0 0-4z"></svg:path>`,
})
export class FluentEmojiFlatChessPawnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
