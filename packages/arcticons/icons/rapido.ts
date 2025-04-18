import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRapidoIcon],svg[arcticons-rapido-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4.877a1.237 1.237 0 1 1 .029 1.749a1.237 1.237 0 0 1-.03-1.75m25.001.001a1.237 1.237 0 1 1-1.748-.03a1.237 1.237 0 0 1 1.749.03M16.74 34.523c-.107-11.532 14.26-11.3 14.62 0m-14.62 0V15.658m0 0h14.62m0 0v18.865m-7.552-5.901l.006 14.878"></svg:path><svg:circle cx="23.876" cy="10.209" r="2.229" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsRapidoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
