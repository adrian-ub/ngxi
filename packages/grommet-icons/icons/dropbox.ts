import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDropboxIcon],svg[grommet-icons-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.06 1L0 5.61l4.882 3.908L12 5.124zM0 13.428l7.06 4.61L12 13.914L4.882 9.52zm12 .486l4.94 4.124l7.06-4.61l-4.882-3.91zM24 5.61L16.94 1L12 5.124l7.118 4.395zM12.014 14.8L7.06 18.913l-2.12-1.385v1.552l7.074 4.243l7.075-4.243v-1.552l-2.12 1.385z"></svg:path>`,
})
export class GrommetIconsDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
