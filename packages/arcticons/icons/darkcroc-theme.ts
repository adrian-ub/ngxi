import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarkcrocThemeIcon],svg[arcticons-darkcroc-theme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.104 16.104L8.797 8.797m30.406 30.406l-7.488-7.564A10.861 10.861 0 1 1 24 13.136a11.82 11.82 0 0 1 7.804 3.058l7.474-7.32a21.5 21.5 0 1 0-.087 30.34M16.27 31.73l-7.473 7.473"></svg:path>`,
})
export class ArcticonsDarkcrocThemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
