import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundUpLeftIcon],svg[memory-box-light-double-round-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10h-3v1h-2v1h-2v1h-1v1h-1v1h-1v2h-1v2h-1v3H8v-4h1v-2h1v-2h1v-1h1v-1h1v-1h1v-1h2V9h2V8h4zM12 22v-2h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h2v2h-1v1h-3v1h-1v1h-1v1h-1v3h-1v1z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
