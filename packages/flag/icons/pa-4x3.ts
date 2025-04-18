import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPa4x3Icon],svg[flag-pa-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPa4x30"><svg:path fill-opacity=".7" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagPa4x30)"><svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M92.5 0h477.2v480H92.4z"></svg:path><svg:path fill="#db0000" fill-rule="evenodd" d="M323 3.6h358v221.7H323z"></svg:path><svg:path fill="#0000ab" fill-rule="evenodd" d="M3.2 225.3h319.9V480H3.2zm211.6-47.6l-42-29.4l-41.7 29.6l15.5-48L105 100l51.6-.4l16-48l16.3 47.9h51.6l-41.5 30l15.9 48z"></svg:path><svg:path fill="#d80000" fill-rule="evenodd" d="m516.9 413.9l-42.4-27.7l-42.1 28l15.6-45.6l-42-28l52-.5l16.2-45.4l16.4 45.3h52l-41.8 28.5l16 45.4z"></svg:path></svg:g>`,
})
export class FlagPa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
