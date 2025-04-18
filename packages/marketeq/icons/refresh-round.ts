import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRefreshRoundIcon],svg[marketeq-refresh-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M29.167 37.5H18.75a12.5 12.5 0 0 1-7.208-22.687m9.291-2.313H31.25a12.5 12.5 0 0 1 7.208 22.688"></svg:path><svg:path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></svg:path></svg:g>`,
})
export class MarketeqRefreshRoundIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
