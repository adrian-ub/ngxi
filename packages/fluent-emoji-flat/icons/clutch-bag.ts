import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatClutchBagIcon],svg[fluent-emoji-flat-clutch-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C23C" d="M4.498 10.457c.44.32 1.05.27 1.43-.13c.38-.39.41-1 .08-1.43l-1.62-2.1c-.41-.52-1.19-.57-1.65-.09l-.52.54c-.46.48-.4 1.26.14 1.65zm.22-1.31c.23-.24.62-.25.86-.01s.25.62.01.86c-.23.25-.62.25-.86.02a.616.616 0 0 1-.01-.87"></svg:path><svg:path fill="#F99EA3" d="M3.083 14.444c.392-3.178 2.763-4.505 4.961-4.505h15.514c3.714 0 5.17 2.618 5.502 5.083c.17 1.259.32 2.185.854 6.69c.5 4.238-.854 8.254-6.074 8.254H8.044c-5.084 0-6.435-4.006-5.923-8.26c.304-2.529.57-4.086.962-7.262"></svg:path><svg:path fill="#FBB8AB" d="M8.044 29.966c-5.084 0-6.435-4.006-5.923-8.26c11.879 0 14.972.006 27.792.006c.502 4.238-.853 8.254-6.073 8.254z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatClutchBagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
