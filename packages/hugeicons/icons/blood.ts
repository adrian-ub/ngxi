import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBloodIcon],svg[hugeicons-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.5 15.5C3.288 14.617 2 12.433 2 10.175C2 7.245 4.317 4.35 5.943 2.68c.883-.908 2.23-.908 3.114 0c.492.505.908 1.122 1.443 1.819M8 14.926c0-3.556 2.949-7.07 5.019-9.1c1.124-1.101 2.838-1.101 3.962 0c2.07 2.03 5.019 5.544 5.019 9.1C22 18.413 19.35 22 15 22s-7-3.587-7-7.074"></svg:path><svg:path d="M18.5 15.5c0 2.21-1.5 3-3 3"></svg:path></svg:g>`,
})
export class HugeiconsBloodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
