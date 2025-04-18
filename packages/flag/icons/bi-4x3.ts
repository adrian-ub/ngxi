import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBi4x3Icon],svg[flag-bi-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBi4x30"><svg:path fill-opacity=".7" d="M-90.5 0H592v512H-90.5z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagBi4x30)" transform="translate(84.9)scale(.9375)"><svg:path fill="#18b637" d="m-178 0l428.8 256L-178 512zm857.6 0L250.8 256l428.8 256z"></svg:path><svg:path fill="#cf0921" d="m-178 0l428.8 256L679.6 0zm0 512l428.8-256l428.8 256z"></svg:path><svg:path fill="#fff" d="M679.6 0h-79.9L-178 464.3V512h79.9L679.6 47.7z"></svg:path><svg:path fill="#fff" d="M398.9 256a148 148 0 1 1-296.1 0a148 148 0 0 1 296 0z"></svg:path><svg:path fill="#fff" d="M-178 0v47.7L599.7 512h79.9v-47.7L-98.1 0z"></svg:path><svg:path fill="#cf0921" stroke="#18b637" stroke-width="3.9" d="m280 200.2l-19.3.3l-10 16.4l-9.9-16.4l-19.2-.4l9.3-16.9l-9.2-16.8l19.2-.4l10-16.4l9.9 16.5l19.2.4l-9.3 16.8zm-64.6 111.6l-19.2.3l-10 16.4l-9.9-16.4l-19.2-.4l9.3-16.9l-9.2-16.8l19.2-.4l10-16.4l9.9 16.5l19.2.4l-9.3 16.8zm130.6 0l-19.2.3l-10 16.4l-10-16.4l-19.1-.4l9.3-16.9l-9.3-16.8l19.2-.4l10-16.4l10 16.5l19.2.4l-9.4 16.8z"></svg:path></svg:g>`,
})
export class FlagBi4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
