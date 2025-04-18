import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugLineByLineIcon],svg[codicon-debug-line-by-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 10V9h9v1zm4-4h5v1h-5zm5-3v1H6V3zm-9 9v1h9v-1z"></svg:path><svg:path fill-rule="evenodd" d="m1 2.795l.783-.419l5.371 3.581v.838l-5.371 3.581L1 9.957zm1.007.94v5.281l3.96-2.64z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconDebugLineByLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
