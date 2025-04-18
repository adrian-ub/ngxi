import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOndemandVideoIcon],svg[ic-sharp-ondemand-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18zm-5-6l-7 4V7z"></svg:path>`,
})
export class IcSharpOndemandVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
