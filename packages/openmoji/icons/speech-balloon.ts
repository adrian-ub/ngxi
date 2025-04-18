import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpeechBalloonIcon],svg[openmoji-speech-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fff"><svg:path d="M17.09 50.75A23.87 23.87 0 0 1 12.002 36c0-13.23 10.77-24 24-24s24 10.77 24 24s-10.77 24-24 24c-1.955 0-3.855-.24-5.676-.684c-5.919-1.48-10.33-4.34-13.24-8.567z"></svg:path><svg:circle cx="23.48" cy="54.97" r="5"></svg:circle><svg:circle cx="-15.8" cy="62.94" r="2.5" transform="scale(-1 1)"></svg:circle></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.54 58.56c1.442.286 2.93.44 4.455.44c12.68 0 23-10.32 23-23s-10.32-23-23-23s-23 10.32-23 23a22.87 22.87 0 0 0 4.187 13.21"></svg:path><svg:circle cx="26.79" cy="36" r="2"></svg:circle><svg:circle cx="36" cy="36" r="2"></svg:circle><svg:circle cx="45.21" cy="36" r="2"></svg:circle><svg:circle cx="-4.026" cy="64.73" r="2.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" transform="scale(-1 1)rotate(10.539)"></svg:circle><svg:circle cx="-13.58" cy="57.88" r="4.981" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" transform="scale(-1 1)rotate(10.539)"></svg:circle>`,
})
export class OpenmojiSpeechBalloonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
