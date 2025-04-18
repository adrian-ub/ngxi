import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpIcon],svg[tdesign-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.995 21.006l-2-.006v-2.006h2.012zm-2-3.556v-2.38c0-1.15.518-2.11 1.137-2.871c.614-.756 1.395-1.397 2.055-1.917a3.544 3.544 0 1 0-5.534-3.968l-.334.943l-1.885-.666l.333-.943A5.546 5.546 0 0 1 17.54 7.497a5.54 5.54 0 0 1-2.116 4.357c-.655.516-1.279 1.04-1.74 1.608c-.458.562-.689 1.087-.689 1.609v2.379z"></svg:path>`,
})
export class TdesignHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
