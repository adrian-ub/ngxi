import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBriefcaseIcon],svg[proicons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.75 9.894a2.5 2.5 0 0 1 2.5-2.5h11.5a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5z"></svg:path><svg:path d="M17.75 7.394H6.25a2.5 2.5 0 0 0-2.5 2.5v.303a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-.303a2.5 2.5 0 0 0-2.5-2.5M8.603 5.5a1.5 1.5 0 0 1 1.5-1.5h3.794a1.5 1.5 0 0 1 1.5 1.5v1.894H8.603z"></svg:path></svg:g>`,
})
export class ProiconsBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
