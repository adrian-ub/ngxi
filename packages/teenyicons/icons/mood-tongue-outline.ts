import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodTongueOutlineIcon],svg[teenyicons-mood-tongue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h1m5 0h1m-7 3h7m-5.5 0v2a2 2 0 1 0 4 0v-2m-2 6a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsMoodTongueOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
