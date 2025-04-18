import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedVerticalHorizontalIcon],svg[memory-box-light-dashed-vertical-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 7h-2V4h2M2 12H0v-2h2m5 2H4v-2h3m11 2h-3v-2h3m4 2h-2v-2h2m-10 3h-2v-1H9v-2h1V9h2v1h1v2h-1m0 6h-2v-3h2m0 7h-2v-2h2Z"></svg:path>`,
})
export class MemoryBoxLightDashedVerticalHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
