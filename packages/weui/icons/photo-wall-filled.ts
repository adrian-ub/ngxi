import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPhotoWallFilledIcon],svg[weui-photo-wall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 6.5V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1.5V8A1.5 1.5 0 0 0 18 6.5zM3 8h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></svg:path>`,
})
export class WeuiPhotoWallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
