import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherScissorsIcon],svg[feather-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="6" r="3"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:path d="M20 4L8.12 15.88m6.35-1.4L20 20M8.12 8.12L12 12"></svg:path></svg:g>`,
})
export class FeatherScissorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
