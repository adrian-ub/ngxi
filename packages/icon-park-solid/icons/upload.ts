import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUploadIcon],svg[icon-park-solid-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSUpload0" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#fff" d="M48 0H0v48h48z"></svg:path></svg:mask><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" mask="url(#ipSUpload0)"><svg:path d="M6 24.008V42h36V24m-9-9l-9-9l-9 9m8.992 17V6"></svg:path></svg:g>`,
})
export class IconParkSolidUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
