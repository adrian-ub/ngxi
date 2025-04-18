import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1ReverseButtonIcon],svg[noto-v1-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M106 112.5v-97L22 64z"></svg:path>`,
})
export class NotoV1ReverseButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
