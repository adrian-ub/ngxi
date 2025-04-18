import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoEyeInSpeechBubbleIcon],svg[noto-eye-in-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoEyeInSpeechBubble0" d="M64.73 20C19.51 20 5 61.27 5 61.27s12.42 39.85 59.73 39.85c7.34.06 14.64-1.02 21.64-3.21c6 8.49 18.78 12.47 25.3 13.33h.27c1.1-.02 1.99-.93 1.97-2.03a2.04 2.04 0 0 0-.33-1.07c-2.93-4.31-7.58-12-9.22-19.67a60.53 60.53 0 0 0 19.78-27.21S109.95 20 64.73 20"></svg:path></svg:defs><svg:g fill="#FFF"><svg:use href="#notoEyeInSpeechBubble0" opacity=".2"></svg:use><svg:path d="M104.36 88.48a60.53 60.53 0 0 0 19.78-27.21S109.95 20 64.73 20S5 61.27 5 61.27s12.42 39.85 59.73 39.85c7.34.06 14.64-1.02 21.64-3.21c6 8.49 18.78 12.47 25.3 13.33c1.1.13 2.09-.65 2.23-1.74c.06-.47-.05-.95-.32-1.35c-2.93-4.31-7.58-12.03-9.22-19.67"></svg:path></svg:g><svg:circle cx="64.72" cy="60.54" r="28.76" fill="#3F474C"></svg:circle><svg:circle cx="64.72" cy="60.54" r="16.01" fill="#231F20"></svg:circle><svg:circle cx="81.92" cy="56.34" r="6.8" fill="#F5F8FA"></svg:circle><svg:g fill="none"><svg:use href="#notoEyeInSpeechBubble0" opacity=".2"></svg:use><svg:path stroke="#000" stroke-linejoin="round" stroke-width="6" d="M104.36 88.48a60.53 60.53 0 0 0 19.78-27.21S109.95 20 64.73 20S5 61.27 5 61.27s12.42 39.85 59.73 39.85c7.34.06 14.64-1.02 21.64-3.21c6 8.49 18.78 12.47 25.3 13.33c1.1.13 2.09-.65 2.23-1.74c.06-.47-.05-.95-.32-1.35c-2.93-4.31-7.58-12.03-9.22-19.67z"></svg:path></svg:g>`,
})
export class NotoEyeInSpeechBubbleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
