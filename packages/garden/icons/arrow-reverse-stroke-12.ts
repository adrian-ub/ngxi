import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowReverseStroke12Icon],svg[garden-arrow-reverse-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M7 1L.5 7.5m11-3L5 11M3.5.5H7c.3 0 .5.2.5.5v3.5m1 7H5c-.3 0-.5-.2-.5-.5V7.5"></svg:path>`,
})
export class GardenArrowReverseStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
