import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRulerLineIcon],svg[ri-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.343 14.728l-2.828 2.829l3.535 3.535L20.485 7.657L16.95 4.121l-2.121 2.122l1.414 1.414l-1.414 1.414l-1.415-1.414l-2.121 2.121l2.121 2.122L12 13.314l-2.12-2.121l-2.122 2.12l1.415 1.415l-1.415 1.414zM17.657 2l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415L16.243 2a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class RiRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
