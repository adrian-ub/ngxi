import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRecycleIcon],svg[tabler-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 17l-2 2l2 2"></svg:path><svg:path d="M10 19h9a2 2 0 0 0 1.75-2.75l-.55-1M8.536 11l-.732-2.732L5.072 9"></svg:path><svg:path d="m7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.024M15.464 11l2.732.732L18.928 9"></svg:path><svg:path d="m18.196 11.732l-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976"></svg:path></svg:g>`,
})
export class TablerRecycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
