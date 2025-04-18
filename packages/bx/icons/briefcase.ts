import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBriefcaseIcon],svg[bx-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-5-2v2H9V4zM8 8h12v3H4V8zM4 19v-6h6v2h4v-2h6l.001 6z"></svg:path>`,
})
export class BxBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
