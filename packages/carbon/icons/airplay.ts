import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAirplayIcon],svg[carbon-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.996 30H9.004a1.002 1.002 0 0 1-.821-1.577l6.998-9.996a1 1 0 0 1 1.638 0l6.998 9.996a1.002 1.002 0 0 1-.82 1.577M10.92 28h10.16L16 20.744Z"></svg:path><svg:path fill="currentColor" d="M28 24h-4v-2h4V6H4v16h4v2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonAirplayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
