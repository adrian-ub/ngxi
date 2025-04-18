import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLearnHtmlIcon],svg[arcticons-learn-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M30.7 23.7H17.3l.5 7.3h12.6l-.6 7.9l-5.8 1.6l-5.7-1.6l-.2-3.3"></svg:path><svg:path stroke-miterlimit="10" d="M36.4 7.5v9.9h5m-17.1-.1V7.5l4.9 9.9l4.9-9.9v9.9M15.5 7.5H22m-3.3 9.9V7.5m-12.1 0v9.9m6.6-9.9v9.9m-6.6-5h6.6"></svg:path></svg:g>`,
})
export class ArcticonsLearnHtmlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
