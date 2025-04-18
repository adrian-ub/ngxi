import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFrigateIcon],svg[icon-park-frigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11 12V24L24 19L37 24V12H11Z"></svg:path><svg:path d="M19 7V12H29V7C29 5.34315 27.6569 4 26 4H22C20.3431 4 19 5.34315 19 7Z"></svg:path><svg:path d="M12 44L6 26L24 19L42 26L36 44"></svg:path><svg:path d="M4 42C4 42 8.66336 44 12 44C17 44 19 42 24 42C29 42 31 44 36 44C39.3366 44 44 42 44 42"></svg:path><svg:path d="M24 19V42"></svg:path></svg:g>`,
})
export class IconParkFrigateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
