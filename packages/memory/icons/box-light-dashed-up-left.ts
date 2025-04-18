import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedUpLeftIcon],svg[memory-box-light-dashed-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-2h2v2zm0-4v-3h2v3zm0-5v-3h3v2h-1v1zm12-1h-2v-2h2zm-4 0h-3v-2h3z"></svg:path>`,
})
export class MemoryBoxLightDashedUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
