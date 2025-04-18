import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber2FillIcon],svg[iconamoon-number-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.121 5.879A3 3 0 0 0 9 8a1 1 0 0 1-2 0a5 5 0 1 1 8.535 3.535L9.88 17.193A3 3 0 0 0 9.016 19H16a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1v-.686a5 5 0 0 1 1.464-3.536l5.657-5.657a3 3 0 0 0 0-4.242" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
