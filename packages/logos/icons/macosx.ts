import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMacosxIcon],svg[logos-macosx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient x1="50%" y1="0%" x2="50%" y2="100%" id="ssvg-id-macosxa"><svg:stop stop-color="#58B0E3" offset="0%"></svg:stop><svg:stop stop-color="#F44E28" offset="100%"></svg:stop></svg:lineargradient></svg:defs><svg:circle fill="#FFF" cx="128" cy="128" r="128"></svg:circle><svg:path d="M186.831 49.21h-7.774l-50.825 73.452h-.464L77.059 49.21h-7.89l54.77 79.022L69.4 206.79h7.774l50.477-73.22h.464l50.476 73.22h7.891l-54.538-78.558l54.886-79.022z" fill="url(#ssvg-id-macosxa)"></svg:path>`,
})
export class LogosMacosxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
