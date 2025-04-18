import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSteamlinkIcon],svg[arcticons-steamlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.59 18a7.28 7.28 0 0 0-12.24-4.34H18.67a7.3 7.3 0 0 0-5-2h0A7.3 7.3 0 0 0 6.42 18h0L4.51 33.24c-.32 3.89 6.53 4 7.81 1.32l3.09-4.9a4.32 4.32 0 0 1 3.59-2.3h10a4.24 4.24 0 0 1 3.62 2.3l3.09 4.9c1.28 2.66 8.13 2.57 7.81-1.32Z"></svg:path><svg:circle cx="13.65" cy="18.84" r="4.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.35" cy="18.84" r="4.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSteamlinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
