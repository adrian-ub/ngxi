import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFunctionOffIcon],svg[tabler-function-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 15.5v.25c0 .69.56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374-1.244L12 12m.363-3.63l.013-.126A1.38 1.38 0 0 1 13.75 7c.69 0 1.25.56 1.25 1.25v.25"></svg:path><svg:path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405M9 12h3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerFunctionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
