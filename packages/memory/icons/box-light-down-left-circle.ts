import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftCircleIcon],svg[memory-box-light-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15H9v-1H8v-1H7V9h1V8h1V7h1V0h2v7h1v1h1v1h1v1h7v2h-7v1h-1v1h-1zm-4-3h1v1h2v-1h1v-2h-1V9h-2v1H9z"></svg:path>`,
})
export class MemoryBoxLightDownLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
