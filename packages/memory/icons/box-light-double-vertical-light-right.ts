import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalLightRightIcon],svg[memory-box-light-double-vertical-light-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8V0h2m4 22h-2V0h2v10h8v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalLightRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
