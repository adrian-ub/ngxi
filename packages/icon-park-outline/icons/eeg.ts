import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEegIcon],svg[icon-park-outline-eeg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 16V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7m0 16v7a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-7M5 24h8.075L20 16l7 16l6.975-8H43"></svg:path>`,
})
export class IconParkOutlineEegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
