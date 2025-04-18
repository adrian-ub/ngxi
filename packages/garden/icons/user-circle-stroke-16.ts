import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserCircleStroke16Icon],svg[garden-user-circle-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="7.5"></svg:circle><svg:circle cx="8" cy="5.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="M11.5 12c-.6-1.5-1.8-2.5-3.5-2.5s-2.9 1-3.5 2.5"></svg:path></svg:g>`,
})
export class GardenUserCircleStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
