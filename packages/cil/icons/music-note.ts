import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMusicNoteIcon],svg[cil-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m72 203.517l160-32v209.669h.044Q232 382.588 232 384c0 55.794 48.448 101.186 108 101.186S448 439.794 448 384s-48.448-101.186-108-101.186a111.43 111.43 0 0 0-76 29.367V28.483l-192 38.4Zm268 111.3c41.906 0 76 31.037 76 69.186s-34.094 69.186-76 69.186s-76-31.04-76-69.189s34.094-69.186 76-69.186Zm-236-221.7l128-25.6v71.366l-128 25.6Z"></svg:path>`,
})
export class CilMusicNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
