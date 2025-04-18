import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuRightIcon],svg[memory-box-light-vertical-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h1v-1h1v-2H8V9H7Zm0 4H5V5h2v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1H9v1H8v1H7Zm5 5h-2v-7h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V0h2v6h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
