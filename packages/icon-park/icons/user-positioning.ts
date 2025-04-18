import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUserPositioningIcon],svg[icon-park-user-positioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="16" r="6" fill="#2F88FF"></svg:circle><svg:path d="M36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36"></svg:path><svg:path d="M36 4H44V12"></svg:path><svg:path d="M12 4H4V12"></svg:path><svg:path d="M36 44H44V36"></svg:path><svg:path d="M12 44H4V36"></svg:path></svg:g>`,
})
export class IconParkUserPositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
