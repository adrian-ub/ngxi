import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmIdIcon],svg[charm-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 2.75h12.5v10.5H1.75z"></svg:path><svg:circle cx="8" cy="7.5" r="2.25"></svg:circle><svg:path d="M4.75 12.75c0-1 .75-3 3.25-3s3.25 2 3.25 3"></svg:path></svg:g>`,
})
export class CharmIdIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
