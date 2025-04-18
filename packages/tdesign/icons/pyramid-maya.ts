import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidMayaIcon],svg[tdesign-pyramid-maya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v2h-1v4h2v3h1v3h1v3h1v6H2v-6h1v-3h1v-3h1V8h2V4H6zm3 2v4h5.999L15 4zm4 6h-2v11h2zm2 11h5v-2h-1v-3h-1v-3h-1v-3h-2zm-6 0V10H7v3H6v3H5v3H4v2zm2-16.002h2.004v2.004H11z"></svg:path>`,
})
export class TdesignPyramidMayaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
