import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAmbulanceIcon],svg[mdi-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m1.5-9H17V12h4.46zM6 18.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 6 15.5A1.5 1.5 0 0 0 4.5 17A1.5 1.5 0 0 0 6 18.5M20 8l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V6c0-1.11.89-2 2-2h14v4zM8 6v3H5v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiAmbulanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
