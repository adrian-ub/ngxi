import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoRetweetIcon],svg[entypo-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13V8h2L3.5 4L0 8h2v6a2 2 0 0 0 2 2h9.482l-2.638-3zm4.156-6L6.518 4H16c1.104 0 2 .897 2 2v6h2l-3.5 4l-3.5-4h2V7z"></svg:path>`,
})
export class EntypoRetweetIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
