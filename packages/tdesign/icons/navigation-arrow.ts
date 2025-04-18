import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNavigationArrowIcon],svg[tdesign-navigation-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.764l9.946 19.892L12 18.548l-9.946 3.108zm0 4.472L5.946 18.344L12 16.452l6.054 1.892z"></svg:path>`,
})
export class TdesignNavigationArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
