import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpIcon],svg[memory-box-outer-light-dashed-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h4v2H1zm6 0h3v2H7zm5 0h4v2h-4zm6 0h3v2h-3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
