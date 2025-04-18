import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShelvesOutlineIcon],svg[material-symbols-light-shelves-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22.096V1.923h1v2.096h14V1.923h1v20.173h-1V20H5v2.096zM5 11h2.616V7.23h4.769V11H19V5.02H5zm0 8h6.616v-3.77h4.769V19H19v-7H5zm3.616-8h2.769V8.23h-2.77zm4 8h2.769v-2.77h-2.77zm-4-8h2.769zm4 8h2.769z"></svg:path>`,
})
export class MaterialSymbolsLightShelvesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
