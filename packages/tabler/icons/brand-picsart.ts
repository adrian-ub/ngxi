import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPicsartIcon],svg[tabler-brand-picsart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9"></svg:path><svg:path d="M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5 9v11a2 2 0 1 0 4 0v-4.5"></svg:path></svg:g>`,
})
export class TablerBrandPicsartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
