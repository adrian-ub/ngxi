import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLargeFillIcon],svg[ri-play-reverse-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20.196V3.804a1 1 0 0 0-1.53-.848L3.357 11.152a1 1 0 0 0 0 1.696l13.113 8.196a1 1 0 0 0 1.53-.848"></svg:path>`,
})
export class RiPlayReverseLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
