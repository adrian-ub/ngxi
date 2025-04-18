import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartFitIcon],svg[arcticons-smart-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 18.886c-6.17 3.76-12.793 5.718-19.49 5.762c-6.704-.044-13.335-2.007-19.51-5.775c5.274 6.399 12.075 10.254 19.504 10.254c7.424 0 14.224-3.85 19.496-10.242Z"></svg:path>`,
})
export class ArcticonsSmartFitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
