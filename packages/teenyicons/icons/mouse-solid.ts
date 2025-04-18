import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMouseSolidIcon],svg[teenyicons-mouse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.5a5.5 5.5 0 1 1 11 0v4a5.5 5.5 0 1 1-11 0zM7 4v3h1V4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMouseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
