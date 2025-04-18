import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiShelter11Icon],svg[maki-shelter-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 5v3h6v2H2V5.67L1 6V4l9-3v2L4 5z" fill="currentColor"></svg:path>`,
})
export class MakiShelter11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
