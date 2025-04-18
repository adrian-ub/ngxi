import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiVideoGameIcon],svg[twemoji-video-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="m2.13 14.856l-.004-.002S.075 27.271.075 29.061c0 1.824 1.343 3.302 3 3.302c.68 0 1.3-.258 1.803-.678l10.166-8.938zm31.69 0l.004-.002s2.051 12.417 2.051 14.207c0 1.824-1.343 3.302-3 3.302c-.68 0-1.3-.258-1.803-.678l-10.166-8.938z"></svg:path><svg:g fill="#14171A"><svg:circle cx="25.975" cy="15.551" r="8.5"></svg:circle><svg:circle cx="9.975" cy="15.551" r="8.5"></svg:circle><svg:path d="M9.975 7.051h16v16.87h-16z"></svg:path></svg:g><svg:circle cx="13.075" cy="23.301" r="5" fill="#14171A"></svg:circle><svg:circle cx="22.875" cy="23.301" r="5" fill="#14171A"></svg:circle><svg:circle cx="22.875" cy="23.301" r="3" fill="#67757F"></svg:circle><svg:circle cx="13.075" cy="23.301" r="3" fill="#67757F"></svg:circle><svg:circle cx="25.735" cy="11.133" r="1.603" fill="#FFCC4D"></svg:circle><svg:circle cx="25.735" cy="17.607" r="1.603" fill="#77B255"></svg:circle><svg:circle cx="22.498" cy="14.37" r="1.603" fill="#50A5E6"></svg:circle><svg:circle cx="28.972" cy="14.37" r="1.603" fill="#DD2E44"></svg:circle><svg:path fill="#8899A6" d="M11.148 12.514v-2.168a.505.505 0 0 0-.505-.505H9.085a.505.505 0 0 0-.505.505v2.168l1.284 1.285zm-2.569 3.63v2.168c0 .279.226.505.505.505h1.558a.505.505 0 0 0 .505-.505v-2.168l-1.284-1.285zm5.269-3.1H11.68l-1.285 1.285l1.285 1.285h2.168a.506.506 0 0 0 .505-.505V13.55a.506.506 0 0 0-.505-.506m-5.799 0H5.88a.506.506 0 0 0-.505.505v1.558c0 .279.226.505.505.505h2.168l1.285-1.285z"></svg:path>`,
})
export class TwemojiVideoGameIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
