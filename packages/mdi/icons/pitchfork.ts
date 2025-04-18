import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPitchforkIcon],svg[mdi-pitchfork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9.9l-2.8 2.8c-.8.8-.8 2 0 2.8L14.5 8l-5.3 5.4L7.8 12c-.8-.8-2-.8-2.8 0l-4 4l1.4 1.4l4-4l1.4 1.4l-4 4l1.4 1.4l4-4l1.4 1.4l-.7.8l-3.2 3.2L8 23l4-4c.8-.8.8-2 0-2.8l-1.4-1.4l5.3-5.4l1.4 1.4c.8.8 2 .8 2.8 0L23 8zm2.8 8.5l-4.2-4.2l1.4-1.4L20.1 8z"></svg:path>`,
})
export class MdiPitchforkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
