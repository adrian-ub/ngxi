import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineCheckOutlineIcon],svg[mdi-timeline-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H10a2 2 0 0 0-2 2v4l-2 2l2 2v4a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H10V6h12zM4 8H2V2h2zm-2 8h2v6H2zm3-4c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m10 3.08l-2.75-3l1.16-1.16L15 12.5l3.59-3.58l1.16 1.41z"></svg:path>`,
})
export class MdiTimelineCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
