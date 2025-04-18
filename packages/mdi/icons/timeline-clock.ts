import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineClockIcon],svg[mdi-timeline-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m11-8c4.42 0 8 3.58 8 8s-3.58 8-8 8c-3.6 0-6.64-2.38-7.65-5.65L6 12l2.35-2.35C9.36 6.38 12.4 4 16 4m-1 9l4.53 2.79l.8-1.29l-3.83-2.3V7H15z"></svg:path>`,
})
export class MdiTimelineClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
