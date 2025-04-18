import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1PlayButtonIcon],svg[noto-v1-play-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M22 15.5v97L106 64z"></svg:path>`,
})
export class NotoV1PlayButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
