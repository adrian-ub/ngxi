import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBonfireBrokenIcon],svg[solar-bonfire-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 15L4 22m0-7l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2"></svg:path><svg:path d="M6 8.86C6 13.772 9.733 15 11.6 15c.956 0 2.34-.246 3.577-.96m1.92-1.803c.551-.86.903-1.967.903-3.377c0-3.126-2.001-5.36-3.81-6.64c-.818-.578-1.837.057-1.837 1.045v.223c0 .996-.428 2.814-1.617 3.57c-.607.386-1.263-.192-1.336-.896l-.061-.58c-.07-.672-.77-1.08-1.32-.67a5.2 5.2 0 0 0-1.335 1.454"></svg:path></svg:g>`,
})
export class SolarBonfireBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
