import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundIcon],svg[hugeicons-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 14C9.375 16.917 7.5 19.833 5 21h11.875S18.75 21 20 19.833M15 14H4m14-5.5a5.5 5.5 0 1 0-5.5 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
