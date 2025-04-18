import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDropboxIcon],svg[ls-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M682 151L552 263l130 113l-217 135l-124-111l-124 111L0 376l130-113L0 151L216 14l125 112L466 14zM140 263l201 127l201-127l-201-127zm201 181l122 108l97-61v65L341 694L122 556v-65l97 61z"></svg:path>`,
})
export class LsDropboxIcon {
  readonly viewBox = input("0 0 682 694")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
