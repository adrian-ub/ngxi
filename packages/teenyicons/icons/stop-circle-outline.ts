import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStopCircleOutlineIcon],svg[teenyicons-stop-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M.5 7.5a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"></svg:path><svg:path d="M9.5 5.5h-4v4h4z"></svg:path></svg:g>`,
})
export class TeenyiconsStopCircleOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
