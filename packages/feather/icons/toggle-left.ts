import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherToggleLeftIcon],svg[feather-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="14" x="1" y="5" rx="7" ry="7"></svg:rect><svg:circle cx="8" cy="12" r="3"></svg:circle></svg:g>`,
})
export class FeatherToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
