import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMediaPlayerIcon],svg[ix-media-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 320H64V64h384zm-42.667-213.333H106.667v170.666h298.666zm-192 32L317.773 192l-104.44 53.333zm64 245.333H64v42.667h213.333zM384 384h64v42.667h-64zm-21.333-21.333h-64V448h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxMediaPlayerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
