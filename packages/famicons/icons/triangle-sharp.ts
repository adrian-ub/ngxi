import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsTriangleSharpIcon],svg[famicons-triangle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32L20 464h472z"></svg:path>`,
})
export class FamiconsTriangleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
