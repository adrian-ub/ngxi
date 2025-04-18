import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUnderlineFill12Icon],svg[garden-underline-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 11h6M3 1v4c0 1.7 1.3 3 3 3s3-1.3 3-3V1"></svg:path>`,
})
export class GardenUnderlineFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
