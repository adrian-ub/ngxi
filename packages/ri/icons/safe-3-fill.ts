import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSafe3FillIcon],svg[ri-safe-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1v2h2v-2h12v2h2v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12.35 5.236l1.332-1.332l1.414 1.414l-1.333 1.333a3.76 3.76 0 0 1 0 3.698l1.333 1.333l-1.414 1.414l-1.333-1.333a3.76 3.76 0 0 1-3.698 0l-1.333 1.333l-1.414-1.414l1.333-1.333a3.76 3.76 0 0 1 0-3.698L8.904 8.318l1.414-1.414l1.333 1.332a3.76 3.76 0 0 1 3.698 0m-.613 2.026a1.75 1.75 0 1 0-2.474 2.475a1.75 1.75 0 0 0 2.474-2.475M5 8h2v7H5z"></svg:path>`,
})
export class RiSafe3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
