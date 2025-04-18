import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlignCenterFill16Icon],svg[garden-align-center-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 2h12M4 6h8M2 10h12M4 14h8"></svg:path>`,
})
export class GardenAlignCenterFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
