import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteMediumSquareIcon],svg[openmoji-white-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M16.083 15.938h39.833v39.833H16.083z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.083 15.938h39.833v39.833H16.083z"></svg:path>`,
})
export class OpenmojiWhiteMediumSquareIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
