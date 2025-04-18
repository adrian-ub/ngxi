import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCollapseAllIcon],svg[carbon-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-2V7H13V5h15a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M25 20h-2v-8H8v-2h15a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M18 27H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 17v8h14.001L18 17Z"></svg:path>`,
})
export class CarbonCollapseAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
