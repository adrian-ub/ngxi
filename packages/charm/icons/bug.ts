import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBugIcon],svg[charm-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="10" r="4.25"></svg:circle><svg:path d="M14.25 10.25h-1.5m-1 2.5l1.5 1.5m0-8.5l-1.5 1.5m-10 3h1.5m1 2.5l-1.5 1.5m0-8.5l1.5 1.5m1.5-1.5s-.75-3 2.25-3s2.25 3 2.25 3"></svg:path></svg:g>`,
})
export class CharmBugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
