import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoundaboutLeftSharpIcon],svg[material-symbols-light-roundabout-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.98 20v-6.454h.693q1.785 0 3.056-1.246T20 9.27q0-1.766-1.252-3.018T15.712 5T12.68 6.262t-1.246 3.046V10H4.92l2.1 2.1l-.713.708L3 9.5l3.308-3.308l.708.708L4.92 9h5.518q.119-2.106 1.631-3.553T15.712 4q2.211 0 3.75 1.529Q21 7.058 21 9.269q0 2.129-1.457 3.632q-1.456 1.503-3.562 1.622V20z"></svg:path>`,
})
export class MaterialSymbolsLightRoundaboutLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
