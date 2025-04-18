import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineCheckIcon],svg[mdi-timeline-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H2V2h2zM2 22h2v-6H2zm1-12a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m21-4v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-4.25 4.33l-1.16-1.41L15 12.5l-1.59-1.58l-1.16 1.16l2.75 3z"></svg:path>`,
})
export class MdiTimelineCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
