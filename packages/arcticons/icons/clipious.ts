import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClipiousIcon],svg[arcticons-clipious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41 24L9 8v32l24-12l-17-8v9"></svg:path>`,
})
export class ArcticonsClipiousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
