import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadIcon],svg[icon-park-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipUpload0" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#fff" d="M48 0H0V48H48V0Z"></svg:path></svg:mask><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" mask="url(#ipUpload0)"><svg:path d="M6 24.0083V42H42V24"></svg:path><svg:path d="M33 15L24 6L15 15"></svg:path><svg:path d="M23.9917 32V6"></svg:path></svg:g>`,
})
export class IconParkUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
