import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenlibIcon],svg[arcticons-openlib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.4 5v14.25l3.2-4.222l3.2 4.222V5M12 43h24a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4"></svg:path>`,
})
export class ArcticonsOpenlibIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
