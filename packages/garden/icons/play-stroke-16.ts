import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayStroke16Icon],svg[garden-play-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 1.2v13.6c0 .4.5.7.9.4l6.4-6.4c.4-.4.4-1 0-1.4L6.4.9c-.4-.4-.9-.1-.9.3z"></svg:path>`,
})
export class GardenPlayStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
