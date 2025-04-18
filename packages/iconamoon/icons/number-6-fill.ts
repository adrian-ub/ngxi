import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6FillIcon],svg[iconamoon-number-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.532 3.153a1 1 0 0 1 .315 1.379l-2.858 4.553a6 6 0 1 1-4.05 2.691l5.214-8.308a1 1 0 0 1 1.379-.315M12 11a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
