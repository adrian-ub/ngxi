import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalHorizontalIcon],svg[memory-box-light-double-vertical-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2m12 10H12V0h2v8h8M10 22H8v-8H0v-2h10m4 10h-2V12h10v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
