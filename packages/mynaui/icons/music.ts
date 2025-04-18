import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicIcon],svg[mynaui-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.625 17.65c0 1.574-1.26 2.85-2.812 2.85C4.259 20.5 3 19.224 3 17.65c0-1.573 1.26-2.849 2.813-2.849s2.812 1.276 2.812 2.85m0 0V5.462c0-.52.394-.954.909-1.001l10.375-.956A1 1 0 0 1 21 4.506V16.51m0 0c0 1.573-1.26 2.85-2.812 2.85c-1.554 0-2.813-1.277-2.813-2.85s1.26-2.85 2.813-2.85S21 14.938 21 16.512"></svg:path>`,
})
export class MynauiMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
