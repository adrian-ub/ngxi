import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMercurygramIcon],svg[arcticons-mercurygram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.305 24.762c6.592-.235 8.514-3.06 8.886-8.46H16.764"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.191 16.3c5.933-.168 8.362-4 8.308-8.993l-31.544.125c-3.922.316-5.426 2.701-5.392 4.636L5.5 40.694c7.38-.104 7.803-4.024 7.885-9.129c3.364-.127 6.342.318 8.45-.707c2.11-1.024 3.401-2.721 3.47-6.095l-10.748-.183"></svg:path>`,
})
export class ArcticonsMercurygramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
