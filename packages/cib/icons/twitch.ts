import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibTwitchIcon],svg[cib-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.787 0L.698 5.568v22.255H8.35V32h4.177l4.167-4.177h6.26l8.349-8.344V0zm2.781 2.781h22.953v15.301l-4.871 4.871h-7.651l-4.172 4.172v-4.172h-6.26zm7.651 13.916H16V8.349h-2.781zm7.645 0h2.781V8.349h-2.781z"></svg:path>`,
})
export class CibTwitchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
