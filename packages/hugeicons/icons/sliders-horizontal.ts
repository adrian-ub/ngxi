import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSlidersHorizontalIcon],svg[hugeicons-sliders-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h6m3 0h7m-4 4v6M10 2v6m2 8v6m4-10h4M4 12h9m-1 7h8M4 19h5" color="currentColor"></svg:path>`,
})
export class HugeiconsSlidersHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
