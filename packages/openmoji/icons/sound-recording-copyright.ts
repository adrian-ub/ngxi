import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSoundRecordingCopyrightIcon],svg[openmoji-sound-recording-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="36" cy="36" r="26.68" stroke-width="4.74"></svg:circle><svg:path stroke-miterlimit="10" stroke-width="8.158" d="M29.2 50.283V21.73h10.887a7.111 7.111 0 1 1 0 14.223H29.2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiSoundRecordingCopyrightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
