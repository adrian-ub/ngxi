import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoAwesomeMotionIcon],svg[ic-twotone-auto-awesome-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h8v8h-8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10zm6 8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10h-8v-8h8z"></svg:path><svg:path fill="currentColor" d="M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10z"></svg:path>`,
})
export class IcTwotoneAutoAwesomeMotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
