import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagJo4x3Icon],svg[flag-jo-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagJo4x30"><svg:path fill-opacity=".7" d="M-117.8 0h682.6v512h-682.6z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagJo4x30)" transform="translate(110.5)scale(.9375)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#000001" d="M-117.8 0h1024v170.7h-1024z"></svg:path><svg:path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z"></svg:path><svg:path fill="#090" d="M-117.8 341.3h1024V512h-1024z"></svg:path><svg:path fill="red" d="m-117.8 512l512-256l-512-256z"></svg:path><svg:path fill="#fff" d="m24.5 289l5.7-24.9H4.7l23-11l-15.9-19.9l23 11l5.6-24.8l5.7 24.9L69 233.2l-16 19.9l23 11H50.6l5.7 24.9l-15.9-20z"></svg:path></svg:g></svg:g>`,
})
export class FlagJo4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
