import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSongbirdIcon],svg[token-branded-songbird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E62058" d="m5.7 21l4.082-7.426l-.743 6.414zm3.94-3.573l.505-4.417l5.41.71zm3.891-8.853l2.21 4.866l-5.447-.714zm1.155 1.826l2.738-1.37l-1.454 4.195zm-4.615 2.128L7.016 3l6.343 5.312zm6.909-1.312l.668-1.928l.652 3.144z"></svg:path>`,
})
export class TokenBrandedSongbirdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
