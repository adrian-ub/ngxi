import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedFoldDownRightIcon],svg[memory-box-outer-light-dashed-fold-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H8V2h4m6 2h-4V2h4M4 6H2V2h4v2H4m17 2h-1V5h-1V4h1V1h2v4h-1m-4 5h-2V8h1V7h1V6h2v2h-1v1h-1M4 12H2V8h2m8 7h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v1h1v1h-1v1h-1v1h-1m-8 4H2v-4h2m4 5H6v-2h1v-1h1v-1h2v2H9v1H8m-3 4H1v-2h3v-1h1v1h1v1H5Z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedFoldDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
