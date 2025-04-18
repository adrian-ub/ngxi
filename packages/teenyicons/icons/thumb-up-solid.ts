import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsThumbUpSolidIcon],svg[teenyicons-thumb-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.312 2.995A2.034 2.034 0 0 0 5.776.992L3 5.354V12.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2-1l2.5-3.333V7.5A2.5 2.5 0 0 0 12.5 5H8.309zM0 5v10h1V5z"></svg:path>`,
})
export class TeenyiconsThumbUpSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
