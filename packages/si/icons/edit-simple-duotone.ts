import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditSimpleDuotoneIcon],svg[si-edit-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M19.92 5.777L18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536L4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 5.777L18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536L4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"></svg:path></svg:g>`,
})
export class SiEditSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
