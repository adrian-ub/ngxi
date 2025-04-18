import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPrimitiveDotIcon],svg[octicon-primitive-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4z" fill="currentColor"></svg:path>`,
})
export class OcticonPrimitiveDotIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
