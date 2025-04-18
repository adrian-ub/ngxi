import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceClosedCaptioningIcon],svg[guidance-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.333 9.5v-1a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 6 17h2.833a1.5 1.5 0 0 0 1.5-1.5v-1m9-5v-1a1.5 1.5 0 0 0-1.5-1.5H15a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 15 17h2.833a1.5 1.5 0 0 0 1.5-1.5v-1M1.5 20.5S.5 17 .5 12s1-8.5 1-8.5h21s1 3.5 1 8.5s-1 8.5-1 8.5z"></svg:path>`,
})
export class GuidanceClosedCaptioningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
