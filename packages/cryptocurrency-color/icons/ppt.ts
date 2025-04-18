import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorPptIcon],svg[cryptocurrency-color-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#152743"></svg:circle><svg:path fill="#FFF" d="M16.049 8.316c-1.316 0-2.383-.733-2.383-1.638s1.067-1.638 2.383-1.638s2.382.733 2.382 1.638s-1.066 1.638-2.382 1.638M14.816 26.6V9.104h5.312c.197 0 .336.147.336.344v9.708c0 .196-.14.364-.336.364H17.2v7.08c0 .197-.15.376-.347.376h-1.668a.384.384 0 0 1-.369-.375zm-.896-7.081h-2.01a.38.38 0 0 1-.374-.364V9.448c0-.197.177-.344.373-.344h2.011V19.52z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorPptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
