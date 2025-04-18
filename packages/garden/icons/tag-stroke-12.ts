import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTagStroke12Icon],svg[garden-tag-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 1v3.8c0 .1.1.3.1.4l6 6c.2.2.5.2.7 0l3.8-3.8c.2-.2.2-.5 0-.7l-6-6c0-.1-.2-.2-.3-.2H1C.7.5.5.7.5 1z"></svg:path><svg:circle cx="3" cy="3" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenTagStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
