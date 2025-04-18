import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightIcon],svg[ph-arrow-line-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-32 56a8 8 0 0 0-8 8v76.69L85.66 82.34a8 8 0 0 0-11.32 11.32L172.69 192H96a8 8 0 0 0 0 16h96a8 8 0 0 0 8-8v-96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhArrowLineDownRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
