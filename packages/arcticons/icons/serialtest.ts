import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSerialtestIcon],svg[arcticons-serialtest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.035 24.943l-3.067 3.04c-7.262 8.145 4.637 19.731 12.742 11.936l7.018-7.42c2.864-3.825 2.39-8.392-1.525-12.227l-2.29-2.353"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.848 23.922l3.543-3.404c6.122-6.74-3.862-19.95-11.72-13.104l-8.42 8.61c-2.526 2.984-2.467 7.898 2.084 12.016l2.147 2.295"></svg:path>`,
})
export class ArcticonsSerialtestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
