import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularNotdefIcon],svg[fa6-regular-notdef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zm0 90.16V421.8L221.2 256L336 90.16zM192 213.8L77.19 48h229.6L192 213.8zM162.8 256L48 421.8V90.16L162.8 256zm29.2 42.2L306.8 464H77.19L192 298.2z"></svg:path>`,
})
export class Fa6RegularNotdefIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
