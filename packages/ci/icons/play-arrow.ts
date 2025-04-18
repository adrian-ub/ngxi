import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPlayArrowIcon],svg[ci-play-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 19l11-7L8 5v14Z"></svg:path>`,
})
export class CiPlayArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
