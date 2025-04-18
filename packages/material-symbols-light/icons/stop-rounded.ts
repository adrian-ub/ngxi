import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStopRoundedIcon],svg[material-symbols-light-stop-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15.385v-6.77q0-.666.475-1.14T8.615 7h6.77q.666 0 1.14.475T17 8.615v6.77q0 .666-.475 1.14t-1.14.475h-6.77q-.666 0-1.14-.475T7 15.386"></svg:path>`,
})
export class MaterialSymbolsLightStopRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
