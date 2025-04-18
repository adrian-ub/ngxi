import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwimmingCapIcon],svg[hugeicons-swimming-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.206 13.5c1.411-2.594.9-5.996-1.206-8m14.794 8c-1.411-2.594-.9-5.996 1.206-8"></svg:path><svg:path d="M3.846 13.5h16.308c1.461 0 1.957-.314 1.826-1.81C21.54 6.67 17.234 2.5 12 2.5s-9.54 4.17-9.98 9.19c-.13 1.496.365 1.81 1.826 1.81M4 19c0-1.537 2.119-1.886 3.233-2.331c1.575-.63 3.267.578 3.267 2.331s-1.692 2.96-3.267 2.331C6.12 20.886 4 20.537 4 19m0 0H2m18 0c0-1.537-2.119-1.886-3.233-2.331c-1.575-.63-3.267.578-3.267 2.331s1.692 2.96 3.267 2.331C17.88 20.886 20 20.537 20 19m0 0h2m-11.5-.5c.3-.598.859-1 1.5-1s1.2.402 1.5 1"></svg:path></svg:g>`,
})
export class HugeiconsSwimmingCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
