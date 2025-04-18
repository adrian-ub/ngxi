import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTramIcon],svg[hugeicons-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 2h9m5 0h-5m0 0l-2 3M8 20l-1 2m9-2l1 2M5 13v-1c0-3.3 0-4.95 1.025-5.975S8.7 5 12 5s4.95 0 5.975 1.025S19 8.7 19 12v1c0 3.3 0 4.95-1.025 5.975S15.3 20 12 20s-4.95 0-5.975-1.025S5 16.3 5 13"></svg:path><svg:path d="M5 14s3.267 1 7 1s7-1 7-1m-2.5 3h2m-13-9h13m-13 9h2"></svg:path></svg:g>`,
})
export class HugeiconsTramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
