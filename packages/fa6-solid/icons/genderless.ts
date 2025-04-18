import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidGenderlessIcon],svg[fa6-solid-genderless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 144a112 112 0 1 1 0 224a112 112 0 1 1 0-224m0 288a176 176 0 1 0 0-352a176 176 0 1 0 0 352"></svg:path>`,
})
export class Fa6SolidGenderlessIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
