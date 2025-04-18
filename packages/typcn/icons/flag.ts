import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnFlagIcon],svg[typcn-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.383 4.318a1 1 0 0 0-1.09.217a3.25 3.25 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0A1 1 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.25 3.25 0 0 1 4.293.26a5.25 5.25 0 0 0 7.414 0a1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924"></svg:path>`,
})
export class TypcnFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
