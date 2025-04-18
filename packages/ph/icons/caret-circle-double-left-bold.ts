import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftBoldIcon],svg[ph-caret-circle-double-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-10.91-82.95L153 128l23.53 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17Zm-56 0L97 128l23.52 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17Z"></svg:path>`,
})
export class PhCaretCircleDoubleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
