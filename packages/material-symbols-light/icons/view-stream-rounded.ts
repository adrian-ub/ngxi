import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewStreamRoundedIcon],svg[material-symbols-light-view-stream-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 18q-.667 0-1.141-.475T4 16.386v-2.27q0-.666.475-1.14t1.14-.475h12.77q.666 0 1.14.475t.475 1.14v2.27q0 .666-.475 1.14t-1.14.475zm0-6.5q-.667 0-1.141-.475T4 9.885v-2.27q0-.666.475-1.14T5.615 6h12.77q.666 0 1.14.475T20 7.615v2.27q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightViewStreamRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
