import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatesIcon],svg[hugeicons-dates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.964 5.996c.373 1.843-.837 4.502-4.008 3.915m.877-2.844c.893-1.049 3.061-1.48 5.634-.6c1.113.306 3.514 1.495 4.617 2.373c1.345.895 3.261 2.794 3.761 4.768c.546 1.819-.3 4.56-2.957 6.358c-2.54 1.72-6.1 1.764-9.556-3.596c-.128 0-4.102-6.466-1.499-9.303"></svg:path><svg:path d="M2 14.081c2.059-.414 4.4.844 3.998 3.915m10.94-10.19c0-.189-.411-1.147-.817-1.646c-1.828-2.632-4.54-3.58-6.444-2.99c-1.976.494-3.866 2.335-4.765 3.678c-1.063 1.291-2.12 3.506-2.428 4.618c-.888 2.57-.474 4.793.572 5.689c.685.638 2.865 1.531 6.102 0"></svg:path><svg:path d="M11.002 13.021s0 1.224 1.217 1.223s1.218 1.224 1.218 1.224m.575-5.47s0 1.223 1.217 1.223s1.218 1.223 1.218 1.223m-.88 2.107s0 1.224 1.218 1.223s1.217 1.223 1.217 1.223"></svg:path></svg:g>`,
})
export class HugeiconsDatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
