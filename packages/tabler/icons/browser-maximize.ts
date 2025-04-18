import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrowserMaximizeIcon],svg[tabler-browser-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8m8 3.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.5M8 4v4m8 0l5-5m0 4.5V3h-4.5"></svg:path>`,
})
export class TablerBrowserMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
