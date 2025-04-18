import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTypesIcon],svg[carbon-types-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 16l-8 8l-1.414-1.414L27.172 16l-6.586-6.586L22 8z"></svg:path><svg:path fill="currentColor" d="M16 22a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22m-3.586-6L16 19.586L19.586 16L16 12.414Z"></svg:path><svg:path fill="currentColor" d="m2 16l8-8l1.414 1.414L4.828 16l6.586 6.586L10 24z"></svg:path>`,
})
export class CarbonTypesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
