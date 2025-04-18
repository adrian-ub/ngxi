import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsForwardSolidIcon],svg[teenyicons-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.79 2.093A.5.5 0 0 0 0 2.5v10a.5.5 0 0 0 .79.407L7 8.472V12.5a.5.5 0 0 0 .79.407l7-5a.5.5 0 0 0 0-.814l-7-5A.5.5 0 0 0 7 2.5v4.028z"></svg:path>`,
})
export class TeenyiconsForwardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
