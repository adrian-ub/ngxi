import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAirplayIcon],svg[cil-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 47H48a32.036 32.036 0 0 0-32 32v297a32.036 32.036 0 0 0 32 32h76.448l24.89-32H48V79h416l.02 297H362.662l24.89 32H464a32.036 32.036 0 0 0 32-32V79a32.036 32.036 0 0 0-32-32"></svg:path><svg:path fill="currentColor" d="M98.834 496h314.332L256 293.939Zm65.431-32L256 346.061L347.735 464Z"></svg:path>`,
})
export class CilAirplayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
