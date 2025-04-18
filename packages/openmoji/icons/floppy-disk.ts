import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFloppyDiskIcon],svg[openmoji-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#3F3F3F" d="M11.136 11h50v50h-50z"></svg:path><svg:path fill="#D0CFCE" d="M56.136 60V35.162h-40V60"></svg:path><svg:path fill="#9B9B9A" d="M16.136 12v17.607h30.913V12"></svg:path><svg:path fill="#61B2E4" d="M19.956 38.96h32.031v5.771H19.956z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M11.136 11h50v50h-50z"></svg:path><svg:path d="M56.136 60V35.162h-40V60m0-48v17.607h30.913V12"></svg:path><svg:path d="M19.956 38.96h32.031v5.771H19.956z"></svg:path></svg:g>`,
})
export class OpenmojiFloppyDiskIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
