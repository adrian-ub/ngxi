import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGlassesIcon],svg[charm-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="4" cy="11" r="2.25"></svg:circle><svg:circle cx="12" cy="11" r="2.25"></svg:circle><svg:path d="M14.25 10.75c-1.5-6-2-6.5-3.5-7m-9 7c1.5-6 2-6.5 3.5-7m1 7c1-1 2.5-1 3.5 0"></svg:path></svg:g>`,
})
export class CharmGlassesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
