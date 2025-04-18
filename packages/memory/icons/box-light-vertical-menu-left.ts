import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuLeftIcon],svg[memory-box-light-vertical-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h1V9h-1v1h-1v2h1m3 5h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1V6h1V5h2m-5 17h-2v-6H9v-1H8v-1H7v-1H6v-1H5v-2h1V9h1V8h1V7h1V6h1V0h2v7h-1v1h-1v1H9v1H8v2h1v1h1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
