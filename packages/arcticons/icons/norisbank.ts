import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNorisbankIcon],svg[arcticons-norisbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.15 2.58C17.93 4.448 8.257 13.448 6.407 20.387M26.514 2.646c-4.774 2.45-13.505 12.4-13.827 21.99M30.168 3.399c-5.327 3.028-12.406 13.246-11.2 25.484"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.063 4.499c-5.88 3.609-10.549 13.744-7.815 28.632"></svg:path>`,
})
export class ArcticonsNorisbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
