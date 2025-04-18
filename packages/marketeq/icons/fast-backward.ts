import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFastBackwardIcon],svg[marketeq-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m25 25l18.75 12.5v-25z"></svg:path><svg:path stroke="#306CFE" d="M25 12.5v25L6.25 25z"></svg:path></svg:g>`,
})
export class MarketeqFastBackwardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
