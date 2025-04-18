import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAcidIcon],svg[game-icons-acid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.875 16A30 30 0 0 0 226 46a30 30 0 0 0 60 0a30 30 0 0 0-29.125-30m-45 75A30 30 0 0 0 181 121a30 30 0 0 0 60 0a30 30 0 0 0-29.125-30m74.563 30A15 15 0 0 0 271 136a15 15 0 0 0 30 0a15 15 0 0 0-14.563-15zm-30 45A15 15 0 0 0 241 181a15 15 0 0 0 30 0a15 15 0 0 0-14.563-15zM196 196c-45 0-15 30 0 45c0 150-120 225-120 255h360c0-30-120-105-120-255c15-15 45-45 0-45c-15 0-30 15-60 15s-45-15-60-15"></svg:path>`,
})
export class GameIconsAcidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
