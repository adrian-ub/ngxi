import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCassetteTapeIcon],svg[meteor-icons-cassette-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="16" x="1" y="4" rx="3"></svg:rect><svg:circle cx="7" cy="10" r="1"></svg:circle><svg:circle cx="17" cy="10" r="1"></svg:circle><svg:path d="m5 20l3-4h8l3 4"></svg:path></svg:g>`,
})
export class MeteorIconsCassetteTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
