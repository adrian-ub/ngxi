import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsFlagIcon],svg[humbleicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M6 5v15"></svg:path><svg:path stroke-linejoin="round" d="M13 5.5V4H7a1 1 0 0 0-1 1v8h7v1.5h7v-9zm0 0v3"></svg:path></svg:g>`,
})
export class HumbleiconsFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
