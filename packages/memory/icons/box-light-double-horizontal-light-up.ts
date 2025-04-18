import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalLightUpIcon],svg[memory-box-light-double-horizontal-light-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H0V8h10V0h2v8h10m0 6H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalLightUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
