import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCarIcon],svg[fe-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18v-5a2 2 0 0 1 2-2V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3a2 2 0 0 1 2 2v5a2 2 0 1 1-4 0H7a2 2 0 1 1-4 0M9 6a2 2 0 0 0-2 2v3h10V8a2 2 0 0 0-2-2zm-3 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FeCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
