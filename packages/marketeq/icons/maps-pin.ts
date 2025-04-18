import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMapsPinIcon],svg[marketeq-maps-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 43.75h12.5"></svg:path><svg:path stroke="#306CFE" d="M18.75 12.5A6.25 6.25 0 0 1 25 6.25v0a6.25 6.25 0 1 1-6.25 6.25M25 18.75v16.667z"></svg:path></svg:g>`,
})
export class MarketeqMapsPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
