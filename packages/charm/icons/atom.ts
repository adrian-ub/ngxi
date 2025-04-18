import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmAtomIcon],svg[charm-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:ellipse cx="11.3" rx="8.28" ry="3.17" transform="rotate(45)"></svg:ellipse><svg:ellipse cy="11.3" rx="8.28" ry="3.17" transform="rotate(315)"></svg:ellipse></svg:g>`,
})
export class CharmAtomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
