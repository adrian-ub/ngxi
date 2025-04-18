import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoonOutlineIcon],svg[teenyicons-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1.66 11.362q.65.136 1.34.138A6.5 6.5 0 0 0 7.693.503A7 7 0 1 1 1.66 11.362Z"></svg:path>`,
})
export class TeenyiconsMoonOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
