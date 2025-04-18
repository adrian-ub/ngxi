import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuDownIcon],svg[memory-box-light-vertical-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h-2V0h2m0 15h-2v-1H9v-1H8v-1H7v-1H6v-1H5V8h12v2h-1v1h-1v1h-1v1h-1v1h-1m0 8h-2v-5h2m0-5v-1h1v-1H9v1h1v1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
