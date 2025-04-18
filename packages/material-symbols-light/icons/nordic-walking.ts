import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNordicWalkingIcon],svg[material-symbols-light-nordic-walking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.442 22.5l1.789-8.192h.89L5.333 22.5zm3.212 0l2.8-14.446L7.5 9.273V12.5h-1V8.608l4.57-1.9q.686-.281 1.263-.14t.944.701l.98 1.581q.65 1.05 1.754 1.764q1.103.713 2.489.847v1q-1.554-.095-2.924-.946t-2.326-2.38l-.889 4.519l2.139 2.058V22.5h-1v-5.673l-2.908-2.789L8.677 22.5zM13.5 5.192q-.69 0-1.191-.5q-.501-.501-.501-1.192t.5-1.191q.502-.501 1.192-.501t1.191.5q.501.502.501 1.192t-.5 1.191q-.502.501-1.192.501M17.808 22.5v-8.192h.884V22.5z"></svg:path>`,
})
export class MaterialSymbolsLightNordicWalkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
