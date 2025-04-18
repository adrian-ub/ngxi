import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSortingUpIcon],svg[hugeicons-sorting-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8.5H6m15 4H3m13 9v-6m0 0l2 2m-2-2l-2 2m-2-9v-6m0 0l2 2m-2-2l-2 2m-2 17v-6m0 0l2 2m-2-2l-2 2" color="currentColor"></svg:path>`,
})
export class HugeiconsSortingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
