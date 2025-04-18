import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayCircleStroke16Icon],svg[garden-play-circle-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="8" r="7.5" fill="none" stroke="currentColor" stroke-width="1.034"></svg:circle><svg:path fill="currentColor" d="M10.79 7.29L6.85 3.35a.5.5 0 0 0-.85.36v8.59c0 .45.54.67.85.35l3.94-3.94c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class GardenPlayCircleStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
