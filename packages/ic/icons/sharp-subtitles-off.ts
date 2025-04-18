import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSubtitlesOffIcon],svg[ic-sharp-subtitles-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.83 4l8 8H20v2h-3.17L22 19.17V4zm-5.79-.13l.96.96V20h15.17l2.96 2.96l1.41-1.41L2.45 2.45zM4 12h4v2H4zm0 4h9.17l.83.83V18H4z"></svg:path>`,
})
export class IcSharpSubtitlesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
