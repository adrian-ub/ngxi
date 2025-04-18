import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUfoLineDuotoneIcon],svg[solar-ufo-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarUfoLineDuotone0"><svg:g fill="none"><svg:path stroke="gray" stroke-linecap="round" stroke-width="1.5" d="m5.5 15.5l-1 2m14-2l1 2"></svg:path><svg:path stroke="#fff" stroke-width="1.5" d="M17 8.21c2.989.723 5 2.071 5 3.616C22 14.131 17.523 16 12 16S2 14.13 2 11.826c0-1.545 2.011-2.893 5-3.615"></svg:path><svg:path stroke="gray" stroke-width="1.5" d="M7 8.729A4.73 4.73 0 0 1 11.729 4h.542A4.73 4.73 0 0 1 17 8.729c0 .177-.054.35-.2.451c-.414.288-1.61.82-4.8.82s-4.386-.532-4.8-.82c-.146-.1-.2-.274-.2-.451Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="1.5" d="M12 16v3"></svg:path><svg:circle cx="12" cy="13" r="1" fill="gray"></svg:circle><svg:circle cx="7" cy="12" r="1" fill="#fff"></svg:circle><svg:circle cx="17" cy="12" r="1" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarUfoLineDuotone0)"></svg:path>`,
})
export class SolarUfoLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
