import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiAlbumFilledIcon],svg[weui-album-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.5 14.136V5.5h-17v8.35l4.7-3.8c.462-.375 1.205-.357 1.65.035l4.477 3.933l2.282-1.94c.462-.394 1.198-.386 1.646.017zM2.992 4h18.016c.537 0 .992.481.992 1.075v13.85c0 .596-.444 1.075-.992 1.075H2.992C2.455 20 2 19.519 2 18.925V5.075C2 4.479 2.444 4 2.992 4"></svg:path>`,
})
export class WeuiAlbumFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
