import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoveToIcon],svg[hugeicons-move-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5h10M5 5h.009M5 11.004h.009M5 17.007h.009M9 11.004h10M9 17.007h10m0 0c.003-.26-.18-.518-.404-.707l-1.602-1.274M19 17.007c-.003.252-.186.506-.404.708L16.994 19" color="currentColor"></svg:path>`,
})
export class HugeiconsMoveToIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
