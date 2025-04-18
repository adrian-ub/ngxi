import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherMehIcon],svg[feather-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 15h8M9 9h.01M15 9h.01"></svg:path></svg:g>`,
})
export class FeatherMehIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
