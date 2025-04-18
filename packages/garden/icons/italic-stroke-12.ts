import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenItalicStroke12Icon],svg[garden-italic-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 1.5h2m-1 0l-2 10m-1 0h2"></svg:path>`,
})
export class GardenItalicStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
