import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsScienceOutlinedIcon],svg[eos-icons-science-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 10l5.949 9.516a.317.317 0 0 1-.268.484H5.319a.317.317 0 0 1-.266-.487L11 10V3h2ZM7 1v2h2v6.46l-5.641 8.99A2.318 2.318 0 0 0 5.319 22h13.362a2.318 2.318 0 0 0 1.96-3.55l-5.64-8.99L15 3h2V1Z"></svg:path>`,
})
export class EosIconsScienceOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
