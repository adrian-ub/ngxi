import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoClassesIcon],svg[arcticons-go-classes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.75 24c0 5.937-4.814 10.75-10.75 10.75S13.25 29.937 13.25 24S18.061 13.25 24 13.25a10.75 10.75 0 0 1 9.304 5.375h11.51A21.5 21.5 0 0 0 24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5S45.5 35.874 45.5 24H24v10.75"></svg:path>`,
})
export class ArcticonsGoClassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
