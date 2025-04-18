import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedLeftIcon],svg[memory-box-outer-light-dashed-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4zm0-6V1h2v3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
