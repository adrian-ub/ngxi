import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFludIcon],svg[arcticons-flud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.66 4.5c0 4.09-13 15.8-13 25.58s7.67 13.42 13 13.42c4.77 0 13.64-2 13.64-12.62c0-11.6-13.64-18.53-13.64-26.38"></svg:path>`,
})
export class ArcticonsFludIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
