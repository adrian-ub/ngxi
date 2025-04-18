import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineAlertOutlineIcon],svg[mdi-timeline-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2M10 6v12h12V6zm5 1h2v6h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class MdiTimelineAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
