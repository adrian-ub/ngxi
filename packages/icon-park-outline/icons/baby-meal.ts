import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBabyMealIcon],svg[icon-park-outline-baby-meal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 6H10a5 5 0 0 0-5 5v26a5 5 0 0 0 5 5h20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 6v17.524L5 28m14-4l12 4"></svg:path><svg:path stroke-linecap="round" d="M37 18v24"></svg:path><svg:path d="M31 13.333C31 7.111 35 4 37 4s6 3.111 6 9.333c0 6.223-12 6.223-12 0Z"></svg:path></svg:g>`,
})
export class IconParkOutlineBabyMealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
