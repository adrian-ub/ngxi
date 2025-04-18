import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1PlayOrPauseButtonIcon],svg[noto-v1-play-or-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M67.68 95.55h18.03v-63.1H67.68zm36.05-63.1v63.09h18.03V32.45zm-97.49-.28v63.66L56.26 64z"></svg:path>`,
})
export class NotoV1PlayOrPauseButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
