import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineMinusOutlineIcon],svg[mdi-timeline-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h2v6H2zM4 2H2v6h2zm16 9h-8v2h8zM3 10a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m21-4v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v12h12z"></svg:path>`,
})
export class MdiTimelineMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
