import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenItalicStroke16Icon],svg[garden-italic-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M7.5 1.5h3M9 1.5l-3 14m-1.5 0h3"></svg:path>`,
})
export class GardenItalicStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
