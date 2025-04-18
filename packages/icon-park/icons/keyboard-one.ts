import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyboardOneIcon],svg[icon-park-keyboard-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="24" x="4" y="18" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="16" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="10" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="20" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="22" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="26" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="28" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="32" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="38" cy="24" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 36H31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6"></svg:path></svg:g>`,
})
export class IconParkKeyboardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
