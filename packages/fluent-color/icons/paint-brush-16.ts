import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPaintBrush16Icon],svg[fluent-color-paint-brush-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPaintBrush160)" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V8H3z"></svg:path><svg:path fill="url(#fluentColorPaintBrush161)" d="M13 7.5H3V9a2 2 0 0 0 2 2h1.5v2.5a1.5 1.5 0 0 0 3 0V11H11a2 2 0 0 0 2-2z"></svg:path><svg:path fill="url(#fluentColorPaintBrush162)" d="M3 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V8H3z"></svg:path><svg:path fill="url(#fluentColorPaintBrush163)" d="M10 1v3.5a.5.5 0 0 0 1 0V1z"></svg:path><svg:path fill="url(#fluentColorPaintBrush164)" d="M9 3.5V1H8v2.5a.5.5 0 0 0 1 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorPaintBrush160" x1="6" x2="9.946" y1="-1.187" y2="10.541" gradientUnits="userSpaceOnUse"><svg:stop offset=".085" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush161" x1="3" x2="3.675" y1="4.853" y2="16.939" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#AC80FF"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush162" x1="5.378" x2="5.449" y1="7.133" y2="8.261" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush163" x1="8" x2="11.287" y1="-.111" y2="3.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush164" x1="8" x2="11.287" y1="-.111" y2="3.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPaintBrush16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
