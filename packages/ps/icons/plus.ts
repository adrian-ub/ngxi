import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPlusIcon],svg[ps-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 213h150v150q0 21 21 21t21-21V213h150q21 0 21-21t-21-21H213V21q0-21-21-21t-21 21v150H21q-21 0-21 21t21 21"></svg:path>`,
})
export class PsPlusIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
