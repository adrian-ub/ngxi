import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBIcon],svg[ls-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 0v324c53-58 132-96 216-96c152 0 275 120 275 270S440 768 288 768c-84 0-163-38-216-96v82H0V0zm215 702c115 0 207-91 207-204s-92-204-207-204S72 385 72 498s100 204 215 204"></svg:path>`,
})
export class LsBIcon {
  readonly viewBox = input("0 0 563 768")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
