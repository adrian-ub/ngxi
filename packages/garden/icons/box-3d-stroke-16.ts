import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBox3dStroke16Icon],svg[garden-box-3d-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m7.76.63l-6 3.23c-.16.09-.26.25-.26.44v7.4c0 .18.1.35.26.44l6 3.23c.15.08.33.08.47 0l6-3.23c.16-.09.26-.26.26-.44V4.3c0-.18-.1-.35-.26-.44l-6-3.23a.49.49 0 0 0-.47 0zM1.5 4L8 7.5L14.5 4M8 7.5V15"></svg:path>`,
})
export class GardenBox3dStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
