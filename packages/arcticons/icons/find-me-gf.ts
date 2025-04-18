import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFindMeGfIcon],svg[arcticons-find-me-gf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.502c-7.23 0-13.09 5.86-13.09 13.09h0c0 10.25 10 22.61 12.61 25.63a.8.8 0 0 0 1.21 0c2.55-3 12.36-15.38 12.36-25.63c0-7.23-5.86-13.09-13.09-13.09"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.348 15.978a4.02 4.02 0 0 0-4.23-4.017c-2.17.114-3.798 2.066-3.798 4.244v3.728a4.02 4.02 0 0 0 4.014 4.022h0a4.02 4.02 0 0 0 4.014-4.022h-4.014m7.346-7.978h6m-6 6h3.9m-3.9-6v12"></svg:path>`,
})
export class ArcticonsFindMeGfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
