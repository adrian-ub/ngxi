import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFormkitIcon],svg[vscode-icons-file-type-formkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeFormkit0" x1="217.28" x2="217.34" y1="987.61" y2="987.51" gradientTransform="matrix(300 0 0 -300 -65182 296286.64)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f79259"></svg:stop><svg:stop offset="1" stop-color="#f8ce68"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeFormkit0)" fill-rule="evenodd" d="M30.07 25.39v4.67h-14v-4.67ZM6.74 20.73v4.66H2.07v-4.66Zm4.66-4.67v4.67H6.74v-4.67Zm4.67-4.67v4.67H11.4v-4.67ZM11.4 6.73v4.66H6.74V6.73ZM6.74 2.06v4.67H2.07V2.06Z"></svg:path>`,
})
export class VscodeIconsFileTypeFormkitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
