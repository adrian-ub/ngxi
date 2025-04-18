import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoLightIcon],svg[ph-vector-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 196.24l-32 32a6 6 0 0 1-8.48-8.48L209.51 198H80a6 6 0 0 1-6-6V54.49L52.24 76.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L86 54.49V186h123.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhVectorTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
