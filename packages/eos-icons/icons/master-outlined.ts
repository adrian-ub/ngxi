import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsMasterOutlinedIcon],svg[eos-icons-master-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20h18v2H3zm18-1H3L2.147 7.81A2 2 0 1 1 5 6a2 2 0 0 1-.024.3l2.737 2.189l2.562-4.486A1.95 1.95 0 0 1 10 3a2 2 0 0 1 4 0a1.95 1.95 0 0 1-.276 1.004l2.558 4.485l2.741-2.19A2 2 0 0 1 19 6a2 2 0 1 1 2.853 1.81ZM4.92 17h14.16l.73-8.77l-4.106 3.281L12 5.017l-3.71 6.494l-4.1-3.28Z"></svg:path>`,
})
export class EosIconsMasterOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
