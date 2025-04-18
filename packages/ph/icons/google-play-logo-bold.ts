import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoBoldIcon],svg[ph-google-play-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.79 110.7L74 14.65a20.24 20.24 0 0 0-20.12.06A19.62 19.62 0 0 0 44 31.84v192.32a19.62 19.62 0 0 0 9.91 17.13a20.22 20.22 0 0 0 20.12.06l167.76-96a19.76 19.76 0 0 0 0-34.6ZM68 203V53l75 75Zm92-58l12.4 12.4l-58 33.2Zm-45.59-79.57l58 33.2L160 111ZM194 145l-17-17l17-17l29.72 17Z"></svg:path>`,
})
export class PhGooglePlayLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
