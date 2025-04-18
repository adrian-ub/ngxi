import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilFileBlockAltIcon],svg[uil-file-block-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm5 12H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19a.3.3 0 0 0-.09 0L11.06 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2m0-14.59L14.59 8H13a1 1 0 0 1-1-1Zm8.83 9.76a4.1 4.1 0 0 0-5.66 0a4 4 0 1 0 5.66 0M16 18a2 2 0 0 1 2-2a2 2 0 0 1 .51.07l-2.44 2.44A2 2 0 0 1 16 18m3.41 1.41a2 2 0 0 1-1.91.5l2.43-2.42A2 2 0 0 1 20 18a2 2 0 0 1-.59 1.41M11 18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm2-6H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilFileBlockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
