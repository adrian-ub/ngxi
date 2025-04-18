import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnPiIcon],svg[typcn-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.707 8.535a1 1 0 0 0-1.414 0a3.247 3.247 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0a.999.999 0 1 0 1.414 1.414c.374-.374.82-.624 1.293-.776V17a1 1 0 1 0 2 0V9.174a3.2 3.2 0 0 1 1.293.775A5.2 5.2 0 0 0 14 11.386V17a1 1 0 1 0 2 0v-5.614a5.2 5.2 0 0 0 2.707-1.437a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class TypcnPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
