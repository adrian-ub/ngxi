import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhZeldaIcon],svg[whh-zelda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1013 896H525q-20-18-7-31l232-410q8-7 19-7t19 7l232 410q13 12-7 31M269 448q-20-18-7-31L494 7q8-7 19-7t19 7l232 410q13 12-7 31zm239 417q13 12-7 31H13q-20-18-7-31l232-410q8-7 19-7t19 7z"></svg:path>`,
})
export class WhhZeldaIcon {
  readonly viewBox = input("0 0 1026 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
