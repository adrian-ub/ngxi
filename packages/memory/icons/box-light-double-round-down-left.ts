import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundDownLeftIcon],svg[memory-box-light-double-round-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0v3h1v2h1v2h1v1h1v1h1v1h2v1h2v1h3v2h-4v-1h-2v-1h-2v-1h-1v-1h-1V9h-1V8h-1V6H9V4H8V0zm12 10h-2V9h-3V8h-1V7h-1V6h-1V5h-1V2h-1V0h2v1h1v3h1v1h1v1h1v1h3v1h1z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
