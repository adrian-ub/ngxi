import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenStarStroke12Icon],svg[garden-star-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m6 9.3l2.9 1.9c.3.2.8-.1.7-.5l-.9-3.4l2.7-2.2c.3-.3.1-.8-.3-.8l-3.4-.1L6.4 1c-.1-.4-.7-.4-.8 0L4.3 4.2l-3.4.2c-.4 0-.6.5-.3.8l2.7 2.2l-.9 3.3c-.1.4.3.7.7.5z"></svg:path>`,
})
export class GardenStarStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
