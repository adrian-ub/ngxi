import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUnderlineStroke12Icon],svg[garden-underline-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 11.5h8m-7-10v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5"></svg:path>`,
})
export class GardenUnderlineStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
