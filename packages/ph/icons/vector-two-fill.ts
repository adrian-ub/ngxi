import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoFillIcon],svg[ph-vector-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 197.66l-32 32A8 8 0 0 1 184 224v-24H80a8 8 0 0 1-8-8V80H48a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 112 80H88v104h96v-24a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhVectorTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
