import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGhostOrgIcon],svg[jam-ghost-org-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.049 15.31H7.89v3.774H.049zm11.76 0h7.836v3.774h-7.836zM.043 7.762h19.604v3.774H.043zM.049.214h11.762v3.774H.049zm15.681 0h3.92v3.774h-3.92z"></svg:path>`,
})
export class JamGhostOrgIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
