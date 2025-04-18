import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBqSaIcon],svg[flagpack-bq-sa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#fff" d="M0 0h32v24H0z"></svg:path><svg:path fill="#F00000" d="M0 11.664V0h16zm32 0V0H16z"></svg:path><svg:path fill="#00268D" d="M0 11.664V24h16zm32 0v12.672L16 24z"></svg:path><svg:path fill="#FEDA00" d="m15.714 14.256l-3.517 2.507l1.29-4.141L10 10.087h4.345L15.714 6l1.452 4.087h4.226l-3.457 2.535l1.314 4.141z"></svg:path></svg:g>`,
})
export class FlagpackBqSaIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
