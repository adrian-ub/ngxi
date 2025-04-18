import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOscillatorIcon],svg[icon-park-oscillator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 9V24C7 27.3137 9.68629 30 13 30H35C38.3137 30 41 27.3137 41 24V9"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 10C7 6.68629 9.68629 4 13 4H35C38.3137 4 41 6.68629 41 10C41 13.3137 38.3137 16 35 16H13C9.68629 16 7 13.3137 7 10Z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="21" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="10" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 30V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 30V44"></svg:path></svg:g>`,
})
export class IconParkOscillatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
