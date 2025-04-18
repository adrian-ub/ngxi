import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenItalicFill12Icon],svg[garden-italic-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1h3M7 1L5 11m-1.5 0h3"></svg:path>`,
})
export class GardenItalicFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
