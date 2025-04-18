import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPrintAlt9Icon],svg[marketeq-print-alt-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 33.333H8.333A2.083 2.083 0 0 1 6.25 31.25V14.583A2.083 2.083 0 0 1 8.333 12.5h33.334a2.083 2.083 0 0 1 2.083 2.083V31.25a2.083 2.083 0 0 1-2.083 2.083H37.5M16.667 6.25h16.666"></svg:path><svg:path stroke="#344054" d="M37.5 20.833h-25V43.75h25z"></svg:path><svg:path stroke="#344054" d="m20.833 33.333l2.084 2.084l6.25-6.25"></svg:path></svg:g>`,
})
export class MarketeqPrintAlt9Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
