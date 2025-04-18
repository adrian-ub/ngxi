import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowOrEdgeIcon],svg[material-symbols-light-arrow-or-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.827 20.02l-3.288-3.29l.688-.707l2.1 2.094v-6.655q0-.27-.173-.443t-.443-.173H3.846q-.671 0-1.143-.472t-.472-1.143V4h1v5.23q0 .27.173.443t.442.173h2.866q.67 0 1.143.472q.472.472.472 1.143v6.637l2.094-2.075l.695.708zm8.346 0l-3.288-3.29l.688-.707l2.1 2.094v-6.655q0-.671.472-1.144t1.144-.472h2.865q.269 0 .442-.173t.173-.442V4h1v5.23q0 .672-.472 1.144t-1.143.472h-2.866q-.269 0-.442.173t-.173.443v6.661l2.094-2.1l.694.708z"></svg:path>`,
})
export class MaterialSymbolsLightArrowOrEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
