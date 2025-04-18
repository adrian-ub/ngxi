import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLogInDoubleArrow2Icon],svg[marketeq-log-in-double-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m29.167 18.75l6.25 6.25l-6.25 6.25M18.75 18.75L25 25l-6.25 6.25M25 25H6.25"></svg:path><svg:path stroke="#306CFE" d="M35.417 41.667h6.25a2.083 2.083 0 0 0 2.083-2.084V10.417a2.083 2.083 0 0 0-2.083-2.084h-6.25"></svg:path></svg:g>`,
})
export class MarketeqLogInDoubleArrow2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
