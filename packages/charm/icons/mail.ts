import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMailIcon],svg[charm-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 3.75h12.5v9.5H1.75z"></svg:path><svg:path d="m2.25 4.25l5.75 5l5.75-5"></svg:path></svg:g>`,
})
export class CharmMailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
