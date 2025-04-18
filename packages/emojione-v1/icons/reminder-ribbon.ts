import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ReminderRibbonIcon],svg[emojione-v1-reminder-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a5233c" d="M44.896 15.453s-7.477-7.143-25.19-.363l.29-9.699l.726-1.721s10.581-8.04 24.862.032l.734 11.771l-1.419-.02"></svg:path><svg:path fill="#df394c" d="M25.34 18.223c-6.15-9.297-4.958-13.695-4.621-14.552q-.008 0-.01.004c-.01.016-.028.031-.042.043c-8.678 14.342-1.214 22.12-1.214 22.12l23.76 38.29L48.8 49.526l-23.46-31.3"></svg:path><svg:path fill="#bc2a3f" d="M25.292 37.484L16.08 49.07l5.163 14.755l10.538-15.943zM45.67 3.783l-.143-.116a.4.4 0 0 1-.063-.021c.373 1.537.833 6.458-5.04 14.805l-7.03 8.846l6.395 8.469l6.301-9.531c-.001 0 7.429-8.142-.422-22.452"></svg:path>`,
})
export class EmojioneV1ReminderRibbonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
