import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNumber9Icon],svg[carbon-number-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4v3h-5v2h5a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 7h-4v-5h4Z"></svg:path>`,
})
export class CarbonNumber9Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
