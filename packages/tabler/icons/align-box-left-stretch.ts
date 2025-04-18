import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlignBoxLeftStretchIcon],svg[tabler-align-box-left-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 12H7m6-5H7m4-5H7"></svg:path>`,
})
export class TablerAlignBoxLeftStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
