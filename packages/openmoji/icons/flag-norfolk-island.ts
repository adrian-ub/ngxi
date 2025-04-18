import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNorfolkIslandIcon],svg[openmoji-flag-norfolk-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#186648" d="M5 17h21v38H5zm41 0h21v38H46z"></svg:path><svg:g stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#186648" d="m36 26l-4 4l4-.8l4 .8zm0 4l-5 4l5-.8l5 .8zm0 4l-6 4l6-.8l6 .8zm0 4l-7 4l7-.8l7 .8z"></svg:path><svg:path fill="none" d="M36 40v6"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagNorfolkIslandIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
