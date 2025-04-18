import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDropboxIcon],svg[icomoon-free-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5.5L8 3.5l4.5 3l3.5-3zM8 3.5L4.5.5L0 3.5l3.5 3zm4.5 3l3.5 3l-4.5 2.5L8 9zM8 9L3.5 6.5L0 9.5L4.5 12z"></svg:path><svg:path fill="currentColor" d="M11.377 13.212L8 10.317l-3.377 2.895L2.5 12.033V13.5L8 16l5.5-2.5v-1.467z"></svg:path>`,
})
export class IcomoonFreeDropboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
