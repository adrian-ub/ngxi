import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipLinearIcon],svg[solar-paperclip-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196s-6.954-2.539-9.607 0L3 10.034"></svg:path>`,
})
export class SolarPaperclipLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
