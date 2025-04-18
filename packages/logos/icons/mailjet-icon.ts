import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMailjetIconIcon],svg[logos-mailjet-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9585F4" d="m0 97.991l93.408 42.34l18.769-18.66l-47.795-21.715l148.187-56.744l-56.961 147.533l-21.606-47.359l-18.878 18.769l.982 2.183l41.357 90.68L256 0z"></svg:path>`,
})
export class LogosMailjetIconIcon {
  readonly viewBox = input("0 0 256 255")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
