import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteGoToPrevCellOutlineIcon],svg[flowbite-go-to-prev-cell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3a1 1 0 0 0 1 1h9.5M3 15v-4m0 4h9m-9-4V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5zm5 0v8m4-8v8m5.9-1.1L16 16m0 0l1.9-1.9M16 16h5"></svg:path>`,
})
export class FlowbiteGoToPrevCellOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
