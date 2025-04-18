import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPersonIcon],svg[charm-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="6" r="3.25"></svg:circle><svg:path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"></svg:path></svg:g>`,
})
export class CharmPersonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
