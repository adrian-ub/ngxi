import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAsciinemaIcon],svg[simple-icons-asciinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.61 0v24l20.78-12zm4.15 7.2l4.3 2.48l-4.3 2.48zm6.79 3.92l1.53.88l-8.32 4.8v-1.76z"></svg:path>`,
})
export class SimpleIconsAsciinemaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
