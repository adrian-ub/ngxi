import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsMoonIcon],svg[humbleicons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 14.12A7.78 7.78 0 0 1 9.88 4a7.782 7.782 0 0 0 2.9 15A7.78 7.78 0 0 0 20 14.12z"></svg:path>`,
})
export class HumbleiconsMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
