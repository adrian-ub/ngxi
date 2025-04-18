import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePdfFilledIcon],svg[lsicon-file-pdf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H5V12H4zm1 2h1.5V8H5zM8 12V7h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm1-4v3h1.5V8zm3-.5a.5.5 0 0 1 .5-.5H15v1h-2v1.5h2v1h-2V12h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFilePdfFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
