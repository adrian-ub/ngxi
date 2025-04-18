import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAngleIcon],svg[proicons-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.25 4.25v12.5a3 3 0 0 0 3 3h12.5"></svg:path><svg:path d="M4.25 10.356h.394a9 9 0 0 1 9 9v.394"></svg:path></svg:g>`,
})
export class ProiconsAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
