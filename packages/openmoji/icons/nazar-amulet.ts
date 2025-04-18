import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNazarAmuletIcon],svg[openmoji-nazar-amulet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.283" cy="35.958" r="29" fill="#1e50a0"></svg:circle><svg:path fill="#1e50a0" d="M52.173 11.434a29.285 29.285 0 0 1-40.46 40.459a29.3 29.3 0 1 0 40.46-40.46"></svg:path><svg:circle cx="36.283" cy="35.958" r="18.5" fill="#fff"></svg:circle><svg:circle cx="36.283" cy="35.958" r="13" fill="#92d3f5"></svg:circle><svg:path fill="#61b2e4" d="M43.081 24.067a13.557 13.557 0 0 1-18.731 18.73a13.564 13.564 0 1 0 18.731-18.73"></svg:path><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36.283" cy="35.958" r="29" fill="none"></svg:circle><svg:circle cx="36.283" cy="35.958" r="19.5" fill="none"></svg:circle><svg:circle cx="36.283" cy="35.958" r="13" fill="none"></svg:circle><svg:circle cx="36.283" cy="35.958" r="6"></svg:circle></svg:g>`,
})
export class OpenmojiNazarAmuletIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
