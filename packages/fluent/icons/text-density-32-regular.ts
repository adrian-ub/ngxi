import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDensity32RegularIcon],svg[fluent-text-density-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zm1.5 6h7a1.5 1.5 0 0 1 0 3h-7v2h7a3.5 3.5 0 1 0 0-7h-7zm7 11h-7v-2h7a3.5 3.5 0 1 1 0 7h-7v-2h7a1.5 1.5 0 0 0 0-3M3 5a1 1 0 0 0 0 2h10.5V5zM2 26a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2zm-1-4a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2z"></svg:path>`,
})
export class FluentTextDensity32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
