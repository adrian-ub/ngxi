import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSendClockIcon],svg[mdi-send-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v7l9 2l-9 2v7l7.27-3.11A7 7 0 0 0 16 23a7 7 0 0 0 7-7a7 7 0 0 0-7-7zm14 8a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m-1 1.5v4l3 2l.75-1.25l-2.25-1.5V12.5z"></svg:path>`,
})
export class MdiSendClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
