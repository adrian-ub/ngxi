import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHorizontalCenterIcon],svg[bx-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.005 15.995l4-4l-4-4v3h-3v2h3zm14-5v-3l-4 4l4 4v-3h3v-2h-2.072zm-8 7h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2z"></svg:path>`,
})
export class BxHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
