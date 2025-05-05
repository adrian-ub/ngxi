import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTranslateIcon],svg[picon-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0q0 4-4 4V3q3 0 3-2H0V0m7 4H5v1h2M4 8V5c0-3 4-3 4 0v3H7V6H5v2"></svg:path>`,
})
export class PiconTranslateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
