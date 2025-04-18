import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldDownRightIcon],svg[memory-box-light-fold-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h1V8h1V7h1V6h1V5h1V4h1V3H3m0 9H0v-2h1V1h9V0h2v3h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3Z"></svg:path>`,
})
export class MemoryBoxLightFoldDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
