import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagIl4x3Icon],svg[flag-il-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagIl4x30"><svg:path fill-opacity=".7" d="M-87.6 0H595v512H-87.6z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagIl4x30)" transform="translate(82.1)scale(.94)"><svg:path fill="#fff" d="M619.4 512H-112V0h731.4z"></svg:path><svg:path fill="#0038b8" d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6z"></svg:path><svg:path fill="#fff" d="m225.8 317.8l20.9 35.5l21.4-35.3z"></svg:path><svg:path fill="#0038b8" d="M136 320.6L246.2 129l112.4 190.8z"></svg:path><svg:path fill="#fff" d="m225.8 191.6l20.9-35.5l21.4 35.4zM182 271.1l-21.7 36l41-.1l-19.3-36zm-21.3-66.5l41.2.3l-19.8 36.3zm151.2 67l20.9 35.5l-41.7-.5zm20.5-67l-41.2.3l19.8 36.3zm-114.3 0L189.7 256l28.8 50.3l52.8 1.2l32-51.5l-29.6-52z"></svg:path></svg:g>`,
})
export class FlagIl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
