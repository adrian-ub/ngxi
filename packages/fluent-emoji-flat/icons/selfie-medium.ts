import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSelfieMediumIcon],svg[fluent-emoji-flat-selfie-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F92F60" d="M22.132 15h-5.427a1 1 0 0 0-.942.664l-2.026 5.672a1 1 0 0 1-.942.664H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h13c2.5 0 3.5-2 4-4l3.085-9.697A1 1 0 0 0 22.132 15"></svg:path><svg:path fill="#C68D7B" d="M16.75 15h5.5c0-1 .257-1.668.75-1.75h.75a1 1 0 0 0 .97-1.247V12l-.004-.008a1 1 0 0 0-.122-.279L24.5 11.5c-.117-.29-.519-.5-1.5-.5V8h-6c-.4 0-1.333.667-1.75 1v2.448c0 .5.25 1.552 1.5 2.052c.25.1.25.5 0 1.5"></svg:path><svg:path fill="#433B6B" d="M17 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"></svg:path><svg:path fill="#00A6ED" d="M17 3h6v8h-6z"></svg:path><svg:path fill="#C68D7B" d="M21.75 5.75a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2a1 1 0 1 1 0 2a1 1 0 1 1 0 2H24a1 1 0 1 1 0 2h-1.25a1 1 0 1 1 0-2a1 1 0 1 1 0-2a1 1 0 1 1 0-2a1 1 0 0 1-1-1m-4.808 1.5c-.934 0-1.692.758-1.692 1.692c0 .584.473 1.058 1.058 1.058H18.1a1.375 1.375 0 1 0 0-2.75z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSelfieMediumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
