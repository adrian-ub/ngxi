import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPauseCircleFilledIcon],svg[pepicons-pop-pause-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPauseCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M9.75 6a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2m6.5 0a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPauseCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPauseCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
