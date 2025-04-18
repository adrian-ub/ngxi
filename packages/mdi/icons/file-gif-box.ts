import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileGifBoxIcon],svg[mdi-file-gif-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 7.5H7.5v3h1V12H10v1.7c0 .7-.5 1.3-1.3 1.3H7.3c-.8 0-1.3-.7-1.3-1.3v-3.3C6 9.7 6.5 9 7.3 9h1.3c.9 0 1.4.7 1.4 1.3zm3 4.5h-1.5V9H13zm4.5-4.5H16v1h1.5V13H16v2h-1.5V9h3z"></svg:path>`,
})
export class MdiFileGifBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
