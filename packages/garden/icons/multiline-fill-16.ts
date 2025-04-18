import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMultilineFill16Icon],svg[garden-multiline-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 6h12M2 2h12M2 10h12M2 14h6"></svg:path>`,
})
export class GardenMultilineFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
