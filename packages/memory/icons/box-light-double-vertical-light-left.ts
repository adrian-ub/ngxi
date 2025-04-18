import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalLightLeftIcon],svg[memory-box-light-double-vertical-light-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8V12H0v-2h8V0h2m4 22h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalLightLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
