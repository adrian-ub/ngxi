import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSend32Icon],svg[fluent-color-send-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSend322)" d="m4.664 20l1.286-3.999l-1.286-3.999l16.092 3.016c1.087.204 1.087 1.762 0 1.966z"></svg:path><svg:path fill="url(#fluentColorSend320)" d="M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979c.557.092.557.893 0 .986L5.723 18.471a1 1 0 0 0-.788.68l-2.858 8.886c-.407 1.265.91 2.395 2.099 1.8L29.17 17.343c1.106-.552 1.106-2.13 0-2.683z"></svg:path><svg:path fill="url(#fluentColorSend321)" d="M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979c.557.092.557.893 0 .986L5.723 18.471a1 1 0 0 0-.788.68l-2.858 8.886c-.407 1.265.91 2.395 2.099 1.8L29.17 17.343c1.106-.552 1.106-2.13 0-2.683z"></svg:path><svg:defs><svg:lineargradient id="fluentColorSend320" x1="2.002" x2="25.983" y1="-9.374" y2="22.488" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3BD5FF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSend321" x1="16.001" x2="23.283" y1="9.548" y2="29.249" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset=".769" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorSend322" cx="0" cy="0" r="1" gradientTransform="matrix(13.9839 0 0 1.81128 .016 16.001)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorSend32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
