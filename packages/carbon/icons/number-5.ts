import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumber5Icon],svg[carbon-number-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-6v-2h6v-4h-6V9h8v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNumber5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
