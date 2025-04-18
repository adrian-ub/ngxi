import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNoLuggageIcon],svg[ic-sharp-no-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 9v.92l1.75 1.75V9H16v4.17l3 3V6h-4V2H9v4h-.17l3 3zM10.5 3.5h3V6h-3zm10.69 17.69L2.81 2.81L1.39 4.22L5 7.83V21h2v1h2v-1h6v1h2v-1h1.17l1.61 1.61zM8 18v-7.17l1.5 1.5V18zm3.25 0v-3.92l1.5 1.5V18z"></svg:path>`,
})
export class IcSharpNoLuggageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
