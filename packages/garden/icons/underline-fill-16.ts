import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUnderlineFill16Icon],svg[garden-underline-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 15h10M4 1v7c0 2.2 1.8 4 4 4s4-1.8 4-4V1"></svg:path>`,
})
export class GardenUnderlineFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
