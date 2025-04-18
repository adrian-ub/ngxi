import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAutoprefixerIcon],svg[la-autoprefixer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.928 5l-7.26 22h3.496l1.236-4h5.205l1.233 4h3.496zm.04 9.69h.073L17.986 21h-3.968zM9.267 21l-7.795.559L1 22.668L8.559 23zm13.431 0l.721 2L31 22.668l-.47-1.11L22.696 21z"></svg:path>`,
})
export class LaAutoprefixerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
