import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosKotlinIconIcon],svg[logos-kotlin-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosKotlinIcon0" x1="99.991%" x2=".01%" y1="-.011%" y2="100.01%"><svg:stop offset=".344%" stop-color="#E44857"></svg:stop><svg:stop offset="46.89%" stop-color="#C711E1"></svg:stop><svg:stop offset="100%" stop-color="#7F52FF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosKotlinIcon0)" d="M256 256H0V0h256L128 127.949z"></svg:path>`,
})
export class LogosKotlinIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
