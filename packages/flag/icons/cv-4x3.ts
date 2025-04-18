import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCv4x3Icon],svg[flag-cv-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCv4x30"><svg:path fill-opacity=".7" d="M-123.4 0h682.6v512h-682.6z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagCv4x30)" transform="translate(115.7)scale(.94)"><svg:path fill="#fff" d="M-123.4 233H723v206h-846.5z"></svg:path><svg:path fill="#081873" d="M-122.8 0h846v256.6h-846zm.3 385.9h852.1V512h-852.1z"></svg:path><svg:path fill="#de3929" d="M-122.5 302.6h846v39.6h-846z"></svg:path><svg:path fill="#ffce08" d="m131 399.2l6.6 20.4H159l-17.4 12.7l6.6 20.5L131 440l-17.4 12.7l6.7-20.5l-17.4-12.7h21.5M317 250.4l6.7 20.5H345l-17.4 12.6l6.6 20.5l-17.4-12.7l-17.4 12.7l6.6-20.5l-17.4-12.6h21.6m-222 64.4l6.6 20.5h21.5L99 368.6l6.7 20.4l-17.4-12.6L70.9 389l6.6-20.4l-17.4-12.7h21.5M317 329.5l6.7 20.4H345l-17.4 12.7l6.6 20.4l-17.4-12.6l-17.4 12.7l6.6-20.5l-17.4-12.7h21.6m-40.5-161.7l6.7 20.4H298l-17.4 12.7l6.6 20.5l-17.4-12.7l-17.4 12.7l6.7-20.5l-17.5-12.7h21.6m-64.5-45.2l6.7 20.5h21.5l-17.4 12.6l6.6 20.5l-17.4-12.6l-17.4 12.6l6.7-20.5l-17.4-12.6H192m-64.5 2.9l6.7 20.5h21.5l-17.4 12.6l6.7 20.5l-17.5-12.7l-17.4 12.7l6.7-20.5l-17.4-12.6H121m-34.8 43.2l6.6 20.5h21.6l-17.5 12.6l6.7 20.5l-17.4-12.7l-17.4 12.7l6.6-20.5L58 271h21.5m119.2 149.4l6.7 20.5h21.5l-17.4 12.6l6.7 20.5l-17.5-12.7l-17.4 12.7l6.7-20.5l-17.4-12.6H192m82.2-41.7l6.6 20.4h21.5L285 432.3l6.7 20.5l-17.4-12.7l-17.5 12.7l6.7-20.5l-17.4-12.7h21.5"></svg:path></svg:g>`,
})
export class FlagCv4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
