import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCheckboxIndeterminateIcon],svg[carbon-checkbox-indeterminate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h12v4H10z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"></svg:path>`,
})
export class CarbonCheckboxIndeterminateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
