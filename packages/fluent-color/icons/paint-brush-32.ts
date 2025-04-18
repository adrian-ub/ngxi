import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPaintBrush32Icon],svg[fluent-color-paint-brush-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPaintBrush320)" d="M6 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12H6z"></svg:path><svg:path fill="url(#fluentColorPaintBrush321)" d="M26 15.5H6v3.25A3.25 3.25 0 0 0 9.25 22H13v5a3 3 0 1 0 6 0v-5h3.75A3.25 3.25 0 0 0 26 18.75z"></svg:path><svg:path fill="url(#fluentColorPaintBrush322)" d="M6 15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1H6z"></svg:path><svg:path fill="url(#fluentColorPaintBrush323)" d="M17 2v5a1 1 0 1 0 2 0V2z"></svg:path><svg:path fill="url(#fluentColorPaintBrush324)" d="M23 9V2h-2v7a1 1 0 1 0 2 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorPaintBrush320" x1="12" x2="18.902" y1="-2.062" y2="20.028" gradientUnits="userSpaceOnUse"><svg:stop offset=".085" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush321" x1="6" x2="7.262" y1="10.383" y2="33.752" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#AC80FF"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush322" x1="10.756" x2="10.897" y1="14.266" y2="16.523" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush323" x1="17" x2="23.575" y1="-.222" y2="7.877" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush324" x1="17" x2="23.575" y1="-.222" y2="7.877" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPaintBrush32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
