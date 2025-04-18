import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHelpRectangleIcon],svg[tdesign-help-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm8 3.25a2 2 0 0 0-1.886 1.333l-.334.943l-1.885-.666l.333-.943a4.001 4.001 0 1 1 6.246 4.476c-.431.34-.817.666-1.096 1.009c-.274.338-.378.61-.378.848v1.25h-2v-1.25c0-.867.39-1.573.826-2.11c.432-.53.974-.974 1.41-1.318A2 2 0 0 0 12 7.25m-1 9.25h2.004v2.004H11z"></svg:path>`,
})
export class TdesignHelpRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
