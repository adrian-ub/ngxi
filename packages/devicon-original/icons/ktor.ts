import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalKtorIcon],svg[devicon-original-ktor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconOriginalKtor0" x1="24.941" x2="52.306" y1="24.941" y2="52.306" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".296" stop-color="#00afff"></svg:stop><svg:stop offset=".694" stop-color="#5282ff"></svg:stop><svg:stop offset="1" stop-color="#945dff"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconOriginalKtor1" x1="53.151" x2="79.023" y1="53.151" y2="79.023" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse"><svg:stop offset=".108" stop-color="#c757bc"></svg:stop><svg:stop offset=".173" stop-color="#cd5ca9"></svg:stop><svg:stop offset=".492" stop-color="#e8744f"></svg:stop><svg:stop offset=".716" stop-color="#f88316"></svg:stop><svg:stop offset=".823" stop-color="#ff8900"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconOriginalKtor0)" d="M80.457 47.543L47.543 14.629L14.629 47.543l32.914 32.914Zm0 0"></svg:path><svg:path fill="url(#deviconOriginalKtor1)" d="m47.543 80.457l32.914 32.914l32.914-32.914l-32.914-32.914Zm0 0"></svg:path><svg:path d="M80.457 47.543H47.543v32.914h32.914Zm0 0"></svg:path>`,
})
export class DeviconOriginalKtorIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
