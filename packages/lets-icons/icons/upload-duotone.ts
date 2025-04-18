import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUploadDuotoneIcon],svg[lets-icons-upload-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M6 13h12a3 3 0 1 0 0-6c-.28 0-.42 0-.517-.02c-.298-.06-.44-.151-.616-.399c-.058-.08-.14-.262-.303-.626a5 5 0 0 0-9.128 0c-.163.364-.245.545-.303.626c-.176.248-.318.34-.616.4C6.419 7 6.28 7 6 7a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 11.5L12 9m0 0l2.5 2.5M12 9v10"></svg:path></svg:g>`,
})
export class LetsIconsUploadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
