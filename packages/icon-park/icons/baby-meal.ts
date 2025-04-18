import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyMealIcon],svg[icon-park-baby-meal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 6H10C7.23858 6 5 8.23858 5 11V37C5 39.7614 7.23858 42 10 42H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 6V23.5238L5 28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 24L31 28"></svg:path><svg:path stroke-linecap="round" d="M37 18V42"></svg:path><svg:path fill="#2F88FF" d="M31 13.3333C31 7.11111 35 4 37 4C39 4 43 7.11111 43 13.3333C43 19.5556 31 19.5556 31 13.3333Z"></svg:path></svg:g>`,
})
export class IconParkBabyMealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
