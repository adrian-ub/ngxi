import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfLightIcon],svg[ph-superset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 200a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-62-46H56a6 6 0 0 0 0 12h96a62 62 0 0 0 0-124H56a6 6 0 0 0 0 12h96a50 50 0 0 1 0 100"></svg:path>`,
})
export class PhSupersetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
