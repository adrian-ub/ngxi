import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseMiniFillIcon],svg[ri-play-reverse-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.248 5.439L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431"></svg:path>`,
})
export class RiPlayReverseMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
