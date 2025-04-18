import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMermaidIcon],svg[simple-icons-mermaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.99 2.115A12.22 12.22 0 0 0 12 10.149A12.22 12.22 0 0 0 .01 2.115a12.23 12.23 0 0 0 5.32 10.604a6.56 6.56 0 0 1 2.845 5.423v3.754h7.65v-3.754a6.56 6.56 0 0 1 2.844-5.423a12.22 12.22 0 0 0 5.32-10.604Z"></svg:path>`,
})
export class SimpleIconsMermaidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
