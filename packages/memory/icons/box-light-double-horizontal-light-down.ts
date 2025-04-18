import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalLightDownIcon],svg[memory-box-light-double-horizontal-light-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H0V8h22M12 22h-2v-8H0v-2h22v2H12Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalLightDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
