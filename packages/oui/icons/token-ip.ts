import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenIpIcon],svg[oui-token-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-1 2H8v6h1V9.014h1c.298-.013 2 0 2-2.018c0-1.74-1.314-1.952-1.825-1.987zM6 5H5v6h1zm4 .984q1 0 1 1.008T10 8H9V5.984Z"></svg:path>`,
})
export class OuiTokenIpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
