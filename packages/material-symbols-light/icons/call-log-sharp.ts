import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallLogSharpIcon],svg[material-symbols-light-call-log-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.2 21q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q3 8.469 3 5.8V5h4.439l.848 4.083l-2.697 2.51q.685 1.186 1.418 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V21zM12 4V3h9v1zm0 3.385v-1h9v1zm0 3.384v-1h9v1z"></svg:path>`,
})
export class MaterialSymbolsLightCallLogSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
