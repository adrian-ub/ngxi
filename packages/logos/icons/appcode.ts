import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAppcodeIcon],svg[logos-appcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosAppcode0" x1="0%" x2="100%" y1="50%" y2="50%"><svg:stop offset="19%" stop-color="#07C3F2"></svg:stop><svg:stop offset="90%" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="logosAppcode1" x1="0%" x2="100%" y1="50%" y2="50%"><svg:stop offset="19%" stop-color="#07C3F2"></svg:stop><svg:stop offset="90%" stop-color="#087CFA"></svg:stop></svg:lineargradient><svg:lineargradient id="logosAppcode2" x1="65.642%" x2="16.245%" y1="103.177%" y2="34.031%"><svg:stop offset="9%" stop-color="#21D789"></svg:stop><svg:stop offset="48%" stop-color="#07C3F2"></svg:stop><svg:stop offset="90%" stop-color="#087CFA"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#087CFA" d="M195.627 256L256 96.373l-48-10.88z"></svg:path><svg:path fill="url(#logosAppcode0)" d="M255.253 205.333L195.627 256l-85.094-21.92z"></svg:path><svg:path fill="url(#logosAppcode1)" d="m31.867 117.28l-27.2-77.813L140.48 0z"></svg:path><svg:path fill="url(#logosAppcode2)" d="m223.36 148.213l-38.107-65.04l.72-.453L140.48 0L0 151.707V256l255.253-50.667z"></svg:path><svg:path d="M48 48h160v160H48z"></svg:path><svg:path fill="#FFF" d="M67.947 177.76h60v10h-60zm112.24-101.573l-8.48 9.786a22.3 22.3 0 0 0-15.467-6.826c-10.073 0-17.383 8.266-17.544 18.481l-.003.532c0 10.373 7.174 19.013 17.547 19.013c6.436 0 10.556-2.315 15.015-6.212l.655-.582l.33-.299l8.373 8.587a31.01 31.01 0 0 1-24.8 10.666a30.533 30.533 0 0 1-31.044-30.517l.004-.656a30.747 30.747 0 0 1 31.547-31.28a31.28 31.28 0 0 1 23.867 9.307M101.333 68l25.547 60.08h-13.707l-5.333-13.333H82.507l-5.334 13.333H63.84L89.333 68zm-6.186 15.76l-8 19.36h16z"></svg:path>`,
})
export class LogosAppcodeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
