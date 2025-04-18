import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1SagittariusIcon],svg[emojione-v1-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b45ecb" d="M63.919 57.03a6.885 6.885 0 0 1-6.889 6.889H6.89A6.887 6.887 0 0 1 0 57.03V6.89A6.887 6.887 0 0 1 6.89.002h50.14a6.885 6.885 0 0 1 6.888 6.888z"></svg:path><svg:g fill="#fff"><svg:path d="M49.3 9.852L10.358 48.794a3.73 3.73 0 0 0 5.274 5.272l38.941-38.94a3.734 3.734 0 0 0 .002-5.274a3.733 3.733 0 0 0-5.275 0"></svg:path><svg:path d="m10.944 34.439l19.04 19.04a3.73 3.73 0 0 0 5.274-.002a3.73 3.73 0 0 0 0-5.271l-19.04-19.04a3.733 3.733 0 0 0-5.272-.004a3.733 3.733 0 0 0 0 5.275M31.04 16.218h20.893a3.73 3.73 0 0 0 3.729-3.73a3.73 3.73 0 0 0-3.728-3.727l-20.892-.002a3.735 3.735 0 0 0-3.732 3.729a3.737 3.737 0 0 0 3.73 3.73"></svg:path><svg:path d="M48.2 33.378V12.485a3.73 3.73 0 0 1 7.457-.002l.002 20.895a3.733 3.733 0 0 1-3.729 3.729a3.74 3.74 0 0 1-3.73-3.729"></svg:path></svg:g>`,
})
export class EmojioneV1SagittariusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
