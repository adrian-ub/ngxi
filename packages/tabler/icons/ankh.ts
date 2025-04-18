import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAnkhIcon],svg[tabler-ankh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 13h12m-6 8v-8l-.422-.211A6.47 6.47 0 0 1 8 7a4 4 0 1 1 8 0a6.47 6.47 0 0 1-3.578 5.789L12 13"></svg:path>`,
})
export class TablerAnkhIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
