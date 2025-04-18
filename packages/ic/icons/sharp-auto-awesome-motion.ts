import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAutoAwesomeMotionIcon],svg[ic-sharp-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H2v12h2V4h10zm4 4H6v12h2V8h10zm4 4H10v12h12z"></svg:path>`,
})
export class IcSharpAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
