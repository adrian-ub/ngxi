import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNavigateIcon],svg[arcticons-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.036 16.206C10.346 9.808 16.552 5.5 24.004 5.5S37.66 9.808 40.97 16.206"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.093 21.408l17.911-8.47l17.911 8.47M7.217 24.802v14.136M29.6 24.802v14.136M18.408 24.802v14.136m22.383-14.136v14.136M6.077 42.5h35.846"></svg:path>`,
})
export class ArcticonsNavigateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
