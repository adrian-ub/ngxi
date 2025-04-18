import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUploadIcon],svg[icon-park-outline-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipOUpload0" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="currentColor" d="M48 0H0v48h48z"></svg:path></svg:mask><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" mask="url(#ipOUpload0)"><svg:path d="M6 24.008V42h36V24m-9-9l-9-9l-9 9m8.992 17V6"></svg:path></svg:g>`,
})
export class IconParkOutlineUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
