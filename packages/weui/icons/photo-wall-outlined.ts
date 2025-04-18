import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPhotoWallOutlinedIcon],svg[weui-photo-wall-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v-1.2h2.8V5.2H7.2V8zM3 8h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m.2 1.2v9.6h13.6V9.2z"></svg:path>`,
})
export class WeuiPhotoWallOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
