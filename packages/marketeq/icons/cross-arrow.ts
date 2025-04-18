import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCrossArrowIcon],svg[marketeq-cross-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 25h37.5M25 43.75V6.25z"></svg:path><svg:path stroke="#344054" d="M12.5 18.75L6.25 25l6.25 6.25M31.25 12.5L25 6.25l-6.25 6.25M37.5 31.25L43.75 25l-6.25-6.25M18.75 37.5L25 43.75l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqCrossArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
