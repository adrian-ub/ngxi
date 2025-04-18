import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayStroke12Icon],svg[garden-play-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 1.2v9.6c0 .4.5.7.9.4l4.4-4.4c.4-.4.4-1 0-1.4L4.4.9c-.4-.4-.9-.1-.9.3z"></svg:path>`,
})
export class GardenPlayStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
