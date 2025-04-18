import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChromeIcon],svg[meteor-icons-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15.5 14l-5.2 8.8M8.5 14L3.4 5.2M12 8h10.2"></svg:path></svg:g>`,
})
export class MeteorIconsChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
