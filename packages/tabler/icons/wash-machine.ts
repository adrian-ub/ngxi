import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashMachineIcon],svg[tabler-wash-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path d="M8 14a4 4 0 1 0 8 0a4 4 0 1 0-8 0m0-8h.01M11 6h.01M14 6h2"></svg:path><svg:path d="M8 14q2-1 4 0t4 0"></svg:path></svg:g>`,
})
export class TablerWashMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
