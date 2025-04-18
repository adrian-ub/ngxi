import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPlaceDisableIcon],svg[marketeq-place-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75s-12.5-14.583-12.5-25a12.5 12.5 0 0 1 25 0c0 10.417-12.5 25-12.5 25"></svg:path><svg:path stroke="#344054" d="M8.333 8.333L41.667 37.5"></svg:path></svg:g>`,
})
export class MarketeqPlaceDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
