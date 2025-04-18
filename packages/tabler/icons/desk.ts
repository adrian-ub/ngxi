import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeskIcon],svg[tabler-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M4 6v13m16 0V6M4 10h16m-5-4v8a2 2 0 0 0 2 2h3"></svg:path>`,
})
export class TablerDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
