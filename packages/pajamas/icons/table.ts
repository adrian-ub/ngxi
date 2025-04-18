import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTableIcon],svg[pajamas-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.5v-2h11v2zm0 1.5v3h4.75V6zm6.25 0v3h4.75V6zM2.5 10.5h4.75v3H2.5zm6.25 0v3h4.75v-3zM1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
