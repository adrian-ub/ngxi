import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneTiltBoldIcon],svg[ph-paper-plane-tilt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.14 25.86a20 20 0 0 0-19.57-5.11l-.22.07L18.44 79a20 20 0 0 0-3.06 37.25L99 157l40.71 83.65a19.81 19.81 0 0 0 18 11.38c.57 0 1.15 0 1.73-.07a19.82 19.82 0 0 0 17.56-14.4l58.18-191.91a1.4 1.4 0 0 0 .07-.22a20 20 0 0 0-5.11-19.57m-73.23 195.21l-34.37-70.64l46-45.95a12 12 0 0 0-17-17l-46 46l-70.61-34.39L210 46Z"></svg:path>`,
})
export class PhPaperPlaneTiltBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
