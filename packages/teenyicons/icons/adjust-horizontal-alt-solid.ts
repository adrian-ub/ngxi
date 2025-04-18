import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAdjustHorizontalAltSolidIcon],svg[teenyicons-adjust-horizontal-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 1a2.5 2.5 0 0 0-2.45 2H0v1h2.05a2.5 2.5 0 0 0 4.9 0H15V3H6.95A2.5 2.5 0 0 0 4.5 1m6 8a2.5 2.5 0 0 0-2.45 2H0v1h8.05a2.5 2.5 0 0 0 4.9 0H15v-1h-2.05a2.5 2.5 0 0 0-2.45-2"></svg:path>`,
})
export class TeenyiconsAdjustHorizontalAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
