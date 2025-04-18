import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsFlaskIcon],svg[eos-icons-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.642 18.452L19.731 17h-.001L15 9.462V3h2V1H7v2h2v6.462L4.27 17l-.912 1.452A2.317 2.317 0 0 0 5.321 22h13.358a2.317 2.317 0 0 0 1.963-3.548M13 3v7l4.374 7H6.626L11 10V3Z"></svg:path>`,
})
export class EosIconsFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
