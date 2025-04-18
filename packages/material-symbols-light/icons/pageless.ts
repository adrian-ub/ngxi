import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPagelessIcon],svg[material-symbols-light-pageless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.654 21H3.616q-.672 0-1.144-.472T2 19.385v-5.039h1v5.039q0 .269.173.442t.443.173h6.038zm4.692 0v-1h6.039q.269 0 .442-.173t.173-.442v-5.039h1v5.039q0 .67-.472 1.143q-.472.472-1.143.472zM2 9.673V4.616q0-.672.472-1.144T3.616 3h6.038v1H3.616q-.27 0-.443.173T3 4.616v5.057zm19 0V4.616q0-.27-.173-.443T20.385 4h-6.039V3h6.039q.67 0 1.143.472q.472.472.472 1.144v5.057z"></svg:path>`,
})
export class MaterialSymbolsLightPagelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
