import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPauseIcon],svg[ic-sharp-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"></svg:path>`,
})
export class IcSharpPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
