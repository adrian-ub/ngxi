import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodFlatOutlineIcon],svg[teenyicons-mood-flat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5h1m5 0h1m-7 4h7m-3.5 5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"></svg:path>`,
})
export class TeenyiconsMoodFlatOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
