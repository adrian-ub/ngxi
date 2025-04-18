import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisDropletIcon],svg[streamline-emojis-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#45413c" d="M14.89 45.76a9.11 1.24 0 1 0 18.22 0a9.11 1.24 0 1 0-18.22 0" opacity=".15"></svg:path><svg:path fill="#00dfeb" d="M34 28.73L24.5 2.2a.53.53 0 0 0-1 0L14 28.73a10.67 10.67 0 1 0 20.08 0Z"></svg:path><svg:path fill="#4aeff7" d="m17.64 29.76l9.42-20.45L24.5 2.2a.53.53 0 0 0-1 0L14 28.73a10.68 10.68 0 0 0 6.53 13.68a10.66 10.66 0 0 1-2.89-12.65"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M34 28.73L24.5 2.2a.53.53 0 0 0-1 0L14 28.73a10.67 10.67 0 1 0 20.08 0Z"></svg:path>`,
})
export class StreamlineEmojisDropletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
