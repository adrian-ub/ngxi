import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagJordanIcon],svg[twemoji-flag-for-flag-jordan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#141414" d="M32 5H4a4 4 0 0 0-4 4v4.5h36V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#007A3D" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4.5H0V27z"></svg:path><svg:path fill="#EEE" d="M0 13.5h36v9H0z"></svg:path><svg:path fill="#CE1126" d="M1.351 6.004H1.35A3.991 3.991 0 0 0 0 9v18c0 1.193.522 2.264 1.351 2.997L17.5 18L1.351 6.004z"></svg:path><svg:path fill="#FFF" d="M6.627 19.338l1.056.976l-.105-1.435L9 18.662l-1.187-.812l.717-1.247l-1.375.421l-.528-1.338l-.528 1.338l-1.375-.421l.716 1.247l-1.186.812l1.421.217l-.104 1.435z"></svg:path>`,
})
export class TwemojiFlagForFlagJordanIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
