import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowReverseFill16Icon],svg[garden-arrow-reverse-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="m1 10l7.5-7.5m-1 11L15 6"></svg:path><svg:path fill="currentColor" d="M11 5.79V.5c0-.28-.22-.5-.5-.5H5.21a.5.5 0 0 0-.36.85l5.29 5.29c.32.32.86.1.86-.35m-6 4.42v5.29c0 .28.22.5.5.5h5.29c.45 0 .67-.54.35-.85l-5.29-5.3a.5.5 0 0 0-.85.36"></svg:path>`,
})
export class GardenArrowReverseFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
