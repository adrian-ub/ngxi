import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCanarabankIcon],svg[arcticons-canarabank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.935 31.709l-5.675-.7L30.2 8.724l13.3 25.52l-15.178-1.871"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.211 24.763L4.5 27.055l15.366 12.221l13.12-16.983l-8.939 1.494"></svg:path>`,
})
export class ArcticonsCanarabankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
