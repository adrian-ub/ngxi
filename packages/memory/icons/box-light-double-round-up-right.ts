import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundUpRightIcon],svg[memory-box-light-double-round-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22v-3h-1v-2h-1v-2H9v-1H8v-1H7v-1H5v-1H3v-1H0V8h4v1h2v1h2v1h1v1h1v1h1v1h1v2h1v2h1v4zM0 12h2v1h3v1h1v1h1v1h1v1h1v3h1v2H8v-1H7v-3H6v-1H5v-1H4v-1H1v-1H0z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
