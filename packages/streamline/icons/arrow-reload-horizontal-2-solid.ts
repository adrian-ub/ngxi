import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadHorizontal2SolidIcon],svg[streamline-arrow-reload-horizontal-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5.543V4.25H3a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3v-3.5a3 3 0 0 1 3-3h1V.957a.5.5 0 0 1 .854-.353l2.292 2.292a.5.5 0 0 1 0 .708L4.854 5.896A.5.5 0 0 1 4 5.543m6 6.207v1.293a.5.5 0 0 1-.854.354l-2.292-2.293a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .854.353V9.75h1a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2h1a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowReloadHorizontal2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
