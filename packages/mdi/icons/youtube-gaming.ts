import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiYoutubeGamingIcon],svg[mdi-youtube-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13V8l-5-3l-5 3l-5-3l-5 3v5l10 6zM9 11H7v2H6v-2H4v-1h2V8h1v2h2zm6 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiYoutubeGamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
