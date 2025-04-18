import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCarStroke12Icon],svg[garden-car-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1 4.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H1A.5.5 0 0 1 .5 9V5a.5.5 0 0 1 .5-.5zm.5 5h1V11a.5.5 0 1 1-1 0zm8 0h1V11a.5.5 0 1 1-1 0zm-7-9h7l1 4h-9zm.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1zm6 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class GardenCarStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
