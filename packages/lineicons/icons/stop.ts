import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsStopIcon],svg[lineicons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 62.3H8c-3.4 0-6.3-2.8-6.3-6.3V8c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v48c0 3.4-2.9 6.3-6.3 6.3M8 6.3C7 6.3 6.3 7 6.3 8v48c0 1 .8 1.8 1.8 1.8h48c1 0 1.8-.8 1.8-1.8V8c0-1-.8-1.8-1.8-1.8H8z"></svg:path>`,
})
export class LineiconsStopIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
