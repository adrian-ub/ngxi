import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideTransition20RegularIcon],svg[fluent-slide-transition-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4zM12 5v10H9V5zm1 10V5h2.25c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 15zm-5 0H6V5h2zM5 5v10h-.25A1.75 1.75 0 0 1 3 13.25v-6.5C3 5.784 3.784 5 4.75 5z"></svg:path>`,
})
export class FluentSlideTransition20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
