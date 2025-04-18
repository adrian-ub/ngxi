import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkMusicIcon],svg[mdi-bookmark-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v16l-7-3l-7 3V5a2 2 0 0 1 2-2zm-6 8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V8h3V6h-4v5.27c-.29-.17-.64-.27-1-.27"></svg:path>`,
})
export class MdiBookmarkMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
