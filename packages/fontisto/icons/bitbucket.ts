import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBitbucketIcon],svg[fontisto-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.865 0H.854A.854.854 0 0 0 0 .843v.011q0 .072.012.141L.011.99l3.63 22.041c.096.55.567.964 1.136.97h17.424a.86.86 0 0 0 .847-.714l.001-.005l3.638-22.281a.856.856 0 0 0-.701-.98L25.981.02a1 1 0 0 0-.129-.011h-.02h.001zm15.287 15.926H10.59L9.088 8.068h8.411z"></svg:path>`,
})
export class FontistoBitbucketIcon {
  readonly viewBox = input("0 0 27 24")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
