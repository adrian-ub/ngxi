import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpRightCircleIcon],svg[memory-box-light-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4v1h1v1h1v4h-1v1h-1v1h-1v7h-2v-7H9v-1H8v-1H7v-1H0v-2h7V9h1V8h1zm4 3h-1V9h-2v1H9v2h1v1h2v-1h1z"></svg:path>`,
})
export class MemoryBoxLightUpRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
