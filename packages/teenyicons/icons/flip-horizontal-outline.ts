import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFlipHorizontalOutlineIcon],svg[teenyicons-flip-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5.5l.224-.447A.5.5 0 0 0 3 .5zm8 4V5a.5.5 0 0 0 .224-.947zm-8 0H3a.5.5 0 0 0 .5.5zm0 6V10a.5.5 0 0 0-.5.5zm8 0l.224.447A.5.5 0 0 0 11.5 10zm-8 4H3a.5.5 0 0 0 .724.447zM3.276.947l8 4l.448-.894l-8-4zM11.5 4h-8v1h8zM4 4.5v-4H3v4zM0 8h15V7H0zm3.5 3h8v-1h-8zm7.776-.947l-8 4l.448.894l8-4zM4 14.5v-4H3v4z"></svg:path>`,
})
export class TeenyiconsFlipHorizontalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
