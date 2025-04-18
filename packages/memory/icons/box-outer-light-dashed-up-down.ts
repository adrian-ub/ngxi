import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpDownIcon],svg[memory-box-outer-light-dashed-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-4V0h4zm-6 0h-3V0h3zm-5 0H6V0h4zM4 2H1V0h3zm17 20h-4v-2h4zm-6 0h-3v-2h3zm-5 0H6v-2h4zm-6 0H1v-2h3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
