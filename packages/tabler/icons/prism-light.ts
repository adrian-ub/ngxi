import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPrismLightIcon],svg[tabler-prism-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.731 19H16.27a1 1 0 0 0 .866-1.5l-5.769-10a1 1 0 0 0-1.732 0l-5.769 10a1 1 0 0 0 .865 1.5M2 13h4.45M18 5l-4.5 6M22 9l-7.75 3.25M22 15l-7-1.5"></svg:path>`,
})
export class TablerPrismLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
