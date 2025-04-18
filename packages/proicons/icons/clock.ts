import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsClockIcon],svg[proicons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 12a9.25 9.25 0 1 1-18.5 0a9.25 9.25 0 0 1 18.5 0"></svg:path><svg:path d="M11.25 6.75v6h4"></svg:path></svg:g>`,
})
export class ProiconsClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
