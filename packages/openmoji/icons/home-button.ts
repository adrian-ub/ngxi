import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHomeButtonIcon],svg[openmoji-home-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="m42.277 59.852l-.013-18.256l-12.187-.052l-.044 18.355H16.756l-.695-25.159l.02-5.72L36.022 8.938l19.959 19.959l-.004 14.461l-.466 16.58z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M41.99 59.95h11.992c.55 0 1-.45 1-1V34.014m-37.924-.001V58.95c0 .55.45 1 1 1h12.135"></svg:path><svg:path d="M8.492 35.595L36.016 7.977l27.58 27.37M41.815 59.933V41.627h-11.59v18.306"></svg:path></svg:g>`,
})
export class OpenmojiHomeButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
