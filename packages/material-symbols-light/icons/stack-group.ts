import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackGroupIcon],svg[material-symbols-light-stack-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.616 21q-.667 0-1.141-.475T9 19.386V15H4.616q-.667 0-1.141-.475T3 13.385v-8.77q0-.666.475-1.14T4.615 3h8.77q.666 0 1.14.475T15 4.615V9h4.385q.666 0 1.14.475t.475 1.14v8.77q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightStackGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
