import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnDivideIcon],svg[typcn-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="2.25" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="2.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 10H6a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4"></svg:path>`,
})
export class TypcnDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
