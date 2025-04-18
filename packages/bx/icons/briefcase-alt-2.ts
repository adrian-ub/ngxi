import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBriefcaseAlt2Icon],svg[bx-briefcase-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-5-2v2H9V4zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4zm0 11v-5h3v2h2v-2h6v2h2v-2h3.001v5z"></svg:path>`,
})
export class BxBriefcaseAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
