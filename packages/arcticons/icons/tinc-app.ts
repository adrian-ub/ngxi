import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTincAppIcon],svg[arcticons-tinc-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.898 32.213l-4.066-16.426M15.926 31.265l16.149 4.664m-5.351-21.614L14.639 26.071"></svg:path><svg:ellipse cx="37.183" cy="37.404" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.317" ry="5.356"></svg:ellipse><svg:ellipse cx="30.547" cy="10.596" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.317" ry="5.356"></svg:ellipse><svg:ellipse cx="10.817" cy="29.789" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.317" ry="5.356"></svg:ellipse>`,
})
export class ArcticonsTincAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
