import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeartbreakIcon],svg[hugeicons-heartbreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 16l1.5-2.5l-2-2l3-2.5L12 5s.458-.499 1.034-.932c1.406-1.056 3.747-1.719 6.429-.074c3.519 2.159 4.315 9.28-3.802 15.29C14.114 20.427 13.34 21 12 21s-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994C6.431 2.832 8.155 2.822 9.5 3.288" color="currentColor"></svg:path>`,
})
export class HugeiconsHeartbreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
