import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfBoldIcon],svg[ph-not-superset-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 188H89.67l14.55-16H152a68 68 0 0 0 52.86-110.71l12-13.22a12 12 0 0 0-17.76-16.14l-12.4 13.63A67.6 67.6 0 0 0 152 36H56a12 12 0 0 0 0 24h96a43.7 43.7 0 0 1 18.06 3.89L93.6 148H56a12 12 0 0 0 0 24h15.78l-32.66 35.93a12 12 0 1 0 17.76 16.14l11-12.07H208a12 12 0 0 0 0-24M188.44 79.36A44 44 0 0 1 152 148h-26Z"></svg:path>`,
})
export class PhNotSupersetOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
