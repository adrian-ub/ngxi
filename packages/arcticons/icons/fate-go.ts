import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFateGoIcon],svg[arcticons-fate-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.544 9.044L24 3.5L10.333 17.167L24 30.833l13.667-13.666l-5.545-5.545"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.166l13.667 13.667L24 44.5L10.333 30.833zm7.198-4.62l1.848-1.848"></svg:path>`,
})
export class ArcticonsFateGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
