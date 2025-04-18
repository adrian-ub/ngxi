import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLiveVideoIcon],svg[streamline-live-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.014 8.764V5.236c0-.408.474-.666.86-.468l3.441 1.765a.515.515 0 0 1 0 .934l-3.44 1.765c-.387.198-.861-.06-.861-.468M.61 6.139a6.5 6.5 0 0 0 0 1.593m2.505-5.933a6.5 6.5 0 0 1 1.38-.797M1.068 4.43a6.5 6.5 0 0 1 .796-1.38"></svg:path><svg:path d="M7.012.5c3.55 0 6.427 2.91 6.427 6.5s-2.877 6.5-6.427 6.5c-2.446 0-4.573-1.382-5.659-3.416"></svg:path></svg:g>`,
})
export class StreamlineLiveVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
