import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFitbodIcon],svg[arcticons-fitbod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M44.5 24.06L34.197 41.71l-20.5-.06L3.5 23.94L13.803 6.29l20.5.06zm-41-.12l6.664.02"></svg:path><svg:path d="m16.066 13.87l1.052-1.8l13.835.04l6.883 11.93l-6.954 11.89l-13.835-.04l-6.883-11.93l3.087-5.279m17.702-6.571l3.35-5.76"></svg:path><svg:path d="M13.251 18.68h10.057l2.77-4.811H16.067"></svg:path></svg:g>`,
})
export class ArcticonsFitbodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
