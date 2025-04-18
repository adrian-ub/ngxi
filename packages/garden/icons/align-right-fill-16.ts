import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlignRightFill16Icon],svg[garden-align-right-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 2h12M5.5 6H14M2 10h12m-8.5 4H14"></svg:path>`,
})
export class GardenAlignRightFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
