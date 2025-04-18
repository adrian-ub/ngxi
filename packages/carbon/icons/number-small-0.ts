import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall0Icon],svg[carbon-number-small-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v6h2v-6Z"></svg:path>`,
})
export class CarbonNumberSmall0Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
