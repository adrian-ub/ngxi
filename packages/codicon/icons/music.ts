import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMusicIcon],svg[codicon-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 7h-1v2.5a2.5 2.5 0 1 0 1 2zm-2.5 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path d="m13.469 2.001l-8 .5L5 3v7.5a2.5 2.5 0 1 0 1 2V6.47l7-.438V7h1V2.5zM13 3.032V5.03l-7 .438V3.47zM3.5 11a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class CodiconMusicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
