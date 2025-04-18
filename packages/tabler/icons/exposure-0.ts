import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExposure0Icon],svg[tabler-exposure-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19a4 4 0 0 0 4-4V9a4 4 0 1 0-8 0v6a4 4 0 0 0 4 4"></svg:path>`,
})
export class TablerExposure0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
