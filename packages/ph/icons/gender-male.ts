import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleIcon],svg[ph-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32h-48a8 8 0 0 0 0 16h28.69l-42.07 42.07a80 80 0 1 0 11.31 11.31L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-66.76 165.29a64 64 0 1 1 0-90.53a64.1 64.1 0 0 1 0 90.53"></svg:path>`,
})
export class PhGenderMaleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
