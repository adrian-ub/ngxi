import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideIcon],svg[ph-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m0 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDivideIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
