import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHealthCrossIcon],svg[carbon-health-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 28h-6a2 2 0 0 1-2-2v-5H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-5v5a2.003 2.003 0 0 1-2 2M6 13v6h7v7h6v-7h7v-6h-7V6h-6v7Z"></svg:path>`,
})
export class CarbonHealthCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
