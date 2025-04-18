import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileGifFillIcon],svg[ri-file-gif-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-3 8h-1v5h1zm-2 0H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-2H9v1h1v1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2zm6 0h-3v5h1v-2h2v-1h-2v-1h2z"></svg:path>`,
})
export class RiFileGifFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
