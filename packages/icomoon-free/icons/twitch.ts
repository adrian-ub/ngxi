import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTwitchIcon],svg[icomoon-free-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0L0 2.5V14h4v2h2l2-2h2.5L15 9.5V0zM13 8.5L10.5 11H8l-2 2v-2H3V2h10z"></svg:path><svg:path fill="currentColor" d="M9.5 4H11v4H9.5zm-3 0H8v4H6.5z"></svg:path>`,
})
export class IcomoonFreeTwitchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
