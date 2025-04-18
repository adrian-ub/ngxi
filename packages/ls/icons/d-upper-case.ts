import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDUpperCaseIcon],svg[ls-d-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h254c82 0 157 26 218 71c90 67 149 174 149 296c0 121-59 228-149 296c-61 45-136 72-218 72H0zm71 663h189c161-4 290-135 290-296c0-162-129-293-290-296H71z"></svg:path>`,
})
export class LsDUpperCaseIcon {
  readonly viewBox = input("0 0 621 735")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
