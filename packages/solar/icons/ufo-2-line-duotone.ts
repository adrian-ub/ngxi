import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUfo2LineDuotoneIcon],svg[solar-ufo-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarUfo2LineDuotone0"><svg:g fill="none"><svg:path stroke="#fff" stroke-width="1.5" d="M17 7.21c2.989.723 5 2.071 5 3.616C22 13.131 17.523 15 12 15S2 13.13 2 10.826c0-1.545 2.011-2.893 5-3.615"></svg:path><svg:path stroke="gray" stroke-width="1.5" d="M7 7.729A4.73 4.73 0 0 1 11.729 3h.542A4.73 4.73 0 0 1 17 7.729c0 .177-.054.35-.2.451c-.414.288-1.61.82-4.8.82s-4.386-.532-4.8-.82c-.146-.1-.2-.274-.2-.451Z"></svg:path><svg:circle cx="12" cy="12" r="1" fill="gray"></svg:circle><svg:circle cx="7" cy="11" r="1" fill="#fff"></svg:circle><svg:circle cx="17" cy="11" r="1" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-width="1.5" d="M12 21v-3"></svg:path><svg:path stroke="gray" stroke-linecap="round" stroke-width="1.5" d="M18 20v-3M6 20v-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarUfo2LineDuotone0)"></svg:path>`,
})
export class SolarUfo2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
