import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElevationRiseIcon],svg[mdi-elevation-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-3.71l7.78-4.49l3.77 2.2L21 11.25V21zM21 8.94l-6.45 3.73l-3.77-2.17L3 15v-2.21l7.78-4.49l3.77 2.2L21 6.75z"></svg:path>`,
})
export class MdiElevationRiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
