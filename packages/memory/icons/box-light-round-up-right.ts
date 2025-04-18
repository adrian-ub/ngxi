import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpRightIcon],svg[memory-box-light-round-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h4v1h3v1h1v1h1v1h1v1h1v3h1v4h-2v-3H9v-3H8v-1H7v-1H6v-1H3v-1H0z"></svg:path>`,
})
export class MemoryBoxLightRoundUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
