import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKm4x3Icon],svg[flag-km-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKm4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKm4x30)" transform="scale(.9375)"><svg:path fill="#ff0" d="M0 0h768.8v128H0z"></svg:path><svg:path fill="#fff" d="M0 128h768.8v128H0z"></svg:path><svg:path fill="#be0027" d="M0 256h768.8v128H0z"></svg:path><svg:path fill="#3b5aa3" d="M0 384h768.8v128H0z"></svg:path><svg:path fill="#239e46" d="M0 0v512l381.9-255.3z"></svg:path><svg:path fill="#fff" d="M157.2 141.4c-85-4.3-123.9 63.5-123.8 115.9c-.2 62 58.6 113 112.8 110C117 353.5 81.2 314.6 81 257c-.3-52.1 29.5-97.5 76.3-115.6z"></svg:path><svg:path fill="#fff" d="m156 197l-12-9.3l-14.6 4.6l5.2-14.4l-8.8-12.4l15.2.6l9-12.3l4.3 14.7l14.4 4.8l-12.6 8.5zm-.3 52.1l-12-9.4l-14.6 4.6l5.3-14.3l-8.9-12.4l15.3.5l9-12.2l4.2 14.6l14.5 4.9l-12.7 8.5zm.2 52.6l-12-9.4l-14.5 4.6l5.2-14.3l-8.8-12.4l15.2.5l9-12.2l4.3 14.6l14.4 4.8l-12.6 8.6zm-.2 53l-12-9.3L129 350l5.3-14.4l-8.9-12.4l15.3.6l9-12.3l4.2 14.7l14.5 4.8l-12.7 8.5z"></svg:path></svg:g>`,
})
export class FlagKm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
