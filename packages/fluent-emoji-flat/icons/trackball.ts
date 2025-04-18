import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTrackballIcon],svg[fluent-emoji-flat-trackball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#635994" d="M20.31 2h-8.62A4.69 4.69 0 0 0 7 6.69v18.62C7 27.9 9.1 30 11.69 30h8.62C22.9 30 25 27.9 25 25.31V6.69C25 4.1 22.9 2 20.31 2"></svg:path><svg:path fill="#433B6B" d="M22.03 11c0-3.16-2.44-5.75-5.53-6.01V2h-1v2.99c-3.09.26-5.53 2.85-5.53 6.01s2.44 5.75 5.53 6.01v1.74c0 .28.22.5.5.5s.5-.22.5-.5v-1.74c3.09-.26 5.53-2.85 5.53-6.01"></svg:path><svg:path fill="#CA0B4A" d="M16 16.03a5.03 5.03 0 1 0 0-10.06a5.03 5.03 0 0 0 0 10.06"></svg:path><svg:path fill="#FF8687" d="M17.35 11a1.59 1.59 0 1 0 0-3.18a1.59 1.59 0 0 0 0 3.18"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTrackballIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
