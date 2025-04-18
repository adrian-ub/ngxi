import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundDownRightIcon],svg[memory-box-outer-light-round-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22v-2h5v-1h4v-1h2v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V9h1V5h1V0h2v6h-1v4h-1v2h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-2v1H6v1z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
