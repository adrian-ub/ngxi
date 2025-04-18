import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonShare1FillIcon],svg[iconamoon-share-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 2a3 3 0 0 0-2.947 3.562l-7.114 4.15a3 3 0 1 0 0 4.578l7.114 4.148Q15 18.712 15 19a3 3 0 1 0 1.06-2.289l-7.113-4.15a3 3 0 0 0 0-1.123l7.114-4.15A3 3 0 1 0 18 2" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonShare1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
