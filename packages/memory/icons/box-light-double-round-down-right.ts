import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundDownRightIcon],svg[memory-box-light-double-round-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12h3v-1h2v-1h2V9h1V8h1V7h1V5h1V3h1V0h2v4h-1v2h-1v2h-1v1h-1v1H9v1H8v1H6v1H4v1H0zM10 0v2H9v3H8v1H7v1H6v1H5v1H2v1H0V8h1V7h3V6h1V5h1V4h1V1h1V0z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
