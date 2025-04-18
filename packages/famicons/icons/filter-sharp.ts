import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterSharpIcon],svg[famicons-filter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 120h480v48H16zm80 112h320v48H96zm96 112h128v48H192z"></svg:path>`,
})
export class FamiconsFilterSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
