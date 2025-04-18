import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPanelRightExpandIcon],svg[proicons-panel-right-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 16.75a3.5 3.5 0 0 1-3.5 3.5h-9.5a3.5 3.5 0 0 1-3.5-3.5v-9.5a3.5 3.5 0 0 1 3.5-3.5h9.5a3.5 3.5 0 0 1 3.5 3.5zm-5.797 3.5V3.75M8.96 14.25L6.75 12m0 0l2.21-2.25M6.75 12h4.7"></svg:path>`,
})
export class ProiconsPanelRightExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
