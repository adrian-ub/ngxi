import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesThinIcon],svg[ph-subtitles-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM52 136a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-96a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m-48 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m48 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSubtitlesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
