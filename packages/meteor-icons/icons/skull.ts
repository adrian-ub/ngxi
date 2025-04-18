import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSkullIcon],svg[meteor-icons-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="11" r="1"></svg:circle><svg:circle cx="16" cy="11" r="1"></svg:circle><svg:path d="M18 18a10 8.9 0 1 0-12 0v4h12Zm-8 1v3m4-3v3"></svg:path></svg:g>`,
})
export class MeteorIconsSkullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
