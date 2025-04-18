import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaSoundwaveIcon],svg[nrk-media-soundwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4H9v18h2zm8 3h-2v12h2zM7 8.8H5v8h2zm6 .2h2v8h-2zm8 1.8h2v4h-2zm-18 0H1v4h2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaSoundwaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
