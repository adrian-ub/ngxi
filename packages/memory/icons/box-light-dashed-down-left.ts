import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedDownLeftIcon],svg[memory-box-light-dashed-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-2v-2h2zm-4 0h-3v-2h3zm-5 0h-3V9h2v1h1zM12 0v2h-2V0zm0 4v3h-2V4z"></svg:path>`,
})
export class MemoryBoxLightDashedDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
