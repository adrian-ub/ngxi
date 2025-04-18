import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKonzumIcon],svg[arcticons-konzum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.769 5.5l6.094 6.095l-6.094 6.095l-6.095-6.095zm4.403 37L23.565 27.893l7.912-7.912l-6.094-6.095l-8.627 8.627V12.205H8.137V42.5h8.619v-9.227l9.227 9.227z"></svg:path>`,
})
export class ArcticonsKonzumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
