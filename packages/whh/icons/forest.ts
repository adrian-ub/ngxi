import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhForestIcon],svg[whh-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M865 823q-13 7-31 8l-1 1H577v128q0 26-18.5 45t-45.5 19H385q-26 0-45-19t-19-45V832H65q0-1-1-1q-18-1-31-8q-23-13-30-38t7-48l149-225h-30v-2q-19 1-32-7q-23-13-30-38t7-48L394 32q0-1 4-5l5.5-5.5l5.5-5l6.5-5l7-4.5l8-4l8.5-2l10-1l10 1l8.5 2l8 4l7 4.5l6.5 5l5.5 5L500 27l5 5l320 385q13 23 6 48t-30 38q-13 8-32 7v2h-30l150 225q13 23 6 48t-30 38"></svg:path>`,
})
export class WhhForestIcon {
  readonly viewBox = input("0 0 898 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
