import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStackExchangeIcon],svg[fa-stack-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1259 997v66q0 85-57.5 144.5T1063 1267h-57l-260 269v-269H217q-81 0-138.5-59.5T21 1063v-66zm0-326v255H21V671zm0-328v255H21V343zm0-140v67H21v-67q0-84 57.5-143.5T217 0h846q81 0 138.5 59.5T1259 203"></svg:path>`,
})
export class FaStackExchangeIcon {
  readonly viewBox = input("0 0 1280 1536")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
