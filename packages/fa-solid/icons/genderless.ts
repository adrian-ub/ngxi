import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidGenderlessIcon],svg[fa-solid-genderless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80s-80-35.9-80-80s35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144"></svg:path>`,
})
export class FaSolidGenderlessIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
