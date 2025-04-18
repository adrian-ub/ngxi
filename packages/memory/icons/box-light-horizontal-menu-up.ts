import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuUpIcon],svg[memory-box-light-horizontal-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-7v-1h-1v-1h-1V9h-1V8h-2v1H9v1H8v1H7v1H0v-2h6V9h1V8h1V7h1V6h1V5h2v1h1v1h1v1h1v1h1v1h6m-5 7H5v-2h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h1m-4 0v-1h-1v-1h-2v1H9v1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
