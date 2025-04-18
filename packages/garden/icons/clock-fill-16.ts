import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClockFill16Icon],svg[garden-clock-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m3 9H7.5c-.28 0-.5-.22-.5-.5V3c0-.28.22-.5.5-.5s.5.22.5.5v5h3c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class GardenClockFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
