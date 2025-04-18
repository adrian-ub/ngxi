import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCheckboxCheckedIcon],svg[proicons-checkbox-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="4"></svg:rect><svg:path d="m16.512 9.107l-5.787 5.786l-3.237-3.232"></svg:path></svg:g>`,
})
export class ProiconsCheckboxCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
