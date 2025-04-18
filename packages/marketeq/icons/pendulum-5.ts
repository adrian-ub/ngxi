import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPendulum5Icon],svg[marketeq-pendulum-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M15.833 35.604L25 6.25m10.417 33.333a4.166 4.166 0 1 0-8.332 0a4.166 4.166 0 0 0 8.332 0M31.25 6.25v29.167zm-16.667 37.5a4.167 4.167 0 1 0 0-8.334a4.167 4.167 0 0 0 0 8.334"></svg:path><svg:path stroke="#344054" d="M10.417 6.25h29.166"></svg:path></svg:g>`,
})
export class MarketeqPendulum5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
