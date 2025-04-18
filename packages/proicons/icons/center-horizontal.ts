import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCenterHorizontalIcon],svg[proicons-center-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.25 20.25V3.75m-16.5 16.5V3.75"></svg:path><svg:rect width="6" height="13" rx="2" transform="matrix(-1 0 0 1 15 5.5)"></svg:rect></svg:g>`,
})
export class ProiconsCenterHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
