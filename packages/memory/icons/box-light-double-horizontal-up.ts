import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalUpIcon],svg[memory-box-light-double-horizontal-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2m12 10H12V0h2v8h8m0 6H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
