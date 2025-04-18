import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasPowerIcon],svg[pajamas-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 7.25a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.04 5.157A5.5 5.5 0 1 1 5 3.39a.75.75 0 1 0-.818-1.257a7 7 0 1 0 7.635 0A.75.75 0 0 0 11 3.39a5.5 5.5 0 0 1 .291 9.017Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasPowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
