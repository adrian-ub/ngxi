import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfLightIcon],svg[ph-not-superset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 194H76.11l25.45-28H152a62 62 0 0 0 44.81-104.78L212.44 44a6 6 0 1 0-8.88-8l-15.83 17.38A61.6 61.6 0 0 0 152 42H56a6 6 0 0 0 0 12h96a49.67 49.67 0 0 1 27.59 8.33L96.25 154H56a6 6 0 0 0 0 12h29.35l-41.79 46a6 6 0 0 0 8.88 8l12.76-14H208a6 6 0 0 0 0-12M188.73 70.12A50 50 0 0 1 152 154h-39.53Z"></svg:path>`,
})
export class PhNotSupersetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
