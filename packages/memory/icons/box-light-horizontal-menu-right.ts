import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuRightIcon],svg[memory-box-light-horizontal-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H0v-2h6m16 2h-5v-2h5m-12 3h1v-1h1v-2h-1V9h-1m0 8H8V5h2v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
