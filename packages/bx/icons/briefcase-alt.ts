import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBriefcaseAltIcon],svg[bx-briefcase-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-4 2v11H8V8zm-1-4v2H9V4zM4 8h2v11H4zm14 11V8h2l.001 11z"></svg:path>`,
})
export class BxBriefcaseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
