import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNextjsIconIcon],svg[logos-nextjs-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="100%" stop-color="#FFF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="100%" stop-color="#FFF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:circle id="logosNextjsIcon2" cx="128" cy="128" r="128"></svg:circle></svg:defs><svg:mask id="logosNextjsIcon3" fill="#fff"><svg:use href="#logosNextjsIcon2"></svg:use></svg:mask><svg:g mask="url(#logosNextjsIcon3)"><svg:circle cx="128" cy="128" r="128"></svg:circle><svg:path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"></svg:path><svg:path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"></svg:path></svg:g>`,
})
export class LogosNextjsIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
