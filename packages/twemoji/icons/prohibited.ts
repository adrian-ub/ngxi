import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiProhibitedIcon],svg[twemoji-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0m13 18c0 2.565-.753 4.95-2.035 6.965L11.036 7.036A12.9 12.9 0 0 1 18 5c7.18 0 13 5.821 13 13M5 18c0-2.565.753-4.95 2.036-6.964l17.929 17.929A12.93 12.93 0 0 1 18 31c-7.179 0-13-5.82-13-13"></svg:path>`,
})
export class TwemojiProhibitedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
