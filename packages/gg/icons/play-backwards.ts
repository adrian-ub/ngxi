import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayBackwardsIcon],svg[gg-play-backwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h3v10H2zm4 5l7.002-5v10zm15.002-5L14 12l7.002 5z"></svg:path>`,
})
export class GgPlayBackwardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
