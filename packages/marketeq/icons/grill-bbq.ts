import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGrillBbqIcon],svg[marketeq-grill-bbq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 25l3.542 10.417M10.417 43.75l4.458-20.083"></svg:path><svg:path stroke="#306CFE" d="M41.667 6.25v4.167a16.667 16.667 0 1 1-33.334 0V6.25z"></svg:path><svg:path stroke="#344054" d="M6.25 6.25h37.5"></svg:path><svg:path stroke="#306CFE" d="M37.5 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path></svg:g>`,
})
export class MarketeqGrillBbqIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
