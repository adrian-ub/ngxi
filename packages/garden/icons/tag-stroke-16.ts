import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTagStroke16Icon],svg[garden-tag-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 1v5.3c0 .1.1.3.1.4l8.5 8.5c.2.2.5.2.7 0l5.3-5.3c.2-.2.2-.5 0-.7L6.6.6S6.4.5 6.3.5H1C.7.5.5.7.5 1z"></svg:path><svg:circle cx="4" cy="4" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenTagStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
