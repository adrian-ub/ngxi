import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddColumnLeftIcon],svg[material-symbols-light-add-column-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.442 20V4H21v16zM5 20v-3.138q.125.011.244.017t.256.006q2.027 0 3.456-1.417T10.385 12t-1.43-3.468T5.5 7.116q-.137 0-.256.005T5 7.14V4h7.442v16zm0-5.5v-2H3v-1h2v-2h1v2h2v1H6v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddColumnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
