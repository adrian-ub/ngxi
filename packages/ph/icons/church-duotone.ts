import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChurchDuotoneIcon],svg[ph-church-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 152v64h-40v-88ZM32 216h40v-88l-40 24Z" opacity=".2"></svg:path><svg:path d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-48a8 8 0 0 1 16 0v48a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M40 156.53l24-14.4V208H40ZM128 144a24 24 0 0 0-24 24v40H80v-99.36l48-27.43l48 27.43V208h-24v-40a24 24 0 0 0-24-24m88 64h-24v-65.87l24 14.4Z"></svg:path></svg:g>`,
})
export class PhChurchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
