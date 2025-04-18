import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMetacafeIcon],svg[ps-metacafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m421 462l-68-49l-68 49l26-79l-67-49h83l26-79l26 79h83l-67 49zm-129-73l-99-71h122l38-116q32 99 38 116h65L353 2l-83 254H2l269 196q4-12 8.5-25t8-24.5T292 389"></svg:path>`,
})
export class PsMetacafeIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
