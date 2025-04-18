import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidMayaFilledIcon],svg[tdesign-pyramid-maya-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4H7V4H6zm5 2.498v2.004h2.004V4.498zM5 10h3v13H2v-4h1v-3h1v-3h1zm9 0h-4v13h4zm5 0h-3v13h6v-4h-1v-3h-1v-3h-1z"></svg:path>`,
})
export class TdesignPyramidMayaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
