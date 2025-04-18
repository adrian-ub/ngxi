import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPepIcon],svg[arcticons-pep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2a22 22 0 1 0 22 22A22 22 0 0 0 24 2m-2.88 27.78h5.76m-5.76-11.59h5.76m-5.76 5.79h5.76"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.93 29.75V18.16h3.86a3.89 3.89 0 0 1 0 7.78H9.93m20.41 3.81V18.16h3.87a3.89 3.89 0 0 1 0 7.78h-3.87"></svg:path>`,
})
export class ArcticonsPepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
