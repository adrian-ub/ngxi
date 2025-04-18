import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseArrowLeftRightOutlineIcon],svg[mdi-briefcase-arrow-left-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.7 5.7 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2m4 4V4h-4v2zm5 12.5V17h-4v-2h4v-1.5l3 2.5zm-2 .5h4v2h-4v1.5L14 20l3-2.5z"></svg:path>`,
})
export class MdiBriefcaseArrowLeftRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
