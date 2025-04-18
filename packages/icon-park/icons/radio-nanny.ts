import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioNannyIcon],svg[icon-park-radio-nanny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M36 42.0012V21.6875C36 15.3125 31.0909 10 24 10C16.9091 10 12 15.3125 12 21.6875V42.0012C12 43.1058 12.8954 44 14 44H34C35.1046 44 36 43.1058 36 42.0012Z"></svg:path><svg:circle cx="24" cy="23" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M18 34H20"></svg:path><svg:path stroke="#fff" d="M26 38H30"></svg:path><svg:path stroke="#000" d="M12 20V4"></svg:path></svg:g>`,
})
export class IconParkRadioNannyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
