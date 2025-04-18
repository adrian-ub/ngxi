import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUnderlineStroke16Icon],svg[garden-underline-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 15.5h10m-9-14v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8"></svg:path>`,
})
export class GardenUnderlineStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
