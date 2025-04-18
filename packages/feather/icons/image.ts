import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherImageIcon],svg[feather-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2"></svg:rect><svg:circle cx="8.5" cy="8.5" r="1.5"></svg:circle><svg:path d="m21 15l-5-5L5 21"></svg:path></svg:g>`,
})
export class FeatherImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
