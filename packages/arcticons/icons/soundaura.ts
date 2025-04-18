import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundauraIcon],svg[arcticons-soundaura-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.41 27.5C10.99 34.09 16.93 39 24 39s13.01-4.91 14.59-11.5m-29.18-7C10.99 13.91 16.93 9 24 9s13.01 4.91 14.59 11.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 32.26c-3.73-.9-6.5-4.26-6.5-8.26s2.77-7.36 6.5-8.26m4 0c3.73.9 6.5 4.26 6.5 8.26s-2.77 7.36-6.5 8.26"></svg:path><svg:circle cx="24" cy="24" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsSoundauraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
