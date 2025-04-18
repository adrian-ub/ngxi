import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDotTicketsIcon],svg[arcticons-dot-tickets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-7.988 13.226h3.494m0 10.548V18.726"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 29.274V18.726h2.373a4.615 4.615 0 0 1 4.615 4.615v1.318a4.615 4.615 0 0 1-4.615 4.615z"></svg:path><svg:rect width="6.988" height="10.549" x="20.939" y="18.726" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.65" ry="2.65"></svg:rect>`,
})
export class ArcticonsDotTicketsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
