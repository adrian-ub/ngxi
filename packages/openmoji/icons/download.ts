import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDownloadIcon],svg[openmoji-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.5 17v32.761m-8.695-8.116L36.5 50.31l8.695-8.665M27.5 55h18"></svg:path>`,
})
export class OpenmojiDownloadIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
