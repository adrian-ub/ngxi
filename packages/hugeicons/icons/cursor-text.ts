import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorTextIcon],svg[hugeicons-cursor-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 17l-1.929-4.5M3 17l1.929-4.5m0 0l2.094-4.887C7.213 7.172 7.547 7 8 7s.788.172.977.613l2.094 4.887m-6.142 0h6.142M16 3c.833-.007 2 .5 2.5 1.5m0 0C19 3.5 20.167 3 21 3m-2.5 1.5v15M21 21c-.833.007-2-.5-2.5-1.5m0 0c-.5 1-1.667 1.5-2.5 1.5m4-9h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
