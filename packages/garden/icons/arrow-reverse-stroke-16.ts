import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowReverseStroke16Icon],svg[garden-arrow-reverse-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m1 10l9-9M6 15l9-9M4.5.5H10c.3 0 .5.2.5.5v5.5m1 9H6c-.3 0-.5-.2-.5-.5V9.5"></svg:path>`,
})
export class GardenArrowReverseStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
