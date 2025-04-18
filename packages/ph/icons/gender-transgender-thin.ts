import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderThinIcon],svg[ph-gender-transgender-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-48a4 4 0 0 0 0 8h38.34L168 82.35l-21.17-21.17a4 4 0 1 0-5.66 5.65L162.34 88l-21.17 21.18a68.16 68.16 0 1 0 5.65 5.66L168 93.67l21.17 21.17a4 4 0 1 0 5.66-5.66L173.66 88L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-77.57 166.45A60 60 0 1 1 156 160a60.07 60.07 0 0 1-17.57 42.45"></svg:path>`,
})
export class PhGenderTransgenderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
