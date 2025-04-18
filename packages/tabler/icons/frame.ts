import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFrameIcon],svg[tabler-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 17h16M7 4v16M17 4v16"></svg:path>`,
})
export class TablerFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
