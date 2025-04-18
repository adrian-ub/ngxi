import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTaxiIcon],svg[fe-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.314 5.059L9 3h6l.686 2.059A4 4 0 0 1 19 9v3a2 2 0 0 1 2 2v5a2 2 0 1 1-4 0H7a2 2 0 1 1-4 0v-5a2 2 0 0 1 2-2V9a4 4 0 0 1 3.314-3.941M9 7a2 2 0 0 0-2 2v3h10V9a2 2 0 0 0-2-2zm-3 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FeTaxiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
