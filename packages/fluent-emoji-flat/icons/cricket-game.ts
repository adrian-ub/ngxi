import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCricketGameIcon],svg[fluent-emoji-flat-cricket-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="m8.474 27.453l3.39 1.96l.63.37c.79.46 1.8.19 2.26-.61l7.57-13.11c.34-.59.43-1.3.25-1.96l-.6-2.21L20.5 10.5l-1.91-.567l-2.226.58c-.66.17-1.23.6-1.57 1.2l-7.57 13.11c-.46.79-.19 1.8.61 2.26z"></svg:path><svg:path fill="#533566" d="m21.974 11.893l4.02-6.96c.54-.93.22-2.13-.71-2.67s-2.13-.22-2.67.71l-4.02 6.96z"></svg:path><svg:path fill="#F8312F" d="M25 24.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="#D3D3D3" d="m20.81 22.658l4.13 2.385c-.112.509-.38.959-.75 1.299l-4.13-2.385c.112-.509.38-.959.75-1.299"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCricketGameIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
