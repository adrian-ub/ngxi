import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftRightArrowIcon],svg[marketeq-left-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 16.667h33.334m-27.084-6.25l-6.25 6.25l6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="m35.417 39.583l6.25-6.25l-6.25-6.25m6.25 6.25H8.333"></svg:path></svg:g>`,
})
export class MarketeqLeftRightArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
