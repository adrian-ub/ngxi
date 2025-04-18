import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundDownLeftIcon],svg[memory-box-outer-light-round-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v5h1v4h1v2h1v2h1v1h1v1h1v1h1v1h2v1h2v1h4v1h5v2h-6v-1h-4v-1h-2v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V6H0z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
