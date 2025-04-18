import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatH3Icon],svg[material-symbols-light-format-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.5v-9h1v4h5v-4h1v9h-1v-4H5v4zm9 0v-1h5.385q.269 0 .442-.173t.173-.442V12.5h-4v-1h4V9.116q0-.27-.173-.443t-.442-.173H13v-1h5.385q.666 0 1.14.475T20 9.115v5.77q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightFormatH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
