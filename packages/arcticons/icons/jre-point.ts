import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrePointIcon],svg[arcticons-jre-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.94 13.02c-4.413-4.413-11.08-5.74-16.872-3.34a15.5 15.5 0 0 0 0 28.64c5.792 2.399 12.459 1.073 16.872-3.34c4.698-4.207 7.812-9.4 12.56-10.98c-4.748-1.582-7.862-6.774-12.56-10.98"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.033 14.178a9.89 9.89 0 0 0-9.443 6.982h18.895a9.89 9.89 0 0 0-9.452-6.982M10.556 26.84a9.89 9.89 0 0 0 9.477 7.121a9.89 9.89 0 0 0 9.477-7.121z"></svg:path>`,
})
export class ArcticonsJrePointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
