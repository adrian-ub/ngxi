import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxAlignBottomIcon],svg[tabler-box-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14h16v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0-5v.01M4 4v.01M9 4v.01M15 4v.01M20 4v.01M20 9v.01"></svg:path>`,
})
export class TablerBoxAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
