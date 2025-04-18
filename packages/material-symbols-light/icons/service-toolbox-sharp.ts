import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightServiceToolboxSharpIcon],svg[material-symbols-light-service-toolbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-5.308h4.5v1h1v-1h7v1h1v-1H21V19zm.175-6.308L5.679 7h2.513V5.846q0-.402.3-.7q.299-.3.7-.3h5.616q.402 0 .7.3q.3.298.3.7V7h2.513l2.504 5.692H16.5v-1h-1v1h-7v-1h-1v1zM9.192 7h5.616V5.846H9.192z"></svg:path>`,
})
export class MaterialSymbolsLightServiceToolboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
