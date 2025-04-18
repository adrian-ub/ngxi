import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaSubtitlesUnavailableIcon],svg[nrk-media-subtitles-unavailable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h22v17H9.773l-1.528 3H6l1.529-3H1zm2 2v13h18V5z" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class NrkMediaSubtitlesUnavailableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
