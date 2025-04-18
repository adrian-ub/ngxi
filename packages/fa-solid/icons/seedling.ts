import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidSeedlingIcon],svg[fa-solid-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96m384-64c-84.2 0-157.4 46.5-195.7 115.2c27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32z"></svg:path>`,
})
export class FaSolidSeedlingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
