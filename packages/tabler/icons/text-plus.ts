import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextPlusIcon],svg[tabler-text-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10H5m0-4h14m-5 8H5m0 4h6m7-3v6m-3-3h6"></svg:path>`,
})
export class TablerTextPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
