import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRadioListLineIcon],svg[majesticons-radio-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10m-10 7h10m-10 7h10"></svg:path><svg:circle cx="5" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="12" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle></svg:g>`,
})
export class MajesticonsRadioListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
