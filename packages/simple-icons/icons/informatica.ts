import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInformaticaIcon],svg[simple-icons-informatica-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 0l3.547 10.788l-4.5-1.255l-.25 4.43l7.121 4.035V18h.001l5.919-6zm-.64.65L.162 12l6.32 6.407L12 24l5.184-5.255l-9.736-3.856z"></svg:path>`,
})
export class SimpleIconsInformaticaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
