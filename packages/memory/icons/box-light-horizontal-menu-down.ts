import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuDownIcon],svg[memory-box-light-horizontal-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2v-1H9v-1H8V9H7V8H6V7H5V5h12v2h-1v1h-1v1h-1v1h-1v1h-1m0 6h-2v-1H9v-1H8v-1H7v-1H6v-1H0v-2h7v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h7v2h-6v1h-1v1h-1v1h-1v1h-1m0-7V8h1V7H9v1h1v1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
