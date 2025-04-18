import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSchwungIcon],svg[arcticons-schwung-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.77 20.6c2.34-1.25 10.46-5.22 19.88-5.45c6.7-.16 11.08-.73 16.79-6.09M9.32 39.69c4.88-3.93 9.02-4.39 15-4.54c10.64-.26 19.62-5.28 20.5-5.79"></svg:path>`,
})
export class ArcticonsSchwungIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
