import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlignBoxRightTopIcon],svg[tabler-align-box-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 8h2m-6-3h6m-4-3h4"></svg:path>`,
})
export class TablerAlignBoxRightTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
