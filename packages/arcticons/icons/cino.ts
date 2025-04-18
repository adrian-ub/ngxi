import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinoIcon],svg[arcticons-cino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" opacity=".9"><svg:path d="M29.752 18.976c-7.98-7.44-20.613-3.89-22.74 6.39c-.663 3.217-.127 6.625 1.514 9.598"></svg:path><svg:path d="M29.033 31.56c10.677-2.244 15.045-14.617 7.862-22.273c-2.25-2.394-5.344-3.918-8.72-4.287"></svg:path><svg:path d="M18.5 24.079c-3.916 10.183 4.1 20.571 14.43 18.7c3.231-.587 6.192-2.358 8.336-4.992"></svg:path></svg:g>`,
})
export class ArcticonsCinoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
