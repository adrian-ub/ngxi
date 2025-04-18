import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoFoodIcon],svg[guidance-no-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 6.5h16v.25l-.168.434c-1.425 3.681-2.322 8.12-2.668 12.316l-.01.155M14 23.5h5.5v-.155q0-.663.021-1.345M17.5 6.5V6A5.5 5.5 0 0 1 23 .5M.5.5l19.155 19.155M23.5 23.5l-3.845-3.845M1.5 17.5v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1zm.5 0h9a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3Zm-.5 3v3h10v-3z"></svg:path>`,
})
export class GuidanceNoFoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
