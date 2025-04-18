import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCompassIcon],svg[ci-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path><svg:path d="M10.5 10.5L16 8l-2.5 5.5L8 16z"></svg:path></svg:g>`,
})
export class CiCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
