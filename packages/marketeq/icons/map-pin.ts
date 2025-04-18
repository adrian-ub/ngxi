import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMapPinIcon],svg[marketeq-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.188 37.5c.099.31.148.633.145.958c0 2.917-3.729 5.292-8.333 5.292s-8.333-2.375-8.333-5.292a3 3 0 0 1 .145-.958"></svg:path><svg:path stroke="#306CFE" d="M25 18.75v16.667M18.75 12.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0"></svg:path></svg:g>`,
})
export class MarketeqMapPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
