import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFirstAidKitIcon],svg[tabler-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6 4h4m-2-2v4"></svg:path>`,
})
export class TablerFirstAidKitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
