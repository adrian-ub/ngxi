import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall1Icon],svg[carbon-number-small-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19v-8h-2v1h-2v2h2v5h-2v2h6v-2z"></svg:path>`,
})
export class CarbonNumberSmall1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
