import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLoaderQuarterIcon],svg[tabler-loader-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V3m-6 9H3m4.75-4.25L5.6 5.6"></svg:path>`,
})
export class TablerLoaderQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
