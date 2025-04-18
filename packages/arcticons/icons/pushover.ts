import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPushoverIcon],svg[arcticons-pushover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.753 22.91C10.028 18.639 14.93 5.283 28.775 5.283c6.923 0 9.649 3.051 9.649 8.608c0 5.735-6.479 13.467-19.746 13.467m7.516-17.532L11.421 44.283"></svg:path>`,
})
export class ArcticonsPushoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
