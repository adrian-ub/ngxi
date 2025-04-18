import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenWrapLeftStroke12Icon],svg[garden-wrap-left-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 11a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1zm7-3a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1zm0-3a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1zM6 3H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 1v4H2V4zM1.5 2a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class GardenWrapLeftStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
