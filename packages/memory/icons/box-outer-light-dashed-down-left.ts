import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedDownLeftIcon],svg[memory-box-outer-light-dashed-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 18h2v2h2v2H0zm6 2h4v2H6zm6 0h4v2h-4zm6 0h3v2h-3zM0 16v-4h2v4zm0-6V7h2v3zm0-5V1h2v4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
