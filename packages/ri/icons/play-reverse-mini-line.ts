import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseMiniLineIcon],svg[ri-play-reverse-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.482v7.036L8.97 12zm1.248-3.043L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431"></svg:path>`,
})
export class RiPlayReverseMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
