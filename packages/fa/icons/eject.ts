import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faEjectIcon],svg[fa-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 755L724 45q19-19 45-19t45 19l710 710q19 19 13 32t-32 13H33q-26 0-32-13t13-32m1459 557H65q-26 0-45-19t-19-45V992q0-26 19-45t45-19h1408q26 0 45 19t19 45v256q0 26-19 45t-45 19"></svg:path>`,
})
export class FaEjectIcon {
  readonly viewBox = input("0 0 1568 1312")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
