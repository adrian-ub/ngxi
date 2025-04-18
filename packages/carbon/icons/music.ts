import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMusicIcon],svg[carbon-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 4H10a2 2 0 0 0-2 2v14.556A3.96 3.96 0 0 0 6 20a4 4 0 1 0 4 4V12h15v8.556A3.96 3.96 0 0 0 23 20a4 4 0 1 0 4 4V6a2 2 0 0 0-2-2M6 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m17 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2M10 6h15v4H10Z"></svg:path>`,
})
export class CarbonMusicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
