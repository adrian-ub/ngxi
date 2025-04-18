import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBoldOutlineIcon],svg[teenyicons-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 7.5h5a3 3 0 1 0 0-6H3.58a.08.08 0 0 0-.08.08zm0 0h6a3 3 0 1 1 0 6H3.59a.09.09 0 0 1-.09-.09z"></svg:path>`,
})
export class TeenyiconsBoldOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
