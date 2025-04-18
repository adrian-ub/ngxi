import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDnaIcon],svg[jam-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h8v-2H2zm.535-4h6.93A4 4 0 0 0 6 11c-1.48 0-2.773.804-3.465 2M10 5V3H2v2zm-.535 2h-6.93A4 4 0 0 0 6 9c1.48 0 2.773-.804 3.465-2m-.147 3A6 6 0 0 1 12 15v4a1 1 0 0 1-2 0H2a1 1 0 0 1-2 0v-4a6 6 0 0 1 2.682-5A6 6 0 0 1 0 5V1a1 1 0 1 1 2 0h8a1 1 0 0 1 2 0v4a6 6 0 0 1-2.682 5"></svg:path>`,
})
export class JamDnaIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
