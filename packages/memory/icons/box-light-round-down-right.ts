import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownRightIcon],svg[memory-box-light-round-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v4h-1v3h-1v1H9v1H8v1H7v1H4v1H0v-2h3V9h3V8h1V7h1V6h1V3h1V0z"></svg:path>`,
})
export class MemoryBoxLightRoundDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
