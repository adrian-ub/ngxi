import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPaintBrush24Icon],svg[fluent-color-paint-brush-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPaintBrush240)" d="M19 2.75a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v9.75h14z"></svg:path><svg:path fill="url(#fluentColorPaintBrush241)" d="M5 12v2.252a2.25 2.25 0 0 0 2.25 2.25H10V20a2 2 0 1 0 4 0v-3.498h2.75a2.25 2.25 0 0 0 2.25-2.25V12z"></svg:path><svg:path fill="url(#fluentColorPaintBrush242)" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.5H5z"></svg:path><svg:path fill="url(#fluentColorPaintBrush243)" d="M12.5 5.252V2H14v3.252a.75.75 0 0 1-1.5 0"></svg:path><svg:path fill="url(#fluentColorPaintBrush244)" d="M15 6.251V2h1.5v4.251a.75.75 0 0 1-1.5 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorPaintBrush240" x1="9.2" x2="15.448" y1="-1.281" y2="16.05" gradientUnits="userSpaceOnUse"><svg:stop offset=".085" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush241" x1="5" x2="5.857" y1="8.471" y2="24.589" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#AC80FF"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush242" x1="8.329" x2="8.443" y1="11.199" y2="12.891" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5750E2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush243" x1="12.5" x2="16.548" y1=".611" y2="5.929" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPaintBrush244" x1="12.5" x2="16.548" y1=".611" y2="5.929" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPaintBrush24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
