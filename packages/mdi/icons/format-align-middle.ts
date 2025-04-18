import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAlignMiddleIcon],svg[mdi-format-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 6l2-2l1.42 1.42L12 9.84L7.58 5.42L9 4l2 2V2h2zM3 11h18v2H3zm10 7v4h-2v-4l-2 2l-1.42-1.42L12 14.16l4.42 4.42L15 20z"></svg:path>`,
})
export class MdiFormatAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
