import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalDownIcon],svg[memory-box-light-double-horizontal-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H0V8h22M10 22H8v-8H0v-2h10m4 10h-2V12h10v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
