import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEaseOutIcon],svg[tabler-ease-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 20S13 4 21 4"></svg:path>`,
})
export class TablerEaseOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
