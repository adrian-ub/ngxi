import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlusStroke16Icon],svg[garden-plus-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M7.5 2.5v12m6-6h-12"></svg:path>`,
})
export class GardenPlusStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
