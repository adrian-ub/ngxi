import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentIncreaseStroke16Icon],svg[garden-indent-increase-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 1.5h13m-7 4h7m-7 4h7m-13 4h13m-13-9l2.6 2.6c.2.2.2.5 0 .7l-2.6 2.6"></svg:path>`,
})
export class GardenIndentIncreaseStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
