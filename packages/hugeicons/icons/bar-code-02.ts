import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBarCode02Icon],svg[hugeicons-bar-code-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4v16M5 4v16M15 4v16m-7-2V6c0-.943 0-1.414.293-1.707S9.057 4 10 4s1.414 0 1.707.293S12 5.057 12 6v12c0 .943 0 1.414-.293 1.707S10.943 20 10 20s-1.414 0-1.707-.293S8 18.943 8 18m10 0V6c0-.943 0-1.414.293-1.707S19.057 4 20 4s1.414 0 1.707.293S22 5.057 22 6v12c0 .943 0 1.414-.293 1.707S20.943 20 20 20s-1.414 0-1.707-.293S18 18.943 18 18" color="currentColor"></svg:path>`,
})
export class HugeiconsBarCode02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
