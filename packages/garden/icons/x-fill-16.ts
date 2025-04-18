import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenXFill16Icon],svg[garden-x-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 13L13 3m0 10L3 3"></svg:path>`,
})
export class GardenXFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
