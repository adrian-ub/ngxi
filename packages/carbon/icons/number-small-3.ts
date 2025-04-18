import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall3Icon],svg[carbon-number-small-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h-4v2h4v2h-3v2h3v2h-4v2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonNumberSmall3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
