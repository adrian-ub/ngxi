import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoSpeechBalloonIcon],svg[noto-speech-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M63.65 8.07C20.99 8.29 3.72 30.53 3.39 58.23c-.18 15.47 9.79 28.83 25.07 36.98c7.45 5.27-1.42 22.54-8.52 26.95c0 0 25.1-1.71 32.02-19.4c3.82.56 7.75.85 11.78.85c33.28 0 60.17-17.68 60.17-45.38S106.72 7.86 63.65 8.07z"></svg:path><svg:g fill="#54646D"><svg:circle cx="32.6" cy="57" r="8"></svg:circle><svg:circle cx="64.6" cy="57" r="8"></svg:circle><svg:circle cx="95.4" cy="57" r="8"></svg:circle></svg:g>`,
})
export class NotoSpeechBalloonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
