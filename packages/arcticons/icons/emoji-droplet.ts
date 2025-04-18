import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiDropletIcon],svg[arcticons-emoji-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.538 30.189C35.538 36.996 30.372 42.5 24 42.5s-11.538-5.518-11.538-12.325c0 0-.126-8.272 9.609-23.233c0 0 1.826-3.104 3.665-.204c9.735 14.961 9.801 23.45 9.801 23.45"></svg:path>`,
})
export class ArcticonsEmojiDropletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
