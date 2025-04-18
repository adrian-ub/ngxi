import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBubbleLightIcon],svg[lets-icons-bubble-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="17" cy="8" r="4"></svg:circle><svg:circle cx="12" cy="17" r="3"></svg:circle><svg:circle cx="6.5" cy="9.5" r="2.5"></svg:circle></svg:g>`,
})
export class LetsIconsBubbleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
