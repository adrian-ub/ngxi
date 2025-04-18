import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaSubtitlesActiveIcon],svg[nrk-media-subtitles-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h22v17H1zm4 13h9v-2H5zm14 0h-3v-2h3z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m8.038 19l1.782.908L8.245 23H6z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaSubtitlesActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
