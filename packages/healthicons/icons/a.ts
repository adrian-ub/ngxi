import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAIcon],svg[healthicons-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 10a2 2 0 0 1 1.846 1.23l7.483 17.96l.035.084l2.482 5.957a2 2 0 0 1-3.692 1.538L30.167 32H17.833l-1.987 4.77a2 2 0 0 1-3.692-1.54l2.482-5.956l.035-.085l7.483-17.958A2 2 0 0 1 24 10m-4.5 18h9L24 17.2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
