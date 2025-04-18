import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAccountBoxSharpIcon],svg[material-symbols-light-account-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.077q1.258 0 2.129-.871T15 10.077t-.871-2.129T12 7.077t-2.129.871T9 10.077t.871 2.129t2.129.871M4 20V4h16v16zm1-1h14v-.766q-1.35-1.325-3.137-2.087T12 15.385t-3.863.762T5 18.235z"></svg:path>`,
})
export class MaterialSymbolsLightAccountBoxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
