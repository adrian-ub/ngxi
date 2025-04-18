import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPowerButtonIcon],svg[lineicons-power-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 13.42a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" d="M19.625 12.875a7.63 7.63 0 0 0-5.375-7.288V4.03c3.951 1.003 6.875 4.583 6.875 8.846a9.125 9.125 0 0 1-18.25 0c0-4.263 2.924-7.844 6.875-8.846v1.558a7.625 7.625 0 1 0 9.875 7.287"></svg:path>`,
})
export class LineiconsPowerButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
