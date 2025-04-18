import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1PauseButtonIcon],svg[noto-v1-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M36.57 96h18.29V32H36.57zm36.57-64v64h18.29V32z"></svg:path>`,
})
export class NotoV1PauseButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
