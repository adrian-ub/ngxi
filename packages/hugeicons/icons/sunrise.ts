import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunriseIcon],svg[hugeicons-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 6.5C9.992 5.994 11.3 4 12 4m2.5 2.5C14.008 5.994 12.7 4 12 4m0 0v6m6.363.636L16.95 12.05M3 17h2m.637-6.364L7.05 12.05M21 17h-2m2 3H3m13-3a4 4 0 0 0-8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSunriseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
