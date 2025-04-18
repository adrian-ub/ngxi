import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsFillIcon],svg[ph-text-columns-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 184H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 96h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhTextColumnsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
