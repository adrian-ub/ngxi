import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDropmarkIcon],svg[logos-dropmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="logosDropmark0" d="M128 0S0 91.067 0 219.067c0 70.704 57.296 128 128 128s128-57.296 128-128C256 91.067 128 0 128 0m0 293.312l-68.68-79.051h30.61v-90.308h76.142v90.308h30.609z"></svg:path></svg:defs><svg:use fill="#38DEDF" href="#logosDropmark0"></svg:use>`,
})
export class LogosDropmarkIcon {
  readonly viewBox = input("0 0 256 348")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
