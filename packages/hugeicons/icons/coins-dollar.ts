import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoinsDollarIcon],svg[hugeicons-coins-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M3.157 11A7.111 7.111 0 0 0 13 20.843"></svg:path><svg:path d="M15.771 8.205c-.216-.912-1.316-1.735-2.637-1.12c-1.321.616-1.531 2.598.467 2.808c.903.095 1.492-.11 2.03.471c.54.581.64 2.198-.738 2.634s-2.742-.245-2.891-1.212m1.984-5.782v.87m0 6.258v.872"></svg:path></svg:g>`,
})
export class HugeiconsCoinsDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
