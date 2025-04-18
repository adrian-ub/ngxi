import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTapasIcon],svg[material-symbols-light-tapas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.885 22.616v-9.5H4.768q-.84 0-1.42-.58t-.58-1.42t.58-1.42t1.42-.58h2.115V7.883H4.77q-.84 0-1.42-.579q-.58-.58-.58-1.42t.58-1.42t1.42-.58h2.115v-2.5h1v2.5H10q.84 0 1.42.58T12 5.882t-.58 1.42t-1.42.581H7.884v1.231H10q.84 0 1.42.58t.58 1.42t-.58 1.42t-1.42.58H7.884v9.5zm8.23 0v-1h2v-8.15q-1.267-.331-2.133-1.26q-.866-.927-.866-2.206V1.385h7V10q0 1.279-.867 2.207q-.866.927-2.133 1.258v8.15h2v1zm0-16.116h5V2.385h-5z"></svg:path>`,
})
export class MaterialSymbolsLightTapasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
