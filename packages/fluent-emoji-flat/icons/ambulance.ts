import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatAmbulanceIcon],svg[fluent-emoji-flat-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E6E6E6" d="M14 12H9.978a2 2 0 0 0-1.579.772l-5.556 7.145A4 4 0 0 0 2 22.372V25a2 2 0 0 0 2 2h10.32c0-7.292.798-13.912-.32-15"></svg:path><svg:path fill="#F92F60" d="M14.89 8.868A3 3 0 0 0 14 11v10.09h16V10a2 2 0 0 0-.351-1.132z"></svg:path><svg:path fill="#D3D3D3" d="M17 8a3 3 0 0 0-2.236 1h14.968A2 2 0 0 0 28 8zm13 13H14v6h14a2 2 0 0 0 2-2z"></svg:path><svg:path fill="#433B6B" d="M12 26.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m15 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="#F4F4F4" d="M10 26.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m15 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M22 12a1 1 0 0 0-1 1v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 0-1-1"></svg:path><svg:path fill="#FF822D" d="M3 25H2v-2.628A4 4 0 0 1 2.243 21H3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m26.5-3a1.5 1.5 0 0 0 0 3h.5v-3z"></svg:path><svg:path fill="#26C9FC" d="M4.333 18H11a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1H8.222z"></svg:path><svg:path fill="#D3D3D3" d="M10 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#F8312F" d="M11 11a1 1 0 1 1 2 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatAmbulanceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
