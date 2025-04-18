import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserSoloStroke12Icon],svg[garden-user-solo-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="6" cy="3" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M1.5 11.5c.2-2.3 2.2-4 4.5-4s4.3 1.7 4.5 4"></svg:path></svg:g>`,
})
export class GardenUserSoloStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
