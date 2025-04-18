import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownLeftIcon],svg[memory-box-outer-light-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v20h20v2H0z"></svg:path>`,
})
export class MemoryBoxOuterLightDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
