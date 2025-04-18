import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTg4x3Icon],svg[flag-tg-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagTg4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagTg4x30)" transform="scale(.9375)"><svg:path fill="#ffe300" d="M0 0h767.6v512H0z"></svg:path><svg:path fill="#118600" d="M0 208.1h767.6V311H0zM0 .2h767.6v102.9H0z"></svg:path><svg:path fill="#d80000" d="M0 .3h306.5v310.6H0z"></svg:path><svg:path fill="#fff" d="M134.4 128.4c0-.8 18.9-53 18.9-53l17 52.2s57.4 1.7 57.4.8s-45.3 34.3-45.3 34.3s21.4 60 20.5 58.2s-49.6-36-49.6-36s-49.7 34.3-48.8 34.3c.8 0 18.8-56.5 18.8-56.5l-44.5-33.4z"></svg:path><svg:path fill="#118600" d="M0 409.2h767.6V512H0z"></svg:path></svg:g>`,
})
export class FlagTg4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
