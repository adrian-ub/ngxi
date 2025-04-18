import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagCuracaoIcon],svg[twemoji-flag-curacao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#002B7F" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0z"></svg:path><svg:path fill="#F9E814" d="M0 21h36v4H0z"></svg:path><svg:path fill="#002B7F" d="M32 5H4a4 4 0 0 0-4 4v12h36V9a4 4 0 0 0-4-4M4 9.764l-1.176.854l.449-1.382l-1.175-.854h1.453L4 7l.449 1.382h1.453l-1.175.854l.449 1.382zm5.567 5.393L8 14.019l-1.567 1.139l.599-1.843l-1.567-1.139h1.937L8 10.333l.599 1.843h1.937l-1.567 1.139z"></svg:path><svg:path fill="#FFF" d="M8.599 12.176L8 10.333l-.599 1.843H5.464l1.567 1.139l-.598 1.842L8 14.019l1.567 1.138l-.598-1.842l1.567-1.139zM5.902 8.382H4.449L4 7l-.449 1.382H2.098l1.175.854l-.449 1.382L4 9.764l1.176.854l-.449-1.382z"></svg:path>`,
})
export class TwemojiFlagCuracaoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
