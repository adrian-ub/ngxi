import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStopwatchOffIcon],svg[pepicons-pop-stopwatch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 5.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2.5 11a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.793 3.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m11.5 2.914a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 0 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414M13.28 8.375a1 1 0 0 1-.155 1.406l-2.5 2a1 1 0 0 1-1.25-1.562l2.5-2a1 1 0 0 1 1.406.156M9 4V2h2v2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.5 2a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopStopwatchOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
