import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayReverseLargeLineIcon],svg[ri-play-reverse-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18.392V5.608L5.774 12zm2-14.588v16.392a1 1 0 0 1-1.53.848L3.357 12.848a1 1 0 0 1 0-1.696L16.47 2.956a1 1 0 0 1 1.53.848"></svg:path>`,
})
export class RiPlayReverseLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
