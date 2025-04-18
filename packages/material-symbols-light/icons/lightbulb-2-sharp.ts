import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLightbulb2SharpIcon],svg[material-symbols-light-lightbulb-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 17.616v-3.558q-1.29-.84-2.02-2.174Q6 10.552 6 9.02q0-2.502 1.749-4.26T12 3t4.251 1.749T18 9q0 1.552-.73 2.882t-2.02 2.176v3.557zM9.673 21v-1h4.654v1z"></svg:path>`,
})
export class MaterialSymbolsLightLightbulb2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
