import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsEditLocationIcon],svg[bxs-edit-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8M9.799 14.987H8v-1.799l4.977-4.97l1.799 1.799zm5.824-5.817l-1.799-1.799L15.196 6l1.799 1.799z"></svg:path>`,
})
export class BxsEditLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
