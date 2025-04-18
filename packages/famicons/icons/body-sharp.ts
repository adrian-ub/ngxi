import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBodySharpIcon],svg[famicons-body-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M464 128H48v52h144l-32 325.13l51 6.87l21.65-192h47.02L301 512l51-6.98L320 180h144z"></svg:path>`,
})
export class FamiconsBodySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
