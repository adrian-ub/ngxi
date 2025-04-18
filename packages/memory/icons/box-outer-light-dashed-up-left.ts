import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpLeftIcon],svg[memory-box-outer-light-dashed-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2v2H0V0zM2 6v4H0V6zm0 6v4H0v-4zm0 6v3H0v-3zM6 0h4v2H6zm6 0h3v2h-3zm5 0h4v2h-4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
