import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedHorizontalIcon],svg[memory-box-light-dashed-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12H0v-2h2m5 2H4v-2h3m6 2H9v-2h4m5 2h-3v-2h3m4 2h-2v-2h2Z"></svg:path>`,
})
export class MemoryBoxLightDashedHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
