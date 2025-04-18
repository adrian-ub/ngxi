import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextFirstlineRightIcon],svg[hugeicons-text-firstline-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 3.5h6m-6 6h6m-18 6h18m-18 6h18M3.586 9.914c.586.586 1.528.586 3.414.586s2.828 0 3.414-.586S11 8.386 11 6.5s0-2.828-.586-3.414S8.886 2.5 7 2.5s-2.828 0-3.414.586S3 4.614 3 6.5s0 2.828.586 3.414" color="currentColor"></svg:path>`,
})
export class HugeiconsTextFirstlineRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
