import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsQuestionMarkCircleLineIcon],svg[majesticons-question-mark-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 6a2 2 0 0 0-2 2a1 1 0 1 1-2 0a4 4 0 1 1 5.31 3.78a.674.674 0 0 0-.273.169a.177.177 0 0 0-.037.054v.497a1 1 0 1 1-2 0V14c0-1.152.924-1.856 1.655-2.11A2.001 2.001 0 0 0 12 8zm1 6.007v-.004v.004zM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsQuestionMarkCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
