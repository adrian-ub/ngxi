import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMultilineStroke16Icon],svg[garden-multiline-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 6.5h13m-13-4h13m-13 8h13m-13 4h6"></svg:path>`,
})
export class GardenMultilineStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
