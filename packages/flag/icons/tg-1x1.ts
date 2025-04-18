import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTg1x1Icon],svg[flag-tg-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagTg1x10"><svg:path fill-opacity=".7" d="M0-.2h496.3V496H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagTg1x10)" transform="translate(0 .3)scale(1.0316)"><svg:path fill="#ffe300" d="M0-.2h744V496H0z"></svg:path><svg:path fill="#118600" d="M0 201.5h744v99.7H0zM0 0h744v99.7H0z"></svg:path><svg:path fill="#d80000" d="M0 0h297.1v301.2H0z"></svg:path><svg:path fill="#fff" d="M130.3 124.3c0-.9 18.3-51.5 18.3-51.5l16.6 50.6s55.6 1.7 55.6.8s-44 33.2-44 33.2s20.7 58.1 19.9 56.5s-48.1-34.9-48.1-34.9s-48.2 33.2-47.3 33.2s18.2-54.7 18.2-54.7L76.4 125z"></svg:path><svg:path fill="#118600" d="M0 396.4h744v99.7H0z"></svg:path></svg:g>`,
})
export class FlagTg1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
