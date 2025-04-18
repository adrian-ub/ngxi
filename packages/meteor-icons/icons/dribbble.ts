import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDribbbleIcon],svg[meteor-icons-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.5 2.7a38 38 0 0 1 8.1 18.1m2.6-15.7a18 10 0 0 1-17.1 5.8m3.2 8.5A14 15 0 0 1 21.9 13"></svg:path></svg:g>`,
})
export class MeteorIconsDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
