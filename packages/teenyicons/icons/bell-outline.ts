import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBellOutlineIcon],svg[teenyicons-bell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 10.5h13m-11.5 0v-5a5 5 0 0 1 10 0v5m-7 1.5v.5a2 2 0 1 0 4 0V12"></svg:path>`,
})
export class TeenyiconsBellOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
