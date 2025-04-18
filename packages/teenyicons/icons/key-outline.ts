import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeyOutlineIcon],svg[teenyicons-key-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 14.5l8-8m-6 6l2 2m0-4l2 2m4.5-5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Z"></svg:path>`,
})
export class TeenyiconsKeyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
