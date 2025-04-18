import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSquareMarginsIcon],svg[proicons-square-margins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="3"></svg:rect><svg:path d="M7.75 3.75v16.5m8.5 0V3.75m-12.5 4h16.5m0 8.5H3.75"></svg:path></svg:g>`,
})
export class ProiconsSquareMarginsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
