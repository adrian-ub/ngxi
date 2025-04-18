import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChampagneGlassesOutlineIcon],svg[flowbite-champagne-glasses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 15a3 3 0 0 0 3-3V6H4v6a3 3 0 0 0 3 3m0 0v5m-2 0h4M4 9h6m6.608 4.486a3 3 0 0 0 1.94-3.773L16.712 4L11 5.835l1.835 5.712a3 3 0 0 0 3.773 1.94m0 0l1.53 4.76m-1.905.612l3.808-1.223m-8.124-8.944l5.713-1.835"></svg:path>`,
})
export class FlowbiteChampagneGlassesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
