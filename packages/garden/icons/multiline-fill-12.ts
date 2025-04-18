import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMultilineFill12Icon],svg[garden-multiline-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 4h8M2 1h8M2 7h8m-8 3h3.5"></svg:path>`,
})
export class GardenMultilineFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
