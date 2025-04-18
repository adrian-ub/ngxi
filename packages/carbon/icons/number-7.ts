import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumber7Icon],svg[carbon-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-8v4h2v-2h3.85L13 23h2.16L20 11z"></svg:path>`,
})
export class CarbonNumber7Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
