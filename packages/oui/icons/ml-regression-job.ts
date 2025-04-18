import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMlRegressionJobIcon],svg[oui-ml-regression-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 0a8 8 0 1 1-4.906 14.32l-4.774 4.774a8 8 0 1 1-1.414-1.414l4.774-4.774A8 8 0 0 1 24 0M8 18a6 6 0 1 0 0 12a6 6 0 0 0 0-12M24 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path><svg:path fill="currentColor" d="M32 20v12H20V20zm-2 2h-8v8h8zM12 0v12H0V0zm-2 2H2v8h8z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiMlRegressionJobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
