import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserSoloStroke16Icon],svg[garden-user-solo-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="5" r="3.5"></svg:circle><svg:path stroke-linecap="round" d="M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5"></svg:path></svg:g>`,
})
export class GardenUserSoloStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
