import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNextIcon],svg[icon-park-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkNextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
