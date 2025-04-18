import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDateAltCheckIcon],svg[marketeq-date-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M15.708 39.583H8.333A2.083 2.083 0 0 1 6.25 37.5V10.417a2.083 2.083 0 0 1 2.083-2.084h33.334a2.083 2.083 0 0 1 2.083 2.084V37.5a2.083 2.083 0 0 1-2.083 2.083h-7.375"></svg:path><svg:path stroke="#306CFE" d="M6.25 18.75h37.5m-18.75 0a12.5 12.5 0 1 0 0 25a12.5 12.5 0 0 0 0-25"></svg:path><svg:path stroke="#344054" d="M16.667 6.25v6.25m16.666-6.25v6.25zm-12.5 27.083l2.084 2.084l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqDateAltCheckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
