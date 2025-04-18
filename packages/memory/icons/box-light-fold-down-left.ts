import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldDownLeftIcon],svg[memory-box-light-fold-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h1V3h-6v1h1v1h1v1h1v1h1v1h1m4 4h-3v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V0h2v1h9v9h1Z"></svg:path>`,
})
export class MemoryBoxLightFoldDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
