import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEyeIcon],svg[fluent-emoji-flat-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M16.184 1C7.814 1 1.028 7.786 1.028 16.156s6.785 15.157 15.156 15.157c8.37 0 15.156-6.786 15.156-15.157C31.34 7.786 24.555 1 16.184 1"></svg:path><svg:path fill="#fff" d="M30.34 16.156c0 7.819-6.338 14.157-14.156 14.157S2.028 23.975 2.028 16.156C2.028 8.338 8.366 2 16.184 2S30.34 8.338 30.34 16.156"></svg:path><svg:path fill="#7D4533" d="M24.997 15.984a8.984 8.984 0 1 1-17.97 0a8.984 8.984 0 0 1 17.97 0"></svg:path><svg:path fill="#1C1C1C" d="M21.028 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path fill="#fff" d="M15.028 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEyeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
