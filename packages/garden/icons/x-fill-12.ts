import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenXFill12Icon],svg[garden-x-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 8.5l5-5m0 5l-5-5"></svg:path>`,
})
export class GardenXFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
