import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBreadSliceOutlineIcon],svg[flowbite-bread-slice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19v-9c-1.5 0-2-1.5-2-2.5s.5-2 2-2.5c2.364-.643 4.2-.976 6-.989c1.8.013 3.636.346 6 .989c1.5.5 2 1.5 2 2.5s-.5 2.5-2 2.5v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"></svg:path>`,
})
export class FlowbiteBreadSliceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
