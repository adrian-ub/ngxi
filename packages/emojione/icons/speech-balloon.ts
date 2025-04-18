import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSpeechBalloonIcon],svg[emojione-speech-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fd1d9" d="M55.4 5H8.6C4.9 5 2 7.9 2 11.5v29.8c0 3.6 2.9 6.5 6.6 6.5h6.9V59l10.4-11.2h29.6c3.6 0 6.6-2.9 6.6-6.5V11.5C62 7.9 59.1 5 55.4 5"></svg:path><svg:g fill="#fff"><svg:circle cx="16" cy="26.4" r="4.2"></svg:circle><svg:circle cx="32" cy="26.4" r="4.2"></svg:circle><svg:circle cx="48" cy="26.4" r="4.2"></svg:circle></svg:g>`,
})
export class EmojioneSpeechBalloonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
