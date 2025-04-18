import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEcgWavesIcon],svg[openmoji-ecg-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 36.873h9.227l5.486-7.232l5.237 13.466l5.736-15.71l5.361 17.206l6.11-7.73H61"></svg:path>`,
})
export class OpenmojiEcgWavesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
