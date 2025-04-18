import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalLeftIcon],svg[memory-box-light-double-vertical-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2Zm0 12H8v-8H0v-2h10Zm4 0h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
