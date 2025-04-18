import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackMediumSquareIcon],svg[openmoji-black-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M55.917 16.042H16.083v39.833h39.834z"></svg:path><svg:path fill="#3F3F3F" d="M55.917 16.042H16.083v39.833h39.834z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55.917 16.042H16.083v39.833h39.834z"></svg:path>`,
})
export class OpenmojiBlackMediumSquareIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
