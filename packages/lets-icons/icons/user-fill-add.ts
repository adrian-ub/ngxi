import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserFillAddIcon],svg[lets-icons-user-fill-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M13.325 15.076Q12.668 15.001 12 15c-1.981 0-3.907.508-5.479 1.447c-1.22.728-2.174 1.684-2.78 2.771c-.275.494.055 1.072.607 1.187c3.509.732 7.096.954 10.652.669V21h-1a3 3 0 0 1-.675-5.924" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2.5" d="M18 14v8m4-4h-8"></svg:path><svg:circle cx="12" cy="8" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsUserFillAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
