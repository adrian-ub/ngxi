import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplaneTakeOff02Icon],svg[hugeicons-airplane-take-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.012 20H22m-1.19-8.7c.424-1 .923-3.2 1.098-3.8c.05-.3.12-.55.044-.75c-.044-.25-.244-.465-.668-.655c-.15-.045-1.573-.505-1.797-.38c-.1.01-.4.135-.624.36c-.3.3-.899 1.15-1.323 1.4c-.175.103-.45.325-1.024.15c-.394-.102-2.146-.98-2.745-1.275c-.475-.234-2.998-1.465-3.32-1.6c-.898-.525-4.168-1.75-7.328.855c-.335.345-1.333 1.145-1.083 1.82s.649.668 1.273.85a409 409 0 0 0 4.193 1.15c.474.125.599.15.848.375c.2.18.325.525.6 1.1c.2.325.532 1.067.648 1.275c.117.209.225.45.45.675c.15.15.4.313.574.4c.3.15 2.121.6 2.695.75c.3 0 .51-.225.51-.425c.015-.2-.252-1.2-.32-1.625c-.04-.25-.165-.625-.14-.775c.05-.3.974.106 1.173.15c.225.05 3.395.925 3.82 1s1.197.225 1.771-.15c.375-.275.525-.55.674-.875" color="currentColor"></svg:path>`,
})
export class HugeiconsAirplaneTakeOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
