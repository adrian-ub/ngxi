import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMusicAddIcon],svg[carbon-music-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 6h-4V2h-2v4h-4v2h4v4h2V8h4zm-6 9v7.556A3.96 3.96 0 0 0 22 22a4 4 0 1 0 4 4V15zm-2 13a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2M17 6h-7a2 2 0 0 0-2 2v14.556A3.96 3.96 0 0 0 6 22a4 4 0 1 0 4 4V8h7zM6 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonMusicAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
