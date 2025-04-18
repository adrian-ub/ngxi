import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetTemporaryIcon],svg[system-uicons-reset-temporary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><svg:path d="M3.987 1.078A8 8 0 1 0 8 0"></svg:path><svg:circle cx="8" cy="8" r="2" fill="currentColor"></svg:circle><svg:path d="M4 5V1H0"></svg:path></svg:g>`,
})
export class SystemUiconsResetTemporaryIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
