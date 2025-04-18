import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextFirstlineLeftIcon],svg[hugeicons-text-firstline-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3.5h6m-6 6h6m-6 6h18m-18 6h18M13.586 9.914c.586.586 1.528.586 3.414.586s2.828 0 3.414-.586S21 8.386 21 6.5s0-2.828-.586-3.414S18.886 2.5 17 2.5s-2.828 0-3.414.586S13 4.614 13 6.5s0 2.828.586 3.414" color="currentColor"></svg:path>`,
})
export class HugeiconsTextFirstlineLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
