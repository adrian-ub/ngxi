import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSocialIcon],svg[arcticons-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.211 37.789A19.5 19.5 0 0 1 24 4.5m13.789 5.711A19.5 19.5 0 0 1 24 43.5"></svg:path><svg:circle cx="34.804" cy="8.98" r="3.162" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.196" cy="39.02" r="3.162" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.872 20.299l3.163 6.325l10.54-1.054l-6.324-12.65Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.872 20.299l-4.216 2.108c-1.267.633-1.16 2.95-.527 4.217s2.423 2.741 3.69 2.108l4.216-2.108m-.932.538l2.635 5.27l-2.108 1.054l-2.635-5.27"></svg:path>`,
})
export class ArcticonsSocialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
