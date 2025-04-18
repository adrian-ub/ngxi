import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNuclearIcon],svg[arcticons-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.45 24a6.45 6.45 0 0 0-3.225-5.586L34.75 5.38A21.5 21.5 0 0 1 45.5 24zm-9.675 5.586a6.45 6.45 0 0 0 6.45 0L34.75 42.62a21.5 21.5 0 0 1-21.5 0zm0-11.172A6.45 6.45 0 0 0 17.55 24H2.5A21.5 21.5 0 0 1 13.25 5.38z"></svg:path>`,
})
export class ArcticonsNuclearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
