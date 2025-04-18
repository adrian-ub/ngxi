import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaSubtitlesIcon],svg[nrk-media-subtitles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h22v17H9.773l-1.528 3H6l1.529-3H1zm2 2v13h18V5zm11 11H5v-2h9zm2 0h3v-2h-3z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaSubtitlesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
