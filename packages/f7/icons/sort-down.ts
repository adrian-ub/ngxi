import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SortDownIcon],svg[f7-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.172 10a2 2 0 0 1 2 2v27.2l3.785-3.786a2 2 0 0 1 2.828 2.829l-7.07 7.07l-.122.113l-.128.1a2 2 0 0 1-2.63-.038l-.178-.174l-7.071-7.071a2 2 0 0 1 2.828-2.829l3.758 3.758V12a2 2 0 0 1 2-2M31 28a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4zm8-8a2 2 0 1 1 0 4H23a2 2 0 1 1 0-4zm8-8a2 2 0 1 1 0 4H23a2 2 0 1 1 0-4z"></svg:path>`,
})
export class F7SortDownIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
