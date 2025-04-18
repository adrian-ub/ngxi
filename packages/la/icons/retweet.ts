import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRetweetIcon],svg[la-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 7l-5 5h4v13h17l-2-2H6V12h4zm4 0l2 2h13v11h-4l5 5l5-5h-4V7z"></svg:path>`,
})
export class LaRetweetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
