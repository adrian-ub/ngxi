import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNavigationArrowFilledIcon],svg[tdesign-navigation-arrow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.764l9.946 19.892L12 18.548l-9.946 3.108z"></svg:path>`,
})
export class TdesignNavigationArrowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
