import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSidenavIcon],svg[picon-sidenav-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h5v8H3M0 0h2v2H0m0 1h2v2H0m0 1h2v2H0"></svg:path>`,
})
export class PiconSidenavIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
