import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpRightStippleInnerIcon],svg[memory-box-light-round-up-right-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18H2v-1h1m3 1h1v-1H6m-1 3H4v-1h1m3 3H7v-1h1v-1H7v-1H6v-1H5v-1h1v-1H5v-1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v1h1v-1h1v1h1v1h1v1h1v1H7v1h1v1h1v1H8m4 1h-2v-3H9v-3H8v-1H7v-1H6v-1H3v-1H0v-2h4v1h3v1h1v1h1v1h1v1h1v3h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpRightStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
