import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceIcon],svg[ix-maintenance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.667c70.692 0 128 57.308 128 128c0 12.931-1.918 25.414-5.484 37.181l133.484 133.486c23.564 23.564 23.564 61.769 0 85.333s-61.77 23.564-85.333 0L207.848 293.183c-11.767 3.566-24.25 5.484-37.181 5.484c-70.692 0-128-57.308-128-128c0-13.642 2.134-26.786 6.087-39.115L109.302 192l60.014-19.987l2.68-2.68L192 109.375L131.382 48.81c12.378-3.988 25.58-6.142 39.285-6.142"></svg:path>`,
})
export class IxMaintenanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
