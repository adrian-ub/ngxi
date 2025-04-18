import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHastagCircleIcon],svg[marketeq-hastag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.48 14.583l-5.022 18.75m-1.791-12.5h18.75zm-2.084 8.334h18.75zm11.938 6.25l5.02-18.75z"></svg:path><svg:path stroke="#306CFE" d="M6.25 25A18.75 18.75 0 0 1 25 6.25v0A18.75 18.75 0 0 1 43.75 25v0A18.75 18.75 0 0 1 25 43.75v0A18.75 18.75 0 0 1 6.25 25"></svg:path></svg:g>`,
})
export class MarketeqHastagCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
