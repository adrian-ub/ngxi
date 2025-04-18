import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHtml5Icon],svg[simple-icons-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75l-.232-2.718l10.059.003l.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426l-2.91.804l-2.955-.81l-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443l.744-8.157z"></svg:path>`,
})
export class SimpleIconsHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
