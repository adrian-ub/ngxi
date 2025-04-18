import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall5Icon],svg[carbon-number-small-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-4v-2h4v-2h-4v-6h6v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNumberSmall5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
