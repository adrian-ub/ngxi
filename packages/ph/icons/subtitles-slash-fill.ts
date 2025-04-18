import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesSlashFillIcon],svg[ph-subtitles-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 0 0-11.48-.37a8.23 8.23 0 0 0-.14 11.38L44.46 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h157.92l12.16 13.38a8 8 0 0 0 11.33.51a8.31 8.31 0 0 0 .3-11.51ZM104 128h13.19l14.54 16h-27.46a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53m-48 0h16a8 8 0 0 1 8 8.53a8.18 8.18 0 0 1-8.27 7.47H56.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53m96 48H56.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h90.28l11.9 13.09A8 8 0 0 1 152 176m88-112v128a16 16 0 0 1-5.19 11.78a4 4 0 0 1-5.7-.24L175 144h25a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.25-7.47h-39.3L93.79 54.69a4 4 0 0 1 3-6.69H224a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSubtitlesSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
