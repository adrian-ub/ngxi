import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDigitalWatchesIcon],svg[icon-park-solid-digital-watches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDigitalWatches0"><svg:g fill="none" stroke-width="4"><svg:rect width="22" height="22" x="13" y="13" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29 35v7a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-7m0-22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7m6 8h2"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 24h2m6 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDigitalWatches0)"></svg:path>`,
})
export class IconParkSolidDigitalWatchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
