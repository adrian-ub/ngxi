import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundScienceIcon],svg[ic-round-science-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.54 17.73L15 11V5h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h1v6l-5.54 6.73c-.32.39-.46.83-.46 1.27c.01 1.03.82 2 2 2h14c1.19 0 2-.97 2-2c0-.44-.14-.88-.46-1.27"></svg:path>`,
})
export class IcRoundScienceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
