import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedDownRightIcon],svg[memory-box-outer-light-dashed-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22v-2h2v-2h2v4zm2-6v-4h2v4zm0-6V6h2v4zm0-6V1h2v3zm-4 18h-4v-2h4zm-6 0H7v-2h3zm-5 0H1v-2h4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
