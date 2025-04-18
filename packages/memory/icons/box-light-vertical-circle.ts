import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalCircleIcon],svg[memory-box-light-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-7H9v-1H8v-1H7V9h1V8h1V7h1V0h2v7h1v1h1v1h1v4h-1v1h-1v1h-1m0-2v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
