import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenTokenCountIcon],svg[oui-token-token-count-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4H3v3h5zm5 5H8v3h5zm-3-5h3v3h-3zM6 9H3v3h3z"></svg:path>`,
})
export class OuiTokenTokenCountIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
