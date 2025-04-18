import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhUploadIcon],svg[whh-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m33-882q-13-14-32.5-14T480 142L138 487q-12 14-8.5 19.5T148 512h236v320q0 27 19 45.5t45 18.5h129q26 0 45-18.5t19-45.5V512h235q15 0 19-5.5t-8-19.5z"></svg:path>`,
})
export class WhhUploadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
