import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiceSixFillIcon],svg[ph-dice-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
