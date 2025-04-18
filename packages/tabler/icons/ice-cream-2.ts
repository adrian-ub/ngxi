import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIceCream2Icon],svg[tabler-ice-cream-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 11a6 6 0 1 0-11.315 0m0 0L12 22l5.657-11z"></svg:path>`,
})
export class TablerIceCream2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
