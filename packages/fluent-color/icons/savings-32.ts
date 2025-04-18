import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSavings32Icon],svg[fluent-color-savings-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSavings320)" d="M11.681 2.543C10.807 1.493 9 2.046 9 3.503v4.36c-1.949 1.118-3.477 2.773-4.309 5.015c-.072.193-.206.288-.311.31A2.995 2.995 0 0 0 2 16.119v1.76c0 1.417.993 2.64 2.38 2.932c.104.022.24.117.311.31c.832 2.243 2.36 3.897 4.309 5.016V27a3 3 0 0 0 3 3h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2a3 3 0 0 0 3-3v-2.85c1.863-1.875 3-4.341 3-7.15c0-6.53-6.018-11-13-11h-.214c-.851-.077-1.537-.274-2.271-.737c-.779-.49-1.659-1.31-2.834-2.72"></svg:path><svg:path fill="url(#fluentColorSavings321)" d="M12 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="#9F1459" d="M13.878 9.212a1.793 1.793 0 0 1 2.342-.973l11.005 4.544a1.793 1.793 0 1 1-1.368 3.314l-11.006-4.544a1.793 1.793 0 0 1-.973-2.341"></svg:path><svg:path fill="url(#fluentColorSavings322)" d="M24.316 15.46a5.97 5.97 0 0 0-2.305-11.475a5.97 5.97 0 0 0-5.52 8.245z"></svg:path><svg:path fill="url(#fluentColorSavings323)" fill-opacity=".8" d="M24.316 15.46a5.97 5.97 0 0 0-2.305-11.475a5.97 5.97 0 0 0-5.52 8.245z"></svg:path><svg:defs><svg:radialgradient id="fluentColorSavings320" cx="0" cy="0" r="1" gradientTransform="rotate(74.582 2.168 9.319)scale(27.3177 27.4525)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".581" stop-color="#E869CE"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSavings321" cx="0" cy="0" r="1" gradientTransform="rotate(59.532 -6.25 15.057)scale(2.54187)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B91D6B"></svg:stop><svg:stop offset="1" stop-color="#670938"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSavings322" x1="26.107" x2="17.013" y1="14.162" y2="6.416" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF8A69"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSavings323" x1="23.783" x2="19.866" y1="4.638" y2="14.057" gradientUnits="userSpaceOnUse"><svg:stop offset=".67" stop-color="#FB5937" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#CD3E1D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSavings32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
