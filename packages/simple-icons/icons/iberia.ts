import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsIberiaIcon],svg[simple-icons-iberia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.356 11.563c4.53-3.254 9.047-5.217 13.547-5.723L24 2.978c-6.662 0-7.57 1.457-9.873 3.752M0 21.021c14.719 0 18.189-3.46 20.213-8.17l1.7-4.434c-4.958.143-12.441 3.066-17.673 8.324"></svg:path>`,
})
export class SimpleIconsIberiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
