import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnFlowChildrenIcon],svg[typcn-flow-children-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16a2.99 2.99 0 0 0-2.816 2H11c-1.654 0-3-1.346-3-3v-3.025A4.95 4.95 0 0 0 11 13h3.184A2.99 2.99 0 0 0 17 15a3 3 0 1 0 0-6a2.99 2.99 0 0 0-2.816 2H11c-1.654 0-3-1.346-3-3v-.184A2.99 2.99 0 0 0 10 5a3 3 0 1 0-6 0a2.99 2.99 0 0 0 2 2.816V15c0 2.757 2.243 5 5 5h3.184A2.99 2.99 0 0 0 17 22a3 3 0 1 0 0-6m0-5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1M7 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m10 16a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class TypcnFlowChildrenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
