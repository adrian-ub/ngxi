import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDecisionTreeIcon],svg[carbon-decision-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 12V4h-8v3h-4a2 2 0 0 0-2 2v6h-6v-3H2v8h8v-3h6v6a2 2 0 0 0 2 2h4v3h8v-8h-8v3h-4V9h4v3ZM8 18H4v-4h4Zm16 4h4v4h-4Zm0-16h4v4h-4Z"></svg:path>`,
})
export class CarbonDecisionTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
