import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPendulumIcon],svg[marketeq-pendulum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 6.25v29.167m0 8.333a4.167 4.167 0 1 1 0-8.334a4.167 4.167 0 0 1 0 8.334"></svg:path><svg:path stroke="#344054" d="M10.417 6.25h29.166"></svg:path></svg:g>`,
})
export class MarketeqPendulumIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
