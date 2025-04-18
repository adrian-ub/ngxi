import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKhanAcademyIcon],svg[arcticons-khan-academy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.017 43.5L7.03 33.764l-.017-19.5L23.982 4.5l16.989 9.736l.017 19.5Z"></svg:path><svg:circle cx="24.031" cy="16.866" r="3.689" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.754 20.98a13.703 13.703 0 1 1-27.301 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.453 20.98A13.703 13.703 0 0 1 24.18 34.681m.11-.001a13.703 13.703 0 0 1 13.464-13.7"></svg:path>`,
})
export class ArcticonsKhanAcademyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
