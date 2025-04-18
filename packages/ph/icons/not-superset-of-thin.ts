import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfThinIcon],svg[ph-not-superset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 196H71.59l29.09-32H152a60 60 0 0 0 42.07-102.73L211 42.69a4 4 0 0 0-6-5.38L188 56a59.73 59.73 0 0 0-36-12H56a4 4 0 0 0 0 8h96a51.75 51.75 0 0 1 30.6 10l-85.46 94H56a4 4 0 0 0 0 8h33.87L45 213.31a4 4 0 1 0 6 5.38L64.31 204H208a4 4 0 0 0 0-8M188.69 67.19A52 52 0 0 1 152 156h-44Z"></svg:path>`,
})
export class PhNotSupersetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
