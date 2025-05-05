import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSewingIcon],svg[picon-sewing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V5h5V2H3v1H1V0h6v1h1v2H7v4"></svg:path>`,
})
export class PiconSewingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
