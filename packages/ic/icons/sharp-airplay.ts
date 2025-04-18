import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAirplayIcon],svg[ic-sharp-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z"></svg:path>`,
})
export class IcSharpAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
