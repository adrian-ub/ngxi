import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardThinIcon],svg[ph-identification-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 112a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-4 28h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m36-84v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-88.13 111a4 4 0 1 1-7.74 2C121.06 157 109 148 96 148s-25 9-28.13 21a4 4 0 0 1-3.87 3a4 4 0 0 1-1-.13a4 4 0 0 1-2.87-4.87a36.28 36.28 0 0 1 20.43-23.66a28 28 0 1 1 30.88 0A36.2 36.2 0 0 1 131.87 167M96 140a20 20 0 1 0-20-20a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhIdentificationCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
