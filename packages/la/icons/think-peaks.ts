import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laThinkPeaksIcon],svg[la-think-peaks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.506 2.44L3 24h2.313L15.51 6.42l10.119 17.379L29.574 17h-2.312l-1.637 2.82zm.02 7.99L8.813 22h2.315l4.4-7.59L24.027 29h2.315z"></svg:path>`,
})
export class LaThinkPeaksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
