import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOrangeIcon],svg[lets-icons-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="14" r="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.293 4.293c-.248.248-.663.432-1.136.55c.118-.473.302-.888.55-1.136s.663-.432 1.136-.55c-.118.473-.302.888-.55 1.136Z"></svg:path><svg:circle cx="9" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsOrangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
