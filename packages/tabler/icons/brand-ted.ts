import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTedIcon],svg[tabler-brand-ted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 8h4M4 8v8m9-8H9v8h4m-4-4h2.5M16 8v8h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"></svg:path>`,
})
export class TablerBrandTedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
