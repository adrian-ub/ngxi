import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilPlaylistAddIcon],svg[cil-playlist-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 152h208v32H256zm-80 104h288v32H176zm0 104h288v32H176zm16-208h-64V88H96v64H32v32h64v64h32v-64h64z"></svg:path>`,
})
export class CilPlaylistAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
