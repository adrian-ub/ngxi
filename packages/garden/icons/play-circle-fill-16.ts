import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayCircleFill16Icon],svg[garden-play-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m2.79 8.71l-3.94 3.94a.5.5 0 0 1-.85-.36V3.71c0-.45.54-.67.85-.35l3.94 3.94c.39.38.39 1.02 0 1.41"></svg:path>`,
})
export class GardenPlayCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
