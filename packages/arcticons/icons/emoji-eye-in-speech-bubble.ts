import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiEyeInSpeechBubbleIcon],svg[arcticons-emoji-eye-in-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsEmojiEyeInSpeechBubble0" fill="none" stroke="currentColor" d="M18.864 20.544a5.065 5.065 0 1 0 10.13 0a5.065 5.065 0 0 0-10.13 0"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 21.154c4.678 7.77 13.325 12.345 19.243 13.994c2.953.824 10.495 6.347 10.495 6.347s-1.882-5.53-2.196-7.445c-1.195-7.271 8.502-8.136 9.458-13.32c-5.553-12.905-25.08-24.39-37 .425"></svg:path><svg:use href="#arcticonsEmojiEyeInSpeechBubble0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.671 20.544a9.257 9.257 0 0 0 9.252 9.263a9.257 9.257 0 0 0 9.263-9.251v-.012a9.257 9.257 0 0 0-9.253-9.26a9.257 9.257 0 0 0-9.262 9.253z"></svg:path><svg:use href="#arcticonsEmojiEyeInSpeechBubble0" stroke-linecap="round" stroke-linejoin="round"></svg:use>`,
})
export class ArcticonsEmojiEyeInSpeechBubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
