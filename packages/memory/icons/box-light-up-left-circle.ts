import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpLeftCircleIcon],svg[memory-box-light-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13V9h1V8h1V7h4v1h1v1h1v1h7v2h-7v1h-1v1h-1v1h-1v7h-2v-7H9v-1H8v-1zm3-4v1H9v2h1v1h2v-1h1v-2h-1V9z"></svg:path>`,
})
export class MemoryBoxLightUpLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
