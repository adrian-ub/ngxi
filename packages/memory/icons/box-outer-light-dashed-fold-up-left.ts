import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedFoldUpLeftIcon],svg[memory-box-outer-light-dashed-fold-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3h-1V2h-1V1h1V0h4v2h-3m-4 5h-2V5h1V4h1V3h2v2h-1v1h-1m6 2h-2V4h2M9 12H8v-1H7v-1h1V9h1V8h1V7h1v1h1v1h-1v1h-1v1H9m11 3h-2v-4h2M5 16H3v-2h1v-1h1v-1h2v2H6v1H5m3 5H4v-2h4m6 2h-4v-2h4m6 2h-4v-2h2v-2h2M2 21H0v-4h1v-1h1v1h1v1H2Z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedFoldUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
