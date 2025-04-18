import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftRightScrollBarIcon],svg[marketeq-left-right-scroll-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 12.5v25m37.5-25v25z"></svg:path><svg:path stroke="#306CFE" d="M31.25 20.833L35.417 25l-4.167 4.167m-12.5 0L14.583 25l4.167-4.167M35.417 25H14.583"></svg:path></svg:g>`,
})
export class MarketeqLeftRightScrollBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
