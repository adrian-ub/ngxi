import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKettleIcon],svg[material-symbols-light-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17.846V6.327L4.5 3h12.885v3h2q.666 0 1.14.475T21 7.615v5q0 .667-.475 1.141t-1.14.475h-2v3.615zm10.385-4.615h2q.269 0 .442-.173t.173-.442v-5q0-.27-.173-.443T19.385 7h-2zm-4.616 1.846h1.847V5.769h-1.847zM4 21v-1h16v1z"></svg:path>`,
})
export class MaterialSymbolsLightKettleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
