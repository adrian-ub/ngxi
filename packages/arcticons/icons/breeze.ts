import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBreezeIcon],svg[arcticons-breeze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 5.5C29.851 5.5 35 10.649 35 17s-5.149 11.5-11.5 11.5H13a7 7 0 1 0 0 14h17.5C36.851 42.5 42 37.351 42 31s-5.149-11.5-11.5-11.5H13a7 7 0 1 1 0-14z"></svg:path>`,
})
export class ArcticonsBreezeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
