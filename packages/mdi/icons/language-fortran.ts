import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageFortranIcon],svg[mdi-language-fortran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2h1c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H5v2h9v-2h-2c-.55 0-1-.45-1-1v-4h2c.55 0 1 .45 1 1v2h2V8h-2v2c0 .55-.45 1-1 1h-2V6h5c1.11 0 2 1.34 2 3v1h2V4Z"></svg:path>`,
})
export class MdiLanguageFortranIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
