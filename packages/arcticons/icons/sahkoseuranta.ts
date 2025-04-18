import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSahkoseurantaIcon],svg[arcticons-sahkoseuranta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.583 4.69l-11.42 25.357l9.725-1.47L14.245 43.5h7.468c0-.845 13.213-23.111 16.124-25.503c-4.49 0-12.263 1.518-12.263 1.518c2.85-5.325 6.73-10.02 10.119-15.015H21.684z"></svg:path>`,
})
export class ArcticonsSahkoseurantaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
