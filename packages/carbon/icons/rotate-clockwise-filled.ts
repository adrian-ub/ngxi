import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRotateClockwiseFilledIcon],svg[carbon-rotate-clockwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H16a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M15 2l-1.41 1.41L16.17 6H11a7.01 7.01 0 0 0-7 7v5h2v-5a5.006 5.006 0 0 1 5-5h5.17l-2.58 2.59L15 12l5-5z"></svg:path>`,
})
export class CarbonRotateClockwiseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
