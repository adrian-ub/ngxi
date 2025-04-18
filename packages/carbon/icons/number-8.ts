import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumber8Icon],svg[carbon-number-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 2v4h-4v-4Zm-4 10v-4h4v4Z"></svg:path>`,
})
export class CarbonNumber8Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
