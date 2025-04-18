import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEaseInOutIcon],svg[tabler-ease-in-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 20c8 0 10-16 18-16"></svg:path>`,
})
export class TablerEaseInOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
