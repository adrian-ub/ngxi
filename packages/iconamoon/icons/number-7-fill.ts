import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber7FillIcon],svg[iconamoon-number-7-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 .936 1.351l-6 16a1 1 0 0 1-1.872-.702L14.557 5H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber7FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
