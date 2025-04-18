import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMenu4Icon],svg[tabler-menu-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6h10M4 12h16M7 12h13M7 18h10"></svg:path>`,
})
export class TablerMenu4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
