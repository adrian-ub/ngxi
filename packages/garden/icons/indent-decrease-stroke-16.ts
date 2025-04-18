import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentDecreaseStroke16Icon],svg[garden-indent-decrease-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 1.5h13m-7 4h7m-7 4h7m-13 4h13M4 4.5L1.4 7.1c-.2.2-.2.5 0 .7L4 10.5"></svg:path>`,
})
export class GardenIndentDecreaseStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
