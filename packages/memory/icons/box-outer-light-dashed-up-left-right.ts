import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpLeftRightIcon],svg[memory-box-outer-light-dashed-up-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4h-2V2h-2V0h4zm-6-2h-4V0h4zm-6 0H6V0h4zM4 2H2v2H0V0h4zm18 4v4h-2V6zm0 6v3h-2v-3zm0 5v4h-2v-4zM0 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
