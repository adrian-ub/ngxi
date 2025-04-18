import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWifiIcon],svg[marketeq-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 37.5a4.167 4.167 0 1 0 8.334 0a4.167 4.167 0 0 0-8.334 0"></svg:path><svg:path stroke="#306CFE" d="M6.25 15.208a29.17 29.17 0 0 1 37.5 0"></svg:path><svg:path stroke="#306CFE" d="M38.438 21.583a20.83 20.83 0 0 0-26.876 0m21.501 6.355a12.5 12.5 0 0 0-16.126 0"></svg:path></svg:g>`,
})
export class MarketeqWifiIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
